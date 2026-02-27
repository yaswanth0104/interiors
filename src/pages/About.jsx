import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <PageWrapper title="About Us" heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                gap: 'clamp(2rem, 8vw, 4rem)',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: '800' }}>Our Story</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        At Sree Annapoorna Interiors, we believe that every home has a story to tell. Our mission is to translate your vision into a stunning reality through thoughtful design and exquisite craftsmanship.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        With years of experience in the interior design industry, we specialize in creating functional yet beautiful spaces that reflect the personality of our clients. From modern modular kitchens to custom wood paintings, we bring a touch of elegance to every corner.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--accent-gold)', fontSize: '2.5rem', fontWeight: '800' }}>10+</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', letterSpacing: '0.1em' }}>YEARS EXCELLENCE</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--accent-gold)', fontSize: '2.5rem', fontWeight: '800' }}>500+</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', letterSpacing: '0.1em' }}>PROJECTS COMPLETED</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        height: 'clamp(300px, 50vh, 500px)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(var(--accent-primary-rgb), 0.4), transparent)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '2rem'
                    }}>
                        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                            "Transforming Visions into Values"
                        </p>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default About;
