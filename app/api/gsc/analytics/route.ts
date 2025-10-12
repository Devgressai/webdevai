/**
 * Google Search Console Analytics API Route
 * Retrieves search analytics data from GSC
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSearchConsoleClient, getSiteUrl } from '@/lib/google-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SearchAnalyticsQuery {
  startDate: string;
  endDate: string;
  dimensions?: ('query' | 'page' | 'country' | 'device' | 'searchAppearance')[];
  rowLimit?: number;
  startRow?: number;
  dimensionFilterGroups?: any[];
}

export async function POST(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      startDate,
      endDate,
      dimensions = ['query'],
      rowLimit = 100,
      startRow = 0,
      dimensionFilterGroups = [],
    }: SearchAnalyticsQuery = body;

    // Validate required parameters
    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'startDate and endDate are required' },
        { status: 400 }
      );
    }

    const searchConsole = getSearchConsoleClient();
    const siteUrl = getSiteUrl();

    const response = await searchConsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit,
        startRow,
        dimensionFilterGroups,
        aggregationType: 'auto',
      },
    });

    return NextResponse.json({
      success: true,
      data: response.data,
      query: {
        siteUrl,
        startDate,
        endDate,
        dimensions,
      },
    });
  } catch (error: any) {
    console.error('GSC Analytics API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch search analytics data',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// GET endpoint for simple queries
export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    
    // Default to last 7 days
    const endDate = searchParams.get('endDate') || new Date().toISOString().split('T')[0];
    const startDate = searchParams.get('startDate') || 
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const dimensions = searchParams.get('dimensions')?.split(',') || ['query'];
    const rowLimit = parseInt(searchParams.get('rowLimit') || '25');

    const searchConsole = getSearchConsoleClient();
    const siteUrl = getSiteUrl();

    const response = await searchConsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit,
        aggregationType: 'auto',
      },
    });

    return NextResponse.json({
      success: true,
      data: response.data,
      query: {
        siteUrl,
        startDate,
        endDate,
        dimensions,
        rowLimit,
      },
    });
  } catch (error: any) {
    console.error('GSC Analytics API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch search analytics data',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

