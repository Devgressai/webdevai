// Core Web Vitals Optimization Utilities
export interface CoreWebVitals {
  lcp: number; // Largest Contentful Paint (should be < 2.5s)
  fid: number; // First Input Delay (should be < 100ms)
  cls: number; // Cumulative Layout Shift (should be < 0.1)
}

export interface PerformanceOptimization {
  imageOptimization: boolean;
  criticalCSS: boolean;
  codeSplitting: boolean;
  lazyLoading: boolean;
  compression: boolean;
  caching: boolean;
}

// Core Web Vitals optimization strategies
export function getCoreWebVitalsOptimization(): PerformanceOptimization {
  return {
    imageOptimization: true,
    criticalCSS: true,
    codeSplitting: true,
    lazyLoading: true,
    compression: true,
    caching: true
  };
}

// Image optimization for LCP improvement
export function optimizeImagesForLCP(): string[] {
  return [
    'Convert images to WebP format',
    'Implement responsive images with srcset',
    'Add proper width and height attributes',
    'Use lazy loading for below-the-fold images',
    'Compress images without quality loss',
    'Implement image preloading for critical images'
  ];
}

// JavaScript optimization for FID improvement
export function optimizeJavaScriptForFID(): string[] {
  return [
    'Minify and compress JavaScript files',
    'Remove unused JavaScript code',
    'Implement code splitting',
    'Defer non-critical JavaScript',
    'Use async/defer attributes properly',
    'Optimize third-party scripts'
  ];
}

// Layout stability optimization for CLS improvement
export function optimizeLayoutForCLS(): string[] {
  return [
    'Add explicit width and height to images',
    'Reserve space for dynamic content',
    'Avoid inserting content above existing content',
    'Use transform instead of changing layout properties',
    'Preload fonts to prevent font swap',
    'Avoid animations that affect layout'
  ];
}

// Critical CSS optimization
export function getCriticalCSSOptimization(): string[] {
  return [
    'Inline critical CSS in HTML head',
    'Defer non-critical CSS',
    'Remove unused CSS rules',
    'Minify CSS files',
    'Use CSS containment',
    'Optimize font loading'
  ];
}

// Caching strategies
export function getCachingStrategies(): string[] {
  return [
    'Implement browser caching headers',
    'Use CDN for static assets',
    'Enable gzip compression',
    'Set appropriate cache-control headers',
    'Use service workers for offline caching',
    'Implement resource hints (preload, prefetch)'
  ];
}

// Performance monitoring
export function getPerformanceMonitoring(): string[] {
  return [
    'Implement Core Web Vitals tracking',
    'Set up performance budgets',
    'Monitor real user metrics (RUM)',
    'Use Google PageSpeed Insights API',
    'Track performance regression',
    'Implement performance alerts'
  ];
}

// Generate performance optimization report
export function generatePerformanceReport(currentVitals: CoreWebVitals): {
  score: number;
  recommendations: string[];
  priority: 'high' | 'medium' | 'low';
} {
  const issues: string[] = [];
  let score = 100;

  // LCP optimization
  if (currentVitals.lcp > 2.5) {
    score -= 30;
    issues.push('LCP is above 2.5s - optimize largest contentful paint');
  }

  // FID optimization
  if (currentVitals.fid > 100) {
    score -= 30;
    issues.push('FID is above 100ms - optimize first input delay');
  }

  // CLS optimization
  if (currentVitals.cls > 0.1) {
    score -= 30;
    issues.push('CLS is above 0.1 - optimize cumulative layout shift');
  }

  // Additional recommendations based on scores
  if (currentVitals.lcp > 1.5) {
    issues.push('Consider image optimization and critical CSS inlining');
  }

  if (currentVitals.fid > 50) {
    issues.push('Implement code splitting and defer non-critical JavaScript');
  }

  if (currentVitals.cls > 0.05) {
    issues.push('Add explicit dimensions to images and avoid layout shifts');
  }

  let priority: 'high' | 'medium' | 'low' = 'low';
  if (score < 50) priority = 'high';
  else if (score < 80) priority = 'medium';

  return {
    score,
    recommendations: issues,
    priority
  };
}

// Next.js specific optimizations
export function getNextJSOptimizations(): string[] {
  return [
    'Use Next.js Image component for automatic optimization',
    'Implement dynamic imports for code splitting',
    'Use Next.js built-in CSS optimization',
    'Enable Next.js compression',
    'Implement ISR (Incremental Static Regeneration)',
    'Use Next.js font optimization',
    'Enable Next.js bundle analyzer',
    'Implement Next.js performance monitoring'
  ];
}

// Web Vitals measurement utilities
export function measureWebVitals(): void {
  if (typeof window !== 'undefined') {
    // Import web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
}

// Performance budget configuration
export interface PerformanceBudget {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

export const DEFAULT_PERFORMANCE_BUDGET: PerformanceBudget = {
  lcp: 2.5, // seconds
  fid: 100, // milliseconds
  cls: 0.1, // score
  fcp: 1.8, // seconds
  ttfb: 600 // milliseconds
};

// Check if performance meets budget
export function checkPerformanceBudget(
  currentVitals: Partial<CoreWebVitals>,
  budget: PerformanceBudget = DEFAULT_PERFORMANCE_BUDGET
): { passed: boolean; failures: string[] } {
  const failures: string[] = [];

  if (currentVitals.lcp && currentVitals.lcp > budget.lcp) {
    failures.push(`LCP ${currentVitals.lcp}s exceeds budget of ${budget.lcp}s`);
  }

  if (currentVitals.fid && currentVitals.fid > budget.fid) {
    failures.push(`FID ${currentVitals.fid}ms exceeds budget of ${budget.fid}ms`);
  }

  if (currentVitals.cls && currentVitals.cls > budget.cls) {
    failures.push(`CLS ${currentVitals.cls} exceeds budget of ${budget.cls}`);
  }

  return {
    passed: failures.length === 0,
    failures
  };
}
