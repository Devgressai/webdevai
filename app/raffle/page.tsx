import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { RaffleForm } from '@/components/raffle/raffle-form'

export const metadata: Metadata = {
  title: 'Win a FREE Custom Website (Up to 10 Pages) | Webvello Giveaway',
  description: 'Enter to win a completely free custom website from Webvello. Up to 10 pages, mobile-friendly, and SEO-optimized. Winner selected within 3 days. No purchase necessary.',
  keywords: 'free website giveaway, web design contest, free website design, custom website raffle',
  openGraph: {
    title: 'Win a FREE Custom Website (Up to 10 Pages) | Webvello Giveaway',
    description: 'Enter to win a completely free custom website from Webvello. Up to 10 pages, mobile-friendly, and SEO-optimized.',
    url: 'https://webvello.com/raffle',
    siteName: 'Webvello',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RafflePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Win a <span className="text-primary-600">FREE Custom Website</span> (Up to 10 Pages) from Webvello
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-600 mb-8 leading-relaxed">
              Winner selected within 3 days of entry. No purchase necessary to enter.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8 text-left">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">What You Could Win</h2>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Completely custom website design (not generic templates)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 10 pages included (Home, About, Services, Contact, Blog, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mobile-friendly and SEO-optimized design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Perfect for small businesses and local service providers</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-secondary-700 mb-6">
              Fill out the form below to enter. The winner will be randomly selected by Webvello within 3 days of entry.
            </p>
            <p className="text-sm text-secondary-600 italic">
              No purchase necessary to enter.
            </p>
          </div>
        </div>
      </section>

      {/* Raffle Entry Form */}
      <section id="entry-form" className="py-16 bg-white">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">
              Enter the Raffle
            </h2>
            
            <RaffleForm />

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-secondary-800">
                <strong>Important:</strong> The free website from Webvello includes custom design and development for up to 10 pages. The winner is responsible for paying for their own <strong>domain name</strong> and <strong>website hosting</strong>. No purchase necessary to enter. One winner will be selected at random by Webvello within 3 days of entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8 text-center">
            What's Included in Your Free Website
          </h2>
          
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Custom website design by Webvello</h3>
                  <p className="text-secondary-600">Unique design tailored to your business, not a generic template.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Up to 10 pages</h3>
                  <p className="text-secondary-600">Home, About, Services, Contact, Blog, and more—up to 10 pages total.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Mobile-responsive layout</h3>
                  <p className="text-secondary-600">Your website will look great on phones, tablets, and desktops.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Basic on-page SEO</h3>
                  <p className="text-secondary-600">Optimized titles, meta descriptions, headings, and structure for search engines.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Contact form and basic lead capture</h3>
                  <p className="text-secondary-600">Forms to help you capture and convert visitors into customers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Connection to domain and launch support</h3>
                  <p className="text-secondary-600">We'll help you connect your domain and get your site live.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
              <p className="text-sm text-secondary-700">
                <strong>Note:</strong> Hosting, domain name, premium plugins, and ongoing maintenance are not included and must be paid by the winner. The winner will need to purchase their own domain name and hosting plan (typically $10-20/month for hosting and $10-15/year for a domain).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Enter Your Info</h3>
              <p className="text-sm text-secondary-600">Fill out the form above with your contact details and business information.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Winner Selected</h3>
              <p className="text-sm text-secondary-600">Webvello randomly selects 1 winner within 3 days of entry.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Discovery Call</h3>
              <p className="text-sm text-secondary-600">Winner is contacted by email to schedule a discovery call and discuss their needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Website Built</h3>
              <p className="text-sm text-secondary-600">Webvello designs and builds your custom website up to 10 pages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Webvello Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8 text-center">
            Why Webvello
          </h2>
          
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Webvello is a modern web design and SEO-focused studio that specializes in creating high-performing websites for small businesses and local service providers. We combine cutting-edge technology with proven design principles to deliver websites that not only look great but also drive real business results.
            </p>
            
            <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
              Our team uses modern development frameworks and best practices to ensure your website is fast, secure, and optimized for search engines. We focus on speed, SEO, and conversions—helping your business attract more visitors and turn them into customers.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Benefits of Working with Webvello</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-700">Modern, fast-loading websites built with the latest technology</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-700">SEO-optimized from day one to help you rank in search results</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-700">Conversion-focused design that turns visitors into customers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-700">Experience working with local businesses and service providers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-700">Mobile-first approach ensuring your site works perfectly on all devices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-secondary-700 mb-4 italic">
                "Webvello transformed our online presence. Our new website looks professional and brings in more leads than ever before."
              </p>
              <p className="font-semibold text-secondary-900">John D.</p>
              <p className="text-sm text-secondary-600">General Contractor</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-secondary-700 mb-4 italic">
                "The team at Webvello understood our business needs and created a website that truly represents our brand. Highly recommend!"
              </p>
              <p className="font-semibold text-secondary-900">Sarah M.</p>
              <p className="text-sm text-secondary-600">Real Estate Agent</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-secondary-700 mb-4 italic">
                "Fast, professional, and results-driven. Our website now ranks well in Google and generates consistent leads."
              </p>
              <p className="font-semibold text-secondary-900">Mike R.</p>
              <p className="text-sm text-secondary-600">Home Services</p>
            </div>
          </div>

          <p className="text-center text-secondary-600">
            Webvello has built websites for service businesses, property management companies, and other local businesses across the country.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Do I have to pay anything to enter?
              </h3>
              <p className="text-secondary-700">
                No, entry is completely free. No purchase necessary to enter the raffle.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                What costs are not included if I win?
              </h3>
              <p className="text-secondary-700">
                The winner is responsible for paying for their own domain name (typically $10-15 per year) and website hosting (typically $10-20 per month). Premium plugins, additional pages beyond 10, and ongoing maintenance are also not included.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                What kind of businesses is this for?
              </h3>
              <p className="text-secondary-700">
                This raffle is ideal for small businesses and local service providers, including contractors, real estate agents, home service companies, property management, and other service-based businesses. It's perfect for businesses that either don't have a website yet or have an outdated website that needs a redesign.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                How is the winner selected?
              </h3>
              <p className="text-secondary-700">
                One winner will be selected at random by Webvello within 3 days of entry. The winner will be contacted via the email address provided in the entry form.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Will Webvello contact me even if I don't win?
              </h3>
              <p className="text-secondary-700">
                If you've checked the consent box in the entry form, Webvello may contact you about website and marketing services. You can unsubscribe at any time. If you don't win, you won't receive any special notifications about the raffle results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                How long does it take to build the website?
              </h3>
              <p className="text-secondary-700">
                Once the winner is selected and the discovery call is completed, Webvello will work with you to design and build your custom website. The timeline typically ranges from 4-8 weeks depending on the complexity and your feedback during the design process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Win Your Free Custom Website?
          </h2>
          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            Enter now for your chance to win a completely free custom website (up to 10 pages) from Webvello.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Winner selected within 3 days. No purchase necessary.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            asChild
          >
            <Link href="#entry-form">Enter the Raffle Now</Link>
          </Button>
          <p className="mt-6 text-sm text-white/70">
            Don't miss your chance to get a professional website designed by Webvello at no cost.
          </p>
        </div>
      </section>
    </div>
  )
}

