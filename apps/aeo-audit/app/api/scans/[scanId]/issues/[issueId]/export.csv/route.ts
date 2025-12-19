/**
 * API route: GET /api/scans/[scanId]/issues/[issueId]/export.csv
 * Exports affected URLs as CSV
 */

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

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
        issuePages: {
          include: {
            page: {
              select: {
                url: true,
              },
            },
          },
        },
        issueClusters: {
          include: {
            cluster: {
              include: {
                clusterPages: {
                  include: {
                    page: {
                      select: {
                        url: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!issue || issue.scanId !== scanId) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
    }

    // Collect affected URLs
    const urls: string[] = []

    // If page-level, use issuePages
    if (issue.issuePages.length > 0) {
      urls.push(...issue.issuePages.map((ip) => ip.page.url))
    }
    // If cluster-level, use cluster pages
    else if (issue.issueClusters.length > 0) {
      for (const ic of issue.issueClusters) {
        urls.push(...ic.cluster.clusterPages.map((cp) => cp.page.url))
      }
    }
    // If site-level, get all pages
    else {
      const pages = await prisma.page.findMany({
        where: { scanId },
        select: { url: true },
      })
      urls.push(...pages.map((p) => p.url))
    }

    // Remove duplicates
    const uniqueUrls = Array.from(new Set(urls))

    // Generate CSV
    const csv = ['URL', ...uniqueUrls.map((url) => `"${url}"`)].join('\n')

    // Return CSV response
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="issue-${issue.issueCode}-urls.csv"`,
      },
    })
  } catch (error) {
    console.error('Error exporting CSV:', error)
    return NextResponse.json(
      {
        error: 'Failed to export CSV',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

