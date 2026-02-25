import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, title }) => (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
        {title && <h1 style={{
            fontSize: '3rem',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>{title}</h1>}
        {children}
    </motion.div>
);

export default PageWrapper;
