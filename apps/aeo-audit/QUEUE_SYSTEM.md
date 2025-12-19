# Queue System - Call Flow

## Overview

The AEO Audit queue system processes website scans through a series of interconnected queues.

## Initial Request Flow

### 1. API Request
```
POST /api/scans
Body: { domain: "example.com" }
```

### 2. Scan Creation
- Creates a `Scan` record in PostgreSQL with status `pending`
- Normalizes domain (removes protocol, trailing slashes)

### 3. Job Enqueue
- Enqueues `scan_orchestrator` job with:
  - Payload: `{ scanId, domain }`
  - Idempotency Key: `{scanId}:orchestrator`
  - Priority: 1 (high)

## Queue Processing Flow

### Phase 1: Discovery
```
scan_orchestrator
  └─> url_discovery (discovers URLs)
      └─> page_fetch (for each URL)
          └─> page_render_fallback (if needed, stub)
```

### Phase 2: Analysis
```
page_fetch (completes)
  └─> extract_parse (extracts structured data)
      └─> check_runner (runs AEO checks)
```

### Phase 3: Clustering & Evaluation
```
check_runner (completes for all pages)
  └─> cluster_build (groups related issues)
      └─> llm_eval (evaluates readiness, stub)
```

### Phase 4: Reporting
```
llm_eval (completes)
  └─> report_build (generates final report)
      └─> Scan status updated to "completed"
```

## Idempotency

All jobs use idempotency keys to prevent duplicate processing:

- **scan_orchestrator**: `{scanId}:orchestrator`
- **url_discovery**: `{scanId}:{domain}`
- **page_fetch**: `{scanId}:{url}`
- **page_render_fallback**: `{scanId}:{url}`
- **extract_parse**: `{scanId}:{pageId}`
- **check_runner**: `{scanId}:{pageId}`

## Retry Behavior

Jobs automatically retry on failure:
- **scan_orchestrator**: 5 attempts (5s, 10s, 20s, 40s, 80s)
- **page_fetch**: 5 attempts (2s, 4s, 8s, 16s, 32s)
- **url_discovery**: 3 attempts (3s, 6s, 12s)
- **Other queues**: 2-4 attempts with exponential backoff

## Dead-Letter Queue

Jobs that fail after all retries are moved to `aeo_audit_dlq` for manual inspection.

## Example: Complete Flow

1. **User Request**: `POST /api/scans { domain: "example.com" }`
2. **Database**: Scan created with ID `scan_123`
3. **Queue**: `scan_orchestrator` job enqueued
4. **Worker**: Orchestrator discovers 10 URLs
5. **Queue**: 10 `page_fetch` jobs enqueued (parallel)
6. **Workers**: Pages fetched concurrently
7. **Queue**: 10 `extract_parse` jobs enqueued
8. **Workers**: Data extracted from each page
9. **Queue**: 10 `check_runner` jobs enqueued
10. **Workers**: AEO checks run on each page
11. **Queue**: `cluster_build` job enqueued (after all checks complete)
12. **Worker**: Issues clustered
13. **Queue**: `llm_eval` job enqueued (stub)
14. **Queue**: `report_build` job enqueued
15. **Worker**: Final report generated
16. **Database**: Scan status updated to `completed`

## Testing

### Create a Scan
```bash
curl -X POST http://localhost:3000/api/scans \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}'
```

### Monitor Queues
Use Redis CLI or BullMQ Dashboard to monitor queue status:
```bash
redis-cli
> KEYS bull:*
```

## Next Steps

1. Implement worker logic in `lib/queues/workers.ts`
2. Set up worker processes (separate Node.js processes or PM2)
3. Implement dead-letter queue monitoring
4. Add queue metrics/monitoring dashboard

