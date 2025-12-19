# Database Setup Instructions

## Prerequisites

- PostgreSQL database (local or remote)
- Node.js and npm installed

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd apps/aeo-audit
npm install
```

### 2. Configure Database Connection

Create a `.env` file in `apps/aeo-audit/`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/aeo_audit?schema=public"
```

Replace:
- `user` with your PostgreSQL username
- `password` with your PostgreSQL password
- `localhost:5432` with your database host and port
- `aeo_audit` with your database name

### 3. Create Initial Migration

```bash
npm run db:migrate
```

When prompted for a migration name, enter: `init`

This will:
- Create the migration file in `prisma/migrations/`
- Apply the migration to your database
- Generate the Prisma Client automatically

### 4. Seed the Database

```bash
npm run db:seed
```

This inserts:
- ✅ 1 scan (completed status)
- ✅ 2 pages (homepage + about page)
- ✅ 1 issue (MISSING_SCHEMA)
- ✅ 1 evidence (schema check result)
- ✅ 1 cluster (Structured Data Issues)
- ✅ 1 LLM evaluation (readiness score)

### 5. Verify Setup

Open Prisma Studio to view the seeded data:

```bash
npm run db:studio
```

Navigate to http://localhost:5555 to browse your database.

## Schema Overview

### Models Created

1. **Scan** - Main scan records with status tracking
2. **Page** - Pages analyzed in each scan
3. **Evidence** - Evidence found on pages (schema, content, etc.)
4. **Issue** - Issues identified during scans
5. **Cluster** - Clusters for grouping related issues
6. **IssuePageMap** - Links issues to pages
7. **IssueClusterMap** - Links issues to clusters
8. **LlmEval** - LLM evaluation results

### Indices Created

- ✅ `scanId + url` on Page table
- ✅ `scanId + clusterId` on IssueClusterMap
- ✅ `issueCode + scanId` on Issue table
- ✅ `clusterId + scanId` on IssueClusterMap

## Troubleshooting

### Migration fails

- Ensure PostgreSQL is running
- Verify DATABASE_URL is correct
- Check database exists: `CREATE DATABASE aeo_audit;`

### Seed script fails

- Run `npm run db:generate` first
- Ensure migration was applied successfully
- Check database connection

### Prisma Client not found

```bash
npm run db:generate
```

## Next Steps

After setup, you can:
- View the seeded scan at `/scans/{scanId}` (ID printed after seeding)
- Use Prisma Client in your app: `import { PrismaClient } from '@prisma/client'`
- Create new migrations as schema evolves: `npm run db:migrate`

