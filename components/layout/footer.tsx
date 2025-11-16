import Link from 'next/link'
import { MapPin, Mail, Phone, Globe } from 'lucide-react'

export function Footer() {
  const cities = [
    { name: 'New York, NY', slug: 'new-york-ny' },
    { name: 'Los Angeles, CA', slug: 'los-angeles-ca' },
    { name: 'Chicago, IL', slug: 'chicago-il' },
    { name: 'Houston, TX', slug: 'houston-tx' },
    { name: 'Phoenix, AZ', slug: 'phoenix-az' },
    { name: 'Philadelphia, PA', slug: 'philadelphia-pa' },
    { name: 'San Antonio, TX', slug: 'san-antonio-tx' },
    { name: 'San Diego, CA', slug: 'san-diego-ca' },
    { name: 'Dallas, TX', slug: 'dallas-tx' },
    { name: 'San Jose, CA', slug: 'san-jose-ca' },
    { name: 'Austin, TX', slug: 'austin-tx' },
    { name: 'Jacksonville, FL', slug: 'jacksonville-fl' },
    { name: 'Fort Worth, TX', slug: 'fort-worth-tx' },
    { name: 'Columbus, OH', slug: 'columbus-oh' },
    { name: 'Indianapolis, IN', slug: 'indianapolis-in' },
    { name: 'Charlotte, NC', slug: 'charlotte-nc' },
    { name: 'San Francisco, CA', slug: 'san-francisco-ca' },
    { name: 'Seattle, WA', slug: 'seattle-wa' },
    { name: 'Denver, CO', slug: 'denver-co' },
    { name: 'Washington, DC', slug: 'washington-dc' },
    { name: 'Nashville, TN', slug: 'nashville-tn' },
    { name: 'Oklahoma City, OK', slug: 'oklahoma-city-ok' },
    { name: 'El Paso, TX', slug: 'el-paso-tx' },
    { name: 'Boston, MA', slug: 'boston-ma' },
    { name: 'Portland, OR', slug: 'portland-or' },
    { name: 'Las Vegas, NV', slug: 'las-vegas-nv' },
    { name: 'Detroit, MI', slug: 'detroit-mi' },
    { name: 'Memphis, TN', slug: 'memphis-tn' },
    { name: 'Louisville, KY', slug: 'louisville-ky' },
    { name: 'Baltimore, MD', slug: 'baltimore-md' },
    { name: 'Milwaukee, WI', slug: 'milwaukee-wi' },
    { name: 'Albuquerque, NM', slug: 'albuquerque-nm' },
    { name: 'Tucson, AZ', slug: 'tucson-az' },
    { name: 'Fresno, CA', slug: 'fresno-ca' },
    { name: 'Sacramento, CA', slug: 'sacramento-ca' },
    { name: 'Kansas City, MO', slug: 'kansas-city-mo' },
    { name: 'Mesa, AZ', slug: 'mesa-az' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Web Vello</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional digital marketing services that drive real results. 
              From AI-powered SEO to custom web development, we help businesses 
              dominate their markets.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@webvello.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+15305538883" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="View on Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a href="https://webvello.com" className="text-gray-300 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/website-design" className="text-gray-300 hover:text-white transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting" className="text-gray-300 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-300 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serving</h4>
            <div className="space-y-2">
              {/* Show only key locations */}
              {cities.slice(0, 6).map((city) => (
                <Link 
                  key={city.slug}
                  href={`/${city.slug}`} 
                  className="text-gray-300 hover:text-white transition-colors flex items-center text-sm"
                >
                  <MapPin className="h-3 w-3 mr-2 text-primary-400 flex-shrink-0" />
                  <span className="truncate">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Link 
                href="/locations" 
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
              >
                <MapPin className="h-4 w-4 mr-2" />
                View All {cities.length}+ Locations →
              </Link>
              <div className="text-gray-400 text-xs">
                Nationwide coverage available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Web Vello. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                HTML Sitemap
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
