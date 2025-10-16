'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar?: string
  verified: boolean
  date: string
}

interface Review {
  id: string
  platform: 'google' | 'facebook' | 'yelp' | 'trustpilot' | 'clutch'
  rating: number
  reviewCount: number
  url: string
  verified: boolean
}

interface TrustBadge {
  id: string
  name: string
  description: string
  icon: string
  verified: boolean
  url?: string
}

interface ClientLogo {
  id: string
  name: string
  logo: string
  website: string
  industry: string
}

// Testimonials Component
export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading testimonials
    const mockTestimonials: Testimonial[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        role: 'Marketing Director',
        content: 'Web Vello transformed our online presence. Our organic traffic increased by 300% in just 6 months. Their SEO strategies are simply outstanding.',
        rating: 5,
        verified: true,
        date: '2024-01-15'
      },
      {
        id: '2',
        name: 'Michael Chen',
        company: 'E-commerce Solutions',
        role: 'CEO',
        content: 'The team at Web Vello is incredibly professional and knowledgeable. They helped us achieve our first page ranking for our main keywords.',
        rating: 5,
        verified: true,
        date: '2024-01-10'
      },
      {
        id: '3',
        name: 'Emily Rodriguez',
        company: 'Local Business Co.',
        role: 'Owner',
        content: 'Our local SEO results have been phenomenal. We\'re now ranking #1 for all our target keywords in our city. Highly recommended!',
        rating: 5,
        verified: true,
        date: '2024-01-08'
      },
      {
        id: '4',
        name: 'David Thompson',
        company: 'Healthcare Plus',
        role: 'Marketing Manager',
        content: 'Web Vello\'s technical SEO expertise helped us fix critical issues that were hurting our rankings. Great results!',
        rating: 5,
        verified: true,
        date: '2024-01-05'
      },
      {
        id: '5',
        name: 'Lisa Wang',
        company: 'Fashion Forward',
        role: 'E-commerce Manager',
        content: 'The content marketing strategies they implemented have been game-changing. Our conversion rates have improved significantly.',
        rating: 5,
        verified: true,
        date: '2024-01-03'
      }
    ]

    setTimeout(() => {
      setTestimonials(mockTestimonials)
      setIsLoading(false)
    }, 1000)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600">Real results from real businesses</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Testimonial Content */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "{currentTestimonial.content}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-left">
                <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                <p className="text-gray-600">{currentTestimonial.role}, {currentTestimonial.company}</p>
                {currentTestimonial.verified && (
                  <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-green-600 font-medium">Verified Client</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Reviews Summary Component
export function ReviewsSummary() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const mockReviews: Review[] = [
      {
        id: '1',
        platform: 'google',
        rating: 4.9,
        reviewCount: 127,
        url: 'https://google.com/reviews',
        verified: true
      },
      {
        id: '2',
        platform: 'facebook',
        rating: 4.8,
        reviewCount: 89,
        url: 'https://facebook.com/reviews',
        verified: true
      },
      {
        id: '3',
        platform: 'clutch',
        rating: 5.0,
        reviewCount: 23,
        url: 'https://clutch.co/reviews',
        verified: true
      }
    ]
    setReviews(mockReviews)
  }, [])

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'google':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        )
      case 'facebook':
        return (
          <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'clutch':
        return (
          <svg className="w-6 h-6" fill="#E31E24" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        )
      default:
        return <div className="w-6 h-6 bg-gray-400 rounded"></div>
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-3">
              {getPlatformIcon(review.platform)}
              <span className="ml-2 font-medium text-gray-900 capitalize">{review.platform}</span>
              {review.verified && (
                <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">{review.rating}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{review.reviewCount} reviews</p>
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Read Reviews →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// Trust Badges Component
export function TrustBadges() {
  const [badges, setBadges] = useState<TrustBadge[]>([])

  useEffect(() => {
    const mockBadges: TrustBadge[] = [
      {
        id: '1',
        name: 'Google Partner',
        description: 'Certified Google Partner',
        icon: 'google-partner',
        verified: true,
        url: 'https://partners.google.com'
      },
      {
        id: '2',
        name: 'BBB A+ Rating',
        description: 'Better Business Bureau A+ Rating',
        icon: 'bbb',
        verified: true,
        url: 'https://bbb.org'
      },
      {
        id: '3',
        name: 'SSL Secured',
        description: '256-bit SSL Encryption',
        icon: 'ssl',
        verified: true
      },
      {
        id: '4',
        name: 'GDPR Compliant',
        description: 'GDPR Privacy Compliant',
        icon: 'gdpr',
        verified: true
      },
      {
        id: '5',
        name: '24/7 Support',
        description: 'Round-the-clock support',
        icon: 'support',
        verified: true
      },
      {
        id: '6',
        name: 'Money Back Guarantee',
        description: '30-day money back guarantee',
        icon: 'guarantee',
        verified: true
      }
    ]
    setBadges(mockBadges)
  }, [])

  const getBadgeIcon = (icon: string) => {
    switch (icon) {
      case 'google-partner':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          </svg>
        )
      case 'bbb':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        )
      case 'ssl':
        return (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case 'gdpr':
        return (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 'support':
        return (
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
          </svg>
        )
      case 'guarantee':
        return (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return <div className="w-8 h-8 bg-gray-400 rounded"></div>
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Trusted & Verified</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`text-center p-4 rounded-lg border-2 transition-all duration-200 ${
              badge.verified
                ? 'border-green-200 bg-green-50 hover:border-green-300'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex justify-center mb-2">
              {getBadgeIcon(badge.icon)}
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">{badge.name}</h4>
            <p className="text-xs text-gray-600">{badge.description}</p>
            {badge.verified && (
              <div className="flex items-center justify-center mt-2">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-green-600 font-medium">Verified</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Client Logos Component
export function ClientLogos() {
  const [logos, setLogos] = useState<ClientLogo[]>([])

  useEffect(() => {
    const mockLogos: ClientLogo[] = [
      {
        id: '1',
        name: 'TechStart Inc.',
        logo: '/logos/techstart.svg',
        website: 'https://techstart.com',
        industry: 'Technology'
      },
      {
        id: '2',
        name: 'E-commerce Solutions',
        logo: '/logos/ecommerce.svg',
        website: 'https://ecommerce-solutions.com',
        industry: 'E-commerce'
      },
      {
        id: '3',
        name: 'Healthcare Plus',
        logo: '/logos/healthcare.svg',
        website: 'https://healthcare-plus.com',
        industry: 'Healthcare'
      },
      {
        id: '4',
        name: 'Fashion Forward',
        logo: '/logos/fashion.svg',
        website: 'https://fashion-forward.com',
        industry: 'Fashion'
      },
      {
        id: '5',
        name: 'Local Business Co.',
        logo: '/logos/local-business.svg',
        website: 'https://local-business.com',
        industry: 'Local Business'
      },
      {
        id: '6',
        name: 'Finance Pro',
        logo: '/logos/finance.svg',
        website: 'https://finance-pro.com',
        industry: 'Finance'
      }
    ]
    setLogos(mockLogos)
  }, [])

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Trusted by Leading Companies</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-medium text-gray-600">{logo.name}</span>
              </div>
              <p className="text-xs text-gray-500">{logo.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
