/**
 * Cluster Build Worker Implementation
 * Groups pages into clusters based on URL signature, DOM fingerprint, and profile bands
 */

import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'
import { ClusterBuildPayload } from '../queues/types'
import { getConfig } from './config'
import { normalizeUrlSignature, extractUrlPattern } from './url-signature'
import { computeDomFingerprint } from './dom-fingerprint'
import { computeProfileBands, detectFaqSection } from './profile-bands'
import { computePredicates } from './predicates'
import {
  selectRepresentativeUrls,
  getPageIdFromUrl,
} from './representative-urls'

const prisma = new PrismaClient()

export interface ClusterBuildResult {
  success: boolean
  clustersCreated: number
  clusters: Array<{
    clusterId: string
    name: string
    pageCount: number
  }>
  error?: string
}

/**
 * Main cluster build function
 */
export async function buildClusters(
  payload: ClusterBuildPayload
): Promise<ClusterBuildResult> {
  const { scanId, pageIds } = payload
  const config = getConfig()

  try {
    // Get pages to cluster
    const pages = pageIds
      ? await prisma.page.findMany({
          where: {
            id: { in: pageIds },
            scanId,
          },
        })
      : await prisma.page.findMany({
          where: { scanId },
        })

    if (pages.length === 0) {
      return {
        success: true,
        clustersCreated: 0,
        clusters: [],
      }
    }

    // Group pages by cluster
    const clusterMap = new Map<
      string,
      {
        pages: typeof pages
        urlSignature: string
        domFingerprint: string
        profileKey: string
        predicates: ReturnType<typeof computePredicates>
      }
    >()

    for (const page of pages) {
      const metadata = (page.metadata as Record<string, unknown>) || {}

      // Compute URL signature
      const urlSignature = normalizeUrlSignature(page.url)

      // Compute DOM fingerprint
      const domFingerprint = computeDomFingerprint({
        headings: metadata.headings as
          | { h1?: string[]; h2?: string[]; h3?: string[] }
          | undefined,
        jsonLdTypes: metadata.jsonLdTypes as string[] | undefined,
      })

      // Compute profile bands
      const profileBands = computeProfileBands(
        {
          wordCount: metadata.wordCount as number | undefined,
          headings: metadata.headings as
            | { h1?: string[]; h2?: string[]; h3?: string[] }
            | undefined,
          hasFaqSection: detectFaqSection({
            jsonLdTypes: metadata.jsonLdTypes as string[] | undefined,
            headings: metadata.headings as
              | { h1?: string[]; h2?: string[]; h3?: string[] }
              | undefined,
          }),
        },
        config
      )

      // Compute predicates
      const predicates = computePredicates(page.url, {
        jsonLdTypes: metadata.jsonLdTypes as string[] | undefined,
        headings: metadata.headings as
          | { h1?: string[]; h2?: string[]; h3?: string[] }
          | undefined,
        canonical: metadata.canonical as string | undefined,
      })

      // Generate cluster ID
      const clusterKey = `${urlSignature}|${domFingerprint.fingerprint}|${profileBands.profileKey}`
      const clusterId = createHash('sha256').update(clusterKey).digest('hex')

      // Add to cluster map
      if (!clusterMap.has(clusterId)) {
        clusterMap.set(clusterId, {
          pages: [],
          urlSignature,
          domFingerprint: domFingerprint.fingerprint,
          profileKey: profileBands.profileKey,
          predicates,
        })
      }

      clusterMap.get(clusterId)!.pages.push(page)
    }

    // Create clusters and cluster-page mappings
    const createdClusters: Array<{
      clusterId: string
      name: string
      pageCount: number
    }> = []

    for (const [clusterId, clusterData] of clusterMap.entries()) {
      // Generate cluster name
      const name = generateClusterName(
        clusterData.urlSignature,
        clusterData.predicates
      )

      // Check if cluster exists
      const existingCluster = await prisma.cluster.findUnique({
        where: {
          scanId_clusterId: {
            scanId,
            clusterId,
          },
        },
      })

      // Create or update cluster
      const cluster = existingCluster
        ? await prisma.cluster.update({
            where: { id: existingCluster.id },
            data: {
              name,
              metadata: {
                urlSignature: clusterData.urlSignature,
                domFingerprint: clusterData.domFingerprint,
                profileKey: clusterData.profileKey,
                predicates: clusterData.predicates,
              },
            },
          })
        : await prisma.cluster.create({
            data: {
              scanId,
              name,
              type: 'template',
              clusterId,
              metadata: {
                urlSignature: clusterData.urlSignature,
                domFingerprint: clusterData.domFingerprint,
                profileKey: clusterData.profileKey,
                predicates: clusterData.predicates,
                profileBands: {
                  wordCountBand: computeProfileBands(
                    {
                      wordCount: (
                        (clusterData.pages[0]?.metadata as Record<string, unknown>) || {}
                      ).wordCount as number | undefined,
                    },
                    config
                  ).wordCountBand,
                  headingCountBand: computeProfileBands(
                    {
                      headings: (
                        (clusterData.pages[0]?.metadata as Record<string, unknown>) || {}
                      ).headings as
                        | { h1?: string[]; h2?: string[]; h3?: string[] }
                        | undefined,
                    },
                    config
                  ).headingCountBand,
                },
              },
            },
          })

      // Select representative URLs
      const representativeUrls = await selectRepresentativeUrls(
        clusterData.pages.map((p) => p.id),
        scanId
      )

      // Create cluster-page mappings
      for (const page of clusterData.pages) {
        const urlSignature = normalizeUrlSignature(page.url)

        // Determine representative type
        let representativeType: 'best' | 'typical' | 'worst' | null = null
        if (representativeUrls.best === page.url) {
          representativeType = 'best'
        } else if (representativeUrls.typical === page.url) {
          representativeType = 'typical'
        } else if (representativeUrls.worst === page.url) {
          representativeType = 'worst'
        }

        await prisma.clusterPageMap.upsert({
          where: {
            clusterId_pageId: {
              clusterId: cluster.id,
              pageId: page.id,
            },
          },
          create: {
            clusterId: cluster.id,
            pageId: page.id,
            urlSignature,
            representativeType,
          },
          update: {
            urlSignature,
            representativeType,
          },
        })
      }

      createdClusters.push({
        clusterId: cluster.clusterId || cluster.id,
        name,
        pageCount: clusterData.pages.length,
      })
    }

    // Enqueue check_runner after clustering is complete
    const { addJob, generateIdempotencyKey } = await import('../queues')
    const { QUEUE_NAMES } = await import('../queues/types')
    
    const checkPayload = {
      scanId,
      pageId: null, // Run checks for entire scan
      checkTypes: null, // Run all checks
    }
    
    const idempotencyKey = generateIdempotencyKey(scanId, 'check_runner')
    await addJob(QUEUE_NAMES.CHECK_RUNNER, checkPayload, {
      idempotencyKey,
      priority: 5,
    })

    return {
      success: true,
      clustersCreated: createdClusters.length,
      clusters: createdClusters,
    }
  } catch (error) {
    return {
      success: false,
      clustersCreated: 0,
      clusters: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Generate cluster name from URL signature and predicates
 */
function generateClusterName(
  urlSignature: string,
  predicates: ReturnType<typeof computePredicates>
): string {
  if (predicates.isHomepage) {
    return 'Homepage'
  }
  if (predicates.isServiceTemplate) {
    return 'Service Template'
  }
  if (predicates.isLocationTemplate) {
    return 'Location Template'
  }
  if (predicates.isBlogTemplate) {
    return 'Blog Template'
  }
  if (predicates.isPolicyTemplate) {
    return 'Policy Template'
  }

  // Fallback to URL pattern
  const pattern = extractUrlPattern(urlSignature)
  return `Template: ${pattern.pattern}`
}

