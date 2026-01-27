/**
 * Lead Capture API Endpoint
 * 
 * Handles lead submissions from contact forms and BOFU forms.
 * Includes validation, rate limiting, storage, and notifications.
 */

import { NextRequest, NextResponse } from 'next/server'
import { validateLeadSubmission, sanitizeString } from '@/lib/leads/validation'
import { getStorageProvider } from '@/lib/leads/storage'
import { getNotificationProvider } from '@/lib/leads/providers'
import { checkRateLimit } from '@/lib/rate-limit'
import type { LeadSubmission, StoredLead } from '@/lib/leads/types'

export async function POST(req: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ipAddress = 
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      req.ip ||
      'unknown'

    // Rate limiting (5 submissions per 15 minutes per IP)
    if (!checkRateLimit(ipAddress, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      )
    }

    // Parse and sanitize request body
    const rawData = await req.json() as Partial<LeadSubmission>
    
    const submission: Partial<LeadSubmission> = {
      name: sanitizeString((rawData.name || '').toString()),
      email: sanitizeString((rawData.email || '').toString()),
      company: rawData.company ? sanitizeString(rawData.company.toString()) : undefined,
      website: rawData.website ? sanitizeString(rawData.website.toString()) : undefined,
      message: sanitizeString((rawData.message || '').toString()),
      serviceInterest: sanitizeString((rawData.serviceInterest || '').toString()),
      city: rawData.city ? sanitizeString(rawData.city.toString()) : undefined,
      ctaTrackingId: rawData.ctaTrackingId ? sanitizeString(rawData.ctaTrackingId.toString()) : undefined,
      _honeypot: rawData._honeypot ? rawData._honeypot.toString() : undefined,
    }

    // Validate submission
    const validation = validateLeadSubmission(submission)
    if (!validation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      )
    }

    // Create stored lead
    const storedLead: StoredLead = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: submission.name!,
      email: submission.email!,
      company: submission.company,
      website: submission.website,
      message: submission.message!,
      serviceInterest: submission.serviceInterest!,
      city: submission.city,
      ctaTrackingId: submission.ctaTrackingId,
      submittedAt: new Date().toISOString(),
      ipAddress,
      userAgent: req.headers.get('user-agent') || undefined,
      source: req.headers.get('referer') || 'direct',
    }

    // Save lead to storage
    const storage = getStorageProvider()
    let savedLead: StoredLead
    try {
      savedLead = await storage.save(storedLead)
    } catch (error) {
      console.error('❌ Failed to save lead:', error)
      // Continue with notification even if storage fails
      savedLead = storedLead
    }

    // Send notification (non-blocking)
    const notificationProvider = getNotificationProvider()
    notificationProvider.send(savedLead).catch((error) => {
      console.error('❌ Failed to send notification:', error)
      // Don't fail the request if notification fails
    })

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      id: savedLead.id
    })

  } catch (error) {
    console.error('❌ Lead capture error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
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
