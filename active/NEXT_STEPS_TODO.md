# Auralis Digital Active Execution

Last updated: 2026-05-19

## Current Mode

Repo cleanup is complete. Do not restart cleanup unless something is actively broken.

Auralis Digital currently contains three related public surfaces:

1. Auralis Design products
2. custom / personalized design requests
3. website design services

Current active execution lane: **Shopify storefront pre-launch validation for Auralis Design products**.

This does not mean the product/shop surface is mature. It means the latest active work has shifted toward making the Shopify storefront coherent, sample-ready, and testable before traffic.

Custom design and website design remain active public surfaces, but the current execution focus is now the storefront validation path because live Shopify products and collections were materially updated on 2026-05-19.

Current execution priority is:

```text
Shopify storefront truth -> homepage/collection curation -> sample orders -> checkout/policy verification -> 7-day Before Sunrise organic campaign -> analytics review -> first real product sale or proof
```

Products, custom design, and website design are all active public directions. None of the three should falsely present themselves as more mature than they really are.

Canonical current storefront truth:

- `docs/marketing/STOREFRONT_IDENTITY_AND_SHOPIFY_TRUTH_2026-05-19.md`
- `active/current_14_day_drop.md`

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

Current live note: as of 2026-05-16, the production contact env is configured and the live form uses Formspree. Two desktop test submissions were received in the Formspree dashboard. The mailto fallback no longer triggers.

Current contact correction: domain email is not configured yet. Auralis is using `auralisdigitaleco@gmail.com` as the temporary contact inbox until a domain email such as `hello@auralisdigital.net` is active and verified.

- [ ] Set up domain email such as `hello@auralisdigital.net`.
- [x] Use `auralisdigitaleco@gmail.com` as the temporary contact inbox.
- [ ] Replace public Gmail references where appropriate only after domain email is active.
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

Goal: keep the three-pillar public direction understandable while reflecting the newer Shopify/storefront identity work.

- [ ] Confirm long-term relationship between `Auralis Digital` and `Auralis Design`.
- [ ] Verify live homepage behavior after deploy.
- [ ] Confirm homepage acts as a brand gateway instead of a raw product catalog.
- [ ] Confirm homepage routes visitors toward Products, Custom Design, and Website Design.
- [ ] Confirm Shopify storefront/homepage presentation prioritizes Operator Series / Before Sunrise without erasing Custom Design or Website Design.
- [ ] Confirm no product pricing appears on the Auralis Digital homepage unless intentionally selected.
- [ ] Confirm navigation clearly separates Products, Custom Design, and Website Design.
- [x] Confirm website-design prospects can find website demos from the Website Design page.
- [ ] Confirm website-design prospects can find contact/intake without confusion.
- [ ] Confirm custom-design visitors understand request boundaries.
- [ ] Confirm product buyers understand checkout opens through Shopify.
- [ ] Confirm public copy does not imply Auralis Digital processes card payments directly.
- [ ] Confirm public copy does not imply the product/shop surface is fully mature until commerce readiness is verified.
- [ ] Confirm public product/storefront language follows the 2026-05-19 identity system: cinematic operator lifestyle brand, secondary symbolic/art archive, restrained non-generic tone.
- [x] Refresh the public social preview card source so Facebook/Instagram no longer use website-services-only asset copy after cache refresh.
  - [x] Update the OG/social preview image source in `public/og-image.svg` and `public/assets/social-preview.svg`.
  - [x] Confirm homepage `<title>`, meta description, `og:title`, `og:description`, `twitter:title`, and `twitter:description` match the three-pillar brand direction.
  - [x] Confirm the social preview image copy matches Products, Custom Design, and Website Design instead of website-services-only positioning.
  - [x] Confirm refreshed social preview SVG assets return live HTTP `200` after deploy.
  - [x] Run build/test validation after changing metadata or image assets.
  - [ ] After deploy, use the Facebook Sharing Debugger and click `Scrape Again` for `https://www.auralisdigital.net/`.
  - [ ] Re-test a Facebook/Instagram post preview before public promotion.

---

## Phase 4 - Storefront / Commerce Pre-Launch Validation

Goal: make the current Shopify storefront coherent, sample-checked, and testable before traffic.

Primary docs:

- `docs/marketing/STOREFRONT_IDENTITY_AND_SHOPIFY_TRUTH_2026-05-19.md`
- `active/current_14_day_drop.md`
- `docs/marketing/14_DAY_PRODUCT_VALIDATION_LOOP.md`
- `docs/marketing/COMMERCE_LOOP_GUARDRAILS.md`

Current Sprint 01 campaign:

## Before Sunrise / Operator Series

Primary products:

1. Yard Operator Full-Zip Hoodie
2. No Shortcuts Performance Tee
3. Built Before Sunrise Quarter-Zip
4. Built Before Sunrise Performance Tee
5. Garage Standard Full-Zip Hoodie

Pre-launch tasks:

- [ ] Create or upload Operator Series collection banner.
- [ ] Create or upload Lawn & Power collection banner.
- [ ] Create or upload Garage & Mechanic collection banner.
- [ ] Create or upload Art & Symbolic collection banner.
- [ ] Curate Shopify homepage around Operator Series / Before Sunrise.
- [ ] Confirm the default `Home page` collection is not undermining the new storefront direction.
- [ ] Confirm draft products priced at `0.00` are not customer-visible as sellable products.
- [ ] Order at least one tee sample.
- [ ] Order at least one hoodie sample.
- [ ] Order at least one quarter-zip sample.
- [ ] Verify print quality.
- [ ] Verify garment quality and sizing.
- [ ] Verify production/shipping timing.
- [ ] Verify Shopify checkout flow up to final payment confirmation.
- [ ] Verify Shopify-hosted refund policy link.
- [ ] Verify Shopify-hosted shipping policy link.
- [ ] Verify Shopify-hosted privacy policy link.
- [ ] Verify Shopify-hosted terms-of-service link.
- [ ] Confirm Shopify payment settings.
- [ ] Confirm tax settings.
- [ ] Confirm shipping settings.
- [ ] Confirm support email/order-support workflow.
- [ ] Confirm margins after production, shipping, taxes, fees, and platform costs.
- [ ] Prepare 7-day organic Before Sunrise campaign content.
- [ ] Log campaign posts/results in the trackers before claiming signal.

Analytics baseline checked 2026-05-19:

- 42 sessions in last 30 days
- 1 add-to-cart session
- 1 checkout-reached session
- 0 completed checkouts
- 0% conversion rate

Interpretation: insufficient validation signal. Do not scale ads or product volume yet.

---

## Phase 5 - Outreach / Traffic

Goal: generate real conversations, purchase intent, and proof after the storefront is minimally testable.

Use:

- `leads/LEADS_ACTIVE_OUTREACH.csv`
- `leads/OUTREACH_SCRIPTS.md`
- `leads/OUTREACH_PACKET.md`
- `leads/FOLLOW_UP_SYSTEM.md`
- `trackers/content_calendar.csv`
- `trackers/product_performance.csv`
- `trackers/campaign_results.csv`

Weekly targets after storefront pre-launch gates:

- [ ] 25 prospects or potential buyers researched.
- [ ] 10 outreach messages or traffic pushes.
- [ ] 5 follow-ups sent.
- [ ] 2 real conversations started.
- [ ] 1 product inquiry, custom-design inquiry, proposal, or quote response sent.

Execution tasks:

- [ ] Add qualified prospects or buyers to tracking.
- [ ] Record each outreach or inquiry response.
- [ ] Record each follow-up.
- [ ] Move interested people into intake.
- [ ] Use third-party website audit/rebuild consultation path when the prospect already has a non-Auralis site.

---

## Phase 6 - First Real Transaction Or Client

Goal: complete one real engagement or sale end to end.

Use:

- `onboarding/CLIENT_INTAKE_QUESTIONNAIRE.md`
- `leads/QUOTE_AND_SCOPE_TEMPLATE.md`
- `leads/PROPOSAL_TEMPLATE.md`
- `onboarding/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
- `onboarding/CLIENT_HANDOFF_CHECKLIST.md`

- [ ] Complete intake if custom/website work.
- [ ] Confirm scope, timeline, price, payment, and revision limits where applicable.
- [ ] Get written approval or signed agreement where applicable.
- [ ] Collect payment or deposit where applicable.
- [ ] Complete sale, build, design, or fulfill.
- [ ] Launch, deliver, ship, or hand off.
- [ ] Confirm final ownership/access expectations where applicable.
- [ ] Confirm any care-plan eligibility at handoff where applicable.

---

## Phase 7 - Proof

Goal: turn delivery or sale into credibility.

Use:

- `onboarding/CLIENT_PROOF_WORKFLOW.md`
- `onboarding/CASE_STUDY_TEMPLATE.md`
- `onboarding/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`

- [ ] Ask for testimonial.
- [ ] Ask for portfolio/product-proof permission.
- [ ] Capture screenshots or product proof.
- [ ] Publish live URL where allowed.
- [ ] Write case study or product proof note.
- [ ] Offer the care plan when relevant.
- [ ] Add real testimonial only after explicit approval.
- [ ] Keep demo/sample work clearly labeled until tied to real permission.

---

## Phase 8 - Custom Design Readiness

Goal: keep the custom-design request flow available without confusing it with the current Shopify storefront focus.

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

- [ ] Add truthful Organization schema.
- [ ] Add service/local schema only after service-area/address/contact details are confirmed.
- [ ] Run Lighthouse or PageSpeed Insights on live homepage and `/products` mobile view.
- [ ] Confirm accessibility basics: keyboard navigation, focus state, form labels, contrast, reduced motion, heading order, tap targets.
- [ ] Confirm no private API keys, Shopify Admin tokens, production-partner credentials, or form secrets are exposed in frontend source or built assets.
- [ ] Verify every URL in `sitemap.xml` returns live HTTP `200`.
- [ ] Confirm Google Search Console property is set up or intentionally deferred.
- [ ] Confirm Open Graph/Twitter/social preview assets and metadata remain current.
- [ ] Confirm public proof remains truthful: no fake testimonials, fake reviews, fake case studies, fake urgency, or fake logos.

---

## Anti-Stall Rule

Do not confuse planning with progress. Revenue and proof come from real visitors, real conversations, real transactions, real delivery, and verified commerce readiness.

If a task does not support business setup, trust setup, storefront readiness, inquiry flow, outreach, first-client delivery, first sale, proof, retention, or verified commerce readiness, defer it.
