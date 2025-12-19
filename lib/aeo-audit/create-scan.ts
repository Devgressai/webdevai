/**
 * Shared scan creation logic for AEO Audit Tool
 * Can be used by both the internal tool and the public proxy API
 */

// Import Prisma client - both apps should use the same database
// If the internal tool has its own Prisma setup, we'll need to ensure they share the same client
import { PrismaClient } from '@prisma/client'
import { addJob, generateIdempotencyKey } from '../../apps/aeo-audit/lib/queues'
import { ScanOrchestratorPayload } from '../../apps/aeo-audit/lib/queues/types'
import { QUEUE_NAMES } from '../../apps/aeo-audit/lib/queues/types'
import {
  validateDomain,
  normalizeDomain,
} from '../../apps/aeo-audit/lib/api/validation/domain'
import {
  checkRateLimit,
  getClientIP,
} from '../../apps/aeo-audit/lib/api/rate-limit'
import {
  checkConcurrentScans,
  registerScan,
  getScanIdentifier,
} from '../../apps/aeo-audit/lib/api/concurrent-scans'
import { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export interface CreateScanResult {
  success: boolean
  scanId?: string
  error?: string
  message?: string
  statusCode?: number
  headers?: Record<string, string>
}

export async function createScan(
  domain: string,
  request: NextRequest
): Promise<CreateScanResult> {
  try {
    // 1. Rate limiting (per IP)
    const clientIP = getClientIP(request)
    const rateLimitResult = await checkRateLimit(clientIP)

    if (!rateLimitResult.allowed) {
      return {
        success: false,
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
        statusCode: 429,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetAt).toISOString(),
          'Retry-After': Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000).toString(),
        },
      }
    }

    // 2. Domain validation
    const validationResult = validateDomain(domain)
    if (!validationResult.valid) {
      return {
        success: false,
        error: 'Invalid domain',
        message: validationResult.error || 'Domain validation failed',
        statusCode: 400,
      }
    }

    // 3. Normalize domain
    const normalizedDomain = normalizeDomain(domain)
    const targetUrl = `https://${normalizedDomain}`

    // 4. Check concurrent scans
    const scanIdentifier = getScanIdentifier(request)
    const concurrentResult = await checkConcurrentScans(scanIdentifier)

    if (!concurrentResult.allowed) {
      return {
        success: false,
        error: 'Too many concurrent scans',
        message: `You have ${concurrentResult.currentCount} active scans. Maximum allowed: ${concurrentResult.maxAllowed}. Please wait for existing scans to complete.`,
        statusCode: 429,
      }
    }

    // 5. Create scan record
    const scan = await prisma.scan.create({
      data: {
        targetUrl,
        status: 'pending',
        metadata: {
          source: 'public_api',
          domain: normalizedDomain,
          userAgent: request.headers.get('user-agent') || undefined,
          ip: clientIP,
        },
      },
    })

    // 6. Register scan for concurrent tracking
    await registerScan(scanIdentifier, scan.id)

    // 7. Enqueue scan orchestrator job
    const idempotencyKey = generateIdempotencyKey(scan.id, 'orchestrator')
    const payload: ScanOrchestratorPayload = {
      scanId: scan.id,
      domain: normalizedDomain,
    }

    await addJob<ScanOrchestratorPayload>(
      QUEUE_NAMES.SCAN_ORCHESTRATOR,
      payload,
      {
        idempotencyKey,
        priority: 1, // High priority for orchestrator
      }
    )

    return {
      success: true,
      scanId: scan.id,
      message: 'Scan created successfully',
      statusCode: 201,
    }
  } catch (error) {
    console.error('Error creating scan:', error)
    return {
      success: false,
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Failed to create scan',
      statusCode: 500,
    }
  }
}

