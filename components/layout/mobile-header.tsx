'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMobileDetection, TouchButton, MobileNav } from '@/components/ui/mobile-optimizations'

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
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/newlogo.png"
                  alt="Web Vello"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Web Vello
              </span>
            </Link>

            {/* Mobile Menu Button */}
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
          <div className="pt-6 border-t border-gray-200">
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(737) 888-5723</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@webvello.com</span>
              </div>
            </div>
          </div>
        </nav>
      </MobileNav>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}
