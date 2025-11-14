import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, MapPin, Target, CheckCircle, TrendingUp, Building, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Local Businesses Can Use GEO to Outrank Competitors in Their City or Service Area | Web Vello',
  description: 'Complete guide to using GEO (Generative Engine Optimization) for local businesses. Learn how to outrank competitors in your city or service area with AI optimization strategies.',
  keywords: 'local GEO, local business SEO, local AI optimization, city SEO, service area optimization, local business marketing, GEO for local businesses',
  openGraph: {
    title: 'How Local Businesses Can Use GEO to Outrank Competitors in Their City or Service Area',
    description: 'Complete guide to using GEO for local businesses. Learn how to outrank competitors in your city or service area with AI optimization strategies.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Web Vello'],
    tags: ['Local GEO', 'Local Business', 'City SEO', 'Service Area Optimization'],
  },
  alternates: {
    canonical: 'https://webvello.com/blog/local-businesses-geo-outrank-competitors-2025',
  },
}

export default function LocalBusinessesGEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Local Businesses Can Use GEO to Outrank Competitors in Their City or Service Area",
            "description": "Complete guide to using GEO for local businesses. Learn how to outrank competitors in your city or service area with AI optimization strategies.",
            "author": {
              "@type": "Organization",
              "name": "Web Vello",
              "url": "https://webvello.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Web Vello",
              "logo": {
                "@type": "ImageObject",
                "url": "https://webvello.com/logo.png"
              }
            },
            "datePublished": "2025-01-15T00:00:00.000Z",
            "dateModified": "2025-01-15T00:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://webvello.com/blog/local-businesses-geo-outrank-competitors-2025"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 via-green-800 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Local Businesses Can Use GEO to Outrank Competitors
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Dominate Your City or Service Area with AI Optimization Strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Local GEO</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">City SEO</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Service Area</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Local Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=1200&q=80&auto=format&fit=crop"
                alt="Local businesses using GEO to outrank competitors in their city or service area"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Summary Block */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-xl mb-8 border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-8 w-8 text-teal-600 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">AI Summary: Local Business GEO</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Local businesses can use Generative Engine Optimization (GEO) to dominate AI search results in their city 
                or service area, gaining significant competitive advantages over competitors who rely solely on traditional 
                local SEO. Local GEO optimization involves: creating location-specific content pages with clear geographic 
                entity optimization (city, neighborhood, service area references), implementing LocalBusiness schema markup 
                with complete NAP (Name, Address, Phone) data and service area information, publishing location-based case 
                studies and client testimonials with geographic specificity, optimizing for local AI queries ("best [service] 
                in [city]", "nearest [service] to [neighborhood]"), and building local topical authority through comprehensive 
                coverage of local market needs. Unlike traditional local SEO which focuses on Google Maps and local pack 
                rankings, local GEO ensures your business appears in AI-generated answers when users ask ChatGPT, Claude, 
                or Perplexity about local services. Businesses implementing local GEO report 50-80% increases in qualified 
                local leads and significant improvements in brand awareness within their service areas. The strategy is 
                particularly effective for service-based businesses (plumbing, HVAC, legal, medical) and local retailers 
                competing in specific geographic markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Topic Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Local Businesses Need GEO in 2025
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Local Search Revolution</h3>
              <p className="text-lg text-gray-700 mb-6">
                Traditional local SEO is no longer sufficient. With 64% of users under 35 preferring AI chatbots over 
                Google searches, local businesses must optimize for AI answer engines to reach younger customers.
              </p>

              {/* Image 1 */}
              <div className="my-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop"
                    alt="The local search revolution: why local businesses need GEO in 2025"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl mb-8">
                <h4 className="font-bold text-xl mb-4 text-gray-900">Local GEO Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>50-80% increase</strong> in qualified local leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Appear in AI responses</strong> when users ask about local services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Outrank competitors</strong> who rely solely on traditional SEO</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Reach younger demographics</strong> who use AI search exclusively</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Build local authority</strong> in your service area</span>
                  </li>
                </ul>
              </div>

              {/* Image 2 */}
              <div className="my-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop"
                    alt="Benefits of local GEO for businesses competing in specific geographic markets"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Local GEO Implementation Strategies
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Location-Specific Content Pages</h3>
                <p className="text-gray-700 mb-4">
                  Create dedicated pages for each city, neighborhood, or service area you serve. Include local context, 
                  landmarks, and community references that AI systems recognize.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Key Elements:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• City and neighborhood names in headings</li>
                    <li>• Local landmarks and references</li>
                    <li>• Service area descriptions</li>
                    <li>• Local case studies and testimonials</li>
                    <li>• Geographic entity optimization</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">2. LocalBusiness Schema Implementation</h3>
                <p className="text-gray-700 mb-4">
                  Add comprehensive LocalBusiness schema markup with complete NAP data, service areas, hours, and business 
                  information that AI systems can extract.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700">• Complete NAP (Name, Address, Phone) data</li>
                  <li className="text-gray-700">• Service area definitions</li>
                  <li className="text-gray-700">• Business hours and contact information</li>
                  <li className="text-gray-700">• Service offerings and specialties</li>
                  <li className="text-gray-700">• Reviews and ratings</li>
                </ul>
              </div>

              {/* Image 3 */}
              <div className="my-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&auto=format&fit=crop"
                    alt="Local GEO implementation strategies for city and service area optimization"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Local Case Studies and Testimonials</h3>
                <p className="text-gray-700 mb-4">
                  Publish location-specific case studies and client testimonials that mention neighborhoods, landmarks, 
                  and local context. This helps AI systems understand your local presence and expertise.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700">• Case studies with geographic specificity</li>
                  <li className="text-gray-700">• Client testimonials mentioning locations</li>
                  <li className="text-gray-700">• Local project examples</li>
                  <li className="text-gray-700">• Neighborhood-specific success stories</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">4. Optimize for Local AI Queries</h3>
                <p className="text-gray-700 mb-4">
                  Create content that answers common local AI queries like "best [service] in [city]", "nearest [service] 
                  to [neighborhood]", and "[service] near me".
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Query Types to Target:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• "best [service] in [city]"</li>
                    <li>• "[service] near [neighborhood]"</li>
                    <li>• "top [service] [city]"</li>
                    <li>• "affordable [service] [city]"</li>
                    <li>• "[service] [city] reviews"</li>
                  </ul>
                </div>
              </div>

              {/* Image 4 */}
              <div className="my-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
                    alt="Optimizing for local AI queries and building local authority"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How is local GEO different from local SEO?
                </h3>
                <p className="text-gray-700">
                  Local SEO focuses on ranking in Google Maps and local pack results, while local GEO focuses on appearing 
                  in AI-generated answers when users ask about local services. Local GEO ensures your business appears in 
                  ChatGPT, Claude, and Perplexity responses, not just traditional search results. Both strategies work 
                  together—local SEO for traditional search visibility and local GEO for AI search visibility.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How many location pages should I create?
                </h3>
                <p className="text-gray-700">
                  Create location pages for each city, neighborhood, or service area where you actively serve customers. 
                  Focus on areas with high demand and competition. Typically, 5-15 location pages provide good coverage 
                  for most local businesses. Quality and local relevance matter more than quantity—better to have 5 highly 
                  optimized location pages than 20 thin pages with minimal local context.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How long does it take to see results from local GEO?
                </h3>
                <p className="text-gray-700">
                  Initial results typically appear within 4-8 weeks as you create location-specific content and implement 
                  LocalBusiness schema. Significant improvements in AI visibility usually occur at 3-6 months as you build 
                  local authority. Full competitive advantage typically requires 6-12 months of consistent local GEO 
                  implementation and content development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is local GEO different from local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO focuses on ranking in Google Maps and local pack results, while local GEO focuses on appearing in AI-generated answers when users ask about local services. Both strategies work together for comprehensive local visibility."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from local GEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Initial results typically appear within 4-8 weeks. Significant improvements in AI visibility usually occur at 3-6 months. Full competitive advantage typically requires 6-12 months of consistent implementation."
                }
              }
            ]
          })
        }}
      />

      {/* AI Summary Compatibility */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              AI Summary Compatibility: Key Takeaways
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Core Strategies</h3>
                <ul className="space-y-2">
                  <li>• Location-specific content pages</li>
                  <li>• LocalBusiness schema markup</li>
                  <li>• Local case studies and testimonials</li>
                  <li>• Optimize for local AI queries</li>
                  <li>• Build local topical authority</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li>• 50-80% increase in local leads</li>
                  <li>• Appear in AI responses</li>
                  <li>• Outrank competitors</li>
                  <li>• Reach younger demographics</li>
                  <li>• Build local authority</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Local AI Search in Your City?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a comprehensive local GEO audit and strategic roadmap for outranking competitors in your service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8">
                  Get Your Local GEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

