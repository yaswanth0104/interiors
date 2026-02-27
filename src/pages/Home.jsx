import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '2rem'
            }}>
                {/* Background Image with Elegant Overlay */}
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
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}
                >
                    Elevate Your <br />
                    <span className="gold-text">Living Spaces.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', marginBottom: '2.5rem' }}
                >
                    Sree Annapoorna Interiors brings your vision to life with bespoke furniture, modular kitchens, and artistic finishes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem' }}
                >
                    <Link to="/categories" style={{
                        background: 'var(--accent-gold)',
                        color: 'var(--accent-primary)',
                        padding: '1.2rem 2.5rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: '700',
                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                    }}>
                        Explore Services <ChevronRight size={20} />
                    </Link>
                    <Link to="/contact" style={{
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        padding: '1.2rem 2.5rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: '600'
                    }}>
                        Contact Us
                    </Link>
                </motion.div>
            </section>

            {/* Feature Section with Images */}
            <section style={{ maxWidth: '1200px', margin: '8rem auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', padding: '0 2rem' }}>
                {[
                    {
                        title: 'Modular Kitchens',
                        desc: 'Sleek, functional, and modern designs for the heart of your home.',
                        img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
                    },
                    {
                        title: 'Bespoke Wardrobes',
                        desc: 'Custom storage solutions that match your style and needs.',
                        img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
                    },
                    {
                        title: 'Artistic Paintings',
                        desc: 'Handcrafted wall finishes and paintings to add character to your walls.',
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
                        style={{ overflow: 'hidden', border: '1px solid rgba(14, 50, 126, 0.1)' }}
                    >
                        <div style={{
                            height: '240px',
                            backgroundImage: `url(${feature.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 50, 126, 0.3), transparent)' }} />
                        </div>
                        <div style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontWeight: '700' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>{feature.desc}</p>
                            <Link to="/categories" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: '800', letterSpacing: '0.1em' }}>
                                LEARN MORE <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </PageWrapper>
    );
};

export default Home;
