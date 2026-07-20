import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return (
            <PageWrapper title="Service Not Found">
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <p>The requested service could not be found.</p>
                    <Link to="/services" style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Return to Services</Link>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper title={service.title} heroImage={service.mainImage}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <Link
                    to="/services"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        textDecoration: 'none'
                    }}
                >
                    <ChevronLeft size={20} /> Back to Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: 'var(--accent-secondary)',
                        marginBottom: '1.5rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800'
                    }}>
                        Overview
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'var(--text-primary)',
                        marginBottom: '4rem'
                    }}>
                        {service.description}
                    </p>

                    <h2 style={{
                        fontSize: '2rem',
                        color: 'var(--accent-secondary)',
                        marginBottom: '2rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800'
                    }}>
                        Our Work in {service.title}
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {service.gallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{
                                    height: '300px',
                                    overflow: 'hidden',
                                    borderRadius: '20px'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`${service.title} example ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default ServiceDetail;
