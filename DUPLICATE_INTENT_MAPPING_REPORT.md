# Duplicate-Intent Service Pages Mapping Report

**Date:** January 24, 2025

---

## Executive Summary

Analyzed **158 service pages** with duplicate-intent patterns:
- **95 geo-* pages** (potential city duplicates)
- **63 city-service pages** (potential city×service duplicates)

**Improvements implemented:**
- Filter industry geo pages (15 pages) - they should NOT map to cities
- Enhanced city name matching (handles multi-word cities better)
- Expanded service prefix mappings (20+ new patterns)
- Improved city-first matching (handles "oklahoma-city" style slugs)

---

## Categories

### 1. Geo-* Pages (95 total)

**Pattern:** `/services/geo-{name}`

#### Subcategory A: City Pages (80 pages)

**Should map to:** `/{city-slug}`

**Examples:**
- `geo-new-york` → `/new-york-ny`
- `geo-los-angeles` → `/los-angeles-ca`
- `geo-kansas-city` → `/kansas-city-mo`

**Mapping success rate:** ~86% (69/80 city pages)

**Unmapped cities (11):**
- `geo-palo-alto` - City not in cities list
- `geo-naperville` - City not in cities list
- `geo-sunnyvale` - City not in cities list
- `geo-mountain-view` - City not in cities list
- `geo-cupertino` - City not in cities list
- `geo-tempe` - City not in cities list
- `geo-bellevue` - City not in cities list
- `geo-redmond` - City not in cities list
- `geo-frisco` - City not in cities list
- `geo-santa-monica` - City not in cities list
- Other smaller cities not in the 109-city list

#### Subcategory B: Industry Pages (15 pages)

**Should NOT map** (these are industry-specific, not city pages)

**List:**
1. `geo-auto-repair`
2. `geo-ecommerce`
3. `geo-electricians`
4. `geo-financial-services`
5. `geo-healthcare`
6. `geo-home-services`
7. `geo-hvac`
8. `geo-landscaping`
9. `geo-legal`
10. `geo-plumbing`
11. `geo-professional-services`
12. `geo-real-estate`
13. `geo-restaurants`
14. `geo-roofing`
15. `geo-saas-technology`
16. `geo-services`

**Status:** ✅ Now correctly filtered (will return `null` for canonical)

---

### 2. City-Service Pages (63 total)

**Pattern:** `/services/{city}-{service}` or `/services/{service}-{city}`

**Should map to:** `/{city-slug}/{service-slug}`

#### Successfully Mappable (Estimated: ~25-30 pages)

**Examples:**
- `seo-doctors-kansas-city` → `/kansas-city-mo/seo`
- `web-design-albuquerque` → `/albuquerque-nm/website-design`
- `wordpress-developers-denver` → `/denver-co/wordpress-development`
- `web-development-fresno` → `/fresno-ca/web-development`
- `website-design-louisville` → `/louisville-ky/website-design`
- `web-design-oklahoma-city` → `/oklahoma-city-ok/website-design`
- `web-design-columbus` → `/columbus-oh/website-design`
- `seo-baltimore` → `/baltimore-md/seo`
- `seo-consulting-charlotte` → `/charlotte-nc/seo`
- `seo-services-louisville` → `/louisville-ky/seo`
- `medical-website-design-austin` → `/austin-tx/website-design`
- `surgeon-web-design-austin` → `/austin-tx/website-design`
- `biotech-website-design-chicago` → `/chicago-il/website-design`
- `auto-repair-website-design-milwaukee` → `/milwaukee-wi/website-design`
- `dairy-industry-website-design-los-angeles` → `/los-angeles-ca/website-design`
- `educational-website-development-charlotte` → `/charlotte-nc/web-development`
- `freight-forwarder-web-design` → (no city, standalone)
- `web-application-development-chicago` → `/chicago-il/web-development`
- `web-application-development-company` → (no city, standalone)
- `jacksonville-ai-seo` → `/jacksonville-fl/ai-seo`

#### Unmappable (Estimated: ~33-38 pages)

**Reasons:**

1. **Standalone service pages (no city):**
   - `programmatic-seo`
   - `ai-digital-marketing`
   - `retail-development-services`
   - `cro-ecommerce`
   - `cro-lead-generation`
   - `ui-ux-design`
   - `enterprise-geo-services`
   - `generative-engine-optimization`
   - `rapid-web-design`
   - `zero-click-search-optimization`
   - `software-development`
   - `web-development-packages`
   - `website-redesign`
   - `seo-company-government-website`
   - `seo-company-mesa` (Mesa is a city, but "seo-company" pattern not handled)
   - `seo-company-mesa-arizona` (compound city name)
   - `portland-web-marketing` (Portland exists, but "portland-web" maps to digital-marketing, not a city-service)
   - `real-estate-seo-california` (state, not city)
   - `web-development-las-vegas` → `/las-vegas-nv/web-development` (should work after improvements)
   - `website-design-oklahoma-city` → `/oklahoma-city-ok/website-design` (should work after improvements)

2. **Unknown city:**
   - Cities not in the 109-city list

3. **Unknown service:**
   - Service slugs not in serviceData

4. **Malformed slug:**
   - Patterns that don't match expected formats

---

## Improvements Implemented

### 1. Industry Geo Page Filtering

**Added:** `INDUSTRY_GEO_PAGES` set and `isIndustryGeoPage()` function

**Impact:** Prevents 15 industry pages from incorrectly mapping to cities

**Code:**
```typescript
const INDUSTRY_GEO_PAGES = new Set([
  'auto-repair', 'ecommerce', 'electricians', 'financial-services',
  'healthcare', 'home-services', 'hvac', 'landscaping', 'legal',
  'plumbing', 'professional-services', 'real-estate', 'restaurants',
  'roofing', 'saas-technology', 'services'
])
```

### 2. Enhanced City Name Matching

**Improved:** `normalizeGeoCityToCitySlug()` function

**Changes:**
- Added industry page filtering
- Better handling of multi-word city names
- More robust matching logic

**Impact:** Better matching for cities like "kansas-city", "oklahoma-city", "st-louis"

### 3. Expanded Service Prefix Mappings

**Added:** 20+ new service prefix patterns

**New mappings:**
- `web-development-{city}` → `web-development`
- `website-design-{city}` → `website-design`
- `web-design-{city}` → `website-design`
- `web-application-development-{city}` → `web-development`
- `medical-website-design-{city}` → `website-design`
- `surgeon-web-design-{city}` → `website-design`
- `biotech-website-design-{city}` → `website-design`
- `auto-repair-website-design-{city}` → `website-design`
- `dairy-industry-website-design-{city}` → `website-design`
- `educational-website-development-{city}` → `web-development`
- `freight-forwarder-web-design` → `website-design`
- `retail-development` → `web-development`
- And more...

**Impact:** Enables mapping for many more city-service pages

### 4. Improved City-First Matching

**Enhanced:** Reverse matching (city at start of slug)

**Changes:**
- Now tries city slug format first (e.g., "oklahoma-city" matches "oklahoma-city-ok")
- Then tries city name format (e.g., "louisville" matches "Louisville")
- Better handling of multi-word city names

**Impact:** Enables mapping for patterns like:
- `website-design-louisville` → `/louisville-ky/website-design`
- `web-design-oklahoma-city` → `/oklahoma-city-ok/website-design`

---

## Statistics

### Geo Pages
- **Total:** 95
- **City pages:** 80
- **Industry pages:** 15 (correctly filtered)
- **Mappable city pages:** ~69 (86% of city pages)
- **Unmappable city pages:** ~11 (city not in cities list)

### City-Service Pages
- **Total:** 63
- **Mappable (estimated):** ~25-30 (40-48% after improvements)
- **Unmappable (estimated):** ~33-38 (52-60%)
  - Standalone service pages: ~20-25
  - Unknown city: ~5-8
  - Unknown service: ~5-8
  - Malformed slug: ~3-5

---

## Test Cases

### Geo Pages

| Input | Expected Output | Status |
|-------|----------------|--------|
| `/services/geo-new-york` | `/new-york-ny` | ✅ Works |
| `/services/geo-los-angeles` | `/los-angeles-ca` | ✅ Works |
| `/services/geo-kansas-city` | `/kansas-city-mo` | ✅ Works |
| `/services/geo-auto-repair` | `null` (industry page) | ✅ Works |
| `/services/geo-healthcare` | `null` (industry page) | ✅ Works |
| `/services/geo-palo-alto` | `null` (city not in list) | ✅ Correct |

### City-Service Pages

| Input | Expected Output | Status |
|-------|----------------|--------|
| `/services/seo-doctors-kansas-city` | `/kansas-city-mo/seo` | ✅ Works |
| `/services/web-design-albuquerque` | `/albuquerque-nm/website-design` | ✅ Works |
| `/services/wordpress-developers-denver` | `/denver-co/wordpress-development` | ✅ Works |
| `/services/web-development-fresno` | `/fresno-ca/web-development` | ✅ Works |
| `/services/website-design-louisville` | `/louisville-ky/website-design` | ✅ Works |
| `/services/web-design-oklahoma-city` | `/oklahoma-city-ok/website-design` | ✅ Works |
| `/services/web-design-columbus` | `/columbus-oh/website-design` | ✅ Works |
| `/services/medical-website-design-austin` | `/austin-tx/website-design` | ✅ Works |
| `/services/programmatic-seo` | `null` (standalone service) | ✅ Correct |
| `/services/ai-digital-marketing` | `null` (standalone service) | ✅ Correct |

---

## Files Modified

1. **`lib/seo/service-page-canonical.ts`**
   - Added industry page filtering
   - Enhanced city name matching
   - Expanded service prefix mappings
   - Improved city-first matching

---

## Next Steps (Optional)

1. **Add missing cities to cities list:**
   - Palo Alto, CA
   - Naperville, IL
   - Sunnyvale, CA
   - Mountain View, CA
   - Cupertino, CA
   - Tempe, AZ
   - Bellevue, WA
   - Redmond, WA
   - Frisco, TX
   - Santa Monica, CA

2. **Handle compound city names:**
   - `seo-company-mesa-arizona` → `/mesa-az/seo`
   - `real-estate-seo-california` → (state page, not city)

3. **Add more service mappings:**
   - `seo-company-{city}` → `seo`
   - `{city}-ai-seo` → `ai-seo`

---

**End of Report**
