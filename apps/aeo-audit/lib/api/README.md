# API Protection Utilities

This directory contains utilities for protecting the API from abuse.

## Components

### 1. Domain Validation (`validation/domain.ts`)

Validates domains and prevents SSRF attacks:

- **Hostname validation**: Ensures valid hostname format
- **Localhost detection**: Blocks localhost and local domains
- **Private IP detection**: Blocks private IP ranges (10.0.0.0/8, 192.168.0.0/16, etc.)
- **SSRF prevention**: Blocks domains that could resolve to private IPs

**Functions**:
- `validateDomain(domain: string)`: Main validation function
- `isValidHostname(domain: string)`: Checks hostname format
- `isLocalhost(domain: string)`: Detects localhost
- `isPrivateIP(ip: string)`: Checks if IP is in private range
- `normalizeDomain(domain: string)`: Normalizes domain (removes protocol, paths)

### 2. Rate Limiting (`rate-limit.ts`)

Implements rate limiting using Redis:

- **Per-IP rate limiting**: Tracks requests per IP address
- **Sliding window**: Uses Redis sorted sets for efficient tracking
- **Configurable**: Window size and max requests can be configured
- **Default**: 10 requests per minute

**Functions**:
- `checkRateLimit(identifier: string, config?)`: Checks if request is allowed
- `getClientIP(request: Request)`: Extracts client IP from request headers

**Headers returned**:
- `X-RateLimit-Limit`: Maximum requests allowed
- `X-RateLimit-Remaining`: Remaining requests in window
- `X-RateLimit-Reset`: When the rate limit resets
- `Retry-After`: Seconds to wait before retrying

### 3. Concurrent Scan Limiting (`concurrent-scans.ts`)

Prevents users from running too many scans simultaneously:

- **Per-user/session limit**: Tracks concurrent scans per identifier
- **Redis-based tracking**: Uses Redis sets to track active scans
- **Configurable**: Max concurrent scans can be configured
- **Default**: 3 concurrent scans per user/session

**Functions**:
- `checkConcurrentScans(identifier: string, config?)`: Checks if user can start new scan
- `registerScan(identifier: string, scanId: string)`: Registers a scan as active
- `unregisterScan(identifier: string, scanId: string)`: Unregisters a completed scan
- `getScanIdentifier(request: Request)`: Gets identifier for rate limiting

## Usage in API Routes

### Example: POST /api/scans

```typescript
import { validateDomain, normalizeDomain } from '@/lib/api/validation/domain'
import { checkRateLimit, getClientIP } from '@/lib/api/rate-limit'
import { checkConcurrentScans, registerScan, getScanIdentifier } from '@/lib/api/concurrent-scans'

export async function POST(request: NextRequest) {
  // 1. Rate limiting
  const clientIP = getClientIP(request)
  const rateLimit = await checkRateLimit(clientIP)
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    )
  }

  // 2. Domain validation
  const { domain } = await request.json()
  const normalized = normalizeDomain(domain)
  const validation = validateDomain(normalized)
  if (!validation.valid) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    )
  }

  // 3. Concurrent scan check
  const identifier = getScanIdentifier(request)
  const concurrent = await checkConcurrentScans(identifier)
  if (!concurrent.allowed) {
    return NextResponse.json(
      { error: 'Too many concurrent scans' },
      { status: 429 }
    )
  }

  // 4. Create scan
  const scan = await createScan(normalized)
  await registerScan(identifier, scan.id)

  return NextResponse.json({ scan }, { status: 201 })
}
```

## Error Messages

All error messages are designed to be user-friendly and suitable for UI display:

- **Rate limit**: "Too many requests. Please try again later."
- **Invalid domain**: "Invalid hostname format" or "Localhost and local domains are not allowed"
- **Concurrent scans**: "You have X active scans. Maximum allowed: Y. Please wait for existing scans to complete."

## Configuration

### Rate Limiting

```typescript
const customRateLimit = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 20,     // 20 requests per minute
  keyPrefix: 'custom_rate_limit:',
}

const result = await checkRateLimit(clientIP, customRateLimit)
```

### Concurrent Scans

```typescript
const customConcurrent = {
  maxConcurrent: 5,      // 5 concurrent scans
  keyPrefix: 'custom_scans:',
  ttlSeconds: 7200,      // 2 hours
}

const result = await checkConcurrentScans(identifier, customConcurrent)
```

## Testing

Unit tests are located in `lib/api/validation/__tests__/domain.test.ts`.

Run tests:
```bash
npm test
```

## Security Considerations

1. **Fail Open**: Rate limiting and concurrent scan checks fail open (allow requests) if Redis is unavailable to prevent service disruption
2. **IP Extraction**: Uses multiple headers (X-Forwarded-For, X-Real-IP, CF-Connecting-IP) to handle proxies
3. **SSRF Prevention**: Blocks all private IP ranges and suspicious domain patterns
4. **TTL Management**: Redis keys have TTL to prevent memory leaks

## Next Steps

1. Add session-based rate limiting (in addition to IP-based)
2. Add user authentication and per-user limits
3. Add IP whitelist/blacklist
4. Add more sophisticated SSRF detection (actual DNS resolution)
5. Add monitoring/alerting for abuse patterns

