const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@sanity/client', 'next-sanity', 'tailwind-merge', 'clsx'],
    // Enable modern bundling
    esmExternals: true,
    // Enable SWC minification
    swcMinify: true,
    // Enable modern output
    outputFileTracingRoot: process.cwd(),
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
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
      { source: '/services/lead-generation', destination: '/services/cro-lead-generation', permanent: true },
      
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