"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Zap, Brain, Target, TrendingUp, CheckCircle, BarChart3, Users, MessageSquare, Sparkles, Bot, Cpu, Network, Workflow, LineChart, MousePointerClick, Crown, Gem } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: "AI-Powered Content Creation",
    description: "Generate high-quality, engaging content at scale using advanced AI algorithms that understand your brand voice.",
    icon: Brain,
    benefits: ["Automated content", "SEO optimization", "Brand consistency", "Scalable production"],
    color: "from-violet-500 to-purple-600",
    gradient: "from-violet-50 to-purple-50"
  },
  {
    title: "Predictive Analytics",
    description: "Use AI to predict customer behavior and optimize marketing campaigns in real-time for maximum impact.",
    icon: TrendingUp,
    benefits: ["Behavior prediction", "Real-time optimization", "ROI forecasting", "Customer insights"],
    color: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-50 to-blue-50"
  },
  {
    title: "Personalization at Scale",
    description: "Deliver personalized experiences to every customer using AI-driven segmentation and targeting.",
    icon: Target,
    benefits: ["Dynamic content", "Behavioral targeting", "Customer segmentation", "Conversion optimization"],
    color: "from-emerald-500 to-teal-600",
    gradient: "from-emerald-50 to-teal-50"
  },
  {
    title: "Automated Campaign Management",
    description: "AI systems that manage and optimize your marketing campaigns automatically 24/7.",
    icon: Zap,
    benefits: ["Auto-optimization", "Performance monitoring", "Budget allocation", "Continuous improvement"],
    color: "from-amber-500 to-orange-600",
    gradient: "from-amber-50 to-orange-50"
  }
]

const services = [
  {
    title: "AI Content Marketing",
    description: "Automated content creation and optimization for better engagement and SEO performance.",
    icon: Brain,
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "AI-Powered PPC",
    description: "Intelligent ad management and bid optimization for maximum ROI on every dollar spent.",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "AI Email Marketing",
    description: "Smart email campaigns that adapt to customer behavior and optimize send times.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "AI Social Media",
    description: "Automated social media management with intelligent content scheduling and optimization.",
    icon: Users,
    color: "from-rose-500 to-pink-600"
  }
]

const results = [
  {
    metric: "500%+",
    description: "Average increase in content production",
    icon: Brain,
    color: "from-violet-500 to-purple-600"
  },
  {
    metric: "300%",
    description: "Improvement in campaign ROI",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-600"
  },
  {
    metric: "4x",
    description: "Faster campaign optimization",
    icon: Zap,
    color: "from-emerald-500 to-teal-600"
  },
  {
    metric: "200%+",
    description: "Increase in customer engagement",
    icon: Users,
    color: "from-amber-500 to-orange-600"
  }
]

export default function AIDigitalMarketingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'AI Digital Marketing',
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
      
      {/* Hero Section with AI Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/ai-neural-network.webp"
            alt="AI Neural Network Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm">
              <Bot className="w-4 h-4" />
              AI Digital Marketing Services
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-2">AI-Powered Marketing</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                That Outperforms
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Transform your digital marketing with AI-powered strategies that deliver 
              <span className="text-cyan-300 font-medium"> unprecedented results</span>. 
              Our AI systems don't just automate—they 
              <span className="text-violet-300 font-medium"> learn, adapt, and continuously improve</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500 px-8 py-6 text-lg font-semibold group border-0 rounded-xl">
                <Link href="/contact">
                  <Bot className="w-5 h-5 mr-3" />
                  Start Your AI Marketing Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 px-8 py-6 text-lg font-semibold group rounded-xl backdrop-blur-sm">
                <Link href="/case-studies">
                  <LineChart className="w-5 h-5 mr-3" />
                  View AI Results
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Floating AI Elements */}
            <div className="mt-16 flex justify-center gap-6 flex-wrap">
              {[
                { icon: Cpu, label: "Machine Learning" },
                { icon: Network, label: "Neural Networks" },
                { icon: Workflow, label: "Automation" },
                { icon: Brain, label: "Deep Learning" }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-5 py-2.5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-[#0d0d12] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> AI-Powered Marketing</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              AI doesn't just make marketing easier—it makes it smarter, more efficient, 
              and more effective than traditional methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] backdrop-blur-sm overflow-hidden"
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
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
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

      {/* Services Section */}
      <section className="py-28 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive 
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"> AI Marketing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              From content creation to campaign optimization, our AI-powered services 
              cover every aspect of modern digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/30 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)] transition-all duration-500 backdrop-blur-sm hover:-translate-y-1"
              >
                {/* Animated corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-28 bg-[#0d0d12] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real Results from 
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"> AI-Powered Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Our AI marketing systems consistently deliver measurable improvements 
              in efficiency, ROI, and overall marketing performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={result.metric} className="group text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${result.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <result.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {result.metric}
                </div>
                <p className="text-gray-500 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0f]">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-violet-900/20"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Harness the Power of AI
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Marketing with AI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Don't get left behind. Our AI-powered marketing services will transform 
            your digital marketing and deliver results that traditional methods can't match.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500 px-10 py-7 text-lg font-semibold group border-0 rounded-2xl">
              <Link href="/contact">
                <Crown className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Start AI Marketing
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500 px-10 py-7 text-lg font-semibold group rounded-2xl backdrop-blur-sm">
              <Link href="/case-studies">
                <Gem className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                View AI Results
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2.5 bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-800">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Free AI Consultation</span>
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
