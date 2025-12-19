/**
 * Proxy API route for AEO Audit Tool
 * Creates scans directly using the shared scan creation function
 */

import { NextRequest, NextResponse } from 'next/server'
import { createScan } from '@/lib/aeo-audit/create-scan'

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

    // Create scan using shared function
    const result = await createScan(domain, request)

    if (!result.success) {
      const response = NextResponse.json(
        {
          error: result.error || 'Failed to create scan',
          message: result.message || 'An error occurred',
        },
        { status: result.statusCode || 500 }
      )

      // Add headers if provided
      if (result.headers) {
        Object.entries(result.headers).forEach(([key, value]) => {
          response.headers.set(key, value)
        })
      }

      return response
    }

    // Success response
    return NextResponse.json(
      {
        scanId: result.scanId,
        message: result.message || 'Scan created successfully',
        status: 'pending',
      },
      { status: result.statusCode || 201 }
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
