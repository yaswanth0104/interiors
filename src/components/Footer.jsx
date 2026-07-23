import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, #442C1B 0%, #6B2717 100%)',
            color: '#FFFFFF',
            borderTop: '1px solid rgba(204, 158, 76, 0.4)',
            marginTop: '3rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '2rem'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                        <img src="/logo-icon-satin.png" alt="Sree Annapoorna Interiors" style={{ height: '2.8rem', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(204, 158, 76, 0.4))' }} />
                        <div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#CC9E4C', fontSize: '1.15rem', lineHeight: '1.1' }}>SREE ANNAPOORNA</div>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#E0D0B6', fontSize: '0.9rem', letterSpacing: '0.08em' }}>INTERIORS</div>
                        </div>
                    </div>
                    <p style={{ color: '#E0D0B6', opacity: 0.85, maxWidth: '320px', lineHeight: '1.6', fontSize: '0.92rem' }}>
                        Transforming spaces into stunning realities with royal craftsmanship, bespoke interior architecture, and professional design excellence.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '0.8rem', color: '#CC9E4C', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>Services</h4>
                    <ul style={{ listStyle: 'none', color: '#E0D0B6', opacity: 0.8, lineHeight: '1.8', fontSize: '0.92rem' }}>
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
                    <h4 style={{ marginBottom: '0.8rem', color: '#CC9E4C', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>Contact</h4>
                    <p style={{ color: '#E0D0B6', opacity: 0.8, lineHeight: '1.6', fontSize: '0.92rem', wordBreak: 'break-word' }}>
                        Email: sreeannapoornainteriors@gmail.com<br />
                        Phone: +91 70130 06137<br />
                        Address: North Bypass Road, Mangamuru Junction, near Big Hanuman Statue, Ongole
                    </p>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '2.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(204, 158, 76, 0.2)',
                color: '#E0D0B6',
                opacity: 0.65,
                fontSize: '0.85rem'
            }}>
                © {new Date().getFullYear()} Sree Annapoorna Interiors. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
