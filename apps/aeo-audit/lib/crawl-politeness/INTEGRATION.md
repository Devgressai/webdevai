# Crawl Politeness Integration

## How Controls Plug Into Workers

### Page Fetch Worker (`lib/page-fetch/worker.ts`)

**Integration Points**:

1. **Budget Check** (Line ~36)
   - Checks scan budget before processing
   - Returns error if budget exceeded

2. **Host Concurrency** (Lines ~50-60)
   - Extracts host from URL
   - Waits for available concurrency slot (max 2 per host)
   - Increments counter before request
   - Decrements counter after request (in finally block)

3. **Crawl Delay** (Line ~75)
   - Waits for configured delay (200-500ms default)
   - Respects robots.txt crawl-delay if present

4. **Robots Check** (Line ~78)
   - Checks robots.txt using enhanced parser
   - Stores evidence with matched rule

5. **Evidence Storage** (Line ~81)
   - Stores robots decision as Evidence
   - Type: `robots_allowed` or `blocked_by_robots`
   - Metadata includes matched rule

**Flow**:
```
1. Check budget
2. Extract host
3. Wait for concurrency slot
4. Increment concurrency counter
5. Wait for crawl delay
6. Check robots.txt
7. Store robots evidence
8. Fetch page
9. Decrement concurrency counter (finally)
```

### URL Discovery Worker (`lib/url-discovery/worker.ts`)

**Integration Points**:

1. **Robots Parsing** (Line ~66)
   - Fetches robots.txt
   - Parses with enhanced parser using configured USER_AGENT
   - Falls back to "*" if no matching rule

2. **URL Filtering** (Lines ~115-130)
   - Filters discovered URLs by robots.txt rules
   - Uses `isUrlAllowedByRobots()` function
   - Respects Disallow/Allow patterns with proper precedence

**Flow**:
```
1. Fetch robots.txt
2. Parse with enhanced parser
3. Discover URLs (sitemap or crawl)
4. Filter URLs by robots.txt rules
5. Cap and deduplicate
6. Persist to database
```

## Configuration

### Environment Variables

```env
# Crawler settings
MAX_PAGES=200                    # Maximum pages per scan
MAX_SCAN_TIME_MINUTES=60         # Maximum time per scan (minutes)
USER_AGENT=AEO-Audit/1.0         # User agent for robots.txt matching
```

### Concurrency Limits

**Default**: 2 concurrent requests per host

**Configurable**:
```typescript
const concurrencyConfig = {
  maxConcurrent: 2,
  keyPrefix: 'host_concurrency:',
  ttlSeconds: 300,
}
```

### Delays

**Default**: 200-500ms random delay

**Configurable**:
```typescript
const delayConfig = {
  minDelayMs: 200,
  maxDelayMs: 500,
  keyPrefix: 'host_delay:',
}
```

**Robots.txt crawl-delay**: If specified in robots.txt, uses that value (in seconds, converted to milliseconds)

## Evidence Storage

### Evidence Types

1. **`robots_allowed`**: URL is allowed by robots.txt
2. **`blocked_by_robots`**: URL is blocked by robots.txt

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

## Example Flow

### Page Fetch

```
Request: https://example.com/page

1. Check budget: ✅ Within budget
2. Extract host: example.com
3. Check concurrency: 1/2 slots used, ✅ allowed
4. Increment counter: 2/2 slots used
5. Calculate delay: 350ms needed
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
```

## Error Handling

### Concurrency Timeout

If no slot available within 10 seconds:
- Returns error: "Timeout waiting for host concurrency slot"
- Does not proceed with fetch

### Budget Exceeded

If budget exceeded:
- Returns error with reason (page limit or time limit)
- Does not proceed with fetch

### Robots Check Failure

If robots.txt check fails:
- Defaults to allowed (fail open)
- Stores evidence with low confidence
- Proceeds with fetch

## Next Steps

1. Add robots.txt caching with TTL
2. Add per-host rate limiting (in addition to concurrency)
3. Add adaptive delays based on server response times
4. Add budget warnings before limits are reached
5. Add more sophisticated pattern matching (regex support)

