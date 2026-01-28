#!/bin/bash
# Script to copy the new logo image to the public folder

SOURCE="/Users/george/Downloads/ChatGPT Image Jan 28, 2026, 09_35_30 AM.png"
DEST="/Users/george/webdevai/public/webvello-logo.png"

if [ -f "$SOURCE" ]; then
  cp "$SOURCE" "$DEST"
  echo "✅ Logo copied successfully to public/webvello-logo.png"
else
  echo "❌ Source file not found: $SOURCE"
  echo "Please check the file path and try again."
fi
