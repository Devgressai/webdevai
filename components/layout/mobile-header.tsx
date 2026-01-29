'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMobileDetection, TouchButton, MobileNav } from '@/components/ui/mobile-optimizations'
import { Logo } from '@/components/ui/logo'
import { Phone, MapPin, Mail } from 'lucide-react'
import { openCalendlyPopup } from '@/lib/calendly'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMobile, isTablet } = useMobileDetection()
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change - FIXED
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navigationItems = [
    { name: 'Design', href: '/services/website-design', submenu: [
      { name: 'Website Design', href: '/services/website-design' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'App Design', href: '/services/app-design-development' },
    ]},
    { name: 'AI & Marketing', href: '/services/ai-consulting', submenu: [
      { name: 'AI Consulting', href: '/services/ai-consulting' },
      { name: 'AI SEO', href: '/services/ai-seo' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'Generative Engine Optimization (GEO)', href: '/services/generative-engine-optimization' },
    ]},
    { name: 'Development', href: '/services/web-development', submenu: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'WordPress Development', href: '/services/wordpress-development' },
    ]},
    { name: 'Conversion', href: '/services/cro-ecommerce', submenu: [
      { name: 'CRO E-commerce', href: '/services/cro-ecommerce' },
      { name: 'CRO Lead Generation', href: '/services/cro-lead-generation' },
      { name: 'Local SEO', href: '/services/local-seo' },
    ]},
    { name: 'Problem Solvers', href: '/solutions', submenu: [
      { name: 'Declining Traffic', href: '/solutions/declining-traffic' },
      { name: 'Google Visibility', href: '/solutions/google-visibility' },
      { name: 'Website Conversion', href: '/solutions/website-conversion' },
    ]},
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about', submenu: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ]},
  ]

  if (!isMobile && !isTablet) {
    return null // Use desktop header instead
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Banner - BOLDER COLORS */}
        <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white border-b border-primary-800/30 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-success-400 animate-pulse shadow-lg shadow-success-400/50"></div>
                <span className="font-bold">USA Based</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/90">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="hidden sm:inline font-medium">Roseville, CA</span>
              </div>
              <a 
                href="tel:5305538883" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white font-semibold transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="font-bold">(530) 553-8883</span>
              </a>
              <a 
                href="mailto:Hello@Webvello.com" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white font-semibold transition-all duration-200 hover:scale-105"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="hidden xs:inline font-bold">Hello@Webvello.com</span>
                <span className="xs:hidden font-bold">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`
          transition-all duration-300 border-b
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200' 
            : 'bg-white/90 backdrop-blur-sm border-gray-100'
          }
        `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Logo size={36} className="transition-transform duration-200 group-hover:scale-105" />
              </Link>

              {/* Mobile Menu Button - INCREASED TAP TARGET */}
              <div className="flex items-center gap-2">
                <a 
                  href="tel:+15305538883"
                  className="inline-flex items-center justify-center rounded-lg min-w-[48px] min-h-[48px] p-3 text-accent-500 hover:bg-accent-50 hover:text-accent-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                  aria-label="Call us at (530) 553-8883"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <TouchButton
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMenuOpen(true)}
                  className="min-w-[48px] min-h-[48px] p-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="Open navigation menu"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </TouchButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <nav className="space-y-6">
          {/* Main Navigation - IMPROVED TAP TARGETS & FEEDBACK */}
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                <Link
                  href={item.href}
                  className="
                    block min-h-[48px] flex items-center
                    text-lg font-bold text-slate-900 
                    hover:text-primary-600 hover:bg-primary-50
                    active:bg-primary-100 active:scale-[0.98]
                    transition-all duration-200 
                    py-3 px-3 -mx-3 rounded-lg
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary-100 pl-3">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="
                          block min-h-[48px] flex items-center
                          text-base font-medium text-slate-600 
                          hover:text-primary-600 hover:bg-primary-50 hover:font-semibold
                          active:bg-primary-100 active:scale-[0.98]
                          transition-all duration-200 
                          py-2.5 px-2 -mx-2 rounded-lg
                        "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions - IMPROVED TAP TARGETS */}
          <div className="pt-6 border-t-2 border-primary-200 space-y-3">
            <TouchButton
              variant="outline"
              size="lg"
              fullWidth
              onClick={() => {
                setIsMenuOpen(false)
                // Navigation will happen via Link
              }}
              className="
                min-h-[56px]
                border-2 border-primary-600 text-primary-600 
                hover:bg-primary-600 hover:text-white 
                active:bg-primary-700 active:border-primary-700
                font-bold text-base 
                shadow-md hover:shadow-lg 
                transition-all duration-300 
                active:scale-[0.98]
                rounded-xl
              "
              data-cta="header-contact"
              aria-label="Contact Us"
            >
              <Link 
                href="/contact" 
                className="w-full flex items-center justify-center gap-2"
                onClick={(e) => {
                  // Let the link handle navigation
                  setIsMenuOpen(false)
                }}
              >
                <span>Contact Us</span>
              </Link>
            </TouchButton>
            
            <TouchButton
              variant="primary"
              size="lg"
              fullWidth
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                openCalendlyPopup()
              }}
              className="
                min-h-[56px] 
                bg-gradient-to-r from-primary-500 to-primary-600 
                hover:from-primary-600 hover:to-primary-700 
                active:from-primary-700 active:to-primary-800
                text-white font-bold text-base 
                shadow-lg hover:shadow-xl hover:shadow-primary-500/50 
                transition-all duration-300 
                active:scale-[0.98]
                rounded-xl
              "
              data-cta="header-book-discovery-call"
              aria-label="Book a Discovery Call"
            >
              <span className="w-full flex items-center justify-center gap-2">
                <span>Book a Discovery Call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </TouchButton>
          </div>

          {/* Contact Info - IMPROVED TAP TARGETS */}
          <div className="pt-6 border-t-2 border-primary-200 space-y-3 bg-gradient-to-br from-primary-50/50 to-accent-50/30 rounded-xl p-4 -mx-2">
            <div className="flex items-start gap-3 text-sm font-medium text-slate-700 min-h-[44px]">
              <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">2281 Lava Ridge Ct, Roseville, CA 95661</span>
            </div>
            <a 
              href="tel:+15305538883"
              className="
                flex items-center gap-3 
                min-h-[48px]
                text-base font-semibold text-slate-700 
                hover:text-primary-600 hover:bg-primary-50
                active:bg-primary-100 active:scale-[0.98]
                transition-all duration-200 
                py-2 px-2 -mx-2 rounded-lg
              "
            >
              <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="font-bold">(530) 553-8883</span>
            </a>
            <a 
              href="mailto:info@webvello.com" 
              className="
                flex items-center gap-3 
                min-h-[48px]
                text-base font-semibold text-slate-700 
                hover:text-primary-600 hover:bg-primary-50
                active:bg-primary-100 active:scale-[0.98]
                transition-all duration-200 
                py-2 px-2 -mx-2 rounded-lg
              "
            >
              <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-bold">info@webvello.com</span>
            </a>
          </div>
        </nav>
      </MobileNav>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}
