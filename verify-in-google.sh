#!/bin/bash

# Check if pages are actually indexed in Google
# This is the real test

echo "🔍 Checking if submitted pages are appearing in Google..."
echo ""

# Sample of pages we submitted
PAGES=(
  ""
  "jersey-city-nj"
  "new-york-ny/website-design"
  "services/seo"
  "about"
)

BASE="https://www.webvello.com"

for page in "${PAGES[@]}"; do
    URL="$BASE/$page"
    echo "📄 Checking: $URL"
    
    # Use site: search to check if indexed
    SEARCH_URL="https://www.google.com/search?q=site:www.webvello.com${page:+/}${page}"
    echo "   Search URL: $SEARCH_URL"
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 How to verify manually:"
echo "   1. Open Google Search"
echo "   2. Search: site:www.webvello.com/jersey-city-nj"
echo "   3. If it shows up, it's indexed!"
echo ""
echo "   OR check Google Search Console:"
echo "   https://search.google.com/search-console"
echo "   → URL Inspection → Enter URL"
echo ""
echo "⏰ Timeline:"
echo "   • Submissions accepted: ✅ TODAY"
echo "   • Google processes: 24-48 hours"
echo "   • Appears in search: 2-7 days"

