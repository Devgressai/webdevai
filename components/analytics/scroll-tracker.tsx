loo'use client'

import { useEffect, useRef } from 'react'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface ScrollTrackerProps {
  onScrollDepth?: (depth: number) => void
  onTimeOnPage?: (time: number) => void
}

export default function ScrollTracker({ onScrollDepth, onTimeOnPage }: ScrollTrackerProps) {
  const { trackUserBehavior } = useConversionTracking()
  const startTime = useRef<number>(Date.now())
  const lastScrollDepth = useRef<number>(0)
  const scrollTimer = useRef<NodeJS.Timeout>()
  const timeTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      const scrollDepth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)
      
      if (scrollDepth !== lastScrollDepth.current) {
        lastScrollDepth.current = scrollDepth
        
        // Track scroll depth
        trackUserBehavior({ scrollDepth })
        
        // Call callback if provided
        if (onScrollDepth) {
          onScrollDepth(scrollDepth)
        }

        // Clear existing timer and set new one to avoid excessive tracking
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current)
        }
        
        scrollTimer.current = setTimeout(() => {
          // Track final scroll position after user stops scrolling
          trackUserBehavior({ scrollDepth })
        }, 1000)
      }
    }

    const handleTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000)
      
      // Track time on page every 30 seconds
      if (timeOnPage % 30 === 0) {
        trackUserBehavior({ timeOnPage })
        
        // Call callback if provided
        if (onTimeOnPage) {
          onTimeOnPage(timeOnPage)
        }
      }
    }

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Set up time tracking (check every 30 seconds)
    timeTimer.current = setInterval(handleTimeOnPage, 30000)

    // Initial scroll depth check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }
      if (timeTimer.current) {
        clearInterval(timeTimer.current)
      }
    }
  }, [trackUserBehavior, onScrollDepth, onTimeOnPage])

  // Track time on page when component unmounts
  useEffect(() => {
    const mountedAt = startTime.current

    return () => {
      const timeOnPage = Math.round((Date.now() - mountedAt) / 1000)
      trackUserBehavior({ timeOnPage })
      
      if (onTimeOnPage) {
        onTimeOnPage(timeOnPage)
      }
    }
  }, [trackUserBehavior, onTimeOnPage])

  return null // This component doesn’t render anything
}
