'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, ArrowRight } from 'lucide-react';

interface CtaPopupProps {
    intervalMs?: number; // Default 60000 (1 minute)
}

export default function CtaPopup({ intervalMs = 60000 }: CtaPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosedManually, setHasClosedManually] = useState(false);

    useEffect(() => {
        // Show popup after first interval
        const timer = setInterval(() => {
            if (!hasClosedManually) {
                setIsVisible(true);
            }
        }, intervalMs);

        // Also show after initial delay (10 seconds for first visit)
        const initialTimer = setTimeout(() => {
            if (!hasClosedManually) {
                setIsVisible(true);
            }
        }, 10000);

        return () => {
            clearInterval(timer);
            clearTimeout(initialTimer);
        };
    }, [intervalMs, hasClosedManually]);

    const handleClose = () => {
        setIsVisible(false);
        setHasClosedManually(true);
        // Reset after 2 minutes so it can show again
        setTimeout(() => setHasClosedManually(false), 120000);
    };

    const handleApply = () => {
        window.location.href = '/casting';
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="cta-popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={styles.overlay}
                >
                    <motion.div
                        className="cta-popup"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={styles.popup}
                    >
                        {/* Close button */}
                        <button onClick={handleClose} style={styles.closeBtn}>
                            <X size={20} />
                        </button>

                        {/* Icon */}
                        <div style={styles.iconWrapper}>
                            <Trophy size={32} color="#ffcc00" />
                        </div>

                        {/* Content */}
                        <h2 style={styles.title}>Win £1,000,000!</h2>
                        <p style={styles.subtitle}>
                            MrBeast UK Challenge applications are now open!
                        </p>
                        <p style={styles.description}>
                            Be part of history. Apply now for a chance to compete in the biggest MrBeast event ever held in the UK.
                        </p>

                        {/* CTA Button */}
                        <button onClick={handleApply} style={styles.ctaBtn}>
                            Apply Now
                            <ArrowRight size={18} />
                        </button>

                        {/* Subtle dismiss */}
                        <button onClick={handleClose} style={styles.dismissLink}>
                            Maybe later
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
    },
    popup: {
        backgroundColor: 'rgba(20, 20, 30, 0.95)',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
    },
    closeBtn: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'none',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'rgba(255, 255, 255, 0.6)',
        transition: 'all 0.2s'
    },
    iconWrapper: {
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 204, 0, 0.05))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
    },
    title: {
        fontSize: '28px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '8px',
        background: 'linear-gradient(135deg, #fff, #ffcc00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    subtitle: {
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: '12px',
        fontWeight: 500
    },
    description: {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '28px',
        lineHeight: 1.6
    },
    ctaBtn: {
        width: '100%',
        padding: '16px 24px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#000',
        background: 'linear-gradient(135deg, #ffcc00, #ff9500)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'transform 0.2s, box-shadow 0.2s'
    },
    dismissLink: {
        marginTop: '16px',
        background: 'none',
        border: 'none',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '13px',
        cursor: 'pointer',
        textDecoration: 'underline'
    }
};
