# Alt Text Guide - Web Vello Website

**Last Updated:** January 2025  
**Purpose:** Ensure all images on the website are accessible and meet WCAG 2.2 AA standards

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Informative Images](#informative-images)
3. [Decorative Images](#decorative-images)
4. [Background Images](#background-images)
5. [Complex Images](#complex-images)
6. [Common Mistakes](#common-mistakes)
7. [Examples](#examples)
8. [Testing Checklist](#testing-checklist)

---

## Quick Reference

| Image Type | Alt Text | aria-hidden |
|------------|----------|-------------|
| **Informative** | Descriptive text (what it shows) | No |
| **Decorative** | `alt=""` | `aria-hidden="true"` |
| **Background (CSS)** | N/A (not in HTML) | N/A |
| **Background (Image tag)** | `alt=""` | `aria-hidden="true"` |
| **Logo** | Company/brand name | No |
| **Icon with text** | `alt=""` | `aria-hidden="true"` |
| **Icon without text** | Descriptive action | No |

---

## Informative Images

**Definition:** Images that convey information, meaning, or context that is not available elsewhere on the page.

### Rules:
- ✅ **Must have descriptive alt text**
- ✅ **Describe what the image shows, not what it is** ("image", "photo", "picture")
- ✅ **Include relevant context** (who, what, where, when, why)
- ✅ **Keep it concise** (125 characters or less recommended)
- ✅ **Include keywords naturally** (for SEO, but don't keyword stuff)
- ❌ **Never use file names** (`hero-background.webp`)
- ❌ **Never use generic text** ("image", "photo", "picture")
- ❌ **Never leave empty** (unless decorative)

### Examples:

```tsx
// ✅ GOOD: Descriptive and contextual
<Image 
  src="/images/team-collaboration.webp"
  alt="Web Vello team collaborating on digital marketing strategy"
/>

<Image 
  src="/images/analytics-dashboard.webp"
  alt="SEO analytics dashboard showing 300% traffic growth"
/>

// ❌ BAD: Generic or missing
<Image src="/images/team.webp" alt="image" />
<Image src="/images/team.webp" alt="team-collaboration.webp" />
<Image src="/images/team.webp" alt="" />
```

---

## Decorative Images

**Definition:** Images that are purely decorative, add visual interest but don't convey information, or are redundant with surrounding text.

### Rules:
- ✅ **Use `alt=""`** (empty string)
- ✅ **Add `aria-hidden="true"`** to the image and container
- ✅ **Use for:** Background images, decorative patterns, visual separators, icons that repeat text

### Examples:

```tsx
// ✅ GOOD: Decorative background image
<div className="absolute inset-0" aria-hidden="true">
  <Image 
    src="/images/hero-background.webp"
    alt=""
    fill
    aria-hidden="true"
  />
</div>

// ✅ GOOD: Decorative icon that repeats text
<button>
  <Image src="/icons/arrow-right.svg" alt="" aria-hidden="true" />
  Submit Form
</button>

// ❌ BAD: Missing aria-hidden
<Image src="/images/pattern.svg" alt="" />
```

---

## Background Images

### CSS Background Images

**Definition:** Images set via CSS `background-image` property.

**Rules:**
- ✅ **No alt text needed** (not in HTML)
- ✅ **Ensure text contrast** - Text over background images must meet WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- ✅ **Add overlay/scrim** if contrast is insufficient

### Image Tag Background Images

**Definition:** `<Image>` or `<img>` tags used as backgrounds (with `fill` or absolute positioning).

**Rules:**
- ✅ **Use `alt=""`**
- ✅ **Add `aria-hidden="true"`** to image and container
- ✅ **Ensure text contrast** with overlay/scrim

### Examples:

```tsx
// ✅ GOOD: CSS background with contrast overlay
<div 
  className="relative bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/hero.webp)' }}
>
  <div className="absolute inset-0 bg-black/60" /> {/* Contrast overlay */}
  <div className="relative z-10 text-white">
    <h1>Our Services</h1>
  </div>
</div>

// ✅ GOOD: Image tag background
<div className="absolute inset-0" aria-hidden="true">
  <Image 
    src="/images/hero-background.webp"
    alt=""
    fill
    aria-hidden="true"
  />
</div>
<div className="absolute inset-0 bg-black/60" /> {/* Contrast overlay */}
<div className="relative z-10 text-white">
  <h1>Our Services</h1>
</div>
```

---

## Complex Images

### Images with Text

**Rule:** If the image contains text, the alt text should include that text.

```tsx
// ✅ GOOD: Includes text from image
<Image 
  src="/images/infographic-seo-stats.webp"
  alt="SEO statistics infographic: 300% traffic growth, 500+ clients, 1,200% ROI"
/>
```

### Charts and Graphs

**Rule:** Describe the data and key insights, not just "chart" or "graph".

```tsx
// ✅ GOOD: Describes data
<Image 
  src="/images/traffic-growth-chart.webp"
  alt="Line chart showing organic traffic growth from 1,000 to 4,000 visitors over 6 months"
/>

// ❌ BAD: Generic
<Image src="/images/chart.webp" alt="Chart" />
```

### Icons

**Rule:** 
- If icon has accompanying text → `alt=""` + `aria-hidden="true"`
- If icon is standalone → Descriptive alt text

```tsx
// ✅ GOOD: Icon with text (decorative)
<button>
  <Image src="/icons/phone.svg" alt="" aria-hidden="true" />
  Call Us
</button>

// ✅ GOOD: Standalone icon (informative)
<button aria-label="Call us">
  <Image src="/icons/phone.svg" alt="Phone icon" />
</button>
```

---

## Common Mistakes

### ❌ Don't Do This:

```tsx
// 1. Generic alt text
<Image src="/team.webp" alt="image" />
<Image src="/team.webp" alt="photo" />
<Image src="/team.webp" alt="picture" />

// 2. File names
<Image src="/team.webp" alt="team.webp" />
<Image src="/hero-background.webp" alt="hero-background" />

// 3. Missing alt (informative image)
<Image src="/team.webp" />

// 4. Decorative without aria-hidden
<Image src="/pattern.svg" alt="" />

// 5. Too verbose
<Image 
  src="/team.webp" 
  alt="A photograph of a diverse group of professional business people, including men and women of various ethnicities, sitting around a modern conference table in a bright, well-lit office environment, collaborating on a project, with laptops, notebooks, and coffee cups visible, representing teamwork and corporate culture"
/>

// 6. Keyword stuffing
<Image 
  src="/team.webp" 
  alt="SEO services digital marketing team web development experts"
/>
```

### ✅ Do This Instead:

```tsx
// 1. Descriptive and contextual
<Image 
  src="/team.webp" 
  alt="Web Vello team collaborating on digital marketing strategy"
/>

// 2. Decorative with aria-hidden
<div aria-hidden="true">
  <Image src="/pattern.svg" alt="" aria-hidden="true" />
</div>

// 3. Concise but informative
<Image 
  src="/team.webp" 
  alt="Digital marketing team meeting in modern office"
/>

// 4. Natural keyword inclusion
<Image 
  src="/seo-dashboard.webp" 
  alt="SEO analytics dashboard showing traffic growth metrics"
/>
```

---

## Examples by Image Type

### Logo

```tsx
// ✅ GOOD
<Image 
  src="/webvello_logo.jpg"
  alt="Web Vello"
  width={192}
  height={64}
/>
```

### Product/Service Images

```tsx
// ✅ GOOD
<Image 
  src="/images/website-design-preview.webp"
  alt="Modern website design preview with clean layout and professional styling"
/>
```

### Team/People Images

```tsx
// ✅ GOOD
<Image 
  src="/images/team-collaboration.webp"
  alt="Web Vello team collaborating on digital marketing strategy"
/>

// ✅ GOOD: More specific
<Image 
  src="/images/team-meeting.webp"
  alt="Marketing team analyzing SEO performance data on large monitor"
/>
```

### Data/Chart Images

```tsx
// ✅ GOOD
<Image 
  src="/images/growth-chart.webp"
  alt="Line chart showing 300% organic traffic growth over 12 months"
/>
```

### Background Images

```tsx
// ✅ GOOD: Decorative background
<div className="absolute inset-0" aria-hidden="true">
  <Image 
    src="/images/hero-background.webp"
    alt=""
    fill
    aria-hidden="true"
  />
</div>
<div className="absolute inset-0 bg-black/60" /> {/* Contrast overlay */}
```

### Video Thumbnails

```tsx
// ✅ GOOD: Descriptive
<Image 
  src={video.thumbnail}
  alt={video.title || "Video thumbnail - click to play"}
/>

// ✅ GOOD: More specific
<Image 
  src="/videos/intro-thumbnail.webp"
  alt="Introduction to Web Vello services - video thumbnail"
/>
```

---

## Testing Checklist

Before publishing, verify:

- [ ] All informative images have descriptive alt text (not empty, not generic)
- [ ] All decorative images have `alt=""` and `aria-hidden="true"`
- [ ] Background images have contrast overlays if text is over them
- [ ] Logo images have brand name as alt text
- [ ] Icons with text have `alt=""` and `aria-hidden="true"`
- [ ] Standalone icons have descriptive alt text
- [ ] No file names used as alt text
- [ ] No generic words ("image", "photo", "picture") used as alt text
- [ ] Alt text is concise (under 125 characters)
- [ ] Alt text includes relevant keywords naturally (for SEO)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Test with images disabled in browser
- [ ] Verify contrast ratios for text over background images (WCAG AA: 4.5:1 normal, 3:1 large)

---

## Tools for Testing

1. **Screen Readers:**
   - NVDA (Windows, free)
   - JAWS (Windows, paid)
   - VoiceOver (macOS/iOS, built-in)
   - TalkBack (Android, built-in)

2. **Browser Extensions:**
   - WAVE (Web Accessibility Evaluation Tool)
   - axe DevTools
   - Lighthouse (built into Chrome DevTools)

3. **Contrast Checkers:**
   - WebAIM Contrast Checker
   - Colour Contrast Analyser
   - Chrome DevTools (Accessibility panel)

---

## Quick Decision Tree

```
Is the image informative?
├─ YES → Does it have descriptive alt text?
│   ├─ YES → ✅ Good!
│   └─ NO → Add descriptive alt text
│
└─ NO (decorative) → Does it have alt="" and aria-hidden="true"?
    ├─ YES → ✅ Good!
    └─ NO → Add alt="" and aria-hidden="true"
```

---

## Questions?

If you're unsure whether an image is informative or decorative:

1. **Ask:** "If I removed this image, would users miss important information?"
   - YES → Informative (needs alt text)
   - NO → Decorative (use `alt=""`)

2. **Check:** Is the information in the image already in nearby text?
   - YES → Likely decorative (use `alt=""`)
   - NO → Likely informative (needs alt text)

---

## Resources

- [WCAG 2.2 - Images](https://www.w3.org/WAI/WCAG22/Understanding/images.html)
- [WebAIM - Alternative Text](https://webaim.org/techniques/alttext/)
- [MDN - Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [A11y Project - Alt Text](https://www.a11yproject.com/posts/alt-text/)

---

**Remember:** Alt text is not just for accessibility—it also improves SEO and helps when images fail to load. Write alt text as if describing the image to someone over the phone.

