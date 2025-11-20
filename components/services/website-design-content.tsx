"use client"

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Monitor, Palette, Zap, Users, ShoppingCart, Mail, CheckCircle, Eye, Target, TrendingUp, Award, Clock, DollarSign, Globe, Smartphone, Search, Shield, BarChart3, Star, MessageSquare, Phone, Calendar, Sparkles, Layers, Code, Building2, Crown, Gem, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: "Custom Design Strategy",
    description: "Tailored design approach based on your brand, audience, and business goals.",
    icon: Target,
    benefits: ["Brand-aligned design", "User-focused approach", "Conversion optimization", "Scalable solutions"],
    color: "from-blue-500 to-cyan-600",
    gradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Responsive Design",
    description: "Websites that look and perform perfectly on all devices and screen sizes.",
    icon: Monitor,
    benefits: ["Mobile-first design", "Cross-browser compatibility", "Touch-friendly interfaces", "Fast loading times"],
    color: "from-purple-500 to-indigo-600",
    gradient: "from-purple-50 to-indigo-50"
  },
  {
    title: "Conversion Optimization",
    description: "Design elements strategically placed to maximize visitor-to-customer conversion rates.",
    icon: TrendingUp,
    benefits: ["Strategic CTAs", "User flow optimization", "A/B testing", "Performance tracking"],
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Modern UI/UX",
    description: "Contemporary design trends and user experience best practices.",
    icon: Eye,
    benefits: ["Clean aesthetics", "Intuitive navigation", "Accessibility compliance", "Engaging interactions"],
    color: "from-orange-500 to-red-600",
    gradient: "from-orange-50 to-red-50"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, audience, and competitors to create a strategic design plan.",
    icon: Search,
    color: "from-blue-500 to-cyan-600"
  },
  {
    step: "02",
    title: "Wireframing & Prototyping",
    description: "We create wireframes and interactive prototypes to visualize the user experience.",
    icon: Layers,
    color: "from-purple-500 to-indigo-600"
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Our designers and developers work together to bring your vision to life.",
    icon: Code,
    color: "from-green-500 to-emerald-600"
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing across devices and browsers before launching your new website.",
    icon: Building2,
    color: "from-orange-500 to-red-600"
  }
]

const results = [
  {
    metric: "300%+",
    description: "Average increase in conversion rates",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    metric: "45%",
    description: "Improvement in user engagement",
    icon: Users,
    color: "from-blue-500 to-cyan-600"
  },
  {
    metric: "2.5x",
    description: "Faster page load times",
    icon: Zap,
    color: "from-yellow-500 to-orange-600"
  },
  {
    metric: "85%",
    description: "Mobile traffic increase",
    icon: Smartphone,
    color: "from-purple-500 to-indigo-600"
  }
]

const designShowcase = [
  {
    title: "Modern Minimalist",
    description: "Clean, focused design that puts content first",
    category: "Corporate",
    features: ["Clean typography", "White space", "Subtle animations", "Focus on content"],
    image: "/images/design-showcase/modern-minimalist-design.webp"
  },
  {
    title: "Bold & Creative",
    description: "Eye-catching designs that make a statement",
    category: "Creative",
    features: ["Vibrant colors", "Custom illustrations", "Interactive elements", "Unique layouts"],
    image: "/images/design-showcase/bold-creative-design.webp"
  },
  {
    title: "E-commerce Excellence",
    description: "Designed to convert browsers into buyers",
    category: "E-commerce",
    features: ["Product-focused", "Easy navigation", "Trust signals", "Optimized CTAs"],
    image: "/images/design-showcase/ecommerce-excellence-design.webp"
  }
]

export default function WebsiteDesignContent() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Website Design',
            provider: {
              '@type': 'Organization',
              name: 'Web Vello',
              url: 'https://www.webvello.com',
              logo: 'https://www.webvello.com/logo.png'
            },
            areaServed: 'US',
            audience: { '@type': 'BusinessAudience', audienceType: 'B2B' },
            brand: { '@type': 'Brand', name: 'Web Vello' }
          })
        }}
      />
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 text-sm font-semibold mb-8 shadow-2xl animate-bounce">
              <Monitor className="w-5 h-5 mr-3" />
              Website Design Services
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-secondary-900 mb-8 leading-tight">
              <span className="block mb-2">Custom Website Design</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                That Converts
              </span>
            </h1>
            
            <p className="text-2xl text-secondary-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your online presence with custom website design that combines 
              <span className="text-primary-600 font-semibold"> stunning aesthetics </span>
              with 
              <span className="text-primary-600 font-semibold"> conversion-focused functionality</span>. 
              We create websites that don’t just look good—they drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold group">
                <Link href="/contact">
                  <Sparkles className="w-5 h-5 mr-3 group-hover:animate-spin" />
                  Get Your Custom Design
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-secondary-300 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 px-8 py-4 text-lg font-semibold group">
                <Link href="/case-studies">
                  <Eye className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  View Our Work
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {designShowcase.map((showcase, index) => (
              <div key={showcase.title} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden relative">
                    {showcase.image ? (
                      <Image
                        src={showcase.image}
                        alt={`${showcase.title} design preview`}
                        fill
                        className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500 text-sm">Design Preview</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {showcase.category}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {showcase.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{showcase.description}</p>
                  <ul className="space-y-2">
                    {showcase.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page-level FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-8">Website Design FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does a custom website design take?',
                a: 'Most projects take 4–8 weeks depending on scope, pages, and integrations. We provide a clear timeline after discovery.'
              },
              {
                q: 'Do you provide copywriting and SEO with design?',
                a: 'Yes. We include on‑page SEO, technical best practices, and can provide conversion‑focused copy as part of the engagement.'
              },
              {
                q: 'Can you redesign my current site without losing SEO?',
                a: 'We preserve URLs or set proper 301 redirects, migrate metadata, and monitor rankings to ensure a smooth transition.'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-semibold text-secondary-900 mb-2">{f.q}</h3>
                <p className="text-secondary-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Choose Our 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Website Design Services</span>?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine creativity with strategy to deliver websites that exceed expectations and drive measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer`}>
                <div className="flex items-center mb-6">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-base text-secondary-700 group-hover:text-secondary-900 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Design Process</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              A proven methodology that ensures your website design exceeds expectations and drives results.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative text-center group hover:scale-105 transition-all duration-500">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-200 transition-all duration-500">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Results That 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Speak for Themselves</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our custom website designs consistently deliver exceptional results for businesses across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={result.metric} className="group text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <result.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {result.metric}
                </div>
                <p className="text-secondary-600 text-lg">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses that have already achieved remarkable growth with our custom website designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="xl" className="bg-white text-primary-600 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-10 py-4 text-lg font-semibold group">
              <Link href="/contact">
                <Crown className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Get Your Custom Design
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg font-semibold group">
              <Gem className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              View Portfolio
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-primary-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
