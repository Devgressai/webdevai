# Monitoring Implementation

## Overview

Monitoring system tracks scan changes over time, generates diffs, and evaluates alert rules.

## Components

### 1. Scan Snapshots

**Purpose**: Immutable snapshots of scan state for comparison

**Storage**: `ScanSnapshot` table
- `snapshotData`: Full snapshot JSON
- `overallScore`: Overall score at snapshot time
- `pillarScores`: Pillar scores JSON
- `issueCounts`: Issue counts by severity
- `clusterCounts`: Cluster counts

**Creation**: Automatically created when scan completes

### 2. Diff Engine

**Purpose**: Compare two scan snapshots to identify changes

**Compares**:
- Overall score delta
- Pillar score deltas
- New issues
- Resolved issues
- Cluster changes (new/removed/regressed/improved)
- Page count changes

**Output**: `ScanDiff` object with all deltas

### 3. Alert Rules

**Purpose**: Define conditions that trigger alerts

**Rule Types**:
- `score_drop`: Overall score drops below threshold
- `new_issue`: New issues detected (with severity filter)
- `issue_resolved`: Issues resolved (positive signal)
- `cluster_regression`: Clusters regress
- `pillar_score_drop`: Specific pillar score drops

**Storage**: `AlertRule` table
- `ruleType`: Type of rule
- `threshold`: Rule-specific threshold data (JSON)
- `enabled`: Whether rule is active

### 4. Alerts

**Purpose**: Store triggered alerts (no email sending yet)

**Storage**: `Alert` table
- `status`: pending, acknowledged, resolved
- `severity`: low, medium, high, critical
- `message`: Alert message
- `context`: Alert context data (JSON)

**Creation**: Automatically created when alert rule triggers

### 5. Scheduled Scans

**Purpose**: Automatically run scans on schedule

**Implementation**: BullMQ repeatable jobs
- Pattern: Daily at midnight UTC (`0 0 * * *`)
- One job per domain
- Creates new scan and enqueues `scan_orchestrator`

## Data Flow

```
1. Scan completes
   ↓
2. Create snapshot (immutable)
   ↓
3. Get previous snapshot (if exists)
   ↓
4. Generate diff
   ↓
5. Evaluate alert rules
   ↓
6. Create alerts (if rules trigger)
```

## Scheduled Scan Flow

```
1. Repeatable job triggers (daily)
   ↓
2. Create new scan record
   ↓
3. Enqueue scan_orchestrator job
   ↓
4. Scan runs through normal pipeline
   ↓
5. On completion, snapshot + diff + alerts created
```

## Usage

### Setup Scheduled Scans

```typescript
import { setupScheduledScans } from '@/lib/monitoring/scheduler'

// Setup all domains
await setupScheduledScans()

// Add for specific domain
await addScheduledScan(domainId)

// Remove for specific domain
await removeScheduledScan(domainId)
```

### Create Snapshot

```typescript
import { createScanSnapshot } from '@/lib/monitoring/snapshot'

const snapshotId = await createScanSnapshot(scanId)
```

### Generate Diff

```typescript
import { diffScans } from '@/lib/monitoring/diff'

const diff = await diffScans(
  previousScanId,
  currentScanId,
  previousSnapshot,
  currentSnapshot,
  prisma
)
```

### Evaluate Alerts

```typescript
import { evaluateAlertRules } from '@/lib/monitoring/alerts'

await evaluateAlertRules({
  scanId,
  domainId,
  diff,
  currentScore,
  previousScore,
})
```

## Alert Rule Configuration

### Score Drop Rule

```json
{
  "ruleType": "score_drop",
  "threshold": {
    "dropAmount": 5,
    "dropPercent": 10
  }
}
```

Triggers when score drops by 5 points OR 10% (whichever is more severe).

### New Issue Rule

```json
{
  "ruleType": "new_issue",
  "threshold": {
    "minSeverity": "high"
  }
}
```

Triggers when new issues with severity >= "high" are detected.

### Cluster Regression Rule

```json
{
  "ruleType": "cluster_regression",
  "threshold": {
    "clusterCount": 2
  }
}
```

Triggers when 2+ clusters regress.

### Pillar Score Drop Rule

```json
{
  "ruleType": "pillar_score_drop",
  "threshold": {
    "pillarId": "structured_data",
    "dropAmount": 5
  }
}
```

Triggers when specific pillar score drops by 5+ points.

## Monitoring UI

**Route**: `/domains/[domainId]/monitoring`

**Shows**:
- Overall score trend
- Score deltas (current vs previous)
- Pillar score changes
- New issues
- Resolved issues
- Cluster changes
- Active alerts

## Database Schema

### Domain
- Tracks domains for monitoring
- Links to scans and alert rules

### ScanSnapshot
- Immutable snapshots
- Links to scan

### AlertRule
- Alert rule definitions
- Links to domain

### Alert
- Triggered alerts
- Links to alert rule and domain

## Next Steps

1. Add email sending for alerts
2. Add alert acknowledgment UI
3. Add alert resolution workflow
4. Add more alert rule types
5. Add alert history/archiving
6. Add alert notification preferences
7. Add webhook support for alerts

