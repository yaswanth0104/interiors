import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
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
                        padding: '0.5rem 1.2rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(185, 155, 107, 0.35)',
                        boxShadow: '0 6px 20px rgba(31, 26, 23, 0.06)'
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
                        borderRadius: '20px',
                        overflow: 'hidden',
                        marginBottom: '2.5rem',
                        border: '1px solid rgba(185, 155, 107, 0.4)',
                        boxShadow: '0 15px 40px rgba(31, 26, 23, 0.1)',
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

                        {/* Soft Gradient Overlay for Text Contrast at Bottom */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(31, 26, 23, 0.9) 0%, rgba(31, 26, 23, 0.25) 55%, transparent 100%)',
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
                                background: 'rgba(31, 26, 23, 0.85)',
                                border: '1px solid rgba(185, 155, 107, 0.45)',
                                color: '#E8DCC4',
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
                                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
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
                        boxShadow: '0 15px 40px rgba(31, 26, 23, 0.06)',
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
                                borderRadius: '16px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(185, 155, 107, 0.3)'
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
                                            <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Free Consultation Call-to-Action Banner */}
                    <div style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem)',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #1F1A17 0%, #3A302A 100%)',
                        border: '1px solid rgba(185, 155, 107, 0.45)',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(31, 26, 23, 0.15)'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={16} /> GUARANTEED ROYAL QUALITY
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', color: '#F8F5EE', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '0.8rem' }}>
                            Ready to Transform Your Space with {service.title}?
                        </h3>
                        <p style={{ color: 'rgba(248, 245, 238, 0.8)', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: '1.65', fontSize: '0.95rem' }}>
                            Get in touch with our master interior architects for a complimentary site visit, 3D visualization consultation, and custom estimate.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            background: 'linear-gradient(135deg, #B99B6B 0%, #E8DCC4 50%, #8E7345 100%)',
                            color: '#1F1A17',
                            padding: '0.95rem 2.4rem',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '0.98rem',
                            boxShadow: '0 10px 30px rgba(185, 155, 107, 0.35)'
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
