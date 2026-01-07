'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMobileDetection, MobileCard, TouchButton } from '@/components/ui/mobile-optimizations'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: string
  features?: string[]
  price?: string
  popular?: boolean
  className?: string
}

export default function MobileServiceCard({
  title,
  description,
  href,
  icon,
  features = [],
  price,
  popular = false,
  className = ''
}: ServiceCardProps) {
  const { isMobile, isTablet } = useMobileDetection()

  return (
    <MobileCard 
      interactive 
      className={`relative ${popular ? 'ring-2 ring-blue-500 bg-blue-50' : ''} ${className}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className="text-blue-600"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-900">What's Included:</h4>
            <ul className="space-y-1">
              {features.slice(0, isMobile ? 3 : 4).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > (isMobile ? 3 : 4) && (
                <li className="text-sm text-gray-500">
                  +{features.length - (isMobile ? 3 : 4)} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Price */}
        {price && (
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">{price}</span>
              <span className="text-sm text-gray-500">starting</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-4">
          <TouchButton
            variant={popular ? 'primary' : 'outline'}
            size="md"
            fullWidth
            className="group"
          >
            <Link href={href} className="w-full flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </TouchButton>
        </div>
      </div>
    </MobileCard>
  )
}

// Mobile-optimized service grid
interface ServiceGridProps {
  services: ServiceCardProps[]
  title?: string
  description?: string
  className?: string
}

export function MobileServiceGrid({ 
  services, 
  title, 
  description, 
  className = '' 
}: ServiceGridProps) {
  const { isMobile, isTablet } = useMobileDetection()

  return (
    <div className={`space-y-8 ${className}`}>
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={`
        grid gap-6
        ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}
      `}>
        {services.map((service, index) => (
          <MobileServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  )
}

// Mobile-optimized testimonial card
interface TestimonialCardProps {
  name: string
  company: string
  content: string
  rating: number
  avatar?: string
  className?: string
}

export function MobileTestimonialCard({
  name,
  company,
  content,
  rating,
  avatar,
  className = ''
}: TestimonialCardProps) {
  const { isMobile } = useMobileDetection()

  return (
    <MobileCard className={`${className}`}>
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 leading-relaxed">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-3">
          {avatar && (
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{company}</div>
          </div>
        </div>
      </div>
    </MobileCard>
  )
}
