# Configuration Usage Examples

## Basic Usage

```typescript
import { config } from '@/src/config'

// Access configuration values
const dbUrl = config.database.url()
const redisUrl = config.redis.url()
const appUrl = config.app.url()
```

## Crawler Configuration

```typescript
import { config } from '@/src/config'

// Get crawler settings
const maxPages = config.crawler.maxPages()      // Default: 200
const maxDepth = config.crawler.maxDepth()      // Default: 2
const userAgent = config.crawler.userAgent()    // Default: AEO-Audit/1.0...

// Use in crawler logic
async function crawl(url: string) {
  const maxPages = config.crawler.maxPages()
  const maxDepth = config.crawler.maxDepth()
  const userAgent = config.crawler.userAgent()
  
  // ... crawler implementation
}
```

## Evidence Mode

```typescript
import { config } from '@/src/config'

// Check evidence mode
if (config.evidence.isFullMode()) {
  // Store full evidence
  await storeFullEvidence(evidence)
} else {
  // Store extract only
  await storeExtract(evidence)
}

// Or use the mode directly
const mode = config.evidence.mode() // 'full' | 'extract-only'
```

## Site Type

```typescript
import { config } from '@/src/config'

// Get site type (with fallback)
const siteType = config.siteType.get('corporate') // Returns override or 'corporate'

// Check if override is set
const override = config.siteType.override() // 'corporate' | 'ecommerce' | 'blog' | 'default' | undefined

// Use in scoring
const weights = getSiteTypeWeights(siteType)
```

## LLM Configuration

```typescript
import { config } from '@/src/config'

// Get LLM settings
const provider = config.llm.provider() // 'mock' | 'openai' | 'anthropic' | 'google'
const model = config.llm.model()        // 'gpt-4' or custom model

// Use in LLM provider selection
if (provider === 'openai') {
  // Use OpenAI
} else if (provider === 'mock') {
  // Use mock provider
}
```

## Integration Examples

### Updating Queue Factory

**Before**:
```typescript
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'
```

**After**:
```typescript
import { config } from '@/src/config'

const redisUrl = config.redis.url()
```

### Updating URL Discovery Config

**Before**:
```typescript
export const MAX_PAGES = parseInt(process.env.MAX_PAGES || '200', 10)
export const MAX_DEPTH = parseInt(process.env.MAX_DEPTH || '2', 10)
```

**After**:
```typescript
import { config } from '@/src/config'

export const MAX_PAGES = config.crawler.maxPages()
export const MAX_DEPTH = config.crawler.maxDepth()
```

### Updating Page Fetch Config

**Before**:
```typescript
export const USER_AGENT = process.env.USER_AGENT || 'AEO-Audit/1.0'
```

**After**:
```typescript
import { config } from '@/src/config'

export const USER_AGENT = config.crawler.userAgent()
```

## Error Handling

```typescript
import { config } from '@/src/config'

try {
  const dbUrl = config.database.url()
  // Use dbUrl
} catch (error) {
  if (error instanceof Error) {
    console.error('Configuration error:', error.message)
    // Handle missing/invalid DATABASE_URL
  }
}
```

## Type Safety

The config object is fully typed:

```typescript
import { config } from '@/src/config'

// TypeScript knows the return types
const maxPages: number = config.crawler.maxPages()
const evidenceMode: 'full' | 'extract-only' = config.evidence.mode()
const llmProvider: 'mock' | 'openai' | 'anthropic' | 'google' = config.llm.provider()

// TypeScript will catch errors
const invalid = config.crawler.invalidProperty() // ❌ Type error
```

## Testing

In test environments, you can mock the config:

```typescript
// In test setup
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
process.env.REDIS_URL = 'redis://localhost:6379'
process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'

// Config will validate and use these values
import { config } from '@/src/config'
```

## Migration Checklist

- [ ] Replace all `process.env.DATABASE_URL` with `config.database.url()`
- [ ] Replace all `process.env.REDIS_URL` with `config.redis.url()`
- [ ] Replace all `process.env.NEXT_PUBLIC_APP_URL` with `config.app.url()`
- [ ] Replace all `process.env.MAX_PAGES` with `config.crawler.maxPages()`
- [ ] Replace all `process.env.MAX_DEPTH` with `config.crawler.maxDepth()`
- [ ] Replace all `process.env.USER_AGENT` with `config.crawler.userAgent()`
- [ ] Replace all `process.env.EVIDENCE_MODE` with `config.evidence.mode()`
- [ ] Replace all `process.env.SITE_TYPE_OVERRIDE` with `config.siteType.override()`
- [ ] Replace all `process.env.LLM_PROVIDER` with `config.llm.provider()`
- [ ] Replace all `process.env.LLM_MODEL` with `config.llm.model()`
- [ ] Update all module-specific config files to use centralized config
- [ ] Test configuration validation
- [ ] Update documentation

