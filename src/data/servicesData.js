import { ChefHat, Home, Tv, Layout, User, FileText, Palette } from 'lucide-react';

export const servicesData = [
    {
        id: 'modular-kitchen',
        title: 'Modular Kitchen',
        icon: ChefHat,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-3.jpeg',
        shortDesc: 'The heart of your home, reimagined with ergonomic layouts, premium acrylic finishes, and modern storage accessories.',
        description: 'Our modular kitchens are designed to blend effortless culinary convenience with royal aesthetic elegance. We offer an extensive selection of high-durability finishes, including anti-scratch acrylic, marine-grade PU paint, soft-touch laminates, and aluminum profile handles. Every layout is customized to your cooking workflow—maximizing corner utility, pantry storage, and soft-close drawer efficiency.',
        mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Marine-grade Boiling Water Proof (BWP) Plywood',
            'Soft-close Tandem Drawers & Pull-out Pantries',
            'Quartz & Granite Countertop Custom Fitting',
            'Integrated Lighting & Chimney Ventilation Setup'
        ],
        gallery: [
            '/photos/photo-3.jpeg',
            '/photos/photo-9.jpeg',
            '/photos/photo-23.jpeg',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'wardrobes',
        title: 'Bespoke Wardrobes',
        icon: Home,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-6.jpeg',
        shortDesc: 'Custom wardrobe architectures tailored precisely to your storage lifestyle and room aesthetics.',
        description: 'From sprawling walk-in closets with LED illuminated glass doors to space-saving floor-to-ceiling sliding wardrobes, our bespoke storage solutions bring order and luxury to your bedroom. We integrate specialized organizers for accessories, footwear, jewelry, and long garments using premium soft-close hardware.',
        mainImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Floor-to-Ceiling Sliding & Openable Door Designs',
            'Tinted Glass Doors with Motion-Sensor LED Strips',
            'Custom Jewelry Trays & Concealed Locker Units',
            'High-Gloss Lacquered & Veneer Exterior Finishes'
        ],
        gallery: [
            '/photos/photo-6.jpeg',
            '/photos/photo-13.jpeg',
            '/photos/photo-22.jpeg',
            '/photos/photo-26.jpeg',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'tv-units',
        title: 'T.V. Units',
        icon: Tv,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-4.jpeg',
        shortDesc: 'Custom-designed entertainment consoles featuring concealed wire management and ambient LED backlighting.',
        description: 'Transform your living area into a cinematic sanctuary with our custom TV wall units. We blend fluted louvers, marble-texture PVC paneling, bronze mirrors, and floating cabinetry to conceal cables while creating a breathtaking focal point in your home.',
        mainImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Concealed Wire Conduits & Hidden Power Management',
            'Fluted Wood Panels & Metallic Brass Trim Accents',
            'Ambient Warm LED Backlighting & Floating Shelf Displays',
            'Soundbar & Gaming Console Integrated Nook Storage'
        ],
        gallery: [
            '/photos/photo-4.jpeg',
            '/photos/photo-14.jpeg',
            '/photos/photo-16.jpeg',
            '/photos/photo-29.jpeg',
            'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'wood-partitions',
        title: 'Wood Partitions',
        icon: Layout,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-15.jpeg',
        shortDesc: 'Artistic wooden room dividers and CNC lattice screens that balance privacy with open space.',
        description: 'Divide living and dining zones gracefully without blocking natural light. Our custom wood partitions incorporate vertical teak slats, laser-cut CNC metal and wood screens, integrated display niches, and planter boxes designed to elevate open-plan interiors.',
        mainImage: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Solid Teak & Engineered Hardwood Slat Systems',
            'Precision Laser-Cut CNC Jaali & Metal Mesh Patterns',
            'Dual-Sided Storage Niches & Artifact Display Racks',
            'Custom Stains from Natural Oak to Deep Espresso'
        ],
        gallery: [
            '/photos/photo-15.jpeg',
            '/photos/photo-21.jpeg',
            '/photos/photo-28.jpeg',
            '/photos/photo-30.jpeg',
            'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'dressing-table',
        title: 'Dressing Table',
        icon: User,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-1.jpeg',
        shortDesc: 'Bespoke dressing units with Hollywood illuminated mirrors, velvet drawers, and smart storage.',
        description: 'Create your private personal vanity corner with our handcrafted dressing units. Designed with distortion-free full-length or arch mirrors, dimmable halo backlighting, velvet-lined cosmetics drawers, and sleek wall-mounted storage to keep clutter away.',
        mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Dimmable Touch-Sensor LED Halo & Vanity Lighting',
            'Velvet-Lined Compartments for Jewelry & Cosmetics',
            'Distortion-Free Arch & Full-Length Mirror Paneling',
            'Space-Saving Wall-Mounted & Corner Unit Options'
        ],
        gallery: [
            '/photos/photo-1.jpeg',
            '/photos/photo-5.jpeg',
            '/photos/photo-11.jpeg',
            '/photos/photo-31.jpeg',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'wall-paper',
        title: 'Wall Paper',
        icon: FileText,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-7.jpeg',
        shortDesc: 'Imported luxury wallpapers, 3D textured murals, and metallic accent wall coverings.',
        description: 'Breathe rich texture and artistic character into feature walls with our curated collection of imported non-woven wallpapers. From subtle damask motifs and botanical murals to geometric metallic foils, our master installers guarantee seamless edge matching and long-lasting adherence.',
        mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Washable & Scrub-Resistant Non-Woven Substrates',
            'Custom 3D Mural & Fabric-Texture Canvas Coverings',
            'Gold & Bronze Foil Accent Foil Wallpapers',
            'Seamless Professional Installation with Anti-Fungal Adhesive'
        ],
        gallery: [
            '/photos/photo-7.jpeg',
            '/photos/photo-12.jpeg',
            '/photos/photo-17.jpeg',
            '/photos/photo-27.jpeg',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        id: 'arts-paintings',
        title: 'Arts & Paintings',
        icon: Palette,
        color: 'var(--accent-gold)',
        tileImage: '/photos/photo-8.jpeg',
        shortDesc: 'Handcrafted wood relief art, custom textured canvas wall murals, and metallic art installations.',
        description: 'Every royal interior deserves bespoke artwork tailored to its color palette. Our in-house artists craft hand-carved wood relief panels, textured acrylic canvases, gold-leaf wall sculptures, and custom framed artworks engineered specifically to harmonize with your living space.',
        mainImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2000',
        features: [
            'Hand-Carved Teak & MDF Wood Relief Murals',
            '24k Gold-Leaf Accent Canvas Paintings',
            'Custom Color-Matched Artwork for Living & Dining Walls',
            'Museum-Quality Frame Profiles & Anti-Glare Glassing'
        ],
        gallery: [
            '/photos/photo-8.jpeg',
            '/photos/photo-10.jpeg',
            '/photos/photo-18.jpeg',
            '/photos/photo-19.jpeg',
            '/photos/photo-20.jpeg',
            'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800'
        ]
    }
];
