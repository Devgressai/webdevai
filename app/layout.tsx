import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { NewHeader as Header } from '../components/layout/new-header'
import { Footer } from '../components/layout/footer'
import dynamic from 'next/dynamic'
const PerformanceMonitor = dynamic(() => import('../components/analytics/performance-monitor').then(m => m.PerformanceMonitor), {
  ssr: false
})
// import GoogleAnalytics from '../components/analytics/google-analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://webvello.com'),
  title: {
    default: 'Web Vello - Digital Marketing Agency | AI SEO, Local SEO, Web Development',
    template: '%s | Web Vello'
  },
  description: 'Drive revenue growth with data-driven digital marketing. Specializing in AI-powered SEO, local search dominance, and conversion-focused web development. Get 300%+ traffic growth in 6 months.',
  keywords: [
    'digital marketing agency',
    'AI SEO services',
    'local SEO optimization',
    'web development company',
    'UI/UX design services',
    'conversion rate optimization',
    'digital marketing consulting',
    'SEO agency',
    'web design services',
    'marketing automation'
  ],
  authors: [{ name: 'Web Vello', url: 'https://webvello.com' }],
  creator: 'Web Vello',
  publisher: 'Web Vello',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webvello.com',
    siteName: 'Web Vello',
    title: 'Web Vello - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing. Get 300%+ traffic growth in 6 months.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Vello - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing',
    images: ['/og-image.jpg'],
    creator: '@webvello',
    site: '@webvello',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'REPLACE_WITH_BING_WEBMASTER_VERIFICATION_CODE',
    yahoo: 'REPLACE_WITH_YAHOO_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://webvello.com',
  },
  category: 'Digital Marketing',
  classification: 'Business',
  other: {
    'theme-color': '#4C74B9',
    'msapplication-TileColor': '#4C74B9',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Web Vello',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4C74B9" />
        <meta name="msapplication-TileColor" content="#4C74B9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Web Vello" />
        <meta name="application-name" content="Web Vello" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link 
          rel="preload" 
          as="image" 
          href="/images/nasa-1lfI7wkGWZ4-unsplash.webp" 
          fetchPriority="high"
          imageSrcSet="/images/nasa-1lfI7wkGWZ4-unsplash.webp 1920w"
          imageSizes="100vw"
        />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{__html: `
          .hero-section{position:relative;overflow:hidden;background:linear-gradient(135deg,#1e40af 0%,#1e3a8a 50%,#1f2937 100%)}
          .hero-bg{position:absolute;inset:0}
          .hero-bg img{object-fit:cover;width:100%;height:100%}
          .hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(15,23,42,0.2) 0%,rgba(15,23,42,0.1) 50%,rgba(15,23,42,0.2) 100%)}
          .hero-content{position:relative;z-index:10;color:white;text-align:center;padding:5rem 1.5rem}
          .hero-title{font-size:2.25rem;font-weight:800;line-height:1.2;margin-bottom:1rem;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.6))}
          .hero-subtitle{font-size:1.125rem;opacity:0.95;max-width:32rem;margin:0 auto 2rem;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.6))}
          @media(min-width:640px){.hero-title{font-size:3rem}.hero-subtitle{font-size:1.25rem}}
          @media(min-width:1024px){.hero-title{font-size:3.75rem}.hero-content{padding:9rem 2.5rem}}
        `}} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Web Vello",
              "url": "https://webvello.com",
              "logo": "https://webvello.com/logo.png",
              "description": "Digital Marketing Agency specializing in AI-powered SEO, local search optimization, and conversion-focused web development.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "United States",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English",
                "url": "https://webvello.com/contact"
              },
              "sameAs": [
                "https://twitter.com/webvello",
                "https://linkedin.com/company/webvello",
                "https://facebook.com/webvello"
              ],
              "foundingDate": "2024",
              "numberOfEmployees": "10-50",
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered SEO Services",
                      "description": "Artificial intelligence SEO strategies that analyze millions of data points for 300%+ traffic growth"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Local SEO Services",
                      "description": "Geo-targeted local SEO strategies to dominate local search results and drive foot traffic"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Development",
                      "description": "Professional custom websites built with modern technologies for optimal performance and conversions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UI/UX Design Services",
                      "description": "User-centered design that creates seamless experiences and drives engagement"
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* ProfessionalService subtype for clearer entity signals */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Web Vello",
              "url": "https://webvello.com",
              "image": "https://webvello.com/logo.png",
              "slogan": "Design. Develop. Dominate.",
              "serviceType": [
                "AI SEO",
                "Local SEO",
                "Website Design",
                "Web Development"
              ],
              "areaServed": "US",
              "telephone": "+1-737-888-5723",
              "sameAs": [
                "https://twitter.com/webvello",
                "https://linkedin.com/company/webvello",
                "https://facebook.com/webvello"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-white">
        {/* <GoogleAnalytics /> */}
        {process.env.NEXT_PUBLIC_ENABLE_PERF_MONITOR === 'true' ? <PerformanceMonitor /> : null}
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Web Vello",
              "url": "https://webvello.com",
              "description": "Digital Marketing Agency - AI SEO, Local SEO, Web Development",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://webvello.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AI-powered SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-powered SEO uses artificial intelligence and machine learning to analyze millions of data points, identify ranking opportunities your competitors miss, and deliver 300%+ organic traffic growth in 6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does local SEO help my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Local SEO helps your business dominate local search results, drive qualified foot traffic, and capture nearby customers searching for your services. We help you rank #1 in your local market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Web Vello different from other digital marketing agencies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Web Vello combines cutting-edge AI technology with proven strategies to deliver measurable results. We specialize in AI-powered SEO, local search optimization, and custom web development with a focus on conversion optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer custom web development services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build professional custom websites that convert visitors into customers. Our sites are fast, mobile-optimized, SEO-friendly, and built with modern technologies for optimal performance."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
