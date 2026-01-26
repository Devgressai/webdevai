'use client'

import { useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Axe-core React integration for development-only accessibility testing
 * 
 * This component:
 * - Only runs in development mode
 * - Only runs client-side (never SSR)
 * - Does not affect production bundle
 * - Automatically checks accessibility violations and logs to console
 * 
 * Usage: Import conditionally in app/layout.tsx:
 * {process.env.NODE_ENV === 'development' && <AxeClient />}
 */
export function AxeClient() {
  useEffect(() => {
    // Only run in development and client-side
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
      // Dynamically import @axe-core/react only in development
      // This ensures it's never included in production bundle
      import('@axe-core/react')
        .then((axe) => {
          // Initialize axe with React and ReactDOM
          // This will run accessibility checks and log violations to console
          // Delay of 1000ms ensures DOM is ready
          axe.default(React, ReactDOM, 1000, {
            // Configuration options
            rules: {
              // Enable all rules
            },
            // Only show violations, not passes
            tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
          })
        })
        .catch((error) => {
          // Silently fail if axe-core cannot be loaded
          // This prevents build/runtime errors
          if (process.env.NODE_ENV !== 'production') {
            console.warn('Failed to load @axe-core/react:', error)
          }
        })
    }
  }, [])

  // This component renders nothing
  return null
}

