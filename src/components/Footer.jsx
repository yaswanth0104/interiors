import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            padding: 'clamp(2rem, 6vw, 4rem) 2rem',
            background: 'var(--royal-gradient)',
            color: 'white',
            borderTop: '1px solid var(--accent-gold)',
            marginTop: '4rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                gap: '2.5rem'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                        <img src="/logo-icon-gold.png" alt="Sree Annapoorna Interiors" style={{ height: '3.2rem', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(185, 155, 107, 0.4))' }} />
                        <div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: 'var(--accent-gold)', fontSize: '1.25rem', lineHeight: '1.1' }}>SREE ANNAPOORNA</div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#E8DCC4', fontSize: '0.95rem', letterSpacing: '0.08em' }}>INTERIORS</div>
                        </div>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '320px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        Transforming spaces into stunning realities with royal craftsmanship, bespoke interior architecture, and professional design excellence.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Services</h4>
                    <ul style={{ listStyle: 'none', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8' }}>
                        <li>Modular Kitchens</li>
                        <li>Bespoke Wardrobes</li>
                        <li>T.V. Unit Designs</li>
                        <li>Wood Partitions</li>
                        <li>Dressing Tables</li>
                        <li>Premium Wall Paper</li>
                        <li>Arts & Paintings</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Contact</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                        Email: sreeannapoornainteriors@gmail.com<br />
                        Phone: +91 70130 06137<br />
                        Address: North Bypass Road, Ongole
                    </p>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Sree Annapoorna Interiors. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
