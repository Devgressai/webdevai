/**
 * API route: GET /api/scans/[scanId]/issues/[issueId]
 * Returns detailed issue information
 */

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getIssue, getFixTemplatesForIssue } from '@/lib/rubric/loader'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { scanId: string; issueId: string } }
) {
  try {
    const { scanId, issueId } = params

    // Get issue
    const issue = await prisma.issue.findUnique({
      where: { id: issueId },
      include: {
        issueClusters: {
          include: {
            cluster: true,
          },
        },
        issuePages: {
          include: {
            page: true,
          },
        },
      },
    })

    if (!issue || issue.scanId !== scanId) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
    }

    // Get issue definition from rubric
    const issueDef = getIssue(issue.issueCode)
    if (!issueDef) {
      return NextResponse.json(
        { error: 'Issue definition not found' },
        { status: 404 }
      )
    }

    // Get fix templates
    const fixTemplates = getFixTemplatesForIssue(issue.issueCode)

    // Get evidence
    const metadata = (issue.metadata as Record<string, unknown>) || {}
    const evidencePointers = (metadata.evidencePointers as string[]) || []

    const evidenceRecords = await prisma.evidence.findMany({
      where: {
        id: { in: evidencePointers },
      },
      include: {
        page: {
          select: {
            url: true,
          },
        },
      },
      take: 10, // Limit to 10 evidence records
    })

    const evidence = evidenceRecords.map((ev) => ({
      id: ev.id,
      type: ev.type,
      content: ev.content,
      pageUrl: ev.page.url,
    }))

    // Get affected URLs
    const affectedUrls: string[] = []
    if (issue.issuePages.length > 0) {
      affectedUrls.push(...issue.issuePages.map((ip) => ip.page.url))
    } else {
      // If site-wide, get sample of pages
      const pages = await prisma.page.findMany({
        where: { scanId },
        take: 50,
        select: { url: true },
      })
      affectedUrls.push(...pages.map((p) => p.url))
    }

    // Format response
    const response = {
      id: issue.id,
      issueCode: issue.issueCode,
      title: issue.title,
      description: issue.description,
      severity: issue.severity,
      scope: metadata.scope || 'site',
      affectedCount: metadata.affectedCount || 0,
      priorityScore: metadata.priorityScore || 0,
      clusterId: metadata.clusterId as string | undefined,
      clusterName: issue.issueClusters[0]?.cluster.name,
      evidence,
      fixTemplates: fixTemplates.map((ft) => ({
        fix_template_id: ft.fix_template_id,
        title: ft.title,
        description: ft.description,
        steps: ft.steps,
        code_example: ft.code_example,
      })),
      affectedUrls,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching issue detail:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch issue detail',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

