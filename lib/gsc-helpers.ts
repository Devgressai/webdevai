/**
 * Google Search Console Helper Functions
 * Client-side utilities for working with GSC data
 */

export interface GSCMetrics {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCAnalyticsResponse {
  success: boolean;
  data: {
    rows?: GSCRow[];
    responseAggregationType?: string;
  };
  query: {
    siteUrl: string;
    startDate: string;
    endDate: string;
    dimensions: string[];
  };
}

/**
 * Fetch search analytics data from GSC
 */
export async function fetchSearchAnalytics(
  startDate: string,
  endDate: string,
  options: {
    dimensions?: string[];
    rowLimit?: number;
    startRow?: number;
    apiKey?: string;
  } = {}
): Promise<GSCAnalyticsResponse> {
  const { dimensions = ['query'], rowLimit = 100, startRow = 0, apiKey } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (apiKey) {
    headers['x-api-key'] = apiKey;
  }

  const response = await fetch('/api/gsc/analytics', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions,
      rowLimit,
      startRow,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Failed to fetch analytics data');
  }

  return response.json();
}

/**
 * Get top queries from GSC
 */
export async function getTopQueries(
  days: number = 30,
  limit: number = 100
): Promise<GSCRow[]> {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const data = await fetchSearchAnalytics(startDate, endDate, {
    dimensions: ['query'],
    rowLimit: limit,
  });

  return data.data.rows || [];
}

/**
 * Get top pages from GSC
 */
export async function getTopPages(
  days: number = 30,
  limit: number = 100
): Promise<GSCRow[]> {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const data = await fetchSearchAnalytics(startDate, endDate, {
    dimensions: ['page'],
    rowLimit: limit,
  });

  return data.data.rows || [];
}

/**
 * Get performance by country
 */
export async function getPerformanceByCountry(
  days: number = 30
): Promise<GSCRow[]> {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const data = await fetchSearchAnalytics(startDate, endDate, {
    dimensions: ['country'],
    rowLimit: 100,
  });

  return data.data.rows || [];
}

/**
 * Get performance by device
 */
export async function getPerformanceByDevice(
  days: number = 30
): Promise<GSCRow[]> {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const data = await fetchSearchAnalytics(startDate, endDate, {
    dimensions: ['device'],
    rowLimit: 10,
  });

  return data.data.rows || [];
}

/**
 * Calculate total metrics from rows
 */
export function calculateTotalMetrics(rows: GSCRow[]): GSCMetrics {
  const totals = rows.reduce(
    (acc, row) => ({
      clicks: acc.clicks + row.clicks,
      impressions: acc.impressions + row.impressions,
      ctr: 0, // Will calculate after
      position: 0, // Will calculate after
    }),
    { clicks: 0, impressions: 0, ctr: 0, position: 0 }
  );

  totals.ctr = totals.clicks / totals.impressions || 0;
  totals.position =
    rows.reduce((acc, row) => acc + row.position, 0) / rows.length || 0;

  return totals;
}

/**
 * Format date for GSC API (YYYY-MM-DD)
 */
export function formatGSCDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Get date range for common periods
 */
export function getDateRange(
  period: 'today' | 'yesterday' | '7days' | '28days' | '3months' | '6months' | '12months'
): { startDate: string; endDate: string } {
  const endDate = new Date();
  const startDate = new Date();

  switch (period) {
    case 'today':
      // GSC data is typically 2-3 days behind, use yesterday
      endDate.setDate(endDate.getDate() - 1);
      startDate.setDate(startDate.getDate() - 1);
      break;
    case 'yesterday':
      endDate.setDate(endDate.getDate() - 2);
      startDate.setDate(startDate.getDate() - 2);
      break;
    case '7days':
      startDate.setDate(startDate.getDate() - 7);
      break;
    case '28days':
      startDate.setDate(startDate.getDate() - 28);
      break;
    case '3months':
      startDate.setMonth(startDate.getMonth() - 3);
      break;
    case '6months':
      startDate.setMonth(startDate.getMonth() - 6);
      break;
    case '12months':
      startDate.setMonth(startDate.getMonth() - 12);
      break;
  }

  return {
    startDate: formatGSCDate(startDate),
    endDate: formatGSCDate(endDate),
  };
}

