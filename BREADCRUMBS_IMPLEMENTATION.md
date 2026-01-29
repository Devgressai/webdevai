# Breadcrumbs Component Implementation

**Date:** 2025-01-24  
**Status:** ✅ Implemented

---

## Summary

Created `components/seo/breadcrumbs.tsx` with comprehensive breadcrumb support for all route patterns. The component outputs both visual breadcrumbs and JSON-LD BreadcrumbList schema, uses canonical URLs from governance, and provides consistent label formatting.

---

## Component Features

### 1. Route Pattern Support

**Supported Routes:**
- `/services/*` - Service pages
- `/locations/*` - Location hub and sub-pages
- `/[city]` - City hub pages
- `/[city]/[service]` - City×Service pages
- `/[city]/industry/[industry]` - City×Industry hub pages
- `/[city]/industry/[industry]/[service]` - City×Industry×Service pages

### 2. Canonical URL Integration

**Uses Governance System:**
- Calls `getSeoDirectives()` for each breadcrumb item to get canonical URLs
- Falls back to path-based URL if canonical not available
- Ensures breadcrumbs reflect actual canonical structure

### 3. Label Formatting

**Consistent Title Case:**
- Uses service/industry/city names from data sources when available
- Falls back to formatted slug (Title Case) when name not found
- Human-friendly labels (e.g., "Website Design" not "website-design")

### 4. Dual Output

**Visual Breadcrumbs:**
- Accessible navigation with ARIA labels
- Responsive design with chevron separators
- Last item is non-clickable (current page)

**JSON-LD Schema:**
- BreadcrumbList structured data
- Uses canonical URLs in schema
- Automatically included via `<SchemaMarkup>` component

---

## Implementation Details

### Component Structure

**File:** `components/seo/breadcrumbs.tsx`

**Exports:**
- `Breadcrumbs` - Main visual component
- `generateServiceBreadcrumbs(serviceSlug)` - For `/services/*`
- `generateLocationBreadcrumbs(pathSegments)` - For `/locations/*`
- `generateCityBreadcrumbs(citySlug)` - For `/[city]`
- `generateCityServiceBreadcrumbs(citySlug, serviceSlug)` - For `/[city]/[service]`
- `generateCityIndustryBreadcrumbs(citySlug, industrySlug)` - For `/[city]/industry/[industry]`
- `generateCityIndustryServiceBreadcrumbs(citySlug, industrySlug, serviceSlug)` - For `/[city]/industry/[industry]/[service]`

### Integration Points

**Files Updated:**
1. `app/[city]/page.tsx` - Added breadcrumbs
2. `app/[city]/[service]/page.tsx` - Added breadcrumbs
3. `app/[city]/industry/[industry]/page.tsx` - Added breadcrumbs
4. `app/[city]/industry/[industry]/[service]/page.tsx` - Added breadcrumbs

**Pattern:**
```typescript
import { Breadcrumbs, generateCityBreadcrumbs } from '../../components/seo/breadcrumbs'

// In component:
const breadcrumbs = generateCityBreadcrumbs(params.city)

// In JSX:
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
  <Breadcrumbs items={breadcrumbs} />
</div>
```

---

## Example Outputs

### Example 1: City Page (`/new-york-ny`)

**Breadcrumbs:**
1. Home → `/`
2. New York, NY → `/new-york-ny` (current)

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.webvello.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "New York, NY",
      "item": "https://www.webvello.com/new-york-ny"
    }
  ]
}
```

---

### Example 2: City×Service Page (`/new-york-ny/seo`)

**Breadcrumbs:**
1. Home → `/`
2. New York, NY → `/new-york-ny`
3. SEO Services in New York, NY → `/new-york-ny/seo` (current)

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.webvello.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "New York, NY",
      "item": "https://www.webvello.com/new-york-ny"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SEO Services in New York, NY",
      "item": "https://www.webvello.com/new-york-ny/seo"
    }
  ]
}
```

---

### Example 3: City×Industry Page (`/chicago-il/industry/technology`)

**Breadcrumbs:**
1. Home → `/`
2. Chicago, IL → `/chicago-il`
3. Technology in Chicago, IL → `/chicago-il/industry/technology` (current)

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.webvello.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Chicago, IL",
      "item": "https://www.webvello.com/chicago-il"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Technology in Chicago, IL",
      "item": "https://www.webvello.com/chicago-il/industry/technology"
    }
  ]
}
```

---

### Example 4: City×Industry×Service Page (`/los-angeles-ca/industry/healthcare/web-development`)

**Breadcrumbs:**
1. Home → `/`
2. Los Angeles, CA → `/los-angeles-ca`
3. Healthcare in Los Angeles, CA → `/los-angeles-ca/industry/healthcare`
4. Web Development for Healthcare in Los Angeles, CA → `/los-angeles-ca/industry/healthcare/web-development` (current)

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.webvello.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Los Angeles, CA",
      "item": "https://www.webvello.com/los-angeles-ca"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Healthcare in Los Angeles, CA",
      "item": "https://www.webvello.com/los-angeles-ca/industry/healthcare"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Web Development for Healthcare in Los Angeles, CA",
      "item": "https://www.webvello.com/los-angeles-ca/industry/healthcare/web-development"
    }
  ]
}
```

---

## Diff Patch

### New File: components/seo/breadcrumbs.tsx

See full file content (280+ lines)

### Modified: app/[city]/page.tsx

```diff
--- a/app/[city]/page.tsx
+++ b/app/[city]/page.tsx
@@ -19,6 +19,7 @@ import {
 } from 'lucide-react'
 import { SchemaMarkup } from '../../components/seo/schema-markup'
 import { generateCityPageSchema } from '../../lib/advanced-schema-generator'
+import { Breadcrumbs, generateCityBreadcrumbs } from '../../components/seo/breadcrumbs'
 
 // ... existing code ...
 
@@ -152,6 +153,10 @@ export default function CityPage({ params }: CityPageProps) {
   )
 
   return (
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
+      {/* Breadcrumbs */}
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
+        <Breadcrumbs items={generateCityBreadcrumbs(params.city)} />
+      </div>
       {/* Enhanced LocalBusiness Schema for this city */}
       {citySchema.map((schema, index) => (
         <SchemaMarkup key={index} schema={schema} />
```

### Modified: app/[city]/[service]/page.tsx

```diff
--- a/app/[city]/[service]/page.tsx
+++ b/app/[city]/[service]/page.tsx
@@ -5,6 +5,7 @@ import { Button } from '../../../components/ui/button'
 import { getSeoDirectives } from '../../../lib/seo/index-policy'
 import { 
   getLocalDataCard, 
   StubLocalDataProvider,
   getProofSlot,
   StubProofProvider
 } from '../../../lib/blocks'
+import { Breadcrumbs, generateCityServiceBreadcrumbs } from '../../../components/seo/breadcrumbs'
 
 // ... existing code ...
 
@@ -371,6 +374,10 @@ export default function CityServicePage({ params }: CityServicePageProps) {
   return (
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
+      {/* Breadcrumbs */}
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
+        <Breadcrumbs items={generateCityServiceBreadcrumbs(params.city, params.service)} />
+      </div>
       {/* Hero Section */}
```

### Modified: app/[city]/industry/[industry]/page.tsx

```diff
--- a/app/[city]/industry/[industry]/page.tsx
+++ b/app/[city]/industry/[industry]/page.tsx
@@ -22,6 +22,7 @@ import { getCity, citySlugs } from '../../../../lib/cities'
 import { getIndustry, industrySlugs } from '../../../../lib/industries'
 import { SchemaMarkup } from '../../../../components/seo/schema-markup'
 import { generateCityIndustryContent, generateIndustryInsights } from '../../../../lib/city-industry-content'
+import { Breadcrumbs, generateCityIndustryBreadcrumbs } from '../../../../components/seo/breadcrumbs'
 
 // ... existing code ...
 
@@ -163,6 +164,8 @@ export default function CityIndustryPage({ params }: CityIndustryPageProps) {
   }
   
+  const breadcrumbs = generateCityIndustryBreadcrumbs(params.city, params.industry)
+
   return (
     <div className="min-h-screen bg-white">
+      {/* Breadcrumbs */}
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
+        <Breadcrumbs items={breadcrumbs} />
+      </div>
       {/* Schema Markup */}
```

### Modified: app/[city]/industry/[industry]/[service]/page.tsx

```diff
--- a/app/[city]/industry/[industry]/[service]/page.tsx
+++ b/app/[city]/industry/[industry]/[service]/page.tsx
@@ -12,6 +12,7 @@ import { 
   getIndustryKpiMap,
   StubIndustryKpiProvider,
   getProofSlot,
   StubProofProvider
 } from '../../../../../lib/blocks'
+import { Breadcrumbs, generateCityIndustryServiceBreadcrumbs } from '../../../../../components/seo/breadcrumbs'
 
 // ... existing code ...
 
@@ -151,6 +152,8 @@ export default async function CityIndustryServicePage({ params }: { params: Par
 
   if (!city || !industry || !service) notFound()
 
+  const breadcrumbs = generateCityIndustryServiceBreadcrumbs(params.city, params.industry, params.service)
+
   // If CMS content exists and is published/in-review, prefer CMS content
   if (cms && cms.status && cms.status !== 'draft') {
     return (
       <div className="min-h-screen bg-white">
+        {/* Breadcrumbs */}
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
+          <Breadcrumbs items={breadcrumbs} />
+        </div>
         <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
```

---

## Testing Checklist

- [x] Component exports all required functions
- [x] Visual breadcrumbs render correctly
- [x] JSON-LD schema outputs correctly
- [x] Canonical URLs used from governance
- [x] Label formatting is consistent (Title Case)
- [x] All route patterns supported
- [x] No linting errors
- [x] Integration in 4 template files

---

**End of Implementation**
