'use client'

import dynamic from 'next/dynamic'
import { Button } from '../components/ui/button'
import { ArrowRight, CheckCircle, Zap, Globe, Code, BarChart3, Users, Award, Sparkles, Target, TrendingUp, Play, DollarSign, BarChart, Rocket, Target as TargetIcon, Star } from 'lucide-react'
import Link from 'next/link'

// Dynamic imports for better code splitting
const Hero = dynamic(() => import('../components/sections/hero').then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="bg-gradient-to-br from-primary-50 to-white animate-pulse" style={{ minHeight: '600px' }} />
})

const Pricing = dynamic(() => import('../components/sections/pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="bg-gray-50 animate-pulse" style={{ minHeight: '800px' }} />
})

const WebsiteAssessment = dynamic(() => import('../components/sections/website-assessment').then(mod => ({ default: mod.WebsiteAssessment })), {
  loading: () => <div className="bg-gradient-to-br from-primary-50 to-white animate-pulse" style={{ minHeight: '500px' }} />
})

const SocialProof = dynamic(() => import('../components/sections/social-proof').then(mod => ({ default: mod.SocialProof })), {
  loading: () => <div className="bg-gray-50 animate-pulse" style={{ minHeight: '400px' }} />
})

const services = [
  {
    name: "AI-Powered SEO Services",
    description: "Revolutionize your search rankings with artificial intelligence SEO that analyzes millions of data points to identify opportunities your competitors miss. Get 300%+ organic traffic growth in 6 months with our advanced AI SEO strategies.",
    icon: Zap,
    href: "/services/ai-seo",
    features: ["AI keyword research and analysis", "Machine learning content optimization", "Automated performance tracking", "Competitive intelligence analysis"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    name: "Local SEO & Geo-Targeting",
    description: "Dominate local search results and drive qualified foot traffic to your business. Our geo-targeted local SEO strategies help you rank #1 in your local market and capture nearby customers searching for your services.",
    icon: Globe,
    href: "/services/local-seo",
    features: ["Local keyword optimization", "Google My Business management", "Local citation building", "Online review management"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    name: "Custom Web Development",
    description: "Professional custom websites that convert visitors into customers. We build fast, mobile-optimized, SEO-friendly sites with conversion-focused design that drives measurable business results.",
    icon: Code,
    href: "/services/web-development",
    features: ["Custom responsive design", "Mobile-first optimization", "Built-in SEO integration", "Performance optimization"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Conversion Rate Optimization",
    description: "Transform your website into a lead generation machine with data-driven CRO strategies. We analyze user behavior, test different approaches, and optimize your site to convert more visitors into customers.",
    icon: Target,
    href: "/services/cro-lead-generation",
    features: ["User behavior analysis", "A/B testing and optimization", "Landing page optimization", "Conversion funnel analysis"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing solutions that drive growth and revenue. From strategy development to execution, we help you reach your target audience and achieve your business goals.",
    icon: BarChart3,
    href: "/services/digital-marketing",
    features: ["Marketing strategy development", "Campaign management", "Performance tracking", "ROI optimization"],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    name: "WordPress Development",
    description: "Custom WordPress websites and themes that are fast, secure, and optimized for conversions. We build both custom solutions and Elementor-based sites tailored to your business needs.",
    icon: Code,
    href: "/services/wordpress-development",
    features: ["Custom WordPress themes", "Elementor page builder", "Plugin development", "Performance optimization"],
    gradient: "from-blue-600 to-indigo-700"
  }
]

const stats = [
  { id: 1, name: "Projects Completed", value: "500+" },
  { id: 2, name: "Client Satisfaction", value: "98%" },
  { id: 3, name: "Average ROI", value: "300%" },
  { id: 4, name: "Years Experience", value: "10+" }
]

const handleProposalRequest = (source: string) => {
  // Track conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'proposal_request', {
      event_category: 'Lead Generation',
      event_label: source,
      value: 1
    })
  }
  
  // Redirect to contact page
  window.location.href = '/contact'
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Why Choose Web Vello Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Why Choose Web Vello for Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600"> Digital Marketing Needs?</span>
              </h2>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                We’re not just another digital marketing agency. We’re your strategic partner in growth, 
                combining cutting-edge technology with proven strategies to deliver measurable results 
                that transform your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg text-secondary-700">Data-driven strategies that deliver real results</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg text-secondary-700">Transparent reporting and regular communication</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg text-secondary-700">Custom solutions tailored to your business goals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Custom Web Development</h3>
                      <p className="text-secondary-600">Professional custom websites built with modern technologies. Fast, mobile-optimized, and SEO-friendly sites that convert visitors into customers.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Data-Driven Marketing</h3>
                      <p className="text-secondary-600">AI-powered SEO and marketing strategies that analyze millions of data points to identify opportunities your competitors miss.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Conversion Optimization</h3>
                      <p className="text-secondary-600">Transform your website into a lead generation machine with proven CRO strategies that increase conversions by 300%+.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              COMPREHENSIVE DIGITAL SOLUTIONS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Digital Marketing Solutions That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600"> Deliver Success</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From AI-powered SEO to custom web development, we provide comprehensive digital marketing 
              solutions that drive growth, increase conversions, and deliver measurable ROI for your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Metrics That Prove Our Value
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our track record speaks for itself. We’ve helped hundreds of businesses achieve 
              remarkable growth through strategic digital marketing and web development.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Web Vello - Detailed Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              WHY CHOOSE WEB VELLO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Choose Web Vello for Your Digital Marketing Needs?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver measurable results 
              that transform your business and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SEO Content Card 1 - Local SEO Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">AI-Powered SEO Excellence</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Our advanced AI SEO strategies analyze millions of data points to identify opportunities 
                your competitors miss. Get 300%+ organic traffic growth with machine learning-powered 
                optimization that adapts to search algorithm changes in real-time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">AI keyword research and analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Machine learning content optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Automated performance tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Competitive intelligence analysis</span>
                </div>
              </div>
            </div>

            {/* Web Development Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Conversion-Focused Web Development</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Build websites that convert visitors into customers with our conversion-focused development approach. 
                We create fast, mobile-optimized sites with built-in SEO best practices, ensuring your website 
                ranks well and drives measurable business results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Mobile-first responsive design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Built-in SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Performance optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Conversion tracking setup</span>
                </div>
              </div>
            </div>

            {/* CRO Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Data-Driven CRO Strategies</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Transform your website into a lead generation machine with our proven conversion rate 
                optimization strategies. We analyze user behavior, test different approaches, and optimize 
                your site to convert more visitors into customers with measurable results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">User behavior analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">A/B testing and optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Landing page optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-sm text-secondary-600">Conversion funnel analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-secondary-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">300%</div>
                <div className="text-sm text-secondary-600">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Side - Text and CTA */}
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white/90 mb-4 sm:mb-6 border border-white/20">
                <span className="hidden sm:inline">DIGITAL MARKETING THAT DELIVERS RESULTS</span>
                <span className="sm:hidden">RESULTS-DRIVEN MARKETING</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Transform Your Website into a Lead Generation Machine with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Web Vello
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Professional services firms must effectively differentiate themselves to attract and retain clients. 
                Over 500+ professional services clients trust us to create tailored marketing strategies that enhance 
                their online presence and drive measurable business growth.
              </p>
              
              {/* CTA Input & Button */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  className="flex-1 px-3 sm:px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base"
                />
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse text-sm sm:text-base"
                  onClick={() => handleProposalRequest('homepage_input')}
                >
                  Get Free Proposal
                </Button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm text-white/80 mb-2">
                  ⚡ <span className="font-semibold">Instant Response:</span> Get your custom proposal in 24 hours
                </p>
                <p className="text-xs text-white/60">
                  <span className="hidden sm:inline">No obligation • Free consultation included • 500+ successful projects</span>
                  <span className="sm:hidden">No obligation • Free consultation</span>
                </p>
              </div>
            </div>
            
            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 mb-6">
                    Join hundreds of successful businesses that trust Web Vello for their digital marketing needs.
                  </p>
                  <Button 
                    size="lg"
                    className="w-full bg-white text-primary-600 hover:bg-gray-100 font-semibold"
                    onClick={() => handleProposalRequest('homepage_cta')}
                  >
                    Start Your Project Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Components */}
      <WebsiteAssessment />
      <SocialProof />
      <Pricing />
    </div>
  )
}
