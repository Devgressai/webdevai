# Schema JSON-LD Examples for webvello.com

## 1. HOMEPAGE Schema

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Webvello?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webvello is a digital marketing agency specializing in SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development. The agency helps businesses improve their visibility in both traditional search engines like Google and AI-powered search platforms including ChatGPT, Perplexity, and Google AI Overviews."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Webvello offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webvello offers SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), local SEO, and custom web development services for businesses across the United States."
          }
        },
        {
          "@type": "Question",
          "name": "How does Webvello work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webvello follows a four-step process: strategic focus, senior expertise, measurable results, and transparent reporting. The agency combines data-driven strategies with clear communication to deliver revenue-focused digital marketing."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com#webpage",
      "url": "https://www.webvello.com",
      "name": "Webvello | SEO, GEO & Web Development Agency",
      "description": "Webvello is a digital marketing agency specializing in SEO, GEO (Generative Engine Optimization), and custom web development. Trusted by 500+ businesses.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## 2. SERVICE PAGE Schema - SEO Services

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
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
              "description": "Generative Engine Optimization to improve visibility in AI search platforms"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.webvello.com/services/seo#service",
      "name": "SEO Services",
      "description": "Search engine optimization to improve Google rankings and organic traffic through keyword research, content optimization, technical SEO, and link building.",
      "serviceType": "Search Engine Optimization",
      "url": "https://www.webvello.com/services/seo",
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results pages (SERPs) and increase organic traffic. SEO includes keyword research, content optimization, technical improvements, and link building."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO typically takes 3-6 months to show significant results. Initial improvements may appear within 4-8 weeks, but substantial traffic growth and ranking improvements generally require 6-12 months of consistent optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO optimizes for traditional search engines like Google by improving rankings through keywords and backlinks. GEO (Generative Engine Optimization) optimizes for AI-powered search platforms like ChatGPT and Perplexity by establishing entity authority and source credibility."
          }
        }
      ]
    },
    {
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
          "name": "Services",
          "item": "https://www.webvello.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO",
          "item": "https://www.webvello.com/services/seo"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/seo#webpage",
      "url": "https://www.webvello.com/services/seo",
      "name": "SEO Services | Search Engine Optimization",
      "description": "Professional SEO services to improve Google rankings and organic traffic.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## 3. SERVICE PAGE Schema - Answer Engine Optimization (AEO)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.webvello.com/#organization",
      "name": "Webvello",
      "url": "https://www.webvello.com",
      "description": "Webvello is a digital marketing agency specializing in SEO, GEO, AEO, and custom web development.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-888-5723",
        "email": "hello@webvello.com"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.webvello.com/services/answer-engine-optimization#service",
      "name": "Answer Engine Optimization (AEO)",
      "description": "Answer Engine Optimization (AEO) is the practice of structuring website content to appear in featured snippets, Google answer boxes, and voice assistant responses. AEO formats content to directly answer specific user questions.",
      "serviceType": "Answer Engine Optimization",
      "url": "https://www.webvello.com/services/answer-engine-optimization",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.webvello.com/#organization",
        "name": "Webvello"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "category": "Digital Marketing Services"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Answer Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Answer Engine Optimization (AEO) is the practice of structuring content to appear in featured snippets, Google answer boxes, and voice assistant responses. AEO focuses on formatting content in question-answer format, using FAQ schema, and providing concise 40-60 word answers."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AEO differs from SEO in its focus and format. Traditional SEO aims to rank pages highly in search results through keywords and backlinks. AEO targets featured snippets and direct answer boxes by structuring content in question-answer format with FAQ schema."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AEO optimizes for existing search features like Google featured snippets and answer boxes. GEO optimizes for AI-generated responses from ChatGPT, Perplexity, and Google AI Overviews. AEO targets position zero in traditional search; GEO targets citations in AI-generated summaries."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/answer-engine-optimization#webpage",
      "url": "https://www.webvello.com/services/answer-engine-optimization",
      "name": "Answer Engine Optimization (AEO) | Get Featured in AI Answers",
      "description": "Answer Engine Optimization structures content to appear in featured snippets, voice assistants, and Google answer boxes.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## 4. SERVICE PAGE Schema - Web Development

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.webvello.com/#organization",
      "name": "Webvello",
      "url": "https://www.webvello.com"
    },
    {
      "@type": "Service",
      "@id": "https://www.webvello.com/services/web-development#service",
      "name": "Web Development Services",
      "description": "Custom website development using React and Tailwind CSS, optimized for performance, mobile devices, and search engine visibility.",
      "serviceType": "Web Development",
      "url": "https://www.webvello.com/services/web-development",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.webvello.com/#organization",
        "name": "Webvello"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "category": "Digital Marketing Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/web-development#webpage",
      "url": "https://www.webvello.com/services/web-development",
      "name": "Web Development Services | React & Tailwind CSS",
      "description": "Custom website development using React and Tailwind CSS.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## 5. GEO PAGE Schema - Austin, TX

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
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
      ],
      "knowsAbout": [
        "Search Engine Optimization",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "Local SEO",
        "Web Development"
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
              "description": "Search engine optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GEO Services",
              "description": "Generative Engine Optimization"
            }
          }
        ]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webvello.com/services/geo-austin#localbusiness",
      "name": "Webvello - Austin, TX",
      "description": "Digital marketing services including SEO, GEO, and web development serving Austin, TX",
      "url": "https://www.webvello.com/services/geo-austin",
      "telephone": "+1-737-888-5723",
      "email": "hello@webvello.com",
      "areaServed": {
        "@type": "City",
        "name": "Austin",
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does my Austin business need GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Austin is one of the most tech-savvy cities in America. Your potential customers are early adopters of AI search tools. When someone asks ChatGPT 'best tech recruiting firm in Austin' or 'top restaurants on South Congress,' you want to be in that answer."
          }
        },
        {
          "@type": "Question",
          "name": "How is Austin GEO different from general GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Austin GEO incorporates local context—neighborhoods like SoCo and The Domain, the tech and startup culture, the music scene, and the unique Austin identity."
          }
        }
      ]
    },
    {
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
          "name": "Services",
          "item": "https://www.webvello.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GEO Austin",
          "item": "https://www.webvello.com/services/geo-austin"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/geo-austin#webpage",
      "url": "https://www.webvello.com/services/geo-austin",
      "name": "GEO Services Austin | AI Search Optimization",
      "description": "Get your Austin business found in ChatGPT, Perplexity, and Google SGE.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## 6. GEO PAGE Schema - Los Angeles, CA

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.webvello.com/#organization",
      "name": "Webvello",
      "url": "https://www.webvello.com"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webvello.com/services/geo-los-angeles#localbusiness",
      "name": "Webvello - Los Angeles, CA",
      "description": "Digital marketing services including SEO, GEO, and web development serving Los Angeles, CA",
      "url": "https://www.webvello.com/services/geo-los-angeles",
      "telephone": "+1-737-888-5723",
      "email": "hello@webvello.com",
      "areaServed": {
        "@type": "City",
        "name": "Los Angeles",
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
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/geo-los-angeles#webpage",
      "url": "https://www.webvello.com/services/geo-los-angeles",
      "name": "GEO Services Los Angeles | AI Search Optimization",
      "description": "Get your Los Angeles business found in AI search platforms.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.webvello.com/#website"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

---

## Key Differences Summary

### Homepage
- Organization + FAQPage + WebPage
- Full organization details with knowsAbout and hasOfferCatalog

### Service Pages
- Organization + Service + FAQPage + BreadcrumbList + WebPage
- Service schema describes specific offering
- FAQs specific to that service

### GEO Pages (City/Location)
- Organization + ProfessionalService + FAQPage + BreadcrumbList + WebPage
- **ProfessionalService (NOT LocalBusiness with physical address)**
- Uses `areaServed` to indicate service area
- NO physical address, opening hours, or coordinates
- FAQs tailored to that location

---

## What We DON'T Include

❌ **Never include:**
- `aggregateRating` (unless we have real, verified reviews)
- Physical `streetAddress` or `postalCode`
- `openingHours` (we're remote/online)
- `geo` coordinates for physical location
- `review` objects with fake testimonials
- Invented `priceRange` or specific pricing

✅ **What we DO include:**
- Telephone and email (real contact info)
- `areaServed` (US or specific cities)
- `serviceType` (what we actually offer)
- Real FAQs from actual page content
- Breadcrumbs matching site structure

