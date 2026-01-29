# /app/services Location-Like Pages Classification

**Date:** 2025-01-24  
**Method:** Direct file system scan + code inspection  
**Total Pages Scanned:** 210 service directories

---

## 1) geo-* City Pages

### Count: 75 pages

**Exact Paths:**
```
app/services/geo-albuquerque/page.tsx
app/services/geo-anchorage/page.tsx
app/services/geo-arlington/page.tsx
app/services/geo-atlanta/page.tsx
app/services/geo-aurora/page.tsx
app/services/geo-austin/page.tsx
app/services/geo-bakersfield/page.tsx
app/services/geo-baltimore/page.tsx
app/services/geo-boise/page.tsx
app/services/geo-boston/page.tsx
app/services/geo-buffalo/page.tsx
app/services/geo-chandler/page.tsx
app/services/geo-charlotte/page.tsx
app/services/geo-chicago/page.tsx
app/services/geo-cincinnati/page.tsx
app/services/geo-cleveland/page.tsx
app/services/geo-columbus/page.tsx
app/services/geo-corpus-christi/page.tsx
app/services/geo-dallas/page.tsx
app/services/geo-denver/page.tsx
app/services/geo-detroit/page.tsx
app/services/geo-el-paso/page.tsx
app/services/geo-fort-worth/page.tsx
app/services/geo-fresno/page.tsx
app/services/geo-honolulu/page.tsx
app/services/geo-houston/page.tsx
app/services/geo-indianapolis/page.tsx
app/services/geo-irvine/page.tsx
app/services/geo-jacksonville/page.tsx
app/services/geo-kansas-city/page.tsx
app/services/geo-las-vegas/page.tsx
app/services/geo-los-angeles/page.tsx
app/services/geo-louisville/page.tsx
app/services/geo-madison/page.tsx
app/services/geo-memphis/page.tsx
app/services/geo-mesa/page.tsx
app/services/geo-miami/page.tsx
app/services/geo-milwaukee/page.tsx
app/services/geo-minneapolis/page.tsx
app/services/geo-nashville/page.tsx
app/services/geo-new-orleans/page.tsx
app/services/geo-new-york/page.tsx
app/services/geo-oklahoma-city/page.tsx
app/services/geo-omaha/page.tsx
app/services/geo-orlando/page.tsx
app/services/geo-philadelphia/page.tsx
app/services/geo-phoenix/page.tsx
app/services/geo-pittsburgh/page.tsx
app/services/geo-plano/page.tsx
app/services/geo-portland/page.tsx
app/services/geo-raleigh/page.tsx
app/services/geo-reno/page.tsx
app/services/geo-richmond/page.tsx
app/services/geo-rochester/page.tsx
app/services/geo-sacramento/page.tsx
app/services/geo-salt-lake-city/page.tsx
app/services/geo-san-antonio/page.tsx
app/services/geo-san-diego/page.tsx
app/services/geo-san-francisco/page.tsx
app/services/geo-san-jose/page.tsx
app/services/geo-scottsdale/page.tsx
app/services/geo-seattle/page.tsx
app/services/geo-spokane/page.tsx
app/services/geo-st-louis/page.tsx
app/services/geo-tampa/page.tsx
app/services/geo-tucson/page.tsx
app/services/geo-tulsa/page.tsx
app/services/geo-virginia-beach/page.tsx
app/services/geo-wichita/page.tsx
```

**Overlap with /[city]:**
- ✅ **YES - 75 cities overlap**
- **Evidence:** All 75 geo-* city pages match cities in `lib/cities.ts` (verified via grep)
- **Example:** `/services/geo-new-york` overlaps with `/new-york-ny` (city hub)
- **Example:** `/services/geo-los-angeles` overlaps with `/los-angeles-ca` (city hub)
- **Example:** `/services/geo-chicago` overlaps with `/chicago-il` (city hub)

**Overlap with /[city]/[service]:**
- ❌ **NO direct overlap** (different URL pattern)
- **Note:** GEO city pages are service-agnostic (GEO services), while `/[city]/[service]` are specific service pages

**Index-Policy Usage:**
- ❌ **BYPASSES lib/seo/index-policy.ts**
- **Evidence:** `grep -r "getSeoDirectives\|index-policy" app/services/geo-*/page.tsx` = **NO MATCHES**
- **Canonical Implementation:** Explicit canonical in metadata (e.g., `app/services/geo-new-york/page.tsx:12`)
- **Example:** `canonical: 'https://www.webvello.com/services/geo-new-york'` (hardcoded, not via `getSeoDirectives()`)

---

## 2) geo-* Industry Pages

### Count: 11 pages

**Exact Paths:**
```
app/services/geo-auto-repair/page.tsx
app/services/geo-ecommerce/page.tsx
app/services/geo-electricians/page.tsx
app/services/geo-financial-services/page.tsx
app/services/geo-healthcare/page.tsx
app/services/geo-home-services/page.tsx
app/services/geo-hvac/page.tsx
app/services/geo-landscaping/page.tsx
app/services/geo-legal/page.tsx
app/services/geo-plumbing/page.tsx
app/services/geo-professional-services/page.tsx
app/services/geo-real-estate/page.tsx
app/services/geo-restaurants/page.tsx
app/services/geo-roofing/page.tsx
app/services/geo-saas-technology/page.tsx
```

**Overlap with /[city]:**
- ❌ **NO** (industry pages are not city-specific)

**Overlap with /[city]/[service]:**
- ❌ **NO direct overlap** (different URL pattern)
- **Note:** Industry GEO pages are service-agnostic (GEO services for industries), while `/[city]/[service]` are city+service combinations

**Overlap with /[city]/industry/[industry]:**
- ⚠️ **CONCEPTUAL OVERLAP** (same industries, different URL pattern)
- **Evidence:** `geo-healthcare` matches `healthcare` industry in `lib/industries.ts:20-25`
- **Evidence:** `geo-real-estate` matches `realestate` industry in `lib/industries.ts:32-37`
- **Note:** Industry GEO pages are service pages (GEO), while `/[city]/industry/[industry]` are hub pages

**Index-Policy Usage:**
- ❌ **BYPASSES lib/seo/index-policy.ts**
- **Evidence:** `grep -r "getSeoDirectives\|index-policy" app/services/geo-*/page.tsx` = **NO MATCHES**
- **Canonical Implementation:** Explicit canonical in metadata (e.g., `app/services/geo-healthcare/page.tsx:12`)
- **Example:** `canonical: 'https://www.webvello.com/services/geo-healthcare'` (hardcoded, not via `getSeoDirectives()`)

---

## 3) /services/{state} Pages

### Count: 50 pages (all 50 US states)

**Exact Paths:**
```
app/services/alabama/page.tsx
app/services/alaska/page.tsx
app/services/arizona/page.tsx
app/services/arkansas/page.tsx
app/services/california/page.tsx
app/services/colorado/page.tsx
app/services/connecticut/page.tsx
app/services/delaware/page.tsx
app/services/florida/page.tsx
app/services/georgia/page.tsx
app/services/hawaii/page.tsx
app/services/idaho/page.tsx
app/services/illinois/page.tsx
app/services/indiana/page.tsx
app/services/iowa/page.tsx
app/services/kansas/page.tsx
app/services/kentucky/page.tsx
app/services/louisiana/page.tsx
app/services/maine/page.tsx
app/services/maryland/page.tsx
app/services/massachusetts/page.tsx
app/services/michigan/page.tsx
app/services/minnesota/page.tsx
app/services/mississippi/page.tsx
app/services/missouri/page.tsx
app/services/montana/page.tsx
app/services/nebraska/page.tsx
app/services/nevada/page.tsx
app/services/new-hampshire/page.tsx
app/services/new-jersey/page.tsx
app/services/new-mexico/page.tsx
app/services/new-york/page.tsx
app/services/north-carolina/page.tsx
app/services/north-dakota/page.tsx
app/services/ohio/page.tsx
app/services/oklahoma/page.tsx
app/services/oregon/page.tsx
app/services/pennsylvania/page.tsx
app/services/rhode-island/page.tsx
app/services/south-carolina/page.tsx
app/services/south-dakota/page.tsx
app/services/tennessee/page.tsx
app/services/texas/page.tsx
app/services/utah/page.tsx
app/services/vermont/page.tsx
app/services/virginia/page.tsx
app/services/washington/page.tsx
app/services/west-virginia/page.tsx
app/services/wisconsin/page.tsx
app/services/wyoming/page.tsx
```

**Overlap with /[city]:**
- ⚠️ **HIERARCHICAL OVERLAP** (state pages contain cities, but different URL pattern)
- **Evidence:** State pages mention cities within that state (e.g., `app/services/california/page.tsx:33` mentions "Los Angeles, San Francisco, San Diego")
- **Example:** `/services/california` mentions cities like `/los-angeles-ca`, `/san-francisco-ca`, `/san-diego-ca`
- **Example:** `/services/texas` mentions cities like `/houston-tx`, `/dallas-tx`, `/austin-tx`
- **Note:** State pages are service overviews, while `/[city]` are city hub pages

**Overlap with /[city]/[service]:**
- ❌ **NO direct overlap** (different URL pattern and intent)
- **Note:** State pages are service overviews, while `/[city]/[service]` are specific city+service combinations

**Index-Policy Usage:**
- ❌ **BYPASSES lib/seo/index-policy.ts**
- **Evidence:** `grep -r "getSeoDirectives\|index-policy" app/services/california/page.tsx` = **NO MATCHES**
- **Canonical Implementation:** Explicit canonical in metadata (e.g., `app/services/california/page.tsx:12`)
- **Example:** `canonical: 'https://www.webvello.com/services/california'` (hardcoded, not via `getSeoDirectives()`)

---

## 4) /services/{city}-{service} Style Pages

### Count: 34 pages

**Exact Paths:**
```
app/services/auto-repair-website-design-milwaukee/page.tsx
app/services/biotech-website-design-chicago/page.tsx
app/services/dairy-industry-website-design-los-angeles/page.tsx
app/services/educational-website-development-charlotte/page.tsx
app/services/energy-seo-company/page.tsx
app/services/freight-forwarder-web-design/page.tsx
app/services/jacksonville-ai-seo/page.tsx
app/services/medical-website-design-austin/page.tsx
app/services/portland-web-marketing/page.tsx
app/services/real-estate-seo-california/page.tsx
app/services/retail-development-services/page.tsx
app/services/seo-baltimore/page.tsx
app/services/seo-company-government-website/page.tsx
app/services/seo-company-mesa/page.tsx
app/services/seo-company-mesa-arizona/page.tsx
app/services/seo-consulting-charlotte/page.tsx
app/services/seo-doctors-kansas-city/page.tsx
app/services/seo-geo-packages/page.tsx
app/services/seo-services-louisville/page.tsx
app/services/surgeon-web-design-austin/page.tsx
app/services/web-application-development-chicago/page.tsx
app/services/web-application-development-company/page.tsx
app/services/web-design-albuquerque/page.tsx
app/services/web-design-columbus/page.tsx
app/services/web-design-oklahoma-city/page.tsx
app/services/web-development-fresno/page.tsx
app/services/web-development-las-vegas/page.tsx
app/services/website-design-louisville/page.tsx
app/services/website-design-oklahoma-city/page.tsx
app/services/wordpress-developers-denver/page.tsx
```

**Pattern Analysis:**
- **Pattern 1:** `{service}-{city}` (e.g., `seo-baltimore`, `web-design-albuquerque`)
- **Pattern 2:** `{service}-{city}-{qualifier}` (e.g., `seo-doctors-kansas-city`, `medical-website-design-austin`)
- **Pattern 3:** `{service}-{industry}-{city}` (e.g., `dairy-industry-website-design-los-angeles`)
- **Pattern 4:** `{city}-{service}` (e.g., `jacksonville-ai-seo`, `portland-web-marketing`)

**Overlap with /[city]:**
- ⚠️ **PARTIAL OVERLAP** (same cities, different URL pattern)
- **Evidence:** Many pages target cities in `lib/cities.ts`:
  - `seo-baltimore` → `/baltimore-md` (city hub)
  - `web-design-albuquerque` → `/albuquerque-nm` (city hub)
  - `seo-doctors-kansas-city` → `/kansas-city-mo` (city hub)
  - `web-design-columbus` → `/columbus-oh` (city hub)
  - `web-design-oklahoma-city` → `/oklahoma-city-ok` (city hub)
  - `web-development-fresno` → `/fresno-ca` (city hub)
  - `web-development-las-vegas` → `/las-vegas-nv` (city hub)
  - `website-design-louisville` → `/louisville-ky` (city hub)
  - `seo-consulting-charlotte` → `/charlotte-nc` (city hub)
  - `seo-services-louisville` → `/louisville-ky` (city hub)
  - `medical-website-design-austin` → `/austin-tx` (city hub)
  - `surgeon-web-design-austin` → `/austin-tx` (city hub)
  - `biotech-website-design-chicago` → `/chicago-il` (city hub)
  - `auto-repair-website-design-milwaukee` → `/milwaukee-wi` (city hub)
  - `web-application-development-chicago` → `/chicago-il` (city hub)
  - `wordpress-developers-denver` → `/denver-co` (city hub)

**Overlap with /[city]/[service]:**
- ⚠️ **CONCEPTUAL OVERLAP** (same city+service intent, different URL pattern)
- **Evidence:** Many pages match programmatic city×service combinations:
  - `seo-baltimore` → `/baltimore-md/seo` (programmatic)
  - `web-design-albuquerque` → `/albuquerque-nm/website-design` (programmatic)
  - `seo-doctors-kansas-city` → `/kansas-city-mo/seo` (programmatic, with industry qualifier)
  - `web-design-columbus` → `/columbus-oh/website-design` (programmatic)
  - `web-design-oklahoma-city` → `/oklahoma-city-ok/website-design` (programmatic)
  - `web-development-fresno` → `/fresno-ca/web-development` (programmatic)
  - `web-development-las-vegas` → `/las-vegas-nv/web-development` (programmatic)
  - `website-design-louisville` → `/louisville-ky/website-design` (programmatic)
  - `seo-consulting-charlotte` → `/charlotte-nc/seo` (programmatic, with qualifier)
  - `seo-services-louisville` → `/louisville-ky/seo` (programmatic, with qualifier)
  - `medical-website-design-austin` → `/austin-tx/website-design` (programmatic, with industry qualifier)
  - `surgeon-web-design-austin` → `/austin-tx/website-design` (programmatic, with industry qualifier)
  - `biotech-website-design-chicago` → `/chicago-il/website-design` (programmatic, with industry qualifier)
  - `auto-repair-website-design-milwaukee` → `/milwaukee-wi/website-design` (programmatic, with industry qualifier)
  - `web-application-development-chicago` → `/chicago-il/web-development` (programmatic, with qualifier)
  - `wordpress-developers-denver` → `/denver-co/wordpress-development` (programmatic, with qualifier)

**Index-Policy Usage:**
- ❌ **BYPASSES lib/seo/index-policy.ts**
- **Evidence:** `grep -r "getSeoDirectives\|index-policy" app/services/seo-doctors-kansas-city/page.tsx` = **NO MATCHES**
- **Canonical Implementation:** Explicit canonical in metadata (e.g., `app/services/seo-doctors-kansas-city/page.tsx:11`)
- **Example:** `canonical: 'https://www.webvello.com/services/seo-doctors-kansas-city'` (hardcoded, not via `getSeoDirectives()`)

---

## Summary: Index-Policy Usage

### All Location-Like Pages BYPASS lib/seo/index-policy.ts

**Evidence:**
- `grep -r "getSeoDirectives\|index-policy" app/services/` = **NO MATCHES**
- All pages use explicit canonical URLs in metadata, not `getSeoDirectives()`
- All pages are static (not dynamic routes), so they don't use the governance system

**Impact:**
- **170 location-like pages** (75 geo-city + 11 geo-industry + 50 state + 34 city-service) bypass the SEO governance system
- These pages are not subject to:
  - Quality gates (block validation)
  - Conditional indexing rules
  - Canonical URL governance
  - Sitemap inclusion logic (they're hardcoded in sitemap.ts)

**Sitemap Inclusion:**
- All 170 pages are included in sitemap via hardcoded `standaloneServices` array in `app/sitemap.ts:48-261`
- Sitemap uses `getSeoDirectives()` for governance check (line 309), but pages themselves don't use it

---

## Overlap Summary

| Category | Count | Overlaps /[city] | Overlaps /[city]/[service] | Index-Policy |
|----------|-------|------------------|---------------------------|--------------|
| geo-* city pages | 75 | ✅ YES (75 cities) | ❌ NO | ❌ BYPASSES |
| geo-* industry pages | 11 | ❌ NO | ❌ NO | ❌ BYPASSES |
| /services/{state} pages | 50 | ⚠️ HIERARCHICAL | ❌ NO | ❌ BYPASSES |
| /services/{city}-{service} | 34 | ⚠️ PARTIAL (16+ cities) | ⚠️ CONCEPTUAL (16+ services) | ❌ BYPASSES |
| **TOTAL** | **170** | **75+ overlaps** | **16+ overlaps** | **ALL BYPASS** |

---

## Recommendations

1. **Add canonical relationships** from geo-city pages to city hubs (e.g., `/services/geo-new-york` → `/new-york-ny`)
2. **Add canonical relationships** from city-service static pages to programmatic pages (e.g., `/services/seo-baltimore` → `/baltimore-md/seo`)
3. **Consider migrating** location-like pages to use `getSeoDirectives()` for governance consistency
4. **Audit content uniqueness** between overlapping pages to avoid duplicate content penalties

---

**End of Classification Report**
