import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowLeft, Globe, Users, TrendingUp } from 'lucide-react'
import { cities as cityMap } from '../../lib/cities'
import { Button } from '../../components/ui/button'

export const metadata: Metadata = {
  title: 'Service Locations | Web Vello Digital Marketing',
  description: 'Web Vello serves businesses nationwide with professional digital marketing services. Find your city and discover how we can help your business grow.',
  keywords: 'digital marketing locations, SEO services nationwide, web development cities, local SEO, business marketing',
}

export default function LocationsPage() {
  const cityList = Object.values(cityMap)

  const toIndustrySlug = (name: string | undefined) =>
    (name || '').toLowerCase().replace(/\s+/g, '')

  // Group cities by state
  const citiesByState = cityList.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = []
    }
    acc[city.state].push(city)
    return acc
  }, {} as Record<string, typeof cityList>)

  const stats = [
    { number: '38+', label: 'Cities Served', icon: MapPin },
    { number: '50+', label: 'States Covered', icon: Globe },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average Growth', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              We Serve Businesses Nationwide
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Professional digital marketing services available in major cities across the United States. 
              Find your location and discover how Web Vello can help your business grow.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-primary-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            All Service Locations
          </h2>
          <p className="text-lg text-gray-600">
            Click on your city to learn more about our local digital marketing services
          </p>
        </div>

        {/* Cities by State */}
        <div className="space-y-12">
          {Object.entries(citiesByState)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([state, stateCities]) => (
              <div key={state} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary-600" />
                  {state}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {stateCities.map((city) => {
                    const primaryIndustrySlug = toIndustrySlug(city.industries?.[0]) || 'technology'
                    const serviceLinks = [
                      { label: 'Web Development', slug: 'web-development' },
                      { label: 'SEO', slug: 'seo' },
                      { label: 'Website Design', slug: 'website-design' },
                    ]
                    const baseHref = `/${city.slug}/industry/${primaryIndustrySlug}`
                    return (
                      <div
                        key={city.slug}
                        className="group p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                      >
                        <Link href={`${baseHref}/web-development`} className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-900 group-hover:text-primary-600 transition-colors font-medium">
                            {city.fullName}
                          </span>
                        </Link>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.slug}
                              href={`${baseHref}/${s.slug}`}
                              className="text-sm text-primary-700 hover:text-primary-800 underline underline-offset-2"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )})}
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don’t See Your City?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We provide digital marketing services to businesses nationwide, regardless of location. 
            Our remote-first approach means we can deliver exceptional results no matter where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
