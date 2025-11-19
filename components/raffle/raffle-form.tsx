'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function RaffleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasCurrentSite, setHasCurrentSite] = useState<string>('')
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const formData = new FormData(e.currentTarget)
    const hasSite = formData.get('hasCurrentSite') === 'yes'
    
    const data = {
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined,
      hasCurrentSite: hasSite,
      siteName: hasSite ? (formData.get('siteName') || undefined) : undefined,
      websiteUrl: hasSite ? (formData.get('websiteUrl') || undefined) : undefined,
      consent: formData.get('consent') === 'on',
    }

    try {
      const response = await fetch('/api/raffle/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result
      try {
        result = await response.json()
      } catch (parseError) {
        // If response is not valid JSON, handle it
        if (!response.ok) {
          setSubmitStatus({
            type: 'error',
            message: `Failed to submit entry. Server returned ${response.status} ${response.statusText}. Please try again.`,
          })
          return
        }
        throw parseError
      }

      if (!response.ok) {
        // Handle non-200 responses
        setSubmitStatus({
          type: 'error',
          message: result.error || result.message || 'Failed to submit entry. Please try again.',
        })
        return
      }

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for entering! We will contact the winner within 3 days.',
        })
        // Reset form
        e.currentTarget.reset()
        setHasCurrentSite('')
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || result.message || 'Failed to submit entry. Please try again.',
        })
      }
    } catch (error) {
      console.error('Raffle form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit entry. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        )}

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-secondary-900 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="john@example.com"
          />
          <p className="mt-1 text-sm text-secondary-600">We'll use this to contact you if you win.</p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-900 mb-3">
            Do you currently have a website? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCurrentSite"
                value="yes"
                checked={hasCurrentSite === 'yes'}
                onChange={(e) => setHasCurrentSite(e.target.value)}
                disabled={isSubmitting}
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-600 border-gray-300 disabled:cursor-not-allowed"
              />
              <span className="ml-2 text-secondary-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCurrentSite"
                value="no"
                checked={hasCurrentSite === 'no'}
                onChange={(e) => setHasCurrentSite(e.target.value)}
                disabled={isSubmitting}
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-600 border-gray-300 disabled:cursor-not-allowed"
              />
              <span className="ml-2 text-secondary-700">No</span>
            </label>
          </div>
        </div>

        {hasCurrentSite === 'yes' && (
          <>
            <div>
              <label htmlFor="siteName" className="block text-sm font-medium text-secondary-900 mb-2">
                What is your site name? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                required={hasCurrentSite === 'yes'}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="My Business Website"
              />
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-secondary-900 mb-2">
                What is your website URL? <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                required={hasCurrentSite === 'yes'}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="https://www.example.com"
              />
            </div>
          </>
        )}

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-600 border-gray-300 rounded disabled:cursor-not-allowed"
          />
          <label htmlFor="consent" className="ml-3 text-sm text-secondary-700">
            I agree to receive emails and/or texts from Webvello about this raffle and website/marketing services. I can unsubscribe at any time. <span className="text-red-500">*</span>
          </label>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary-600 text-white hover:bg-primary-700 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Enter Raffle'}
          </Button>
        </div>
      </form>
    </>
  )
}

