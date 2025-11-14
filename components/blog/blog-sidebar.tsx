'use client'

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { MessageSquare, CheckCircle } from 'lucide-react'

interface BlogSidebarProps {
  headings?: Array<{ id: string; text: string; level: number }>
}

const services = [
  'Website Design',
  'Web Development',
  'SEO Services',
  'GEO Optimization',
  'AI Consulting',
  'Digital Marketing',
  'Local SEO',
  'E-commerce Development',
  'Other'
]

export default function BlogSidebar({ headings = [] }: BlogSidebarProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [activeHeading, setActiveHeading] = useState('')

  // Store extracted headings in state
  const [extractedHeadings, setExtractedHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])

  // Auto-generate TOC from page headings if not provided
  useEffect(() => {
    if (headings.length === 0) {
      const extractHeadings = () => {
        const headingElements = document.querySelectorAll('h2, h3')
        const newHeadings: Array<{ id: string; text: string; level: number }> = []
        
        headingElements.forEach((heading, index) => {
          const text = heading.textContent?.trim() || ''
          if (!text) return
          
          const level = heading.tagName === 'H2' ? 2 : 3
          let id = heading.id
          
          if (!id) {
            id = text.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, '')
              .substring(0, 50) || `heading-${index}`
            heading.id = id
          }
          
          // Only add if not already in the list
          if (!newHeadings.find(h => h.id === id)) {
            newHeadings.push({ id, text, level })
          }
        })
        
        setExtractedHeadings(newHeadings)
      }

      // Extract headings after a short delay to ensure DOM is ready
      const timer = setTimeout(extractHeadings, 100)
      extractHeadings() // Also try immediately

      return () => clearTimeout(timer)
    } else {
      setExtractedHeadings(headings)
    }
  }, [headings])

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      const allHeadings = extractedHeadings.length > 0 ? extractedHeadings : 
        Array.from(document.querySelectorAll('h2, h3')).map(el => ({
          id: el.id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3
        }))
      
      let current = ''
      
      allHeadings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = id
          }
        }
      })
      
      if (current) {
        setActiveHeading(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    // Also check on resize
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [extractedHeadings])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: formData.service || 'Blog Inquiry',
          message: formData.message || `Inquiry from blog post`
        }),
      })
      
      if (!res.ok) throw new Error('Request failed')
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120 // Account for header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Use extracted headings
  const tocHeadings = extractedHeadings.length > 0 ? extractedHeadings : headings

  return (
    <div className="hidden lg:block w-80 flex-shrink-0 space-y-6">
      {/* Contact Form - CTA First */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-xl border border-blue-500 p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-white" />
          <h3 className="text-lg font-bold text-white">Get in Touch</h3>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-white font-semibold mb-2">Thank You!</p>
            <p className="text-sm text-white/90 mb-4">
              We'll get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmitStatus('idle')}
              className="w-full bg-white text-blue-600 hover:bg-gray-100 border-white"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-white/30 bg-white/90 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:bg-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-white/30 bg-white/90 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:bg-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-white/30 bg-white/90 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:bg-white"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-1">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-white/30 bg-white/90 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:bg-white"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-white/30 bg-white/90 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:bg-white"
                placeholder="Tell us about your project..."
              />
            </div>

            {submitStatus === 'error' && (
              <div className="text-sm text-white bg-red-500/80 p-2 rounded">
                Something went wrong. Please try again.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2.5"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>

      {/* Table of Contents - Below Contact Form */}
      {tocHeadings.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            {tocHeadings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHeading(heading.id)
                }}
                className={`block text-sm transition-colors py-1 px-2 rounded hover:bg-gray-50 ${
                  heading.level === 3 ? 'ml-4 text-xs' : ''
                } ${
                  activeHeading === heading.id
                    ? 'text-blue-600 font-semibold bg-blue-50 border-l-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {heading.text.length > 60 ? `${heading.text.substring(0, 60)}...` : heading.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

