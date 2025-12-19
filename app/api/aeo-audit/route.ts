/**
 * Proxy API route for AEO Audit Tool
 * Forwards requests from public site to internal audit tool
 * 
 * Configuration:
 * - INTERNAL_AEO_AUDIT_API_URL: Full URL to internal tool API (e.g., http://localhost:3001/apps/aeo-audit/api/scans)
 * - If not set, will attempt to call internal tool functions directly (if in same codebase)
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { domain } = body

    if (!domain || typeof domain !== 'string') {
      return NextResponse.json(
        {
          error: 'Invalid request',
          message: 'Domain parameter is required and must be a string',
        },
        { status: 400 }
      )
    }

    // Try to call internal tool API directly if URL is configured
    const internalToolUrl = process.env.INTERNAL_AEO_AUDIT_API_URL

    if (internalToolUrl) {
      // Forward to internal tool via HTTP
      try {
        const response = await fetch(`${internalToolUrl}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Forwarded-For': request.headers.get('x-forwarded-for') || '',
            'User-Agent': request.headers.get('user-agent') || '',
          },
          body: JSON.stringify({ domain }),
        })

        const data = await response.json()

        if (!response.ok) {
          return NextResponse.json(
            {
              error: data.error || 'Failed to start audit',
              message: data.message || 'An error occurred while starting the audit',
            },
            { status: response.status }
          )
        }

        return NextResponse.json(data, { status: 200 })
      } catch (fetchError) {
        console.error('Error forwarding to internal tool:', fetchError)
        return NextResponse.json(
          {
            error: 'Service unavailable',
            message: 'The audit service is temporarily unavailable. Please try again later or contact support.',
          },
          { status: 503 }
        )
      }
    }

    // Fallback: If internal tool URL not configured, return instructions
    // In production, INTERNAL_AEO_AUDIT_API_URL must be set
    return NextResponse.json(
      {
        error: 'Configuration required',
        message: 'AEO audit service is not configured. Please contact support or set INTERNAL_AEO_AUDIT_API_URL environment variable.',
      },
      { status: 503 }
    )
  } catch (error) {
    console.error('Error in AEO audit proxy:', error)
    return NextResponse.json(
      {
        error: 'Invalid request',
        message: error instanceof Error ? error.message : 'Failed to process request',
      },
      { status: 400 }
    )
  }
}

