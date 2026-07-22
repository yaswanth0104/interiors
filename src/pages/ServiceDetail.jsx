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

    return (
        <PageWrapper title={service.title} heroImage={service.mainImage}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
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
                        letterSpacing: '0.05em'
                    }}
                >
                    <ChevronLeft size={20} /> BACK TO ALL SERVICES
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '50px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        marginBottom: '1.2rem'
                    }}>
                        <service.icon size={16} /> ROYAL CRAFTSMANSHIP SERVICE
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                        color: '#F8F5EE',
                        marginBottom: '1.5rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '900',
                        lineHeight: '1.15'
                    }}>
                        {service.title}
                    </h1>

                    <p style={{
                        fontSize: '1.18rem',
                        lineHeight: '1.85',
                        color: 'var(--text-secondary)',
                        marginBottom: '3.5rem',
                        maxWidth: '920px'
                    }}>
                        {service.description}
                    </p>

                    {/* Featured System Display Showcase Image Card */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        marginBottom: '4.5rem',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
                    }}>
                        <img
                            src={service.mainImage || service.tileImage}
                            alt={`${service.title} Showcase`}
                            style={{
                                width: '100%',
                                height: 'clamp(320px, 50vh, 520px)',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(13, 14, 18, 0.95) 0%, rgba(13, 14, 18, 0.2) 60%, transparent 100%)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '2.5rem'
                        }}>
                            <div>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                    <Sparkles size={16} /> SYSTEM FEATURED ARCHITECTURE
                                </div>
                                <h3 style={{ color: '#F8F5EE', fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", fontWeight: '800' }}>
                                    Bespoke {service.title} Design Excellence
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Service Key Features & Specifications Grid */}
                    {service.features && service.features.length > 0 && (
                        <div style={{
                            marginBottom: '4.5rem',
                            padding: '2.8rem 2.5rem',
                            borderRadius: '24px',
                            background: 'rgba(22, 24, 32, 0.75)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(16px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                color: '#E2C9A1',
                                marginBottom: '2rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '800'
                            }}>
                                Key Highlights & Specifications
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

                    {/* Free Consultation CTA Banner */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, rgba(22, 24, 32, 0.95) 0%, rgba(13, 14, 18, 0.98) 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={18} /> GUARANTEED ROYAL CRAFTSMANSHIP
                        </div>
                        <h3 style={{ fontSize: '1.9rem', color: '#F8F5EE', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '1rem' }}>
                            Ready to Transform Your Home with {service.title}?
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 2.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                            Get in touch with our design specialists for a complimentary site visit, 3D visualization consultation, and custom cost estimate.
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
        </PageWrapper>
    );
};

export default ServiceDetail;
