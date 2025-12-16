# Schema Implementation Guide for webvello.com

## Rules

✅ **DO:**
- Use Organization schema site-wide
- Add Service schema for service pages
- Add FAQPage schema when FAQs exist
- Use LocalBusiness for GEO pages (service area only, no physical address)
- Output valid JSON-LD only

❌ **DON'T:**
- Invent ratings, reviews, or aggregate ratings
- Add physical addresses (we're remote/nationwide)
- Add opening hours (we don't have a physical office)
- Add fake testimonials or review counts

---

## Page Type Examples

### 1. HOMEPAGE Schema

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'

const homepageSchema = generatePageSchema({
  pageType: 'homepage',
  url: 'https://www.webvello.com',
  title: 'Webvello | SEO, GEO & Web Development Agency',
  description: 'Webvello is a digital marketing agency specializing in SEO, GEO (Generative Engine Optimization), and custom web development.',
  faqs: [
    {
      question: "What is Webvello?",
      answer: "Webvello is a digital marketing agency specializing in SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development."
    }
    // ... more FAQs
  ]
})
```

**Output:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "name": "Webvello",
      "url": "https://www.webvello.com",
      "description": "...",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-888-5723",
        "email": "hello@webvello.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    },
    {
      "@type": "WebPage",
      "url": "https://www.webvello.com"
    }
  ]
}
```

---

### 2. SERVICE PAGE Schema

**Example: SEO Services Page**

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'

const seoServiceSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/seo',
  title: 'SEO Services | Search Engine Optimization',
  description: 'Professional SEO services to improve Google rankings and organic traffic.',
  service: {
    name: 'SEO Services',
    description: 'Search engine optimization to improve Google rankings and organic traffic through keyword research, content optimization, and technical SEO.',
    type: 'Search Engine Optimization'
  },
  faqs: [
    {
      question: "What is SEO?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results pages (SERPs) and increase organic traffic."
    }
    // ... more FAQs
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'SEO', url: 'https://www.webvello.com/services/seo' }
  ]
})
```

**Output:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "name": "Webvello"
    },
    {
      "@type": "Service",
      "@id": "https://www.webvello.com/services/seo#service",
      "name": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "provider": {
        "@id": "https://www.webvello.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [...]
    },
    {
      "@type": "WebPage"
    }
  ]
}
```

---

### 3. GEO PAGE Schema (City/Location)

**Example: GEO Austin Page**

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'

const geoAustinSchema = generatePageSchema({
  pageType: 'geo',
  url: 'https://www.webvello.com/services/geo-austin',
  title: 'GEO Services Austin | AI Search Optimization',
  description: 'Get your Austin business found in ChatGPT, Perplexity, and Google SGE.',
  geo: {
    city: 'Austin',
    cityState: 'Austin, TX'
  },
  faqs: [
    {
      question: "Why does my Austin business need GEO?",
      answer: "Austin is one of the most tech-savvy cities in America. Your potential customers are early adopters of AI search tools."
    }
    // ... more FAQs
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'GEO Austin', url: 'https://www.webvello.com/services/geo-austin' }
  ]
})
```

**Output:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "name": "Webvello"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webvello.com/services/geo-austin#localbusiness",
      "name": "Webvello - Austin, TX",
      "areaServed": {
        "@type": "City",
        "name": "Austin",
        "addressCountry": "US"
      },
      "serviceType": ["SEO Services", "GEO Services", "Web Development"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [...]
    },
    {
      "@type": "WebPage"
    }
  ]
}
```

**Note:** The LocalBusiness schema for GEO pages does NOT include:
- Physical address (streetAddress, postalCode)
- Opening hours
- Coordinates (latitude/longitude)
- Physical location implied

This is because we serve the area remotely, not from a physical office location.

---

## Implementation in React/Next.js

### Method 1: Inline in Page Component

```tsx
export default function ServicePage() {
  const schema = generatePageSchema({
    pageType: 'service',
    url: 'https://www.webvello.com/services/seo',
    title: 'SEO Services',
    description: 'Professional SEO services...',
    service: {
      name: 'SEO Services',
      description: 'Search engine optimization...',
      type: 'Search Engine Optimization'
    }
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Page content */}
    </>
  )
}
```

### Method 2: Using SchemaScript Component

```tsx
import { SchemaScript } from '@/lib/clean-schema-generator'

export default function ServicePage() {
  const schema = generatePageSchema({...})
  
  return (
    <>
      <SchemaScript schema={schema} />
      {/* Page content */}
    </>
  )
}
```

---

## Validation

After implementation, validate your schema using:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   
2. **Schema.org Validator**
   - https://validator.schema.org/
   
3. **Google Search Console**
   - Check "Enhancements" for schema errors

---

## Service-Specific Schemas

### Answer Engine Optimization (AEO)

```typescript
generatePageSchema({
  pageType: 'service',
  service: {
    name: 'Answer Engine Optimization (AEO)',
    description: 'Answer Engine Optimization (AEO) is the practice of structuring website content to appear in featured snippets, Google answer boxes, and voice assistant responses.',
    type: 'Answer Engine Optimization'
  }
})
```

### Generative Engine Optimization (GEO)

```typescript
generatePageSchema({
  pageType: 'service',
  service: {
    name: 'Generative Engine Optimization (GEO)',
    description: 'Generative Engine Optimization (GEO) helps businesses appear in AI-generated responses from ChatGPT, Perplexity, Claude, and Google AI Overviews.',
    type: 'Generative Engine Optimization'
  }
})
```

### Web Development

```typescript
generatePageSchema({
  pageType: 'service',
  service: {
    name: 'Web Development Services',
    description: 'Custom website development using React and Tailwind CSS, optimized for performance, mobile devices, and search engine visibility.',
    type: 'Web Development'
  }
})
```

### Local SEO

```typescript
generatePageSchema({
  pageType: 'service',
  service: {
    name: 'Local SEO Services',
    description: 'Geo-targeted local search optimization to improve visibility in Google Maps, Local Pack, and local search results.',
    type: 'Local SEO'
  }
})
```

---

## Quick Reference

| Page Type | Schemas Required | Optional Schemas |
|-----------|------------------|------------------|
| Homepage | Organization, WebPage | FAQPage |
| Service Page | Organization, Service, WebPage | FAQPage, BreadcrumbList |
| GEO Page | Organization, ProfessionalService, WebPage | FAQPage, BreadcrumbList |
| Blog Post | Organization, Article, WebPage | BreadcrumbList |
| About Page | Organization, WebPage | - |
| Contact Page | Organization, WebPage | - |

---

## Common Mistakes to Avoid

❌ **Don't do this:**
```json
{
  "@type": "LocalBusiness",
  "address": {
    "streetAddress": "123 Fake St",  // ← DON'T INVENT
    "postalCode": "78701"
  },
  "aggregateRating": {
    "ratingValue": "4.9",  // ← DON'T INVENT
    "reviewCount": "127"
  }
}
```

✅ **Do this instead:**
```json
{
  "@type": "ProfessionalService",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "addressCountry": "US"
  },
  "serviceType": ["SEO Services", "GEO Services"]
}
```

---

## Testing Checklist

- [ ] No invented ratings or reviews
- [ ] No physical address (except country: US)
- [ ] Organization schema present on all pages
- [ ] Service schema on service pages
- [ ] FAQPage schema where FAQs exist
- [ ] Valid JSON-LD (no syntax errors)
- [ ] Passes Google Rich Results Test
- [ ] No warnings in Search Console

---

## Support

For questions about schema implementation:
- Review: https://schema.org/docs/schemas.html
- Test: https://search.google.com/test/rich-results
- Validate: https://validator.schema.org/

