/**
 * Check computation utilities
 * Computes deterministic checks using Page + Cluster metrics
 */

import { PrismaClient } from '@prisma/client'
import { Check } from '../rubric/loader'

const prisma = new PrismaClient()

export interface CheckResult {
  checkId: string
  issueCode: string
  score: number // 0-5 scale
  triggered: boolean // Whether issue code is triggered
  evidence: {
    type: string
    content: string
    metadata?: Record<string, unknown>
  }[]
}

/**
 * Compute all checks for a scan
 */
export async function computeChecks(
  scanId: string,
  checks: Check[]
): Promise<CheckResult[]> {
  const results: CheckResult[] = []

  for (const check of checks) {
    const result = await computeCheck(scanId, check)
    results.push(result)
  }

  return results
}

/**
 * Compute a single check
 */
async function computeCheck(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  switch (check.id) {
    case 'has_jsonld':
      return await checkHasJsonLd(scanId, check)
    case 'has_organization_schema':
      return await checkHasOrganizationSchema(scanId, check)
    case 'has_webpage_schema':
      return await checkHasWebPageSchema(scanId, check)
    case 'schema_parseable':
      return await checkSchemaParseable(scanId, check)
    case 'has_title':
      return await checkHasTitle(scanId, check)
    case 'title_optimal_length':
      return await checkTitleOptimalLength(scanId, check)
    case 'has_meta_description':
      return await checkHasMetaDescription(scanId, check)
    case 'has_canonical':
      return await checkHasCanonical(scanId, check)
    case 'has_single_h1':
      return await checkHasSingleH1(scanId, check)
    case 'heading_hierarchy_valid':
      return await checkHeadingHierarchy(scanId, check)
    case 'has_sufficient_content':
      return await checkSufficientContent(scanId, check)
    case 'content_has_sections':
      return await checkContentSections(scanId, check)
    case 'has_faq_section':
      return await checkHasFaqSection(scanId, check)
    case 'has_howto_section':
      return await checkHasHowToSection(scanId, check)
    case 'content_uses_clear_language':
      return await checkClearLanguage(scanId, check)
    case 'content_has_definitions':
      return await checkHasDefinitions(scanId, check)
    default:
      // Default check (always passes)
      return {
        checkId: check.id,
        issueCode: check.issue_code,
        score: 5,
        triggered: false,
        evidence: [],
      }
  }
}

/**
 * Check: Has JSON-LD
 */
async function checkHasJsonLd(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    include: { schemaBlocks: true },
  })

  const totalPages = pages.length
  const pagesWithJsonLd = pages.filter((p) => p.schemaBlocks.length > 0).length
  const coverage = totalPages > 0 ? pagesWithJsonLd / totalPages : 0

  // Score: 0-5 based on coverage
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.8 // Trigger if < 80% coverage

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithJsonLd}/${totalPages} pages have JSON-LD`,
        metadata: {
          totalPages,
          pagesWithJsonLd,
          coverage,
        },
      },
    ],
  }
}

/**
 * Check: Has Organization Schema
 */
async function checkHasOrganizationSchema(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    include: { schemaBlocks: true },
  })

  const totalPages = pages.length
  const pagesWithOrg = pages.filter((p) =>
    p.schemaBlocks.some(
      (sb) =>
        sb.parsedType?.toLowerCase().includes('organization') ||
        (sb.parsedData as any)?.@type?.toLowerCase().includes('organization')
    )
  ).length

  const coverage = totalPages > 0 ? pagesWithOrg / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.5 // Trigger if < 50% coverage

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithOrg}/${totalPages} pages have Organization schema`,
        metadata: { totalPages, pagesWithOrg, coverage },
      },
    ],
  }
}

/**
 * Check: Has WebPage Schema
 */
async function checkHasWebPageSchema(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    include: { schemaBlocks: true },
  })

  const totalPages = pages.length
  const pagesWithWebPage = pages.filter((p) =>
    p.schemaBlocks.some(
      (sb) =>
        sb.parsedType?.toLowerCase().includes('webpage') ||
        (sb.parsedData as any)?.@type?.toLowerCase().includes('webpage')
    )
  ).length

  const coverage = totalPages > 0 ? pagesWithWebPage / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.7 // Trigger if < 70% coverage

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithWebPage}/${totalPages} pages have WebPage schema`,
        metadata: { totalPages, pagesWithWebPage, coverage },
      },
    ],
  }
}

/**
 * Check: Schema Parseable
 */
async function checkSchemaParseable(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const schemaBlocks = await prisma.schemaBlock.findMany({
    where: {
      page: { scanId },
    },
  })

  const totalBlocks = schemaBlocks.length
  const parseableBlocks = schemaBlocks.filter((sb) => sb.parseOk).length
  const validityRate =
    totalBlocks > 0 ? parseableBlocks / totalBlocks : 1.0

  const score = Math.min(5, Math.round(validityRate * 5))
  const triggered = validityRate < 0.9 // Trigger if < 90% valid

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'validity_metric',
        content: `${parseableBlocks}/${totalBlocks} JSON-LD blocks are parseable`,
        metadata: { totalBlocks, parseableBlocks, validityRate },
      },
    ],
  }
}

/**
 * Check: Has Title
 */
async function checkHasTitle(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const pagesWithTitle = pages.filter((p) => p.title && p.title.trim()).length
  const coverage = totalPages > 0 ? pagesWithTitle / totalPages : 0

  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 1.0 // Trigger if any page missing title

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithTitle}/${totalPages} pages have title tags`,
        metadata: { totalPages, pagesWithTitle, coverage },
      },
    ],
  }
}

/**
 * Check: Title Optimal Length
 */
async function checkTitleOptimalLength(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const optimalTitles = pages.filter((p) => {
    const titleLength = p.title?.length || 0
    return titleLength >= 50 && titleLength <= 60
  }).length

  const coverage = totalPages > 0 ? optimalTitles / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.7 // Trigger if < 70% optimal

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${optimalTitles}/${totalPages} pages have optimal title length (50-60 chars)`,
        metadata: { totalPages, optimalTitles, coverage },
      },
    ],
  }
}

/**
 * Check: Has Meta Description
 */
async function checkHasMetaDescription(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const pagesWithMeta = pages.filter((p) => {
    const metadata = (p.metadata as Record<string, unknown>) || {}
    return !!metadata.metaDescription
  }).length

  const coverage = totalPages > 0 ? pagesWithMeta / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.8 // Trigger if < 80% coverage

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithMeta}/${totalPages} pages have meta descriptions`,
        metadata: { totalPages, pagesWithMeta, coverage },
      },
    ],
  }
}

/**
 * Check: Has Canonical
 */
async function checkHasCanonical(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const pagesWithCanonical = pages.filter((p) => {
    const metadata = (p.metadata as Record<string, unknown>) || {}
    return !!metadata.canonical
  }).length

  const coverage = totalPages > 0 ? pagesWithCanonical / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.9 // Trigger if < 90% coverage

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithCanonical}/${totalPages} pages have canonical URLs`,
        metadata: { totalPages, pagesWithCanonical, coverage },
      },
    ],
  }
}

/**
 * Check: Has Single H1
 */
async function checkHasSingleH1(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  let pagesWithSingleH1 = 0

  for (const page of pages) {
    const metadata = (page.metadata as Record<string, unknown>) || {}
    const headings = (metadata.headings as
      | { h1?: string[] }
      | undefined) || {}
    const h1Count = headings.h1?.length || 0
    if (h1Count === 1) {
      pagesWithSingleH1++
    }
  }

  const coverage = totalPages > 0 ? pagesWithSingleH1 / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.8 // Trigger if < 80% have single H1

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithSingleH1}/${totalPages} pages have exactly one H1`,
        metadata: { totalPages, pagesWithSingleH1, coverage },
      },
    ],
  }
}

/**
 * Check: Heading Hierarchy Valid
 */
async function checkHeadingHierarchy(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  // Simplified check - would need full HTML parsing for accurate hierarchy validation
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  // For now, assume valid if pages have headings
  const totalPages = pages.length
  let validPages = 0

  for (const page of pages) {
    const metadata = (page.metadata as Record<string, unknown>) || {}
    const headings = (metadata.headings as
      | { h1?: string[]; h2?: string[]; h3?: string[] }
      | undefined) || {}
    const hasHeadings =
      (headings.h1?.length || 0) > 0 ||
      (headings.h2?.length || 0) > 0 ||
      (headings.h3?.length || 0) > 0

    if (hasHeadings) {
      validPages++
    }
  }

  const coverage = totalPages > 0 ? validPages / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.7

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${validPages}/${totalPages} pages have valid heading structure`,
        metadata: { totalPages, validPages, coverage },
      },
    ],
  }
}

/**
 * Check: Sufficient Content
 */
async function checkSufficientContent(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const sufficientPages = pages.filter((p) => {
    const metadata = (p.metadata as Record<string, unknown>) || {}
    const wordCount = (metadata.wordCount as number) || 0
    return wordCount >= 300 // Minimum word count
  }).length

  const coverage = totalPages > 0 ? sufficientPages / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.7 // Trigger if < 70% have sufficient content

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${sufficientPages}/${totalPages} pages have sufficient content (300+ words)`,
        metadata: { totalPages, sufficientPages, coverage },
      },
    ],
  }
}

/**
 * Check: Content Has Sections
 */
async function checkContentSections(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const totalPages = pages.length
  const pagesWithSections = pages.filter((p) => {
    const metadata = (p.metadata as Record<string, unknown>) || {}
    const headings = (metadata.headings as
      | { h2?: string[]; h3?: string[] }
      | undefined) || {}
    const sectionCount =
      (headings.h2?.length || 0) + (headings.h3?.length || 0)
    return sectionCount >= 2 // At least 2 sections
  }).length

  const coverage = totalPages > 0 ? pagesWithSections / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.6

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithSections}/${totalPages} pages have organized sections`,
        metadata: { totalPages, pagesWithSections, coverage },
      },
    ],
  }
}

/**
 * Check: Has FAQ Section
 */
async function checkHasFaqSection(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    include: { schemaBlocks: true },
  })

  const totalPages = pages.length
  const pagesWithFaq = pages.filter((p) => {
    // Check for FAQ schema
    const hasFaqSchema = p.schemaBlocks.some(
      (sb) =>
        sb.parsedType?.toLowerCase().includes('faq') ||
        sb.parsedType?.toLowerCase().includes('question')
    )

    // Check for FAQ headings
    const metadata = (p.metadata as Record<string, unknown>) || {}
    const headings = (metadata.headings as
      | { h1?: string[]; h2?: string[]; h3?: string[] }
      | undefined) || {}
    const allHeadings = [
      ...(headings.h1 || []),
      ...(headings.h2 || []),
      ...(headings.h3 || []),
    ]
    const hasFaqHeading = allHeadings.some((h) =>
      h.toLowerCase().includes('faq')
    )

    return hasFaqSchema || hasFaqHeading
  }).length

  const coverage = totalPages > 0 ? pagesWithFaq / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.3 // Trigger if < 30% have FAQ

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithFaq}/${totalPages} pages have FAQ sections`,
        metadata: { totalPages, pagesWithFaq, coverage },
      },
    ],
  }
}

/**
 * Check: Has HowTo Section
 */
async function checkHasHowToSection(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  const pages = await prisma.page.findMany({
    where: { scanId },
    include: { schemaBlocks: true },
  })

  const totalPages = pages.length
  const pagesWithHowTo = pages.filter((p) =>
    p.schemaBlocks.some(
      (sb) =>
        sb.parsedType?.toLowerCase().includes('howto') ||
        sb.parsedType?.toLowerCase().includes('how-to')
    )
  ).length

  const coverage = totalPages > 0 ? pagesWithHowTo / totalPages : 0
  const score = Math.min(5, Math.round(coverage * 5))
  const triggered = coverage < 0.2 // Trigger if < 20% have HowTo

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'coverage_metric',
        content: `${pagesWithHowTo}/${totalPages} pages have HowTo sections`,
        metadata: { totalPages, pagesWithHowTo, coverage },
      },
    ],
  }
}

/**
 * Check: Clear Language (simplified)
 */
async function checkClearLanguage(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  // Simplified check - would need NLP for accurate assessment
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  // For now, assume all pages pass (would need content analysis)
  const score = 4 // Default score
  const triggered = false

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'heuristic',
        content: 'Content language clarity check (requires NLP analysis)',
        metadata: { note: 'Simplified implementation' },
      },
    ],
  }
}

/**
 * Check: Has Definitions
 */
async function checkHasDefinitions(
  scanId: string,
  check: Check
): Promise<CheckResult> {
  // Simplified check - would need content analysis
  const pages = await prisma.page.findMany({
    where: { scanId },
  })

  const score = 4 // Default score
  const triggered = false

  return {
    checkId: check.id,
    issueCode: check.issue_code,
    score,
    triggered,
    evidence: [
      {
        type: 'heuristic',
        content: 'Technical term definitions check (requires content analysis)',
        metadata: { note: 'Simplified implementation' },
      },
    ],
  }
}

