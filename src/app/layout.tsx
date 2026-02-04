import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mrbeast.family/'),
  title: {
    default: "MrBeast News & Challenges 2026 | Latest Updates & How to Apply",
    template: "%s | MrBeast News"
  },
  description: "Get the latest MrBeast challenge updates, behind-the-scenes news, and apply for upcoming UK events! Win up to £1,000,000 in epic competitions.",
  keywords: [
    "MrBeast", "MrBeast challenges", "MrBeast UK", "MrBeast 2026",
    "MrBeast apply", "MrBeast competitions", "MrBeast giveaway",
    "Beast Philanthropy", "MrBeast news", "MrBeast latest video",
    "YouTube challenges", "win money", "MrBeast UK tour"
  ],
  authors: [{ name: "MrBeast News Team" }],
  creator: "MrBeast News",
  publisher: "MrBeast News",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mrbeastnews.com',
    siteName: 'MrBeast News',
    title: 'MrBeast News & Challenges 2026 | Latest Updates',
    description: 'Get the latest MrBeast challenge updates and apply for upcoming UK events! Win up to £1,000,000 in epic competitions.',
    images: [
      {
        url: 'https://i.ytimg.com/vi/U0Qe1Uk1VaM/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'MrBeast News - Latest Challenges and Updates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrBeast News & Challenges 2026',
    description: 'Get the latest MrBeast updates and apply for UK events! Win up to £1,000,000!',
    images: ['https://i.ytimg.com/vi/U0Qe1Uk1VaM/maxresdefault.jpg'],
    creator: '@MrBeast',
  },
  alternates: {
    canonical: 'https://mrbeastnews.com',
  },
  category: 'entertainment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white selection:bg-white selection:text-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
