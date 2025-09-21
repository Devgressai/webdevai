'use client'

interface LocalBusinessSchemaProps {
  businessName: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
}

export function LocalBusinessSchema({
  businessName,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  paymentAccepted,
  currenciesAccepted,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#business`,
    "name": businessName,
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`,
    "image": `${url}/og-image.jpg`,
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        ...address,
      },
    }),
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        ...geo,
      },
    }),
    ...(openingHours && { "openingHours": openingHours }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(paymentAccepted && { "paymentAccepted": paymentAccepted }),
    ...(currenciesAccepted && { "currenciesAccepted": currenciesAccepted }),
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered SEO Services",
            "description": "Artificial intelligence SEO strategies for local and national businesses",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Geo-targeted local SEO strategies to dominate local search results",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Professional custom websites for local businesses",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Mitchell",
        },
        "reviewBody": "Web Vello’s local SEO services helped us dominate our local market. We’re now ranking #1 for all our target keywords in our city.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Michael Rodriguez",
        },
        "reviewBody": "Excellent local SEO results. Our foot traffic increased by 200% in just 3 months with their geo-targeted strategies.",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
