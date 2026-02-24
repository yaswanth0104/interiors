import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            padding: '4rem 2rem',
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--glass-border)',
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
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Sree Annapoorna Interiors</h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                        Transforming spaces into stunning realities. Quality craftsmanship and modern design for your dream home.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Services</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Modular Kitchens</li>
                        <li style={{ marginBottom: '0.5rem' }}>Wardrobe Design</li>
                        <li style={{ marginBottom: '0.5rem' }}>TV Unit Designs</li>
                        <li>Custom Paintings</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
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
                borderTop: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Sree Annapoorna Interiors. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
