import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, X, ZoomIn, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);
    const [activeImage, setActiveImage] = useState(null);

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
                        <service.icon size={16} /> CRAFTSMANSHIP SHOWCASE
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        color: '#F8F5EE',
                        marginBottom: '1.5rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '900',
                        lineHeight: '1.2'
                    }}>
                        {service.title}
                    </h1>

                    <p style={{
                        fontSize: '1.18rem',
                        lineHeight: '1.85',
                        color: 'var(--text-secondary)',
                        marginBottom: '3.5rem',
                        maxWidth: '900px'
                    }}>
                        {service.description}
                    </p>

                    {/* Service Key Features Grid */}
                    {service.features && service.features.length > 0 && (
                        <div style={{
                            marginBottom: '4.5rem',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            background: 'rgba(22, 24, 32, 0.75)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(16px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.4rem',
                                color: '#E2C9A1',
                                marginBottom: '1.8rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '800'
                            }}>
                                Key Highlights & Specifications
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                gap: '1.2rem'
                            }}>
                                {service.features.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <CheckCircle2 size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#F3EFE9', fontSize: '0.98rem', lineHeight: '1.5' }}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Service Gallery Section */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                            color: '#E2C9A1',
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '800'
                        }}>
                            {service.title} Portfolio & Work Examples
                        </h2>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Showing {service.gallery.length} verified project photos
                        </span>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))',
                        gap: '2rem',
                        marginBottom: '5rem'
                    }}>
                        {service.gallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="glass-card"
                                style={{
                                    height: '320px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setActiveImage(img)}
                            >
                                <img
                                    src={encodeURI(img)}
                                    alt={`${service.title} project image ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease'
                                    }}
                                    className="gallery-img"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(13, 14, 18, 0.85) 0%, transparent 60%)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '1.5rem'
                                }} className="gallery-overlay">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.9rem' }}>
                                        <ZoomIn size={18} /> View Full Photo
                                    </div>
                                </div>
                                <style>{`
                                    .glass-card:hover .gallery-img {
                                        transform: scale(1.08);
                                    }
                                    .glass-card:hover .gallery-overlay {
                                        opacity: 1;
                                    }
                                `}</style>
                            </motion.div>
                        ))}
                    </div>

                    {/* Consultation CTA Banner */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, rgba(22, 24, 32, 0.9) 0%, rgba(13, 14, 18, 0.95) 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        marginBottom: '4rem'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', color: '#F8F5EE', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '1rem' }}>
                            Want a Custom {service.title} for Your Home?
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
                            Schedule a free design consultation with our interior architects. We bring samples, 3D layouts, and expert estimates directly to you.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'linear-gradient(135deg, #FFF0C2 0%, #D4AF37 55%, #AA7C11 100%)',
                            color: '#0D0E12',
                            padding: '1rem 2.5rem',
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

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveImage(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 999,
                            background: 'rgba(5, 6, 8, 0.92)',
                            backdropFilter: 'blur(12px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                maxWidth: '90vw',
                                maxHeight: '85vh',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                border: '1px solid rgba(212, 175, 55, 0.5)',
                                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
                            }}
                        >
                            <button
                                onClick={() => setActiveImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(13, 14, 18, 0.8)',
                                    color: '#F8F5EE',
                                    border: '1px solid rgba(212, 175, 55, 0.4)',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={activeImage}
                                alt="Full size preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '85vh',
                                    display: 'block',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageWrapper>
    );
};

export default ServiceDetail;
