// FAQ data shared between server and client components
// This file has no 'use client' directive so it can be imported by server components

export interface FAQItem {
  question: string
  answer: string
}

export const homepageFAQData: FAQItem[] = [
  {
    question: "What is Webvello?",
    answer: "Webvello is a digital marketing agency specializing in SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and custom web development. Webvello improves business visibility in traditional search engines like Google and AI-powered search platforms including ChatGPT, Perplexity, and Google AI Overviews. The agency serves businesses across the United States using data-driven strategies, transparent reporting, and conversion-focused design."
  },
  {
    question: "What services does Webvello offer?",
    answer: "Webvello offers three core digital marketing services: AI-powered SEO (search engine optimization using artificial intelligence and machine learning), Local SEO (geo-targeted optimization to dominate local search results in specific cities and regions), and Custom Web Development (conversion-focused website design and development using React and Tailwind CSS). Additional services include GEO (Generative Engine Optimization) for AI search platforms, AEO (Answer Engine Optimization) for voice search and featured snippets, and content strategy."
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO (Search Engine Optimization) focuses on improving rankings in traditional search engines like Google and Bing. AEO (Answer Engine Optimization) optimizes content for voice search assistants and featured snippets, structuring information so search engines can extract direct answers. GEO (Generative Engine Optimization) specifically targets AI-powered search platforms like ChatGPT, Perplexity, Claude, and Google AI Overviews, ensuring businesses are cited when users ask questions to AI systems. Webvello integrates all three approaches for comprehensive search visibility."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO timelines vary based on competition, industry, and current website authority. Most Webvello clients see initial improvements within 30 days (technical issues resolved, long-tail keyword rankings). Significant organic traffic increases typically occur within 90-120 days. Sustainable, compounding results develop over 6-12 months. SEO is a long-term investment—results continue improving month after month when maintained properly."
  },
  {
    question: "Does Webvello work with businesses in my industry?",
    answer: "Yes. Webvello has served clients across 50+ industries including professional services (law firms, accounting, consulting), healthcare, technology, e-commerce, real estate, home services (HVAC, plumbing, roofing), restaurants, and B2B companies. The data-driven approach adapts to each industry's unique competitive landscape, audience behavior, and search patterns. Webvello serves businesses across 37+ major US cities."
  },
  {
    question: "What is included in Webvello's web development services?",
    answer: "Webvello's custom web development includes: strategic UX/UI design, mobile-first responsive development using React and Tailwind CSS, SEO-optimized code and site architecture, Core Web Vitals optimization for fast load times, conversion rate optimization, security implementation, content management system integration, analytics setup, and ongoing maintenance. Every website is custom-built for specific business goals—not from generic templates."
  },
  {
    question: "How is Webvello different from other digital marketing agencies?",
    answer: "Webvello differentiates through four key factors: (1) AI-Powered Technology that analyzes data patterns competitors miss, (2) Transparent Reporting with weekly updates and shared dashboards, (3) Senior-Level Team with certified strategists working directly on accounts, and (4) Results-Focused Approach measured by outcomes rather than activities. The agency specializes in emerging optimization categories including GEO and AEO alongside traditional SEO."
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "Generative Engine Optimization (GEO) is the practice of optimizing digital content to be cited and referenced by AI-powered search platforms and large language models. This includes ChatGPT, Perplexity, Claude, Google AI Overviews (formerly SGE), and Microsoft Copilot. GEO focuses on creating clear, factual, structured content that AI systems can understand and quote accurately. Webvello implements GEO strategies alongside traditional SEO for comprehensive search visibility."
  }
]

