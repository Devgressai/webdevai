# Vercel Environment Variable Setup - AEO Audit Tool

## Environment Variable Required

**Variable Name:** `INTERNAL_AEO_AUDIT_API_URL`

## Setup Instructions

### Option 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add:
   - **Name:** `INTERNAL_AEO_AUDIT_API_URL`
   - **Value:** `https://www.webvello.com/apps/aeo-audit/api/scans`
   - **Environment:** Select `Production`, `Preview`, and `Development`
6. Click **Save**
7. **Redeploy** your project (or push a new commit)

### Option 2: Vercel CLI

```bash
# Add environment variable for all environments
vercel env add INTERNAL_AEO_AUDIT_API_URL production
# When prompted, enter: https://www.webvello.com/apps/aeo-audit/api/scans

vercel env add INTERNAL_AEO_AUDIT_API_URL preview
# When prompted, enter: https://www.webvello.com/apps/aeo-audit/api/scans

vercel env add INTERNAL_AEO_AUDIT_API_URL development
# When prompted, enter: http://localhost:3000/apps/aeo-audit/api/scans
```

### Option 3: If Internal Tool is Separate Service

If the internal audit tool is deployed as a separate Vercel project:

1. Get the deployment URL from the internal tool's Vercel project
2. Set `INTERNAL_AEO_AUDIT_API_URL` to that URL + `/apps/aeo-audit/api/scans`
   - Example: `https://audit-tool-xyz.vercel.app/apps/aeo-audit/api/scans`

## Value Examples

### Same Domain (Recommended)
```
https://www.webvello.com/apps/aeo-audit/api/scans
```

### Separate Service
```
https://your-audit-tool.vercel.app/apps/aeo-audit/api/scans
```

### Local Development
```
http://localhost:3000/apps/aeo-audit/api/scans
```

## How It Works

The proxy route (`/app/api/aeo-audit/route.ts`) will:
1. **First try**: Relative path on same domain (`/apps/aeo-audit/api/scans`)
2. **Fallback**: Use `INTERNAL_AEO_AUDIT_API_URL` if relative path fails
3. **Error**: If both fail, return helpful error message

## After Adding Variable

1. **Redeploy** your project:
   ```bash
   git commit --allow-empty -m "Trigger redeploy for AEO audit env var"
   git push
   ```

2. **Or manually redeploy** in Vercel Dashboard:
   - Go to **Deployments**
   - Click `...` on latest deployment
   - Click **Redeploy**

## Testing

After deployment, test the audit page:
1. Visit: `https://www.webvello.com/aeo-audit`
2. Enter a domain (e.g., `example.com`)
3. Click "Start Free Audit"
4. Should successfully create scan (no error message)

## Troubleshooting

### Error: "Service unavailable"
- Check that `INTERNAL_AEO_AUDIT_API_URL` is set correctly
- Verify the internal tool is deployed and accessible
- Check Vercel logs for connection errors

### Error: "Configuration required"
- Environment variable not set
- Add `INTERNAL_AEO_AUDIT_API_URL` in Vercel

### Error: "Rate limit exceeded"
- Too many requests from same IP
- Wait a few minutes and try again

