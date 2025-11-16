#!/bin/bash

# Process multiple images from clipboard
OUTPUT_DIR="$HOME/Desktop/Webvello"
mkdir -p "$OUTPUT_DIR"

# List of image names to process
images=(
    "ai-marketing-services-screenshot"
    "development-services-screenshot"
    "conversion-optimization-screenshot"
    "problem-solvers-screenshot"
    "about-section-screenshot"
    "blog-page-screenshot"
    "software-development-hero-screenshot"
)

for img_name in "${images[@]}"; do
    echo "Processing $img_name..."
    
    # Save from clipboard
    osascript << EOF
tell application "Finder"
    try
        set imgData to (the clipboard as «class PNGf»)
        set desktopPath to (path to desktop as string)
        set filePath to desktopPath & "$img_name.png"
        set fileRef to open for access file filePath with write permission
        write imgData to fileRef
        close access fileRef
        return "SUCCESS"
    on error errMsg
        return "ERROR"
    end try
end tell
EOF
    
    # Convert to WebP if file exists
    if [ -f "$HOME/Desktop/$img_name.png" ]; then
        cwebp -q 90 "$HOME/Desktop/$img_name.png" -o "$OUTPUT_DIR/$img_name.webp" 2>&1
        echo "✓ Converted $img_name"
    fi
    
    echo "Please paste the next image and press Enter to continue..."
    read
done

echo "All images processed!"

