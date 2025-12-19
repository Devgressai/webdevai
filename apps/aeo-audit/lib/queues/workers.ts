/**
 * Worker definitions (stubs for now)
 * These will be implemented as separate worker processes
 */

import { Worker, WorkerOptions } from 'bullmq'
import Redis from 'ioredis'
import { QUEUE_NAMES } from './types'
import { DEFAULT_RETRY_CONFIG } from './config'

/**
 * Redis connection for workers
 */
function getWorkerRedisConnection(): Redis {
  const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'
  return new Redis(redisUrl, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  })
}

/**
 * Default worker options
 */
const DEFAULT_WORKER_OPTIONS: WorkerOptions = {
  connection: getWorkerRedisConnection(),
  concurrency: 5,
  limiter: {
    max: 10,
    duration: 1000, // 10 jobs per second
  },
}

/**
 * Worker stubs - to be implemented as separate processes
 */

// Scan Orchestrator Worker
export function createScanOrchestratorWorker() {
  return new Worker(
    QUEUE_NAMES.SCAN_ORCHESTRATOR,
    async (job) => {
      const { ScanOrchestratorPayload } = await import('./types')
      const { orchestrateScan } = await import('../scans/orchestrator')
      
      console.log(`[Scan Orchestrator] Processing job ${job.id}`, job.data)
      
      try {
        const result = await orchestrateScan(job.data as ScanOrchestratorPayload)
        
        console.log(
          `[Scan Orchestrator] Completed: URL discovery enqueued for scan ${job.data.scanId}`
        )
        
        return result
      } catch (error) {
        console.error(`[Scan Orchestrator] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 2, // Lower concurrency for orchestrator
    }
  )
}

// URL Discovery Worker
export function createUrlDiscoveryWorker() {
  return new Worker(
    QUEUE_NAMES.URL_DISCOVERY,
    async (job) => {
      const { UrlDiscoveryPayload } = await import('./types')
      const { discoverUrls } = await import('../url-discovery/worker')
      
      console.log(`[URL Discovery] Processing job ${job.id}`, job.data)
      
      try {
        const result = await discoverUrls(job.data as UrlDiscoveryPayload)
        
        console.log(
          `[URL Discovery] Completed: ${result.urls.length} URLs discovered via ${result.source}`
        )
        
        return {
          urls: result.urls,
          source: result.source,
          counts: result.evidence.counts,
        }
      } catch (error) {
        console.error(`[URL Discovery] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 10,
    }
  )
}

// Page Fetch Worker
export function createPageFetchWorker() {
  return new Worker(
    QUEUE_NAMES.PAGE_FETCH,
    async (job) => {
      const { PageFetchPayload } = await import('./types')
      const { fetchPage } = await import('../page-fetch/worker')
      
      console.log(`[Page Fetch] Processing job ${job.id}`, job.data)
      
      try {
        const result = await fetchPage(job.data as PageFetchPayload)
        
        console.log(
          `[Page Fetch] Completed: ${result.statusCode} ${result.finalUrl} (${result.loadTime}ms)`
        )
        
        return {
          success: result.success,
          pageId: result.pageId,
          statusCode: result.statusCode,
          finalUrl: result.finalUrl,
          contentType: result.contentType,
          loadTime: result.loadTime,
          contentLength: result.contentLength,
          robotsAllowed: result.robotsAllowed,
          confidence: result.confidence,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Page Fetch] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 20,
    }
  )
}

// Page Render Fallback Worker
export function createPageRenderFallbackWorker() {
  return new Worker(
    QUEUE_NAMES.PAGE_RENDER_FALLBACK,
    async (job) => {
      const { PageRenderFallbackPayload } = await import('./types')
      const { renderPageFallback } = await import('../page-render/worker')
      
      console.log(`[Page Render Fallback] Processing job ${job.id}`, job.data)
      
      try {
        const result = await renderPageFallback(job.data as PageRenderFallbackPayload)
        
        console.log(
          `[Page Render Fallback] Completed: Render ${result.renderUsed ? 'used' : 'skipped'}, duration ${result.duration}ms`
        )
        
        return {
          success: result.success,
          pageId: result.pageId,
          renderUsed: result.renderUsed,
          duration: result.duration,
          htmlLength: result.htmlLength,
          extractParseJobId: result.extractParseJobId,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Page Render Fallback] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 2, // Lower concurrency for rendering (resource intensive)
    }
  )
}

// Extract Parse Worker
export function createExtractParseWorker() {
  return new Worker(
    QUEUE_NAMES.EXTRACT_PARSE,
    async (job) => {
      const { ExtractParsePayload } = await import('./types')
      const { extractAndParse } = await import('../extract-parse/worker')
      
      console.log(`[Extract Parse] Processing job ${job.id}`, job.data)
      
      try {
        const result = await extractAndParse(job.data as ExtractParsePayload)
        
        console.log(
          `[Extract Parse] Completed: ${result.metadata.title || '(no title)'} - ${result.jsonLdBlocks.length} JSON-LD blocks`
        )
        
        return {
          success: result.success,
          pageId: result.pageId,
          metadata: result.metadata,
          jsonLdBlockCount: result.jsonLdBlocks.length,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Extract Parse] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 10,
    }
  )
}

// Cluster Build Worker
export function createClusterBuildWorker() {
  return new Worker(
    QUEUE_NAMES.CLUSTER_BUILD,
    async (job) => {
      const { ClusterBuildPayload } = await import('./types')
      const { buildClusters } = await import('../cluster-build/worker')
      
      console.log(`[Cluster Build] Processing job ${job.id}`, job.data)
      
      try {
        const result = await buildClusters(job.data as ClusterBuildPayload)
        
        console.log(
          `[Cluster Build] Completed: ${result.clustersCreated} clusters created`
        )
        
        return {
          success: result.success,
          clustersCreated: result.clustersCreated,
          clusters: result.clusters,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Cluster Build] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 3,
    }
  )
}

// Check Runner Worker
export function createCheckRunnerWorker() {
  return new Worker(
    QUEUE_NAMES.CHECK_RUNNER,
    async (job) => {
      const { CheckRunnerPayload } = await import('./types')
      const { runChecks } = await import('../check-runner/worker')
      
      console.log(`[Check Runner] Processing job ${job.id}`, job.data)
      
      try {
        const result = await runChecks(job.data as CheckRunnerPayload)
        
        console.log(
          `[Check Runner] Completed: Overall score ${result.overallScore}, ${result.issuesGenerated} issues generated`
        )
        
        return {
          success: result.success,
          overallScore: result.overallScore,
          pillarScores: result.pillarScores,
          issuesGenerated: result.issuesGenerated,
          reportId: result.reportId,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Check Runner] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 15,
    }
  )
}

// LLM Eval Worker
export function createLlmEvalWorker() {
  return new Worker(
    QUEUE_NAMES.LLM_EVAL,
    async (job) => {
      const { LlmEvalPayload } = await import('./types')
      const { evaluateWithLlm } = await import('../llm-eval/worker')
      
      console.log(`[LLM Eval] Processing job ${job.id}`, job.data)
      
      try {
        const result = await evaluateWithLlm(job.data as LlmEvalPayload)
        
        console.log(
          `[LLM Eval] Completed: ${result.evalType} score ${result.overallScore}, ${result.evidenceQuotes.length} evidence quotes`
        )
        
        return {
          success: result.success,
          evalId: result.evalId,
          evalType: result.evalType,
          overallScore: result.overallScore,
          evidenceQuotesCount: result.evidenceQuotes.length,
          error: result.error,
        }
      } catch (error) {
        console.error(`[LLM Eval] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 2, // Lower concurrency for LLM calls
      limiter: {
        max: 5,
        duration: 1000, // 5 jobs per second for LLM
      },
    }
  )
}

// Report Build Worker
export function createReportBuildWorker() {
  return new Worker(
    QUEUE_NAMES.REPORT_BUILD,
    async (job) => {
      const { ReportBuildPayload } = await import('./types')
      const { buildReport } = await import('../scans/report-builder')
      
      console.log(`[Report Build] Processing job ${job.id}`, job.data)
      
      try {
        const result = await buildReport(job.data as ReportBuildPayload)
        
        console.log(
          `[Report Build] Completed: Report built for scan ${job.data.scanId}`
        )
        
        // After report is built, process scan completion for monitoring
        try {
          const { processScanCompletion } = await import('../monitoring/scheduled-scan')
          await processScanCompletion(job.data.scanId)
        } catch (error) {
          console.error(`[Report Build] Error processing scan completion:`, error)
          // Don't fail the job if monitoring fails
        }
        
        return result
      } catch (error) {
        console.error(`[Report Build] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 3,
    }
  )
}

// Scheduled Scan Worker
export function createScheduledScanWorker() {
  return new Worker(
    QUEUE_NAMES.SCHEDULED_SCAN,
    async (job) => {
      const { ScheduledScanPayload } = await import('./types')
      const { handleScheduledScan } = await import('../monitoring/scheduled-scan')
      
      console.log(`[Scheduled Scan] Processing job ${job.id}`, job.data)
      
      try {
        const result = await handleScheduledScan(job.data as ScheduledScanPayload)
        
        console.log(
          `[Scheduled Scan] Completed: Scan ${result.scanId} created, ${result.alertsCreated} alerts`
        )
        
        return {
          success: result.success,
          scanId: result.scanId,
          snapshotId: result.snapshotId,
          diffGenerated: result.diffGenerated,
          alertsCreated: result.alertsCreated,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Scheduled Scan] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 1, // One scheduled scan at a time
    }
  )
}

// Evidence Retention Worker
export function createEvidenceRetentionWorker() {
  return new Worker(
    QUEUE_NAMES.EVIDENCE_RETENTION,
    async (job) => {
      const { EvidenceRetentionPayload } = await import('./types')
      const { runRetentionJob } = await import('../evidence/retention')
      
      console.log(`[Evidence Retention] Processing job ${job.id}`, job.data)
      
      try {
        const result = await runRetentionJob(job.data as EvidenceRetentionPayload)
        
        console.log(
          `[Evidence Retention] Completed: Purged ${result.purged}, Kept ${result.kept}, Errors ${result.errors}`
        )
        
        return {
          success: result.success,
          purged: result.purged,
          kept: result.kept,
          errors: result.errors,
          stats: result.stats,
          error: result.error,
        }
      } catch (error) {
        console.error(`[Evidence Retention] Error processing job ${job.id}:`, error)
        throw error
      }
    },
    {
      ...DEFAULT_WORKER_OPTIONS,
      concurrency: 1, // One retention job at a time
    }
  )
}

/**
 * Create all workers (for development/testing)
 */
export function createAllWorkers() {
  return {
    scanOrchestrator: createScanOrchestratorWorker(),
    urlDiscovery: createUrlDiscoveryWorker(),
    pageFetch: createPageFetchWorker(),
    pageRenderFallback: createPageRenderFallbackWorker(),
    extractParse: createExtractParseWorker(),
    clusterBuild: createClusterBuildWorker(),
    checkRunner: createCheckRunnerWorker(),
    llmEval: createLlmEvalWorker(),
    reportBuild: createReportBuildWorker(),
    scheduledScan: createScheduledScanWorker(),
    evidenceRetention: createEvidenceRetentionWorker(),
  }
}

