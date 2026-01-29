const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds (minor quote issues)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds for speed
  typescript: {
    ignoreBuildErrors: true, // Speed up builds - check types in CI/local
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@sanity/client', 'next-sanity', 'tailwind-merge', 'clsx'],
    // Enable modern bundling
    esmExternals: true,
    // Enable SWC minification
    swcMinify: true,
    // Enable modern output
    outputFileTracingRoot: process.cwd(),
    // Reduce file tracing for faster builds
    outputFileTracingIgnores: [
      '**/node_modules/@swc/core*/**',
      '**/node_modules/webpack/**',
      '**/.next/cache/**',
      '**/scripts/**',
      '**/*.md',
      '**/RECENT_CHANGES_ANALYSIS.md',
      '**/SITEMAP_UPDATE_SUMMARY.md',
      '**/convert-to-webp.sh',
      '**/process-multiple-images.sh',
    ],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Compression
  compress: true,
  
  // Build optimizations for faster Vercel builds
  poweredByHeader: false,
  
  // Reduce build output
  generateBuildId: async () => {
    // Use git commit hash for build ID (faster than generating)
    return process.env.VERCEL_GIT_COMMIT_SHA || 'build-' + Date.now()
  },
  
  // Enhanced security headers
  async headers() {
    return [
      // Relaxed headers for Sanity Studio
      {
        source: '/studio/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.sanity.io https://*.sanity.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com https://cdn.sanity.io",
              "connect-src 'self' https://*.sanity.io https://*.sanity.work wss://*.sanity.work https://*.googleapis.com",
              "frame-src 'self' https://www.youtube.com https://*.sanity.io",
              "media-src 'self' blob: data:",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
      {
        source: '/book',
        headers: [
          // Allow iframes for Calendly on /book page
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Content Security Policy - allow Calendly inline widget and iframes
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://assets.calendly.com https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com https://calendly.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com https://assets.calendly.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://calendly.com https://*.calendly.com https://api.calendly.com",
              "frame-src 'self' https://calendly.com https://*.calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://calendly.com",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'gyroscope=()',
              'magnetometer=()',
              'payment=()',
              'usb=()',
              'accelerometer=()',
              'ambient-light-sensor=()',
              'autoplay=()',
              'battery=()',
              'display-capture=()',
              'document-domain=()',
              'encrypted-media=()',
              'fullscreen=(self)',
              'picture-in-picture=()',
              'publickey-credentials-get=()',
              'screen-wake-lock=()',
              'sync-xhr=()',
              'web-share=()',
              'xr-spatial-tracking=()'
            ].join(', '),
          },
          // Strict Transport Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Cross-Origin Embedder Policy (relaxed for Google crawlers)
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          // Cross-Origin Opener Policy
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          // Cross-Origin Resource Policy (allow cross-origin for sitemaps/robots)
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Download Options
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          // IE XSS Filter
          {
            key: 'X-IE-Over-Options',
            value: 'deny',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },
  
  // Rewrites for sitemap routes (WebFX-style)
  async rewrites() {
    return [
      // Main sitemap index
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      // Child sitemaps
      {
        source: '/core-sitemap.xml',
        destination: '/api/core-sitemap',
      },
      {
        source: '/services-sitemap.xml',
        destination: '/api/services-sitemap',
      },
      {
        source: '/blog-sitemap.xml',
        destination: '/api/blog-sitemap',
      },
      // Locations sitemap (first chunk or only chunk)
      {
        source: '/locations-sitemap.xml',
        destination: '/api/locations-sitemap',
      },
      // Chunked locations sitemaps - handle up to 10 chunks
      // We'll create explicit rewrites for each potential chunk
      ...Array.from({ length: 9 }, (_, i) => ({
        source: `/locations-sitemap${i + 2}.xml`,
        destination: `/api/locations-sitemap?chunk=${i + 2}`,
      })),
    ]
  },
  
  // Redirects for SEO and 404 fixes
  async redirects() {
    return [
      // Core page redirects
      { source: '/home', destination: '/', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/pricing-plans', destination: '/pricing', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/service', destination: '/services', permanent: true },
      { source: '/portfolio', destination: '/case-studies', permanent: true },
      { source: '/case-study', destination: '/case-studies', permanent: true },
      { source: '/blog-posts', destination: '/blog', permanent: true },
      { source: '/articles', destination: '/blog', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/resource', destination: '/resources', permanent: true },
      { source: '/tools', destination: '/seo-audit', permanent: true },
      { source: '/seo-tools', destination: '/seo-audit', permanent: true },
      { source: '/website-audit', destination: '/seo-audit', permanent: true },
      { source: '/speed-test', destination: '/website-speed-test', permanent: true },
      { source: '/demo', destination: '/enhanced-demo', permanent: true },
      { source: '/industry', destination: '/industries', permanent: true },
      { source: '/location', destination: '/locations', permanent: true },
      { source: '/cities', destination: '/locations', permanent: true },
      { source: '/city', destination: '/locations', permanent: true },
      { source: '/solution', destination: '/solutions', permanent: true },
      
      // Service redirects
      { source: '/services/web-design', destination: '/services/website-design', permanent: true },
      { source: '/services/seo-services', destination: '/services/seo', permanent: true },
      { source: '/services/ai-services', destination: '/services/ai-consulting', permanent: true },
      { source: '/services/digital-marketing-services', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/ui-design', destination: '/services/ui-ux-design', permanent: true },
      { source: '/services/ux-design', destination: '/services/ui-ux-design', permanent: true },
      { source: '/services/app-development', destination: '/services/app-design-development', permanent: true },
      { source: '/services/software-development-services', destination: '/services/software-development', permanent: true },
      { source: '/services/wordpress-services', destination: '/services/wordpress-development', permanent: true },
      { source: '/services/shopify-services', destination: '/services/shopify-development', permanent: true },
      { source: '/services/local-seo-services', destination: '/services/local-seo', permanent: true },
      { source: '/services/email-marketing', destination: '/services/email-marketing-design', permanent: true },
      { source: '/services/social-media-marketing', destination: '/services/social-media-design', permanent: true },
      { source: '/services/conversion-optimization', destination: '/services/cro-ecommerce', permanent: true },
      { source: '/services/conversion-rate-optimization', destination: '/services/cro-lead-generation', permanent: true },
      { source: '/services/lead-generation', destination: '/services/cro-lead-generation', permanent: true },
      { source: '/services/content-strategy', destination: '/services/content-marketing', permanent: true },
      { source: '/services/review-management', destination: '/services/local-seo', permanent: true },
      { source: '/services/service-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/ecommerce-seo', destination: '/services/ecommerce-design', permanent: true },
      { source: '/services/analytics-consulting', destination: '/services/seo', permanent: true },
      { source: '/services/agency-consulting', destination: '/services/ai-consulting', permanent: true },
      { source: '/services/process-optimization', destination: '/services/cro-lead-generation', permanent: true },
      { source: '/services/web-design', destination: '/services/website-design', permanent: true },
      { source: '/services/reputation-management', destination: '/services/local-seo', permanent: true },
      { source: '/services/ppc', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/ecommerce-development', destination: '/services/ecommerce-design', permanent: true },
      
      // City redirects (without state)
      { source: '/new-york', destination: '/new-york-ny', permanent: true },
      { source: '/los-angeles', destination: '/los-angeles-ca', permanent: true },
      { source: '/chicago', destination: '/chicago-il', permanent: true },
      { source: '/houston', destination: '/houston-tx', permanent: true },
      { source: '/phoenix', destination: '/phoenix-az', permanent: true },
      { source: '/philadelphia', destination: '/philadelphia-pa', permanent: true },
      { source: '/san-antonio', destination: '/san-antonio-tx', permanent: true },
      { source: '/san-diego', destination: '/san-diego-ca', permanent: true },
      { source: '/dallas', destination: '/dallas-tx', permanent: true },
      { source: '/san-jose', destination: '/san-jose-ca', permanent: true },
      { source: '/austin', destination: '/austin-tx', permanent: true },
      { source: '/jacksonville', destination: '/jacksonville-fl', permanent: true },
      { source: '/fort-worth', destination: '/fort-worth-tx', permanent: true },
      { source: '/columbus', destination: '/columbus-oh', permanent: true },
      { source: '/charlotte', destination: '/charlotte-nc', permanent: true },
      { source: '/san-francisco', destination: '/san-francisco-ca', permanent: true },
      { source: '/seattle', destination: '/seattle-wa', permanent: true },
      { source: '/denver', destination: '/denver-co', permanent: true },
      { source: '/washington', destination: '/washington-dc', permanent: true },
      { source: '/boston', destination: '/boston-ma', permanent: true },
      
      // Trailing slash redirects
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/pricing/', destination: '/pricing', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/resources/', destination: '/resources', permanent: true },
      { source: '/industries/', destination: '/industries', permanent: true },
      { source: '/locations/', destination: '/locations', permanent: true },
      { source: '/solutions/', destination: '/solutions', permanent: true },
    ]
  },
  
  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Split vendor chunks by functionality
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          ui: {
            test: /[\\/]node_modules[\\/](lucide-react|class-variance-authority|clsx|tailwind-merge)[\\/]/,
            name: 'ui',
            chunks: 'async',
            priority: 15,
          },
          cms: {
            test: /[\\/]node_modules[\\/](@sanity|sanity|next-sanity)[\\/]/,
            name: 'cms',
            chunks: 'async',
            priority: 10,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'async',
            priority: 5,
            maxSize: 200000,
          },
        },
      }
    }
    
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)