# Vercel Environment Variable Setup - AEO Audit Tool

## Environment Variable (Optional)

**Variable Name:** `INTERNAL_AEO_AUDIT_API_URL`

The proxy route will try to call the internal audit tool's API. If the internal tool is deployed on the same domain, it will automatically use the relative path. If it's deployed separately, set this environment variable.

## Setup Instructions

### Option 1: Same Domain (No Config Needed)

If the internal tool is accessible at `/apps/aeo-audit/api/scans` on the same domain, no configuration is needed. The proxy will automatically use the relative path.

### Option 2: Separate Deployment (Set Environment Variable)

If the internal audit tool is deployed as a separate service:

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add:
   - **Name:** `INTERNAL_AEO_AUDIT_API_URL`
   - **Value:** Full URL to the internal tool's API (e.g., `https://audit-tool.vercel.app/apps/aeo-audit/api/scans`)
   - **Environment:** Select `Production`, `Preview`, and `Development`
6. Click **Save**
7. **Redeploy** your project

## Required Environment Variables (for Internal Tool)

The internal audit tool (`apps/aeo-audit`) needs these environment variables:

### Required:
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string for BullMQ queues

### Optional:
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

