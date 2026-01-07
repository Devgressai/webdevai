'use client'

import { useState, useRef } from 'react'
import { useMobileDetection, TouchButton, MobileInput, MobileCard } from '@/components/ui/mobile-optimizations'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
  urgency: string
}

const services = [
  'Website Design',
  'Web Development',
  'SEO Services',
  'AI Consulting',
  'Digital Marketing',
  'Local SEO',
  'E-commerce Development',
  'Other'
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not sure yet'
]

const urgencyLevels = [
  'ASAP (Within 1 week)',
  'Within 1 month',
  'Within 3 months',
  'Just exploring options',
  'No rush'
]

export default function MobileContactForm() {
  const { isMobile } = useMobileDetection()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setFieldErrors({})

    // Client-side validation
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) {
      errors.name = 'Full name is required'
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.service) {
      errors.service = 'Please select a service'
    }
    if (!formData.message.trim()) {
      errors.message = 'Project description is required'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsSubmitting(false)
      // Focus error summary after state update
      setTimeout(() => {
        errorSummaryRef.current?.focus()
      }, 0)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          urgency: ''
        })
      } else {
        setSubmitStatus('error')
        // Focus error summary after state update
        setTimeout(() => {
          errorSummaryRef.current?.focus()
        }, 0)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      // Focus error summary after state update
      setTimeout(() => {
        errorSummaryRef.current?.focus()
      }, 0)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <MobileCard className="text-center">
        <div 
          role="status"
          aria-live="polite"
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <TouchButton
          variant="outline"
          onClick={() => setSubmitStatus('idle')}
        >
          Send Another Message
        </TouchButton>
      </MobileCard>
    )
  }

  return (
    <MobileCard className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {isMobile ? 'Get Your Free Quote' : 'Ready to Get Started?'}
        </h2>
        <p className="text-gray-600">
          Tell us about your project and we'll provide a detailed proposal within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Summary */}
        {(submitStatus === 'error' || Object.keys(fieldErrors).length > 0) && (
          <div
            ref={errorSummaryRef}
            role="alert"
            aria-live="assertive"
            tabIndex={-1}
            className="bg-red-50 border border-red-200 rounded-lg p-4"
          >
            <h3 className="font-semibold text-red-900 text-base mb-2">
              {submitStatus === 'error' 
                ? 'Submission failed. Please fix the following:' 
                : 'Please fix the following errors:'}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {submitStatus === 'error' && (
                <li className="text-sm text-red-700">
                  There was an error sending your message. Please try again.
                </li>
              )}
              {Object.entries(fieldErrors).map(([field, error]) => {
                const fieldIdMap: Record<string, string> = {
                  name: 'mobile-contact-name',
                  email: 'mobile-contact-email',
                  service: 'mobile-contact-service',
                  message: 'mobile-contact-message'
                }
                const fieldId = fieldIdMap[field] || `mobile-contact-${field}`
                return (
                  <li key={field} className="text-sm text-red-700">
                    <a
                      href={`#${fieldId}`}
                      className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(fieldId)?.focus()
                      }}
                    >
                      {error}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MobileInput
              id="mobile-contact-name"
              label="Full Name *"
              type="text"
              value={formData.name}
              onChange={(e) => {
                handleInputChange('name', e.target.value)
                if (fieldErrors.name) {
                  setFieldErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors.name
                    return newErrors
                  })
                }
              }}
              placeholder="John Doe"
              required
              fullWidth
              error={fieldErrors.name}
            />
            
            <MobileInput
              id="mobile-contact-email"
              label="Email Address *"
              type="email"
              value={formData.email}
              onChange={(e) => {
                handleInputChange('email', e.target.value)
                if (fieldErrors.email) {
                  setFieldErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors.email
                    return newErrors
                  })
                }
              }}
              placeholder="john@company.com"
              required
              fullWidth
              error={fieldErrors.email}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MobileInput
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
              fullWidth
            />
            
            <MobileInput
              label="Company Name"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your Company"
              fullWidth
            />
          </div>
        </div>

        {/* Project Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
          
          <div>
            <label htmlFor="mobile-contact-service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed *
            </label>
            <select
              id="mobile-contact-service"
              name="service"
              value={formData.service}
              onChange={(e) => {
                handleInputChange('service', e.target.value)
                if (fieldErrors.service) {
                  setFieldErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors.service
                    return newErrors
                  })
                }
              }}
              aria-invalid={fieldErrors.service ? 'true' : 'false'}
              aria-describedby={fieldErrors.service ? 'service-error' : undefined}
              className={`block w-full rounded-lg border px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 ${
                fieldErrors.service 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {fieldErrors.service && (
              <p id="service-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.service}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => handleInputChange('urgency', e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select timeline</option>
                {urgencyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="mobile-contact-message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              id="mobile-contact-message"
              name="message"
              value={formData.message}
              onChange={(e) => {
                handleInputChange('message', e.target.value)
                if (fieldErrors.message) {
                  setFieldErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors.message
                    return newErrors
                  })
                }
              }}
              placeholder="Tell us about your project goals, requirements, and any specific features you need..."
              rows={isMobile ? 4 : 6}
              aria-invalid={fieldErrors.message ? 'true' : 'false'}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              className={`block w-full rounded-lg border px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 resize-none ${
                fieldErrors.message 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              required
            />
            {fieldErrors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <TouchButton
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            className="relative"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              'Send Free Quote Request'
            )}
          </TouchButton>
        </div>


        {/* Trust Indicators */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24hr Response</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Quote</span>
            </div>
          </div>
        </div>
      </form>
    </MobileCard>
  )
}
