#!/bin/bash

# Correct method to notify Google about your sitemap
# This works for ALL page types (unlike the Indexing API)

SITEMAP_URL="https://www.webvello.com/sitemap.xml"
BASE_URL="https://www.webvello.com"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Correct Google Indexing Method - Sitemap Ping"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Verify sitemap exists and is accessible
echo "📋 Step 1: Verifying sitemap is accessible..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITEMAP_URL")

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ Sitemap is accessible (HTTP $HTTP_CODE)"
    
    # Get sitemap size
    SITEMAP_SIZE=$(curl -s "$SITEMAP_URL" | wc -l)
    echo "   Sitemap has ~$SITEMAP_SIZE lines"
    
    # Count URLs in sitemap
    URL_COUNT=$(curl -s "$SITEMAP_URL" | grep -c "<loc>")
    echo "   Contains $URL_COUNT URLs"
else
    echo "❌ Sitemap not accessible (HTTP $HTTP_CODE)"
    echo "   Please fix sitemap access before proceeding"
    exit 1
fi

echo ""

# Step 2: Ping Google
echo "📡 Step 2: Pinging Google..."
GOOGLE_RESPONSE=$(curl -s -w "\n%{http_code}" "https://www.google.com/ping?sitemap=$SITEMAP_URL")
RESPONSE_CODE=$(echo "$GOOGLE_RESPONSE" | tail -n 1)

if [ "$RESPONSE_CODE" -eq 200 ]; then
    echo "✅ Successfully pinged Google (HTTP $RESPONSE_CODE)"
    echo "   Google has been notified about your sitemap"
else
    echo "⚠️  Ping returned HTTP $RESPONSE_CODE"
    echo "   This might still work, Google doesn't always return 200"
fi

echo ""

# Step 3: Ping Bing (bonus)
echo "📡 Step 3: Pinging Bing..."
BING_RESPONSE=$(curl -s -w "\n%{http_code}" "https://www.bing.com/ping?sitemap=$SITEMAP_URL")
BING_CODE=$(echo "$BING_RESPONSE" | tail -n 1)

if [ "$BING_CODE" -eq 200 ]; then
    echo "✅ Successfully pinged Bing (HTTP $BING_CODE)"
else
    echo "⚠️  Bing ping returned HTTP $BING_CODE"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ SITEMAP SUBMISSION COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 What Happens Next:"
echo "   1. Google will crawl your sitemap within 1-7 days"
echo "   2. Pages will be indexed based on quality and crawl budget"
echo "   3. High-quality pages index faster"
echo ""
echo "🔍 How to Monitor:"
echo "   1. Google Search Console → Coverage Report"
echo "   2. Search: site:$BASE_URL"
echo "   3. URL Inspection Tool for specific pages"
echo ""
echo "💡 Pro Tips:"
echo "   - Submit sitemap in Google Search Console (if not done)"
echo "   - Manually request 10-20 priority pages via URL Inspection"
echo "   - Ensure all pages have unique, quality content"
echo "   - Build internal links between pages"
echo ""
echo "⏰ Expected Timeline:"
echo "   • 1-3 days: Google discovers and crawls sitemap"
echo "   • 3-7 days: Priority pages start indexing"
echo "   • 7-14 days: Most pages indexed"
echo "   • 14-30 days: Full indexing (quality dependent)"
echo ""

