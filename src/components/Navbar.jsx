import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, Grid, Image, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Categories', path: '/categories', icon: Grid },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact Us', path: '/contact', icon: Mail },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar" style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(251, 249, 246, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(60, 61, 55, 0.08)',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="logo"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none'
                }}
            >
                <div style={{
                    background: 'rgba(105, 117, 101, 0.05)',
                    padding: '0.4rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(105, 117, 101, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src="/WhatsApp Image 2026-02-11 at 11.31.12.jpeg"
                        alt="Sree Annapoorna Interiors Logo"
                        style={{ height: '2.5rem', width: 'auto', borderRadius: '4px' }}
                    />
                </div>
                <span style={{
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em',
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '1.1'
                }}>
                    <span style={{ color: 'var(--accent-primary)' }}>SREE ANNAPOORNA</span>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '400' }}>INTERIORS</span>
                </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                            fontWeight: isActive ? '700' : '400',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.95rem'
                        })}
                    >
                        <item.icon size={18} color={isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'} />
                        {item.name}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-only" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer' }}>
                {isOpen ? <X color="var(--accent-primary)" /> : <Menu color="var(--accent-primary)" />}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
