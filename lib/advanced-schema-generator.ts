/**
 * Advanced Schema Generator
 * 
 * Automatically generates comprehensive structured data for different page types
 * Helps improve search engine rich snippets and visibility
 */

export interface TestimonialData {
  author: string
  role: string
  company: string
  content: string
  rating: number
  date?: string
}

export interface FAQData {
  question: string
  answer: string
}

export interface ServiceData {
  name: string
  description: string
  url: string
  price?: string
  features?: string[]
}

export interface CityData {
  city: string
  state: string
  stateCode: string
}

/**
 * Generate Organization Schema with Reviews
 */
export function generateOrganizationWithReviewsSchema(testimonials: TestimonialData[]) {
  const reviews = testimonials.map(t => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "datePublished": t.date || new Date().toISOString().split('T')[0],
    "reviewBody": t.content,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating,
      "bestRating": "5",
      "worstRating": "1"
    }
  }))

  const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://webvello.com",
    "logo": "https://webvello.com/logo.png",
    "description": "Professional AI-powered SEO, web development, and digital marketing services",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-737-888-5723",
      "contactType": "sales",
      "email": "hello@webvello.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/webvello",
      "https://twitter.com/webvello"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews
  }
}

/**
 * Generate FAQ Schema for Service Pages
 */
export function generateFAQSchema(faqs: FAQData[]) {
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

/**
 * Generate Service Schema with Reviews
 */
export function generateServiceSchema(service: ServiceData, testimonials?: TestimonialData[]) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "provider": {
      "@type": "Organization",
      "name": "Web Vello",
      "url": "https://webvello.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  }

  if (service.price) {
    schema.offers = {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD"
    }
  }

  if (testimonials && testimonials.length > 0) {
    const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return schema
}

/**
 * Generate LocalBusiness Schema for City Pages
 */
export function generateLocalBusinessSchema(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Web Vello - ${city.city}, ${city.stateCode}`,
    "url": `https://webvello.com/${city.city.toLowerCase().replace(/\s+/g, '-')}-${city.stateCode.toLowerCase()}`,
    "telephone": "+1-737-888-5723",
    "email": "hello@webvello.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.city,
      "addressRegion": city.stateCode,
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city.city,
        "containedInPlace": {
          "@type": "State",
          "name": city.state
        }
      }
    ],
    "description": `Professional SEO, web development, and digital marketing services in ${city.city}, ${city.state}. Trusted by local businesses for 300%+ growth.`,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.linkedin.com/company/webvello",
      "https://twitter.com/webvello"
    ]
  }
}

/**
 * Generate Article Schema for Blog Posts
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author?: string
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author || "Web Vello Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web Vello",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webvello.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    ...(article.keywords && article.keywords.length > 0 && {
      "keywords": article.keywords.join(", ")
    })
  }
}

/**
 * Generate Breadcrumb Schema
 */
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

/**
 * Generate WebSite Schema with Search Action
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Web Vello",
    "url": "https://webvello.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://webvello.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}

/**
 * Generate Complete Homepage Schema (multiple types)
 */
export function generateHomepageSchema(testimonials: TestimonialData[], faqs: FAQData[]) {
  return [
    generateOrganizationWithReviewsSchema(testimonials),
    generateWebsiteSchema(),
    generateFAQSchema(faqs)
  ]
}

/**
 * Generate Complete Service Page Schema
 */
export function generateServicePageSchema(
  service: ServiceData,
  faqs: FAQData[],
  testimonials?: TestimonialData[]
) {
  return [
    generateServiceSchema(service, testimonials),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://webvello.com" },
      { name: "Services", url: "https://webvello.com/services" },
      { name: service.name, url: service.url }
    ])
  ]
}

/**
 * Generate Complete City Page Schema
 */
export function generateCityPageSchema(city: CityData, faqs: FAQData[]) {
  return [
    generateLocalBusinessSchema(city),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://webvello.com" },
      { name: "Locations", url: "https://webvello.com/locations" },
      { name: `${city.city}, ${city.stateCode}`, url: `https://webvello.com/${city.city.toLowerCase().replace(/\s+/g, '-')}-${city.stateCode.toLowerCase()}` }
    ])
  ]
}

/**
 * Generate Complete Blog Post Schema
 */
export function generateBlogPostSchema(
  article: {
    title: string
    description: string
    url: string
    image: string
    datePublished: string
    dateModified: string
    author?: string
    keywords?: string[]
  },
  faqs?: FAQData[]
) {
  const schemas = [
    generateArticleSchema(article),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://webvello.com" },
      { name: "Blog", url: "https://webvello.com/blog" },
      { name: article.title, url: article.url }
    ])
  ]

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs))
  }

  return schemas
}
