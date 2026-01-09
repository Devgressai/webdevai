import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Code snippets for different page types
const codeSnippets = {
  default: `const webVello = {
  seo: "AI-Driven",
  geo: "Generative Engine Opt",
  results: "+300% Traffic"
}`,
  seo: `// SEO Optimization
await optimize({
  keywords: analyzeIntent(),
  content: generateAI(),
  rank: "Page 1"
})`,
  geo: `// GEO - AI Search
getFoundIn([
  "ChatGPT",
  "Perplexity", 
  "Google SGE"
])`,
  web: `// Web Development
<NextJS>
  <TailwindCSS />
  <TypeScript />
  <Performance />
</NextJS>`,
  contact: `// Let's Connect
sendMessage({
  to: "Web Vello",
  subject: "Growth",
  priority: "High"
})`,
}

// Stats to display
const stats = [
  { label: 'Traffic Growth', value: '+300%' },
  { label: 'AI Rankings', value: 'Top 10' },
  { label: 'Clients', value: '50+' },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters
    const title = searchParams.get('title') || 'Web Vello'
    const subtitle = searchParams.get('subtitle') || 'GEO & SEO Agency'
    const type = searchParams.get('type') || 'default'
    const showCode = searchParams.get('code') !== 'false'
    const showStats = searchParams.get('stats') !== 'false'
    
    // Get the appropriate code snippet
    const code = codeSnippets[type as keyof typeof codeSnippets] || codeSnippets.default

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#0f172a',
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)',
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.2)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-150px',
              left: '-150px',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
            }}
          />

          {/* Left side - Branding & Stats */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '60px',
              width: showCode ? '55%' : '100%',
              zIndex: 1,
            }}
          >
            {/* Logo placeholder - W icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                  marginRight: '20px',
                }}
              >
                <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'white' }}>W</span>
              </div>
              <span style={{ fontSize: '32px', fontWeight: '600', color: 'white' }}>webvello</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                margin: 0,
                marginBottom: '16px',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '28px',
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
                marginBottom: '40px',
                display: 'flex',
              }}
            >
              {subtitle}
            </p>

            {/* Stats row */}
            {showStats && (
              <div
                style={{
                  display: 'flex',
                  gap: '30px',
                }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '20px 24px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#10b981',
                        display: 'flex',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side - Code snippet */}
          {showCode && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45%',
                padding: '40px',
                zIndex: 1,
              }}
            >
              {/* Code window */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#1f2937',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  width: '100%',
                  maxWidth: '450px',
                }}
              >
                {/* Window header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 20px',
                    backgroundColor: '#111827',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Traffic lights */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#ef4444',
                        display: 'flex',
                      }}
                    />
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#eab308',
                        display: 'flex',
                      }}
                    />
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#22c55e',
                        display: 'flex',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      marginLeft: '16px',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      display: 'flex',
                    }}
                  >
                    webvello.ts
                  </span>
                </div>

                {/* Code content */}
                <div
                  style={{
                    display: 'flex',
                    padding: '24px',
                  }}
                >
                  {/* Line numbers */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginRight: '20px',
                      color: 'rgba(255, 255, 255, 0.3)',
                      fontSize: '16px',
                      fontFamily: 'monospace',
                      lineHeight: '1.8',
                    }}
                  >
                    {code.split('\n').map((_, i) => (
                      <span key={i} style={{ display: 'flex' }}>
                        {i + 1}
                      </span>
                    ))}
                  </div>

                  {/* Code */}
                  <pre
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontFamily: 'monospace',
                      lineHeight: '1.8',
                      color: '#10b981',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {code.split('\n').map((line, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'flex',
                          color: line.startsWith('//') 
                            ? '#6b7280' 
                            : line.includes('"') || line.includes("'")
                            ? '#fbbf24'
                            : line.includes(':') || line.includes('=')
                            ? '#60a5fa'
                            : '#10b981',
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </pre>
                </div>
              </div>

              {/* Typing indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  padding: '12px 20px',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    marginRight: '8px',
                    display: 'flex',
                  }}
                />
                <span style={{ fontSize: '14px', color: '#10b981', display: 'flex' }}>
                  AI-powered optimization running...
                </span>
              </div>
            </div>
          )}

          {/* Bottom gradient line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 50%, #8b5cf6 100%)',
              display: 'flex',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG Image generation error:', error)
    
    // Fallback simple image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e3a8a',
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
          }}
        >
          Web Vello
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }
}

