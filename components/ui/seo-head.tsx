import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'service'
  structuredData?: object
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  publishedTime,
  modifiedTime,
  author = 'Web Vello',
  section,
  tags = []
}: SEOHeadProps) {
  const fullTitle = title.includes('Web Vello') ? title : `${title} | Web Vello`
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical || `https://www.webvello.com${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Web Vello",
      "url": "https://www.webvello.com"
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Web Vello" />
      <meta property="og:url" content={canonical || `https://www.webvello.com${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@webvello" />
      <meta name="twitter:creator" content="@webvello" />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {ogType === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="publisher" content="Web Vello" />
      <meta name="copyright" content="Web Vello" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#4C74B9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Web Vello" />
      <meta name="application-name" content="Web Vello" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/poppins-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Head>
  )
}
