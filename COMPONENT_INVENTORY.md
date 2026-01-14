# Webvello Component Inventory
**Reusable Components for Location Landing Pages**

---

## UI Components (`/components/ui/`)

### 1. Button
**File:** `/components/ui/button.tsx`

**Variants:**
```tsx
// Primary (default)
<Button>Click Me</Button>

// Gradient Primary
<Button className="bg-gradient-to-r from-primary-500 to-primary-600">
  Get Started
</Button>

// Outline
<Button variant="outline">Learn More</Button>

// Secondary
<Button variant="secondary">Secondary Action</Button>

// Accent
<Button variant="accent">Special Offer</Button>

// Ghost
<Button variant="ghost">Subtle Action</Button>

// Link style
<Button variant="link">Text Link</Button>
```

**Sizes:**
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

**With Link (Next.js):**
```tsx
<Button asChild>
  <Link href="/contact">Contact Us</Link>
</Button>
```

**With Icon:**
```tsx
<Button>
  Get Started
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

---

### 2. Card
**File:** `/components/ui/card.tsx`

**Basic Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Service Card Pattern:**
```tsx
<Card className="hover:shadow-xl transition-shadow duration-300">
  <CardHeader>
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
      <Zap className="w-8 h-8 text-white" />
    </div>
    <CardTitle>Service Name</CardTitle>
    <CardDescription>Service description</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2">
      <li className="flex items-center">
        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
        Feature 1
      </li>
      <li className="flex items-center">
        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
        Feature 2
      </li>
    </ul>
  </CardContent>
</Card>
```

---

### 3. Input
**File:** `/components/ui/input.tsx`

```tsx
<Input 
  type="text" 
  placeholder="Enter your email"
  className="w-full"
/>
```

---

### 4. Breadcrumb
**File:** `/components/ui/breadcrumb.tsx`

```tsx
import { Breadcrumb, generateBreadcrumbs } from '@/components/ui/breadcrumb'

// For service pages
<Breadcrumb 
  items={generateBreadcrumbs('service', { title: 'AI SEO' })} 
  className="mb-8"
/>

// For location pages
<Breadcrumb 
  items={generateBreadcrumbs('location', { 
    city: 'Austin', 
    state: 'TX' 
  })} 
  className="mb-8"
/>
```

---

## Section Components (`/components/sections/`)

### 1. Hero Section
**File:** `/components/sections/hero.tsx`

**Features:**
- Dark background with image overlay
- Trust badge
- Primary + Secondary CTAs
- Stats indicators
- Collapsible URL form

**Usage:**
```tsx
import { Hero } from '@/components/sections/hero'

<Hero />
```

**Custom Hero Pattern:**
```tsx
<section className="relative overflow-hidden bg-slate-900">
  {/* Background Image */}
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <Image
      src="/images/hero-background.webp"
      alt=""
      fill
      priority
      className="object-cover"
    />
  </div>
  
  {/* Dark Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 to-black/80" />

  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
    <div className="max-w-3xl">
      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 ring-1 ring-white/20">
        <Award className="h-4 w-4" />
        <span>Trusted by 500+ businesses</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
        Your Headline Here
      </h1>
      
      {/* Subheadline */}
      <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
        Your subheadline description
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
          Primary CTA
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
          Secondary CTA
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

### 2. FAQ Section
**File:** `/components/sections/homepage-faq.tsx`

**Usage:**
```tsx
import { HomepageFAQ } from '@/components/sections/homepage-faq'

<HomepageFAQ />
```

**Custom FAQ Pattern:**
```tsx
<section className="py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
        <HelpCircle className="w-4 h-4 mr-2" />
        Common Questions
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
        Section description
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-secondary-900">
              {faq.question}
            </h3>
            <ChevronDown className={`w-6 h-6 text-primary-600 transition-transform ${
              openIndex === index ? 'rotate-180' : ''
            }`} />
          </button>
          
          {openIndex === index && (
            <div className="px-8 pb-6">
              <p className="text-secondary-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border">
      <p className="text-lg text-secondary-700 mb-6">
        Have more questions?
      </p>
      <Button size="lg" asChild>
        <Link href="/contact">Schedule Free Consultation</Link>
      </Button>
    </div>
  </div>
</section>
```

---

### 3. Social Proof Section
**File:** `/components/sections/social-proof.tsx`

**Usage:**
```tsx
import { SocialProof } from '@/components/sections/social-proof'

<SocialProof />
```

**Features:**
- Stats grid
- Testimonial cards with ratings
- CTA section

---

### 4. Pricing Section
**File:** `/components/sections/pricing.tsx`

**Usage:**
```tsx
import { Pricing } from '@/components/sections/pricing'

<Pricing />
```

**Features:**
- 3-column pricing cards
- "Most Popular" badge
- Additional services grid
- FAQ section
- Gradient CTA

---

## Common Patterns

### Section Header with Badge
```tsx
<div className="text-center mb-16">
  {/* Badge */}
  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
    <Star className="w-4 h-4 mr-2" />
    Badge Text
  </div>
  
  {/* Heading */}
  <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
    Section Heading
  </h2>
  
  {/* Description */}
  <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
    Section description that provides context and value proposition.
  </p>
</div>
```

---

### Service/Feature Card
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
  {/* Icon Badge */}
  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Zap className="w-8 h-8 text-white" />
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-bold text-secondary-900 mb-4">
    Service Title
  </h3>
  
  {/* Description */}
  <p className="text-secondary-600 mb-6 leading-relaxed">
    Service description that explains the value and benefits.
  </p>
  
  {/* Features List */}
  <div className="space-y-2">
    <div className="flex items-center text-sm text-secondary-600">
      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
      Feature 1
    </div>
    <div className="flex items-center text-sm text-secondary-600">
      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
      Feature 2
    </div>
    <div className="flex items-center text-sm text-secondary-600">
      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
      Feature 3
    </div>
  </div>
  
  {/* CTA */}
  <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
    Learn More
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  </div>
</div>
```

---

### Stats/Metrics Card
```tsx
<div className="text-center">
  {/* Icon Badge */}
  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
    <TrendingUp className="w-10 h-10 text-white" />
  </div>
  
  {/* Value */}
  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
    300%+
  </div>
  
  {/* Label */}
  <div className="text-white/80">
    Organic Traffic Growth
  </div>
</div>
```

---

### Icon Benefit Card
```tsx
<div className="text-center">
  {/* Icon Circle */}
  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
    <MapPin className="h-8 w-8 text-blue-600" />
  </div>
  
  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    Local Expertise
  </h3>
  
  {/* Description */}
  <p className="text-gray-600">
    Deep understanding of local business landscape
  </p>
</div>
```

---

### Process Steps (4-column)
```tsx
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* Connecting Line */}
  <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 -translate-y-1/2"></div>
  
  {/* Step 1 */}
  <div className="relative text-center md:text-left">
    <div className="mx-auto md:mx-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow ring-2 ring-white">
      1
    </div>
    <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm border">
      <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
        Step Title
      </h3>
      <p className="text-lg text-secondary-700">
        Step description
      </p>
    </div>
  </div>
  
  {/* Repeat for steps 2-4 */}
</div>
```

---

### CTA Section (Full Width)
```tsx
<section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden">
  {/* Background Image (Optional) */}
  <div className="absolute inset-0 opacity-20" aria-hidden="true">
    <Image src="/images/hero-business-meeting.webp" alt="" fill className="object-cover" />
  </div>
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-pink-500/25 to-blue-500/25"></div>
  
  {/* Content */}
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 mb-8 border border-white/20">
        SEO • GEO • AEO • WEB DEVELOPMENT
      </div>
      
      {/* Headline */}
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10 text-white leading-tight">
        Ready to Transform Your Business?
      </h2>
      
      {/* Description */}
      <p className="text-lg sm:text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
        Get a free consultation and discover how we can help you achieve your goals.
      </p>
      
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500">
          Get Free Consultation
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
          View Case Studies
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

### Entity Definition Box (AEO-Optimized)
```tsx
<section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-40">
    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100/50 p-6 sm:p-8 lg:p-12">
      
      {/* Icon + Title */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
          <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h2 className="text-[26px] leading-[34px] sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
          What Is [Service/Topic]?
        </h2>
      </div>
      
      {/* Content */}
      <div className="space-y-4 sm:space-y-6 text-left">
        <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-secondary-800">
          <strong className="text-secondary-900">[Entity Name]</strong> is [clear definition with internal links].
        </p>
        <p className="text-base leading-relaxed sm:text-lg sm:leading-relaxed text-secondary-700">
          Additional context and details.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## Grid Layouts

### 3-Column Service Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <div key={service.id}>
      {/* Service card */}
    </div>
  ))}
</div>
```

### 4-Column Stats Grid
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map((stat) => (
    <div key={stat.id}>
      {/* Stat card */}
    </div>
  ))}
</div>
```

### 2-Column Feature Grid
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
    {/* Left content */}
  </div>
  <div>
    {/* Right content */}
  </div>
</div>
```

---

## Background Patterns

### Light Gradient Background
```tsx
className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
```

### Dark Gradient Background
```tsx
className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
```

### CTA Gradient Background
```tsx
className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800"
```

### White Background
```tsx
className="bg-white"
```

### Decorative Blur Elements
```tsx
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent-200/30 to-transparent rounded-full blur-3xl"></div>
</div>
```

---

## Quick Copy-Paste Snippets

### Standard Section Wrapper
```tsx
<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Centered Content Container
```tsx
<div className="max-w-4xl mx-auto text-center">
  {/* Content */}
</div>
```

### Icon + Text List Item
```tsx
<div className="flex items-center">
  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
  Feature text
</div>
```

### Gradient Text
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
  Highlighted Text
</span>
```

### Glass Effect Card
```tsx
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50">
  {/* Content */}
</div>
```

---

## Icon Reference

### Common Icons from Lucide React
```tsx
import { 
  MapPin,        // Location
  CheckCircle,   // Checkmarks
  ArrowRight,    // CTAs
  Star,          // Ratings
  TrendingUp,    // Growth
  Zap,           // Speed/AI
  Globe,         // Global/GEO
  Code,          // Development
  HelpCircle,    // FAQ
  Award,         // Quality
  Users,         // Team/Clients
  Target,        // Goals
  BarChart3,     // Analytics
  Clock,         // Time
  Shield,        // Security
  Brain,         // AI
  Sparkles       // Special
} from 'lucide-react'
```

---

## Summary

This component inventory provides:
1. ✅ All reusable UI components with examples
2. ✅ Section components (Hero, FAQ, Social Proof, Pricing)
3. ✅ Common patterns (cards, stats, CTAs, process steps)
4. ✅ Grid layouts for different use cases
5. ✅ Background patterns and decorative elements
6. ✅ Quick copy-paste snippets
7. ✅ Icon reference

**Use these components to build consistent, beautiful location landing pages that match the Webvello design system perfectly.**

