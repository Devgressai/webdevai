import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { ArrowRight, Zap, Globe, Code, Users, BarChart3, TrendingUp, Target, Brain, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | GEO, AI SEO, Web Development | Web Vello',
  description: 'Comprehensive digital marketing services including GEO (Generative Engine Optimization), AI-powered SEO, web development, and more. Get found in ChatGPT, Perplexity, and Google SGE.',
  keywords: 'digital marketing services, GEO services, generative engine optimization, AI SEO services, web development services, local SEO, ChatGPT optimization, Perplexity optimization',
  openGraph: {
    title: 'Digital Marketing Services | Web Vello',
    description: 'Comprehensive digital marketing services including AI-powered SEO, web development, and more. Drive 300%+ traffic growth with proven strategies.',
    url: 'https://webvello.com/services',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Web Vello',
    description: 'Comprehensive digital marketing services including AI-powered SEO, web development, and more.',
    images: ['https://webvello.com/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/services',
  },
}

const services = [
  {
    name: "GEO (Generative Engine Optimization)",
    description: "Get found in AI search results. Optimize for ChatGPT, Perplexity, Claude, and Google SGE. The future of search is AI—be visible where your customers are looking.",
    icon: Brain,
    href: "/services/geo-services",
    features: ["AI content optimization", "Schema markup", "Entity optimization", "Topical authority"],
    benefits: ["AI search visibility", "ChatGPT mentions", "Perplexity citations", "Future-proof SEO"],
    featured: true
  },
  {
    name: "AI-Powered SEO",
    description: "Leverage artificial intelligence to identify opportunities and optimize your content strategy for maximum search visibility.",
    icon: Zap,
    href: "/services/ai-seo",
    features: ["AI keyword research", "Content optimization", "Performance tracking", "Competitive analysis"],
    benefits: ["Faster results", "Data-driven insights", "Scalable optimization", "Competitive advantage"]
  },
  {
    name: "Local SEO",
    description: "Dominate local search results and drive foot traffic to your physical locations with targeted local SEO strategies.",
    icon: Globe,
    href: "/services/local-seo",
    features: ["Google My Business", "Local citations", "Review management", "Local content"],
    benefits: ["Local visibility", "Foot traffic increase", "Review generation", "Local authority"]
  },
  {
    name: "Web Development",
    description: "Custom websites and applications built for conversions, speed, and search engine optimization.",
    icon: Code,
    href: "/services/web-development",
    features: ["Custom development", "SEO optimization", "Performance focused", "Mobile responsive"],
    benefits: ["Higher conversions", "Better user experience", "Faster loading", "Mobile-first design"]
  },
  {
    name: "UI/UX Design",
    description: "User-centered design that improves engagement, conversions, and overall user experience.",
    icon: Users,
    href: "/services/ui-ux-design",
    features: ["User research", "Wireframing", "Prototyping", "Usability testing"],
    benefits: ["Improved engagement", "Higher conversions", "Better usability", "Reduced bounce rate"]
  },
  {
    name: "Traditional SEO",
    description: "Comprehensive search engine optimization using proven strategies and best practices.",
    icon: BarChart3,
    href: "/services/seo",
    features: ["Technical SEO", "On-page optimization", "Link building", "Content strategy"],
    benefits: ["Organic growth", "Long-term results", "Cost-effective", "Sustainable traffic"]
  },
  {
    name: "Software Development",
    description: "Custom software solutions that streamline operations and improve business efficiency.",
    icon: TrendingUp,
    href: "/services/software-development",
    features: ["Custom applications", "API development", "Database design", "System integration"],
    benefits: ["Process automation", "Efficiency gains", "Cost reduction", "Competitive edge"]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('page', { title: 'Services' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Digital Marketing Services That{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              From AI-powered SEO to custom web development, we provide comprehensive digital 
              marketing solutions that help businesses grow and succeed online. We don’t just 
              offer services—we deliver results that transform your business and dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Service Portfolio
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Choose the services that align with your business goals and growth objectives. 
              Each service is designed to deliver measurable results and give you a competitive 
              advantage in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift border border-secondary-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-secondary-900">
                  {service.name}
                </h3>
                
                <p className="mt-4 text-secondary-600">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">What’s Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-secondary-600">
                        <Target className="mr-2 h-4 w-4 text-primary-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-secondary-600">
                        <TrendingUp className="mr-2 h-4 w-4 text-primary-600 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Serving Major Markets Across the US
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We provide our comprehensive digital marketing services to businesses in key metropolitan areas. 
              Find services tailored specifically for your city and local market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              { city: 'New York, NY', slug: 'new-york-ny', population: '8.8M', industries: ['Finance', 'Technology', 'Media'] },
              { city: 'Los Angeles, CA', slug: 'los-angeles-ca', population: '4M', industries: ['Entertainment', 'Technology', 'Fashion'] },
              { city: 'Chicago, IL', slug: 'chicago-il', population: '2.7M', industries: ['Finance', 'Manufacturing', 'Transportation'] },
              { city: 'Houston, TX', slug: 'houston-tx', population: '2.3M', industries: ['Energy', 'Healthcare', 'Aerospace'] },
              { city: 'Phoenix, AZ', slug: 'phoenix-az', population: '1.6M', industries: ['Technology', 'Healthcare', 'Tourism'] },
              { city: 'Philadelphia, PA', slug: 'philadelphia-pa', population: '1.6M', industries: ['Healthcare', 'Education', 'Finance'] },
              { city: 'San Antonio, TX', slug: 'san-antonio-tx', population: '1.5M', industries: ['Healthcare', 'Military', 'Tourism'] },
              { city: 'San Diego, CA', slug: 'san-diego-ca', population: '1.4M', industries: ['Biotechnology', 'Tourism', 'Military'] },
              { city: 'Dallas, TX', slug: 'dallas-tx', population: '1.3M', industries: ['Finance', 'Technology', 'Transportation'] },
              { city: 'San Jose, CA', slug: 'san-jose-ca', population: '1M', industries: ['Technology', 'Manufacturing', 'Finance'] },
              { city: 'Austin, TX', slug: 'austin-tx', population: '978K', industries: ['Technology', 'Education', 'Government'] },
              { city: 'Jacksonville, FL', slug: 'jacksonville-fl', population: '949K', industries: ['Logistics', 'Healthcare', 'Finance'] },
              { city: 'Fort Worth, TX', slug: 'fort-worth-tx', population: '918K', industries: ['Aerospace', 'Energy', 'Transportation'] },
              { city: 'Columbus, OH', slug: 'columbus-oh', population: '898K', industries: ['Education', 'Healthcare', 'Technology'] },
              { city: 'Indianapolis, IN', slug: 'indianapolis-in', population: '887K', industries: ['Manufacturing', 'Sports', 'Healthcare'] },
              { city: 'Charlotte, NC', slug: 'charlotte-nc', population: '885K', industries: ['Finance', 'Energy', 'Technology'] },
              { city: 'San Francisco, CA', slug: 'san-francisco-ca', population: '873K', industries: ['Technology', 'Finance', 'Tourism'] },
              { city: 'Seattle, WA', slug: 'seattle-wa', population: '744K', industries: ['Technology', 'Aerospace', 'Tourism'] },
              { city: 'Denver, CO', slug: 'denver-co', population: '727K', industries: ['Energy', 'Technology', 'Tourism'] },
              { city: 'Washington, DC', slug: 'washington-dc', population: '689K', industries: ['Government', 'Technology', 'Education'] },
              { city: 'Nashville, TN', slug: 'nashville-tn', population: '689K', industries: ['Healthcare', 'Music', 'Tourism'] },
              { city: 'Oklahoma City, OK', slug: 'oklahoma-city-ok', population: '681K', industries: ['Energy', 'Aerospace', 'Healthcare'] },
              { city: 'El Paso, TX', slug: 'el-paso-tx', population: '678K', industries: ['Manufacturing', 'Healthcare', 'Military'] },
              { city: 'Boston, MA', slug: 'boston-ma', population: '675K', industries: ['Education', 'Healthcare', 'Technology'] },
              { city: 'Portland, OR', slug: 'portland-or', population: '652K', industries: ['Technology', 'Manufacturing', 'Tourism'] },
              { city: 'Las Vegas, NV', slug: 'las-vegas-nv', population: '651K', industries: ['Tourism', 'Entertainment', 'Hospitality'] },
              { city: 'Detroit, MI', slug: 'detroit-mi', population: '674K', industries: ['Automotive', 'Manufacturing', 'Technology'] },
              { city: 'Memphis, TN', slug: 'memphis-tn', population: '633K', industries: ['Logistics', 'Healthcare', 'Manufacturing'] },
              { city: 'Louisville, KY', slug: 'louisville-ky', population: '633K', industries: ['Manufacturing', 'Healthcare', 'Logistics'] },
              { city: 'Baltimore, MD', slug: 'baltimore-md', population: '585K', industries: ['Healthcare', 'Education', 'Manufacturing'] },
              { city: 'Milwaukee, WI', slug: 'milwaukee-wi', population: '590K', industries: ['Manufacturing', 'Healthcare', 'Finance'] },
              { city: 'Albuquerque, NM', slug: 'albuquerque-nm', population: '564K', industries: ['Technology', 'Healthcare', 'Education'] },
              { city: 'Tucson, AZ', slug: 'tucson-az', population: '542K', industries: ['Education', 'Healthcare', 'Technology'] },
              { city: 'Fresno, CA', slug: 'fresno-ca', population: '542K', industries: ['Agriculture', 'Healthcare', 'Education'] },
              { city: 'Sacramento, CA', slug: 'sacramento-ca', population: '513K', industries: ['Government', 'Healthcare', 'Education'] },
              { city: 'Kansas City, MO', slug: 'kansas-city-mo', population: '508K', industries: ['Logistics', 'Manufacturing', 'Healthcare'] },
              { city: 'Mesa, AZ', slug: 'mesa-az', population: '504K', industries: ['Technology', 'Healthcare', 'Manufacturing'] }
            ].map((location) => (
              <div
                key={location.slug}
                className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5 hover-lift border border-secondary-100 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {location.city}
                </h3>
                
                <p className="text-sm text-secondary-600 mb-3">
                  Population: {location.population}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-secondary-500 mb-2">Key Industries:</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {location.industries.map((industry) => (
                      <span key={industry} className="inline-block px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/${location.slug}`}>
                    View Services
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              Don’t see your city? We can still help! Our services are available nationwide.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
                      <p className="text-xl text-primary-100 mb-8">
              Let’s discuss your goals and create a custom strategy that drives real results. 
              Your competitors are already working on their digital presence—don’t let them 
              capture your market share while you wait.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Strategy Session</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
