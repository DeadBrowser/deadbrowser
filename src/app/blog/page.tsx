'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Menu, X } from 'lucide-react';
import { getAllArticles } from '@/data/articles';
import FingerprintCollector from '@/components/FingerprintCollector';
import CtaPopup from '@/components/CtaPopup';

export default function BlogPage() {
    const articles = getAllArticles();
    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
        },
        logoIcon: {
            fontSize: '24px',
        },
        logoText: {
            fontSize: '20px',
            fontWeight: 700,
            color: 'white',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
        },
        navLink: {
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 500,
            transition: 'color 0.3s ease',
        },
        navLinkActive: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
        },
        youtubeBtn: {
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
        mobileMenuBtn: {
            display: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '10px',
            padding: '8px',
            color: 'white',
            cursor: 'pointer',
        },
        mobileMenu: {
            position: 'absolute' as const,
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        mobileNav: {
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center' as const,
        },
        heroSection: {
            padding: '24px',
        },
        heroCard: {
            position: 'relative' as const,
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        heroImage: {
            width: '100%',
            height: '450px',
            objectFit: 'cover' as const,
            transition: 'transform 0.5s ease',
        },
        heroOverlay: {
            position: 'absolute' as const,
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px',
            paddingTop: '100px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
        },
        categoryBadge: {
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            color: '#000',
            padding: '6px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.5px',
            marginBottom: '12px',
        },
        heroTitle: {
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            margin: '0 0 12px 0',
            lineHeight: 1.2,
            maxWidth: '700px',
        },
        heroExcerpt: {
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 0 16px 0',
            maxWidth: '600px',
            lineHeight: 1.6,
        },
        metaInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)',
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
        },
        mainContent: {
            padding: '0 24px 60px',
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
        articlesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
        },
        articleCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
        },
        articleImageContainer: {
            position: 'relative' as const,
            height: '200px',
            overflow: 'hidden',
        },
        articleImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover' as const,
            transition: 'transform 0.5s ease',
        },
        articleBadge: {
            position: 'absolute' as const,
            top: '12px',
            left: '12px',
            background: 'rgba(255, 204, 0, 0.9)',
            color: '#000',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase' as const,
        },
        articleContent: {
            padding: '20px',
        },
        articleTitle: {
            fontSize: '18px',
            fontWeight: 600,
            color: 'white',
            margin: '0 0 8px 0',
            lineHeight: 1.3,
            transition: 'color 0.3s ease',
        },
        articleExcerpt: {
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: '0 0 16px 0',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
        },
        articleFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
        },
        readMore: {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#ffcc00',
            fontWeight: 600,
            fontSize: '13px',
        },
        communitySection: {
            background: 'rgba(255, 204, 0, 0.08)',
            borderTop: '1px solid rgba(255, 204, 0, 0.2)',
            borderBottom: '1px solid rgba(255, 204, 0, 0.2)',
            padding: '60px 24px',
            textAlign: 'center' as const,
        },
        communityTitle: {
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
            margin: '0 0 12px 0',
        },
        communityText: {
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 0 24px 0',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        communityBtn: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
            color: '#000',
            padding: '14px 28px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            boxShadow: '0 8px 32px rgba(255, 204, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        footer: {
            padding: '24px',
            textAlign: 'center' as const,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
        },
    };

    // Add mobile styles via CSS-in-JS media queries handled naturally by responsive design
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <div style={styles.container}>
            <FingerprintCollector />
            <CtaPopup />

            {/* Header */}
            <header style={styles.header}>
                <Link href="/" style={styles.logo}>
                    <span style={styles.logoIcon}>🎥</span>
                    <span style={styles.logoText}>MrBeast Fan Hub</span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{ ...styles.nav, display: isMobile ? 'none' : 'flex' }}>
                    <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.youtubeBtn}>
                        Subscribe ▶
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    style={{ ...styles.mobileMenuBtn, display: isMobile ? 'block' : 'none' }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div style={styles.mobileMenu}>
                        <nav style={styles.mobileNav}>
                            <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.youtubeBtn}>
                                Subscribe ▶
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero / Featured Article */}
            <section style={styles.heroSection}>
                <Link href={`/blog/${featuredArticle.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={styles.heroCard}>
                        <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            style={styles.heroImage}
                        />
                        <div style={styles.heroOverlay}>
                            <span style={styles.categoryBadge}>{featuredArticle.category}</span>
                            <h1 style={styles.heroTitle}>{featuredArticle.title}</h1>
                            <p style={styles.heroExcerpt}>{featuredArticle.excerpt}</p>
                            <div style={styles.metaInfo}>
                                <span style={styles.metaItem}>
                                    <Calendar size={14} />
                                    {featuredArticle.date}
                                </span>
                                <span style={styles.metaItem}>
                                    <Clock size={14} />
                                    {featuredArticle.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Articles Grid */}
            <main style={styles.mainContent}>
                <h2 style={styles.sectionTitle}>
                    <span style={styles.sectionBadge}></span>
                    Latest News
                </h2>
                <div style={styles.articlesGrid}>
                    {otherArticles.map(article => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            style={styles.articleCard}
                        >
                            <div style={styles.articleImageContainer}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    style={styles.articleImage}
                                />
                                <span style={styles.articleBadge}>{article.category}</span>
                            </div>
                            <div style={styles.articleContent}>
                                <h3 style={styles.articleTitle}>{article.title}</h3>
                                <p style={styles.articleExcerpt}>{article.excerpt}</p>
                                <div style={styles.articleFooter}>
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

            {/* Game Banner Section */}
            <section style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
                borderTop: '1px solid rgba(102, 126, 234, 0.3)',
                borderBottom: '1px solid rgba(102, 126, 234, 0.3)',
                padding: '40px 24px',
                textAlign: 'center' as const,
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎮💰</div>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        margin: '0 0 8px 0',
                    }}>
                        Play MrBeast Money Catcher!
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: '0 0 20px 0',
                        lineHeight: 1.5,
                    }}>
                        Catch falling money & gold with your Louis Vuitton bag. How much can you collect?
                    </p>
                    <Link
                        href="/game"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            padding: '14px 28px',
                            borderRadius: '14px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '16px',
                            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                        }}
                    >
                        Play Now <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Fan Community Section */}
            <section style={styles.communitySection}>
                <h2 style={styles.communityTitle}>🌟 Join the MrBeast Fan Community!</h2>
                <p style={styles.communityText}>
                    Stay updated with the latest videos, behind-the-scenes content, and fan discussions.
                </p>
                <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener" style={styles.communityBtn}>
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
