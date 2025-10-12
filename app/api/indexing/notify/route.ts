/**
 * Google Indexing API Route
 * Notify Google when URLs are updated or deleted for faster indexing
 */

import { NextRequest, NextResponse } from 'next/server';
import { getIndexingClient } from '@/lib/google-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type IndexingType = 'URL_UPDATED' | 'URL_DELETED';

interface IndexingRequest {
  url: string;
  type?: IndexingType;
}

interface BatchIndexingRequest {
  urls: string[];
  type?: IndexingType;
}

/**
 * POST: Notify Google about a single URL update or deletion
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body: IndexingRequest | BatchIndexingRequest = await request.json();

    // Check if it's a batch request
    if ('urls' in body && Array.isArray(body.urls)) {
      return await handleBatchIndexing(body);
    }

    // Single URL request
    const { url, type = 'URL_UPDATED' } = body as IndexingRequest;

    if (!url) {
      return NextResponse.json(
        { error: 'url is required' },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    const indexing = getIndexingClient();

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Successfully notified Google about ${url}`,
      data: response.data,
    });
  } catch (error: any) {
    console.error('Indexing API Error:', error);
    
    // Handle quota exceeded errors
    if (error.code === 429) {
      return NextResponse.json(
        {
          error: 'Quota exceeded',
          details: 'You have exceeded the daily quota for the Indexing API',
          retryAfter: error.response?.headers?.['retry-after'],
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to notify Google Indexing API',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

/**
 * Handle batch indexing requests
 */
async function handleBatchIndexing(body: BatchIndexingRequest) {
  const { urls, type = 'URL_UPDATED' } = body;

  if (!urls || urls.length === 0) {
    return NextResponse.json(
      { error: 'urls array is required and cannot be empty' },
      { status: 400 }
    );
  }

  // Validate all URLs
  for (const url of urls) {
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: `Invalid URL format: ${url}` },
        { status: 400 }
      );
    }
  }

  const indexing = getIndexingClient();
  const results = [];
  const errors = [];

  // Process URLs sequentially to avoid rate limits
  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type,
        },
      });

      results.push({
        url,
        success: true,
        data: response.data,
      });

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error: any) {
      console.error(`Error indexing ${url}:`, error.message);
      errors.push({
        url,
        success: false,
        error: error.message,
      });
    }
  }

  return NextResponse.json({
    success: errors.length === 0,
    message: `Processed ${results.length} URLs successfully, ${errors.length} failed`,
    results,
    errors: errors.length > 0 ? errors : undefined,
    stats: {
      total: urls.length,
      successful: results.length,
      failed: errors.length,
    },
  });
}

/**
 * GET: Check the status of a URL in the index
 */
export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: 'url query parameter is required' },
        { status: 400 }
      );
    }

    const indexing = getIndexingClient();

    const response = await indexing.urlNotifications.getMetadata({
      url,
    });

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    console.error('Indexing Status Check Error:', error);

    if (error.code === 404) {
      return NextResponse.json(
        {
          success: true,
          message: 'No indexing notifications found for this URL',
          data: null,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to check indexing status',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

