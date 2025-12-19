/**
 * Seed script for AEO Audit Tool
 * Creates one fake scan with 2 pages, 1 issue, and 1 evidence for UI testing
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create a scan
  const scan = await prisma.scan.create({
    data: {
      targetUrl: 'https://example.com',
      status: 'completed',
      startedAt: new Date(Date.now() - 3600000), // 1 hour ago
      completedAt: new Date(),
      metadata: {
        userAgent: 'AEO-Audit-Bot/1.0',
        depth: 2,
        maxPages: 10,
      },
    },
  })

  console.log(`✅ Created scan: ${scan.id}`)

  // Create 2 pages
  const page1 = await prisma.page.create({
    data: {
      scanId: scan.id,
      url: 'https://example.com',
      title: 'Example Homepage',
      statusCode: 200,
      loadTime: 1250,
      metadata: {
        wordCount: 450,
        hasSchema: true,
      },
    },
  })

  const page2 = await prisma.page.create({
    data: {
      scanId: scan.id,
      url: 'https://example.com/about',
      title: 'About Us - Example',
      statusCode: 200,
      loadTime: 980,
      metadata: {
        wordCount: 320,
        hasSchema: false,
      },
    },
  })

  console.log(`✅ Created pages: ${page1.id}, ${page2.id}`)

  // Create 1 issue
  const issue = await prisma.issue.create({
    data: {
      scanId: scan.id,
      issueCode: 'MISSING_SCHEMA',
      severity: 'high',
      title: 'Missing Structured Data Schema',
      description: 'The page does not contain any structured data schema (JSON-LD, Microdata, or RDFa). This reduces visibility in AI-powered search experiences.',
      recommendation: 'Add JSON-LD structured data schema to improve AI search readiness. Consider implementing Organization, WebPage, and BreadcrumbList schemas.',
      metadata: {
        category: 'structured_data',
        impact: 'high',
      },
    },
  })

  console.log(`✅ Created issue: ${issue.id}`)

  // Create 1 evidence
  const evidence = await prisma.evidence.create({
    data: {
      pageId: page1.id,
      type: 'schema',
      content: 'No structured data found in page source',
      selector: 'body',
      metadata: {
        checkedFormats: ['json-ld', 'microdata', 'rdfa'],
        found: false,
      },
    },
  })

  console.log(`✅ Created evidence: ${evidence.id}`)

  // Link issue to page1 via IssuePageMap
  await prisma.issuePageMap.create({
    data: {
      issueId: issue.id,
      pageId: page1.id,
    },
  })

  console.log(`✅ Linked issue to page1`)

  // Create a cluster and link it to the issue
  const cluster = await prisma.cluster.create({
    data: {
      scanId: scan.id,
      name: 'Structured Data Issues',
      type: 'topic',
      metadata: {
        description: 'Issues related to structured data and schema markup',
      },
    },
  })

  console.log(`✅ Created cluster: ${cluster.id}`)

  await prisma.issueClusterMap.create({
    data: {
      issueId: issue.id,
      clusterId: cluster.id,
      scanId: scan.id,
    },
  })

  console.log(`✅ Linked issue to cluster`)

  // Create an LLM evaluation
  const llmEval = await prisma.llmEval.create({
    data: {
      scanId: scan.id,
      evalType: 'readiness_score',
      model: 'gpt-4',
      result: {
        overallScore: 65,
        schemaReadiness: 40,
        contentQuality: 75,
        structureScore: 70,
        recommendations: [
          'Add structured data schema',
          'Improve content depth',
          'Enhance meta descriptions',
        ],
      },
      metadata: {
        promptVersion: '1.0',
        temperature: 0.7,
      },
    },
  })

  console.log(`✅ Created LLM evaluation: ${llmEval.id}`)

  console.log('\n🎉 Seeding completed!')
  console.log(`\nScan ID: ${scan.id}`)
  console.log(`You can view this scan at: /scans/${scan.id}`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

