'use client';

import React from 'react';

// Article data for the blog
const articles = [
    {
        id: 1,
        category: 'PHILANTHROPY',
        title: 'How Modern Philanthropy Is Changing Lives in 2026',
        excerpt: 'From direct giving to impact investing, discover how the world\'s most generous individuals are reshaping charitable work for the digital age.',
        author: 'Sarah Mitchell',
        date: 'February 4, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop',
        featured: true
    },
    {
        id: 2,
        category: 'ENVIRONMENT',
        title: 'Ocean Cleanup Initiative Removes 10 Million Tonnes of Plastic',
        excerpt: 'The ambitious project reaches a historic milestone, with innovative technology now deployed across the Pacific.',
        author: 'James Chen',
        date: 'February 3, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=400&fit=crop'
    },
    {
        id: 3,
        category: 'EDUCATION',
        title: 'Digital Literacy Programs Reach 50 Million Students Worldwide',
        excerpt: 'A coalition of tech companies and NGOs celebrates a major achievement in bridging the digital divide.',
        author: 'Emma Thompson',
        date: 'February 2, 2026',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop'
    },
    {
        id: 4,
        category: 'HEALTH',
        title: 'Global Health Watch: Malaria Deaths Drop by 60% in Africa',
        excerpt: 'New vaccine distribution programs and mosquito net initiatives show unprecedented success in fighting the disease.',
        author: 'Dr. Michael Okonjo',
        date: 'February 1, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop'
    },
    {
        id: 5,
        category: 'SUSTAINABILITY',
        title: 'Green Energy Revolution: Solar Now Cheaper Than Fossil Fuels',
        excerpt: 'A landmark report confirms that renewable energy has become the most economical choice for new power generation.',
        author: 'Lisa Park',
        date: 'January 31, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop'
    },
    {
        id: 6,
        category: 'COMMUNITY',
        title: 'Local Heroes: How Community Gardens Are Feeding Cities',
        excerpt: 'Urban farming initiatives provide fresh produce and bring neighborhoods together across the UK.',
        author: 'Robert Williams',
        date: 'January 30, 2026',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop'
    }
];

export default function WhitePage() {
    const featuredArticle = articles.find(a => a.featured);
    const regularArticles = articles.filter(a => !a.featured);

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.headerInner}>
                    <div style={styles.logo}>
                        <span style={styles.logoIcon}>🌍</span>
                        <span style={styles.logoText}>Global Impact</span>
                    </div>
                    <nav style={styles.nav}>
                        <a href="#" style={styles.navLink}>Home</a>
                        <a href="#" style={styles.navLink}>Philanthropy</a>
                        <a href="#" style={styles.navLink}>Environment</a>
                        <a href="#" style={styles.navLink}>Health</a>
                        <a href="#" style={styles.navLink}>About</a>
                    </nav>
                </div>
            </header>

            {/* Hero / Featured Article */}
            {featuredArticle && (
                <section style={styles.hero}>
                    <div style={styles.heroOverlay}>
                        <span style={styles.categoryBadge}>{featuredArticle.category}</span>
                        <h1 style={styles.heroTitle}>{featuredArticle.title}</h1>
                        <p style={styles.heroExcerpt}>{featuredArticle.excerpt}</p>
                        <div style={styles.heroMeta}>
                            <span>{featuredArticle.author}</span>
                            <span style={styles.metaDot}>•</span>
                            <span>{featuredArticle.date}</span>
                            <span style={styles.metaDot}>•</span>
                            <span>{featuredArticle.readTime}</span>
                        </div>
                        <button style={styles.readMoreBtn}>Read Full Article</button>
                    </div>
                    <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        style={styles.heroImage}
                    />
                </section>
            )}

            {/* Main Content */}
            <main style={styles.main}>
                <h2 style={styles.sectionTitle}>Latest Stories</h2>

                <div style={styles.articlesGrid}>
                    {regularArticles.map(article => (
                        <article key={article.id} style={styles.articleCard}>
                            <div style={styles.articleImageWrapper}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    style={styles.articleImage}
                                />
                                <span style={styles.articleCategory}>{article.category}</span>
                            </div>
                            <div style={styles.articleContent}>
                                <h3 style={styles.articleTitle}>{article.title}</h3>
                                <p style={styles.articleExcerpt}>{article.excerpt}</p>
                                <div style={styles.articleMeta}>
                                    <span style={styles.articleAuthor}>{article.author}</span>
                                    <span style={styles.articleDate}>{article.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Section */}
                <section style={styles.newsletter}>
                    <h3 style={styles.newsletterTitle}>Stay Informed</h3>
                    <p style={styles.newsletterText}>
                        Get the latest stories on philanthropy, sustainability, and global impact delivered to your inbox.
                    </p>
                    <div style={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={styles.newsletterInput}
                        />
                        <button style={styles.newsletterBtn}>Subscribe</button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <div style={styles.footerBrand}>
                        <span style={styles.logoIcon}>🌍</span>
                        <span style={styles.footerLogoText}>Global Impact</span>
                        <p style={styles.footerTagline}>
                            Covering stories that matter. Making the world a better place, one article at a time.
                        </p>
                    </div>
                    <div style={styles.footerLinks}>
                        <div style={styles.footerColumn}>
                            <h4 style={styles.footerHeading}>Categories</h4>
                            <a href="#" style={styles.footerLink}>Philanthropy</a>
                            <a href="#" style={styles.footerLink}>Environment</a>
                            <a href="#" style={styles.footerLink}>Education</a>
                            <a href="#" style={styles.footerLink}>Health</a>
                        </div>
                        <div style={styles.footerColumn}>
                            <h4 style={styles.footerHeading}>Company</h4>
                            <a href="#" style={styles.footerLink}>About Us</a>
                            <a href="#" style={styles.footerLink}>Contact</a>
                            <a href="#" style={styles.footerLink}>Privacy Policy</a>
                            <a href="#" style={styles.footerLink}>Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div style={styles.footerBottom}>
                    <p>© 2026 Global Impact News. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

// Inline styles for the white page
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        minHeight: '100vh',
        lineHeight: 1.6
    },
    header: {
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        padding: '16px 24px',
        position: 'sticky' as const,
        top: 0,
        zIndex: 100
    },
    headerInner: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '24px',
        fontWeight: 700
    },
    logoIcon: {
        fontSize: '28px'
    },
    logoText: {
        color: '#2d5a3d'
    },
    nav: {
        display: 'flex',
        gap: '24px'
    },
    navLink: {
        color: '#666',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 500,
        transition: 'color 0.2s'
    },
    hero: {
        position: 'relative' as const,
        height: '500px',
        overflow: 'hidden'
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const
    },
    heroOverlay: {
        position: 'absolute' as const,
        bottom: 0,
        left: 0,
        right: 0,
        padding: '60px 40px 40px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        color: '#fff',
        zIndex: 2
    },
    categoryBadge: {
        backgroundColor: '#2d5a3d',
        color: '#fff',
        padding: '6px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.5px'
    },
    heroTitle: {
        fontSize: '42px',
        fontWeight: 700,
        margin: '16px 0 12px',
        maxWidth: '800px',
        lineHeight: 1.2
    },
    heroExcerpt: {
        fontSize: '18px',
        opacity: 0.9,
        maxWidth: '600px',
        marginBottom: '16px'
    },
    heroMeta: {
        fontSize: '14px',
        opacity: 0.8,
        marginBottom: '20px'
    },
    metaDot: {
        margin: '0 8px'
    },
    readMoreBtn: {
        backgroundColor: '#fff',
        color: '#1a1a1a',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '6px',
        fontSize: '15px',
        fontWeight: 600,
        cursor: 'pointer'
    },
    main: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 24px'
    },
    sectionTitle: {
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '32px',
        color: '#1a1a1a'
    },
    articlesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '32px'
    },
    articleCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer'
    },
    articleImageWrapper: {
        position: 'relative' as const,
        height: '200px',
        overflow: 'hidden'
    },
    articleImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const
    },
    articleCategory: {
        position: 'absolute' as const,
        top: '12px',
        left: '12px',
        backgroundColor: 'rgba(45, 90, 61, 0.9)',
        color: '#fff',
        padding: '4px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.5px'
    },
    articleContent: {
        padding: '20px'
    },
    articleTitle: {
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '10px',
        color: '#1a1a1a',
        lineHeight: 1.4
    },
    articleExcerpt: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px',
        lineHeight: 1.5
    },
    articleMeta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '13px',
        color: '#999'
    },
    articleAuthor: {
        fontWeight: 500
    },
    articleDate: {},
    newsletter: {
        marginTop: '64px',
        padding: '48px',
        backgroundColor: '#f8f9fa',
        borderRadius: '16px',
        textAlign: 'center' as const
    },
    newsletterTitle: {
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '12px',
        color: '#1a1a1a'
    },
    newsletterText: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '24px',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    newsletterForm: {
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        maxWidth: '450px',
        margin: '0 auto'
    },
    newsletterInput: {
        flex: 1,
        padding: '14px 18px',
        fontSize: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        outline: 'none'
    },
    newsletterBtn: {
        backgroundColor: '#2d5a3d',
        color: '#fff',
        border: 'none',
        padding: '14px 28px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: 600,
        cursor: 'pointer'
    },
    footer: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '48px 24px 24px'
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap' as const,
        gap: '40px',
        paddingBottom: '32px',
        borderBottom: '1px solid #333'
    },
    footerBrand: {
        maxWidth: '300px'
    },
    footerLogoText: {
        fontSize: '20px',
        fontWeight: 700,
        marginLeft: '8px'
    },
    footerTagline: {
        marginTop: '12px',
        fontSize: '14px',
        color: '#999',
        lineHeight: 1.6
    },
    footerLinks: {
        display: 'flex',
        gap: '64px'
    },
    footerColumn: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px'
    },
    footerHeading: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#fff',
        marginBottom: '4px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px'
    },
    footerLink: {
        color: '#999',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.2s'
    },
    footerBottom: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '24px',
        textAlign: 'center' as const,
        fontSize: '13px',
        color: '#666'
    }
};
