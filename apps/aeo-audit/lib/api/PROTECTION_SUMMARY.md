# API Protection Summary

## Overview

The POST `/api/scans` endpoint is protected with multiple layers of abuse prevention.

## Protection Layers

### 1. Rate Limiting (Per IP)

**Location**: `app/api/scans/route.ts` (lines 18-40)

**Implementation**: `lib/api/rate-limit.ts`

**Protection**:
- **Default**: 10 requests per minute per IP
- **Method**: Redis sorted sets with sliding window
- **Headers**: Returns `X-RateLimit-*` headers
- **Error**: 429 status with `Retry-After` header

**Code**:
```typescript
const clientIP = getClientIP(request)
const rateLimitResult = await checkRateLimit(clientIP)

if (!rateLimitResult.allowed) {
  return NextResponse.json(
    { error: 'Rate limit exceeded', message: 'Too many requests. Please try again later.' },
    { status: 429 }
  )
}
```

### 2. Domain Validation

**Location**: `app/api/scans/route.ts` (lines 42-58)

**Implementation**: `lib/api/validation/domain.ts`

**Protection**:
- **Hostname format**: Validates RFC-compliant hostname
- **Localhost blocking**: Blocks `localhost`, `127.0.0.1`, `::1`, etc.
- **Private IP blocking**: Blocks `10.0.0.0/8`, `192.168.0.0/16`, `172.16.0.0/12`, `169.254.0.0/16`
- **SSRF prevention**: Blocks suspicious patterns (`.local`, `.internal`, `.lan`)

**Code**:
```typescript
const normalizedDomain = normalizeDomain(domain)
const domainValidation = validateDomain(normalizedDomain)

if (!domainValidation.valid) {
  return NextResponse.json(
    { error: 'Invalid domain', message: domainValidation.error },
    { status: 400 }
  )
}
```

### 3. Concurrent Scan Limiting

**Location**: `app/api/scans/route.ts` (lines 60-75)

**Implementation**: `lib/api/concurrent-scans.ts`

**Protection**:
- **Default**: 3 concurrent scans per user/session (IP-based for MVP)
- **Method**: Redis sets to track active scans
- **TTL**: 1 hour (scans should complete faster)
- **Error**: 429 status with current scan count

**Code**:
```typescript
const scanIdentifier = getScanIdentifier(request)
const concurrentCheck = await checkConcurrentScans(scanIdentifier)

if (!concurrentCheck.allowed) {
  return NextResponse.json(
    { error: 'Too many concurrent scans', message: '...' },
    { status: 429 }
  )
}
```

### 4. Scan Registration

**Location**: `app/api/scans/route.ts` (line 90)

**Implementation**: `lib/api/concurrent-scans.ts`

**Protection**:
- Registers scan in Redis when created
- Allows cleanup when scan completes
- Prevents memory leaks with TTL

**Code**:
```typescript
await registerScan(scanIdentifier, scan.id)
```

## Error Messages

All error messages are user-friendly and suitable for UI:

1. **Rate Limit**:
   ```json
   {
     "error": "Rate limit exceeded",
     "message": "Too many requests. Please try again later.",
     "retryAfter": 45
   }
   ```

2. **Invalid Domain**:
   ```json
   {
     "error": "Invalid domain",
     "message": "Localhost and local domains are not allowed"
   }
   ```

3. **Concurrent Scans**:
   ```json
   {
     "error": "Too many concurrent scans",
     "message": "You have 3 active scans. Maximum allowed: 3. Please wait for existing scans to complete.",
     "currentScans": 3,
     "maxAllowed": 3
   }
   ```

## Request Flow

```
1. Request arrives at POST /api/scans
   ↓
2. Extract client IP from headers
   ↓
3. Check rate limit (Redis)
   ├─ Rate limited? → Return 429
   └─ Allowed? → Continue
   ↓
4. Parse and validate request body
   ├─ Missing domain? → Return 400
   └─ Valid? → Continue
   ↓
5. Normalize domain (remove protocol, paths)
   ↓
6. Validate domain
   ├─ Invalid hostname? → Return 400
   ├─ Localhost? → Return 400
   ├─ Private IP? → Return 400
   └─ Valid? → Continue
   ↓
7. Check concurrent scans (Redis)
   ├─ Too many? → Return 429
   └─ Allowed? → Continue
   ↓
8. Create scan record (Database)
   ↓
9. Register scan (Redis)
   ↓
10. Enqueue scan job (BullMQ)
   ↓
11. Return success response (201)
```

## Configuration

### Rate Limiting

Default: 10 requests per minute

Can be customized:
```typescript
const customConfig = {
  windowMs: 60 * 1000,  // 1 minute
  maxRequests: 20,      // 20 requests
  keyPrefix: 'custom:',
}

await checkRateLimit(clientIP, customConfig)
```

### Concurrent Scans

Default: 3 concurrent scans

Can be customized:
```typescript
const customConfig = {
  maxConcurrent: 5,
  keyPrefix: 'custom:',
  ttlSeconds: 7200,  // 2 hours
}

await checkConcurrentScans(identifier, customConfig)
```

## Testing

Unit tests are located in:
- `lib/api/validation/__tests__/domain.test.ts`

Run tests:
```bash
npm test
```

Test coverage:
- ✅ Hostname validation
- ✅ Localhost detection
- ✅ Private IP detection
- ✅ SSRF pattern detection
- ✅ Domain normalization

## Security Considerations

1. **Fail Open**: Rate limiting and concurrent scan checks fail open if Redis is unavailable (allows requests to prevent service disruption)

2. **IP Extraction**: Uses multiple headers to handle proxies:
   - `X-Forwarded-For` (first IP)
   - `X-Real-IP`
   - `CF-Connecting-IP` (Cloudflare)

3. **SSRF Prevention**: Blocks:
   - All private IP ranges
   - Localhost variations
   - Suspicious domain patterns (`.local`, `.internal`, `.lan`)

4. **TTL Management**: Redis keys have TTL to prevent memory leaks

5. **Clear Error Messages**: All errors are user-friendly and suitable for UI display

## Files Created

1. `lib/api/validation/domain.ts` - Domain validation and SSRF prevention
2. `lib/api/rate-limit.ts` - Rate limiting with Redis
3. `lib/api/concurrent-scans.ts` - Concurrent scan limiting
4. `lib/api/index.ts` - Exports
5. `lib/api/validation/__tests__/domain.test.ts` - Unit tests
6. `lib/api/README.md` - Documentation
7. `app/api/scans/route.ts` - Updated with protections

## Next Steps

1. Add session-based rate limiting (in addition to IP-based)
2. Add user authentication and per-user limits
3. Add IP whitelist/blacklist
4. Add more sophisticated SSRF detection (actual DNS resolution)
5. Add monitoring/alerting for abuse patterns
6. Add integration tests for the full API flow

