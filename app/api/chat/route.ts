import { NextResponse } from 'next/server'
import { sendLeadNotification, saveLeadToDatabase } from '@/lib/email-service'

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = {
  services: {
    seo: {
      keywords: ['seo', 'search engine', 'ranking', 'google', 'optimization', 'organic'],
      response: "We offer comprehensive SEO services including:\n\n• Technical SEO audits\n• On-page optimization\n• Local SEO for 100 US cities\n• Content strategy\n• Link building\n• Performance tracking\n\nOur clients see an average 300%+ increase in organic traffic within 6 months. Would you like to schedule a free SEO audit?"
    },
    webdev: {
      keywords: ['website', 'web development', 'web design', 'build', 'create site', 'development'],
      response: "Our web development services include:\n\n• Custom website design\n• Next.js & React development\n• E-commerce solutions\n• Performance optimization\n• Mobile-first design\n• CMS integration\n\nWe build fast, modern websites that convert visitors into customers. Interested in seeing our portfolio?"
    },
    digital_marketing: {
      keywords: ['marketing', 'ads', 'ppc', 'social media', 'advertising'],
      response: "We provide full-stack digital marketing:\n\n• PPC advertising (Google, Bing)\n• Social media marketing\n• Content marketing\n• Email campaigns\n• Conversion optimization\n• Analytics & reporting\n\nOur data-driven approach ensures maximum ROI. Would you like to discuss your marketing goals?"
    },
    pricing: {
      keywords: ['price', 'cost', 'how much', 'pricing', 'budget', 'investment'],
      response: "Our pricing is transparent and flexible:\n\n**Starter Package:** $2,500/month\n• Basic SEO\n• Website maintenance\n• Monthly reporting\n\n**Growth Package:** $5,000/month\n• Advanced SEO\n• Content creation\n• PPC management\n\n**Enterprise:** Custom pricing\n• Full-service marketing\n• Dedicated account manager\n• Custom solutions\n\nWe can create a custom package for your needs. What's your monthly marketing budget?"
    },
    local_seo: {
      keywords: ['local', 'city', 'near me', 'location', 'area'],
      response: "We specialize in local SEO across 100 US cities!\n\n• Google My Business optimization\n• Local citations\n• City-specific content\n• Local link building\n• Review management\n\nWe help local businesses dominate their market. What city are you in?"
    }
  },
  common_questions: {
    timeline: {
      keywords: ['how long', 'timeline', 'when', 'time frame'],
      response: "Typical timelines:\n\n• SEO Results: 3-6 months for significant improvement\n• Website Development: 4-8 weeks\n• PPC Campaigns: Immediate traffic, optimize in 30 days\n\nWe provide detailed project timelines during consultation. Every project is unique!"
    },
    results: {
      keywords: ['results', 'guarantee', 'success', 'performance', 'roi'],
      response: "Our track record speaks for itself:\n\n• 300%+ average organic traffic increase\n• 500+ successful projects\n• 95% client retention rate\n• Industry-leading ROI\n\nWhile we can't guarantee specific rankings, we do guarantee our expertise and dedication. Want to see case studies?"
    },
    get_started: {
      keywords: ['start', 'begin', 'onboarding', 'first step', 'sign up'],
      response: "Getting started is easy:\n\n1. Schedule a free consultation\n2. We analyze your current situation\n3. Create a custom strategy\n4. You approve the plan\n5. We get to work!\n\nWould you like to schedule a consultation? I can connect you with our team."
    }
  }
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(request: Request) {
  try {
    const { messages, leadCaptured } = await request.json()
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    const lastMessage = messages[messages.length - 1]
    const userInput = lastMessage.content.toLowerCase()

    // Check if user provided email
    const emailMatch = lastMessage.content.match(EMAIL_REGEX)
    if (emailMatch && !leadCaptured) {
      // Save lead and send notification
      const leadData = {
        email: emailMatch[0],
        conversation: messages,
        timestamp: new Date(),
        source: 'ai-chatbot'
      }
      
      // Send email notification (runs in background)
      sendLeadNotification(leadData).catch(err => {
        console.error('Failed to send lead notification:', err)
      })
      
      // Save to database (if configured)
      await saveLeadToDatabase(leadData)

      return NextResponse.json({
        message: `Perfect! I've got your email (${emailMatch[0]}). Our team will reach out within 24 hours with detailed information.\n\nIn the meantime, would you like to:\n• Schedule a consultation: https://webvello.com/contact\n• Explore our services: https://webvello.com/services\n• See case studies: https://webvello.com/case-studies\n\nIs there anything else I can help you with?`,
        leadCaptured: true,
        shouldCaptureLead: false
      })
    }

    // Find matching response from knowledge base
    let response = null
    let shouldCaptureLead = false
    let matchCount = 0

    // Check services
    for (const [key, service] of Object.entries(KNOWLEDGE_BASE.services)) {
      const matches = service.keywords.filter(keyword => userInput.includes(keyword))
      if (matches.length > matchCount) {
        matchCount = matches.length
        response = service.response
        shouldCaptureLead = true
      }
    }

    // Check common questions
    for (const [key, question] of Object.entries(KNOWLEDGE_BASE.common_questions)) {
      const matches = question.keywords.filter(keyword => userInput.includes(keyword))
      if (matches.length > matchCount) {
        matchCount = matches.length
        response = question.response
        shouldCaptureLead = false
      }
    }

    // Default response if no match
    if (!response) {
      response = getDefaultResponse(userInput)
      shouldCaptureLead = true
    }

    // If this is the 3rd+ message and lead not captured, prompt for email
    if (messages.length >= 5 && !leadCaptured && !emailMatch) {
      shouldCaptureLead = true
    }

    return NextResponse.json({
      message: response,
      shouldCaptureLead: shouldCaptureLead && !leadCaptured,
      leadCaptured: false
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function getDefaultResponse(userInput: string): string {
  // Greeting responses
  if (/^(hi|hello|hey|good morning|good afternoon)/.test(userInput)) {
    return "Hello! Thanks for reaching out. I'm here to help you with SEO, web development, and digital marketing questions. What would you like to know about?"
  }

  // Thank you responses
  if (/thank/.test(userInput)) {
    return "You're welcome! Is there anything else I can help you with today?"
  }

  // General inquiry
  return "I'd be happy to help! We specialize in:\n\n• SEO & Local Search\n• Web Development\n• Digital Marketing\n• PPC Advertising\n\nWhat specific area interests you? Or would you like to schedule a free consultation to discuss your needs?"
}


