# Crawl Politeness Implementation Summary

## Created Files

### Core Politeness Modules
1. `lib/crawl-politeness/robots-parser.ts`
   - Enhanced robots.txt parser with User-agent rule matching
   - Disallow/Allow pattern matching with precedence
   - Crawl-delay extraction

2. `lib/crawl-politeness/concurrency.ts`
   - Per-host concurrency limiting (default: 2 concurrent requests)
   - Redis-based tracking
   - Slot waiting with timeout

3. `lib/crawl-politeness/delay.ts`
   - Per-host delay management (default: 200-500ms)
   - Respects robots.txt crawl-delay directive
   - Redis-based last request time tracking

4. `lib/crawl-politeness/budget.ts`
   - Scan budget tracking (page limit + time limit)
   - Budget validation before processing

5. `lib/crawl-politeness/evidence.ts`
   - Stores robots.txt decisions as Evidence
   - Evidence types: `robots_allowed`, `blocked_by_robots`

6. `lib/crawl-politeness/index.ts`
   - Central exports

### Worker Integration
7. `lib/page-fetch/worker.ts` (updated)
   - Integrated budget check
   - Integrated host concurrency limiting
   - Integrated crawl delays
   - Integrated robots evidence storage

8. `lib/url-discovery/robots.ts` (updated)
   - Enhanced robots.txt parsing with User-agent matching
   - URL filtering by robots.txt rules

9. `lib/url-discovery/worker.ts` (updated)
   - Integrated robots.txt URL filtering

### Documentation
10. `lib/crawl-politeness/README.md`
    - Implementation guide
    - Usage examples
    - Configuration

11. `lib/crawl-politeness/INTEGRATION.md`
    - How controls plug into workers
    - Flow diagrams
    - Example flows

## How Controls Plug Into Workers

### Page Fetch Worker

**Location**: `lib/page-fetch/worker.ts`

**Integration Points**:

1. **Budget Check** (Line ~36)
   ```typescript
   const budgetCheck = await checkBudget(budget)
   if (!budgetCheck.withinBudget) {
     return { error: `Budget exceeded: ${budgetCheck.reason}` }
   }
   ```

2. **Host Concurrency** (Lines ~50-60)
   ```typescript
   const host = extractHost(url)
   const slotAvailable = await waitForHostSlot(host, 10000)
   await incrementHostConcurrency(host)
   try {
     // Fetch page
   } finally {
     await decrementHostConcurrency(host)
   }
   ```

3. **Crawl Delay** (Line ~124)
   ```typescript
   await waitForDelay(host)
   ```

4. **Robots Check & Evidence** (Lines ~78-120)
   ```typescript
   const robotsCheck = await checkRobots(scanId, url)
   await storeRobotsEvidence(scanId, url, robotsAllowed, matchedRule)
   ```

**Flow**:
```
1. Check budget ✅
2. Extract host
3. Wait for concurrency slot ✅
4. Increment counter
5. Wait for crawl delay ✅
6. Check robots.txt ✅
7. Store robots evidence ✅
8. Fetch page
9. Decrement counter (finally)
```

### URL Discovery Worker

**Location**: `lib/url-discovery/worker.ts`

**Integration Points**:

1. **Robots Parsing** (Line ~67)
   ```typescript
   const robotsResult = await fetchRobots(baseUrl)
   // Uses enhanced parser with USER_AGENT matching
   ```

2. **URL Filtering** (Lines ~117-130)
   ```typescript
   if (robotsResult.parsedRobots) {
     discoveredUrls = discoveredUrls.filter((url) => {
       return isUrlAllowedByRobots(url, robotsResult.parsedRobots, userAgent)
     })
   }
   ```

**Flow**:
```
1. Fetch robots.txt ✅
2. Parse with enhanced parser (USER_AGENT matching) ✅
3. Discover URLs (sitemap or crawl)
4. Filter URLs by robots.txt rules ✅
5. Cap and deduplicate
6. Persist to database
```

## Configuration

### Environment Variables

```env
MAX_PAGES=200                    # Maximum pages per scan
MAX_SCAN_TIME_MINUTES=60         # Maximum time per scan (minutes)
USER_AGENT=AEO-Audit/1.0         # User agent for robots.txt matching
```

### Defaults

- **Concurrency**: 2 concurrent requests per host
- **Delay**: 200-500ms random delay
- **Budget**: 200 pages, 60 minutes

## Evidence Storage

### Evidence Types

- `robots_allowed`: URL is allowed by robots.txt
- `blocked_by_robots`: URL is blocked by robots.txt

### Evidence Content

```json
{
  "allowed": true,
  "matchedRule": "Allow: /public",
  "crawlDelay": 2,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Evidence Metadata

```json
{
  "url": "https://example.com/page",
  "allowed": true,
  "matchedRule": "Allow: /public",
  "crawlDelay": 2
}
```

## Robots.txt Rule Matching

### Priority Order

1. **Exact match**: User-agent exactly matches configured USER_AGENT
2. **Partial match**: User-agent contains rule or rule contains user-agent
3. **Wildcard**: Falls back to "*" rule

### Allow/Disallow Precedence

- **Allow overrides Disallow**: If both match, Allow wins
- **Most specific rule wins**: Longer/more specific patterns take precedence
- **Default**: Allowed if no rules match

## Example Flows

### Page Fetch

```
Request: https://example.com/page

1. Check budget: ✅ Within budget (150/200 pages, 30/60 minutes)
2. Extract host: example.com
3. Check concurrency: 1/2 slots used, ✅ allowed
4. Increment counter: 2/2 slots used
5. Calculate delay: 350ms needed (last request 200ms ago)
6. Wait: 350ms
7. Check robots.txt:
   - Parse robots.txt
   - Find matching rule (User-agent: *)
   - Check path: /page
   - Matches: Allow: /page
   - Result: ✅ Allowed
8. Store evidence: robots_allowed with "Allow: /page"
9. Fetch page: ✅ Success
10. Decrement counter: 1/2 slots used
```

### URL Discovery

```
Domain: example.com

1. Fetch robots.txt: ✅ Success
2. Parse robots.txt:
   - User-agent: AEO-Audit/1.0
   - Find matching rule: "*" (wildcard)
   - Disallow: /admin, /api
   - Allow: /public
3. Discover URLs from sitemap:
   - https://example.com/
   - https://example.com/page
   - https://example.com/admin
   - https://example.com/api/users
4. Filter by robots.txt:
   - / ✅ Allowed (no rule matches)
   - /page ✅ Allowed (no rule matches)
   - /admin ❌ Blocked (Disallow: /admin)
   - /api/users ❌ Blocked (Disallow: /api)
5. Result: 2 URLs allowed
6. Store evidence for each decision
```

## Summary

All politeness controls are integrated into:
- **Page Fetch Worker**: Budget, concurrency, delay, robots check, evidence storage
- **URL Discovery Worker**: Robots parsing, URL filtering

Evidence is stored for all robots.txt decisions with matched rules and crawl delays.

