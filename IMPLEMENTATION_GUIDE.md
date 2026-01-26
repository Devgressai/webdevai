# Implementation Guide: Sitemap + Indexing Control Fixes

This guide provides step-by-step instructions for implementing the fixes identified in the audit.

---

## Phase 1: Critical Fixes (Do First)

### Step 1.1: Create IndexPolicy Module ✅

**File:** `lib/seo/index-policy.ts` (already created)

**Status:** ✅ Created

**Next:** Import and use in metadata generation and sitemap.

---

### Step 1.2: Fix City+Service Route Mismatch

**Problem:** Sitemap includes 118 cities, but route only handles 35 cities.

**Option A (Recommended):** Add `generateStaticParams` to `/[city]/[service]` route

**File:** `app/[city]/[service]/page.tsx`

**Add after imports:**
```typescript
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  
  // Use the same cityData that the page component uses
  for (const city of Object.keys(cityData)) {
    for (const service of Object.keys(serviceData)) {
      params.push({ city, service })
    }
  }
  
  return params
}

export const dynamicParams = false // Prevent dynamic generation
```

**Option B:** Update sitemap to only include cities from `cityData`

**File:** `app/sitemap.ts`

**Change:**
```typescript
// OLD:
const allCities = citySlugs

// NEW:
import { cityData } from '../app/[city]/[service]/page' // Or extract to shared file
const allCities = Object.keys(cityData)
```

**Recommendation:** Use Option A (add generateStaticParams) for better type safety and build-time validation.

---

### Step 1.3: Add Indexing Control to City+Industry+Service Pages

**File:** `app/[city]/industry/[industry]/[service]/page.tsx`

**Changes:**

1. **Import IndexPolicy:**
```typescript
import { IndexPolicyService, IndexPolicyParams } from '../../../../../lib/seo/index-policy'
```

2. **Update generateMetadata:**
```typescript
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const city = getCity(params.city)
  const industry = getIndustry(params.industry)
  const service = getService(params.service)

  if (!city || !industry || !service) return { title: 'Page Not Found' }

  // Check for CMS content (you'll need to implement this check)
  const cms = await fetchCisDoc(params.city, params.industry, params.service)
  const hasCmsContent = !!cms && cms.status !== 'draft'
  
  // Get indexing policy
  const policy = IndexPolicyService.getPolicy({
    routeType: 'city-industry-service',
    city: params.city,
    industry: params.industry,
    service: params.service,
    hasCmsContent,
    hasUniqueContent: !!cms, // Adjust based on your content logic
    wordCount: cms?.content?.length || 0 // Adjust based on your content structure
  })

  const title = `${service.name} in ${city.fullName} for ${industry.name} Companies | Web Vello`
  const description = `Expert ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} companies in ${city.fullName}. Custom software solutions, scalable architectures, and cutting-edge technologies. 300%+ organic traffic growth guaranteed.`

  return {
    title,
    description,
    keywords: [
      service.name,
      city.name,
      city.state,
      industry.name,
      // ... rest of keywords
    ],
    alternates: { 
      canonical: policy.canonical 
    },
    robots: policy.robotsDirectives, // Use policy robots directives
    openGraph: {
      title,
      description,
      url: policy.canonical,
      siteName: 'Web Vello',
      type: 'website'
    }
  }
}
```

---

### Step 1.4: Filter Sitemap Using IndexPolicy

**File:** `app/sitemap.ts`

**Changes:**

1. **Import IndexPolicy:**
```typescript
import { IndexPolicyService } from '../lib/seo/index-policy'
```

2. **Filter city+service entries:**
```typescript
// Generate city+service combination entries
const cityServiceEntries: MetadataRoute.Sitemap = []
for (const city of allCities) {
  for (const service of keyServices) {
    const policy = IndexPolicyService.getPolicy({
      routeType: 'city-service',
      city,
      service
    })
    
    // Only include if indexable
    if (policy.indexable) {
      cityServiceEntries.push({
        url: policy.canonical,
        lastModified: new Date(),
        changeFrequency: policy.changeFrequency,
        priority: policy.priority,
      })
    }
  }
}
```

3. **Filter city+industry entries (should be empty - all noindex):**
```typescript
// Generate city-industry hub page entries
// NOTE: These are Tier 3 (noindex), so we don't include them
// But we keep the code commented for reference:
/*
const cityIndustryEntries: MetadataRoute.Sitemap = []
for (const city of allCities) {
  for (const industry of industrySlugs) {
    const policy = IndexPolicyService.getPolicy({
      routeType: 'city-industry',
      city,
      industry
    })
    
    if (policy.indexable) {
      cityIndustryEntries.push({
        url: policy.canonical,
        lastModified: new Date(),
        changeFrequency: policy.changeFrequency,
        priority: policy.priority,
      })
    }
  }
}
*/
```

4. **Filter city+industry+service entries:**
```typescript
// Generate city-industry-service combination entries
const cityIndustryServiceEntries: MetadataRoute.Sitemap = []
const cityIndustryServices = ['web-development', 'seo', 'website-design']

// NOTE: This requires checking content, which is expensive
// For now, we'll mark all as noindex and only include if we have a way to check
// In production, you'd want to cache this or check during build
for (const city of allCities) {
  for (const industry of industrySlugs) {
    for (const service of cityIndustryServices) {
      // For sitemap generation, we can't easily check CMS content
      // So we'll use a conservative approach: noindex by default
      // Individual pages will set their own robots via generateMetadata
      const policy = IndexPolicyService.getPolicy({
        routeType: 'city-industry-service',
        city,
        industry,
        service,
        hasCmsContent: false, // Conservative: assume no CMS content
        hasUniqueContent: false,
        wordCount: 0
      })
      
      // For now, don't include in sitemap (they'll be noindex)
      // Future: Add a build-time check or cache of which pages have CMS content
      if (policy.indexable) {
        cityIndustryServiceEntries.push({
          url: policy.canonical,
          lastModified: new Date(),
          changeFrequency: policy.changeFrequency,
          priority: policy.priority,
        })
      }
    }
  }
}
```

**Important:** The city+industry+service filtering requires content checks that are expensive at build time. Consider:
- Caching which pages have CMS content
- Generating a manifest file during build
- Using a database or file-based index

---

## Phase 2: Architecture Improvements

### Step 2.1: Split Sitemap into Sitemap Index

**Current:** Single `app/sitemap.ts` file

**Target:** Sitemap index + multiple sitemaps

**Implementation:**

1. **Create sitemap index:**
**File:** `app/sitemap.ts` (modify existing)

```typescript
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webvello.com'
  
  // Return sitemap index
  return [
    {
      url: `${baseUrl}/sitemap-core.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-services.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-locations-tier1.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-programmatic-tier2.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
    }
  ]
}
```

2. **Create individual sitemap routes:**
**File:** `app/sitemap-core.xml/route.ts` (NEW)

```typescript
import { NextResponse } from 'next/server'
import { generateCoreSitemap } from '../../../lib/sitemaps/core-sitemap'

export async function GET() {
  const xml = await generateCoreSitemap()
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
```

**Repeat for:**
- `app/sitemap-services.xml/route.ts`
- `app/sitemap-locations-tier1.xml/route.ts`
- `app/sitemap-programmatic-tier2.xml/route.ts`
- `app/sitemap-blog.xml/route.ts`

3. **Create sitemap generator functions:**
**File:** `lib/sitemaps/core-sitemap.ts` (NEW)

```typescript
import { IndexPolicyService } from '../seo/index-policy'

export async function generateCoreSitemap(): Promise<string> {
  const baseUrl = 'https://www.webvello.com'
  const corePages = [
    '', '/about', '/contact', '/pricing', '/resources', '/case-studies',
    '/industries', '/locations', '/solutions', '/blog', '/seo-audit',
    '/website-speed-test', '/enhanced-demo'
  ]

  const urls = corePages.map(page => {
    const policy = IndexPolicyService.getPolicy({
      routeType: 'core',
      // ... params
    })
    return `  <url>
    <loc>${policy.canonical}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${policy.changeFrequency}</changefreq>
    <priority>${policy.priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}
```

**Note:** Next.js `MetadataRoute.Sitemap` is simpler but doesn't support sitemap indexes well. Consider using route handlers for more control.

---

## Phase 3: Content Verification

### Step 3.1: Create Content Verification Module

**File:** `lib/content-verification.ts` (NEW)

```typescript
interface VerificationParams {
  city?: string
  industry?: string
  service?: string
}

interface VerificationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

export function verifyContentBinding(
  params: VerificationParams,
  content: string
): VerificationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Get expected city name from params
  // This would need to import city data
  // For now, placeholder logic:
  
  if (params.city) {
    // Check for hardcoded city names that don't match
    // This is a simplified check - you'd need a full city list
    const citySlug = params.city
    const expectedCityName = citySlug.split('-').map(w => 
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ')

    // Check for common mismatches
    const commonCities = ['Denver', 'Sacramento', 'New York', 'Los Angeles']
    for (const city of commonCities) {
      if (content.includes(city) && !content.includes(expectedCityName)) {
        warnings.push(`Found reference to "${city}" but expected "${expectedCityName}"`)
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  }
}
```

### Step 3.2: Add Build-Time Verification Script

**File:** `scripts/verify-content-binding.ts` (NEW)

```typescript
import { citySlugs } from '../lib/cities'
import { industrySlugs } from '../industries'
import { serviceSlugs } from '../services'
import { verifyContentBinding } from '../lib/content-verification'

// Sample N pages and verify content
async function verifySamplePages() {
  const sampleSize = 10
  const errors: string[] = []

  // Sample random combinations
  for (let i = 0; i < sampleSize; i++) {
    const city = citySlugs[Math.floor(Math.random() * citySlugs.length)]
    const industry = industrySlugs[Math.floor(Math.random() * industrySlugs.length)]
    const service = serviceSlugs[Math.floor(Math.random() * serviceSlugs.length)]

    // Fetch page content (would need to render or fetch)
    // For now, placeholder
    const content = '' // Would fetch actual rendered content
    
    const result = verifyContentBinding(
      { city, industry, service },
      content
    )

    if (!result.valid) {
      errors.push(`/${city}/industry/${industry}/${service}: ${result.errors.join(', ')}`)
    }
  }

  if (errors.length > 0) {
    console.error('Content verification failed:')
    errors.forEach(e => console.error(e))
    process.exit(1)
  }

  console.log('✅ Content verification passed')
}

verifySamplePages()
```

---

## Testing Checklist

After implementing each phase:

- [ ] **Phase 1.2:** Verify `/[city]/[service]` route works for all cities in `cityData`
- [ ] **Phase 1.3:** Check that city+industry+service pages have correct `robots` meta tags
- [ ] **Phase 1.4:** Verify sitemap only includes indexable URLs
- [ ] **Phase 2.1:** Test sitemap index and individual sitemaps load correctly
- [ ] **Phase 3.1:** Run content verification script and fix any issues

---

## Rollout Strategy

1. **Week 1:** Implement Phase 1 (critical fixes)
2. **Week 2:** Test and monitor indexing changes
3. **Week 3:** Implement Phase 2 (architecture)
4. **Week 4:** Implement Phase 3 (verification)
5. **Ongoing:** Monitor Google Search Console for indexing changes

---

## Monitoring

After rollout, monitor:
- Google Search Console: Index coverage, sitemap submission status
- Server logs: 404s from sitemap URLs
- Build times: Sitemap generation performance
- Indexing rate: How many pages Google indexes vs. submits
