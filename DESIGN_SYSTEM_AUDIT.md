# Webvello Design System Audit
**Senior Frontend Engineer + Design Systems Analysis**

---

## 1. Design Tokens

### Colors

```json
{
  "colors": {
    "primary": {
      "50": "#f0f6ff",
      "100": "#e0edff",
      "200": "#c7ddff",
      "300": "#a3c7ff",
      "400": "#7aa6ff",
      "500": "#4C74B9",
      "600": "#004085",
      "700": "#003366",
      "800": "#002a52",
      "900": "#001f3d"
    },
    "secondary": {
      "50": "#f8fafc",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cbd5e1",
      "400": "#94a3b8",
      "500": "#64748b",
      "600": "#475569",
      "700": "#334155",
      "800": "#1e293b",
      "900": "#0f172a"
    },
    "accent": {
      "50": "#fff7ed",
      "100": "#ffedd5",
      "200": "#fed7aa",
      "300": "#fdba74",
      "400": "#fb923c",
      "500": "#f97316",
      "600": "#ea580c",
      "700": "#c2410c",
      "800": "#9a3412",
      "900": "#7c2d12"
    },
    "success": {
      "500": "#22c55e",
      "600": "#16a34a"
    },
    "warning": {
      "500": "#f59e0b"
    },
    "danger": {
      "500": "#ef4444",
      "600": "#dc2626"
    }
  },
  "backgrounds": {
    "surface": "#ffffff",
    "surface-2": "#f8fafc",
    "slate-50": "#f8fafc",
    "slate-800": "#1e293b",
    "slate-900": "#0f172a"
  },
  "borders": {
    "default": "#e2e8f0",
    "gray-100": "#f3f4f6",
    "gray-200": "#e5e7eb",
    "slate-200": "#e2e8f0",
    "slate-700": "#334155"
  },
  "text": {
    "primary": "#0f172a",
    "secondary": "#64748b",
    "muted": "#94a3b8",
    "inverse": "#ffffff"
  },
  "gradients": {
    "primary": "linear-gradient(135deg, #4C74B9 0%, #004085 100%)",
    "accent": "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
    "success": "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
    "purple": "linear-gradient(135deg, #7aa6ff 0%, #4C74B9 100%)",
    "rainbow": "linear-gradient(135deg, #ef4444 0%, #f97316 25%, #f59e0b 50%, #22c55e 75%, #4C74B9 100%)",
    "blue-cyan": "linear-gradient(to right, #3b82f6 0%, #06b6d4 100%)",
    "sky-indigo": "linear-gradient(to right, #0ea5e9 0%, #6366f1 100%)"
  },
  "shadows": {
    "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
    "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "large": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    "glow": "0 0 15px rgba(76, 116, 185, 0.2)",
    "glow-orange": "0 0 15px rgba(249, 115, 22, 0.2)",
    "glow-green": "0 0 15px rgba(34, 197, 94, 0.2)",
    "glow-purple": "0 0 15px rgba(122, 166, 255, 0.2)",
    "dark": "0 14px 30px rgba(15, 23, 42, 0.6)",
    "dark-xl": "0 16px 40px rgba(15, 23, 42, 0.75)"
  }
}
```

---

## 2. Typography Scale

### Font Families
```json
{
  "fontFamily": {
    "sans": ["Inter", "system-ui", "sans-serif"],
    "display": ["Poppins", "system-ui", "sans-serif"]
  }
}
```

### Type Scale
```json
{
  "fontSize": {
    "xs": ["0.75rem", { "lineHeight": "1.125rem" }],
    "sm": ["0.875rem", { "lineHeight": "1.375rem" }],
    "base": ["1rem", { "lineHeight": "1.625rem" }],
    "lg": ["1.125rem", { "lineHeight": "1.75rem" }],
    "xl": ["1.25rem", { "lineHeight": "1.875rem" }],
    "2xl": ["1.5rem", { "lineHeight": "2.125rem" }],
    "3xl": ["1.875rem", { "lineHeight": "2.375rem" }],
    "4xl": ["2.25rem", { "lineHeight": "2.75rem" }],
    "5xl": ["3rem", { "lineHeight": "3.25rem" }],
    "6xl": ["3.75rem", { "lineHeight": "4rem" }],
    "7xl": ["4.5rem", { "lineHeight": "4.75rem" }]
  }
}
```

### Heading Usage
- **H1 (Hero)**: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold` (Poppins)
- **H2 (Section)**: `text-3xl sm:text-4xl lg:text-5xl font-bold` (Poppins)
- **H3 (Subsection)**: `text-2xl sm:text-3xl font-semibold` (Poppins)
- **H4 (Card Title)**: `text-xl sm:text-2xl font-semibold` (Poppins)
- **Body Large**: `text-lg sm:text-xl leading-relaxed` (Inter)
- **Body**: `text-base leading-relaxed` (Inter)
- **Small**: `text-sm sm:text-base` (Inter)

### Mobile Typography Utilities
- `.mobile-h1`: `text-[30px]/[38px] sm:text-4xl lg:text-6xl font-bold`
- `.mobile-h2`: `text-[24px]/[32px] sm:text-3xl lg:text-5xl font-bold`
- `.mobile-h3`: `text-xl sm:text-2xl lg:text-3xl font-semibold`
- `.mobile-body`: `text-base sm:text-lg leading-relaxed`

---

## 3. Spacing + Layout Conventions

### Container System
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Section Padding
- **Standard**: `py-12 sm:py-16 lg:py-20` or `py-16 sm:py-20 lg:py-24`
- **Large**: `py-20 sm:py-24 lg:py-28`
- **Small**: `py-8 sm:py-12 lg:py-16`

### Spacing Scale
```json
{
  "spacing": {
    "18": "4.5rem",
    "88": "22rem",
    "128": "32rem"
  }
}
```

### Common Gaps
- **Card Grid**: `gap-6 sm:gap-8`
- **Section Spacing**: `mb-12 sm:mb-16`
- **Element Spacing**: `space-y-4 sm:space-y-6`

### Border Radius
```json
{
  "borderRadius": {
    "md": "0.375rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "4xl": "2rem"
  }
}
```

### Max Widths
- **Content**: `max-w-3xl` (768px)
- **Section**: `max-w-4xl` (896px)
- **Container**: `max-w-7xl` (1280px)

---

## 4. Reusable Components Inventory

### Core UI Components
| Component | Path | Usage |
|-----------|------|-------|
| **Button** | `/components/ui/button.tsx` | Primary CTAs, links, forms |
| **Card** | `/components/ui/card.tsx` | Content containers, service cards |
| **Input** | `/components/ui/input.tsx` | Form fields |
| **Badge** | `/components/ui/badge.tsx` | Labels, tags |

### Section Components
| Component | Path | Key Features |
|-----------|------|--------------|
| **Hero** | `/components/sections/hero.tsx` | Dark overlay, left-aligned, CTA buttons, trust badges |
| **HomepageFAQ** | `/components/sections/homepage-faq.tsx` | Accordion, gradient badges, rounded cards |
| **Pricing** | `/components/sections/pricing.tsx` | 3-tier cards, popular badge, gradient CTAs |
| **SocialProof** | `/components/sections/social-proof.tsx` | Stats grid, testimonials, dark background |

### Layout Components
| Component | Path | Key Features |
|-----------|------|--------------|
| **Header** | `/components/layout/header.tsx` | Sticky, dropdown menus, gradient logo |
| **Footer** | `/components/layout/footer.tsx` | Multi-column, links, social |

### Conversion Components
| Component | Path | Purpose |
|-----------|------|---------|
| **InlineCTA** | `/components/conversion/inline-cta.tsx` | Mid-page conversion |
| **StickyCTA** | `/components/conversion/sticky-cta.tsx` | Fixed bottom CTA |
| **TrackedButtonLink** | `/components/conversion/tracked-button-link.tsx` | Analytics-enabled buttons |

### SEO Components
| Component | Path | Purpose |
|-----------|------|---------|
| **SchemaMarkup** | `/components/seo/schema-markup.tsx` | Structured data |
| **SmartInternalLinks** | `/components/seo/smart-internal-links.tsx` | Auto-linking |

---

## 5. Component Patterns & Examples

### Button Variants
```tsx
// Primary CTA (most common)
<Button 
  size="lg"
  className="
    bg-primary-600 text-white
    hover:bg-primary-700
    px-8 py-4 text-lg font-semibold
    rounded-xl
    shadow-xl hover:shadow-2xl
    transition-all duration-300
  "
>
  Get Started
</Button>

// Secondary CTA (outline)
<Button
  variant="outline"
  size="lg"
  className="
    border-2 border-white/40 text-white
    bg-white/10 backdrop-blur-sm
    hover:bg-white/20
    px-8 py-4 text-lg font-semibold
    rounded-xl
  "
>
  Learn More
</Button>

// Gradient CTA
<Button
  className="
    bg-gradient-to-r from-blue-500 to-indigo-500
    hover:from-blue-600 hover:to-indigo-600
    text-white px-10 py-4 rounded-xl font-semibold
    shadow-lg hover:shadow-xl
  "
>
  Get Free Consultation
</Button>
```

### Card Pattern
```tsx
<div className="
  bg-white rounded-2xl p-8 
  shadow-lg hover:shadow-xl 
  transition-all duration-300 
  border border-gray-100 
  hover:border-primary-200
  hover:-translate-y-1
">
  {/* Icon */}
  <div className="
    w-16 h-16 
    bg-gradient-to-br from-blue-500 to-cyan-600 
    rounded-2xl 
    flex items-center justify-center 
    mb-6
  ">
    <Icon className="w-8 h-8 text-white" />
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-bold text-secondary-900 mb-4">
    Card Title
  </h3>
  
  {/* Description */}
  <p className="text-secondary-600 mb-6 leading-relaxed">
    Card description text
  </p>
  
  {/* Features */}
  <div className="space-y-2">
    <div className="flex items-center text-sm text-secondary-600">
      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
      Feature item
    </div>
  </div>
</div>
```

### Hero Section Pattern
```tsx
<section className="relative overflow-hidden bg-slate-900">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image src="/hero-bg.webp" fill className="object-cover" />
  </div>
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/80" />
  
  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
    <div className="max-w-3xl">
      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 ring-1 ring-white/20">
        <Award className="h-4 w-4" />
        <span>Trusted by 500+ businesses</span>
      </div>
      
      {/* H1 */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
        Your Headline with <span className="text-primary-400">Highlight</span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
        Compelling subheadline text
      </p>
      
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Button size="lg">Primary CTA</Button>
        <Button variant="outline" size="lg">Secondary CTA</Button>
      </div>
      
      {/* Trust Indicators */}
      <div className="flex flex-wrap gap-6 text-white/90">
        {/* Stats */}
      </div>
    </div>
  </div>
</section>
```

### Section Header Pattern
```tsx
<div className="text-center mb-16">
  {/* Badge */}
  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
    <Star className="w-4 h-4 mr-2" />
    Section Label
  </div>
  
  {/* H2 */}
  <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
    Section Title
  </h2>
  
  {/* Description */}
  <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

### Stats Grid Pattern
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
  {stats.map((stat) => (
    <div key={stat.id} className="text-center">
      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
        <stat.icon className="w-10 h-10 text-white" />
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
        {stat.value}
      </div>
      <div className="text-white/80">{stat.name}</div>
    </div>
  ))}
</div>
```

### FAQ Accordion Pattern
```tsx
<div className="space-y-4">
  {faqs.map((faq, index) => (
    <div 
      key={index}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4">
          {faq.question}
        </h3>
        <ChevronDown className={`w-6 h-6 text-primary-600 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-8 pb-6">
          <p className="text-secondary-700 leading-relaxed text-base lg:text-lg">
            {faq.answer}
          </p>
      </div>
      </div>
    </div>
  ))}
</div>
```

---

## 6. Animation & Interaction Patterns

### Animations Available
```json
{
  "animations": {
  "fade-in": "fadeIn 0.5s ease-in-out",
  "slide-up": "slideUp 0.5s ease-out",
  "bounce-gentle": "bounceGentle 2s infinite",
  "pulse-glow": "pulseGlow 2s ease-in-out infinite",
    "float": "float 3s ease-in-out infinite",
    "shimmer": "shimmer 2s linear infinite",
    "gradient-x": "gradientX 3s ease infinite"
  }
}
```

### Hover Effects
```css
/* Card Hover */
.hover:-translate-y-1 hover:shadow-xl transition-all duration-300

/* Button Hover */
.hover:bg-primary-700 transition-all duration-300

/* Scale */
.hover:scale-110 transition-transform duration-300

/* Glow */
.hover:shadow-glow transition-all duration-300
```

### Transition Standards
- **Duration**: 200ms (fast), 300ms (standard), 500ms (slow)
- **Easing**: `ease-in-out` (default), `ease-out` (enter), `ease-in` (exit)

---

## 7. Background Patterns

### Gradient Backgrounds
```tsx
// Light gradient
className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30"

// Dark gradient
className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"

// CTA gradient
className="bg-gradient-to-r from-blue-600 to-blue-700"

// Primary gradient
className="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900"
```

### Decorative Elements
```tsx
{/* Subtle background pattern */}
<div className="absolute inset-0 opacity-40">
  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full blur-3xl" />
</div>
```

---

## 8. Recommended Page Layout Skeleton

### Standard Landing Page Structure
```tsx
<div className="min-h-screen">
  {/* 1. Hero Section */}
  <Hero 
    background="dark"
    overlay="gradient"
    alignment="left"
    ctaCount={2}
  />

  {/* 2. Entity Definition / What Is Section */}
  <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    {/* Centered card with definition */}
  </section>

  {/* 3. Stats / Trust Section */}
  <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    {/* Dark background with stats grid */}
  </section>

  {/* 4. Social Proof / Testimonials */}
  <SocialProof />
  
  {/* 5. How It Works / Process */}
  <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
    {/* 4-step process with connecting line */}
  </section>

  {/* 6. Services Grid */}
  <section className="py-24 bg-white">
    {/* 3-column service cards */}
  </section>

  {/* 7. Why Choose Us / Differentiators */}
  <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
    {/* 3-column feature cards */}
  </section>

  {/* 8. FAQ Section */}
  <HomepageFAQ />
  
  {/* 9. Final CTA */}
  <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
    {/* Dark gradient with form/CTA */}
  </section>
  
  {/* 10. Pricing (optional) */}
  <Pricing />
</div>
```

---

## 9. DO's and DON'Ts

### ✅ DO

1. **Colors**
   - Use `primary-600` (#004085) for primary CTAs
   - Use `primary-500` (#4C74B9) for accents and highlights
   - Use `secondary-900` (#0f172a) for body text
   - Use `secondary-600` (#475569) for muted text
   - Use gradient backgrounds for sections: `from-gray-50 via-white to-blue-50/30`

2. **Typography**
   - Use Poppins (`font-display`) for all headings (H1-H6)
   - Use Inter (`font-sans`) for body text
   - Use responsive text sizes: `text-4xl sm:text-5xl lg:text-6xl`
   - Maintain line height: `leading-tight` for headings, `leading-relaxed` for body

3. **Spacing**
   - Use consistent container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
   - Use standard section padding: `py-12 sm:py-16 lg:py-20`
   - Use card gaps: `gap-6 sm:gap-8`
   - Use mobile-first responsive spacing

4. **Cards**
   - Use `rounded-2xl` for cards
   - Use `shadow-lg hover:shadow-xl` for elevation
   - Use `hover:-translate-y-1` for lift effect
   - Use `border border-gray-100` for subtle borders
   - Use `transition-all duration-300` for smooth transitions

5. **Buttons**
   - Use `rounded-xl` for buttons (not rounded-md)
   - Use `px-8 py-4` for large CTAs
   - Use `shadow-xl hover:shadow-2xl` for primary buttons
   - Use `transition-all duration-300` for hover states
   - Use `min-h-[56px]` for tap targets

6. **Icons**
   - Use gradient backgrounds for icon containers: `bg-gradient-to-br from-blue-500 to-cyan-600`
   - Use `w-16 h-16` for large icons, `w-10 h-10` for medium
   - Use `rounded-2xl` for icon containers
   - Use Lucide React icons consistently

7. **Backgrounds**
   - Alternate light/dark sections for visual rhythm
   - Use `bg-gradient-to-br` for subtle gradients
   - Use decorative blur elements: `blur-3xl rounded-full`
   - Use `backdrop-blur-sm` for glass effects

8. **Accessibility**
   - Use `focus-visible:ring-2 focus-visible:ring-primary-500` for focus states
   - Use semantic HTML (section, article, nav)
   - Use proper heading hierarchy
   - Use `sr-only` for screen reader text

### ❌ DON'T

1. **Colors**
   - Don't use colors outside the defined palette
   - Don't use pure black (#000000) - use `secondary-900` instead
   - Don't use pure white text on light backgrounds
   - Don't mix warm and cool grays

2. **Typography**
   - Don't use font sizes without responsive variants
   - Don't use system fonts directly - use defined font families
   - Don't use tight line heights on body text
   - Don't use more than 3 font weights per page

3. **Spacing**
   - Don't use arbitrary spacing values - use Tailwind scale
   - Don't use fixed pixel widths - use max-w-* utilities
   - Don't skip responsive breakpoints
   - Don't use inconsistent padding between sections

4. **Cards**
   - Don't use `rounded-md` or `rounded-lg` - use `rounded-2xl`
   - Don't use flat cards without shadows
   - Don't use cards without hover states
   - Don't use borders darker than `gray-200`

5. **Buttons**
   - Don't use small tap targets (< 44px)
   - Don't use `rounded-md` - use `rounded-xl`
   - Don't use buttons without hover states
   - Don't use more than 2 CTAs in a single section

6. **Icons**
   - Don't use icons without containers in feature sections
   - Don't mix icon styles (outline/solid)
   - Don't use icons smaller than 16px
   - Don't use icons without proper color contrast

7. **Backgrounds**
   - Don't use flat white backgrounds for all sections
   - Don't use busy patterns that distract from content
   - Don't use gradients with more than 3 stops
   - Don't use background images without overlays

8. **Layout**
   - Don't use more than 3 columns on mobile
   - Don't use fixed heights - let content flow
   - Don't skip mobile breakpoints
   - Don't use absolute positioning for content

---

## 10. Component Reuse Guide

### For New Location Pages, Reuse:

1. **Hero Component** (`/components/sections/hero.tsx`)
   - Customize: headline, subheadline, CTA text
   - Keep: structure, overlay, trust badges

2. **Card Pattern** (from homepage services section)
   - Use for: service listings, feature highlights
   - Keep: gradient icons, hover effects, rounded-2xl

3. **Stats Grid** (from social proof section)
   - Use for: metrics, achievements
   - Keep: icon containers, responsive grid

4. **FAQ Component** (`/components/sections/homepage-faq.tsx`)
   - Customize: questions/answers
   - Keep: accordion behavior, styling

5. **CTA Section** (from homepage final CTA)
   - Use for: conversion points
   - Keep: gradient background, dual CTAs

6. **Button Component** (`/components/ui/button.tsx`)
   - Use variants: default, outline, accent
   - Keep: size="lg" for primary CTAs

### Utility Functions
- `cn()` from `/lib/utils.ts` - for conditional classes
- Schema generators from `/lib/clean-schema-generator.ts`
- Internal linking from `/lib/internal-linking.ts`

---

## 11. Mobile Optimization Notes

### Touch Targets
- Minimum: `min-h-[48px] min-w-[48px]`
- Preferred: `min-h-[56px]` for primary CTAs

### Typography
- Use mobile-specific sizes: `text-[30px]/[38px]` for H1
- Use responsive variants: `text-4xl sm:text-5xl lg:text-6xl`

### Spacing
- Use tighter spacing on mobile: `py-12 sm:py-16 lg:py-20`
- Use full-width buttons on mobile: `w-full sm:w-auto`

### Navigation
- Sticky header: `sticky top-0 z-50`
- Mobile menu: slide-in from right
- Hamburger menu: visible on `lg:hidden`

---

## 12. Performance Patterns

### Image Optimization
```tsx
<Image
  src="/images/hero-background.webp"
  alt="Description"
  fill
  priority // for above-fold images
  quality={85}
  sizes="100vw"
  className="object-cover"
/>
```

### Lazy Loading
```tsx
import { LazySection } from '@/components/ui/lazy-section'

<LazySection>
  <HeavyComponent />
</LazySection>
```

### Dynamic Imports
```tsx
const Pricing = dynamic(() => import('@/components/sections/pricing'), { 
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-100 rounded-lg" style={{ minHeight: '800px' }} />
})
```

---

## Summary

**Webvello Design System** is a modern, accessible, and conversion-focused design system built on:
- **Tailwind CSS** for utility-first styling
- **Inter + Poppins** for professional typography
- **Blue/Orange** color palette with extensive shades
- **Rounded corners** (2xl) and soft shadows for modern aesthetic
- **Gradient backgrounds** for visual interest
- **Mobile-first** responsive design
- **Accessibility** built-in with focus states and semantic HTML

**Key Principle**: Consistency through reusable components and design tokens. Every new page should feel like part of the same family while serving its unique purpose.

---

**Next Steps**: Ready to build 2 new location landing pages using these exact patterns. Awaiting your go-ahead! 🚀
