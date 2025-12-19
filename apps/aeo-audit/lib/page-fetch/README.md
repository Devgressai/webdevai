# Page Fetch Implementation

## Overview

The Page Fetch worker fetches HTML pages with comprehensive tracking:
- Redirect chain capture (max 10 redirects)
- Status code, final URL, content-type, timing, response size
- Robots.txt compliance checking
- Automatic retry for 429/5xx errors with exponential backoff
- Evidence storage for all fetch events

## Process Flow

```
1. Check if URL should be skipped (admin, API, etc.)
   ↓
2. Check robots.txt (from cached Evidence)
   ↓
3. If blocked by robots:
   → Fetch minimal data (status code only)
   → Set confidence: low
   → Skip content extraction
   ↓
4. If allowed:
   → Fetch page with redirect tracking
   → Handle 429/5xx retries with exponential backoff
   ↓
5. Store Page record:
   - statusCode, loadTime, finalUrl, contentType
   - metadata: redirectCount, confidence, robotsBlocked, etc.
   ↓
6. Store Evidence entries:
   - http_response
   - http_headers
   - redirect_chain
   - robots_check
   - fetch_timing
   - fetch_error (if error occurred)
```

## Configuration

### Environment Variables

```env
PAGE_FETCH_MAX_REDIRECTS=10          # Max redirects to follow
PAGE_FETCH_TIMEOUT=30000              # Timeout per fetch (ms)
PAGE_FETCH_RETRY_ATTEMPTS=3           # Max retry attempts
PAGE_FETCH_RETRY_BACKOFF=2000         # Base backoff delay (ms)
PAGE_FETCH_USER_AGENT=AEO-Audit-Bot/1.0
PAGE_FETCH_RESPECT_ROBOTS=true        # Check robots.txt
```

### Default Values

| Setting | Default | Description |
|---------|---------|-------------|
| `maxRedirects` | 10 | Maximum redirects to follow |
| `timeout` | 30000ms | Request timeout |
| `retryAttempts` | 3 | Max retries for 429/5xx |
| `retryBackoffBase` | 2000ms | Base delay for exponential backoff |
| `userAgent` | AEO-Audit-Bot/1.0 | User agent string |
| `respectRobots` | true | Check robots.txt rules |

## Redirect Chain Tracking

The worker tracks the complete redirect chain:

```typescript
redirectChain: [
  {
    url: "https://example.com",
    statusCode: 301,
    location: "https://www.example.com",
    headers: { ... }
  },
  {
    url: "https://www.example.com",
    statusCode: 200,
    headers: { ... }
  }
]
```

- **Max redirects**: 10 (configurable)
- **Tracking**: Each redirect step includes URL, status code, location header, and all headers
- **Final URL**: The URL after all redirects

## Retry Logic

### Automatic Retries

The worker automatically retries on:
- **429 (Too Many Requests)**: Rate limiting
- **5xx (Server Errors)**: 500, 502, 503, 504, etc.

### Exponential Backoff

Retry delays increase exponentially:
- Attempt 1: 2 seconds
- Attempt 2: 4 seconds
- Attempt 3: 8 seconds

### Retry Configuration

- **Max attempts**: 3 (configurable)
- **Base delay**: 2000ms (configurable)
- **Formula**: `baseDelay * 2^(attempt - 1)`

## Robots.txt Checking

### How It Works

1. **Cache Lookup**: Retrieves robots.txt data from Evidence table (stored by URL Discovery)
2. **Path Matching**: Checks if URL path matches disallowed patterns
3. **Confidence Levels**:
   - **High**: robots.txt found, path explicitly allowed
   - **Medium**: No robots.txt found
   - **Low**: Path disallowed by robots.txt

### When Blocked

If URL is blocked by robots.txt:
- ✅ Page record is still created (for tracking)
- ✅ Status code is fetched
- ❌ Content extraction is skipped (`skipContentExtraction: true`)
- ⚠️ Confidence set to `low`
- 📝 Evidence stored with reason

## Page Record Storage

### Fields Stored

```typescript
{
  scanId: string
  url: string              // Original URL
  statusCode: number       // Final HTTP status code
  loadTime: number         // Duration in milliseconds
  metadata: {
    status: 'fetched'
    finalUrl: string       // URL after redirects
    contentType: string    // Content-Type header
    contentLength: number  // Response size (0 if robots blocked)
    redirectCount: number // Number of redirects
    robotsBlocked: boolean
    confidence: 'high' | 'medium' | 'low'
    skipContentExtraction: boolean
    fetchedAt: string      // ISO timestamp
    error: string | null   // Error message if failed
  }
}
```

## Evidence Storage

### Evidence Types

All fetch events are stored as Evidence records:

#### 1. `http_response`
- **Content**: JSON with statusCode, finalUrl, contentType, contentLength, redirectCount, success, error
- **Metadata**: Status code, final URL, content type, content length, redirect count, success flag

#### 2. `http_headers`
- **Content**: JSON of all response headers
- **Metadata**: Header count, content-type, server

#### 3. `redirect_chain`
- **Content**: JSON array of redirect steps
- **Metadata**: Redirect count, final URL
- **Only stored if redirects occurred**

#### 4. `robots_check`
- **Content**: JSON with allowed, confidence, reason, disallowedPaths
- **Metadata**: Allowed flag, confidence level, reason

#### 5. `fetch_timing`
- **Content**: JSON with startTime, endTime, duration
- **Metadata**: Duration, start time, end time

#### 6. `fetch_error`
- **Content**: Error message string
- **Metadata**: Error type, status code
- **Only stored if error occurred**

## Error Handling

### Error Storage

Errors are stored in multiple places:

1. **Page.metadata.error**: Error message string (if fetch failed)
2. **Evidence (fetch_error)**: Full error details
3. **Evidence (http_response)**: Error included in response data

### Error Types

#### Network Errors
- **Timeout**: Request exceeded timeout
- **Connection Error**: Failed to connect
- **DNS Error**: Domain resolution failed

#### HTTP Errors
- **4xx**: Client errors (stored in statusCode)
- **5xx**: Server errors (retried automatically)
- **429**: Rate limiting (retried automatically)

#### Redirect Errors
- **Too Many Redirects**: Exceeded maxRedirects limit
- **Invalid Redirect URL**: Malformed location header

### Error Evidence Format

```typescript
{
  type: 'fetch_error',
  content: 'Error message string',
  metadata: {
    errorType: 'fetch_error',
    statusCode: 0,  // 0 if network error, actual code if HTTP error
  }
}
```

## Skip Patterns

URLs matching these patterns are skipped entirely:
- `/admin`, `/api/*`, `/cart`, `/checkout`
- `/account`, `/login`, `/logout`, `/register`
- `/_next/*`, `/static/*`
- File extensions: `.pdf`, `.zip`, `.doc`, images, etc.

Skipped URLs return:
- `success: false`
- `statusCode: 0`
- `error: 'URL matches skip pattern'`
- No page record created

## Confidence Levels

### High Confidence
- ✅ robots.txt found and path allowed
- ✅ Successful fetch (2xx status)
- ✅ Content extracted

### Medium Confidence
- ⚠️ No robots.txt found
- ⚠️ HTTP error (4xx, but not robots blocked)
- ⚠️ Content may be incomplete

### Low Confidence
- ❌ Blocked by robots.txt
- ❌ Network/fetch errors
- ❌ Too many redirects
- ❌ Content extraction skipped

## Example Usage

```typescript
import { fetchPage } from '@/lib/page-fetch/worker'

const result = await fetchPage({
  scanId: 'scan_123',
  url: 'https://example.com',
  retryCount: 0,
})

console.log(`Status: ${result.statusCode}`)
console.log(`Final URL: ${result.finalUrl}`)
console.log(`Load Time: ${result.loadTime}ms`)
console.log(`Robots Allowed: ${result.robotsAllowed}`)
console.log(`Confidence: ${result.confidence}`)
```

## Performance Considerations

- **Concurrency**: 20 workers (configurable)
- **Timeout**: 30 seconds per fetch
- **Batch Processing**: Evidence stored individually (can be optimized)
- **Redirect Tracking**: In-memory, no database writes until final

## Next Steps

1. Implement content extraction (separate job)
2. Add caching for robots.txt checks
3. Optimize evidence batch inserts
4. Add metrics/monitoring

