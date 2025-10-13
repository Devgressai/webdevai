import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Milwaukee Auto Repair Website Design | Mechanic Shop Web Development',
  description: 'Custom website design for Milwaukee auto repair shops and mechanics. Online booking, service scheduling, and customer management systems that fill your bays.',
  openGraph: {
    title: 'Milwaukee Auto Repair Website Design | Mechanic Shop Web Development',
    description: 'Custom website design for Milwaukee auto repair shops and mechanics.',
    url: 'https://www.webvello.com/services/auto-repair-website-design-milwaukee',
    siteName: 'WebVello',
    locale: 'en_US',
    type: 'website',
  },
};

export default function MilwaukeeAutoRepairWebsiteDesignPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Milwaukee Auto Repair Website Design That Fills Your Service Bays
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Modern websites for Milwaukee mechanics and auto shops. Online appointment booking, service reminders, and customer portals that drive repeat business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Get Your Free Demo
              </Link>
              <Link href="/pricing" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white">
                See Examples
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2"><span className="text-2xl">🔧</span><span>50+ Auto Shops</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">📅</span><span>Online Booking</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">⭐</span><span>Review Management</span></div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Let's be honest: your auto repair shop's website probably isn't bringing in new customers. Maybe it's outdated, built on some template from 2015. Maybe customers can't book appointments online, so they call during lunch rush when your service writers are swamped. Maybe your site doesn't even show up when Milwaukee drivers search "mechanic near me" or "oil change Milwaukee." Meanwhile, your bays sit empty while national chains with better websites steal your customers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's what's happening: 88% of consumers search online before choosing an auto repair shop. They're comparing shops, reading reviews, checking prices, and looking for convenient booking options. If your website doesn't make it easy to schedule service, showcase your expertise, and build trust, they're booking with your competitor down the street. It's that simple.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As specialists in <strong>auto repair website design for Milwaukee</strong> mechanics and shops, we understand your unique challenges. You need to compete with dealerships and national chains. You need to build trust with customers who've been burned by dishonest mechanics. You need to fill your schedule with quality work, not just oil changes. You need to encourage repeat business and referrals. And you need to do all of this while actually running your shop and fixing cars.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're an independent mechanic building your first real website, a multi-bay shop modernizing your online presence, or a specialty shop (transmission, European, diesel) trying to attract your ideal customers, your website should be working as hard as you do—bringing in new customers 24/7, filling your schedule, and building your reputation. Let's make that happen.
          </p>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Milwaukee Auto Shops Struggle With Their Websites</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customers Can't Book Appointments Online</h3>
              <p className="text-gray-700 mb-3">
                It's 2025, and customers expect to book service appointments online—not play phone tag with your shop. If they have to call during business hours, many won't bother. They'll book with the shop that lets them schedule at 10 PM from their couch. You're losing 30-40% of potential customers simply because online booking isn't available.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We integrate online appointment scheduling that syncs with your shop management system. Customers book 24/7, you fill your bays automatically, and your service writers stop answering the same scheduling calls all day.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Website Doesn't Show Up on Google</h3>
              <p className="text-gray-700 mb-3">
                When Milwaukee drivers search "auto repair near me" or "mechanic Milwaukee," are you on page one? If not, you're invisible. The top 3 Google results get 75% of all clicks. Every day you're not ranking is another day Midas, Firestone, and that shop on the corner are stealing your customers.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build SEO-optimized websites that rank on page one for Milwaukee local searches. Google My Business optimization, local citations, and service-specific pages put you in front of customers actively looking for mechanics.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">You're Not Getting Reviews (Or Managing Bad Ones)</h3>
              <p className="text-gray-700 mb-3">
                92% of consumers read online reviews before choosing an auto shop. If you have 12 reviews and your competitor has 200+ with 4.8 stars, guess who gets the business? And when you do get a bad review, you have no system to request reviews from happy customers to bury it.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We integrate automated review request systems that make it easy for satisfied customers to leave positive reviews on Google. Build your reputation automatically with every completed job.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Website Doesn't Build Trust</h3>
              <p className="text-gray-700 mb-3">
                Let's face it: people don't trust mechanics. They've been overcharged, sold unnecessary services, and lied to. Your website needs to overcome decades of industry mistrust. Generic stock photos, vague service descriptions, and no transparency about pricing make customers suspicious before they even call.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We design trust-building websites with real photos of your shop and team, transparent pricing, ASE certifications prominently displayed, customer testimonials, and educational content that demonstrates your expertise.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">You're Competing on Price Instead of Value</h3>
              <p className="text-gray-700 mb-3">
                When your website only lists services and prices, you're forcing customers to shop based on price alone. You can't compete with Walmart's $19.88 oil changes on price. You need to communicate your value—ASE certifications, quality parts, warranty, expertise, customer service—but your website doesn't tell that story.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We create value-focused websites that educate customers about why quality matters, showcase your expertise and certifications, and position you as the trusted local expert worth paying for.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Our Auto Repair Website Design Different</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most web designers have never worked on a car or run an auto shop. They don't understand shop management systems, service writer workflows, or the customer journey from online search to completed repair. That's why so many auto shop websites fail to generate business.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">We Specialize in Automotive</h3>
            <p className="text-gray-700 mb-4">
              We've built websites for 50+ auto repair shops across Milwaukee—independent mechanics, transmission specialists, European car experts, diesel shops, tire centers, and full-service facilities. We understand Mitchell1, Shop-Ware, Tekmetric, and other shop management systems. We know how service writers work, what customers need, and what drives repeat business.
            </p>
            <p className="text-gray-700">
              When you explain that you need integration with your parts suppliers or discuss your diagnostic equipment, we don't need explanations. We get it, and that expertise translates into websites that actually work for auto shops.
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Milwaukee's automotive market is competitive. From national chains with massive marketing budgets to dealership service centers to independent shops on every corner, standing out requires more than just a basic website. You need a strategic online presence that communicates your unique value.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We've designed websites for shops in Bay View, Wauwatosa, West Allis, Greenfield, and across the Milwaukee metro. Whether you're a general repair shop serving all makes and models, a specialty shop focusing on European or Asian vehicles, or a niche service provider (transmission, diesel, performance), we know how to position you online.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you work with us, you're not getting a generic small business website. You're getting a custom solution built specifically for your auto shop, your services, and your local market. That's the difference between a web design agency and specialists who understand automotive.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Complete Auto Repair Website Features</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📅</span>Online Appointment Scheduling
              </h3>
              <p className="text-gray-700 mb-4">
                Let customers book service appointments 24/7 from any device. No more phone tag, no more missed calls during busy times. Customers see your real-time availability, choose their service, select a time, and book instantly.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Real-time bay availability</li>
                <li>Service-specific booking (oil change, brake service, diagnostics, etc.)</li>
                <li>Automatic confirmation emails and SMS reminders</li>
                <li>Integration with shop management systems (Mitchell1, Tekmetric, Shop-Ware)</li>
                <li>Customer vehicle history tracking</li>
                <li>Recurring service reminders (oil changes, inspections)</li>
                <li>Mobile-optimized booking flow</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Fill your schedule automatically while reducing phone volume by 40-60%.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔍</span>Local SEO Optimization
              </h3>
              <p className="text-gray-700 mb-4">
                Rank on page one when Milwaukee drivers search for mechanics. We optimize for local searches like "auto repair near me," "mechanic Milwaukee," "brake service Wauwatosa," and service-specific queries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Google My Business optimization and management</li>
                <li>Local citation building (Yelp, Yellow Pages, automotive directories)</li>
                <li>Service-specific landing pages (brakes, transmission, engine, electrical)</li>
                <li>Location-based content (Milwaukee neighborhoods, surrounding cities)</li>
                <li>Schema markup for automotive services</li>
                <li>Mobile-first indexing optimization</li>
                <li>Page speed optimization (under 2 seconds)</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Rank #1-3 for local auto repair searches and capture customers actively looking for mechanics.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">⭐</span>Review & Reputation Management
              </h3>
              <p className="text-gray-700 mb-4">
                Automatically request reviews from satisfied customers and build your online reputation. More positive reviews mean more customers choosing you over competitors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Automated review request emails after service completion</li>
                <li>Multi-platform review generation (Google, Facebook, Yelp)</li>
                <li>Review monitoring and alert system</li>
                <li>Review response management</li>
                <li>Testimonial showcase on website</li>
                <li>Before/after repair photo galleries</li>
                <li>Customer success stories</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Build 100+ five-star reviews within 12 months and dominate local search results.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💰</span>Service Pricing & Transparency
              </h3>
              <p className="text-gray-700 mb-4">
                Build trust by being transparent about pricing. Customers appreciate knowing what to expect before they call or visit.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Service pricing pages (oil changes, brakes, diagnostics)</li>
                <li>Instant quote request forms</li>
                <li>Service package options (basic, premium, comprehensive)</li>
                <li>Warranty information clearly displayed</li>
                <li>Parts quality explanation (OEM vs. aftermarket)</li>
                <li>Special offers and coupons</li>
                <li>Fleet and commercial pricing</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Pre-qualify customers and reduce price-shopping calls while building trust.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🚗</span>Customer Vehicle Portal
              </h3>
              <p className="text-gray-700 mb-4">
                Give customers access to their vehicle history, service records, and upcoming maintenance needs. This builds loyalty and encourages repeat business.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Secure customer login portal</li>
                <li>Complete vehicle service history</li>
                <li>Upcoming maintenance reminders</li>
                <li>Digital inspection reports with photos</li>
                <li>Service invoice access</li>
                <li>Parts warranty tracking</li>
                <li>Multi-vehicle management for families</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Increase customer retention by 35% and encourage proactive maintenance.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📱</span>Mobile-First Design
              </h3>
              <p className="text-gray-700 mb-4">
                70% of auto repair searches happen on mobile devices—often from the side of the road. Your website must work perfectly on phones.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Click-to-call buttons prominently displayed</li>
                <li>Mobile-optimized booking flow</li>
                <li>GPS directions integration</li>
                <li>Fast loading on cellular networks</li>
                <li>Touch-friendly navigation</li>
                <li>Emergency service quick access</li>
                <li>Text message appointment confirmations</li>
              </ul>
              <p className="text-gray-700 font-semibold text-blue-600">Result: Capture customers searching for immediate help and emergency services.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Milwaukee Auto Shops Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔧</span>Automotive Industry Expertise
              </h3>
              <p className="text-gray-700">
                We understand shop management systems, service writer workflows, and customer acquisition for auto shops. We speak your language and know what drives results in automotive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span>Milwaukee Market Knowledge
              </h3>
              <p className="text-gray-700">
                We know Milwaukee's automotive landscape, from competing with dealerships to attracting customers in specific neighborhoods. Local expertise drives local results.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💻</span>Shop Management Integration
              </h3>
              <p className="text-gray-700">
                We integrate with Mitchell1, Tekmetric, Shop-Ware, and other systems. Online bookings sync automatically, eliminating double-entry and scheduling conflicts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📈</span>Proven Results
              </h3>
              <p className="text-gray-700">
                Our auto shop clients see 40-150% increases in online bookings within 6 months. We track metrics that matter: appointments, revenue per customer, and repeat business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>Fast Turnaround
              </h3>
              <p className="text-gray-700">
                Most auto shop websites launch in 4-6 weeks. We understand you need results quickly, not a 6-month development process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>Ongoing Support
              </h3>
              <p className="text-gray-700">
                We provide ongoing maintenance, updates, and support. Need to add a new service or update pricing? We handle it quickly so you can focus on fixing cars.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Milwaukee Auto Shop Success Stories</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Independent Mechanic: 180% Increase in New Customers</h3>
              <p className="text-gray-700 mb-4">
                A 3-bay independent shop in West Allis was struggling to compete with nearby dealerships and national chains. They had no online booking, poor Google rankings, and only 8 reviews.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Complete website redesign with online booking, local SEO optimization, automated review system, and service-specific landing pages.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 180% increase in new customers within 6 months. Now ranking #1 for "mechanic West Allis" with 150+ five-star reviews. Online bookings account for 65% of new appointments.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transmission Specialist: $85K Additional Annual Revenue</h3>
              <p className="text-gray-700 mb-4">
                A transmission specialty shop was getting lost in generic "auto repair" searches. They needed to attract customers specifically looking for transmission services.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Created transmission-focused website with detailed service pages, diagnostic information, warranty details, and before/after case studies.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: $85,000 in additional annual revenue from transmission-specific searches. Ranking #1-3 for all transmission-related keywords in Milwaukee. Average job value increased 40%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Location Shop: Reduced Phone Volume by 55%</h3>
              <p className="text-gray-700 mb-4">
                A 3-location auto repair chain was overwhelmed with scheduling calls. Service writers spent 60% of their time on the phone instead of helping customers in the shop.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Implemented online booking system with shop management integration, automated reminders, and customer portal for service history.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 55% reduction in phone volume. Service writers now focus on in-shop customers. Online bookings increased from 0% to 70% of total appointments. Customer satisfaction scores up 35%.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Auto Repair Website Pricing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Transparent pricing for Milwaukee auto shops. No hidden fees, no surprises.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Shop</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$3,500 - $5,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 8-12 pages</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Online booking</li>
                <li>✓ Service pages</li>
                <li>✓ Local SEO setup</li>
                <li>✓ Google My Business</li>
                <li>✓ 30 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: 1-3 bay independent shops</p>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Shop</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$5,000 - $8,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 15-20 pages</li>
                <li>✓ Custom design</li>
                <li>✓ Shop system integration</li>
                <li>✓ Customer portal</li>
                <li>✓ Review automation</li>
                <li>✓ Advanced SEO</li>
                <li>✓ 90 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Established shops, specialty services</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Location</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$8,000 - $15,000+</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Unlimited pages</li>
                <li>✓ Multiple locations</li>
                <li>✓ Advanced features</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ Marketing automation</li>
                <li>✓ 6 months support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Chains, franchise locations</p>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2">What's Included in Every Project:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>✓ Mobile-optimized design</li>
              <li>✓ Online appointment booking</li>
              <li>✓ Local SEO optimization</li>
              <li>✓ Google My Business setup</li>
              <li>✓ Security & SSL</li>
              <li>✓ Analytics tracking</li>
              <li>✓ Training & documentation</li>
              <li>✓ Post-launch support</li>
            </ul>
          </div>
          <p className="text-gray-700"><strong>Monthly Maintenance:</strong> $150-$350/month (hosting, security, updates, support)</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it take to build an auto shop website?</h3>
              <p className="text-gray-700">
                Most auto repair websites take 4-6 weeks from kickoff to launch. This includes design, development, content creation, shop system integration, and testing. Rush timelines (3-4 weeks) are available if needed.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you integrate with my shop management system?</h3>
              <p className="text-gray-700">
                Yes. We integrate with Mitchell1, Tekmetric, Shop-Ware, AutoFluent, and most major shop management systems. Online bookings sync automatically with your existing system.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will my website help me get more customers?</h3>
              <p className="text-gray-700">
                Yes. We optimize for local search so customers find you on Google. Combined with online booking, review automation, and conversion-focused design, our clients typically see 50-180% increases in new customers within 6 months.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How does online booking work?</h3>
              <p className="text-gray-700">
                Customers see your real-time availability, select their service, choose a time, and book instantly. The appointment syncs with your shop management system automatically. You control which services are bookable online and can set buffer times between appointments.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-700">
                Yes. We offer monthly maintenance packages that include hosting, security updates, backups, content updates, and technical support. Most shops choose ongoing support to keep their website current and secure.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I update the website myself?</h3>
              <p className="text-gray-700">
                Yes. We build websites with user-friendly content management systems that allow you to update services, pricing, hours, and promotions without coding knowledge. We provide training and documentation.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you help with reviews?</h3>
              <p className="text-gray-700">
                We integrate automated review request systems that email customers after service completion, making it easy for them to leave reviews on Google, Facebook, and other platforms. This builds your online reputation automatically.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What makes you different from other web designers?</h3>
              <p className="text-gray-700">
                We specialize exclusively in automotive websites. We understand shop management systems, service writer workflows, and what drives customer acquisition for auto shops. Most agencies treat auto shops like any other business—we don't. That specialized expertise delivers better results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fill Your Service Bays?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's build a website that brings in new customers 24/7, fills your schedule automatically, and builds your reputation. Schedule a free demo to see how it works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Get Your Free Demo
            </Link>
            <Link href="tel:+1234567890" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white">
              Call Us Today
            </Link>
          </div>
          <p className="text-blue-100">
            📍 Serving Milwaukee, Wauwatosa, West Allis, Greenfield, and all of SE Wisconsin<br />
            ⚡ 4-6 week delivery • 💰 Transparent pricing • 🔧 Automotive specialists
          </p>
        </section>

        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local-seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">Rank #1 when Milwaukee drivers search for mechanics.</p>
            </Link>
            <Link href="/services/web-design" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Web Design</h3>
              <p className="text-gray-600 text-sm">Professional website design for all industries.</p>
            </Link>
            <Link href="/services/reputation-management" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Reputation Management</h3>
              <p className="text-gray-600 text-sm">Build and manage your online reviews automatically.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

