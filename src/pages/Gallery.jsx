import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { id: 1, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.16 (1).jpeg', title: 'Modern Living', category: 'Living Room' },
        { id: 2, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.16.jpeg', title: 'Royal Bedroom', category: 'Bedroom' },
        { id: 3, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.17 (1).jpeg', title: 'Modular Kitchen', category: 'Kitchen' },
        { id: 4, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.17.jpeg', title: 'Sleek TV Unit', category: 'TV Unit' },
        { id: 5, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.18 (1).jpeg', title: 'Luxury Interior', category: 'Living Room' },
        { id: 6, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.18 (2).jpeg', title: 'Custom Wardrobe', category: 'Bedroom' },
        { id: 7, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.18.jpeg', title: 'Artistic Wall', category: 'Painting' },
        { id: 8, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.19 (1).jpeg', title: 'Premium Decor', category: 'Living Room' },
        { id: 9, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.19 (2).jpeg', title: 'Designer Kitchen', category: 'Kitchen' },
        { id: 10, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.19.jpeg', title: 'Classic Finish', category: 'Living Room' },
        { id: 11, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.20 (1).jpeg', title: 'Elegant Ceiling', category: 'Living Room' },
        { id: 12, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.20.jpeg', title: 'Modern Bath', category: 'Bathroom' },
        { id: 13, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (1).jpeg', title: 'Bespoke Bed', category: 'Bedroom' },
        { id: 14, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (2).jpeg', title: 'Crafted Unit', category: 'TV Unit' },
        { id: 15, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (3).jpeg', title: 'Styling Detail', category: 'Decor' },
        { id: 16, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.21.jpeg', title: 'Full Interior', category: 'Living Room' },
        { id: 17, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.22.jpeg', title: 'Texture Wall', category: 'Painting' },
        { id: 18, src: '/photos/WhatsApp Image 2026-02-24 at 15.31.26.jpeg', title: 'Lounge Area', category: 'Living Room' },
        { id: 19, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.22.jpeg', title: 'Workspace', category: 'Office' },
        { id: 20, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.23 (1).jpeg', title: 'Dining Space', category: 'Dining' },
        { id: 21, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.23 (2).jpeg', title: 'Corner Styling', category: 'Decor' },
        { id: 22, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.23 (3).jpeg', title: 'Luxury Suite', category: 'Bedroom' },
        { id: 23, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.23.jpeg', title: 'Open Plan', category: 'Living Room' },
        { id: 24, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.25 (1).jpeg', title: 'Master Bedroom', category: 'Bedroom' },
        { id: 25, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.25 (2).jpeg', title: 'Grand Entry', category: 'Hall' },
        { id: 26, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.25 (3).jpeg', title: 'Storage Solution', category: 'Wardrobe' },
        { id: 27, src: '/photos/WhatsApp Image 2026-02-24 at 15.32.25.jpeg', title: 'Fine Finishing', category: 'Decor' },
        { id: 28, src: '/photos/WhatsApp Image 2026-02-24 at 15.35.40.jpeg', title: 'Royal Touch', category: 'Living Room' },
        { id: 29, src: '/photos/WhatsApp Image 2026-02-24 at 15.35.41 (2).jpeg', title: 'Modern Classic', category: 'Living Room' },
        { id: 30, src: '/photos/WhatsApp Image 2026-02-24 at 15.35.42 (1).jpeg', title: 'Chic Interior', category: 'Living Room' },
        { id: 31, src: '/photos/WhatsApp Image 2026-02-24 at 15.35.42.jpeg', title: 'Elegant Space', category: 'Living Room' },
    ];

    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Sree Annapoorna Interiors Project Portfolio Gallery",
        "url": "https://sreeannapoornainteriors.com/gallery",
        "description": "Explore real project photos of luxury modular kitchens, wardrobes, living rooms, and custom wood interiors completed in Ongole."
    };

    return (
        <PageWrapper title="Design Showcase" heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000">
            <SEO
                title="Interior Design Gallery & Project Portfolio | Ongole"
                description="View our photo gallery of completed interior design projects in Ongole. Modular kitchens, luxury wardrobes, TV units, wallpapers & custom wood art."
                path="/gallery"
                schema={gallerySchema}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
                gap: 'clamp(1rem, 3vw, 1.8rem)',
            }}>
                {images.map((img, i) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 6) * 0.05 }}
                        className="glass-card gallery-item"
                        style={{
                            height: 'clamp(260px, 35vh, 320px)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '16px'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url("${encodeURI(img.src)}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s ease'
                        }} className="image-container" />

                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1rem 1.2rem',
                            background: 'linear-gradient(to top, rgba(51, 61, 41, 0.95) 0%, rgba(51, 61, 41, 0.4) 70%, transparent 100%)',
                            transition: 'all 0.3s ease'
                        }} className="overlay">
                            <h4 style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>{img.title}</h4>
                            <p style={{ color: '#E0D0B6', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.08em' }}>{img.category}</p>
                        </div>

                        <style>{`
                          .gallery-item:hover .image-container {
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
