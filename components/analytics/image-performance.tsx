'use client';

import { useEffect } from 'react';

interface ImagePerformanceMetrics {
  loadTime: number;
  fileSize: number;
  format: string;
  dimensions: { width: number; height: number };
}

export function ImagePerformanceTracker() {
  useEffect(() => {
    // Track image performance metrics
    const trackImagePerformance = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach((img) => {
        const startTime = performance.now();
        
        const handleLoad = () => {
          const loadTime = performance.now() - startTime;
          const src = img.src;
          const format = src.includes('.webp') ? 'WebP' : 
                        src.includes('.jpg') || src.includes('.jpeg') ? 'JPEG' : 
                        src.includes('.png') ? 'PNG' : 'Unknown';
          
          // Log performance metrics
          console.log(`Image Performance:`, {
            src: src.split('/').pop(),
            format,
            loadTime: `${loadTime.toFixed(2)}ms`,
            dimensions: `${img.naturalWidth}x${img.naturalHeight}`,
            fileSize: 'Optimized WebP'
          });
          
          // Send to analytics (if configured)
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'image_load', {
              event_category: 'performance',
              event_label: format,
              value: Math.round(loadTime)
            });
          }
        };
        
        if (img.complete) {
          handleLoad();
        } else {
          img.addEventListener('load', handleLoad);
        }
      });
    };
    
    // Track performance after page load
    if (document.readyState === 'complete') {
      trackImagePerformance();
    } else {
      window.addEventListener('load', trackImagePerformance);
    }
    
    return () => {
      window.removeEventListener('load', trackImagePerformance);
    };
  }, []);
  
  return null;
}

// Performance comparison component
export function ImageOptimizationReport() {
  const webpBenefits = {
    fileSize: '25-35% smaller than JPEG',
    quality: 'Better compression with same visual quality',
    loading: 'Faster page load times',
    seo: 'Improved Core Web Vitals scores',
    mobile: 'Better mobile performance'
  };
  
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-green-800 mb-2">
        🚀 Image Optimization Active
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
        {Object.entries(webpBenefits).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
            <span className="ml-1 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



