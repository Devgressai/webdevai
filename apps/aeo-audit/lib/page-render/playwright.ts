/**
 * Playwright-based page rendering
 * Renders pages with timeout and asset blocking
 */

import { chromium, Browser, Page } from 'playwright'

/**
 * Render configuration
 */
export interface RenderConfig {
  timeout: number // Maximum render time in milliseconds (default: 15000)
  blockAssets: boolean // Block heavy assets (default: true)
  waitForSelector?: string // Optional selector to wait for
  waitForTimeout?: number // Optional timeout to wait after load
}

const DEFAULT_CONFIG: RenderConfig = {
  timeout: 15000, // 15 seconds
  blockAssets: true,
}

/**
 * Render result
 */
export interface RenderResult {
  success: boolean
  html: string | null
  duration: number
  error?: string
  metadata?: {
    title?: string
    url?: string
    viewport?: { width: number; height: number }
  }
}

let browser: Browser | null = null

/**
 * Get or create browser instance
 */
async function getBrowser(): Promise<Browser> {
  if (!browser) {
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    })
  }
  return browser
}

/**
 * Render page with Playwright
 */
export async function renderPage(
  url: string,
  config: RenderConfig = DEFAULT_CONFIG
): Promise<RenderResult> {
  const startTime = Date.now()
  let page: Page | null = null

  try {
    const browserInstance = await getBrowser()
    page = await browserInstance.newPage()

    // Block heavy assets if configured
    if (config.blockAssets) {
      await page.route('**/*', (route) => {
        const resourceType = route.request().resourceType()
        const url = route.request().url()

        // Block videos
        if (resourceType === 'media' || url.match(/\.(mp4|webm|avi|mov)$/i)) {
          route.abort()
          return
        }

        // Block large images (over 1MB)
        if (resourceType === 'image') {
          // We'll allow images but could add size checking here
          route.continue()
          return
        }

        // Block fonts (optional, can slow down rendering)
        if (resourceType === 'font') {
          route.continue()
          return
        }

        // Allow everything else
        route.continue()
      })
    }

    // Set viewport
    await page.setViewportSize({ width: 1920, height: 1080 })

    // Navigate with timeout
    const navigationPromise = page.goto(url, {
      waitUntil: 'networkidle',
      timeout: config.timeout,
    })

    // Wait for optional selector if provided
    if (config.waitForSelector) {
      await Promise.race([
        navigationPromise,
        page.waitForSelector(config.waitForSelector, { timeout: config.timeout }),
      ])
    } else {
      await navigationPromise
    }

    // Optional wait after load
    if (config.waitForTimeout) {
      await page.waitForTimeout(config.waitForTimeout)
    }

    // Extract HTML
    const html = await page.content()

    // Extract metadata
    const title = await page.title()
    const finalUrl = page.url()

    const duration = Date.now() - startTime

    return {
      success: true,
      html,
      duration,
      metadata: {
        title,
        url: finalUrl,
        viewport: { width: 1920, height: 1080 },
      },
    }
  } catch (error) {
    const duration = Date.now() - startTime

    return {
      success: false,
      html: null,
      duration,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  } finally {
    if (page) {
      await page.close()
    }
  }
}

/**
 * Close browser (cleanup)
 */
export async function closeBrowser(): Promise<void> {
  if (browser) {
    await browser.close()
    browser = null
  }
}

/**
 * Check if Playwright is available
 */
export function isPlaywrightAvailable(): boolean {
  try {
    // Check if playwright is installed
    require.resolve('playwright')
    return true
  } catch {
    return false
  }
}

