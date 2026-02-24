import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Background Image with Overlay */}
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
                        backgroundImage: 'linear-gradient(rgba(15, 15, 18, 0.7), rgba(15, 15, 18, 0.7)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}
                >
                    Elevate Your <br />
                    <span style={{
                        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Living Spaces.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}
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
                        background: 'var(--accent-primary)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: '600',
                        boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)'
                    }}>
                        Explore Services <ChevronRight size={20} />
                    </Link>
                    <Link to="/contact" style={{
                        border: '1px solid var(--glass-border)',
                        background: 'var(--glass)',
                        backdropFilter: 'blur(10px)',
                        padding: '1rem 2rem',
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
            <section style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            height: '200px',
                            backgroundImage: `url(${feature.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{feature.desc}</p>
                            <Link to="/categories" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
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
