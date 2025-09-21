'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Performance monitoring component
export function PerformanceMonitor() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging (replace with analytics in production)
        console.log('Performance metric:', {
          name: entry.name,
          startTime: entry.startTime,
          duration: entry.duration,
        })

        // Send to analytics service (Google Analytics, etc.)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: entry.name,
            value: Math.round(entry.duration),
            non_interaction: true,
          })
        }
      }
    })

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart,
        }

        console.log('Page load metrics:', metrics)

        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_load_metrics', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(metrics.domContentLoaded),
            non_interaction: true,
          })
        }
      }
    })

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) { // Log slow resources (>1s)
          console.log('Slow resource:', {
            name: entry.name,
            duration: entry.duration,
            size: (entry as any).transferSize || 0,
          })
        }
      }
    })

    resourceObserver.observe({ entryTypes: ['resource'] })

    // Cleanup
    return () => {
      observer.disconnect()
      resourceObserver.disconnect()
    }
  }, [pathname])

  return null // This component doesn’t render anything visible
}

// Performance budget monitoring
export function PerformanceBudget() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    // Check bundle size
    const checkBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]')
      let totalSize = 0

      scripts.forEach(script => {
        const src = script.getAttribute('src')
        if (src && src.includes('_next/static')) {
          // Estimate size based on script loading time
          const startTime = performance.now()
          script.addEventListener('load', () => {
            const loadTime = performance.now() - startTime
            // Rough estimation: 1ms = ~1KB
            totalSize += loadTime
          })
        }
      })

      // Alert if bundle is too large
      if (totalSize > 500000) { // 500KB threshold
        console.warn('Bundle size exceeds performance budget:', totalSize)
      }
    }

    // Check after page load
    window.addEventListener('load', checkBundleSize)

    return () => {
      window.removeEventListener('load', checkBundleSize)
    }
  }, [])

  return null
}

// Lazy loading helper
export function useLazyLoad() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            element.classList.add('loaded')
            observer.unobserve(element)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    )

    // Observe all elements with lazy-load class
    const lazyElements = document.querySelectorAll('.lazy-load')
    lazyElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
