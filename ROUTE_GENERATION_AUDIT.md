# Route Generation Audit

**Date:** January 24, 2025

---

## Current State Analysis

### 1. `app/[city]/page.tsx`

**generateStaticParams:**
```typescript
export async function generateStaticParams() {
  return citySlugs.map((city) => ({ city }))
}
```
- ✅ Uses `citySlugs` from `lib/cities.ts` (109 cities)
- ✅ Generates all city pages

**dynamicParams:**
```typescript
export const dynamicParams = false
```
- ✅ Rejects unknown city slugs (404)

**notFound validation:**
```typescript
export default function CityPage({ params }: CityPageProps) {
  const city = getCity(params.city)
  
  if (!city) {
    notFound()
  }
  // ...
}
```
- ✅ Validates city exists, calls `notFound()` if missing

---

### 2. `app/[city]/[service]/page.tsx`

**generateStaticParams:**
```typescript
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  for (const city of cityDataSlugs) {
    for (const service of TIER1_SERVICES) {
      params.push({ city, service })
    }
  }
  return params
}
```
- ✅ Only generates Tier 1 services (8 services)
- ✅ Uses `cityDataSlugs` (109 cities)
- ✅ Total: 109 × 8 = 872 pages

**dynamicParams:**
```typescript
export const dynamicParams = false
```
- ⚠️ **ISSUE:** Rejects non-Tier1 services with 404

**notFound validation:**
```typescript
export default function CityServicePage({ params }: CityServicePageProps) {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) notFound()
  // ...
}
```
- ✅ Validates city/service exist in data
- ⚠️ **ISSUE:** Does NOT check if service is Tier 1

**TIER1_SERVICES definition:**
```typescript
const TIER1_SERVICES = [
  'website-design',
  'web-development',
  'seo',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design'
]
```

---

### 3. `app/sitemap.ts`

**keyServices definition:**
```typescript
const keyServices = [
  'website-design',
  'web-development',
  'seo',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design'
]
```
- ✅ Matches Tier 1 services (same 8 services)
- ✅ Only includes Tier 1 in sitemap

**City×Service generation:**
```typescript
for (const city of cityDataSlugs) {
  for (const service of keyServices) {
    const url = `${baseUrl}/${city}/${service}`
    const directives = getSeoDirectives(url, { 
      routeType: 'city-service', 
      city, 
      service,
      blocks: {}
    })
    if (!directives.inSitemap) continue
    // ...
  }
}
```
- ✅ Only generates Tier 1 services
- ✅ Uses governance to filter (though all Tier 1 should pass)

---

### 4. `lib/seo/index-policy.ts`

**TIER1_SERVICES definition:**
```typescript
const TIER1_SERVICES = [
  'web-development',
  'seo',
  'website-design',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design'
]
```
- ⚠️ **ISSUE:** Same services, but different order than page definitions

**Non-Tier1 service handling:**
```typescript
if (routeType === 'city-service') {
  const isTier1Service = service && TIER1_SERVICES.includes(service)
  
  if (!isTier1Service) {
    return {
      index: false,
      follow: true,
      canonical: getCanonicalUrl(params),
      inSitemap: false,
      score: 0.0,
      reasonCodes: ['NOT_TIER1_SERVICE'],
      // ...
    }
  }
}
```
- ✅ Non-Tier1 services are noindex (not 404)
- ✅ Governance says: noindex, follow, not in sitemap

---

## Inconsistency Identified

### Problem

**Current behavior:**
- `generateStaticParams` only generates Tier 1 services
- `dynamicParams = false` → non-Tier1 services return 404
- Governance says non-Tier1 should be noindex (not 404)

**Expected behavior (per governance):**
- Non-Tier1 services should render but be noindex
- Non-Tier1 services should not be in sitemap (already correct)
- Non-Tier1 services should be accessible but not indexed

### Root Cause

With `dynamicParams = false`, Next.js will 404 any route not in `generateStaticParams`. This means non-Tier1 services return 404, but governance says they should be noindex (accessible but not indexed).

---

## Fix Strategy

**Option A: Allow non-Tier1 but mark noindex (Recommended)**
- Change `dynamicParams = true`
- Add explicit Tier 1 check in component
- Let governance handle noindex via metadata

**Option B: Keep 404 for non-Tier1 (Current)**
- Keep `dynamicParams = false`
- Accept that non-Tier1 services 404 (not accessible)
- Update governance to say 404 is acceptable

**Recommendation:** Option A - Governance says noindex, so we should allow rendering but mark noindex.

---

## Proposed Fix

### Change 1: Allow dynamic params

```typescript
export const dynamicParams = true  // Changed from false
```

### Change 2: Add Tier 1 validation in component

```typescript
export default function CityServicePage({ params }: CityServicePageProps) {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) notFound()
  
  // Governance will handle noindex for non-Tier1 services
  // But we can add explicit check for clarity
  const isTier1 = TIER1_SERVICES.includes(params.service)
  // Governance already handles this via getSeoDirectives
}
```

**Note:** Governance already handles noindex via `generateMetadata`, so the component doesn't need explicit Tier 1 check. The metadata will have `robots: { index: false }` for non-Tier1 services.

---

## Verification

### After Fix

1. **Tier 1 services:**
   - ✅ Pre-rendered via `generateStaticParams`
   - ✅ Indexed (governance returns `index: true`)
   - ✅ In sitemap

2. **Non-Tier1 services:**
   - ✅ Rendered on-demand (dynamicParams = true)
   - ✅ Noindex (governance returns `index: false`)
   - ✅ Not in sitemap
   - ✅ Accessible but not indexed

3. **Invalid services:**
   - ✅ 404 via `notFound()` (service not in serviceData)

---

**End of Audit**
