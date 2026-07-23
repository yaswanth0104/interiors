import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { ChevronRight, ArrowRight, Sparkles, ShieldCheck, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sree Annapoorna Interiors",
        "url": "https://sreeannapoornainteriors.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sreeannapoornainteriors.com/services?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <PageWrapper>
            <SEO
                title="Luxury Interior Designers in Ongole | Royal Modular Kitchens & Home Decors"
                description="Sree Annapoorna Interiors is the premier interior design firm in Ongole, offering bespoke modular kitchens, custom wardrobes, TV units, wood partitions, wallpapers & arts."
                path="/"
                schema={homeSchema}
            />
            {/* Hero Section with Vibrant, 100% Crisp Background Image */}
            <section style={{
                minHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: 'clamp(2.5rem, 6vw, 5rem) clamp(0.85rem, 3vw, 1.5rem) clamp(4rem, 8vw, 6rem)'
            }}>
                {/* 100% Crisp & Vivid Full-Screen Hero Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        backgroundImage: 'linear-gradient(to bottom, rgba(68, 44, 27, 0.35) 0%, rgba(107, 39, 23, 0.75) 100%), url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(1.04) contrast(1.06)'
                    }}
                />

                {/* Pure Transparent Hero Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{
                        maxWidth: '960px',
                        background: 'transparent',
                        padding: '1rem 0.5rem',
                        position: 'relative',
                        zIndex: 1,
                        width: '100%'
                    }}
                >
                    {/* Satin Gold Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.45rem 1.2rem',
                            borderRadius: '50px',
                            background: 'rgba(68, 44, 27, 0.8)',
                            border: '1px solid rgba(204, 158, 76, 0.6)',
                            color: '#E0D0B6',
                            fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)',
                            fontWeight: '800',
                            letterSpacing: '0.1em',
                            marginBottom: '1.5rem',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 8px 25px rgba(68, 44, 27, 0.4)'
                        }}
                    >
                        <Sparkles size={16} color="#CC9E4C" /> BESPOKE ROYAL INTERIORS
                    </motion.div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(1.9rem, 5.5vw, 4.5rem)',
                        fontWeight: '900',
                        marginBottom: '1.2rem',
                        lineHeight: '1.2',
                        color: '#FFFFFF',
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 30px rgba(68, 44, 27, 0.95), 0 2px 10px rgba(68, 44, 27, 0.9)'
                    }}>
                        Transform Your Space into a <br />
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            background: 'linear-gradient(135deg, #E0D0B6 0%, #CC9E4C 50%, #6B2717 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 4px 30px rgba(68, 44, 27, 0.95)'
                        }}>Masterpiece of Luxury.</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: 'clamp(0.98rem, 3vw, 1.2rem)',
                        color: '#E0D0B6',
                        maxWidth: '720px',
                        margin: '0 auto 2.5rem',
                        lineHeight: '1.75',
                        fontWeight: '500',
                        textShadow: '0 3px 20px rgba(68, 44, 27, 0.95), 0 1px 6px rgba(68, 44, 27, 0.9)'
                    }}>
                        Sree Annapoorna Interiors crafts high-end residential & commercial spaces with royal craftsmanship, modular perfection, and timeless elegance.
                    </p>

                    {/* CTAs */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Link to="/services" style={{
                            background: 'linear-gradient(135deg, #CC9E4C 0%, #E0D0B6 50%, #6B2717 100%)',
                            color: '#442C1B',
                            padding: '0.95rem 2.2rem',
                            borderRadius: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontWeight: '800',
                            fontSize: '0.98rem',
                            boxShadow: '0 12px 35px rgba(204, 158, 76, 0.45)',
                            transition: 'all 0.3s ease',
                            minWidth: '200px'
                        }}>
                            Explore Services <ChevronRight size={18} />
                        </Link>
                        <Link to="/contact" style={{
                            border: '1.5px solid rgba(204, 158, 76, 0.65)',
                            background: 'rgba(68, 44, 27, 0.75)',
                            backdropFilter: 'blur(14px)',
                            color: '#E0D0B6',
                            padding: '0.95rem 2.2rem',
                            borderRadius: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontWeight: '700',
                            fontSize: '0.98rem',
                            boxShadow: '0 12px 35px rgba(68, 44, 27, 0.5)',
                            minWidth: '200px'
                        }}>
                            Book Consultation
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Luxury Stats Bar */}
            <section style={{
                maxWidth: '1150px',
                margin: '-2.5rem auto 4rem',
                position: 'relative',
                zIndex: 2,
                padding: '0 clamp(0.85rem, 3vw, 1.5rem)'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
                    gap: '1.2rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    padding: 'clamp(1.2rem, 4vw, 2rem) clamp(1.2rem, 4vw, 2.5rem)',
                    boxShadow: '0 15px 35px rgba(68, 44, 27, 0.06)'
                }}>
                    {[
                        { icon: Award, number: '500+', label: 'Luxury Projects Delivered' },
                        { icon: ShieldCheck, number: '10-Year', label: 'Structural Warranty' },
                        { icon: Users, number: '100%', label: 'Bespoke Customization' },
                        { icon: Star, number: '15+', label: 'Master Craftsmen' }
                    ].map((stat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '12px',
                                background: 'rgba(204, 158, 76, 0.15)',
                                border: '1px solid rgba(204, 158, 76, 0.35)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-gold)',
                                flexShrink: 0
                            }}>
                                <stat.icon size={20} />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--accent-primary)', fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Cards Grid */}
            <section style={{
                maxWidth: '1240px',
                margin: '0 auto',
                padding: '0 clamp(0.85rem, 3vw, 1.5rem) 4rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                        color: 'var(--accent-primary)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '900',
                        marginBottom: '0.8rem'
                    }}>
                        Crafted Interior <span className="gold-text">Excellence.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', maxWidth: '600px', margin: '0 auto' }}>
                        From modular kitchens to bespoke wood partitions and fine art, explore our signature services.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Modular Kitchens',
                            desc: 'Sleek, ergonomic, and ultra-durable modular kitchen architectures built for modern living.',
                            img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Bespoke Wardrobes',
                            desc: 'Customized luxury wardrobe systems tailored precisely to your aesthetic and storage lifestyle.',
                            img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Artistic Wall Designs',
                            desc: 'Handcrafted premium wallpapers, textured wood paneling, and bespoke wall finishes.',
                            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800'
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="glass-card"
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{
                                height: '220px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease'
                                    }}
                                    className="feature-img"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(68, 44, 27, 0.85), transparent 60%)' }} />
                            </div>
                            <div style={{ padding: '1.5rem 1.5rem 1.8rem' }}>
                                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--accent-primary)', fontWeight: '800', fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>{feature.desc}</p>
                                <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--accent-gold)', fontWeight: '800', letterSpacing: '0.08em' }}>
                                    EXPLORE DETAILS <ArrowRight size={16} />
                                </Link>
                            </div>
                            <style>{`
                                .glass-card:hover .feature-img {
                                    transform: scale(1.08);
                                }
                            `}</style>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Home;
