/**
 * API route: POST /api/scans
 * Creates a new scan and enqueues the scan_orchestrator job
 * Includes API abuse protections: rate limiting, domain validation, SSRF prevention, concurrent scan limits
 */

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { addJob, generateIdempotencyKey } from '@/lib/queues'
import { ScanOrchestratorPayload } from '@/lib/queues/types'
import { QUEUE_NAMES } from '@/lib/queues/types'
import {
  validateDomain,
  normalizeDomain,
} from '@/lib/api/validation/domain'
import {
  checkRateLimit,
  getClientIP,
} from '@/lib/api/rate-limit'
import {
  checkConcurrentScans,
  registerScan,
  getScanIdentifier,
} from '@/lib/api/concurrent-scans'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting (per IP)
    const clientIP = getClientIP(request)
    const rateLimitResult = await checkRateLimit(clientIP)

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitResult.resetAt).toISOString(),
            'Retry-After': Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000).toString(),
          },
        }
      )
    }

    // 2. Parse and validate request body
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

    // 3. Domain validation (hostname format, no localhost, no private IPs, SSRF prevention)
    const normalizedDomain = normalizeDomain(domain)
    const domainValidation = validateDomain(normalizedDomain)

    if (!domainValidation.valid) {
      return NextResponse.json(
        {
          error: 'Invalid domain',
          message: domainValidation.error || 'Domain validation failed',
        },
        { status: 400 }
      )
    }

    // 4. Concurrent scan limit (per user/session)
    const scanIdentifier = getScanIdentifier(request)
    const concurrentCheck = await checkConcurrentScans(scanIdentifier)

    if (!concurrentCheck.allowed) {
      return NextResponse.json(
        {
          error: 'Too many concurrent scans',
          message: `You have ${concurrentCheck.currentCount} active scans. Maximum allowed: ${concurrentCheck.maxAllowed}. Please wait for existing scans to complete.`,
          currentScans: concurrentCheck.currentCount,
          maxAllowed: concurrentCheck.maxAllowed,
        },
        { status: 429 }
      )
    }

    // 5. Create scan record
    const scan = await prisma.scan.create({
      data: {
        targetUrl: `https://${normalizedDomain}`,
        status: 'pending',
        metadata: {
          domain: normalizedDomain,
          createdAt: new Date().toISOString(),
          clientIP,
          scanIdentifier,
        },
      },
    })

    // 6. Register scan for concurrent tracking
    await registerScan(scanIdentifier, scan.id)

    // 7. Enqueue scan_orchestrator job with idempotency key
    const orchestratorPayload: ScanOrchestratorPayload = {
      scanId: scan.id,
      domain: normalizedDomain,
    }

    const idempotencyKey = generateIdempotencyKey(scan.id, 'orchestrator')

    const { id: jobId } = await addJob<ScanOrchestratorPayload>(
      QUEUE_NAMES.SCAN_ORCHESTRATOR,
      orchestratorPayload,
      {
        idempotencyKey,
        priority: 1, // High priority for orchestrator
      }
    )

    return NextResponse.json(
      {
        scan: {
          id: scan.id,
          targetUrl: scan.targetUrl,
          status: scan.status,
          createdAt: scan.createdAt,
        },
        job: {
          id: jobId,
          queue: QUEUE_NAMES.SCAN_ORCHESTRATOR,
        },
      },
      {
        status: 201,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetAt).toISOString(),
        },
      }
    )
  } catch (error) {
    console.error('Error creating scan:', error)
    return NextResponse.json(
      {
        error: 'Failed to create scan',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

