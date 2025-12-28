/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px', // Mobile-specific breakpoint for 390-430px optimization
      },
      colors: {
        // Balanced and engaging color palette
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#a3c7ff',
          400: '#7aa6ff',
          500: '#4C74B9', // Balanced Blue
          600: '#004085', // Rich Blue
          700: '#003366',
          800: '#002a52',
          900: '#001f3d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Balanced Gray
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Balanced Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Balanced Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Balanced Yellow
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Balanced Red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],      // 12px / 18px
        'sm': ['0.875rem', { lineHeight: '1.375rem' }],     // 14px / 22px
        'base': ['1rem', { lineHeight: '1.625rem' }],       // 16px / 26px - mobile body text
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],      // 18px / 28px - mobile large body
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],      // 20px / 30px
        '2xl': ['1.5rem', { lineHeight: '2.125rem' }],      // 24px / 34px - mobile H2
        '3xl': ['1.875rem', { lineHeight: '2.375rem' }],    // 30px / 38px - mobile H1
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],      // 36px / 44px
        '5xl': ['3rem', { lineHeight: '3.25rem' }],         // 48px / 52px
        '6xl': ['3.75rem', { lineHeight: '4rem' }],         // 60px / 64px
        '7xl': ['4.5rem', { lineHeight: '4.75rem' }],       // 72px / 76px
        '8xl': ['6rem', { lineHeight: '6.25rem' }],         // 96px / 100px
        '9xl': ['8rem', { lineHeight: '8.25rem' }],         // 128px / 132px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(76, 116, 185, 0.2)',
        'glow-orange': '0 0 15px rgba(249, 115, 22, 0.2)',
        'glow-green': '0 0 15px rgba(34, 197, 94, 0.2)',
        'glow-purple': '0 0 15px rgba(122, 166, 255, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(76, 116, 185, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(76, 116, 185, 0.3)',
            transform: 'scale(1.02)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4C74B9 0%, #004085 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        'gradient-success': 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7aa6ff 0%, #4C74B9 100%)',
        'gradient-rainbow': 'linear-gradient(135deg, #ef4444 0%, #f97316 25%, #f59e0b 50%, #22c55e 75%, #4C74B9 100%)',
      },
    },
  },
  plugins: [],
}
