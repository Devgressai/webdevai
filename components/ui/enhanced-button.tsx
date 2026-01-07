"use client"

import { forwardRef, useState } from 'react'
import { Button } from './button'
import { ArrowRight, Target, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, TrendingDown, BarChart3, DollarSign, MessageSquare, UserPlus, Filter as Funnel, MousePointer, Settings, Database, BarChart3 as ChartBar, Users, ShoppingCart, CreditCard, MousePointer2, ArrowUpRight, ArrowDownRight, Percent, Timer, Target as TargetIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon, BarChart, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as Lightning, Heart, Crown, Gem, Calculator, Eye as EyeIcon, Search as SearchIcon, Filter as FilterIcon, PieChart as PieChartIcon2, Activity as ActivityIcon2, TrendingUp as TrendingUpIcon2, TrendingDown as TrendingDownIcon2, Lightbulb as LightbulbIcon, Shield as ShieldIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, BookOpen as BookOpenIcon, FileText as FileTextIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, MapPin as MapPinIcon, Globe2 as Globe2Icon, Monitor as MonitorIcon, UserPlus as UserPlusIcon, Filter as FunnelIcon, MousePointer as MousePointerIcon, Settings as SettingsIcon, Database as DatabaseIcon, BarChart3 as ChartBarIcon, Users as UsersIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, MousePointer2 as MousePointer2Icon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, Percent as PercentIcon, Timer as TimerIcon, Target as TargetIcon2, TrendingUp as TrendingUpIcon3, TrendingDown as TrendingDownIcon3, BarChart as BarChartIcon, PieChart as PieChartIcon3, Activity as ActivityIcon3 } from 'lucide-react'

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
  loading?: boolean
  success?: boolean
  error?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  gradient?: boolean
  glow?: boolean
  pulse?: boolean
  children: React.ReactNode
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    loading = false,
    success = false,
    error = false,
    icon,
    iconPosition = 'left',
    gradient = false,
    glow = false,
    pulse = false,
    children, 
    ...props 
  }, ref) => {
    const [isPressed, setIsPressed] = useState(false)

    const baseClasses = `inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95 relative overflow-hidden ${
      // Size variants
      size === 'sm' ? 'h-9 px-3 text-sm' :
      size === 'default' ? 'h-10 px-4 py-2' :
      size === 'lg' ? 'h-11 px-8 text-lg' :
      size === 'xl' ? 'h-14 px-10 text-xl font-semibold' :
      size === 'icon' ? 'h-10 w-10 p-0' : 'h-10 px-4 py-2'
    } ${
      // Variant styles
      variant === 'default' ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium' :
      variant === 'destructive' ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' :
      variant === 'outline' ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' :
      variant === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' :
      variant === 'ghost' ? 'hover:bg-accent hover:text-accent-foreground' :
      variant === 'link' ? 'text-primary underline-offset-4 hover:underline' : ''
    } ${
      // Special effects
      gradient ? 'bg-gradient-primary hover:shadow-glow' : ''
    } ${
      glow ? 'shadow-glow hover:shadow-glow-orange' : ''
    } ${
      pulse ? 'animate-pulse-glow' : ''
    } ${
      // State-based styles
      success ? 'bg-success-600 text-white' : ''
    } ${
      error ? 'bg-destructive text-white' : ''
    } ${className || ''}`

    const iconClasses = `transition-all duration-200 ${
      iconPosition === 'left' && size !== 'icon' ? 'mr-2' : ''
    } ${
      iconPosition === 'right' && size !== 'icon' ? 'ml-2' : ''
    } ${
      size === 'sm' ? 'h-4 w-4' :
      size === 'default' || size === 'lg' ? 'h-5 w-5' :
      size === 'xl' ? 'h-6 w-6' :
      size === 'icon' ? 'h-5 w-5' : 'h-5 w-5'
    }`

    const renderIcon = () => {
      if (loading) {
        return <div className={`${iconClasses} animate-spin`}>⏳</div>
      }
      if (success) {
        return <div className={iconClasses}>✅</div>
      }
      if (error) {
        return <div className={iconClasses}>❌</div>
      }
      if (icon) {
        return icon
      }
      return null
    }

    const renderChildren = () => {
      if (loading) {
        return 'Loading...'
      }
      if (success) {
        return 'Success!'
      }
      if (error) {
        return 'Error'
      }
      return children
    }

    // Check if this is an icon-only button (no children text)
    const isIconOnly = size === 'icon' && !children && !loading && !success && !error
    const ariaLabel = props['aria-label'] || (isIconOnly ? 'Button' : undefined)

    return (
      <button
        className={baseClasses}
        ref={ref}
        disabled={loading || success || error}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        aria-label={ariaLabel}
        {...props}
      >
        {/* Shimmer effect for gradient buttons */}
        {gradient && (
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:bg-white/10" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center">
          {iconPosition === 'left' && renderIcon()}
          {renderChildren()}
          {iconPosition === 'right' && !loading && !success && !error && renderIcon()}
        </div>
      </button>
    )
  }
)

EnhancedButton.displayName = 'EnhancedButton'

export { EnhancedButton }
