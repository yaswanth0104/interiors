import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ChevronRight, ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{
                minHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '3rem 2rem'
            }}>
                {/* Background Image with Royal Obsidian Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        backgroundImage: 'radial-gradient(circle at center, rgba(13, 14, 18, 0.4) 0%, rgba(13, 14, 18, 0.85) 100%), linear-gradient(rgba(0, 0, 0, 0.5), rgba(13, 14, 18, 0.95)), url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.5rem 1.4rem',
                        borderRadius: '50px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        marginBottom: '1.8rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Sparkles size={16} /> BESPOKE ROYAL INTERIORS
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.6rem, 8vw, 4.8rem)',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        lineHeight: '1.15',
                        color: '#F8F5EE',
                        maxWidth: '900px',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Transform Your Space into a <br />
                    <span className="gold-text">Masterpiece of Luxury.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', marginBottom: '2.8rem', lineHeight: '1.8' }}
                >
                    Sree Annapoorna Interiors crafts high-end residential & commercial spaces with royal craftsmanship, modular perfection, and timeless elegance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <Link to="/services" style={{
                        background: 'linear-gradient(135deg, #FFF0C2 0%, #D4AF37 55%, #AA7C11 100%)',
                        color: '#0D0E12',
                        padding: '1.2rem 2.6rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontWeight: '800',
                        fontSize: '1rem',
                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.35)',
                        transition: 'all 0.3s ease'
                    }}>
                        Explore Services <ChevronRight size={20} />
                    </Link>
                    <Link to="/contact" style={{
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        background: 'rgba(18, 20, 26, 0.6)',
                        backdropFilter: 'blur(12px)',
                        color: '#F8F5EE',
                        padding: '1.2rem 2.6rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontWeight: '700',
                        fontSize: '1rem'
                    }}>
                        Book Consultation
                    </Link>
                </motion.div>
            </section>

            {/* Feature Cards Grid */}
            <section style={{
                maxWidth: '1240px',
                margin: 'clamp(4rem, 10vw, 7rem) auto 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '2.5rem',
                padding: '0 2rem'
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
                        transition={{ delay: i * 0.2 }}
                        className="glass-card"
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            height: '250px',
                            backgroundImage: `url(${feature.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18, 20, 26, 0.95), transparent)' }} />
                        </div>
                        <div style={{ padding: '2.2rem 2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: '#E2C9A1', fontWeight: '800', fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '0.98rem' }}>{feature.desc}</p>
                            <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: '800', letterSpacing: '0.1em' }}>
                                EXPLORE DETAILS <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </PageWrapper>
    );
};

export default Home;
