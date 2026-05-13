# Auralis Digital Current Status

Last updated: 2026-05-13

This is the canonical truth layer for Auralis Digital. If another document disagrees with this one, update or archive the older document.

## Current Public Direction

Auralis Digital currently contains two related public surfaces:

1. **Auralis Digital website services**
   - local-business website services
   - lead-capture and conversion-focused web design
   - website refreshes for Auralis-built sites
   - managed hosting and care support

2. **Auralis Design product/shop surface**
   - product catalog and product mockups
   - Shopify checkout links
   - Printify fulfillment references for Printify products
   - Auralis Design product branding

The current React/Vite source reflects both surfaces.

Current business execution priority remains:

```text
website services
trust setup
lead capture
outreach
first client delivery
real proof
```

The shop/product surface exists publicly, but it should not replace or distract from the current execution priority unless the business focus is intentionally changed.

## What Is Real Right Now

- Auralis Digital has a live public website.
- The repo uses a Vite/React frontend with GitHub Pages deployment.
- The website-service offer is defined:
  - local business websites
  - refreshes for Auralis-built sites
  - lead capture
  - ongoing website care
  - third-party website audit/rebuild consultation path
- The React source also contains an active Auralis Design product/shop surface.
- Product/shop catalog data currently lives in `src/data/shopCatalog.ts`.
- Shopify is currently framed as the checkout/payment/order source of truth.
- Printify is currently referenced as fulfillment for Printify products.
- Starting pricing exists:
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
- The strongest immediate business bottleneck is not documentation. It is trust setup plus first-client execution.

## Legal and Business Formation Gaps

- LLC filing with Michigan is not confirmed in this repo.
- EIN is not confirmed.
- Business bank account is not confirmed.
- Signed client contracts are not confirmed.
- Payment processing or invoicing setup is not confirmed.

## Online Trust Gaps

- Public email still appears to use Gmail in at least some docs or site materials.
- Domain email such as `hello@auralisdigital.net` is still needed.
- Google Business Profile is not confirmed.
- Real testimonials or reviews are not confirmed.
- Real delivered client case studies are not confirmed.
- Physical or service address policy is not confirmed.

## Website-Service Operational Gaps

- No completed end-to-end client delivery is confirmed.
- Scope, revision, payment, and handoff docs exist, but have not yet been tested against a real engagement.
- The first signed agreement, first payment, first delivery, and first testimonial are still the execution threshold.

## Product/Commerce Operational Gaps

The shop/product surface exists technically, but commerce readiness is not yet fully confirmed in current docs.

Not yet confirmed in repo truth:

- Shopify production readiness
- Shopify payment/tax/shipping review
- Printify test-order verification
- fulfillment QA
- refund/shipping workflow verification
- support-email workflow
- product-margin review
- artwork/product-rights workflow
- public commerce readiness checklist

The product/shop surface should not be treated as a fully mature commerce operation until these are validated.

## Priority Order

1. Confirm LLC filing with Michigan.
2. Obtain EIN.
3. Open a business bank account.
4. Set up domain email.
5. Set up invoicing/payment processing.
6. Configure and verify the live contact-form backend.
7. Create or complete Google Business Profile.
8. Contact qualified prospects using the `leads/` materials.
9. Close and deliver one real client, even if discounted.
10. Publish one live URL, testimonial, and case study.
11. Offer the care plan at handoff.
12. Separately verify Shopify/Printify commerce readiness if the product surface remains public-facing.

## Do Not Do Right Now

- Do not fake testimonials, reviews, client logos, or case studies.
- Do not relabel sample builds as client work.
- Do not keep creating overlapping status documents.
- Do not prioritize visual polish over legal setup, domain email, payment flow, outreach, and first delivery.
- Do not edit `gh-pages` manually or merge it into `main`.
- Do not treat copied static HTML as stale without checking the deployment workflow.
- Do not offer the standard Website Refresh for websites Auralis did not originally build. Third-party sites should start with an audit, rebuild, migration, or custom quote.
- Do not imply the product/shop surface is a fully mature commerce operation until checkout, fulfillment, policy, and support readiness are verified.

## Current Repo and Deployment Truth

- `main` is current.
- PR #7 has been merged into `main`.
- The reconciliation and delayed cleanup branches have been mined and deleted.
- `gh-pages` should remain.
- `main` is the source of truth for code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output.
- Static HTML under copied folders such as `website/`, `projects/`, and `service-areas/` is active deployment input.
- The repo currently contains both React/Vite routes and copied static deployment inputs.
- See `docs/tech/DEPLOYMENT_TRUTH.md` before changing hosting, deployment, or static HTML files.

## Next Concrete Action

Use `active/NEXT_STEPS_TODO.md` as the active execution checklist.

Current correct sequence:

1. file or confirm the LLC
2. get the EIN
3. open the bank account
4. configure domain email
5. configure the real contact-form backend
6. set up payments
7. execute outreach
8. deliver the first real client
9. collect proof

One completed real client will solve more trust problems than another round of website polish.
