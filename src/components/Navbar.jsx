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
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '0.7rem clamp(0.75rem, 3vw, 2rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '64px'
            }}>
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        textDecoration: 'none',
                        maxWidth: 'calc(100% - 50px)'
                    }}
                >
                    <img
                        src="/logo-icon-satin.png"
                        alt="Sree Annapoorna Interiors Logo"
                        style={{
                            height: 'clamp(2.4rem, 4.5vw, 3rem)',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            flexShrink: 0,
                            filter: 'drop-shadow(0 2px 6px rgba(204, 158, 76, 0.4))'
                        }}
                    />
                    <div className="brand-text-container">
                        <span className="brand-name-top">SREE ANNAPOORNA</span>
                        <span className="brand-name-bottom">INTERIORS</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
                        flexShrink: 0
                    }}
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? <X size={24} color="var(--accent-primary)" /> : <Menu size={24} color="var(--accent-primary)" />}
                </div>
            </nav>

            {/* Mobile Menu Drawer Overlay - Opens smoothly below header */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'fixed',
                            top: '64px',
                            right: 0,
                            bottom: 0,
                            left: 0,
                            zIndex: 90,
                            background: 'var(--bg-primary)',
                            padding: '1.5rem 1.25rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            overflowY: 'auto',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <NavLink
                                    to={item.path}
                                    onClick={closeMenu}
                                    style={({ isActive }) => ({
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        color: isActive ? 'var(--accent-gold)' : 'var(--accent-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.85rem',
                                        padding: '0.85rem 1.1rem',
                                        borderRadius: '12px',
                                        background: isActive ? 'rgba(204, 158, 76, 0.12)' : 'rgba(68, 44, 27, 0.03)',
                                        border: isActive ? '1px solid rgba(204, 158, 76, 0.35)' : '1px solid transparent'
                                    })}
                                >
                                    <item.icon size={22} />
                                    {item.name}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .brand-text-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.35rem;
                }
                .brand-name-top {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(1.1rem, 2.2vw, 1.7rem);
                    letter-spacing: -0.01em;
                    background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 60%, var(--accent-primary) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1;
                    white-space: nowrap;
                }
                .brand-name-bottom {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(1.1rem, 2.2vw, 1.7rem);
                    letter-spacing: 0.04em;
                    color: var(--accent-primary);
                    line-height: 1;
                    white-space: nowrap;
                }

                @media (max-width: 992px) {
                    .desktop-only { display: none !important; }
                    .mobile-only { display: block !important; }
                }

                @media (max-width: 640px) {
                    .brand-text-container {
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        gap: 0.15rem;
                    }
                    .brand-name-top {
                        font-size: 0.98rem;
                        line-height: 1;
                    }
                    .brand-name-bottom {
                        font-size: 0.72rem;
                        letter-spacing: 0.16em;
                        line-height: 1;
                    }
                }

                @media (max-width: 380px) {
                    .brand-name-top {
                        font-size: 0.88rem;
                    }
                    .brand-name-bottom {
                        font-size: 0.65rem;
                        letter-spacing: 0.14em;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
