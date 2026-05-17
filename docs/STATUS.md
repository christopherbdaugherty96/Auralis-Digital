# Auralis Digital Status

Last updated: 2026-05-16

## Current State

Auralis Digital has a live public website and a React/Vite source base deployed through GitHub Pages.

The repo now contains three related public surfaces:

1. **Auralis Design products** - product catalog pages, Shopify checkout links, and local Auralis policy/support pages.
2. **Custom / personalized design requests** - inquiry flow for image, phrase, symbol, theme, gift, product concept, apparel, wall art, and related custom design requests.
3. **Website design services** - websites for local businesses, creators, and small brands, plus refreshes for Auralis-built sites and third-party audit/rebuild consultation.

The active business priority is now three-pillar execution:

```text
business setup -> trust setup -> inquiry flow -> products/custom design/web design clarity -> first real sale or client -> proof
```

Website design remains active, but it is not the only core idea. Products and custom design requests are also first-class public surfaces.

## Current Focus

1. Confirm LLC filing with Michigan and obtain EIN.
2. Open a business bank account.
3. Set up `hello@auralisdigital.net` or another domain email.
4. ~~Configure and verify the production contact-form backend.~~ Done 2026-05-16.
5. Configure real payment/invoicing flow.
6. Verify the live three-pillar navigation and inquiry flow on desktop and phone.
7. Publish or verify Shopify-hosted refund, shipping, and terms policies.
8. Run an incognito Shopify add-to-cart/checkout test up to final payment confirmation.
9. Create or complete Google Business Profile.
10. Start focused outreach or traffic for one lane at a time: products, custom design, or website design.
11. Land one real sale or client engagement.
12. Capture real proof only after permission or confirmation.

## Website Status

- Live website exists.
- `main` is the source of truth for source code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output and must not be edited manually or merged into `main`.
- Static folders such as `website/`, `projects/`, and `service-areas/` may be active deployment input because the deploy workflow copies selected static files into `dist/`.
- Route-specific static metadata generation is implemented through `scripts/generate-route-pages.mjs`.
- Public routes include `/products`, `/shop`, `/custom-design`, `/web-design`, `/websites`, and local policy/support routes.
- Lead capture backend is live via Formspree (desktop confirmed 2026-05-16, phone
  confirmed 2026-05-17).
- Public contact email should move away from Gmail where appropriate.
- Portfolio proof must remain clearly labeled as sample/demo work until real client work exists.
- Website Refresh is limited to Auralis-built sites. Third-party sites should start with an audit, rebuild, migration, or custom quote.

## Product / Commerce Status

- Product catalog data lives in `src/data/shopCatalog.ts`.
- Auralis Digital displays products and product details.
- Shopify is framed as the checkout, payment, order, and product source of truth.
- Public product/support copy now describes made-to-order production without exposing production-partner branding as customer-facing copy.
- Local Auralis policy/support pages exist for refund, shipping, privacy, and terms guidance.
- Footer policy links point to local Auralis policy/support pages.
- Commerce readiness is still not complete.
- Shopify-hosted refund, shipping, and terms policies still need publishing or verification.
- Incognito add-to-cart/checkout testing up to final payment confirmation still remains.
- Do not imply the shop/product surface is fully mature until checkout, policies, fulfillment, support, margins, and test-order flow are verified.

## Custom Design Status

- Custom design has a public route and inquiry positioning.
- No completed custom/personalized design engagement is confirmed in repo truth.
- Pricing, revision limits, file-transfer workflow, usage rights, and delivery expectations still need real-world validation.
- Custom requests should be reviewed before acceptance, especially for copyrighted characters, logos, unclear rights, offensive content, or requests that cannot be produced cleanly.

## Open Repo Follow-Ups

- Issue #9: review whether the third-party website audit offer is fully implemented across listed docs and source references before closing.
- Issue #3: revise or close because React/Vite and direct route support are now present; remaining concern is live deployment verification, not initial import.
- Issue #2: re-check against the active React/Vite source before editing old `index.html` assumptions.
- Issue #1: keep low priority until trust setup, contact backend, checkout verification, and first proof are handled.

## Operating Rule

Do not create more polish work unless it directly supports one of these outcomes:

- business setup
- trust
- inquiry flow
- product readiness
- custom design readiness
- website design sales/delivery
- closing
- delivery
- proof
- retention
- verified commerce readiness

The next win is not another broad document pass. The next win is a verified contact path, verified Shopify checkout path, and one real sale or client engagement.
