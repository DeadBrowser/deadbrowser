import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 2026 Bot List (Facebook, Google, Twitter, TikTok, etc)
const BOT_AGENTS = [
    // Facebook / Meta
    'facebookexternalhit',
    'facebot',
    'meta-externalagent',
    // Google
    'googlebot',
    'adsbot-google',
    'mediapartners-google',
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
    // Generic
    'crawler',
    'spider',
    'robot',
    'python',
    'curl',
    'wget'
];

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));

    // Decide destination
    const destPath = isBot ? '/white-page' : '/casting';

    // If already there, pass through
    if (request.nextUrl.pathname === destPath) {
        return NextResponse.next();
    }

    // Rewrite logic (Redirect is safer for SEO cloaking, Rewrite hides the URL change)
    // For 'White Page' vs 'Casting', we usually want the URL to stay '/' but show different content.
    // BUT: Next.js Middleware Rewrite on '/' can be tricky with caching.
    // Strategy:
    // If requesting '/', perform rewrite.

    if (request.nextUrl.pathname === '/') {
        const response = NextResponse.rewrite(new URL(destPath, request.url));

        // CRITICAL: Prevent Shared Caching of this decision
        response.headers.set('Cache-Control', 'private, no-store, no-cache, must-revalidate');
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
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
