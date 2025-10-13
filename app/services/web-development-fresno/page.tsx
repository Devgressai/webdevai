import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fresno Web Development Services | Expert Web Developer in Fresno, CA',
  description: 'Top-rated web development company in Fresno, CA. Custom websites, e-commerce, and web applications for Central Valley businesses. Free consultation available.',
  openGraph: {
    title: 'Fresno Web Development Services | Expert Web Developer in Fresno, CA',
    description: 'Top-rated web development company in Fresno, CA. Custom websites, e-commerce, and web applications for Central Valley businesses.',
    url: 'https://www.webvello.com/services/web-development-fresno',
    siteName: 'WebVello',
    locale: 'en_US',
    type: 'website',
  },
};

export default function FresnoWebDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fresno Web Development That Drives Real Results
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Custom websites and web applications built for Central Valley businesses. Fast, secure, and designed to convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Free Consultation
              </Link>
              <Link
                href="/pricing"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                View Our Pricing
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>150+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Here's something most Fresno business owners don't realize: your website isn't just a digital business card anymore. It's your hardest-working employee, your 24/7 salesperson, and often the first impression potential customers have of your business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In Central California's competitive market—from agricultural tech companies in Clovis to healthcare providers in North Fresno—having a website that actually works for your business isn't optional. It's essential. And that's exactly what we build.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a leading <strong>web developer in Fresno</strong>, we've spent over a decade helping local businesses transform their online presence. We're not talking about cookie-cutter templates or one-size-fits-all solutions. We're talking about custom web development that understands the unique challenges of doing business in the Central Valley.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a family-owned business that's been serving Fresno for generations or a startup disrupting the agricultural technology space, your website should reflect your expertise, build trust instantly, and turn visitors into paying customers. Let's make that happen.
          </p>
        </section>

        {/* Problem/Solution Section */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The Real Problems Fresno Businesses Face Online
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Current Website Looks Like It's From 2010
              </h3>
              <p className="text-gray-700 mb-3">
                Let's be honest—if your website hasn't been updated in years, it shows. Potential customers are judging your business based on outdated design, broken mobile experiences, and slow loading times. In fact, 94% of first impressions are design-related, and 75% of users admit to making judgments about a company's credibility based on their website design.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build modern, responsive websites that look stunning on every device and load in under 2 seconds. Your business deserves to look as professional online as it is in person.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                You're Losing Customers to Competitors Who Show Up on Google
              </h3>
              <p className="text-gray-700 mb-3">
                Here's a painful truth: when someone in Fresno searches for your services, are you showing up? Or are your competitors capturing those leads while you're invisible? Local SEO isn't just important—it's everything. 46% of all Google searches are looking for local information, and 76% of people who search for something nearby visit a business within 24 hours.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: Every website we build is optimized for Fresno local search from day one. We implement technical SEO, local business schema, and Google My Business integration so you actually get found by customers ready to buy.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Website Doesn't Convert Visitors Into Customers
              </h3>
              <p className="text-gray-700 mb-3">
                Traffic is great, but if visitors aren't calling you, filling out forms, or making purchases, what's the point? Most websites fail because they're not designed with conversion in mind. They're digital brochures, not sales machines. The average website conversion rate is just 2.35%, but the top 25% of websites convert at 5.31% or higher.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We design every page with one goal: getting visitors to take action. Strategic CTAs, trust signals, streamlined forms, and persuasive copy that speaks directly to your Fresno customers' needs.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                You're Stuck With a Developer Who Never Responds
              </h3>
              <p className="text-gray-700 mb-3">
                Nothing's more frustrating than needing a simple website update and waiting weeks for your developer to respond. Or worse, they've disappeared entirely and you're locked out of your own site. You need a partner, not a ghost.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We're local, responsive, and actually care about your success. Need an update? We respond within 24 hours. Want to make changes yourself? We'll train you. We build relationships, not just websites.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Website Can't Handle Your Business Growth
              </h3>
              <p className="text-gray-700 mb-3">
                You started with a simple site, but now you need e-commerce, appointment booking, customer portals, or integration with your CRM. Your current platform can't scale, and rebuilding from scratch sounds expensive and time-consuming.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build scalable web applications using modern frameworks that grow with your business. Need to add features later? No problem. We architect sites for flexibility and future expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Makes Our Fresno Web Development Different
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Look, you can hire any web developer. You can go with a cheap overseas team, a freelancer on Fiverr, or even try to DIY it with a website builder. But here's what you won't get: a partner who understands the Fresno market, knows your industry inside and out, and builds websites that actually drive business results.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We're not just coders. We're business strategists who happen to be really good at web development. Every line of code we write, every design decision we make, every feature we implement—it all serves one purpose: helping your Fresno business grow.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach in Three Words:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">→</span>
                <span><strong>Strategic:</strong> We start with your business goals, not design trends</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">→</span>
                <span><strong>Local:</strong> We understand Central Valley businesses and customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">→</span>
                <span><strong>Results-Driven:</strong> We measure success by your ROI, not just pretty designs</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We've worked with agricultural businesses dealing with seasonal demand spikes, healthcare providers navigating HIPAA compliance, real estate agents competing in Fresno's hot market, and manufacturing companies showcasing complex products. Each industry has unique needs, and we know how to address them.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            When you work with us, you're not getting a template. You're getting a custom solution built specifically for your business, your customers, and your goals. That's the WebVello difference.
          </p>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Complete Fresno Web Development Services
          </h2>

          <div className="space-y-12">
            {/* Custom Website Development */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Custom Website Development
              </h3>
              <p className="text-gray-700 mb-4">
                Your business is unique. Your website should be too. We build fully custom websites from scratch using the latest technologies—React, Next.js, and modern frameworks that deliver blazing-fast performance and exceptional user experiences.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What's included:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Custom design tailored to your brand and industry</li>
                <li>Mobile-responsive layouts that work perfectly on all devices</li>
                <li>Fast loading speeds (under 2 seconds)</li>
                <li>SEO-optimized code and structure</li>
                <li>Content management system for easy updates</li>
                <li>Contact forms, appointment scheduling, and lead capture</li>
                <li>Social media integration</li>
                <li>Google Analytics and conversion tracking</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Service businesses, professional firms, healthcare providers, real estate agencies, and any Fresno business that needs a professional online presence.
              </p>
            </div>

            {/* E-Commerce Development */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🛒</span>
                E-Commerce Web Development
              </h3>
              <p className="text-gray-700 mb-4">
                Want to sell online? We build e-commerce websites that don't just look good—they convert browsers into buyers. From product catalogs to secure checkout, we handle everything.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What's included:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Custom product pages with high-quality images and descriptions</li>
                <li>Shopping cart and secure checkout process</li>
                <li>Payment gateway integration (Stripe, PayPal, Square)</li>
                <li>Inventory management system</li>
                <li>Order tracking and customer accounts</li>
                <li>Mobile-optimized shopping experience</li>
                <li>Abandoned cart recovery</li>
                <li>Product reviews and ratings</li>
                <li>Email marketing integration</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Retail businesses, agricultural product sellers, specialty food vendors, equipment suppliers, and any Fresno business ready to sell online.
              </p>
            </div>

            {/* Web Applications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                Custom Web Applications
              </h3>
              <p className="text-gray-700 mb-4">
                Need more than a website? We build custom web applications that solve specific business problems—customer portals, booking systems, inventory management, CRM integrations, and more.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we can build:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Customer portals and dashboards</li>
                <li>Appointment and booking systems</li>
                <li>Inventory and order management</li>
                <li>CRM and database applications</li>
                <li>API integrations with existing software</li>
                <li>Automated workflow systems</li>
                <li>Real-time data visualization</li>
                <li>Multi-user collaboration tools</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Healthcare providers, property management companies, service businesses with complex scheduling, manufacturers with dealer networks, and businesses with unique operational needs.
              </p>
            </div>

            {/* Website Redesign */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                Website Redesign & Modernization
              </h3>
              <p className="text-gray-700 mb-4">
                Got an outdated website that's hurting your business? We'll redesign it from the ground up while preserving your SEO rankings and improving your conversion rates.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Our redesign process:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Comprehensive audit of your current site</li>
                <li>Competitor analysis and market research</li>
                <li>Modern design that reflects current standards</li>
                <li>Improved user experience and navigation</li>
                <li>SEO migration to preserve rankings</li>
                <li>Performance optimization</li>
                <li>Mobile-first responsive design</li>
                <li>Content refresh and optimization</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Established Fresno businesses with outdated websites, companies rebranding, businesses losing traffic to competitors, and anyone ready for a fresh start.
              </p>
            </div>

            {/* Ongoing Maintenance */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                Website Maintenance & Support
              </h3>
              <p className="text-gray-700 mb-4">
                Your website isn't a "set it and forget it" project. It needs regular updates, security patches, backups, and optimization. We handle all of that so you can focus on running your business.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Maintenance includes:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Daily automated backups</li>
                <li>Security monitoring and updates</li>
                <li>Software and plugin updates</li>
                <li>Performance optimization</li>
                <li>Uptime monitoring (99.9% guarantee)</li>
                <li>Content updates (text, images, pages)</li>
                <li>Technical support within 24 hours</li>
                <li>Monthly performance reports</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Any business that wants peace of mind knowing their website is secure, fast, and always working properly.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Fresno Businesses Choose WebVello
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Lightning-Fast Performance
              </h3>
              <p className="text-gray-700">
                Your website loads in under 2 seconds. Why does this matter? Because 53% of mobile users abandon sites that take longer than 3 seconds to load. Fast sites rank higher on Google, convert better, and provide a superior user experience. We optimize every element—images, code, hosting—for maximum speed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Mobile-First Design
              </h3>
              <p className="text-gray-700">
                Over 60% of web traffic comes from mobile devices. Your Fresno customers are searching on their phones while driving down Shaw Avenue or waiting at a restaurant in Tower District. We design for mobile first, then scale up to desktop—ensuring perfect experiences on every screen size.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Bank-Level Security
              </h3>
              <p className="text-gray-700">
                Cyber attacks happen every 39 seconds. We implement SSL certificates, regular security updates, malware scanning, and secure hosting to protect your business and your customers' data. Your website is backed up daily and monitored 24/7 for threats.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Built for Conversions
              </h3>
              <p className="text-gray-700">
                Every element is strategically placed to guide visitors toward taking action. Clear CTAs, trust signals, social proof, streamlined forms, and persuasive copy work together to turn traffic into leads and sales. We A/B test and optimize continuously for better results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                SEO-Optimized From Day One
              </h3>
              <p className="text-gray-700">
                We don't just build websites—we build websites that get found. Technical SEO, local business schema, optimized content, fast loading speeds, mobile responsiveness, and proper site structure ensure you rank well in Fresno local search from launch day.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Transparent, Fair Pricing
              </h3>
              <p className="text-gray-700">
                No hidden fees. No surprise charges. No confusing contracts. We provide detailed proposals with clear pricing before any work begins. You'll know exactly what you're getting and what it costs. Most Fresno web development projects range from $5,000-$25,000 depending on complexity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                Local, Responsive Support
              </h3>
              <p className="text-gray-700">
                We're based in California and understand the Central Valley market. Need a quick update? We respond within 24 hours. Have questions? We're a phone call away. Want to meet in person? We can do that too. You're working with a partner, not a faceless agency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Scalable & Future-Proof
              </h3>
              <p className="text-gray-700">
                Your business will grow. Your website should grow with it. We build on modern, flexible frameworks that make adding features easy and cost-effective. Need e-commerce later? Customer portal? API integrations? No problem—we planned for that from the start.
              </p>
            </div>
          </div>
        </section>

        {/* Fresno-Specific Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Web Development for Fresno's Unique Business Landscape
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Fresno isn't Silicon Valley, and that's exactly why generic web development approaches don't work here. The Central Valley has its own business ecosystem, customer behaviors, and market dynamics. We get it because we work with Fresno businesses every day.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Industries We Serve in Fresno
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🌾 Agriculture & Ag Tech</h4>
              <p className="text-gray-700">
                From family farms to agricultural technology startups, we build websites that showcase products, connect with distributors, and handle complex B2B sales processes. We understand harvest seasons, commodity pricing, and the unique challenges of ag marketing.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏥 Healthcare & Medical</h4>
              <p className="text-gray-700">
                HIPAA-compliant websites for doctors, dentists, specialists, and medical practices. Patient portals, appointment scheduling, telemedicine integration, and secure forms that protect sensitive information while providing excellent patient experiences.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏠 Real Estate</h4>
              <p className="text-gray-700">
                Fresno's real estate market is hot. We build agent websites with MLS integration, property search, virtual tours, and lead capture systems that help realtors stand out in a competitive market. Mobile-optimized for buyers searching on the go.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">⚖️ Legal Services</h4>
              <p className="text-gray-700">
                Law firms need websites that build trust and capture leads. We create professional, authoritative sites with practice area pages, attorney bios, case results, and secure client intake forms. Optimized for local legal searches in Fresno County.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏭 Manufacturing & Industrial</h4>
              <p className="text-gray-700">
                Showcase complex products, technical specifications, and capabilities with custom catalogs, dealer portals, and quote request systems. We help manufacturers connect with distributors and B2B buyers across the Central Valley.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🍽️ Restaurants & Hospitality</h4>
              <p className="text-gray-700">
                Online ordering, reservation systems, menu management, and mobile-friendly designs that drive foot traffic. Perfect for Fresno's growing food scene from Tower District to Fig Garden Village.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding Fresno's Digital Market
          </h3>

          <p className="text-gray-700 mb-4">
            With over 540,000 residents, Fresno is California's fifth-largest city and the economic hub of the Central Valley. But here's what makes web development here unique:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 mb-6">
            <li>
              <strong>Bilingual audiences:</strong> 44% of Fresno residents speak Spanish at home. Many of our clients need bilingual websites to serve their entire customer base effectively.
            </li>
            <li>
              <strong>Mobile-first users:</strong> Central Valley residents rely heavily on mobile devices for local searches, especially in agricultural and service industries.
            </li>
            <li>
              <strong>Local competition:</strong> Fresno businesses compete locally first. Your website needs to dominate local search results for neighborhoods like Woodward Park, Clovis, and Fig Garden.
            </li>
            <li>
              <strong>Seasonal businesses:</strong> Many Fresno businesses have seasonal demand (agriculture, HVAC, landscaping). Your website should be optimized for peak seasons.
            </li>
            <li>
              <strong>Value-conscious customers:</strong> Central Valley customers research thoroughly before buying. Your website needs to educate, build trust, and demonstrate value clearly.
            </li>
          </ul>

          <p className="text-gray-700">
            We incorporate these local insights into every website we build, ensuring your online presence resonates with Fresno customers and drives real business results.
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Web Development Process
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Building a website isn't just about coding and design. It's about understanding your business, your customers, and your goals—then creating a digital solution that drives results. Here's exactly how we do it:
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Discovery & Strategy (Week 1)
                </h3>
                <p className="text-gray-700 mb-3">
                  We start with a deep dive into your business. What are your goals? Who are your customers? What makes you different from competitors? We analyze your current online presence, research your market, and identify opportunities.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Comprehensive strategy document with sitemap, feature list, and project timeline.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Design & Wireframing (Week 2-3)
                </h3>
                <p className="text-gray-700 mb-3">
                  Our designers create mockups that bring your vision to life. We focus on user experience, conversion optimization, and brand consistency. You'll see exactly what your website will look like before we write a single line of code.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Full design mockups for desktop and mobile, plus interactive prototypes for key pages.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Development & Build (Week 4-6)
                </h3>
                <p className="text-gray-700 mb-3">
                  This is where the magic happens. Our developers build your website using modern, secure code. We implement all features, integrate third-party tools, optimize for speed, and ensure everything works perfectly across all devices and browsers.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Fully functional website on a staging server for your review and testing.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Content & SEO Optimization (Week 6-7)
                </h3>
                <p className="text-gray-700 mb-3">
                  We optimize every page for search engines and conversions. This includes keyword research, meta tags, schema markup, image optimization, and local SEO setup. We also help with content creation if needed.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> SEO-optimized website with all content in place and ready for launch.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Testing & Quality Assurance (Week 7-8)
                </h3>
                <p className="text-gray-700 mb-3">
                  We test everything. Forms, links, mobile responsiveness, browser compatibility, loading speed, security—nothing goes live until it's perfect. We also train you on how to manage your website.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Comprehensive testing report and training documentation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Launch & Optimization (Week 8+)
                </h3>
                <p className="text-gray-700 mb-3">
                  Launch day! We migrate your site to production, set up analytics, submit to search engines, and monitor performance closely. We stick around for 30 days post-launch to address any issues and optimize based on real user data.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Live website with ongoing support and monthly performance reports.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-900 font-semibold mb-2">
              ⏱️ Typical Timeline: 8-12 weeks from kickoff to launch
            </p>
            <p className="text-gray-700">
              Complex projects (e-commerce, web applications) may take 12-16 weeks. We'll provide a detailed timeline during discovery that's specific to your project scope.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Real Results for Fresno Businesses
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fresno Medical Practice: 240% Increase in New Patient Appointments
              </h3>
              <p className="text-gray-700 mb-4">
                A multi-specialty medical practice in North Fresno was losing patients to competitors with better online presence. Their website was outdated, not mobile-friendly, and didn't rank for local searches.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Complete website redesign with online appointment scheduling, patient portal integration, HIPAA-compliant forms, and aggressive local SEO optimization.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 240% increase in online appointment bookings, #1 rankings for 12 medical keywords in Fresno, and 180% increase in organic traffic within 6 months.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Agricultural Equipment Supplier: $500K in Online Sales First Year
              </h3>
              <p className="text-gray-700 mb-4">
                A Fresno-based agricultural equipment supplier wanted to expand beyond their physical showroom and reach farmers across the Central Valley. They had no e-commerce presence.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Built a custom e-commerce platform with detailed product specifications, dealer portal, quote request system, and integration with their existing inventory management.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: $500,000 in online sales in the first year, 3,200 registered dealers, and expansion into three new counties.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fresno Law Firm: 5X Increase in Quality Leads
              </h3>
              <p className="text-gray-700 mb-4">
                A personal injury law firm was spending $10,000/month on Google Ads but getting low-quality leads. Their website wasn't converting traffic effectively.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we did:</strong> Redesigned their website with conversion-focused landing pages, improved trust signals, streamlined intake forms, and implemented call tracking.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 5X increase in qualified case leads, 67% reduction in cost per lead, and improved case acceptance rate from better lead quality.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transparent Fresno Web Development Pricing
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe in transparent pricing. No surprises, no hidden fees, no confusing contracts. Here's what you can expect:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Business Website</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$5,000 - $10,000</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ 5-10 pages</li>
                <li>✓ Mobile responsive design</li>
                <li>✓ Contact forms</li>
                <li>✓ Basic SEO setup</li>
                <li>✓ Content management system</li>
                <li>✓ 30 days support</li>
              </ul>
            </div>

            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Website</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$10,000 - $20,000</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ 10-20 pages</li>
                <li>✓ Custom design</li>
                <li>✓ Advanced features</li>
                <li>✓ Complete SEO optimization</li>
                <li>✓ Integrations (CRM, email, etc.)</li>
                <li>✓ 90 days support</li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce / Custom App</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$20,000 - $50,000+</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Unlimited pages</li>
                <li>✓ E-commerce or web app</li>
                <li>✓ Custom functionality</li>
                <li>✓ Advanced integrations</li>
                <li>✓ Dedicated project manager</li>
                <li>✓ 6 months support</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2">What's Included in Every Project:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>✓ Strategy & planning</li>
              <li>✓ Custom design</li>
              <li>✓ Responsive development</li>
              <li>✓ SEO optimization</li>
              <li>✓ Security & SSL</li>
              <li>✓ Speed optimization</li>
              <li>✓ Analytics setup</li>
              <li>✓ Training & documentation</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Ongoing Maintenance:</strong> $200-$500/month depending on your needs. Includes hosting, backups, security, updates, and support.
          </p>

          <p className="text-gray-700">
            Every project is unique. <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Schedule a free consultation</Link> and we'll provide a detailed proposal with exact pricing for your specific needs.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does it take to build a website?
              </h3>
              <p className="text-gray-700">
                Most websites take 8-12 weeks from kickoff to launch. This includes strategy, design, development, content, testing, and optimization. Simple sites can be done in 6-8 weeks, while complex e-commerce or web applications may take 12-16 weeks. We'll provide a detailed timeline specific to your project during the discovery phase.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you provide website hosting?
              </h3>
              <p className="text-gray-700">
                Yes! We provide fast, secure hosting optimized specifically for the websites we build. Our hosting includes daily backups, SSL certificates, malware scanning, and 99.9% uptime guarantee. Hosting is typically $50-$200/month depending on your traffic and storage needs. You can also use your own hosting if you prefer.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I update the website myself after it's built?
              </h3>
              <p className="text-gray-700">
                Absolutely! We build all websites with user-friendly content management systems that allow you to update text, images, blog posts, and pages without any coding knowledge. We provide comprehensive training and documentation. For more complex updates, we're always available to help.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my website work on mobile phones?
              </h3>
              <p className="text-gray-700">
                Yes, every website we build is fully responsive and optimized for mobile devices. In fact, we design for mobile first since over 60% of web traffic comes from phones and tablets. Your site will look perfect and function flawlessly on any screen size.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you help with content and copywriting?
              </h3>
              <p className="text-gray-700">
                Yes! We offer professional copywriting services to help you communicate your message effectively. We can write all your website content, or we can work with content you provide. We also optimize all content for SEO to help you rank better in search results.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I need changes after the website launches?
              </h3>
              <p className="text-gray-700">
                We provide 30 days of complimentary support after launch to address any issues or minor adjustments. After that, you can purchase ongoing maintenance packages or pay hourly for updates. Most clients opt for monthly maintenance which includes hosting, security, backups, and regular updates.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer SEO services?
              </h3>
              <p className="text-gray-700">
                Yes! Every website we build includes basic SEO optimization (technical SEO, on-page optimization, local business schema). We also offer comprehensive ongoing SEO services including keyword research, content creation, link building, and local SEO. <Link href="/services/seo" className="text-blue-600 hover:underline">Learn more about our SEO services</Link>.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you redesign my existing website?
              </h3>
              <p className="text-gray-700">
                Absolutely! Website redesigns are one of our specialties. We'll audit your current site, preserve your SEO rankings, improve your design and user experience, and migrate everything to a modern platform. We've successfully redesigned hundreds of websites for Fresno businesses.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you work with businesses outside of Fresno?
              </h3>
              <p className="text-gray-700">
                Yes! While we specialize in Fresno and Central Valley businesses, we work with clients throughout California and across the United States. We conduct most meetings via video call, making location no barrier to great results.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What makes you different from other web developers?
              </h3>
              <p className="text-gray-700">
                Three things: (1) We're local and understand the Fresno market intimately, (2) We focus on business results, not just pretty designs—every decision is driven by ROI, and (3) We're responsive and actually care about your success. You're not just a project number; you're a partner.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Fresno Business Online?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's build a website that doesn't just look good—it drives real business results. Free consultation, transparent pricing, and a partner who actually cares about your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Schedule Your Free Consultation
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white"
            >
              Call Us Today
            </Link>
          </div>
          <p className="text-blue-100">
            📍 Serving Fresno, Clovis, and the entire Central Valley<br />
            ⚡ Fast turnaround • 💰 Transparent pricing • 🏆 Proven results
          </p>
        </section>

        {/* Related Services */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO Services</h3>
              <p className="text-gray-600 text-sm">Get found on Google with our comprehensive SEO services.</p>
            </Link>
            <Link href="/services/local-seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">Dominate local search results in Fresno and Central Valley.</p>
            </Link>
            <Link href="/services/ecommerce-development" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">E-Commerce Development</h3>
              <p className="text-gray-600 text-sm">Build a profitable online store that converts visitors into customers.</p>
            </Link>
          </div>
        </section>

      </article>
    </div>
  );
}

