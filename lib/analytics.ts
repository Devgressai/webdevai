// Analytics Configuration for Web Vello
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Conversion Goals Configuration
export const CONVERSION_GOALS = {
  // Lead Generation Goals
  FREE_STRATEGY_SESSION: 'free_strategy_session',
  CONTACT_FORM_SUBMISSION: 'contact_form_submission',
  FREE_PROPOSAL_REQUEST: 'free_proposal_request',
  PRICING_PAGE_VIEW: 'pricing_page_view',
  SERVICE_PAGE_VIEW: 'service_page_view',
  
  // Engagement Goals
  CTA_BUTTON_CLICK: 'cta_button_click',
  SCROLL_DEPTH_50: 'scroll_depth_50',
  SCROLL_DEPTH_75: 'scroll_depth_75',
  TIME_ON_PAGE_2MIN: 'time_on_page_2min',
  
  // Business Goals
  PHONE_CALL: 'phone_call',
  EMAIL_CLICK: 'email_click',
  CASE_STUDY_VIEW: 'case_study_view',
  BLOG_READ: 'blog_read'
}

// Event Categories
export const EVENT_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  LEAD_GENERATION: 'lead_generation',
  CONVERSION: 'conversion',
  USER_BEHAVIOR: 'user_behavior',
  BUSINESS_ACTION: 'business_action'
}

// Event Actions
export const EVENT_ACTIONS = {
  CLICK: 'click',
  SUBMIT: 'submit',
  VIEW: 'view',
  SCROLL: 'scroll',
  TIME: 'time',
  CALL: 'call',
  EMAIL: 'email'
}

// Custom Dimensions
export const CUSTOM_DIMENSIONS = {
  USER_TYPE: 'user_type',
  SERVICE_INTEREST: 'service_interest',
  BUDGET_RANGE: 'budget_range',
  URGENCY_LEVEL: 'urgency_level',
  LEAD_SOURCE: 'lead_source',
  CAMPAIGN_NAME: 'campaign_name'
}

// Custom Metrics
export const CUSTOM_METRICS = {
  FORM_COMPLETION_TIME: 'form_completion_time',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  PAGE_VIEWS_PER_SESSION: 'page_views_per_session'
}

// Conversion Value Mapping
export const CONVERSION_VALUES = {
  [CONVERSION_GOALS.FREE_STRATEGY_SESSION]: 500, // Worth $500
  [CONVERSION_GOALS.CONTACT_FORM_SUBMISSION]: 250, // Worth $250
  [CONVERSION_GOALS.FREE_PROPOSAL_REQUEST]: 300, // Worth $300
  [CONVERSION_GOALS.PRICING_PAGE_VIEW]: 100, // Worth $100
  [CONVERSION_GOALS.SERVICE_PAGE_VIEW]: 75, // Worth $75
  [CONVERSION_GOALS.PHONE_CALL]: 400, // Worth $400
  [CONVERSION_GOALS.EMAIL_CLICK]: 200, // Worth $200
}

// Lead Scoring Configuration
export const LEAD_SCORING = {
  // High-Value Actions
  FREE_STRATEGY_SESSION: 100,
  CONTACT_FORM_SUBMISSION: 75,
  PRICING_PAGE_VIEW: 50,
  SERVICE_PAGE_VIEW: 25,
  
  // Engagement Actions
  CTA_BUTTON_CLICK: 30,
  SCROLL_DEPTH_75: 20,
  TIME_ON_PAGE_2MIN: 15,
  
  // Business Actions
  PHONE_CALL: 80,
  EMAIL_CLICK: 40,
  CASE_STUDY_VIEW: 35,
  BLOG_READ: 10
}

// Funnel Stages
export const FUNNEL_STAGES = {
  AWARENESS: 'awareness',
  INTEREST: 'interest',
  CONSIDERATION: 'consideration',
  INTENT: 'intent',
  CONVERSION: 'conversion',
  RETENTION: 'retention'
}

// UTM Parameter Mapping
export const UTM_PARAMETERS = {
  SOURCE: 'utm_source',
  MEDIUM: 'utm_medium',
  CAMPAIGN: 'utm_campaign',
  TERM: 'utm_term',
  CONTENT: 'utm_content'
}

// Page Performance Thresholds
export const PERFORMANCE_THRESHOLDS = {
  LOAD_TIME_FAST: 2000, // 2 seconds
  LOAD_TIME_ACCEPTABLE: 4000, // 4 seconds
  LOAD_TIME_SLOW: 8000, // 8 seconds
  
  BOUNCE_RATE_GOOD: 30, // 30%
  BOUNCE_RATE_ACCEPTABLE: 50, // 50%
  BOUNCE_RATE_POOR: 70, // 70%
  
  CONVERSION_RATE_GOOD: 5, // 5%
  CONVERSION_RATE_ACCEPTABLE: 2, // 2%
  CONVERSION_RATE_POOR: 1, // 1%
}

// Error Tracking
export const ERROR_TYPES = {
  FORM_VALIDATION: 'form_validation_error',
  NETWORK_ERROR: 'network_error',
  JAVASCRIPT_ERROR: 'javascript_error',
  PAGE_NOT_FOUND: 'page_not_found',
  SERVER_ERROR: 'server_error'
}

// A/B Testing Configuration
export const AB_TEST_CONFIG = {
  CTA_BUTTON_TEXT: 'cta_button_text',
  FORM_LAYOUT: 'form_layout',
  PRICING_DISPLAY: 'pricing_display',
  HEADLINE_VARIATION: 'headline_variation',
  COLOR_SCHEME: 'color_scheme'
}

// Export all configurations
const analyticsConfig = {
  GA_TRACKING_ID,
  CONVERSION_GOALS,
  EVENT_CATEGORIES,
  EVENT_ACTIONS,
  CUSTOM_DIMENSIONS,
  CUSTOM_METRICS,
  CONVERSION_VALUES,
  LEAD_SCORING,
  FUNNEL_STAGES,
  UTM_PARAMETERS,
  PERFORMANCE_THRESHOLDS,
  ERROR_TYPES,
  AB_TEST_CONFIG
}

export default analyticsConfig
