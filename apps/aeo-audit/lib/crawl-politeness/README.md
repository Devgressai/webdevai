# Crawl Politeness Implementation

## Overview

This module implements robots.txt compliance and crawl politeness features to ensure respectful crawling behavior.

## Components

### 1. Robots.txt Parser (`robots-parser.ts`)

Enhanced robots.txt parsing with proper User-agent rule matching:

- **User-agent matching**: Uses configured USER_AGENT, falls back to "*"
- **Rule precedence**: Exact match > partial match > wildcard
- **Disallow/Allow patterns**: Respects Allow/Disallow with proper precedence
- **Crawl-delay**: Extracts crawl-delay directives
- **Pattern matching**: Supports wildcards (*) and path prefixes

**Functions**:
- `parseRobots(robotsText, userAgent?)`: Parse robots.txt content
- `findMatchingRule(parsedRobots, userAgent?)`: Find matching rule for user agent
- `isPathAllowed(urlPath, rule)`: Check if path is allowed
- `checkRobotsAllowance(url, parsedRobots, userAgent?)`: Main check function

### 2. Per-Host Concurrency (`concurrency.ts`)

Limits simultaneous requests per host:

- **Default**: 2 concurrent requests per host
- **Redis-based**: Uses Redis to track active requests
- **TTL**: 5 minutes for tracking keys

**Functions**:
- `extractHost(url)`: Extract hostname from URL
- `checkHostConcurrency(host, config?)`: Check if request allowed
- `incrementHostConcurrency(host, config?)`: Increment counter
- `decrementHostConcurrency(host, config?)`: Decrement counter
- `waitForHostSlot(host, timeoutMs?, config?)`: Wait for available slot

### 3. Per-Host Delay (`delay.ts`)

Implements crawl delays between requests:

- **Default**: 200-500ms random delay
- **Robots.txt crawl-delay**: Respects crawl-delay directive if present
- **Redis-based**: Tracks last request time per host

**Functions**:
- `calculateDelay(host, crawlDelaySeconds?, config?)`: Calculate delay needed
- `waitForDelay(host, crawlDelaySeconds?, config?)`: Wait before request
- `getLastRequestTime(host)`: Get last request timestamp

### 4. Scan Budget (`budget.ts`)

Tracks time and page limits for scans:

- **Page limit**: Maximum pages to process
- **Time limit**: Maximum time for scan
- **Budget checking**: Validates before processing

**Functions**:
- `checkBudget(config)`: Check if scan within budget
- `getDefaultBudget(scanId)`: Get default budget from config

### 5. Evidence Storage (`evidence.ts`)

Stores robots.txt decisions as Evidence:

- **Evidence types**: `robots_allowed` or `blocked_by_robots`
- **Metadata**: Stores matched rule, crawl delay, timestamp

**Functions**:
- `storeRobotsEvidence(scanId, url, allowed, matchedRule?, crawlDelay?)`: Store decision

## Integration

### Page Fetch Worker

The `page_fetch` worker integrates:

1. **Robots check**: Before fetching, check robots.txt
2. **Concurrency limit**: Wait for host slot if needed
3. **Delay**: Wait for crawl delay before request
4. **Budget check**: Verify scan is within budget
5. **Evidence storage**: Store robots decision

### URL Discovery Worker

The `url_discovery` worker integrates:

1. **Robots parsing**: Parse robots.txt with proper User-agent matching
2. **Sitemap discovery**: Extract sitemaps from robots.txt
3. **Disallow filtering**: Filter discovered URLs by Disallow rules

## Configuration

### Environment Variables

```env
# Crawler settings
MAX_PAGES=200                    # Maximum pages per scan
MAX_SCAN_TIME_MINUTES=60         # Maximum time per scan (minutes)
USER_AGENT=AEO-Audit/1.0         # User agent for robots.txt matching
```

### Concurrency Config

```typescript
const concurrencyConfig = {
  maxConcurrent: 2,              // Max concurrent requests per host
  keyPrefix: 'host_concurrency:',
  ttlSeconds: 300,               // 5 minutes
}
```

### Delay Config

```typescript
const delayConfig = {
  minDelayMs: 200,               // Minimum delay (ms)
  maxDelayMs: 500,               // Maximum delay (ms)
  keyPrefix: 'host_delay:',
}
```

## Usage Examples

### Check Robots Allowance

```typescript
import { parseRobots, checkRobotsAllowance } from '@/lib/crawl-politeness'

// Parse robots.txt
const parsed = parseRobots(robotsText, userAgent)

// Check if URL is allowed
const result = checkRobotsAllowance(url, parsed, userAgent)

if (!result.allowed) {
  // URL is blocked
  console.log(`Blocked by: ${result.matchedRule}`)
}
```

### Per-Host Concurrency

```typescript
import { extractHost, waitForHostSlot, incrementHostConcurrency, decrementHostConcurrency } from '@/lib/crawl-politeness'

const host = extractHost(url)

// Wait for available slot
const available = await waitForHostSlot(host, 10000)
if (!available) {
  throw new Error('Timeout waiting for host slot')
}

// Increment counter
await incrementHostConcurrency(host)

try {
  // Make request
  await fetch(url)
} finally {
  // Decrement counter
  await decrementHostConcurrency(host)
}
```

### Per-Host Delay

```typescript
import { waitForDelay } from '@/lib/crawl-politeness'

const host = extractHost(url)
const crawlDelay = 2 // From robots.txt (seconds)

// Wait for delay
await waitForDelay(host, crawlDelay)

// Make request
await fetch(url)
```

### Budget Check

```typescript
import { checkBudget, getDefaultBudget } from '@/lib/crawl-politeness'

const budget = getDefaultBudget(scanId)
const check = await checkBudget(budget)

if (!check.withinBudget) {
  throw new Error(`Budget exceeded: ${check.reason}`)
}
```

## Evidence Storage

Robots decisions are stored as Evidence:

```typescript
import { storeRobotsEvidence } from '@/lib/crawl-politeness'

await storeRobotsEvidence(
  scanId,
  url,
  allowed,
  matchedRule,
  crawlDelay
)
```

Evidence types:
- `robots_allowed`: URL is allowed
- `blocked_by_robots`: URL is blocked

Evidence metadata includes:
- `allowed`: Boolean
- `matchedRule`: Rule that matched (e.g., "Disallow: /admin")
- `crawlDelay`: Crawl delay in seconds (if specified)
- `timestamp`: When decision was made

## Next Steps

1. Add more sophisticated pattern matching (regex support)
2. Add robots.txt caching with TTL
3. Add per-host rate limiting (in addition to concurrency)
4. Add adaptive delays based on server response times
5. Add budget warnings before limits are reached

