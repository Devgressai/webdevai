#!/bin/bash

# Convert image to WebP format and save to Desktop/Webvello folder

if [ -z "$1" ]; then
    echo "Usage: ./convert-to-webp.sh <image-file-path>"
    echo "Example: ./convert-to-webp.sh ~/Desktop/image.jpg"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_DIR="$HOME/Desktop/Webvello"
OUTPUT_FILE="$OUTPUT_DIR/$(basename "$INPUT_FILE" | sed 's/\.[^.]*$//').webp"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: File not found: $INPUT_FILE"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Convert to WebP using cwebp
if command -v cwebp &> /dev/null; then
    echo "Converting $INPUT_FILE to WebP..."
    cwebp -q 90 "$INPUT_FILE" -o "$OUTPUT_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✓ Success! Converted image saved to: $OUTPUT_FILE"
        ls -lh "$OUTPUT_FILE"
    else
        echo "✗ Conversion failed"
        exit 1
    fi
else
    echo "Error: cwebp not found. Please install webp tools."
    exit 1
fi

