# Compare Scans Feature

## Created Files

### Backend
1. `lib/scans/compare.ts` - Core diff computation logic
2. `app/api/scans/compare/route.ts` - API endpoint for fetching comparison data
3. `app/api/scans/compare/urls/route.ts` - API endpoint for getting changed URLs
4. `app/api/scans/compare/urls/export.csv/route.ts` - API endpoint for CSV export

### Frontend
5. `app/scans/compare/page.tsx` - Compare scans page (server component)
6. `app/scans/compare/client.tsx` - Compare scans client component (interactive UI)

### Documentation
7. `COMPARE_SCANS_SUMMARY.md` - This file

## Routes

- `/scans/compare?from=SCAN_ID&to=SCAN_ID` - Compare scans page

## API Endpoints

- `GET /api/scans/compare?from=SCAN_ID&to=SCAN_ID` - Get comparison data
- `GET /api/scans/compare/urls?from=SCAN_ID&to=SCAN_ID&issueCode=ISSUE_CODE` - Get changed URLs for an issue
- `GET /api/scans/compare/urls/export.csv?from=SCAN_ID&to=SCAN_ID&issueCode=ISSUE_CODE` - Export changed URLs as CSV

## Diff Object Shape

### `ScanCompareResult` Interface

```typescript
interface ScanCompareResult {
  fromScanId: string
  toScanId: string
  fromScan: {
    id: string
    targetUrl: string
    createdAt: Date
    completedAt: Date | null
  }
  toScan: {
    id: string
    targetUrl: string
    createdAt: Date
    completedAt: Date | null
  }
  overallScoreDelta: number
  overallScoreDeltaPercent: number
  fromOverallScore: number
  toOverallScore: number
  pillarScoreDeltas: ScoreDelta[]
  newIssues: IssueDelta[]
  resolvedIssues: IssueDelta[]
  regressedClusters: ClusterDelta[]
  improvedClusters: ClusterDelta[]
  newClusters: ClusterDelta[]
  removedClusters: ClusterDelta[]
  pageCountDelta: number
  fromPageCount: number
  toPageCount: number
}
```

### `ScoreDelta` Interface

```typescript
interface ScoreDelta {
  pillarId: string
  previousScore: number
  currentScore: number
  delta: number
  deltaPercent: number
}
```

### `IssueDelta` Interface

```typescript
interface IssueDelta {
  issueCode: string
  issueId: string
  status: 'new' | 'resolved' | 'unchanged'
  severity: string
  title: string
}
```

### `ClusterDelta` Interface

```typescript
interface ClusterDelta {
  clusterId: string
  clusterName: string
  status: 'new' | 'removed' | 'regressed' | 'improved'
  pageCountDelta: number
  metrics?: Record<string, number>
}
```

## Features

### Overall Score Delta
- Shows score change between two scans
- Displays percentage change
- Color-coded (green for positive, red for negative)

### Pillar Score Deltas
- Shows score changes for each pillar
- Displays previous → current scores
- Shows delta and percentage change

### New Issues
- Lists issues that appeared in the "to" scan but not in the "from" scan
- Shows issue code, title, and severity
- Includes "Export URLs" button for each issue

### Resolved Issues
- Lists issues that were in the "from" scan but resolved in the "to" scan
- Shows issue code

### Regressed Clusters
- Shows clusters that have fewer pages in the "to" scan
- Sorted by page count delta (most regressed first)
- Limited to top 10

### Improved Clusters
- Shows clusters that have more pages in the "to" scan
- Sorted by page count delta (most improved first)
- Limited to top 10

### Page Count Delta
- Shows total page count change between scans
- Displays from → to page counts
- Shows delta

### CSV Export
- Export changed URLs for a specific issue
- Includes URL and status (new/resolved/unchanged)
- Downloadable CSV file

## Usage

### Compare Two Scans

Navigate to:
```
/scans/compare?from=SCAN_ID_1&to=SCAN_ID_2
```

### Export Changed URLs

Click "Export URLs" button next to any issue in the "New Issues" section.

The CSV will include:
- URL
- Status (new/resolved/unchanged)

## Backend Functions

### `computeDiff(fromScanId, toScanId)`

Main function for computing diff between two scans.

**Returns**: `ScanCompareResult`

**Process**:
1. Fetches both scans and their reports
2. Calculates overall score delta
3. Calculates pillar score deltas
4. Compares issues (new/resolved)
5. Compares clusters (regressed/improved/new/removed)
6. Calculates page count delta

### `getChangedUrlsForIssue(fromScanId, toScanId, issueCode)`

Gets changed URLs for a specific issue between two scans.

**Returns**: Array of `{ url: string, status: 'new' | 'resolved' | 'unchanged' }`

**Process**:
1. Finds issue in both scans
2. Collects URLs from page-level and cluster-level mappings
3. Determines status (new/resolved/unchanged)

## Integration

The compare feature integrates with:
- Existing diff utilities in `lib/monitoring/diff.ts`
- Rubric loader for pillar names
- Report data for scores
- Issue and cluster data for comparisons

## Error Handling

- Validates that both scan IDs are provided
- Validates that scans exist
- Validates that scans have reports
- Returns appropriate error messages

## UI Design

- Consistent with audit tool design (dark theme)
- Color-coded deltas (green for positive, red for negative)
- Clear section headers
- Responsive layout
- Loading and error states

