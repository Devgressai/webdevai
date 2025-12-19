# Corrected JSON-LD Schema Blocks - Copy-Paste Ready

All schema blocks below are Google guideline compliant with NO fake ratings or reviews.

---

## ORGANIZATION SCHEMA (Sitewide Standard)

Use this structure in all `@graph` schemas:

```json
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
}
```

---

## SERVICE SCHEMA TEMPLATE

For any service page:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "[SERVICE_URL]#service",
  "name": "[SERVICE_NAME]",
  "description": "[SERVICE_DESCRIPTION]",
  "serviceType": "[SERVICE_TYPE]",
  "url": "[SERVICE_URL]",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "category": "Digital Marketing Services"
}
```

**Example - AI SEO**:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.webvello.com/services/ai-seo#service",
  "name": "AI SEO Services",
  "description": "AI SEO uses machine learning to automate keyword research, content optimization, and performance tracking within traditional SEO workflows.",
  "serviceType": "AI SEO",
  "url": "https://www.webvello.com/services/ai-seo",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "category": "Digital Marketing Services"
}
```

---

## GEO PAGE SCHEMA (City/Industry)

For geo-targeted pages WITHOUT physical office:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "[GEO_URL]#service",
  "name": "Webvello - [LOCATION]",
  "description": "Digital marketing services including SEO, GEO, and web development serving [LOCATION]",
  "url": "[GEO_URL]",
  "telephone": "+1-737-888-5723",
  "email": "hello@webvello.com",
  "areaServed": {
    "@type": "City",
    "name": "[CITY_NAME]",
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
    "@id": "https://www.webvello.com/#organization"
  }
}
```

**Example - Los Angeles**:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.webvello.com/services/geo-los-angeles#service",
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
    "@id": "https://www.webvello.com/#organization"
  }
}
```

**Example - Healthcare Industry**:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.webvello.com/services/geo-healthcare#service",
  "name": "Webvello - Healthcare Industry, US",
  "description": "Digital marketing services including SEO, GEO, and web development serving Healthcare Industry, US",
  "url": "https://www.webvello.com/services/geo-healthcare",
  "telephone": "+1-737-888-5723",
  "email": "hello@webvello.com",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "SEO Services",
    "GEO Services",
    "Web Development",
    "Digital Marketing"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization"
  }
}
```

**Key Point**: NO `"address"` field with physical location unless you have an actual office.

---

## FAQPAGE SCHEMA

Always match visible FAQs exactly:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "[PAGE_URL]#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [Service]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Exact answer text from visible FAQ on page]"
      }
    }
  ]
}
```

---

## BREADCRUMB SCHEMA

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "[PAGE_URL]#breadcrumb",
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
      "name": "[Page Name]",
      "item": "[PAGE_URL]"
    }
  ]
}
```

---

## WEBPAGE SCHEMA

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "[PAGE_URL]#webpage",
  "url": "[PAGE_URL]",
  "name": "[Page Title]",
  "description": "[Meta Description]",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.webvello.com/#website"
  },
  "inLanguage": "en-US"
}
```

---

## COMPLETE @GRAPH EXAMPLE (Service Page)

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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-888-5723",
        "email": "hello@webvello.com"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.webvello.com/services/ai-seo#service",
      "name": "AI SEO Services",
      "serviceType": "AI SEO",
      "url": "https://www.webvello.com/services/ai-seo",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.webvello.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.webvello.com/services/ai-seo#faq",
      "mainEntity": []
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.webvello.com/services/ai-seo#breadcrumb",
      "itemListElement": []
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webvello.com/services/ai-seo#webpage",
      "url": "https://www.webvello.com/services/ai-seo",
      "name": "AI SEO Services"
    }
  ]
}
```

---

## WHAT TO NEVER INCLUDE

❌ **DO NOT ADD**:
- `aggregateRating` (unless you have verified reviews)
- `review` arrays (unless actual customer reviews)
- Hardcoded ratings like `"ratingValue": "4.9"`
- Hardcoded counts like `"reviewCount": "500"`
- Physical `address` on GEO pages (unless actual office exists)
- Multiple Organization schemas per page

✅ **ALWAYS ENSURE**:
- Organization uses consistent `@id` reference
- FAQs match visible page content exactly
- Service schema references Organization via `@id`
- GEO pages use `areaServed`, not fake `address`
- All schema follows Google guidelines

---

## TypeScript Implementation

All pages now use:

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'

const pageSchema = generatePageSchema({
  pageType: 'service', // or 'geo' or 'homepage'
  url: 'https://www.webvello.com/services/[service]',
  title: '[Page Title]',
  description: '[Meta Description]',
  service: {
    name: '[Service Name]',
    description: '[Service Description]',
    type: '[Service Type]'
  },
  faqs: faqs,
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: '[Service]', url: '[PAGE_URL]' }
  ]
})

return (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(pageSchema)
    }}
  />
)
```

---

**All schema blocks above are production-ready and Google guideline compliant.**


