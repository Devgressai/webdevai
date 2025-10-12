# Google Search Console & Indexing API Guide

Complete guide for using GSC and Indexing APIs in your Next.js project.

## 📋 Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Environment Variables](#environment-variables)
3. [API Endpoints](#api-endpoints)
4. [Usage Examples](#usage-examples)
5. [Helper Functions](#helper-functions)
6. [Automation](#automation)
7. [Rate Limits & Quotas](#rate-limits--quotas)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Instructions

### 1. Google Cloud Console Setup

1. **Create/Select Project**: Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **Enable APIs**:
   - Google Search Console API
   - Google Indexing API
3. **Create Service Account**:
   - Go to APIs & Services > Credentials
   - Create Credentials > Service Account
   - Name: `webvello-indexing`
   - Role: Owner or Editor
4. **Generate Key**:
   - Click on service account
   - Keys tab > Add Key > Create new key
   - Format: JSON
   - Download and save securely
5. **Grant GSC Access**:
   - Open [Google Search Console](https://search.google.com/search-console)
   - Select your property
   - Settings > Users and permissions
   - Add user (service account email)
   - Permission level: Owner

### 2. Environment Variables Setup

Create a `.env.local` file (or add to existing):

```bash
# Option 1: Individual credentials
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SEARCH_CONSOLE_SITE_URL=https://yourdomain.com

# Option 2: Base64 encoded JSON (recommended for deployment)
GOOGLE_APPLICATION_CREDENTIALS_JSON=base64-encoded-json-credentials

# Optional: API protection
API_SECRET_KEY=your-secret-key-here

# Your site URL
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

**To create base64 encoded credentials:**

```bash
# On macOS/Linux
base64 -i path-to-your-service-account.json

# Or use Node.js
node -e "console.log(Buffer.from(require('fs').readFileSync('path-to-your-service-account.json')).toString('base64'))"
```

---

## 🔌 API Endpoints

### Google Search Console Endpoints

#### 1. **GET/POST `/api/gsc/analytics`**
Get search analytics data (queries, clicks, impressions, CTR, position)

**GET Example:**
```bash
curl "http://localhost:3000/api/gsc/analytics?startDate=2025-10-01&endDate=2025-10-12&dimensions=query&rowLimit=25" \
  -H "x-api-key: your-secret-key"
```

**POST Example:**
```bash
curl -X POST http://localhost:3000/api/gsc/analytics \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{
    "startDate": "2025-10-01",
    "endDate": "2025-10-12",
    "dimensions": ["query", "page"],
    "rowLimit": 100
  }'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "keys": ["web design oklahoma city"],
        "clicks": 42,
        "impressions": 1250,
        "ctr": 0.0336,
        "position": 8.5
      }
    ]
  },
  "query": {
    "siteUrl": "https://yourdomain.com",
    "startDate": "2025-10-01",
    "endDate": "2025-10-12",
    "dimensions": ["query"]
  }
}
```

#### 2. **GET `/api/gsc/sites`**
List all sites in your Search Console account

```bash
curl http://localhost:3000/api/gsc/sites \
  -H "x-api-key: your-secret-key"
```

#### 3. **GET/POST/DELETE `/api/gsc/sitemaps`**
Manage sitemaps

**List sitemaps:**
```bash
curl http://localhost:3000/api/gsc/sitemaps \
  -H "x-api-key: your-secret-key"
```

**Submit sitemap:**
```bash
curl -X POST http://localhost:3000/api/gsc/sitemaps \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{"feedpath": "/sitemap.xml"}'
```

**Delete sitemap:**
```bash
curl -X DELETE "http://localhost:3000/api/gsc/sitemaps?feedpath=/sitemap.xml" \
  -H "x-api-key: your-secret-key"
```

### Google Indexing Endpoints

#### 1. **POST `/api/indexing/notify`**
Notify Google about URL updates (single or batch)

**Single URL:**
```bash
curl -X POST http://localhost:3000/api/indexing/notify \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{
    "url": "https://yourdomain.com/services/web-design",
    "type": "URL_UPDATED"
  }'
```

**Batch URLs:**
```bash
curl -X POST http://localhost:3000/api/indexing/notify \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{
    "urls": [
      "https://yourdomain.com/services/web-design",
      "https://yourdomain.com/services/seo",
      "https://yourdomain.com/blog/latest-post"
    ],
    "type": "URL_UPDATED"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully notified Google about https://yourdomain.com/services/web-design",
  "data": {
    "urlNotificationMetadata": {
      "url": "https://yourdomain.com/services/web-design",
      "latestUpdate": {
        "type": "URL_UPDATED",
        "notifyTime": "2025-10-12T10:30:00Z"
      }
    }
  }
}
```

#### 2. **GET `/api/indexing/notify?url=...`**
Check indexing notification status

```bash
curl "http://localhost:3000/api/indexing/notify?url=https://yourdomain.com/services/web-design" \
  -H "x-api-key: your-secret-key"
```

---

## 💡 Usage Examples

### Client-Side: Fetch GSC Data

```typescript
import { fetchSearchAnalytics, getTopQueries, getTopPages } from '@/lib/gsc-helpers';

// Get analytics for last 30 days
const data = await fetchSearchAnalytics('2025-09-12', '2025-10-12', {
  dimensions: ['query'],
  rowLimit: 100,
});

// Get top 100 queries from last 30 days
const topQueries = await getTopQueries(30, 100);

// Get top performing pages
const topPages = await getTopPages(30, 50);

console.log('Total clicks:', topQueries.reduce((sum, q) => sum + q.clicks, 0));
```

### Client-Side: Notify Indexing

```typescript
import { notifyGoogleIndexing, notifyGoogleIndexingBatch } from '@/lib/indexing-helpers';

// Notify about single URL
await notifyGoogleIndexing('https://yourdomain.com/new-page', 'URL_UPDATED');

// Notify about multiple URLs
await notifyGoogleIndexingBatch([
  'https://yourdomain.com/page-1',
  'https://yourdomain.com/page-2',
  'https://yourdomain.com/page-3',
]);
```

### Server-Side: Auto-notify on Content Publish

```typescript
// In your API route or server action
import { autoNotifyOnPublish } from '@/lib/indexing-helpers';

export async function POST(request: Request) {
  // ... create/update content ...
  
  const newPageUrl = '/blog/my-new-post';
  
  // Automatically notify Google (non-blocking)
  await autoNotifyOnPublish(newPageUrl);
  
  return Response.json({ success: true });
}
```

### Batch Index Entire Sitemap

```typescript
import { indexEntireSitemap } from '@/lib/indexing-helpers';

// Index all URLs from your sitemap
const result = await indexEntireSitemap('https://yourdomain.com/sitemap.xml', {
  batchSize: 100,
  delayMs: 1000,
});

console.log(`Indexed ${result.stats.successful}/${result.stats.total} URLs`);
```

### React Component Example

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getTopQueries, GSCRow } from '@/lib/gsc-helpers';

export default function GSCDashboard() {
  const [queries, setQueries] = useState<GSCRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getTopQueries(30, 25);
        setQueries(data);
      } catch (error) {
        console.error('Failed to load GSC data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Top Search Queries</h1>
      <table>
        <thead>
          <tr>
            <th>Query</th>
            <th>Clicks</th>
            <th>Impressions</th>
            <th>CTR</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, i) => (
            <tr key={i}>
              <td>{query.keys[0]}</td>
              <td>{query.clicks}</td>
              <td>{query.impressions}</td>
              <td>{(query.ctr * 100).toFixed(2)}%</td>
              <td>{query.position.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 🔧 Helper Functions

### GSC Helpers (`/lib/gsc-helpers.ts`)

- `fetchSearchAnalytics()` - Fetch search analytics data
- `getTopQueries()` - Get top performing queries
- `getTopPages()` - Get top performing pages
- `getPerformanceByCountry()` - Get performance by country
- `getPerformanceByDevice()` - Get performance by device
- `calculateTotalMetrics()` - Calculate totals from rows
- `formatGSCDate()` - Format date for GSC API
- `getDateRange()` - Get date ranges for common periods

### Indexing Helpers (`/lib/indexing-helpers.ts`)

- `notifyGoogleIndexing()` - Notify about single URL
- `notifyGoogleIndexingBatch()` - Notify about multiple URLs
- `checkIndexingStatus()` - Check indexing status
- `autoNotifyOnPublish()` - Auto-notify on content publish
- `getUrlsFromSitemap()` - Extract URLs from sitemap
- `indexEntireSitemap()` - Index all URLs from sitemap

---

## 🤖 Automation

### Auto-Index New Content

Add this to your content publishing workflow:

```typescript
// app/api/blog/publish/route.ts
import { autoNotifyOnPublish } from '@/lib/indexing-helpers';

export async function POST(request: Request) {
  const { slug } = await request.json();
  
  // ... publish content ...
  
  // Auto-notify Google (runs in background)
  await autoNotifyOnPublish(`/blog/${slug}`);
  
  return Response.json({ success: true });
}
```

### Scheduled Sitemap Indexing

Create a cron job or use Vercel Cron:

```typescript
// app/api/cron/index-sitemap/route.ts
import { indexEntireSitemap } from '@/lib/indexing-helpers';

export async function GET(request: Request) {
  // Verify cron secret
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const result = await indexEntireSitemap(`${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`);
  
  return Response.json(result);
}
```

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/index-sitemap",
      "schedule": "0 2 * * *"
    }
  ]
}
```

---

## ⚡ Rate Limits & Quotas

### Google Indexing API Quotas

- **Free tier**: 200 requests per day
- **Paid tier**: Can request higher quotas
- **Per-minute limit**: ~6 requests per minute

**Best Practices:**
- Add delays between batch requests (100-200ms)
- Process large batches overnight
- Cache indexing status to avoid duplicate requests
- Monitor quota usage in Google Cloud Console

### Google Search Console API Quotas

- **Per project**: 1,200 requests per minute
- **Per user**: 600 requests per minute
- Generally more generous than Indexing API

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **"Authentication failed"**
- Check service account credentials
- Ensure private key has proper line breaks (`\n`)
- Verify service account has access to GSC property

#### 2. **"Quota exceeded"**
- Check usage in Google Cloud Console
- Implement request delays
- Request quota increase if needed

#### 3. **"Site not found"**
- Verify `GOOGLE_SEARCH_CONSOLE_SITE_URL` matches GSC property exactly
- Include protocol (`https://`) and trailing slash if applicable
- Check service account has access to the property

#### 4. **"Invalid URL format"**
- Ensure URLs are absolute (include protocol)
- Verify URLs are for your verified domain

### Testing Authentication

Create a test endpoint:

```typescript
// app/api/test-gsc/route.ts
import { verifyAuthentication } from '@/lib/google-api';

export async function GET() {
  const isAuthenticated = await verifyAuthentication();
  
  return Response.json({
    authenticated: isAuthenticated,
    configured: {
      hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSiteUrl: !!process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL,
    },
  });
}
```

Visit `/api/test-gsc` to verify setup.

---

## 📊 Next Steps

1. **Set up monitoring**: Track API usage and errors
2. **Create dashboard**: Build a UI to visualize GSC data
3. **Automate indexing**: Integrate with content publishing workflow
4. **Monitor performance**: Track indexing speed and search performance
5. **Set up alerts**: Get notified of indexing failures

---

## 🔗 Useful Links

- [Google Search Console API Docs](https://developers.google.com/webmaster-tools/search-console-api/v1)
- [Google Indexing API Docs](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [Service Account Setup](https://cloud.google.com/iam/docs/service-accounts-create)
- [API Quotas & Limits](https://developers.google.com/search/apis/indexing-api/v3/quota-pricing)

---

## 🎉 You're All Set!

Your project now has full GSC and Indexing API integration. Start by testing the endpoints, then integrate them into your workflow.

For questions or issues, refer to the troubleshooting section above.

