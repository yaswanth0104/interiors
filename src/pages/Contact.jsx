import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setTimeout(() => setStatus('Message sent successfully!'), 1500);
    };

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Sree Annapoorna Interiors",
        "url": "https://sreeannapoornainteriors.com/contact",
        "mainEntity": {
            "@type": "InteriorDesigner",
            "name": "Sree Annapoorna Interiors",
            "telephone": "+917013006137",
            "email": "sreeannapoornainteriors@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "North Bypass Road, Mangamuru Junction, near Big Hanuman Statue",
                "addressLocality": "Ongole",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "523002",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <PageWrapper title="Get in Touch" heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000">
            <SEO
                title="Contact Us | Book Free Interior Design Consultation in Ongole"
                description="Get in touch with Sree Annapoorna Interiors in Ongole. Call +91 70130 06137 or email sreeannapoornainteriors@gmail.com for a free 3D design consultation."
                path="/contact"
                schema={contactSchema}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'clamp(1.5rem, 5vw, 4rem)'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: '1.2rem', color: 'var(--accent-primary)', fontWeight: '800', fontFamily: "'Playfair Display', serif" }}>
                        Contact Information
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: 'clamp(0.95rem, 3vw, 1.05rem)' }}>
                        Ready to transform your space? Contact us today for a free consultation.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(68, 44, 27, 0.08)', borderRadius: '12px', color: 'var(--accent-primary)', flexShrink: 0 }}>
                                <Mail size={22} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Email</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)', wordBreak: 'break-all', fontSize: '0.95rem' }}>sreeannapoornainteriors@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(204, 158, 76, 0.15)', borderRadius: '12px', color: 'var(--accent-gold)', flexShrink: 0 }}>
                                <Phone size={22} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Phone</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)', fontSize: '0.95rem' }}>+91 70130 06137</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(68, 44, 27, 0.08)', borderRadius: '12px', color: 'var(--accent-primary)', flexShrink: 0 }}>
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Office</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)', lineHeight: '1.45', fontSize: '0.95rem' }}>
                                    North Bypass Road, Mangamuru Junction,<br />
                                    near Big Hanuman Statue, Ongole,<br />
                                    Andhra Pradesh 523002
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card"
                    style={{ padding: 'clamp(1.2rem, 4vw, 2.5rem)', border: '1px solid var(--glass-border)' }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <h3 style={{ marginBottom: '0.2rem', color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1.3rem', fontFamily: "'Playfair Display', serif" }}>Send an Inquiry</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.05em' }}>NAME</label>
                            <input
                                type="text"
                                required
                                style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.75rem 0.9rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '0.98rem',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.05em' }}>SUBJECT</label>
                            <select
                                style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.75rem 0.9rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '0.98rem',
                                    width: '100%'
                                }}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="kitchen">Modular Kitchen</option>
                                <option value="wardrobe">Wardrobe Design</option>
                                <option value="tv-unit">TV Unit Design</option>
                                <option value="painting">Painting Service</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.05em' }}>MESSAGE</label>
                            <textarea
                                rows="4"
                                required
                                style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.75rem 0.9rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    resize: 'none',
                                    fontSize: '0.98rem',
                                    width: '100%'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: 'linear-gradient(135deg, #442C1B 0%, #6B2717 100%)',
                                color: 'white',
                                padding: '0.95rem 1.5rem',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '0.98rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '0.5rem',
                                boxShadow: '0 8px 20px rgba(68, 44, 27, 0.25)',
                                width: '100%'
                            }}
                        >
                            {status || <>Send Message <Send size={18} /></>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Contact;
