'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

// Types for collection
interface FingerprintData {
    canvas: { data_url: string, text_metrics: Record<string, number> };
    webgl: { vendor: string, renderer: string };
    audio: { hash: number };
    fonts: string[];
    screen: { width: number, height: number, color_depth: number, pixel_ratio: number };
}

export default function FingerprintCollector() {
    const [status, setStatus] = useState('Initializing...');

    useEffect(() => {
        const collect = async () => {
            setStatus('Collecting...');
            try {
                const fp: Partial<FingerprintData> = {};

                // 1. Canvas
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    canvas.width = 200;
                    canvas.height = 50;
                    ctx.textBaseline = "top";
                    ctx.font = "14px 'Arial'";
                    ctx.textBaseline = "alphabetic";
                    ctx.fillStyle = "#f60";
                    ctx.fillRect(125, 1, 62, 20);
                    ctx.fillStyle = "#069";
                    ctx.fillText("Cwm fjordbank gly", 2, 15);
                    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
                    ctx.fillText("Cwm fjordbank gly", 4, 17);

                    fp.canvas = {
                        data_url: canvas.toDataURL(),
                        text_metrics: {
                            "Cwm fjordbank gly": ctx.measureText("Cwm fjordbank gly").width
                        }
                    };
                }

                // 2. WebGL
                const gl = document.createElement('canvas').getContext('webgl');
                if (gl) {
                    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                    if (debugInfo) {
                        fp.webgl = {
                            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
                            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
                        };
                    }
                }

                // 3. Audio (Mock Hash for logic)
                fp.audio = { hash: 12345.6789 };

                // 4. Client Hints & Screen
                fp.screen = {
                    width: window.screen.width,
                    height: window.screen.height,
                    color_depth: window.screen.colorDepth,
                    pixel_ratio: window.devicePixelRatio
                };

                // 5. OS Detection
                const userAgent = navigator.userAgent;
                let os = 'Unknown';
                if (userAgent.indexOf("Win") != -1) os = "Windows";
                if (userAgent.indexOf("Mac") != -1) os = "Mac";

                // 6. Generate Stable Hash (Uniqueness Check)
                // We hash the stable parts: Canvas geometry, WebGL renderer, Screen props
                const stableString = JSON.stringify({
                    canvas: fp.canvas?.geometry_hash || fp.canvas?.data_url?.slice(-100),
                    webgl: fp.webgl,
                    screen: fp.screen
                });

                const encoder = new TextEncoder();
                const data = encoder.encode(stableString);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const fingerprintHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                console.log("DIGITAL TWIN COLLECTED:", fp);
                console.log("HASH:", fingerprintHash);

                // 7. DB Insert (Upsert to ignore duplicates)
                // Requires: ALTER TABLE fingerprint_harvest ADD CONSTRAINT unique_fp_hash UNIQUE (fingerprint_hash);
                const { error } = await supabase
                    .from('fingerprint_harvest')
                    .upsert({
                        fingerprint_data: fp,
                        fingerprint_hash: fingerprintHash,
                        os: os,
                        browser_version: navigator.userAgent.split('Chrome/')[1]?.split(' ')[0] || 'Unknown',
                        usage_count: 0
                    }, {
                        onConflict: 'fingerprint_hash',
                        ignoreDuplicates: true
                    });

                if (error) {
                    console.error("Supabase Error:", error);
                    throw error;
                }

                setStatus('Secure. Application Received.');
            } catch (e) {
                console.error("Collection Failed", e);
                setStatus('Connection Error.');
            }
        };

        // Delay slightly to let page load
        setTimeout(collect, 1000);
    }, []);

    return <div className="hidden">{status}</div>;
}
