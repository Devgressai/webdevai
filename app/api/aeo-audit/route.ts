/**
 * Proxy API route for AEO Audit Tool
 * Forwards requests to the internal audit tool's API
 */

import { NextRequest, NextResponse } from 'next/server'
import { validateDomain, normalizeDomain } from '@/lib/aeo-audit/domain-validation'

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

    // Validate domain (SSRF protection)
    const validationResult = validateDomain(domain)
    if (!validationResult.valid) {
      return NextResponse.json(
        {
          error: 'Invalid domain',
          message: validationResult.error || 'Domain validation failed',
        },
        { status: 400 }
      )
    }

    // Get internal tool API URL
    // Try environment variable first, then fallback to relative path
    const internalToolUrl = process.env.INTERNAL_AEO_AUDIT_API_URL || 
      `${request.nextUrl.origin}/apps/aeo-audit/api/scans`

    try {
      const response = await fetch(internalToolUrl, {
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

      return NextResponse.json(data, { status: response.status })
    } catch (fetchError) {
      console.error('Error calling internal audit tool API:', fetchError)
      
      // If relative path failed and no env var set, provide helpful error
      if (!process.env.INTERNAL_AEO_AUDIT_API_URL) {
        return NextResponse.json(
          {
            error: 'Service unavailable',
            message: 'The audit service is not accessible. Please ensure the internal audit tool is running and set INTERNAL_AEO_AUDIT_API_URL environment variable if the tool is deployed separately.',
          },
          { status: 503 }
        )
      }

      return NextResponse.json(
        {
          error: 'Service unavailable',
          message: 'Failed to connect to the audit service. Please try again later.',
        },
        { status: 503 }
      )
    }
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
