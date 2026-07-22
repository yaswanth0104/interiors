import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ChevronRight, ArrowRight, Sparkles, ShieldCheck, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            {/* Hero Section with Fully Transparent Background Overlay */}
            <section style={{
                minHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '4rem 1.5rem 6rem'
            }}>
                {/* 100% Crisp & Vivid Full-Screen Hero Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        backgroundImage: 'linear-gradient(to bottom, rgba(13, 14, 18, 0.25) 0%, rgba(13, 14, 18, 0.65) 100%), url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(1.05) contrast(1.05)'
                    }}
                />

                {/* Pure Transparent Hero Content Container - Zero Blocking Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{
                        maxWidth: '960px',
                        background: 'transparent',
                        padding: '2rem 1rem',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.55rem 1.6rem',
                            borderRadius: '50px',
                            background: 'rgba(13, 14, 18, 0.65)',
                            border: '1px solid rgba(212, 175, 55, 0.55)',
                            color: 'var(--accent-gold)',
                            fontSize: '0.9rem',
                            fontWeight: '800',
                            letterSpacing: '0.12em',
                            marginBottom: '2rem',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
                        }}
                    >
                        <Sparkles size={16} /> BESPOKE ROYAL INTERIORS
                    </motion.div>

                    {/* Headline - High Contrast Readability over Crisp Image */}
                    <h1 style={{
                        fontSize: 'clamp(2.6rem, 7.5vw, 4.8rem)',
                        fontWeight: '900',
                        marginBottom: '1.6rem',
                        lineHeight: '1.15',
                        color: '#FFFFFF',
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 30px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.9)'
                    }}>
                        Transform Your Space into a <br />
                        <span className="gold-text" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.95)' }}>Masterpiece of Luxury.</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#F8F5EE',
                        maxWidth: '720px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.85',
                        fontWeight: '500',
                        textShadow: '0 3px 20px rgba(0, 0, 0, 0.95), 0 1px 6px rgba(0, 0, 0, 0.9)'
                    }}>
                        Sree Annapoorna Interiors crafts high-end residential & commercial spaces with royal craftsmanship, modular perfection, and timeless elegance.
                    </p>

                    {/* CTAs */}
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <Link to="/services" style={{
                            background: 'linear-gradient(135deg, #FFF0C2 0%, #D4AF37 55%, #AA7C11 100%)',
                            color: '#0D0E12',
                            padding: '1.2rem 2.8rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            fontWeight: '800',
                            fontSize: '1.02rem',
                            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.4)',
                            transition: 'all 0.3s ease'
                        }}>
                            Explore Services <ChevronRight size={20} />
                        </Link>
                        <Link to="/contact" style={{
                            border: '1.5px solid rgba(212, 175, 55, 0.65)',
                            background: 'rgba(13, 14, 18, 0.75)',
                            backdropFilter: 'blur(14px)',
                            color: '#F8F5EE',
                            padding: '1.2rem 2.8rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            fontWeight: '700',
                            fontSize: '1.02rem',
                            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)'
                        }}>
                            Book Consultation
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Luxury Stats Bar */}
            <section style={{
                maxWidth: '1150px',
                margin: '-3rem auto 5rem',
                position: 'relative',
                zIndex: 2,
                padding: '0 1.5rem'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '1.5rem',
                    background: 'rgba(22, 24, 32, 0.88)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '24px',
                    padding: '2rem 2.5rem',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}>
                    {[
                        { icon: Award, number: '500+', label: 'Luxury Projects Delivered' },
                        { icon: ShieldCheck, number: '10-Year', label: 'Structural Warranty' },
                        { icon: Users, number: '100%', label: 'Bespoke Customization' },
                        { icon: Star, number: '15+', label: 'Master Craftsmen' }
                    ].map((stat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                background: 'rgba(212, 175, 55, 0.15)',
                                border: '1px solid rgba(212, 175, 55, 0.35)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-gold)',
                                flexShrink: 0
                            }}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#F8F5EE', fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Cards Grid */}
            <section style={{
                maxWidth: '1240px',
                margin: '0 auto',
                padding: '0 1.5rem 4rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        color: '#F8F5EE',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '900',
                        marginBottom: '1rem'
                    }}>
                        Crafted Interior <span className="gold-text">Excellence.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        From modular kitchens to bespoke wood partitions and fine art, explore our signature services.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {[
                        {
                            title: 'Modular Kitchens',
                            desc: 'Sleek, ergonomic, and ultra-durable modular kitchen architectures built for modern living.',
                            img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Bespoke Wardrobes',
                            desc: 'Customized luxury wardrobe systems tailored precisely to your aesthetic and storage lifestyle.',
                            img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Artistic Wall Designs',
                            desc: 'Handcrafted premium wallpapers, textured wood paneling, and bespoke wall finishes.',
                            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800'
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="glass-card"
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{
                                height: '250px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease'
                                    }}
                                    className="feature-img"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22, 24, 32, 0.95), transparent 60%)' }} />
                            </div>
                            <div style={{ padding: '2.2rem 2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: '#E2C9A1', fontWeight: '800', fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '0.98rem' }}>{feature.desc}</p>
                                <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: '800', letterSpacing: '0.1em' }}>
                                    EXPLORE DETAILS <ArrowRight size={16} />
                                </Link>
                            </div>
                            <style>{`
                                .glass-card:hover .feature-img {
                                    transform: scale(1.08);
                                }
                            `}</style>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Home;
