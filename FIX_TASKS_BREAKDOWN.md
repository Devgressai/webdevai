# 🔧 Fix Tasks Breakdown - 5 Parallel Tasks

Split into 5 independent tasks you can work on in separate tabs.

---

## 📋 TASK 1: Fix URL Domain Inconsistency
**Agent/Tab:** Fix Domain URLs  
**Priority:** 🔴 CRITICAL  
**Estimated Time:** 15-20 minutes

### Goal
Standardize all URLs to use `www.webvello.com` (or choose non-www and update sitemap)

### Files to Update:
1. **`app/layout.tsx`**
   - Line 36: Change `metadataBase: new URL('https://webvello.com')` → `'https://www.webvello.com'`
   - Line 79: Change `url: 'https://webvello.com'` → `'https://www.webvello.com'`
   - Line 85: Change `url: 'https://webvello.com/og-image.jpg'` → `'https://www.webvello.com/og-image.jpg'`
   - Line 97: Change `images: ['https://webvello.com/og-image.jpg']` → `'https://www.webvello.com/og-image.jpg'`
   - Line 118: Change `canonical: 'https://webvello.com'` → `'https://www.webvello.com'`
   - Lines 185-301: Update all schema.org URLs from `webvello.com` → `www.webvello.com`

2. **`app/page.tsx`**
   - Line 21: Change `url: 'https://webvello.com'` → `'https://www.webvello.com'`
   - Line 27: Change `url: 'https://webvello.com/og-image.jpg'` → `'https://www.webvello.com/og-image.jpg'`
   - Line 36: Change `icon: 'https://webvello.com/favicon.ico'` → `'https://www.webvello.com/favicon.ico'`
   - Line 37: Change `apple: 'https://webvello.com/apple-touch-icon.png'` → `'https://www.webvello.com/apple-touch-icon.png'`
   - Lines 95-134: Update all schema.org URLs

3. **`app/[city]/page.tsx`**
   - Line 119: Change `url: \`https://webvello.com/${params.city}\`` → `\`https://www.webvello.com/${params.city}\``
   - Line 125: Change `url: \`https://webvello.com/og-...\`` → `\`https://www.webvello.com/og-...\``
   - Line 136: Change `images: [\`https://webvello.com/og-...\`]` → `\`https://www.webvello.com/og-...\``
   - Line 139: Change `canonical: \`https://webvello.com/${params.city}\`` → `\`https://www.webvello.com/${params.city}\``

4. **`app/[city]/[service]/page.tsx`**
   - Find all instances of `https://webvello.com` and replace with `https://www.webvello.com`
   - Check `generateMetadata` function

5. **`app/[city]/industry/[industry]/page.tsx`**
   - Find all instances of `https://webvello.com` and replace with `https://www.webvello.com`
   - Check `generateMetadata` function

6. **`app/[city]/industry/[industry]/[service]/page.tsx`**
   - Line 74: Change `canonical: \`https://webvello.com/${params.city}/industry/${params.industry}/${params.service}\`` → `\`https://www.webvello.com/${params.city}/industry/${params.industry}/${params.service}\``
   - Line 78: Change `url: \`https://webvello.com/${params.city}/industry/${params.industry}/${params.service}\`` → `\`https://www.webvello.com/${params.city}/industry/${params.industry}/${params.service}\``

7. **All other pages with canonical URLs**
   - Search for: `canonical.*webvello.com` (without www)
   - Replace with: `www.webvello.com`

### Search & Replace Command:
```bash
# Find all instances
grep -r "webvello.com" app/ --exclude-dir=node_modules | grep -v "www.webvello.com"

# Or use find/replace in your editor:
# Find: https://webvello.com
# Replace: https://www.webvello.com
```

### Verification:
- ✅ No instances of `webvello.com` (without www) in canonical URLs
- ✅ All OpenGraph URLs use www
- ✅ All schema.org URLs use www
- ✅ Sitemap already uses www (correct)

---

## 📋 TASK 2: Add Missing Page Titles
**Agent/Tab:** Add Missing Titles  
**Priority:** 🔴 CRITICAL  
**Estimated Time:** 20-30 minutes

### Goal
Add `generateMetadata` or `metadata` export to all pages missing titles

### Files to Fix:

1. **`app/page.tsx`** (Homepage - CRITICAL!)
   - **Current:** Has metadata but may need verification
   - **Action:** Verify title exists, ensure it's correct

2. **`app/contact/page.tsx`**
   - **Add:**
   ```typescript
   import { Metadata } from 'next'
   
   export const metadata: Metadata = {
     title: 'Contact Us | Web Vello',
     description: 'Get in touch with Web Vello. Schedule a free consultation for AI-powered SEO, web development, and digital marketing services.',
     openGraph: {
       title: 'Contact Us | Web Vello',
       description: 'Get in touch with Web Vello for expert digital marketing services.',
       url: 'https://www.webvello.com/contact',
     },
     alternates: {
       canonical: 'https://www.webvello.com/contact',
     },
   }
   ```

3. **`app/enhanced-demo/page.tsx`**
   - **Add:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Enhanced Demo | Web Vello',
     description: 'Experience Web Vello\'s enhanced demo showcasing our digital marketing solutions.',
     alternates: {
       canonical: 'https://www.webvello.com/enhanced-demo',
     },
   }
   ```

4. **`app/services/software-development/page.tsx`**
   - **Add:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Software Development Services | Web Vello',
     description: 'Custom software development services. Build scalable, secure applications with Web Vello.',
     alternates: {
       canonical: 'https://www.webvello.com/services/software-development',
     },
   }
   ```

5. **`app/sitemap/city/[city]/page.tsx`**
   - **Add:**
   ```typescript
   export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
     const city = getCity(params.city)
     return {
       title: `Sitemap - ${city?.fullName || params.city} | Web Vello`,
       description: `Sitemap for Web Vello services in ${city?.fullName || params.city}.`,
       robots: { index: false, follow: true }, // Sitemap pages usually noindex
     }
   }
   ```

6. **`app/sitemap/locations/[letter]/page.tsx`**
   - **Add:**
   ```typescript
   export async function generateMetadata({ params }: { params: { letter: string } }): Promise<Metadata> {
     return {
       title: `Locations Starting with ${params.letter.toUpperCase()} | Web Vello`,
       description: `Browse Web Vello service locations starting with ${params.letter.toUpperCase()}.`,
       robots: { index: false, follow: true },
     }
   }
   ```

7. **`app/studio/[[...tool]]/page.tsx`** (Admin - can be noindex)
   - **Add:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Sanity Studio | Web Vello',
     robots: { index: false, follow: false }, // Admin page
   }
   ```

### Verification:
- ✅ All pages have `metadata` or `generateMetadata` export
- ✅ All titles follow pattern: `[Page Name] | Web Vello`
- ✅ Homepage title is correct

---

## 📋 TASK 3: Add Missing Meta Descriptions
**Agent/Tab:** Add Meta Descriptions  
**Priority:** 🟠 HIGH  
**Estimated Time:** 30-45 minutes

### Goal
Add `description` field to all pages missing it

### Files to Fix:

1. **`app/[city]/industry/[industry]/[service]/page.tsx`** ⚠️ 4,704 PAGES!
   - **Current:** Has description in generateMetadata ✅
   - **Action:** Verify it's working correctly
   - **Check:** Line 41 - should have description

2. **`app/case-studies/page.tsx`**
   - **Add:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Case Studies | Web Vello',
     description: 'See real results from Web Vello clients. Case studies showing 300%+ traffic growth, increased conversions, and ROI.',
     // ... rest
   }
   ```

3. **`app/contact/page.tsx`**
   - **Add:** (See Task 2 for full metadata)

4. **`app/pricing/page.tsx`**
   - **Add:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Pricing | Web Vello',
     description: 'Transparent pricing for AI-powered SEO, web development, and digital marketing services. Get 300%+ traffic growth.',
     // ... rest
   }
   ```

5. **`app/services/software-development/page.tsx`**
   - **Add:** (See Task 2 for full metadata)

6. **`app/sitemap/city/[city]/page.tsx`**
   - **Add:** (See Task 2 for full metadata)

7. **`app/sitemap/locations/[letter]/page.tsx`**
   - **Add:** (See Task 2 for full metadata)

8. **`app/studio/[[...tool]]/page.tsx`**
   - **Optional:** Admin page, can skip description

### Verification:
- ✅ All public pages have descriptions
- ✅ Descriptions are 150-160 characters
- ✅ Descriptions are unique and relevant

---

## 📋 TASK 4: Fix Broken Internal Links
**Agent/Tab:** Fix Broken Links  
**Priority:** 🟡 MEDIUM  
**Estimated Time:** 45-60 minutes

### Goal
Fix or remove broken internal links

### Strategy Options:
**Option A:** Create missing service pages  
**Option B:** Update links to existing pages  
**Option C:** Remove links if pages don't exist

### Broken Links to Fix:

#### 1. Missing Service Pages (Create or Redirect):
- `/services/content-strategy` → Create page OR redirect to `/services/content-marketing`
- `/services/review-management` → Create page OR remove links
- `/services/technical-seo` → Create page OR redirect to `/services/seo`
- `/services/google-my-business` → Create page OR redirect to `/services/local-seo`
- `/services/social-media-marketing` → Create page OR redirect to `/services/social-media-design`
- `/services/ecommerce-seo` → Create page OR redirect to `/services/seo`
- `/services/service-marketing` → Create page OR remove links
- `/services/analytics-consulting` → Create page OR remove links
- `/services/agency-consulting` → Create page OR remove links
- `/services/process-optimization` → Create page OR remove links

#### 2. Missing Blog Posts:
- `/blog/conversion-rate-optimization-strategies` → Create post OR remove link
- `/blog/custom-vs-template-websites` → Create post OR remove link
- `/blog/google-my-business-optimization-guide` → Create post OR remove link

#### 3. Files with Broken Links:

**`app/about/page.tsx`**
- Fix: `/austin-tx` → Verify city exists or remove link

**`app/blog/ai-powered-seo-machine-learning/page.tsx`**
- Fix: `/blog/conversion-rate-optimization-strategies` → Remove or create post

**`app/blog/essential-website-features-2024/page.tsx`**
- Fix: `/blog/custom-vs-template-websites` → Remove or create post

**`app/blog/local-seo-checklist-25-steps/page.tsx`**
- Fix: `/blog/google-my-business-optimization-guide` → Remove or create post

**`app/case-studies/page.tsx`**
- Fix: Multiple service links (see list above)

**`app/industries/page.tsx`**
- Fix: Multiple service links (see list above)

**`app/solutions/page.tsx`**
- Fix: Multiple service links (see list above)

### Recommended Approach:
1. **For service pages:** Create redirects in `next.config.js` or `vercel.json`
2. **For blog posts:** Remove links (easier than creating posts)
3. **For city links:** Verify city exists in `lib/cities.ts`

### Example Redirect (add to `next.config.js`):
```javascript
redirects: async () => [
  {
    source: '/services/content-strategy',
    destination: '/services/content-marketing',
    permanent: true,
  },
  {
    source: '/services/technical-seo',
    destination: '/services/seo',
    permanent: true,
  },
  // ... more redirects
]
```

### Verification:
- ✅ No 404 errors from internal links
- ✅ All service links point to existing pages
- ✅ All blog links point to existing posts
- ✅ Redirects work correctly

---

## 📋 TASK 5: Add Alt Text to Images
**Agent/Tab:** Fix Image Alt Text  
**Priority:** 🟠 HIGH  
**Estimated Time:** 15-20 minutes

### Goal
Add descriptive alt text to all images with empty `alt=""`

### Files to Fix:

1. **`app/page.tsx`** (Homepage)
   - **Line 174:** `/images/hero-team-collaboration.webp`
     - Change: `alt=""`
     - To: `alt="Web Vello team collaborating on digital marketing strategy"`
   
   - **Line 263:** Find image with `alt=""`
     - Add descriptive alt text based on image content
   
   - **Line 328:** Find image with `alt=""`
     - Add descriptive alt text
   
   - **Line 367:** Find image with `alt=""`
     - Add descriptive alt text
   
   - **Line 478:** Find image with `alt=""`
     - Add descriptive alt text
   
   - **Line 514:** Find image with `alt=""`
     - Add descriptive alt text

2. **`app/case-studies/page.tsx`**
   - Find all images with `alt=""`
   - Add descriptive alt text for each

### Alt Text Guidelines:
- ✅ Descriptive and specific
- ✅ Include relevant keywords naturally
- ✅ Describe what's in the image
- ✅ Keep under 125 characters
- ✅ Use `alt=""` ONLY for purely decorative images

### Examples:
```typescript
// Before:
<Image src="/images/hero-team-collaboration.webp" alt="" />

// After:
<Image 
  src="/images/hero-team-collaboration.webp" 
  alt="Web Vello team collaborating on digital marketing strategy" 
/>

// Decorative image (can keep alt=""):
<Image 
  src="/images/decorative-pattern.svg" 
  alt="" 
  aria-hidden="true"
/>
```

### Verification:
- ✅ All informational images have descriptive alt text
- ✅ Decorative images have `alt=""` and `aria-hidden="true"`
- ✅ No accessibility warnings

---

## ✅ Final Verification Checklist

After all 5 tasks are complete:

- [ ] All URLs use consistent domain (www or non-www)
- [ ] All pages have titles
- [ ] All pages have meta descriptions
- [ ] No broken internal links
- [ ] All images have proper alt text
- [ ] Run `npm run build` - no errors
- [ ] Test key pages in browser
- [ ] Verify canonical URLs in page source
- [ ] Check Google Search Console for errors

---

## 🚀 Ready to Start?

Each task is independent and can be worked on in parallel. Good luck! 🎯







