# City Page Services Section Implementation

**Date:** 2025-01-24  
**Status:** ✅ Implemented

---

## Summary

Added "Services in {City}" section to `app/[city]/page.tsx` that:
1. Links to all 8 Tier 1 city×service routes
2. Includes state page link (when state page exists)
3. Is index-policy safe (only links to Tier 1 services which are always indexable)

---

## Changes Made

### 1. Added Tier 1 Services Constants

**File:** `app/[city]/page.tsx`

- Added `TIER1_SERVICES` array (8 services matching `lib/seo/index-policy.ts`)
- Added `SERVICE_NAMES` mapping for display names

### 2. Added State Code to State Slug Mapping

**Function:** `getStateSlugFromStateCode(stateCode: string): string | null`

- Maps state codes (e.g., "CA", "NY") to state page slugs (e.g., "california", "new-york")
- Handles all 50 US states
- Returns `null` for DC (no state page exists)
- Based on actual state page directories in `app/services/`

### 3. Added "Services in {City}" Section

**Location:** Between "Services by Category" and "Why Choose Us" sections

**Features:**
- Grid layout (1 column mobile, 2 columns tablet, 4 columns desktop)
- Links to all 8 Tier 1 city×service routes: `/{city}/{service}`
- State page link (conditional, only shows if state page exists)
- Responsive design with hover effects

---

## Index-Policy Safety

**Tier 1 Services (Always Indexable):**
- `website-design`
- `web-development`
- `seo`
- `local-seo`
- `digital-marketing`
- `ai-seo`
- `ai-consulting`
- `ui-ux-design`

**Governance:**
- All Tier 1 services are always indexable per `lib/seo/index-policy.ts:158-167`
- City×service pages with Tier 1 services pass quality gates and are included in sitemap
- Links are safe to include (no noindex routes linked)

---

## State Page Mapping

**Pattern:** `/services/{state-slug}` (e.g., `/services/california`)

**Mapping Logic:**
- Extracts state code from city slug format: `{city}-{state}` (e.g., "new-york-ny" → "NY")
- Maps state code to state slug: "NY" → "new-york"
- Returns `null` if no mapping exists (e.g., DC)

**Verified State Pages:**
All 50 US states have corresponding pages in `app/services/`:
- `alabama`, `alaska`, `arizona`, `arkansas`, `california`, `colorado`, `connecticut`, `delaware`, `florida`, `georgia`, `hawaii`, `idaho`, `illinois`, `indiana`, `iowa`, `kansas`, `kentucky`, `louisiana`, `maine`, `maryland`, `massachusetts`, `michigan`, `minnesota`, `mississippi`, `missouri`, `montana`, `nebraska`, `nevada`, `new-hampshire`, `new-jersey`, `new-mexico`, `new-york`, `north-carolina`, `north-dakota`, `ohio`, `oklahoma`, `oregon`, `pennsylvania`, `rhode-island`, `south-carolina`, `south-dakota`, `tennessee`, `texas`, `utah`, `vermont`, `virginia`, `washington`, `west-virginia`, `wisconsin`, `wyoming`

**DC Handling:**
- DC (District of Columbia) has a city page (`washington-dc`) but no state page
- `getStateSlugFromStateCode("DC")` returns `null`
- State link is not displayed for DC cities

---

## Example Output

### Example 1: New York, NY (`new-york-ny`)

**City Data:**
- Name: "New York"
- State: "NY"
- Full Name: "New York, NY"

**Services Section:**
- Heading: "Services in New York"
- 8 Tier 1 service links:
  1. `/new-york-ny/website-design` - "Website Design"
  2. `/new-york-ny/web-development` - "Web Development"
  3. `/new-york-ny/seo` - "SEO"
  4. `/new-york-ny/local-seo` - "Local SEO"
  5. `/new-york-ny/digital-marketing` - "Digital Marketing"
  6. `/new-york-ny/ai-seo` - "AI SEO"
  7. `/new-york-ny/ai-consulting` - "AI Consulting"
  8. `/new-york-ny/ui-ux-design` - "UI/UX Design"

**State Link:**
- `/services/new-york` - "View all services in NY"

---

### Example 2: Los Angeles, CA (`los-angeles-ca`)

**City Data:**
- Name: "Los Angeles"
- State: "CA"
- Full Name: "Los Angeles, CA"

**Services Section:**
- Heading: "Services in Los Angeles"
- 8 Tier 1 service links:
  1. `/los-angeles-ca/website-design` - "Website Design"
  2. `/los-angeles-ca/web-development` - "Web Development"
  3. `/los-angeles-ca/seo` - "SEO"
  4. `/los-angeles-ca/local-seo` - "Local SEO"
  5. `/los-angeles-ca/digital-marketing` - "Digital Marketing"
  6. `/los-angeles-ca/ai-seo` - "AI SEO"
  7. `/los-angeles-ca/ai-consulting` - "AI Consulting"
  8. `/los-angeles-ca/ui-ux-design` - "UI/UX Design"

**State Link:**
- `/services/california` - "View all services in CA"

---

### Example 3: Washington, DC (`washington-dc`)

**City Data:**
- Name: "Washington"
- State: "DC"
- Full Name: "Washington, D.C."

**Services Section:**
- Heading: "Services in Washington"
- 8 Tier 1 service links:
  1. `/washington-dc/website-design` - "Website Design"
  2. `/washington-dc/web-development` - "Web Development"
  3. `/washington-dc/seo` - "SEO"
  4. `/washington-dc/local-seo` - "Local SEO"
  5. `/washington-dc/digital-marketing` - "Digital Marketing"
  6. `/washington-dc/ai-seo` - "AI SEO"
  7. `/washington-dc/ai-consulting` - "AI Consulting"
  8. `/washington-dc/ui-ux-design` - "UI/UX Design"

**State Link:**
- None (DC has no state page, `getStateSlugFromStateCode("DC")` returns `null`)

---

## Diff Patch

```diff
--- a/app/[city]/page.tsx
+++ b/app/[city]/page.tsx
@@ -17,6 +17,97 @@ import {
 } from 'lucide-react'
 import { SchemaMarkup } from '../../components/seo/schema-markup'
 import { generateCityPageSchema } from '../../lib/advanced-schema-generator'
+import { citySlugs, getCity } from '../../lib/cities'
+
+// Tier 1 services (always indexable for city+service combinations)
+// Must match IndexPolicy TIER1_SERVICES
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
+// Service name mappings for display
+const SERVICE_NAMES: Record<string, string> = {
+  'website-design': 'Website Design',
+  'web-development': 'Web Development',
+  'seo': 'SEO',
+  'local-seo': 'Local SEO',
+  'digital-marketing': 'Digital Marketing',
+  'ai-seo': 'AI SEO',
+  'ai-consulting': 'AI Consulting',
+  'ui-ux-design': 'UI/UX Design'
+}
+
+/**
+ * Map state code (e.g., "CA", "NY") to state page slug (e.g., "california", "new-york")
+ * Returns null if no reliable mapping exists
+ */
+function getStateSlugFromStateCode(stateCode: string): string | null {
+  const stateCodeUpper = stateCode.toUpperCase()
+  
+  // Mapping of state codes to state page slugs (based on actual state page directories)
+  const stateCodeToSlug: Record<string, string> = {
+    'AL': 'alabama',
+    'AK': 'alaska',
+    'AZ': 'arizona',
+    'AR': 'arkansas',
+    'CA': 'california',
+    'CO': 'colorado',
+    'CT': 'connecticut',
+    'DE': 'delaware',
+    'FL': 'florida',
+    'GA': 'georgia',
+    'HI': 'hawaii',
+    'ID': 'idaho',
+    'IL': 'illinois',
+    'IN': 'indiana',
+    'IA': 'iowa',
+    'KS': 'kansas',
+    'KY': 'kentucky',
+    'LA': 'louisiana',
+    'ME': 'maine',
+    'MD': 'maryland',
+    'MA': 'massachusetts',
+    'MI': 'michigan',
+    'MN': 'minnesota',
+    'MS': 'mississippi',
+    'MO': 'missouri',
+    'MT': 'montana',
+    'NE': 'nebraska',
+    'NV': 'nevada',
+    'NH': 'new-hampshire',
+    'NJ': 'new-jersey',
+    'NM': 'new-mexico',
+    'NY': 'new-york',
+    'NC': 'north-carolina',
+    'ND': 'north-dakota',
+    'OH': 'ohio',
+    'OK': 'oklahoma',
+    'OR': 'oregon',
+    'PA': 'pennsylvania',
+    'RI': 'rhode-island',
+    'SC': 'south-carolina',
+    'SD': 'south-dakota',
+    'TN': 'tennessee',
+    'TX': 'texas',
+    'UT': 'utah',
+    'VT': 'vermont',
+    'VA': 'virginia',
+    'WA': 'washington',
+    'WV': 'west-virginia',
+    'WI': 'wisconsin',
+    'WY': 'wyoming',
+    // DC is not a state but has a city page; no state page exists
+  }
+  
+  return stateCodeToSlug[stateCodeUpper] || null
+}
 
 // ... existing code ...
 
@@ -354,6 +445,44 @@ export default function CityPage({ params }: CityPageProps) {
         </div>
       </section>
 
+      {/* Services in City Section */}
+      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
+        <div className="max-w-7xl mx-auto">
+          <div className="text-center mb-12">
+            <h2 className="text-3xl font-bold text-gray-900 mb-4">
+              Services in {city.name}
+            </h2>
+            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
+              Explore our top services tailored for {city.name} businesses. Each service is designed to help local companies grow and succeed.
+            </p>
+          </div>
+          
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
+            {TIER1_SERVICES.map((service) => (
+              <Link
+                key={service}
+                href={`/${params.city}/${service}`}
+                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-100 hover:border-blue-300 hover:shadow-md"
+              >
+                <div className="flex items-center justify-between mb-2">
+                  <h3 className="text-base font-semibold text-gray-900">
+                    {SERVICE_NAMES[service]}
+                  </h3>
+                  <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
+                </div>
+                <p className="text-sm text-gray-600">
+                  Professional {SERVICE_NAMES[service].toLowerCase()} services in {city.fullName}
+                </p>
+              </Link>
+            ))}
+          </div>
+          
+          {/* State Page Link */}
+          {(() => {
+            const stateSlug = getStateSlugFromStateCode(city.state)
+            if (stateSlug) {
+              return (
+                <div className="mt-8 text-center">
+                  <Link
+                    href={`/services/${stateSlug}`}
+                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
+                  >
+                    <MapPin className="h-4 w-4 mr-2" />
+                    View all services in {city.state}
+                  </Link>
+                </div>
+              )
+            }
+            return null
+          })()}
+        </div>
+      </section>
+
       {/* Why Choose Us Section */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
```

---

## Testing Checklist

- [x] Tier 1 services match `lib/seo/index-policy.ts` definition
- [x] State code to state slug mapping covers all 50 states
- [x] DC handling (no state page, returns null)
- [x] Links point to correct city×service routes
- [x] State links point to correct state pages
- [x] Section is index-policy safe (only Tier 1 services)
- [x] Responsive design (mobile/tablet/desktop)
- [x] No linting errors

---

**End of Implementation**
