# Auralis Digital Current Status

Last updated: 2026-05-17

This is the canonical truth layer for Auralis Digital. If another document disagrees with this one, update or archive the older document.

## Current Public Direction

Auralis Digital currently contains three related public surfaces:

1. **Auralis Design products**
   - product catalog and product photos
   - local Auralis product/support policy pages
   - Shopify checkout links
   - made-to-order production guidance without public production-partner branding

2. **Custom / personalized design requests**
   - personal artwork ideas
   - image, phrase, symbol, or theme-based requests
   - product concept requests for gifts, apparel, wall art, mugs, blankets, journals, canvas, and related formats

3. **Website design services**
   - local-business and creator website design
   - website refreshes for Auralis-built sites
   - third-party website audit/rebuild consultation path
   - managed hosting and care support

The current React/Vite source reflects the three-pillar direction.

Current execution priority is:

```text
temporary Gmail contact path
custom design proof loop
domain email / trust setup
Shopify checkout verification
first real sale or client
real proof
```

Website design remains an active Auralis service, but it is no longer the sole core idea. The product and custom-design surfaces are also first-class parts of the public direction.

## What Is Real Right Now

- Auralis Digital has a live public website.
- The repo uses a Vite/React frontend with GitHub Pages deployment.
- The source supports public routes for:
  - `/`
  - `/products`
  - `/shop` as a products alias
  - `/custom-design`
  - `/web-design`
  - `/websites`
  - `/refund-policy`
  - `/shipping-policy`
  - `/privacy-policy`
  - `/terms-of-service`
- The homepage is intended to act as a brand gateway for Products, Custom Design, and Website Design instead of a product catalog.
- Product/shop catalog data currently lives in `src/data/shopCatalog.ts`.
- Shopify is currently framed as the checkout/payment/order source of truth.
- Public product/support copy now describes made-to-order production without exposing production-partner branding as customer-facing copy.
- Auralis Digital local policy/support pages exist for refund, shipping, privacy, and terms guidance.
- Footer policy links point to local Auralis policy/support pages.
- Route-specific static metadata generation is implemented through `scripts/generate-route-pages.mjs` for main public routes and policy routes.
- The website-design offer is defined:
  - local business websites
  - refreshes for Auralis-built sites
  - lead capture
  - ongoing website care
  - third-party website audit/rebuild consultation path
- Starting website-design pricing exists:
  - $250 refresh for Auralis-built sites
  - $150-$300 third-party website audit/rebuild consultation
  - $500+ basic website
  - $1,000+ standard website
  - custom quote for larger or third-party site work
  - $250/month managed hosting and care
- The repo contains a usable business operating system:
  - lead tracking and outreach in `leads/`
  - intake, delivery, handoff, proof, and care plan docs in `onboarding/`
  - website and deployment docs in `docs/tech/`
  - internal build workflow in `docs/internal/AURALIS_SITE_STUDIO.md`
- Portfolio/demo work should be treated as sample builds unless tied to a real delivered client.

## Legal and Business Formation Gaps

- LLC filing with Michigan is not confirmed in this repo.
- EIN is not confirmed.
- Business bank account is not confirmed.
- Signed client contracts are not confirmed.
- Payment processing or invoicing setup is not confirmed.

## Online Trust Gaps

- Production contact form is live via Formspree (receipt-confirmed 2026-05-16).
- Temporary contact email is `auralisdigitaleco@gmail.com`.
- Domain email such as `hello@auralisdigital.net` is still needed.
- Google Business Profile is not confirmed.
- Real testimonials or reviews are not confirmed.
- Real delivered client case studies are not confirmed.
- Physical or service address policy is not confirmed.
- Phone test submission confirmed 2026-05-17.

## Website-Service Operational Gaps

- No completed end-to-end website client delivery is confirmed.
- Scope, revision, payment, and handoff docs exist, but have not yet been tested against a real engagement.
- The first signed website agreement, first website payment, first delivery, and first testimonial are still unconfirmed.

## Product / Commerce Operational Gaps

The product surface exists technically, and local Auralis policy/support pages exist, but commerce readiness is not yet fully confirmed.

Not yet confirmed in repo truth:

- Shopify production checkout readiness
- Shopify payment/tax/shipping review
- Shopify-hosted refund, shipping, and terms policy publishing or verification
- full incognito add-to-cart/checkout test up to final payment confirmation
- production-partner test-order verification
- fulfillment QA
- refund/shipping workflow verification inside Shopify checkout
- support-email workflow
- product-margin review
- artwork/product-rights workflow

The product/shop surface should not be treated as a fully mature commerce operation until these are validated.

## Custom Design Operational Gaps

- No completed custom/personalized design request is confirmed in repo truth.
- Custom design pricing, revision, file-transfer, usage-rights, and delivery workflow still need real-world validation.
- Custom requests should be reviewed before acceptance, especially when they involve copyrighted characters, logos, unclear usage rights, offensive content, or work that cannot be produced cleanly.

## Priority Order

1. Confirm LLC filing with Michigan.
2. Obtain EIN.
3. Open a business bank account.
4. Keep using `auralisdigitaleco@gmail.com` temporarily until domain email is active.
5. Set up invoicing/payment processing.
6. ~~Configure and verify the live contact-form backend.~~ Done 2026-05-16 (phone confirmed 2026-05-17).
7. Verify the three-pillar live site flow on phone and desktop.
8. Publish or verify Shopify-hosted refund, shipping, and terms policies.
9. Run an incognito Shopify add-to-cart/checkout test up to final payment confirmation.
10. Create or complete Google Business Profile.
11. Start focused outreach or traffic for one branch at a time: products, custom design, or website design.
12. Close one real sale or client engagement.
13. Publish real proof only after permission or confirmation.

## Do Not Do Right Now

- Do not fake testimonials, reviews, client logos, sales, urgency, discounts, or case studies.
- Do not relabel sample builds as client work.
- Do not keep creating overlapping status documents.
- Do not edit `gh-pages` manually or merge it into `main`.
- Do not treat copied static HTML as stale without checking the deployment workflow.
- Do not offer the standard Website Refresh for websites Auralis did not originally build. Third-party sites should start with an audit, rebuild, migration, or custom quote.
- Do not imply the product/shop surface is fully mature until Shopify checkout, fulfillment, policy, and support readiness are verified.
- Do not add custom checkout, cart, payment, Shopify Admin API, or production-partner API logic to the public site without a separate implementation review.

## Current Repo and Deployment Truth

- `main` is current.
- `gh-pages` should remain.
- `main` is the source of truth for code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output.
- Static HTML under copied folders such as `website/`, `projects/`, and `service-areas/` is active deployment input.
- Route-specific static metadata is generated during deployment by `scripts/generate-route-pages.mjs`.
- The repo currently contains both React/Vite routes and copied static deployment inputs.
- See `docs/tech/DEPLOYMENT_TRUTH.md` before changing hosting, deployment, or static HTML files.

## Next Concrete Action

Use `active/NEXT_STEPS_TODO.md` as the active execution checklist.

Current correct sequence:

1. finish business/contact trust setup
2. verify live contact/inquiry flow
3. verify live three-pillar navigation on phone and desktop
4. publish or verify Shopify-hosted refund, shipping, and terms policies
5. run Shopify checkout test up to final payment confirmation
6. choose one first execution lane: product sale, custom design request, or website design client
7. complete one real transaction or engagement
8. collect real proof only after permission or confirmation
