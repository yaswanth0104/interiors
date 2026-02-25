import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            padding: '4rem 2rem',
            background: 'linear-gradient(to bottom, #3c3d37, #1e201e)',
            color: 'white',
            borderTop: '1px solid var(--accent-gold)',
            marginTop: '4rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                <div>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.5rem' }}>SREE ANNAPOORNA INTERIORS</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '300px' }}>
                        Transforming spaces into stunning realities with royal craftsmanship and professional design.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Services</h4>
                    <ul style={{ listStyle: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Modular Kitchens</li>
                        <li style={{ marginBottom: '0.5rem' }}>Wardrobe Design</li>
                        <li style={{ marginBottom: '0.5rem' }}>TV Unit Designs</li>
                        <li>Custom Paintings</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Contact</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Email: contact@annapoornainteriors.com<br />
                        Phone: +91 98765 43210<br />
                        Address: Your City, State
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
