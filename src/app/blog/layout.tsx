import { Metadata } from 'next';

// Blog-specific metadata - Google Ads compliant (no prize/gambling references)
export const metadata: Metadata = {
    title: {
        default: 'MrBeast Fan Hub | Latest News & Video Breakdowns',
        template: '%s | MrBeast Fan Hub'
    },
    description: 'Stay updated with the latest MrBeast videos, behind-the-scenes content, and fan community. An unofficial fan site dedicated to MrBeast content.',
    keywords: ['MrBeast', 'MrBeast videos', 'MrBeast news', 'Beast Philanthropy', 'MrBeast fan site', 'MrBeast YouTube'],
    openGraph: {
        title: 'MrBeast Fan Hub | Latest News & Videos',
        description: 'Stay updated with the latest MrBeast videos and behind-the-scenes content. Unofficial fan community.',
        type: 'website',
        images: [
            {
                url: 'https://i.ytimg.com/vi/l-nMKJ5J3Uc/maxresdefault.jpg',
                width: 1280,
                height: 720,
                alt: 'MrBeast Fan Hub - Latest News',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MrBeast Fan Hub | News & Videos',
        description: 'Latest MrBeast videos, news, and fan community content.',
        images: ['https://i.ytimg.com/vi/l-nMKJ5J3Uc/maxresdefault.jpg'],
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
