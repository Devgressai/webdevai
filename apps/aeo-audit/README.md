# Search & AI Readiness Audit Tool

Internal tool for auditing websites for answer engine optimization (AEO) and AI readiness.

## Overview

This tool performs comprehensive scans of websites to assess:
- **Crawlability & Indexability**: Robots.txt, sitemaps, HTTP status codes
- **Structured Data**: JSON-LD, schema markup, validity
- **Answer Readiness**: FAQ sections, content structure, headings
- **Entity Clarity**: Canonical URLs, meta tags, structured data
- **AI Readiness**: Content quality, schema coverage, metadata completeness

## Installation

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Redis server

### Install Dependencies

```bash
cd apps/aeo-audit
npm install
```

### Install Playwright Browsers (for page rendering)

```bash
npx playwright install chromium
```

## Environment Setup

### Required Environment Variables

Create a `.env` file in `apps/aeo-audit/`:

```bash
# Required
DATABASE_URL=postgresql://user:password@localhost:5432/aeo_audit
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional - Authentication (set in production)
AEO_AUDIT_PASSWORD=your-secure-password-here

# Optional - Crawler Settings
MAX_PAGES=200
MAX_DEPTH=2
USER_AGENT=AEO-Audit/1.0 (+https://github.com/your-org/aeo-audit)

# Optional - Evidence Mode
EVIDENCE_MODE=full  # or extract-only

# Optional - Budget Limits
MAX_RENDERS=10
MAX_LLM_CALLS=50
MAX_TOKENS_PER_CALL=10000

# Optional - LLM Settings
LLM_PROVIDER=mock  # or openai, anthropic, google
LLM_MODEL=gpt-4
```

See `ENV.md` for complete documentation of all environment variables.

## Database Setup

### Generate Prisma Client

```bash
npm run db:generate
```

### Run Migrations

```bash
npm run db:migrate
```

This will:
- Create the database schema
- Run any pending migrations
- Seed the database (if seed script exists)

### Seed Database (Optional)

```bash
npm run db:seed
```

### Open Prisma Studio (Optional)

```bash
npm run db:studio
```

Opens Prisma Studio at `http://localhost:5555` for database inspection.

## Running the Application

### Development Mode (UI)

```bash
npm run dev
```

Starts the Next.js development server at `http://localhost:3000`.

**Note**: In development mode, if `AEO_AUDIT_PASSWORD` is not set, the tool is accessible without authentication.

### Production Mode (UI)

```bash
npm run build
npm start
```

Builds and starts the production server.

### Run Workers

Workers process jobs from the BullMQ queue. Run in a separate terminal:

```bash
npm run worker
```

This starts all workers:
- `scan_orchestrator` - Orchestrates scan workflow
- `url_discovery` - Discovers URLs from sitemaps/crawling
- `page_fetch` - Fetches page HTML
- `page_render_fallback` - Renders pages with Playwright (if needed)
- `extract_parse` - Extracts metadata and structured data
- `cluster_build` - Groups pages into clusters
- `check_runner` - Runs rubric checks and generates scores
- `llm_eval` - Evaluates pages with LLM (if configured)
- `report_build` - Builds final reports
- `scheduled_scan` - Handles scheduled scans
- `evidence_retention` - Purges old evidence

**Important**: Workers must be running to process scans. The UI can create scans, but workers process them.

### Run Tests

```bash
npm test
```

Runs all unit tests using Jest.

```bash
npm run test:watch
```

Runs tests in watch mode (re-runs on file changes).

## Development Workflow

### 1. Start Database and Redis

```bash
# PostgreSQL (if running locally)
# Ensure database is running and accessible

# Redis (if running locally)
redis-server
```

### 2. Set Up Environment

```bash
# Copy example env (if exists) or create .env
# Set DATABASE_URL, REDIS_URL, NEXT_PUBLIC_APP_URL
```

### 3. Run Migrations

```bash
npm run db:migrate
```

### 4. Start UI (Terminal 1)

```bash
npm run dev
```

### 5. Start Workers (Terminal 2)

```bash
npm run worker
```

### 6. Access Tool

Open `http://localhost:3000` in your browser.

- If `AEO_AUDIT_PASSWORD` is set, you'll be prompted for password
- If not set, you can access directly

## Project Structure

```
apps/aeo-audit/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── scans/             # Scan pages
│   ├── domains/           # Domain monitoring
│   ├── methodology/       # Methodology page
│   └── limitations/       # Limitations page
├── components/            # React components
├── config/               # Rubric configuration (JSON)
├── lib/                  # Core library code
│   ├── api/              # API protection utilities
│   ├── budget/            # Budget tracking
│   ├── check-runner/      # Check execution
│   ├── cluster-build/     # Page clustering
│   ├── crawl-politeness/  # Crawl politeness
│   ├── evidence/          # Evidence storage/redaction
│   ├── extract-parse/     # HTML extraction
│   ├── llm-eval/          # LLM evaluation
│   ├── monitoring/        # Monitoring/diffing
│   ├── page-fetch/        # Page fetching
│   ├── page-render/       # Playwright rendering
│   ├── queues/            # BullMQ queue system
│   ├── rubric/            # Rubric loader
│   ├── scans/             # Scan utilities
│   └── url-discovery/     # URL discovery
├── prisma/               # Database schema and migrations
├── scripts/               # Utility scripts
├── src/                   # Source code
│   └── config/           # Configuration system
└── __tests__/            # Test files
```

## Key Features

### Scan Workflow

1. **URL Discovery**: Fetches robots.txt, sitemaps, performs bounded crawl
2. **Page Fetching**: Fetches HTML with redirect tracking, respects robots.txt
3. **Page Rendering**: Optional Playwright rendering for SPAs
4. **Extraction**: Extracts metadata, structured data, content metrics
5. **Clustering**: Groups pages by template/signature
6. **Check Execution**: Runs rubric checks, calculates scores
7. **LLM Evaluation**: Optional AI evaluation of pages
8. **Report Generation**: Creates final report with scores and issues

### Budget Controls

- **Page Limits**: Maximum pages per scan
- **Render Limits**: Maximum Playwright renders
- **LLM Limits**: Maximum LLM calls and tokens
- **Automatic Truncation**: Inputs truncated to token limits

### Security

- **Authentication**: Password-based auth (MVP)
- **Security Headers**: CSP, X-Frame-Options, etc.
- **Noindex**: All pages marked as noindex
- **Evidence Redaction**: Automatic redaction of sensitive data

## API Endpoints

### Scan Management

- `POST /api/scans` - Create a new scan
- `GET /api/scans/compare?from=ID&to=ID` - Compare two scans
- `GET /api/scans/[scanId]/issues/[issueId]` - Get issue details
- `GET /api/scans/[scanId]/issues/[issueId]/export.csv` - Export affected URLs

### Authentication

- `POST /api/auth/login` - Authenticate with password
- `POST /api/auth/logout` - Logout

## Testing

### Run All Tests

```bash
npm test
```

### Run Specific Test File

```bash
npm test extraction.test.ts
npm test scoring.test.ts
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Test Coverage

```bash
npm test -- --coverage
```

See `__tests__/README.md` for test documentation.

## Troubleshooting

### Workers Not Processing Jobs

1. Check Redis is running: `redis-cli ping`
2. Check Redis URL in `.env`: `REDIS_URL=redis://localhost:6379`
3. Verify workers are running: `npm run worker`
4. Check queue status in Redis: `redis-cli KEYS bull:*`

### Database Connection Issues

1. Check PostgreSQL is running
2. Verify `DATABASE_URL` in `.env`
3. Run `npm run db:generate` to regenerate Prisma client
4. Check database exists: `psql -l | grep aeo_audit`

### Authentication Issues

1. **Dev Mode**: Don't set `AEO_AUDIT_PASSWORD` - tool is accessible
2. **Production**: Set `AEO_AUDIT_PASSWORD` - password required
3. Clear cookies if stuck: Browser DevTools → Application → Cookies

### Playwright Issues

1. Install browsers: `npx playwright install chromium`
2. Check `MAX_RENDERS` limit if renders failing
3. Verify Playwright is in dependencies: `npm list playwright`

## Documentation

- `ENV.md` - Environment variables reference
- `EVIDENCE.md` - Evidence redaction and retention
- `SECURITY_SUMMARY.md` - Security features
- `BUDGET_CONTROLS_SUMMARY.md` - Budget limits
- `COMPARE_SCANS_SUMMARY.md` - Compare scans feature
- `DATABASE_SETUP.md` - Database setup guide
- `__tests__/README.md` - Testing documentation

## Production Deployment

### Environment Variables

Set all required variables in production:
- `DATABASE_URL` - Production PostgreSQL
- `REDIS_URL` - Production Redis
- `NEXT_PUBLIC_APP_URL` - Public URL
- `AEO_AUDIT_PASSWORD` - Authentication password

### Build

```bash
npm run build
npm start
```

### Workers

Run workers as a separate process/service:

```bash
npm run worker
```

Or use a process manager like PM2:

```bash
pm2 start npm --name "aeo-audit-worker" -- run worker
```

### Database Migrations

Run migrations in production:

```bash
npm run db:migrate
```

**Note**: Use `prisma migrate deploy` for production (no interactive prompts).

## License

Internal tool - not for public distribution.
