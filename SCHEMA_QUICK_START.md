# Schema Quick Start Guide

## 🚀 Implement Clean Schema in 3 Steps

### Step 1: Import the Generator

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'
```

### Step 2: Generate Schema (Choose Your Page Type)

#### For HOMEPAGE:
```typescript
const pageSchema = generatePageSchema({
  pageType: 'homepage',
  url: 'https://www.webvello.com',
  title: 'Webvello | SEO, GEO & Web Development Agency',
  description: 'Your meta description',
  faqs: [
    { question: '...', answer: '...' }
  ]
})
```

#### For SERVICE PAGES:
```typescript
const pageSchema = generatePageSchema({
  pageType: 'service',
  url: 'https://www.webvello.com/services/seo',
  title: 'SEO Services | Search Engine Optimization',
  description: 'Your meta description',
  service: {
    name: 'SEO Services',
    description: 'Search engine optimization to improve Google rankings...',
    type: 'Search Engine Optimization'
  },
  faqs: [
    { question: '...', answer: '...' }
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'SEO', url: 'https://www.webvello.com/services/seo' }
  ]
})
```

#### For GEO PAGES (City/Location):
```typescript
const pageSchema = generatePageSchema({
  pageType: 'geo',
  url: 'https://www.webvello.com/services/geo-austin',
  title: 'GEO Services Austin | AI Search Optimization',
  description: 'Your meta description',
  geo: {
    city: 'Austin',
    cityState: 'Austin, TX'
  },
  faqs: [
    { question: '...', answer: '...' }
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://www.webvello.com' },
    { name: 'Services', url: 'https://www.webvello.com/services' },
    { name: 'GEO Austin', url: 'https://www.webvello.com/services/geo-austin' }
  ]
})
```

### Step 3: Add to Your Page Component

```typescript
export default function YourPage() {
  const pageSchema = generatePageSchema({ ... })
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      {/* Your page content */}
    </>
  )
}
```

---

## ✅ Rules (What to Include)

✅ Real contact info (phone, email)  
✅ Service areas (country or city)  
✅ Actual services offered  
✅ Real FAQs from page content  
✅ Accurate breadcrumbs  

## ❌ Rules (What NOT to Include)

❌ Fake ratings or reviews  
❌ Physical addresses (we're remote)  
❌ Opening hours  
❌ GPS coordinates  
❌ Invented testimonials  
❌ Fake pricing  

---

## 🧪 Test Your Implementation

1. **Google Rich Results Test**  
   https://search.google.com/test/rich-results

2. **Schema.org Validator**  
   https://validator.schema.org/

3. **Google Search Console**  
   Check "Enhancements" for errors

---

## 📋 Service Type Reference

Use these exact `serviceType` values:

| Service | serviceType Value |
|---------|------------------|
| SEO | `"Search Engine Optimization"` |
| GEO | `"Generative Engine Optimization"` |
| AEO | `"Answer Engine Optimization"` |
| Local SEO | `"Local SEO"` |
| Web Dev | `"Web Development"` |
| AI SEO | `"AI-Powered SEO"` |

---

## 🎯 Common Service Descriptions

### SEO Services
```typescript
{
  name: 'SEO Services',
  description: 'Search engine optimization to improve Google rankings and organic traffic through keyword research, content optimization, technical SEO, and link building.',
  type: 'Search Engine Optimization'
}
```

### GEO Services
```typescript
{
  name: 'Generative Engine Optimization (GEO)',
  description: 'Generative Engine Optimization helps businesses appear in AI-generated responses from ChatGPT, Perplexity, Claude, and Google AI Overviews through entity authority and source credibility optimization.',
  type: 'Generative Engine Optimization'
}
```

### AEO Services
```typescript
{
  name: 'Answer Engine Optimization (AEO)',
  description: 'Answer Engine Optimization structures website content to appear in featured snippets, Google answer boxes, and voice assistant responses through question-answer formatting and FAQ schema implementation.',
  type: 'Answer Engine Optimization'
}
```

### Web Development
```typescript
{
  name: 'Web Development Services',
  description: 'Custom website development using React and Tailwind CSS, optimized for performance, mobile devices, and search engine visibility.',
  type: 'Web Development'
}
```

### Local SEO
```typescript
{
  name: 'Local SEO Services',
  description: 'Geo-targeted local search optimization to improve visibility in Google Maps, Local Pack, and local search results for businesses serving specific geographic areas.',
  type: 'Local SEO'
}
```

---

## 🗺️ GEO Page Cities

When creating GEO pages, use these city formats:

```typescript
{ city: 'Austin', cityState: 'Austin, TX' }
{ city: 'Dallas', cityState: 'Dallas, TX' }
{ city: 'Houston', cityState: 'Houston, TX' }
{ city: 'Los Angeles', cityState: 'Los Angeles, CA' }
{ city: 'New York', cityState: 'New York, NY' }
{ city: 'Chicago', cityState: 'Chicago, IL' }
{ city: 'Miami', cityState: 'Miami, FL' }
{ city: 'Seattle', cityState: 'Seattle, WA' }
{ city: 'Boston', cityState: 'Boston, MA' }
{ city: 'Denver', cityState: 'Denver, CO' }
{ city: 'Atlanta', cityState: 'Atlanta, GA' }
{ city: 'San Francisco', cityState: 'San Francisco, CA' }
{ city: 'San Diego', cityState: 'San Diego, CA' }
{ city: 'Phoenix', cityState: 'Phoenix, AZ' }
{ city: 'Portland', cityState: 'Portland, OR' }
```

---

## 🔍 Validation Checklist

After implementation, verify:

- [ ] No syntax errors (valid JSON)
- [ ] No fake ratings/reviews
- [ ] No physical address (except "US")
- [ ] FAQs match page content
- [ ] Breadcrumbs match site structure
- [ ] Service descriptions are accurate
- [ ] Phone and email are correct
- [ ] URL matches actual page URL
- [ ] Passes Rich Results Test
- [ ] No warnings in Search Console

---

## 📚 Full Documentation

- **Complete Guide:** `/SCHEMA_IMPLEMENTATION_GUIDE.md`
- **JSON Examples:** `/SCHEMA_EXAMPLES.md`
- **Implementation Status:** `/SCHEMA_IMPLEMENTATION_COMPLETE.md`
- **Generator Code:** `/lib/clean-schema-generator.ts`

---

## 💡 Pro Tips

1. **Copy FAQs from page content** - Don't invent new questions
2. **Match breadcrumbs to site navigation** - Use actual paths
3. **Be specific in service descriptions** - Help AI understand what you do
4. **Test immediately after implementation** - Catch errors early
5. **Use same URL in schema as canonical URL** - Consistency matters

---

## ⚡ Example: Complete Service Page

```typescript
import { generatePageSchema } from '@/lib/clean-schema-generator'

const faqs = [
  {
    question: "What is SEO?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results pages and increase organic traffic."
  },
  // ... more FAQs
]

export default function SEOServicesPage() {
  const pageSchema = generatePageSchema({
    pageType: 'service',
    url: 'https://www.webvello.com/services/seo',
    title: 'SEO Services | Search Engine Optimization',
    description: 'Professional SEO services to improve Google rankings and organic traffic.',
    service: {
      name: 'SEO Services',
      description: 'Search engine optimization to improve Google rankings and organic traffic through keyword research, content optimization, technical SEO, and link building.',
      type: 'Search Engine Optimization'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'SEO', url: 'https://www.webvello.com/services/seo' }
    ]
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Your page content */}
      </div>
    </>
  )
}
```

---

**That's it!** 🎉

Copy this pattern to every service and GEO page. Takes ~5 minutes per page.

