export interface CisStaticDoc {
  title: string
  metaTitle?: string
  metaDescription?: string
  hero?: string
  sections?: string[]
  faqs?: { question: string; answer: string }[]
}

// Key format: `${city}__${industry}__${service}`
const registry: Record<string, CisStaticDoc> = {
  'new-york-ny__finance__web-development': {
    title: 'Web Development in New York, NY for Finance Companies',
    metaTitle: 'Finance Web Development in New York | Secure, Compliant Sites',
    metaDescription:
      'Custom, compliant finance websites in New York. Secure architecture, performance, accessibility, and conversion-focused UX for banks, fintech, and financial services.',
    hero:
      'Build a secure, compliant, and conversion-focused finance website in New York. We architect scalable platforms with robust performance, accessibility, and trust signals that convert regulated audiences.',
    sections: [
      'Why New York finance firms choose us: compliance-aware architecture, performance, Core Web Vitals, and CRO-first UX tailored to regulated buyers.',
      'Technical stack: Next.js, TypeScript, secure hosting, role-based access control, audit logging, encryption at rest/in transit, and hardened CI/CD.',
      'Conversion framework: clear IA for products, calculators, KYC onboarding, gated content, and trust elements that improve qualified demo requests.'
    ],
    faqs: [
      { question: 'Do you support compliance needs?', answer: 'Yes. We implement policies, logs, encryption, and workflows aligned to finance compliance requirements and your legal guidance.' },
      { question: 'Can you migrate legacy sites?', answer: 'We plan phased migrations, URL mapping, redirects, and content QA to preserve SEO and analytics fidelity.' }
    ]
  },
  // Oklahoma City, OK × Energy
  'oklahoma-city-ok__energy__web-development': {
    title: 'Web Development in Oklahoma City, OK for Energy Companies',
    metaTitle: 'Energy Web Development in Oklahoma City | Industrial-Grade',
    metaDescription:
      'Energy web development in Oklahoma City with secure, resilient architectures and industrial UX.',
    hero:
      'Launch durable energy websites in Oklahoma City with catalogs, IR, and field-ready docs.',
    sections: [
      'Features: product specs, project portfolios, and supplier portals.',
      'Tech: static + SSR blends, edge caching, and resilient media delivery.',
      'CRO: RFQ workflows and qualification funnels for industrial buyers.'
    ],
    faqs: [
      { question: 'Multi-language?', answer: 'Yes. We implement i18n with translation workflows and QA.' },
      { question: 'Field constraints?', answer: 'Low-bandwidth patterns and offline-tolerant docs are supported.' }
    ]
  },
  'oklahoma-city-ok__energy__seo': {
    title: 'SEO in Oklahoma City, OK for Energy Companies',
    metaTitle: 'Energy SEO in Oklahoma City | Industrial Search',
    metaDescription:
      'Energy SEO in Oklahoma City: technical SEO, content hubs, and buyer enablement for complex searches.',
    hero:
      'Increase qualified industrial search in Oklahoma City with technical SEO and entity-driven content.',
    sections: [
      'Content: spec sheets, maintenance guides, and case studies.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, partnerships, and analyst mentions.'
    ],
    faqs: [
      { question: 'Measure success?', answer: 'Qualified RFQs, partner inquiries, and revenue.' },
      { question: 'Legacy CMS?', answer: 'We migrate content with redirects and analytics continuity.' }
    ]
  },
  'oklahoma-city-ok__energy__website-design': {
    title: 'Website Design in Oklahoma City, OK for Energy Companies',
    metaTitle: 'Energy Website Design in Oklahoma City | Industrial UX',
    metaDescription:
      'Energy website design in Oklahoma City with industrial UX, accessibility, and documentation-rich layouts.',
    hero:
      'Design energy sites in Oklahoma City that balance industrial needs with accessibility and brand.',
    sections: [
      'Components: data tables, maps, product specs, and safety content.',
      'Accessibility: WCAG-aligned patterns for harsh environments.',
      'Governance: design systems that scale across divisions and teams.'
    ],
    faqs: [
      { question: 'Brand alignment?', answer: 'Shared tokens and component rules support sub-brands.' },
      { question: 'Design audits?', answer: 'We assess performance, usability, and consistency with actions.' }
    ]
  },

  // El Paso, TX × Manufacturing
  'el-paso-tx__manufacturing__web-development': {
    title: 'Web Development in El Paso, TX for Manufacturing Companies',
    metaTitle: 'Manufacturing Web Development in El Paso | Industrial-Grade',
    metaDescription:
      'Manufacturing web development in El Paso with product catalogs, RFQ flows, and industrial performance.',
    hero:
      'Build industrial-grade manufacturing sites in El Paso that support catalogs and procurement.',
    sections: [
      'Features: product specs, certifications, and distributor portals.',
      'Performance: fast loads for field devices and low bandwidth.',
      'CRO: qualification pathways tailored to engineers and buyers.'
    ],
    faqs: [
      { question: 'Multi-language support?', answer: 'Yes. i18n with translation workflows and QA.' },
      { question: 'Migration?', answer: 'We map URLs, preserve SEO, and validate content integrity.' }
    ]
  },
  'el-paso-tx__manufacturing__seo': {
    title: 'SEO in El Paso, TX for Manufacturing Companies',
    metaTitle: 'Manufacturing SEO in El Paso | Technical & Authority',
    metaDescription:
      'Manufacturing SEO in El Paso: technical SEO, product hubs, and authority building for industrial search.',
    hero:
      'Increase qualified industrial search in El Paso with technical SEO and content hubs.',
    sections: [
      'Content: spec sheets, solution pages, and maintenance resources.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, associations, and partnerships.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'RFQs, distributor inquiries, and revenue impact.' },
      { question: 'International traffic?', answer: 'We manage hreflang and localized templates as needed.' }
    ]
  },
  'el-paso-tx__manufacturing__website-design': {
    title: 'Website Design in El Paso, TX for Manufacturing Companies',
    metaTitle: 'Manufacturing Website Design in El Paso | Industrial UX',
    metaDescription:
      'Manufacturing website design in El Paso with clear navigation, spec visibility, and RFQ-focused UX.',
    hero:
      'Design manufacturing sites in El Paso that present capabilities clearly and streamline RFQs.',
    sections: [
      'IA: part finders, category navigation, and download centers.',
      'Components: data tables, comparison blocks, and case studies.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand across plants?', answer: 'We align tokens and components across divisions and plants.' },
      { question: 'Design audits?', answer: 'We assess usability, performance, and consistency with actions.' }
    ]
  },

  // Boston, MA × Education
  'boston-ma__education__web-development': {
    title: 'Web Development in Boston, MA for Education Organizations',
    metaTitle: 'Education Web Development in Boston | Scalable & Accessible',
    metaDescription:
      'Education web development in Boston with accessibility, program SEO, and enrollment-focused UX.',
    hero:
      'Launch education websites in Boston that improve discoverability, accessibility, and enrollment outcomes.',
    sections: [
      'Features: program pages, faculty profiles, event calendars.',
      'Accessibility: WCAG-aligned patterns and staff-friendly workflows.',
      'CRO: request info flows, campus tours, and application funnels.'
    ],
    faqs: [
      { question: 'Multi-campus?', answer: 'We structure multi-campus content with scalable templates and data models.' },
      { question: 'Integrations?', answer: 'CRMs, marketing automation, and SIS integrations supported.' }
    ]
  },
  'boston-ma__education__seo': {
    title: 'SEO in Boston, MA for Education Organizations',
    metaTitle: 'Education SEO in Boston | Enrollment Growth',
    metaDescription:
      'Education SEO in Boston: program SEO, local packs, and structured data to drive inquiries and applications.',
    hero:
      'Increase education visibility in Boston with program-led SEO and performance improvements.',
    sections: [
      'Content: program pages, outcomes, and faculty expertise.',
      'Local: campus locations, events, and reviews optimized for local packs.',
      'Technical: performance, schema, and crawl efficiency.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Inquiries, campus tour bookings, and completed applications.' },
      { question: 'Review process?', answer: 'We set editorial workflows with approvals and quality checks.' }
    ]
  },
  'boston-ma__education__website-design': {
    title: 'Website Design in Boston, MA for Education Organizations',
    metaTitle: 'Education Website Design in Boston | Inclusive UX',
    metaDescription:
      'Education website design in Boston emphasizing inclusive UX, clarity, and clear enrollment journeys.',
    hero:
      'Design inclusive, enrollment-focused education sites in Boston with reusable components.',
    sections: [
      'IA: programs, outcomes, admissions, and financial aid clarity.',
      'Components: directories, events, and application steps.',
      'CRO: persuasive content, proof, and low-friction forms.'
    ],
    faqs: [
      { question: 'Brand consistency?', answer: 'We deliver tokens and guidelines for systemized design.' },
      { question: 'Usability testing?', answer: 'We test key flows with target audiences and iterate.' }
    ]
  },

  // Portland, OR × Technology
  'portland-or__technology__web-development': {
    title: 'Web Development in Portland, OR for Technology Companies',
    metaTitle: 'Tech Web Development in Portland | Performance & Scale',
    metaDescription:
      'Portland tech web development with performance, component libraries, and product-led growth support.',
    hero:
      'Ship performant, scalable tech sites in Portland with developer-grade docs and analytics.',
    sections: [
      'Architecture: modular codebases, tokens, and CI/CD for velocity.',
      'Docs: API references, guides, and examples for activation.',
      'CRO: pricing clarity, trials, and demo CTAs optimized.'
    ],
    faqs: [
      { question: 'Headless CMS?', answer: 'We model content for scale across pages and locales.' },
      { question: 'Security posture?', answer: 'Secure coding, reviews, and runtime monitoring enforced.' }
    ]
  },
  'portland-or__technology__seo': {
    title: 'SEO in Portland, OR for Technology Companies',
    metaTitle: 'Tech SEO in Portland | Entity & Technical',
    metaDescription:
      'Tech SEO in Portland: entity-driven content, technical SEO, and internal linking automation.',
    hero:
      'Grow qualified tech demand in Portland with entity SEO and technical foundations.',
    sections: [
      'Content: integrations, solutions, and competitor comparisons.',
      'Technical: schema, performance, and crawl management.',
      'Ops: editorial SLAs, QA, and analytics for iteration.'
    ],
    faqs: [
      { question: 'Time to results?', answer: 'Early wins in 8–12 weeks; compounding growth with momentum.' },
      { question: 'Developer audiences?', answer: 'We tailor content to devs, PMs, and buying committees.' }
    ]
  },
  'portland-or__technology__website-design': {
    title: 'Website Design in Portland, OR for Technology Companies',
    metaTitle: 'Tech Website Design in Portland | Systemized UX',
    metaDescription:
      'Technology website design in Portland focusing on component systems, accessibility, and CRO.',
    hero:
      'Design tech sites in Portland that communicate complex value with accessible, reusable components.',
    sections: [
      'IA: integration libraries, solutions, and pricing clarity.',
      'System: tokens, components, and usage docs for teams.',
      'CRO: proof, forms, and navigation that reduce friction.'
    ],
    faqs: [
      { question: 'Dark mode?', answer: 'We support themeable systems with accessible contrast.' },
      { question: 'Brand refresh?', answer: 'Typical 4–8 weeks based on research depth and scope.' }
    ]
  },

  // Las Vegas, NV × Tourism
  'las-vegas-nv__tourism__web-development': {
    title: 'Web Development in Las Vegas, NV for Tourism & Hospitality',
    metaTitle: 'Tourism Web Development in Las Vegas | Bookings & Media',
    metaDescription:
      'Tourism web development in Las Vegas with bookings, rich media, and fast experiences for seasonal demand.',
    hero:
      'Build tourism sites in Las Vegas with bookings, itineraries, and fast media that convert seasonal traffic.',
    sections: [
      'Features: booking integrations, itineraries, maps, multi-lingual support.',
      'Performance: image/video CDNs and caching for global audiences.',
      'CRO: packages, upsells, and reviews for social proof.'
    ],
    faqs: [
      { question: 'Dynamic pricing?', answer: 'We integrate with booking engines managing pricing and availability.' },
      { question: 'Seasonality?', answer: 'We plan campaigns and optimize landing pages ahead of peaks.' }
    ]
  },
  'las-vegas-nv__tourism__seo': {
    title: 'SEO in Las Vegas, NV for Tourism & Hospitality',
    metaTitle: 'Tourism SEO in Las Vegas | Local & Seasonal Demand',
    metaDescription:
      'Tourism SEO in Las Vegas with local search, event pages, and structured data to capture seasonal demand.',
    hero:
      'Capture Las Vegas tourism demand with local SEO, event hubs, and media-rich content.',
    sections: [
      'Local: attractions, neighborhoods, and event schema.',
      'Content: itineraries, guides, and listicles aligned to traveler intent.',
      'Technical: performance and internal links to distribute authority.'
    ],
    faqs: [
      { question: 'Google Travel surfaces?', answer: 'We align content/data to surface across Google properties.' },
      { question: 'International audiences?', answer: 'We support i18n and hreflang for key source markets.' }
    ]
  },
  'las-vegas-nv__tourism__website-design': {
    title: 'Website Design in Las Vegas, NV for Tourism & Hospitality',
    metaTitle: 'Tourism Website Design in Las Vegas | Visual & Usable',
    metaDescription:
      'Tourism website design in Las Vegas with visual storytelling, accessibility, and streamlined bookings.',
    hero:
      'Design tourism sites in Las Vegas that inspire and convert with clear, accessible UI.',
    sections: [
      'Design system: cards, galleries, and itinerary components for reuse.',
      'Accessibility: alt text standards and motion controls for media-heavy pages.',
      'CRO: persuasive CTAs and reassurance content near booking steps.'
    ],
    faqs: [
      { question: 'UGC integration?', answer: 'Yes. We integrate UGC with moderation and rights workflows.' },
      { question: 'Success metrics?', answer: 'Bookings, engagement, and assisted conversions.' }
    ]
  },

  // Detroit, MI × Automotive
  'detroit-mi__automotive__web-development': {
    title: 'Web Development in Detroit, MI for Automotive Companies',
    metaTitle: 'Automotive Web Development in Detroit | Performance & Scale',
    metaDescription:
      'Automotive web development in Detroit with product catalogs, specs, and dealer/distributor enablement.',
    hero:
      'Build automotive sites in Detroit that support catalogs, specs, and dealer networks.',
    sections: [
      'Features: comparison tools, spec downloads, and configurators.',
      'Performance: fast, reliable delivery across devices and regions.',
      'CRO: qualification flows and lead capture for B2B/B2C.'
    ],
    faqs: [
      { question: 'Multi-brand support?', answer: 'We design component variants and tokens for sub-brands.' },
      { question: 'Data layers?', answer: 'We implement analytics and attribution with consent controls.' }
    ]
  },
  'detroit-mi__automotive__seo': {
    title: 'SEO in Detroit, MI for Automotive Companies',
    metaTitle: 'Automotive SEO in Detroit | Technical & Authority',
    metaDescription:
      'Automotive SEO in Detroit: technical SEO, content hubs, and authority building for complex searches.',
    hero:
      'Increase qualified automotive search in Detroit with entity SEO and technical foundations.',
    sections: [
      'Content: product hubs, maintenance guides, and case studies.',
      'Technical: schema, performance, and crawl management.',
      'PR: industry citations and partnerships.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'RFQs, dealer inquiries, and revenue contribution.' },
      { question: 'International?', answer: 'We implement hreflang and localized templates for markets.' }
    ]
  },
  'detroit-mi__automotive__website-design': {
    title: 'Website Design in Detroit, MI for Automotive Companies',
    metaTitle: 'Automotive Website Design in Detroit | Industrial UX',
    metaDescription:
      'Automotive website design in Detroit with clear navigation, spec visibility, and conversion-focused UX.',
    hero:
      'Design automotive sites in Detroit that present capabilities clearly and convert.',
    sections: [
      'IA: product lines, specs, and resources organized for clarity.',
      'Components: data tables, comparisons, and case studies.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand systems?', answer: 'We deliver tokens and components for consistent execution.' },
      { question: 'Design QA?', answer: 'We test accessibility, performance, and usability.' }
    ]
  },

  // Memphis, TN × Logistics
  'memphis-tn__logistics__web-development': {
    title: 'Web Development in Memphis, TN for Logistics Companies',
    metaTitle: 'Logistics Web Development in Memphis | Ops & Growth',
    metaDescription:
      'Logistics web development in Memphis with calculators, RFQ flows, and operations-ready content systems.',
    hero:
      'Build logistics sites in Memphis that support quoting, ops content, and lead generation.',
    sections: [
      'Features: RFQ tools, route maps, equipment catalogs, compliance docs.',
      'Performance: fast load times for field devices and international access.',
      'CRO: lead capture tuned for shippers, brokers, and carriers.'
    ],
    faqs: [
      { question: 'Integrations?', answer: 'We integrate with TMS/CRM platforms and analytics.' },
      { question: 'Network scale?', answer: 'We model locations with scalable data structures and templates.' }
    ]
  },
  'memphis-tn__logistics__seo': {
    title: 'SEO in Memphis, TN for Logistics Companies',
    metaTitle: 'Logistics SEO in Memphis | Qualified Demand',
    metaDescription:
      'Logistics SEO in Memphis: service hubs, location pages, and technical SEO that capture intent.',
    hero:
      'Increase qualified logistics demand in Memphis with service/location pages and technical SEO.',
    sections: [
      'Content: services (LTL, FTL, intermodal), industries, compliance resources.',
      'Local: location clusters and service-area pages with structured data.',
      'Technical: performance and crawl control for large catalogs.'
    ],
    faqs: [
      { question: 'Success metrics?', answer: 'RFQs, booked loads, and revenue contribution.' },
      { question: 'Backlink strategy?', answer: 'Industry publications, partnerships, and local citations.' }
    ]
  },
  'memphis-tn__logistics__website-design': {
    title: 'Website Design in Memphis, TN for Logistics Companies',
    metaTitle: 'Logistics Website Design in Memphis | Industrial UX',
    metaDescription:
      'Logistics website design in Memphis with clear navigation, credibility patterns, and RFQ-focused UX.',
    hero:
      'Design logistics sites in Memphis that communicate capabilities and streamline RFQs.',
    sections: [
      'IA: service discoverability, compliance, and equipment info.',
      'Components: data tables, maps, and spec sheets for buyers.',
      'CRO: frictionless forms, reassurance, and social proof.'
    ],
    faqs: [
      { question: 'Brand across fleets?', answer: 'We define tokens and components to unify presentation.' },
      { question: 'Ongoing optimization?', answer: 'We iterate with analytics insights and CRO experiments.' }
    ]
  },

  // Louisville, KY × Manufacturing
  'louisville-ky__manufacturing__web-development': {
    title: 'Web Development in Louisville, KY for Manufacturing Companies',
    metaTitle: 'Manufacturing Web Development in Louisville | Industrial-Grade',
    metaDescription:
      'Manufacturing web development in Louisville with product catalogs, RFQ flows, and industrial performance.',
    hero:
      'Build industrial-grade manufacturing sites in Louisville that support catalogs and procurement.',
    sections: [
      'Features: product specs, certifications, distributor portals.',
      'Performance: fast loads for field devices and low bandwidth.',
      'CRO: qualification pathways tailored to engineers and buyers.'
    ],
    faqs: [
      { question: 'i18n?', answer: 'Yes. Translation workflows and QA are supported.' },
      { question: 'Migration?', answer: 'We preserve SEO with redirects and thorough QA.' }
    ]
  },
  'louisville-ky__manufacturing__seo': {
    title: 'SEO in Louisville, KY for Manufacturing Companies',
    metaTitle: 'Manufacturing SEO in Louisville | Technical & Authority',
    metaDescription:
      'Manufacturing SEO in Louisville: technical SEO, product hubs, and authority building for industrial search.',
    hero:
      'Increase qualified industrial search in Louisville with technical SEO and content hubs.',
    sections: [
      'Content: spec sheets, solution pages, and maintenance resources.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, associations, and partnerships.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'RFQs, distributor inquiries, and revenue impact.' },
      { question: 'International traffic?', answer: 'We manage hreflang and localized templates as needed.' }
    ]
  },
  'louisville-ky__manufacturing__website-design': {
    title: 'Website Design in Louisville, KY for Manufacturing Companies',
    metaTitle: 'Manufacturing Website Design in Louisville | Industrial UX',
    metaDescription:
      'Manufacturing website design in Louisville with clear navigation, spec visibility, and RFQ-focused UX.',
    hero:
      'Design manufacturing sites in Louisville that present capabilities clearly and streamline RFQs.',
    sections: [
      'IA: part finders, category navigation, and download centers.',
      'Components: data tables, comparison blocks, and case studies.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand across plants?', answer: 'We align tokens and components across divisions and plants.' },
      { question: 'Design audits?', answer: 'We assess usability, performance, and consistency with actions.' }
    ]
  },

  // Baltimore, MD × Healthcare
  'baltimore-md__healthcare__web-development': {
    title: 'Web Development in Baltimore, MD for Healthcare Organizations',
    metaTitle: 'Healthcare Web Development in Baltimore | HIPAA-Aware',
    metaDescription:
      'Healthcare web development in Baltimore with HIPAA-aware patterns, performance, and patient-first UX.',
    hero:
      'Build HIPAA-aware, accessible healthcare sites in Baltimore with reliable performance and patient flows.',
    sections: [
      'Security and privacy: consent, encryption, access controls.',
      'Experience: appointment flows, provider directories, service lines.',
      'Operations: maintainable components and content models for care teams.'
    ],
    faqs: [
      { question: 'HIPAA?', answer: 'We coordinate with compliance and implement privacy patterns.' },
      { question: 'EMR/booking?', answer: 'We integrate scheduling and EMR portals securely with clear UX.' }
    ]
  },
  'baltimore-md__healthcare__seo': {
    title: 'SEO in Baltimore, MD for Healthcare Organizations',
    metaTitle: 'Healthcare SEO in Baltimore | Patient Growth',
    metaDescription:
      'Healthcare SEO in Baltimore: local search, structured data, and content governance to grow patient traffic.',
    hero:
      'Improve healthcare discoverability in Baltimore with local SEO, schema, and medical content standards.',
    sections: [
      'Local: multi-location optimization, reviews, service areas.',
      'Content: conditions, treatments, and provider expertise.',
      'Technical: performance, crawl control, and consolidated IA.'
    ],
    faqs: [
      { question: 'Outcomes?', answer: 'Appointments, calls, and service-page conversions.' },
      { question: 'Citations?', answer: 'We manage key local citations and directory consistency.' }
    ]
  },
  'baltimore-md__healthcare__website-design': {
    title: 'Website Design in Baltimore, MD for Healthcare Organizations',
    metaTitle: 'Healthcare Website Design in Baltimore | Accessible UX',
    metaDescription:
      'Healthcare website design in Baltimore with accessible UI, clarity, and patient-centered journeys.',
    hero:
      'Design healthcare experiences in Baltimore that reduce friction and increase trust.',
    sections: [
      'UI: readable typography, clear navigation, ADA-aligned components.',
      'IA: findability for services, providers, insurance, locations.',
      'CRO: improved forms, callouts, and reassurance patterns.'
    ],
    faqs: [
      { question: 'Usability testing?', answer: 'We test key flows with representative users and iterate.' },
      { question: 'Brand consistency?', answer: 'Tokens and component libraries maintain alignment.' }
    ]
  },

  // Milwaukee, WI × Manufacturing
  'milwaukee-wi__manufacturing__web-development': {
    title: 'Web Development in Milwaukee, WI for Manufacturing Companies',
    metaTitle: 'Manufacturing Web Development in Milwaukee | Industrial-Grade',
    metaDescription:
      'Manufacturing web development in Milwaukee with product catalogs, RFQ flows, and industrial performance.',
    hero:
      'Build industrial-grade manufacturing sites in Milwaukee that support catalogs and procurement.',
    sections: [
      'Features: product specs, certifications, distributor portals.',
      'Performance: fast loads for field devices and low bandwidth.',
      'CRO: qualification pathways tailored to engineers and buyers.'
    ],
    faqs: [
      { question: 'i18n?', answer: 'Yes. Translation workflows and QA are supported.' },
      { question: 'Migration?', answer: 'We preserve SEO with redirects and thorough QA.' }
    ]
  },
  'milwaukee-wi__manufacturing__seo': {
    title: 'SEO in Milwaukee, WI for Manufacturing Companies',
    metaTitle: 'Manufacturing SEO in Milwaukee | Technical & Authority',
    metaDescription:
      'Manufacturing SEO in Milwaukee: technical SEO, product hubs, and authority building for industrial search.',
    hero:
      'Increase qualified industrial search in Milwaukee with technical SEO and content hubs.',
    sections: [
      'Content: spec sheets, solution pages, and maintenance resources.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, associations, and partnerships.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'RFQs, distributor inquiries, and revenue impact.' },
      { question: 'International traffic?', answer: 'We manage hreflang and localized templates as needed.' }
    ]
  },
  'milwaukee-wi__manufacturing__website-design': {
    title: 'Website Design in Milwaukee, WI for Manufacturing Companies',
    metaTitle: 'Manufacturing Website Design in Milwaukee | Industrial UX',
    metaDescription:
      'Manufacturing website design in Milwaukee with clear navigation, spec visibility, and RFQ-focused UX.',
    hero:
      'Design manufacturing sites in Milwaukee that present capabilities clearly and streamline RFQs.',
    sections: [
      'IA: part finders, category navigation, and download centers.',
      'Components: data tables, comparison blocks, and case studies.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand across plants?', answer: 'We align tokens and components across divisions and plants.' },
      { question: 'Design audits?', answer: 'We assess usability, performance, and consistency with actions.' }
    ]
  },

  // Albuquerque, NM × Technology
  'albuquerque-nm__technology__web-development': {
    title: 'Web Development in Albuquerque, NM for Technology Companies',
    metaTitle: 'Tech Web Development in Albuquerque | Performance & Scale',
    metaDescription:
      'Albuquerque tech web development with performance, component libraries, and PLG support.',
    hero:
      'Ship performant, scalable tech sites in Albuquerque with developer-grade docs and analytics.',
    sections: [
      'Architecture: modular codebases, tokens, and CI/CD for velocity.',
      'Docs: API references, guides, and examples for activation.',
      'CRO: pricing clarity, trials, and demo CTAs optimized.'
    ],
    faqs: [
      { question: 'Headless CMS?', answer: 'We model content for scale across pages and locales.' },
      { question: 'Security posture?', answer: 'Secure coding, reviews, and runtime monitoring enforced.' }
    ]
  },
  'albuquerque-nm__technology__seo': {
    title: 'SEO in Albuquerque, NM for Technology Companies',
    metaTitle: 'Tech SEO in Albuquerque | Entity & Technical',
    metaDescription:
      'Tech SEO in Albuquerque: entity-driven content, technical SEO, and internal linking automation.',
    hero:
      'Grow qualified tech demand in Albuquerque with entity SEO and technical foundations.',
    sections: [
      'Content: integrations, solutions, and competitor comparisons.',
      'Technical: schema, performance, and crawl management.',
      'Ops: editorial SLAs, QA, and analytics for iteration.'
    ],
    faqs: [
      { question: 'Time to results?', answer: 'Early wins in 8–12 weeks; compounding growth with momentum.' },
      { question: 'Developer audiences?', answer: 'We tailor content to devs, PMs, and buying committees.' }
    ]
  },
  'albuquerque-nm__technology__website-design': {
    title: 'Website Design in Albuquerque, NM for Technology Companies',
    metaTitle: 'Tech Website Design in Albuquerque | Systemized UX',
    metaDescription:
      'Technology website design in Albuquerque focusing on component systems, accessibility, and CRO.',
    hero:
      'Design tech sites in Albuquerque that communicate complex value with accessible, reusable components.',
    sections: [
      'IA: integration libraries, solutions, and pricing clarity.',
      'System: tokens, components, and usage docs for teams.',
      'CRO: proof, forms, and navigation that reduce friction.'
    ],
    faqs: [
      { question: 'Dark mode?', answer: 'We support themeable systems with accessible contrast.' },
      { question: 'Brand refresh?', answer: 'Typical 4–8 weeks based on research depth and scope.' }
    ]
  },

  // Tucson, AZ × Education
  'tucson-az__education__web-development': {
    title: 'Web Development in Tucson, AZ for Education Organizations',
    metaTitle: 'Education Web Development in Tucson | Scalable & Accessible',
    metaDescription:
      'Education web development in Tucson with accessibility, program SEO, and enrollment-focused UX.',
    hero:
      'Launch education websites in Tucson that improve discoverability, accessibility, and enrollment outcomes.',
    sections: [
      'Features: program pages, faculty profiles, event calendars.',
      'Accessibility: WCAG-aligned patterns and staff-friendly workflows.',
      'CRO: request info flows, campus tours, and application funnels.'
    ],
    faqs: [
      { question: 'Multi-campus?', answer: 'We structure multi-campus content with scalable templates and data.' },
      { question: 'Integrations?', answer: 'CRMs, marketing automation, and SIS integrations supported.' }
    ]
  },
  'tucson-az__education__seo': {
    title: 'SEO in Tucson, AZ for Education Organizations',
    metaTitle: 'Education SEO in Tucson | Enrollment Growth',
    metaDescription:
      'Education SEO in Tucson: program SEO, local packs, and structured data to drive inquiries and applications.',
    hero:
      'Increase education visibility in Tucson with program-led SEO and performance improvements.',
    sections: [
      'Content: program pages, outcomes, and faculty expertise.',
      'Local: campus locations, events, reviews optimized for local packs.',
      'Technical: performance, schema, and crawl efficiency.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Inquiries, campus tour bookings, and completed applications.' },
      { question: 'Editorial process?', answer: 'We set workflows with approvals and quality checks.' }
    ]
  },
  'tucson-az__education__website-design': {
    title: 'Website Design in Tucson, AZ for Education Organizations',
    metaTitle: 'Education Website Design in Tucson | Inclusive UX',
    metaDescription:
      'Education website design in Tucson emphasizing inclusive UX, clarity, and enrollment journeys.',
    hero:
      'Design inclusive, enrollment-focused education sites in Tucson with reusable components.',
    sections: [
      'IA: programs, outcomes, admissions, and financial aid clarity.',
      'Components: directories, events, and application steps.',
      'CRO: persuasive content, proof, and low-friction forms.'
    ],
    faqs: [
      { question: 'Brand consistency?', answer: 'We deliver tokens and guidelines for systemized design.' },
      { question: 'Usability testing?', answer: 'We test key flows with target audiences and iterate.' }
    ]
  },

  // Fresno, CA × Agriculture
  'fresno-ca__agriculture__web-development': {
    title: 'Web Development in Fresno, CA for Agriculture Businesses',
    metaTitle: 'Agriculture Web Development in Fresno | Performance & Ops',
    metaDescription:
      'Agriculture web development in Fresno with product listings, distributor info, and local SEO.',
    hero:
      'Build agriculture sites in Fresno that present products clearly and support distributor networks.',
    sections: [
      'Features: product catalogs, dealer locators, and seasonal content.',
      'Performance: fast delivery across rural networks and devices.',
      'CRO: RFQ forms and distributor inquiries optimized.'
    ],
    faqs: [
      { question: 'Multi-lingual?', answer: 'Yes. We implement i18n and translation workflows.' },
      { question: 'Offline usage?', answer: 'We support low-bandwidth patterns and resilient media.' }
    ]
  },
  'fresno-ca__agriculture__seo': {
    title: 'SEO in Fresno, CA for Agriculture Businesses',
    metaTitle: 'Agriculture SEO in Fresno | Local & B2B Demand',
    metaDescription:
      'Agriculture SEO in Fresno: local SEO, product hubs, and content for grower/distributor audiences.',
    hero:
      'Increase qualified agriculture demand in Fresno with local SEO and content hubs.',
    sections: [
      'Content: product lines, growing guides, and case results.',
      'Local: dealer pages and service areas with schema.',
      'Technical: performance and crawl control.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Dealer inquiries, RFQs, and channel revenue.' },
      { question: 'Backlinks?', answer: 'Industry associations, extensions, and local publications.' }
    ]
  },
  'fresno-ca__agriculture__website-design': {
    title: 'Website Design in Fresno, CA for Agriculture Businesses',
    metaTitle: 'Agriculture Website Design in Fresno | Clear & Usable',
    metaDescription:
      'Agriculture website design in Fresno with clear navigation, spec visibility, and RFQ-focused UX.',
    hero:
      'Design agriculture sites in Fresno that present products clearly and convert.',
    sections: [
      'IA: product categories, specs, and distributor info.',
      'Components: data tables, galleries, and seasonal callouts.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand systems?', answer: 'We deliver tokens and components for consistent execution.' },
      { question: 'Design QA?', answer: 'We test accessibility, performance, and usability.' }
    ]
  },

  // Sacramento, CA × Government
  'sacramento-ca__government__web-development': {
    title: 'Web Development in Sacramento, CA for Government Organizations',
    metaTitle: 'Government Web Development in Sacramento | Accessible & Secure',
    metaDescription:
      'Government web development in Sacramento with accessibility, transparency, and secure architectures.',
    hero:
      'Build accessible, secure government sites in Sacramento with clear constituent services.',
    sections: [
      'Accessibility: WCAG compliance, content workflows, audits.',
      'Features: service directories, forms, and public records with clear IA.',
      'Security: RBAC, audit logs, encryption, hardened deployments.'
    ],
    faqs: [
      { question: '508/ADA?', answer: 'Yes. We implement and test with automated and manual checks.' },
      { question: 'Data governance?', answer: 'We document roles, approvals, retention policies.' }
    ]
  },
  'sacramento-ca__government__seo': {
    title: 'SEO in Sacramento, CA for Government Organizations',
    metaTitle: 'Government SEO in Sacramento | Findability & Access',
    metaDescription:
      'Government SEO in Sacramento: structured data, accessibility, and search-friendly IA for services.',
    hero:
      'Improve findability of services in Sacramento with schema, IA, and performance.',
    sections: [
      'Content: service pages, FAQs, and guides aligned to intent.',
      'Technical: schema, performance, and crawl control for large sites.',
      'Local: locations and contacts optimized for search.'
    ],
    faqs: [
      { question: 'Measurement?', answer: 'Task completion rates, service access, feedback signals.' },
      { question: 'Multiple agencies?', answer: 'We structure content models and navigation for clarity.' }
    ]
  },
  'sacramento-ca__government__website-design': {
    title: 'Website Design in Sacramento, CA for Government Organizations',
    metaTitle: 'Government Website Design in Sacramento | Inclusive UX',
    metaDescription:
      'Government website design in Sacramento focused on inclusive UX, clarity, and trust.',
    hero:
      'Design government sites in Sacramento that are inclusive, clear, and easy to navigate.',
    sections: [
      'IA: service discoverability, forms, and content hierarchy.',
      'Components: alerts, FAQs, and resource directories.',
      'CRO: reduce friction with plain language and reassurance.'
    ],
    faqs: [
      { question: 'Language access?', answer: 'We implement multilingual support with translation QA.' },
      { question: 'Design systems?', answer: 'We deliver tokens and components for cross-agency consistency.' }
    ]
  },

  // Kansas City, MO × Logistics
  'kansas-city-mo__logistics__web-development': {
    title: 'Web Development in Kansas City, MO for Logistics Companies',
    metaTitle: 'Logistics Web Development in Kansas City | Ops & Growth',
    metaDescription:
      'Logistics web development in Kansas City with calculators, RFQ flows, and ops-ready content systems.',
    hero:
      'Build logistics sites in Kansas City that support quoting, ops content, and lead generation.',
    sections: [
      'Features: RFQ tools, route maps, equipment catalogs, compliance docs.',
      'Performance: fast load times for field devices and international access.',
      'CRO: lead capture tuned for shippers, brokers, and carriers.'
    ],
    faqs: [
      { question: 'Integrations?', answer: 'We integrate with TMS/CRM platforms and analytics.' },
      { question: 'Network scale?', answer: 'We model locations with scalable data structures and templates.' }
    ]
  },
  'kansas-city-mo__logistics__seo': {
    title: 'SEO in Kansas City, MO for Logistics Companies',
    metaTitle: 'Logistics SEO in Kansas City | Qualified Demand',
    metaDescription:
      'Logistics SEO in Kansas City: service hubs, location pages, and technical SEO that capture intent.',
    hero:
      'Increase qualified logistics demand in Kansas City with service/location pages and technical SEO.',
    sections: [
      'Content: services (LTL, FTL, intermodal), industries, compliance resources.',
      'Local: location clusters and service-area pages with structured data.',
      'Technical: performance and crawl control for large catalogs.'
    ],
    faqs: [
      { question: 'Success metrics?', answer: 'RFQs, booked loads, and revenue contribution.' },
      { question: 'Backlink strategy?', answer: 'Industry publications, partnerships, and local citations.' }
    ]
  },
  'kansas-city-mo__logistics__website-design': {
    title: 'Website Design in Kansas City, MO for Logistics Companies',
    metaTitle: 'Logistics Website Design in Kansas City | Industrial UX',
    metaDescription:
      'Logistics website design in Kansas City with clear navigation, credibility patterns, and RFQ-focused UX.',
    hero:
      'Design logistics sites in Kansas City that communicate capabilities and streamline RFQs.',
    sections: [
      'IA: service discoverability, compliance, equipment info.',
      'Components: data tables, maps, spec sheets for buyers.',
      'CRO: frictionless forms, reassurance, social proof.'
    ],
    faqs: [
      { question: 'Brand across fleets?', answer: 'We define tokens and components to unify presentation.' },
      { question: 'Ongoing optimization?', answer: 'We iterate with analytics insights and CRO experiments.' }
    ]
  },

  // Mesa, AZ × Technology
  'mesa-az__technology__web-development': {
    title: 'Web Development in Mesa, AZ for Technology Companies',
    metaTitle: 'Tech Web Development in Mesa | Performance & Scale',
    metaDescription:
      'Mesa tech web development with performance, component libraries, and product-led growth support.',
    hero:
      'Ship performant, scalable tech sites in Mesa with developer-grade docs and analytics.',
    sections: [
      'Architecture: modular codebases, tokens, and CI/CD for velocity.',
      'Docs: API references, guides, and examples for activation.',
      'CRO: pricing clarity, trials, and demo CTAs optimized.'
    ],
    faqs: [
      { question: 'Headless CMS?', answer: 'We model content for scale across pages and locales.' },
      { question: 'Security posture?', answer: 'Secure coding, reviews, and runtime monitoring enforced.' }
    ]
  },
  'mesa-az__technology__seo': {
    title: 'SEO in Mesa, AZ for Technology Companies',
    metaTitle: 'Tech SEO in Mesa | Entity & Technical',
    metaDescription:
      'Tech SEO in Mesa: entity-driven content, technical SEO, and internal linking automation.',
    hero:
      'Grow qualified tech demand in Mesa with entity SEO and technical foundations.',
    sections: [
      'Content: integrations, solutions, and competitor comparisons.',
      'Technical: schema, performance, and crawl management.',
      'Ops: editorial SLAs, QA, and analytics for iteration.'
    ],
    faqs: [
      { question: 'Time to results?', answer: 'Early wins in 8–12 weeks; compounding growth with momentum.' },
      { question: 'Developer audiences?', answer: 'We tailor content to devs, PMs, and buying committees.' }
    ]
  },
  'mesa-az__technology__website-design': {
    title: 'Website Design in Mesa, AZ for Technology Companies',
    metaTitle: 'Tech Website Design in Mesa | Systemized UX',
    metaDescription:
      'Technology website design in Mesa focusing on component systems, accessibility, and CRO.',
    hero:
      'Design tech sites in Mesa that communicate complex value with accessible, reusable components.',
    sections: [
      'IA: integration libraries, solutions, and pricing clarity.',
      'System: tokens, components, and usage docs for teams.',
      'CRO: proof, forms, and navigation that reduce friction.'
    ],
    faqs: [
      { question: 'Dark mode?', answer: 'We support themeable systems with accessible contrast.' },
      { question: 'Brand refresh?', answer: 'Typical 4–8 weeks based on research depth and scope.' }
    ]
  },
  // Seattle, WA × Aerospace
  'seattle-wa__aerospace__web-development': {
    title: 'Web Development in Seattle, WA for Aerospace Companies',
    metaTitle: 'Aerospace Web Development in Seattle | Secure & Performant',
    metaDescription:
      'Aerospace web development in Seattle with secure architectures, documentation hubs, and procurement-ready UX.',
    hero:
      'Ship secure, performant aerospace sites in Seattle that support documentation, procurement, and growth.',
    sections: [
      'Features: certifications, capabilities, engineering docs, and supplier portals.',
      'Security: RBAC, encryption, approvals, and hardened pipelines.',
      'CRO: RFQ flows, spec downloads, and partner enablement.'
    ],
    faqs: [
      { question: 'Compliance constraints?', answer: 'We align with your policies and implement access controls accordingly.' },
      { question: 'Legacy migration?', answer: 'We plan redirects, preserve SEO, and validate content integrity.' }
    ]
  },
  'seattle-wa__aerospace__seo': {
    title: 'SEO in Seattle, WA for Aerospace Companies',
    metaTitle: 'Aerospace SEO in Seattle | Technical & Authority',
    metaDescription:
      'Aerospace SEO in Seattle: technical SEO, content hubs, and authority building for complex procurement.',
    hero:
      'Increase qualified aerospace search in Seattle with entity SEO and technical foundations.',
    sections: [
      'Content: RFP resources, capability statements, and engineering topics.',
      'Technical: schema, performance, and crawl management.',
      'PR: industry publications and partnerships to build trust.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Qualified RFQs, partner inquiries, and influenced revenue.' },
      { question: 'International rules?', answer: 'We respect export and access boundaries with governance.' }
    ]
  },
  'seattle-wa__aerospace__website-design': {
    title: 'Website Design in Seattle, WA for Aerospace Companies',
    metaTitle: 'Aerospace Website Design in Seattle | Industrial UX',
    metaDescription:
      'Aerospace website design in Seattle with industrial UX, accessibility, and clear procurement paths.',
    hero:
      'Design aerospace sites in Seattle that communicate capabilities and enable procurement workflows.',
    sections: [
      'Components: spec libraries, case study modules, and compliance notices.',
      'Accessibility: WCAG-aligned patterns for technical audiences.',
      'CRO: qualification paths and reassurance content throughout.'
    ],
    faqs: [
      { question: 'Brand across divisions?', answer: 'We define tokens and component variants for sub-brands.' },
      { question: 'Design audits?', answer: 'We assess usability, consistency, and performance with fix plans.' }
    ]
  },

  // Denver, CO × Energy
  'denver-co__energy__web-development': {
    title: 'Web Development in Denver, CO for Energy Companies',
    metaTitle: 'Energy Web Development in Denver | Industrial-Grade',
    metaDescription:
      'Energy web development in Denver with secure, resilient architectures and industrial-grade UX.',
    hero:
      'Build durable energy sites in Denver with catalogs, investor relations, and field-ready documentation.',
    sections: [
      'Features: project portfolios, product specs, and supplier portals.',
      'Tech: static + SSR blends, edge caching, and robust media delivery.',
      'CRO: RFQ workflows, spec downloads, and qualification funnels.'
    ],
    faqs: [
      { question: 'Multi-language?', answer: 'Yes. i18n with translation workflows and QA.' },
      { question: 'Field constraints?', answer: 'Low-bandwidth patterns and offline-tolerant docs supported.' }
    ]
  },
  'denver-co__energy__seo': {
    title: 'SEO in Denver, CO for Energy Companies',
    metaTitle: 'Energy SEO in Denver | Industrial Search',
    metaDescription:
      'Energy SEO in Denver: technical SEO, content hubs, and buyer enablement for complex industrial searches.',
    hero:
      'Increase qualified industrial search in Denver with technical SEO and entity-driven content.',
    sections: [
      'Content: spec sheets, maintenance guides, and case studies.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, partnerships, and analyst references.'
    ],
    faqs: [
      { question: 'Measure success?', answer: 'Qualified RFQs, partner queries, and revenue—not just rankings.' },
      { question: 'Legacy CMS?', answer: 'We migrate content safely with redirects and analytics continuity.' }
    ]
  },
  'denver-co__energy__website-design': {
    title: 'Website Design in Denver, CO for Energy Companies',
    metaTitle: 'Energy Website Design in Denver | Industrial UX',
    metaDescription:
      'Energy website design in Denver with industrial UX, accessibility, and documentation-rich layouts.',
    hero:
      'Design energy sites in Denver that balance industrial needs with accessibility and brand.',
    sections: [
      'Components: tables, maps, product specs, and safety content.',
      'Accessibility: WCAG-aligned patterns for harsh environment usage.',
      'Governance: design systems that scale across divisions.'
    ],
    faqs: [
      { question: 'Brand alignment?', answer: 'Shared tokens and component rules support sub-brands.' },
      { question: 'Design audits?', answer: 'We assess performance, usability, and consistency with actions.' }
    ]
  },

  // Washington, DC × Government
  'washington-dc__government__web-development': {
    title: 'Web Development in Washington, D.C. for Government Organizations',
    metaTitle: 'Government Web Development in Washington, DC | Accessible & Secure',
    metaDescription:
      'Government web development in Washington, DC with accessibility, transparency, and secure architectures.',
    hero:
      'Build accessible, secure government sites in Washington, DC with clear constituent services.',
    sections: [
      'Accessibility: WCAG compliance, content workflows, and audits.',
      'Features: service directories, forms, and public records with clear IA.',
      'Security: RBAC, audit logs, encryption, and hardened deployments.'
    ],
    faqs: [
      { question: '508/ADA compliance?', answer: 'Yes. We implement and test rigorously with automated and manual checks.' },
      { question: 'Data governance?', answer: 'We document roles, approvals, and retention policies.' }
    ]
  },
  'washington-dc__government__seo': {
    title: 'SEO in Washington, D.C. for Government Organizations',
    metaTitle: 'Government SEO in Washington, DC | Findability & Access',
    metaDescription:
      'Government SEO in Washington, DC: structured data, accessibility, and search-friendly IA for services.',
    hero:
      'Improve findability of services in Washington, DC with schema, IA, and performance.',
    sections: [
      'Content: service pages, FAQs, and guides aligned to user intent.',
      'Technical: schema, performance, and crawl control for large sites.',
      'Local: agency locations and contacts optimized for search.'
    ],
    faqs: [
      { question: 'How to measure?', answer: 'Task completion rates, service access, and feedback signals.' },
      { question: 'Multiple agencies?', answer: 'We structure content models and navigation for clarity.' }
    ]
  },
  'washington-dc__government__website-design': {
    title: 'Website Design in Washington, D.C. for Government Organizations',
    metaTitle: 'Government Website Design in Washington, DC | Inclusive UX',
    metaDescription:
      'Government website design in Washington, DC focused on inclusive UX, clarity, and trust.',
    hero:
      'Design government sites in Washington, DC that are inclusive, clear, and easy to navigate.',
    sections: [
      'IA: service discoverability, forms, and content hierarchy.',
      'Components: alerts, FAQs, and resource directories.',
      'CRO: reduce friction for key tasks with plain language and reassurance.'
    ],
    faqs: [
      { question: 'Language access?', answer: 'We implement multilingual support with translation QA.' },
      { question: 'Design systems?', answer: 'We deliver tokens and components for cross-agency consistency.' }
    ]
  },

  // Nashville, TN × Healthcare
  'nashville-tn__healthcare__web-development': {
    title: 'Web Development in Nashville, TN for Healthcare Organizations',
    metaTitle: 'Healthcare Web Development in Nashville | HIPAA-Aware',
    metaDescription:
      'Healthcare web development in Nashville with HIPAA-aware patterns, performance, and patient-first UX.',
    hero:
      'Build HIPAA-aware, accessible healthcare sites in Nashville with reliable performance and patient flows.',
    sections: [
      'Security and privacy: consent, encryption, and access controls.',
      'Experience: appointment flows, provider directories, and service lines.',
      'Operations: maintainable components and content models for care teams.'
    ],
    faqs: [
      { question: 'HIPAA considerations?', answer: 'Yes. We coordinate with compliance and implement privacy patterns.' },
      { question: 'EMR & booking?', answer: 'We integrate scheduling/EMR portals with clear UX and security.' }
    ]
  },
  'nashville-tn__healthcare__seo': {
    title: 'SEO in Nashville, TN for Healthcare Organizations',
    metaTitle: 'Healthcare SEO in Nashville | Patient Growth',
    metaDescription:
      'Healthcare SEO in Nashville: local search, structured data, and content governance to grow patient traffic.',
    hero:
      'Improve healthcare discoverability in Nashville with local SEO, schema, and medical content standards.',
    sections: [
      'Local: multi-location optimization, reviews, and service areas.',
      'Content: conditions, treatments, and provider expertise with reviews.',
      'Technical: performance, crawl control, and consolidated IA.'
    ],
    faqs: [
      { question: 'Outcomes?', answer: 'Appointments, calls, and service-page conversions.' },
      { question: 'Citations?', answer: 'We manage key local citations and directory consistency.' }
    ]
  },
  'nashville-tn__healthcare__website-design': {
    title: 'Website Design in Nashville, TN for Healthcare Organizations',
    metaTitle: 'Healthcare Website Design in Nashville | Accessible UX',
    metaDescription:
      'Healthcare website design in Nashville with accessible UI, clarity, and patient-centered journeys.',
    hero:
      'Design healthcare experiences in Nashville that reduce friction and increase trust.',
    sections: [
      'UI: readable typography, clear navigation, ADA-aligned components.',
      'IA: findability for services, providers, insurance, and locations.',
      'CRO: improved forms, callouts, and reassurance patterns.'
    ],
    faqs: [
      { question: 'Usability testing?', answer: 'We test key flows with representative users and iterate.' },
      { question: 'Brand consistency?', answer: 'Tokens and component libraries maintain alignment.' }
    ]
  },
  // Columbus, OH × Education
  'columbus-oh__education__web-development': {
    title: 'Web Development in Columbus, OH for Education Organizations',
    metaTitle: 'Education Web Development in Columbus | Scalable & Accessible',
    metaDescription:
      'Education web development in Columbus with scalable architectures, accessibility, and enrollment-focused UX for schools and edtech.',
    hero:
      'Launch education websites in Columbus that improve discoverability, accessibility, and enrollment outcomes.',
    sections: [
      'Features: program pages, faculty profiles, and event calendars built for SEO.',
      'Accessibility: WCAG-aligned patterns and content workflows for staff.',
      'CRO: request info flows, campus tours, and application funnels.'
    ],
    faqs: [
      { question: 'Multi-campus sites?', answer: 'We structure multi-campus content with scalable templates and data models.' },
      { question: 'Integrations?', answer: 'CRMs, marketing automation, and SIS integrations supported.' }
    ]
  },
  'columbus-oh__education__seo': {
    title: 'SEO in Columbus, OH for Education Organizations',
    metaTitle: 'Education SEO in Columbus | Enrollment Growth',
    metaDescription:
      'Education SEO in Columbus: program SEO, local packs, and structured data to drive inquiries and applications.',
    hero:
      'Increase education visibility in Columbus with program-led SEO and performance improvements.',
    sections: [
      'Content: program pages, outcomes, and faculty expertise aligned to search intent.',
      'Local: campus locations, events, and reviews optimized for local packs.',
      'Technical: performance, schema, and crawl efficiency.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Inquiries, campus tour bookings, and completed applications.' },
      { question: 'Review/process?', answer: 'We set editorial workflows with approvals and quality checks.' }
    ]
  },
  'columbus-oh__education__website-design': {
    title: 'Website Design in Columbus, OH for Education Organizations',
    metaTitle: 'Education Website Design in Columbus | Inclusive UX',
    metaDescription:
      'Education website design in Columbus emphasizing inclusive UX, clarity, and clear enrollment journeys.',
    hero:
      'Design inclusive, enrollment-focused education sites in Columbus with reusable components.',
    sections: [
      'IA: programs, outcomes, admissions, and financial aid clarity.',
      'Components: directories, events, and application steps.',
      'CRO: persuasive content, proof, and low-friction forms.'
    ],
    faqs: [
      { question: 'Brand consistency?', answer: 'We deliver tokens and guidelines for systemized design.' },
      { question: 'Usability testing?', answer: 'We test key flows with target audiences and iterate.' }
    ]
  },

  // Indianapolis, IN × Manufacturing
  'indianapolis-in__manufacturing__web-development': {
    title: 'Web Development in Indianapolis, IN for Manufacturing Companies',
    metaTitle: 'Manufacturing Web Development in Indianapolis | Industrial-Grade',
    metaDescription:
      'Manufacturing web development in Indianapolis with product catalogs, RFQ flows, and industrial performance.',
    hero:
      'Build industrial-grade manufacturing sites in Indianapolis that support catalogs, RFQs, and procurement.',
    sections: [
      'Features: product specs, certifications, and distributor portals.',
      'Performance: fast loads for field devices and low bandwidth.',
      'CRO: qualification pathways tailored to engineers and buyers.'
    ],
    faqs: [
      { question: 'Do you support multi-language?', answer: 'Yes. i18n and translation workflows are supported.' },
      { question: 'Legacy CMS migration?', answer: 'We map URLs, preserve SEO, and QA content integrity.' }
    ]
  },
  'indianapolis-in__manufacturing__seo': {
    title: 'SEO in Indianapolis, IN for Manufacturing Companies',
    metaTitle: 'Manufacturing SEO in Indianapolis | Technical & Authority',
    metaDescription:
      'Manufacturing SEO in Indianapolis: technical SEO, product hubs, and authority building for industrial search.',
    hero:
      'Increase qualified industrial search in Indianapolis with technical SEO and content hubs.',
    sections: [
      'Content: spec sheets, solution pages, and maintenance resources.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, associations, and partnerships.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'RFQs, distributor inquiries, and revenue impact.' },
      { question: 'International traffic?', answer: 'We manage hreflang and localized templates as needed.' }
    ]
  },
  'indianapolis-in__manufacturing__website-design': {
    title: 'Website Design in Indianapolis, IN for Manufacturing Companies',
    metaTitle: 'Manufacturing Website Design in Indianapolis | Industrial UX',
    metaDescription:
      'Manufacturing website design in Indianapolis with clear navigation, spec visibility, and RFQ-focused UX.',
    hero:
      'Design manufacturing sites in Indianapolis that present capabilities clearly and streamline RFQs.',
    sections: [
      'IA: part finders, category navigation, and download centers.',
      'Components: data tables, comparison blocks, and case studies.',
      'CRO: reassurance content and low-friction lead capture.'
    ],
    faqs: [
      { question: 'Brand across plants?', answer: 'We align tokens and components across divisions and plants.' },
      { question: 'Design audits?', answer: 'We assess usability, performance, and consistency with actions.' }
    ]
  },

  // Charlotte, NC × Finance
  'charlotte-nc__finance__web-development': {
    title: 'Web Development in Charlotte, NC for Finance Companies',
    metaTitle: 'Finance Web Development in Charlotte | Secure & Compliant',
    metaDescription:
      'Charlotte finance web development with secure, compliant architectures and conversion-focused UX.',
    hero:
      'Deliver secure, compliant finance websites in Charlotte with performance and CRO baked in.',
    sections: [
      'Security: RBAC, encryption, and audit logging with hardened CI/CD.',
      'Experience: calculators, onboarding, disclosures, and reassurance patterns.',
      'Maintainability: component libraries and docs for long-term velocity.'
    ],
    faqs: [
      { question: 'Integrations?', answer: 'CRMs, analytics, and data layers with permission controls.' },
      { question: 'Risk mitigation?', answer: 'Approvals, versioning, and rollbacks with observability.' }
    ]
  },
  'charlotte-nc__finance__seo': {
    title: 'SEO in Charlotte, NC for Finance Companies',
    metaTitle: 'Finance SEO in Charlotte | E‑E‑A‑T & Technical',
    metaDescription:
      'Finance SEO in Charlotte: entity-driven content, E‑E‑A‑T signals, and technical foundations for growth.',
    hero:
      'Win finance SERPs in Charlotte with entity SEO, technical excellence, and compliant operations.',
    sections: [
      'Content: solution pages, topical hubs, and author credibility.',
      'Technical: schema, performance, and crawl efficiency at scale.',
      'Ops: compliant reviews, authorship, and claim substantiation.'
    ],
    faqs: [
      { question: 'Timeline?', answer: 'Initial traction in 8–12 weeks; compounding growth after.' },
      { question: 'Link building?', answer: 'Quality-first PR, research assets, and partnerships.' }
    ]
  },
  'charlotte-nc__finance__website-design': {
    title: 'Website Design in Charlotte, NC for Finance Companies',
    metaTitle: 'Finance Website Design in Charlotte | Trust & Conversion',
    metaDescription:
      'Finance website design in Charlotte with trust patterns, accessible UI, and conversion-focused layouts.',
    hero:
      'Design credible finance sites in Charlotte that convert regulated audiences effectively.',
    sections: [
      'IA: product clarity, disclosures, and helpful resources.',
      'System: tokens, components, and docs for cross-team alignment.',
      'CRO: form UX, social proof, and content hierarchy.'
    ],
    faqs: [
      { question: 'Brand consistency?', answer: 'We enforce consistency with tokens and component libraries.' },
      { question: 'Post-launch?', answer: 'We iterate through UX research and experimentation.' }
    ]
  },

  // San Francisco, CA × Technology
  'san-francisco-ca__technology__web-development': {
    title: 'Web Development in San Francisco, CA for Technology Companies',
    metaTitle: 'Tech Web Development in San Francisco | Performance & Scale',
    metaDescription:
      'San Francisco tech web development with performance, component libraries, and product-led growth support.',
    hero:
      'Ship performant, scalable tech marketing sites in San Francisco with developer-grade docs.',
    sections: [
      'Architecture: modular code, tokens, and CI for velocity.',
      'Docs: API references, guides, and examples for activation.',
      'CRO: pricing clarity, trials, and demo CTAs optimized.'
    ],
    faqs: [
      { question: 'Headless CMS?', answer: 'We model content for scale across pages and locales.' },
      { question: 'Security?', answer: 'Secure coding, reviews, and runtime monitoring enforced.' }
    ]
  },
  'san-francisco-ca__technology__seo': {
    title: 'SEO in San Francisco, CA for Technology Companies',
    metaTitle: 'Tech SEO in San Francisco | Entity & Technical',
    metaDescription:
      'Tech SEO in San Francisco: entity-driven content, technical SEO, and internal linking automation.',
    hero:
      'Grow qualified tech demand in San Francisco with entity SEO and technical foundations.',
    sections: [
      'Content: integrations, solutions, and competitor comparisons.',
      'Technical: schema, performance, and crawl management.',
      'Ops: editorial SLAs, QA, and analytics for iteration.'
    ],
    faqs: [
      { question: 'Time to results?', answer: 'Early wins in 8–12 weeks; compounding growth with momentum.' },
      { question: 'Dev audience?', answer: 'We tailor content to developers and buying committees differently.' }
    ]
  },
  'san-francisco-ca__technology__website-design': {
    title: 'Website Design in San Francisco, CA for Technology Companies',
    metaTitle: 'Tech Website Design in San Francisco | Systemized UX',
    metaDescription:
      'Technology website design in San Francisco focusing on component systems, accessibility, and CRO.',
    hero:
      'Design tech sites in San Francisco that communicate complex value with accessible, reusable components.',
    sections: [
      'IA: integration libraries, solutions, and pricing clarity.',
      'System: tokens, components, and usage docs for teams.',
      'CRO: proof, forms, and navigation that reduce friction.'
    ],
    faqs: [
      { question: 'Dark mode?', answer: 'We support themeable systems with accessible contrast.' },
      { question: 'Brand refresh?', answer: 'Typical 4–8 weeks based on research depth and scope.' }
    ]
  },
  // San Jose, CA × Technology
  'san-jose-ca__technology__web-development': {
    title: 'Web Development in San Jose, CA for Technology Companies',
    metaTitle: 'Tech Web Development in San Jose | Scale & Performance',
    metaDescription:
      'San Jose tech web development: scalable architectures, performance, and component libraries that drive product growth.',
    hero:
      'Build scalable tech marketing sites in San Jose with performance, reliability, and developer-grade documentation.',
    sections: [
      'Architecture: modular codebases, design tokens, and CI/CD for fast iteration.',
      'Docs: API references, changelogs, and guides that support product-led growth.',
      'CRO: trials, demos, and pricing optimization to improve activation and conversion.'
    ],
    faqs: [
      { question: 'Do you support headless CMS?', answer: 'Yes. We design content models that scale across regions and products.' },
      { question: 'Analytics & consent?', answer: 'We implement consent-aware analytics and CDP integrations.' }
    ]
  },
  'san-jose-ca__technology__seo': {
    title: 'SEO in San Jose, CA for Technology Companies',
    metaTitle: 'Tech SEO in San Jose | Entity & Technical SEO',
    metaDescription:
      'Tech SEO in San Jose with entity-driven content, technical excellence, and scalable internal linking for growth.',
    hero:
      'Grow qualified tech traffic in San Jose with entity SEO, technical foundations, and content operations.',
    sections: [
      'Content: solution pages, competitor comparisons, and integration libraries.',
      'Technical: schema, performance, and crawl management for large sites.',
      'Ops: editorial rituals, QA, and governance for consistency and velocity.'
    ],
    faqs: [
      { question: 'How long to see results?', answer: 'Expect early traction in 8–12 weeks with compounding growth across quarters.' },
      { question: 'Developer audiences?', answer: 'Yes. We design content paths tailored to developers, PMs, and buyers.' }
    ]
  },
  'san-jose-ca__technology__website-design': {
    title: 'Website Design in San Jose, CA for Technology Companies',
    metaTitle: 'Tech Website Design in San Jose | Systemized UX',
    metaDescription:
      'Tech website design in San Jose with systemized components, accessibility, and CRO-focused layouts.',
    hero:
      'Design technology sites that communicate complex value simply, with accessible, reusable components.',
    sections: [
      'IA: clear pricing, integrations, and solution pages for multiple personas.',
      'System: tokenized components, variants, and documentation.',
      'CRO: optimized forms, proof elements, and navigation patterns.'
    ],
    faqs: [
      { question: 'Design handoff?', answer: 'We deliver Figma, tokens, and coded components to minimize drift.' },
      { question: 'Brand refresh timelines?', answer: 'Typical refreshes run 4–8 weeks depending on scope.' }
    ]
  },

  // Austin, TX × Technology
  'austin-tx__technology__web-development': {
    title: 'Web Development in Austin, TX for Technology Companies',
    metaTitle: 'Tech Web Development in Austin | High-Velocity Delivery',
    metaDescription:
      'Austin tech web development: flexible component libraries, performance tuning, and fast release cycles.',
    hero:
      'Ship high-velocity tech sites in Austin with scalable components and measurable performance.',
    sections: [
      'Stack: Next.js, TypeScript, and edge-first delivery for speed worldwide.',
      'Docs: API hubs, examples, and tutorials that lower activation friction.',
      'CRO: experimentation frameworks to optimize signups and demos.'
    ],
    faqs: [
      { question: 'Tooling preferences?', answer: 'We adapt to your stack, or recommend best-in-class defaults.' },
      { question: 'Security posture?', answer: 'We enforce secure coding, reviews, and runtime monitoring.' }
    ]
  },
  'austin-tx__technology__seo': {
    title: 'SEO in Austin, TX for Technology Companies',
    metaTitle: 'Tech SEO in Austin | Demand Gen at Scale',
    metaDescription:
      'Tech SEO in Austin: entity research, technical excellence, and content machines that scale.',
    hero:
      'Generate qualified demand in Austin with entity-driven content and technical SEO.',
    sections: [
      'Content: solution libraries, vertical pages, and integration ecosystems.',
      'Technical: schema, site speed, and internal link automation.',
      'Ops: editorial SLAs, quality review, and analytics for visibility.'
    ],
    faqs: [
      { question: 'Startup vs enterprise?', answer: 'We tailor strategies to your org stage and resources.' },
      { question: 'International targeting?', answer: 'We implement hreflang and regional routing with i18n.' }
    ]
  },
  'austin-tx__technology__website-design': {
    title: 'Website Design in Austin, TX for Technology Companies',
    metaTitle: 'Tech Website Design in Austin | Conversion UX',
    metaDescription:
      'Technology website design in Austin with component systems, accessibility, and high-converting UX.',
    hero:
      'Design accessible, conversion-focused tech sites in Austin with reusable system components.',
    sections: [
      'IA: persona-led journeys with clear navigation and proof elements.',
      'System: tokens, components, and usage docs for teams.',
      'CRO: forms, CTAs, and layout tests to reduce friction.'
    ],
    faqs: [
      { question: 'Design tokens integration?', answer: 'Yes. We align tokens across web, docs, and product UI.' },
      { question: 'Accessibility level?', answer: 'We target WCAG AA with automated and manual checks.' }
    ]
  },

  // Jacksonville, FL × Logistics
  'jacksonville-fl__logistics__web-development': {
    title: 'Web Development in Jacksonville, FL for Logistics Companies',
    metaTitle: 'Logistics Web Development in Jacksonville | Ops & Growth',
    metaDescription:
      'Logistics web development in Jacksonville with calculators, RFQ flows, and operations-ready content systems.',
    hero:
      'Build logistics sites in Jacksonville that support quoting, ops content, and lead generation.',
    sections: [
      'Features: RFQ/quote tools, route maps, equipment catalogs, and compliance docs.',
      'Performance: fast load times for field devices and international access.',
      'CRO: lead capture tuned for shippers, brokers, and carriers.'
    ],
    faqs: [
      { question: 'Integrations?', answer: 'We integrate with TMS/CRM platforms and analytics.' },
      { question: 'Multi-location network?', answer: 'We model locations with scalable data structures and templates.' }
    ]
  },
  'jacksonville-fl__logistics__seo': {
    title: 'SEO in Jacksonville, FL for Logistics Companies',
    metaTitle: 'Logistics SEO in Jacksonville | Qualified Demand',
    metaDescription:
      'Logistics SEO in Jacksonville: service hubs, location pages, and technical SEO that capture intent.',
    hero:
      'Increase qualified logistics demand in Jacksonville with service/location pages and technical SEO.',
    sections: [
      'Content: services (LTL, FTL, intermodal), industries, and compliance resources.',
      'Local: location clusters and service-area pages with structured data.',
      'Technical: performance and crawl control for large catalogs.'
    ],
    faqs: [
      { question: 'How is success measured?', answer: 'RFQs, booked loads, and revenue contribution.' },
      { question: 'Backlink strategy?', answer: 'Industry publications, partnerships, and local citations.' }
    ]
  },
  'jacksonville-fl__logistics__website-design': {
    title: 'Website Design in Jacksonville, FL for Logistics Companies',
    metaTitle: 'Logistics Website Design in Jacksonville | Industrial UX',
    metaDescription:
      'Logistics website design in Jacksonville with clear navigation, credibility patterns, and RFQ-focused UX.',
    hero:
      'Design logistics sites in Jacksonville that communicate capabilities and streamline RFQs.',
    sections: [
      'IA: service discoverability, compliance, and equipment info.',
      'Components: data tables, maps, and spec sheets for buyers.',
      'CRO: frictionless forms, reassurance, and social proof.'
    ],
    faqs: [
      { question: 'Brand across fleets?', answer: 'We define tokens and components to unify presentation.' },
      { question: 'Ongoing optimization?', answer: 'We iterate with analytics insights and CRO experimentation.' }
    ]
  },

  // Fort Worth, TX × Aerospace
  'fort-worth-tx__aerospace__web-development': {
    title: 'Web Development in Fort Worth, TX for Aerospace Companies',
    metaTitle: 'Aerospace Web Development in Fort Worth | Secure & Compliant',
    metaDescription:
      'Aerospace web development in Fort Worth with secure, compliant patterns and procurement-ready content.',
    hero:
      'Deliver secure aerospace sites in Fort Worth with procurement content, documentation, and performance.',
    sections: [
      'Features: certifications, specs, case studies, and supplier portals.',
      'Security: RBAC, encryption, and audit logs with hardened deployments.',
      'CRO: RFQ flows for long-cycle B2B defense and aerospace buyers.'
    ],
    faqs: [
      { question: 'ITAR/controlled content?', answer: 'We follow your policies and design access controls accordingly.' },
      { question: 'Legacy migrations?', answer: 'We plan redirects, protect SEO, and validate content integrity.' }
    ]
  },
  'fort-worth-tx__aerospace__seo': {
    title: 'SEO in Fort Worth, TX for Aerospace Companies',
    metaTitle: 'Aerospace SEO in Fort Worth | Technical & Authority',
    metaDescription:
      'Aerospace SEO in Fort Worth: technical SEO, content hubs, and authority-building for complex procurement.',
    hero:
      'Increase qualified aerospace search in Fort Worth with entity SEO and technical excellence.',
    sections: [
      'Content: RFP resources, capability statements, and engineering topics.',
      'Technical: structured data, performance, and crawl management.',
      'PR: industry citations, partnerships, and analyst mentions.'
    ],
    faqs: [
      { question: 'KPIs?', answer: 'Qualified RFQs, partner inquiries, and influenced revenue.' },
      { question: 'International rules?', answer: 'We respect compliance boundaries and coordinate with legal.' }
    ]
  },
  'fort-worth-tx__aerospace__website-design': {
    title: 'Website Design in Fort Worth, TX for Aerospace Companies',
    metaTitle: 'Aerospace Website Design in Fort Worth | Industrial UX',
    metaDescription:
      'Aerospace website design in Fort Worth with industrial-grade components, accessibility, and clear procurement paths.',
    hero:
      'Design aerospace sites in Fort Worth that communicate capabilities and support procurement teams.',
    sections: [
      'Components: spec libraries, case study modules, and compliance notice blocks.',
      'Accessibility: WCAG-aligned patterns suited for technical audiences.',
      'CRO: qualification pathways and reassurance content throughout.'
    ],
    faqs: [
      { question: 'Brand across divisions?', answer: 'We define shared tokens and component variants for sub-brands.' },
      { question: 'Design audits?', answer: 'We assess usability, performance, and consistency with fix plans.' }
    ]
  },
  // Philadelphia, PA × Healthcare
  'philadelphia-pa__healthcare__web-development': {
    title: 'Web Development in Philadelphia, PA for Healthcare Organizations',
    metaTitle: 'Healthcare Web Development in Philadelphia | HIPAA-Aware',
    metaDescription:
      'Philadelphia healthcare web development with HIPAA-aware patterns, performance, and patient-first UX for providers and clinics.',
    hero:
      'Build HIPAA-aware, accessible healthcare sites in Philadelphia with reliable performance and patient acquisition funnels.',
    sections: [
      'Security and privacy: consent, encryption, and access controls integrated into workflows.',
      'Experience: appointment flows, provider directories, and service pages that convert.',
      'Operations: maintainable components and content models for care teams.'
    ],
    faqs: [
      { question: 'Do you support HIPAA considerations?', answer: 'Yes. We implement privacy patterns and coordinate with compliance teams.' },
      { question: 'Can you integrate EMR/booking?', answer: 'We integrate scheduling and EMR portals securely with clear UX.' }
    ]
  },
  'philadelphia-pa__healthcare__seo': {
    title: 'SEO in Philadelphia, PA for Healthcare Organizations',
    metaTitle: 'Healthcare SEO in Philadelphia | Patient Growth',
    metaDescription:
      'Healthcare SEO in Philadelphia: local search, service schema, and content governance to grow qualified patient traffic.',
    hero:
      'Improve healthcare discoverability with local SEO, structured data, and medical content governance.',
    sections: [
      'Local SEO: locations, services, and provider pages structured for rich results.',
      'Content: condition pages, FAQs, and accessibility standards for trust.',
      'Technical: performance, crawl control, and consolidated information architecture.'
    ],
    faqs: [
      { question: 'How do you measure outcomes?', answer: 'New patient appointments, calls, and service-page conversions.' },
      { question: 'Multiple locations?', answer: 'We manage multi-location SEO with scalable templates and data.' }
    ]
  },
  'philadelphia-pa__healthcare__website-design': {
    title: 'Website Design in Philadelphia, PA for Healthcare Organizations',
    metaTitle: 'Healthcare Website Design in Philadelphia | Accessible UX',
    metaDescription:
      'Healthcare website design in Philadelphia with accessible UI, clarity, and patient-centered journeys.',
    hero:
      'Design healthcare experiences that reduce friction and increase trust across devices.',
    sections: [
      'UI: readable typography, clear navigation, and ADA-aligned components.',
      'IA: findability for services, providers, insurance, and locations.',
      'CRO: improved forms, callouts, and reassurance patterns.'
    ],
    faqs: [
      { question: 'Do you conduct usability testing?', answer: 'Yes. We test flows with representative users and iterate.' },
      { question: 'Brand consistency?', answer: 'We deliver tokens and component libraries for systemized design.' }
    ]
  },

  // San Antonio, TX × Healthcare
  'san-antonio-tx__healthcare__web-development': {
    title: 'Web Development in San Antonio, TX for Healthcare Organizations',
    metaTitle: 'Healthcare Web Development in San Antonio | Secure & Scalable',
    metaDescription:
      'San Antonio healthcare web development with secure, scalable patterns and patient acquisition funnels.',
    hero:
      'Launch secure, scalable healthcare sites in San Antonio with reliable appointment and referral flows.',
    sections: [
      'Stack: Next.js, CDN, and observability for uptime and speed.',
      'Features: provider search, insurance info, and service lines optimized for SEO.',
      'Governance: roles, approvals, and content quality controls.'
    ],
    faqs: [
      { question: 'Support bilingual content?', answer: 'Yes. We implement i18n with translation QA.' },
      { question: 'Migration path?', answer: 'We map URLs, redirect legacy content, and protect rankings.' }
    ]
  },
  'san-antonio-tx__healthcare__seo': {
    title: 'SEO in San Antonio, TX for Healthcare Organizations',
    metaTitle: 'Healthcare SEO in San Antonio | Local Visibility',
    metaDescription:
      'Healthcare SEO in San Antonio: local packs, structured data, and compliant content to drive appointments.',
    hero:
      'Increase local healthcare visibility with structured data, performance, and patient-first content.',
    sections: [
      'Local: GMB optimization, service areas, and multi-location management.',
      'Content: symptoms, treatments, and provider expertise with review workflows.',
      'Technical: Core Web Vitals, crawl efficiency, and internal linking.'
    ],
    faqs: [
      { question: 'When to expect results?', answer: 'Early gains within 8–12 weeks; compounding growth thereafter.' },
      { question: 'Do you handle citations?', answer: 'We manage key local citations and directory consistency.' }
    ]
  },
  'san-antonio-tx__healthcare__website-design': {
    title: 'Website Design in San Antonio, TX for Healthcare Organizations',
    metaTitle: 'Healthcare Website Design in San Antonio | Patient-Centered',
    metaDescription:
      'Healthcare website design in San Antonio with accessible patterns and clear patient journeys.',
    hero:
      'Design patient-centered healthcare websites in San Antonio that guide users to care quickly.',
    sections: [
      'Components: service cards, insurance callouts, and provider profiles.',
      'Accessibility: WCAG-aligned color, motion, and keyboard support.',
      'CRO: simplified forms and trust signals for higher conversions.'
    ],
    faqs: [
      { question: 'Brand alignment across facilities?', answer: 'We define tokens and shared components for consistency.' },
      { question: 'Do you iterate post-launch?', answer: 'We run experiments and UX research to sustain improvements.' }
    ]
  },

  // San Diego, CA × Tourism
  'san-diego-ca__tourism__web-development': {
    title: 'Web Development in San Diego, CA for Tourism & Hospitality',
    metaTitle: 'Tourism Web Development in San Diego | Bookings & Media',
    metaDescription:
      'Tourism web development in San Diego with bookings, rich media, and fast experiences for seasonal demand.',
    hero:
      'Build tourism sites in San Diego with bookings, itineraries, and fast media that convert seasonal traffic.',
    sections: [
      'Features: booking integrations, itineraries, maps, and multi-lingual support.',
      'Performance: image/video CDNs and caching for global audiences.',
      'CRO: packages, upsells, and reviews for social proof.'
    ],
    faqs: [
      { question: 'Do you support dynamic pricing?', answer: 'We integrate with booking engines that manage pricing and availability.' },
      { question: 'How do you handle seasonality?', answer: 'We plan campaigns and optimize landing pages ahead of peak periods.' }
    ]
  },
  'san-diego-ca__tourism__seo': {
    title: 'SEO in San Diego, CA for Tourism & Hospitality',
    metaTitle: 'Tourism SEO in San Diego | Local & Seasonal Demand',
    metaDescription:
      'Tourism SEO in San Diego with local search, event pages, and structured data to capture seasonal demand.',
    hero:
      'Capture San Diego tourism demand with local SEO, event hubs, and media-rich content.',
    sections: [
      'Local: attractions, neighborhoods, and event schema for discoverability.',
      'Content: itineraries, guides, and listicles aligned to traveler intent.',
      'Technical: performance and internal links to distribute authority.'
    ],
    faqs: [
      { question: 'Do you optimize Google Travel surfaces?', answer: 'We align content and data to surface well across Google properties.' },
      { question: 'International audiences?', answer: 'We support i18n and hreflang for key source markets.' }
    ]
  },
  'san-diego-ca__tourism__website-design': {
    title: 'Website Design in San Diego, CA for Tourism & Hospitality',
    metaTitle: 'Tourism Website Design in San Diego | Visual & Usable',
    metaDescription:
      'Tourism website design in San Diego with visual storytelling, accessibility, and streamlined bookings.',
    hero:
      'Design tourism sites in San Diego that inspire and convert with clear, accessible UI.',
    sections: [
      'Design system: cards, galleries, and itinerary components for reuse.',
      'Accessibility: alt text standards and motion controls for media-heavy pages.',
      'CRO: persuasive CTAs and reassurance content near booking steps.'
    ],
    faqs: [
      { question: 'Can you feature user-generated content?', answer: 'Yes. We integrate UGC with moderation and rights workflows.' },
      { question: 'How do you measure success?', answer: 'Bookings, engagement, and assisted conversions across sessions.' }
    ]
  },

  // Dallas, TX × Finance
  'dallas-tx__finance__web-development': {
    title: 'Web Development in Dallas, TX for Finance Companies',
    metaTitle: 'Finance Web Development in Dallas | Secure & Performant',
    metaDescription:
      'Dallas finance web development with secure architectures, performance, and CRO for banks and fintech.',
    hero:
      'Ship secure, performant finance sites in Dallas with compliant workflows and conversion-focused UX.',
    sections: [
      'Security: encryption, RBAC, and audit trails with hardened CI/CD.',
      'Experience: calculators, onboarding, and trust signals built in.',
      'Maintainability: component libraries and docs for long-term velocity.'
    ],
    faqs: [
      { question: 'Do you work with fintechs?', answer: 'Yes. We support high-growth fintech and regulated enterprises.' },
      { question: 'Reporting?', answer: 'We provide analytics, attribution, and experiment tracking.' }
    ]
  },
  'dallas-tx__finance__seo': {
    title: 'SEO in Dallas, TX for Finance Companies',
    metaTitle: 'Finance SEO in Dallas | E‑E‑A‑T & Technical',
    metaDescription:
      'Finance SEO in Dallas with entity-driven content, technical excellence, and compliance-aware reviews.',
    hero:
      'Grow finance search in Dallas with technical SEO and content that proves expertise and trust.',
    sections: [
      'Strategy: topical hubs, competitive gap analysis, and intent mapping.',
      'Technical: schema, performance, and log insights for crawl efficiency.',
      'Ops: authorship, reviews, and version control for compliance.'
    ],
    faqs: [
      { question: 'Timeline?', answer: 'Meaningful improvements often start within 8–12 weeks; growth compounds.' },
      { question: 'Link building approach?', answer: 'Quality-first with PR, research assets, and partnerships.' }
    ]
  },
  'dallas-tx__finance__website-design': {
    title: 'Website Design in Dallas, TX for Finance Companies',
    metaTitle: 'Finance Website Design in Dallas | Trust & CRO',
    metaDescription:
      'Finance website design in Dallas emphasizing credibility, accessibility, and conversion-focused layouts.',
    hero:
      'Design finance websites in Dallas that communicate trust and drive qualified leads.',
    sections: [
      'IA: clear product pages, disclosures, and resources for decision makers.',
      'System: tokens, components, and guidelines for consistency.',
      'CRO: forms, CTAs, and content hierarchy that reduce friction.'
    ],
    faqs: [
      { question: 'Brand consistency across teams?', answer: 'We enforce consistency via tokens and component libraries.' },
      { question: 'Post-launch optimization?', answer: 'We iterate through UX research and A/B testing.' }
    ]
  },
  // Los Angeles, CA × Entertainment
  'los-angeles-ca__entertainment__web-development': {
    title: 'Web Development in Los Angeles, CA for Entertainment Companies',
    metaTitle: 'Entertainment Web Development in Los Angeles | High-Performance Sites',
    metaDescription:
      'Custom entertainment websites in Los Angeles. Fast media delivery, ticketing, fan engagement, and scalable platforms for studios and creators.',
    hero:
      'Build a high-performance entertainment platform in Los Angeles with fast media delivery, fan engagement, and scalable infrastructure.',
    sections: [
      'Platform needs: streaming readiness, merch drops, ticketing, and social integrations for audience growth.',
      'Stack: Next.js, edge caching, media CDNs, and analytics pipelines for content performance.',
      'CRO: fan funnels, pre-saves, waitlists, notifications, and lifecycle campaigns.'
    ],
    faqs: [
      { question: 'Do you handle high-traffic launches?', answer: 'Yes. We design for spikes with edge caching, load testing, and observability.' },
      { question: 'Integrate ticketing and membership?', answer: 'We integrate ticketing, subscriptions, and gated content systems securely.' }
    ]
  },
  'los-angeles-ca__entertainment__seo': {
    title: 'SEO in Los Angeles, CA for Entertainment Companies',
    metaTitle: 'Entertainment SEO in Los Angeles | Audience Growth',
    metaDescription:
      'SEO for entertainment brands in Los Angeles. Entity-driven content, media SEO, and technical foundations for discoverability and growth.',
    hero:
      'Grow entertainment audiences with entity SEO, media optimization, and structured data for rich results.',
    sections: [
      'Discoverability: schema for events, creative works, video, and person/organization.',
      'Content: editorial calendars, release cycles, and asset hubs that build topical authority.',
      'Technical: image/video SEO, performance, and internal linking at scale.'
    ],
    faqs: [
      { question: 'How do you handle spoiler-sensitive content?', answer: 'We use metadata controls, previews, and staged releases aligned to campaign needs.' },
      { question: 'Can you optimize YouTube and podcast feeds?', answer: 'Yes. We integrate channel data, transcripts, and cross-linking for lift.' }
    ]
  },
  'los-angeles-ca__entertainment__website-design': {
    title: 'Website Design in Los Angeles, CA for Entertainment Companies',
    metaTitle: 'Entertainment Website Design in Los Angeles | Fan-Centric UX',
    metaDescription:
      'Entertainment website design in Los Angeles focused on fan journeys, accessibility, and brand systems across devices.',
    hero:
      'Design entertainment experiences that convert. We craft fan-centric journeys, accessible UI, and flexible brand systems.',
    sections: [
      'Design system: components for events, releases, galleries, and merch with responsive guidelines.',
      'Narrative UX: highlight reels, hero moments, and social proof for engagement.',
      'Measurement: test CTAs, layouts, and content modules to lift conversions.'
    ],
    faqs: [
      { question: 'Do you support rebrands?', answer: 'Yes. We align typography, color, and components, delivering tokens and docs.' },
      { question: 'How do you manage accessibility?', answer: 'We ship WCAG-aligned patterns and test with automated and manual checks.' }
    ]
  },

  // Chicago, IL × Finance
  'chicago-il__finance__web-development': {
    title: 'Web Development in Chicago, IL for Finance Companies',
    metaTitle: 'Finance Web Development in Chicago | Secure, Compliant Platforms',
    metaDescription:
      'Chicago finance web development with security, performance, and compliant workflows for banks, fintech, and advisors.',
    hero:
      'Deliver secure, performant finance platforms in Chicago with compliance-aware architectures and conversion-focused UX.',
    sections: [
      'Security: RBAC, encryption, audit logs, and secure content workflows for regulated teams.',
      'Architecture: modular, scalable, and maintainable codebases prepared for growth.',
      'Conversions: calculators, onboarding, and gated assets to capture qualified demand.'
    ],
    faqs: [
      { question: 'Can you integrate CRMs and core systems?', answer: 'We integrate CRMs, analytics, and data layers with strict permissioning.' },
      { question: 'How do you minimize risk?', answer: 'We implement approvals, versioning, and rollbacks with observability.' }
    ]
  },
  'chicago-il__finance__seo': {
    title: 'SEO in Chicago, IL for Finance Companies',
    metaTitle: 'Finance SEO in Chicago | E‑E‑A‑T & Compliance',
    metaDescription:
      'Finance SEO in Chicago: E‑E‑A‑T signals, legal-safe content ops, and technical excellence for compounding search growth.',
    hero:
      'Earn finance SERPs in Chicago with entity-driven content, technical SEO, and compliant review workflows.',
    sections: [
      'Research: entity graphs, SERP gap mapping, and intent clustering for finance.',
      'Technical: schema, performance, and crawl budget optimization for large sites.',
      'Operations: legal reviews, authorship, and fact-checking to meet compliance.'
    ],
    faqs: [
      { question: 'What KPIs matter?', answer: 'Qualified leads, demo requests, and LTV—beyond raw traffic.' },
      { question: 'Do you provide monthly reporting?', answer: 'Yes. We deliver transparent dashboards and prioritized roadmaps.' }
    ]
  },
  'chicago-il__finance__website-design': {
    title: 'Website Design in Chicago, IL for Finance Companies',
    metaTitle: 'Finance Website Design in Chicago | Trust & Accessibility',
    metaDescription:
      'Finance website design in Chicago with credibility patterns, accessible UI, and conversion-focused layouts.',
    hero:
      'Design credible finance websites in Chicago. We apply trust patterns, accessible components, and CRO fundamentals.',
    sections: [
      'IA: clear product navigation, disclosures, and helpful resources for decision makers.',
      'UI kit: tokens, components, and documentation for efficient iteration.',
      'CRO: refine forms, CTAs, and content hierarchy to increase MQL quality.'
    ],
    faqs: [
      { question: 'How do you ensure brand consistency?', answer: 'Design tokens and guidelines keep teams aligned across channels.' },
      { question: 'Do you test with users?', answer: 'We run targeted UX research and experiments to validate changes.' }
    ]
  },

  // Houston, TX × Energy
  'houston-tx__energy__web-development': {
    title: 'Web Development in Houston, TX for Energy Companies',
    metaTitle: 'Energy Web Development in Houston | Industrial-Grade',
    metaDescription:
      'Industrial-grade energy websites in Houston. Secure, performant, and field-ready platforms for upstream, midstream, and renewables.',
    hero:
      'Launch durable energy websites in Houston with robust security, performance, and field operations support.',
    sections: [
      'Use cases: product catalogs, project portfolios, investor relations, and supplier portals.',
      'Tech: static + SSR blends, edge caching, and resilient media delivery.',
      'CRO: RFQ flows, spec downloads, and qualification pathways for industrial buyers.'
    ],
    faqs: [
      { question: 'Do you support multi-language content?', answer: 'Yes. We implement i18n with translation workflows and QA.' },
      { question: 'Field constraints?', answer: 'We deliver low-bandwidth patterns and offline-tolerant documentation.' }
    ]
  },
  'houston-tx__energy__seo': {
    title: 'SEO in Houston, TX for Energy Companies',
    metaTitle: 'Energy SEO in Houston | Industrial Search',
    metaDescription:
      'Energy SEO in Houston: technical SEO, content hubs, and buyer enablement for complex industrial searches.',
    hero:
      'Increase qualified industrial search in Houston with technical SEO and entity-driven content.',
    sections: [
      'Content: spec sheets, maintenance guides, and case studies for procurement and engineering.',
      'Technical: structured data, performance, and crawl management for large catalogs.',
      'PR: industry publications, partnerships, and analyst references for authority.'
    ],
    faqs: [
      { question: 'How do you measure success?', answer: 'Qualified RFQs, partner inquiries, and revenue—not just rankings.' },
      { question: 'Can you handle legacy CMS migrations?', answer: 'Yes. We plan redirects, preserve analytics, and harden infrastructure.' }
    ]
  },
  'houston-tx__energy__website-design': {
    title: 'Website Design in Houston, TX for Energy Companies',
    metaTitle: 'Energy Website Design in Houston | Industrial UX',
    metaDescription:
      'Industrial UX and design systems for energy firms in Houston. Accessible, durable components tailored to field and corporate users.',
    hero:
      'Design systems for energy firms that balance industrial needs with brand and accessibility.',
    sections: [
      'Components: data tables, maps, product specs, and safety content modules.',
      'Accessibility: WCAG-aligned patterns suited for harsh environments and devices.',
      'Documentation: governance for long-term maintainability across teams.'
    ],
    faqs: [
      { question: 'Brand alignment across divisions?', answer: 'We define shared tokens and variant rules to support sub-brands.' },
      { question: 'Do you support design audits?', answer: 'Yes. We assess consistency, performance, and usability with clear fixes.' }
    ]
  },

  // Phoenix, AZ × Technology
  'phoenix-az__technology__web-development': {
    title: 'Web Development in Phoenix, AZ for Technology Companies',
    metaTitle: 'Tech Web Development in Phoenix | Product-Led Growth',
    metaDescription:
      'Phoenix tech web development: performance-focused, component-driven sites that support PLG and enterprise sales.',
    hero:
      'Ship performant tech marketing sites in Phoenix with component libraries and analytics for growth teams.',
    sections: [
      'Stack: Next.js, TypeScript, design tokens, and CMS-agnostic content models.',
      'Docs: API pages, changelogs, and release notes that reduce support load.',
      'CRO: trials, demos, and pricing experiments to improve activation.'
    ],
    faqs: [
      { question: 'Do you integrate with product analytics?', answer: 'Yes. We connect Segment, GA4, and CDPs with consent controls.' },
      { question: 'Multi-tenant docs?', answer: 'We support versioning, search, and role-based content access.' }
    ]
  },
  'phoenix-az__technology__seo': {
    title: 'SEO in Phoenix, AZ for Technology Companies',
    metaTitle: 'Tech SEO in Phoenix | Demand Generation',
    metaDescription:
      'Tech SEO in Phoenix: entity research, topical hubs, and technical excellence to grow qualified demand.',
    hero:
      'Grow qualified tech traffic in Phoenix with entity-driven content and technical SEO.',
    sections: [
      'Content: solution pages, competitor comparisons, and integration libraries.',
      'Technical: schema, performance, and scalable internal linking for large sites.',
      'Ops: editorial rituals, QA, and governance for consistency.'
    ],
    faqs: [
      { question: 'Time to value?', answer: 'Expect early wins in 8–12 weeks and compounding growth after.' },
      { question: 'Do you target developer audiences?', answer: 'Yes. We tailor content to developers, PMs, and buyers with distinct paths.' }
    ]
  },
  'phoenix-az__technology__website-design': {
    title: 'Website Design in Phoenix, AZ for Technology Companies',
    metaTitle: 'Tech Website Design in Phoenix | Conversion-Focused UX',
    metaDescription:
      'Technology website design in Phoenix with component systems, accessibility, and CRO for product-led teams.',
    hero:
      'Design technology sites that convert. We build tokenized systems and UX that communicates complex value clearly.',
    sections: [
      'IA: pricing clarity, integrations, and solution overviews for multiple personas.',
      'System: reusable components, docs, and variants for fast iteration.',
      'CRO: form UX, social proof, and navigation patterns to reduce friction.'
    ],
    faqs: [
      { question: 'Do you support dark mode?', answer: 'Yes. We implement themeable systems with accessible contrast controls.' },
      { question: 'Brand refresh timelines?', answer: 'Typically 4–8 weeks depending on scope and research depth.' }
    ]
  },
  'new-york-ny__finance__seo': {
    title: 'SEO in New York, NY for Finance Companies',
    metaTitle: 'Finance SEO in New York | Compliance-Safe Growth',
    metaDescription:
      'Finance SEO in New York with compliance-safe content ops, E‑E‑A‑T signals, and CRO. We grow qualified traffic while protecting brand and legal posture.',
    hero:
      'Win competitive finance SERPs in New York using compliance-aware content systems, E‑E‑A‑T, and technical SEO that improves Core Web Vitals and conversions.',
    sections: [
      'Strategy: entity-driven research, topical maps, and intent clusters for finance personas across the funnel.',
      'On-page & technical: schema, internal links, performance, accessibility, and log-file insights for crawl efficiency.',
      'Content ops: review workflows with legal/compliance, claim substantiation, and author credentials for E‑E‑A‑T.'
    ],
    faqs: [
      { question: 'How fast will we see results?', answer: 'Expect compounding gains starting 8–12 weeks. Heavily regulated terms can take longer; we prioritize winnable intent first.' },
      { question: 'Do you handle link building?', answer: 'We focus on quality: digital PR, resource assets, analyst mentions, and partnerships aligned to brand risk.' }
    ]
  },
  'new-york-ny__finance__website-design': {
    title: 'Website Design in New York, NY for Finance Companies',
    metaTitle: 'Finance Website Design in New York | Trust & Conversion',
    metaDescription:
      'Design for finance websites that build trust and convert. New York finance UI/UX with accessibility, brand credibility, and measurable CRO.',
    hero:
      'Design a finance website that earns trust and converts. We craft clear navigation, credibility patterns, and accessible UI that supports compliance and growth.',
    sections: [
      'Design principles: clarity, credibility, and low-friction journeys for regulated B2B/B2C finance audiences.',
      'Artifacts: design systems, component libraries, documentation, and accessibility criteria baked into review cycles.',
      'Measurement: UX experiments and CRO roadmaps tied to demo requests, MQL quality, and LTV.'
    ],
    faqs: [
      { question: 'Can you align with brand and legal teams?', answer: 'Yes. We create shared design tokens and approval workflows that streamline reviews and reduce rework.' },
      { question: 'Do you provide ongoing optimization?', answer: 'We iterate with A/B testing, UX research, and analytics to sustain improvements after launch.' }
    ]
  }
}

export function getStaticCisDoc(city: string, industry: string, service: string): CisStaticDoc | null {
  const key = `${city}__${industry}__${service}`
  return registry[key] || null
}


