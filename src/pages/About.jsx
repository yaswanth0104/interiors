import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const About = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sree Annapoorna Interiors",
        "url": "https://sreeannapoornainteriors.com/about",
        "description": "Learn about Sree Annapoorna Interiors in Ongole - 10+ years of interior architectural excellence and over 500+ completed luxury home projects."
    };

    return (
        <PageWrapper title="About Us" heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000">
            <SEO
                title="About Us | Master Interior Architects in Ongole"
                description="Discover Sree Annapoorna Interiors. Over 10 years of expertise and 500+ completed interior design projects in Ongole, Andhra Pradesh."
                path="/about"
                schema={aboutSchema}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'clamp(1.5rem, 5vw, 4rem)',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        marginBottom: '1.2rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: '800',
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Our Story
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', marginBottom: '1.2rem', lineHeight: '1.75' }}>
                        At Sree Annapoorna Interiors, we believe that every home has a story to tell. Our mission is to translate your vision into a stunning reality through thoughtful design and exquisite craftsmanship.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
                        With years of experience in the interior design industry, we specialize in creating functional yet beautiful spaces that reflect the personality of our clients. From modern modular kitchens to custom wood paintings, we bring a touch of elegance to every corner.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--accent-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>10+</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em' }}>YEARS EXCELLENCE</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--accent-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>500+</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em' }}>PROJECTS COMPLETED</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        height: 'clamp(260px, 45vh, 480px)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(68, 44, 27, 0.7), transparent 60%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1.5rem'
                    }}>
                        <p style={{ color: 'white', fontStyle: 'italic', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '500', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                            "Transforming Visions into Values"
                        </p>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default About;
