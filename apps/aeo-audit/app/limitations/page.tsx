import { getRubricVersionString, getPromptHash } from '@/lib/utils/versioning'

export default function LimitationsPage() {
  const rubricVersion = getRubricVersionString()
  const promptHash = getPromptHash()

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-50">Limitations</h1>
        <p className="mt-2 text-slate-400">
          What this audit does not measure and what it cannot guarantee.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            What We Do Not Measure
          </h2>
          <div className="space-y-4 text-slate-300">
            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                Search Engine Rankings
              </h3>
              <p className="text-sm">
                This audit does not measure, predict, or guarantee search engine
                rankings. Search engine ranking algorithms are proprietary and
                constantly changing. Factors beyond technical optimization (content
                quality, user signals, domain authority, competition, etc.) heavily
                influence rankings. A high readiness score does not guarantee high
                rankings, and a low score does not necessarily mean poor rankings.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                Proprietary AI Ranking Systems
              </h3>
              <p className="text-sm">
                We do not claim to measure or predict how proprietary AI systems
                (such as ChatGPT, Google's AI Overview, Perplexity, etc.) will rank
                or feature your content. These systems use proprietary algorithms,
                training data, and ranking factors that are not publicly disclosed.
                Our audit measures technical signals that may help with AI readiness,
                but we make no claims about specific AI system behavior.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                Content Quality or Relevance
              </h3>
              <p className="text-sm">
                While we measure content structure (headings, word count, lists),
                we do not evaluate content quality, accuracy, relevance, or
                user value. A page can have perfect technical optimization but
                poor content, or excellent content with technical issues. Content
                quality is subjective and requires human evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                User Experience (UX)
              </h3>
              <p className="text-sm">
                We do not measure user experience factors such as page load speed
                (beyond basic timing), visual design, accessibility (beyond basic
                alt text), mobile usability, or user engagement metrics. While
                technical optimization can support good UX, UX requires separate
                evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                Business Metrics
              </h3>
              <p className="text-sm">
                This audit does not measure business outcomes such as traffic,
                conversions, revenue, or ROI. Technical optimization is one factor
                among many that can influence business metrics, but correlation
                does not imply causation.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                Real-Time Performance
              </h3>
              <p className="text-sm">
                The audit captures a snapshot of your website at a specific point in
                time. It does not monitor real-time performance, uptime, or
                continuous availability. Websites change frequently, and this audit
                reflects the state at the time of the scan.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            What We Cannot Guarantee
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              This audit tool provides technical measurements and recommendations
              based on best practices for answer engine optimization and AI readiness.
              However, we cannot guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Ranking Improvements:</strong> No guarantee that implementing
                recommendations will improve search rankings or AI system visibility
              </li>
              <li>
                <strong>Traffic Increases:</strong> No guarantee that optimization
                will lead to increased traffic or visibility
              </li>
              <li>
                <strong>AI System Inclusion:</strong> No guarantee that your content
                will be featured or cited by AI systems
              </li>
              <li>
                <strong>Answer Engine Features:</strong> No guarantee that your
                content will appear in answer boxes, featured snippets, or other
                answer engine features
              </li>
              <li>
                <strong>Future-Proofing:</strong> No guarantee that current best
                practices will remain effective as algorithms and systems evolve
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Technical Limitations
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              The audit has the following technical limitations:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Static Analysis:</strong> We analyze HTML and structured data
                as they appear in the source code. Dynamic content loaded via
                JavaScript may not be captured unless browser rendering is used
              </li>
              <li>
                <strong>Sampling:</strong> For large websites, we may sample pages
                rather than analyzing every page. The sampling strategy is designed
                to be representative but may miss edge cases
              </li>
              <li>
                <strong>Rate Limiting:</strong> We respect robots.txt directives and
                implement crawl politeness (delays, concurrency limits). This may
                limit the depth or speed of analysis
              </li>
              <li>
                <strong>Schema Validation:</strong> We check for schema presence and
                basic validity, but do not perform comprehensive schema.org
                validation against all possible types and properties
              </li>
              <li>
                <strong>Content Language:</strong> We do not specifically evaluate
                content for multiple languages or internationalization beyond basic
                HTML lang attributes
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Scope Limitations
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              The audit focuses on technical optimization signals. It does not cover:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Social media optimization (beyond basic OG tags)</li>
              <li>Email marketing optimization</li>
              <li>Paid advertising optimization</li>
              <li>Local SEO (beyond basic schema markup)</li>
              <li>Video or image optimization (beyond basic alt text)</li>
              <li>Backlink analysis or link building</li>
              <li>Competitive analysis</li>
              <li>Content strategy or keyword research</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Interpretation Guidelines
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              When interpreting audit results:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Scores are relative:</strong> A score of 8/10 indicates
                good technical optimization relative to our rubric, not an absolute
                measure of quality
              </li>
              <li>
                <strong>Context matters:</strong> Different site types (corporate,
                e-commerce, blog) may have different optimization priorities
              </li>
              <li>
                <strong>Prioritize issues:</strong> Focus on high-severity issues
                first, as they may have the most impact
              </li>
              <li>
                <strong>Use as a baseline:</strong> The audit provides a baseline
                for improvement, not a final verdict on your website's performance
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Version Information
          </h2>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              This limitations document applies to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Rubric Version:</strong> {rubricVersion}
              </li>
              <li>
                <strong>Prompt Hash:</strong> {promptHash}
              </li>
            </ul>
            <p className="mt-3">
              For questions about methodology or limitations, refer to the
              Methodology page or contact your audit administrator.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

