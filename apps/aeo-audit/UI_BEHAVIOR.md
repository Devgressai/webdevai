# Results UI Behavior Summary

## Overview

The scan results UI provides a comprehensive view of AEO readiness assessment with interactive issue management.

## Page: `/scans/[scanId]`

### Layout Structure

1. **Header**
   - Scan target URL
   - Scan ID display

2. **Overall Public Score Card**
   - Displays score 0-10 (capped at 9.5)
   - Formula: `(overallScore / 100) * 10`, max 9.5
   - Large, prominent display

3. **Pillar Bars Section**
   - One bar per pillar
   - Color-coded: Green (80+), Yellow (60+), Orange (40+), Red (<40)
   - Shows score out of 100
   - Animated progress bars

4. **Top Systemic Fixes + Templates Grid**
   - Left: Top 5 systemic fixes (sorted by priority score)
   - Right: Templates section (clusters)
   - Responsive: Stacks on mobile, side-by-side on desktop

5. **Issues Table**
   - Filterable table with all issues
   - Filters: Pillar, Severity, Scope, Cluster
   - Clickable rows open issue detail drawer

### Interactive Behavior

- **Click Issue Row**: Opens issue detail drawer
- **Click Top Fix**: Opens issue detail drawer
- **Filter Changes**: Instantly filters table (client-side)
- **Responsive**: Adapts to mobile/tablet/desktop

## Issue Detail Drawer

### Opening/Closing

- **Opens**: When clicking issue row or top fix
- **Closes**: Click backdrop, close button, or ESC key
- **Position**: Slides in from right side
- **Width**: Max 2xl (672px), full width on mobile
- **Scrollable**: Content scrolls if exceeds viewport

### Sections

1. **Header**
   - Issue title
   - Severity badge
   - Close button

2. **Claim** (Issue Description)
   - Full issue description from rubric
   - Issue code display

3. **Impact**
   - Affected count (pages/templates/site-wide)
   - Priority score

4. **Scope**
   - Scope type (site/cluster/page)
   - Template name (if cluster-level)

5. **Evidence**
   - Evidence snippets (truncated to 500 chars)
   - Evidence type labels
   - Source URL links (if available)
   - Multiple evidence items shown

6. **Fix Guidance**
   - Fix templates from rubric
   - Step-by-step instructions
   - Code examples (if available)
   - Multiple fix templates can be shown

7. **Acceptance Tests**
   - Checklist of acceptance criteria
   - Static list (same for all issues)

8. **Export CSV Button**
   - Downloads affected URLs as CSV
   - Filename: `issue-{issueCode}-urls.csv`
   - Falls back to API route if client-side export fails

### Data Loading

- **Lazy Load**: Issue detail loaded when drawer opens
- **API Call**: `/api/scans/[scanId]/issues/[issueId]`
- **Loading State**: Could show spinner (not implemented yet)
- **Error Handling**: Silent failure (logs to console)

## CSV Export

### Route: `/api/scans/[scanId]/issues/[issueId]/export.csv`

### Behavior

1. **URL Collection**:
   - Page-level: URLs from `IssuePageMap`
   - Cluster-level: URLs from cluster's `ClusterPageMap`
   - Site-level: All pages in scan

2. **CSV Format**:
   ```
   URL
   "https://example.com/page1"
   "https://example.com/page2"
   ```

3. **Response**:
   - Content-Type: `text/csv`
   - Content-Disposition: `attachment; filename="issue-{issueCode}-urls.csv"`
   - Triggers browser download

### Client-Side Export

- **Primary**: Uses client-side blob download if `affectedUrls` available
- **Fallback**: Opens API route in new tab if client-side fails

## Component Behavior

### PillarBar

- **Color Coding**: Dynamic based on score
- **Animation**: Smooth width transition (500ms)
- **Responsive**: Adapts to container width

### IssueTable

- **Filters**: Real-time filtering (no API calls)
- **Sorting**: Default by severity, then creation date
- **Hover**: Row highlights on hover
- **Click**: Opens drawer

### TopFixes

- **Sorting**: Priority score (desc), then affected count (desc)
- **Limit**: Top 5 only
- **Click**: Opens drawer
- **Scope Filter**: Only shows site/cluster scope

### TemplatesSection

- **Representative URLs**: Shows "best" representative URL
- **Clickable URLs**: Opens in new tab
- **Empty State**: Shows message if no templates

### IssueDetailDrawer

- **Backdrop**: Dark overlay with blur
- **Fixed Position**: Stays in viewport
- **Z-Index**: 50 (above other content)
- **Body Scroll Lock**: Prevents body scrolling when open
- **Responsive**: Full width on mobile

## Data Flow

### Server-Side (page.tsx)

1. Fetch latest report for scan
2. Fetch all issues with relations
3. Fetch clusters with representative pages
4. Load pillars from rubric
5. Calculate public score
6. Format data for client

### Client-Side (client.tsx)

1. Render static content
2. Handle drawer state
3. Fetch issue detail on demand
4. Handle filter interactions
5. Handle CSV export

### API Routes

1. **GET /api/scans/[scanId]/issues/[issueId]**
   - Returns full issue detail
   - Includes evidence, fix templates, affected URLs

2. **GET /api/scans/[scanId]/issues/[issueId]/export.csv**
   - Returns CSV file
   - Collects URLs based on scope

## Styling

- **Theme**: Dark (slate-950 background)
- **Colors**: Sky blue for links, color-coded severity
- **Borders**: Subtle slate-800 borders
- **Spacing**: Consistent 6-unit spacing
- **Typography**: Clear hierarchy with font weights

## Accessibility

- **Keyboard**: ESC closes drawer
- **Focus**: Drawer traps focus (could be enhanced)
- **ARIA**: Basic structure (could be enhanced)
- **Contrast**: High contrast text on dark background

## Performance

- **Initial Load**: Server-rendered, fast
- **Drawer**: Lazy loads issue detail
- **Filters**: Client-side, instant
- **CSV**: Server-generated, efficient

## Future Enhancements

- Loading states for drawer
- Error states for failed API calls
- Pagination for large issue lists
- Search functionality
- Bulk actions
- Issue status tracking
- Export all issues CSV

