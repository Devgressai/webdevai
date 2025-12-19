/**
 * Queue factory for creating BullMQ queues with consistent configuration
 */

import { Queue, QueueOptions } from 'bullmq'
import Redis from 'ioredis'
import { QUEUE_NAMES, QueueName } from './types'
import { DEFAULT_QUEUE_OPTIONS, getRetryConfig } from './config'

/**
 * Redis connection instance (singleton)
 */
let redisConnection: Redis | null = null

/**
 * Get or create Redis connection
 */
function getRedisConnection(): Redis {
  if (!redisConnection) {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'
    redisConnection = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    })
  }
  return redisConnection
}

/**
 * Queue instances cache
 */
const queueCache = new Map<QueueName, Queue>()

/**
 * Create or get a queue instance
 */
export function getQueue<T = unknown>(queueName: QueueName): Queue<T> {
  if (queueCache.has(queueName)) {
    return queueCache.get(queueName) as Queue<T>
  }

  const connection = getRedisConnection()
  const queueOptions: QueueOptions = {
    ...DEFAULT_QUEUE_OPTIONS,
    connection,
  }

  const queue = new Queue<T>(queueName, queueOptions)
  queueCache.set(queueName, queue)

  return queue
}

/**
 * Get all queue instances
 */
export function getAllQueues(): Queue[] {
  return Object.values(QUEUE_NAMES).map((name) => getQueue(name))
}

/**
 * Close all queue connections
 */
export async function closeAllQueues(): Promise<void> {
  await Promise.all(getAllQueues().map((queue) => queue.close()))
  if (redisConnection) {
    await redisConnection.quit()
    redisConnection = null
  }
  queueCache.clear()
}

/**
 * Generate idempotency key for jobs
 * Format: {scanId}:{url} or {scanId}:{otherIdentifier}
 */
export function generateIdempotencyKey(
  scanId: string,
  identifier: string
): string {
  return `${scanId}:${identifier}`
}

/**
 * Add job to queue with idempotency and retry config
 */
export async function addJob<T>(
  queueName: QueueName,
  payload: T,
  options?: {
    idempotencyKey?: string
    jobId?: string
    priority?: number
    delay?: number
  }
): Promise<{ id: string | undefined }> {
  const queue = getQueue<T>(queueName)
  const retryConfig = getRetryConfig(queueName)

  const jobOptions = {
    ...retryConfig,
    jobId: options?.idempotencyKey || options?.jobId,
    priority: options?.priority,
    delay: options?.delay,
  }

  const job = await queue.add(queueName, payload, jobOptions)

  return { id: job.id }
}

/**
 * Queue-specific helper functions
 */
export const queues = {
  scanOrchestrator: () => getQueue(QUEUE_NAMES.SCAN_ORCHESTRATOR),
  urlDiscovery: () => getQueue(QUEUE_NAMES.URL_DISCOVERY),
  pageFetch: () => getQueue(QUEUE_NAMES.PAGE_FETCH),
  pageRenderFallback: () => getQueue(QUEUE_NAMES.PAGE_RENDER_FALLBACK),
  evidenceRetention: () => getQueue(QUEUE_NAMES.EVIDENCE_RETENTION),
  extractParse: () => getQueue(QUEUE_NAMES.EXTRACT_PARSE),
  clusterBuild: () => getQueue(QUEUE_NAMES.CLUSTER_BUILD),
  checkRunner: () => getQueue(QUEUE_NAMES.CHECK_RUNNER),
  llmEval: () => getQueue(QUEUE_NAMES.LLM_EVAL),
  reportBuild: () => getQueue(QUEUE_NAMES.REPORT_BUILD),
}

