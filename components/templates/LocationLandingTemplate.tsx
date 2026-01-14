'use client'

import { LocationPageConfig } from '@/lib/location-configs/types'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Star,
  TrendingUp,
  Award,
  Globe,
  Zap,
  BarChart3,
  Layers,
  Shield,
  ChevronDown,
  Quote
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface LocationLandingTemplateProps {
  config: LocationPageConfig
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, any> = {
  MapPin,
  TrendingUp,
  Award,
  Globe,
  Zap,
  BarChart3,
  Layers,
  Shield,
  Palmtree: Globe, // Fallback for Palmtree
}

export function LocationLandingTemplate({ config }: LocationLandingTemplateProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: 'Hawaii', href: '/locations/hawaii' },
              { label: config.metadata.city, href: `/locations/hawaii/${config.metadata.slug}` }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 sm:mb-8 ring-1 ring-white/20">
              <Award className="h-4 w-4" />
              <span>{config.hero.badge}</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {config.hero.headline}{' '}
              <span className="text-primary-400">{config.hero.highlightText}</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              {config.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
              <Button
                size="lg"
                className="
                  w-full sm:w-auto
                  min-h-[56px] sm:min-h-[60px]
                  bg-primary-600 text-white
                  hover:bg-primary-700
                  px-8 sm:px-10 py-4 sm:py-5
                  text-base sm:text-lg font-semibold
                  rounded-xl
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                "
                asChild
              >
                <Link href={config.hero.primaryCTA.href}>
                  {config.hero.primaryCTA.text}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  w-full sm:w-auto
                  min-h-[56px] sm:min-h-[60px]
                  border-2 border-white/40 text-white
                  bg-white/10 backdrop-blur-sm
                  hover:bg-white/20 hover:border-white/60
                  px-8 sm:px-10 py-4 sm:py-5
                  text-base sm:text-lg font-semibold
                  rounded-xl
                  transition-all duration-300
                "
                asChild
              >
                <Link href={config.hero.secondaryCTA.href}>
                  {config.hero.secondaryCTA.text}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-white/90">
              {config.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 backdrop-blur-sm flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entity Definition Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100/50 p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-[26px] leading-[34px] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold text-secondary-900 mb-3 sm:mb-4">
                Professional Digital Marketing Services in {config.metadata.city}
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-left">
              <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-secondary-800">
                <strong className="text-secondary-900">Web Vello</strong> provides comprehensive digital marketing services to businesses in {config.metadata.fullName}. We specialize in helping {config.metadata.city} businesses grow through AI-powered SEO, custom web development, and data-driven marketing strategies.
              </p>
              <p className="text-base leading-relaxed sm:text-lg sm:leading-relaxed text-secondary-700">
                Our team understands the unique challenges and opportunities in {config.metadata.city}'s market. We deliver measurable results through transparent reporting, proven strategies, and ongoing optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Complete Digital Solutions for {config.metadata.city}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From web design to SEO to digital marketing - everything your {config.metadata.city} business needs to succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {config.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-secondary-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Stories from {config.metadata.city}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See how we've helped {config.metadata.city} businesses achieve remarkable growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {config.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col h-full rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.6)]"
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-slate-500 ml-auto" />
                </div>

                <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed mb-4 flex-1 italic">
                  "{testimonial.content}"
                </p>

                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-50">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>

                <div className="space-y-2">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              {config.whyChooseUs.title}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {config.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.whyChooseUs.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Globe
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Areas We Serve in {config.metadata.city}
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Providing digital marketing services throughout the {config.metadata.city} area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {config.areasServed.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-secondary-900">{area.name}</div>
                    {area.description && (
                      <div className="text-sm text-secondary-600 mt-1">{area.description}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <CheckCircle className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Answers to common questions about our services in {config.metadata.city}
            </p>
          </div>

          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-secondary-700 leading-relaxed text-base lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {config.finalCTA.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {config.finalCTA.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="
                bg-white text-primary-600 
                hover:bg-gray-100
                px-10 py-4 text-lg font-semibold
                rounded-xl shadow-xl hover:shadow-2xl
                transition-all duration-300
              "
              asChild
            >
              <Link href={config.finalCTA.primaryCTA.href}>
                {config.finalCTA.primaryCTA.text}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="
                border-2 border-white text-white
                hover:bg-white hover:text-primary-600
                px-10 py-4 text-lg font-semibold
                rounded-xl
                transition-all duration-300
              "
              asChild
            >
              <Link href={config.finalCTA.secondaryCTA.href}>
                {config.finalCTA.secondaryCTA.text}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

