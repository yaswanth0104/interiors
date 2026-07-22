import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            padding: 'clamp(2rem, 6vw, 4rem) 2rem',
            background: 'linear-gradient(135deg, #333D29 0%, #582F0E 100%)',
            color: '#FFFFFF',
            borderTop: '1px solid rgba(127, 79, 36, 0.4)',
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
                        <img src="/logo-icon-earth.png" alt="Sree Annapoorna Interiors" style={{ height: '3.2rem', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(164, 172, 134, 0.4))' }} />
                        <div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#A4AC86', fontSize: '1.25rem', lineHeight: '1.1' }}>SREE ANNAPOORNA</div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#C2C5AA', fontSize: '0.95rem', letterSpacing: '0.08em' }}>INTERIORS</div>
                        </div>
                    </div>
                    <p style={{ color: '#C2C5AA', opacity: 0.85, maxWidth: '320px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        Transforming spaces into stunning realities with royal craftsmanship, bespoke interior architecture, and professional design excellence.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: '#A4AC86' }}>Services</h4>
                    <ul style={{ listStyle: 'none', color: '#C2C5AA', opacity: 0.8, lineHeight: '1.8' }}>
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
                    <h4 style={{ marginBottom: '1rem', color: '#A4AC86' }}>Contact</h4>
                    <p style={{ color: '#C2C5AA', opacity: 0.8, lineHeight: '1.6' }}>
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
                borderTop: '1px solid rgba(164, 172, 134, 0.2)',
                color: '#C2C5AA',
                opacity: 0.6,
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Sree Annapoorna Interiors. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
