
'use client'

import { Hero } from '../components/sections/hero'
import dynamic from 'next/dynamic'
const Pricing = dynamic(() => import('../components/sections/pricing').then(m => m.Pricing), { ssr: true })
const WebsiteAssessment = dynamic(() => import('../components/sections/website-assessment').then(m => m.WebsiteAssessment), { ssr: true })
import { SocialProof } from '../components/sections/social-proof'
import { Button } from '../components/ui/button'
import { ArrowRight, CheckCircle, Zap, Globe, Code, BarChart3, Users, Award, Sparkles, Target, TrendingUp, Play, DollarSign, BarChart, Building2, Target as TargetIcon, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroImage, BackgroundImage } from '../components/ui/optimized-image'
// import { useConversionTracking } from '../hooks/useConversionTracking'
// import ScrollTracker from '../components/analytics/scroll-tracker'

const services = [
  {
    name: "AI-Powered SEO",
    description: "Get 300%+ organic traffic growth in 6 months with our advanced AI SEO strategies that analyze millions of data points.",
    icon: Zap,
    href: "/services/ai-seo",
    features: ["AI keyword research", "Content optimization", "Performance tracking"],
    gradient: "from-blue-400 to-indigo-500",
    popular: true
  },
  {
    name: "Local SEO",
    description: "Dominate local search results and rank #1 in your market with geo-targeted strategies.",
    icon: Globe,
    href: "/services/local-seo",
    features: ["Google My Business", "Local citations", "Review management"],
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Web Development",
    description: "Custom websites that convert visitors into customers with conversion-focused design.",
    icon: Code,
    href: "/services/web-development",
    features: ["Mobile-first design", "SEO integration", "Performance optimization"],
    gradient: "from-indigo-400 to-blue-500"
  }
]

const stats = [
  { id: 1, name: "Revenue Generated for Clients", value: "$2.4M+", icon: TrendingUp },
  { id: 2, name: "Satisfied Business Clients", value: "500+", icon: Users },
  { id: 3, name: "Average ROI Delivered", value: "340%", icon: Award },
  { id: 4, name: "Organic Traffic Growth", value: "300%+", icon: BarChart3 }
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Solutions",
    content: "Web Vello's digital marketing services transformed our online presence completely. We went from 50 qualified leads per month to over 200, and our revenue increased by 150% in just 6 months with their SEO and web development expertise.",
    rating: 5,
    company: "TechStart Solutions"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "The AI-powered SEO strategies are incredible. We're ranking for high-value keywords we never thought possible, and our organic search traffic has grown 400% year-over-year with their advanced SEO techniques.",
    rating: 5,
    company: "GrowthCo"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    role: "Founder, LegalTech Pro",
    content: "Professional, results-driven, and incredibly effective digital marketing agency. Web Vello helped us establish authority in our legal tech niche and attract high-value clients consistently through their SEO and web development services.",
    rating: 5,
    company: "LegalTech Pro"
  }
]

export default function HomePage() {
  // Temporarily disabled conversion tracking to fix build error
  // const { trackProposalRequest, trackCTAClick } = useConversionTracking()

  const handleProposalRequest = (website: string) => {
    // trackProposalRequest(website, 'homepage_main_cta')
    console.log('Proposal requested for:', website)
  }

  const handleCTAClick = (buttonText: string, location: string) => {
    // trackCTAClick(buttonText, location)
    console.log('CTA clicked:', buttonText, 'at', location)
  }

  return (
    <div className="min-h-screen">
      {/* <ScrollTracker /> */}
      <Hero />
      
      {/* Website Assessment Section */}
      <WebsiteAssessment />
      
      {/* Social Proof Section */}
      <SocialProof />
      
      {/* SEO-Optimized Content Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Why Choose Web Vello for Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600"> Digital Marketing Needs?</span>
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                As a leading digital marketing agency, Web Vello specializes in AI-powered SEO, local search optimization, and custom web development. Our data-driven approach delivers measurable results for businesses across all industries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI-Powered SEO Services</h3>
                    <p className="text-secondary-600">Our artificial intelligence SEO strategies analyze millions of data points to identify opportunities your competitors miss, delivering 300%+ organic traffic growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local SEO & Geo-Targeting</h3>
                    <p className="text-secondary-600">Dominate local search results with our geo-targeted strategies. We help businesses rank #1 in their local market and capture nearby customers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Custom Web Development</h3>
                    <p className="text-secondary-600">Professional custom websites built with modern technologies. Fast, mobile-optimized, and SEO-friendly sites that convert visitors into customers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <HeroImage 
                  src="/images/hero-team-collaboration.webp"
                  alt="Professional digital marketing team collaborating on strategy"
                  className="w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p className="text-sm opacity-90">Our experienced professionals deliver results</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">Ready to Grow Your Business?</h4>
                <p className="text-secondary-600 mb-4">Get a free digital marketing strategy consultation and discover how our SEO and web development services can transform your online presence.</p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Free Strategy Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-primary-200/40 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-tl from-accent-200/40 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Digital Marketing Solutions That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600"> Deliver Success</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver measurable results for professional services firms. 
              From AI-powered SEO to custom web development, we have the expertise to transform your digital presence.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <HeroImage 
                src="/images/hero-analytics.webp"
                alt="Digital marketing team working on analytics and strategy"
                className="w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Data-Driven Results</h3>
                <p className="text-lg opacity-90">Our team analyzes real-time data to optimize your digital presence</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group-hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                    <Zap className="w-4 h-4 mr-2" />
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: "url('/images/hero-data-analysis.webp')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-secondary-800/80"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Metrics That Prove Our Value
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our data-driven approach has delivered exceptional results for hundreds of professional services firms. 
              See the numbers that demonstrate our strategies work.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Optimized Content Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              Digital Marketing Excellence
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Choose Web Vello for Your Digital Marketing Needs?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover how our data-driven approach to SEO, web development, and digital marketing 
              helps businesses achieve sustainable growth and dominate their markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SEO Content Card 1 - Local SEO Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Local SEO & Google My Business Optimization
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Dominate local search results with our proven local SEO strategies. We help businesses rank #1 
                in their local market, increase foot traffic, and capture nearby customers through Google My Business 
                optimization, local citations, and review management.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Google My Business optimization
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Local keyword research & targeting
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Local citation building & management
                </div>
              </div>
            </div>

            {/* SEO Content Card 2 - AI SEO Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                AI-Powered SEO & Content Strategy
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Leverage cutting-edge AI technology to identify hidden SEO opportunities your competitors miss. 
                Our AI-powered approach analyzes millions of data points to create content strategies that drive 
                300%+ traffic growth and improve search rankings across all major search engines.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  AI keyword research & analysis
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Content optimization & creation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Competitive analysis & strategy
                </div>
              </div>
            </div>

            {/* SEO Content Card 3 - Web Development Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Conversion-Focused Web Development
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Build websites that convert visitors into customers with our conversion-focused development approach. 
                We create fast, mobile-optimized sites with built-in SEO best practices, ensuring your website 
                ranks well and drives measurable business results.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Mobile-first responsive design
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  SEO-optimized code structure
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Performance optimization
                </div>
              </div>
            </div>
          </div>

          {/* Additional SEO Content */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Digital Marketing Services Available Nationwide
              </h3>
              <p className="text-lg text-secondary-600 max-w-4xl mx-auto">
                Web Vello provides comprehensive digital marketing solutions including SEO, web development, 
                UI/UX design, and software development. Our services help businesses across all industries 
                improve their online presence, increase search visibility, and drive sustainable revenue growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-secondary-600">Successful Clients</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-secondary-600">Industries Served</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-secondary-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden">
        {/* Background image and gradient flow */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: "url('/images/hero-business-meeting.webp')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-blue-500/40"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Text and CTA - Golden Ratio Layout */}
            <div className="text-white">
              {/* Badge - Golden ratio spacing */}
              <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 mb-8 border border-white/20">
                <span className="hidden sm:inline">DIGITAL MARKETING THAT DELIVERS RESULTS</span>
                <span className="sm:hidden">RESULTS-DRIVEN MARKETING</span>
              </div>
              
              {/* Main Headline - Golden ratio typography */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10 leading-tight">
                Transform Your Website into a Lead Generation Machine with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Web Vello
                </span>
              </h2>
              
              {/* Description - Golden ratio line height and spacing */}
              <p className="text-lg sm:text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
                Professional services firms must effectively differentiate themselves to attract and retain clients. 
                Over 500+ professional services clients trust us to create tailored marketing strategies that enhance 
                credibility, foster client relationships, and drive lead generation. Let us help you establish your 
                firm as a trusted authority in your industry while achieving your unique business goals.
              </p>
              
              {/* CTA Input & Button - Golden ratio proportions */}
              <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto mb-12">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base"
                />
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse text-base"
                  onClick={() => handleProposalRequest('homepage_input')}
                >
                  🎯 Get Free SEO Audit
                </Button>
              </div>
              
              {/* Urgency & Value Props - Golden ratio spacing */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-white/80">
                  ⚡ <span className="font-semibold">Instant Response:</span> Get your custom proposal in 24 hours
                </p>
                <p className="text-xs sm:text-sm text-white/60">
                  <span className="hidden sm:inline">No obligation • Free consultation included • 500+ successful projects</span>
                  <span className="sm:hidden">No obligation • Free consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  )
}
