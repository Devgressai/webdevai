/**
 * Proxy API route for AEO Audit Tool
 * Forwards requests from public site to internal audit tool
 * 
 * This route calls the internal audit tool's API handler directly
 * since both are in the same codebase.
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

    // Try to call internal tool API
    // Strategy: Try environment variable first (most reliable), then relative path
    const internalToolUrl = process.env.INTERNAL_AEO_AUDIT_API_URL
    
    // Try 1: Use environment variable if set (most reliable for production)
    if (internalToolUrl) {
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

        if (response.ok) {
          return NextResponse.json(data, { status: 200 })
        }

        // If not OK, return the error from internal tool
        return NextResponse.json(
          {
            error: data.error || 'Failed to start audit',
            message: data.message || 'An error occurred while starting the audit',
          },
          { status: response.status }
        )
      } catch (fetchError) {
        console.error('Error forwarding to internal tool (env var):', fetchError)
        // Continue to fallback
      }
    }
    
    // Try 2: Relative path (works if both apps on same domain)
    const baseUrl = request.nextUrl.origin
    const internalToolPath = '/apps/aeo-audit/api/scans'
    
    try {
      const response = await fetch(`${baseUrl}${internalToolPath}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Forwarded-For': request.headers.get('x-forwarded-for') || '',
          'User-Agent': request.headers.get('user-agent') || '',
        },
        body: JSON.stringify({ domain }),
      })

      const data = await response.json()

      if (response.ok) {
        return NextResponse.json(data, { status: 200 })
      }

      // If not OK, return the error
      return NextResponse.json(
        {
          error: data.error || 'Failed to start audit',
          message: data.message || 'An error occurred while starting the audit',
        },
        { status: response.status }
      )
    } catch (relativeFetchError) {
      console.error('Error forwarding to internal tool (relative path):', relativeFetchError)
    }

    // If all methods fail, return helpful error
    return NextResponse.json(
      {
        error: 'Service unavailable',
        message: 'The audit service is temporarily unavailable. Please ensure the internal audit tool is running and accessible.',
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

