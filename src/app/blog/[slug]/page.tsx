'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/data/articles';
import FingerprintCollector from '@/components/FingerprintCollector';

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = getArticleBySlug(slug);
    const allArticles = getAllArticles();
    const relatedArticles = allArticles.filter(a => a.slug !== slug).slice(0, 3);

    if (!article) {
        return (
            <div style={styles.notFound}>
                <h1>Article not found</h1>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <FingerprintCollector />
            {/* CTA Popup removed for Google Ads compliance */}

            {/* Header */}
            <header style={styles.header}>
                <Link href="/blog" style={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back to Blog
                </Link>
                <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.applyBtn}>Subscribe ▶</a>
            </header>

            {/* Article */}
            <article style={styles.article}>
                {/* Hero Image */}
                <div style={styles.heroWrapper}>
                    <img src={article.image} alt={article.title} style={styles.heroImage} />
                    <span style={styles.category}>{article.category}</span>
                </div>

                {/* Article Header */}
                <div style={styles.articleHeader}>
                    <h1 style={styles.title}>{article.title}</h1>
                    <div style={styles.meta}>
                        <span style={styles.metaItem}>
                            <Calendar size={16} />
                            {article.date}
                        </span>
                        <span style={styles.metaItem}>
                            <Clock size={16} />
                            {article.readTime}
                        </span>
                        <button style={styles.shareBtn}>
                            <Share2 size={16} />
                            Share
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <div
                    style={styles.content}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* YouTube Video Embed */}
                {article.youtubeUrl && (
                    <div style={styles.youtubeSection}>
                        <h3 style={styles.youtubeTitle}>📺 Watch The Video</h3>
                        <div style={styles.videoWrapper}>
                            <iframe
                                src={`https://www.youtube.com/embed/${(() => {
                                    try {
                                        const url = new URL(article.youtubeUrl);
                                        return url.searchParams.get('v');
                                    } catch {
                                        return article.youtubeUrl.split('v=')[1];
                                    }
                                })()}`}
                                style={styles.videoIframe}
                                title={article.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <a
                            href={article.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.youtubeButton}
                        >
                            🔗 Watch on YouTube
                        </a>
                    </div>
                )}

                {/* Fan Community Box */}
                <div style={styles.ctaBox}>
                    <h3 style={styles.ctaTitle}>🎥 Love MrBeast Content?</h3>
                    <p style={styles.ctaText}>
                        Subscribe to MrBeast&apos;s YouTube channel for more amazing videos and epic challenges!
                    </p>
                    <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.ctaButton}>
                        Subscribe on YouTube
                    </a>
                </div>
            </article>

            {/* Related Articles */}
            <section style={styles.related}>
                <h2 style={styles.relatedTitle}>More Articles</h2>
                <div style={styles.relatedGrid}>
                    {relatedArticles.map(a => (
                        <Link key={a.slug} href={`/blog/${a.slug}`} style={styles.relatedCard}>
                            <img src={a.image} alt={a.title} style={styles.relatedImage} />
                            <h4 style={styles.relatedCardTitle}>{a.title}</h4>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>© 2026 MrBeast Fan Hub. Unofficial fan site. Not affiliated with or endorsed by MrBeast or Night Media.</p>
            </footer>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#0a0a0f',
        color: '#fff',
        minHeight: '100vh'
    },
    notFound: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '20px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        fontSize: '15px'
    },
    applyBtn: {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px'
    },
    article: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px'
    },
    heroWrapper: {
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '32px'
    },
    heroImage: {
        width: '100%',
        height: '400px',
        objectFit: 'cover'
    },
    category: {
        position: 'absolute',
        top: '16px',
        left: '16px',
        backgroundColor: '#ffcc00',
        color: '#000',
        padding: '6px 14px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: 600
    },
    articleHeader: {
        marginBottom: '32px'
    },
    title: {
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: '20px'
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px'
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
    },
    shareBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        color: 'rgba(255,255,255,0.7)',
        padding: '8px 14px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px'
    },
    content: {
        fontSize: '17px',
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.85)'
    },
    youtubeSection: {
        marginTop: '40px',
        padding: '24px',
        backgroundColor: 'rgba(255,0,0,0.05)',
        borderRadius: '16px',
        border: '1px solid rgba(255,0,0,0.15)',
        textAlign: 'center' as const
    },
    youtubeTitle: {
        fontSize: '22px',
        fontWeight: 700,
        marginBottom: '20px',
        color: '#fff'
    },
    videoWrapper: {
        position: 'relative' as const,
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '12px',
        marginBottom: '20px'
    },
    videoIframe: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '12px'
    },
    youtubeButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '15px',
        transition: 'background-color 0.2s'
    },
    ctaBox: {
        marginTop: '48px',
        padding: '32px',
        backgroundColor: 'rgba(255,204,0,0.1)',
        borderRadius: '16px',
        textAlign: 'center',
        border: '1px solid rgba(255,204,0,0.2)'
    },
    ctaTitle: {
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '12px'
    },
    ctaText: {
        fontSize: '15px',
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '20px'
    },
    ctaButton: {
        display: 'inline-block',
        backgroundColor: '#ffcc00',
        color: '#000',
        padding: '14px 32px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '16px'
    },
    related: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px 60px'
    },
    relatedTitle: {
        fontSize: '22px',
        fontWeight: 700,
        marginBottom: '24px'
    },
    relatedGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
    },
    relatedCard: {
        textDecoration: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.05)'
    },
    relatedImage: {
        width: '100%',
        height: '160px',
        objectFit: 'cover'
    },
    relatedCardTitle: {
        padding: '16px',
        fontSize: '15px',
        fontWeight: 600,
        color: '#fff',
        lineHeight: 1.4
    },
    footer: {
        padding: '30px 40px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
    }
};
