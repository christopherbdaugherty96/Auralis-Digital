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

- verify homepage call-to-action flow
- test contact form and inquiry path
- verify service-area pages still match the current offer
- check mobile layout
- confirm analytics and search-console setup status
- confirm form backend status
- review visual consistency and brand alignment
- verify Shopify checkout path before serious product traffic

## Active Site Execution Tasks

- Configure production contact env: `VITE_CONTACT_EMAIL` and `VITE_FORMSPREE_ENDPOINT`.
  - 2026-05-14 live check: repo variables/secrets are not currently visible/configured, and the live contact form still shows the mailto fallback.
- Verify live form submission on phone and desktop.
- Run a manual phone and desktop QA pass before outreach or product traffic.
- Manually review each demo before sending it to prospects.
- Confirm analytics and Search Console setup.
- Confirm service-area pages match the current offer.
- Capture first proof assets only after a real customer, sale, client, or approved delivery.

## Three-Pillar Site Follow-Up - 2026-05-14

Auralis Digital source has moved to a three-pillar brand structure: Products, Custom Design, and Website Design.

Older shop-first homepage notes should be treated as historical findings unless they are still visible on the deployed live site.

### Recently Resolved

- GitHub Pages direct-route restore and route folders are live.
  - Verified live after PR #22: `/`, `/products`, `/shop`, `/custom-design`, `/web-design`, `/websites`, and local policy/support pages return HTTP `200`.
  - Verified: live `robots.txt` includes `Sitemap: https://www.auralisdigital.net/sitemap.xml`.
  - Source check: `/?p=/...` fallback restoration is implemented in `src/App.tsx`; browser-level fallback restore still needs a live browser/CDP pass before marking it fully user-verified.
- Route-specific static metadata generation is implemented through `scripts/generate-route-pages.mjs`.
  - Generated route folders cover `/products`, `/shop`, `/custom-design`, `/web-design`, `/websites`, and policy/support pages.
  - Route HTML can ship route-specific title, description, canonical, OG, and Twitter metadata.
- Local Auralis policy/support pages are implemented.
  - `/refund-policy`
  - `/shipping-policy`
  - `/privacy-policy`
  - `/terms-of-service`
- Footer policy links now point to local Auralis policy/support pages instead of incomplete Shopify policy URLs.
- Public product/customer copy no longer visibly exposes production-partner branding in source.
- Product image labels use `Photo` wording instead of `Mockup` wording in public source.
- Mobile `/products` source QA passed at a 390px viewport:
  - no horizontal overflow
  - all seven products present
  - product gallery selectors stay on Auralis Digital
  - product-specific Shopify buttons remain the buy path
- Live mobile `/products` QA passed at a 390px viewport after PR #22:
  - no horizontal overflow
  - all seven products present
  - no fixed bottom CTA blocking product content
  - product gallery selector interaction worked
  - seven product-specific Shopify buttons were present
- Social preview SVG assets now use the three-pillar Auralis positioning and return live HTTP `200`.
- Website demo split is live after PR #24.
  - `/web-design`, `/websites`, and `/websites/` return HTTP `200`.
  - `/web-design` links visitors to the separate website demos page instead of embedding the full gallery above pricing.
  - `/websites` contains the website demos gallery in the deployed React bundle.
  - All 10 root-relative `/projects/...` demo targets return HTTP `200`.
  - Lawn Care demo route and deployable local images return HTTP `200`.
  - Lawn Care demo cleanup is live: no dead `RobsLawnCare` URL, old image path, fake phone number, mock-pricing wording, or old Website LLC/Y.O.U. branding in the checked live page.

### P2

- Verify the three-pillar homepage after deploy.
  - Expected behavior: homepage is a brand gateway with Products, Custom Design, and Website Design cards.
  - Expected behavior: homepage does not list product prices or send visitors directly to Shopify.
  - Acceptance: `/` routes visitors to `/products`, `/custom-design`, and `/web-design` without acting as a product catalog.

### P3

- Confirm route-specific metadata from live page source or crawler preview.
  - Expected behavior: `/products`, `/custom-design`, `/web-design`, and policy pages expose their intended static title, description, canonical, OG, and Twitter metadata from generated route HTML.
  - Acceptance: direct live requests to the route folders show the intended metadata before client-side React execution.

### Verified During Recent Work

- Build passed.
- Vitest passed.
- `git diff --check` passed.
- No custom checkout, cart, payment form, tax calculation, shipping calculation, Shopify Admin API, or Printify API logic was added to Auralis Digital.
- Product catalog data is centralized in `src/data/shopCatalog.ts`.

## Live Website Test Findings - 2026-05-13 / 2026-05-14

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

- Shopify-hosted policy links still need admin-side verification, even though Auralis local policy/support routes now exist.
  - Auralis Digital policy/support pages exist for public trust and footer links.
  - Remaining Shopify-admin action: publish or verify the Shopify-hosted refund, shipping, and terms policies used by checkout.
  - Acceptance: Auralis Digital policy links open publicly, and Shopify checkout exposes the correct Shopify policy links before serious product traffic.

### Live Visual / Customer Friction

- Latest live mobile `/products` QA shows no horizontal overflow at a 390px viewport.

- The fixed mobile bottom CTA has been removed from `/products` so each product card's Shopify button remains the product-specific buy path.

- Homepage source no longer lists product cards.
  - Verify after deploy that `/` routes to Products, Custom Design, and Website Design instead of sending visitors directly to Shopify.

- Browser screenshot QA remains limited.
  - The in-app Browser plugin could not attach during this session because the local Node runtime failed on an invalid `C:\Users\Chris\package.json` config.
  - Current live demo verification used HTTP checks, deployed bundle inspection, and source checks rather than screenshot-backed browser automation.

### Confirmed Working Live

- Homepage loads with HTTP `200`.
- Current public routes return HTTP `200`: `/`, `/products`, `/shop`, `/custom-design`, `/web-design`, `/websites`.
- Website demo routes return HTTP `200`: `/websites`, `/websites/`, and all 10 `/projects/...` demo targets.
- Local policy/support routes return HTTP `200`: `/refund-policy`, `/shipping-policy`, `/privacy-policy`, `/terms-of-service`.
- UTM-tagged Shopify links are present.
- Every product `shopifyTrackingUrl` in `src/data/shopCatalog.ts` returned HTTP `200` from Shopify and showed public buy/add-to-cart signals during the 2026-05-14 live link check.
- Live contact form currently uses mailto fallback:
  - submit button text: `Prepare Project Email`
  - `VITE_CONTACT_EMAIL` / `VITE_FORMSPREE_ENDPOINT` still need production configuration.
- `og-image.png` returns HTTP `200`.
- `public/og-image.svg` and `public/assets/social-preview.svg` return live HTTP `200` and use three-pillar positioning.
- `sitemap.xml` exists and includes the current route set, including policy routes.

## Rule

Only keep active, relevant site tasks here.

Move outdated tasks into `docs/archive/` instead of mixing stale work with current site truth.
