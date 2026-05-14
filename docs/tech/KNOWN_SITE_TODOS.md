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

Update: the source has since moved to a three-pillar brand structure: Products, Custom Design, and Website Design. Older shop-first homepage notes below should be read as historical findings unless they are still present on the deployed live site.

### Recently Resolved

- GitHub Pages direct-route restore and route folders are live.
  - Verified: `/products`, `/shop`, `/custom-design`, `/web-design`, and `/websites` return HTTP `200`.
  - Verified: live `robots.txt` includes `Sitemap: https://www.auralisdigital.net/sitemap.xml`.
  - Remaining route/SEO caveat: route-specific metadata is still client-side after load.

### P2

- Plan better static metadata for route pages.
  - Current risk: `index.html` has one static title/description, while `/shop` and `/web-design` metadata updates happen client-side after load.
  - Customer/search impact: crawlers and social preview bots may see homepage metadata instead of route-specific metadata.
  - Acceptance: choose and implement either prerendered static route HTML, framework route metadata, or another deploy-safe route metadata strategy before serious SEO/social campaigns.

### P3

- Verify the three-pillar homepage after deploy.
  - Current source behavior: homepage is a brand gateway with Products, Custom Design, and Website Design cards.
  - Preferred behavior: homepage does not list product prices or send visitors directly to Shopify.
  - Acceptance: `/` routes visitors to `/products`, `/custom-design`, and `/web-design` without acting as a product catalog.

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

- Shopify storefront password gate has been removed, but checkout still needs a full incognito test.
  - Customer impact: visitors can reach public Shopify product pages, but purchase readiness is not proven until add-to-cart, checkout, payment, shipping, and tax settings are tested.
  - Required action: run an incognito checkout test up to the final payment confirmation step.
  - Acceptance: an incognito visitor can open each product page, add a product to cart, and proceed through checkout up to the final payment confirmation step.

- Keep Shopify product handles synchronized with Auralis Digital catalog data.
  - 2026-05-13 second pass: old blanket URL `/products/tan-sherpa-blanket` returned `404`; current public blanket handle is `/products/zeus-sherpa-blanket`.
  - Acceptance: every product in `src/data/shopCatalog.ts` returns HTTP `200` and opens the intended Shopify product page.

- Shopify policy links are incomplete, but Auralis Digital now has local policy/support fallback routes.
  - 2026-05-13 second pass: Shopify Privacy Policy opened publicly, but Shopify Refund Policy, Shipping Policy, and Terms of Service returned `404`.
  - Repo action: add local `/refund-policy`, `/shipping-policy`, `/privacy-policy`, and `/terms-of-service` pages for public trust and footer links.
  - Remaining Shopify-admin action: publish or verify the Shopify-hosted refund, shipping, and terms policies used by checkout.
  - Acceptance: Auralis Digital policy links open publicly, and Shopify checkout exposes the correct Shopify policy links before serious product traffic.

### Live SEO / Discovery Gaps

### Live Visual / Customer Friction

- Mobile hero/product area has horizontal pressure.
  - Observed risk: the product card/image can feel clipped or too wide on a narrow mobile viewport.
  - Acceptance: mobile viewport around 390px wide shows the hero copy, CTA, and featured product without awkward horizontal clipping.

- Fixed mobile bottom CTA can crowd lower content.
  - Acceptance: final CTA/footer/contact areas remain readable and tappable above the fixed mobile CTA.

- Homepage source no longer lists product cards.
  - Verify after deploy that `/` routes to Products, Custom Design, and Website Design instead of sending visitors directly to Shopify.

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
