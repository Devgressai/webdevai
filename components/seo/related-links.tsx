/**
 * Related Links Component
 * 
 * Displays contextual internal links for SEO and user experience
 */

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface RelatedLink {
  url: string
  title: string
  description: string
  category?: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
  title?: string
  columns?: 2 | 3 | 4
  variant?: 'card' | 'list' | 'compact'
}

export function RelatedLinks({
  links,
  title = 'Related Services',
  columns = 3,
  variant = 'card'
}: RelatedLinksProps) {
  if (links.length === 0) return null
  
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  
  if (variant === 'list') {
    return (
      <div className="my-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="group flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {link.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {link.description}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  if (variant === 'compact') {
    return (
      <div className="my-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
  
  // Card variant (default)
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {link.description}
            </p>
            {link.category && (
              <span className="inline-block mt-4 text-xs font-medium text-blue-600 uppercase tracking-wide">
                {link.category}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

// Breadcrumbs Component
interface Breadcrumb {
  name: string
  url: string
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6 overflow-x-auto">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-gray-400">/</span>
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-900 font-medium whitespace-nowrap">
              {crumb.name}
            </span>
          ) : (
            <Link
              href={crumb.url}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {crumb.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

// CTA Links Component
interface CTALinksProps {
  primaryCTA?: {
    text: string
    url: string
  }
  secondaryCTA?: {
    text: string
    url: string
  }
}

export function CTALinks({ primaryCTA, secondaryCTA }: CTALinksProps) {
  return (
    <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Let's discuss how we can help grow your business with proven digital marketing strategies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCTA && (
            <Link
              href={primaryCTA.url}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.url}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              {secondaryCTA.text}
              <ExternalLink className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// Related Cities Component
interface RelatedCitiesProps {
  cities: Array<{ name: string; url: string }>
  currentCity: string
}

export function RelatedCities({ cities, currentCity }: RelatedCitiesProps) {
  if (cities.length === 0) return null
  
  return (
    <div className="my-12 bg-gray-50 p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Digital Marketing Services in Nearby Cities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cities.map((city, index) => (
          <Link
            key={index}
            href={city.url}
            className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

// Service Grid Component
interface ServiceGridProps {
  services: Array<{
    name: string
    url: string
    icon?: React.ReactNode
  }>
  title?: string
}

export function ServiceGrid({ services, title = "Our Services" }: ServiceGridProps) {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.url}
            className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300"
          >
            {service.icon && (
              <div className="mb-3 text-blue-600 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
            )}
            <span className="text-center text-sm font-medium text-gray-700 group-hover:text-blue-600">
              {service.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

