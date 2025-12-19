# Vercel Environment Variable Setup - AEO Audit Tool

## ✅ No Environment Variable Needed!

The AEO audit proxy route now uses a **shared scan creation function** (`lib/aeo-audit/create-scan.ts`) that directly accesses the same database and queue system as the internal tool. This means:

- ✅ **No `INTERNAL_AEO_AUDIT_API_URL` needed**
- ✅ Both apps share the same `DATABASE_URL` and `REDIS_URL`
- ✅ Scans are created directly in the database
- ✅ Jobs are enqueued directly to the same BullMQ queues

## Required Environment Variables

Make sure these are set in Vercel (they should already be configured for the internal tool):

### Required:
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string for BullMQ queues

### Optional (for the internal tool):
- `NEXT_PUBLIC_APP_URL` - Base URL of the application
- `MAX_PAGES` - Maximum pages to scan (default: 200)
- `MAX_DEPTH` - Maximum crawl depth (default: 2)
- `USER_AGENT` - User agent string for crawler
- `EVIDENCE_MODE` - "full" or "extract-only" (default: "full")
- `AEO_AUDIT_PASSWORD` - Password for internal tool authentication

## How It Works

The proxy route (`/app/api/aeo-audit/route.ts`) now:
1. **Imports** the shared `createScan` function from `lib/aeo-audit/create-scan.ts`
2. **Calls** the function directly (no HTTP requests needed)
3. **Uses** the same database and queues as the internal tool
4. **Returns** the scan ID to the client

## Setup Steps

1. **Ensure database and Redis are configured:**
   - `DATABASE_URL` should point to your PostgreSQL database
   - `REDIS_URL` should point to your Redis instance
   - Both should be the same values used by the internal tool

2. **Deploy the code:**
   ```bash
   git push origin main
   ```
   Vercel will automatically deploy

3. **Test the audit page:**
   - Visit: `https://www.webvello.com/aeo-audit`
   - Enter a domain (e.g., `example.com`)
   - Click "Start Free Audit"
   - Should successfully create scan and return a scan ID

## Troubleshooting

### Error: "Internal server error"
- Check that `DATABASE_URL` is set correctly
- Check that `REDIS_URL` is set correctly
- Verify the database schema matches the internal tool's Prisma schema
- Check Vercel logs for detailed error messages

### Error: "Rate limit exceeded"
- Too many requests from same IP
- Wait a few minutes and try again
- Default limit: 10 requests per minute per IP

### Error: "Too many concurrent scans"
- Maximum 3 concurrent scans per user/IP
- Wait for existing scans to complete

### Error: "Invalid domain"
- Domain must be a valid hostname
- Localhost and private IPs are not allowed (SSRF protection)
- Check the domain format (e.g., `example.com` not `https://example.com`)

