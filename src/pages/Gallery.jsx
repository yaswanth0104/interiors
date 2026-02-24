import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Using placeholders for demonstration, real images would be here
    const images = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        title: `Project ${i + 1}`,
        category: i % 2 === 0 ? 'Living Room' : 'Kitchen'
    }));

    return (
        <PageWrapper title="Design Showcase">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
            }}>
                {images.map((img, i) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{
                            height: '350px',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: '1px solid rgba(14, 50, 126, 0.1)'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(45deg, #f0f2f5, white)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.1em' }}>ANNAPOORNA DESIGN</span>
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'linear-gradient(transparent, rgba(14, 50, 126, 0.9))',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} className="overlay">
                            <h4 style={{ color: 'white', fontWeight: '700' }}>{img.title}</h4>
                            <p style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '600' }}>{img.category}</p>
                        </div>

                        <style>{`
              .glass-card:hover .overlay {
                transform: translateY(0);
              }
            `}</style>
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Gallery;
