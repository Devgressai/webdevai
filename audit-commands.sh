#!/bin/bash
# WebVello Architecture + SEO + Routing Audit - Data Collection Commands
# Run these commands in sequence to gather all required information

echo "=== STEP 1: Framework Detection ==="
echo "1.1 - Check Next.js version and config:"
cat package.json | grep -A 5 '"next"'
echo ""
echo "1.2 - Check for App Router vs Pages Router:"
ls -la app/ 2>/dev/null | head -20
ls -la pages/ 2>/dev/null | head -20
echo ""
echo "1.3 - Check Next.js config:"
cat next.config.js 2>/dev/null || cat next.config.mjs 2>/dev/null || cat next.config.ts 2>/dev/null
echo ""

echo "=== STEP 2: Sitemap Generation Logic ==="
echo "2.1 - Find sitemap files:"
find . -name "sitemap*" -type f 2>/dev/null | grep -v node_modules
echo ""
echo "2.2 - Check sitemap.ts:"
cat app/sitemap.ts 2>/dev/null || echo "No app/sitemap.ts found"
echo ""
echo "2.3 - Check for sitemap generation in API routes:"
find app -path "*/api/*" -name "*sitemap*" -type f 2>/dev/null
echo ""

echo "=== STEP 3: Routing Structure ==="
echo "3.1 - App Router structure:"
find app -type d -maxdepth 3 | sort
echo ""
echo "3.2 - Dynamic route segments:"
find app -type d -name "\[*\]" | sort
echo ""
echo "3.3 - Route handlers (API):"
find app -path "*/route.ts" -o -path "*/route.js" | sort
echo ""
echo "3.4 - Page components:"
find app -name "page.tsx" -o -name "page.ts" | sort
echo ""

echo "=== STEP 4: Navigation + Footer Components ==="
echo "4.1 - Find layout components:"
find . -path "*/components/*layout*" -o -path "*/components/*Layout*" 2>/dev/null | grep -v node_modules
echo ""
echo "4.2 - Find navigation components:"
find . -path "*/components/*nav*" -o -path "*/components/*Nav*" -o -path "*/components/*header*" -o -path "*/components/*Header*" 2>/dev/null | grep -v node_modules
echo ""
echo "4.3 - Find footer components:"
find . -path "*/components/*footer*" -o -path "*/components/*Footer*" 2>/dev/null | grep -v node_modules
echo ""
echo "4.4 - Check root layout:"
cat app/layout.tsx 2>/dev/null || cat app/layout.js 2>/dev/null
echo ""

echo "=== STEP 5: Content Sources ==="
echo "5.1 - Check for CMS integration:"
grep -r "sanity\|contentful\|strapi\|prismic" package.json 2>/dev/null
find . -name "*sanity*" -type f 2>/dev/null | grep -v node_modules | head -10
echo ""
echo "5.2 - Check for MDX:"
find . -name "*.mdx" -type f 2>/dev/null | grep -v node_modules | head -20
echo ""
echo "5.3 - Check for static content:"
find . -path "*/content/*" -o -path "*/data/*" -o -path "*/posts/*" 2>/dev/null | grep -v node_modules | head -20
echo ""
echo "5.4 - Check for programmatic data sources:"
find lib -name "*data*.ts" -o -name "*data*.js" 2>/dev/null | head -20
echo ""

echo "=== STEP 6: Programmatic SEO Systems ==="
echo "6.1 - Find city/industry/service data:"
find lib -name "*city*" -o -name "*industry*" -o -name "*service*" 2>/dev/null | grep -E "\.(ts|js)$" | head -20
echo ""
echo "6.2 - Check for generateStaticParams usage:"
grep -r "generateStaticParams" app --include="*.tsx" --include="*.ts" 2>/dev/null
echo ""
echo "6.3 - Check for programmatic route patterns:"
find app -type d | grep -E "\[.*\]" | sort
echo ""

echo "=== STEP 7: Duplication in Taxonomy ==="
echo "7.1 - Check /locations routes:"
find app -path "*/locations/*" -name "page.tsx" 2>/dev/null
echo ""
echo "7.2 - Check city-state routes:"
find app -name "\[city\]" -type d 2>/dev/null
echo ""
echo "7.3 - Check geo-* service routes:"
find app -path "*/services/geo-*" -name "page.tsx" 2>/dev/null
echo ""
echo "7.4 - Check state service routes:"
find app -path "*/services/*" -name "page.tsx" 2>/dev/null | grep -E "(alabama|alaska|arizona)" | head -10
echo ""
echo "7.5 - List all city slugs:"
grep -r "citySlugs\|cityDataSlugs" lib --include="*.ts" --include="*.js" 2>/dev/null | head -5
echo ""

echo "=== STEP 8: Canonical/Indexing Logic ==="
echo "8.1 - Find SEO/index policy files:"
find lib -path "*seo*" -o -path "*index*" 2>/dev/null | grep -E "\.(ts|js)$" | head -20
echo ""
echo "8.2 - Check for canonical logic:"
grep -r "canonical\|canonicalUrl" lib app --include="*.ts" --include="*.tsx" 2>/dev/null | head -20
echo ""
echo "8.3 - Check for robots/noindex logic:"
grep -r "robots\|noindex\|index.*false" lib app --include="*.ts" --include="*.tsx" 2>/dev/null | head -20
echo ""
echo "8.4 - Check metadata generation:"
grep -r "generateMetadata" app --include="*.tsx" --include="*.ts" 2>/dev/null | head -20
echo ""

echo "=== STEP 9: Internal Linking Patterns ==="
echo "9.1 - Find internal linking utilities:"
find lib -name "*link*" -o -name "*internal*" 2>/dev/null | grep -E "\.(ts|js)$"
echo ""
echo "9.2 - Check for breadcrumb components:"
find . -path "*/components/*breadcrumb*" -o -path "*/components/*Breadcrumb*" 2>/dev/null | grep -v node_modules
echo ""
echo "9.3 - Check for related links/components:"
find . -path "*/components/*related*" -o -path "*/components/*Related*" 2>/dev/null | grep -v node_modules
echo ""

echo "=== STEP 10: Orphan Routes ==="
echo "10.1 - Find all page.tsx files:"
find app -name "page.tsx" -o -name "page.ts" | sort > /tmp/all-pages.txt
cat /tmp/all-pages.txt
echo ""
echo "10.2 - Check for routes not in sitemap:"
echo "(Manual comparison needed - see sitemap.ts vs all page.tsx files)"
echo ""
echo "10.3 - Check for routes without generateStaticParams:"
find app -name "page.tsx" -exec grep -L "generateStaticParams" {} \; 2>/dev/null | head -20
echo ""

echo "=== STEP 11: Additional Architecture Details ==="
echo "11.1 - Check TypeScript config:"
cat tsconfig.json 2>/dev/null
echo ""
echo "11.2 - Check for middleware:"
find . -name "middleware.ts" -o -name "middleware.js" 2>/dev/null | grep -v node_modules
echo ""
echo "11.3 - Check for route groups:"
find app -type d -name "(.*)" 2>/dev/null
echo ""
echo "11.4 - Check for route handlers:"
find app -name "route.ts" -o -name "route.js" | sort
echo ""
echo "11.5 - List all lib directories:"
find lib -type d -maxdepth 2 2>/dev/null | sort
echo ""

echo "=== STEP 12: File Counts ==="
echo "12.1 - Count page components:"
find app -name "page.tsx" -o -name "page.ts" | wc -l
echo ""
echo "12.2 - Count route handlers:"
find app -name "route.ts" -o -name "route.js" | wc -l
echo ""
echo "12.3 - Count components:"
find components -type f -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l
echo ""

echo "=== Audit data collection complete ==="
echo "Review output above and proceed with analysis phase."
