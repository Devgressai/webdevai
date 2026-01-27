'use client'

import { useState, useRef } from 'react'
import { Button } from '../ui/button'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { trackLeadCapture } from '@/lib/analytics/cta-tracking'

interface BOFULeadFormProps {
  serviceInterest: string
  ctaTrackingId?: string
  className?: string
}

export function BOFULeadForm({ serviceInterest, ctaTrackingId, className = '' }: BOFULeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    city: '',
    _honeypot: '', // Honeypot field
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    
    // Clear submit status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setFieldErrors({})

    // Honeypot check (client-side)
    if (formData._honeypot) {
      // Silently fail - don't reveal this is a honeypot
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceInterest,
          ctaTrackingId,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        // Handle validation errors
        if (result.errors) {
          setFieldErrors(result.errors)
        }
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: '',
        city: '',
        _honeypot: '',
      })

      // Track conversion using analytics abstraction
      trackLeadCapture({
        trackingId: ctaTrackingId,
        serviceInterest,
        formType: 'bofu',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Get Started Today
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="_honeypot"
          value={formData._honeypot}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px' }}
          aria-hidden="true"
        />

        {/* Name */}
        <div>
          <label htmlFor="bofu-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="bofu-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              fieldErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Smith"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="bofu-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="bofu-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              fieldErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@company.com"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
          )}
        </div>

        {/* Company (optional) */}
        <div>
          <label htmlFor="bofu-company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            id="bofu-company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              fieldErrors.company ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Acme Inc."
          />
          {fieldErrors.company && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.company}</p>
          )}
        </div>

        {/* Website (optional) */}
        <div>
          <label htmlFor="bofu-website" className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="url"
            id="bofu-website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              fieldErrors.website ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="https://example.com"
          />
          {fieldErrors.website && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.website}</p>
          )}
        </div>

        {/* City (optional) */}
        <div>
          <label htmlFor="bofu-city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="bofu-city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              fieldErrors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="New York"
          />
          {fieldErrors.city && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.city}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="bofu-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="bofu-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y ${
              fieldErrors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project..."
          />
          {fieldErrors.message && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
          )}
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-md">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-900 font-medium">Thank you!</p>
              <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-md">
            <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-900 font-medium">Submission failed</p>
              <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || submitStatus === 'success'}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : submitStatus === 'success' ? (
            'Submitted!'
          ) : (
            'Get Started'
          )}
        </Button>
      </form>
    </div>
  )
}
