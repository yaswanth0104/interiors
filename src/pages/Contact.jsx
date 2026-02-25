import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setTimeout(() => setStatus('Message sent successfully!'), 1500);
    };

    return (
        <PageWrapper title="Get in Touch">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: '800' }}>Contact Information</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                        Ready to transform your space? Contact us today for a free consultation.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(14, 50, 126, 0.05)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>contact@annapoornainteriors.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>+91 98765 43210</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(14, 50, 126, 0.05)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Office</p>
                                <p style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>Your City, State, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card"
                    style={{ padding: '2.5rem', border: '1px solid rgba(60, 61, 55, 0.1)' }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)', fontWeight: '700' }}>Send an Inquiry</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>NAME</label>
                            <input
                                type="text"
                                required
                                style={{
                                    background: '#f8f9fa',
                                    border: '1px solid #e0e0e0',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>SUBJECT</label>
                            <select
                                style={{
                                    background: '#f8f9fa',
                                    border: '1px solid #e0e0e0',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="kitchen">Modular Kitchen</option>
                                <option value="wardrobe">Wardrobe Design</option>
                                <option value="tv-unit">TV Unit Design</option>
                                <option value="painting">Painting Service</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>MESSAGE</label>
                            <textarea
                                rows="4"
                                required
                                style={{
                                    background: '#f8f9fa',
                                    border: '1px solid #e0e0e0',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    resize: 'none',
                                    fontSize: '1rem'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: 'var(--royal-gradient)',
                                color: 'white',
                                padding: '1.2rem',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '1rem',
                                boxShadow: '0 10px 20px rgba(14, 50, 126, 0.2)'
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
