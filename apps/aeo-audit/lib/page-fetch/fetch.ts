/**
 * Page fetching utilities with redirect tracking
 */

import { PageFetchConfig, shouldRetry, calculateBackoff } from './config'

export interface RedirectStep {
  url: string
  statusCode: number
  location?: string
  headers: Record<string, string>
}

export interface FetchResult {
  success: boolean
  statusCode: number
  finalUrl: string
  contentType: string | null
  contentLength: number
  html: string | null
  redirectChain: RedirectStep[]
  headers: Record<string, string>
  timing: {
    startTime: number
    endTime: number
    duration: number
  }
  error?: string
}

/**
 * Fetch page with redirect chain tracking
 */
export async function fetchPageWithRedirects(
  url: string,
  config: PageFetchConfig,
  attempt: number = 1
): Promise<FetchResult> {
  const startTime = Date.now()
  const redirectChain: RedirectStep[] = []
  let currentUrl = url
  let redirectCount = 0

  try {
    while (redirectCount < config.maxRedirects) {
      const response = await fetch(currentUrl, {
        method: 'GET',
        headers: {
          'User-Agent': config.userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        redirect: 'manual', // Handle redirects manually to track chain
        signal: AbortSignal.timeout(config.timeout),
      })

      const statusCode = response.status
      const headers: Record<string, string> = {}
      
      // Extract headers
      response.headers.forEach((value, key) => {
        headers[key.toLowerCase()] = value
      })

      // Record redirect step
      const redirectStep: RedirectStep = {
        url: currentUrl,
        statusCode,
        headers,
      }

      // Check for redirect (3xx status codes)
      if (statusCode >= 300 && statusCode < 400 && headers.location) {
        redirectStep.location = headers.location
        redirectChain.push(redirectStep)

        // Resolve relative redirect URL
        try {
          const redirectUrl = new URL(headers.location, currentUrl).href
          currentUrl = redirectUrl
          redirectCount++
          continue
        } catch {
          // Invalid redirect URL, stop
          break
        }
      }

      // Final response (not a redirect)
      redirectChain.push(redirectStep)

      // Get content
      const contentType = headers['content-type'] || null
      const contentLength = parseInt(headers['content-length'] || '0', 10)
      
      let html: string | null = null
      if (statusCode >= 200 && statusCode < 300) {
        try {
          html = await response.text()
        } catch (error) {
          // Failed to read body, but we have the response
          html = null
        }
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      // Check if we should retry
      if (shouldRetry(statusCode) && attempt < config.retryAttempts) {
        const backoffDelay = calculateBackoff(attempt, config.retryBackoffBase)
        await new Promise((resolve) => setTimeout(resolve, backoffDelay))
        return fetchPageWithRedirects(url, config, attempt + 1)
      }

      return {
        success: statusCode >= 200 && statusCode < 400,
        statusCode,
        finalUrl: currentUrl,
        contentType,
        contentLength: html ? html.length : contentLength,
        html,
        redirectChain,
        headers,
        timing: {
          startTime,
          endTime,
          duration,
        },
      }
    }

    // Too many redirects
    const endTime = Date.now()
    return {
      success: false,
      statusCode: 310, // Custom code for too many redirects
      finalUrl: currentUrl,
      contentType: null,
      contentLength: 0,
      html: null,
      redirectChain,
      headers: {},
      timing: {
        startTime,
        endTime,
        duration: endTime - startTime,
      },
      error: `Exceeded maximum redirects (${config.maxRedirects})`,
    }
  } catch (error) {
    const endTime = Date.now()
    return {
      success: false,
      statusCode: 0,
      finalUrl: currentUrl,
      contentType: null,
      contentLength: 0,
      html: null,
      redirectChain,
      headers: {},
      timing: {
        startTime,
        endTime,
        duration: endTime - startTime,
      },
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

