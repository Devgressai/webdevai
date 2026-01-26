# Implementation Checklist: Sitemap + SEO System Fixes

Use this checklist to track implementation progress.

---

## Phase 1: Critical Fixes (Do First) ⚠️

### Step 1.1: IndexPolicy Module ✅
- [x] Create `lib/seo/index-policy.ts`
- [x] Define RouteType enum
- [x] Define IndexPolicy interface
- [x] Implement tiered indexing logic
- [x] Add helper methods (isValidCity, isTier1Service)

**Status:** ✅ **COMPLETE** - File created and ready to use

---

### Step 1.2: Fix City+Service Route Mismatch
- [ ] Review current `app/[city]/[service]/page.tsx`
- [ ] Decide: Add `generateStaticParams` OR filter sitemap
- [ ] **If Option A:** Add `generateStaticParams()` function
- [ ] **If Option A:** Add `export const dynamicParams = false`
- [ ] **If Option B:** Update sitemap to use `cityData` instead of `citySlugs`
- [ ] Test route works for all cities in `cityData`
- [ ] Verify no 404s for city+service combinations

**Files to Modify:**
- `app/[city]/[service]/page.tsx`

**Estimated Time:** 30 minutes

---

### Step 1.3: Add Indexing Control to City+Industry+Service Pages
- [ ] Import `IndexPolicyService` in `app/[city]/industry/[industry]/[service]/page.tsx`
- [ ] Update `generateMetadata()` to call `IndexPolicyService.getPolicy()`
- [ ] Pass correct params (routeType, city, industry, service, hasCmsContent, etc.)
- [ ] Set `robots` from policy output
- [ ] Set `alternates.canonical` from policy output
- [ ] Test metadata generation for sample pages
- [ ] Verify Tier 2 pages (with CMS content) have `index: true`
- [ ] Verify Tier 3 pages (without CMS content) have `index: false`

**Files to Modify:**
- `app/[city]/industry/[industry]/[service]/page.tsx`

**Estimated Time:** 1 hour

---

### Step 1.4: Filter Sitemap Using IndexPolicy
- [ ] Import `IndexPolicyService` in `app/sitemap.ts`
- [ ] Filter `cityServiceEntries` through IndexPolicy
- [ ] Only emit URLs where `policy.indexable === true`
- [ ] Remove `cityIndustryEntries` from sitemap (all noindex)
- [ ] Filter `cityIndustryServiceEntries` through IndexPolicy
- [ ] Use policy `canonical`, `priority`, `changeFrequency`
- [ ] Test sitemap generation locally
- [ ] Verify sitemap size reduced (should be ~2,000-3,000 URLs)
- [ ] Verify no 404 URLs in sitemap

**Files to Modify:**
- `app/sitemap.ts`

**Estimated Time:** 1-2 hours

---

### Step 1.5: Testing Phase 1
- [ ] Run `npm run build` and verify no errors
- [ ] Check sitemap.xml is generated correctly
- [ ] Verify sitemap only includes indexable URLs
- [ ] Test sample city+service URLs (should not 404)
- [ ] Check sample city+industry+service pages have correct robots meta tags
- [ ] Submit sitemap to Google Search Console (test environment)
- [ ] Monitor for 404 errors in Search Console

**Estimated Time:** 1 hour

---

## Phase 2: Architecture Improvements

### Step 2.1: Split Sitemap into Sitemap Index
- [ ] Modify `app/sitemap.ts` to return sitemap index
- [ ] Create `app/sitemap-core.xml/route.ts`
- [ ] Create `app/sitemap-services.xml/route.ts`
- [ ] Create `app/sitemap-locations-tier1.xml/route.ts`
- [ ] Create `app/sitemap-programmatic-tier2.xml/route.ts`
- [ ] Create `app/sitemap-blog.xml/route.ts`
- [ ] Create `lib/sitemaps/core-sitemap.ts`
- [ ] Create `lib/sitemaps/services-sitemap.ts`
- [ ] Create `lib/sitemaps/locations-tier1-sitemap.ts`
- [ ] Create `lib/sitemaps/programmatic-tier2-sitemap.ts`
- [ ] Create `lib/sitemaps/blog-sitemap.ts`
- [ ] Test all sitemaps load correctly
- [ ] Update `app/robots.txt` to point to sitemap index

**Estimated Time:** 4-6 hours

---

### Step 2.2: Add Indexing Control to All Routes
- [ ] Add IndexPolicy to `app/[city]/page.tsx` metadata
- [ ] Add IndexPolicy to `app/[city]/[service]/page.tsx` metadata
- [ ] Add IndexPolicy to `app/[city]/industry/[industry]/page.tsx` metadata
- [ ] Verify all routes use IndexPolicy consistently
- [ ] Test metadata generation for all route types

**Estimated Time:** 2 hours

---

### Step 2.3: Audit CMS Queries
- [ ] Review `lib/cis-content.ts` (fetchCisDoc function)
- [ ] Verify GROQ query filters by city, industry, service
- [ ] Test CMS queries return correct content for sample pages
- [ ] Check for any caching issues
- [ ] Verify `getStaticCisDoc()` uses correct file paths

**Estimated Time:** 2 hours

---

## Phase 3: Content Verification

### Step 3.1: Create Content Verification Module
- [ ] Create `lib/content-verification.ts`
- [ ] Implement `verifyContentBinding()` function
- [ ] Add city name token checking
- [ ] Add state abbreviation checking
- [ ] Add industry name checking
- [ ] Return verification results with errors/warnings

**Estimated Time:** 2 hours

---

### Step 3.2: Add Build-Time Verification Script
- [ ] Create `scripts/verify-content-binding.ts`
- [ ] Implement page sampling logic
- [ ] Fetch/render sample pages
- [ ] Run verification on sampled pages
- [ ] Output errors/warnings
- [ ] Add to CI/CD pipeline (optional)

**Estimated Time:** 2-3 hours

---

### Step 3.3: Add Runtime Guards (Dev Mode)
- [ ] Add content verification to page components (dev only)
- [ ] Log warnings for content mismatches
- [ ] Add verification to `generateMetadata()` (dev only)
- [ ] Test runtime guards work correctly

**Estimated Time:** 1-2 hours

---

## Post-Implementation Monitoring

### Week 1
- [ ] Monitor Google Search Console for indexing changes
- [ ] Check for 404 errors from sitemap URLs
- [ ] Verify sitemap submission successful
- [ ] Monitor crawl stats (pages crawled vs. indexed)

### Week 2-4
- [ ] Track indexing rate changes
- [ ] Monitor rankings for key pages
- [ ] Check for any content bleed issues
- [ ] Review crawl budget efficiency

---

## Rollback Plan

If issues occur:

1. **Sitemap Issues:**
   - Revert `app/sitemap.ts` to previous version
   - Keep IndexPolicy module (non-breaking)

2. **Indexing Issues:**
   - Temporarily set all pages to `index: true` in IndexPolicy
   - Investigate and fix specific issues
   - Re-enable tiered indexing

3. **Route Issues:**
   - Revert `generateStaticParams` changes
   - Use dynamic rendering temporarily

---

## Notes

- **Phase 1 is critical** - implement first
- **Phase 2 can wait** - important but not urgent
- **Phase 3 is preventive** - good to have but not blocking

**Total Estimated Time:**
- Phase 1: 4-6 hours
- Phase 2: 8-12 hours
- Phase 3: 6-8 hours
- **Total: 18-26 hours**

**Recommended Schedule:**
- **Day 1:** Phase 1 implementation + testing
- **Week 2:** Phase 2 implementation
- **Week 3:** Phase 3 implementation
- **Week 4:** Monitoring and adjustments
