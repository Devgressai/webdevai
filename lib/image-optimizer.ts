// Advanced Image Optimization System
export interface ImageOptimizationConfig {
  quality: number // 0-100
  format: 'webp' | 'avif' | 'jpeg' | 'png'
  width?: number
  height?: number
  placeholder?: 'blur' | 'empty'
  lazy?: boolean
}

export interface OptimizedImage {
  src: string
  srcSet: string
  sizes: string
  alt: string
  width: number
  height: number
  placeholder?: string
  loading?: 'lazy' | 'eager'
}

// Image optimization presets
export const IMAGE_PRESETS = {
  hero: {
    quality: 85,
    format: 'webp' as const,
    width: 1920,
    height: 1080,
    placeholder: 'blur' as const,
    lazy: false
  },
  card: {
    quality: 80,
    format: 'webp' as const,
    width: 400,
    height: 300,
    placeholder: 'blur' as const,
    lazy: true
  },
  thumbnail: {
    quality: 75,
    format: 'webp' as const,
    width: 200,
    height: 200,
    placeholder: 'blur' as const,
    lazy: true
  },
  avatar: {
    quality: 80,
    format: 'webp' as const,
    width: 100,
    height: 100,
    placeholder: 'blur' as const,
    lazy: true
  },
  logo: {
    quality: 90,
    format: 'webp' as const,
    width: 300,
    height: 100,
    placeholder: 'empty' as const,
    lazy: false
  }
}

// Generate responsive image srcSet
export function generateSrcSet(
  baseUrl: string, 
  config: ImageOptimizationConfig
): string {
  const sizes = [400, 800, 1200, 1600, 1920]
  const srcSetItems = sizes
    .filter(size => !config.width || size <= config.width)
    .map(size => {
      const url = `${baseUrl}?w=${size}&q=${config.quality}&f=${config.format}`
      return `${url} ${size}w`
    })
  
  return srcSetItems.join(', ')
}

// Generate responsive sizes attribute
export function generateSizes(breakpoints: { [key: string]: string }): string {
  const sizes = Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint}px) ${size}`)
    .join(', ')
  
  return `${sizes}, 100vw`
}

// Create optimized image object
export function createOptimizedImage(
  src: string,
  alt: string,
  config: ImageOptimizationConfig,
  breakpoints?: { [key: string]: string }
): OptimizedImage {
  const srcSet = generateSrcSet(src, config)
  const sizes = breakpoints ? generateSizes(breakpoints) : '100vw'
  
  return {
    src: `${src}?w=${config.width || 'auto'}&q=${config.quality}&f=${config.format}`,
    srcSet,
    sizes,
    alt,
    width: config.width || 0,
    height: config.height || 0,
    placeholder: config.placeholder === 'blur' ? generateBlurPlaceholder() : undefined,
    loading: config.lazy ? 'lazy' : 'eager'
  }
}

// Generate blur placeholder (base64 encoded)
export function generateBlurPlaceholder(): string {
  // This would typically generate a base64 encoded blur placeholder
  // For now, return a simple data URL
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'
}

// Image optimization utilities
export class ImageOptimizer {
  private baseUrl: string
  private defaultConfig: ImageOptimizationConfig

  constructor(baseUrl: string, defaultConfig: ImageOptimizationConfig) {
    this.baseUrl = baseUrl
    this.defaultConfig = defaultConfig
  }

  // Optimize image with custom config
  optimize(src: string, alt: string, config?: Partial<ImageOptimizationConfig>): OptimizedImage {
    const mergedConfig = { ...this.defaultConfig, ...config }
    return createOptimizedImage(src, alt, mergedConfig)
  }

  // Optimize image with preset
  optimizeWithPreset(
    src: string, 
    alt: string, 
    preset: keyof typeof IMAGE_PRESETS
  ): OptimizedImage {
    const config = IMAGE_PRESETS[preset]
    return createOptimizedImage(src, alt, config)
  }

  // Generate multiple sizes for responsive images
  generateResponsiveImages(
    src: string,
    alt: string,
    sizes: number[],
    config?: Partial<ImageOptimizationConfig>
  ): OptimizedImage[] {
    return sizes.map(size => {
      const sizeConfig = { ...this.defaultConfig, ...config, width: size }
      return createOptimizedImage(src, alt, sizeConfig)
    })
  }

  // Batch optimize multiple images
  batchOptimize(
    images: Array<{ src: string; alt: string; config?: Partial<ImageOptimizationConfig> }>
  ): OptimizedImage[] {
    return images.map(({ src, alt, config }) => this.optimize(src, alt, config))
  }
}

// WebP support detection
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

// AVIF support detection
export function supportsAVIF(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new Image()
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2)
    }
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAABoHZlZGF0YQAAAAACb2xkZgAAAAAAAAABAAAALnN0dWZAAAAAAAAAAQAAAB5zdGVjNAAAAAQAAAABAAAACAAAAAEAAAA8dGl4bgAAAAAADwAAAAAABAAAAAQAAAB4bWxzeQAAAAABAAAAAQAAAAEAAAABAAAAAXhpZgAAAAgAAAA/amFjYQAAAC0AAAAAAG5vdHIAAAAJbW1vZAAAAAAAAAAJAAAADGluYkMAAAAAAABIAAAACm1kYXQAAAAAAAEAAAAATGF2ZjU4LjQ1LjEwMA=='
  })
}

// Get optimal image format based on browser support
export async function getOptimalFormat(): Promise<'webp' | 'avif' | 'jpeg'> {
  if (await supportsAVIF()) return 'avif'
  if (await supportsWebP()) return 'webp'
  return 'jpeg'
}

// Image compression utilities
export function calculateCompressionRatio(originalSize: number, compressedSize: number): number {
  return Math.round((1 - compressedSize / originalSize) * 100)
}

// Generate image optimization report
export function generateImageReport(images: OptimizedImage[]): {
  totalImages: number
  totalSize: number
  averageSize: number
  webpCount: number
  lazyCount: number
  recommendations: string[]
} {
  const totalImages = images.length
  const totalSize = images.reduce((acc, img) => acc + (img.width * img.height), 0)
  const averageSize = totalSize / totalImages
  const webpCount = images.filter(img => img.src.includes('f=webp')).length
  const lazyCount = images.filter(img => img.loading === 'lazy').length

  const recommendations: string[] = []
  
  if (webpCount < totalImages * 0.8) {
    recommendations.push('Convert more images to WebP format for better compression')
  }
  
  if (lazyCount < totalImages * 0.9) {
    recommendations.push('Enable lazy loading for more images to improve page speed')
  }
  
  if (averageSize > 500000) {
    recommendations.push('Consider reducing image dimensions or quality for better performance')
  }

  return {
    totalImages,
    totalSize,
    averageSize,
    webpCount,
    lazyCount,
    recommendations
  }
}

// Next.js Image component optimization
export function getNextImageProps(
  src: string,
  alt: string,
  config: ImageOptimizationConfig,
  className?: string
) {
  return {
    src,
    alt,
    width: config.width,
    height: config.height,
    quality: config.quality,
    placeholder: config.placeholder,
    loading: config.lazy ? 'lazy' : 'eager',
    className,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  }
}

// Image optimization middleware
export function createImageOptimizationMiddleware() {
  return async (req: any, res: any, next: any) => {
    // Add image optimization headers
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    res.setHeader('Vary', 'Accept')
    
    // Check for WebP support
    const acceptHeader = req.headers.accept || ''
    if (acceptHeader.includes('image/webp')) {
      res.setHeader('Content-Type', 'image/webp')
    }
    
    next()
  }
}

// Default image optimizer instance
export const defaultImageOptimizer = new ImageOptimizer(
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '',
  {
    quality: 80,
    format: 'webp',
    placeholder: 'blur',
    lazy: true
  }
)
