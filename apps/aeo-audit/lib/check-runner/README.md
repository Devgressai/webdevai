# Check Runner Implementation

## Overview

The Check Runner job runs rubric-based checks, calculates scores with caps, generates issues, and creates report snapshots.

## Process Flow

```
1. Load rubric.json
   ↓
2. Get all checks from rubric (or filtered by checkTypes)
   ↓
3. Compute checks using Page + Cluster metrics
   ↓
4. Calculate category scores (with caps)
   ↓
5. Calculate pillar scores (weighted)
   ↓
6. Calculate overall score (site_type weighted)
   ↓
7. Generate issues from triggered checks
   ↓
8. Persist issues to database
   ↓
9. Create report snapshot
```

## Check Computation

### Deterministic Checks

Checks are computed using extracted Page and Cluster metrics:

1. **Sitemap present/valid**: Not implemented (would need sitemap data)
2. **Status code health**: Percentage of pages with 2xx status codes
3. **Title coverage**: Percentage of pages with title tags
4. **Canonical present rate**: Percentage of pages with canonical URLs
5. **Schema org present**: Percentage of pages with Organization schema
6. **Schema validity**: Percentage of parseable JSON-LD blocks
7. **Alt coverage**: Percentage of images with alt text

### Check Scoring

Each check returns a score on a **0-5 scale**:
- **5**: Perfect (100% coverage/passing)
- **4**: Good (80%+ coverage)
- **3**: Fair (60%+ coverage)
- **2**: Poor (40%+ coverage)
- **1**: Very Poor (20%+ coverage)
- **0**: Failing (< 20% coverage)

### Check Triggering

A check is **triggered** (issue code activated) when:
- Coverage/passing rate falls below a threshold
- Thresholds vary by check (e.g., 80% for JSON-LD, 100% for title)

## Category Score Calculation

### Formula

```
CategoryScore = avg(check_scores_0_5) * 20
```

**Example**:
- Check 1: 4.0
- Check 2: 3.5
- Check 3: 5.0
- Average: 4.17
- Category Score: 4.17 * 20 = **83.4**

### Caps Application

**When issue codes are triggered**, caps are applied:

```typescript
if (checkResult.triggered) {
  score = Math.max(0, score * 0.5) // Cap to 50% of original score
  capped = true
}
```

**Example**:
- Original check score: 4.0
- Issue triggered: true
- Capped score: 4.0 * 0.5 = **2.0**

**Impact**: Triggered issues reduce category scores by up to 50%.

## Pillar Score Calculation

### Formula

Pillar scores use **weighted average** of category scores:

```
PillarScore = Σ(categoryScore * categoryWeight) / Σ(categoryWeight)
```

**Example**:
- Category 1: Score 80, Weight 0.4
- Category 2: Score 70, Weight 0.6
- Pillar Score: (80 * 0.4 + 70 * 0.6) / (0.4 + 0.6) = **74.0**

## Overall Score Calculation

### Formula

Overall score uses **site_type weighting** for pillars:

```
OverallScore = Σ(pillarScore * siteTypeWeight) / Σ(siteTypeWeight)
```

### Site Type Weights

**Corporate** (default):
- structured_data: 0.3
- content_structure: 0.25
- metadata: 0.2
- ai_readiness: 0.25

**Ecommerce**:
- structured_data: 0.35
- content_structure: 0.2
- metadata: 0.25
- ai_readiness: 0.2

**Blog**:
- structured_data: 0.2
- content_structure: 0.3
- metadata: 0.25
- ai_readiness: 0.25

**Default**:
- structured_data: 0.25
- content_structure: 0.25
- metadata: 0.2
- ai_readiness: 0.3

## Issue Generation

### Issue Scope

Issues can have three scopes:

1. **site**: Affects entire site (majority of pages)
2. **cluster**: Affects specific cluster
3. **page**: Affects individual pages

### Issue Data

Each issue includes:

- **scope**: `'site' | 'cluster' | 'page'`
- **affectedCount**: Number of pages/clusters affected
- **evidencePointers**: Array of Evidence IDs
- **priorityScore**: `(impact * confidence) / effort`
- **clusterId**: Cluster ID (if cluster-level)
- **pageIds**: Array of page IDs (if page-level)

### Priority Score Calculation

**Formula**: `(impact * confidence) / effort`

**Components**:
- **impact**: Based on severity
  - `critical`: 4
  - `high`: 3
  - `medium`: 2
  - `low`: 1

- **confidence**: Based on check score (inverse)
  - Lower check score = higher confidence issue exists
  - Formula: `(5 - checkScore) / 5`

- **effort**: Estimated effort to fix (default: 1)
  - Could be enhanced with effort data from rubric

**Example**:
- Severity: `high` → impact = 3
- Check score: 2.0 → confidence = (5 - 2) / 5 = 0.6
- Effort: 1
- Priority score: (3 * 0.6) / 1 = **1.8**

### Issue Persistence

Issues are persisted with:
- Issue code, severity, title, description from rubric
- Metadata: scope, affectedCount, evidencePointers, priorityScore
- Links to pages/clusters via join tables

## Report Snapshot

### Report Structure

```typescript
{
  scanId: string
  overallScore: number (0-100)
  siteType: string
  rubricVersion: string
  scores: {
    pillars: Array<{
      pillarId: string
      score: number
      categories: Array<{
        categoryId: string
        score: number
        checks: Array<{
          checkId: string
          score: number
          capped: boolean
        }>
      }>
    }>
  }
  metadata: {
    checkResults: Array<{
      checkId: string
      issueCode: string
      score: number
      triggered: boolean
    }>
    issuesGenerated: number
    timestamp: string
  }
}
```

## Configuration

### Environment Variables

```env
CHECK_RUNNER_SAMPLE_SIZE=10        # Pages to sample for schema validity
CHECK_RUNNER_SITE_TYPE=corporate   # Site type for weighting
CHECK_RUNNER_MIN_CONFIDENCE=0.7    # Minimum confidence for issues
```

## Usage

```typescript
import { runChecks } from '@/lib/check-runner/worker'

const result = await runChecks({
  scanId: 'scan_123',
  pageId: undefined, // Optional: specific page
  checkTypes: undefined, // Optional: filter checks
})

console.log(`Overall score: ${result.overallScore}`)
console.log(`Issues generated: ${result.issuesGenerated}`)
```

## Next Steps

1. Run migration to create Report table
2. Enhance check computation with more metrics
3. Improve scope detection (site/cluster/page)
4. Add effort estimation from rubric
5. Add sitemap validation checks

