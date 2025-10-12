#!/bin/bash
echo "=== Google API Credentials Setup ==="
echo ""
echo "Paste the path to your JSON credentials file (or drag and drop it here):"
read -r json_file

# Remove quotes if dragged and dropped
json_file="${json_file//\'/}"
json_file="${json_file//\"/}"

if [ ! -f "$json_file" ]; then
    echo "❌ File not found: $json_file"
    exit 1
fi

echo ""
echo "Extracting credentials..."

# Extract service account email
email=$(grep -o '"client_email": *"[^"]*"' "$json_file" | cut -d'"' -f4)

# Extract private key (handle multiline)
private_key=$(grep -o '"private_key": *"[^"]*"' "$json_file" | sed 's/"private_key": *"//' | sed 's/"$//')

echo ""
echo "✅ Credentials extracted!"
echo ""
echo "Copy and paste this into your .env.local file:"
echo "=================================================="
echo ""
echo "GOOGLE_SERVICE_ACCOUNT_EMAIL=$email"
echo "GOOGLE_PRIVATE_KEY=\"$private_key\""
echo ""
echo "GOOGLE_SEARCH_CONSOLE_SITE_URL=https://webvello.com"
echo "API_SECRET_KEY=$(openssl rand -hex 32)"
echo "NEXT_PUBLIC_BASE_URL=https://webvello.com"
echo ""
echo "=================================================="
echo ""
echo "Service Account Email: $email"
echo ""
