import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Heart, Shield, Phone, Mail, Clock, Star, Award, Users, TrendingUp, ArrowRight, Stethoscope, Activity, FileCheck, Lock, Globe, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Surgeon Web Design Austin | Medical Website Development',
  description: 'Custom website design for surgeons in Austin, TX. HIPAA-compliant, conversion-focused designs that attract more patients.',
  keywords: 'surgeon website design austin, medical web design austin, healthcare website austin, surgeon marketing austin, plastic surgeon website',
  alternates: {
    canonical: 'https://webvello.com/services/surgeon-web-design-austin',
  },
  openGraph: {
    title: 'Surgeon Web Design Austin | Medical Website Development',
    description: 'Custom website design for surgeons in Austin, TX. HIPAA-compliant, conversion-focused designs that attract more patients.',
    url: 'https://webvello.com/services/surgeon-web-design-austin',
    type: 'website',
    images: [{ url: 'https://webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Surgeon Web Design Austin' }],
  }
}

export default function SurgeonWebDesignAustinPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400">
              <Stethoscope className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Austin's Premier Surgical Website Design Agency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Surgeon Web Design Austin: Transform Your Surgical Practice Online
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
              HIPAA-compliant, conversion-optimized websites designed specifically for Austin surgeons. Attract more qualified patients, establish medical authority, and grow your practice with professional web design that reflects surgical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Request Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Surgeon Portfolios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">85+</div>
              <div className="text-gray-600">Surgeon Websites</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">180%</div>
              <div className="text-gray-600">Avg Patient Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">HIPAA Compliant</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600">Surgeon Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                In Austin's competitive medical landscape, your website is often the first interaction potential patients have with your surgical practice. As specialists in <strong>surgeon web design Austin</strong>, we understand that your website must do more than look professional—it must build trust, demonstrate expertise, educate patients about complex procedures, and convert visitors into consultations. Whether you're a plastic surgeon in Westlake, an orthopedic surgeon near St. David's, or a cardiovascular surgeon affiliated with Dell Medical School, we create digital presences that reflect your surgical precision and attract the patients you want to serve.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Austin's healthcare market is unique. The city attracts educated, research-oriented patients who thoroughly investigate surgeons before scheduling consultations. They compare credentials, read reviews, study before-and-after galleries, and evaluate your digital presence as a proxy for the quality of care they'll receive. Your website must meet these high expectations while maintaining HIPAA compliance, providing comprehensive patient education, showcasing your credentials and outcomes, and making it effortless for patients to schedule consultations. We specialize in creating surgical websites that excel in all these dimensions while standing out in Austin's crowded healthcare marketplace.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Austin Surgeons Trust Our Web Design Expertise</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Surgical website design requires specialized knowledge that general web designers simply don't possess. Here's why Austin's leading surgeons choose our agency for their digital presence:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Complete HIPAA Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patient privacy isn't optional—it's the law. Every website we build for surgeons includes HIPAA-compliant contact forms with SSL encryption, secure patient portals for test results and post-operative instructions, HIPAA-compliant hosting infrastructure, privacy-focused analytics that don't track PHI, compliant testimonial and before-after photo systems, and documented business associate agreements. We handle the technical compliance so you can focus on patient care without legal worries.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Activity className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Surgical Specialty Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We've designed websites for virtually every surgical specialty—plastic surgery, orthopedic surgery, cardiovascular surgery, neurosurgery, ENT surgery, bariatric surgery, and more. This deep experience means we understand the unique concerns of patients seeking each type of surgery, the competitive landscape within each specialty, effective ways to present complex medical information, and how to convert specialty-specific searches into consultations. Your website benefits from insights gained across 85+ surgical practices.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion-Focused Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A beautiful website that doesn't generate consultations is a failed investment. We design with conversion as the primary goal—prominent, psychologically-optimized calls-to-action, streamlined appointment request processes, trust signals strategically placed throughout the site, mobile-optimized experiences for patients researching on phones, page layouts tested to maximize consultation requests, and continuous A/B testing to improve conversion rates. On average, our surgeon websites convert 180% more visitors into consultations compared to typical medical websites.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Search className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medical SEO Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The most beautifully designed website is worthless if patients can't find it. Every website includes comprehensive medical SEO—optimized for local Austin searches, targeting procedure-specific keywords, structured data markup for rich search results, fast loading speeds that Google rewards, mobile-first responsive design, and integration with Google Business Profile and medical directories. We ensure patients searching for "plastic surgeon Austin" or "ACL repair surgeon near me" find your practice first.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features of Effective Surgeon Websites</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                After designing dozens of successful surgical websites in Austin, we've identified the features that consistently drive patient growth. Here's what every high-converting surgeon website must include:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Visual Design</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Your website's design immediately communicates your level of professionalism and attention to detail. Patients subconsciously evaluate whether they trust you based on visual presentation. We create custom designs featuring clean, modern aesthetics that reflect medical professionalism, high-quality professional photography of you, your staff, and facility, strategic use of color psychology (blues convey trust and competence), sophisticated typography that's both beautiful and readable, intuitive navigation that makes information easy to find, and whitespace that prevents cognitive overload.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Austin patients are sophisticated consumers who appreciate design quality. Your website should match the caliber of care you provide. We avoid dated medical website clichés (stock photos of unrealistic doctors, clipart, outdated color schemes) in favor of contemporary designs that appeal to Austin's educated demographic while maintaining the gravitas appropriate for surgical medicine.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Procedure Information</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Patients researching surgery want thorough information. Each procedure you perform should have a dedicated page covering the procedure overview in patient-friendly language, who is an ideal candidate, what to expect during the procedure, recovery timeline and expectations, potential risks and complications (presented honestly but not alarmingly), before-and-after photo galleries when appropriate, frequently asked questions, and clear next steps to schedule a consultation.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    These comprehensive procedure pages serve multiple purposes—they educate potential patients, reduce basic questions during consultations, build SEO authority, demonstrate your expertise, and qualify leads by helping patients self-assess candidacy. We write all procedure content in collaboration with you, ensuring medical accuracy while maintaining readability for patients without medical backgrounds.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compelling Surgeon Biography</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Your credentials and experience are primary factors in patient decision-making. Your biography section should highlight your medical education and residency, board certifications, fellowships and specialized training, years of experience and volume of procedures performed, professional affiliations and hospital privileges, published research and presentations, awards and recognition, and your personal philosophy of patient care. Beyond credentials, patients want to connect with you as a person—your story, why you became a surgeon, what you love about practicing in Austin.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We help surgeons present their credentials in compelling ways that differentiate them in competitive specialties. Your biography isn't just a resume—it's a persuasive document that builds trust and positions you as the obvious choice for patients considering surgery.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Testimonials and Reviews</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Social proof is critical for expensive, high-risk decisions like surgery. We integrate patient testimonials throughout your website in HIPAA-compliant ways, feature video testimonials when available, showcase Google and Healthgrades reviews, display aggregate ratings and review counts, organize testimonials by procedure type, and include authentic patient stories with specific outcomes. Nothing builds trust like other patients sharing their positive experiences.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also implement systems to continuously generate new reviews, respond to reviews (both positive and negative) professionally, feature your best reviews prominently, and protect patient privacy while leveraging the power of social proof. In competitive markets like Austin plastic surgery or orthopedic surgery, strong social proof often determines which surgeon gets the consultation.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Before-and-After Galleries</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For surgical specialties where visual outcomes matter (plastic surgery, dermatologic surgery, facial plastic surgery), before-and-after galleries are essential. We create sophisticated gallery systems featuring high-quality, consistent photography, proper lighting and angles for accurate comparison, organized by procedure type, HIPAA-compliant patient consent, watermarking to prevent image theft, mobile-optimized viewing, and optional filtering by specific concerns or demographics.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Quality galleries demonstrate your skill more effectively than any written description. Patients want to see your actual results on real patients with similar concerns. We help you present these results in the most compelling, ethical ways possible.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Appointment Scheduling</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Friction in the appointment process loses patients. Modern surgeon websites need seamless scheduling systems—online scheduling integration, HIPAA-compliant contact forms, prominent phone numbers with click-to-call on mobile, live chat for immediate questions, email and SMS confirmation systems, new patient intake forms that can be completed online, and insurance verification processes. Every unnecessary step in your scheduling process reduces conversion rates.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also implement conversion rate optimization techniques—multiple calls-to-action per page, urgency and scarcity messaging when appropriate, consultation guarantees or free initial consultations prominently featured, and remarketing systems to re-engage visitors who didn't schedule initially. The goal is to make scheduling consultations as frictionless as possible while collecting the information your staff needs.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Content and Resources</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Position yourself as an educational authority through comprehensive content—detailed blog covering topics relevant to your specialty, downloadable patient guides and checklists, procedure preparation instructions, post-operative care guidelines, FAQ sections addressing common concerns, videos explaining procedures or recovery, and infographics simplifying complex medical information. This content serves multiple purposes—improves SEO, educates patients, demonstrates expertise, builds trust, and provides value beyond just sales messaging.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We can create this educational content for you or train your staff to maintain it ongoing. Regularly updated educational content keeps your website fresh, gives patients reasons to return, and signals to search engines that your site is an authoritative resource worthy of top rankings.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Over 70% of healthcare searches now happen on mobile devices. Your surgeon website must provide exceptional mobile experiences—fast loading speeds on cellular connections, touch-friendly buttons and forms, readable text without zooming, properly sized images, easy-to-tap phone numbers, mobile-optimized navigation, and forms designed for mobile completion. Google now primarily ranks websites based on mobile performance, making mobile optimization essential for both user experience and SEO.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We design mobile-first, ensuring perfect functionality on smartphones and tablets before expanding to desktop. This approach guarantees optimal experiences for the majority of your potential patients who will discover and evaluate your practice on mobile devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Surgical Specialties We Serve in Austin</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our <strong>surgeon web design Austin</strong> expertise spans all surgical specialties. We understand the unique marketing challenges, patient concerns, and competitive dynamics within each specialty:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Plastic Surgery',
                  'Orthopedic Surgery',
                  'Cardiovascular Surgery',
                  'Neurosurgery',
                  'ENT Surgery',
                  'Bariatric Surgery',
                  'Oral & Maxillofacial Surgery',
                  'General Surgery',
                  'Colorectal Surgery',
                  'Vascular Surgery',
                  'Pediatric Surgery',
                  'Thoracic Surgery',
                  'Hand Surgery',
                  'Spine Surgery',
                  'Reconstructive Surgery',
                  'Cosmetic Surgery',
                  'Ophthalmic Surgery',
                  'Urologic Surgery'
                ].map((specialty, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Austin Surgeon Success Stories</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <Heart className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Westlake Plastic Surgeon</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">220%</div>
                  <p className="text-gray-700 mb-4">Increase in consultation requests</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>#1 ranking for "breast augmentation Austin"</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>42% increase in monthly consultations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$180K additional monthly revenue</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <Activity className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Orthopedic Surgeon</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">165%</div>
                  <p className="text-gray-700 mb-4">Growth in new patient volume</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Top 3 for all major orthopedic searches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>38% reduction in marketing cost per patient</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>4.9-star average across all review platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Elevate Your Surgical Practice Online?
              </h2>
              <p className="text-xl text-blue-50">
                Schedule a free consultation to discuss your website and marketing goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="Dr. Sarah Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="dr.johnson@practice.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="(512) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Practice Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="Your Surgical Practice" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Surgical Specialty *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900">
                    <option value="">Select your specialty...</option>
                    <option>Plastic Surgery</option>
                    <option>Orthopedic Surgery</option>
                    <option>Cardiovascular Surgery</option>
                    <option>Neurosurgery</option>
                    <option>ENT Surgery</option>
                    <option>Other Specialty</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Website (if any)</label>
                  <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="https://yourpractice.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What are your primary goals?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" placeholder="Tell us about your practice and what you'd like to achieve with a new website..." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  <Shield className="inline h-4 w-4 mr-1" />
                  HIPAA-compliant. Your information is secure and confidential.
                </p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+15305538883" className="text-blue-200 hover:text-white">(530) 553-8883</a>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <a href="mailto:hello@webvello.com" className="text-blue-200 hover:text-white">hello@webvello.com</a>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join 85+ Austin Surgeons Growing Their Practices with Web Vello
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Partner with Austin's premier <strong>surgeon website design</strong> agency. Let's build your digital presence together.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


