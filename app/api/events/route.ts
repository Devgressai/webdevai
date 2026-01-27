/**
 * Analytics Events API Endpoint
 * 
 * Receives events from the analytics client and:
 * - Validates payload
 * - Logs to console in dev
 * - Optionally writes to local file in dev
 * 
 * No external dependencies or API keys required.
 */

import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import type { AnalyticsEvent } from '@/lib/analytics/types'

const DATA_DIR = path.join(process.cwd(), 'data')
const EVENTS_FILE = path.join(DATA_DIR, 'events.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    } catch (error) {
      // Silently fail - file storage is optional
    }
  }
}

/**
 * Validate event payload
 */
function validateEvent(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data || typeof data !== 'object') {
    errors.push('Event payload must be an object')
    return { valid: false, errors }
  }

  if (!data.event || typeof data.event !== 'string') {
    errors.push('Event name is required and must be a string')
  }

  if (!data.timestamp || typeof data.timestamp !== 'number') {
    errors.push('Timestamp is required and must be a number')
  }

  if (!data.pathname || typeof data.pathname !== 'string') {
    errors.push('Pathname is required and must be a string')
  }

  // Validate optional fields
  if (data.pageType && typeof data.pageType !== 'string') {
    errors.push('pageType must be a string')
  }

  if (data.funnelStage && typeof data.funnelStage !== 'string') {
    errors.push('funnelStage must be a string')
  }

  if (data.trackingId && typeof data.trackingId !== 'string') {
    errors.push('trackingId must be a string')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Write event to file (dev only)
 */
function writeEventToFile(event: AnalyticsEvent): void {
  const isDev = process.env.NODE_ENV === 'development'
  const useFileStorage = isDev && process.env.USE_FILE_STORAGE !== 'false'

  if (!useFileStorage) {
    return
  }

  try {
    ensureDataDir()

    let events: AnalyticsEvent[] = []

    // Read existing events
    if (fs.existsSync(EVENTS_FILE)) {
      try {
        const data = fs.readFileSync(EVENTS_FILE, 'utf-8')
        events = JSON.parse(data)
      } catch (error) {
        console.warn('⚠️  Could not read events file, starting fresh')
        events = []
      }
    }

    // Add new event
    events.push(event)

    // Keep only last 1000 events (to prevent file from growing too large)
    if (events.length > 1000) {
      events = events.slice(-1000)
    }

    // Write back to file
    fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2))
  } catch (error) {
    // Silently fail - file storage is optional
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️  Could not write event to file:', error)
    }
  }
}

/**
 * Log event to console (dev only)
 */
function logEvent(event: AnalyticsEvent): void {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const utmInfo = [
    event.utmSource && `utm_source=${event.utmSource}`,
    event.utmMedium && `utm_medium=${event.utmMedium}`,
    event.utmCampaign && `utm_campaign=${event.utmCampaign}`,
  ]
    .filter(Boolean)
    .join(', ')

  console.log('\n📊 ANALYTICS EVENT')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`Event:        ${event.event}`)
  console.log(`Pathname:     ${event.pathname}`)
  if (event.pageType) console.log(`Page Type:    ${event.pageType}`)
  if (event.funnelStage) console.log(`Funnel Stage: ${event.funnelStage}`)
  if (event.trackingId) console.log(`Tracking ID:  ${event.trackingId}`)
  if (event.referrer) console.log(`Referrer:     ${event.referrer}`)
  if (utmInfo) console.log(`UTM:          ${utmInfo}`)
  console.log(`Timestamp:    ${new Date(event.timestamp).toISOString()}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Validate payload
    const validation = validateEvent(data)
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      )
    }

    const event = data as AnalyticsEvent

    // Log to console in dev
    logEvent(event)

    // Write to file in dev (if enabled)
    writeEventToFile(event)

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Event recorded',
    })
  } catch (error) {
    console.error('❌ Event API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    )
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
