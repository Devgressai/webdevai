# Monitoring Implementation Summary

## Created Files

### Database Schema
1. `prisma/schema.prisma` (updated)
   - Added `Domain` model
   - Added `ScanSnapshot` model (immutable snapshots)
   - Added `AlertRule` model
   - Added `Alert` model
   - Updated `Scan` model with `domainId` relation

### Core Monitoring
2. `lib/monitoring/snapshot.ts`
   - Create immutable scan snapshots
   - Get latest/previous snapshots
   - Snapshot data structure

3. `lib/monitoring/diff.ts`
   - Diff engine comparing snapshots
   - Score deltas
   - Issue deltas (new/resolved)
   - Cluster deltas (new/removed/regressed/improved)

4. `lib/monitoring/alerts.ts`
   - Alert rule evaluation
   - Alert creation
   - Severity determination
   - Message generation

5. `lib/monitoring/scheduled-scan.ts`
   - Scheduled scan job handler
   - Scan completion processing
   - Snapshot + diff + alerts workflow

6. `lib/monitoring/scheduler.ts`
   - Repeatable job setup
   - Add/remove scheduled scans
   - Daily cron pattern

7. `lib/monitoring/index.ts`
   - Central exports

### Worker Integration
8. `lib/queues/workers.ts` (updated)
   - Scheduled scan worker
   - Report build worker calls `processScanCompletion`

9. `lib/queues/types.ts` (updated)
   - Added `SCHEDULED_SCAN` queue name
   - Added `ScheduledScanPayload` type

### UI
10. `app/domains/[domainId]/monitoring/page.tsx`
    - Server component for monitoring page
    - Fetches domain, scans, snapshots, alerts

11. `app/domains/[domainId]/monitoring/client.tsx`
    - Client component for monitoring UI
    - Shows trends and "what changed"

### Documentation
12. `lib/monitoring/README.md`
    - Implementation guide
    - Usage examples
    - Alert rule configuration

## Key Features

### 1. Immutable Scan Snapshots

**Purpose**: Store point-in-time snapshots for comparison

**Data Captured**:
- Overall score
- Pillar scores
- Issue counts (by severity)
- Cluster counts (by type)
- Page count
- Timestamp

**Storage**: `ScanSnapshot` table with JSON `snapshotData`

### 2. Diff Engine

**Compares**:
- Overall score delta (absolute and percent)
- Pillar score deltas
- New issues (in current but not previous)
- Resolved issues (in previous but not current)
- Cluster changes:
  - New clusters
  - Removed clusters
  - Regressed clusters (page count decreased)
  - Improved clusters (page count increased)
- Page count delta

**Output**: `ScanDiff` object with all changes

### 3. Alert Rules

**Rule Types**:
1. **score_drop**: Overall score drops
   - Threshold: `dropAmount` (points) or `dropPercent` (%)
2. **new_issue**: New issues detected
   - Threshold: `minSeverity` (critical/high/medium/low)
3. **issue_resolved**: Issues resolved (positive)
   - No threshold needed
4. **cluster_regression**: Clusters regress
   - Threshold: `clusterCount` (number of regressed clusters)
5. **pillar_score_drop**: Specific pillar score drops
   - Threshold: `pillarId` and `dropAmount`

**Storage**: `AlertRule` table with JSON `threshold`

### 4. Alerts

**Storage**: `Alert` table
- Status: pending, acknowledged, resolved
- Severity: low, medium, high, critical
- Message: Auto-generated based on rule type
- Context: Diff data and scan info

**No Email Sending Yet**: Alerts are stored but not sent

### 5. Scheduled Scans

**Implementation**: BullMQ repeatable jobs
- Pattern: `0 0 * * *` (daily at midnight UTC)
- One job per domain
- Creates scan and enqueues `scan_orchestrator`

**Setup**:
```typescript
await setupScheduledScans() // Setup all domains
await addScheduledScan(domainId) // Add for domain
await removeScheduledScan(domainId) // Remove for domain
```

## Diff Logic

### Score Deltas

```typescript
delta = currentScore - previousScore
deltaPercent = (delta / previousScore) * 100
```

### Issue Comparison

**New Issues**:
- In current scan but not in previous scan
- Identified by `issueCode`

**Resolved Issues**:
- In previous scan but not in current scan
- Identified by `issueCode`

### Cluster Comparison

**New**: Cluster exists in current but not previous
**Removed**: Cluster exists in previous but not current
**Regressed**: Page count decreased
**Improved**: Page count increased

## Monitoring UI

**Route**: `/domains/[domainId]/monitoring`

**Sections**:
1. **Overall Score Trend**
   - Current score
   - Previous score
   - Change (delta and percent)

2. **Pillar Score Changes**
   - List of pillar deltas
   - Color-coded (green/red)

3. **New Issues**
   - List of new issues with severity badges

4. **Resolved Issues**
   - List of resolved issues (green checkmarks)

5. **Template Changes**
   - Cluster changes with status

6. **Active Alerts**
   - Pending alerts with severity

## Data Flow

### Scan Completion Flow

```
1. Scan completes
   ↓
2. Report built
   ↓
3. processScanCompletion() called
   ↓
4. Create snapshot
   ↓
5. Get previous snapshot
   ↓
6. Generate diff
   ↓
7. Evaluate alert rules
   ↓
8. Create alerts (if triggered)
```

### Scheduled Scan Flow

```
1. Repeatable job triggers (daily)
   ↓
2. handleScheduledScan() called
   ↓
3. Create new scan record
   ↓
4. Enqueue scan_orchestrator
   ↓
5. Scan runs through pipeline
   ↓
6. On completion, snapshot + diff + alerts created
```

## Alert Rule Examples

### Score Drop Alert

```json
{
  "name": "Score Drop Alert",
  "ruleType": "score_drop",
  "threshold": {
    "dropAmount": 5,
    "dropPercent": 10
  },
  "enabled": true
}
```

### New Critical Issue Alert

```json
{
  "name": "Critical Issue Alert",
  "ruleType": "new_issue",
  "threshold": {
    "minSeverity": "critical"
  },
  "enabled": true
}
```

### Cluster Regression Alert

```json
{
  "name": "Cluster Regression",
  "ruleType": "cluster_regression",
  "threshold": {
    "clusterCount": 2
  },
  "enabled": true
}
```

## Usage

### Setup Monitoring for Domain

```typescript
// 1. Create domain
const domain = await prisma.domain.create({
  data: {
    domain: 'example.com',
    displayName: 'Example Site',
  },
})

// 2. Link scan to domain
await prisma.scan.update({
  where: { id: scanId },
  data: { domainId: domain.id },
})

// 3. Setup scheduled scans
await addScheduledScan(domain.id)
```

### Create Alert Rule

```typescript
await prisma.alertRule.create({
  data: {
    domainId: domain.id,
    name: 'Score Drop Alert',
    ruleType: 'score_drop',
    threshold: {
      dropAmount: 5,
      dropPercent: 10,
    },
    enabled: true,
  },
})
```

## Next Steps

1. Add email sending for alerts
2. Add alert acknowledgment UI
3. Add alert resolution workflow
4. Add more alert rule types
5. Add alert history/archiving
6. Add notification preferences
7. Add webhook support

