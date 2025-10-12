/**
 * Google Search Console Sitemaps API Route
 * Manage sitemaps in Search Console
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSearchConsoleClient, getSiteUrl } from '@/lib/google-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET: List all sitemaps
export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchConsole = getSearchConsoleClient();
    const siteUrl = getSiteUrl();

    const response = await searchConsole.sitemaps.list({
      siteUrl,
    });

    return NextResponse.json({
      success: true,
      sitemaps: response.data.sitemap || [],
      count: response.data.sitemap?.length || 0,
    });
  } catch (error: any) {
    console.error('GSC Sitemaps API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch sitemaps',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// POST: Submit a new sitemap
export async function POST(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { feedpath } = await request.json();

    if (!feedpath) {
      return NextResponse.json(
        { error: 'feedpath is required (e.g., /sitemap.xml)' },
        { status: 400 }
      );
    }

    const searchConsole = getSearchConsoleClient();
    const siteUrl = getSiteUrl();

    await searchConsole.sitemaps.submit({
      siteUrl,
      feedpath,
    });

    return NextResponse.json({
      success: true,
      message: `Sitemap ${feedpath} submitted successfully`,
      siteUrl,
      feedpath,
    });
  } catch (error: any) {
    console.error('GSC Sitemap Submit Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit sitemap',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE: Remove a sitemap
export async function DELETE(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const feedpath = searchParams.get('feedpath');

    if (!feedpath) {
      return NextResponse.json(
        { error: 'feedpath query parameter is required' },
        { status: 400 }
      );
    }

    const searchConsole = getSearchConsoleClient();
    const siteUrl = getSiteUrl();

    await searchConsole.sitemaps.delete({
      siteUrl,
      feedpath,
    });

    return NextResponse.json({
      success: true,
      message: `Sitemap ${feedpath} deleted successfully`,
    });
  } catch (error: any) {
    console.error('GSC Sitemap Delete Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to delete sitemap',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

