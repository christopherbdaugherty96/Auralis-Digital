# Known Site TODOs

Status: active site TODO reference

This file tracks website-specific issues and improvements.

## Purpose

Use this for:

- website fixes
- technical cleanup
- launch readiness checks

Do not use this for:

- full business roadmap
- sales tasks
- client delivery tasks

## Current Focus

- confirm live deployment source: `main`, `gh-pages`, static HTML, or external platform
- verify homepage call-to-action flow
- test contact form and lead path
- verify service-area pages still match the current offer
- check mobile layout
- verify metadata, title tags, and social preview tags
- confirm analytics and search-console setup status
- confirm form backend status
- review visual consistency and brand alignment

## Active Site Execution Tasks

- Configure production contact env: `VITE_CONTACT_EMAIL` and `VITE_FORMSPREE_ENDPOINT`.
- Verify live form submission on phone and desktop.
- Run a manual phone and desktop QA pass before outreach.
- Manually review each demo before sending it to prospects.
- Confirm analytics and Search Console setup.
- Confirm service-area pages match the current offer.
- Capture first-client proof assets after delivery.

## Shop-First Audit Follow-Up - 2026-05-13

These items came from the post-merge review of the shop-first Auralis Digital update.

### P1

- Fix GitHub Pages direct-route restore for `/shop`, `/web-design`, and `/websites`.
  - Current risk: `public/404.html` redirects unknown paths to `/?p=/shop`, but the React app does not read the `p` query parameter.
  - Customer impact: a direct refresh/share of `/shop` may land on the homepage instead of the Shop page.
  - Acceptance: visiting `https://www.auralisdigital.net/shop` directly, refreshing it, and opening it from an incognito browser all render the Shop page.

### P2

- Add the sitemap reference to the deployed robots file.
  - Current risk: root `robots.txt` includes `Sitemap: https://www.auralisdigital.net/sitemap.xml`, but `public/robots.txt` is what Vite copies into `dist/`.
  - Acceptance: live `https://www.auralisdigital.net/robots.txt` includes the sitemap URL.

- Plan better static metadata for route pages.
  - Current risk: `index.html` has one static title/description, while `/shop` and `/web-design` metadata updates happen client-side after load.
  - Customer/search impact: crawlers and social preview bots may see homepage metadata instead of route-specific metadata.
  - Acceptance: choose and implement either prerendered static route HTML, framework route metadata, or another deploy-safe route metadata strategy before serious SEO/social campaigns.

### P3

- Align homepage product-card click behavior with the browse-first customer flow.
  - Current behavior: homepage featured product cards are clearly labeled but open Shopify directly.
  - Preferred behavior: homepage product cards/media lead to `/shop`; explicit buy/view buttons on the Shop page open Shopify.
  - Acceptance: homepage encourages browsing on Auralis Digital first, while outbound Shopify links remain clearly labeled.

### Verified During Audit

- Build passed.
- Vitest passed.
- `git diff --check` passed.
- No custom checkout, cart, payment form, tax calculation, shipping calculation, Shopify Admin API, or Printify API logic was added to Auralis Digital.
- Product catalog data is centralized in `src/data/shopCatalog.ts`.

## Live Website Test Findings - 2026-05-13

Live target tested:

- `https://www.auralisdigital.net/`

### Confirmed Live Blockers

- `/shop`, `/web-design`, and `/websites` return HTTP `404` when opened directly.
  - Customer impact: homepage navigation links advertise these routes, but shared links, direct visits, and refreshes can fail.
  - SEO impact: `sitemap.xml` includes `/shop` and `/web-design`, but those URLs currently return `404` at the HTTP level.
  - Acceptance: each route returns the intended page for direct live visits, incognito visits, and refreshes.

- `/?p=/shop` renders the homepage instead of the Shop page.
  - Current risk: the GitHub Pages 404 helper preserves the path in the `p` query parameter, but the React app does not restore that path.
  - Acceptance: `/?p=/shop` restores `/shop`, `/?p=/web-design` restores `/web-design`, and `/?p=/websites` restores `/websites`.

- Shopify product links appear password-gated.
  - Tested product links resolved with HTTP `200`, but page content appeared behind the Shopify storefront password gate.
  - Customer impact: visitors clicking `View on Shopify` may not reach a normal public product page.
  - Acceptance: all published Shopify product URLs open publicly from incognito without password/login confusion.

- Shopify policy links appear password-gated.
  - Refund, Shipping, Privacy, and Terms policy URLs resolved with HTTP `200`, but content appeared password-gated.
  - Customer impact: ecommerce trust is weakened if policy links do not open normally before purchase.
  - Acceptance: public policy links open from incognito without password/login confusion.

### Live SEO / Discovery Gaps

- Live `robots.txt` does not include `Sitemap: https://www.auralisdigital.net/sitemap.xml`.
  - Acceptance: deployed `robots.txt` includes the sitemap line.

- Live `sitemap.xml` includes `/shop` and `/web-design`, but the routes currently return `404`.
  - Acceptance: sitemap routes and live route behavior agree.

### Live Visual / Customer Friction

- Mobile hero/product area has horizontal pressure.
  - Observed risk: the product card/image can feel clipped or too wide on a narrow mobile viewport.
  - Acceptance: mobile viewport around 390px wide shows the hero copy, CTA, and featured product without awkward horizontal clipping.

- Fixed mobile bottom CTA can crowd lower content.
  - Acceptance: final CTA/footer/contact areas remain readable and tappable above the fixed mobile CTA.

- Homepage product cards open Shopify directly.
  - This is clearly labeled, but it sends customers into the current password-gated Shopify flow from the homepage.
  - Preferred next behavior: route homepage product cards/media to `/shop`; keep explicit outbound Shopify buy/view actions on the Shop page.

### Live Copy / Conversion Opportunities

- Simplify the homepage headline.
  - Current direction: "Shop Auralis Design pieces through a clean brand site."
  - Suggested direction: "Shop Auralis Design" with supporting copy for blankets, mugs, journals, posters, and future apparel.

- Rename the top nav CTA.
  - Current: `View Product`
  - Suggested: `Shop Now` or `Shop Auralis`

- Add a clearer product-category line near the homepage/shop intro:
  - `Blankets, mugs, journals, posters, and future apparel from Auralis Design.`

### Confirmed Working Live

- Homepage loads with HTTP `200`.
- Product data shown on the homepage matches the current Zeus catalog direction.
- UTM-tagged Shopify links are present.
- `og-image.png` returns HTTP `200`.
- `sitemap.xml` exists and includes `/shop` and `/web-design`.

## Rule

Only keep active, relevant site tasks here.

Move outdated tasks into `docs/archive/` instead of mixing stale work with current site truth.
