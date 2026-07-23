import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award, Image as ImageIcon, X, Maximize2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);
    const [selectedImg, setSelectedImg] = useState(null);

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

    const serviceImage = service.mainImage || service.tileImage;

    const detailSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.title} Services in Ongole`,
        "description": service.description,
        "provider": {
            "@type": "InteriorDesigner",
            "name": "Sree Annapoorna Interiors",
            "telephone": "+917013006137",
            "email": "sreeannapoornainteriors@gmail.com",
            "url": "https://sreeannapoornainteriors.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "North Bypass Road, Mangamuru Junction, near Big Hanuman Statue",
                "addressLocality": "Ongole",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "523002",
                "addressCountry": "IN"
            }
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Ongole, Andhra Pradesh"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title,
            "itemListElement": service.features ? service.features.map(f => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": f
                }
            })) : []
        }
    };

    return (
        <PageWrapper>
            <SEO
                title={`${service.title} Services in Ongole`}
                description={`Premium ${service.title} design & installation by Sree Annapoorna Interiors in Ongole. ${service.shortDesc}`}
                path={`/services/${service.id}`}
                image={serviceImage}
                schema={detailSchema}
            />
            <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '0.5rem 0.5rem 4rem' }}>
                {/* Back to All Services Navigation Link */}
                <Link
                    to="/services"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-gold)',
                        fontWeight: '700',
                        marginBottom: '2rem',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em',
                        background: '#FFFFFF',
                        padding: '0.55rem 1.25rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(204, 158, 76, 0.35)',
                        boxShadow: '0 6px 20px rgba(68, 44, 27, 0.06)'
                    }}
                >
                    <ChevronLeft size={18} /> BACK TO ALL SERVICES
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* High-Definition Service Showcase Hero Image */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        marginBottom: '2.5rem',
                        border: '1px solid rgba(204, 158, 76, 0.4)',
                        boxShadow: '0 15px 40px rgba(68, 44, 27, 0.12)',
                        height: 'clamp(240px, 45vh, 480px)'
                    }}>
                        <img
                            src={encodeURI(serviceImage)}
                            alt={service.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                filter: 'brightness(0.98) contrast(1.04)'
                            }}
                        />

                        {/* Soft Gradient Overlay for Text Contrast */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(68, 44, 27, 0.92) 0%, rgba(68, 44, 27, 0.3) 55%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: 'clamp(1.2rem, 4vw, 3rem)'
                        }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.35rem 1rem',
                                borderRadius: '50px',
                                background: 'rgba(68, 44, 27, 0.85)',
                                border: '1px solid rgba(204, 158, 76, 0.45)',
                                color: '#E0D0B6',
                                fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                                fontWeight: '800',
                                letterSpacing: '0.1em',
                                marginBottom: '0.8rem',
                                width: 'fit-content',
                                backdropFilter: 'blur(12px)'
                            }}>
                                <service.icon size={16} color="var(--accent-gold)" /> ROYAL ARCHITECTURAL SERVICE
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(1.8rem, 5vw, 3.8rem)',
                                color: '#FFFFFF',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '900',
                                lineHeight: '1.18',
                                textShadow: '0 4px 20px rgba(68, 44, 27, 0.9)'
                            }}>
                                {service.title}
                            </h1>
                        </div>
                    </div>

                    {/* Detailed Service Information Card */}
                    <div style={{
                        background: '#FFFFFF',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: 'clamp(1.4rem, 4vw, 3rem)',
                        boxShadow: '0 15px 40px rgba(68, 44, 27, 0.06)',
                        marginBottom: '2.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <Sparkles size={16} /> SERVICE OVERVIEW & CRAFTSMANSHIP
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                            color: 'var(--accent-primary)',
                            marginBottom: '1.2rem',
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '800'
                        }}>
                            Bespoke Design & Craftsmanship Excellence
                        </h2>

                        <p style={{
                            fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem'
                        }}>
                            {service.description}
                        </p>

                        {/* Key Highlights & Technical Specifications Grid */}
                        {service.features && service.features.length > 0 && (
                            <div style={{
                                padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 1.8rem)',
                                borderRadius: '18px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(204, 158, 76, 0.35)'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                                    color: 'var(--accent-primary)',
                                    marginBottom: '1.4rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Award size={18} color="var(--accent-gold)" /> Key Highlights & Specifications
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                                    gap: '1.1rem'
                                }}>
                                    {service.features.map((feat, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                            <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5', fontWeight: '500' }}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Service Interior Design Photo Showcase Gallery */}
                    {service.gallery && service.gallery.length > 0 && (
                        <div style={{
                            background: '#FFFFFF',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            padding: 'clamp(1.4rem, 4vw, 3rem)',
                            boxShadow: '0 15px 40px rgba(68, 44, 27, 0.06)',
                            marginBottom: '2.5rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.6rem', letterSpacing: '0.08em' }}>
                                <ImageIcon size={16} /> INTERIOR PHOTO GALLERY
                            </div>

                            <h3 style={{
                                fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                                color: 'var(--accent-primary)',
                                marginBottom: '0.8rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '800'
                            }}>
                                Featured {service.title} Designs
                            </h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                marginBottom: '2rem',
                                lineHeight: '1.6'
                            }}>
                                Browse real interior design photos and architectural layouts created specifically for {service.title.toLowerCase()}s. Click on any photo to inspect full-screen details.
                            </p>

                            {/* Photo Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                                gap: '1.25rem'
                            }}>
                                {service.gallery.map((imgUrl, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedImg(imgUrl)}
                                        style={{
                                            position: 'relative',
                                            height: '220px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            border: '1px solid rgba(204, 158, 76, 0.3)',
                                            boxShadow: '0 8px 25px rgba(68, 44, 27, 0.06)'
                                        }}
                                        className="gallery-photo-card"
                                    >
                                        <img
                                            src={encodeURI(imgUrl)}
                                            alt={`${service.title} design ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                                transition: 'transform 0.5s ease'
                                            }}
                                            className="photo-img"
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(68, 44, 27, 0.35)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#FFFFFF'
                                        }} className="photo-overlay">
                                            <div style={{
                                                background: 'rgba(68, 44, 27, 0.85)',
                                                border: '1px solid #CC9E4C',
                                                padding: '0.6rem 1rem',
                                                borderRadius: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                fontSize: '0.85rem',
                                                fontWeight: '700'
                                            }}>
                                                <Maximize2 size={16} color="#CC9E4C" /> Zoom View
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Free Consultation Call-to-Action Banner */}
                    <div style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem)',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #442C1B 0%, #6B2717 100%)',
                        border: '1px solid rgba(204, 158, 76, 0.45)',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(68, 44, 27, 0.25)'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#CC9E4C', fontSize: '0.85rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={16} /> GUARANTEED ROYAL QUALITY
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', color: '#FFFFFF', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '0.8rem' }}>
                            Ready to Transform Your Space with {service.title}?
                        </h3>
                        <p style={{ color: '#E0D0B6', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: '1.65', fontSize: '0.95rem' }}>
                            Get in touch with our master interior architects in Ongole for a complimentary site visit, 3D visualization consultation, and custom estimate.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            background: 'linear-gradient(135deg, #CC9E4C 0%, #E0D0B6 50%, #6B2717 100%)',
                            color: '#442C1B',
                            padding: '0.95rem 2.4rem',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '0.98rem',
                            boxShadow: '0 10px 30px rgba(204, 158, 76, 0.4)'
                        }}>
                            Book Free Consultation <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Image Preview Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 999,
                            background: 'rgba(0, 0, 0, 0.88)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <div style={{ position: 'relative', maxWidth: '1000px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedImg(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-2.5rem',
                                    right: 0,
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={encodeURI(selectedImg)}
                                alt="Full-screen Interior View"
                                style={{
                                    width: '100%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    borderRadius: '16px',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .gallery-photo-card:hover .photo-img {
                    transform: scale(1.08);
                }
                .gallery-photo-card:hover .photo-overlay {
                    opacity: 1 !important;
                }
            `}</style>
        </PageWrapper>
    );
};

export default ServiceDetail;
