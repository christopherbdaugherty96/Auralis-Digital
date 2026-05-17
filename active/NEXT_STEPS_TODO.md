# Auralis Digital Active Execution

Last updated: 2026-05-16

## Current Mode

Repo cleanup is complete. Do not restart cleanup unless something is actively broken.

Auralis Digital currently contains three related public surfaces:

1. Auralis Design products
2. custom / personalized design requests
3. website design services

First execution lane: **custom design requests**.

Custom design was chosen because it needs less infrastructure than Shopify product sales (checkout/payment/shipping verification) or website clients (contracts, scope, deposits, delivery). It only needs a working contact form, clear price anchors, and one real customer. Products and website services remain active public surfaces but are not the outreach focus until custom design has produced at least one real proof artifact.

Current execution priority is:

```text
domain email -> trust setup -> custom design inquiry flow -> first real custom design request -> proof -> then expand to products and website clients
```

Products, custom design, and website design are all active public directions. None of the three should falsely present themselves as more mature than they really are.

---

## Phase 1 - Business Setup

Goal: make Auralis ready to accept money cleanly and credibly.

- [ ] Confirm Michigan LLC filing.
- [ ] Obtain EIN.
- [ ] Open business bank account.
- [ ] Decide public business address or service-area policy.
- [ ] Set up payment processing or invoicing.
- [ ] Confirm contract/payment terms before first paid engagement.
- [ ] Confirm whether a standard service agreement template is ready for first paid client.
- [ ] Confirm deposit/payment collection workflow.
- [ ] Confirm where signed agreements and invoices will be stored.

---

## Phase 2 - Trust Setup

Goal: reduce trust friction before outreach or traffic.

Current live note: as of 2026-05-16, the production contact env is configured and
the live form uses Formspree. Two desktop test submissions were received in the
Formspree dashboard. The mailto fallback no longer triggers.

- [ ] Set up domain email such as `hello@auralisdigital.net`.
- [ ] Replace public Gmail references where appropriate.
- [x] Create Formspree form and copy endpoint.
- [x] Add GitHub repo variable: `VITE_CONTACT_EMAIL`.
- [x] Add GitHub repo secret: `VITE_FORMSPREE_ENDPOINT`.
- [x] Trigger GitHub Pages deploy after contact env is configured.
- [x] Submit test inquiry from desktop on the live site.
- [x] Submit test inquiry from phone on the live site.
- [x] Confirm no mailto window opens after production env is configured.
- [x] Confirm submission arrives in Formspree/inbox.
- [x] Confirm success state appears after inquiry submission.
- [x] Confirm no visible console/network errors during form submission.
- [ ] Create or complete Google Business Profile.
- [ ] Confirm public phone/contact path.
- [ ] Decide service-area/address policy for public listings.
- [ ] Keep sample builds labeled as sample/demo work.
- [ ] Do not add testimonials until a real customer or client approves one.
- [ ] Confirm no fake client logos, reviews, discounts, urgency, or case studies appear on public surfaces.

---

## Phase 3 - Brand / Public-Positioning Clarity

Goal: keep the three-pillar public direction understandable.

- [ ] Confirm long-term relationship between `Auralis Digital` and `Auralis Design`.
- [ ] Verify live homepage behavior after deploy.
- [ ] Confirm homepage acts as a brand gateway instead of a product catalog.
- [ ] Confirm homepage routes visitors toward Products, Custom Design, and Website Design.
- [ ] Confirm no product pricing appears on the homepage.
- [ ] Confirm navigation clearly separates Products, Custom Design, and Website Design.
- [x] Confirm website-design prospects can find website demos from the Website Design page.
- [ ] Confirm website-design prospects can find contact/intake without confusion.
- [ ] Confirm custom-design visitors understand request boundaries.
- [ ] Confirm product buyers understand checkout opens through Shopify.
- [ ] Confirm public copy does not imply Auralis Digital processes card payments directly.
- [ ] Confirm public copy does not imply the product/shop surface is fully mature until commerce readiness is verified.
- [x] Refresh the public social preview card source so Facebook/Instagram no longer use website-services-only asset copy after cache refresh.
  - [x] Update the OG/social preview image source in `public/og-image.svg` and `public/assets/social-preview.svg`.
  - [x] Confirm homepage `<title>`, meta description, `og:title`, `og:description`, `twitter:title`, and `twitter:description` match the three-pillar brand direction.
  - [x] Confirm the social preview image copy matches Products, Custom Design, and Website Design instead of website-services-only positioning.
  - [x] Confirm refreshed social preview SVG assets return live HTTP `200` after deploy.
  - [x] Run build/test validation after changing metadata or image assets.
  - [ ] After deploy, use the Facebook Sharing Debugger and click `Scrape Again` for `https://www.auralisdigital.net/`.
  - [ ] Re-test a Facebook/Instagram post preview before public promotion.

---

## Phase 4 - Outreach / Traffic

Goal: generate real conversations and real purchase intent.

Use:

- `leads/LEADS_ACTIVE_OUTREACH.csv`
- `leads/OUTREACH_SCRIPTS.md`
- `leads/OUTREACH_PACKET.md`
- `leads/FOLLOW_UP_SYSTEM.md`

Weekly targets:

- [ ] 25 prospects or potential buyers researched.
- [ ] 10 outreach messages or traffic pushes.
- [ ] 5 follow-ups sent.
- [ ] 2 real conversations started.
- [ ] 1 proposal, quote, or product inquiry response sent.

Execution tasks:

- [x] Pick one first execution lane: **custom design**.
  - Chosen 2026-05-14. Products and website services remain active but are not the outreach focus.
- [ ] Add qualified prospects or buyers to tracking.
- [ ] Record each outreach or inquiry response.
- [ ] Record each follow-up.
- [ ] Move interested people into intake.
- [ ] Use third-party website audit/rebuild consultation path when the prospect already has a non-Auralis site.

---

## Phase 5 - First Real Transaction Or Client

Goal: complete one real engagement end to end.

Use:

- `onboarding/CLIENT_INTAKE_QUESTIONNAIRE.md`
- `leads/QUOTE_AND_SCOPE_TEMPLATE.md`
- `leads/PROPOSAL_TEMPLATE.md`
- `onboarding/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
- `onboarding/CLIENT_HANDOFF_CHECKLIST.md`

- [ ] Complete intake.
- [ ] Confirm scope, timeline, price, payment, and revision limits.
- [ ] Get written approval or signed agreement.
- [ ] Collect payment or deposit.
- [ ] Build, design, or fulfill.
- [ ] Launch, deliver, or hand off.
- [ ] Confirm final ownership/access expectations.
- [ ] Confirm any care-plan eligibility at handoff.

---

## Phase 6 - Proof

Goal: turn delivery into credibility.

Use:

- `onboarding/CLIENT_PROOF_WORKFLOW.md`
- `onboarding/CASE_STUDY_TEMPLATE.md`
- `onboarding/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`

- [ ] Ask for testimonial.
- [ ] Ask for portfolio permission.
- [ ] Capture screenshots or product proof.
- [ ] Publish live URL where allowed.
- [ ] Write case study.
- [ ] Offer the care plan when relevant.
- [ ] Add real testimonial only after explicit approval.
- [ ] Keep demo/sample work clearly labeled until tied to real permission.

---

## Phase 7 - Product / Commerce Readiness

Goal: verify the Auralis product surface before treating it as a mature commerce operation.

- [x] Verify Shopify product links from source/local public checks.
- [x] Verify Shopify product links from the live site after latest deploy.
- [ ] Verify Shopify checkout flow.
- [x] Verify local Auralis policy/support pages.
- [ ] Publish or verify Shopify refund policy link.
- [ ] Publish or verify Shopify shipping policy link.
- [ ] Verify Shopify privacy policy link.
- [ ] Publish or verify Shopify terms-of-service link.
- [ ] Confirm Shopify payment settings.
- [ ] Confirm tax settings.
- [ ] Confirm shipping settings.
- [ ] Run a real Shopify test order.
- [ ] Verify production-partner fulfillment flow for made-to-order products.
- [x] Remove production-partner branding from customer-facing website copy before public product traffic.
  - [x] Confirm no `Printify` text appears in `src/components/AuralisHomepage.tsx`.
  - [x] Confirm no `Printify` text appears in `src/data/shopCatalog.ts`.
  - [x] Confirm no `Printify` text appears in `scripts/generate-route-pages.mjs` route metadata.
  - [x] Confirm live `/products`, `/refund-policy`, `/shipping-policy`, `/privacy-policy`, and `/terms-of-service` pages do not visibly mention Printify.
  - [x] Keep Printify references allowed in internal docs/checklists where fulfillment setup is being tracked.
- [ ] Confirm production/fulfillment timing expectations.
- [ ] Confirm customer support email/path.
- [ ] Confirm product margin/profit assumptions.
- [ ] Confirm artwork/product-rights ownership workflow.
- [x] Confirm product photos are present for every current source product.
- [ ] Confirm product photos match the latest live Shopify/admin-side product truth before public sale.
- [ ] Confirm no fake product reviews/testimonials are implied.
- [ ] Create a dedicated commerce-readiness doc if this checklist grows beyond active TODO size.

---

## Phase 8 - Custom Design Readiness

Goal: verify the custom-design request flow before treating it as a mature service.

- [ ] Confirm custom-design inquiry flow works on desktop and phone.
- [x] Confirm custom-design request boundaries are visible publicly.
- [x] Add clear price anchors to custom design page (Simple $25 / Standard $50 / Premium $100+).
- [ ] Confirm pricing/revision expectations are not misleading.
- [ ] Confirm file-transfer/reference-image workflow.
- [ ] Confirm delivery/export workflow.
- [ ] Confirm rights/usage expectations for custom work.
- [ ] Confirm copyrighted-character/logo policy.
- [ ] Complete one real custom-design request.

---

## Phase 9 - Issue Cleanup

Goal: make open GitHub issues match current repo truth.

- [ ] Review issue #9 and confirm whether the third-party audit offer is fully implemented across all listed docs.
- [ ] Patch any remaining issue #9 docs if needed.
- [ ] Close issue #9 only after listed acceptance items are checked.
- [ ] Review issue #3 because React/Vite and direct-route support are already present.
- [ ] Close or rewrite issue #3 as deployment verification if still relevant.
- [ ] Review issue #2 before editing because it references older source assumptions.
- [ ] Verify whether duplicate demo cards still appear in the active live source.
- [x] Verify live website demo routes after PR #24.
  - [x] `/web-design` returns HTTP `200`.
  - [x] `/websites` returns HTTP `200`.
  - [x] `/websites/` returns HTTP `200`.
  - [x] All 10 website demo targets return HTTP `200`.
  - [x] Lawn Care demo route and local image assets return HTTP `200`.
  - [x] Deployed bundle uses root-relative `/projects/...` demo links.
  - [x] Lawn Care demo no longer contains the dead `RobsLawnCare` URL, old image path, fake phone number, mock-pricing wording, or old Website LLC/Y.O.U. branding.
- [ ] Keep issue #1 low priority until trust setup, checkout verification, and first proof are handled.

---

## Phase 10 - Deployment / Technical Guardrails

Goal: avoid breaking the live site while executing business work.

- [ ] Do not edit `gh-pages` manually.
- [ ] Do not merge `gh-pages` into `main`.
- [ ] Check `docs/tech/DEPLOYMENT_TRUTH.md` before deleting static HTML folders.
- [ ] Confirm whether a file is active deployment input before removing it.
- [ ] Run `npm run build` before merging website-source changes.
- [ ] Run `npm run lint` before merging website-source changes.
- [ ] Run `npm run test` when changing source behavior covered by tests.
- [ ] Avoid hosting-platform changes until current deployment is broken or business execution requires it.

---

## Phase 11 - Official Website Readiness Audit

Goal: close the gaps that make the site feel unfinished, unverified, or less official to customers, search engines, and local prospects.

This section came from the 2026-05-15 official-site audit. Treat these as TODOs, not completed claims.

### Structured Data / Schema

- [ ] Add JSON-LD `Organization` schema for Auralis Digital.
  - [ ] Use the canonical site URL: `https://www.auralisdigital.net/`.
  - [ ] Use the real brand name: `Auralis Digital`.
  - [ ] Use a real logo/image URL that returns live HTTP `200`.
  - [ ] Add `email` only after domain email is active.
  - [ ] Add `sameAs` only for real public profiles that are active and brand-aligned.
  - [ ] Do not add fake founders, fake social profiles, fake reviews, fake ratings, or fake legal claims.
- [ ] Add `LocalBusiness` or `ProfessionalService` schema for the website-service side only if the public business/service-area policy is confirmed.
  - [ ] Prefer `areaServed` for Southeast Michigan service coverage if no public address is being listed.
  - [ ] Do not publish a fake office address.
  - [ ] Do not publish fake hours.
  - [ ] Do not publish phone/address fields unless they are intentional public contact paths.
- [ ] Add `Service` schema on `/web-design` for website design, landing pages, mobile optimization, local SEO setup, contact/booking forms, and content/brand cleanup.
- [ ] Add `Person` schema only on a founder/about page and only for public founder details Christopher wants indexed.
- [ ] Add `Product` schema only after Shopify product truth is verified against live Shopify/admin-side product data.
  - [ ] Confirm product title, price, image, description, availability, shipping/policy assumptions, and canonical Shopify product URL before adding product schema.
  - [ ] Do not add aggregate ratings or reviews until real review data exists.
- [ ] Add `FAQPage` schema only for FAQ entries that are visibly present on the same public page.
- [ ] Test all schema with Google Rich Results Test where applicable.
- [ ] Test all schema with Schema Markup Validator.
- [ ] Re-check live page source after deploy to confirm JSON-LD is present on the public site.

### Domain Trust / Business Legitimacy

- [ ] Replace Gmail as the primary public business contact once domain email is active.
- [ ] Update source/env/public copy to use `hello@auralisdigital.net` or the chosen domain email.
- [ ] Confirm LLC filing before implying Auralis is a legally formed LLC.
- [ ] Confirm EIN before using it in business banking/payment setup docs.
- [ ] Confirm business bank account before treating the business as fully payment-ready.
- [ ] Confirm invoicing or payment processor before accepting paid custom design or website work.
- [ ] Confirm standard agreement, scope, payment, revision, delivery, and handoff docs before the first paid website/client engagement.
- [ ] Create or complete Google Business Profile only with truthful service-area/address/contact details.
- [ ] Decide whether Auralis is public-address, service-area-only, or online-only before publishing local listing details.

### Contact / Lead Capture Readiness

- [ ] Configure production `VITE_CONTACT_EMAIL`.
- [ ] Configure production `VITE_FORMSPREE_ENDPOINT`.
- [ ] Confirm the live form no longer falls back to mailto after production env is set.
- [ ] Submit one desktop test inquiry from the live site.
- [ ] Submit one phone test inquiry from the live site.
- [ ] Confirm Formspree/inbox receives each test inquiry.
- [ ] Confirm success UI appears after submission.
- [ ] Confirm failed submission UI is understandable.
- [ ] Confirm no contact-form console errors or blocked network requests.
- [ ] Add spam protection or Formspree-side safeguards if spam becomes visible.
- [ ] Add a clear response expectation if appropriate, such as `Replies usually within 1-2 business days`.

### Rendering / Performance / Core Web Vitals

- [ ] Run Lighthouse or PageSpeed Insights on the live homepage mobile view.
- [ ] Run Lighthouse or PageSpeed Insights on `/products` mobile view.
- [ ] Record current Core Web Vitals or lab metrics before optimization.
- [ ] Confirm only the true above-the-fold hero image or critical visual loads eagerly.
- [ ] Change product-grid and non-critical gallery images to lazy loading where appropriate.
- [ ] Avoid marking the first image of every product card as `eager`.
- [ ] Add explicit `width`, `height`, or stable aspect-ratio containers for product and demo images to reduce layout shift.
- [ ] Replace or request smaller Shopify CDN image sizes instead of loading `2048.jpg` assets where smaller display sizes are enough.
- [ ] Confirm images are compressed and visually acceptable on mobile.
- [ ] Review bundle size after build.
- [ ] Split or lazy-load heavier route content if homepage, products, policy content, demos, and catalog data inflate the initial bundle.
- [ ] Review whether the large `AuralisHomepage.tsx` component should be split by route or major section.
- [ ] Review unused dependencies and unused UI packages after the site stabilizes.
- [ ] Confirm JavaScript-rendered pages still expose enough crawlable title/description/canonical metadata through generated route pages.
- [ ] Confirm route-specific generated static pages are current after deployment.

### Accessibility / Usability

- [ ] Test keyboard navigation through header, mobile menu, product gallery, product cards, CTAs, policy links, and contact form.
- [ ] Confirm every interactive element has visible focus state.
- [ ] Confirm mobile menu opens, closes, and can be dismissed with Escape on desktop keyboard testing.
- [ ] Confirm form inputs have clear labels, required states, error states, and autocomplete where appropriate.
- [ ] Confirm image alt text is meaningful for product images, demos, logos, and social preview assets.
- [ ] Confirm decorative images/icons are hidden from assistive technology where appropriate.
- [ ] Check color contrast for hero text, muted text, buttons, product cards, and footer links.
- [ ] Confirm motion/parallax/reveal effects respect reduced-motion preferences.
- [ ] Confirm tap targets are comfortable on phone.
- [ ] Confirm all main pages have one clear `h1` and logical heading order.
- [ ] Confirm policy pages, product pages, custom-design pages, and website-design pages are readable without relying only on visuals.

### Privacy / Security / Analytics Boundaries

- [ ] Confirm no private API keys, Shopify Admin tokens, production-partner credentials, or form secrets are exposed in frontend source or built assets.
- [ ] Confirm only public-safe Vite variables are exposed to the browser.
- [ ] Confirm contact-form data collection matches the public privacy policy.
- [ ] Confirm Formspree or any form provider settings match what the privacy policy says.
- [ ] If analytics are added, document the provider, what is collected, and whether cookie/banner/privacy updates are required.
- [ ] Do not add tracking pixels, ad pixels, or retargeting scripts without updating privacy guidance first.
- [ ] Confirm external links that open Shopify or third-party tools use safe `target="_blank"` handling with `rel="noopener"`.
- [ ] Confirm no custom checkout, cart, payment, Shopify Admin API, or production-partner API logic is added to the public site without separate implementation review.
- [ ] Confirm no hidden automation, scraping, or background customer-data collection is added to the public site.

### Search / Sitemap / Route Hygiene

- [ ] Verify every URL in `sitemap.xml` returns live HTTP `200`.
- [ ] Verify every sitemap URL is intentional and current.
- [ ] Confirm `/products` is the preferred canonical product route.
- [ ] Decide whether `/shop` should remain an alias, redirect, or lower-priority sitemap entry.
- [ ] Confirm canonical URLs match the intended public route for every main route.
- [ ] Confirm `about-christopher.html` is still intentional before keeping it in the sitemap.
- [ ] Confirm `website-llc.html` is still intentional before keeping it in the sitemap.
- [ ] Confirm service-area pages are accurate, current, and do not overclaim local presence.
- [ ] Submit or re-submit sitemap in Google Search Console after major metadata/schema changes.
- [ ] Confirm Google Search Console property is set up for `auralisdigital.net`.

### Measurement / Post-Deploy Verification

- [ ] Create a simple post-deploy verification checklist for public-route checks after every metadata, schema, or contact-flow change.
- [ ] Verify homepage, products, custom-design, web-design, websites, and policy routes after deploy.
- [ ] Verify direct-route reload behavior for React routes on GitHub Pages.
- [ ] Verify contact form after every contact/env/deployment change.
- [ ] Record Lighthouse/PageSpeed results before and after major performance changes.
- [ ] Record schema validation results after structured-data changes.
- [ ] Record Search Console indexing or sitemap submission status when available.
- [ ] Record Facebook/Instagram/social preview refresh status after social metadata changes.
- [ ] Keep proof screenshots or notes for major readiness checks in docs or a dedicated proof folder only if they are useful for future execution.

### Social Preview / Metadata

- [ ] Confirm live `og:image` returns HTTP `200`.
- [ ] Confirm `og:image` is 1200 x 630 or otherwise social-preview safe.
- [ ] Confirm Open Graph and Twitter metadata match the three-pillar public direction.
- [ ] Use Facebook Sharing Debugger to scrape the homepage after deploy.
- [ ] Test a real Facebook/Instagram share preview before public promotion.
- [ ] Test a text-message/iMessage preview if mobile outreach will use the domain.

### Positioning / Copy Consistency

- [ ] Keep the public one-line positioning consistent: products, custom design, and websites under one creative brand.
- [ ] Confirm the homepage does not make website design look like the only offer.
- [ ] Confirm the product page does not make Auralis look like it runs checkout/payment directly.
- [ ] Confirm custom design copy does not imply every request is automatically accepted.
- [ ] Confirm website design copy does not imply completed client proof before real client work exists.
- [ ] Confirm demos are labeled as demos/samples unless tied to real delivered work and permission.
- [ ] Remove or revise any stale wording from older `Website LLC`, `Y.O.U.`, or website-only positioning where it appears on public surfaces.

### Commerce / Shopify Verification

- [ ] Verify Shopify product titles, prices, images, descriptions, variants, and availability against live Shopify/admin truth before public sale traffic.
- [ ] Verify Shopify checkout flow up to final payment confirmation in incognito.
- [ ] Verify Shopify payment settings.
- [ ] Verify Shopify tax settings.
- [ ] Verify Shopify shipping settings.
- [ ] Verify Shopify-hosted refund, shipping, privacy, and terms policies.
- [ ] Verify production-partner fulfillment/test-order workflow before scaling product traffic.
- [ ] Confirm support email and order-support workflow.
- [ ] Confirm product margins after production, shipping, taxes/fees, and platform costs.
- [ ] Confirm artwork/product-rights workflow before adding custom or customer-submitted designs to products.

### Proof / Public Claims Guardrails

- [ ] Do not add testimonials until a real customer or client gives approval.
- [ ] Do not add reviews, ratings, stars, or aggregate review schema until real review data exists.
- [ ] Do not add fake client logos.
- [ ] Do not use fake urgency, fake discounts, or fake sales language.
- [ ] Do not claim completed client delivery until it exists.
- [ ] Do not claim mature commerce readiness until Shopify checkout, policies, support, fulfillment, and test-order checks pass.

### Acceptance Gate

Official-site readiness can be marked complete only after:

- [ ] Domain email is live and public Gmail fallback is removed or intentionally secondary.
- [ ] Formspree/contact backend works on the live site from desktop and phone.
- [ ] Organization schema is live and validated.
- [ ] Service/local schema is live only if truthful business/service-area data is confirmed.
- [ ] PageSpeed/Lighthouse mobile issues are recorded and the worst image/rendering issues are addressed.
- [ ] Accessibility keyboard, focus, contrast, reduced-motion, form-label, and heading-order checks are complete.
- [ ] Privacy/security review confirms no private keys, Admin tokens, hidden tracking, or unsupported data collection were added.
- [ ] Sitemap URLs are verified.
- [ ] Google Search Console is set up or intentionally deferred with a note.
- [ ] Google Business Profile is set up or intentionally deferred with a note.
- [ ] Shopify checkout/policy/support readiness is verified before serious product traffic.
- [ ] Public proof remains truthful: no fake testimonials, fake reviews, fake case studies, fake urgency, or fake logos.
- [ ] Post-deploy verification notes exist for schema, social preview, contact flow, sitemap/indexing, and performance checks.

---

## Anti-Stall Rule

Do not confuse planning with progress. Revenue and proof come from real visitors, real conversations, real transactions, and real delivery.

If a task does not support business setup, trust setup, inquiry flow, outreach, first-client delivery, first sale, proof, retention, or verified commerce readiness, defer it.