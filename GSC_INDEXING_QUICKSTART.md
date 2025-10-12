# 🚀 GSC & Indexing API - Quick Start Guide

## ✅ What's Been Created

Your project now has complete Google Search Console and Indexing API integration:

### 📁 New Files Created

**API Routes:**
- `/app/api/gsc/analytics/route.ts` - Get search analytics data
- `/app/api/gsc/sites/route.ts` - List all GSC sites
- `/app/api/gsc/sitemaps/route.ts` - Manage sitemaps
- `/app/api/indexing/notify/route.ts` - Notify Google about URL updates
- `/app/api/test-gsc-auth/route.ts` - Test authentication

**Utilities:**
- `/lib/google-api.ts` - Google API authentication
- `/lib/gsc-helpers.ts` - GSC client-side helpers
- `/lib/indexing-helpers.ts` - Indexing API helpers

**Documentation:**
- `/docs/GSC_INDEXING_API_GUIDE.md` - Complete guide

### 📦 Dependencies Installed

- `googleapis` - Google APIs client library
- `@google-cloud/local-auth` - Local authentication helper

---

## 🎯 Quick Setup (5 Steps)

### Step 1: Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create/select a project
3. Enable these APIs:
   - ✅ Google Search Console API
   - ✅ Google Indexing API
4. Create Service Account:
   - Go to **APIs & Services > Credentials**
   - **Create Credentials > Service Account**
   - Name: `webvello-gsc-indexing`
   - Role: **Owner**
5. Generate JSON Key:
   - Click on service account
   - **Keys > Add Key > Create new key**
   - Format: **JSON**
   - Download the file

### Step 2: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (website)
3. Go to **Settings > Users and permissions**
4. Click **Add user**
5. Enter the service account email (from JSON file)
6. Grant **Owner** permission

### Step 3: Environment Variables

Create `.env.local` file (or add to existing):

```bash
# Option 1: Individual credentials (easier for local dev)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Key-Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SEARCH_CONSOLE_SITE_URL=https://yourdomain.com

# Option 2: Base64 encoded JSON (better for production)
# GOOGLE_APPLICATION_CREDENTIALS_JSON=base64-string-here

# Optional: Protect APIs with secret key
API_SECRET_KEY=choose-a-strong-secret-key

# Site URL
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

**How to get credentials from JSON file:**

```bash
# Service Account Email
cat service-account.json | grep client_email

# Private Key (copy the entire key including BEGIN/END lines)
cat service-account.json | grep -A 100 private_key

# Or convert entire JSON to base64:
base64 -i service-account.json
```

### Step 4: Test Authentication

Start your dev server and test:

```bash
npm run dev
```

Visit: `http://localhost:3000/api/test-gsc-auth`

You should see:
```json
{
  "success": true,
  "authenticated": true,
  "message": "✅ Authentication successful!"
}
```

### Step 5: Deploy Environment Variables

**For Netlify:**
1. Go to Site settings > Environment variables
2. Add each variable (use Option 2 - base64 JSON for production)
3. Redeploy

**For Vercel:**
```bash
vercel env add GOOGLE_APPLICATION_CREDENTIALS_JSON
# Paste base64 string when prompted
```

---

## 🎉 Quick Test Commands

### Test GSC Analytics

```bash
# Get top queries from last 7 days
curl "http://localhost:3000/api/gsc/analytics?startDate=2025-10-05&endDate=2025-10-12&dimensions=query&rowLimit=10" \
  -H "x-api-key: your-secret-key"
```

### Test Indexing API

```bash
# Notify Google about a URL update
curl -X POST http://localhost:3000/api/indexing/notify \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{
    "url": "https://yourdomain.com/services/web-design",
    "type": "URL_UPDATED"
  }'
```

### List Your Sites

```bash
curl http://localhost:3000/api/gsc/sites \
  -H "x-api-key: your-secret-key"
```

---

## 💡 Quick Usage Examples

### Get Search Performance Data

```typescript
import { getTopQueries, getTopPages } from '@/lib/gsc-helpers';

// Get top 25 queries from last 30 days
const queries = await getTopQueries(30, 25);

// Get top 25 pages
const pages = await getTopPages(30, 25);

console.log('Top query:', queries[0]);
// { keys: ['web design oklahoma city'], clicks: 42, impressions: 1250, ctr: 0.0336, position: 8.5 }
```

### Auto-Notify Google on Content Publish

```typescript
import { autoNotifyOnPublish } from '@/lib/indexing-helpers';

// In your API route or server action
export async function POST(request: Request) {
  // ... create/update content ...
  
  // Automatically notify Google (non-blocking)
  await autoNotifyOnPublish('/blog/my-new-post');
  
  return Response.json({ success: true });
}
```

### Batch Index Multiple URLs

```typescript
import { notifyGoogleIndexingBatch } from '@/lib/indexing-helpers';

const urls = [
  'https://yourdomain.com/page-1',
  'https://yourdomain.com/page-2',
  'https://yourdomain.com/page-3',
];

const result = await notifyGoogleIndexingBatch(urls);
console.log(`Indexed ${result.stats.successful}/${result.stats.total} URLs`);
```

---

## 📊 API Endpoints Summary

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/gsc/analytics` | GET/POST | Search analytics data |
| `/api/gsc/sites` | GET | List GSC sites |
| `/api/gsc/sitemaps` | GET/POST/DELETE | Manage sitemaps |
| `/api/indexing/notify` | POST | Notify URL updates (single/batch) |
| `/api/indexing/notify?url=...` | GET | Check indexing status |
| `/api/test-gsc-auth` | GET | Test authentication |

---

## 🚨 Common Issues & Solutions

### Issue: "Authentication failed"

**Solution:**
1. Check private key format (must include `\n` for line breaks)
2. Verify service account email is correct
3. Ensure service account has Owner access in GSC

### Issue: "Site not found"

**Solution:**
1. Verify `GOOGLE_SEARCH_CONSOLE_SITE_URL` matches GSC exactly
2. Include `https://` protocol
3. Check service account is added to GSC property

### Issue: "Quota exceeded"

**Solution:**
1. Check usage in [Google Cloud Console](https://console.cloud.google.com/)
2. Add delays between requests (100-200ms)
3. Request quota increase if needed

### Issue: Environment variables not working

**Solution:**
1. Restart dev server after adding `.env.local`
2. For production, ensure variables are set in hosting platform
3. Use base64 encoded JSON for production deployments

---

## 📈 Next Steps

1. ✅ Complete setup above
2. ✅ Test authentication endpoint
3. ✅ Test GSC analytics endpoint
4. ✅ Test indexing endpoint
5. 📊 Build dashboard to display GSC data
6. 🤖 Integrate indexing into content workflow
7. 📅 Set up scheduled sitemap indexing
8. 📧 Set up error monitoring/alerts

---

## 📚 Full Documentation

For detailed documentation, examples, and advanced usage:

👉 **Read:** `/docs/GSC_INDEXING_API_GUIDE.md`

---

## 🎯 Quick Production Deployment Checklist

- [ ] Service account created with correct permissions
- [ ] Service account added to GSC with Owner role
- [ ] Environment variables configured in hosting platform
- [ ] Test authentication endpoint returns success
- [ ] Test GSC analytics endpoint
- [ ] Test indexing endpoint
- [ ] Set up API_SECRET_KEY for endpoint protection
- [ ] Monitor API usage and quotas
- [ ] Set up error tracking

---

## 🔗 Useful Links

- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Search Console](https://search.google.com/search-console)
- [GSC API Docs](https://developers.google.com/webmaster-tools/search-console-api)
- [Indexing API Docs](https://developers.google.com/search/apis/indexing-api)

---

**Need Help?** Check `/docs/GSC_INDEXING_API_GUIDE.md` for detailed troubleshooting and examples.

