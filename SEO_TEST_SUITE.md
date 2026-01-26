# SEO Test Suite

**Purpose:** Comprehensive tests to verify Phase 1 implementation and overall SEO health

---

## 1. Sitemap Validation Tests

### 1.1 Sitemap Structure
```bash
# Check sitemap is valid XML and accessible
curl -s http://localhost:3000/sitemap.xml | head -20

# Verify no /industry/ URLs (Phase 1 requirement)
curl -s http://localhost:3000/sitemap.xml | grep -E "/industry/" && echo "FAIL: Found /industry/ URLs" || echo "PASS: No /industry/ URLs"

# Count total URLs
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"

# Extract all URLs and check for duplicates
curl -s http://localhost:3000/sitemap.xml | grep -oE "<loc>[^<]+</loc>" | sort | uniq -d
```

### 1.2 Sitemap URL Status Codes
```bash
# Extract first 50 URLs and check status codes
curl -s http://localhost:3000/sitemap.xml | grep -oE "<loc>[^<]+</loc>" | sed -E "s#</?loc>##g" | head -50 | while read url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$code $url"
done | grep -v "^200"  # Show only non-200s
```

### 1.3 Sitemap IndexPolicy Compliance
```bash
# Verify all sitemap URLs would pass IndexPolicy
# (Manual check: sample URLs and verify they're indexable)
```

---

## 2. Robots & Indexing Tests

### 2.1 Robots.txt
```bash
# Fetch robots.txt
curl -s http://localhost:3000/robots.txt

# Verify sitemap reference
curl -s http://localhost:3000/robots.txt | grep -i sitemap

# Check disallowed paths
curl -s http://localhost:3000/robots.txt | grep -i "disallow"
```

### 2.2 Meta Robots Tags
```bash
# Check a Tier 1 page (should have index, follow)
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "robots"

# Check a Tier 3 page (should have noindex, follow)
curl -s http://localhost:3000/new-york-ny/industry/healthcare/fake-service | grep -i "robots"
```

### 2.3 Canonical URLs
```bash
# Verify canonical on a city-service page
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "canonical"

# Check canonical matches URL
curl -s http://localhost:3000/new-york-ny/web-development | grep -oE 'rel="canonical"[^>]+href="([^"]+)"' | grep "new-york-ny/web-development"
```

---

## 3. Route & 404 Tests

### 3.1 Invalid Routes Return 404
```bash
# Test invalid city+service
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/fake-city-xx/fake-service
# Expected: 404

# Test invalid city-industry-service
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/fake-city/industry/fake-industry/fake-service
# Expected: 404
```

### 3.2 Valid Routes Return 200
```bash
# Test valid city-service (Tier 1)
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/new-york-ny/web-development
# Expected: 200

# Test valid city hub
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/new-york-ny
# Expected: 200
```

### 3.3 generateStaticParams Coverage
```bash
# Verify all cityDataSlugs × keyServices combinations exist
# (This is a build-time check - verify during npm run build)
```

---

## 4. Content Quality Tests

### 4.1 Duplicate Content Detection
```bash
# Sample multiple city-service pages and check for identical content
# (Manual: Compare page titles, H1s, meta descriptions)
```

### 4.2 Content Binding Verification
```bash
# Check that city name appears in page content
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "new york" | head -5

# Check that service name appears
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "web development" | head -5
```

### 4.3 Missing Meta Tags
```bash
# Check for title tag
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "<title>"

# Check for meta description
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "meta.*description"

# Check for Open Graph tags
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "og:"
```

---

## 5. Performance & Technical SEO

### 5.1 Page Load Speed
```bash
# Use Lighthouse CLI (if installed)
npx lighthouse http://localhost:3000/new-york-ny/web-development --only-categories=performance --output=json

# Or use PageSpeed Insights API
```

### 5.2 Core Web Vitals
```bash
# Check for Core Web Vitals issues
# (Use browser DevTools or Lighthouse)
```

### 5.3 Mobile-Friendliness
```bash
# Check viewport meta tag
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "viewport"

# Test responsive design (manual browser check)
```

### 5.4 Structured Data
```bash
# Check for JSON-LD or microdata
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "application/ld+json"

# Validate with Google's Rich Results Test
```

---

## 6. IndexPolicy Verification

### 6.1 Tier 1 Pages (Always Index)
```bash
# Core pages
curl -s http://localhost:3000 | grep -i "robots" | grep -i "noindex" && echo "FAIL" || echo "PASS"

# Service pages
curl -s http://localhost:3000/services/web-development | grep -i "robots" | grep -i "noindex" && echo "FAIL" || echo "PASS"

# City-service (Tier 1 services only)
curl -s http://localhost:3000/new-york-ny/web-development | grep -i "robots" | grep -i "noindex" && echo "FAIL" || echo "PASS"
```

### 6.2 Tier 3 Pages (Noindex)
```bash
# City-industry hubs
curl -s http://localhost:3000/new-york-ny/industry/healthcare | grep -i "robots" | grep -i "noindex" && echo "PASS" || echo "FAIL"
```

### 6.3 Canonical Consistency
```bash
# Verify canonical matches IndexPolicy output
# (Compare curl output with IndexPolicyService.getPolicy().canonical)
```

---

## 7. Production vs Local Comparison

### 7.1 Sitemap Comparison
```bash
# Compare localhost sitemap with production
curl -s http://localhost:3000/sitemap.xml > /tmp/sitemap-local.xml
curl -s https://www.webvello.com/sitemap.xml > /tmp/sitemap-prod.xml

# Count differences
diff <(grep -oE "<loc>[^<]+</loc>" /tmp/sitemap-local.xml | sort) <(grep -oE "<loc>[^<]+</loc>" /tmp/sitemap-prod.xml | sort)
```

### 7.2 URL Status Comparison
```bash
# Check if production URLs match local behavior
# (Sample URLs and compare status codes)
```

---

## 8. Automated Test Script

### 8.1 PowerShell Test Script (Windows)
```powershell
# Save as test-seo.ps1

$baseUrl = "http://localhost:3000"
$errors = @()

# Test 1: Sitemap accessible
try {
    $sitemap = Invoke-WebRequest -Uri "$baseUrl/sitemap.xml" -UseBasicParsing
    Write-Host "✓ Sitemap accessible"
} catch {
    $errors += "Sitemap not accessible"
    Write-Host "✗ Sitemap not accessible"
}

# Test 2: No /industry/ URLs in sitemap
$sitemapContent = $sitemap.Content
if ($sitemapContent -match "/industry/") {
    $errors += "Found /industry/ URLs in sitemap"
    Write-Host "✗ Found /industry/ URLs in sitemap"
} else {
    Write-Host "✓ No /industry/ URLs in sitemap"
}

# Test 3: Invalid route returns 404
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/fake-city-xx/fake-service" -Method Head -UseBasicParsing -ErrorAction Stop
    $errors += "Invalid route did not return 404"
    Write-Host "✗ Invalid route did not return 404"
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 404) {
        Write-Host "✓ Invalid route returns 404"
    } else {
        $errors += "Invalid route returned unexpected status"
        Write-Host "✗ Invalid route returned unexpected status"
    }
}

# Test 4: Valid Tier 1 route returns 200
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/new-york-ny/web-development" -Method Head -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✓ Valid Tier 1 route returns 200"
    } else {
        $errors += "Valid route returned non-200"
        Write-Host "✗ Valid route returned non-200"
    }
} catch {
    $errors += "Valid route failed"
    Write-Host "✗ Valid route failed"
}

# Summary
Write-Host "`n=== Test Summary ==="
if ($errors.Count -eq 0) {
    Write-Host "✓ All tests passed!" -ForegroundColor Green
} else {
    Write-Host "✗ $($errors.Count) test(s) failed:" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}
```

---

## 9. Google Search Console Tests

### 9.1 Sitemap Submission
- Submit sitemap to Google Search Console
- Monitor for errors/warnings
- Check indexing coverage

### 9.2 URL Inspection
- Use GSC URL Inspection tool
- Verify indexing status matches IndexPolicy
- Check for crawl errors

### 9.3 Coverage Report
- Review Coverage report in GSC
- Identify excluded URLs
- Verify noindex pages are correctly excluded

---

## 10. Lighthouse SEO Audit

### 10.1 Run Lighthouse
```bash
npx lighthouse http://localhost:3000/new-york-ny/web-development --only-categories=seo --output=json --output-path=./lighthouse-seo.json
```

### 10.2 Check Key Metrics
- Meta description present
- Title tag present and unique
- Canonical URL present
- Robots meta tag present
- Structured data valid
- Mobile-friendly
- Fast page load

---

## 11. Crawl Simulation

### 11.1 Screaming Frog (if available)
- Crawl localhost:3000
- Check for 404s
- Verify robots directives
- Check canonical URLs
- Identify duplicate content

### 11.2 Custom Crawler
```bash
# Simple recursive crawl (be careful with rate limiting)
# Use wget or curl with depth limit
```

---

## 12. Build-Time Tests

### 12.1 TypeScript Compilation
```bash
npm run build
# Check for TypeScript errors
# Verify all routes generate correctly
```

### 12.2 generateStaticParams Verification
```bash
# During build, verify:
# - All cityDataSlugs × keyServices combinations are generated
# - No invalid combinations
# - Total count matches expected
```

---

## 13. Monitoring & Alerts

### 13.1 Sitemap Size Monitoring
```bash
# Alert if sitemap exceeds 50,000 URLs (Google limit)
# Alert if sitemap size changes significantly
```

### 13.2 404 Rate Monitoring
```bash
# Track 404 rate from sitemap URLs
# Alert if 404 rate > 1%
```

### 13.3 Indexing Rate Monitoring
```bash
# Track indexing rate in Google Search Console
# Alert if indexing rate drops significantly
```

---

## 14. Quick Health Check Command

```powershell
# One-liner to check critical SEO health
$base = "http://localhost:3000"
Write-Host "=== SEO Health Check ==="
Write-Host "Sitemap: $((Invoke-WebRequest "$base/sitemap.xml" -UseBasicParsing).StatusCode)"
Write-Host "Robots: $((Invoke-WebRequest "$base/robots.txt" -UseBasicParsing).StatusCode)"
Write-Host "Invalid 404: $((try { (Invoke-WebRequest "$base/fake-city/fake-service" -Method Head -UseBasicParsing -ErrorAction Stop).StatusCode } catch { $_.Exception.Response.StatusCode.value__ }))"
Write-Host "Valid 200: $((Invoke-WebRequest "$base/new-york-ny/web-development" -Method Head -UseBasicParsing).StatusCode)"
```

---

## Priority Test Order

1. **Critical (Run Before Deploy):**
   - Sitemap structure (no /industry/ URLs)
   - Invalid routes return 404
   - Valid routes return 200
   - Robots directives correct

2. **High Priority (Run After Deploy):**
   - Sitemap URL status codes
   - Canonical URLs
   - Meta robots tags
   - Content binding

3. **Medium Priority (Weekly):**
   - Lighthouse SEO audit
   - Google Search Console review
   - Performance metrics

4. **Ongoing:**
   - Monitoring & alerts
   - Coverage reports
   - Indexing rate tracking
