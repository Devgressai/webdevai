"use client"

import { forwardRef, useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { EnhancedCard } from './enhanced-card'
import Image from 'next/image'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  video?: string
}

export interface InteractiveTestimonialProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  autoPlay?: boolean
  showControls?: boolean
  showRating?: boolean
  variant?: 'default' | 'card' | 'minimal'
  size?: 'sm' | 'default' | 'lg'
}

const InteractiveTestimonial = forwardRef<HTMLDivElement, InteractiveTestimonialProps>(
  ({ 
    className, 
    testimonials = [],
    autoPlay = true,
    showControls = true,
    showRating = true,
    variant = 'default',
    size = 'default',
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [isHovered, setIsHovered] = useState(false)

    const currentTestimonial = testimonials[currentIndex]

    const nextTestimonial = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, [testimonials.length])

    const prevTestimonial = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [testimonials.length])

    const goToTestimonial = (index: number) => {
      setCurrentIndex(index)
    }

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying)
    }

    // Auto-play functionality - respect prefers-reduced-motion
    useEffect(() => {
      if (!autoPlay || !isPlaying) return
      
      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        setIsPlaying(false)
        return
      }

      const interval = setInterval(() => {
        nextTestimonial()
      }, 5000)

      return () => clearInterval(interval)
    }, [autoPlay, isPlaying, nextTestimonial])

    const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 transition-colors duration-200 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))
    }

    const renderTestimonial = () => {
      if (!currentTestimonial) return null

      const testimonialContent = (
        <div className="text-center">
          {/* Quote icon */}
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
              <Quote className="h-6 w-6 text-primary-600" />
            </div>
          </div>

          {/* Content */}
          <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
            “{currentTestimonial.content}”
          </blockquote>

          {/* Author info */}
          <div className="flex flex-col items-center">
            {currentTestimonial.avatar && (
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full mb-3 object-cover"
              />
            )}
            <div className="text-center">
              <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
              <div className="text-sm text-gray-600">
                {currentTestimonial.role} at {currentTestimonial.company}
              </div>
              {showRating && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  {renderStars(currentTestimonial.rating)}
                </div>
              )}
            </div>
          </div>
        </div>
      )

      switch (variant) {
        case 'card':
          return (
            <EnhancedCard
              variant="elevated"
              size={size}
              interactive
              className="max-w-2xl mx-auto"
            >
              {testimonialContent}
            </EnhancedCard>
          )
        case 'minimal':
          return (
            <div className="max-w-2xl mx-auto p-6">
              {testimonialContent}
            </div>
          )
        default:
          return (
            <div className="max-w-2xl mx-auto">
              {testimonialContent}
            </div>
          )
      }
    }

    if (testimonials.length === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          No testimonials available
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={`relative ${className || ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Main testimonial */}
        <div className="mb-8">
          {renderTestimonial()}
        </div>

        {/* Controls */}
        {showControls && testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-4">
            {/* Play/Pause button */}
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-gray-600" />
              ) : (
                <Play className="h-4 w-4 text-gray-600" />
              )}
            </button>

            {/* Previous/Next buttons */}
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        )}

        {/* Dots indicator */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Progress bar */}
        {autoPlay && (
          <div className="mt-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-600 transition-all duration-500 ease-out"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`
                }}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
)

InteractiveTestimonial.displayName = 'InteractiveTestimonial'

export { InteractiveTestimonial }
