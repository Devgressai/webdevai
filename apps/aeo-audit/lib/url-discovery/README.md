# URL Discovery Implementation

## Overview

The URL Discovery worker discovers URLs for scanning through two methods:
1. **Sitemap parsing** (preferred) - Recursively parses sitemaps from robots.txt or common locations
2. **Bounded crawl** (fallback) - BFS crawl from homepage when sitemaps are unavailable

## Process Flow

```
1. Normalize domain (force https, normalize www)
   ↓
2. Fetch robots.txt
   ↓
3. Extract sitemap URLs from robots.txt
   ↓
4. Try common sitemap locations (/sitemap.xml, /sitemap_index.xml)
   ↓
5. Parse sitemaps recursively (index → child sitemaps)
   ↓
6. If sitemaps fail or return < 10 URLs:
   → BFS crawl from homepage (max depth 2, max 200 pages)
   ↓
7. Persist URLs to Page table (status: "discovered")
   ↓
8. Store evidence (robots.txt, sitemap, crawl stats)
```

## Configuration Flags

### Environment Variables

All limits are configurable via environment variables:

```env
# Sitemap limits
URL_DISCOVERY_MAX_SITEMAP_URLS=1000    # Max URLs to extract from sitemaps
URL_DISCOVERY_MAX_SITEMAP_DEPTH=5       # Max depth for sitemap index recursion

# Crawl limits (fallback)
URL_DISCOVERY_MAX_CRAWL_DEPTH=2         # BFS depth limit
URL_DISCOVERY_MAX_CRAWL_PAGES=200       # Max pages to crawl
URL_DISCOVERY_CRAWL_TIMEOUT=10000       # Timeout per page fetch (ms)
```

### Default Limits

| Setting | Default | Description |
|---------|---------|-------------|
| `maxSitemapUrls` | 1000 | Maximum URLs to extract from sitemaps |
| `maxSitemapDepth` | 5 | Maximum recursion depth for sitemap indexes |
| `maxCrawlDepth` | 2 | BFS depth limit for crawling |
| `maxCrawlPages` | 200 | Maximum pages to crawl (MVP limit) |
| `crawlTimeout` | 10000ms | Timeout per page fetch during crawl |

## Skip Patterns

The following paths are automatically skipped during crawling:

- `/admin`, `/api/*`, `/cart`, `/checkout`
- `/account`, `/login`, `/logout`, `/register`
- `/signin`, `/signup`
- `/_next/*`, `/static/*`
- File extensions: `.pdf`, `.zip`, `.doc`, `.jpg`, `.png`, etc.
- URLs with query strings or anchors

## Evidence Storage

The worker stores evidence in the `Evidence` table:

### 1. Robots.txt Evidence
- **Type**: `robots_txt`
- **Content**: Full robots.txt fetch result
- **Metadata**: Success status, HTTP status code, sitemaps found, errors

### 2. Sitemap Evidence
- **Type**: `sitemap_fetch`
- **Content**: Sitemap parsing results
- **Metadata**: Success status, sitemap URL used, URLs found, errors

### 3. Crawl Stats Evidence
- **Type**: `crawl_stats`
- **Content**: Crawl statistics
- **Metadata**: Depth reached, pages visited

### 4. Discovery Summary
- **Type**: `discovery_summary`
- **Content**: Counts by source
- **Metadata**: URLs from robots, sitemap, crawl, total

## Domain Normalization

The worker normalizes domains:
- **Forces HTTPS**: All URLs use `https://`
- **Normalizes www**: Handles both `www.example.com` and `example.com`
- **Removes trailing slashes**: `example.com/` → `example.com`
- **Lowercase**: Domain names are lowercased

## Sitemap Parsing

### Supported Formats
- **Sitemap XML**: Standard `<urlset>` format
- **Sitemap Index**: `<sitemapindex>` with child sitemaps
- **Recursive**: Automatically follows sitemap indexes to child sitemaps

### Common Locations Tried
1. URLs from `robots.txt` `Sitemap:` directives
2. `/sitemap.xml`
3. `/sitemap_index.xml`
4. `/sitemaps.xml`

## Bounded Crawl (Fallback)

When sitemaps fail or return insufficient URLs (< 10), the worker falls back to BFS crawling:

### BFS Algorithm
- **Start**: Homepage
- **Depth**: Maximum 2 levels
- **Limit**: 200 pages (MVP)
- **Skip**: Admin paths, API endpoints, static files
- **Domain**: Only same-domain URLs

### Crawl Process
1. Start with homepage in queue (depth 0)
2. Fetch page HTML
3. Extract all `<a href>` links
4. Filter: same domain, not skipped, not visited
5. Add to queue (depth + 1)
6. Repeat until depth limit or page limit reached

## URL Persistence

Discovered URLs are persisted to the `Page` table:
- **Status**: `metadata.status = "discovered"`
- **Batch Size**: 100 URLs per transaction
- **Deduplication**: URLs are normalized and deduplicated before persistence
- **Upsert**: Existing pages are updated, new ones are created

## Limits Summary

### Hard Limits (MVP)
- **Sitemap URLs**: 1000 max
- **Crawl Pages**: 200 max
- **Crawl Depth**: 2 levels
- **Sitemap Depth**: 5 levels recursion

### Soft Limits (Configurable)
- All limits can be adjusted via environment variables
- Timeouts: 10s per page fetch, 30s per sitemap fetch

## Error Handling

- **Robots.txt failures**: Continue to sitemap discovery
- **Sitemap failures**: Fall back to crawl
- **Crawl failures**: Return whatever URLs were discovered
- **Network timeouts**: Skip and continue
- **Invalid URLs**: Filtered out automatically

## Performance Considerations

- **Batch Processing**: URLs persisted in batches of 100
- **Parallel Sitemaps**: Multiple sitemaps fetched in parallel
- **Deduplication**: URLs normalized before storage
- **Transaction Timeout**: 30 seconds per batch

## Example Usage

```typescript
import { discoverUrls } from '@/lib/url-discovery/worker'

const result = await discoverUrls({
  scanId: 'scan_123',
  domain: 'example.com',
  maxUrls: 500,
})

console.log(`Discovered ${result.urls.length} URLs via ${result.source}`)
console.log(`Evidence:`, result.evidence)
```

