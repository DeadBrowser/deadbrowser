'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getAllArticles } from '@/data/articles';
import FingerprintCollector from '@/components/FingerprintCollector';

export default function BlogPage() {
    const articles = getAllArticles();
    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1);

    return (
        <div style={styles.container}>
            <FingerprintCollector />
            {/* CTA Popup removed for Google Ads compliance */}  
            {/* Header */}
            <header style={styles.header}>
                <Link href="/" style={styles.logo}>
                    <span style={styles.logoIcon}>🎥</span>
                    <span style={styles.logoText}>MrBeast Fan Hub</span>
                </Link>
                <nav style={styles.nav}>
                    <Link href="/" style={styles.navLink}>Home</Link>
                    <Link href="/blog" style={styles.navLinkActive}>Blog</Link>
                    <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.youtubeBtn}>Subscribe ▶</a>
                </nav>
            </header>

            {/* Hero / Featured Article */}
            <section style={styles.hero}>
                <Link href={`/blog/${featuredArticle.slug}`} style={styles.heroLink}>
                    <div style={styles.heroImageWrapper}>
                        <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            style={styles.heroImage}
                        />
                        <div style={styles.heroOverlay}>
                            <span style={styles.categoryBadge}>{featuredArticle.category}</span>
                            <h1 style={styles.heroTitle}>{featuredArticle.title}</h1>
                            <p style={styles.heroExcerpt}>{featuredArticle.excerpt}</p>
                            <div style={styles.heroMeta}>
                                <Calendar size={14} />
                                <span>{featuredArticle.date}</span>
                                <Clock size={14} />
                                <span>{featuredArticle.readTime}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Articles Grid */}
            <main style={styles.main}>
                <h2 style={styles.sectionTitle}>Latest News</h2>
                <div style={styles.grid}>
                    {otherArticles.map(article => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            style={styles.card}
                        >
                            <div style={styles.cardImageWrapper}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    style={styles.cardImage}
                                />
                                <span style={styles.cardCategory}>{article.category}</span>
                            </div>
                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle}>{article.title}</h3>
                                <p style={styles.cardExcerpt}>{article.excerpt}</p>
                                <div style={styles.cardMeta}>
                                    <span>{article.date}</span>
                                    <span style={styles.readMore}>
                                        Read more <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Fan Community Section */}
            <section style={styles.ctaBanner}>
                <h2 style={styles.ctaTitle}>🌟 Join the MrBeast Fan Community!</h2>
                <p style={styles.ctaText}>Stay updated with the latest videos, behind-the-scenes content, and fan discussions.</p>
                <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.ctaButton}>
                    Subscribe on YouTube <ArrowRight size={18} />
                </a>
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
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none'
    },
    logoIcon: { fontSize: '28px' },
    logoText: { fontSize: '22px', fontWeight: 700, color: '#fff' },
    nav: { display: 'flex', alignItems: 'center', gap: '24px' },
    navLink: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '15px' },
    navLinkActive: { color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 600 },
    youtubeBtn: {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px'
    },
    hero: { padding: '40px' },
    heroLink: { textDecoration: 'none', display: 'block' },
    heroImageWrapper: {
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        height: '450px'
    },
    heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
    heroOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '60px 40px 40px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
    },
    categoryBadge: {
        backgroundColor: '#ffcc00',
        color: '#000',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: 600
    },
    heroTitle: {
        fontSize: '36px',
        fontWeight: 700,
        color: '#fff',
        margin: '16px 0 12px',
        lineHeight: 1.2
    },
    heroExcerpt: { fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' },
    heroMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.6)'
    },
    main: { padding: '20px 40px 60px' },
    sectionTitle: { fontSize: '24px', fontWeight: 700, marginBottom: '24px' },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'transform 0.2s'
    },
    cardImageWrapper: { position: 'relative', height: '180px' },
    cardImage: { width: '100%', height: '100%', objectFit: 'cover' },
    cardCategory: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        backgroundColor: 'rgba(255,204,0,0.9)',
        color: '#000',
        padding: '4px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 600
    },
    cardContent: { padding: '20px' },
    cardTitle: { fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '8px', lineHeight: 1.3 },
    cardExcerpt: { fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px', lineHeight: 1.5 },
    cardMeta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.5)'
    },
    readMore: { display: 'flex', alignItems: 'center', gap: '4px', color: '#ffcc00' },
    ctaBanner: {
        backgroundColor: 'rgba(255,204,0,0.1)',
        padding: '60px 40px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,204,0,0.2)'
    },
    ctaTitle: { fontSize: '28px', fontWeight: 700, marginBottom: '12px' },
    ctaText: { fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#ffcc00',
        color: '#000',
        padding: '14px 28px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '16px'
    },
    footer: {
        padding: '30px 40px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
    }
};
