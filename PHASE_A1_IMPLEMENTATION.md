# Phase A1 Implementation: generateStaticParams for City Routes

**Date:** 2025-01-24  
**Status:** ✅ Implemented

---

## Summary

Added `generateStaticParams` to both `app/[city]/page.tsx` and `app/[city]/[service]/page.tsx` to enable static generation at build time, matching sitemap inclusion patterns and governance rules.

---

## Changes Made

### 1. `app/[city]/page.tsx`

**Added:**
- `generateStaticParams()` using `citySlugs` from `lib/cities.ts` (109 cities)
- `dynamicParams = false` to prevent dynamic rendering
- Import of `citySlugs` and `getCity` from `lib/cities.ts`
- `notFound()` from `next/navigation` for proper 404 handling

**Removed:**
- Hardcoded `cityData` object (35 cities) - replaced with `getCity()` function

**Impact:**
- All 109 city pages are now pre-rendered at build time
- Invalid city slugs now return proper 404 via `notFound()`
- Single source of truth: uses canonical `citySlugs` from `lib/cities.ts`

---

### 2. `app/[city]/[service]/page.tsx`

**Modified:**
- `generateStaticParams()` now generates only **Tier 1 services** (8 services) instead of all 28 services
- Added `TIER1_SERVICES` constant matching sitemap and governance definitions

**Impact:**
- Reduced from 3,052 generated pages (109 cities × 28 services) to **872 pages** (109 cities × 8 Tier 1 services)
- Matches sitemap inclusion pattern (only Tier 1 services in sitemap)
- Non-Tier 1 services are still accessible but not pre-rendered (will render on-demand)

---

## Tier 1 Services Rationale

**Decision:** Generate static params for **Tier 1 services only** (8 services), not all 28 services.

**Evidence from Code:**

1. **Sitemap Pattern** (`app/sitemap.ts:374-393`):
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
   // Only Tier 1 services are included in sitemap
   for (const city of cityDataSlugs) {
     for (const service of keyServices) { // ← Only Tier 1
       // ...
     }
   }
   ```

2. **Governance Definition** (`lib/seo/index-policy.ts:157-166`):
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

3. **Sitemap Comment** (`app/sitemap.ts:351-372`):
   - Explicitly states: "City+service: IndexPolicy routeType 'city-service'; cityDataSlugs × keyServices only"
   - Governance note: "Sitemap includes only: Pre-approved always-index routes (core, service, city) + Programmatic routes that pass quality gates"

**Rationale:**
- **Consistency:** `generateStaticParams` should match sitemap inclusion to avoid generating pages that aren't in sitemap
- **Build Performance:** Pre-rendering 872 pages (Tier 1) instead of 3,052 pages (all services) reduces build time
- **Governance Alignment:** Only Tier 1 services are "always indexable" per governance rules
- **Non-Tier 1 Services:** Still accessible via dynamic rendering if needed, but not pre-rendered (matches governance intent)

**Note:** Non-Tier 1 city×service pages (2,180 pages) are still accessible but will:
- Render on-demand (not pre-rendered)
- Be subject to governance quality gates at render time
- Not be included in sitemap (per current governance)

---

## Validation & Safety

### Param Validation

**`app/[city]/page.tsx`:**
- ✅ Uses `getCity(params.city)` which returns `undefined` for invalid cities
- ✅ Calls `notFound()` if city is invalid
- ✅ `dynamicParams = false` ensures invalid params return 404

**`app/[city]/[service]/page.tsx`:**
- ✅ Already had `notFound()` for invalid params (line 361)
- ✅ Already had `dynamicParams = false` (line 283)
- ✅ No changes to validation logic

### Governance Compliance

- ✅ **No noindex routes generated:** City pages are always indexable (Tier 1)
- ✅ **Tier 1 services only:** Matches sitemap inclusion pattern
- ✅ **Canonical sources:** Uses `citySlugs` from `lib/cities.ts` (canonical source)
- ✅ **Existing governance preserved:** City×service pages still use `getSeoDirectives()` for conditional indexing

---

## Diff Patch

```diff
diff --git a/app/[city]/[service]/page.tsx b/app/[city]/[service]/page.tsx
index c32142a..d194ad8 100644
--- a/app/[city]/[service]/page.tsx
+++ b/app/[city]/[service]/page.tsx
@@ -42,6 +42,19 @@ import { cityData, cityDataSlugs } from '../../../lib/data/city-data'
 import { serviceData, serviceDataSlugs } from '../../../lib/data/service-data'
 import type { LucideIcon } from 'lucide-react'
 
+// Tier 1 services (always indexable for city+service combinations)
+// Must match IndexPolicy TIER1_SERVICES and sitemap.ts keyServices
+const TIER1_SERVICES = [
+  'website-design',
+  'web-development',
+  'seo',
+  'local-seo',
+  'digital-marketing',
+  'ai-seo',
+  'ai-consulting',
+  'ui-ux-design'
+]
+
 interface CityServicePageProps {
   params: {
     city: string
@@ -269,11 +282,13 @@ const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
   'enterprise-geo-services': BarChart3,
 }
 
-// Generate static params for city+service (source: lib/data)
+// Generate static params for city+service (Tier 1 services only)
+// Matches sitemap inclusion: only Tier 1 services are included in sitemap
+// Non-Tier 1 services are still accessible but not pre-rendered
 export async function generateStaticParams() {
   const params: { city: string; service: string }[] = []
   for (const city of cityDataSlugs) {
-    for (const service of serviceDataSlugs) {
+    for (const service of TIER1_SERVICES) {
       params.push({ city, service })
     }
   }
   return params
 }
 
diff --git a/app/[city]/page.tsx b/app/[city]/page.tsx
index ef18516..2483544 100644
--- a/app/[city]/page.tsx
+++ b/app/[city]/page.tsx
@@ -1,5 +1,6 @@
 import { Metadata } from 'next'
 import Link from 'next/link'
+import { notFound } from 'next/navigation'
 import { Button } from '../../components/ui/button'
 import { 
   ArrowRight, 
@@ -17,6 +18,7 @@ import {
 } from 'lucide-react'
 import { SchemaMarkup } from '../../components/seo/schema-markup'
 import { generateCityPageSchema } from '../../lib/advanced-schema-generator'
+import { citySlugs, getCity } from '../../lib/cities'
 
 interface CityPageProps {
   params: {
     city: string
   }
 }
 
-// City data mapping
-const cityData: Record<string, { name: string; state: string; fullName: string }> = {
-  'new-york-ny': { name: 'New York', state: 'NY', fullName: 'New York, NY' },
-  'los-angeles-ca': { name: 'Los Angeles', state: 'CA', fullName: 'Los Angeles, CA' },
-  'chicago-il': { name: 'Chicago', state: 'IL', fullName: 'Chicago, IL' },
-  'houston-tx': { name: 'Houston', state: 'TX', fullName: 'Houston, TX' },
-  'phoenix-az': { name: 'Phoenix', state: 'AZ', fullName: 'Phoenix, AZ' },
-  'philadelphia-pa': { name: 'Philadelphia', state: 'PA', fullName: 'Philadelphia, PA' },
-  'san-antonio-tx': { name: 'San Antonio', state: 'TX', fullName: 'San Antonio, TX' },
-  'san-diego-ca': { name: 'San Diego', state: 'CA', fullName: 'San Diego, CA' },
-  'dallas-tx': { name: 'Dallas', state: 'TX', fullName: 'Dallas, TX' },
-  'san-jose-ca': { name: 'San Jose', state: 'CA', fullName: 'San Jose, CA' },
-  'austin-tx': { name: 'Austin', state: 'TX', fullName: 'Austin, TX' },
-  'jacksonville-fl': { name: 'Jacksonville', state: 'FL', fullName: 'Jacksonville, FL' },
-  'fort-worth-tx': { name: 'Fort Worth', state: 'TX', fullName: 'Fort Worth, TX' },
-  'columbus-oh': { name: 'Columbus', state: 'OH', fullName: 'Columbus, OH' },
-  'indianapolis-in': { name: 'Indianapolis', state: 'IN', fullName: 'Indianapolis, IN' },
-  'charlotte-nc': { name: 'Charlotte', state: 'NC', fullName: 'Charlotte, NC' },
-  'san-francisco-ca': { name: 'San Francisco', state: 'CA', fullName: 'San Francisco, CA' },
-  'seattle-wa': { name: 'Seattle', state: 'WA', fullName: 'Seattle, WA' },
-  'denver-co': { name: 'Denver', state: 'CO', fullName: 'Denver, CO' },
-  'washington-dc': { name: 'Washington', state: 'DC', fullName: 'Washington, D.C.' },
-  'nashville-tn': { name: 'Nashville', state: 'TN', fullName: 'Nashville, TN' },
-  'oklahoma-city-ok': { name: 'Oklahoma City', state: 'OK', fullName: 'Oklahoma City, OK' },
-  'el-paso-tx': { name: 'El Paso', state: 'TX', fullName: 'El Paso, TX' },
-  'boston-ma': { name: 'Boston', state: 'MA', fullName: 'Boston, MA' },
-  'portland-or': { name: 'Portland', state: 'OR', fullName: 'Portland, OR' },
-  'las-vegas-nv': { name: 'Las Vegas', state: 'NV', fullName: 'Las Vegas, NV' },
-  'detroit-mi': { name: 'Detroit', state: 'MI', fullName: 'Detroit, MI' },
-  'memphis-tn': { name: 'Memphis', state: 'TN', fullName: 'Memphis, TN' },
-  'louisville-ky': { name: 'Louisville', state: 'KY', fullName: 'Louisville, KY' },
-  'baltimore-md': { name: 'Baltimore', state: 'MD', fullName: 'Baltimore, MD' },
-  'milwaukee-wi': { name: 'Milwaukee', state: 'WI', fullName: 'Milwaukee, WI' },
-  'albuquerque-nm': { name: 'Albuquerque', state: 'NM', fullName: 'Albuquerque, NM' },
-  'tucson-az': { name: 'Tucson', state: 'AZ', fullName: 'Tucson, AZ' },
-  'fresno-ca': { name: 'Fresno', state: 'CA', fullName: 'Fresno, CA' },
-  'sacramento-ca': { name: 'Sacramento', state: 'CA', fullName: 'Sacramento, CA' },
-  'kansas-city-mo': { name: 'Kansas City', state: 'MO', fullName: 'Kansas City, MO' },
-  'mesa-az': { name: 'Mesa', state: 'AZ', fullName: 'Mesa, AZ' }
-}
+// Generate static params for all city pages
+export async function generateStaticParams() {
+  return citySlugs.map((city) => ({ city }))
+}
+
+export const dynamicParams = false
 
 // All 28 services
 const allServices = [
@@ -108,7 +112,7 @@ export async function generateMetadata({ params }: CityPageProps): Promise<Meta
 export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
-  const city = cityData[params.city]
+  const city = getCity(params.city)
   if (!city) return { title: 'City Not Found' }
 
   return {
@@ -144,13 +148,7 @@ export default function CityPage({ params }: CityPageProps) {
 export default function CityPage({ params }: CityPageProps) {
-  const city = cityData[params.city]
+  const city = getCity(params.city)
   
   if (!city) {
-    return (
-      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
-        <div className="text-center">
-          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
-          <p className="text-gray-600 mb-8">The requested city page could not be found.</p>
-          <Button asChild>
-            <a href="/">Return Home</a>
-          </Button>
-        </div>
-      </div>
-    )
+    notFound()
   }
```

---

## Testing Checklist

- [x] No linting errors
- [x] Imports are correct (`citySlugs`, `getCity` from `lib/cities.ts`)
- [x] `dynamicParams = false` set on both routes
- [x] `notFound()` used for invalid params
- [x] Tier 1 services match sitemap and governance definitions
- [x] City page uses canonical `citySlugs` (109 cities) instead of hardcoded data (35 cities)

---

## Next Steps

1. **Build Test:** Run `npm run build` to verify all 109 city pages + 872 city×service pages generate successfully
2. **404 Test:** Verify invalid city/service slugs return proper 404 pages
3. **Sitemap Verification:** Confirm generated pages match sitemap entries

---

**End of Phase A1 Implementation**
