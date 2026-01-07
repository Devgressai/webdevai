"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import { EnhancedButton } from '../ui/enhanced-button'
import { EnhancedCard } from '../ui/enhanced-card'
import { CheckCircle, XCircle, Star, Zap, Crown, Users, ArrowRight, Info, Award } from 'lucide-react'

interface PricingTier {
  name: string
  price: number
  period: 'monthly' | 'yearly'
  description: string
  features: string[]
  excluded?: string[]
  popular?: boolean
  iconName: string
  gradient: string
  cta: string
  href: string
}

interface EnhancedPricingProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  showToggle?: boolean
  showFeatures?: boolean
  showPopular?: boolean
}

export function EnhancedPricing({
  title,
  subtitle,
  tiers,
  showToggle = true,
  showFeatures = true,
  showPopular = true
}: EnhancedPricingProps) {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  const getDiscountedPrice = (price: number) => {
    return isYearly ? Math.round(price * 0.8) : price
  }

  const getPeriodText = () => {
    return isYearly ? 'year' : 'month'
  }

  const getSavings = (price: number) => {
    if (!isYearly) return null
    const yearlyTotal = price * 12
    const discountedTotal = getDiscountedPrice(price) * 12
    const savings = yearlyTotal - discountedTotal
    return savings
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {/* Billing toggle */}
          {showToggle && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium transition-colors duration-200 ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  isYearly ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors duration-200 ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const isPopular = showPopular && tier.popular
            const isHovered = hoveredTier === tier.name
            const savings = getSavings(tier.price)

            return (
              <div
                key={tier.name}
                className="relative group"
                onMouseEnter={() => setHoveredTier(tier.name)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Pricing card */}
                <EnhancedCard
                  variant={isPopular ? 'gradient' : 'elevated'}
                  size="lg"
                  interactive
                  featured={isPopular}
                  className={`relative h-full transition-all duration-300 ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${
                        isPopular ? 'bg-white/20' : 'bg-primary-100'
                      }`}>
                        <div className={`h-8 w-8 ${isPopular ? 'text-white' : 'text-primary-600'}`}>
                          {tier.iconName === 'Zap' && <Zap className={`h-8 w-8 ${isPopular ? 'text-white' : 'text-primary-600'}`} />}
                          {tier.iconName === 'Star' && <Star className={`h-8 w-8 ${isPopular ? 'text-white' : 'text-primary-600'}`} />}
                          {tier.iconName === 'Award' && <Award className={`h-8 w-8 ${isPopular ? 'text-white' : 'text-primary-600'}`} />}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    
                    <p className={`text-sm ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                        ${getDiscountedPrice(tier.price)}
                      </span>
                      <span className={`text-lg ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                        /{getPeriodText()}
                      </span>
                    </div>
                    
                    {savings && (
                      <div className="mt-2 text-sm text-green-600 font-medium">
                        Save ${savings}/year
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  {showFeatures && (
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                              isPopular ? 'text-green-300' : 'text-green-500'
                            }`} />
                            <span className={`text-sm ${isPopular ? 'text-blue-100' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                        
                        {tier.excluded?.map((excluded, excludedIndex) => (
                          <li key={excludedIndex} className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500" />
                            <span className="text-sm text-gray-500 line-through">
                              {excluded}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="text-center">
                    <EnhancedButton
                      size="lg"
                      variant={isPopular ? 'outline' : 'default'}
                      className={`w-full ${
                        isPopular 
                          ? 'border-white text-white hover:bg-white hover:text-primary-700' 
                          : ''
                      }`}
                    >
                      <a href={tier.href} className="flex items-center justify-center">
                        {tier.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </EnhancedButton>
                  </div>
                </EnhancedCard>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <Info className="h-4 w-4" />
            <span>All plans include a 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
