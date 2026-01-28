import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

export const metadata: Metadata = {
  title: 'Terms of Service | Web Vello',
  description: 'Read Web Vello\'s Terms of Service. Understand the terms and conditions for using our website, services, and digital marketing solutions.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'service terms', 'legal terms', 'website terms'],
  openGraph: {
    title: 'Terms of Service | Web Vello',
    description: 'Read Web Vello\'s Terms of Service. Understand the terms and conditions for using our website and services.',
    url: 'https://webvello.com/terms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webvello.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Web Vello's website and services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-700 mb-4">
              Web Vello provides digital marketing, SEO, web development, and related services. We reserve the right to 
              modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Services</h2>
            <p className="text-gray-700 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to spam or harass others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, materials, and intellectual property on this website are owned by Web Vello or its licensors. 
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms for services will be specified in individual service agreements. All fees are non-refundable 
              unless otherwise stated in writing. We reserve the right to change our pricing at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Web Vello shall not be liable for any indirect, incidental, special, or consequential damages arising from 
              your use of our services. Our total liability shall not exceed the amount paid by you for the specific service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Web Vello, its officers, directors, employees, and agents from any 
              claims, damages, or expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, 
              for any reason, including violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms of Service from time to time. We will notify you of any material changes by 
              posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
              Web Vello operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-800">www.webvello.com/contact</Link>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
