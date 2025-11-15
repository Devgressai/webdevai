'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMobileDetection, TouchButton, MobileNav } from '@/components/ui/mobile-optimizations'
import { Logo } from '@/components/ui/logo'
import { Phone, MapPin } from 'lucide-react'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMobile, isTablet } = useMobileDetection()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white border-b border-blue-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-semibold">USA Based</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-100">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="hidden sm:inline">Roseville, CA</span>
              </div>
              <a 
                href="tel:5305538883" 
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="font-medium">(530) 553-8883</span>
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
              <Link href="/" className="flex items-center space-x-2 group">
                <Logo size={40} className="transition-transform duration-200 group-hover:scale-105" />
                <div className="flex items-baseline gap-0.5">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Web
                  </span>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Vello
                  </span>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2">
                <a 
                  href="tel:5305538883" 
                  className="inline-flex items-center justify-center rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <TouchButton
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2"
                  aria-label="Open menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
          {/* Main Navigation */}
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
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

          {/* Quick Actions */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            <TouchButton
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact" className="w-full">
                Get Started
              </Link>
            </TouchButton>
            
            <TouchButton
              variant="outline"
              size="lg"
              fullWidth
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/seo-audit" className="w-full">
                Free SEO Audit
              </Link>
            </TouchButton>
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-gray-200 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>2281 Lava Ridge Ct, Roseville, CA 95661</span>
            </div>
            <a 
              href="tel:5305538883" 
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>(530) 553-8883</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@webvello.com</span>
            </div>
          </div>
        </nav>
      </MobileNav>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}
