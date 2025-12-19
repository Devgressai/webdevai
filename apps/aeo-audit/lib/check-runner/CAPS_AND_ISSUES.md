# Caps Application and Issue Generation

## How Caps Are Applied

### Cap Mechanism

Caps are applied to **check scores** when issue codes are triggered:

```typescript
// Original check score (0-5 scale)
let score = checkResult.score

// Apply cap if issue triggered
if (checkResult.triggered) {
  score = Math.max(0, score * 0.5) // Reduce to 50% of original
  capped = true
}
```

### Cap Impact on Category Scores

**Before Cap**:
- Check 1: 4.0 (not triggered)
- Check 2: 3.5 (triggered)
- Check 3: 5.0 (not triggered)
- Average: (4.0 + 3.5 + 5.0) / 3 = 4.17
- Category Score: 4.17 * 20 = **83.4**

**After Cap**:
- Check 1: 4.0 (not triggered)
- Check 2: 1.75 (3.5 * 0.5, capped)
- Check 3: 5.0 (not triggered)
- Average: (4.0 + 1.75 + 5.0) / 3 = 3.58
- Category Score: 3.58 * 20 = **71.6**

**Impact**: Category score reduced by **11.8 points** (14% reduction)

### Cap Rules

1. **Trigger Condition**: Issue code is triggered when check fails threshold
2. **Cap Amount**: Score reduced to 50% of original
3. **Minimum**: Score cannot go below 0
4. **Multiple Triggers**: Each triggered check is capped independently

### Example: Multiple Caps

**Scenario**: 3 checks in a category, 2 triggered

- Check 1: 4.0 → 4.0 (not triggered)
- Check 2: 3.0 → 1.5 (triggered, capped)
- Check 3: 2.0 → 1.0 (triggered, capped)

**Category Score**:
- Before: (4.0 + 3.0 + 2.0) / 3 * 20 = **60.0**
- After: (4.0 + 1.5 + 1.0) / 3 * 20 = **43.3**
- Reduction: **16.7 points** (28% reduction)

## How Issues Are Generated

### Issue Generation Flow

```
1. Check Result (triggered = true)
   ↓
2. Lookup Issue Definition (from issues.json)
   ↓
3. Determine Scope (site/cluster/page)
   ↓
4. Calculate Affected Count
   ↓
5. Get Evidence Pointers
   ↓
6. Calculate Priority Score
   ↓
7. Persist Issue Record
   ↓
8. Link to Pages/Clusters
```

### Scope Determination

**Current Logic** (simplified):
- Default: `'site'` (affects majority of pages)
- Could be enhanced to detect cluster/page patterns

**Future Enhancement**:
- Analyze affected pages to detect clusters
- Identify page-specific issues

### Affected Count Calculation

**Site-level**:
```typescript
// Use evidence metadata
const totalPages = metadata.totalPages
const pagesWithX = metadata.pagesWithX
const affectedCount = totalPages - pagesWithX

// Fallback: estimate from score
const affectedRate = (5 - checkScore) / 5
const affectedCount = Math.round(totalPages * affectedRate)
```

**Cluster-level**:
- Count pages in affected cluster

**Page-level**:
- Count specific affected pages

### Evidence Pointers

Evidence pointers are **Evidence IDs** that support the issue:

```typescript
// Find evidence records matching check result evidence
const evidenceRecords = await prisma.evidence.findMany({
  where: {
    page: { scanId },
    type: evidence.type, // e.g., 'coverage_metric'
  },
  take: 5, // Limit to 5 evidence records
})

const evidencePointers = evidenceRecords.map(e => e.id)
```

### Priority Score Calculation

**Formula**: `(impact * confidence) / effort`

**Example 1: High Priority Issue**
- Severity: `critical` → impact = 4
- Check score: 1.0 → confidence = (5 - 1) / 5 = 0.8
- Effort: 1
- Priority: (4 * 0.8) / 1 = **3.2**

**Example 2: Low Priority Issue**
- Severity: `low` → impact = 1
- Check score: 4.0 → confidence = (5 - 4) / 5 = 0.2
- Effort: 1
- Priority: (1 * 0.2) / 1 = **0.2**

**Priority Ranges**:
- **High** (2.0+): Critical/high severity, low check score
- **Medium** (1.0-2.0): Medium severity, moderate check score
- **Low** (< 1.0): Low severity, high check score

### Issue Persistence

**Issue Record**:
```typescript
{
  scanId: string
  issueCode: string
  severity: string
  title: string
  description: string
  metadata: {
    scope: 'site' | 'cluster' | 'page'
    affectedCount: number
    evidencePointers: string[]
    priorityScore: number
    clusterId?: string
    pageIds?: string[]
  }
}
```

**Join Tables**:
- **IssuePageMap**: Links issues to pages (if page-level)
- **IssueClusterMap**: Links issues to clusters (if cluster-level)

### Issue Generation Examples

**Example 1: Site-wide Missing JSON-LD**
```typescript
{
  issueCode: "MISSING_JSONLD",
  scope: "site",
  affectedCount: 45, // 45 out of 50 pages missing JSON-LD
  evidencePointers: ["evid_1", "evid_2"],
  priorityScore: 2.4,
  pageIds: undefined
}
```

**Example 2: Cluster-specific Schema Issue**
```typescript
{
  issueCode: "INCOMPLETE_SCHEMA",
  scope: "cluster",
  affectedCount: 12, // 12 pages in cluster
  evidencePointers: ["evid_3"],
  priorityScore: 1.8,
  clusterId: "cluster_123"
}
```

**Example 3: Page-specific Title Issue**
```typescript
{
  issueCode: "MISSING_TITLE",
  scope: "page",
  affectedCount: 1,
  evidencePointers: ["evid_4"],
  priorityScore: 3.2,
  pageIds: ["page_456"]
}
```

## Summary

### Caps
- **Applied**: When issue code is triggered
- **Amount**: 50% reduction of check score
- **Impact**: Reduces category scores proportionally
- **Multiple**: Each triggered check capped independently

### Issues
- **Generated**: From triggered check results
- **Scope**: site/cluster/page (determined automatically)
- **Priority**: Calculated from severity, confidence, effort
- **Evidence**: Linked via evidence pointers
- **Persistence**: Stored with full metadata and join table links

