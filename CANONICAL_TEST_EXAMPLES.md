# Canonical System Test Examples

**Date:** January 24, 2025

---

## Test Cases

### 8 Mapping Examples

| Input URL | Expected Canonical | Logic |
|-----------|-------------------|-------|
| `/services/geo-new-york` | `https://www.webvello.com/new-york-ny` | Geo city page → city hub (normalizeGeoCityToCitySlug: "new-york" → "new-york-ny") |
| `/services/geo-los-angeles` | `https://www.webvello.com/los-angeles-ca` | Geo city page → city hub (normalizeGeoCityToCitySlug: "los-angeles" → "los-angeles-ca") |
| `/services/seo-doctors-kansas-city` | `https://www.webvello.com/kansas-city-mo/seo` | City-service page → programmatic route (extractCityAndService: "seo-doctors" prefix → "seo", "kansas-city" → "kansas-city-mo") |
| `/services/wordpress-developers-denver` | `https://www.webvello.com/denver-co/wordpress-development` | City-service page → programmatic route (extractCityAndService: "wordpress-developers" prefix → "wordpress-development", "denver" → "denver-co") |
| `/services/web-design-albuquerque` | `https://www.webvello.com/albuquerque-nm/website-design` | City-service page → programmatic route (extractCityAndService: "web-design" prefix → "website-design", "albuquerque" → "albuquerque-nm") |
| `/services/california` | `https://www.webvello.com/services/california` | State page (no mapping) → self-canonical (getServicePageCanonical returns null, falls back to self) |
| `/new-york-ny` | `https://www.webvello.com/new-york-ny` | City hub (not a service page) → self-canonical (getCanonicalUrl for routeType 'city') |
| `/kansas-city-mo/seo` | `https://www.webvello.com/kansas-city-mo/seo` | City-service (not a service page) → self-canonical (getCanonicalUrl for routeType 'city-service') |

---

## Implementation Flow

### For Service Pages

**Path:** Service Page Metadata → `getServicePageAlternates()` → `getServicePageCanonicalUrl()` → `getSeoDirectives()` → `getCanonicalUrl()` → `getServicePageCanonical()`

**Example: `/services/geo-new-york`**
1. Page calls: `getServicePageAlternates('/services/geo-new-york')`
2. Helper extracts: `serviceSlug = 'geo-new-york'`
3. Calls: `getSeoDirectives('https://www.webvello.com/services/geo-new-york', { routeType: 'service', service: 'geo-new-york' })`
4. Governance calls: `getCanonicalUrl({ routeType: 'service', service: 'geo-new-york' })`
5. Canonical resolver calls: `getServicePageCanonical('/services/geo-new-york')`
6. Detects pattern: `geo-new-york` starts with `geo-`
7. Extracts city: `geoCityName = 'new-york'`
8. Normalizes: `normalizeGeoCityToCitySlug('new-york')` → `'new-york-ny'`
9. Returns: `https://www.webvello.com/new-york-ny`

**Example: `/services/seo-doctors-kansas-city`**
1. Page calls: `getServicePageAlternates('/services/seo-doctors-kansas-city')`
2. Helper extracts: `serviceSlug = 'seo-doctors-kansas-city'`
3. Calls: `getSeoDirectives(...)` → `getCanonicalUrl(...)` → `getServicePageCanonical('/services/seo-doctors-kansas-city')`
4. Detects pattern: Not `geo-*`, tries city-service extraction
5. Extracts: `extractCityAndService('seo-doctors-kansas-city')`
   - Matches prefix: `'seo-doctors'` → maps to service `'seo'`
   - Extracts city: `'kansas-city'` → normalizes to `'kansas-city-mo'`
6. Returns: `https://www.webvello.com/kansas-city-mo/seo`

**Example: `/services/california`**
1. Page calls: `getServicePageAlternates('/services/california')`
2. Helper extracts: `serviceSlug = 'california'`
3. Calls: `getSeoDirectives(...)` → `getCanonicalUrl(...)` → `getServicePageCanonical('/services/california')`
4. Detects: Not `geo-*`, not city-service pattern
5. Returns: `null` (no mapping)
6. Falls back: `getCanonicalUrl` returns `https://www.webvello.com/services/california` (self-canonical)

---

## Verification

### Call Graph

```
Service Page Metadata Export
  └─> getServicePageAlternates('/services/{slug}')
      └─> getServicePageCanonicalUrl(pathname)
          └─> getSeoDirectives(url, { routeType: 'service', service })
              └─> getCanonicalUrl(params)
                  └─> getServicePageCanonical('/services/{service}')
                      ├─> Pattern 1: geo-{city} → normalizeGeoCityToCitySlug()
                      └─> Pattern 2: {city}-{service} → extractCityAndService()
                          └─> Returns canonical or null
                  └─> If null, returns self-canonical: /services/{service}
              └─> Returns directives.canonical
          └─> Returns canonical URL
      └─> Returns { canonical: url }

Sitemap Generation
  └─> getSeoDirectives(url, { routeType: 'service', service })
      └─> getCanonicalUrl(params)
          └─> getServicePageCanonical('/services/{service}')
              └─> (Same logic as above)
          └─> Returns canonical URL
      └─> Uses directives.canonical in sitemap entry
```

**Result:** ✅ Both paths use identical governance chain

---

## Coverage Status

### Universal Coverage

- ✅ **Sitemap:** Uses `getSeoDirectives` → `getCanonicalUrl` → `getServicePageCanonical`
- ✅ **Service pages (via helper):** Use `getServicePageAlternates` → `getSeoDirectives` → `getCanonicalUrl` → `getServicePageCanonical`
- ✅ **Consistency:** Both paths use the same governance system

### Files Using New Helper

**Updated (8 examples):**
1. `app/services/geo-new-york/page.tsx`
2. `app/services/seo-doctors-kansas-city/page.tsx`
3. `app/services/california/page.tsx`
4. `app/services/seo/page.tsx`
5. `app/services/web-development/page.tsx`
6. `app/services/geo-los-angeles/page.tsx`
7. `app/services/wordpress-developers-denver/page.tsx`
8. `app/services/web-design-albuquerque/page.tsx`

**Remaining:** ~202 service pages still have hardcoded canonicals (can be migrated incrementally)

---

**End of Test Examples**
