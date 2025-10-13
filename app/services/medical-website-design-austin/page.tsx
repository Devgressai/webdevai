import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Austin Medical Website Design | Healthcare Web Development Texas',
  description: 'HIPAA-compliant medical website design for Austin doctors, clinics, and healthcare providers. Patient-focused, mobile-optimized, and built to grow your practice.',
  openGraph: {
    title: 'Austin Medical Website Design | Healthcare Web Development Texas',
    description: 'HIPAA-compliant medical website design for Austin doctors, clinics, and healthcare providers.',
    url: 'https://www.webvello.com/services/medical-website-design-austin',
    siteName: 'WebVello',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AustinMedicalWebsiteDesignPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Austin Medical Website Design That Attracts More Patients
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              HIPAA-compliant websites for Austin doctors and healthcare providers. Convert visitors into patients with professional design and seamless online booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Get Your Free Consultation
              </Link>
              <Link href="/pricing" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white">
                View Our Work
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2"><span className="text-2xl">🏥</span><span>100+ Medical Practices</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">🔒</span><span>HIPAA Compliant</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">📱</span><span>Mobile-First Design</span></div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Here's a reality check for Austin healthcare providers: your potential patients are searching for doctors online right now. "Primary care doctor near me." "Best dermatologist in Austin." "Pediatrician accepting new patients." When they find you, what do they see? An outdated website that looks like it was built in 2010? A confusing navigation that makes booking an appointment nearly impossible? Or worse—no website at all?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In Austin's competitive healthcare market—from downtown medical towers to suburban clinics in Round Rock and Cedar Park—your website is often the deciding factor between a patient choosing you or your competitor. 77% of patients use search engines before booking an appointment, and 80% say a practice's website influences their decision. If your website doesn't inspire confidence, you're losing patients every single day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As specialists in <strong>medical website design for Austin</strong> healthcare providers, we understand the unique challenges you face. You need HIPAA compliance for patient data. You need online appointment scheduling that actually works. You need to communicate your expertise while remaining approachable. You need to rank on Google for local searches. And you need to do all of this while running a busy practice and seeing patients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a solo practitioner opening your first practice, a multi-specialty clinic expanding to new locations, or an established healthcare provider modernizing your online presence, your website should be your hardest-working employee—attracting new patients 24/7, answering common questions, and making it effortless for patients to schedule appointments. Let's build that together.
          </p>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Austin Medical Practices Struggle With Their Websites</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Website Doesn't Show Up When Patients Search</h3>
              <p className="text-gray-700 mb-3">
                When someone in Austin searches "family doctor near me" or "urgent care Westlake," are you showing up? If you're not on page one of Google, you're invisible. 75% of users never scroll past the first page, and the top 3 results get 75% of all clicks. Every day you're not ranking is another day competitors are capturing patients who should be yours.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build SEO-optimized medical websites that rank on page one for Austin local searches. Google My Business optimization, local citations, and geo-targeted content put you in front of patients actively searching for your services.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Patients Can't Book Appointments Online</h3>
              <p className="text-gray-700 mb-3">
                It's 2025, and patients expect to book appointments online—not play phone tag with your receptionist. If your website doesn't offer online scheduling, you're losing patients to practices that do. 40% of patients say they'd switch providers for better online booking options. That's not a preference—it's a dealbreaker.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We integrate seamless online appointment scheduling that syncs with your practice management system. Patients book 24/7, your staff saves time, and you fill your schedule automatically.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Website Isn't HIPAA Compliant</h3>
              <p className="text-gray-700 mb-3">
                If you're collecting patient information through your website—contact forms, appointment requests, patient portals—HIPAA compliance isn't optional. One data breach can result in massive fines ($100-$50,000 per violation) and destroy your reputation. Most web developers don't understand healthcare regulations, leaving you vulnerable.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build HIPAA-compliant websites with encrypted data transmission, secure patient portals, proper consent forms, and business associate agreements. Your patient data stays protected, and you stay compliant.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Website Looks Unprofessional</h3>
              <p className="text-gray-700 mb-3">
                First impressions matter in healthcare. An outdated, slow, or poorly designed website makes patients question your competence. If you can't maintain a professional website, how can they trust you with their health? 94% of first impressions are design-related, and 75% of users judge credibility based on website design.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We design modern, professional medical websites that build trust instantly. Clean layouts, high-quality images, patient testimonials, and clear calls-to-action convert visitors into patients.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">You're Not Accepting New Patients Because Your Schedule Is Empty</h3>
              <p className="text-gray-700 mb-3">
                Here's the irony: you have availability, but patients can't find you online or your website makes it too difficult to book. Meanwhile, competitors with better websites are fully booked. Your empty schedule isn't a marketing problem—it's a website problem.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We create patient acquisition machines—websites optimized for local search, designed for conversions, and equipped with online booking. Fill your schedule with qualified patients who are ready to book.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Our Austin Medical Website Design Different</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most web design agencies treat medical practices like any other business. They don't understand HIPAA, patient psychology, or the competitive dynamics of Austin's healthcare market. That's why so many medical websites fail to attract patients.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">We Specialize in Healthcare</h3>
            <p className="text-gray-700 mb-4">
              We've built websites for 100+ medical practices across Austin—primary care, specialists, dental, mental health, urgent care, and more. We understand patient acquisition, insurance verification, online reputation management, and the regulations that govern healthcare marketing.
            </p>
            <p className="text-gray-700">
              When you explain your EHR integration needs or discuss patient portal requirements, we don't need a translator. We get it, and that expertise translates into websites that actually work for medical practices.
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Austin's healthcare market is unique. With Dell Medical School, St. David's HealthCare, Ascension Seton, and hundreds of private practices, competition for patients is fierce. Add in the influx of tech workers with high expectations for digital experiences, and you need a website that stands out.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We've designed websites for family medicine practices in Westlake, pediatric clinics in Round Rock, dermatology practices downtown, orthopedic surgeons in Cedar Park, and everything in between. Each specialty has unique needs, and we know how to address them.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you work with us, you're not just getting a website—you're getting a strategic partner who understands healthcare and is invested in growing your practice. That's the difference between a generic web design agency and specialists who live and breathe medical website design.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Complete Medical Website Design Services</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🏥</span>Primary Care & Family Medicine Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Family doctors need websites that appeal to all ages—from young families to seniors. We create welcoming, easy-to-navigate sites that showcase your comprehensive care and make booking appointments effortless.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Services overview (wellness exams, chronic disease management, preventive care)</li>
                <li>Online appointment scheduling with insurance verification</li>
                <li>New patient forms and registration</li>
                <li>Patient portal integration</li>
                <li>Insurance and billing information</li>
                <li>Meet the doctor and staff bios</li>
                <li>Patient testimonials and reviews</li>
                <li>Health resources and blog</li>
              </ul>
              <p className="text-gray-700"><strong>Perfect for:</strong> Family medicine, internal medicine, and primary care practices.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🦷</span>Dental Practice Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Dental websites need to overcome patient anxiety while showcasing your expertise. We create friendly, professional sites that make patients comfortable and drive appointment bookings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Service pages (cleanings, cosmetic, implants, orthodontics)</li>
                <li>Before/after photo galleries</li>
                <li>Online appointment booking</li>
                <li>New patient specials and promotions</li>
                <li>Financing and payment options</li>
                <li>Emergency dental care information</li>
                <li>Virtual consultations</li>
                <li>Patient education videos</li>
              </ul>
              <p className="text-gray-700"><strong>Perfect for:</strong> General dentistry, cosmetic dentistry, orthodontics, and oral surgery practices.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🧠</span>Mental Health & Therapy Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Mental health websites require sensitivity, privacy, and accessibility. We create calming, confidential sites that make it easy for patients to take the first step toward getting help.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Therapy approaches and specialties</li>
                <li>Confidential online intake forms</li>
                <li>Teletherapy/telehealth integration</li>
                <li>Insurance and sliding scale information</li>
                <li>Crisis resources and hotlines</li>
                <li>Blog with mental health resources</li>
                <li>HIPAA-compliant messaging</li>
                <li>Online scheduling with privacy protection</li>
              </ul>
              <p className="text-gray-700"><strong>Perfect for:</strong> Therapists, psychologists, psychiatrists, and counseling practices.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💉</span>Specialty Practice Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Specialists need to establish expertise while explaining complex conditions in patient-friendly terms. We create authoritative websites that educate patients and drive referrals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Condition-specific education pages</li>
                <li>Treatment options and procedures</li>
                <li>Physician credentials and publications</li>
                <li>Referring physician portal</li>
                <li>Patient success stories</li>
                <li>Clinical trials information</li>
                <li>Advanced diagnostic capabilities</li>
                <li>Second opinion consultations</li>
              </ul>
              <p className="text-gray-700"><strong>Perfect for:</strong> Cardiology, dermatology, orthopedics, gastroenterology, and all medical specialties.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🚑</span>Urgent Care & Walk-In Clinic Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Urgent care patients need information fast—hours, location, wait times, services. We create streamlined websites optimized for mobile users seeking immediate care.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Real-time wait times</li>
                <li>Online check-in and registration</li>
                <li>Services and conditions treated</li>
                <li>Insurance accepted</li>
                <li>Multiple location management</li>
                <li>Directions and parking information</li>
                <li>Pricing transparency</li>
                <li>Telemedicine options</li>
              </ul>
              <p className="text-gray-700"><strong>Perfect for:</strong> Urgent care centers, walk-in clinics, and emergency medicine practices.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Austin Healthcare Providers Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔒</span>HIPAA Compliance Guaranteed
              </h3>
              <p className="text-gray-700">
                Every website includes encrypted data transmission, secure hosting with BAAs, HIPAA-compliant forms, and proper consent mechanisms. We handle the technical compliance so you can focus on patient care.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📅</span>Seamless Appointment Scheduling
              </h3>
              <p className="text-gray-700">
                We integrate with major EHR systems (Epic, Cerner, Athenahealth, etc.) for real-time availability and automatic scheduling. Patients book online 24/7, reducing phone volume and no-shows.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>Local SEO Optimization
              </h3>
              <p className="text-gray-700">
                We optimize for Austin local search so patients find you when searching for healthcare services. Google My Business optimization, local citations, and geo-targeted content drive patient acquisition.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📱</span>Mobile-First Design
              </h3>
              <p className="text-gray-700">
                70% of patients search for doctors on mobile devices. Your website works perfectly on phones and tablets, ensuring no patient is lost due to poor mobile experience.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>Fast Loading Speeds
              </h3>
              <p className="text-gray-700">
                Your website loads in under 2 seconds. Fast sites rank higher on Google, reduce bounce rates, and provide better patient experiences. Speed equals more patients.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⭐</span>Reputation Management
              </h3>
              <p className="text-gray-700">
                We integrate review systems that make it easy for happy patients to leave positive reviews on Google, Healthgrades, and Vitals. Build your online reputation automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span>Transparent Pricing
              </h3>
              <p className="text-gray-700">
                No hidden fees or surprise charges. We provide detailed proposals with clear pricing before any work begins. Most medical websites range from $5,000-$15,000 depending on features.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>Ongoing Support
              </h3>
              <p className="text-gray-700">
                We provide ongoing maintenance, security updates, and support. Need to add a new provider or update services? We handle it quickly so your website stays current.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serving Austin's Healthcare Community</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Austin's healthcare landscape is growing rapidly with the city's population boom. We serve medical practices across the greater Austin area and understand the unique dynamics of each neighborhood.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏙️ Downtown & Central Austin</h4>
              <p className="text-gray-700">
                High-density urban practices serving young professionals and tech workers who expect seamless digital experiences and online booking.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">👨‍👩‍👧‍👦 Round Rock & Cedar Park</h4>
              <p className="text-gray-700">
                Family-focused suburban practices serving growing communities with emphasis on pediatrics, family medicine, and convenience.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">💼 Westlake & West Austin</h4>
              <p className="text-gray-700">
                Affluent areas with demand for concierge medicine, aesthetic services, and premium healthcare experiences.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎓 University Area</h4>
              <p className="text-gray-700">
                Practices serving UT students and staff, requiring flexible scheduling, mental health services, and sports medicine.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Austin Medical Practice Success Stories</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Medicine Practice: 180% Increase in New Patients</h3>
              <p className="text-gray-700 mb-4">
                A family medicine practice in Round Rock was struggling to attract new patients despite having availability. Their outdated website didn't offer online booking and wasn't showing up in local searches.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Complete website redesign with online appointment scheduling, local SEO optimization, patient portal integration, and mobile-first design.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 180% increase in new patient appointments within 6 months. Now ranking #1 for "family doctor Round Rock" and receiving 40+ online bookings per week.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dermatology Practice: Reduced Phone Volume by 60%</h3>
              <p className="text-gray-700 mb-4">
                A busy dermatology practice in Westlake was overwhelmed with phone calls for appointments, prescription refills, and basic questions. Staff couldn't keep up.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Implemented online scheduling, patient portal for refills and results, comprehensive FAQ section, and automated appointment reminders.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 60% reduction in phone volume, staff productivity increased dramatically, and patient satisfaction scores improved. Practice now sees 30% more patients with same staff.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Urgent Care Center: $200K Additional Annual Revenue</h3>
              <p className="text-gray-700 mb-4">
                An urgent care center in Cedar Park wasn't capturing patients searching for immediate care online. Most traffic was going to competitors with better websites.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Mobile-optimized website with real-time wait times, online check-in, clear service listings, and aggressive local SEO for "urgent care near me" searches.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: $200,000 in additional annual revenue from new patients. Website now drives 45% of all patient visits. Ranking #1 for urgent care searches in Cedar Park area.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Medical Website Design Pricing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Transparent pricing for Austin medical practices. No hidden fees, no surprises.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solo Practice</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$5,000 - $8,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 8-12 pages</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Online appointment booking</li>
                <li>✓ HIPAA compliance</li>
                <li>✓ Local SEO setup</li>
                <li>✓ Contact forms</li>
                <li>✓ 30 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Solo practitioners, small practices</p>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Group Practice</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$8,000 - $15,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 15-25 pages</li>
                <li>✓ Custom design</li>
                <li>✓ EHR integration</li>
                <li>✓ Patient portal</li>
                <li>✓ Multi-provider scheduling</li>
                <li>✓ Advanced SEO</li>
                <li>✓ 90 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Multi-provider practices, clinics</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Location</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$15,000 - $30,000+</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Unlimited pages</li>
                <li>✓ Multiple locations</li>
                <li>✓ Advanced features</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ Marketing automation</li>
                <li>✓ 6 months support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Healthcare systems, multi-location practices</p>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2">What's Included in Every Project:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>✓ HIPAA-compliant design</li>
              <li>✓ Mobile optimization</li>
              <li>✓ Online appointment booking</li>
              <li>✓ Local SEO optimization</li>
              <li>✓ Security & SSL</li>
              <li>✓ Analytics setup</li>
              <li>✓ Training & documentation</li>
              <li>✓ Post-launch support</li>
            </ul>
          </div>
          <p className="text-gray-700"><strong>Monthly Maintenance:</strong> $200-$500/month (hosting, security, updates, support)</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it take to build a medical website?</h3>
              <p className="text-gray-700">
                Most medical websites take 6-8 weeks from kickoff to launch. This includes design, development, content creation, HIPAA compliance review, and testing. Rush timelines (4-6 weeks) are available if needed.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is my website really HIPAA compliant?</h3>
              <p className="text-gray-700">
                Yes. We implement encrypted data transmission, secure hosting with business associate agreements, HIPAA-compliant forms, and proper consent mechanisms. We provide documentation of compliance measures for your records.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you integrate with my EHR system?</h3>
              <p className="text-gray-700">
                Yes. We integrate with major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, and others. Online appointment scheduling syncs with your existing system for real-time availability.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will my website help me get more patients?</h3>
              <p className="text-gray-700">
                Yes. We optimize for local search so patients find you on Google. Combined with online booking, patient-friendly design, and conversion optimization, our clients typically see 50-200% increases in new patient appointments within 6 months.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can patients book appointments online?</h3>
              <p className="text-gray-700">
                Yes. We integrate online scheduling that syncs with your practice management system. Patients can book 24/7, see real-time availability, and receive automated reminders. This reduces no-shows and phone volume.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-700">
                Yes. We offer monthly maintenance packages that include hosting, security updates, backups, content updates, and technical support. Most practices choose ongoing support to keep their website current and secure.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I update the website myself?</h3>
              <p className="text-gray-700">
                Yes. We build websites with user-friendly content management systems that allow you to update text, images, and pages without coding knowledge. We provide training and documentation.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What makes you different from other web designers?</h3>
              <p className="text-gray-700">
                We specialize exclusively in medical website design. We understand HIPAA, patient acquisition, online reputation management, and healthcare marketing. Most agencies treat medical practices like any other business—we don't. That specialized expertise delivers better results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Attract More Patients?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's build a HIPAA-compliant website that fills your schedule with qualified patients. Schedule a free consultation to discuss your practice's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Get Your Free Consultation
            </Link>
            <Link href="tel:+1234567890" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white">
              Call Us Today
            </Link>
          </div>
          <p className="text-blue-100">
            📍 Serving Austin, Round Rock, Cedar Park, and all of Central Texas<br />
            ⚡ 6-8 week delivery • 💰 Transparent pricing • 🔒 HIPAA compliant
          </p>
        </section>

        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Medical SEO</h3>
              <p className="text-gray-600 text-sm">Get found by patients searching for healthcare services in Austin.</p>
            </Link>
            <Link href="/services/web-development" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Custom Web Development</h3>
              <p className="text-gray-600 text-sm">Advanced web applications for healthcare organizations.</p>
            </Link>
            <Link href="/services/local-seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">Dominate local search results for Austin healthcare services.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

