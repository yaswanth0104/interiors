import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return (
            <PageWrapper title="Service Not Found">
                <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>The requested service could not be found.</p>
                    <Link to="/services" style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>Return to Services</Link>
                </div>
            </PageWrapper>
        );
    }

    const bgImage = service.mainImage || service.tileImage;

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Full Page Service Background Image with Dark Royal Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    backgroundImage: `radial-gradient(circle at center, rgba(13, 14, 18, 0.72) 0%, rgba(13, 14, 18, 0.94) 100%), linear-gradient(to bottom, rgba(13, 14, 18, 0.8), rgba(13, 14, 18, 0.97)), url("${bgImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    filter: 'brightness(0.9)'
                }}
            />

            {/* Page Content Overlay */}
            <div style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
                <Link
                    to="/services"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-gold)',
                        fontWeight: '700',
                        marginBottom: '2.5rem',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        letterSpacing: '0.05em',
                        background: 'rgba(18, 20, 26, 0.7)',
                        padding: '0.6rem 1.4rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <ChevronLeft size={20} /> BACK TO ALL SERVICES
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: 'rgba(18, 20, 26, 0.82)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '28px',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)'
                    }}
                >
                    {/* Header Service Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.4rem',
                        borderRadius: '50px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.88rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        <service.icon size={18} /> ROYAL CRAFTSMANSHIP SERVICE
                    </div>

                    {/* Service Title */}
                    <h1 style={{
                        fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
                        color: '#F8F5EE',
                        marginBottom: '1.8rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '900',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em'
                    }}>
                        {service.title}
                    </h1>

                    {/* Detailed Overview */}
                    <div style={{ marginBottom: '3.5rem' }}>
                        <h3 style={{
                            fontSize: '1.35rem',
                            color: '#E2C9A1',
                            marginBottom: '1rem',
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '800'
                        }}>
                            Service Overview & Craftsmanship
                        </h3>
                        <p style={{
                            fontSize: '1.18rem',
                            lineHeight: '1.85',
                            color: 'var(--text-secondary)'
                        }}>
                            {service.description}
                        </p>
                    </div>

                    {/* Service Key Features & Specifications Grid */}
                    {service.features && service.features.length > 0 && (
                        <div style={{
                            marginBottom: '3.5rem',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            background: 'rgba(13, 14, 18, 0.65)',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            backdropFilter: 'blur(12px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.45rem',
                                color: '#E2C9A1',
                                marginBottom: '1.8rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '800',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Sparkles size={20} color="var(--accent-gold)" /> Key Highlights & Technical Specifications
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                gap: '1.4rem'
                            }}>
                                {service.features.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <CheckCircle2 size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#F3EFE9', fontSize: '1rem', lineHeight: '1.55' }}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Free Consultation CTA Card */}
                    <div style={{
                        padding: '3rem 2rem',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, rgba(22, 24, 32, 0.95) 0%, rgba(13, 14, 18, 0.98) 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.45)',
                        textAlign: 'center',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={18} /> GUARANTEED ROYAL QUALITY
                        </div>
                        <h3 style={{ fontSize: '1.85rem', color: '#F8F5EE', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '1rem' }}>
                            Transform Your Home with {service.title}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 2.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                            Get in touch with our master interior architects for a personalized consultation, material sample demonstration, and custom estimate.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'linear-gradient(135deg, #FFF0C2 0%, #D4AF37 55%, #AA7C11 100%)',
                            color: '#0D0E12',
                            padding: '1.1rem 2.6rem',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '1rem',
                            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.35)'
                        }}>
                            Book Free Consultation <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetail;
