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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Information</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                        Ready to transform your space? Contact us today for a free consultation.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'var(--glass)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</p>
                                <p style={{ fontWeight: '600' }}>contact@annapoornainteriors.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'var(--glass)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</p>
                                <p style={{ fontWeight: '600' }}>+91 98765 43210</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.8rem', background: 'var(--glass)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Office</p>
                                <p style={{ fontWeight: '600' }}>Your City, State, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card"
                    style={{ padding: '2.5rem' }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Send an Inquiry</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Subject</label>
                            <select
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none'
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
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea
                                rows="4"
                                required
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: 'var(--accent-primary)',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '1rem'
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
