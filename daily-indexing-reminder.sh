#!/bin/bash

# Daily Google Indexing Reminder Script
# Run this every day to submit 200 pages to Google Indexing API

echo "🚀 DAILY GOOGLE INDEXING REMINDER"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "submit-to-google-indexing.js" ]; then
    echo "❌ Error: submit-to-google-indexing.js not found"
    echo "Please run this script from the /Users/george/webdevai directory"
    exit 1
fi

# Check if service account file exists
if [ ! -f "/Users/george/Desktop/webvello-service-account.json" ]; then
    echo "❌ Error: Service account file not found"
    echo "Please ensure the Google service account JSON file is in the correct location"
    exit 1
fi

echo "✅ All files found"
echo ""

# Display current status
echo "📊 CURRENT STATUS:"
echo "Total Pages Available: 4,990"
echo "Daily Quota: 200 pages"
echo "Days to Complete: 25 days"
echo ""

# Ask for confirmation
read -p "🤔 Ready to submit 200 pages to Google Indexing API? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Starting Google Indexing API submission..."
    echo ""
    
    # Run the indexing script
    node submit-to-google-indexing.js
    
    echo ""
    echo "✅ Daily indexing complete!"
    echo "📝 Don't forget to update DAILY_INDEXING_STRATEGY.md with today's results"
    echo "🔄 Run this script again tomorrow for the next 200 pages"
else
    echo "⏸️  Indexing cancelled. Run this script when ready."
fi

echo ""
echo "📅 Next run: Tomorrow at the same time"
echo "📊 Progress: Check DAILY_INDEXING_STRATEGY.md for updates"
