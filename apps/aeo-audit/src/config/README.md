# Configuration System

Centralized configuration system with Zod validation for the AEO Audit tool.

## Overview

The config system:
- Validates all environment variables using Zod
- Provides type-safe access to configuration
- Offers safe defaults for optional variables
- Throws clear errors for missing required variables

## Usage

### Import Config

```typescript
import { config } from '@/src/config'
```

### Access Configuration

```typescript
// Database
const dbUrl = config.database.url()

// Redis
const redisUrl = config.redis.url()

// App URL
const appUrl = config.app.url()

// Crawler settings
const maxPages = config.crawler.maxPages()      // Default: 200
const maxDepth = config.crawler.maxDepth()      // Default: 2
const userAgent = config.crawler.userAgent()    // Default: AEO-Audit/1.0...

// Evidence mode
const mode = config.evidence.mode()             // Default: 'extract-only'
const isFull = config.evidence.isFullMode()      // true if mode === 'full'
const isExtract = config.evidence.isExtractOnly() // true if mode === 'extract-only'

// Site type
const siteType = config.siteType.get('corporate') // Returns override or default

// LLM settings
const provider = config.llm.provider()          // Default: 'mock'
const model = config.llm.model()                 // Default: 'gpt-4'
```

## Required Variables

These must be set or the application will fail to start:

- `DATABASE_URL` - PostgreSQL connection URL
- `REDIS_URL` - Redis connection URL
- `NEXT_PUBLIC_APP_URL` - Public application URL

## Optional Variables

All optional variables have safe defaults:

- `MAX_PAGES` - Default: 200
- `MAX_DEPTH` - Default: 2
- `USER_AGENT` - Default: AEO-Audit/1.0...
- `EVIDENCE_MODE` - Default: 'extract-only'
- `SITE_TYPE_OVERRIDE` - Default: None (uses provided default)
- `LLM_PROVIDER` - Default: 'mock'
- `LLM_MODEL` - Default: 'gpt-4'

## Validation

Configuration is validated on import:
- Missing required variables throw errors immediately
- Invalid values (wrong type, invalid enum, etc.) throw errors
- Clear error messages indicate what's wrong

## Type Safety

The config object is fully typed:
- TypeScript will catch typos in property names
- Return types are inferred correctly
- Enum values are type-checked

## Error Handling

If validation fails:
- Error is logged to console
- Application throws error (except in test environment)
- Error message includes which variables are missing/invalid

## Migration Guide

### Step 1: Replace Direct `process.env` Access

**Before**:
```typescript
const maxPages = parseInt(process.env.MAX_PAGES || '200', 10)
const userAgent = process.env.USER_AGENT || 'AEO-Audit/1.0'
```

**After**:
```typescript
import { config } from '@/src/config'
const maxPages = config.crawler.maxPages()
const userAgent = config.crawler.userAgent()
```

### Step 2: Update Imports

Replace module-specific config files with centralized config:

**Before**:
```typescript
// lib/url-discovery/config.ts
export const MAX_PAGES = parseInt(process.env.MAX_PAGES || '200', 10)
```

**After**:
```typescript
// lib/url-discovery/config.ts
import { config } from '@/src/config'
export const MAX_PAGES = config.crawler.maxPages()
```

### Step 3: Update Environment Variables

Ensure all required variables are set (see `ENV.md` for details).

## Testing

In test environments, validation errors are logged but don't throw:
- Allows tests to run without full environment setup
- Tests can still validate config if needed

## See Also

- `ENV.md` - Complete environment variable documentation
- `src/config/index.ts` - Configuration implementation

