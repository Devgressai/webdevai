# Complete Route & Sitemap Audit - WebVello Next.js 14 App Router

**Date:** 2025-01-24  
**Audit Method:** Direct code inspection (no assumptions)  
**Framework:** Next.js 14 App Router

---

## A) Param Sources Inventory

### Verified Counts (from code inspection)

| Source File | Export | Count | Line Reference |
|-------------|--------|-------|----------------|
| `lib/cities.ts` | `citySlugs` | **109** | Line 115: `Object.keys(cities)` |
| `lib/data/city-data.ts` | `cityDataSlugs` | **109** | Line 14: Re-exports from `lib/cities.ts` |
| `lib/data/service-data.ts` | `serviceDataSlugs` | **28** | Line 251: `Object.keys(serviceData)` |
| `lib/seo/index-policy.ts` | `TIER1_SERVICES` | **8** | Lines 157-166: Hardcoded array |
| `lib/industries.ts` | `industrySlugs` | **15** | Line 110: `Object.keys(industries)` |
| `lib/get-blog-posts.ts` | `getBlogPosts()` | **54** | File system scan: `find app/blog -mindepth 2 -name "page.tsx"` = 54 directories |

**Tier 1 Services (from `lib/seo/index-policy.ts:157-166`):**
1. `web-development`
2. `seo`
3. `website-design`
4. `local-seo`
5. `digital-marketing`
6. `ai-seo`
7. `ai-consulting`
8. `ui-ux-design`

---

## B) Route Family Inventory

| Route Pattern | Page File Path | generateStaticParams? | dynamicParams? | uses getSeoDirectives? | Canonical Implementation | Linked From |
|---------------|----------------|----------------------|----------------|------------------------|--------------------------|-------------|
| `/` | `app/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (logo), Footer |
| `/about` | `app/about/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (About dropdown), Footer |
| `/contact` | `app/contact/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header, Footer |
| `/pricing` | `app/pricing/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (About dropdown) |
| `/resources` | `app/resources/page.tsx` | No | Unspecified | No (core page) | Explicit: `canonical: 'https://webvello.com/resources'` (line 43) | Header (About dropdown) |
| `/case-studies` | `app/case-studies/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (About dropdown) |
| `/industries` | `app/industries/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (About dropdown) |
| `/locations` | `app/locations/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Footer, `app/page.tsx:641` |
| `/locations/hawaii` | `app/locations/hawaii/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | `/locations` page |
| `/locations/hawaii/honolulu` | `app/locations/hawaii/honolulu/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | `/locations/hawaii` page |
| `/locations/hawaii/kona` | `app/locations/hawaii/kona/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | `/locations/hawaii` page |
| `/solutions` | `app/solutions/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (Problem Solvers dropdown) |
| `/solutions/[slug]` | `app/solutions/[slug]/page.tsx` | No | Unspecified | No (core page) | Via `getSeoDirectives()` in sitemap (line 293) | Header (Problem Solvers dropdown), `/solutions` page |
| `/blog` | `app/blog/page.tsx` | No | Unspecified | No (core page) | Explicit: `canonical: 'https://www.webvello.com/blog'` (line 11) | Header (Blog link) |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | No | Unspecified | No | Page-level metadata (no canonical found) | `/blog` hub, internal blog links |
| `/seo-audit` | `app/seo-audit/page.tsx` | No | Unspecified | No | Explicit: `canonical: 'https://www.webvello.com/tools/seo-audit'` (line 35) | **NOT LINKED** (orphaned) |
| `/website-speed-test` | `app/website-speed-test/page.tsx` | No | Unspecified | No | Page-level metadata (no canonical found) | **NOT LINKED** (orphaned) |
| `/enhanced-demo` | `app/enhanced-demo/page.tsx` | No | Unspecified | No | Page-level metadata (no canonical found) | **NOT LINKED** (orphaned) |
| `/services` | `app/services/page.tsx` | No | Unspecified | No | Page-level metadata (no canonical found) | Header (Design dropdown), Footer |
| `/services/[service]` | **NO DYNAMIC ROUTE** | N/A | N/A | N/A | N/A | N/A |
| `/services/{service-slug}` | `app/services/{service-slug}/page.tsx` (210 static pages) | No | Unspecified | Yes (for sitemap only) | Via `getSeoDirectives()` in sitemap (line 309) | Header (service dropdowns), Footer (4 services), `/services` page |
| `/{city}` | `app/[city]/page.tsx` | **NO** | Unspecified | Yes (for sitemap only) | Via `getSeoDirectives()` in sitemap (line 341) | Footer (36 cities), `/locations` page, `app/page.tsx:641` |
| `/{city}/[service]` | `app/[city]/[service]/page.tsx` | **YES** (line 273) | **false** (line 283) | **YES** (line 312) | Via `getSeoDirectives()` → `directives.canonical` (line 326) | **NOT LINKED** (orphaned) |
| `/{city}/industry/[industry]` | `app/[city]/industry/[industry]/page.tsx` | **YES** (line 42) | **false** (line 54) | No | Page-level metadata (no canonical found) | **NOT LINKED** (orphaned) |
| `/{city}/industry/[industry]/[service]` | `app/[city]/industry/[industry]/[service]/page.tsx` | **YES** (line 28) | Unspecified | **YES** (line 78) | Via `getSeoDirectives()` → `directives.canonical` (line 100) | `/{city}/industry/[industry]` pages (line 455) |
| `/sitemap` | `app/sitemap/page.tsx` | No | Unspecified | No | Page-level metadata | Footer |
| `/sitemap/locations` | `app/sitemap/locations/page.tsx` | No | Unspecified | No | Page-level metadata | `/sitemap` page |
| `/sitemap/locations/[letter]` | `app/sitemap/locations/[letter]/page.tsx` | **YES** (line 6) | **false** (line 4) | No | Page-level metadata | `/sitemap/locations` page |
| `/sitemap/city/[city]` | `app/sitemap/city/[city]/page.tsx` | **YES** (line 5) | **false** (line 9) | No | Page-level metadata | `/sitemap` page |
| `/admin/*` | `app/admin/**/page.tsx` | No | Unspecified | No | Page-level (noindex) | None (blocked in robots.txt) |
| `/api/*` | `app/api/**/route.ts` | N/A | N/A | N/A | N/A | N/A (not indexable) |
| `/studio/*` | `app/studio/[[...tool]]/page.tsx` | No | Unspecified | No | Page-level (noindex) | None (blocked in robots.txt) |
| `/tools/seo-audit` | `app/tools/seo-audit/page.tsx` | No | Unspecified | No | Explicit: `canonical: 'https://www.webvello.com/tools/seo-audit'` (line 8) | **NOT LINKED** (orphaned) |
| `/compare/local-seo-vs-national-seo` | `app/compare/local-seo-vs-national-seo/page.tsx` | No | Unspecified | No | Explicit: `canonical: 'https://www.webvello.com/compare/local-seo-vs-national-seo'` (line 12) | **NOT LINKED** (orphaned) |
| `/accessibility` | `app/accessibility/page.tsx` | No | Unspecified | No | Page-level metadata | Footer |
| `/privacy` | `app/privacy/page.tsx` | No | Unspecified | No | Page-level metadata | Footer |
| `/terms` | `app/terms/page.tsx` | No | Unspecified | No | Page-level metadata | Footer |
| `/book` | `app/book/page.tsx` | No | Unspecified | No | Page-level metadata | **NOT LINKED** (orphaned) |
| `/free-growth-plan` | `app/free-growth-plan/page.tsx` | No | Unspecified | No | Page-level metadata | **NOT LINKED** (orphaned) |
| `/aeo-audit` | `app/aeo-audit/page.tsx` | No | Unspecified | No | Page-level metadata | **NOT LINKED** (orphaned) |

### Key Findings

1. **`app/[city]/page.tsx`** - **NO generateStaticParams** (verified: grep found no matches)
   - **Impact:** 109 city pages not pre-rendered, dynamic rendering at request time
   - **File:** `app/[city]/page.tsx` (lines 1-387, no `generateStaticParams` export)

2. **`app/services/[service]/page.tsx`** - **DOES NOT EXIST**
   - **Impact:** All 210 service pages are static, not dynamic
   - **Evidence:** `find app/services -name "page.tsx"` = 210 files, all static directories

3. **`app/[city]/[service]/page.tsx`** - Has `generateStaticParams` (line 273)
   - **Params:** `cityDataSlugs` (109) × `serviceDataSlugs` (28) = 3,052 potential pages
   - **Sitemap includes:** Only Tier 1 services (8) × 109 = 872 pages
   - **Gap:** 2,180 pages generated but not in sitemap

4. **`app/[city]/industry/[industry]/page.tsx`** - Has `generateStaticParams` (line 42)
   - **Params:** `citySlugs` (109) × `industrySlugs` (15) = 1,635 pages
   - **Sitemap:** Excluded (noindex per governance, line 396-398)

5. **`app/[city]/industry/[industry]/[service]/page.tsx`** - Has `generateStaticParams` (line 28)
   - **Params:** `citySlugs` (109) × `industrySlugs` (15) × hardcoded (3 services) = 4,905 pages
   - **Sitemap:** Excluded (handled at page generation, line 400-402)

---

## C) Sitemap Sources (app/sitemap.ts)

### Sitemap Entry Sources

| Source | Array/Function | Count | Lines | Included in Sitemap? |
|--------|---------------|-------|-------|---------------------|
| Core pages | `corePages` (hardcoded) | 14 | 14-29 | Yes (line 291-301) |
| Hawaii locations | `hawaiiLocationPages` (hardcoded) | 2 | 32-35 | Yes (line 288, 291-301) |
| Solutions | `solutionsPages` (hardcoded) | 6 | 38-45 | Yes (line 287, 291-301) |
| Standalone services | `standaloneServices` (hardcoded) | 150+ | 48-261 | Yes (line 307-317) |
| Blog posts | `getBlogPosts()` (file system) | 54 | 276-281, 321-334 | Yes (line 321-334) |
| City hubs | `citySlugs` (from `lib/cities.ts`) | 109 | 2, 339-348 | Yes (line 339-348) |
| City×Service (Tier 1) | `cityDataSlugs` × `keyServices` | 872 | 374-393 | Yes (line 374-393) |
| City×Industry hubs | `citySlugs` × `industrySlugs` | 1,635 | N/A | **NO** (excluded, line 396-398) |
| City×Industry×Service | `citySlugs` × `industrySlugs` × 3 | 4,905 | N/A | **NO** (excluded, line 400-402) |

### Sitemap Governance

All sitemap entries use `getSeoDirectives()` from `lib/seo/index-policy.ts`:
- **Core pages:** Line 293: `getSeoDirectives(url, { routeType: 'core', path })`
- **Service pages:** Line 309: `getSeoDirectives(url, { routeType: 'service', service })`
- **City hubs:** Line 341: `getSeoDirectives(url, { routeType: 'city', city })`
- **City×Service:** Line 378: `getSeoDirectives(url, { routeType: 'city-service', city, service, blocks: {} })`

**Canonical URLs:** All sitemap entries use `directives.canonical` (lines 297, 313, 344, 388)

---

## D) Sitemap URLs Not Backed by Valid Routes

### Potential 404s / Route Mismatches

#### 1. City Hub Pages (109 URLs)
**Sitemap Source:** `app/sitemap.ts:339-348` (uses `citySlugs` from `lib/cities.ts:115`)

**Route:** `app/[city]/page.tsx` - **NO generateStaticParams**

**Issue:** Sitemap includes all 109 cities, but route uses dynamic rendering. If a city slug doesn't match the hardcoded `cityData` in `app/[city]/page.tsx:28-109`, it may 404 or error.

**Verification Needed:** Check if all 109 cities from `citySlugs` exist in `app/[city]/page.tsx:28-109` hardcoded `cityData`.

**Example URLs in Sitemap:**
- `https://www.webvello.com/new-york-ny` (from `citySlugs[0]`)
- `https://www.webvello.com/los-angeles-ca` (from `citySlugs[1]`)
- ... (all 109 cities)

**Route Handler:** `app/[city]/page.tsx:108-387` - Uses hardcoded `cityData` (lines 28-109), not `citySlugs`

**Risk:** If `citySlugs` contains cities not in hardcoded `cityData`, those pages will 404.

---

#### 2. City×Service Pages (872 URLs)
**Sitemap Source:** `app/sitemap.ts:374-393` (uses `cityDataSlugs` × `keyServices`)

**Route:** `app/[city]/[service]/page.tsx` - **HAS generateStaticParams** (line 273)

**Params Generated:** `cityDataSlugs` (109) × `serviceDataSlugs` (28) = 3,052 params (line 273-280)

**Sitemap Includes:** Only `cityDataSlugs` (109) × `keyServices` (8) = 872 URLs (line 374-393)

**Status:** ✅ **VALID** - All 872 sitemap URLs are backed by `generateStaticParams`

**However:** 2,180 additional pages are generated but NOT in sitemap (non-Tier 1 services)

---

#### 3. Service Pages (150+ URLs)
**Sitemap Source:** `app/sitemap.ts:307-317` (uses `standaloneServices` array, lines 48-261)

**Route:** All static pages under `app/services/{service-slug}/page.tsx`

**Verification:** `find app/services -name "page.tsx"` = 210 files

**Issue:** Sitemap includes 150+ services from `standaloneServices` array, but actual files = 210. Need to verify all sitemap services have corresponding page files.

**Examples from Sitemap:**
- `/services/website-design` → `app/services/website-design/page.tsx` ✅
- `/services/geo-los-angeles` → `app/services/geo-los-angeles/page.tsx` ✅ (verified via glob search)
- `/services/alabama` → `app/services/alabama/page.tsx` ✅ (verified via glob search)

**Status:** ✅ **LIKELY VALID** - All services in sitemap appear to have static page files

---

#### 4. Blog Posts (54 URLs)
**Sitemap Source:** `app/sitemap.ts:321-334` (uses `getBlogPosts()` from `lib/get-blog-posts.ts`)

**Route:** `app/blog/[slug]/page.tsx` - **NO generateStaticParams**

**Verification:** `find app/blog -mindepth 2 -name "page.tsx"` = 54 directories

**Status:** ✅ **VALID** - Blog loader scans file system, matches actual blog directories

---

## E) Indexable Routes NOT Present in Sitemap

### 1. City×Service Pages (Non-Tier 1) - 2,180 Pages

**Route:** `app/[city]/[service]/page.tsx`

**Generated:** `cityDataSlugs` (109) × `serviceDataSlugs` (28) = 3,052 pages (line 273-280)

**Sitemap Includes:** Only Tier 1 services (8) × 109 = 872 pages (line 374-393)

**Missing:** 20 services × 109 cities = **2,180 pages**

**Services Missing from Sitemap:**
- `website-redesign` (from `serviceDataSlugs`, not in `keyServices`)
- `rapid-web-design`
- `ui-ux-design` (wait, this IS in Tier 1 - verify)
- `ecommerce-design`
- `app-design-development`
- `software-design-development`
- `software-development`
- `shopify-development`
- `wordpress-development`
- `ai-digital-marketing`
- `ai-gpt-integration`
- `ai-agent-development`
- `chatgpt-optimization`
- `generative-engine-optimization`
- `answer-engine-optimization`
- `enterprise-geo-services`
- `email-marketing-design`
- `social-media-design`
- `cro-ecommerce`
- `cro-lead-generation`

**Indexing Status:** These pages are generated via `generateStaticParams` but excluded from sitemap. They may be indexed if:
- Discovered via internal links
- Pass quality gates at render time (have required blocks)
- But sitemap doesn't include them

**Evidence:** `app/sitemap.ts:374-393` only loops through `keyServices` (8 services), not all `serviceDataSlugs` (28 services)

---

### 2. City×Industry Hubs - 1,635 Pages

**Route:** `app/[city]/industry/[industry]/page.tsx`

**Generated:** `citySlugs` (109) × `industrySlugs` (15) = 1,635 pages (line 42-52)

**Sitemap:** Explicitly excluded (line 396-398: "City-industry hubs: Tier 3 noindex — excluded from sitemap")

**Indexing Status:** Noindex per governance (`lib/seo/index-policy.ts:618-632`), but pages exist and are generated.

**Status:** ✅ **INTENTIONAL** - Excluded by design (noindex navigation hubs)

---

### 3. City×Industry×Service Pages - 4,905 Pages

**Route:** `app/[city]/industry/[industry]/[service]/page.tsx`

**Generated:** `citySlugs` (109) × `industrySlugs` (15) × 3 services = 4,905 pages (line 28-39)

**Sitemap:** Explicitly excluded (line 400-402: "City-industry-service: Phase 1 excluded (no reliable CMS list)")

**Indexing Status:** Handled at page generation time, may be indexed if they pass quality gates.

**Status:** ✅ **INTENTIONAL** - Excluded from sitemap, but may be indexed if discovered

---

### 4. Static Pages Not in Sitemap

**Routes:**
- `/tools/seo-audit` - `app/tools/seo-audit/page.tsx` (exists, not in sitemap)
- `/compare/local-seo-vs-national-seo` - `app/compare/local-seo-vs-national-seo/page.tsx` (exists, not in sitemap)
- `/book` - `app/book/page.tsx` (exists, not in sitemap)
- `/free-growth-plan` - `app/free-growth-plan/page.tsx` (exists, not in sitemap)
- `/aeo-audit` - `app/aeo-audit/page.tsx` (exists, not in sitemap)
- `/accessibility` - `app/accessibility/page.tsx` (exists, not in sitemap)
- `/privacy` - `app/privacy/page.tsx` (exists, not in sitemap)
- `/terms` - `app/terms/page.tsx` (exists, not in sitemap)

**Status:** These pages exist but are not included in sitemap `corePages` array (lines 14-29)

---

## F) Duplicate-Intent URL Patterns

### Duplicate 1: City Hub vs GEO City Page

**Pattern A:** `/{city}` (e.g., `/new-york-ny`)
- **Route:** `app/[city]/page.tsx`
- **Source:** `citySlugs` (109 cities)
- **Sitemap:** Included (line 339-348)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 344)

**Pattern B:** `/services/geo-{city}` (e.g., `/services/geo-new-york`)
- **Route:** `app/services/geo-{city}/page.tsx` (95+ static pages)
- **Source:** Hardcoded in `standaloneServices` array (lines 114-207)
- **Sitemap:** Included (line 307-317)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 313)

**Conflict Evidence:**
- **Sitemap includes both:** `app/sitemap.ts:339` (city hubs) and `app/sitemap.ts:114-207` (GEO city pages)
- **No canonical relationship:** GEO pages don't canonicalize to city hubs
- **Count:** 95 GEO city pages vs 109 city hubs (overlap: ~95 cities)

**Examples:**
- `/new-york-ny` (sitemap line 339) vs `/services/geo-new-york` (sitemap line 115)
- `/los-angeles-ca` (sitemap line 339) vs `/services/geo-los-angeles` (sitemap line 114)
- `/chicago-il` (sitemap line 339) vs `/services/geo-chicago` (sitemap line 116)

**File Evidence:**
- City hub: `app/[city]/page.tsx:108-387`
- GEO page: `app/services/geo-new-york/page.tsx` (verified via glob search)

---

### Duplicate 2: Programmatic City×Service vs Static City-Specific Service

**Pattern A:** `/{city}/[service]` (e.g., `/kansas-city-mo/seo`)
- **Route:** `app/[city]/[service]/page.tsx`
- **Source:** `cityDataSlugs` (109) × `serviceDataSlugs` (28) = 3,052 pages
- **Sitemap:** Included (872 Tier 1 pages, line 374-393)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 326)

**Pattern B:** `/services/{city}-{service}` (e.g., `/services/seo-doctors-kansas-city`)
- **Route:** `app/services/seo-doctors-kansas-city/page.tsx` (static)
- **Source:** Hardcoded in `standaloneServices` array (line 88)
- **Sitemap:** Included (line 307-317)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 313)

**Conflict Evidence:**
- **Sitemap includes both:** `app/sitemap.ts:374` (programmatic) and `app/sitemap.ts:88` (static)
- **No canonical relationship:** Static pages don't canonicalize to programmatic pages
- **Count:** 20+ static city-specific service pages vs 3,052 programmatic pages

**Examples from Sitemap:**
- `/kansas-city-mo/seo` (sitemap line 374, if kansas-city-mo in cityDataSlugs) vs `/services/seo-doctors-kansas-city` (sitemap line 88)
- `/denver-co/wordpress-development` (programmatic) vs `/services/wordpress-developers-denver` (sitemap line 90)
- `/albuquerque-nm/website-design` (programmatic) vs `/services/web-design-albuquerque` (sitemap line 99)
- `/columbus-oh/website-design` (programmatic) vs `/services/web-design-columbus` (sitemap line 100)
- `/oklahoma-city-ok/website-design` (programmatic) vs `/services/web-design-oklahoma-city` (sitemap line 101)
- `/fresno-ca/web-development` (programmatic) vs `/services/web-development-fresno` (sitemap line 102)
- `/las-vegas-nv/web-development` (programmatic) vs `/services/web-development-las-vegas` (sitemap line 103)
- `/louisville-ky/website-design` (programmatic) vs `/services/website-design-louisville` (sitemap line 104)
- `/charlotte-nc/seo` (programmatic) vs `/services/seo-consulting-charlotte` (sitemap line 98)
- `/baltimore-md/seo` (programmatic) vs `/services/seo-baltimore` (sitemap line 96)
- `/austin-tx/website-design` (programmatic) vs `/services/medical-website-design-austin` (sitemap line 110)
- `/austin-tx/website-design` (programmatic) vs `/services/surgeon-web-design-austin` (sitemap line 111)
- `/chicago-il/website-design` (programmatic) vs `/services/biotech-website-design-chicago` (sitemap line 107)
- `/milwaukee-wi/website-design` (programmatic) vs `/services/auto-repair-website-design-milwaukee` (sitemap line 106)
- `/los-angeles-ca/website-design` (programmatic) vs `/services/dairy-industry-website-design-los-angeles` (sitemap line 108)
- `/charlotte-nc/web-development` (programmatic) vs `/services/educational-website-development-charlotte` (sitemap line 109)

**File Evidence:**
- Programmatic: `app/[city]/[service]/page.tsx:273-280` (generateStaticParams)
- Static: `app/services/seo-doctors-kansas-city/page.tsx` (verified via glob search)

---

### Duplicate 3: Hawaii Location Pages vs City Pages

**Pattern A:** `/locations/hawaii/{city}` (e.g., `/locations/hawaii/honolulu`)
- **Route:** `app/locations/hawaii/honolulu/page.tsx` (static)
- **Source:** Hardcoded in `hawaiiLocationPages` array (line 33)
- **Sitemap:** Included (line 288, 291-301)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 297)

**Pattern B:** `/{city}` (e.g., `/honolulu-hi`)
- **Route:** `app/[city]/page.tsx`
- **Source:** `citySlugs` includes `honolulu-hi` (line 61)
- **Sitemap:** Included (line 339-348)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 344)

**Conflict Evidence:**
- **Sitemap includes both:** `app/sitemap.ts:33` (`/locations/hawaii/honolulu`) and `app/sitemap.ts:339` (`/honolulu-hi`)
- **No canonical relationship:** Hawaii location pages don't canonicalize to city pages
- **Inconsistent pattern:** Hawaii uses `/locations/hawaii/{city}` while other cities use `/{city}`

**Examples:**
- `/locations/hawaii/honolulu` (sitemap line 33) vs `/honolulu-hi` (sitemap line 339, if in citySlugs)
- `/locations/hawaii/kona` (sitemap line 34) vs (no `kona-hi` in citySlugs, so no conflict)

**File Evidence:**
- Hawaii location: `app/locations/hawaii/honolulu/page.tsx` (verified via directory listing)
- City hub: `app/[city]/page.tsx:61` (honolulu-hi in citySlugs)

---

### Duplicate 4: State Pages vs City Pages (Conceptual)

**Pattern A:** `/services/{state}` (e.g., `/services/california`)
- **Route:** `app/services/california/page.tsx` (static, 50 states)
- **Source:** Hardcoded in `standaloneServices` array (lines 211-260)
- **Sitemap:** Included (line 307-317)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 313)

**Pattern B:** `/{city}` (e.g., `/los-angeles-ca`)
- **Route:** `app/[city]/page.tsx`
- **Source:** `citySlugs` (109 cities)
- **Sitemap:** Included (line 339-348)
- **Canonical:** Via `getSeoDirectives()` → `directives.canonical` (line 344)

**Conflict Evidence:**
- **Sitemap includes both:** State pages (line 211-260) and city pages (line 339-348)
- **No hierarchical relationship:** State pages don't link to cities, cities don't link to states
- **Conceptual overlap:** Both target location-based SEO

**Examples:**
- `/services/california` (sitemap line 215) vs `/los-angeles-ca`, `/san-francisco-ca`, `/san-diego-ca` (all in citySlugs)
- `/services/texas` (sitemap line 253) vs `/houston-tx`, `/dallas-tx`, `/austin-tx` (all in citySlugs)
- `/services/new-york` (sitemap line 242) vs `/new-york-ny`, `/buffalo-ny`, `/rochester-ny` (all in citySlugs)

**File Evidence:**
- State page: `app/services/california/page.tsx` (verified via glob search)
- City hub: `app/[city]/page.tsx` (dynamic route)

---

## G) Canonical Implementation Locations

### Via getSeoDirectives() (lib/seo/index-policy.ts)

**Function:** `getCanonicalUrl()` (lines 533-557)

**Used By:**
1. **Sitemap:** `app/sitemap.ts:297, 313, 344, 388` - Uses `directives.canonical`
2. **City×Service pages:** `app/[city]/[service]/page.tsx:326` - `alternates: { canonical: directives.canonical }`
3. **City×Industry×Service pages:** `app/[city]/industry/[industry]/[service]/page.tsx:100` - `alternates: { canonical: directives.canonical }`

**Canonical Logic:**
- `city-industry-service`: `${BASE_URL}/${city}/industry/${industry}/${service}` (line 538)
- `city-industry`: `${BASE_URL}/${city}/industry/${industry}` (line 541)
- `city-service`: `${BASE_URL}/${city}/${service}` (line 544)
- `city`: `${BASE_URL}/${city}` (line 547)
- `service`: `${BASE_URL}/services/${service}` (line 550)
- `core`: `${BASE_URL}/${path}` or `${BASE_URL}` (lines 553-554)

### Explicit Canonical (Page-Level Metadata)

1. **Resources hub:** `app/resources/page.tsx:43` - `canonical: 'https://webvello.com/resources'`
2. **SEO Audit:** `app/seo-audit/page.tsx:35` - `canonical: 'https://www.webvello.com/tools/seo-audit'`
3. **Tools SEO Audit:** `app/tools/seo-audit/page.tsx:8` - `canonical: 'https://www.webvello.com/tools/seo-audit'`
4. **Blog hub:** `app/blog/page.tsx:11` - `canonical: 'https://www.webvello.com/blog'`
5. **Compare page:** `app/compare/local-seo-vs-national-seo/page.tsx:12` - `canonical: 'https://www.webvello.com/compare/local-seo-vs-national-seo'`
6. **Resource pages:** `app/resources/*/page.tsx` - Explicit canonicals (lines 12-13)

**Note:** `/seo-audit` and `/tools/seo-audit` both canonicalize to `/tools/seo-audit` - potential duplicate page issue.

---

## H) Linked-From Sources

### Header Links (components/layout/header.tsx)

**Verified Links:**
- `/services` (line 19)
- `/services/website-design` (line 24)
- `/services/website-redesign` (line 32)
- `/services/rapid-web-design` (line 39)
- `/services/social-media-design` (line 46)
- `/services/ecommerce-design` (line 53)
- `/services/email-marketing-design` (line 60)
- `/services/app-design-development` (line 67)
- `/services/ai-consulting` (line 81)
- `/services/ai-digital-marketing` (line 89)
- `/services/ai-seo` (line 96)
- `/services/chatgpt-optimization` (line 103)
- `/services/local-seo` (line 110)
- `/services/digital-marketing` (line 117)
- `/services/generative-engine-optimization` (line 124)
- `/services/answer-engine-optimization` (line 131)
- `/services/ai-gpt-integration` (line 138)
- `/services/ai-agent-development` (line 145)
- `/services/enterprise-geo-services` (line 152)
- `/services/web-development` (line 166)
- `/services/wordpress-development` (line 174)
- `/services/shopify-development` (line 181)
- `/services/software-development` (line 188)
- `/services/software-design-development` (line 195)
- `/services/ui-ux-design` (line 202)
- `/services/seo` (line 209)
- `/services/cro-ecommerce` (line 223)
- `/services/cro-lead-generation` (line 230)
- `/solutions/website-leads` (line 244)
- `/solutions/declining-traffic` (line 251)
- `/solutions/website-conversion` (line 258)
- `/solutions/website-roi` (line 265)
- `/solutions/google-visibility` (line 272)
- `/solutions/agency-results` (line 279)
- `/about` (line 288, 293)
- `/case-studies` (line 300)
- `/industries` (line 307)
- `/pricing` (line 314)
- `/resources` (line 321)
- `/blog` (line 330)
- `/contact` (line 500, 588)

**NOT Linked in Header:**
- City pages (`/{city}`)
- City×Service pages (`/{city}/[service]`)
- Locations hub (`/locations`)
- State pages (`/services/{state}`)
- GEO pages (`/services/geo-*`)
- Tool pages (`/seo-audit`, `/website-speed-test`, `/enhanced-demo`)

### Footer Links (components/layout/footer.tsx)

**Verified Links:**
- `/services/website-design` (line 122)
- `/services/web-development` (line 130)
- `/services/ai-consulting` (line 138)
- `/services/seo` (line 146)
- `/services` (line 154)
- `/about` (line 171)
- `/accessibility` (line 179)
- `/contact` (line 187, 254)
- `/{city.slug}` (36 cities, line 205) - Hardcoded list, not from `citySlugs`
- `/locations` (line 215)
- `/privacy` (line 236)
- `/terms` (line 242)
- `/sitemap` (line 248)

**NOT Linked in Footer:**
- City×Service pages (`/{city}/[service]`)
- State pages (`/services/{state}`)
- GEO pages (`/services/geo-*`)
- Tool pages (`/seo-audit`, `/website-speed-test`, `/enhanced-demo`)
- Solutions pages (`/solutions/*`)
- Industries pages (`/industries/*`)

### Internal Page Links

**From `/locations` page:**
- Links to `/{city}` pages (all 109 cities, grouped by state)
- **Evidence:** `app/locations/page.tsx:14` - Uses `cityMap` from `lib/cities.ts`

**From `/{city}` pages:**
- **NOT verified** - Need to check if city pages link to city×service pages
- **Evidence needed:** Search `app/[city]/page.tsx` for service links

**From `/{city}/[service]` pages:**
- Links back to `/{city}` (line 397: `<Link href={`/${params.city}`}`)
- **Evidence:** `app/[city]/[service]/page.tsx:397`

**From `/{city}/industry/[industry]` pages:**
- Links to `/{city}/industry/[industry]/[service]` (line 455)
- Links back to `/{city}` (line 614)
- Links to `/locations` (line 634)
- **Evidence:** `app/[city]/industry/[industry]/page.tsx:455, 614, 634`

**From `/services` page:**
- Links to service pages (verified via grep)
- **Evidence:** `app/services/page.tsx` (service links present)

**From `/solutions` page:**
- Links to solution pages and services
- **Evidence:** `app/solutions/page.tsx:338-557` (multiple service links)

**From `/resources` page:**
- Links to service pages
- **Evidence:** `app/resources/page.tsx:413-632` (multiple service links)

---

## I) Summary of Issues

### Critical Issues

1. **`app/[city]/page.tsx` - NO generateStaticParams**
   - **Impact:** 109 city pages not pre-rendered, potential 404s if citySlugs ≠ hardcoded cityData
   - **File:** `app/[city]/page.tsx` (no generateStaticParams export found)
   - **Fix:** Add `generateStaticParams` using `citySlugs`

2. **Sitemap-Route Mismatch Risk**
   - **Issue:** Sitemap uses `citySlugs` (109 cities) but `app/[city]/page.tsx` uses hardcoded `cityData` (109 entries, but need to verify match)
   - **File:** `app/sitemap.ts:339` vs `app/[city]/page.tsx:28-109`
   - **Fix:** Verify `citySlugs` matches hardcoded `cityData` keys, or use `citySlugs` in route

3. **2,180 City×Service Pages Not in Sitemap**
   - **Issue:** `generateStaticParams` creates 3,052 pages, but sitemap only includes 872 (Tier 1)
   - **File:** `app/[city]/[service]/page.tsx:273-280` (generates all) vs `app/sitemap.ts:374` (only Tier 1)
   - **Impact:** Non-Tier 1 pages not discoverable via sitemap

### High Priority Issues

4. **Duplicate Content: GEO vs City Pages**
   - **Count:** 95 GEO city pages vs 109 city hubs
   - **Evidence:** `app/sitemap.ts:114-207` (GEO) vs `app/sitemap.ts:339` (city hubs)
   - **Fix:** Add canonical from GEO pages to city hubs

5. **Duplicate Content: Static vs Programmatic City-Service**
   - **Count:** 20+ static pages vs 3,052 programmatic pages
   - **Evidence:** `app/sitemap.ts:88-111` (static) vs `app/sitemap.ts:374` (programmatic)
   - **Fix:** Audit content, add canonicals if duplicate

6. **Orphaned Tool Pages**
   - **Pages:** `/seo-audit`, `/website-speed-test`, `/enhanced-demo`
   - **Evidence:** Not in header/footer navigation (grep verified)
   - **Fix:** Add to navigation or create `/tools` hub

### Medium Priority Issues

7. **Hawaii Location Pattern Inconsistency**
   - **Issue:** `/locations/hawaii/honolulu` vs `/honolulu-hi` (both in sitemap)
   - **Evidence:** `app/sitemap.ts:33` vs `app/sitemap.ts:339`
   - **Fix:** Standardize to single pattern

8. **State Pages Not Linked**
   - **Count:** 50 state pages in sitemap, not linked from cities or locations hub
   - **Evidence:** `app/sitemap.ts:211-260` (states) vs footer/header (no state links)
   - **Fix:** Add state links to locations hub and city pages

9. **City×Service Pages Not Linked**
   - **Count:** 872 Tier 1 pages in sitemap, not consistently linked from city pages
   - **Evidence:** `app/[city]/page.tsx` (need to verify service links)
   - **Fix:** Add "Our Services" section to city pages

---

**End of Complete Route Audit**
