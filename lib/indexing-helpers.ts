/**
 * Google Indexing API Helper Functions
 * Client-side and server-side utilities for indexing operations
 */

export type IndexingType = 'URL_UPDATED' | 'URL_DELETED';

export interface IndexingResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
  details?: string;
}

export interface BatchIndexingResponse {
  success: boolean;
  message: string;
  results: Array<{
    url: string;
    success: boolean;
    data?: any;
    error?: string;
  }>;
  errors?: Array<{
    url: string;
    success: boolean;
    error: string;
  }>;
  stats: {
    total: number;
    successful: number;
    failed: number;
  };
}

/**
 * Notify Google about a single URL update
 */
export async function notifyGoogleIndexing(
  url: string,
  type: IndexingType = 'URL_UPDATED',
  apiKey?: string
): Promise<IndexingResponse> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (apiKey) {
    headers['x-api-key'] = apiKey;
  }

  const response = await fetch('/api/indexing/notify', {
    method: 'POST',
    headers,
    body: JSON.stringify({ url, type }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Failed to notify indexing');
  }

  return response.json();
}

/**
 * Notify Google about multiple URLs (batch processing)
 */
export async function notifyGoogleIndexingBatch(
  urls: string[],
  type: IndexingType = 'URL_UPDATED',
  apiKey?: string
): Promise<BatchIndexingResponse> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (apiKey) {
    headers['x-api-key'] = apiKey;
  }

  const response = await fetch('/api/indexing/notify', {
    method: 'POST',
    headers,
    body: JSON.stringify({ urls, type }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Failed to notify indexing');
  }

  return response.json();
}

/**
 * Check indexing status of a URL
 */
export async function checkIndexingStatus(
  url: string,
  apiKey?: string
): Promise<IndexingResponse> {
  const headers: HeadersInit = {};

  if (apiKey) {
    headers['x-api-key'] = apiKey;
  }

  const response = await fetch(
    `/api/indexing/notify?url=${encodeURIComponent(url)}`,
    {
      method: 'GET',
      headers,
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Failed to check status');
  }

  return response.json();
}

/**
 * Server-side: Automatically notify Google when content is published
 * Use this in your API routes or server actions
 */
export async function autoNotifyOnPublish(
  urls: string | string[],
  options: {
    apiKey?: string;
    baseUrl?: string;
  } = {}
): Promise<void> {
  const urlArray = Array.isArray(urls) ? urls : [urls];
  const { apiKey, baseUrl = process.env.NEXT_PUBLIC_BASE_URL } = options;

  if (!baseUrl) {
    console.error('Base URL not configured for auto-indexing');
    return;
  }

  // Ensure URLs are absolute
  const absoluteUrls = urlArray.map((url) => {
    if (url.startsWith('http')) return url;
    return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  });

  try {
    if (absoluteUrls.length === 1) {
      await notifyGoogleIndexing(absoluteUrls[0], 'URL_UPDATED', apiKey);
      console.log(`✅ Notified Google about: ${absoluteUrls[0]}`);
    } else {
      const result = await notifyGoogleIndexingBatch(
        absoluteUrls,
        'URL_UPDATED',
        apiKey
      );
      console.log(
        `✅ Notified Google about ${result.stats.successful}/${result.stats.total} URLs`
      );
    }
  } catch (error) {
    console.error('Failed to auto-notify Google Indexing API:', error);
    // Don't throw - indexing notification failure shouldn't break the main flow
  }
}

/**
 * Generate a list of URLs from your sitemap
 */
export async function getUrlsFromSitemap(
  sitemapUrl: string
): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl);
    const xml = await response.text();

    // Simple regex to extract URLs from sitemap
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls: string[] = [];
    let match;

    while ((match = urlRegex.exec(xml)) !== null) {
      urls.push(match[1]);
    }

    return urls;
  } catch (error) {
    console.error('Failed to fetch sitemap:', error);
    return [];
  }
}

/**
 * Batch notify all URLs from sitemap with rate limiting
 */
export async function indexEntireSitemap(
  sitemapUrl: string,
  options: {
    batchSize?: number;
    delayMs?: number;
    apiKey?: string;
  } = {}
): Promise<BatchIndexingResponse> {
  const { batchSize = 100, delayMs = 1000, apiKey } = options;

  const urls = await getUrlsFromSitemap(sitemapUrl);

  if (urls.length === 0) {
    throw new Error('No URLs found in sitemap');
  }

  // Process in batches
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  const allResults: any[] = [];
  const allErrors: any[] = [];

  for (let i = 0; i < batches.length; i++) {
    console.log(`Processing batch ${i + 1}/${batches.length}...`);

    const batchResult = await notifyGoogleIndexingBatch(
      batches[i],
      'URL_UPDATED',
      apiKey
    );

    allResults.push(...batchResult.results);
    if (batchResult.errors) {
      allErrors.push(...batchResult.errors);
    }

    // Add delay between batches
    if (i < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  return {
    success: allErrors.length === 0,
    message: `Processed ${allResults.length} URLs from sitemap`,
    results: allResults,
    errors: allErrors.length > 0 ? allErrors : undefined,
    stats: {
      total: urls.length,
      successful: allResults.filter((r) => r.success).length,
      failed: allErrors.length,
    },
  };
}

