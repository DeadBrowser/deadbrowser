import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MrBeast News & Blog | Latest Challenge Updates',
    description: 'Stay updated with the latest MrBeast challenges, philanthropy projects, and behind-the-scenes news. Read exclusive articles and video breakdowns.',
    keywords: ['MrBeast blog', 'MrBeast news', 'MrBeast videos', 'MrBeast challenges', 'Beast Philanthropy'],
    openGraph: {
        title: 'MrBeast News & Blog | Latest Updates',
        description: 'Stay updated with the latest MrBeast challenges and philanthropy projects.',
        type: 'website',
        images: [
            {
                url: 'https://i.ytimg.com/vi/l-nMKJ5J3Uc/maxresdefault.jpg',
                width: 1280,
                height: 720,
                alt: 'MrBeast Blog - Latest News',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MrBeast News & Blog',
        description: 'Latest MrBeast challenges, news, and video breakdowns.',
        images: ['https://i.ytimg.com/vi/l-nMKJ5J3Uc/maxresdefault.jpg'],
    },
};
