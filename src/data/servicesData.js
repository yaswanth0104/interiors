import { ChefHat, Home, Tv, Layout, User, FileText, Palette } from 'lucide-react';

export const servicesData = [
    {
        id: 'modular-kitchen',
        title: 'Modular Kitchen',
        icon: ChefHat,
        color: 'var(--accent-primary)',
        tileImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'The heart of your home, reimagined with ergonomic layouts and modern accessories.',
        description: 'Our modular kitchens are designed to blend style with functionality. We offer a wide range of finishes, from acrylic and laminate to membrane and PU paint. Each kitchen is tailored to your cooking habits, providing maximum storage and ease of use.',
        mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.17 (1).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.19 (2).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.32.23.jpeg'
        ]
    },
    {
        id: 'wardrobes',
        title: 'Bespoke Wardrobes',
        icon: Home,
        color: 'var(--accent-gold)',
        tileImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Custom storage solutions that match your style and maximize your space.',
        description: 'From walk-in closets to sleek sliding doors, our wardrobes are crafted to organize your life beautifully. We use high-quality hardware and thoughtful internal configurations to ensure every item has its place.',
        mainImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.18 (2).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.32.25 (3).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (1).jpeg'
        ]
    },
    {
        id: 'tv-units',
        title: 'T.V. Units',
        icon: Tv,
        color: 'var(--accent-primary)',
        tileImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Custom-designed entertainment hubs that blend aesthetics with functionality.',
        description: 'Transform your living room with a signature TV unit. We focus on hidden wiring, premium finishes, and integrated lighting to create an entertainment hub that is both beautiful and practical.',
        mainImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.17.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (2).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.20 (1).jpeg'
        ]
    },
    {
        id: 'wood-partitions',
        title: 'Wood Partitions',
        icon: Layout,
        color: 'var(--accent-gold)',
        tileImage: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Artistic and functional wood partitions to divide your space elegantly.',
        description: 'Create distinct areas in your home without losing the open feel. Our wood partitions are designed as artistic focal points, using premium hardwoods and complex CNC patterns.',
        mainImage: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.21 (3).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.32.23 (2).jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.20.jpeg'
        ]
    },
    {
        id: 'dressing-table',
        title: 'Dressing Table',
        icon: User,
        color: 'var(--accent-primary)',
        tileImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Elegant dressing units with smart storage and premium lighting.',
        description: 'Our dressing units are designed to be personal sanctuaries. Featuring smart storage for essentials, distortion-free mirrors, and flattering integrated lighting.',
        mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.16.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.35.40.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.35.42.jpeg'
        ]
    },
    {
        id: 'wall-paper',
        title: 'Wall Paper',
        icon: FileText,
        color: 'var(--accent-gold)',
        tileImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Transform your walls with a vast collection of premium textures and patterns.',
        description: 'Give your walls character with our imported wallpaper collection. From subtle textures to bold metallic accents, we provide professional installation for a seamless finish.',
        mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.18.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.22.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.20.jpeg'
        ]
    },
    {
        id: 'arts-paintings',
        title: 'Arts & Paintings',
        icon: Palette,
        color: 'var(--accent-primary)',
        tileImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
        shortDesc: 'Handcrafted wood paintings and artistic finishes to add character to your home.',
        description: 'Our in-house artists create unique wood paintings and texture finishes that add a layer of soul to your interiors. Each piece is handcrafted to match your space\'s aesthetic.',
        mainImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            '/photos/WhatsApp Image 2026-02-24 at 15.31.18.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.31.22.jpeg',
            '/photos/WhatsApp Image 2026-02-24 at 15.32.22.jpeg'
        ]
    }
];
