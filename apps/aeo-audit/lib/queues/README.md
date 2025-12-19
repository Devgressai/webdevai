# Queue System Documentation

## Overview

The AEO Audit tool uses BullMQ with Redis for job queue management. The system consists of 9 queues that orchestrate the scan workflow.

## Queues

### 1. `scan_orchestrator`
- **Purpose**: Orchestrates the entire scan process
- **Retries**: 5 attempts, exponential backoff (5s, 10s, 20s, 40s, 80s)
- **Priority**: High (priority: 1)
- **Concurrency**: 2 workers

### 2. `url_discovery`
- **Purpose**: Discovers URLs to scan from the target domain
- **Retries**: 3 attempts, exponential backoff (3s, 6s, 12s)
- **Concurrency**: 10 workers
- **Idempotency**: `{scanId}:{domain}`

### 3. `page_fetch`
- **Purpose**: Fetches HTML content from discovered URLs
- **Retries**: 5 attempts, exponential backoff (2s, 4s, 8s, 16s, 32s)
- **Concurrency**: 20 workers
- **Idempotency**: `{scanId}:{url}`

### 4. `page_render_fallback` (Stub)
- **Purpose**: Fallback rendering for JavaScript-heavy pages
- **Retries**: 2 attempts, fixed delay (10s)
- **Concurrency**: 5 workers
- **Idempotency**: `{scanId}:{url}`

### 5. `extract_parse`
- **Purpose**: Extracts and parses structured data, schema, content
- **Retries**: 3 attempts, exponential backoff (2s, 4s, 8s)
- **Concurrency**: 10 workers
- **Idempotency**: `{scanId}:{pageId}`

### 6. `cluster_build`
- **Purpose**: Builds clusters of related issues/pages
- **Retries**: 2 attempts, exponential backoff (5s, 10s)
- **Concurrency**: 3 workers

### 7. `check_runner`
- **Purpose**: Runs AEO readiness checks on pages
- **Retries**: 4 attempts, exponential backoff (2s, 4s, 8s, 16s)
- **Concurrency**: 15 workers
- **Idempotency**: `{scanId}:{pageId}`

### 8. `llm_eval` (Stub)
- **Purpose**: LLM-based evaluation of readiness scores
- **Retries**: 3 attempts, exponential backoff (10s, 20s, 40s)
- **Concurrency**: 2 workers
- **Rate Limit**: 5 jobs/second

### 9. `report_build`
- **Purpose**: Builds final scan report
- **Retries**: 2 attempts, exponential backoff (5s, 10s)
- **Concurrency**: 3 workers

## Idempotency Keys

Jobs use idempotency keys to prevent duplicate processing:

- **URL-based**: `{scanId}:{url}` (for page_fetch, page_render_fallback)
- **Page-based**: `{scanId}:{pageId}` (for extract_parse, check_runner)
- **Domain-based**: `{scanId}:{domain}` (for url_discovery)
- **Orchestrator**: `{scanId}:orchestrator` (for scan_orchestrator)

## Retry Policy

All queues use exponential backoff by default:
- **Attempts**: 2-5 (queue-specific)
- **Backoff Type**: Exponential
- **Initial Delay**: 2-10 seconds (queue-specific)

## Dead-Letter Queue

Jobs that fail after all retries are automatically moved to the dead-letter queue: `aeo_audit_dlq`

## Job Retention

- **Completed Jobs**: 24 hours or last 1000 jobs
- **Failed Jobs**: 7 days

## Usage

### Creating a Scan

```typescript
POST /api/scans
Body: { domain: "example.com" }
```

This will:
1. Create a Scan record in the database
2. Enqueue a `scan_orchestrator` job
3. Return the scan ID and job ID

### Adding Jobs Programmatically

```typescript
import { addJob, generateIdempotencyKey, QUEUE_NAMES } from '@/lib/queues'
import { PageFetchPayload } from '@/lib/queues/types'

const idempotencyKey = generateIdempotencyKey(scanId, url)

await addJob<PageFetchPayload>(
  QUEUE_NAMES.PAGE_FETCH,
  { scanId, url },
  { idempotencyKey }
)
```

## Environment Variables

```env
REDIS_URL=redis://localhost:6379
```

## Worker Processes

Workers are defined in `lib/queues/workers.ts` and should be run as separate processes:

```bash
# Example: Run a worker process
node workers/scan-orchestrator.js
```

Workers are currently stubs and need to be implemented with actual business logic.

