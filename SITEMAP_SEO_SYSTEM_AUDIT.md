# Sitemap + Programmatic SEO System Audit
**Date:** 2026-01-24  
**Codebase:** Devgressai/webdevai  
**Next.js App Router Audit**

---

## A) ROUTE INVENTORY (App Router)

### 1. Core Static Pages
| Route Pattern | File Path | Type | Notes |
|--------------|-----------|------|-------|
| `/` | `app/page.tsx` | Core | Homepage |
| `/about` | `app/about/page.tsx` | Core | About page |
| `/contact` | `app/contact/page.tsx` | Core | Contact page |
| `/pricing` | `app/pricing/page.tsx` | Core | Pricing page |
| `/resources` | `app/resources/page.tsx` | Core | Resources page |
| `/case-studies` | `app/case-studies/page.tsx` | Core | Case studies |
| `/industries` | `app/industries/page.tsx` | Core | Industries hub |
| `/locations` | `app/locations/page.tsx` | Core | Locations hub |
| `/locations/hawaii` | `app/locations/hawaii/page.tsx` | Location | Hawaii hub |
| `/locations/hawaii/honolulu` | `app/locations/hawaii/honolulu/page.tsx` | Location | Static location |
| `/locations/hawaii/kona` | `app/locations/hawaii/kona/page.tsx` | Location | Static location |
| `/solutions` | `app/solutions/page.tsx` | Core | Solutions hub |
| `/solutions/*` | `app/solutions/[slug]/page.tsx` | Core | 6 solution pages |
| `/blog` | `app/blog/page.tsx` | Core | Blog index |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog | Dynamic blog posts |
| `/seo-audit` | `app/seo-audit/page.tsx` | Core | Tool page |
| `/website-speed-test` | `app/website-speed-test/page.tsx` | Core | Tool page |
| `/enhanced-demo` | `app/enhanced-demo/page.tsx` | Core | Demo page |
| `/accessibility` | `app/accessibility/page.tsx` | Core | A11Y page |
| `/book` | `app/book/page.tsx` | Core | Booking page |
| `/privacy` | `app/privacy/page.tsx` | Core | Privacy policy |

### 2. Service Pages
| Route Pattern | File Path | Type | Data Source |
|--------------|-----------|------|-------------|
| `/services/[service]` | `app/services/[service]/page.tsx` | Service | Hardcoded service list (45+ services) |

**Services include:**
- Core services: `website-design`, `web-development`, `seo`, `local-seo`, etc.
- GEO services: `generative-engine-optimization`, `answer-engine-optimization`, etc.
- City-specific services: `seo-doctors-kansas-city`, `wordpress-developers-denver`, etc.
- State pages: All 50 US states (e.g., `/services/california`)

**⚠️ ISSUE:** No `generateStaticParams` found for `/services/[service]` - likely using dynamic rendering or catch-all.

### 3. Programmatic Location Routes
| Route Pattern | File Path | Params | Data Source | generateStaticParams? |
|--------------|-----------|--------|-------------|----------------------|
| `/[city]` | `app/[city]/page.tsx` | `city` | `lib/cities.ts` (citySlugs) | ❌ NO |
| `/[city]/[service]` | `app/[city]/[service]/page.tsx` | `city`, `service` | Hardcoded `cityData` + `serviceData` | ❌ NO |
| `/[city]/industry/[industry]` | `app/[city]/industry/[industry]/page.tsx` | `city`, `industry` | `lib/cities.ts` + `lib/industries.ts` | ✅ YES |
| `/[city]/industry/[industry]/[service]` | `app/[city]/industry/[industry]/[service]/page.tsx` | `city`, `industry`, `service` | All 3 libs | ✅ YES |

**Data Sources:**
- **Cities:** `lib/cities.ts` → `citySlugs` array (118+ cities)
- **Industries:** `lib/industries.ts` → `industrySlugs` array (15+ industries)
- **Services (CIS):** `lib/services.ts` → Only 3 services: `web-development`, `seo`, `website-design`

**⚠️ CRITICAL ISSUE:** 
- `/[city]/[service]` route has NO `generateStaticParams` but uses hardcoded `cityData` (only 35 cities) and `serviceData` (28 services)
- This creates a mismatch: sitemap includes ALL cities from `citySlugs`, but page only handles 35 cities
- Potential 404s or runtime errors for cities not in `cityData`

### 4. HTML Sitemap Pages (Navigation Only)
| Route Pattern | File Path | Purpose |
|--------------|-----------|---------|
| `/sitemap` | `app/sitemap/page.tsx` | HTML sitemap hub |
| `/sitemap/locations` | `app/sitemap/locations/page.tsx` | Locations A-Z index |
| `/sitemap/locations/[letter]` | `app/sitemap/locations/[letter]/page.tsx` | Letter-filtered locations |
| `/sitemap/city/[city]` | `app/sitemap/city/[city]/page.tsx` | City-specific sitemap |

**✅ GOOD:** HTML sitemaps are separate from XML sitemaps (correct separation of concerns).

### 5. XML Sitemap Endpoint
| Route Pattern | File Path | Type | Implementation |
|--------------|-----------|------|----------------|
| `/sitemap.xml` | `app/sitemap.ts` | XML Sitemap | `MetadataRoute.Sitemap` |

**Current Implementation:**
- Single monolithic sitemap (all URLs in one file)
- Includes ALL programmatic combinations without filtering
- No tiered indexing control
- No validation of indexability

### 6. Robots.txt
| Route Pattern | File Path | Type |
|--------------|-----------|------|
| `/robots.txt` | `app/robots.txt` | Static file |

**Current Rules:**
- Allows all city/service/industry pages
- Disallows `/admin/`, `/api/`, `/studio/`
- Points to single sitemap: `https://www.webvello.com/sitemap.xml`

### 7. API Routes (Not Indexable)
All under `app/api/**/route.ts` - correctly excluded from sitemap.

---

## B) SITEMAP SYSTEM AUDIT (XML + HTML)

### Current XML Sitemap Implementation

**File:** `app/sitemap.ts`

**What's Included:**
1. ✅ Core pages (28 pages)
2. ✅ Solutions pages (6 pages)
3. ✅ Service pages (150+ services including state pages)
4. ✅ Blog posts (dynamic, from CMS)
5. ✅ Hawaii location pages (3 pages)
6. ✅ **ALL city hub pages** (`/[city]`) - 118+ cities
7. ✅ **ALL city+service pages** (`/[city]/[service]`) - 118 cities × 8 key services = **944 URLs**
8. ✅ **ALL city+industry pages** (`/[city]/industry/[industry]`) - 118 cities × 15 industries = **1,770 URLs**
9. ✅ **ALL city+industry+service pages** (`/[city]/industry/[industry]/[service]`) - 118 cities × 15 industries × 3 services = **5,310 URLs**

**Total Estimated URLs:** ~8,500+ URLs in a single sitemap file.

### Critical Issues

#### ❌ ISSUE #1: No Indexing Control
- **ALL** programmatic pages are included regardless of content quality
- No check for `robots: { index: false }`
- No tiered indexing policy
- City+industry+service pages (Tier 3) are included even though they may be thin/duplicate

#### ❌ ISSUE #2: Single Monolithic Sitemap
- One giant sitemap violates Google's 50,000 URL limit recommendation
- No sitemap index architecture
- Hard to maintain and debug
- No separation by priority/tier

#### ❌ ISSUE #3: No Validation
- Sitemap doesn't verify:
  - Pages return 200 status
  - Pages have `robots: { index: true }`
  - Pages are self-canonical
  - Pages actually exist (no 404s)

#### ❌ ISSUE #4: Mismatch Between Routes and Sitemap
- Sitemap includes `/[city]/[service]` for ALL cities from `citySlugs` (118)
- But `app/[city]/[service]/page.tsx` only handles 35 cities from hardcoded `cityData`
- **Result:** Sitemap claims 944 city+service URLs exist, but ~700+ will 404

#### ❌ ISSUE #5: No Conditional Indexing
- City+industry+service pages always indexed
- No check for:
  - Unique content
  - CMS content availability
  - Content quality thresholds
  - Internal linking strength

### HTML Sitemap System

**Status:** ✅ **GOOD** - Properly separated from XML sitemaps.

**Files:**
- `app/sitemap/page.tsx` - Main HTML sitemap
- `app/sitemap/locations/page.tsx` - Locations index
- `app/sitemap/locations/[letter]/page.tsx` - Letter-filtered
- `app/sitemap/city/[city]/page.tsx` - City-specific

**Purpose:** Navigation for humans, not crawlers.

---

## C) INDEXING CONTROL PLAN (Tiered)

### Current State: ❌ NO INDEXING CONTROL

**All programmatic pages currently have:**
```typescript
robots: { index: true, follow: true }
```

**No differentiation between:**
- Tier 1 (index): Core pages, city+primary-service
- Tier 2 (conditional): City+industry+service (only if unique content)
- Tier 3 (noindex): Long-tail combinations, discovery pages

### Required: IndexPolicy Module

**Proposed File:** `lib/seo/index-policy.ts`

**Purpose:** Single source of truth for indexing decisions.

**Inputs:**
- Route type: `'core' | 'service' | 'city' | 'city-service' | 'city-industry' | 'city-industry-service'`
- Params: `{ city?, service?, industry? }`
- Content metadata: `{ hasUniqueContent?, hasCmsContent?, wordCount? }`

**Outputs:**
```typescript
interface IndexPolicy {
  indexable: boolean
  sitemapBucket: 'core' | 'services' | 'locations-tier1' | 'programmatic-tier2' | null
  robotsDirectives: {
    index: boolean
    follow: boolean
    noarchive?: boolean
    nosnippet?: boolean
  }
  canonical: string // absolute URL
  priority?: number // 0.0 - 1.0
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}
```

### Tier Definitions

#### Tier 1: INDEX (Always)
- Core pages (`/`, `/about`, `/contact`, etc.)
- Service pages (`/services/[service]`)
- City hub pages (`/[city]`)
- City + primary service (`/[city]/web-development`, `/[city]/seo`, `/[city]/website-design`)

**Sitemap Bucket:** `core`, `services`, `locations-tier1`

#### Tier 2: CONDITIONAL INDEX
- City + industry + service (`/[city]/industry/[industry]/[service]`)
- **Only index if:**
  - Has CMS content (from Sanity) OR
  - Has static content with 2000+ words OR
  - Has unique case studies/testimonials OR
  - Strong internal linking (3+ contextual links)

**Sitemap Bucket:** `programmatic-tier2`

#### Tier 3: NOINDEX
- City + industry hub (`/[city]/industry/[industry]`) - navigation only
- Long-tail service combinations not in Tier 1
- Discovery/scaffolding pages

**Sitemap Bucket:** `null` (not in XML sitemap)

### Implementation Points

1. **generateMetadata()** - Call `IndexPolicy.getPolicy()` and set `robots` + `alternates.canonical`
2. **sitemap.ts** - Call `IndexPolicy.getPolicy()` for each URL, only emit if `indexable === true`
3. **Layout/Page wrappers** - Optional: runtime validation in dev mode

---

## D) CONTENT BINDING VERIFICATION (Fix Cross-City Content Bleed)

### Current Content Generation

**City Pages (`/[city]/page.tsx`):**
- Uses hardcoded `cityData` object (35 cities)
- City name/state injected into template strings
- ✅ **GOOD:** Direct variable injection, low risk of bleed

**City+Service Pages (`/[city]/[service]/page.tsx`):**
- Uses hardcoded `cityData` + `serviceData`
- Template strings with `${city.name}`, `${city.fullName}`
- ✅ **GOOD:** Direct variable injection

**City+Industry Pages (`/[city]/industry/[industry]/page.tsx`):**
- Uses `generateCityIndustryContent()` from `lib/city-industry-content.ts`
- Template-based content generation
- ⚠️ **RISK:** Template functions could cache incorrectly

**City+Industry+Service Pages (`/[city]/industry/[industry]/[service]/page.tsx`):**
- Uses `fetchCisDoc()` (Sanity CMS) + `getStaticCisDoc()` (fallback)
- Content from CMS or static fallback
- ⚠️ **RISK:** CMS queries could be keyed incorrectly
- ⚠️ **RISK:** Static fallback could use wrong city/industry

### Potential Content Bleed Sources

1. **Caching Issues:**
   - Next.js `fetch()` cache keyed by URL only
   - `unstable_cache()` with incorrect keys
   - Memoization without city/industry in key

2. **Template Functions:**
   - `generateCityIndustryContent()` - check if it properly binds city/industry
   - `generateIndustryInsights()` - verify city parameter is used

3. **CMS Queries:**
   - `fetchCisDoc(city, industry, service)` - verify all 3 params are in query
   - Check Sanity GROQ queries for correct filtering

4. **Static Fallback:**
   - `getStaticCisDoc(city, industry, service)` - verify correct file/data lookup

### Verification Approach

#### 1. Build-Time Tests
**File:** `scripts/verify-content-binding.ts`

Sample N generated pages and validate:
- All city name tokens match `params.city`
- All state tokens match city's state
- No hardcoded city names from other cities
- Industry references match `params.industry`

#### 2. Runtime Guards (Dev Mode)
**File:** `lib/content-verification.ts`

```typescript
export function verifyContentBinding(
  params: { city?: string; industry?: string; service?: string },
  content: string
): { valid: boolean; errors: string[] }
```

Check for:
- Mismatched city tokens in headings/FAQs
- Wrong state abbreviations
- Industry mismatches

#### 3. Content Key Validation
Audit all data fetching functions:
- `fetchCisDoc()` - verify GROQ query includes all 3 filters
- `getStaticCisDoc()` - verify file path includes all 3 params
- `generateCityIndustryContent()` - verify function signature uses all params

---

## E) OUTPUT: ACTIONABLE PATCH PLAN

### Problem → File(s) → Fix

| Problem | File(s) | Fix |
|---------|---------|-----|
| **No indexing control** | `app/[city]/industry/[industry]/[service]/page.tsx`<br>`app/[city]/[service]/page.tsx`<br>`app/[city]/page.tsx` | Add `IndexPolicy.getPolicy()` call in `generateMetadata()` |
| **Sitemap includes noindex pages** | `app/sitemap.ts` | Filter URLs through `IndexPolicy` before emitting |
| **Single monolithic sitemap** | `app/sitemap.ts` | Split into sitemap index + multiple sitemaps |
| **Sitemap/route mismatch** | `app/sitemap.ts`<br>`app/[city]/[service]/page.tsx` | Fix sitemap to only include cities that exist in `cityData`, OR add `generateStaticParams` to route |
| **No content verification** | New: `lib/content-verification.ts`<br>New: `scripts/verify-content-binding.ts` | Create verification system |
| **Potential CMS query issues** | `lib/cis-content.ts` | Audit GROQ queries for correct city/industry/service filtering |
| **No centralized policy** | New: `lib/seo/index-policy.ts` | Create IndexPolicy module |

### Prioritized Checklist

#### Phase 1: Critical Fixes (Do First)
- [ ] **1.1** Create `lib/seo/index-policy.ts` - IndexPolicy module
- [ ] **1.2** Fix sitemap/route mismatch: Either add `generateStaticParams` to `/[city]/[service]` OR filter sitemap to match `cityData`
- [ ] **1.3** Add indexing control to `/[city]/industry/[industry]/[service]/page.tsx` metadata
- [ ] **1.4** Filter sitemap.ts to only emit indexable URLs (call IndexPolicy)

#### Phase 2: Architecture Improvements
- [ ] **2.1** Split sitemap into sitemap index + multiple sitemaps:
  - `sitemap-index.xml`
  - `sitemap-core.xml`
  - `sitemap-services.xml`
  - `sitemap-locations-tier1.xml`
  - `sitemap-programmatic-tier2.xml`
- [ ] **2.2** Add indexing control to all programmatic routes
- [ ] **2.3** Audit CMS queries in `lib/cis-content.ts` for correct filtering

#### Phase 3: Content Verification
- [ ] **3.1** Create `lib/content-verification.ts` - runtime guards
- [ ] **3.2** Create `scripts/verify-content-binding.ts` - build-time tests
- [ ] **3.3** Add content verification to CI/CD pipeline

#### Phase 4: Optimization
- [ ] **4.1** Add `generateStaticParams` to `/[city]/[service]` route (if keeping it)
- [ ] **4.2** Optimize sitemap generation (parallel processing, caching)
- [ ] **4.3** Add sitemap validation tests

### Concrete Code Edits

#### Edit 1: Create IndexPolicy Module
**File:** `lib/seo/index-policy.ts` (NEW)

```typescript
// See detailed implementation in next section
```

#### Edit 2: Update Sitemap to Use IndexPolicy
**File:** `app/sitemap.ts`

**Changes:**
- Import `IndexPolicy`
- Filter all URL arrays through `IndexPolicy.getPolicy()`
- Only emit URLs where `indexable === true`
- Group by `sitemapBucket` for future sitemap index split

#### Edit 3: Add Indexing Control to City+Industry+Service Pages
**File:** `app/[city]/industry/[industry]/[service]/page.tsx`

**Changes:**
- Import `IndexPolicy` in `generateMetadata()`
- Call `IndexPolicy.getPolicy()` with route type and params
- Set `robots` and `alternates.canonical` from policy output

#### Edit 4: Fix City+Service Route
**File:** `app/[city]/[service]/page.tsx`

**Option A (Recommended):** Add `generateStaticParams`
```typescript
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  for (const city of Object.keys(cityData)) {
    for (const service of Object.keys(serviceData)) {
      params.push({ city, service })
    }
  }
  return params
}
```

**Option B:** Update sitemap to only include cities in `cityData`

---

## Detailed Implementation: IndexPolicy Module

**File:** `lib/seo/index-policy.ts`

```typescript
import { citySlugs } from '../cities'
import { industrySlugs } from '../industries'

export type RouteType = 
  | 'core'
  | 'service'
  | 'city'
  | 'city-service'
  | 'city-industry'
  | 'city-industry-service'

export interface IndexPolicyParams {
  routeType: RouteType
  city?: string
  service?: string
  industry?: string
  hasUniqueContent?: boolean
  hasCmsContent?: boolean
  wordCount?: number
}

export interface IndexPolicy {
  indexable: boolean
  sitemapBucket: 'core' | 'services' | 'locations-tier1' | 'programmatic-tier2' | null
  robotsDirectives: {
    index: boolean
    follow: boolean
    noarchive?: boolean
    nosnippet?: boolean
  }
  canonical: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

const BASE_URL = 'https://www.webvello.com'

// Tier 1 services (always indexable for city+service)
const TIER1_SERVICES = ['web-development', 'seo', 'website-design', 'local-seo', 'digital-marketing', 'ai-seo', 'ai-consulting', 'ui-ux-design']

export class IndexPolicy {
  static getPolicy(params: IndexPolicyParams): IndexPolicy {
    const { routeType, city, service, industry, hasUniqueContent, hasCmsContent, wordCount } = params

    // Tier 1: Always index
    if (routeType === 'core') {
      return {
        indexable: true,
        sitemapBucket: 'core',
        robotsDirectives: { index: true, follow: true },
        canonical: `${BASE_URL}/${this.getCanonicalPath(params)}`,
        priority: 1.0,
        changeFrequency: 'daily'
      }
    }

    if (routeType === 'service') {
      return {
        indexable: true,
        sitemapBucket: 'services',
        robotsDirectives: { index: true, follow: true },
        canonical: `${BASE_URL}/services/${service}`,
        priority: 0.8,
        changeFrequency: 'weekly'
      }
    }

    if (routeType === 'city') {
      return {
        indexable: true,
        sitemapBucket: 'locations-tier1',
        robotsDirectives: { index: true, follow: true },
        canonical: `${BASE_URL}/${city}`,
        priority: 0.8,
        changeFrequency: 'weekly'
      }
    }

    if (routeType === 'city-service') {
      const isTier1Service = service && TIER1_SERVICES.includes(service)
      if (isTier1Service) {
        return {
          indexable: true,
          sitemapBucket: 'locations-tier1',
          robotsDirectives: { index: true, follow: true },
          canonical: `${BASE_URL}/${city}/${service}`,
          priority: 0.7,
          changeFrequency: 'weekly'
        }
      }
      // Tier 3: Long-tail services
      return {
        indexable: false,
        sitemapBucket: null,
        robotsDirectives: { index: false, follow: true },
        canonical: `${BASE_URL}/${city}/${service}`,
        priority: 0.5,
        changeFrequency: 'monthly'
      }
    }

    if (routeType === 'city-industry') {
      // Tier 3: Navigation only
      return {
        indexable: false,
        sitemapBucket: null,
        robotsDirectives: { index: false, follow: true },
        canonical: `${BASE_URL}/${city}/industry/${industry}`,
        priority: 0.4,
        changeFrequency: 'monthly'
      }
    }

    if (routeType === 'city-industry-service') {
      // Tier 2: Conditional index
      const shouldIndex = 
        hasCmsContent === true ||
        (hasUniqueContent === true && (wordCount || 0) >= 2000) ||
        false // Add more conditions as needed

      if (shouldIndex) {
        return {
          indexable: true,
          sitemapBucket: 'programmatic-tier2',
          robotsDirectives: { index: true, follow: true },
          canonical: `${BASE_URL}/${city}/industry/${industry}/${service}`,
          priority: 0.6,
          changeFrequency: 'monthly'
        }
      }

      return {
        indexable: false,
        sitemapBucket: null,
        robotsDirectives: { index: false, follow: true },
        canonical: `${BASE_URL}/${city}/industry/${industry}/${service}`,
        priority: 0.5,
        changeFrequency: 'monthly'
      }
    }

    // Default: noindex
    return {
      indexable: false,
      sitemapBucket: null,
      robotsDirectives: { index: false, follow: true },
      canonical: `${BASE_URL}/${this.getCanonicalPath(params)}`,
      priority: 0.3,
      changeFrequency: 'monthly'
    }
  }

  private static getCanonicalPath(params: IndexPolicyParams): string {
    const { routeType, city, service, industry } = params
    if (routeType === 'city-industry-service') {
      return `${city}/industry/${industry}/${service}`
    }
    if (routeType === 'city-industry') {
      return `${city}/industry/${industry}`
    }
    if (routeType === 'city-service') {
      return `${city}/${service}`
    }
    if (routeType === 'city') {
      return city || ''
    }
    if (routeType === 'service') {
      return `services/${service}`
    }
    return ''
  }
}
```

---

## Next Steps

1. **Review this audit** with the team
2. **Prioritize Phase 1 fixes** (critical indexing control)
3. **Implement IndexPolicy module** first
4. **Test sitemap generation** with IndexPolicy filtering
5. **Gradually roll out** Phase 2-4 improvements

**Estimated Impact:**
- Reduce sitemap size from ~8,500 URLs to ~2,000-3,000 indexable URLs
- Eliminate 404s from sitemap/route mismatch
- Enable proper tiered indexing control
- Prevent content bleed issues
- Improve crawl budget efficiency
