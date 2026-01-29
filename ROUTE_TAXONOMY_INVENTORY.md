# WebVello Route & Taxonomy Inventory

**Date:** 2025-01-24  
**Source:** Direct file inspection from repository  
**Framework:** Next.js 14 App Router

---

## 1. Complete Route Family Inventory

| Route Pattern | Type | Source of Params | Count Estimate | Indexing Governance | Canonical Strategy | Linked From |
|---------------|------|------------------|----------------|---------------------|---------------------|-------------|
| `/` | Pillar Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (logo), Footer |
| `/about` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (About dropdown), Footer |
| `/contact` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header, Footer |
| `/pricing` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (About dropdown) |
| `/resources` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (About dropdown) |
| `/case-studies` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (About dropdown) |
| `/industries` | Pillar Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (About dropdown) |
| `/locations` | Pillar Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Footer |
| `/locations/hawaii` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | `/locations` page |
| `/locations/hawaii/honolulu` | Leaf | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | `/locations/hawaii` |
| `/locations/hawaii/kona` | Leaf | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | `/locations/hawaii` |
| `/solutions` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (Problem Solvers dropdown) |
| `/solutions/[slug]` | Leaf | Hardcoded array (6 solutions) | 6 | `index-policy` (routeType: 'core') | Explicit (self) | Header (Problem Solvers dropdown) |
| `/blog` | Hub | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Header (Blog link) |
| `/blog/[slug]` | Blog | `lib/get-blog-posts.ts` (file system scan) | 54 | Page-level metadata | Explicit (self) | `/blog` hub, internal blog links |
| `/seo-audit` | Tool | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Unknown (orphaned?) |
| `/website-speed-test` | Tool | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Unknown (orphaned?) |
| `/enhanced-demo` | Tool | Hardcoded | 1 | `index-policy` (routeType: 'core') | Explicit (self) | Unknown (orphaned?) |
| `/services` | Pillar Hub | Hardcoded | 1 | `index-policy` (routeType: 'service') | Explicit (self) | Header (Design dropdown), Footer |
| `/services/[service]` | Leaf | Hardcoded array (150+ services) | 210 | `index-policy` (routeType: 'service') | Explicit (self) | Header (service dropdowns), Footer (4 services), `/services` hub |
| `/services/geo-{city}` | Leaf | Hardcoded (95+ cities) | 95 | `index-policy` (routeType: 'service') | **None** (conflict with `/{city}`) | `/services/geo-services` hub (if exists) |
| `/services/geo-{industry}` | Leaf | Hardcoded (15 industries) | 15 | `index-policy` (routeType: 'service') | Explicit (self) | `/services/geo-services` hub |
| `/services/{state}` | Leaf | Hardcoded (50 US states) | 50 | `index-policy` (routeType: 'service') | **None** (no relationship to cities) | Unknown (orphaned?) |
| `/{city}` | Hub | `lib/cities.ts` (citySlugs: 109 cities) | 109 | `index-policy` (routeType: 'city') | Explicit (self) | Footer (36 cities), `/locations` hub |
| `/{city}/[service]` | Programmatic | `lib/data/city-data.ts` (cityDataSlugs: 109) × `lib/data/service-data.ts` (serviceDataSlugs: 28) | 3,052 potential | `index-policy` (routeType: 'city-service') | Explicit (self) | City pages (if linked), sitemap |
| `/{city}/[service]` (Tier 1 only) | Programmatic | `cityDataSlugs` (109) × `TIER1_SERVICES` (8) | 872 | `index-policy` (routeType: 'city-service') | Explicit (self) | Sitemap, city pages (if linked) |
| `/{city}/industry/[industry]` | Programmatic | `lib/cities.ts` (citySlugs: 109) × `lib/industries.ts` (industrySlugs: 15) | 1,635 | `index-policy` (routeType: 'city-industry') | Explicit (self) | City pages (if linked), sitemap (excluded - noindex) |
| `/{city}/industry/[industry]/[service]` | Programmatic | `citySlugs` (109) × `industrySlugs` (15) × hardcoded (3 services) | 4,905 | `index-policy` (routeType: 'city-industry-service') | Explicit (self) | City×Industry hubs (if linked) |
| `/sitemap` | Tool | Hardcoded | 1 | Page-level (noindex?) | Explicit (self) | Footer |
| `/sitemap/locations` | Tool | Hardcoded | 1 | Page-level | Explicit (self) | `/sitemap` |
| `/sitemap/locations/[letter]` | Tool | `generateStaticParams` (A-Z) | 26 | Page-level | Explicit (self) | `/sitemap/locations` |
| `/sitemap/city/[city]` | Tool | `generateStaticParams` (citySlugs: 109) | 109 | Page-level | Explicit (self) | `/sitemap` |
| `/admin/*` | Admin | Hardcoded | Unknown | Page-level (noindex) | Explicit (self) | None (blocked in robots.txt) |
| `/api/*` | API | Hardcoded | Unknown | N/A (not indexable) | N/A | N/A |
| `/studio/*` | CMS | Hardcoded | 1 | Page-level (noindex) | Explicit (self) | None (blocked in robots.txt) |

### Key Data Sources Summary

- **Cities:** `lib/cities.ts` → `citySlugs` = **109 cities**
- **City Data:** `lib/data/city-data.ts` → `cityDataSlugs` = **109 cities** (re-exports from `lib/cities.ts`)
- **Services (City×Service):** `lib/data/service-data.ts` → `serviceDataSlugs` = **28 services**
- **Tier 1 Services:** `lib/seo/index-policy.ts` → `TIER1_SERVICES` = **8 services** (for city×service indexing)
- **Industries:** `lib/industries.ts` → `industrySlugs` = **15 industries**
- **Blog Posts:** `lib/get-blog-posts.ts` → **54 posts** (file system scan)
- **Standalone Services:** `app/sitemap.ts` → `standaloneServices` array = **150+ services** (includes GEO, state pages, city-specific)

### generateStaticParams Status

- ✅ `app/[city]/[service]/page.tsx` - Has `generateStaticParams` (109 × 28 = 3,052 params)
- ✅ `app/[city]/industry/[industry]/page.tsx` - Has `generateStaticParams` (109 × 15 = 1,635 params)
- ✅ `app/[city]/industry/[industry]/[service]/page.tsx` - Has `generateStaticParams` (109 × 15 × 3 = 4,905 params)
- ❌ `app/[city]/page.tsx` - **NO generateStaticParams** (dynamic rendering)
- ❌ `app/services/[service]/page.tsx` - **NO generateStaticParams** (dynamic rendering)

---

## 2. Orphaned or Weakly Linked Routes

### Routes in Sitemap but NOT Linked from Header/Footer/Hubs

1. **Tool Pages (3 pages):**
   - `/seo-audit` - In sitemap, not in header/footer
   - `/website-speed-test` - In sitemap, not in header/footer
   - `/enhanced-demo` - In sitemap, not in header/footer

2. **State Pages (50 pages):**
   - `/services/{state}` (all 50 states) - In sitemap, not linked from:
     - Header (no state navigation)
     - Footer (no state links)
     - `/locations` hub (only links to cities, not states)
     - City pages (no "View State Services" link)

3. **GEO City Pages (95+ pages):**
   - `/services/geo-{city}` - In sitemap, weakly linked:
     - Only linked from `/services/geo-services` hub (if it exists)
     - Not linked from city pages (`/{city}`)
     - Not linked from `/locations` hub
     - Not in footer

4. **City×Service Pages (872 Tier 1 pages):**
   - `/{city}/[service]` (Tier 1 only) - In sitemap, weakly linked:
     - Not consistently linked from city pages (`/{city}`)
     - Not linked from `/services` hub
     - Not linked from service pages (`/services/[service]`)
     - Only discoverable via sitemap or direct URL

5. **City×Industry Hubs (1,635 pages):**
   - `/{city}/industry/[industry]` - **Excluded from sitemap** (noindex), weakly linked:
     - Not linked from city pages (`/{city}`)
     - Not linked from `/industries` hub
     - Only discoverable via direct URL or city×industry×service pages

6. **City×Industry×Service Pages (4,905 pages):**
   - `/{city}/industry/[industry]/[service]` - **Excluded from sitemap**, weakly linked:
     - Not linked from city×industry hubs
     - Not linked from city pages
     - Not linked from industry pages
     - Only discoverable via direct URL

7. **Static City-Specific Service Pages (20+ pages):**
   - `/services/seo-doctors-kansas-city`
   - `/services/wordpress-developers-denver`
   - `/services/web-design-albuquerque`
   - `/services/web-design-columbus`
   - `/services/web-design-oklahoma-city`
   - `/services/web-development-fresno`
   - `/services/web-development-las-vegas`
   - `/services/website-design-louisville`
   - `/services/website-design-oklahoma-city`
   - `/services/auto-repair-website-design-milwaukee`
   - `/services/biotech-website-design-chicago`
   - `/services/dairy-industry-website-design-los-angeles`
   - `/services/educational-website-development-charlotte`
   - `/services/medical-website-design-austin`
   - `/services/surgeon-web-design-austin`
   - `/services/seo-baltimore`
   - `/services/seo-services-louisville`
   - `/services/seo-consulting-charlotte`
   - `/services/portland-web-marketing`
   - `/services/jacksonville-ai-seo`
   - And more...
   - **In sitemap**, but not linked from:
     - City pages (`/{city}`)
     - Service pages (`/services/[service]`)
     - Header/Footer

### Routes NOT in Sitemap but Likely Indexable

1. **City×Service Pages (Non-Tier 1):**
   - `/{city}/[service]` where service is NOT in `TIER1_SERVICES` (20 services × 109 cities = 2,180 pages)
   - These are generated via `generateStaticParams` but excluded from sitemap
   - **Status:** May be indexed if discovered via internal links, but not in sitemap

2. **City×Industry×Service Pages:**
   - `/{city}/industry/[industry]/[service]` (4,905 pages)
   - **Status:** Excluded from sitemap per governance (handled at page generation), but may be indexed if they pass quality gates

---

## 3. Duplicate Routes by Intent

### Duplicate 1: City Hub vs GEO City Page

**Pattern A:** `/{city}` (e.g., `/new-york-ny`)
- **Source:** `lib/cities.ts` (citySlugs: 109 cities)
- **Type:** Hub
- **Purpose:** City authority hub, links to city×service pages
- **Indexing:** Always indexed (Tier 1)
- **Canonical:** Self

**Pattern B:** `/services/geo-{city}` (e.g., `/services/geo-new-york`)
- **Source:** Hardcoded (95+ cities)
- **Type:** Leaf (service page)
- **Purpose:** GEO service landing page for city
- **Indexing:** Always indexed (service page)
- **Canonical:** **None** (conflict)

**Conflict:** Same intent (city-level GEO services), different URLs. No canonical relationship. User searching "GEO services New York" could land on either page.

**Examples:**
- `/new-york-ny` vs `/services/geo-new-york`
- `/los-angeles-ca` vs `/services/geo-los-angeles`
- `/chicago-il` vs `/services/geo-chicago`
- `/denver-co` vs `/services/geo-denver`
- (95+ cities have both patterns)

**Recommendation:** Add canonical from GEO pages to city hubs, OR consolidate into single pattern.

---

### Duplicate 2: City×Service (Programmatic) vs Static City-Specific Service Pages

**Pattern A:** `/{city}/[service]` (e.g., `/kansas-city-mo/seo`)
- **Source:** `cityDataSlugs` (109) × `serviceDataSlugs` (28) = 3,052 potential pages
- **Type:** Programmatic
- **Purpose:** City×Service combination page
- **Indexing:** Tier 1 services (8) always indexed, others conditional
- **Canonical:** Self
- **Governance:** Uses `index-policy` with quality gates

**Pattern B:** `/services/{city}-{service}` (e.g., `/services/seo-doctors-kansas-city`)
- **Source:** Hardcoded (20+ static pages)
- **Type:** Leaf (static service page)
- **Purpose:** City-specific service page with unique content
- **Indexing:** Always indexed (service page)
- **Canonical:** **None** (conflict)

**Conflict:** Same intent (city+service combination), different URL patterns. Static pages bypass governance system.

**Examples:**
- `/kansas-city-mo/seo` vs `/services/seo-doctors-kansas-city`
- `/denver-co/wordpress-development` vs `/services/wordpress-developers-denver`
- `/albuquerque-nm/website-design` vs `/services/web-design-albuquerque`
- `/columbus-oh/website-design` vs `/services/web-design-columbus`
- `/oklahoma-city-ok/website-design` vs `/services/web-design-oklahoma-city`
- `/fresno-ca/web-development` vs `/services/web-development-fresno`
- `/las-vegas-nv/web-development` vs `/services/web-development-las-vegas`
- `/louisville-ky/website-design` vs `/services/website-design-louisville`
- `/charlotte-nc/seo` vs `/services/seo-consulting-charlotte`
- `/baltimore-md/seo` vs `/services/seo-baltimore`
- `/austin-tx/website-design` vs `/services/medical-website-design-austin`
- `/austin-tx/website-design` vs `/services/surgeon-web-design-austin`
- `/chicago-il/website-design` vs `/services/biotech-website-design-chicago`
- `/milwaukee-wi/website-design` vs `/services/auto-repair-website-design-milwaukee`
- `/los-angeles-ca/website-design` vs `/services/dairy-industry-website-design-los-angeles`
- `/charlotte-nc/web-development` vs `/services/educational-website-development-charlotte`

**Recommendation:** Audit content uniqueness. If duplicate: Add canonical from static pages to programmatic pages. If unique: Keep separate but add cross-links.

---

### Duplicate 3: Hawaii Location Pages vs City Pages

**Pattern A:** `/locations/hawaii/{city}` (e.g., `/locations/hawaii/honolulu`)
- **Source:** Hardcoded (2 cities: honolulu, kona)
- **Type:** Leaf
- **Purpose:** Hawaii-specific location page
- **Indexing:** Always indexed (core page)
- **Canonical:** Self

**Pattern B:** `/{city}` (e.g., `/honolulu-hi`)
- **Source:** `lib/cities.ts` (citySlugs includes `honolulu-hi`)
- **Type:** Hub
- **Purpose:** City authority hub
- **Indexing:** Always indexed (city page)
- **Canonical:** Self

**Conflict:** Honolulu exists at both `/locations/hawaii/honolulu` and `/honolulu-hi`. Inconsistent pattern (Hawaii uses `/locations/*` while other cities use `/{city}`).

**Examples:**
- `/locations/hawaii/honolulu` vs `/honolulu-hi` (if in citySlugs)
- `/locations/hawaii/kona` vs (no `kona-hi` in citySlugs, so no conflict)

**Recommendation:** Standardize to single pattern. Either move Hawaii cities to `/{city}` pattern OR move all cities to `/locations/{state}/{city}` pattern.

---

### Duplicate 4: State Pages vs City Pages (Conceptual)

**Pattern A:** `/services/{state}` (e.g., `/services/california`)
- **Source:** Hardcoded (50 US states)
- **Type:** Leaf (service page)
- **Purpose:** State-level service landing page
- **Indexing:** Always indexed (service page)
- **Canonical:** Self

**Pattern B:** `/{city}` (e.g., `/los-angeles-ca`)
- **Source:** `lib/cities.ts` (109 cities)
- **Type:** Hub
- **Purpose:** City-level authority hub
- **Indexing:** Always indexed (city page)
- **Canonical:** Self

**Conflict:** Hierarchical confusion. California page doesn't link to Los Angeles page. No clear parent-child relationship. Cities don't link to their state page.

**Examples:**
- `/services/california` vs `/los-angeles-ca`, `/san-francisco-ca`, `/san-diego-ca`, etc.
- `/services/texas` vs `/houston-tx`, `/dallas-tx`, `/austin-tx`, etc.
- `/services/new-york` vs `/new-york-ny`, `/buffalo-ny`, `/rochester-ny`, etc.

**Recommendation:** Add bidirectional linking: State pages → cities in that state, City pages → state page.

---

## 4. Top 10 Priority Fixes

### 1. Add generateStaticParams to `app/[city]/page.tsx`
**Priority:** 🔴 CRITICAL  
**Impact:** Pre-render all 109 city pages, prevent 404s, improve indexing speed  
**Effort:** Low (1 hour)  
**Files:** `app/[city]/page.tsx`

### 2. Add Canonical Tags to GEO City Pages
**Priority:** 🔴 CRITICAL  
**Impact:** Resolve duplicate content between `/services/geo-{city}` and `/{city}`  
**Effort:** Medium (4 hours - create shared component)  
**Files:** `app/services/geo-*/page.tsx` (95+ files)

### 3. Link City Pages to City×Service Pages
**Priority:** 🟡 HIGH  
**Impact:** Improve internal linking, help Google discover 872 Tier 1 city×service pages  
**Effort:** Medium (2 hours)  
**Files:** `app/[city]/page.tsx`

### 4. Link State Pages to Cities
**Priority:** 🟡 HIGH  
**Impact:** Establish hierarchy, improve navigation, help users find city pages  
**Effort:** Medium (3 hours)  
**Files:** `app/services/{state}/page.tsx` (50 files)

### 5. Add Tool Pages to Navigation
**Priority:** 🟡 MEDIUM  
**Impact:** Make `/seo-audit`, `/website-speed-test`, `/enhanced-demo` discoverable  
**Effort:** Low (1 hour)  
**Files:** `components/layout/header.tsx` or create Tools dropdown

### 6. Audit Static City-Specific Service Pages
**Priority:** 🟡 MEDIUM  
**Impact:** Resolve duplicate intent with programmatic `/{city}/[service]` pages  
**Effort:** High (8 hours - content audit + canonical decisions)  
**Files:** `app/services/seo-doctors-kansas-city/page.tsx` (20+ files)

### 7. Standardize Hawaii Location Pages
**Priority:** 🟡 MEDIUM  
**Impact:** Resolve inconsistent pattern (`/locations/hawaii/honolulu` vs `/honolulu-hi`)  
**Effort:** Medium (2 hours - decide pattern, add redirects if needed)  
**Files:** `app/locations/hawaii/*/page.tsx`, `app/[city]/page.tsx`

### 8. Add City×Industry Links to City Pages
**Priority:** 🟢 LOW  
**Impact:** Help discover 1,635 city×industry hub pages (noindex but follow for link equity)  
**Effort:** Low (1 hour)  
**Files:** `app/[city]/page.tsx`

### 9. Update Footer to Use citySlugs
**Priority:** 🟢 LOW  
**Impact:** Show all 109 cities (currently only 36), improve internal linking  
**Effort:** Low (1 hour)  
**Files:** `components/layout/footer.tsx`

### 10. Add generateStaticParams to `app/services/[service]/page.tsx`
**Priority:** 🟢 LOW  
**Impact:** Pre-render 210 service pages, improve build performance  
**Effort:** Medium (2 hours - extract service list from sitemap.ts)  
**Files:** `app/services/[service]/page.tsx`

---

## 5. Data Source Verification

### Exact Counts (from file inspection)

- **Cities (citySlugs):** 109 (from `lib/cities.ts`, lines 11-109)
- **City Data (cityDataSlugs):** 109 (re-exports from `lib/cities.ts`)
- **Services (serviceDataSlugs):** 28 (from `lib/data/service-data.ts`, lines 58-248)
- **Tier 1 Services:** 8 (from `lib/seo/index-policy.ts`, lines 157-166)
- **Industries (industrySlugs):** 15 (from `lib/industries.ts`, lines 7-104)
- **Blog Posts:** 54 (from file system scan: `find app/blog -mindepth 2 -name "page.tsx"`)
- **Service Pages:** 210 (from file system scan: `find app/services -name "page.tsx"`)
- **GEO City Pages:** 95 (from `app/sitemap.ts`, lines 114-207, counting `geo-{city}` entries)
- **GEO Industry Pages:** 15 (from `app/sitemap.ts`, lines 125-143, counting `geo-{industry}` entries)
- **State Pages:** 50 (from `app/sitemap.ts`, lines 211-260)

### Route Generation Verification

- ✅ `app/[city]/[service]/page.tsx` has `generateStaticParams` → 109 × 28 = 3,052 params
- ✅ `app/[city]/industry/[industry]/page.tsx` has `generateStaticParams` → 109 × 15 = 1,635 params
- ✅ `app/[city]/industry/[industry]/[service]/page.tsx` has `generateStaticParams` → 109 × 15 × 3 = 4,905 params
- ❌ `app/[city]/page.tsx` - **NO generateStaticParams** (line 1-387, no export found)
- ❌ `app/services/[service]/page.tsx` - **NO generateStaticParams** (dynamic rendering)

---

**End of Inventory**
