'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics-track-event'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'

interface TrackedButtonLinkProps extends ComponentProps<typeof Button> {
  href: string
  eventName: string
  ctaLocation: 'hero' | 'sticky' | 'process' | 'results' | 'pricing' | 'final'
  children: React.ReactNode
  showArrow?: boolean
}

export function TrackedButtonLink({
  href,
  eventName,
  ctaLocation,
  children,
  showArrow = false,
  ...buttonProps
}: TrackedButtonLinkProps) {
  const handleClick = () => {
    // Track event with metadata for qualified intent measurement
    trackEvent(eventName, {
      page: 'geo-service',
      cta_location: ctaLocation,
      cta_label: typeof children === 'string' ? children : 'Get Free GEO Audit',
    })
  }

  return (
    <Button {...buttonProps} asChild>
      <Link href={href} onClick={handleClick}>
        {children}
        {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
      </Link>
    </Button>
  )
}

