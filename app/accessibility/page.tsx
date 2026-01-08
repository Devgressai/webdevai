import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Web Vello',
  description: 'Web Vello is committed to making our website accessible to everyone. Learn about our accessibility standards, how to request accommodations, and our ongoing commitment to improvement.',
  keywords: ['accessibility', 'WCAG', 'web accessibility', 'accessible website', 'ADA compliance'],
  openGraph: {
    title: 'Accessibility Statement | Web Vello',
    description: 'Web Vello is committed to making our website accessible to everyone. Learn about our accessibility standards and how to request accommodations.',
    url: 'https://www.webvello.com/accessibility',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.webvello.com/accessibility',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AccessibilityPage() {
  const lastReviewDate = 'January 2026'

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Accessibility Statement</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Web Vello is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards to achieve our goals.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Our Commitment</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2</strong> at the 
              <strong> AA level</strong>. These guidelines explain how to make web content more accessible for 
              people with disabilities and user-friendly for everyone.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our accessibility efforts include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Ensuring all images have descriptive alternative text</li>
              <li>Maintaining proper heading structure and semantic HTML</li>
              <li>Providing keyboard navigation support throughout the site</li>
              <li>Ensuring sufficient color contrast for text readability</li>
              <li>Supporting screen readers and assistive technologies</li>
              <li>Respecting user preferences for reduced motion</li>
              <li>Making forms accessible with proper labels and error handling</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Known Issues and Ongoing Improvements</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              We recognize that accessibility is an ongoing process. We regularly audit our website 
              and work to address any accessibility barriers we identify. Our team is committed to 
              continuous improvement and staying current with accessibility best practices.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              If you encounter any accessibility barriers while using our website, please let us know 
              using the contact information below. We will work to address the issue promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Requesting Accommodations</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              If you need assistance accessing any part of our website or would like to request an 
              accommodation, we are here to help. Please contact us using one of the methods below:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-medium">Email:</span>{' '}
                    <a 
                      href="mailto:info@webvello.com?subject=Accessibility%20Request" 
                      className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                    >
                      info@webvello.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-medium">Phone:</span>{' '}
                    <a 
                      href="tel:+15305538883" 
                      className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                    >
                      (530) 553-8883
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-medium">Contact Form:</span>{' '}
                    <Link 
                      href="/contact" 
                      className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                    >
                      Visit our contact page
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When contacting us about accessibility, please include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>The specific page or feature you are having trouble accessing</li>
              <li>A description of the accessibility barrier you encountered</li>
              <li>Your preferred method of communication</li>
              <li>Any suggestions you have for improvement</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Third-Party Content</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our website may include content from third-party services, such as embedded videos, 
              calendars, or social media widgets. While we strive to work with accessible third-party 
              providers, we cannot guarantee the accessibility of all third-party content. If you 
              encounter accessibility issues with third-party content, please contact us and we will 
              work to find an alternative solution.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Feedback and Suggestions</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Your feedback is valuable to us. If you have suggestions for improving the accessibility 
              of our website, we would love to hear from you. We review all accessibility feedback and 
              incorporate improvements into our ongoing development process.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Additional Resources</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              For more information about web accessibility, you may find these resources helpful:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>
                <a 
                  href="https://www.w3.org/WAI/WCAG22/quickref/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  WCAG 2.2 Quick Reference Guide
                  <ExternalLink className="inline-block h-4 w-4 ml-1 mb-0.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.w3.org/WAI/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  Web Accessibility Initiative (WAI)
                  <ExternalLink className="inline-block h-4 w-4 ml-1 mb-0.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://webaim.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  WebAIM (Web Accessibility In Mind)
                  <ExternalLink className="inline-block h-4 w-4 ml-1 mb-0.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 mt-8">Last Updated</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              This accessibility statement was last reviewed and updated on <strong>{lastReviewDate}</strong>. 
              We commit to reviewing and updating this statement regularly as we continue to improve 
              the accessibility of our website.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 text-sm">
              Thank you for visiting Web Vello. We are committed to providing an accessible and 
              inclusive experience for all users.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

