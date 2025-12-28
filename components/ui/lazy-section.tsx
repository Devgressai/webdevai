'use client'

import { useEffect, useRef, useState } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  minHeight?: string
}

export function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1,
  rootMargin = '200px 0px 400px 0px', // Mobile optimized: load earlier above, much later below
  minHeight = '200px'
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (
        <div className="animate-pulse rounded-lg bg-gray-100" style={{ minHeight }} />
      )}
    </div>
  )
}
