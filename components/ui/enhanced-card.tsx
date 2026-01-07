"use client"

import { forwardRef, useState } from 'react'
import { ArrowUpRight, ExternalLink, Star, Heart, Share2 } from 'lucide-react'

export interface EnhancedCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient' | 'glass'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  hover?: boolean
  interactive?: boolean
  featured?: boolean
  clickable?: boolean
  children: React.ReactNode
}

const EnhancedCard = forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default',
    hover = true,
    interactive = false,
    featured = false,
    clickable = false,
    children, 
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const baseClasses = `relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
      // Size variants
      size === 'sm' ? 'p-4' :
      size === 'default' ? 'p-6' :
      size === 'lg' ? 'p-8' :
      size === 'xl' ? 'p-10' : 'p-6'
    } ${
      // Variant styles
      variant === 'default' ? 'bg-white border border-gray-200 shadow-soft' :
      variant === 'elevated' ? 'bg-white shadow-medium hover:shadow-large' :
      variant === 'outlined' ? 'bg-white border-2 border-gray-200' :
      variant === 'gradient' ? 'bg-gradient-primary text-white' :
      variant === 'glass' ? 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft' : ''
    } ${
      // Interactive states
      clickable ? 'cursor-pointer' : ''
    } ${
      hover && !interactive ? 'hover:-translate-y-1' : ''
    } ${
      hover && interactive ? 'hover:-translate-y-2 hover:shadow-large' : ''
    } ${
      // Featured styling
      featured ? 'ring-2 ring-primary-500/20' : ''
    } ${className || ''}`

    const handleCardClick = () => {
      if (clickable) {
        console.log('Card clicked')
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (clickable && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        handleCardClick()
      }
    }

    const Component = clickable ? 'button' : 'div'
    const clickableProps = clickable ? {
      onClick: handleCardClick,
      onKeyDown: handleKeyDown,
      type: 'button' as const,
      'aria-label': props['aria-label'] || 'Card action'
    } : {}

    return (
      <Component
        ref={ref}
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...clickableProps}
        {...props}
      >
        {/* Background pattern for glass variant */}
        {variant === 'glass' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
        )}
        
        {/* Hover overlay */}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
        
        {/* Interactive elements */}
        {interactive && (
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsLiked(!isLiked)
              }}
              aria-label={isLiked ? 'Unlike' : 'Like'}
              className={`p-2 rounded-full transition-all duration-200 hover:bg-white/20 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
                isLiked ? 'text-red-500' : 'text-white/70'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              aria-label="Share"
              className="p-2 rounded-full text-white/70 hover:bg-white/20 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        )}
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-1 px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Hover arrow for clickable cards */}
        {clickable && isHovered && (
          <div className="absolute bottom-4 right-4 transition-all duration-300">
            <ArrowUpRight className="h-5 w-5 text-primary-600" />
          </div>
        )}
      </div>
    )
  }
)

EnhancedCard.displayName = 'EnhancedCard'

export { EnhancedCard }
