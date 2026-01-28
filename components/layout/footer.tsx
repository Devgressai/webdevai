import Link from 'next/link'
import { MapPin, Mail, Phone, Globe } from 'lucide-react'
import { citySlugs, cities } from '@/lib/cities'

// Facebook icon component
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
)

// LinkedIn icon component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function Footer() {
  // Get top 24 cities deterministically from citySlugs (first 24)
  // citySlugs order is deterministic based on lib/cities.ts object key order
  const topCities = citySlugs.slice(0, 24).map(slug => ({
    slug,
    name: cities[slug]?.fullName || cities[slug]?.name || slug,
  }))
  
  const totalCityCount = citySlugs.length

  return (
    <footer className="bg-slate-950/95 border-t border-slate-800/70 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-50">Web Vello</h3>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-md">
              Professional digital marketing services that drive real results. 
              From AI-powered SEO to custom web development, we help businesses 
              dominate their markets.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/people/Webvello/61583979327301/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-slate-100 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/webvello" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-slate-100 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@webvello.com"
                className="text-slate-300 hover:text-slate-100 transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+15305538883"
                className="text-slate-300 hover:text-slate-100 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://www.webvello.com"
                className="text-slate-300 hover:text-slate-100 transition-colors"
                aria-label="Visit our website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/website-design"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-consulting"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations - Split into 3 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase mb-3">
              Top Cities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
              {topCities.map((city) => (
                <Link 
                  key={city.slug}
                  href={`/${city.slug}`} 
                  className="flex items-center text-sm text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <MapPin className="h-3 w-3 mr-2 text-sky-400 flex-shrink-0" />
                  <span className="truncate">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Link 
                href="/locations" 
                className="inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                View All {totalCityCount}+ Locations →
              </Link>
              <div className="text-xs text-slate-400">
                Nationwide coverage available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/70">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-400">
              © 2025 Web Vello. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                HTML Sitemap
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
