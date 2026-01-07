"use client"

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { EnhancedButton } from '../ui/enhanced-button'
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface EnhancedHeroProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
    variant?: 'default' | 'gradient' | 'glow'
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  features?: string[]
  stats?: Array<{
    value: string
    label: string
    iconName: string
  }>
  video?: {
    url: string
    thumbnail: string
  }
  background?: 'gradient' | 'image' | 'pattern'
  backgroundImage?: string
}

export function EnhancedHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  features = [],
  stats = [],
  video,
  background = 'gradient',
  backgroundImage
}: EnhancedHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderBackground = () => {
    switch (background) {
      case 'image':
        return (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )
      case 'pattern':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50/30" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234C74B9%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          </div>
        )
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {renderBackground()}
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl animate-bounce-gentle" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtitle */}
          {subtitle && (
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
                {subtitle}
              </span>
            </div>
          )}

          {/* Main title */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up`} style={{ animationDelay: '0.4s' }}>
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up`} style={{ animationDelay: '0.6s' }}>
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className={`flex flex-wrap justify-center gap-4 mb-8 animate-slide-up`} style={{ animationDelay: '0.8s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-100">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up`} style={{ animationDelay: '1s' }}>
            <EnhancedButton
              size="xl"
              gradient={primaryCTA.variant === 'gradient'}
              glow={primaryCTA.variant === 'glow'}
              className="group"
            >
              <Link href={primaryCTA.href} className="flex items-center">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </EnhancedButton>
            
            {secondaryCTA && (
              <EnhancedButton
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                <Link href={secondaryCTA.href} className="flex items-center">
                  {secondaryCTA.text}
                </Link>
              </EnhancedButton>
            )}
          </div>

          {/* Video or stats */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Video section */}
            {video && (
              <div className={`animate-slide-up`} style={{ animationDelay: '1.2s' }}>
                <div className="relative group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={video.thumbnail}
                      alt={video.title || "Video thumbnail - click to play"}
                      width={320}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Play className="h-8 w-8 text-primary-600 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stats section */}
            {stats.length > 0 && (
              <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 animate-slide-up`} style={{ animationDelay: '1.4s' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="h-6 w-6 text-white flex items-center justify-center">
                          {stat.iconName === 'TrendingUp' && <TrendingUp className="h-6 w-6 text-white" />}
                          {stat.iconName === 'Users' && <Users className="h-6 w-6 text-white" />}
                          {stat.iconName === 'Award' && <Award className="h-6 w-6 text-white" />}
                          {stat.iconName === 'BarChart3' && <BarChart3 className="h-6 w-6 text-white" />}
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
