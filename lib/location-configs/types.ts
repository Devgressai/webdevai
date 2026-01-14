/**
 * Type definitions for location landing page configurations
 */

import { LucideIcon } from 'lucide-react'

export interface LocationHero {
  badge: string
  headline: string
  highlightText: string
  subheadline: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export interface LocationStats {
  value: string
  label: string
}

export interface LocationService {
  name: string
  description: string
  features: string[]
  href: string
}

export interface LocationTestimonial {
  name: string
  role: string
  company: string
  content: string
  rating: 5
  results: string[]
}

export interface LocationFAQ {
  question: string
  answer: string
}

export interface LocationArea {
  name: string
  description?: string
}

export interface LocationMetadata {
  city: string
  state: string
  stateCode: string
  fullName: string
  slug: string
  population?: string
  timezone?: string
}

export interface LocationPageConfig {
  metadata: LocationMetadata
  hero: LocationHero
  stats: LocationStats[]
  services: LocationService[]
  testimonials: LocationTestimonial[]
  faqs: LocationFAQ[]
  areasServed: LocationArea[]
  whyChooseUs: {
    title: string
    description: string
    features: {
      title: string
      description: string
      icon: string // Icon name from lucide-react
    }[]
  }
  finalCTA: {
    title: string
    description: string
    primaryCTA: {
      text: string
      href: string
    }
    secondaryCTA: {
      text: string
      href: string
    }
  }
}

