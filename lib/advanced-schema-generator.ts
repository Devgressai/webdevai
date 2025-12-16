/**
 * Advanced Schema Generator for City Pages
 * 
 * Generates comprehensive schema markup for city-specific pages
 * including LocalBusiness, Organization, and FAQPage schemas
 */

interface CityInfo {
  city: string
  state: string
  stateCode: string
}

interface FAQ {
  question: string
  answer: string
}

/**
 * Generate comprehensive schema markup for city pages
 * Returns an array of schema objects for the SchemaMarkup component
 */
export function generateCityPageSchema(
  cityInfo: CityInfo,
  faqs: FAQ[]
): any[] {
  const { city, state, stateCode } = cityInfo
  const citySlug = city.toLowerCase().replace(/\s+/g, '-')
  const cityPageUrl = `https://www.webvello.com/${citySlug}`

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
    "areaServed": {
      "@type": "Country",
      "name": "United States"
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
    ]
  })

  // 2. LocalBusiness/ProfessionalService Schema for the specific city
  schemas.push({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${cityPageUrl}#localbusiness`,
    "name": `Web Vello - ${city}, ${stateCode}`,
    "image": "https://www.webvello.com/logo.png",
    "url": cityPageUrl,
    "telephone": "+1-737-888-5723",
    "email": "hello@webvello.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": stateCode,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceType": [
      "Web Design",
      "Web Development",
      "SEO Services",
      "Local SEO",
      "Digital Marketing",
      "AI SEO",
      "Answer Engine Optimization"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  })

  // 3. WebPage Schema for this specific page
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${cityPageUrl}#webpage`,
    "url": cityPageUrl,
    "name": `Professional Services in ${city}, ${stateCode} | Web Vello`,
    "description": `Partner with Web Vello in ${city}, ${stateCode} for high-converting web design, SEO, and AI-powered marketing programs that help ${city} businesses scale revenue.`,
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
      "url": "https://www.webvello.com/og-image.jpg"
    },
    "inLanguage": "en-US"
  })

  // 4. FAQPage Schema - if FAQs are provided
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${cityPageUrl}#faqpage`,
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

  // 5. BreadcrumbList Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": `${city}, ${stateCode}`,
        "item": cityPageUrl
      }
    ]
  })

  return schemas
}

