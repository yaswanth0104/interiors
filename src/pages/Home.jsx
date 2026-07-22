import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ChevronRight, ArrowRight, Sparkles, ShieldCheck, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            {/* Hero Section with Vibrant, Perfectly Visible Background Image */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '4rem 1.5rem 6rem'
            }}>
                {/* Clear, Vivid Hero Background Image */}
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
                        backgroundImage: 'linear-gradient(to bottom, rgba(13, 14, 18, 0.45) 0%, rgba(13, 14, 18, 0.78) 100%), url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'contrast(1.08) brightness(1.02)'
                    }}
                />

                {/* Hero Floating Glassmorphic Content Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{
                        maxWidth: '920px',
                        background: 'rgba(18, 20, 26, 0.72)',
                        border: '1px solid rgba(212, 175, 55, 0.45)',
                        borderRadius: '32px',
                        padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3.5rem)',
                        backdropFilter: 'blur(16px)',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.45rem 1.4rem',
                            borderRadius: '50px',
                            background: 'rgba(212, 175, 55, 0.15)',
                            border: '1px solid rgba(212, 175, 55, 0.4)',
                            color: 'var(--accent-gold)',
                            fontSize: '0.88rem',
                            fontWeight: '800',
                            letterSpacing: '0.12em',
                            marginBottom: '1.8rem',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <Sparkles size={16} /> BESPOKE ROYAL INTERIORS
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        lineHeight: '1.15',
                        color: '#F8F5EE',
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
                    }}>
                        Transform Your Space into a <br />
                        <span className="gold-text">Masterpiece of Luxury.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: '#E8E2D7',
                        maxWidth: '680px',
                        margin: '0 auto 2.8rem',
                        lineHeight: '1.8'
                    }}>
                        Sree Annapoorna Interiors crafts high-end residential & commercial spaces with royal craftsmanship, modular perfection, and timeless elegance.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1.4rem',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <Link to="/services" style={{
                            background: 'linear-gradient(135deg, #FFF0C2 0%, #D4AF37 55%, #AA7C11 100%)',
                            color: '#0D0E12',
                            padding: '1.15rem 2.6rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            fontWeight: '800',
                            fontSize: '1rem',
                            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                            transition: 'all 0.3s ease'
                        }}>
                            Explore Services <ChevronRight size={20} />
                        </Link>
                        <Link to="/contact" style={{
                            border: '1px solid rgba(212, 175, 55, 0.45)',
                            background: 'rgba(13, 14, 18, 0.7)',
                            backdropFilter: 'blur(12px)',
                            color: '#F8F5EE',
                            padding: '1.15rem 2.6rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            fontWeight: '700',
                            fontSize: '1rem'
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
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
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
