import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
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
  Target
} from 'lucide-react'

interface CityPageProps {
  params: {
    city: string
  }
}

// City data mapping
const cityData: Record<string, { name: string; state: string; fullName: string }> = {
  'new-york-ny': { name: 'New York', state: 'NY', fullName: 'New York, NY' },
  'los-angeles-ca': { name: 'Los Angeles', state: 'CA', fullName: 'Los Angeles, CA' },
  'chicago-il': { name: 'Chicago', state: 'IL', fullName: 'Chicago, IL' },
  'houston-tx': { name: 'Houston', state: 'TX', fullName: 'Houston, TX' },
  'phoenix-az': { name: 'Phoenix', state: 'AZ', fullName: 'Phoenix, AZ' },
  'philadelphia-pa': { name: 'Philadelphia', state: 'PA', fullName: 'Philadelphia, PA' },
  'san-antonio-tx': { name: 'San Antonio', state: 'TX', fullName: 'San Antonio, TX' },
  'san-diego-ca': { name: 'San Diego', state: 'CA', fullName: 'San Diego, CA' },
  'dallas-tx': { name: 'Dallas', state: 'TX', fullName: 'Dallas, TX' },
  'san-jose-ca': { name: 'San Jose', state: 'CA', fullName: 'San Jose, CA' },
  'austin-tx': { name: 'Austin', state: 'TX', fullName: 'Austin, TX' },
  'jacksonville-fl': { name: 'Jacksonville', state: 'FL', fullName: 'Jacksonville, FL' },
  'fort-worth-tx': { name: 'Fort Worth', state: 'TX', fullName: 'Fort Worth, TX' },
  'columbus-oh': { name: 'Columbus', state: 'OH', fullName: 'Columbus, OH' },
  'indianapolis-in': { name: 'Indianapolis', state: 'IN', fullName: 'Indianapolis, IN' },
  'charlotte-nc': { name: 'Charlotte', state: 'NC', fullName: 'Charlotte, NC' },
  'san-francisco-ca': { name: 'San Francisco', state: 'CA', fullName: 'San Francisco, CA' },
  'seattle-wa': { name: 'Seattle', state: 'WA', fullName: 'Seattle, WA' },
  'denver-co': { name: 'Denver', state: 'CO', fullName: 'Denver, CO' },
  'washington-dc': { name: 'Washington', state: 'DC', fullName: 'Washington, D.C.' },
  'nashville-tn': { name: 'Nashville', state: 'TN', fullName: 'Nashville, TN' },
  'oklahoma-city-ok': { name: 'Oklahoma City', state: 'OK', fullName: 'Oklahoma City, OK' },
  'el-paso-tx': { name: 'El Paso', state: 'TX', fullName: 'El Paso, TX' },
  'boston-ma': { name: 'Boston', state: 'MA', fullName: 'Boston, MA' },
  'portland-or': { name: 'Portland', state: 'OR', fullName: 'Portland, OR' },
  'las-vegas-nv': { name: 'Las Vegas', state: 'NV', fullName: 'Las Vegas, NV' },
  'detroit-mi': { name: 'Detroit', state: 'MI', fullName: 'Detroit, MI' },
  'memphis-tn': { name: 'Memphis', state: 'TN', fullName: 'Memphis, TN' },
  'louisville-ky': { name: 'Louisville', state: 'KY', fullName: 'Louisville, KY' },
  'baltimore-md': { name: 'Baltimore', state: 'MD', fullName: 'Baltimore, MD' },
  'milwaukee-wi': { name: 'Milwaukee', state: 'WI', fullName: 'Milwaukee, WI' },
  'albuquerque-nm': { name: 'Albuquerque', state: 'NM', fullName: 'Albuquerque, NM' },
  'tucson-az': { name: 'Tucson', state: 'AZ', fullName: 'Tucson, AZ' },
  'fresno-ca': { name: 'Fresno', state: 'CA', fullName: 'Fresno, CA' },
  'sacramento-ca': { name: 'Sacramento', state: 'CA', fullName: 'Sacramento, CA' },
  'kansas-city-mo': { name: 'Kansas City', state: 'MO', fullName: 'Kansas City, MO' },
  'mesa-az': { name: 'Mesa', state: 'AZ', fullName: 'Mesa, AZ' }
}

// All 28 services
const allServices = [
  { slug: 'website-design', name: 'Website Design', category: 'Creative Solutions' },
  { slug: 'website-redesign', name: 'Website Redesign', category: 'Creative Solutions' },
  { slug: 'web-development', name: 'Web Development', category: 'Technical Solutions' },
  { slug: 'rapid-web-design', name: 'Rapid Web Design', category: 'Creative Solutions' },
  { slug: 'ui-ux-design', name: 'UI/UX Design', category: 'Creative Solutions' },
  { slug: 'ecommerce-design', name: 'E-commerce Design', category: 'Creative Solutions' },
  { slug: 'app-design-development', name: 'App Design & Development', category: 'Creative Solutions' },
  { slug: 'software-design-development', name: 'Software Design & Development', category: 'Technical Solutions' },
  { slug: 'software-development', name: 'Software Development', category: 'Technical Solutions' },
  { slug: 'shopify-development', name: 'Shopify Development', category: 'Technical Solutions' },
  { slug: 'wordpress-development', name: 'WordPress Development', category: 'Technical Solutions' },
  { slug: 'ai-consulting', name: 'AI Consulting', category: 'Intelligent Solutions' },
  { slug: 'ai-seo', name: 'AI SEO', category: 'Intelligent Solutions' },
  { slug: 'ai-digital-marketing', name: 'AI Digital Marketing', category: 'Intelligent Solutions' },
  { slug: 'ai-gpt-integration', name: 'AI GPT Integration', category: 'Intelligent Solutions' },
  { slug: 'ai-agent-development', name: 'AI Agent Development', category: 'Intelligent Solutions' },
  { slug: 'chatgpt-optimization', name: 'ChatGPT Optimization', category: 'Intelligent Solutions' },
  { slug: 'generative-engine-optimization', name: 'Generative Engine Optimization', category: 'Intelligent Solutions' },
  { slug: 'answer-engine-optimization', name: 'Answer Engine Optimization', category: 'Intelligent Solutions' },
  { slug: 'seo', name: 'SEO Services', category: 'Marketing Solutions' },
  { slug: 'local-seo', name: 'Local SEO', category: 'Marketing Solutions' },
  { slug: 'digital-marketing', name: 'Digital Marketing', category: 'Marketing Solutions' },
  { slug: 'email-marketing-design', name: 'Email Marketing Design', category: 'Marketing Solutions' },
  { slug: 'social-media-design', name: 'Social Media Design', category: 'Marketing Solutions' },
  { slug: 'cro-ecommerce', name: 'CRO E-commerce', category: 'Conversion Optimization' },
  { slug: 'cro-lead-generation', name: 'CRO Lead Generation', category: 'Conversion Optimization' },
  { slug: 'enterprise-geo-services', name: 'Enterprise GEO Services', category: 'Intelligent Solutions' }
]

// Group services by category
const servicesByCategory = allServices.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = []
  }
  acc[service.category].push(service)
  return acc
}, {} as Record<string, typeof allServices>)

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = cityData[params.city]
  if (!city) return { title: 'City Not Found' }

  return {
    title: `Web Vello in ${city.fullName} | Web Design, SEO, & AI Growth`,
    description: `Partner with Web Vello in ${city.fullName} for high-converting web design, SEO, and AI-powered marketing programs that help ${city.name} businesses scale revenue.`,
    keywords: `web design ${city.name}, seo agency ${city.name}, digital marketing ${city.state}, AI marketing ${city.name}, Web Vello ${city.fullName}`,
    openGraph: {
      title: `Web Vello | Digital Growth Partner in ${city.fullName}`,
      description: `Full-funnel web design and SEO agency serving ${city.fullName}. Schedule a strategy session with Web Vello to accelerate growth.`,
      url: `https://webvello.com/${params.city}`,
      siteName: 'Web Vello',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `https://webvello.com/og-${city.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          width: 1200,
          height: 630,
          alt: `Web Vello Digital Growth Partner in ${city.fullName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Web Vello | Digital Growth Partner in ${city.fullName}`,
      description: `Full-funnel web design and SEO agency serving ${city.fullName}. Schedule a strategy session with Web Vello to accelerate growth.`,
      images: [`https://webvello.com/og-${city.name.toLowerCase().replace(/\s+/g, '-')}.jpg`],
    },
    alternates: {
      canonical: `https://webvello.com/${params.city}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = cityData[params.city]
  
  if (!city) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-gray-600 mb-8">The requested city page could not be found.</p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-5xl font-bold text-gray-900">
              Professional Services in {city.fullName}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover expert business solutions tailored for {city.name} businesses. From cutting-edge AI consulting to professional web development, we help companies in {city.name} thrive in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Local Expertise
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Proven Results
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Custom Solutions
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Business Solutions for {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive services across all major business areas, helping {city.name} companies establish a strong digital presence and drive growth.
            </p>
          </div>

          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h4>
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Professional {service.name.toLowerCase()} services tailored for {city.name} businesses.
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <a href={`/${params.city}/${service.slug}`}>
                        Learn More
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why {city.name} Businesses Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges and opportunities that businesses in {city.name} face, and we deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of {city.name} business landscape</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of success with {city.name} businesses</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous standards and ongoing support</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times for urgent projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our professional services can help your {city.name} business reach new heights. Get started with a free consultation today.
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
