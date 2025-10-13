import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chicago Biotech Website Design | Life Sciences Web Development',
  description: 'Specialized website design for Chicago biotech and life sciences companies. HIPAA-compliant, investor-ready, and built to showcase your research and innovation.',
  openGraph: {
    title: 'Chicago Biotech Website Design | Life Sciences Web Development',
    description: 'Specialized website design for Chicago biotech and life sciences companies. HIPAA-compliant, investor-ready, and built to showcase research.',
    url: 'https://www.webvello.com/services/biotech-website-design-chicago',
    siteName: 'WebVello',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ChicagoBiotechWebsiteDesignPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Chicago Biotech Website Design That Attracts Investors & Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your groundbreaking research deserves a website that matches your innovation. We build HIPAA-compliant, investor-ready websites for Chicago's life sciences industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/pricing"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                View Our Work
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                <span>50+ Biotech Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Investor-Ready Design</span>
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
            Here's what we know about biotech companies in Chicago: you're doing world-changing work. You're developing therapies that save lives, creating diagnostic tools that detect disease earlier, and pushing the boundaries of what's possible in life sciences. But when potential investors, partners, or patients visit your website, they see... a generic template that looks like every other biotech startup.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            That's a problem. In Chicago's competitive biotech ecosystem—from the Illinois Medical District to the West Loop's growing life sciences corridor—your website is often the first impression you make on the people who matter most. Investors deciding whether to fund your Series A. Pharmaceutical partners evaluating collaboration opportunities. Top-tier researchers considering joining your team. Patients seeking cutting-edge treatments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As specialists in <strong>biotech website design for Chicago</strong> companies, we understand the unique challenges you face. You need to communicate complex science to non-technical audiences. You need HIPAA compliance for patient data. You need to build credibility with skeptical investors. You need to showcase your pipeline without revealing proprietary information. And you need to do all of this while maintaining the professional, trustworthy image that the life sciences industry demands.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a pre-clinical startup seeking seed funding, a Series B company preparing for FDA trials, or an established biotech firm expanding your therapeutic areas, your website should be a strategic asset that drives business growth. Let's build that together.
          </p>
        </section>

        {/* Problem/Solution Section */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Biotech Companies Struggle With Their Websites
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Website Doesn't Build Investor Confidence
              </h3>
              <p className="text-gray-700 mb-3">
                Investors see hundreds of biotech pitches. When they visit your website, they're looking for signals of credibility, competence, and potential. A poorly designed website—outdated visuals, confusing navigation, unclear value proposition—sends the wrong message. They question whether you can execute if you can't even get your website right. First impressions matter, and you're losing funding opportunities because of a weak online presence.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We design investor-ready websites that communicate your science clearly, showcase your team's expertise, highlight your competitive advantages, and build the confidence investors need to write checks.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                You Can't Explain Complex Science to Non-Technical Audiences
              </h3>
              <p className="text-gray-700 mb-3">
                Your research is groundbreaking, but explaining CRISPR gene editing, monoclonal antibodies, or biomarker discovery to investors, patients, or the media is challenging. Most biotech websites are either too technical (losing non-scientific audiences) or too simplified (losing credibility with experts). You need to strike the perfect balance, and that's harder than it sounds.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We work with your scientific team to create clear, compelling content that educates without oversimplifying. Infographics, animations, and layered information architecture make complex science accessible to everyone.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Website Isn't HIPAA Compliant
              </h3>
              <p className="text-gray-700 mb-3">
                If you're collecting patient information, running clinical trials, or offering diagnostic services, HIPAA compliance isn't optional—it's mandatory. One data breach can destroy your reputation and result in massive fines. But most web developers don't understand healthcare regulations, leaving you vulnerable to compliance violations you don't even know about.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We build HIPAA-compliant websites with encrypted data transmission, secure patient portals, proper consent forms, and business associate agreements. Your patient data stays protected, and you stay compliant.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                You're Not Attracting Top Scientific Talent
              </h3>
              <p className="text-gray-700 mb-3">
                The best researchers have options. They're evaluating your company alongside competitors, and your website is a key factor in their decision. If your site doesn't showcase your cutting-edge research, collaborative culture, and growth opportunities, top talent goes elsewhere. In Chicago's competitive biotech job market, you can't afford to lose great candidates because of a weak website.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We create compelling careers sections that highlight your research pipeline, team culture, and career development opportunities. Showcase your publications, patents, and scientific achievements to attract the best minds in life sciences.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Pipeline Isn't Clearly Communicated
              </h3>
              <p className="text-gray-700 mb-3">
                Investors and partners want to understand your drug development pipeline at a glance. Which compounds are in pre-clinical? What's in Phase I, II, or III trials? What are your target indications? Most biotech websites bury this critical information in PDFs or present it in confusing formats. If investors can't quickly understand your pipeline, they move on to the next opportunity.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                ✅ Our Solution: We design interactive pipeline visualizations that clearly show your therapeutic programs, development stages, target indications, and timelines. Make it easy for investors to see your potential.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Makes Our Biotech Website Design Different
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most web design agencies treat biotech like any other industry. They don't understand the science, the regulatory environment, or the unique stakeholders you're trying to reach. That's why so many biotech websites fail to deliver results.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">We Speak Your Language</h3>
            <p className="text-gray-700 mb-4">
              We've worked with over 50 biotech and life sciences companies across Chicago—from early-stage startups in MATTER to established firms in the Illinois Medical District. We understand drug development timelines, FDA approval processes, clinical trial phases, and the competitive landscape of therapeutics, diagnostics, and medical devices.
            </p>
            <p className="text-gray-700">
              When you explain your MOA (mechanism of action) or discuss your IND application, we don't need a translator. We get it, and that understanding translates into websites that accurately represent your science while making it accessible to your target audiences.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Chicago's biotech ecosystem is thriving. With over 400 life sciences companies, world-class research institutions like Northwestern and UChicago, and a growing venture capital presence, the competition for funding, talent, and partnerships is fierce. Your website needs to help you stand out.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We've designed websites for oncology therapeutics companies, diagnostic startups, medical device manufacturers, CROs, and everything in between. Each subsector has unique needs, and we know how to address them. Whether you're targeting patients, investors, pharma partners, or healthcare providers, we'll build a website that resonates with your specific audience.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            When you work with us, you're not just getting a website—you're getting a strategic partner who understands the biotech industry and is invested in your success. That's the difference between a generic web design agency and specialists who live and breathe life sciences.
          </p>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Complete Biotech Website Design Services
          </h2>

          <div className="space-y-12">
            {/* Investor-Ready Websites */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Investor-Ready Website Design
              </h3>
              <p className="text-gray-700 mb-4">
                Your website is often an investor's first interaction with your company. We design sites that build confidence, communicate your value proposition clearly, and make it easy for investors to understand why your company is worth funding.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What's included:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Clear value proposition and investment thesis</li>
                <li>Interactive pipeline visualization</li>
                <li>Team bios highlighting expertise and track record</li>
                <li>Scientific advisory board showcase</li>
                <li>Publications, patents, and IP portfolio</li>
                <li>Competitive landscape positioning</li>
                <li>Investor resources and downloadable materials</li>
                <li>Press releases and media coverage</li>
                <li>Contact forms for investor inquiries</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Pre-seed to Series B companies actively fundraising or preparing for their next round.
              </p>
            </div>

            {/* Clinical Trial Websites */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                Clinical Trial & Patient Recruitment Sites
              </h3>
              <p className="text-gray-700 mb-4">
                Recruiting patients for clinical trials is challenging. We build dedicated trial websites that educate potential participants, screen for eligibility, and make enrollment easy—all while maintaining HIPAA compliance.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we build:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Patient-friendly trial information pages</li>
                <li>Eligibility screeners and pre-qualification forms</li>
                <li>HIPAA-compliant enrollment forms</li>
                <li>Trial location finders</li>
                <li>Educational resources about the condition</li>
                <li>FAQ sections addressing common concerns</li>
                <li>Multilingual support for diverse populations</li>
                <li>Integration with CRM and trial management systems</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Companies running Phase I-III clinical trials and needing to recruit participants efficiently.
              </p>
            </div>

            {/* Corporate Websites */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Corporate Biotech Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Established biotech companies need comprehensive corporate websites that serve multiple stakeholders—investors, partners, patients, employees, and media. We build scalable platforms that grow with your company.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Features include:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Multi-audience navigation and content</li>
                <li>Investor relations portal with SEC filings</li>
                <li>Press room and media resources</li>
                <li>Career portal with job listings</li>
                <li>Scientific publications library</li>
                <li>Partner and collaboration opportunities</li>
                <li>Product/pipeline information</li>
                <li>Corporate governance and compliance</li>
                <li>Multi-language support for global operations</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Post-IPO companies, established biotech firms, and companies with multiple therapeutic areas.
              </p>
            </div>

            {/* Product Websites */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💊</span>
                Therapeutic Product Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Once your drug or device is approved, you need a dedicated product website for patients, caregivers, and healthcare providers. We create educational, compliant sites that drive adoption.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we create:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Patient education and resources</li>
                <li>Healthcare provider information</li>
                <li>Prescribing information and safety data</li>
                <li>Patient assistance programs</li>
                <li>Dosing calculators and tools</li>
                <li>Adverse event reporting</li>
                <li>Insurance and reimbursement support</li>
                <li>FDA-compliant promotional content</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Companies with FDA-approved products or devices ready for commercialization.
              </p>
            </div>

            {/* Diagnostic Websites */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🧬</span>
                Diagnostic & Testing Platform Websites
              </h3>
              <p className="text-gray-700 mb-4">
                Diagnostic companies need to reach both healthcare providers and patients. We build websites that explain complex testing methodologies in accessible terms while maintaining scientific rigor.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Key features:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Test catalog and ordering system</li>
                <li>Sample collection instructions</li>
                <li>Results portal for patients and providers</li>
                <li>Clinical validation data</li>
                <li>Insurance and billing information</li>
                <li>Provider education and training</li>
                <li>Scientific publications and evidence</li>
                <li>Integration with lab information systems</li>
              </ul>
              <p className="text-gray-700">
                <strong>Perfect for:</strong> Diagnostic labs, genetic testing companies, and precision medicine platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Chicago Biotech Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                HIPAA Compliance Expertise
              </h3>
              <p className="text-gray-700">
                We understand healthcare regulations inside and out. Every website we build includes encrypted data transmission, secure patient portals, proper consent mechanisms, and business associate agreements. Your patient data stays protected, and you avoid costly compliance violations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🧪</span>
                Life Sciences Industry Knowledge
              </h3>
              <p className="text-gray-700">
                We've worked with 50+ biotech companies and understand drug development, clinical trials, FDA regulations, and the competitive landscape. We speak your language and can translate complex science into compelling website content that resonates with your target audiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Investor-Focused Design
              </h3>
              <p className="text-gray-700">
                We know what investors look for when evaluating biotech companies. Our designs build credibility, communicate value propositions clearly, and make it easy for investors to understand your science, team, and market opportunity. Help close your next funding round with a website that impresses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Data Visualization Excellence
              </h3>
              <p className="text-gray-700">
                Complex scientific data needs clear visualization. We create interactive charts, pipeline diagrams, mechanism of action animations, and clinical trial results that make your science accessible without oversimplifying. Help stakeholders understand your innovation at a glance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Fast, Scalable Development
              </h3>
              <p className="text-gray-700">
                Biotech moves fast. We deliver websites in 6-8 weeks, not 6 months. Built on modern, scalable frameworks that grow with your company—add new therapeutic areas, clinical trials, or product launches without rebuilding from scratch.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Multi-Audience Optimization
              </h3>
              <p className="text-gray-700">
                Your website needs to serve investors, patients, partners, employees, and media—each with different needs. We design intuitive navigation and content strategies that guide each audience to the information they need quickly and efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Mobile-First Design
              </h3>
              <p className="text-gray-700">
                Investors review deals on their phones. Patients research treatments on tablets. Healthcare providers access information between appointments. Your website works perfectly on every device, ensuring no opportunity is lost due to poor mobile experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Ongoing Support & Updates
              </h3>
              <p className="text-gray-700">
                Your pipeline evolves, trials progress, and team members change. We provide ongoing support to keep your website current. Need to add a new therapeutic program or update trial status? We handle it quickly so your site always reflects your latest developments.
              </p>
            </div>
          </div>
        </section>

        {/* Chicago-Specific Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Serving Chicago's Thriving Biotech Ecosystem
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Chicago has emerged as a major biotech hub, and we're proud to support the companies driving innovation in life sciences across the city and surrounding areas.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Chicago Biotech Hubs We Serve
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏥 Illinois Medical District</h4>
              <p className="text-gray-700">
                The largest urban medical district in the US, home to Rush University Medical Center, UIC, and numerous biotech startups. We've worked with companies developing therapeutics, diagnostics, and medical devices in this innovation hub.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🔬 MATTER</h4>
              <p className="text-gray-700">
                Chicago's premier healthcare technology incubator in the Merchandise Mart. We partner with early-stage biotech and healthtech startups in MATTER's community, helping them build investor-ready websites as they grow.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏢 West Loop Life Sciences Corridor</h4>
              <p className="text-gray-700">
                The rapidly growing biotech cluster in the West Loop, attracting major pharmaceutical companies and innovative startups. We help companies in this area showcase their research and attract top talent to Chicago's hottest neighborhood.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎓 University Research Parks</h4>
              <p className="text-gray-700">
                Northwestern, UChicago, and UIC spin-outs commercializing university research. We help academic entrepreneurs transition from research to commercial ventures with websites that attract investors and partners.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Chicago's Biotech Advantages
          </h3>

          <p className="text-gray-700 mb-4">
            Chicago offers unique advantages for biotech companies, and your website should leverage these:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 mb-6">
            <li>
              <strong>World-class research institutions:</strong> Northwestern, UChicago, and UIC provide access to cutting-edge research and top scientific talent.
            </li>
            <li>
              <strong>Growing venture capital presence:</strong> Chicago's VC ecosystem is expanding, with firms like ARCH Venture Partners and Baxter Ventures actively investing in local biotech.
            </li>
            <li>
              <strong>Lower costs than coasts:</strong> Chicago offers 30-40% lower operating costs than Boston or San Francisco while maintaining access to world-class talent and resources.
            </li>
            <li>
              <strong>Diverse patient populations:</strong> Chicago's demographic diversity makes it ideal for clinical trials requiring varied patient populations.
            </li>
            <li>
              <strong>Central location:</strong> Easy access to both coasts and major pharmaceutical hubs makes Chicago ideal for partnerships and collaborations.
            </li>
          </ul>

          <p className="text-gray-700">
            We incorporate these advantages into your website messaging, positioning your Chicago location as a strategic asset rather than a liability compared to traditional biotech hubs.
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Biotech Website Design Process
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Building a biotech website requires deep collaboration with your scientific and business teams. Here's how we ensure your website accurately represents your science while achieving your business goals:
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
                  Discovery & Scientific Review (Week 1-2)
                </h3>
                <p className="text-gray-700 mb-3">
                  We start by understanding your science, business model, and target audiences. We review your research, publications, patents, and competitive landscape. We interview your scientific team to ensure we accurately represent your work.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Comprehensive strategy document with audience personas, content architecture, and technical requirements.
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
                  Content Strategy & Messaging (Week 2-3)
                </h3>
                <p className="text-gray-700 mb-3">
                  We develop messaging that resonates with each audience—investors, patients, partners, employees. We translate complex science into clear, compelling content while maintaining scientific accuracy.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Content outline, key messaging framework, and draft copy for review by your scientific team.
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
                  Design & Data Visualization (Week 3-5)
                </h3>
                <p className="text-gray-700 mb-3">
                  Our designers create mockups that reflect your brand while meeting industry standards for credibility and professionalism. We design custom data visualizations, pipeline diagrams, and scientific illustrations.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Full design mockups for desktop and mobile, plus interactive prototypes of key features.
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
                  Development & Integration (Week 5-7)
                </h3>
                <p className="text-gray-700 mb-3">
                  We build your website using modern, secure frameworks. We implement HIPAA compliance measures, integrate with your CRM or trial management systems, and ensure everything works flawlessly.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Fully functional website on staging server for your review and testing.
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
                  Compliance Review & Testing (Week 7-8)
                </h3>
                <p className="text-gray-700 mb-3">
                  We conduct thorough testing of all features, verify HIPAA compliance, ensure accessibility standards are met, and test across all devices and browsers. We also review all content for accuracy with your scientific team.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Comprehensive testing report and compliance documentation.
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
                  Launch & Ongoing Support (Week 8+)
                </h3>
                <p className="text-gray-700 mb-3">
                  We launch your website, monitor performance, and provide ongoing support. As your company evolves—new trials, pipeline updates, team changes—we keep your website current.
                </p>
                <p className="text-gray-700">
                  <strong>Deliverable:</strong> Live website with training, documentation, and ongoing support package.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-900 font-semibold mb-2">
              ⏱️ Typical Timeline: 6-8 weeks from kickoff to launch
            </p>
            <p className="text-gray-700">
              Rush timelines available for companies with urgent funding deadlines or product launches. Complex projects (clinical trial sites, corporate websites) may take 10-12 weeks.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Chicago Biotech Success Stories
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Oncology Therapeutics Startup: $15M Series A Raised
              </h3>
              <p className="text-gray-700 mb-4">
                A pre-clinical oncology company in MATTER needed an investor-ready website to support their Series A fundraise. Their existing site was a basic template that didn't communicate their innovative approach to cancer immunotherapy.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we built:</strong> Comprehensive website with interactive pipeline visualization, mechanism of action animations, team bios highlighting their track record, and clear investment thesis. We translated complex immunology into accessible content for non-scientific investors.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: Closed $15M Series A within 4 months of website launch. Lead investor specifically mentioned the website as a factor in their confidence in the team's ability to execute.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Diagnostic Company: 300% Increase in Test Orders
              </h3>
              <p className="text-gray-700 mb-4">
                A genetic testing company in the Illinois Medical District had a confusing website that made it difficult for healthcare providers to order tests. They were losing business to competitors with better online experiences.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we built:</strong> Streamlined test catalog with clear ordering process, provider portal for results access, patient education resources, and integration with their LIMS. HIPAA-compliant throughout.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: 300% increase in test orders within 6 months. Provider satisfaction scores improved dramatically. Website now generates 60% of new provider sign-ups.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Clinical Trial Site: Enrolled 200+ Patients in 8 Months
              </h3>
              <p className="text-gray-700 mb-4">
                A Phase II clinical trial for a novel diabetes treatment was struggling to recruit participants. Traditional recruitment methods weren't working, and they needed to accelerate enrollment to meet FDA timelines.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What we built:</strong> Dedicated trial website with patient-friendly information, eligibility screener, online enrollment forms, and local SEO optimization to reach Chicago-area patients. Multilingual support for diverse populations.
              </p>
              <p className="text-gray-700 font-semibold text-blue-600">
                Results: Enrolled 200+ qualified participants in 8 months, meeting enrollment goals ahead of schedule. 70% of participants found the trial through the website. Trial completed on time.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Biotech Website Design Pricing
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Transparent pricing for Chicago biotech companies. No hidden fees, no surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Website</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$15,000 - $25,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 10-15 pages</li>
                <li>✓ Investor-focused design</li>
                <li>✓ Pipeline visualization</li>
                <li>✓ Team & advisory board</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Basic SEO</li>
                <li>✓ 60 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Pre-seed to Series A companies</p>
            </div>

            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Stage Website</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$25,000 - $50,000</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ 20-30 pages</li>
                <li>✓ Custom design & animations</li>
                <li>✓ Interactive data viz</li>
                <li>✓ HIPAA compliance</li>
                <li>✓ CRM integration</li>
                <li>✓ Advanced SEO</li>
                <li>✓ 90 days support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Series B-C companies, clinical stage</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Website</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$50,000 - $100,000+</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✓ Unlimited pages</li>
                <li>✓ Multi-site architecture</li>
                <li>✓ Patient/provider portals</li>
                <li>✓ Clinical trial integration</li>
                <li>✓ Custom applications</li>
                <li>✓ Dedicated project manager</li>
                <li>✓ 6 months support</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Post-IPO, commercial stage, multiple products</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2">What's Included in Every Project:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>✓ Scientific content development</li>
              <li>✓ Data visualization design</li>
              <li>✓ HIPAA compliance review</li>
              <li>✓ Mobile optimization</li>
              <li>✓ Security & SSL</li>
              <li>✓ Analytics setup</li>
              <li>✓ Training & documentation</li>
              <li>✓ Post-launch support</li>
            </ul>
          </div>

          <p className="text-gray-700">
            <strong>Clinical Trial Sites:</strong> $10,000 - $20,000 per trial (includes patient recruitment optimization and HIPAA compliance)
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
                Do you understand our complex science?
              </h3>
              <p className="text-gray-700">
                Yes. We've worked with 50+ biotech companies across therapeutics, diagnostics, medical devices, and research tools. We understand drug development, clinical trials, FDA regulations, and how to communicate complex science to non-technical audiences. We'll work closely with your scientific team to ensure accuracy while making your innovation accessible.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do you ensure HIPAA compliance?
              </h3>
              <p className="text-gray-700">
                We implement encrypted data transmission (SSL/TLS), secure hosting with BAAs, proper consent mechanisms, access controls, and audit logging. All forms collecting patient data are HIPAA-compliant, and we provide business associate agreements. We stay current on healthcare regulations and conduct compliance audits before launch.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you help with clinical trial recruitment?
              </h3>
              <p className="text-gray-700">
                Absolutely. We build dedicated clinical trial websites optimized for patient recruitment. This includes eligibility screeners, educational content, enrollment forms, local SEO to reach patients in your target areas, and integration with your trial management systems. Many clients see 2-3X faster enrollment with optimized trial websites.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does it take to build a biotech website?
              </h3>
              <p className="text-gray-700">
                Most biotech websites take 6-8 weeks from kickoff to launch. This includes scientific review, content development, design, development, compliance review, and testing. Rush timelines (4-6 weeks) are available for urgent fundraising or product launch deadlines. Complex enterprise sites may take 10-12 weeks.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will our website help us raise funding?
              </h3>
              <p className="text-gray-700">
                While we can't guarantee funding success, we design investor-ready websites that build confidence and communicate your value proposition clearly. Many clients have successfully raised funding after launching new websites, with investors specifically mentioning the website as a positive factor in their decision. A professional website signals that you're serious and capable of execution.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you integrate with our existing systems?
              </h3>
              <p className="text-gray-700">
                Yes. We integrate with CRMs (Salesforce, HubSpot), trial management systems (Medidata, Oracle), lab information systems, investor portals, and other biotech-specific platforms. We'll work with your IT team to ensure seamless integration and data flow.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if our pipeline changes frequently?
              </h3>
              <p className="text-gray-700">
                We build websites on flexible platforms that make updates easy. You can update pipeline status, add new programs, or modify content yourself through a user-friendly CMS. We also offer ongoing support packages for companies that prefer us to handle updates. Most clients update their pipeline quarterly as trials progress.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you work with companies outside Chicago?
              </h3>
              <p className="text-gray-700">
                Yes! While we specialize in Chicago biotech companies, we work with life sciences clients across the United States. Our deep understanding of the biotech industry translates to any location. We conduct all meetings via video call, making geography irrelevant.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What makes you different from other web design agencies?
              </h3>
              <p className="text-gray-700">
                We specialize exclusively in biotech and life sciences. Most agencies treat biotech like any other industry—we don't. We understand your science, your stakeholders, your regulatory environment, and your competitive landscape. We speak your language and can translate complex research into compelling website content. That specialized expertise delivers better results.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build a Website That Matches Your Innovation?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's create a website that helps you raise funding, attract partners, recruit patients, and grow your Chicago biotech company. Schedule a consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white"
            >
              Call Us Today
            </Link>
          </div>
          <p className="text-blue-100">
            📍 Serving Chicago's biotech ecosystem: MATTER, Illinois Medical District, West Loop & beyond<br />
            ⚡ 6-8 week delivery • 💰 Transparent pricing • 🔒 HIPAA compliant
          </p>
        </section>

        {/* Related Services */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/medical-website-design-austin" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Medical Website Design</h3>
              <p className="text-gray-600 text-sm">HIPAA-compliant websites for healthcare providers and medical practices.</p>
            </Link>
            <Link href="/services/web-development" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Custom Web Development</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade web applications for complex business needs.</p>
            </Link>
            <Link href="/services/seo" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO Services</h3>
              <p className="text-gray-600 text-sm">Get found by investors, partners, and patients searching online.</p>
            </Link>
          </div>
        </section>

      </article>
    </div>
  );
}

