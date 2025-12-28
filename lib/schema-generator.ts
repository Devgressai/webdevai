/**
 * Schema Markup Generator
 * 
 * Comprehensive schema markup generator for all page types
 * Supports: Service, LocalBusiness, Article, BreadcrumbList, FAQPage, and more
 */

interface SchemaGeneratorOptions {
  url: string
  title: string
  description: string
  image?: string
  city?: string
  service?: string
  industry?: string
}

// Organization Schema - Base for all pages
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.webvello.com/logo.png",
      "width": 2048,
      "height": 2048
    },
    "description": "Digital Marketing Agency specializing in AI-powered SEO, local search optimization, and conversion-focused web development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "United States",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-530-553-8883",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"],
      "email": "hello@webvello.com"
    },
    "sameAs": [
      "https://twitter.com/webvello",
      "https://linkedin.com/company/webvello",
      "https://facebook.com/webvello"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
    "slogan": "Design. Develop. Dominate.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

// LocalBusiness Schema - For city-specific pages
export function generateLocalBusinessSchema(city: string, cityState: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://www.webvello.com/${city}#localbusiness`,
    "name": `Web Vello - ${cityState}`,
    "image": "https://www.webvello.com/logo.png",
    "url": `https://www.webvello.com/${city}`,
    "telephone": "+1-530-553-8883",
    "email": "hello@webvello.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityState.split(',')[0].trim(),
      "addressRegion": cityState.split(',')[1]?.trim() || "US",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.0902",
      "longitude": "-95.7129"
    },
    "areaServed": {
      "@type": "City",
      "name": cityState.split(',')[0].trim()
    },
    "serviceType": [
      "Web Design",
      "Web Development",
      "SEO Services",
      "Local SEO",
      "Digital Marketing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }
}

// Service Schema - For service-specific pages
export function generateServiceSchema(options: SchemaGeneratorOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${options.url}#service`,
    "serviceType": options.service || options.title,
    "name": options.title,
    "description": options.description,
    "url": options.url,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.webvello.com/#organization",
      "name": "Web Vello"
    },
    "areaServed": options.city ? {
      "@type": "City",
      "name": options.city
    } : {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${options.service || options.title} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": options.title,
            "description": options.description
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }
}

// Article Schema - For blog posts
export function generateArticleSchema(options: {
  url: string
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author?: string
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${options.url}#article`,
    "headline": options.title,
    "description": options.description,
    "image": {
      "@type": "ImageObject",
      "url": options.image,
      "width": 1200,
      "height": 630
    },
    "datePublished": options.datePublished,
    "dateModified": options.dateModified,
    "author": {
      "@type": "Person",
      "name": options.author || "Web Vello Team",
      "url": "https://www.webvello.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.webvello.com/#organization",
      "name": "Web Vello",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webvello.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": options.url
    },
    "keywords": options.keywords?.join(', ') || "",
    "articleSection": "Digital Marketing",
    "inLanguage": "en-US"
  }
}

// BreadcrumbList Schema - For navigation
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

// FAQPage Schema - For FAQ sections
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// WebPage Schema - For general pages
export function generateWebPageSchema(options: SchemaGeneratorOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.url}#webpage`,
    "url": options.url,
    "name": options.title,
    "description": options.description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.webvello.com/#website"
    },
    "about": {
      "@type": "Thing",
      "name": options.service || "Digital Marketing"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": options.image || "https://www.webvello.com/og-image.jpg"
    },
    "inLanguage": "en-US"
  }
}

// Review/Rating Schema - For testimonials
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Web Vello Digital Marketing Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  }
}

// HowTo Schema - For process/guides
export function generateHowToSchema(options: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; url?: string; image?: string }>
  totalTime?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": options.name,
    "description": options.description,
    "totalTime": options.totalTime || "P7D",
    "step": options.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.image
    }))
  }
}

// Comprehensive Schema Generator - Combines multiple schemas
export function generateComprehensiveSchema(options: SchemaGeneratorOptions & {
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
  reviews?: Array<{ author: string; rating: number; reviewBody: string; datePublished: string }>
}) {
  const schemas: any[] = []

  // Always include Organization
  schemas.push(generateOrganizationSchema())

  // Add WebPage schema
  schemas.push(generateWebPageSchema(options))

  // Add Service schema if service-related
  if (options.service) {
    schemas.push(generateServiceSchema(options))
  }

  // Add LocalBusiness if city-specific
  if (options.city) {
    const cityState = options.city.replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    schemas.push(generateLocalBusinessSchema(options.city, cityState))
  }

  // Add Breadcrumbs if provided
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(options.breadcrumbs))
  }

  // Add FAQ if provided
  if (options.faqs && options.faqs.length > 0) {
    schemas.push(generateFAQSchema(options.faqs))
  }

  // Add Reviews if provided
  if (options.reviews && options.reviews.length > 0) {
    schemas.push(generateReviewSchema(options.reviews))
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemas
  }
}

