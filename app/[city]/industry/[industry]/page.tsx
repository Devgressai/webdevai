import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../../components/ui/button'
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin,
  Building2,
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  BarChart3,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react'
import { getCity, citySlugs } from '../../../../lib/cities'
import { getIndustry, industrySlugs } from '../../../../lib/industries'
import { SchemaMarkup } from '../../../../components/seo/schema-markup'
import { generateCityIndustryContent, generateIndustryInsights } from '../../../../lib/city-industry-content'

interface CityIndustryPageProps {
  params: {
    city: string
    industry: string
  }
}

// Generate static paths for all city-industry combinations
export async function generateStaticParams() {
  const params: { city: string; industry: string }[] = []
  
  for (const city of citySlugs) {
    for (const industry of industrySlugs) {
      params.push({ city, industry })
    }
  }
  
  return params
}

export const dynamicParams = false
export const revalidate = 86400 // 24 hours ISR

// Core services available for all industries
const coreServices = [
  { 
    slug: 'website-design', 
    name: 'Website Design',
    description: 'High-converting, industry-specific website design that turns visitors into customers',
    icon: '🎨',
    features: ['Conversion-Optimized', 'Mobile-First', 'Brand-Focused', 'User-Centered']
  },
  { 
    slug: 'web-development', 
    name: 'Web Development',
    description: 'Custom web solutions built with modern technology and best practices',
    icon: '💻',
    features: ['Scalable Architecture', 'API Integration', 'Performance-Optimized', 'Secure']
  },
  { 
    slug: 'seo', 
    name: 'SEO Services',
    description: 'Data-driven SEO strategies that dominate local and national search results',
    icon: '🔍',
    features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Technical SEO']
  }
]

export async function generateMetadata({ params }: CityIndustryPageProps): Promise<Metadata> {
  const city = getCity(params.city)
  const industry = getIndustry(params.industry)
  
  if (!city || !industry) return { title: 'Page Not Found' }

  const title = `${industry.name} Digital Marketing & Web Design in ${city.fullName} | Web Vello`
  const description = `Leading digital agency for ${industry.name.toLowerCase()} businesses in ${city.fullName}. Custom web design, SEO, and development solutions that drive measurable growth. 3x ROI guaranteed.`

  return {
    title,
    description,
    keywords: [
      `${industry.name} digital marketing ${city.name}`,
      `${industry.name} web design ${city.fullName}`,
      `${industry.name} SEO services ${city.state}`,
      `${industry.name} website development ${city.name}`,
      `best ${industry.name.toLowerCase()} agency ${city.fullName}`,
      `${industry.name.toLowerCase()} companies ${city.name}`,
      `digital transformation ${industry.name} ${city.state}`
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `https://webvello.com/${params.city}/industry/${params.industry}`,
      siteName: 'Web Vello',
      locale: 'en_US',
      type: 'website',
      images: [{
        url: `https://webvello.com/og-industry-${params.industry}.jpg`,
        width: 1200,
        height: 630,
        alt: `${industry.name} Digital Services in ${city.fullName}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://webvello.com/${params.city}/industry/${params.industry}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
}

export default function CityIndustryPage({ params }: CityIndustryPageProps) {
  const city = getCity(params.city)
  const industry = getIndustry(params.industry)
  
  if (!city || !industry) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The requested page could not be found.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Generate dynamic content
  const contentSections = generateCityIndustryContent(
    city.name,
    city.fullName,
    city.state,
    industry.name,
    params.industry
  )
  const insights = generateIndustryInsights(params.industry, city.name)

  // Extensive Schema Markup
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Web Vello',
    'url': 'https://webvello.com',
    'logo': 'https://webvello.com/logo.png',
    'description': `Leading digital agency specializing in ${industry.name.toLowerCase()} businesses`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': city.name,
      'addressRegion': city.state,
      'addressCountry': 'US'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Sales',
      'areaServed': city.fullName,
      'availableLanguage': 'English'
    },
    'sameAs': [
      'https://www.facebook.com/webvello',
      'https://twitter.com/webvello',
      'https://www.linkedin.com/company/webvello'
    ]
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': `${industry.name} Digital Marketing Services`,
    'provider': {
      '@type': 'Organization',
      'name': 'Web Vello',
      'url': 'https://webvello.com'
    },
    'areaServed': {
      '@type': 'City',
      'name': city.name,
      '@id': `https://www.wikidata.org/wiki/${city.name.replace(' ', '_')}`
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${industry.name} Services`,
      'itemListElement': coreServices.map((service, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description
        }
      }))
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://webvello.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Locations',
        'item': 'https://webvello.com/locations'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': city.fullName,
        'item': `https://webvello.com/${params.city}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': industry.name,
        'item': `https://webvello.com/${params.city}/industry/${params.industry}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What digital services do you offer for ${industry.name.toLowerCase()} companies in ${city.fullName}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `We offer comprehensive digital services for ${industry.name.toLowerCase()} businesses in ${city.fullName}, including custom website design and development, search engine optimization (SEO), digital marketing, and AI-powered growth strategies. Each service is tailored specifically for the ${industry.name.toLowerCase()} sector with industry-specific best practices and proven frameworks.`
        }
      },
      {
        '@type': 'Question',
        'name': `How long does it take to see results from SEO for ${industry.name.toLowerCase()} businesses?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Most ${industry.name.toLowerCase()} companies in ${city.name} see initial improvements within 30-60 days, including better site performance and increased search visibility. Significant traffic growth typically manifests in months 3-6, with compounding growth continuing through month 12 and beyond. Our ${industry.name.toLowerCase()} clients average 287% increase in organic traffic within the first year.`
        }
      },
      {
        '@type': 'Question',
        'name': `What makes Web Vello different from other digital agencies in ${city.name}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `We specialize exclusively in ${industry.name.toLowerCase()} businesses, giving us deep industry expertise that generic agencies lack. Our team understands the unique challenges, regulations, and customer behaviors specific to the ${industry.name.toLowerCase()} sector in ${city.fullName}. We focus on revenue metrics, not vanity metrics, with performance-based compensation that aligns our success with yours.`
        }
      },
      {
        '@type': 'Question',
        'name': `How much should ${industry.name.toLowerCase()} companies invest in digital marketing?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Industry benchmarks suggest ${industry.name.toLowerCase()} companies should allocate 7-12% of revenue to marketing, with 60-70% focused on digital channels. However, the optimal budget depends on your growth goals, market position, and competitive landscape in ${city.fullName}. We help determine the right investment level during our free strategy session.`
        }
      },
      {
        '@type': 'Question',
        'name': `Do you only work with ${industry.name.toLowerCase()} companies in ${city.fullName}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `While we have extensive experience in the ${city.fullName} market, we work with ${industry.name.toLowerCase()} businesses across ${city.state} and nationally. Our strategies are customized for each market while leveraging proven best practices from hundreds of successful ${industry.name.toLowerCase()} projects.`
        }
      }
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': `Web Vello - ${industry.name} Digital Agency`,
    'description': `Specialized digital marketing and web development for ${industry.name.toLowerCase()} businesses in ${city.fullName}`,
    'url': `https://webvello.com/${params.city}/industry/${params.industry}`,
    'telephone': '+1-888-555-VELLO',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': city.name,
      'addressRegion': city.state,
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '0',
      'longitude': '0'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '127'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <SchemaMarkup schema={organizationSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={localBusinessSchema} />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white mb-12">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="h-12 w-12 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {industry.name} Digital Marketing in {city.fullName}
              </h1>
            </div>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your {industry.name.toLowerCase()} business with data-driven digital strategies designed for the {city.fullName} market. Increase revenue, reduce costs, and dominate your competition.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-12">
              <div className="flex items-center bg-blue-500/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <Star className="h-5 w-5 mr-2 text-yellow-300" />
                4.9/5 Rating (127 Reviews)
              </div>
              <div className="flex items-center bg-blue-500/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <TrendingUp className="h-5 w-5 mr-2" />
                287% Avg. Traffic Growth
              </div>
              <div className="flex items-center bg-blue-500/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <Award className="h-5 w-5 mr-2" />
                {industry.name} Specialists
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg" asChild>
                <Link href="/contact">Get Free Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {contentSections.map((section, idx) => (
          <section key={idx} className={`mb-20 ${idx > 0 ? 'border-t border-gray-200 pt-16' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{section.title}</h2>
            <div className="prose prose-lg max-w-none">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Services for {industry.name} Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is tailored specifically for {industry.name.toLowerCase()} businesses in {city.fullName}, combining industry best practices with local market expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border-t-4 border-blue-600"
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-6"
                >
                  <Link href={`/${params.city}/industry/${params.industry}/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {industry.name} Industry Insights for {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Key Challenges</h3>
              </div>
              <ul className="space-y-4">
                {insights.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-600 mr-3 font-bold">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Rocket className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Growth Opportunities</h3>
              </div>
              <ul className="space-y-4">
                {insights.opportunities.map((opportunity, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trends */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Current Trends</h3>
              </div>
              <ul className="space-y-4">
                {insights.trends.map((trend, idx) => (
                  <li key={idx} className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{trend}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Key Statistics</h3>
              </div>
              <ul className="space-y-4">
                {insights.statistics.map((stat, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold text-xl">▸</span>
                    <span className="text-gray-700">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why {city.name} {industry.name} Companies Choose Web Vello
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results through industry expertise, local market knowledge, and proven digital strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name} Expertise</h3>
              <p className="text-gray-600">Deep understanding of {industry.name.toLowerCase()} sector dynamics, regulations, and customer behaviors</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Market Intel</h3>
              <p className="text-gray-600">Extensive experience in the {city.fullName} market with proven strategies</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">287% average traffic growth and 4.2x ROI for {industry.name.toLowerCase()} clients</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Free Guarantee</h3>
              <p className="text-gray-600">Performance-based compensation aligned with your success metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Dominate the {city.name} {industry.name} Market?
          </h2>
          <p className="text-2xl text-blue-100 mb-10 leading-relaxed">
            Schedule a free 45-minute strategy session. We'll audit your current digital presence, benchmark against competitors, and show you exactly how to capture more market share in {city.fullName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-8 text-xl font-semibold"
              asChild
            >
              <Link href="/contact">
                <Rocket className="mr-3 h-6 w-6" />
                Get Free Strategy Session
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-8 text-xl"
              asChild
            >
              <Link href={`/${params.city}`}>
                Explore All {city.name} Services
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 text-sm">
            ✓ No obligation  •  ✓ Free competitive analysis  •  ✓ Custom growth roadmap
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <Link href="/" className="hover:text-blue-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Home</span>
              <meta itemProp="position" content="1" />
            </Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-blue-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Locations</span>
              <meta itemProp="position" content="2" />
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${params.city}`} className="hover:text-blue-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{city.name}</span>
              <meta itemProp="position" content="3" />
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{industry.name}</span>
              <meta itemProp="position" content="4" />
            </span>
          </nav>
        </div>
      </section>
    </div>
  )
}
