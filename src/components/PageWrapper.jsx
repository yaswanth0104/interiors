import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, title, heroImage }) => (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: '100vh' }}
    >
        {heroImage && (
            <div style={{
                height: 'clamp(220px, 35vh, 400px)',
                width: '100%',
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.7)), url("${heroImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 1rem',
                marginBottom: 'clamp(2rem, 5vw, 4rem)'
            }}>
                {title && <h1 style={{
                    fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '0.5rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                    fontFamily: "'Playfair Display', serif"
                }}>{title}</h1>}
                <div style={{ width: '60px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px' }} />
            </div>
        )}

        <div style={{
            padding: heroImage ? '0 clamp(1rem, 4vw, 2rem) 4rem' : 'clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 2rem)',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {!heroImage && title && <h1 style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
                fontWeight: '800',
                marginBottom: '2.5rem',
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Playfair Display', serif"
            }}>{title}</h1>}
            {children}
        </div>
    </motion.div>
);

export default PageWrapper;
