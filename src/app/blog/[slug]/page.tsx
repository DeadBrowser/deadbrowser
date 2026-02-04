'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/data/articles';
import FingerprintCollector from '@/components/FingerprintCollector';
import CtaPopup from '@/components/CtaPopup';

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = getArticleBySlug(slug);
    const allArticles = getAllArticles();
    const relatedArticles = allArticles.filter(a => a.slug !== slug).slice(0, 3);

    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a0a14 0%, #0f1a2e 50%, #0a0a14 100%)',
            color: 'white',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
            WebkitFontSmoothing: 'antialiased',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(10, 10, 20, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'sticky' as const,
            top: 0,
            zIndex: 100,
        },
        backLink: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 500,
            transition: 'color 0.3s ease',
        },
        subscribeBtn: {
            background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        article: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 24px 60px',
        },
        heroImageContainer: {
            position: 'relative' as const,
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '32px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        },
        heroImage: {
            width: '100%',
            height: 'auto',
            aspectRatio: '16/9',
            objectFit: 'cover' as const,
        },
        categoryBadge: {
            position: 'absolute' as const,
            top: '16px',
            left: '16px',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.5px',
            boxShadow: '0 4px 15px rgba(255, 204, 0, 0.4)',
        },
        articleHeader: {
            marginBottom: '32px',
        },
        title: {
            fontSize: '36px',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '20px',
        },
        metaRow: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap' as const,
            gap: '20px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
        },
        shareBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '8px 16px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            marginLeft: 'auto',
            transition: 'all 0.3s ease',
        },
        content: {
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.85)',
        },
        youtubeBox: {
            marginTop: '40px',
            padding: '32px',
            background: 'rgba(255, 0, 0, 0.08)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 0, 0, 0.15)',
            textAlign: 'center' as const,
        },
        youtubeTitle: {
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px',
        },
        videoContainer: {
            position: 'relative' as const,
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '16px',
            marginBottom: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
        },
        videoIframe: {
            position: 'absolute' as const,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            border: 'none',
        },
        watchBtn: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '15px',
            boxShadow: '0 8px 32px rgba(255, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        communityBox: {
            marginTop: '48px',
            padding: '40px',
            background: 'rgba(255, 204, 0, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 204, 0, 0.2)',
            textAlign: 'center' as const,
        },
        communityTitle: {
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '12px',
        },
        communityText: {
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '20px',
        },
        communityBtn: {
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            color: '#000',
            padding: '14px 32px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            boxShadow: '0 8px 32px rgba(255, 204, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        relatedSection: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 24px 80px',
        },
        sectionTitle: {
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        sectionBadge: {
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            width: '4px',
            height: '24px',
            borderRadius: '2px',
        },
        relatedGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
        },
        relatedCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
        },
        relatedImage: {
            width: '100%',
            height: '160px',
            objectFit: 'cover' as const,
        },
        relatedContent: {
            padding: '16px',
        },
        relatedTitle: {
            fontSize: '15px',
            fontWeight: 600,
            color: 'white',
            lineHeight: 1.4,
            margin: '0 0 12px 0',
        },
        relatedMeta: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
        },
        readMore: {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#ffcc00',
            fontWeight: 600,
        },
        footer: {
            padding: '24px',
            textAlign: 'center' as const,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
        },
        notFoundContainer: {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            gap: '20px',
            background: 'linear-gradient(135deg, #0a0a14 0%, #0f1a2e 50%, #0a0a14 100%)',
            color: 'white',
        },
        notFoundTitle: {
            fontSize: '24px',
            fontWeight: 700,
        },
        notFoundLink: {
            color: '#ffcc00',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
        },
    };

    // Add CSS for content styling
    const contentCSS = `
        .article-content p { margin-bottom: 24px; }
        .article-content h2 { font-size: 24px; font-weight: 700; color: white; margin-top: 40px; margin-bottom: 16px; }
        .article-content ul { margin-bottom: 24px; padding-left: 20px; }
        .article-content li { margin-bottom: 8px; }
        .article-content blockquote { border-left: 4px solid #ffcc00; padding-left: 20px; font-style: italic; color: rgba(255, 255, 255, 0.7); }
        .article-content a { color: #ffcc00; text-decoration: none; }
        .article-content a:hover { text-decoration: underline; }
    `;

    if (!article) {
        return (
            <div style={styles.notFoundContainer}>
                <h1 style={styles.notFoundTitle}>Article not found</h1>
                <Link href="/blog" style={styles.notFoundLink}>← Back to Blog</Link>
            </div>
        );
    }

    const getYouTubeId = (url: string) => {
        try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get('v');
        } catch {
            return url.split('v=')[1];
        }
    };

    return (
        <div style={styles.container}>
            <style dangerouslySetInnerHTML={{ __html: contentCSS }} />
            <FingerprintCollector />
            <CtaPopup />

            {/* Header */}
            <header style={styles.header}>
                <Link href="/blog" style={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back to Blog
                </Link>
                <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.subscribeBtn}>
                    Subscribe ▶
                </a>
            </header>

            {/* Article */}
            <article style={styles.article}>
                {/* Hero Image */}
                <div style={styles.heroImageContainer}>
                    <img src={article.image} alt={article.title} style={styles.heroImage} />
                    <span style={styles.categoryBadge}>{article.category}</span>
                </div>

                {/* Article Header */}
                <div style={styles.articleHeader}>
                    <h1 style={styles.title}>{article.title}</h1>
                    <div style={styles.metaRow}>
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
                    className="article-content"
                    style={styles.content}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* YouTube Video Embed */}
                {article.youtubeUrl && (
                    <div style={styles.youtubeBox}>
                        <h3 style={styles.youtubeTitle}>📺 Watch The Video</h3>
                        <div style={styles.videoContainer}>
                            <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeId(article.youtubeUrl)}`}
                                style={styles.videoIframe}
                                title={article.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <a href={article.youtubeUrl} target="_blank" rel="noopener noreferrer" style={styles.watchBtn}>
                            🔗 Watch on YouTube
                        </a>
                    </div>
                )}

                {/* Fan Community Box */}
                <div style={styles.communityBox}>
                    <h3 style={styles.communityTitle}>🎥 Love MrBeast Content?</h3>
                    <p style={styles.communityText}>
                        Subscribe to MrBeast&apos;s YouTube channel for more amazing videos and epic challenges!
                    </p>
                    <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.communityBtn}>
                        Subscribe on YouTube
                    </a>
                </div>
            </article>

            {/* Related Articles */}
            <section style={styles.relatedSection}>
                <h2 style={styles.sectionTitle}>
                    <span style={styles.sectionBadge}></span>
                    More Articles
                </h2>
                <div style={styles.relatedGrid}>
                    {relatedArticles.map(a => (
                        <Link key={a.slug} href={`/blog/${a.slug}`} style={styles.relatedCard}>
                            <img src={a.image} alt={a.title} style={styles.relatedImage} />
                            <div style={styles.relatedContent}>
                                <h4 style={styles.relatedTitle}>{a.title}</h4>
                                <div style={styles.relatedMeta}>
                                    <span>{a.date}</span>
                                    <span style={styles.readMore}>
                                        Read more <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
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
