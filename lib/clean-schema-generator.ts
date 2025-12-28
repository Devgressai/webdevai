/**
 * Clean Schema Generator for webvello.com
 * 
 * Rules:
 * - NO invented ratings, reviews, or physical addresses
 * - Use Organization schema site-wide
 * - Add Service/FAQPage for service pages
 * - For GEO pages, include LocalBusiness ONLY if it doesn't imply physical office
 * 
 * Valid JSON-LD only - no commentary
 */

// ============================================================================
// ORGANIZATION SCHEMA - Use on ALL pages
// ============================================================================
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://www.webvello.com/#organization",
    "name": "Webvello",
    "alternateName": "Web Vello",
    "url": "https://www.webvello.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.webvello.com/logo.png",
      "width": 2048,
      "height": 2048
    },
    "description": "Webvello is a digital marketing agency specializing in SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development. The agency helps businesses improve visibility in both traditional search engines and AI-powered search platforms.",
    "slogan": "Design. Develop. Dominate.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-530-553-8883",
      "contactType": "sales",
      "email": "hello@webvello.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/webvello",
      "https://twitter.com/webvello"
    ],
    "knowsAbout": [
      "Search Engine Optimization",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "Local SEO",
      "Web Development",
      "React",
      "Tailwind CSS",
      "AI Search Optimization",
      "Digital Marketing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization to improve Google rankings and organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GEO Services",
            "description": "Generative Engine Optimization to improve visibility in AI search platforms like ChatGPT and Perplexity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AEO Services",
            "description": "Answer Engine Optimization for featured snippets and voice search"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Geo-targeted local search optimization for businesses serving specific cities and regions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development using React and Tailwind CSS"
          }
        }
      ]
    }
  }
}

// ============================================================================
// SERVICE SCHEMA - Use on service pages
// ============================================================================
export function generateServiceSchema(options: {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  serviceType: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${options.serviceUrl}#service`,
    "name": options.serviceName,
    "description": options.serviceDescription,
    "serviceType": options.serviceType,
    "url": options.serviceUrl,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.webvello.com/#organization",
      "name": "Webvello",
      "url": "https://www.webvello.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "category": "Digital Marketing Services"
  }
}

// ============================================================================
// FAQ SCHEMA - Use on pages with FAQ sections
// ============================================================================
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

// ============================================================================
// LOCAL BUSINESS SCHEMA - Use ONLY for GEO pages (no physical address)
// ============================================================================
export function generateGEOLocalBusinessSchema(options: {
  city: string
  cityState: string
  serviceUrl: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${options.serviceUrl}#localbusiness`,
    "name": `Webvello - ${options.cityState}`,
    "description": `Digital marketing services including SEO, GEO, and web development serving ${options.cityState}`,
    "url": options.serviceUrl,
    "telephone": "+1-530-553-8883",
    "email": "hello@webvello.com",
    "areaServed": {
      "@type": "City",
      "name": options.city,
      "addressCountry": "US"
    },
    "serviceType": [
      "SEO Services",
      "GEO Services",
      "Web Development",
      "Digital Marketing"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://www.webvello.com/#organization",
      "name": "Webvello"
    }
  }
}

// ============================================================================
// BREADCRUMB SCHEMA - Use for navigation breadcrumbs
// ============================================================================
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

// ============================================================================
// WEBPAGE SCHEMA - Use for general page info
// ============================================================================
export function generateWebPageSchema(options: {
  url: string
  name: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.url}#webpage`,
    "url": options.url,
    "name": options.name,
    "description": options.description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.webvello.com/#website"
    },
    "inLanguage": "en-US"
  }
}

// ============================================================================
// COMPREHENSIVE SCHEMA GENERATOR
// Combines multiple schemas into @graph format
// ============================================================================
export function generatePageSchema(options: {
  pageType: 'homepage' | 'service' | 'geo'
  url: string
  title: string
  description: string
  service?: {
    name: string
    description: string
    type: string
  }
  geo?: {
    city: string
    cityState: string
  }
  faqs?: Array<{ question: string; answer: string }>
  breadcrumbs?: Array<{ name: string; url: string }>
}) {
  const schemas: any[] = []

  // Always include Organization
  schemas.push(generateOrganizationSchema())

  // Add Service schema for service pages
  if (options.pageType === 'service' && options.service) {
    schemas.push(generateServiceSchema({
      serviceName: options.service.name,
      serviceDescription: options.service.description,
      serviceUrl: options.url,
      serviceType: options.service.type
    }))
  }

  // Add LocalBusiness for GEO pages (no physical address implied)
  if (options.pageType === 'geo' && options.geo) {
    schemas.push(generateGEOLocalBusinessSchema({
      city: options.geo.city,
      cityState: options.geo.cityState,
      serviceUrl: options.url
    }))
  }

  // Add FAQ schema if provided
  if (options.faqs && options.faqs.length > 0) {
    schemas.push(generateFAQSchema(options.faqs))
  }

  // Add Breadcrumbs if provided
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(options.breadcrumbs))
  }

  // Add WebPage schema
  schemas.push(generateWebPageSchema({
    url: options.url,
    name: options.title,
    description: options.description
  }))

  return {
    "@context": "https://schema.org",
    "@graph": schemas
  }
}

// ============================================================================
// USAGE EXAMPLE
// ============================================================================
// In your page component:
// const pageSchema = generatePageSchema({ ... })
// return (
//   <>
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
//     />
//     {/* Your page content */}
//   </>
// )

