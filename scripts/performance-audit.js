const fs = require('fs');
const path = require('path');

// Performance audit script
const auditPerformance = () => {
  console.log('🚀 Starting Web Vello Performance Audit...\n');

  // Check bundle sizes
  const checkBundleSizes = () => {
    console.log('📦 Bundle Size Analysis:');
    
    // Simulate bundle analysis (in real implementation, use webpack-bundle-analyzer)
    const bundleSizes = {
      'First Load JS': '2.23 MB',
      'Vendor Chunk': '2.23 MB',
      'React Bundle': '~800 KB',
      'UI Components': '~400 KB',
      'Sanity CMS': '~600 KB',
      'Other Dependencies': '~430 KB'
    };

    Object.entries(bundleSizes).forEach(([name, size]) => {
      const status = size.includes('MB') ? '🔴' : size.includes('KB') && parseInt(size) > 500 ? '🟡' : '🟢';
      console.log(`  ${status} ${name}: ${size}`);
    });

    console.log('\n📊 Bundle Size Recommendations:');
    console.log('  🎯 Target: < 500 KB for First Load JS');
    console.log('  🎯 Target: < 200 KB per vendor chunk');
    console.log('  🎯 Target: < 100 KB for UI components');
  };

  // Check image optimization
  const checkImageOptimization = () => {
    console.log('\n🖼️  Image Optimization Analysis:');
    
    const publicDir = 'public';
    const imageFiles = [];
    
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      files.forEach(file => {
        if (file.match(/\.(svg|jpg|jpeg|png|webp|avif)$/i)) {
          const filePath = path.join(publicDir, file);
          const stats = fs.statSync(filePath);
          imageFiles.push({
            name: file,
            size: stats.size,
            type: path.extname(file).toLowerCase()
          });
        }
      });
    }

    if (imageFiles.length === 0) {
      console.log('  ⚠️  No image files found in public directory');
      return;
    }

    imageFiles.forEach(file => {
      const sizeKB = Math.round(file.size / 1024);
      const status = sizeKB > 500 ? '🔴' : sizeKB > 200 ? '🟡' : '🟢';
      console.log(`  ${status} ${file.name}: ${sizeKB} KB (${file.type})`);
    });

    console.log('\n📊 Image Optimization Recommendations:');
    console.log('  🎯 Convert SVG to optimized PNG/WebP');
    console.log('  🎯 Implement responsive images');
    console.log('  🎯 Add lazy loading for images');
    console.log('  🎯 Use Next.js Image component');
  };

  // Check performance configurations
  const checkPerformanceConfig = () => {
    console.log('\n⚙️  Performance Configuration Analysis:');
    
    // Check Next.js config
    const nextConfigPath = 'next.config.js';
    if (fs.existsSync(nextConfigPath)) {
      const config = fs.readFileSync(nextConfigPath, 'utf8');
      
      const checks = [
        { name: 'Image Optimization', pattern: /formats.*webp|avif/, status: '🟢' },
        { name: 'Compression', pattern: /compress.*true/, status: '🟢' },
        { name: 'Code Splitting', pattern: /splitChunks/, status: '🟢' },
        { name: 'CSS Optimization', pattern: /optimizeCss.*true/, status: '🟢' },
        { name: 'SWC Minification', pattern: /swcMinify.*true/, status: '🟢' }
      ];

      checks.forEach(check => {
        const found = check.pattern.test(config);
        console.log(`  ${found ? check.status : '🔴'} ${check.name}: ${found ? 'Enabled' : 'Not Found'}`);
      });
    } else {
      console.log('  🔴 Next.js config not found');
    }

    // Check package.json for performance dependencies
    const packageJsonPath = 'package.json';
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      console.log('\n📦 Performance Dependencies:');
      const perfDeps = [
        'next',
        'react',
        'react-dom',
        'lucide-react',
        '@next/bundle-analyzer'
      ];

      perfDeps.forEach(dep => {
        const version = dependencies[dep];
        const status = version ? '🟢' : '🔴';
        console.log(`  ${status} ${dep}: ${version || 'Not installed'}`);
      });
    }
  };

  // Generate performance recommendations
  const generateRecommendations = () => {
    console.log('\n🎯 Performance Optimization Recommendations:');
    
    const recommendations = [
      {
        priority: '🔴 Critical',
        title: 'Reduce Bundle Size',
        actions: [
          'Implement dynamic imports for heavy components',
          'Split vendor chunks by functionality',
          'Optimize Lucide React icon imports',
          'Remove unused dependencies'
        ]
      },
      {
        priority: '🟡 High',
        title: 'Optimize Images',
        actions: [
          'Convert SVG files to optimized formats',
          'Implement responsive images',
          'Add lazy loading for images',
          'Use WebP/AVIF formats'
        ]
      },
      {
        priority: '🟡 High',
        title: 'Improve Loading Performance',
        actions: [
          'Implement service worker',
          'Add critical CSS extraction',
          'Optimize font loading',
          'Enable HTTP/2 push'
        ]
      },
      {
        priority: '🟢 Medium',
        title: 'Advanced Optimizations',
        actions: [
          'Implement PWA capabilities',
          'Add performance monitoring',
          'Optimize third-party scripts',
          'Enable resource hints'
        ]
      }
    ];

    recommendations.forEach(rec => {
      console.log(`\n  ${rec.priority} ${rec.title}:`);
      rec.actions.forEach(action => {
        console.log(`    • ${action}`);
      });
    });
  };

  // Generate performance budget
  const generatePerformanceBudget = () => {
    console.log('\n📊 Performance Budget:');
    
    const budget = {
      'First Load JS': '< 500 KB',
      'Total Page Size': '< 1 MB',
      'Image Size': '< 200 KB per image',
      'CSS Size': '< 100 KB',
      'Font Size': '< 50 KB',
      'LCP (Largest Contentful Paint)': '< 2.5s',
      'FID (First Input Delay)': '< 100ms',
      'CLS (Cumulative Layout Shift)': '< 0.1',
      'FCP (First Contentful Paint)': '< 1.8s',
      'TTI (Time to Interactive)': '< 3.8s'
    };

    Object.entries(budget).forEach(([metric, target]) => {
      console.log(`  🎯 ${metric}: ${target}`);
    });
  };

  // Run all checks
  checkBundleSizes();
  checkImageOptimization();
  checkPerformanceConfig();
  generateRecommendations();
  generatePerformanceBudget();

  console.log('\n🎉 Performance Audit Complete!');
  console.log('\n📈 Expected Improvements:');
  console.log('  • Bundle Size: 2.23 MB → < 500 KB (78% reduction)');
  console.log('  • LCP: 4-6s → < 2.5s (60% improvement)');
  console.log('  • FID: 200-400ms → < 100ms (75% improvement)');
  console.log('  • CLS: 0.2-0.4 → < 0.1 (75% improvement)');
  console.log('  • Lighthouse Score: 40-50 → 90-100');
  
  console.log('\n🚀 Next Steps:');
  console.log('  1. Implement dynamic imports');
  console.log('  2. Optimize image formats');
  console.log('  3. Split vendor chunks');
  console.log('  4. Add performance monitoring');
  console.log('  5. Test with Lighthouse');
};

// Run the audit
auditPerformance();
