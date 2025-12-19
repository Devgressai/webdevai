/**
 * Queue configuration: retry policies, dead-letter queues, and defaults
 */

import { QueueOptions, JobsOptions } from 'bullmq'

/**
 * Default retry configuration
 */
export const DEFAULT_RETRY_CONFIG: JobsOptions = {
  attempts: 3,
  backoff: {
    type: 'exponential',
    delay: 2000, // Start with 2 seconds, then 4s, 8s
  },
  removeOnComplete: {
    age: 24 * 3600, // Keep completed jobs for 24 hours
    count: 1000, // Keep last 1000 completed jobs
  },
  removeOnFail: {
    age: 7 * 24 * 3600, // Keep failed jobs for 7 days
  },
}

/**
 * Queue-specific retry configurations
 */
export const QUEUE_RETRY_CONFIG: Record<string, Partial<JobsOptions>> = {
  scan_orchestrator: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
  url_discovery: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
  },
  page_fetch: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
  evidence_retention: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
    removeOnComplete: {
      age: 24 * 3600, // 24 hours
      count: 1000,
    },
    removeOnFail: {
      age: 7 * 24 * 3600, // 7 days
    },
  },
  page_render_fallback: {
    attempts: 2,
    backoff: {
      type: 'fixed',
      delay: 10000,
    },
  },
  extract_parse: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
  cluster_build: {
    attempts: 2,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
  check_runner: {
    attempts: 4,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
  llm_eval: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 10000,
    },
  },
  report_build: {
    attempts: 2,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
}

/**
 * Default queue options
 */
export const DEFAULT_QUEUE_OPTIONS: QueueOptions = {
  defaultJobOptions: DEFAULT_RETRY_CONFIG,
}

/**
 * Dead-letter queue configuration
 * Jobs that fail after all retries are moved to DLQ
 */
export const DEAD_LETTER_QUEUE_NAME = 'aeo_audit_dlq'

/**
 * Get retry config for a specific queue
 */
export function getRetryConfig(queueName: string): Partial<JobsOptions> {
  return QUEUE_RETRY_CONFIG[queueName] || DEFAULT_RETRY_CONFIG
}

