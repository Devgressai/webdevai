/**
 * Enhanced Schema Generator for Location Landing Pages
 * 
 * Generates comprehensive schema markup for location-specific pages
 * including LocalBusiness, Service, FAQPage, and BreadcrumbList schemas
 * with proper serviceArea definitions
 */

interface LocationInfo {
  city: string
  state: string
  stateCode: string
  fullName: string
  slug: string
  island?: string // e.g., "Big Island", "Oahu"
  areasServed?: string[] // Neighborhoods/nearby areas
}

interface FAQ {
  question: string
  answer: string
}

interface Service {
  name: string
  description: string
  href: string
}

/**
 * Generate comprehensive schema markup for location landing pages
 * Returns an array of schema objects for the SchemaMarkup component
 */
export function generateLocationPageSchema(
  locationInfo: LocationInfo,
  faqs: FAQ[],
  services?: Service[]
): any[] {
  const { city, state, stateCode, fullName, slug, island, areasServed } = locationInfo
  const pageUrl = `https://www.webvello.com/locations/hawaii/${slug}`

  const schemas: any[] = []

  // 1. Organization Schema - Base schema for all pages
  schemas.push({
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
    "description": "Webvello is a digital marketing agency specializing in SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development.",
    "slogan": "Design. Develop. Dominate.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "State",
        "name": state
      }
    ],
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
    ]
  })

  // 2. LocalBusiness Schema for the specific location
  const localBusinessSchema: any = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pageUrl}#localbusiness`,
    "name": `Web Vello - ${city}, ${stateCode}`,
    "alternateName": `Webvello ${city}`,
    "image": "https://www.webvello.com/logo.png",
    "url": pageUrl,
    "telephone": "+1-530-553-8883",
    "email": "hello@webvello.com",
    "priceRange": "$$-$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": stateCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city,
        "containedIn": {
          "@type": "State",
          "name": state
        }
      }
    ],
    "serviceType": [
      "Web Design",
      "Web Development",
      "SEO Services",
      "Local SEO",
      "Digital Marketing",
      "AI SEO",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Technical SEO",
      "Web Application Development"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  // Add island to areaServed if provided
  if (island) {
    localBusinessSchema.areaServed.push({
      "@type": "Place",
      "name": island,
      "containedIn": {
        "@type": "State",
        "name": state
      }
    })
  }

  // Add specific neighborhoods/areas served if provided
  if (areasServed && areasServed.length > 0) {
    areasServed.forEach(area => {
      localBusinessSchema.areaServed.push({
        "@type": "Place",
        "name": area,
        "containedIn": {
          "@type": "City",
          "name": city
        }
      })
    })
  }

  schemas.push(localBusinessSchema)

  // 3. Service Schema for each service offered
  if (services && services.length > 0) {
    services.slice(0, 6).forEach((service, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service-${index}`,
        "name": service.name,
        "description": service.description,
        "provider": {
          "@id": `${pageUrl}#localbusiness`
        },
        "areaServed": {
          "@type": "City",
          "name": city
        },
        "url": `https://www.webvello.com${service.href}`
      })
    })
  }

  // 4. WebPage Schema for this specific page
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": `Professional Digital Marketing Services in ${fullName} | Web Vello`,
    "description": `Partner with Web Vello in ${fullName} for high-converting web design, SEO, and AI-powered marketing programs that help ${city} businesses scale revenue.`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.webvello.com/#website"
    },
    "about": {
      "@type": "Thing",
      "name": "Digital Marketing Services"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `https://www.webvello.com/og-${slug}.jpg`
    },
    "inLanguage": "en-US",
    "breadcrumb": {
      "@id": `${pageUrl}#breadcrumb`
    }
  })

  // 5. FAQPage Schema - if FAQs are provided
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faqpage`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
  }

  // 6. BreadcrumbList Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.webvello.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.webvello.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": state,
        "item": `https://www.webvello.com/locations/hawaii`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": city,
        "item": pageUrl
      }
    ]
  })

  return schemas
}

