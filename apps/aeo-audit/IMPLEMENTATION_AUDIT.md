# Implementation Audit - Full Pipeline

## A) Checklist of Missing Items and Implementation

### ✅ Implemented

1. **scan_orchestrator worker** - ✅ Implemented
   - Created `lib/scans/orchestrator.ts` with full orchestration logic
   - Enqueues URL discovery job
   - Handles budget checks
   - Updates scan status to "running"

2. **Job chaining** - ✅ Implemented
   - `url_discovery` → enqueues `page_fetch` for each discovered URL
   - `page_fetch` → enqueues `extract_parse` after successful fetch
   - `extract_parse` → enqueues `cluster_build` when all pages extracted
   - `cluster_build` → enqueues `check_runner` after clustering
   - `check_runner` → enqueues `report_build` after checks complete
   - `report_build` → marks scan as completed

3. **Scan status transitions** - ✅ Implemented
   - Created `lib/scans/status.ts` with status management utilities
   - `pending` → `running` (orchestrator)
   - `running` → `completed` (report_build)
   - `running` → `failed` (on errors)
   - `running` → `completed_with_limits` (on budget limits)

4. **report_build worker** - ✅ Implemented
   - Created `lib/scans/report-builder.ts`
   - Finalizes scan status
   - Handles budget limit detection
   - Processes scan completion for monitoring

5. **UI pages** - ✅ Implemented
   - `/scans/new` - Wired to POST /api/scans
   - `/scans` - Fetches real scans from database
   - Created `app/scans/new/client.tsx` for form handling

6. **Error handling** - ✅ Implemented
   - Status transitions on errors
   - Failure reasons stored in metadata
   - Budget limit detection and reporting
   - Partial completion handling

7. **HTML storage** - ✅ Implemented
   - Page fetch stores HTML in Page.metadata.html
   - Extract parse retrieves HTML from metadata or payload

8. **Extract completion detection** - ✅ Implemented
   - `checkAllPagesExtracted()` function checks if all pages are extracted
   - Triggers cluster_build only when all pages are ready

### ⚠️ Not Required for MVP (Per Requirements)

- LLM evaluation (stub exists, not required for MVP)
- Playwright rendering (exists, not required for MVP)
- Monitoring alerts (exists, not required for MVP)
- Advanced alerting (exists, not required for MVP)

## B) Files Created or Modified

### Created Files

1. `apps/aeo-audit/lib/scans/status.ts` - Scan status transition utilities
2. `apps/aeo-audit/lib/scans/orchestrator.ts` - Scan orchestration logic
3. `apps/aeo-audit/lib/scans/report-builder.ts` - Report building and scan finalization
4. `apps/aeo-audit/app/scans/new/client.tsx` - Client component for new scan form

### Modified Files

1. `apps/aeo-audit/lib/queues/workers.ts` - Implemented scan_orchestrator and report_build workers
2. `apps/aeo-audit/lib/url-discovery/worker.ts` - Added job chaining to enqueue page_fetch
3. `apps/aeo-audit/lib/page-fetch/worker.ts` - Added job chaining to enqueue extract_parse, stores HTML in metadata
4. `apps/aeo-audit/lib/extract-parse/worker.ts` - Added job chaining to enqueue cluster_build, added completion detection
5. `apps/aeo-audit/lib/cluster-build/worker.ts` - Added job chaining to enqueue check_runner, fixed syntax error
6. `apps/aeo-audit/lib/check-runner/worker.ts` - Added job chaining to enqueue report_build
7. `apps/aeo-audit/app/scans/new/page.tsx` - Wired to use client component
8. `apps/aeo-audit/app/scans/page.tsx` - Replaced stub with real database query

## C) Steps to Run End-to-End Scan Locally

### Prerequisites

1. PostgreSQL database running
2. Redis server running
3. Environment variables set (see `ENV.md`)

### Setup

```bash
cd apps/aeo-audit

# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate
```

### Run

**Terminal 1 - UI:**
```bash
npm run dev
```

**Terminal 2 - Workers:**
```bash
npm run worker
```

### Create and Verify Scan

1. **Open browser**: `http://localhost:3000`
2. **Navigate to**: `/scans/new`
3. **Enter domain**: e.g., `example.com` or `https://example.com`
4. **Click**: "Create Scan"
5. **Verify**:
   - Redirects to `/scans/[scanId]`
   - Scan status shows "running" initially
   - Watch worker logs for job processing:
     - `[Scan Orchestrator]` - Starts scan
     - `[URL Discovery]` - Discovers URLs
     - `[Page Fetch]` - Fetches pages
     - `[Extract Parse]` - Extracts metadata
     - `[Cluster Build]` - Groups pages
     - `[Check Runner]` - Runs checks
     - `[Report Build]` - Finalizes scan
6. **Check scan status**: Refresh `/scans/[scanId]` - should show "completed" when done
7. **View results**: 
   - Overall score
   - Pillar bars
   - Issues table
   - Clusters/templates

### Verify Pipeline

1. **Check database**:
   ```bash
   npm run db:studio
   ```
   - Verify `Scan` record has status "completed"
   - Verify `Page` records exist with extracted metadata
   - Verify `Cluster` records exist
   - Verify `Issue` records exist
   - Verify `Report` record exists

2. **Check worker logs** for:
   - All jobs processed in order
   - No errors
   - Status transitions logged

3. **Check scan results page**:
   - Overall score displayed
   - Pillar scores displayed
   - Issues listed
   - Clusters shown

### Troubleshooting

- **Scan stuck in "pending"**: Check workers are running
- **Scan stuck in "running"**: Check worker logs for errors
- **No pages discovered**: Check URL discovery logs, verify domain is accessible
- **No extraction**: Check page fetch logs, verify HTML is being stored
- **No clusters**: Check extract parse logs, verify metadata extraction
- **No issues**: Check check runner logs, verify rubric is loaded

## Pipeline Flow

```
POST /api/scans
  ↓
scan_orchestrator (status: pending → running)
  ↓
url_discovery
  ↓ (enqueues for each URL)
page_fetch (stores HTML in metadata)
  ↓ (enqueues after fetch)
extract_parse (extracts metadata, stores in Page)
  ↓ (enqueues when all pages extracted)
cluster_build (groups pages into clusters)
  ↓ (enqueues after clustering)
check_runner (runs rubric checks, creates issues)
  ↓ (enqueues after checks)
report_build (finalizes scan, status: running → completed)
  ↓
Scan complete - results available in UI
```

## Status Transitions

- `pending` → `running`: When orchestrator starts
- `running` → `completed`: When report_build succeeds
- `running` → `failed`: On any critical error
- `running` → `completed_with_limits`: When budget limits hit

## Error Handling

- All workers catch errors and update scan status
- Failure reasons stored in Scan.metadata
- Budget limits tracked in Scan.budgetLimits
- Partial completion handled gracefully

