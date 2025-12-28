'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector('footer')
      if (!footer) return

      // Check if footer is in viewport
      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Hide CTA when footer is fully visible (start of footer reaches bottom of screen)
      const footerFullyVisible = footerRect.top <= windowHeight
      setIsFooterVisible(footerFullyVisible)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render on desktop (md and above)
  // Hide when footer is visible
  if (isFooterVisible) return null

  return (
    <div 
      className="
        md:hidden
        fixed bottom-0 left-0 right-0 z-40
        bg-white/95 backdrop-blur-md
        border-t-2 border-primary-200
        shadow-[0_-4px_20px_rgba(0,0,0,0.15)]
        transition-transform duration-300
      "
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 12px)'
      }}
    >
      <div className="px-4 py-3">
        <Button 
          size="lg"
          className="
            w-full 
            min-h-[52px]
            bg-gradient-to-r from-primary-600 to-primary-700 
            hover:from-primary-700 hover:to-primary-800
            text-white text-base font-bold
            shadow-lg
            active:scale-[0.98]
            transition-all duration-200
          "
          asChild
        >
          <Link href="/contact">
            <span className="flex items-center justify-center whitespace-nowrap">
              Get Free Growth Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

