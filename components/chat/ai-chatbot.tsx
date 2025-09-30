'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '../ui/button'

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

interface LeadInfo {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
}

interface ChatbotProps {
  businessName?: string
  primaryColor?: string
  position?: 'bottom-right' | 'bottom-left'
}

export function AIChatbot({ 
  businessName = 'Web Vello',
  primaryColor = '#3b82f6',
  position = 'bottom-right'
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hi! I'm ${businessName}'s AI assistant. I can help you with:\n\n• SEO strategy & optimization\n• Web development questions\n• Digital marketing advice\n• Pricing & service information\n• Scheduling a consultation\n\nWhat can I help you with today?`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({})
  const [leadStep, setLeadStep] = useState<'none' | 'name' | 'email' | 'phone' | 'company' | 'service' | 'complete'>('none')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Lead collection helpers
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const extractLeadInfo = (text: string): Partial<LeadInfo> => {
    const info: Partial<LeadInfo> = {}
    
    // Extract email
    const emailMatch = text.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)
    if (emailMatch) info.email = emailMatch[0]
    
    // Extract phone (various formats)
    const phoneMatch = text.match(/(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/)
    if (phoneMatch) info.phone = phoneMatch[0]
    
    // Extract name (simple heuristic - first two words if no email/phone)
    if (!emailMatch && !phoneMatch) {
      const words = text.trim().split(/\s+/)
      if (words.length >= 2) {
        info.name = words.slice(0, 2).join(' ')
      }
    }
    
    return info
  }

  const startLeadCollection = () => {
    setLeadStep('name')
    const leadMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: "Great! I'd love to connect you with our team. Let me get some quick information:\n\n**What's your name?**",
      timestamp: new Date()
    }
    setMessages(prev => [...prev, leadMessage])
  }

  const processLeadStep = (userInput: string) => {
    const extracted = extractLeadInfo(userInput)
    const updatedLeadInfo = { ...leadInfo, ...extracted }
    setLeadInfo(updatedLeadInfo)

    switch (leadStep) {
      case 'name':
        if (extracted.name) {
          setLeadStep('email')
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `Nice to meet you, ${extracted.name}! What's your email address?`,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        } else {
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "I'd like to get your name. Could you please tell me your first and last name?",
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        }
        break

      case 'email':
        if (extracted.email && validateEmail(extracted.email)) {
          setLeadStep('phone')
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `Perfect! What's your phone number? (This helps us reach you faster)`,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        } else {
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "I need a valid email address. Please provide your email (e.g., john@company.com):",
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        }
        break

      case 'phone':
        if (extracted.phone && validatePhone(extracted.phone)) {
          setLeadStep('company')
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `Thanks! What company do you work for? (Optional - you can skip this)`,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        } else {
          const message: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "Please provide a valid phone number (e.g., 555-123-4567 or (555) 123-4567):",
            timestamp: new Date()
          }
          setMessages(prev => [...prev, message])
        }
        break

      case 'company':
        if (userInput.toLowerCase().includes('skip') || userInput.toLowerCase().includes('none')) {
          setLeadStep('service')
        } else {
          updatedLeadInfo.company = userInput.trim()
          setLeadStep('service')
        }
        
        const message: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `What service are you most interested in?\n\n• SEO & Local Search\n• Web Development\n• Digital Marketing\n• PPC Advertising\n• Other (please specify)`,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, message])
        break

      case 'service':
        updatedLeadInfo.service = userInput.trim()
        setLeadStep('complete')
        completeLeadCapture(updatedLeadInfo)
        break
    }
  }

  const completeLeadCapture = async (finalLeadInfo: LeadInfo) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages,
          leadCaptured: false,
          leadInfo: finalLeadInfo
        })
      })

      const data = await response.json()
      
      const successMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Perfect! I've got all your information:\n\n• **Name:** ${finalLeadInfo.name}\n• **Email:** ${finalLeadInfo.email}\n• **Phone:** ${finalLeadInfo.phone}\n• **Company:** ${finalLeadInfo.company || 'Not provided'}\n• **Service:** ${finalLeadInfo.service}\n\nOur team will reach out within 24 hours with detailed information and next steps. In the meantime, feel free to ask me any questions!`,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, successMessage])
      setLeadCaptured(true)
      setLeadStep('complete')
      
    } catch (error) {
      console.error('Lead capture error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've saved your information, but there was a technical issue. Please also contact us directly at contact@webvello.com to ensure we get your details.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const userInput = input.trim()
    setInput('')
    setIsLoading(true)

    try {
      // If we're in lead collection mode, process the lead step
      if (leadStep !== 'none' && leadStep !== 'complete') {
        processLeadStep(userInput)
        setIsLoading(false)
        return
      }

      // Call your AI API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          leadCaptured,
          leadInfo
        })
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

      // Check if we should start lead collection
      if (data.shouldCaptureLead && !leadCaptured && leadStep === 'none') {
        setTimeout(() => {
          startLeadCollection()
        }, 1000)
      }

      if (data.leadCaptured) {
        setLeadCaptured(true)
      }

    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at contact@webvello.com",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const positionClasses = position === 'bottom-right' 
    ? 'right-4 sm:right-6' 
    : 'left-4 sm:left-6'

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 group`}
          aria-label="Open chat"
        >
          <div className="relative">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: primaryColor }}
            >
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            {/* Pulse animation */}
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed ${positionClasses} z-50 transition-all duration-300 ${
            isMinimized ? 'bottom-4 sm:bottom-6' : 'bottom-4 sm:bottom-6'
          }`}
        >
          <div 
            className={`bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 ${
              isMinimized 
                ? 'w-80 h-16' 
                : 'w-[90vw] sm:w-96 h-[600px] sm:h-[650px]'
            }`}
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between p-4 rounded-t-lg text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{businessName} AI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Instant replies</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/10 rounded transition-colors"
                  aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-5 h-5" />
                  ) : (
                    <Minimize2 className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2.5 ${
                          message.role === 'user'
                            ? 'text-white'
                            : 'bg-white text-gray-800 shadow-sm'
                        }`}
                        style={message.role === 'user' ? { backgroundColor: primaryColor } : {}}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg px-4 py-3 shadow-sm">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t">
                  <div className="flex space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="px-4 py-2.5 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                      style={{ backgroundColor: primaryColor }}
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Powered by AI • Secure & Private
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

