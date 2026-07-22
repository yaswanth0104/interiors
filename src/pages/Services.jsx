import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { servicesData } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <PageWrapper title="Detailed Services" heroImage="https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=2000">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                gap: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}>
                {servicesData.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            to={`/services/${cat.id}`}
                            className="service-tile"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textDecoration: 'none',
                                height: '100%',
                                borderRadius: '24px',
                                transition: 'all 0.4s ease'
                            }}
                        >
                            {/* Background Image with Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url("${cat.tileImage}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                zIndex: 0
                            }} className="tile-bg" />

                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(var(--accent-secondary-rgb), 0.3) 0%, rgba(var(--accent-secondary-rgb), 0.9) 100%)',
                                zIndex: 1
                            }} />

                            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <cat.icon size={48} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '1rem',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontFamily: "'Playfair Display', serif"
                                }}>{cat.title}</h3>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    lineHeight: '1.6',
                                    marginBottom: '2rem',
                                    opacity: 0.9
                                }}>{cat.shortDesc}</p>

                                <div style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.1em'
                                }}>
                                    EXPLORE MORE <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                        <style>{`
                            .service-tile:hover .tile-bg {
                                transform: scale(1.1);
                            }
                            .service-tile:hover {
                                transform: translateY(-10px);
                                border-color: rgba(255, 255, 255, 0.3);
                                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                            }
                        `}</style>
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Services;
