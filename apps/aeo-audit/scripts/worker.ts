/**
 * Worker script to run all BullMQ workers
 * Run this script to process jobs from the queue
 */

import { createAllWorkers } from '../lib/queues/workers'

console.log('Starting AEO Audit workers...')
console.log('Press Ctrl+C to stop\n')

// Create all workers
const workers = createAllWorkers()

console.log('Workers started:')
console.log('- scan_orchestrator')
console.log('- url_discovery')
console.log('- page_fetch')
console.log('- page_render_fallback')
console.log('- extract_parse')
console.log('- cluster_build')
console.log('- check_runner')
console.log('- llm_eval')
console.log('- report_build')
console.log('- scheduled_scan')
console.log('- evidence_retention')
console.log('\nWaiting for jobs...\n')

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nShutting down workers...')
  
  // Close all workers
  await Promise.all(
    Object.values(workers).map(async (worker) => {
      await worker.close()
    })
  )
  
  console.log('Workers stopped.')
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('\nShutting down workers...')
  
  await Promise.all(
    Object.values(workers).map(async (worker) => {
      await worker.close()
    })
  )
  
  console.log('Workers stopped.')
  process.exit(0)
})

