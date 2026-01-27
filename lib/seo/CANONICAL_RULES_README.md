# Canonical Governance System for City×Industry Hub Pages

## Overview

The Canonical Governance System uses **precomputed overlap scores** (build-time) to make deterministic canonical decisions for City×Industry hub pages. This avoids runtime content comparison and ensures consistent, cacheable decisions.

## Key Features

1. **Precomputed Overlap Scores**: Overlap scores are computed offline at build time, not at runtime
2. **Deterministic Decisions**: Same input always produces same canonical decision
3. **Caching**: Canonical decisions are cached in memory for performance
4. **Structured Logging**: All decisions are logged with reason codes
5. **Always noindex,follow**: City×Industry hubs are always noindex,follow and excluded from sitemaps

## Files

- `lib/seo/canonical-rules.ts`: Main canonical decision logic
- `lib/seo/overlap-store.ts`: Precomputed overlap scores (generated at build time)
- `lib/seo/overlap-store.json`: JSON schema and example
- `lib/seo/overlap-computation.md`: Documentation for computing overlap scores offline

## Usage

### In Page Components

```typescript
import { 
  getCanonicalForCityIndustryHub, 
  getCityIndustryHubRobots 
} from '@/lib/seo/canonical-rules'
import { overlapStore } from '@/lib/seo/overlap-store'
import { loadOverlapStore } from '@/lib/seo/canonical-rules'

// Load overlap store at module initialization
loadOverlapStore(overlapStore)

// In generateMetadata()
const canonicalDecision = getCanonicalForCityIndustryHub(city, industry)
const robots = getCityIndustryHubRobots()

return {
  alternates: {
    canonical: canonicalDecision.canonical
  },
  robots: {
    index: robots.index,  // Always false
    follow: robots.follow  // Always true
  }
}
```

## Canonical Decision Scenarios

1. **Unique Navigational Function** → Canonical self
   - 3+ downstream pages AND overlap < 0.80 with both parents

2. **Redundant with City Page** → Canonical to `/{city-slug}`
   - City overlap >= 0.80

3. **Redundant with Industry Page** → Canonical to `/industries/{industry-slug}`
   - Industry overlap >= 0.80

4. **Redundant with Both** → Canonical to `/{city-slug}` (prefer geo)
   - Both overlaps >= 0.80

5. **Single Service Page** → Canonical to service page
   - Exactly 1 indexable City×Industry×Service page exists

6. **No Downstream Pages** → Canonical self
   - Zero downstream pages (preserve for future)

## Overlap Score Computation

See `overlap-computation.md` for detailed methodology. In summary:

- **Method**: SimHash or Jaccard Similarity
- **Sections Compared**: Service links, content, case studies, navigation
- **Threshold**: 0.80 (80% overlap = redundant)
- **Frequency**: Computed at build time, updated when content changes

## Example Overlap Store Entry

```json
{
  "/new-york-ny/industry/healthcare": {
    "cityOverlap": 0.35,
    "industryOverlap": 0.28,
    "downstreamPages": 8,
    "computedAt": "2026-01-25T10:00:00Z"
  }
}
```

## Logging

Enable logging with `ENABLE_CANONICAL_LOGGING=true`:

```typescript
// Logs include:
{
  url: "/new-york-ny/industry/healthcare",
  decision: {
    canonical: "https://www.webvello.com/new-york-ny/industry/healthcare",
    reasonCode: "UNIQUE_NAVIGATION",
    reason: "Unique navigational function (3+ downstream pages, low overlap)",
    overlapScores: { city: 0.35, industry: 0.28 },
    downstreamPages: 8
  }
}
```

## Integration Points

1. **Page Metadata**: `generateMetadata()` uses `getCanonicalForCityIndustryHub()`
2. **Robots Meta**: Always `noindex,follow` via `getCityIndustryHubRobots()`
3. **Sitemap**: Already excludes City×Industry hubs (see `app/sitemap.ts`)

## Performance

- **Cache**: In-memory cache for canonical decisions
- **Lookup**: O(1) lookup from overlap store
- **No Runtime Computation**: All overlap scores precomputed

## Governance

- **Always noindex,follow**: Enforced at page level
- **Always excluded from sitemap**: Enforced in sitemap generation
- **Deterministic**: Same input = same output (cacheable)
- **Logged**: All decisions logged for monitoring/audit
