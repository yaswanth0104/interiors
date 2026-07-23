import React, { useEffect } from 'react';

const defaultSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InteriorDesigner"],
    "name": "Sree Annapoorna Interiors",
    "image": "https://sreeannapoornainteriors.com/logo-icon-satin.png",
    "@id": "https://sreeannapoornainteriors.com",
    "url": "https://sreeannapoornainteriors.com",
    "telephone": "+917013006137",
    "email": "sreeannapoornainteriors@gmail.com",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "North Bypass Road, Mangamuru Junction, near Big Hanuman Statue",
        "addressLocality": "Ongole",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "523002",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 15.5057,
        "longitude": 80.0499
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
    }
};

const SEO = ({ title, description, path = '', image, schema }) => {
    const siteTitle = "Sree Annapoorna Interiors";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullUrl = `https://sreeannapoornainteriors.com${path}`;
    const fullImage = image || "https://sreeannapoornainteriors.com/logo-icon-satin.png";
    const metaDescription = description || "Sree Annapoorna Interiors crafts high-end residential & commercial spaces with royal craftsmanship, modular perfection, and timeless elegance in Ongole, Andhra Pradesh.";

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Update or create Meta Description
        let metaDescTag = document.querySelector('meta[name="description"]');
        if (!metaDescTag) {
            metaDescTag = document.createElement('meta');
            metaDescTag.setAttribute('name', 'description');
            document.head.appendChild(metaDescTag);
        }
        metaDescTag.setAttribute('content', metaDescription);

        // Canonical Link
        let canonicalTag = document.querySelector('link[rel="canonical"]');
        if (!canonicalTag) {
            canonicalTag = document.createElement('link');
            canonicalTag.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalTag);
        }
        canonicalTag.setAttribute('href', fullUrl);

        // Open Graph Meta Tags
        const ogTags = [
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: metaDescription },
            { property: 'og:url', content: fullUrl },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: fullImage },
            { property: 'og:site_name', content: siteTitle },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: fullTitle },
            { name: 'twitter:description', content: metaDescription },
            { name: 'twitter:image', content: fullImage }
        ];

        ogTags.forEach(({ property, name, content }) => {
            const attr = property ? `property="${property}"` : `name="${name}"`;
            let tag = document.querySelector(`meta[${attr}]`);
            if (!tag) {
                tag = document.createElement('meta');
                if (property) tag.setAttribute('property', property);
                if (name) tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        });

        // JSON-LD Schema Insertion
        let scriptTag = document.getElementById('jsonld-schema');
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.setAttribute('id', 'jsonld-schema');
            scriptTag.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptTag);
        }

        const combinedSchema = schema
            ? [defaultSchema, schema]
            : defaultSchema;

        scriptTag.textContent = JSON.stringify(combinedSchema, null, 2);

    }, [fullTitle, metaDescription, fullUrl, fullImage, schema]);

    return null;
};

export default SEO;
