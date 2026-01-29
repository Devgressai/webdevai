# WebVello Technical Integration Map
**Analysis Date:** January 29, 2026  
**Analyst Role:** Principal Systems Architect & SEO Infrastructure Engineer  
**Purpose:** Technical integration map for authority page implementation

---

## 1. ROUTING SYSTEM

### Router Type
**Next.js App Router** (Next.js 14+)

### Root Routing Folders
```
/app/                    # Primary routing directory
├── page.tsx             # Homepage (/)
├── layout.tsx           # Root layout (global)
├── about/               # /about
├── founder/             # /founder ✅ ALREADY EXISTS
├── ai-search-optimization/  # ✅ ALREADY EXISTS
├── entity-seo/          # ✅ ALREADY EXISTS
├── programmatic-seo/    # ✅ ALREADY EXISTS
├── index-governance/    # ✅ ALREADY EXISTS
├── services/            # /services/* (212 files)
├── [city]/             # Dynamic city routes
│   ├── [service]/      # /{city}/{service}
│   └── industry/       # /{city}/industry/{industry}
├── blog/               # /blog/*
├── locations/          # /locations/*
└── api/                # API routes
```

### Routing Conventions
- **File-based routing**: `app/{path}/page.tsx` → `/{path}`
- **Dynamic routes**: `app/[city]/page.tsx` → `/{city}`
- **Nested routes**: `app/[city]/[service]/page.tsx` → `/{city}/{service}`
- **Metadata routes**: `app/sitemap.ts`, `app/robots.txt`

### Key Routing Files
- `app/layout.tsx` - Root layout (wraps all pages)
- `app/page.tsx` - Homepage
- `app/sitemap.ts` - Sitemap generation (Next.js metadata route)
- `app/robots.txt` - Robots.txt (static file)
- `next.config.js` - Rewrites/redirects configuration

---

## 2. SEO INFRASTRUCTURE

### 2.1 Metadata Generation

**Location:** Page-level `export const metadata: Metadata`

**Pattern:**
```typescript
// Example: app/about/page.tsx
export const metadata: Metadata = {
  title: 'Page Title | Web Vello',
  description: 'Meta description...',
  keywords: 'keyword, list',
  alternates: {
    canonical: 'https://www.webvello.com/about',
  },
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter cards */ },
}
```

**Global Defaults:**
- `app/layout.tsx:42-140` - Root metadata with defaults
- `metadataBase: 'https://www.webvello.com'`
- Template: `'%s | Web Vello'`

### 2.2 Canonical Handling

**Primary System:** `lib/seo/index-policy.ts`

**Function:** `getSeoDirectives(params)` → Returns `{ canonical, robots, inSitemap }`

**Canonical Logic:**
- **Service pages**: `lib/seo/service-page-canonical.ts` → `getServicePageCanonical(pathname)`
- **City routes**: `lib/seo/index-policy.ts:534-566` → `getCanonicalUrl(params)`
- **Core pages**: Direct URL construction

**Integration Points:**
1. **Sitemap**: Uses `directives.canonical` from `getSeoDirectives()`
2. **Page metadata**: Manual `alternates.canonical` in page exports
3. **Service pages**: Can use `lib/seo/service-metadata.ts` helpers

**Canonical Rules:**
- `/services/geo-{city}` → `/{city-slug}` (e.g., `/services/geo-new-york` → `/new-york-ny`)
- `/services/{city}-{service}` → `/{city}/{service}` (e.g., `/services/seo-baltimore` → `/baltimore-md/seo`)
- Core pages: Self-canonical (e.g., `/about` → `https://www.webvello.com/about`)

### 2.3 Robots/Index Control

**Primary System:** `lib/seo/index-policy.ts`

**Function:** `getSeoDirectives(params)` → Returns `{ robots: { index, follow }, inSitemap }`

**Index Policy Logic:**
- **Tier 1** (Always index): Core pages, services, city hubs, city+primary-service
- **Tier 2** (Conditional): City+industry+service (quality gates: 2-of-3 uniqueness blocks)
- **Tier 3** (Noindex): Navigation pages, long-tail combinations

**Robots.txt:**
- **File:** `app/robots.txt` (static file)
- **Rules:** Allow most paths, disallow `/admin/`, `/api/`, `/studio/`
- **Sitemap reference:** `Sitemap: https://www.webvello.com/sitemap.xml`

**Page-Level Robots:**
- Set via `metadata.robots` in page exports
- Default from `app/layout.tsx:112-122` (index: true, follow: true)

### 2.4 Sitemap Generation Logic

**Architecture:** Split sitemap system (index + child sitemaps)

**Files:**
1. `app/sitemap.ts` - Next.js metadata route (generates child sitemaps)
2. `app/api/sitemap/route.ts` - Sitemap index XML generator
3. `lib/sitemap-entries.ts` - Entry generation logic

**Sitemap Structure:**
```
/sitemap.xml (index)
  ├── /sitemap/0.xml (core pages)
  ├── /sitemap/1.xml (services)
  ├── /sitemap/2.xml (blog)
  └── /sitemap/3.xml+ (locations, chunked if >45k URLs)
```

**Entry Generation:**
- **Core:** `generateCoreEntries()` → `lib/sitemap-entries.ts:86-98`
  - Includes: `CORE_PAGES` array (homepage, about, founder, authority hubs, etc.)
- **Services:** `generateServicesEntries()` → Uses `STANDALONE_SERVICES` array
- **Blog:** `generateBlogEntries()` → Fetches from Sanity CMS
- **Locations:** `generateLocationsEntries()` → City hubs, city+service combinations

**Sitemap Rewrite:**
- `next.config.js:262-264` - Rewrites `/sitemap.xml` → `/api/sitemap`

**Current Authority Pages in Sitemap:**
- ✅ Already in `CORE_PAGES` array (lines 86-98):
  - `/founder`
  - `/ai-search-optimization`
  - `/entity-seo`
  - `/programmatic-seo`
  - `/index-governance`

### 2.5 SEO Governance Utilities

**Location:** `lib/seo/`

**Key Files:**
1. **`index-policy.ts`** - Main governance engine
   - `getSeoDirectives(params)` - Single source of truth for SEO decisions
   - `getCanonicalUrl(params)` - Canonical URL generation
   - Quality scoring system (0.0-1.0)
   - Uniqueness block validation (2-of-3 rule)

2. **`service-page-canonical.ts`** - Service page canonical mapping
   - `getServicePageCanonical(pathname)` - Maps service URLs to canonical targets

3. **`service-metadata.ts`** - Service page metadata helpers
   - `getServicePageCanonicalUrl(pathname)` - Canonical via governance
   - `getServicePageDirectives(pathname)` - Full SEO directives

4. **`canonical-rules.ts`** - Advanced canonical logic
   - `getCanonicalForCityIndustryHub()` - City×Industry hub canonicals

5. **`governance-monitor.ts`** - Governance validation
   - `checkDirectivesForViolations()` - Validates SEO directives

**Governance Flow:**
```
Page Request
  ↓
getSeoDirectives({ routeType, path, ... })
  ↓
Stage A: Hard Gate (2-of-3 uniqueness blocks)
  ↓
Stage B: Quality Score (0.0-1.0)
  ↓
Return: { canonical, robots: { index, follow }, inSitemap }
```

---

## 3. LAYOUT STRUCTURE

### 3.1 Global Layout Files

**Root Layout:**
- **File:** `app/layout.tsx`
- **Purpose:** Wraps all pages, provides global metadata, fonts, scripts
- **Components:**
  - `<Header />` (NewHeader component)
  - `<MobileHeader />`
  - `<Footer />`
  - `<MobileFloatingCTA />`
  - `<AIChatbot />`
  - `<PerformanceMonitor />` (dev only)
  - `<AxeClient />` (dev only, a11y)

**Global Metadata:**
- `app/layout.tsx:42-140` - Root metadata object
- Includes: default title template, description, OG tags, robots, icons
- **Schema markup:** Organization + ProfessionalService + WebSite + FAQPage (inline JSON-LD)

### 3.2 Head/Metadata Files

**No separate `<head>` component** - All metadata via Next.js `Metadata` API

**Metadata Injection Points:**
1. **Page-level:** `export const metadata: Metadata` in each `page.tsx`
2. **Global:** `app/layout.tsx:42-140` (defaults)
3. **Schema:** Inline `<script type="application/ld+json">` in layout or pages

**Schema Generation:**
- **Utility:** `lib/clean-schema-generator.ts`
- **Functions:**
  - `generateOrganizationSchema()` - Organization + ProfessionalService
  - `generateServiceSchema(options)` - Service schema
  - `generateFAQSchema(faqs)` - FAQPage schema
  - `generatePageSchema(options)` - Combined page schema

### 3.3 Shared Components for Content Pages

**Layout Components:**
- `components/layout/new-header.tsx` - Desktop navigation
- `components/layout/mobile-header.tsx` - Mobile navigation
- `components/layout/footer.tsx` - Footer (includes Authority Hubs section)

**UI Components:**
- `components/ui/button.tsx` - Button component
- `components/ui/breadcrumb.tsx` - Breadcrumb navigation
- `components/sections/*` - Reusable page sections

**Breadcrumb System:**
- **Utility:** `components/ui/breadcrumb.tsx`
- **Function:** `generateBreadcrumbs(path, options)` - Auto-generates breadcrumb items
- **Usage:** `<Breadcrumb items={generateBreadcrumbs('/path', { title: 'Page' })} />`

---

## 4. BEST INJECTION POINTS

### 4.1 New Authority Pages

**Status:** ✅ **ALL PAGES ALREADY EXIST**

**Existing Pages:**
1. `/founder` → `app/founder/page.tsx` ✅
2. `/ai-search-optimization` → `app/ai-search-optimization/page.tsx` ✅
3. `/entity-seo` → `app/entity-seo/page.tsx` ✅
4. `/programmatic-seo` → `app/programmatic-seo/page.tsx` ✅
5. `/index-governance` → `app/index-governance/page.tsx` ✅

**Pattern for Future Authority Pages:**
```
app/{slug}/page.tsx
  ├── export const metadata: Metadata { ... }
  ├── import { generatePageSchema } from '@/lib/clean-schema-generator'
  ├── <script type="application/ld+json"> (schema)
  └── Page content (JSX)
```

**Sitemap Integration:**
- Add to `lib/sitemap-entries.ts:CORE_PAGES` array (lines 86-98)
- Priority: 0.8-0.9 (high-value authority pages)

### 4.2 JSON-LD Schema Layer

**Current Implementation:**
- **Global schema:** `app/layout.tsx:196-302` (Organization, ProfessionalService, WebSite, FAQPage)
- **Page-level schema:** Inline `<script type="application/ld+json">` in page components
- **Utility:** `lib/clean-schema-generator.ts`

**Best Location for Schema Injection:**

**Option A: Page-Level (Current Pattern)**
```typescript
// In page.tsx
import { generatePageSchema } from '@/lib/clean-schema-generator'

const pageSchema = generatePageSchema({
  pageType: 'hub',
  url: 'https://www.webvello.com/path',
  title: 'Page Title',
  description: 'Page description',
  faqs: faqsArray,
  breadcrumbs: [...]
})

// In JSX
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
/>
```

**Option B: Layout-Level (Global)**
- Already implemented in `app/layout.tsx:196-302`
- Organization schema on every page
- Can add Person schema for founder pages

**Schema Files:**
- `lib/clean-schema-generator.ts` - Main schema generator
- `schemas/*.ts` - Individual schema type definitions (if needed)

**Recommended Approach:**
- **Authority hubs:** Use `generatePageSchema()` with `pageType: 'hub'`
- **Founder page:** Add Person schema manually (already done in `app/founder/page.tsx`)
- **Service pages:** Use `generateServiceSchema()` from utility

### 4.3 Internal Linking Strategy (File-Level)

**Footer Navigation:**
- **File:** `components/layout/footer.tsx`
- **Current Structure:** 7-column grid (Company, Services, Authority Hubs, Locations)
- **Authority Hubs Section:** Lines 133-164 (already includes all 4 authority hubs + founder)

**Header Navigation:**
- **File:** `components/layout/new-header.tsx`
- **Structure:** Mega menu with nested navigation
- **Current:** Services, AI & Marketing, SEO, Locations, Resources
- **Potential:** Could add "Authority" or "About" section with founder/authority links

**Breadcrumb Links:**
- **File:** `components/ui/breadcrumb.tsx`
- **Function:** `generateBreadcrumbs(path, options)` - Auto-generates from path
- **Usage:** Already implemented on authority pages

**Internal Linking Utilities:**
- `lib/internal-linking.ts` - Internal link generation helpers
- `lib/advanced-internal-linking.ts` - Advanced linking strategies

**Recommended Internal Linking:**
1. **Footer:** ✅ Already complete (Authority Hubs section)
2. **Header:** Consider adding "About" dropdown with:
   - About Us
   - Founder
   - Authority Hubs (AI Search Optimization, Entity SEO, etc.)
3. **Page-level:** Cross-link between authority hubs in content sections
4. **Schema:** Use `sameAs` or `relatedTo` in schema markup for entity relationships

---

## 5. RISK ANALYSIS

### 5.1 Systems That Must NOT Be Broken

**Critical Systems:**
1. **Sitemap Generation** (`app/sitemap.ts`, `lib/sitemap-entries.ts`)
   - **Risk:** Breaking sitemap structure breaks Google indexing
   - **Protection:** Don't modify `generateSitemaps()` or entry generation logic
   - **Safe changes:** Only add to `CORE_PAGES` array

2. **Index Policy** (`lib/seo/index-policy.ts`)
   - **Risk:** Changing governance logic affects 100+ pages
   - **Protection:** Don't modify `getSeoDirectives()` core logic
   - **Safe changes:** Only adjust quality thresholds if needed

3. **Canonical System** (`lib/seo/service-page-canonical.ts`, `lib/seo/index-policy.ts`)
   - **Risk:** Breaking canonicals causes duplicate content issues
   - **Protection:** Don't modify canonical mapping logic
   - **Safe changes:** Only add new canonical rules for new page types

4. **Root Layout** (`app/layout.tsx`)
   - **Risk:** Breaking layout breaks entire site
   - **Protection:** Don't modify structure, only add schema/scripts if needed
   - **Safe changes:** Add new schema blocks, update global metadata

5. **Routing System** (`next.config.js`)
   - **Risk:** Breaking rewrites/redirects breaks URLs
   - **Protection:** Don't modify existing redirects
   - **Safe changes:** Add new redirects for new pages

### 5.2 Sensitive Files

**DO NOT MODIFY:**
- `app/sitemap.ts` - Core sitemap generation logic
- `lib/sitemap-entries.ts` - Entry generation (except `CORE_PAGES` array additions)
- `lib/seo/index-policy.ts` - Governance engine (core logic)
- `lib/seo/service-page-canonical.ts` - Canonical mapping rules
- `next.config.js` - Rewrites/redirects (except adding new ones)
- `app/layout.tsx` - Root layout structure

**MODIFY WITH CAUTION:**
- `components/layout/footer.tsx` - Footer structure (already has Authority Hubs)
- `components/layout/new-header.tsx` - Header navigation (could add Authority section)
- `lib/clean-schema-generator.ts` - Schema generator (safe to extend, not refactor)

**SAFE TO MODIFY:**
- Individual page files (`app/*/page.tsx`)
- New page creation
- Adding to `CORE_PAGES` array in `lib/sitemap-entries.ts`
- Adding new redirects in `next.config.js`

### 5.3 Regression Risk Areas

**High Risk:**
1. **Sitemap Structure Changes**
   - **Risk:** Breaking sitemap index → Google can't discover pages
   - **Mitigation:** Test sitemap generation after changes
   - **Validation:** Run `npm run validate:sitemap` (if exists)

2. **Canonical URL Changes**
   - **Risk:** Creating circular canonicals or breaking existing mappings
   - **Mitigation:** Test canonical URLs on affected pages
   - **Validation:** Check `getServicePageCanonical()` logic

3. **Index Policy Changes**
   - **Risk:** Accidentally noindexing important pages
   - **Mitigation:** Test `getSeoDirectives()` on sample pages
   - **Validation:** Check robots meta tags in page source

4. **Layout Structure Changes**
   - **Risk:** Breaking global layout breaks all pages
   - **Mitigation:** Test on dev environment first
   - **Validation:** Visual regression testing

**Medium Risk:**
1. **Schema Markup Changes**
   - **Risk:** Invalid JSON-LD breaks structured data
   - **Mitigation:** Validate schema with schema.org validator
   - **Validation:** Test schema markup on affected pages

2. **Internal Linking Changes**
   - **Risk:** Breaking navigation or creating 404s
   - **Mitigation:** Test all footer/header links
   - **Validation:** Link checker tool

**Low Risk:**
1. **New Page Creation**
   - **Risk:** Minimal (isolated to new page)
   - **Mitigation:** Follow existing page patterns
   - **Validation:** Page loads, metadata correct, schema valid

---

## 6. SAFE-CHANGE STRATEGY

### 6.1 Pre-Change Checklist

**Before Making Changes:**
1. ✅ Verify current state (all authority pages already exist)
2. ✅ Review existing patterns in similar pages
3. ✅ Check sitemap inclusion (already in `CORE_PAGES`)
4. ✅ Verify canonical URLs (should be self-canonical for authority pages)
5. ✅ Test schema markup validity
6. ✅ Check internal linking (footer already has Authority Hubs section)

### 6.2 Change Implementation Order

**If Adding New Authority Pages:**
1. **Create page file** → `app/{slug}/page.tsx`
2. **Add to sitemap** → `lib/sitemap-entries.ts:CORE_PAGES` array
3. **Add redirects** → `next.config.js:redirects()` (if needed)
4. **Update footer** → `components/layout/footer.tsx` (if needed)
5. **Update header** → `components/layout/new-header.tsx` (if needed)
6. **Test locally** → Verify page loads, metadata, schema
7. **Deploy** → Push to production

**If Modifying Existing Authority Pages:**
1. **Backup current file** → Git commit before changes
2. **Make changes** → Follow existing patterns
3. **Test locally** → Verify no regressions
4. **Validate schema** → Use schema.org validator
5. **Deploy** → Push to production

### 6.3 Testing Strategy

**Required Tests:**
1. **Page Load Test**
   - Visit page in browser
   - Check for 404 errors
   - Verify content renders

2. **Metadata Test**
   - View page source
   - Check `<title>` tag
   - Check `<meta name="description">`
   - Check `<link rel="canonical">`
   - Check OpenGraph tags

3. **Schema Test**
   - View page source
   - Find `<script type="application/ld+json">`
   - Copy JSON-LD
   - Validate at https://validator.schema.org/

4. **Sitemap Test**
   - Visit `/sitemap.xml`
   - Check page appears in appropriate sitemap
   - Verify URL, lastmod, priority, changefreq

5. **Internal Linking Test**
   - Check footer links work
   - Check header links work (if added)
   - Check breadcrumb links work
   - Check cross-page links in content

6. **SEO Directives Test**
   - View page source
   - Check `<meta name="robots">` (should be index, follow)
   - Verify canonical URL is correct

### 6.4 Rollback Strategy

**If Issues Occur:**
1. **Immediate:** Revert git commit
2. **Sitemap issues:** Check `lib/sitemap-entries.ts` for syntax errors
3. **Canonical issues:** Check `lib/seo/service-page-canonical.ts` logic
4. **Layout issues:** Revert `app/layout.tsx` changes
5. **Page issues:** Delete problematic page file, redeploy

**Git Commands:**
```bash
# View recent commits
git log --oneline -10

# Revert last commit (keep changes)
git revert HEAD

# Revert last commit (discard changes)
git reset --hard HEAD~1

# Restore specific file
git checkout HEAD -- app/path/page.tsx
```

---

## 7. CURRENT STATE ASSESSMENT

### ✅ Already Implemented

**Authority Pages:**
- `/founder` → `app/founder/page.tsx` ✅
- `/ai-search-optimization` → `app/ai-search-optimization/page.tsx` ✅
- `/entity-seo` → `app/entity-seo/page.tsx` ✅
- `/programmatic-seo` → `app/programmatic-seo/page.tsx` ✅
- `/index-governance` → `app/index-governance/page.tsx` ✅

**Sitemap Integration:**
- All authority pages in `CORE_PAGES` array ✅
- Sitemap generation working ✅

**Internal Linking:**
- Footer has "Authority Hubs" section ✅
- Footer includes `/founder` link ✅

**Schema Markup:**
- Organization schema includes founder reference ✅
- Person schema on `/founder` page ✅
- FAQPage schema on authority hubs ✅

### 🔄 Potential Enhancements

**Header Navigation:**
- Could add "About" or "Authority" section in header
- Would improve discoverability of founder/authority pages

**Cross-Linking:**
- Could add "Related Authority Topics" section on each hub
- Would strengthen topical clustering

**Schema Enhancements:**
- Could add `sameAs` relationships between authority hubs
- Could add `relatedTo` in Person schema for founder

---

## 8. EXECUTION PLAN SUMMARY

### Current Status: ✅ COMPLETE

All authority pages are already implemented and integrated into the system.

### If Adding New Authority Pages:

1. **Create:** `app/{slug}/page.tsx` (follow existing pattern)
2. **Sitemap:** Add to `lib/sitemap-entries.ts:CORE_PAGES` array
3. **Schema:** Use `generatePageSchema()` utility
4. **Metadata:** Export `metadata: Metadata` object
5. **Internal Links:** Add to footer/header if needed
6. **Test:** Follow testing strategy above
7. **Deploy:** Push to production

### If Modifying Existing Pages:

1. **Backup:** Git commit current state
2. **Modify:** Follow existing patterns
3. **Test:** Validate metadata, schema, links
4. **Deploy:** Push to production

---

## 9. KEY FILES REFERENCE

### Routing
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Homepage
- `app/{slug}/page.tsx` - Page routes
- `next.config.js` - Rewrites/redirects

### SEO Infrastructure
- `lib/seo/index-policy.ts` - Governance engine
- `lib/seo/service-page-canonical.ts` - Canonical mapping
- `lib/seo/service-metadata.ts` - Service metadata helpers
- `lib/clean-schema-generator.ts` - Schema generation
- `app/sitemap.ts` - Sitemap generation
- `lib/sitemap-entries.ts` - Sitemap entry generation
- `app/robots.txt` - Robots.txt

### Layout Components
- `components/layout/new-header.tsx` - Header navigation
- `components/layout/mobile-header.tsx` - Mobile navigation
- `components/layout/footer.tsx` - Footer (includes Authority Hubs)
- `components/ui/breadcrumb.tsx` - Breadcrumb component

### Authority Pages (Existing)
- `app/founder/page.tsx`
- `app/ai-search-optimization/page.tsx`
- `app/entity-seo/page.tsx`
- `app/programmatic-seo/page.tsx`
- `app/index-governance/page.tsx`

---

**END OF TECHNICAL INTEGRATION MAP**
