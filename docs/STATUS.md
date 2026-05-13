# Auralis Digital Status

Last updated: 2026-05-13

## Current State

Auralis Digital has a live public website and a React/Vite source base deployed through GitHub Pages.

The repo now contains two related public surfaces:

1. **Auralis Digital website services** — local-business websites, refreshes for Auralis-built sites, lead capture, and managed hosting/care support.
2. **Auralis Design product/shop surface** — product catalog pages, Shopify checkout links, and Printify fulfillment references for Printify products.

The active business priority remains website services first:

```text
business setup -> trust setup -> lead capture -> outreach -> first client -> proof
```

The product/shop surface exists publicly, but should not be treated as a mature commerce operation until Shopify checkout, policy links, payment/tax/shipping settings, Printify fulfillment, support path, product margins, test order flow, and artwork/product-rights workflow are verified.

## Current Focus

1. Confirm LLC filing with Michigan and obtain EIN.
2. Open a business bank account.
3. Set up `hello@auralisdigital.net` or another domain email.
4. Configure and verify the production contact-form backend.
5. Configure real payment/invoicing flow.
6. Create or complete Google Business Profile.
7. Start focused website-services outreach.
8. Land and deliver the first real client.
9. Capture a testimonial, live URL, and case study after delivery.
10. Separately verify Shopify/Printify commerce readiness if the shop surface remains public-facing.

## Website Status

- Live website exists.
- `main` is the source of truth for source code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output and must not be edited manually or merged into `main`.
- Static folders such as `website/`, `projects/`, and `service-areas/` may be active deployment input because the deploy workflow copies selected static files into `dist/`.
- Lead capture backend still needs live verification.
- Public contact email should move away from Gmail where appropriate.
- Portfolio proof must remain clearly labeled as sample/demo work until real client work exists.
- Website Refresh is limited to Auralis-built sites. Third-party sites should start with an audit, rebuild, migration, or custom quote.

## Product / Commerce Status

- Product catalog data lives in `src/data/shopCatalog.ts`.
- Auralis Digital displays products and product details.
- Shopify is framed as the checkout, payment, order, and product source of truth.
- Printify is referenced as fulfillment for Printify products.
- Commerce readiness is unverified in repo truth.
- Do not imply the shop/product surface is fully mature until checkout, policies, fulfillment, support, margins, and test-order flow are verified.

## Open Repo Follow-Ups

- Issue #9: review whether the third-party website audit offer is fully implemented across listed docs and source references before closing.
- Issue #3: revise or close because React/Vite is already present; remaining concern is deployment/source verification, not initial import.
- Issue #2: re-check against the active React/Vite source before editing old `index.html` assumptions.
- Issue #1: keep low priority until trust setup, contact backend, outreach, and first-client proof are handled.

## Operating Rule

Do not create more polish work unless it directly supports one of these outcomes:

- business setup
- trust
- lead capture
- outreach
- closing
- delivery
- proof
- retention
- verified commerce readiness

The next win is not another broad document pass. The next win is a verified contact path and one completed real website-service engagement.
