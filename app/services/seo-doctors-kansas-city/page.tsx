import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Heart, Users, Award, TrendingUp, Phone, Mail, Clock, Star, Shield, Target, Search, Calendar, MapPin, ArrowRight, Stethoscope, Activity } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for Doctors Kansas City | Medical Practice SEO',
  description: 'Specialized SEO services for doctors and medical practices in Kansas City. Get more patients through local search. HIPAA compliant strategies that work.',
  keywords: 'seo for doctors kansas city, medical practice seo kansas city, doctor seo services, healthcare seo kansas city, physician marketing',
  alternates: {
    canonical: 'https://webvello.com/services/seo-doctors-kansas-city',
  },
  openGraph: {
    title: 'SEO for Doctors Kansas City | Medical Practice SEO',
    description: 'Specialized SEO for doctors in Kansas City. Get more patients through local search with HIPAA-compliant strategies.',
    url: 'https://webvello.com/services/seo-doctors-kansas-city',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO for Doctors Kansas City',
      },
    ],
  }
}

export default function SEODoctorsKansasCityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-500">
              <Stethoscope className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Healthcare SEO Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SEO for Doctors Kansas City: Get More Patients Online
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
              Specialized search engine optimization for medical practices, physicians, and healthcare providers in Kansas City. HIPAA-compliant strategies that fill your appointment calendar with qualified patients actively searching for your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Practice Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Doctor Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Kansas City Doctors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Avg Patient Growth</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Lead Generation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                In Kansas City's competitive healthcare market, being a great doctor isn't enough anymore. Your potential patients are online right now, searching for medical services on Google. If your practice doesn't appear at the top of search results, you're losing patients to competitors who invested in professional <strong>SEO for doctors in Kansas City</strong>. The good news? With the right digital marketing strategy, you can dominate local medical search results and grow your practice consistently.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                At Web Vello, we specialize exclusively in medical practice SEO. We understand the unique challenges healthcare providers face—from HIPAA compliance requirements to the complex patient journey. Our proven strategies have helped over 150 Kansas City area physicians, specialists, and medical practices significantly increase their patient base through targeted search engine optimization. Whether you're a solo practitioner, part of a group practice, or running a specialty clinic, we have the expertise to put your practice in front of patients actively seeking your services.
              </p>
            </div>

            {/* Why Medical SEO Matters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why SEO Matters for Kansas City Medical Practices</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The healthcare landscape has transformed dramatically. Today, 77% of patients use search engines before booking a medical appointment, and 72% of them never scroll past the first page of Google results. If your practice isn't ranking on page one for relevant searches like "family doctor Kansas City" or "pediatrician near me," you're virtually invisible to the vast majority of potential patients. Here's why investing in professional medical SEO isn't optional anymore—it's essential for practice growth:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Patients Are Searching Online</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every month, thousands of Kansas City residents search Google for healthcare services. They're looking for doctors who accept their insurance, specialize in their condition, have convenient locations, and have positive reviews. Without strong SEO, these potential patients will never discover your practice exists, no matter how exceptional your care is.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Target className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Competition Is Intense</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kansas City has hundreds of medical practices competing for the same patients. Your competitors are investing in SEO to capture market share. Practices with optimized websites consistently outperform those without digital marketing strategies. Don't let competing doctors dominate search results while your calendar has openings.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Patient Acquisition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike paid advertising that stops the moment you stop paying, SEO delivers compounding returns. Once your practice ranks well, you receive a steady stream of new patient inquiries month after month without ongoing advertising costs. It's the most cost-effective patient acquisition strategy for growing medical practices.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Build Practice Reputation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    High search rankings establish credibility. Patients perceive practices at the top of Google as more reputable and established. Combined with positive online reviews and authoritative content, strong SEO positions you as a trusted healthcare provider in the Kansas City community, attracting higher-quality patients.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive SEO Services for Kansas City Doctors</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Medical practice SEO requires specialized knowledge of healthcare marketing, local search optimization, and patient behavior. Our comprehensive approach addresses every factor that influences your practice's online visibility. Here's what we do to get your medical practice ranking at the top of Kansas City search results:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Local SEO Domination</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For doctors, local SEO is everything. We optimize your Google Business Profile to appear in the coveted "local pack"—those three businesses that appear at the top of Google Maps results. This includes claiming and verifying your listing, optimizing your business description with relevant keywords, adding high-quality photos of your practice, ensuring accurate NAP (Name, Address, Phone) information across all online directories, and implementing a strategic review generation system to build a 5-star reputation.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also create location-specific content targeting Kansas City neighborhoods where your ideal patients live. Whether you want to attract patients from Overland Park, Leawood, Lee's Summit, or downtown Kansas City, we develop hyper-local content strategies that put your practice in front of patients in your target service areas.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Website Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Your website is your digital front door. We conduct comprehensive technical audits to identify and fix issues preventing your site from ranking. This includes improving page load speed (critical for mobile users searching for doctors), fixing broken links and crawl errors, implementing proper schema markup so Google understands your practice information, optimizing your site architecture for easy navigation, and ensuring mobile responsiveness since over 60% of medical searches happen on smartphones.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also optimize every page on your website with strategic keywords, compelling meta descriptions that improve click-through rates, proper heading structures, internal linking to guide patients to conversion pages, and clear calls-to-action that encourage appointment bookings. Your website will be designed to convert visitors into patients, not just generate traffic.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing for Healthcare</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    High-quality medical content establishes your authority and helps you rank for informational searches that lead to patient conversions. We create blog posts answering common patient questions related to your specialty, service pages optimized for specific procedures and conditions you treat, FAQ content targeting voice search queries ("what doctor takes my insurance near me"), and educational resources that position you as a trusted healthcare provider.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    All content is written by healthcare content specialists who understand medical terminology, patient concerns, and HIPAA compliance. We ensure medical accuracy while keeping content accessible for patients without medical backgrounds. Every piece of content is optimized for search engines while prioritizing patient education and trust-building.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Reputation Management</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Patient reviews are among the most important ranking factors for local medical SEO. We implement systematic review generation processes that encourage satisfied patients to leave positive reviews on Google, Healthgrades, Vitals, and other healthcare review platforms. We also monitor your online reputation, alert you to new reviews, help you respond professionally to feedback (both positive and negative), and address any reputation issues before they impact your practice.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Studies show that 84% of patients trust online reviews as much as personal recommendations. Having numerous recent, positive reviews doesn't just improve your rankings—it dramatically increases your conversion rate when potential patients find your practice online. We help you build an authentic, impressive online reputation that reflects the quality care you provide.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Citation Building & Directory Listings</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Search engines verify your practice information across hundreds of online directories and healthcare platforms. We ensure your practice has consistent, accurate listings on all major medical directories including Healthgrades, WebMD, Zocdoc, Vitals, RateMDs, and Kansas City-specific business directories. We claim unclaimed listings, correct inconsistent information, and build new citations on authoritative healthcare websites.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    This citation-building process signals to Google that your practice is legitimate and authoritative, directly improving your local search rankings. We also ensure your practice appears on insurance provider directories, hospital affiliation pages, and medical association listings that patients reference when choosing a doctor.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Rate Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Getting traffic to your website is only half the battle. We optimize your site to convert visitors into appointments. This includes strategic placement of appointment request forms, click-to-call buttons prominently displayed (especially on mobile), live chat integration for immediate patient questions, insurance information clearly displayed, and trust signals like certifications, awards, and patient testimonials.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We continuously test and refine these conversion elements through A/B testing, heat map analysis to see how patients interact with your site, and form optimization to reduce friction in the appointment booking process. Our goal isn't just to generate website visits—it's to fill your calendar with new patients who are the right fit for your practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialties We Serve */}
            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Specialties We Serve in Kansas City</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We have extensive experience providing <strong>SEO for doctors in Kansas City</strong> across all medical specialties. Each specialty requires a unique approach to keyword targeting, content strategy, and patient acquisition. Here are some of the medical practices we've successfully helped grow:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Family Medicine',
                  'Internal Medicine',
                  'Pediatrics',
                  'OB/GYN',
                  'Orthopedics',
                  'Dermatology',
                  'Cardiology',
                  'Gastroenterology',
                  'Endocrinology',
                  'Neurology',
                  'Psychiatry',
                  'Physical Therapy',
                  'Chiropractic',
                  'Ophthalmology',
                  'ENT',
                  'Urology',
                  'Rheumatology',
                  'Oncology',
                  'Pain Management',
                  'Sports Medicine',
                  'Urgent Care',
                  'Weight Loss',
                  'Cosmetic Surgery',
                  'Dentistry'
                ].map((specialty, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Results for Kansas City Medical Practices</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Don't take our word for it—see the measurable results we've delivered for Kansas City area doctors and medical practices. These case studies represent real practices that trusted us with their digital marketing and saw significant growth in patient acquisition.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <Activity className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Family Practice - Overland Park</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">287%</div>
                  <p className="text-gray-700 mb-4">Increase in new patient inquiries in 8 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ranking #1 for "family doctor Overland Park"</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>200+ five-star reviews generated</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Website traffic increased 420%</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <Heart className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Cardiology Practice - Kansas City</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">156%</div>
                  <p className="text-gray-700 mb-4">Growth in consultation requests in 6 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dominating local pack for "cardiologist Kansas City"</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>45% of new patients now from organic search</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$18,000 average monthly patient value from SEO</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Kansas City Doctors Choose Web Vello</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Healthcare SEO Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">We exclusively focus on medical practices and healthcare providers. We understand HIPAA compliance, medical terminology, patient journey mapping, and the unique challenges of healthcare marketing. You're not working with a generalist agency—you're partnering with healthcare digital marketing experts who speak your language.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Deep Kansas City Market Knowledge</h3>
                    <p className="text-gray-700 leading-relaxed">We know the Kansas City healthcare landscape inside and out. We understand the competitive dynamics, patient demographics, neighborhood characteristics, and local search patterns. This local expertise allows us to create highly targeted campaigns that resonate with Kansas City patients and outperform competitors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">We've helped over 150 Kansas City medical practices grow their patient base through SEO. Our case studies demonstrate consistent, measurable results across all medical specialties. We don't promise overnight miracles—we deliver sustainable, long-term growth through ethical, white-hat SEO practices.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Transparent Communication</h3>
                    <p className="text-gray-700 leading-relaxed">You'll never wonder what we're doing or how your campaigns are performing. We provide detailed monthly reports showing keyword rankings, website traffic growth, new patient inquiries, and ROI metrics. You'll have a dedicated account manager who understands your practice and responds promptly to questions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Results-Driven Approach</h3>
                    <p className="text-gray-700 leading-relaxed">We're not satisfied with vanity metrics. Our success is measured by one thing: new patients for your practice. Every strategy, every piece of content, every optimization is designed to attract qualified patients who are actively seeking your services. We focus on ROI, not just rankings.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Kansas City Medical Practice?
              </h2>
              <p className="text-xl text-blue-50">
                Get a free SEO analysis and discover how many new patients you're missing out on each month.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="doctor@practice.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="(816) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical Specialty *
                    </label>
                    <select
                      id="specialty"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select your specialty...</option>
                      <option>Family Medicine</option>
                      <option>Internal Medicine</option>
                      <option>Pediatrics</option>
                      <option>OB/GYN</option>
                      <option>Orthopedics</option>
                      <option>Dermatology</option>
                      <option>Cardiology</option>
                      <option>Other Specialty</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Practice Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="https://yourpractice.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Practice Goals
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="How many new patients are you looking to add per month? What's your biggest marketing challenge?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                  Get My Free Practice Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  <Shield className="inline h-4 w-4 mr-1" />
                  100% HIPAA compliant. Your information is secure and confidential.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+15305538883" className="text-blue-200 hover:text-white">
                  (530) 553-8883
                </a>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <a href="mailto:hello@webvello.com" className="text-blue-200 hover:text-white">
                  hello@webvello.com
                </a>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Business Hours</div>
                <div className="text-blue-100">Mon-Fri: 9AM-6PM CST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stop Losing Patients to Competitors
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Every day without professional <strong>SEO for doctors in Kansas City</strong> means potential patients are choosing other practices. Let's change that starting today.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

