# Error Storage Documentation

## Overview

The Page Fetch worker stores errors in multiple locations to ensure comprehensive tracking and debugging capabilities.

## Error Storage Locations

### 1. Page.metadata.error

**Location**: `Page` table, `metadata` JSON field

**Format**:
```json
{
  "metadata": {
    "error": "Error message string" | null
  }
}
```

**When Stored**:
- Network errors (timeout, connection failed)
- HTTP errors (4xx, 5xx)
- Redirect errors (too many redirects, invalid redirect)
- Skip pattern matches

**Example**:
```json
{
  "error": "Exceeded maximum redirects (10)"
}
```

### 2. Evidence (fetch_error)

**Location**: `Evidence` table

**Type**: `fetch_error`

**Format**:
```typescript
{
  pageId: string
  type: 'fetch_error'
  content: string  // Error message
  metadata: {
    errorType: 'fetch_error'
    statusCode: number  // 0 if network error, actual code if HTTP error
  }
}
```

**When Stored**:
- Only when an error occurs during fetch
- One record per failed fetch

**Example**:
```json
{
  "type": "fetch_error",
  "content": "Request timeout after 30000ms",
  "metadata": {
    "errorType": "fetch_error",
    "statusCode": 0
  }
}
```

### 3. Evidence (http_response)

**Location**: `Evidence` table

**Type**: `http_response`

**Format**:
```typescript
{
  pageId: string
  type: 'http_response'
  content: JSON.stringify({
    statusCode: number
    finalUrl: string
    contentType: string | null
    contentLength: number
    redirectCount: number
    success: boolean
    error: string | undefined  // Only present if error occurred
  })
  metadata: {
    statusCode: number
    finalUrl: string
    contentType: string | null
    contentLength: number
    redirectCount: number
    success: boolean
  }
}
```

**When Stored**:
- Always stored (even on success)
- Error field only present if error occurred

**Example (with error)**:
```json
{
  "type": "http_response",
  "content": "{\"statusCode\":0,\"finalUrl\":\"https://example.com\",\"contentType\":null,\"contentLength\":0,\"redirectCount\":0,\"success\":false,\"error\":\"Request timeout\"}",
  "metadata": {
    "statusCode": 0,
    "success": false
  }
}
```

## Error Types and Storage

### Network Errors

**Examples**:
- Connection timeout
- DNS resolution failure
- Connection refused
- Network unreachable

**Storage**:
- ✅ `Page.metadata.error`: Error message
- ✅ `Evidence (fetch_error)`: Full error details
- ✅ `Evidence (http_response)`: `success: false`, `error` field included
- ✅ `Page.statusCode`: `0` (no HTTP response)

**Example**:
```json
// Page.metadata
{
  "error": "Request timeout after 30000ms"
}

// Evidence (fetch_error)
{
  "content": "Request timeout after 30000ms",
  "metadata": {
    "errorType": "fetch_error",
    "statusCode": 0
  }
}
```

### HTTP Errors (4xx)

**Examples**:
- 404 Not Found
- 403 Forbidden
- 401 Unauthorized

**Storage**:
- ✅ `Page.statusCode`: Actual HTTP status code (404, 403, etc.)
- ✅ `Page.metadata.error`: Error message (if applicable)
- ✅ `Evidence (http_response)`: Status code, `success: false`
- ❌ `Evidence (fetch_error)`: Not stored (HTTP response is sufficient)

**Example**:
```json
// Page
{
  "statusCode": 404,
  "metadata": {
    "error": null  // No error, just 404 response
  }
}

// Evidence (http_response)
{
  "content": "{\"statusCode\":404,\"success\":false}",
  "metadata": {
    "statusCode": 404,
    "success": false
  }
}
```

### HTTP Errors (5xx)

**Examples**:
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

**Storage**:
- ✅ `Page.statusCode`: Actual HTTP status code
- ✅ `Page.metadata.error`: May include retry information
- ✅ `Evidence (http_response)`: Status code, `success: false`
- ✅ **Automatic Retry**: Worker retries with exponential backoff
- ❌ `Evidence (fetch_error)`: Not stored (HTTP response is sufficient)

**Note**: 5xx errors trigger automatic retries. Final result stored after retries exhausted.

### Rate Limiting (429)

**Storage**:
- ✅ `Page.statusCode`: 429
- ✅ `Page.metadata.error`: May include retry information
- ✅ `Evidence (http_response)`: Status code, `success: false`
- ✅ **Automatic Retry**: Worker retries with exponential backoff
- ❌ `Evidence (fetch_error)`: Not stored (HTTP response is sufficient)

### Redirect Errors

**Examples**:
- Too many redirects (> 10)
- Invalid redirect URL
- Redirect loop

**Storage**:
- ✅ `Page.statusCode`: `310` (custom code for too many redirects) or last redirect code
- ✅ `Page.metadata.error`: Error message
- ✅ `Evidence (fetch_error)`: Full error details
- ✅ `Evidence (http_response)`: `success: false`, `error` field
- ✅ `Evidence (redirect_chain)`: Partial redirect chain (up to error)

**Example**:
```json
// Page.metadata
{
  "error": "Exceeded maximum redirects (10)",
  "redirectCount": 10
}

// Evidence (fetch_error)
{
  "content": "Exceeded maximum redirects (10)",
  "metadata": {
    "errorType": "fetch_error",
    "statusCode": 310
  }
}
```

### Robots.txt Blocked

**Storage**:
- ✅ `Page.statusCode`: HTTP status code (still fetched)
- ✅ `Page.metadata.robotsBlocked`: `true`
- ✅ `Page.metadata.confidence`: `"low"`
- ✅ `Page.metadata.skipContentExtraction`: `true`
- ✅ `Page.metadata.error`: Reason from robots check
- ✅ `Evidence (robots_check)`: Full robots check result
- ✅ `Evidence (http_response)`: Status code, but contentLength: 0

**Example**:
```json
// Page.metadata
{
  "robotsBlocked": true,
  "confidence": "low",
  "skipContentExtraction": true,
  "error": "Path disallowed by robots.txt: /admin"
}

// Evidence (robots_check)
{
  "content": "{\"allowed\":false,\"confidence\":\"low\",\"reason\":\"Path disallowed by robots.txt: /admin\"}",
  "metadata": {
    "allowed": false,
    "confidence": "low",
    "reason": "Path disallowed by robots.txt: /admin"
  }
}
```

### Skip Pattern Matches

**Storage**:
- ✅ `Page.metadata.error`: `"URL matches skip pattern"`
- ✅ `Evidence (fetch_error)`: Error message
- ❌ **No Page Record**: Page is not created (returns early)

**Example**:
```json
// Worker Result
{
  "success": false,
  "statusCode": 0,
  "error": "URL matches skip pattern"
}
```

## Querying Errors

### Find All Failed Fetches

```typescript
const failedPages = await prisma.page.findMany({
  where: {
    scanId: 'scan_123',
    OR: [
      { statusCode: { gte: 400 } },
      { metadata: { path: ['error'], not: null } },
    ],
  },
})
```

### Find Pages with Errors

```typescript
const errorEvidence = await prisma.evidence.findMany({
  where: {
    type: 'fetch_error',
    page: {
      scanId: 'scan_123',
    },
  },
})
```

### Find Robots-Blocked Pages

```typescript
const blockedPages = await prisma.page.findMany({
  where: {
    scanId: 'scan_123',
    metadata: {
      path: ['robotsBlocked'],
      equals: true,
    },
  },
})
```

## Error Recovery

### Retry Logic

Errors that trigger automatic retries:
- **429 (Rate Limit)**: Retried with exponential backoff
- **5xx (Server Errors)**: Retried with exponential backoff

Retry attempts are tracked in job metadata, not stored in database.

### Manual Retry

To manually retry a failed page:

```typescript
// Re-enqueue page_fetch job
await addJob(QUEUE_NAMES.PAGE_FETCH, {
  scanId: 'scan_123',
  url: 'https://example.com',
  retryCount: 0,  // Reset retry count
})
```

## Summary

| Error Type | Page.metadata.error | Evidence (fetch_error) | Evidence (http_response) | Page.statusCode |
|------------|---------------------|------------------------|--------------------------|-----------------|
| Network Error | ✅ | ✅ | ✅ (success: false) | 0 |
| HTTP 4xx | ✅ (if applicable) | ❌ | ✅ (success: false) | Actual code |
| HTTP 5xx | ✅ (after retries) | ❌ | ✅ (success: false) | Actual code |
| 429 Rate Limit | ✅ (after retries) | ❌ | ✅ (success: false) | 429 |
| Redirect Error | ✅ | ✅ | ✅ (success: false) | 310 or last code |
| Robots Blocked | ✅ | ❌ | ✅ (contentLength: 0) | Actual code |
| Skip Pattern | N/A (no page) | ✅ | N/A | 0 |

All errors are traceable through the Evidence table, and critical errors are also stored in Page.metadata for quick filtering.

