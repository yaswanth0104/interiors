import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Grid, Image, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Grid },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact Us', path: '/contact', icon: Mail },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="navbar" style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'var(--glass)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none'
                    }}
                >
                    <div style={{
                        background: 'white',
                        padding: '0.6rem',
                        borderRadius: '12px',
                        border: '1px solid var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}>
                        <img
                            src="/WhatsApp Image 2026-02-11 at 11.31.12 - Edited.png"
                            alt="Sree Annapoorna Interiors Logo"
                            style={{ height: '3.5rem', width: 'auto', borderRadius: '4px' }}
                        />
                    </div>
                    <span style={{
                        fontWeight: '700',
                        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        flexDirection: 'column',
                        lineHeight: '1.1'
                    }}>
                        <span style={{ color: 'var(--accent-primary)' }}>SREE ANNAPOORNA</span>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.7em', letterSpacing: '0.2em', fontWeight: '400' }}>INTERIORS</span>
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
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
                            {({ isActive }) => (
                                <>
                                    <item.icon size={18} color={isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'} />
                                    {item.name}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div
                    className="mobile-only"
                    onClick={toggleMenu}
                    style={{
                        cursor: 'pointer',
                        display: 'none',
                        padding: '0.5rem',
                        background: 'rgba(var(--accent-primary-rgb), 0.05)',
                        borderRadius: '10px'
                    }}
                >
                    {isOpen ? <X color="var(--accent-primary)" /> : <Menu color="var(--accent-primary)" />}
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            zIndex: 99,
                            background: 'var(--bg-primary)',
                            padding: '6rem 2rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <NavLink
                                    to={item.path}
                                    onClick={closeMenu}
                                    style={({ isActive }) => ({
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: isActive ? 'var(--accent-gold)' : 'var(--accent-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    })}
                                >
                                    <item.icon size={28} />
                                    {item.name}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 992px) {
                    .desktop-only { display: none !important; }
                    .mobile-only { display: block !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
