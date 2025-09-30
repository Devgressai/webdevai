import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice Search Optimization Services | Web Vello',
  description: 'Optimize your website for voice search queries from Alexa, Siri, and Google Assistant. Get found when customers use voice commands to search.',
  keywords: 'voice search optimization, voice SEO, Alexa optimization, Siri search, Google Assistant, conversational search',
  openGraph: {
    title: 'Voice Search Optimization Services | Web Vello',
    description: 'Professional voice search optimization services for Alexa, Siri, and Google Assistant.',
    url: 'https://webvello.com/services/voice-search-optimization',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

export default function VoiceSearchOptimizationPage() {
  const benefits = [
    'Comprehensive voice search keyword research and analysis',
    'Conversational content optimization for natural language',
    'Featured snippet optimization for voice results',
    'Schema markup implementation for voice assistants',
    'Local voice search optimization for "near me" queries',
    'Question-based content strategy development',
    'Voice search performance tracking and reporting',
    'Ongoing optimization based on voice search trends'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Trending Service in 2024
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Voice Search Optimization
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Optimize your website for voice search queries from Alexa, Siri, and Google Assistant. Get found when customers use voice commands to search.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Voice Search Optimization Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver professional voice search optimization solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                Our voice search strategies deliver measurable improvements in voice query rankings and featured snippets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Certified voice search specialists with years of experience in conversational SEO optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Personalized support throughout your voice search optimization journey to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Included in Our Voice Search Optimization Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize for Voice Search?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our voice search optimization services can help you reach customers using Alexa, Siri, and Google Assistant.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
