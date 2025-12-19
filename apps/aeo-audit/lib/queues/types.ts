/**
 * Job payload types for AEO Audit queues
 */

export interface ScanOrchestratorPayload {
  scanId: string
  domain: string
}

export interface UrlDiscoveryPayload {
  scanId: string
  domain: string
  depth?: number
  maxUrls?: number
}

export interface PageFetchPayload {
  scanId: string
  url: string
  retryCount?: number
}

export interface PageRenderFallbackPayload {
  scanId: string
  url: string
  fetchJobId?: string
}

export interface ExtractParsePayload {
  scanId: string
  pageId: string
  url: string
  html?: string
  screenshot?: string
}

export interface ClusterBuildPayload {
  scanId: string
  pageIds?: string[]
}

export interface CheckRunnerPayload {
  scanId: string
  pageId: string
  checkTypes?: string[]
}

export interface LlmEvalPayload {
  scanId: string
  evalType: 'readiness_score' | 'schema_quality' | 'content_alignment'
  context?: Record<string, unknown>
}

export interface ReportBuildPayload {
  scanId: string
}

export interface ScheduledScanPayload {
  domainId: string
  domain: string
}

export interface EvidenceRetentionPayload {
  retentionDays?: number
  dryRun?: boolean
}

/**
 * Queue names
 */
export const QUEUE_NAMES = {
  SCAN_ORCHESTRATOR: 'scan_orchestrator',
  URL_DISCOVERY: 'url_discovery',
  PAGE_FETCH: 'page_fetch',
  PAGE_RENDER_FALLBACK: 'page_render_fallback',
  EXTRACT_PARSE: 'extract_parse',
  CLUSTER_BUILD: 'cluster_build',
  CHECK_RUNNER: 'check_runner',
  LLM_EVAL: 'llm_eval',
  REPORT_BUILD: 'report_build',
  SCHEDULED_SCAN: 'scheduled_scan',
  EVIDENCE_RETENTION: 'evidence_retention',
} as const

export type QueueName = typeof QUEUE_NAMES[keyof typeof QUEUE_NAMES]

