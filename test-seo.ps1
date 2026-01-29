# SEO Health Check Script
# Run: .\test-seo.ps1

$baseUrl = "http://localhost:3000"
$errors = @()
$warnings = @()

Write-Host "=== SEO Health Check ===" -ForegroundColor Cyan
Write-Host ""

# Test 1: Sitemap accessible
Write-Host "1. Testing sitemap accessibility..." -NoNewline
try {
    $sitemap = Invoke-WebRequest -Uri "$baseUrl/sitemap.xml" -UseBasicParsing
    Write-Host " [PASS]" -ForegroundColor Green
} catch {
    $errors += "Sitemap not accessible at $baseUrl/sitemap.xml"
    Write-Host " [FAIL]" -ForegroundColor Red
    exit 1
}

# Test 2: No /industry/ URLs in sitemap (Phase 1 requirement)
Write-Host "2. Checking for /industry/ URLs in sitemap..." -NoNewline
$sitemapContent = $sitemap.Content
if ($sitemapContent -match "/industry/") {
    $errors += "Found /industry/ URLs in sitemap (should be absent in Phase 1)"
    Write-Host " [FAIL]" -ForegroundColor Red
} else {
    Write-Host " [PASS]" -ForegroundColor Green
}

# Test 3: Sitemap is valid XML
Write-Host "3. Validating sitemap XML structure..." -NoNewline
try {
    [xml]$xml = $sitemapContent
    $urlCount = ($xml.urlset.url | Measure-Object).Count
    Write-Host " [PASS] ($urlCount URLs)" -ForegroundColor Green
} catch {
    $errors += "Sitemap is not valid XML"
    Write-Host " [FAIL]" -ForegroundColor Red
}

# Test 4: Invalid route returns 404
Write-Host "4. Testing invalid route (fake-city-xx/fake-service)..." -NoNewline
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/fake-city-xx/fake-service" -Method Head -UseBasicParsing -ErrorAction Stop
    $errors += "Invalid route did not return 404 (got $($response.StatusCode))"
    Write-Host " [FAIL]" -ForegroundColor Red
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 404) {
        Write-Host " [PASS] (404)" -ForegroundColor Green
    } else {
        $code = $_.Exception.Response.StatusCode.value__
        $errors += "Invalid route returned unexpected status: $code"
        Write-Host " [FAIL] (got $code, expected 404)" -ForegroundColor Red
    }
}

# Test 5: Valid Tier 1 route returns 200
Write-Host "5. Testing valid Tier 1 route (new-york-ny/web-development)..." -NoNewline
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/new-york-ny/web-development" -Method Head -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host " [PASS] (200)" -ForegroundColor Green
    } else {
        $errors += "Valid route returned non-200: $($response.StatusCode)"
        Write-Host " [FAIL] (got $($response.StatusCode))" -ForegroundColor Red
    }
} catch {
    $errors += "Valid route failed: $($_.Exception.Message)"
    Write-Host " [FAIL]" -ForegroundColor Red
}

# Test 6: Robots.txt accessible
Write-Host "6. Testing robots.txt accessibility..." -NoNewline
try {
    $robots = Invoke-WebRequest -Uri "$baseUrl/robots.txt" -UseBasicParsing
    if ($robots.Content -match "sitemap") {
        Write-Host " [PASS]" -ForegroundColor Green
    } else {
        $warnings += "robots.txt does not reference sitemap"
        Write-Host " [WARN]" -ForegroundColor Yellow
    }
} catch {
    $warnings += "robots.txt not accessible"
    Write-Host " [WARN]" -ForegroundColor Yellow
}

# Test 7: Check for duplicate URLs in sitemap
Write-Host "7. Checking for duplicate URLs in sitemap..." -NoNewline
$urlMatches = [regex]::Matches($sitemapContent, '<loc>([^<]+)</loc>')
$urls = $urlMatches | ForEach-Object { $_.Groups[1].Value }
$uniqueUrls = $urls | Sort-Object | Get-Unique
$duplicateCount = $urls.Count - $uniqueUrls.Count
if ($duplicateCount -eq 0) {
    Write-Host " [PASS]" -ForegroundColor Green
} else {
    $warnings += "Found $duplicateCount duplicate URL(s) in sitemap"
    Write-Host " [WARN] ($duplicateCount duplicates)" -ForegroundColor Yellow
}

# Test 8: Sample sitemap URLs return 200
Write-Host "8. Sampling 10 sitemap URLs for status codes..." -NoNewline
$sampleUrls = $urls | Select-Object -First 10
$failedUrls = @()
foreach ($url in $sampleUrls) {
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
        if ($response.StatusCode -ne 200) {
            $failedUrls += "$url ($($response.StatusCode))"
        }
    } catch {
        $code = if ($_.Exception.Response) { $_.Exception.Response.StatusCode.value__ } else { "ERR" }
        $failedUrls += "$url ($code)"
    }
}
if ($failedUrls.Count -eq 0) {
    Write-Host " [PASS]" -ForegroundColor Green
} else {
    $warnings += "Some sitemap URLs returned non-200: $($failedUrls -join ', ')"
    Write-Host " [WARN] ($($failedUrls.Count) failed)" -ForegroundColor Yellow
}

# Test 9: Check canonical on valid page
Write-Host "9. Checking canonical URL on valid page..." -NoNewline
try {
    $pageContent = (Invoke-WebRequest -Uri "$baseUrl/new-york-ny/web-development" -UseBasicParsing).Content
    if ($pageContent -match 'rel="canonical"') {
        Write-Host " [PASS]" -ForegroundColor Green
    } else {
        $warnings += "Canonical tag not found on valid page"
        Write-Host " [WARN]" -ForegroundColor Yellow
    }
} catch {
    $warnings += "Could not check canonical (page not accessible)"
    Write-Host " [WARN]" -ForegroundColor Yellow
}

# Test 10: Check robots meta on valid page
Write-Host "10. Checking robots meta tag on valid page..." -NoNewline
try {
    $pageContent = (Invoke-WebRequest -Uri "$baseUrl/new-york-ny/web-development" -UseBasicParsing).Content
    if ($pageContent -match 'name="robots"') {
        Write-Host " [PASS]" -ForegroundColor Green
    } else {
        $warnings += "Robots meta tag not found on valid page"
        Write-Host " [WARN]" -ForegroundColor Yellow
    }
} catch {
    $warnings += "Could not check robots meta (page not accessible)"
    Write-Host " [WARN]" -ForegroundColor Yellow
}

# Summary
Write-Host ""
Write-Host "=== Test Summary ===" -ForegroundColor Cyan
if ($errors.Count -eq 0 -and $warnings.Count -eq 0) {
    Write-Host "[PASS] All tests passed!" -ForegroundColor Green
    exit 0
} else {
    if ($errors.Count -gt 0) {
        Write-Host "[FAIL] $($errors.Count) error(s):" -ForegroundColor Red
        $errors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    }
    if ($warnings.Count -gt 0) {
        Write-Host "[WARN] $($warnings.Count) warning(s):" -ForegroundColor Yellow
        $warnings | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
    }
    if ($errors.Count -gt 0) { exit 1 } else { exit 0 }
}
