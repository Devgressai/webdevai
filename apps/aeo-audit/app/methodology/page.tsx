import { getRubricVersionString, getPromptHash } from '@/lib/utils/versioning'

export default function MethodologyPage() {
  const rubricVersion = getRubricVersionString()
  const promptHash = getPromptHash()

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-50">Methodology</h1>
        <p className="mt-2 text-slate-400">
          How the Search & AI Readiness Audit measures website optimization for
          answer engines and AI systems.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            What We Measure
          </h2>
          <div className="space-y-4 text-slate-300">
            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                1. Crawlability & Indexability
              </h3>
              <p className="text-sm">
                We assess whether search engines and AI systems can discover and
                access your content. This includes checking robots.txt compliance,
                sitemap presence and validity, HTTP status codes, redirect chains,
                and crawl budget efficiency. Pages that are blocked, return errors,
                or have excessive redirects receive lower scores.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                2. Structured Data & Schema Markup
              </h3>
              <p className="text-sm">
                We evaluate the presence, validity, and quality of structured data
                (JSON-LD, microdata, RDFa). This includes Organization schema,
                BreadcrumbList, FAQPage, Product schema, and other relevant types.
                Valid, well-formed structured data helps AI systems understand your
                content and entities.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                3. Answer Readiness
              </h3>
              <p className="text-sm">
                We measure how well your content is structured to answer specific
                questions. This includes FAQ sections, clear headings (H1-H3),
                sufficient word count, list formatting, and content organization.
                Pages that directly answer common queries receive higher scores.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                4. Entity Clarity
              </h3>
              <p className="text-sm">
                We assess how clearly your content defines and describes entities
                (organizations, products, services, locations). This includes
                canonical URLs, meta descriptions, title tags, and structured data
                that unambiguously identify what your page is about.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-slate-200 mb-2">
                5. Measurement & Evidence
              </h3>
              <p className="text-sm">
                All measurements are based on deterministic checks against extracted
                page data. We capture evidence (canonical URLs, schema blocks,
                meta tags, headings) and store it with redaction of sensitive data.
                Scores are calculated using a weighted rubric system with four
                pillars: Structured Data, Content Quality, Technical SEO, and
                AI Readiness.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Evidence Capture & Redaction
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              During the audit process, we capture evidence snippets from pages to
              support our findings. This evidence is automatically redacted to remove
              sensitive information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email addresses are redacted</li>
              <li>Phone numbers are redacted</li>
              <li>Street addresses are redacted</li>
              <li>Token-like query parameters (session tokens, API keys) are redacted</li>
              <li>Credit card numbers are redacted</li>
            </ul>
            <p className="mt-3">
              Evidence is stored in one of two modes based on configuration:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Full mode:</strong> Stores redacted excerpt snippets with
                content hashes
              </li>
              <li>
                <strong>Extract-only mode:</strong> Stores only hashes, selectors,
                and counts (no excerpt content)
              </li>
            </ul>
            <p className="mt-3">
              All evidence includes SHA256 content hashes for verification and
              redaction counts for compliance tracking.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Scoring Methodology
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Scores are calculated on a 0-5 scale for individual checks, which are
              then aggregated into category scores (0-100), pillar scores (0-100),
              and an overall readiness score (0-10, capped at 9.5). The scoring system
              uses weighted averages based on the rubric configuration.
            </p>
            <p>
              When issues are detected, scores are capped according to the severity
              of the issue. For example, missing critical structured data may cap
              the overall score regardless of other positive factors.
            </p>
            <p>
              The rubric defines four pillars with associated categories and checks.
              Each check has a weight, and each category and pillar has a weight,
              allowing for flexible scoring that can be adjusted for different site
              types (corporate, e-commerce, blog, etc.).
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Versioning & Reproducibility
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              All audits are versioned to ensure reproducibility and transparency:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Rubric Version:</strong> {rubricVersion} (defines checks,
                categories, pillars, and scoring weights)
              </li>
              <li>
                <strong>Prompt Hash:</strong> {promptHash} (identifies the LLM
                evaluation prompt template version)
              </li>
              <li>
                <strong>Scan Timestamp:</strong> Recorded for each audit run
              </li>
            </ul>
            <p className="mt-3">
              This versioning ensures that audits can be reproduced and compared
              over time, and that changes to the rubric or evaluation methodology
              are tracked and documented.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Data Sources
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              The audit uses the following data sources:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>HTML Content:</strong> Fetched directly from your website
                using standard HTTP requests
              </li>
              <li>
                <strong>Sitemaps:</strong> XML sitemaps and sitemap indexes
              </li>
              <li>
                <strong>Robots.txt:</strong> Crawl directives and sitemap references
              </li>
              <li>
                <strong>Structured Data:</strong> JSON-LD, microdata, and RDFa
                extracted from HTML
              </li>
              <li>
                <strong>Metadata:</strong> Title tags, meta descriptions, canonical
                URLs, OG tags, Twitter cards
              </li>
            </ul>
            <p className="mt-3">
              For Single Page Applications (SPAs) or pages with minimal initial HTML,
              we may use browser rendering (Playwright) to capture post-render content
              when heuristics indicate it's necessary.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

