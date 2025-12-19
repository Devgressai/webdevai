# Cluster Build Implementation

## Overview

The Cluster Build worker groups pages into clusters based on:
- URL signature normalization
- DOM fingerprint (main tag pattern + heading outline + schema types)
- Profile bands (word count, heading count, FAQ presence)

## Process Flow

```
1. Get pages to cluster (all pages in scan, or specified pageIds)
   ↓
2. For each page:
   - Normalize URL signature
   - Compute DOM fingerprint
   - Compute profile bands
   - Compute predicates
   - Generate cluster_id (SHA256 hash)
   ↓
3. Group pages by cluster_id
   ↓
4. For each cluster:
   - Create/update Cluster record
   - Select representative URLs (best/typical/worst)
   - Create ClusterPageMap records
   ↓
5. Return cluster summary
```

## Cluster ID Generation

### Formula

```
cluster_id = SHA256(url_signature + dom_fingerprint + profile_key)
```

### Components

1. **url_signature**: Normalized URL (see URL Signature section)
2. **dom_fingerprint**: Combined fingerprint (see DOM Fingerprint section)
3. **profile_key**: Combined profile bands (see Profile Bands section)

### Example

```
url_signature: "example.com/service/{id}"
dom_fingerprint: "article|1:5:3|Organization,WebPage"
profile_key: "medium:high:absent"

cluster_key: "example.com/service/{id}|article|1:5:3|Organization,WebPage|medium:high:absent"
cluster_id: SHA256(cluster_key) = "a1b2c3d4..."
```

## URL Signature Normalization

### Rules

1. Remove protocol (`http://`, `https://`)
2. Remove `www.` subdomain
3. Remove trailing slash
4. Lowercase
5. Remove query parameters
6. Remove fragments
7. Normalize path segments

### Examples

| Original URL | Normalized Signature |
|--------------|---------------------|
| `https://www.example.com/` | `example.com/` |
| `https://example.com/service/123` | `example.com/service/123` |
| `https://example.com/Service/123?ref=home` | `example.com/service/123` |
| `https://www.example.com/blog/post-title` | `example.com/blog/post-title` |

### URL Pattern Extraction

Dynamic segments are detected and replaced:
- Numeric segments → `{id}`
- UUID segments → `{uuid}`
- Other segments → kept as-is or `{slug}`

**Example**:
```
URL: /service/12345
Pattern: /service/{id}
```

## DOM Fingerprint

### Components

1. **Main tag pattern**: Inferred from heading structure
   - `article`: 1 H1, multiple H2s
   - `landing`: 1 H1, no H2/H3
   - `multi-h1`: Multiple H1s
   - `structured`: Many H2s/H3s
   - `default`: Other

2. **Heading outline**: Format `h1_count:h2_count:h3_count`
   - Example: `1:5:3` = 1 H1, 5 H2s, 3 H3s

3. **Schema types set**: Sorted list of JSON-LD `@type` values
   - Example: `Organization,WebPage,BreadcrumbList`

### Combined Fingerprint

```
fingerprint = mainTagPattern + "|" + headingOutline + "|" + schemaTypes.join(",")
```

**Example**:
```
article|1:5:3|Organization,WebPage
```

## Profile Bands

### Word Count Band

| Range | Band |
|-------|------|
| 0 - 300 | `low` |
| 300 - 1000 | `medium` |
| 1000 - 3000 | `high` |
| 3000+ | `very_high` |

**Configurable**: `CLUSTER_WORD_COUNT_LOW`, `CLUSTER_WORD_COUNT_MEDIUM`, `CLUSTER_WORD_COUNT_HIGH`

### Heading Count Band

Total headings (H1 + H2 + H3):

| Range | Band |
|-------|------|
| 0 - 3 | `low` |
| 3 - 8 | `medium` |
| 8 - 15 | `high` |
| 15+ | `very_high` |

**Configurable**: `CLUSTER_HEADING_COUNT_LOW`, `CLUSTER_HEADING_COUNT_MEDIUM`, `CLUSTER_HEADING_COUNT_HIGH`

### FAQ Presence Band

- `present`: FAQ schema type or FAQ-related headings found
- `absent`: No FAQ indicators

### Profile Key

Combined format: `wordCountBand:headingCountBand:faqPresenceBand`

**Example**: `medium:high:absent`

## Cluster Predicates

### Predicate Rules

#### 1. `isHomepage`

**True if**:
- URL is `/`, `/home`, or `/index`
- Canonical URL ends with `/` or `/home` or `/index`

**Example**:
```typescript
url: "https://example.com/"
isHomepage: true
```

#### 2. `isServiceTemplate`

**True if**:
- URL contains `/service` or `/services`
- URL pattern has numeric segments AND contains `/service`
- JSON-LD types include `Service` or `Offering`

**Example**:
```typescript
url: "https://example.com/services/web-design"
isServiceTemplate: true
```

#### 3. `isLocationTemplate`

**True if**:
- URL contains `/location`, `/locations`, `/city`, `/cities`, `/state`, `/states`
- URL pattern has numeric segments AND contains `/location` or `/city`
- JSON-LD types include `LocalBusiness` or `Place`

**Example**:
```typescript
url: "https://example.com/locations/new-york"
isLocationTemplate: true
```

#### 4. `isBlogTemplate`

**True if**:
- URL contains `/blog`, `/post`, `/article`, `/news`
- URL pattern has numeric or UUID segments
- JSON-LD types include `Article`, `BlogPosting`, or `NewsArticle`

**Example**:
```typescript
url: "https://example.com/blog/2024/my-post"
isBlogTemplate: true
```

#### 5. `isPolicyTemplate`

**True if**:
- URL contains `/policy`, `/policies`, `/privacy`, `/terms`, `/legal`, `/cookie`, `/gdpr`

**Example**:
```typescript
url: "https://example.com/privacy-policy"
isPolicyTemplate: true
```

#### 6. `hasFaqSection`

**True if**:
- JSON-LD types include `FAQ` or `Question`
- Headings contain "FAQ", "Frequently Asked", or "Questions"

**Example**:
```typescript
headings: ["Frequently Asked Questions"]
hasFaqSection: true
```

## Representative URLs

### Selection Method

1. **Primary**: Internal link count (from `Page.metadata.internalLinkCount`)
2. **Fallback**: Word count (if link count unavailable)

### Types

- **best**: Highest internal link count
- **typical**: Median internal link count
- **worst**: Lowest internal link count

### Storage

Representative URLs stored in `ClusterPageMap.representativeType`:
- `"best"`: Best representative
- `"typical"`: Typical representative
- `"worst"`: Worst representative
- `null`: Not a representative

## Storage

### Cluster Table

```typescript
{
  id: string
  scanId: string
  name: string              // Generated from predicates/URL pattern
  type: "template"
  clusterId: string        // SHA256 hash
  metadata: {
    urlSignature: string
    domFingerprint: string
    profileKey: string
    predicates: {
      isHomepage: boolean
      isServiceTemplate: boolean
      isLocationTemplate: boolean
      isBlogTemplate: boolean
      isPolicyTemplate: boolean
      hasFaqSection: boolean
    }
    profileBands: {
      wordCountBand: string
      headingCountBand: string
    }
  }
}
```

### ClusterPageMap Table

```typescript
{
  id: string
  clusterId: string
  pageId: string
  urlSignature: string
  representativeType: "best" | "typical" | "worst" | null
}
```

## Configuration

### Environment Variables

```env
CLUSTER_WORD_COUNT_LOW=300
CLUSTER_WORD_COUNT_MEDIUM=1000
CLUSTER_WORD_COUNT_HIGH=3000
CLUSTER_HEADING_COUNT_LOW=3
CLUSTER_HEADING_COUNT_MEDIUM=8
CLUSTER_HEADING_COUNT_HIGH=15
```

## Usage

```typescript
import { buildClusters } from '@/lib/cluster-build/worker'

const result = await buildClusters({
  scanId: 'scan_123',
  pageIds: ['page_1', 'page_2'], // Optional, clusters all pages if omitted
})

console.log(`Created ${result.clustersCreated} clusters`)
```

## Next Steps

1. Run migration to create ClusterPageMap table
2. Enhance DOM fingerprinting with full HTML parsing
3. Add more predicate rules
4. Improve representative URL selection with better heuristics

