# Environment Variables

This document describes all environment variables used by the AEO Audit tool.

## Required Variables

These variables **must** be set for the application to run:

### `DATABASE_URL`
- **Type**: URL string
- **Description**: PostgreSQL database connection URL
- **Example**: `postgresql://user:password@localhost:5432/aeo_audit`
- **Format**: `postgresql://[user]:[password]@[host]:[port]/[database]`

### `REDIS_URL`
- **Type**: URL string
- **Description**: Redis connection URL for BullMQ queues
- **Example**: `redis://localhost:6379`
- **Format**: `redis://[host]:[port]` or `redis://[password]@[host]:[port]`

### `NEXT_PUBLIC_APP_URL`
- **Type**: URL string
- **Description**: Public URL of the application (used for generating links)
- **Example**: `https://audit.example.com`
- **Format**: Full URL with protocol (http:// or https://)

### `AEO_AUDIT_PASSWORD`
- **Type**: String
- **Default**: None (dev mode - no password required)
- **Description**: Password required to access the audit tool
- **Example**: `your-secure-password-here`
- **Usage**: Set this in production to require authentication. If not set, tool is accessible without password (dev mode).

## Optional Variables

These variables have safe defaults and are optional:

### `MAX_PAGES`
- **Type**: Integer
- **Default**: `200`
- **Description**: Maximum number of pages to crawl per scan
- **Example**: `500`
- **Usage**: Limits the total pages processed in a single scan

### `MAX_DEPTH`
- **Type**: Integer
- **Default**: `2`
- **Description**: Maximum crawl depth (BFS depth limit)
- **Example**: `3`
- **Usage**: Limits how deep the crawler goes from the homepage

### `USER_AGENT`
- **Type**: String
- **Default**: `AEO-Audit/1.0 (+https://github.com/your-org/aeo-audit)`
- **Description**: User agent string sent with HTTP requests
- **Example**: `MyBot/1.0 (contact@example.com)`
- **Usage**: Identifies the crawler to servers

### `EVIDENCE_MODE`
- **Type**: Enum
- **Default**: `full`
- **Options**: `full` | `extract-only`
- **Description**: Evidence storage mode
  - `full`: Store excerpt snippets with redaction (more storage, more detail)
  - `extract-only`: Store only hashes + selectors + counts (less storage, sufficient for most cases)
- **Example**: `full`
- **Usage**: Controls how much evidence data is stored

### `EVIDENCE_RETENTION_DAYS`
- **Type**: Integer
- **Default**: `30`
- **Description**: Number of days to keep evidence payloads before purging
- **Example**: `60`
- **Usage**: After this period, evidence content is purged but hashes/metadata are preserved

### `SITE_TYPE_OVERRIDE`
- **Type**: Enum
- **Default**: None (uses default 'corporate')
- **Options**: `corporate` | `ecommerce` | `blog` | `default`
- **Description**: Override site type for scoring weights
- **Example**: `ecommerce`
- **Usage**: Affects pillar score weighting in rubric evaluation

### `LLM_PROVIDER`
- **Type**: Enum
- **Default**: `mock`
- **Options**: `mock` | `openai` | `anthropic` | `google`
- **Description**: LLM provider for evaluation jobs
- **Example**: `openai`
- **Usage**: Selects which LLM provider to use (mock for testing, real providers for production)

### `LLM_MODEL`
- **Type**: String
- **Default**: `gpt-4`
- **Description**: LLM model name (provider-specific)
- **Example**: `gpt-4-turbo` (OpenAI) or `claude-3-opus-20240229` (Anthropic)
- **Usage**: Specifies which model to use with the selected provider

### `MAX_RENDERS`
- **Type**: Integer
- **Default**: `10`
- **Description**: Maximum number of pages to render with Playwright per scan
- **Example**: `20`
- **Usage**: Limits expensive browser rendering operations

### `MAX_LLM_CALLS`
- **Type**: Integer
- **Default**: `50`
- **Description**: Maximum number of LLM evaluation calls per scan
- **Example**: `100`
- **Usage**: Limits expensive LLM API calls

### `MAX_TOKENS_PER_CALL`
- **Type**: Integer
- **Default**: `10000`
- **Description**: Maximum tokens per LLM call (inputs truncated if exceeded)
- **Example**: `20000`
- **Usage**: Limits token usage per LLM call to control costs

## Additional LLM Provider Variables

If using a real LLM provider, you'll also need:

### `OPENAI_API_KEY`
- **Required if**: `LLM_PROVIDER=openai`
- **Type**: String
- **Description**: OpenAI API key
- **Example**: `sk-...`

### `ANTHROPIC_API_KEY`
- **Required if**: `LLM_PROVIDER=anthropic`
- **Type**: String
- **Description**: Anthropic API key
- **Example**: `sk-ant-...`

### `GOOGLE_AI_API_KEY`
- **Required if**: `LLM_PROVIDER=google`
- **Type**: String
- **Description**: Google AI API key
- **Example**: `...`

## Example `.env` File

```env
# Required
DATABASE_URL=postgresql://user:password@localhost:5432/aeo_audit
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional - Authentication
# AEO_AUDIT_PASSWORD=your-secure-password-here  # Set in production

# Optional - Crawler
MAX_PAGES=200
MAX_DEPTH=2
USER_AGENT=AEO-Audit/1.0 (+https://github.com/your-org/aeo-audit)

# Optional - Evidence
EVIDENCE_MODE=full
EVIDENCE_RETENTION_DAYS=30

# Optional - Site Type
SITE_TYPE_OVERRIDE=corporate

# Optional - LLM
LLM_PROVIDER=mock
LLM_MODEL=gpt-4

# Optional - Budget Limits
MAX_RENDERS=10
MAX_LLM_CALLS=50
MAX_TOKENS_PER_CALL=10000

# Optional - LLM API Keys (if using real provider)
# OPENAI_API_KEY=sk-...
# ANTHROPIC_API_KEY=sk-ant-...
# GOOGLE_AI_API_KEY=...
```

## Production Example

```env
# Required
DATABASE_URL=postgresql://prod_user:secure_password@db.example.com:5432/aeo_audit_prod
REDIS_URL=redis://redis.example.com:6379
NEXT_PUBLIC_APP_URL=https://audit.example.com

# Optional - Production settings
MAX_PAGES=1000
MAX_DEPTH=3
USER_AGENT=AEO-Audit/1.0 (contact@example.com)
EVIDENCE_MODE=full
SITE_TYPE_OVERRIDE=ecommerce
LLM_PROVIDER=openai
LLM_MODEL=gpt-4-turbo
OPENAI_API_KEY=sk-proj-...
```

## Validation

The configuration system uses Zod to validate all environment variables:

- **Required variables**: Must be present and valid
- **Optional variables**: Use safe defaults if not provided
- **Type validation**: URLs must be valid, numbers must be integers, enums must match allowed values
- **Error messages**: Clear error messages indicate which variables are missing or invalid

## Accessing Configuration

Import the config object:

```typescript
import { config } from '@/src/config'

// Database URL
const dbUrl = config.database.url()

// Crawler settings
const maxPages = config.crawler.maxPages()
const maxDepth = config.crawler.maxDepth()
const userAgent = config.crawler.userAgent()

// Evidence mode
const evidenceMode = config.evidence.mode()
const isFullMode = config.evidence.isFullMode()

// Site type
const siteType = config.siteType.get('corporate')

// LLM settings
const llmProvider = config.llm.provider()
const llmModel = config.llm.model()
```

## Migration from Direct `process.env` Access

If you're migrating existing code:

**Before**:
```typescript
const maxPages = parseInt(process.env.MAX_PAGES || '200', 10)
```

**After**:
```typescript
import { config } from '@/src/config'
const maxPages = config.crawler.maxPages()
```

Benefits:
- Type-safe access
- Validated values
- Centralized defaults
- Clear error messages

