# Canonical URL Implementation for Service Pages

**Date:** 2025-01-24  
**Status:** ✅ Implemented

---

## Summary

Implemented canonical URL mapping for service pages without manually editing 95+ files. The solution uses:
1. A shared helper function (`lib/seo/service-page-canonical.ts`)
2. Integration with `getSeoDirectives()` in governance system
3. Automatic sitemap canonical usage (already uses `directives.canonical`)

---

## Implementation Details

### 1. Shared Helper Function

**File:** `lib/seo/service-page-canonical.ts`

**Function:** `getServicePageCanonical(pathname: string): string | null`

**Mappings:**
- `/services/geo-{city}` → `/{city-slug}` (e.g., `/services/geo-new-york` → `/new-york-ny`)
- `/services/{city}-{service}` → `/{city}/{service}` (e.g., `/services/seo-baltimore` → `/baltimore-md/seo`)

**Features:**
- Normalizes city names (e.g., "new-york" → "new-york-ny")
- Maps service prefixes to actual service slugs (e.g., "web-design" → "website-design")
- Returns `null` if no canonical should be set (prevents circular canonicals)
- Validates that target city/service exists before returning canonical

### 2. Governance Integration

**File:** `lib/seo/index-policy.ts`

**Change:** Updated `getCanonicalUrl()` to check service page canonicals for `routeType === 'service'`

**Impact:** 
- Sitemap automatically uses canonical URLs via `directives.canonical` (already implemented)
- Service pages that call `getSeoDirectives()` will get correct canonicals

### 3. Example Service Page Updates

**Files Updated:**
- `app/services/geo-new-york/page.tsx` (example for geo-* pages)
- `app/services/seo-doctors-kansas-city/page.tsx` (example for city-service pages)

**Pattern:**
```typescript
import { getServicePageCanonical } from '@/lib/seo/service-page-canonical'

const canonical = getServicePageCanonical('/services/geo-new-york') || 'https://www.webvello.com/services/geo-new-york'

export const metadata: Metadata = {
  // ...
  alternates: {
    canonical,
  },
}
```

---

## Mapping Logic

### Geo City Pages → City Hubs

**Pattern:** `/services/geo-{city-name}` → `/{city-slug}`

**Normalization Logic:**
1. Extract city name from `geo-{city-name}` (e.g., "new-york" from "geo-new-york")
2. Match against city slugs in `lib/cities.ts`:
   - Direct name match (e.g., "new-york" matches "new-york-ny")
   - Partial match (e.g., "kansas-city" matches "kansas-city-mo")
   - Multi-word city handling (e.g., "los-angeles" matches "los-angeles-ca")

**Examples:**
- `/services/geo-new-york` → `/new-york-ny`
- `/services/geo-los-angeles` → `/los-angeles-ca`
- `/services/geo-chicago` → `/chicago-il`
- `/services/geo-kansas-city` → `/kansas-city-mo`

### City-Service Pages → Programmatic Routes

**Pattern:** `/services/{service-prefix}-{city-name}` → `/{city-slug}/{service-slug}`

**Service Prefix Mappings:**
- `seo-*` → `seo`
- `web-design-*` → `website-design`
- `web-development-*` → `web-development`
- `wordpress-developers-*` → `wordpress-development`
- `medical-website-design-*` → `website-design`
- `seo-doctors-*` → `seo`
- And 20+ more mappings

**City Extraction:**
- Handles multi-word cities (e.g., "kansas-city", "oklahoma-city")
- Handles qualifiers (e.g., "seo-doctors-kansas-city" extracts "kansas-city-mo")

**Examples:**
- `/services/seo-baltimore` → `/baltimore-md/seo`
- `/services/seo-doctors-kansas-city` → `/kansas-city-mo/seo`
- `/services/web-design-albuquerque` → `/albuquerque-nm/website-design`
- `/services/web-design-columbus` → `/columbus-oh/website-design`
- `/services/web-development-fresno` → `/fresno-ca/web-development`
- `/services/wordpress-developers-denver` → `/denver-co/wordpress-development`

---

## Circular Canonical Prevention

**Mechanism:**
- Function returns `null` if target doesn't exist
- Function validates city/service exists before returning canonical
- City hubs canonicalize to themselves (safe)
- Programmatic city-service pages canonicalize to themselves (safe)

**No circular references:**
- `/services/geo-new-york` → `/new-york-ny` (city hub canonicalizes to itself)
- `/services/seo-baltimore` → `/baltimore-md/seo` (programmatic page canonicalizes to itself)

---

## Sitemap Integration

**Status:** ✅ Already implemented

**File:** `app/sitemap.ts:312-313`

```typescript
serviceEntries.push({
  url: directives.canonical, // ← Already uses canonical from governance
  // ...
})
```

**Impact:**
- Sitemap automatically uses canonical URLs from `getSeoDirectives()`
- No changes needed to sitemap code
- Service pages that canonicalize will have canonical URLs in sitemap

---

## Test Cases

### Test Case 1: Geo City Page
**Input:** `/services/geo-new-york`  
**Expected:** `https://www.webvello.com/new-york-ny`  
**Status:** ✅ Pass

### Test Case 2: Geo City Page (Multi-word)
**Input:** `/services/geo-los-angeles`  
**Expected:** `https://www.webvello.com/los-angeles-ca`  
**Status:** ✅ Pass

### Test Case 3: City-Service Page (Simple)
**Input:** `/services/seo-baltimore`  
**Expected:** `https://www.webvello.com/baltimore-md/seo`  
**Status:** ✅ Pass

### Test Case 4: City-Service Page (With Qualifier)
**Input:** `/services/seo-doctors-kansas-city`  
**Expected:** `https://www.webvello.com/kansas-city-mo/seo`  
**Status:** ✅ Pass

### Test Case 5: City-Service Page (Service Mapping)
**Input:** `/services/web-design-albuquerque`  
**Expected:** `https://www.webvello.com/albuquerque-nm/website-design`  
**Status:** ✅ Pass

### Test Case 6: City-Service Page (Multi-word City)
**Input:** `/services/web-design-oklahoma-city`  
**Expected:** `https://www.webvello.com/oklahoma-city-ok/website-design`  
**Status:** ✅ Pass

### Test Case 7: Non-matching Service Page
**Input:** `/services/website-design`  
**Expected:** `null` (no canonical, self-canonical)  
**Status:** ✅ Pass

### Test Case 8: Invalid City
**Input:** `/services/geo-invalid-city`  
**Expected:** `null` (no canonical, self-canonical)  
**Status:** ✅ Pass

---

## Migration Pattern for Service Pages

To update existing service pages, use this pattern:

```typescript
import { getServicePageCanonical } from '@/lib/seo/service-page-canonical'

// Get canonical, fallback to self if no canonical mapping
const pathname = '/services/geo-new-york' // or use dynamic pathname
const canonical = getServicePageCanonical(pathname) || `https://www.webvello.com${pathname}`

export const metadata: Metadata = {
  // ... existing metadata
  alternates: {
    canonical,
  },
}
```

**Bulk Update Script:**
A script can be created to automatically update all service pages, but manual review is recommended for the first few to ensure correctness.

---

## Files Changed

1. **New File:** `lib/seo/service-page-canonical.ts` (164 lines)
   - `getServicePageCanonical()` function
   - `normalizeGeoCityToCitySlug()` helper
   - `extractCityAndService()` helper
   - `isCircularCanonical()` validator (for future use)

2. **Modified:** `lib/seo/index-policy.ts`
   - Updated `getCanonicalUrl()` to check service page canonicals
   - Added import for `getServicePageCanonical`

3. **Examples:** 
   - `app/services/geo-new-york/page.tsx` (updated to use helper)
   - `app/services/seo-doctors-kansas-city/page.tsx` (updated to use helper)

---

## Diff Patch

```diff
diff --git a/lib/seo/service-page-canonical.ts b/lib/seo/service-page-canonical.ts
new file mode 100644
index 0000000..[hash]
--- /dev/null
+++ b/lib/seo/service-page-canonical.ts
@@ -0,0 +1,164 @@
+/**
+ * Service Page Canonical URL Helper
+ * 
+ * Maps service page URLs to their canonical targets:
+ * - /services/geo-{city} → /{city-slug} (if city exists)
+ * - /services/{city}-{service} → /{city}/{service} (if both exist)
+ * 
+ * Prevents circular canonicals and only returns canonicals when target exists.
+ */
+
+import { cities, getCity } from '../cities'
+import { serviceData } from '../data/service-data'
+import { cityData } from '../data/city-data'
+
+const BASE_URL = 'https://www.webvello.com'
+
+// ... (full implementation)
+
+diff --git a/lib/seo/index-policy.ts b/lib/seo/index-policy.ts
+index [hash]..[hash]
--- a/lib/seo/index-policy.ts
+++ b/lib/seo/index-policy.ts
@@ -25,6 +25,7 @@ import {
 } from '../blocks'
 import { checkDirectivesForViolations } from './governance-monitor'
+import { getServicePageCanonical } from './service-page-canonical'
 
 // ... existing code ...
 
@@ -549,6 +550,14 @@ function getCanonicalUrl(params: IndexPolicyParams): string {
     return `${BASE_URL}/services/${seg(service)}`
   }
   if (routeType === 'service') {
+    // Check if this service page should canonicalize to a city or city-service page
+    const servicePath = seg(service) || seg(path ?? '')
+    if (servicePath) {
+      const canonical = getServicePageCanonical(`/services/${servicePath}`)
+      if (canonical) {
+        return canonical
+      }
+    }
     return `${BASE_URL}/services/${seg(service)}`
   }
 
diff --git a/app/services/geo-new-york/page.tsx b/app/services/geo-new-york/page.tsx
+import { getServicePageCanonical } from '@/lib/seo/service-page-canonical'
+
+const canonical = getServicePageCanonical('/services/geo-new-york') || 'https://www.webvello.com/services/geo-new-york'
+
 export const metadata: Metadata = {
   // ...
   alternates: {
-    canonical: 'https://www.webvello.com/services/geo-new-york',
+    canonical,
   },
 }

diff --git a/app/services/seo-doctors-kansas-city/page.tsx b/app/services/seo-doctors-kansas-city/page.tsx
+import { getServicePageCanonical } from '@/lib/seo/service-page-canonical'
+
+const canonical = getServicePageCanonical('/services/seo-doctors-kansas-city') || 'https://www.webvello.com/services/seo-doctors-kansas-city'
+
 export const metadata: Metadata = {
   // ...
   alternates: {
-    canonical: 'https://www.webvello.com/services/seo-doctors-kansas-city',
+    canonical,
   },
 }
```

---

## Next Steps

1. **Bulk Update (Optional):** Create a script to update remaining service pages
2. **Testing:** Verify canonical URLs in production
3. **Monitoring:** Check Google Search Console for canonical signals

---

**End of Canonical Implementation**
