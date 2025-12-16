# Web Vello - Digital Marketing Agency Website

A modern, conversion-focused website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a professional design system and comprehensive digital marketing service offerings.

## 🎨 Design System

### Color Palette
- **Primary Colors**: 
  - Congress Blue `#004085` (primary-600)
  - Steel Blue `#4C74B9` (primary-500)
  - Light variants for backgrounds and accents
- **Secondary Colors**: Slate grays for text and UI elements
- **Accent Colors**: Blue tones for interactive elements

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)
- **Scale**: Comprehensive type scale from xs to 9xl

### Components
- **Button**: Multiple variants (default, outline, secondary, ghost, link, accent)
- **Header**: Responsive navigation with dropdown menus
- **Hero**: Compelling homepage hero section
- **Pricing**: Three-tier pricing structure with features
- **Cards**: Service showcases and testimonials

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Custom component library with shadcn/ui patterns
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles and Tailwind
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   └── button.tsx    # Button component with variants
│   ├── layout/           # Layout components
│   │   └── header.tsx    # Navigation header
│   └── sections/         # Page sections
│       ├── hero.tsx      # Hero section
│       └── pricing.tsx   # Pricing section
├── lib/                  # Utility functions
│   └── utils.ts          # Class merging utilities
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-vello-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Features

### Homepage Sections
- **Hero**: Compelling headline with CTA buttons and social proof
- **Services**: Four main service offerings with features
- **Stats**: Key performance metrics and achievements
- **Testimonials**: Client success stories and reviews
- **Pricing**: Three-tier pricing structure with additional services

### Navigation
- **Services Dropdown**: Web Development, UI/UX, SEO, AI SEO, Local/GEO SEO, Software Dev
- **Main Pages**: Case Studies, Industries, Pricing, Resources, About, Contact
- **Mobile Responsive**: Hamburger menu with full navigation

### Design Features
- **Gradient Backgrounds**: Subtle gradients for visual interest
- **Glass Effects**: Backdrop blur and transparency
- **Hover Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🎨 Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#4C74B9', // Steel Blue
    600: '#004085', // Congress Blue
    // ... other variants
  }
}
```

### Components
All components are built with customization in mind:
- Use the `cn()` utility for class merging
- Leverage Tailwind's design tokens
- Modify component variants as needed

### Typography
Update fonts in `tailwind.config.js` and `app/layout.tsx`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],
}
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Systems**: Responsive grid layouts that adapt to screen size
- **Navigation**: Mobile hamburger menu with full navigation

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Focus Management**: Visible focus indicators and keyboard navigation
- **Color Contrast**: WCAG AA compliant color combinations

## 🚀 Performance

- **Next.js 14**: Latest framework with App Router
- **Image Optimization**: Built-in image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Font Optimization**: Google Fonts with display swap

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and Open Graph
- **Structured Data**: Ready for schema markup implementation
- **Semantic HTML**: Proper heading structure and content hierarchy
- **Performance**: Core Web Vitals optimization ready
- **GEO Services**: 30 city-specific GEO pages with AI visibility optimization
  - Original 15 cities: Austin, Miami, Houston, Chicago, Phoenix, Dallas, LA, NY, SF, Seattle, Denver, Atlanta, Boston, Portland, San Diego
  - Expanded to 15 new cities: San Jose, Palo Alto, Mountain View, Santa Monica, Irvine, Sunnyvale, Cupertino, Bellevue, Redmond, Plano, Frisco, Scottsdale, Tempe, Chandler, Naperville

## 🔧 Development

### Adding New Components
1. Create component in appropriate directory
2. Export from index file if needed
3. Import and use in pages

### Styling Guidelines
- Use Tailwind utility classes
- Leverage design tokens from config
- Follow component variant patterns
- Use the `cn()` utility for conditional classes

### State Management
- Use React hooks for local state
- Consider context for global state if needed
- Keep components focused and single-purpose

## 📚 Next Steps

### Immediate Development
1. **Content Pages**: Implement service pages, case studies, etc.
2. **Contact Forms**: Add form handling and validation
3. **CMS Integration**: Set up Sanity or similar headless CMS
4. **Analytics**: Implement conversion tracking and analytics

### Future Enhancements
1. **Blog System**: MDX-based content management
2. **E-commerce**: Shopping cart and payment integration
3. **AI Features**: Chatbot and AI-powered recommendations
4. **Multi-language**: Internationalization support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Modern Design**: Professional color palette and design aesthetic
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Team**: React framework and App Router
- **shadcn/ui**: Component design patterns and inspiration

---

Built with ❤️ using modern web technologies and best practices for digital marketing agencies.

Note: Deployment is managed by Vercel; pushing to main triggers a production build.

