$ErrorActionPreference = "Stop"

$projectDir = Join-Path $PSScriptRoot "..\projects\rj-print"
$assetPath = Join-Path $projectDir "assets\index-D6X0l-Lk.js"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Replace-Required {
  param(
    [string] $Content,
    [string] $OldValue,
    [string] $NewValue
  )

  if ($Content.Contains($OldValue)) {
    return $Content.Replace($OldValue, $NewValue)
  }

  if ($Content.Contains($NewValue)) {
    return $Content
  }

  throw "Could not find expected RJ Print export text: $OldValue"
}

$bundle = [System.IO.File]::ReadAllText($assetPath)

$internalPaths = @(
  "/",
  "/shop",
  "/custom-orders",
  "/gallery",
  "/about",
  "/contact",
  "/refund-policy",
  "/shipping-policy",
  "/privacy-policy",
  "/terms-of-service"
)

foreach ($path in $internalPaths) {
  $bundle = $bundle.Replace(('href:"{0}"' -f $path), ('href:"/projects/rj-print{0}"' -f $path))
}

foreach ($path in $internalPaths | Where-Object { $_ -ne "/" }) {
  $bundle = $bundle.Replace(('canonicalPath:"{0}"' -f $path), ('canonicalPath:"{0}/"' -f $path))
}

$bundle = Replace-Required $bundle `
  '?"/shop":f.shopifyTrackingUrl' `
  '?"/projects/rj-print/shop":f.shopifyTrackingUrl'

$bundle = Replace-Required $bundle `
  't?u.jsxs("a",{href:"/projects/rj-print/custom-orders",className:"product-button","aria-label":`Inquire about ${e.title}`,children:["Inquire ",u.jsx(Ge,{className:"size-4","aria-hidden":"true"})]})' `
  't?u.jsx("span",{className:"product-button cursor-not-allowed opacity-70","aria-label":`Ordering inquiries coming soon for ${e.title}`,children:"Ordering inquiries coming soon"})'

$bundle = Replace-Required $bundle `
  'Bo="hello@rjprint.com",li=`mailto:${Bo}?subject=${encodeURIComponent("RJ Print Inquiry")}`' `
  'Bo="Email setup in progress",li="/projects/rj-print/contact"'

$bundle = Replace-Required $bundle `
  ';window.location.href=`mailto:${Bo}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`' `
  ';return'

$bundle = $bundle.Replace('className:i,value:', 'className:i,disabled:!0,value:')
$bundle = $bundle.Replace('className:i,type:"email",value:', 'className:i,disabled:!0,type:"email",value:')
$bundle = $bundle.Replace('className:i,rows:4,value:', 'className:i,disabled:!0,rows:4,value:')

$bundle = [regex]::Replace(
  $bundle,
  'disabled:n==="submitting",children:n==="submitting"\?"[^"]*":u\.jsxs\(u\.Fragment,\{children:\["Prepare Email ",u\.jsx\(Ge,\{"aria-hidden":"true"\}\)\]\}\)',
  'disabled:!0,children:"Ordering inquiries coming soon"'
)

$bundle = [regex]::Replace(
  $bundle,
  'Checkout opens securely through Shopify\.[^"]*Shopify handles payment, checkout, and order records\.',
  'Online ordering is coming soon. Browse product details now and check back for ordering updates.'
)

$bundle = [regex]::Replace(
  $bundle,
  'Request a custom 3D-printed item[^"]*personalized gifts, bulk orders, custom dimensions, unique designs, and more\.',
  'Custom order inquiries are coming soon. Browse customization options and product examples for now.'
)

$bundle = [regex]::Replace(
  $bundle,
  'Describe what you need[^"]*size, color, material, quantity, or just an idea\.',
  'The support inbox is being prepared. Inquiry submissions will open soon.'
)

$replacements = [ordered]@{
  "Made to order. Checkout opens on Shopify when available." = "Online ordering is coming soon. Browse the catalog for now."
  "Product checkout handled through Shopify." = "Online ordering is coming soon."
  "RJ Print keeps browsing and inquiries simple. Product checkout and payment are handled through Shopify." = "RJ Print currently provides product browsing while online ordering is being prepared."
  "RJ Print does not collect card details or run checkout on this website. Buy buttons open Shopify in a new tab for secure payment processing." = "RJ Print does not collect card details or run checkout on this website. Online ordering is coming soon."
  "Shopify, form providers, analytics tools, hosting providers, and email providers may process information according to their own policies when those tools are used." = "Hosting providers and analytics tools may process information according to their own policies when those tools are used."
  "RJ Print is a 3D-printing product website for browsing products, placing orders, and submitting custom print requests." = "RJ Print is a 3D-printing product website for browsing products and previewing future custom order options."
  "Product pages on RJ Print are for display and product information. Purchases happen through Shopify when you use a clearly labeled buy button." = "Product pages on RJ Print are currently for display and product information. Online ordering is coming soon."
  "Shipping costs and delivery estimates are confirmed at checkout. Tracking information is provided when available." = "Shipping costs and delivery estimates will be confirmed when ordering opens. Tracking information will be provided when available."
  "For shipping questions, include your order details and the email used at checkout so the request can be reviewed." = "Shipping support contact information will be added before ordering opens."
  "Email RJ Print with the product name, order details if available, and a short description of what happened." = "Support contact information will be added before ordering opens."
  "Opens a prepared email you can review before sending." = "Email inquiries will open after the support inbox is ready."
  "Something went wrong. Please try again or email directly." = "Email inquiries are not available yet."
  "Get in touch with RJ Print for product questions, custom orders, bulk inquiries, or general questions." = "RJ Print contact information is being prepared. Browse the catalog while email support is set up."
  "Terms for RJ Print product browsing, checkout, and custom 3D print order requests." = "Terms for RJ Print product browsing while online ordering and inquiries are being prepared."
  "Ready to order?" = "Ordering is coming soon."
  "Browse products or request a custom 3D print." = "Browse products now. Ordering and custom inquiries are coming soon."
  "Need a custom size, color, or design? Request a personalized 3D print." = "Preview custom print options while inquiries are being prepared."
  "Request Custom Order" = "Preview Custom Orders"
  "Custom 3D prints made to order." = "Custom order inquiries are coming soon."
  "Need a specific size, color, shape, or design? Describe your idea and we'll quote it." = "Preview customization options while the ordering and email support channels are being prepared."
  "Start a custom order request." = "Custom order inquiry setup."
  "Send a request" = "Inquiry form setup in progress"
  "Get in touch." = "Contact setup in progress."
  "Product questions, custom orders, bulk inquiries, or just saying hi." = "Email support is being prepared before ordering opens."
  "Send a message" = "Inquiry form setup in progress"
  "Fill out the form and RJ Print will get back to you." = "The support inbox is being prepared. Inquiry submissions will open soon."
  "Email directly" = "Email setup in progress"
  "Need help with an order or request?" = "Support contact coming soon."
}

foreach ($entry in $replacements.GetEnumerator()) {
  $bundle = Replace-Required $bundle $entry.Key $entry.Value
}

[System.IO.File]::WriteAllText($assetPath, $bundle, $utf8NoBom)

$routeMetadata = [ordered]@{
  "/" = @{
    Title = "RJ Print - Custom 3D-Printed Products, Gifts, and Everyday Accessories"
    Description = "Browse custom 3D-printed products, gifts, and everyday accessories made in Southeast Michigan. Online ordering is coming soon."
  }
  "/about/" = @{
    Title = "About RJ Print"
    Description = "Learn about RJ Print and its made-to-order 3D-printed products in Southeast Michigan."
  }
  "/contact/" = @{
    Title = "Contact | RJ Print"
    Description = "RJ Print contact information is being prepared. Browse the catalog while ordering and email support are set up."
  }
  "/custom-orders/" = @{
    Title = "Custom Orders Coming Soon | RJ Print"
    Description = "RJ Print custom order inquiries are coming soon. Browse example products and customization options for now."
  }
  "/gallery/" = @{
    Title = "Gallery | RJ Print"
    Description = "Browse RJ Print product examples and 3D-printing ideas."
  }
  "/privacy-policy/" = @{
    Title = "Privacy Policy | RJ Print"
    Description = "Read how RJ Print handles browsing data while online ordering and inquiries are being prepared."
  }
  "/refund-policy/" = @{
    Title = "Refund Policy | RJ Print"
    Description = "Read RJ Print refund and issue-support guidance for future made-to-order products."
  }
  "/shipping-policy/" = @{
    Title = "Shipping Policy | RJ Print"
    Description = "Read RJ Print production and shipping expectations for future made-to-order products."
  }
  "/shop/" = @{
    Title = "Shop 3D-Printed Products | RJ Print"
    Description = "Browse RJ Print 3D-printed products and accessories. Online ordering is coming soon."
  }
  "/terms-of-service/" = @{
    Title = "Terms of Service | RJ Print"
    Description = "Read the RJ Print terms for browsing products while online ordering is being prepared."
  }
}

foreach ($entry in $routeMetadata.GetEnumerator()) {
  $route = $entry.Key
  $filePath = if ($route -eq "/") {
    Join-Path $projectDir "index.html"
  } else {
    Join-Path $projectDir "$($route.Trim('/'))\index.html"
  }

  $canonical = "https://www.auralisdigital.net/projects/rj-print$route"
  $html = [System.IO.File]::ReadAllText($filePath)
  $html = [regex]::Replace($html, "<title>.*?</title>", "<title>$($entry.Value.Title)</title>")
  $html = [regex]::Replace(
    $html,
    '<meta\s+name="description"\s+content="[^"]*"\s*/>',
    "<meta name=`"description`" content=`"$($entry.Value.Description)`" />"
  )
  $html = [regex]::Replace(
    $html,
    '<link\s+rel="canonical"\s+href="[^"]*"\s*/>',
    "<link rel=`"canonical`" href=`"$canonical`" />"
  )
  $html = [regex]::Replace(
    $html,
    '<meta\s+property="og:url"\s+content="[^"]*"\s*/>',
    "<meta property=`"og:url`" content=`"$canonical`" />"
  )
  $html = [regex]::Replace($html, '(?m)^\s*<meta\s+(?:property="og:image(?::[^"]*)?"|name="twitter:image(?::[^"]*)?")[^>]*>\r?\n?', "")
  $html = $html.Replace('<meta name="twitter:card" content="summary_large_image" />', '<meta name="twitter:card" content="summary" />')
  $html = $html.Replace(
    "Custom 3D-printed items including personalized gifts, bulk orders, custom dimensions, and unique designs. Made to order in PLA and PETG.",
    "Browse RJ Print product examples while online ordering and custom inquiries are being prepared."
  )
  [System.IO.File]::WriteAllText($filePath, $html, $utf8NoBom)
}

Write-Output "Patched RJ Print temporary inquiry-only export."
