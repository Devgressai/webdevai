# Overlap Score Computation (Offline/Build-Time)

## Overview

Overlap scores are computed **offline at build time** to avoid runtime performance issues. This document describes the computation methodology.

## Computation Method

### 1. Content Extraction

For each City×Industry hub page (`/{city}/industry/{industry}`):

1. Extract text content from:
   - Service links and descriptions
   - Case study references
   - Industry-specific content sections
   - Navigation elements

2. Extract from parent pages:
   - City page (`/{city}`): Industry sections, service listings
   - Industry page (`/industries/{industry}`): City sections, service listings

### 2. Similarity Calculation

**Method: SimHash or Jaccard Similarity**

#### Option A: SimHash (Recommended for Performance)
- Generate SimHash fingerprints for hub page and parent pages
- Calculate Hamming distance between fingerprints
- Convert to similarity score (0.0-1.0)

#### Option B: Jaccard Similarity
- Tokenize content into shingles (n-grams)
- Calculate Jaccard coefficient: `|A ∩ B| / |A ∪ B|`
- Result is overlap score (0.0-1.0)

### 3. Section-Based Comparison

Compare specific sections:
- **Service Links:** Compare service link sets (Jaccard similarity)
- **Content Sections:** Compare text content (cosine similarity or TF-IDF)
- **Case Studies:** Compare case study references
- **Navigation:** Compare navigation structure

Weighted average:
```
overlapScore = (
  serviceLinksWeight * serviceLinksSimilarity +
  contentWeight * contentSimilarity +
  caseStudiesWeight * caseStudiesSimilarity +
  navigationWeight * navigationSimilarity
) / totalWeight
```

### 4. Downstream Pages Count

Count City×Industry×Service pages:
- Total count: All pages matching `/{city}/industry/{industry}/{service}`
- Indexable count: Pages where `getSeoDirectives().index === true`

## Implementation Notes

### Build-Time Script

```typescript
// scripts/compute-overlap-scores.ts
async function computeOverlapScores() {
  const store: OverlapStore = {}
  
  for (const city of citySlugs) {
    for (const industry of industrySlugs) {
      const hubUrl = `/${city}/industry/${industry}`
      
      // Fetch page content (build-time)
      const hubContent = await fetchPageContent(hubUrl)
      const cityContent = await fetchPageContent(`/${city}`)
      const industryContent = await fetchPageContent(`/industries/${industry}`)
      
      // Compute overlaps
      const cityOverlap = computeSimilarity(hubContent, cityContent)
      const industryOverlap = computeSimilarity(hubContent, industryContent)
      
      // Count downstream pages
      const downstreamPages = await countDownstreamPages(city, industry)
      
      store[hubUrl] = {
        cityOverlap,
        industryOverlap,
        downstreamPages,
        computedAt: new Date().toISOString()
      }
    }
  }
  
  // Write to JSON file
  await writeFile('lib/seo/overlap-store.json', JSON.stringify(store, null, 2))
}
```

### Similarity Functions

```typescript
function computeSimilarity(contentA: string, contentB: string): number {
  // Option 1: SimHash
  const hashA = simhash(contentA)
  const hashB = simhash(contentB)
  const distance = hammingDistance(hashA, hashB)
  return 1 - (distance / 64) // Normalize to 0.0-1.0
  
  // Option 2: Jaccard
  const shinglesA = getShingles(contentA, 3)
  const shinglesB = getShingles(contentB, 3)
  const intersection = new Set([...shinglesA].filter(x => shinglesB.has(x)))
  const union = new Set([...shinglesA, ...shinglesB])
  return intersection.size / union.size
}
```

## Update Frequency

- **Initial computation:** Run at build time before deployment
- **Re-computation:** When:
  - City page content changes significantly
  - Industry page content changes significantly
  - Hub page content changes significantly
  - Downstream pages are added/removed

## Thresholds

- **Redundancy threshold:** `overlapScore >= 0.80` (80% overlap)
- **Unique navigation:** `overlapScore < 0.80` AND `downstreamPages >= 3`

## Validation

Before deployment, validate:
- All City×Industry hub URLs have overlap scores
- Scores are in valid range (0.0-1.0)
- `computedAt` timestamps are recent (<30 days recommended)
- Downstream page counts are accurate
