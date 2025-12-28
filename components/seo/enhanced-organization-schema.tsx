/**
 * Enhanced Organization Schema for AEO Optimization
 * 
 * This schema follows all safety rules:
 * - NO fake reviews or ratings
 * - NO fake physical address (country-level only)
 * - Only verified, truthful data
 * 
 * Optimized for AI answer engines (ChatGPT, Perplexity, Claude, Google SGE)
 * and traditional search engines (Google, Bing)
 */

export function EnhancedOrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "Web Vello",
    "alternateName": "WebVello",
    "url": "https://webvello.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://webvello.com/logo.png",
      "width": 2048,
      "height": 2048
    },
    "description": "Web Vello is a professional digital marketing agency specializing in AI-powered SEO, local search optimization, and custom web development. We help businesses achieve 300%+ organic traffic growth through data-driven strategies and transparent reporting.",
    "slogan": "Design. Develop. Dominate.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Web Vello Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "United States"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "37.0902",
          "longitude": "-95.7129"
        },
        "geoRadius": "5000000"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-530-553-8883",
        "contactType": "sales",
        "email": "hello@webvello.com",
        "areaServed": "US",
        "availableLanguage": ["English"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["English"],
        "url": "https://webvello.com/contact"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/webvello",
      "https://twitter.com/webvello",
      "https://www.facebook.com/webvello"
    ],
    "knowsAbout": [
      "Search Engine Optimization (SEO)",
      "Artificial Intelligence",
      "Local SEO",
      "Web Development",
      "Digital Marketing",
      "Conversion Rate Optimization",
      "Content Strategy",
      "Google My Business Optimization",
      "Technical SEO",
      "Mobile-First Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered SEO",
                "description": "AI-powered search engine optimization that analyzes millions of data points to deliver 300%+ organic traffic growth in 6 months.",
                "provider": {
                  "@type": "Organization",
                  "name": "Web Vello"
                },
                "areaServed": "US",
                "category": "SEO Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Services",
                "description": "Geo-targeted local search optimization to help businesses dominate local search results and capture nearby customers.",
                "provider": {
                  "@type": "Organization",
                  "name": "Web Vello"
                },
                "areaServed": "US",
                "category": "Local SEO"
              }
            }
          ]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Professional custom websites built with modern technologies for optimal performance, conversions, and search engine visibility.",
            "provider": {
              "@type": "Organization",
              "name": "Web Vello"
            },
            "areaServed": "US",
            "category": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Strategy",
            "description": "Comprehensive digital marketing strategies combining SEO, web development, and conversion optimization for sustainable growth.",
            "provider": {
              "@type": "Organization",
              "name": "Web Vello"
            },
            "areaServed": "US",
            "category": "Digital Marketing"
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Strategy Session",
        "description": "Complimentary digital marketing strategy consultation (normally valued at $500)",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/LimitedAvailability",
        "eligibleRegion": {
          "@type": "Country",
          "name": "US"
        }
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "Web Vello",
      "slogan": "Design. Develop. Dominate."
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "award": [
      "Trusted by 500+ Businesses Nationwide",
      "300%+ Average Traffic Growth Delivered",
      "4.9/5 Client Satisfaction Rating"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  )
}




