/**
 * Google Search Console Sites API Route
 * Lists all sites in the Search Console account
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSearchConsoleClient } from '@/lib/google-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key protection
    const apiKey = request.headers.get('x-api-key');
    if (process.env.API_SECRET_KEY && apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchConsole = getSearchConsoleClient();

    const response = await searchConsole.sites.list();

    return NextResponse.json({
      success: true,
      sites: response.data.siteEntry || [],
      count: response.data.siteEntry?.length || 0,
    });
  } catch (error: any) {
    console.error('GSC Sites API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch sites',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

