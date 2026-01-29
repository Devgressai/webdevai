#!/bin/bash
# Copy logo from Downloads to public folder
SOURCE="/Users/george/Downloads/ChatGPT Image Jan 28, 2026, 09_35_30 AM.png"
DEST="/Users/george/webdevai/public/webvello-logo.png"

echo "Copying logo file..."
cp "$SOURCE" "$DEST" && echo "✅ Success! Logo copied to public/webvello-logo.png" || echo "❌ Failed to copy. Please check file permissions."
