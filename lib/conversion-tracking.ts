// Advanced Conversion Tracking System
export interface ConversionEvent {
  eventName: string
  eventCategory: string
  eventAction: string
  eventLabel?: string
  value?: number
  currency?: string
  customParameters?: { [key: string]: any }
  timestamp: number
  sessionId: string
  userId?: string
  pageUrl: string
  referrer?: string
}

export interface ConversionGoal {
  id: string
  name: string
  type: 'page_view' | 'click' | 'form_submit' | 'download' | 'purchase' | 'custom'
  target: string
  value: number
  currency: string
  isActive: boolean
  createdAt: number
}

export interface ConversionFunnel {
  id: string
  name: string
  steps: Array<{
    id: string
    name: string
    url?: string
    selector?: string
    event?: string
    isRequired: boolean
  }>
  conversionRate: number
  dropOffPoints: Array<{
    step: string
    dropOffRate: number
    commonIssues: string[]
  }>
}

// Conversion tracking class
export class ConversionTracker {
  private goals: ConversionGoal[] = []
  private funnels: ConversionFunnel[] = []
  private sessionId: string
  private userId?: string

  constructor() {
    this.sessionId = this.generateSessionId()
    this.loadStoredData()
    this.initializeTracking()
  }

  // Initialize tracking
  private initializeTracking() {
    // Track page views
    this.trackPageView()

    // Track form submissions
    this.trackFormSubmissions()

    // Track button clicks
    this.trackButtonClicks()

    // Track downloads
    this.trackDownloads()

    // Track scroll depth
    this.trackScrollDepth()

    // Track time on page
    this.trackTimeOnPage()

    // Track exit intent
    this.trackExitIntent()
  }

  // Track page view
  private trackPageView() {
    const event: ConversionEvent = {
      eventName: 'page_view',
      eventCategory: 'engagement',
      eventAction: 'view',
      eventLabel: document.title,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      pageUrl: window.location.href,
      referrer: document.referrer
    }

    this.sendEvent(event)
  }

  // Track form submissions
  private trackFormSubmissions() {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement
      const formId = form.id || form.className || 'unknown'
      
      const conversionEvent: ConversionEvent = {
        eventName: 'form_submit',
        eventCategory: 'conversion',
        eventAction: 'submit',
        eventLabel: formId,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        pageUrl: window.location.href,
        customParameters: {
          formFields: this.getFormFields(form)
        }
      }

      this.sendEvent(conversionEvent)
    })
  }

  // Track button clicks
  private trackButtonClicks() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const button = target.closest('button, a[role="button"], input[type="button"], input[type="submit"]')
      
      if (button) {
        const buttonText = button.textContent?.trim() || button.getAttribute('aria-label') || 'unknown'
        const buttonClass = button.className || 'unknown'
        
        const conversionEvent: ConversionEvent = {
          eventName: 'button_click',
          eventCategory: 'engagement',
          eventAction: 'click',
          eventLabel: `${buttonClass}: ${buttonText}`,
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          pageUrl: window.location.href,
          customParameters: {
            buttonText,
            buttonClass,
            buttonId: button.id
          }
        }

        this.sendEvent(conversionEvent)
      }
    })
  }

  // Track downloads
  private trackDownloads() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (link && this.isDownloadLink(link.href)) {
        const fileName = link.href.split('/').pop() || 'unknown'
        
        const conversionEvent: ConversionEvent = {
          eventName: 'download',
          eventCategory: 'conversion',
          eventAction: 'download',
          eventLabel: fileName,
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          pageUrl: window.location.href,
          customParameters: {
            fileName,
            fileUrl: link.href
          }
        }

        this.sendEvent(conversionEvent)
      }
    })
  }

  // Track scroll depth
  private trackScrollDepth() {
    let maxScrollDepth = 0
    const scrollThresholds = [25, 50, 75, 90, 100]
    const trackedThresholds = new Set<number>()

    const trackScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
      }

      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          
          const conversionEvent: ConversionEvent = {
            eventName: 'scroll_depth',
            eventCategory: 'engagement',
            eventAction: 'scroll',
            eventLabel: `${threshold}%`,
            value: threshold,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            userId: this.userId,
            pageUrl: window.location.href
          }

          this.sendEvent(conversionEvent)
        }
      })
    }

    window.addEventListener('scroll', trackScroll, { passive: true })
  }

  // Track time on page
  private trackTimeOnPage() {
    const startTime = Date.now()
    const timeThresholds = [30, 60, 120, 300, 600] // seconds
    const trackedTimes = new Set<number>()

    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      
      timeThresholds.forEach(threshold => {
        if (timeOnPage >= threshold && !trackedTimes.has(threshold)) {
          trackedTimes.add(threshold)
          
          const conversionEvent: ConversionEvent = {
            eventName: 'time_on_page',
            eventCategory: 'engagement',
            eventAction: 'time',
            eventLabel: `${threshold}s`,
            value: threshold,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            userId: this.userId,
            pageUrl: window.location.href
          }

          this.sendEvent(conversionEvent)
        }
      })
    }

    setInterval(trackTime, 1000)
  }

  // Track exit intent
  private trackExitIntent() {
    let exitIntentTracked = false

    const trackExitIntent = (event: MouseEvent) => {
      if (exitIntentTracked) return
      
      if (event.clientY <= 0) {
        exitIntentTracked = true
        
        const conversionEvent: ConversionEvent = {
          eventName: 'exit_intent',
          eventCategory: 'engagement',
          eventAction: 'exit',
          eventLabel: 'mouse_leave',
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          pageUrl: window.location.href
        }

        this.sendEvent(conversionEvent)
      }
    }

    document.addEventListener('mouseleave', trackExitIntent)
  }

  // Custom event tracking
  trackCustomEvent(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel?: string,
    value?: number,
    customParameters?: { [key: string]: any }
  ) {
    const conversionEvent: ConversionEvent = {
      eventName,
      eventCategory,
      eventAction,
      eventLabel,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      pageUrl: window.location.href,
      customParameters
    }

    this.sendEvent(conversionEvent)
  }

  // Track conversion goal
  trackConversionGoal(goalId: string, value?: number) {
    const goal = this.goals.find(g => g.id === goalId)
    if (!goal || !goal.isActive) return

    const conversionEvent: ConversionEvent = {
      eventName: 'conversion_goal',
      eventCategory: 'conversion',
      eventAction: 'goal_complete',
      eventLabel: goal.name,
      value: value || goal.value,
      currency: goal.currency,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      pageUrl: window.location.href,
      customParameters: {
        goalId: goal.id,
        goalType: goal.type
      }
    }

    this.sendEvent(conversionEvent)
  }

  // Track funnel step
  trackFunnelStep(funnelId: string, stepId: string) {
    const funnel = this.funnels.find(f => f.id === funnelId)
    if (!funnel) return

    const step = funnel.steps.find(s => s.id === stepId)
    if (!step) return

    const conversionEvent: ConversionEvent = {
      eventName: 'funnel_step',
      eventCategory: 'conversion',
      eventAction: 'step_complete',
      eventLabel: step.name,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      pageUrl: window.location.href,
      customParameters: {
        funnelId: funnel.id,
        stepId: step.id,
        stepName: step.name
      }
    }

    this.sendEvent(conversionEvent)
  }

  // Send event to analytics
  private sendEvent(event: ConversionEvent) {
    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.eventAction, {
        event_category: event.eventCategory,
        event_label: event.eventLabel,
        value: event.value,
        custom_map: event.customParameters
      })
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event)

    // Store locally for debugging
    this.storeEvent(event)
  }

  // Send to custom analytics endpoint
  private sendToCustomEndpoint(event: ConversionEvent) {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      console.error('Error sending analytics event:', error)
    })
  }

  // Store event locally
  private storeEvent(event: ConversionEvent) {
    const events = this.getStoredEvents()
    events.push(event)
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100)
    }
    
    localStorage.setItem('conversion_events', JSON.stringify(events))
  }

  // Get stored events
  private getStoredEvents(): ConversionEvent[] {
    try {
      const stored = localStorage.getItem('conversion_events')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }

  // Load stored data
  private loadStoredData() {
    // Load goals
    try {
      const storedGoals = localStorage.getItem('conversion_goals')
      if (storedGoals) {
        this.goals = JSON.parse(storedGoals)
      }
    } catch {
      this.goals = []
    }

    // Load funnels
    try {
      const storedFunnels = localStorage.getItem('conversion_funnels')
      if (storedFunnels) {
        this.funnels = JSON.parse(storedFunnels)
      }
    } catch {
      this.funnels = []
    }
  }

  // Add conversion goal
  addConversionGoal(goal: ConversionGoal) {
    this.goals.push(goal)
    localStorage.setItem('conversion_goals', JSON.stringify(this.goals))
  }

  // Add conversion funnel
  addConversionFunnel(funnel: ConversionFunnel) {
    this.funnels.push(funnel)
    localStorage.setItem('conversion_funnels', JSON.stringify(this.funnels))
  }

  // Get conversion analytics
  getConversionAnalytics() {
    const events = this.getStoredEvents()
    const now = Date.now()
    const last24Hours = events.filter(e => now - e.timestamp < 24 * 60 * 60 * 1000)
    const last7Days = events.filter(e => now - e.timestamp < 7 * 24 * 60 * 60 * 1000)

    return {
      totalEvents: events.length,
      last24Hours: last24Hours.length,
      last7Days: last7Days.length,
      conversionRate: this.calculateConversionRate(events),
      topEvents: this.getTopEvents(events),
      funnelAnalytics: this.getFunnelAnalytics(events)
    }
  }

  // Calculate conversion rate
  private calculateConversionRate(events: ConversionEvent[]): number {
    const totalPageViews = events.filter(e => e.eventName === 'page_view').length
    const conversions = events.filter(e => e.eventCategory === 'conversion').length
    
    return totalPageViews > 0 ? (conversions / totalPageViews) * 100 : 0
  }

  // Get top events
  private getTopEvents(events: ConversionEvent[]) {
    const eventCounts: { [key: string]: number } = {}
    
    events.forEach(event => {
      const key = `${event.eventCategory}:${event.eventAction}`
      eventCounts[key] = (eventCounts[key] || 0) + 1
    })

    return Object.entries(eventCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }))
  }

  // Get funnel analytics
  private getFunnelAnalytics(events: ConversionEvent[]) {
    const funnelEvents = events.filter(e => e.eventName === 'funnel_step')
    const funnelData: { [key: string]: { [key: string]: number } } = {}

    funnelEvents.forEach(event => {
      const funnelId = event.customParameters?.funnelId
      const stepId = event.customParameters?.stepId
      
      if (funnelId && stepId) {
        if (!funnelData[funnelId]) {
          funnelData[funnelId] = {}
        }
        funnelData[funnelId][stepId] = (funnelData[funnelId][stepId] || 0) + 1
      }
    })

    return funnelData
  }

  // Helper methods
  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }

  private isDownloadLink(url: string): boolean {
    const downloadExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar', '.exe', '.dmg']
    return downloadExtensions.some(ext => url.toLowerCase().includes(ext))
  }

  private getFormFields(form: HTMLFormElement): { [key: string]: string } {
    const fields: { [key: string]: string } = {}
    const formData = new FormData(form)
    
    for (const [key, value] of formData.entries()) {
      fields[key] = value.toString()
    }
    
    return fields
  }
}

// Global conversion tracker instance
export const conversionTracker = new ConversionTracker()

// React hook for conversion tracking
export function useConversionTracking() {
  return {
    trackCustomEvent: conversionTracker.trackCustomEvent.bind(conversionTracker),
    trackConversionGoal: conversionTracker.trackConversionGoal.bind(conversionTracker),
    trackFunnelStep: conversionTracker.trackFunnelStep.bind(conversionTracker),
    getAnalytics: conversionTracker.getConversionAnalytics.bind(conversionTracker)
  }
}
