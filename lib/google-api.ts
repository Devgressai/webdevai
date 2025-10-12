/**
 * Google API Utilities
 * Handles authentication and interactions with Google Search Console and Indexing APIs
 */

import { google } from 'googleapis';

// Initialize Google Auth Client
export function getGoogleAuthClient() {
  // Option 1: Using individual environment variables
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    const client = new google.auth.JWT()
    client.email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    client.key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    client.scopes = [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/indexing',
    ]
    return client
  }

  // Option 2: Using base64 encoded JSON credentials
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON, 'base64').toString()
    );
    
    const client = new google.auth.JWT()
    client.email = credentials.client_email
    client.key = credentials.private_key
    client.scopes = [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/indexing',
    ]
    return client
  }

  throw new Error('Google API credentials not configured. Please set environment variables.');
}

// Initialize Search Console API
export function getSearchConsoleClient() {
  const auth = getGoogleAuthClient();
  return google.searchconsole({ version: 'v1', auth });
}

// Initialize Indexing API
export function getIndexingClient() {
  const auth = getGoogleAuthClient();
  return google.indexing({ version: 'v3', auth });
}

/**
 * Get Search Console site URL from environment
 */
export function getSiteUrl(): string {
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL;
  if (!siteUrl) {
    throw new Error('Site URL not configured. Please set GOOGLE_SEARCH_CONSOLE_SITE_URL or NEXT_PUBLIC_BASE_URL');
  }
  return siteUrl;
}

/**
 * Verify API authentication
 */
export async function verifyAuthentication(): Promise<boolean> {
  try {
    const auth = getGoogleAuthClient();
    await auth.authorize();
    return true;
  } catch (error) {
    console.error('Authentication failed:', error);
    return false;
  }
}

