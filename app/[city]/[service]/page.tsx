import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '../../../components/ui/button'
import { getSeoDirectives } from '../../../lib/seo/index-policy'
import { 
  getLocalDataCard, 
  StubLocalDataProvider,
  getProofSlot,
  StubProofProvider
} from '../../../lib/blocks'
import { Breadcrumbs, generateCityServiceBreadcrumbs } from '../../../components/seo/breadcrumbs'
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Code,
  Smartphone,
  Brain,
  Search,
  Lightbulb,
  Filter,
  Cog,
  Rocket,
  Database,
  Network,
  Bot,
  Cpu,
  ShoppingCart,
  Share2
} from 'lucide-react'
import { cityData, cityDataSlugs } from '../../../lib/data/city-data'
import { serviceData, serviceDataSlugs } from '../../../lib/data/service-data'
import type { LucideIcon } from 'lucide-react'

// Tier 1 services (always indexable for city+service combinations)
// Must match IndexPolicy TIER1_SERVICES and sitemap.ts keyServices
const TIER1_SERVICES = [
  'website-design',
  'web-development',
  'seo',
  'local-seo',
  'digital-marketing',
  'ai-seo',
  'ai-consulting',
  'ui-ux-design'
]

interface CityServicePageProps {
  params: {
    city: string
    service: string
  }
}

// Service pillar mapping and secondary rotation
const servicePillarMap: Record<string, { 
  pillar: string; 
  pillarName: string; 
  secondaryPillar: string; 
  secondaryName: string;
}> = {
  'ai-seo': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI-powered SEO',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'answer engine optimization'
  },
  'ai-consulting': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI SEO',
    secondaryPillar: '/services/web-development',
    secondaryName: 'modern web development'
  },
  'ai-digital-marketing': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI SEO',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'AEO services'
  },
  'ai-gpt-integration': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI SEO',
    secondaryPillar: '/services/web-development',
    secondaryName: 'web development'
  },
  'ai-agent-development': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI SEO',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'AEO'
  },
  'answer-engine-optimization': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'answer engine optimization',
    secondaryPillar: '/services/web-development',
    secondaryName: 'web development services'
  },
  'chatgpt-optimization': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'AEO',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI-powered SEO'
  },
  'generative-engine-optimization': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'answer engine optimization',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI SEO'
  },
  'seo': { 
    pillar: '/services/seo', 
    pillarName: 'SEO services',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI-powered SEO'
  },
  'local-seo': { 
    pillar: '/services/seo', 
    pillarName: 'search engine optimization',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'answer engine optimization'
  },
  'digital-marketing': { 
    pillar: '/services/seo', 
    pillarName: 'SEO',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI SEO strategies'
  },
  'web-development': { 
    pillar: '/services/web-development', 
    pillarName: 'web development',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'UI/UX design'
  },
  'website-design': { 
    pillar: '/services/web-development', 
    pillarName: 'web development services',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'conversion-focused design'
  },
  'website-redesign': { 
    pillar: '/services/web-development', 
    pillarName: 'modern web development',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO optimization'
  },
  'rapid-web-design': { 
    pillar: '/services/web-development', 
    pillarName: 'web development',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'user experience design'
  },
  'shopify-development': { 
    pillar: '/services/web-development', 
    pillarName: 'web development',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO services'
  },
  'wordpress-development': { 
    pillar: '/services/web-development', 
    pillarName: 'web development',
    secondaryPillar: '/services/seo',
    secondaryName: 'search engine optimization'
  },
  'software-development': { 
    pillar: '/services/web-development', 
    pillarName: 'web development',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI-powered optimization'
  },
  'software-design-development': { 
    pillar: '/services/web-development', 
    pillarName: 'web development services',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'UI/UX design'
  },
  'ui-ux-design': { 
    pillar: '/services/ui-ux-design', 
    pillarName: 'UI/UX design',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'answer engine optimization'
  },
  'ecommerce-design': { 
    pillar: '/services/ui-ux-design', 
    pillarName: 'user experience design',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO services'
  },
  'app-design-development': { 
    pillar: '/services/ui-ux-design', 
    pillarName: 'UI/UX design services',
    secondaryPillar: '/services/web-development',
    secondaryName: 'web development'
  },
  'cro-ecommerce': { 
    pillar: '/services/ui-ux-design', 
    pillarName: 'conversion-focused design',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO optimization'
  },
  'cro-lead-generation': { 
    pillar: '/services/ui-ux-design', 
    pillarName: 'conversion optimization',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI SEO'
  },
  'email-marketing-design': { 
    pillar: '/services/seo', 
    pillarName: 'digital marketing',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'modern UI design'
  },
  'social-media-design': { 
    pillar: '/services/seo', 
    pillarName: 'digital marketing',
    secondaryPillar: '/services/ui-ux-design',
    secondaryName: 'responsive design'
  },
  'enterprise-geo-services': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'answer engine optimization',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI-powered SEO'
  },
  'content-marketing': { 
    pillar: '/services/seo', 
    pillarName: 'SEO',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI content optimization'
  },
  'core-web-vitals-optimization': { 
    pillar: '/services/seo', 
    pillarName: 'technical SEO',
    secondaryPillar: '/services/web-development',
    secondaryName: 'web development'
  },
  'programmatic-seo': { 
    pillar: '/services/ai-seo', 
    pillarName: 'AI SEO',
    secondaryPillar: '/services/seo',
    secondaryName: 'traditional SEO'
  },
  'schema-markup-services': { 
    pillar: '/services/seo', 
    pillarName: 'technical SEO',
    secondaryPillar: '/services/answer-engine-optimization',
    secondaryName: 'answer engine optimization'
  },
  'voice-search-optimization': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'voice search optimization',
    secondaryPillar: '/services/ai-seo',
    secondaryName: 'AI SEO'
  },
  'zero-click-search-optimization': { 
    pillar: '/services/answer-engine-optimization', 
    pillarName: 'answer engine optimization',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO services'
  }
}

// Icon map for services (data lives in lib/data/service-data)
const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  'website-design': Code, 'web-development': Code, 'website-redesign': Code, 'rapid-web-design': Zap,
  'software-design-development': Code, 'software-development': Code, 'shopify-development': ShoppingCart,
  'wordpress-development': Code, 'ui-ux-design': Smartphone, 'ecommerce-design': ShoppingCart,
  'app-design-development': Smartphone, 'ai-consulting': Brain, 'ai-seo': Brain, 'ai-digital-marketing': Brain,
  'ai-gpt-integration': Bot, 'ai-agent-development': Bot, 'chatgpt-optimization': Bot,
  'generative-engine-optimization': BarChart3, 'answer-engine-optimization': Search, 'seo': Search,
  'local-seo': MapPin, 'digital-marketing': TrendingUp, 'email-marketing-design': Mail,
  'social-media-design': Share2, 'cro-ecommerce': TrendingUp, 'cro-lead-generation': Target,
  'enterprise-geo-services': BarChart3,
}

// Generate static params for city+service (Tier 1 services only)
// Matches sitemap inclusion: only Tier 1 services are included in sitemap
// Non-Tier 1 services are still accessible but not pre-rendered
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  for (const city of cityDataSlugs) {
    for (const service of TIER1_SERVICES) {
      params.push({ city, service })
    }
  }
  return params
}

// Allow non-Tier1 services to render (they will be noindex via governance)
// Governance system handles noindex for non-Tier1 services in generateMetadata
export const dynamicParams = true

// Generate metadata for the page
export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) return { title: 'Page Not Found' }

  // GOVERNANCE: Fetch required uniqueness blocks for programmatic quality gates
  // Using Stub providers - in production, replace with configured providers (LocalJson, CMS, etc.)
  // If blocks are missing/invalid, getSeoDirectives() will return noindex
  const localDataProvider = new StubLocalDataProvider()
  const proofProvider = new StubProofProvider()

  // Fetch blocks (errors are handled gracefully - returns null data with invalid validation)
  const localDataResult = await getLocalDataCard(
    { city: params.city, state: city.state, service: params.service },
    localDataProvider
  ).catch(() => ({ data: null, validation: { valid: false, errors: [] }, fromCache: false }))

  const proofResult = await getProofSlot(
    { city: params.city, service: params.service },
    proofProvider
  ).catch(() => ({ data: null, validation: { valid: false, errors: [] }, fromCache: false }))

  // GOVERNANCE: Get SEO directives with blocks - single source of truth for index/robots/canonical
  // No silent fallback to index=true - governance system controls all indexing decisions
  const url = `https://www.webvello.com/${params.city}/${params.service}`
  const directives = getSeoDirectives(url, {
    routeType: 'city-service',
    city: params.city,
    service: params.service,
    blocks: {
      LOCAL_DATA_CARD: localDataResult.data || undefined,
      PROOF_SLOT: proofResult.data || undefined
    }
  })

  return {
    title: `${service.name} in ${city.fullName} | Professional ${service.name} Services`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.fullName}. ${service.shortDesc} tailored for ${city.name} businesses. Get expert solutions and local expertise.`,
    keywords: `${service.name.toLowerCase()}, ${city.name}, ${city.state}, business services, professional services, ${service.category.toLowerCase()}`,
    alternates: { canonical: directives.canonical },
    // GOVERNANCE: Robots meta from directives - ensures conditional indexing is fully governed
    robots: {
      index: directives.index,
      follow: directives.follow
    },
    openGraph: {
      title: `${service.name} in ${city.fullName} | Web Vello`,
      description: `Professional ${service.name.toLowerCase()} services in ${city.fullName} - Expert solutions for local businesses.`,
      url: directives.canonical,
      siteName: 'Web Vello',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `https://www.webvello.com/og-${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.fullName} - Web Vello`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${city.fullName} | Web Vello`,
      description: `Professional ${service.name.toLowerCase()} services in ${city.fullName} - Expert solutions for local businesses.`,
      images: [`https://www.webvello.com/og-${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`],
    },
  }
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const city = cityData[params.city]
  const service = serviceData[params.service]
  
  if (!city || !service) notFound()

  const ServiceIcon = SERVICE_ICON_MAP[params.service] ?? Code
  const pillarInfo = servicePillarMap[params.service] || {
    pillar: '/services/web-development',
    pillarName: 'web development',
    secondaryPillar: '/services/seo',
    secondaryName: 'SEO services'
  }

  const breadcrumbs = generateCityServiceBreadcrumbs(params.city, params.service)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-4 mr-4">
              <ServiceIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              {service.name} in {city.fullName}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Professional {service.name.toLowerCase()} services tailored for {city.name} businesses. {service.longDesc} with local expertise and proven results.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our{' '}
            <Link href={pillarInfo.pillar} className="text-blue-600 hover:text-blue-700 underline">
              {pillarInfo.pillarName}
            </Link>
            {' '}services combine local expertise with{' '}
            <Link href={pillarInfo.secondaryPillar} className="text-blue-600 hover:text-blue-700 underline">
              {pillarInfo.secondaryName}
            </Link>
            {' '}for maximum impact.{' '}
            <Link href={`/${params.city}`} className="text-blue-600 hover:text-blue-700 underline">
              View all {city.name} services
            </Link>
            {' '}or{' '}
            <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
              explore our complete solutions
            </Link>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-blue-500 mr-2" />
              Serving {city.name} Area
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Local Expertise
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              Proven Results
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3"
            asChild
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services in {city.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {city.name} businesses face unique challenges and opportunities in today’s competitive market. Our {service.name.toLowerCase()} services are specifically designed to address these local needs while leveraging global best practices.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a population of {city.population} and thriving industries including {city.industries.slice(0, 3).join(', ')}, and more, {city.name} offers incredible potential for businesses ready to establish a strong digital presence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Why Choose Our {service.name} Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Market Knowledge</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of {city.name} business landscape</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Track record of success with {city.name} businesses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">Rigorous standards and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven {service.name} Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results for every {city.name} business we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 && 'Understanding your business needs and objectives'}
                  {index === 1 && 'Creating detailed plans and strategies'}
                  {index === 2 && 'Implementing solutions with quality assurance'}
                  {index === 3 && 'Ensuring long-term success and optimization'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our {service.name.toLowerCase()} services are designed to meet the unique needs of various industries in the {city.name} market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry}</h3>
                <p className="text-gray-600 text-sm">
                  Specialized {service.name.toLowerCase()} solutions for {industry.toLowerCase()} businesses in {city.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our {service.name.toLowerCase()} services in {city.name}.
            </p>
          </div>
          
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started with {service.name} in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing number of {city.name} businesses that trust us with their {service.name.toLowerCase()} needs. Let’s discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              asChild
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              asChild
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
