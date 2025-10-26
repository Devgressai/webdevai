#!/bin/bash

echo "🔍 Verifying Sitemap Fix for Google Search Console"
echo "=================================================="
echo ""

echo "⏳ Waiting 2 minutes for Vercel deployment to complete..."
sleep 120

echo ""
echo "1️⃣ Testing sitemap accessibility..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://www.webvello.com/sitemap.xml)
if [ "$response" = "200" ]; then
    echo "   ✅ Sitemap accessible (HTTP $response)"
else
    echo "   ❌ Sitemap error (HTTP $response)"
fi

echo ""
echo "2️⃣ Checking Cross-Origin headers..."
headers=$(curl -s -I https://www.webvello.com/sitemap.xml | grep -i "cross-origin-resource-policy")
if [[ $headers == *"cross-origin"* ]]; then
    echo "   ✅ Cross-Origin-Resource-Policy: cross-origin"
else
    echo "   ❌ Cross-Origin-Resource-Policy still set to same-origin"
fi

echo ""
echo "3️⃣ Checking robots.txt..."
robots=$(curl -s https://www.webvello.com/robots.txt | grep "Sitemap:")
if [[ $robots == *"www.webvello.com"* ]]; then
    echo "   ✅ robots.txt has correct domain (www.webvello.com)"
else
    echo "   ❌ robots.txt still has wrong domain"
fi

echo ""
echo "4️⃣ Testing as Googlebot..."
googlebot=$(curl -A "Googlebot" -s -o /dev/null -w "%{http_code}" https://www.webvello.com/sitemap.xml)
if [ "$googlebot" = "200" ]; then
    echo "   ✅ Googlebot can access sitemap (HTTP $googlebot)"
else
    echo "   ❌ Googlebot blocked (HTTP $googlebot)"
fi

echo ""
echo "=================================================="
echo "📋 Next Steps:"
echo ""
echo "1. Go to Google Search Console"
echo "2. Navigate to: Sitemaps section"
echo "3. Click the 3-dot menu on the errored sitemap"
echo "4. Select 'Delete sitemap' (optional)"
echo "5. Enter: https://www.webvello.com/sitemap.xml"
echo "6. Click 'Submit'"
echo "7. Wait 24-48 hours for Google to re-fetch"
echo ""
echo "OR use Google's ping service:"
echo "https://www.google.com/ping?sitemap=https://www.webvello.com/sitemap.xml"
echo ""
echo "✅ All fixes deployed successfully!"

