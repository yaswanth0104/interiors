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
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '0.8rem clamp(0.85rem, 3vw, 2rem)',
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
                        gap: '0.6rem',
                        textDecoration: 'none'
                    }}
                >
                    <img
                        src="/logo-icon-satin.png"
                        alt="Sree Annapoorna Interiors Logo"
                        style={{
                            height: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            filter: 'drop-shadow(0 2px 6px rgba(204, 158, 76, 0.4))'
                        }}
                    />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.35rem',
                        flexWrap: 'nowrap'
                    }}>
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '900',
                            fontSize: 'clamp(1rem, 2.5vw, 1.7rem)',
                            letterSpacing: '-0.01em',
                            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 60%, var(--accent-primary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: '1',
                            whiteSpace: 'nowrap'
                        }}>SREE ANNAPOORNA</span>
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '900',
                            fontSize: 'clamp(1rem, 2.5vw, 1.7rem)',
                            letterSpacing: '0.04em',
                            color: 'var(--accent-primary)',
                            lineHeight: '1',
                            whiteSpace: 'nowrap'
                        }}>INTERIORS</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                                fontWeight: isActive ? '700' : '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.95rem'
                            })}
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon size={18} color={isActive ? 'var(--accent-gold)' : 'var(--text-secondary)'} />
                                    {item.name}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <div
                    className="mobile-only"
                    onClick={toggleMenu}
                    style={{
                        cursor: 'pointer',
                        display: 'none',
                        padding: '0.45rem',
                        background: 'rgba(var(--accent-primary-rgb), 0.08)',
                        borderRadius: '10px',
                        marginLeft: '0.5rem'
                    }}
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? <X size={24} color="var(--accent-primary)" /> : <Menu size={24} color="var(--accent-primary)" />}
                </div>
            </nav>

            {/* Mobile Menu Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            zIndex: 99,
                            background: 'var(--bg-primary)',
                            padding: '5.5rem 1.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            overflowY: 'auto'
                        }}
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <NavLink
                                    to={item.path}
                                    onClick={closeMenu}
                                    style={({ isActive }) => ({
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: isActive ? 'var(--accent-gold)' : 'var(--accent-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '14px',
                                        background: isActive ? 'rgba(204, 158, 76, 0.12)' : 'transparent',
                                        border: isActive ? '1px solid rgba(204, 158, 76, 0.3)' : '1px solid transparent'
                                    })}
                                >
                                    <item.icon size={24} />
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
