import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasGoogleEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    hasGoogleKey: !!process.env.GOOGLE_PRIVATE_KEY,
    hasApiKey: !!process.env.API_SECRET_KEY,
    hasSiteUrl: !!process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL,
    emailValue: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'set' : 'not set',
    keyLength: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
  });
}

