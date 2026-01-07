"use client"

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Monitor, Palette, Zap, Users, ShoppingCart, Mail, CheckCircle, Eye, Target, TrendingUp, Award, Clock, DollarSign, Globe, Smartphone, Search, Shield, BarChart3, Star, MessageSquare, Phone, Calendar, Sparkles, Layers, Code, Building2, Crown, Gem, FileText, ShoppingBag, Briefcase, Paintbrush, MousePointerClick } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: "Custom Design Strategy",
    description: "Tailored design approach based on your brand, audience, and business goals.",
    icon: Target,
    benefits: ["Brand-aligned design", "User-focused approach", "Conversion optimization", "Scalable solutions"],
    color: "from-emerald-500 to-teal-600",
    gradient: "from-emerald-50 to-teal-50"
  },
  {
    title: "Responsive Design",
    description: "Websites that look and perform perfectly on all devices and screen sizes.",
    icon: Monitor,
    benefits: ["Mobile-first design", "Cross-browser compatibility", "Touch-friendly interfaces", "Fast loading times"],
    color: "from-violet-500 to-purple-600",
    gradient: "from-violet-50 to-purple-50"
  },
  {
    title: "Conversion Optimization",
    description: "Design elements strategically placed to maximize visitor-to-customer conversion rates.",
    icon: TrendingUp,
    benefits: ["Strategic CTAs", "User flow optimization", "A/B testing", "Performance tracking"],
    color: "from-amber-500 to-orange-600",
    gradient: "from-amber-50 to-orange-50"
  },
  {
    title: "Modern UI/UX",
    description: "Contemporary design trends and user experience best practices.",
    icon: Eye,
    benefits: ["Clean aesthetics", "Intuitive navigation", "Accessibility compliance", "Engaging interactions"],
    color: "from-rose-500 to-pink-600",
    gradient: "from-rose-50 to-pink-50"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, audience, and competitors to create a strategic design plan.",
    icon: Search,
    color: "from-emerald-500 to-teal-600"
  },
  {
    step: "02",
    title: "Wireframing & Prototyping",
    description: "We create wireframes and interactive prototypes to visualize the user experience.",
    icon: Layers,
    color: "from-violet-500 to-purple-600"
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Our designers and developers work together to bring your vision to life.",
    icon: Code,
    color: "from-amber-500 to-orange-600"
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing across devices and browsers before launching your new website.",
    icon: Building2,
    color: "from-rose-500 to-pink-600"
  }
]

const results = [
  {
    metric: "300%+",
    description: "Average increase in conversion rates",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600"
  },
  {
    metric: "45%",
    description: "Improvement in user engagement",
    icon: Users,
    color: "from-violet-500 to-purple-600"
  },
  {
    metric: "2.5x",
    description: "Faster page load times",
    icon: Zap,
    color: "from-amber-500 to-orange-600"
  },
  {
    metric: "85%",
    description: "Mobile traffic increase",
    icon: Smartphone,
    color: "from-rose-500 to-pink-600"
  }
]

const designShowcase = [
  {
    title: "Modern Minimalist",
    description: "Clean, focused design that puts content first",
    category: "Corporate",
    icon: Briefcase,
    features: ["Clean typography", "White space", "Subtle animations", "Focus on content"],
    image: "/images/design-showcase/modern-minimalist.webp",
    accent: "from-slate-600 to-zinc-700"
  },
  {
    title: "Bold & Creative",
    description: "Eye-catching designs that make a statement",
    category: "Creative",
    icon: Paintbrush,
    features: ["Vibrant colors", "Custom illustrations", "Interactive elements", "Unique layouts"],
    image: "/images/design-showcase/bold-creative.webp",
    accent: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "E-commerce Excellence",
    description: "Designed to convert browsers into buyers",
    category: "E-commerce",
    icon: ShoppingCart,
    features: ["Product-focused", "Easy navigation", "Trust signals", "Optimized CTAs"],
    image: "/images/design-showcase/ecommerce-excellence.webp",
    accent: "from-emerald-500 to-teal-600"
  }
]

export default function WebsiteDesignContent() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
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
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.webvello.com/logo.png',
                width: 2048,
                height: 2048
              }
            },
            areaServed: 'US',
            audience: { '@type': 'BusinessAudience', audienceType: 'B2B' },
            brand: { '@type': 'Brand', name: 'Web Vello' }
          })
        }}
      />
      
      {/* Hero Section with Dark Aesthetic */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Website Design Services
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-2">Custom Website Design</span>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                That Converts
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Transform your online presence with custom website design that combines 
              <span className="text-violet-300 font-medium"> stunning aesthetics </span>
              with 
              <span className="text-emerald-300 font-medium"> conversion-focused functionality</span>. 
              We don't just look good—we drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-500 px-8 py-6 text-lg font-semibold group border-0 rounded-xl">
                <Link href="/contact">
                  <MousePointerClick className="w-5 h-5 mr-3" />
                  Get Your Custom Design
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 px-8 py-6 text-lg font-semibold group rounded-xl backdrop-blur-sm">
                <Link href="/case-studies">
                  <Eye className="w-5 h-5 mr-3" />
                  View Our Work
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Design Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {designShowcase.map((showcase, index) => (
              <div 
                key={showcase.title} 
                className="group relative rounded-3xl overflow-hidden border border-gray-800/60 bg-gradient-to-b from-gray-900/80 to-gray-950/90 backdrop-blur-xl hover:border-violet-500/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.35)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-violet-500/0 via-fuchsia-500/0 to-emerald-500/0 group-hover:from-violet-500/20 group-hover:via-fuchsia-500/10 group-hover:to-emerald-500/20 rounded-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={showcase.image}
                    alt={`${showcase.title} design preview`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${showcase.accent} px-4 py-2 text-xs font-bold text-white shadow-xl ring-1 ring-white/10`}>
                    <showcase.icon className="w-4 h-4" />
                    {showcase.category}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="relative p-7">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                    {showcase.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{showcase.description}</p>
                  
                  <ul className="grid grid-cols-2 gap-3">
                    {showcase.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-xs text-gray-500 group-hover:text-gray-300 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
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
      <section className="py-24 bg-[#0d0d12] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/5 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Website Design FAQs</h2>
            <p className="text-gray-600">Common questions about our design process</p>
          </div>
          <div className="space-y-4">
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
              <div key={i} className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-violet-500/30 hover:bg-gray-900/80 transition-all duration-300 backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our 
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> Website Design</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We combine creativity with strategy to deliver websites that exceed expectations and drive measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)] backdrop-blur-sm overflow-hidden"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-800">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-[#0d0d12] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our 
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Design Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              A proven methodology that ensures your website design exceeds expectations and drives results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-gray-700 via-violet-500/30 to-gray-700 z-0"></div>
                )}
                
                <div className="relative z-10 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/30 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)] transition-all duration-500 backdrop-blur-sm text-center h-full">
                  {/* Step Number */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-lg`}>
                    {step.step}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-5 mt-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-28 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Results That 
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Speak for Themselves</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Our custom website designs consistently deliver exceptional results for businesses across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={result.metric} className="group text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/30 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)] transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${result.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <result.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {result.metric}
                </div>
                <p className="text-gray-500 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-[#0a0a0f]">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-emerald-900/20"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Start Your Transformation
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform 
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
              Your Website?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join hundreds of businesses that have already achieved remarkable growth with our custom website designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-500 px-10 py-7 text-lg font-semibold group border-0 rounded-2xl">
              <Link href="/contact">
                <Crown className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Get Your Custom Design
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 px-10 py-7 text-lg font-semibold group rounded-2xl backdrop-blur-sm">
              <Link href="/case-studies">
                <Gem className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                View Portfolio
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2.5 bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-800">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-800">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-800">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">24hr Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


