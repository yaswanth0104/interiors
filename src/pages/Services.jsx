import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

const Services = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1rem 1rem 4rem' }}>
                {/* Page Title & Intro Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.45rem 1.4rem',
                            borderRadius: '50px',
                            background: 'rgba(212, 175, 55, 0.12)',
                            border: '1px solid rgba(212, 175, 55, 0.35)',
                            color: 'var(--accent-gold)',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            marginBottom: '1.4rem'
                        }}
                    >
                        <Sparkles size={16} /> BESPOKE INTERIOR ARCHITECTURE
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
                            fontWeight: '900',
                            color: '#F8F5EE',
                            marginBottom: '1.2rem',
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Our Crafted <span className="gold-text">Services.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            fontSize: '1.18rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.8'
                        }}
                    >
                        Explore our royal portfolio of custom interior solutions, engineered with precision, premium marine-grade materials, and timeless aesthetic excellence.
                    </motion.p>
                </div>

                {/* Elegant Service Cards Grid - Single Image Architecture */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {servicesData.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <Link
                                to={`/services/${cat.id}`}
                                className="glass-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    textDecoration: 'none',
                                    height: '100%',
                                    borderRadius: '24px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(22, 24, 32, 0.75)',
                                    backdropFilter: 'blur(16px)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {/* Single Crisp Featured Showcase Image */}
                                <div style={{
                                    height: '240px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={cat.tileImage || cat.mainImage}
                                        alt={cat.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease'
                                        }}
                                        className="card-img"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(22, 24, 32, 0.95) 0%, transparent 60%)'
                                    }} />

                                    {/* Floating Icon Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1.2rem',
                                        right: '1.2rem',
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '14px',
                                        background: 'rgba(13, 14, 18, 0.85)',
                                        border: '1px solid rgba(212, 175, 55, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-gold)',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        <cat.icon size={24} />
                                    </div>
                                </div>

                                {/* Service Content Details */}
                                <div style={{ padding: '2rem 2.2rem 2.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <h2 style={{
                                        fontSize: '1.55rem',
                                        marginBottom: '0.8rem',
                                        color: '#E2C9A1',
                                        fontWeight: '800',
                                        fontFamily: "'Playfair Display', serif"
                                    }}>
                                        {cat.title}
                                    </h2>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '0.98rem',
                                        marginBottom: '2rem'
                                    }}>
                                        {cat.shortDesc}
                                    </p>

                                    <div style={{
                                        marginTop: 'auto',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        color: 'var(--accent-gold)',
                                        fontWeight: '800',
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.08em',
                                        transition: 'gap 0.3s ease'
                                    }} className="explore-btn">
                                        EXPLORE SERVICE DETAILS <ArrowRight size={16} />
                                    </div>
                                </div>

                                <style>{`
                                    .glass-card:hover .card-img {
                                        transform: scale(1.08);
                                    }
                                    .glass-card:hover .explore-btn {
                                        gap: 0.9rem;
                                    }
                                `}</style>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Services;
