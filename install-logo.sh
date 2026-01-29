#!/bin/bash
# Run this script to copy and install the logo
# This script uses your user permissions, so it should work

SOURCE="/Users/george/Downloads/ChatGPT Image Jan 28, 2026, 09_35_30 AM.png"
DEST="/Users/george/webdevai/public/webvello-logo.png"

echo "Installing logo..."
echo "Source: $SOURCE"
echo "Destination: $DEST"
echo ""

if [ -f "$SOURCE" ]; then
  cp "$SOURCE" "$DEST"
  if [ -f "$DEST" ]; then
    echo "✅ SUCCESS! Logo installed to public/webvello-logo.png"
    echo "The logo is now ready to use on your site."
  else
    echo "❌ Copy failed. Please check permissions."
  fi
else
  echo "❌ Source file not found."
  echo "Please make sure the file exists at: $SOURCE"
fi
