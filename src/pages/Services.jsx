import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Interior Design Services offered by Sree Annapoorna Interiors",
        "itemListElement": servicesData.map((svc, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": svc.title,
                "description": svc.description,
                "url": `https://sreeannapoornainteriors.com/services/${svc.id}`,
                "provider": {
                    "@type": "InteriorDesigner",
                    "name": "Sree Annapoorna Interiors",
                    "telephone": "+917013006137",
                    "email": "sreeannapoornainteriors@gmail.com"
                }
            }
        }))
    };

    return (
        <PageWrapper>
            <SEO
                title="Bespoke Interior Design Services | Modular Kitchens, Wardrobes, TV Units"
                description="Explore custom interior design services in Ongole: BWP Modular Kitchens, Bespoke Wardrobes, TV Units, CNC Wood Partitions, Wallpapers & Fine Arts."
                path="/services"
                schema={servicesSchema}
            />
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0.5rem 0.5rem 3rem' }}>
                {/* Page Title & Intro Section */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            background: 'rgba(185, 155, 107, 0.12)',
                            border: '1px solid rgba(185, 155, 107, 0.35)',
                            color: 'var(--accent-gold)',
                            fontSize: 'clamp(0.78rem, 2.5vw, 0.85rem)',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            marginBottom: '1.2rem'
                        }}
                    >
                        <Sparkles size={16} /> BESPOKE INTERIOR ARCHITECTURE
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                            fontWeight: '900',
                            color: 'var(--accent-primary)',
                            marginBottom: '1rem',
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
                            fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.75'
                        }}
                    >
                        Explore our royal portfolio of custom interior solutions, engineered with precision, premium marine-grade materials, and timeless aesthetic excellence.
                    </motion.p>
                </div>

                {/* Elegant Service Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem'
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
                                    borderRadius: '20px',
                                    border: '1px solid var(--glass-border)',
                                    background: '#FFFFFF',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {/* Single Crisp Featured Showcase Image */}
                                <div style={{
                                    height: '210px',
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
                                        background: 'linear-gradient(to top, rgba(68, 44, 27, 0.85) 0%, transparent 60%)'
                                    }} />

                                    {/* Floating Icon Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: 'rgba(252, 250, 246, 0.92)',
                                        border: '1px solid rgba(185, 155, 107, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-gold)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                                    }}>
                                        <cat.icon size={22} />
                                    </div>
                                </div>

                                {/* Service Content Details */}
                                <div style={{ padding: '1.5rem 1.5rem 1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <h2 style={{
                                        fontSize: '1.4rem',
                                        marginBottom: '0.6rem',
                                        color: 'var(--accent-primary)',
                                        fontWeight: '800',
                                        fontFamily: "'Playfair Display', serif"
                                    }}>
                                        {cat.title}
                                    </h2>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.65',
                                        fontSize: '0.95rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {cat.shortDesc}
                                    </p>

                                    <div style={{
                                        marginTop: 'auto',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--accent-gold)',
                                        fontWeight: '800',
                                        fontSize: '0.88rem',
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
                                        gap: 0.8rem;
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
