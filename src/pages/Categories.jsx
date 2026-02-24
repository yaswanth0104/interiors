import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Tv, Home, ChefHat, Palette } from 'lucide-react';

const categories = [
    {
        title: 'TV Units',
        desc: 'Custom-designed entertainment hubs that blend aesthetics with functionality. Hidden wiring, premium finishes, and integrated lighting.',
        icon: Tv,
        color: 'var(--accent-primary)'
    },
    {
        title: 'Wardrobes',
        desc: 'Bespoke storage solutions ranging from walk-in closets to sleek sliding wardrobes. Maximize your space with intelligent design.',
        icon: Home,
        color: 'var(--accent-gold)'
    },
    {
        title: 'Modular Kitchen',
        desc: 'The heart of your home, reimagined. Ergonomic layouts, high-quality materials, and state-of-the-art kitchen accessories.',
        icon: ChefHat,
        color: 'var(--accent-primary)'
    },
    {
        title: 'Paintings & Finishes',
        desc: 'Elevate your walls with custom wood paintings, textures, and artistic finishes that add a personal touch to your home.',
        icon: Palette,
        color: 'var(--accent-gold)'
    }
];

const Categories = () => {
    return (
        <PageWrapper title="Our Specialties">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '3rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(14, 50, 126, 0.1)' }}
                    >
                        {/* Background Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '150px',
                            height: '150px',
                            background: cat.color,
                            opacity: 0.05,
                            filter: 'blur(50px)',
                            zIndex: 0
                        }} />

                        <cat.icon size={48} color={cat.color} style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }} />
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', position: 'relative', zIndex: 1, color: 'var(--accent-primary)', fontWeight: '700' }}>{cat.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', position: 'relative', zIndex: 1, lineHeight: '1.6' }}>{cat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Categories;
