import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { id: 1, src: '/photos/photo-1.jpeg', title: 'Modern Living', category: 'Living Room' },
        { id: 2, src: '/photos/photo-2.jpeg', title: 'Royal Bedroom', category: 'Bedroom' },
        { id: 3, src: '/photos/photo-3.jpeg', title: 'Modular Kitchen', category: 'Kitchen' },
        { id: 4, src: '/photos/photo-4.jpeg', title: 'Sleek TV Unit', category: 'TV Unit' },
        { id: 5, src: '/photos/photo-5.jpeg', title: 'Luxury Interior', category: 'Living Room' },
        { id: 6, src: '/photos/photo-6.jpeg', title: 'Custom Wardrobe', category: 'Bedroom' },
        { id: 7, src: '/photos/photo-7.jpeg', title: 'Artistic Wall', category: 'Painting' },
        { id: 8, src: '/photos/photo-8.jpeg', title: 'Premium Decor', category: 'Living Room' },
        { id: 9, src: '/photos/photo-9.jpeg', title: 'Designer Kitchen', category: 'Kitchen' },
        { id: 10, src: '/photos/photo-10.jpeg', title: 'Classic Finish', category: 'Living Room' },
        { id: 11, src: '/photos/photo-11.jpeg', title: 'Elegant Ceiling', category: 'Living Room' },
        { id: 12, src: '/photos/photo-12.jpeg', title: 'Modern Bath', category: 'Bathroom' },
        { id: 13, src: '/photos/photo-13.jpeg', title: 'Bespoke Bed', category: 'Bedroom' },
        { id: 14, src: '/photos/photo-14.jpeg', title: 'Crafted Unit', category: 'TV Unit' },
        { id: 15, src: '/photos/photo-15.jpeg', title: 'Styling Detail', category: 'Decor' },
        { id: 16, src: '/photos/photo-16.jpeg', title: 'Full Interior', category: 'Living Room' },
        { id: 17, src: '/photos/photo-17.jpeg', title: 'Texture Wall', category: 'Painting' },
        { id: 18, src: '/photos/photo-18.jpeg', title: 'Lounge Area', category: 'Living Room' },
        { id: 19, src: '/photos/photo-19.jpeg', title: 'Workspace', category: 'Office' },
        { id: 20, src: '/photos/photo-20.jpeg', title: 'Dining Space', category: 'Dining' },
        { id: 21, src: '/photos/photo-21.jpeg', title: 'Corner Styling', category: 'Decor' },
        { id: 22, src: '/photos/photo-22.jpeg', title: 'Luxury Suite', category: 'Bedroom' },
        { id: 23, src: '/photos/photo-23.jpeg', title: 'Open Plan', category: 'Living Room' },
        { id: 24, src: '/photos/photo-24.jpeg', title: 'Signature Kitchen', category: 'Kitchen' },
        { id: 25, src: '/photos/photo-25.jpeg', title: 'Master Bedroom', category: 'Bedroom' },
        { id: 26, src: '/photos/photo-26.jpeg', title: 'Grand Entry', category: 'Hall' },
        { id: 27, src: '/photos/photo-27.jpeg', title: 'Storage Solution', category: 'Wardrobe' },
        { id: 28, src: '/photos/photo-28.jpeg', title: 'Fine Finishing', category: 'Decor' },
        { id: 29, src: '/photos/photo-29.jpeg', title: 'Royal Touch', category: 'Living Room' },
        { id: 30, src: '/photos/photo-30.jpeg', title: 'Modern Classic', category: 'Living Room' },
        { id: 31, src: '/photos/photo-31.jpeg', title: 'Chic Interior', category: 'Living Room' },
    ];

    return (
        <PageWrapper title="Design Showcase" heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(1rem, 4vw, 2rem)',
            }}>
                {images.map((img, i) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card"
                        style={{
                            height: '350px',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url("${img.src}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.5s ease'
                        }} className="image-container">
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'linear-gradient(transparent, rgba(13, 14, 18, 0.95))',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} className="overlay">
                            <h4 style={{ color: '#F8F5EE', fontWeight: '700', fontFamily: "'Playfair Display', serif" }}>{img.title}</h4>
                            <p style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em' }}>{img.category}</p>
                        </div>

                        <style>{`
                          .glass-card:hover .overlay {
                            transform: translateY(0);
                          }
                          .glass-card:hover .image-container {
                            transform: scale(1.08);
                          }
                        `}</style>
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Gallery;
