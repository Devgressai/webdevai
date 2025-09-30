#!/bin/bash

# Overnight Content Generation Master Script
# This script provides options for running different overnight content generation tasks

echo "🚀 Web Vello Overnight Content Generator"
echo "========================================"
echo ""
echo "Choose your overnight task:"
echo ""
echo "1. Generate City-Industry-Service Pages (Recommended)"
echo "   - Creates 1000+ city-industry-service combinations"
echo "   - Runs for 8 hours"
echo "   - Generates 1-2 pages per minute"
echo ""
echo "2. Generate Blog Posts"
echo "   - Creates 100+ SEO-optimized blog posts"
echo "   - Runs for 6 hours"
echo "   - Generates 20 posts per hour"
echo ""
echo "3. Run Both (Maximum Content Generation)"
echo "   - Runs both generators simultaneously"
echo "   - Creates 1000+ pages + 100+ blog posts"
echo "   - Runs for 8 hours"
echo ""
echo "4. Quick Test Run (30 minutes)"
echo "   - Tests the system with limited content"
echo "   - Good for testing before overnight run"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🎯 Starting City-Industry-Service Page Generation..."
        echo "⏰ This will run for 8 hours. Press Ctrl+C to stop early."
        echo ""
        node scripts/overnight-content-generator.js
        ;;
    2)
        echo "📝 Starting Blog Post Generation..."
        echo "⏰ This will run for 6 hours. Press Ctrl+C to stop early."
        echo ""
        node scripts/overnight-blog-generator.js
        ;;
    3)
        echo "🚀 Starting Maximum Content Generation..."
        echo "⏰ This will run for 8 hours. Press Ctrl+C to stop early."
        echo ""
        echo "Starting both generators in parallel..."
        node scripts/overnight-content-generator.js &
        node scripts/overnight-blog-generator.js &
        wait
        ;;
    4)
        echo "🧪 Starting Quick Test Run..."
        echo "⏰ This will run for 30 minutes."
        echo ""
        # Modify the config for quick test
        CONFIG_MAX_RUNTIME=30*60*1000 node scripts/overnight-content-generator.js
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1-4."
        exit 1
        ;;
esac

echo ""
echo "🎉 Overnight generation complete!"
echo "📊 Check the log files for detailed results:"
echo "   - overnight-generation.log"
echo "   - overnight-blog-generation.log"
echo ""
echo "📈 Next steps:"
echo "   1. Review the generated content"
echo "   2. Commit and push changes to GitHub"
echo "   3. Monitor search rankings and traffic"
echo ""
