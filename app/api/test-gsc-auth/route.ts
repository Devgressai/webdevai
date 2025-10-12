/**
 * Test endpoint to verify GSC and Indexing API authentication
 */

import { NextResponse } from 'next/server';
import { verifyAuthentication, getSiteUrl } from '@/lib/google-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const isAuthenticated = await verifyAuthentication();
    const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || 'Not configured';

    return NextResponse.json({
      success: true,
      authenticated: isAuthenticated,
      configuration: {
        hasServiceAccountEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        hasJsonCredentials: !!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
        hasSiteUrl: !!process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL,
        hasApiKey: !!process.env.API_SECRET_KEY,
        siteUrl: siteUrl,
      },
      message: isAuthenticated
        ? '✅ Authentication successful! GSC and Indexing APIs are ready to use.'
        : '❌ Authentication failed. Please check your credentials.',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        authenticated: false,
        error: error.message,
        configuration: {
          hasServiceAccountEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
          hasJsonCredentials: !!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
          hasSiteUrl: !!process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL,
          hasApiKey: !!process.env.API_SECRET_KEY,
        },
      },
      { status: 500 }
    );
  }
}

