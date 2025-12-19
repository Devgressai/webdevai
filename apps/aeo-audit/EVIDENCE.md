# Evidence Redaction and Retention

## Overview

The evidence system provides automatic redaction of sensitive data and configurable retention policies to manage storage while preserving audit history.

## Features

1. **Automatic Redaction**: Removes sensitive data from evidence content
2. **EVIDENCE_MODE Support**: Configurable storage modes (full vs extract-only)
3. **Retention Jobs**: Automatic purging of old evidence payloads
4. **History Preservation**: Keeps hashes and metadata after purging content

## Redaction

### Redacted Data Types

The system automatically redacts:

1. **Email Addresses**: `user@example.com` → `[REDACTED]`
2. **Phone Numbers**: `(555) 123-4567` → `[REDACTED]`
3. **Street Addresses**: `123 Main Street` → `[REDACTED]`
4. **Token-like Query Params**: `?token=abc123...` → `?token=[REDACTED]`
5. **API Keys**: `api_key=abc123...` → `api_key=[REDACTED]`
6. **Credit Card Numbers**: `1234-5678-9012-3456` → `[REDACTED]`

### Redaction Patterns

```typescript
// Email addresses
/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g

// Phone numbers (various formats)
/\b(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b/g

// Street addresses
/\b\d+\s+[A-Za-z0-9\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Way|Circle|Cir)\b/gi

// Token-like query params
/[?&](?:token|key|api_key|session|auth|access_token|refresh_token|secret)=[A-Za-z0-9_-]{20,}/gi

// API keys
/\b(?:api[_-]?key|apikey)[=:]\s*[A-Za-z0-9_-]{20,}/gi

// Credit card numbers
/\b(?:\d{4}[-\s]?){3}\d{4}\b/g
```

### Redaction Application

Redaction is applied automatically when storing evidence:

```typescript
import { storeRedactedEvidence } from '@/lib/evidence/storage'

await storeRedactedEvidence(
  pageId,
  'canonical_tag',
  'https://example.com/page?token=abc123&email=user@example.com',
  'link[rel="canonical"]',
  { metadata: 'value' }
)
// Stored content: 'https://example.com/page?token=[REDACTED]&email=[REDACTED]'
```

### Redaction Counts

The system tracks redaction counts:

```typescript
{
  emails: 2,
  phones: 1,
  addresses: 0,
  tokens: 1,
  total: 4
}
```

## EVIDENCE_MODE

### Configuration

Set via environment variable:

```bash
EVIDENCE_MODE=full          # Store excerpt snippets
EVIDENCE_MODE=extract-only  # Store only hashes + selectors + counts
```

### Full Mode (`full`)

Stores excerpt snippets with redaction:

```json
{
  "content": "Title: Example Page\nMeta Description: This is an example...",
  "metadata": {
    "contentHash": "abc123...",
    "redactionCounts": { "emails": 0, "phones": 0, ... },
    "evidenceMode": "full",
    "hasContent": true,
    "originalLength": 150,
    "truncated": false
  }
}
```

### Extract-Only Mode (`extract-only`)

Stores only hash, selector, and counts:

```json
{
  "content": "{\"hash\":\"abc123...\",\"selector\":\"link[rel=\\\"canonical\\\"]\",\"length\":150,\"redactionCounts\":{...}}",
  "metadata": {
    "contentHash": "abc123...",
    "redactionCounts": { "emails": 0, "phones": 0, ... },
    "evidenceMode": "extract-only",
    "hasContent": false,
    "originalLength": 150
  }
}
```

## Retention

### Retention Job

The retention job purges old evidence payloads while keeping hashes and metadata:

```typescript
import { runRetentionJob } from '@/lib/evidence/retention'

const result = await runRetentionJob({
  retentionDays: 30,  // Default: 30 days
  dryRun: false,      // Default: false
})
```

### Retention Process

1. **Find Old Evidence**: Evidence older than retention date
2. **Purge Content**: Replace content with hash-only JSON
3. **Preserve Metadata**: Keep all metadata and hash
4. **Skip Extract-Only**: Already minimal, no purging needed

### Retention Configuration

Set via environment variable:

```bash
EVIDENCE_RETENTION_DAYS=30  # Default: 30 days
```

### Retention Job Queue

The retention job runs via BullMQ:

```typescript
import { addJob } from '@/lib/queues/factory'
import { QUEUE_NAMES } from '@/lib/queues/types'

await addJob(QUEUE_NAMES.EVIDENCE_RETENTION, {
  retentionDays: 30,
  dryRun: false,
})
```

### Scheduled Retention

To run retention automatically, add a repeatable job:

```typescript
import { getQueue } from '@/lib/queues/factory'

const queue = getQueue(QUEUE_NAMES.EVIDENCE_RETENTION)

await queue.add(
  'retention-daily',
  { retentionDays: 30 },
  {
    repeat: {
      pattern: '0 2 * * *', // Daily at 2 AM
    },
  }
)
```

## Usage

### Storing Evidence

```typescript
import { storeRedactedEvidence } from '@/lib/evidence/storage'

// Simple usage
await storeRedactedEvidence(
  pageId,
  'canonical_tag',
  'https://example.com/page?token=abc123',
  'link[rel="canonical"]',
  { metadata: 'value' }
)

// Advanced usage with options
import { storeEvidence } from '@/lib/evidence/storage'

await storeEvidence(pageId, {
  type: 'canonical_tag',
  content: 'https://example.com/page?token=abc123',
  selector: 'link[rel="canonical"]',
  metadata: { metadata: 'value' },
  maxLength: 5000, // Max content length
})
```

### Retrieving Evidence

```typescript
import { getEvidenceContent } from '@/lib/evidence/storage'

const evidence = await getEvidenceContent(evidenceId)

if (evidence.hasContent) {
  console.log('Content:', evidence.content)
} else {
  console.log('Hash only:', evidence.hash)
  console.log('Redaction counts:', evidence.redactionCounts)
}
```

### Running Retention

```typescript
import { runRetentionJob } from '@/lib/evidence/retention'

// Dry run
const dryRun = await runRetentionJob({ dryRun: true })
console.log(`Would purge: ${dryRun.purged}`)

// Actual purge
const result = await runRetentionJob({ retentionDays: 30 })
console.log(`Purged: ${result.purged}, Kept: ${result.kept}`)
```

### Retention Statistics

```typescript
import { getRetentionStats } from '@/lib/evidence/retention'

const stats = await getRetentionStats()
console.log(`Total evidence: ${stats.total}`)
console.log(`Older than 30 days: ${stats.olderThan30Days}`)
console.log(`Full mode: ${stats.fullMode}`)
console.log(`Extract-only mode: ${stats.extractOnlyMode}`)
```

## Evidence Types

Evidence is stored with the following types:

- `canonical_tag`: Canonical URL
- `title_meta_snippet`: Title and meta tags
- `jsonld_block_snippet`: JSON-LD blocks
- `http_response`: HTTP response data
- `http_headers`: HTTP headers
- `redirect_chain`: Redirect chain
- `robots_check`: Robots.txt check result
- `fetch_timing`: Fetch timing data
- `fetch_error`: Fetch error messages
- `robots_allowed`: Robots.txt allowed decision
- `blocked_by_robots`: Robots.txt blocked decision
- `render_fallback`: Render fallback evidence
- `llm_evidence_quote`: LLM evidence quotes
- `robots_txt`: Robots.txt fetch result
- `sitemap_fetch`: Sitemap fetch result
- `crawl_stats`: Crawl statistics
- `discovery_summary`: Discovery summary counts

## Migration

### Existing Evidence

Existing evidence without redaction will be redacted on next access or during retention purge.

### Updating Evidence Storage

All evidence storage calls have been updated to use `storeRedactedEvidence`:

- `lib/extract-parse/worker.ts`: Extract parse evidence
- `lib/page-fetch/worker.ts`: Fetch evidence
- `lib/page-render/worker.ts`: Render evidence
- `lib/llm-eval/worker.ts`: LLM evidence
- `lib/url-discovery/worker.ts`: Discovery evidence
- `lib/crawl-politeness/evidence.ts`: Robots evidence

## Best Practices

1. **Use `storeRedactedEvidence`**: Always use the redaction utilities
2. **Set EVIDENCE_MODE**: Choose appropriate mode for your use case
3. **Run Retention Regularly**: Schedule retention jobs to manage storage
4. **Monitor Redaction Counts**: Track redaction counts for compliance
5. **Preserve Hashes**: Hashes allow verification without storing content

## Environment Variables

```bash
# Evidence mode
EVIDENCE_MODE=full              # full | extract-only (default: full)

# Retention
EVIDENCE_RETENTION_DAYS=30      # Days to keep evidence (default: 30)
```

## API Reference

### `storeRedactedEvidence(pageId, type, content, selector?, metadata?)`

Store evidence with automatic redaction.

### `storeEvidence(pageId, options)`

Store evidence with advanced options.

### `getEvidenceContent(evidenceId)`

Retrieve evidence content with redaction info.

### `runRetentionJob(payload?)`

Run retention job to purge old evidence.

### `getRetentionStats()`

Get retention statistics.

### `redactSensitiveData(text)`

Redact sensitive data from text.

### `hashContent(content)`

Generate SHA256 hash of content.

### `countRedactedItems(text)`

Count redacted items in text.

