# Duplicate-Intent Service Pages Analysis

**Date:** January 24, 2025

---

## Summary

Analyzed 158 service pages with duplicate-intent patterns:
- **95 geo-* pages** (potential city duplicates)
- **63 city-service pages** (potential city×service duplicates)

---

## Categories

### 1. Geo-* Pages (95 total)

**Pattern:** `/services/geo-{name}`

**Subcategories:**
- **City pages** (80): `geo-new-york`, `geo-los-angeles`, etc.
- **Industry pages** (15): `geo-auto-repair`, `geo-ecommerce`, `geo-healthcare`, etc.

**Industry pages (should NOT map to cities):**
1. geo-auto-repair
2. geo-ecommerce
3. geo-financial-services
4. geo-healthcare
5. geo-home-services
6. geo-hvac
7. geo-landscaping
8. geo-legal
9. geo-plumbing
10. geo-professional-services
11. geo-real-estate
12. geo-restaurants
13. geo-roofing
14. geo-saas-technology
15. geo-services

**City pages (should map to /{city-slug}):**
- 80 city pages (e.g., geo-new-york, geo-los-angeles, etc.)

---

### 2. City-Service Pages (63 total)

**Pattern:** `/services/{city}-{service}` or `/services/{service}-{city}`

**Examples:**
- `seo-doctors-kansas-city` → `/kansas-city-mo/seo`
- `web-design-albuquerque` → `/albuquerque-nm/website-design`
- `wordpress-developers-denver` → `/denver-co/wordpress-development`

---

## Mapping Analysis

### Current Mapping Logic

**File:** `lib/seo/service-page-canonical.ts`

**Functions:**
1. `normalizeGeoCityToCitySlug()` - Maps geo city names to city slugs
2. `extractCityAndService()` - Extracts city and service from service page slugs

### Issues Identified

#### Issue 1: Industry Geo Pages Not Filtered

**Problem:** Industry pages like `geo-auto-repair` are being treated as city names.

**Current behavior:** `normalizeGeoCityToCitySlug('auto-repair')` returns `null` (correct), but the function doesn't distinguish between industry pages and city pages.

**Fix needed:** Add industry page detection to skip mapping attempts.

#### Issue 2: City Name Variations Not Handled

**Problem:** Some city names in geo-* pages don't match city.name format.

**Examples:**
- `geo-palo-alto` → city name is "Palo Alto" (two words)
- `geo-naperville` → city name is "Naperville" (one word, but may not match)
- `geo-scottsdale` → city name is "Scottsdale"

**Current logic:**
1. Try exact city name match (e.g., "palo-alto" → "Palo Alto")
2. Try city slug without state (e.g., "palo-alto" → "palo-alto-ca")
3. Try fuzzy matching

**Issue:** Some cities may not be in the cities list (e.g., smaller cities like Naperville, Scottsdale).

#### Issue 3: City-Service Extraction Failing

**Problem:** Many city-service pages not mapping because:
- Service prefix not in map
- City name variations not handled
- Multi-word city names not matched correctly

**Examples:**
- `website-design-louisville` → Should map to `/louisville-ky/website-design`
- `web-development-fresno` → Should map to `/fresno-ca/web-development`
- `web-design-oklahoma-city` → Should map to `/oklahoma-city-ok/website-design`

---

## Proposed Improvements

### Improvement 1: Filter Industry Geo Pages

Add industry page detection to skip mapping:

```typescript
// Industry pages that should NOT map to cities
const INDUSTRY_GEO_PAGES = [
  'auto-repair', 'ecommerce', 'financial-services', 'healthcare',
  'home-services', 'hvac', 'landscaping', 'legal', 'plumbing',
  'professional-services', 'real-estate', 'restaurants', 'roofing',
  'saas-technology', 'services'
]

function isIndustryGeoPage(geoCityName: string): boolean {
  return INDUSTRY_GEO_PAGES.includes(geoCityName.toLowerCase())
}
```

### Improvement 2: Enhanced City Name Matching

Improve `normalizeGeoCityToCitySlug()` to handle:
- Multi-word city names (e.g., "palo-alto" → "Palo Alto")
- City name variations (e.g., "st-louis" → "St. Louis")
- Partial matches for compound names

### Improvement 3: Enhanced Service Prefix Mapping

Add missing service prefixes:
- `web-development-{city}` → `web-development`
- `website-design-{city}` → `website-design`
- `web-design-{city}` → `website-design`
- Handle multi-word cities (e.g., "oklahoma-city")

### Improvement 4: Better City-First Matching

Improve reverse matching (city at start):
- Handle multi-word city names
- Better service suffix extraction

---

## Statistics (Estimated)

### Geo Pages
- **Total:** 95
- **City pages:** ~80
- **Industry pages:** ~15
- **Mappable city pages:** ~69 (86% of city pages)
- **Unmappable:** ~11 (city not in cities list)

### City-Service Pages
- **Total:** 63
- **Mappable:** ~20-30 (estimated after improvements)
- **Unmappable:** ~33-43 (unknown city/service, or standalone service pages)

---

**End of Analysis**
