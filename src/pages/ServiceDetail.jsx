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
            <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '1rem 1rem 5rem' }}>
                {/* Back to All Services Navigation Link */}
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
                        letterSpacing: '0.06em',
                        background: '#FFFFFF',
                        padding: '0.6rem 1.4rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(185, 155, 107, 0.35)',
                        boxShadow: '0 6px 20px rgba(31, 26, 23, 0.06)'
                    }}
                >
                    <ChevronLeft size={20} /> BACK TO ALL SERVICES
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Breathtaking High-Definition Service Showcase Hero Image */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '28px',
                        overflow: 'hidden',
                        marginBottom: '3.5rem',
                        border: '1px solid rgba(185, 155, 107, 0.4)',
                        boxShadow: '0 20px 50px rgba(31, 26, 23, 0.12)',
                        height: 'clamp(360px, 55vh, 520px)'
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
                            padding: 'clamp(2rem, 5vw, 3.5rem)'
                        }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.45rem 1.3rem',
                                borderRadius: '50px',
                                background: 'rgba(31, 26, 23, 0.85)',
                                border: '1px solid rgba(185, 155, 107, 0.45)',
                                color: '#E8DCC4',
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                letterSpacing: '0.12em',
                                marginBottom: '1.2rem',
                                width: 'fit-content',
                                backdropFilter: 'blur(12px)'
                            }}>
                                <service.icon size={18} color="var(--accent-gold)" /> ROYAL ARCHITECTURAL SERVICE
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                                color: '#FFFFFF',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '900',
                                lineHeight: '1.15',
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
                        borderRadius: '28px',
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        boxShadow: '0 15px 40px rgba(31, 26, 23, 0.06)',
                        marginBottom: '3.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                            <Sparkles size={18} /> SERVICE OVERVIEW & CRAFTSMANSHIP
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                            color: 'var(--accent-primary)',
                            marginBottom: '1.5rem',
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '800'
                        }}>
                            Bespoke Design & Craftsmanship Excellence
                        </h2>

                        <p style={{
                            fontSize: '1.18rem',
                            lineHeight: '1.85',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem'
                        }}>
                            {service.description}
                        </p>

                        {/* Key Highlights & Technical Specifications Grid */}
                        {service.features && service.features.length > 0 && (
                            <div style={{
                                padding: '2.2rem 2rem',
                                borderRadius: '20px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(185, 155, 107, 0.3)'
                            }}>
                                <h3 style={{
                                    fontSize: '1.35rem',
                                    color: 'var(--accent-primary)',
                                    marginBottom: '1.6rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Award size={20} color="var(--accent-gold)" /> Key Highlights & Specifications
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                    gap: '1.3rem'
                                }}>
                                    {service.features.map((feat, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <CheckCircle2 size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.55' }}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Free Consultation Call-to-Action Banner */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: '28px',
                        background: 'linear-gradient(135deg, #1F1A17 0%, #3A302A 100%)',
                        border: '1px solid rgba(185, 155, 107, 0.45)',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(31, 26, 23, 0.15)'
                    }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={18} /> GUARANTEED ROYAL QUALITY
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#F8F5EE', fontFamily: "'Playfair Display', serif", fontWeight: '800', marginBottom: '1rem' }}>
                            Ready to Transform Your Space with {service.title}?
                        </h3>
                        <p style={{ color: 'rgba(248, 245, 238, 0.8)', maxWidth: '640px', margin: '0 auto 2.2rem', lineHeight: '1.7', fontSize: '1rem' }}>
                            Get in touch with our master interior architects for a complimentary site visit, 3D visualization consultation, and custom estimate.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'linear-gradient(135deg, #B99B6B 0%, #E8DCC4 50%, #8E7345 100%)',
                            color: '#1F1A17',
                            padding: '1.1rem 2.6rem',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '1rem',
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
