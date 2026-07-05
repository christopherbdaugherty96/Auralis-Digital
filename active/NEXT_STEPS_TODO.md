# Auralis Digital Active Execution

Last updated: 2026-07-04

## Current Mode

Repo cleanup is complete. Do not restart cleanup unless something is actively broken.

Auralis Digital currently contains four related public surfaces:

1. Lucid Creations products
2. RJ Print products
3. custom / personalized design requests
4. website design services

Current active execution lane: **Shopify storefront pre-launch validation with separate Lucid Creations and RJ Print collections**.

This does not mean the product/shop surface is mature. It means the current work is to make the Shopify storefront coherent, sample-ready, checkout-ready, collection-separated, and testable before traffic.

Current Shopify decision: keep one Shopify store for now. Use separate collections/pages for Lucid Creations and RJ Print. Do not create a second Shopify store yet.

Current direction correction: Auralis Design should focus on Christopher's own sacred-geometry, psychedelic, symbolic, cosmic, and spiritual-inspired artwork. The operator / blue-collar / Before Sunrise direction is not active and should not guide the brand, website, Shopify collections, captions, or outreach.

Current execution priority is:

```text
sacred-geometry storefront truth -> strongest 3-5 product focus -> homepage/collection curation -> checkout/policy verification -> small organic product test -> analytics review -> first real product sale or proof
```

Lucid Creations, RJ Print, custom design, and website design are all active public directions. None should falsely present themselves as more mature than they really are.

Canonical current storefront truth:

- `docs/marketing/STOREFRONT_IDENTITY_AND_SHOPIFY_TRUTH_2026-05-19.md`
- `active/current_14_day_drop.md`

## Current Priority List

### Next Execution Order

1. Finish the remaining product image reorder pass manually or with an exact Shopify media-ordering tool.
2. Add the first real RJ Print products.
3. Build collection navigation/pages and homepage integration only after RJ Print has enough real inventory.
4. Move into operational cleanup: domain, 2FA, customs/HS codes, shipping coverage, and taxes.

### Product Image Reorder Pass

These are reorder-only fixes with visible customer impact. Do not use image replacement tools or bulk media operations. Only use a tool that supports exact Shopify media ordering while preserving variant mappings; otherwise perform the reorder manually in Shopify.

- [x] Psychedelic Ying Yang Tee - already artwork-first.
- [x] Sid Girl Midweight Softstyle Fleece Hoodie - already artwork-first.
- [ ] Treehugger Hoodie - manual reorder still needed.
- [ ] Sun of Life Hooded Sherpa Fleece Blanket - manual reorder still needed; image 3 is the clearest artwork-forward view.

### Storefront

- [x] Policies
- [x] Footer socials
- [x] Sender email
- [ ] Add Shopify footer email signup/newsletter section for `WELCOME10`.
  - Headline: `Get 10% off your first order`
  - Body: `Join the list for new drops, custom design ideas, and made-to-order updates. Use code WELCOME10 at checkout.`
  - Button: `Get 10% Off`
- [ ] Complete Meta Business Suite account verification for `@auralis_digital_` so Instagram/Facebook posts can be scheduled.
  - Decision: keep `@auralis_digital_` as the permanent Instagram Shopping / Meta commerce account.
  - Do not migrate Meta commerce to `@lucid.creation` unless intentionally restarting account approval/review later.
- [ ] Update `@auralis_digital_` bio to the current Lucid Creations / Auralis Digital storefront positioning.
  - Bio: `Auralis Digital Hub`
  - Line 2: `Lucid Creations shop + custom design`
  - Line 3: `Made-to-order apparel, blankets & decor`
  - Line 4: `10% off first order: WELCOME10`
- [ ] Rename Instagram highlight groups from generic `Highlights` labels to clearer storefront labels: `Shop`, `Custom`, `Drops`, `Made to Order`.
- [ ] Schedule the first 8 Instagram product posts from `docs/marketing/INSTAGRAM_PRODUCT_ROLLOUT.md` after Meta verification clears.
- [x] Product image cleanup
- [x] Create or verify Lucid Creations collection.
- [x] Create or verify RJ Print collection.
- [x] Audit every existing product and assign it to Lucid Creations, RJ Print, or Both only if truly justified.
- [x] Confirm Lucid Creations contains current apparel, blankets, pillows, wall art, and art-based POD products.
- [x] Confirm RJ Print currently remains empty until real 3D print inventory exists.
- [ ] Build collection navigation/pages.
- [ ] Add homepage integration for Lucid Creations and RJ Print paths.

### RJ Print

- [x] Build RJ Print collection as empty infrastructure.
- [ ] Add first 3D printed products; target at least 5 before homepage/navigation promotion.
- [ ] Create RJ Print category structure.
- [ ] Determine whether any Printify products belong in Lucid Creations or RJ Print.
- [ ] Add a "Custom 3D Print Request" path under RJ Print for highly customized 3D print commissions.
- [ ] Keep RJ Print out of homepage/navigation until it has at least 5 real products.

### Operational Cleanup

- [ ] Branded domain.
- [ ] 2FA verification.
- [ ] Customs origin country data.
- [ ] HS codes.
- [ ] Shipping coverage review.
- [ ] Tax review.

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

Goal: keep the public direction understandable while reflecting the corrected sacred-geometry / psychedelic product identity and the Lucid Creations / RJ Print shop split.

- [ ] Confirm long-term relationship between `Auralis Digital`, `Lucid Creations`, and `RJ Print`.
- [ ] Verify live homepage behavior after deploy.
- [ ] Confirm homepage acts as a brand gateway instead of a raw product catalog.
- [ ] Confirm homepage routes visitors toward Products, Custom Design, and Website Design.
- [ ] Confirm Shopify storefront/homepage presentation prioritizes sacred geometry, psychedelic art, symbolic products, and personal designs.
- [ ] Confirm no active public copy presents Operator Series, Before Sunrise, Lawn & Power, Garage & Mechanic, Independent Builder, or blue-collar workwear as the Auralis direction.
- [ ] Confirm no product pricing appears on the Auralis Digital homepage unless intentionally selected.
- [ ] Confirm navigation clearly separates Lucid Creations, RJ Print, Custom Design, and Website Design.
- [x] Confirm website-design prospects can find website demos from the Website Design page.
- [ ] Confirm website-design prospects can find contact/intake without confusion.
- [ ] Confirm custom-design visitors understand request boundaries.
- [ ] Confirm product buyers understand checkout opens through Shopify.
- [ ] Confirm public copy does not imply Auralis Digital processes card payments directly.
- [ ] Confirm public copy does not imply the product/shop surface is fully mature until commerce readiness is verified.
- [ ] Confirm public product/storefront language follows the corrected identity: sacred geometry, psychedelic art, symbolic/cosmic personal designs, custom design bridge, honest non-hype tone.
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

## Sacred Geometry / Psychedelic Product Focus

The website catalog now contains 30 products across 7 categories (Apparel, Blankets, Wall Decor, Hats, Home Decor, Jewelry & Accessories, Journals & Notebooks). Select the strongest 3-5 for focused campaign testing from the full catalog in `src/data/shopCatalog.ts`.

Pre-launch tasks:

- [ ] Create or verify separate Shopify collections for Lucid Creations and RJ Print.
- [ ] Confirm Auralis Digital lets customers browse Lucid Creations separately from RJ Print.
- [ ] Confirm RJ Print remains in the same Shopify store for now.
- [ ] Select the first 3-5 sacred-geometry / psychedelic products to test.
- [ ] Confirm product titles, images, prices, and descriptions match the corrected direction.
- [ ] Create or upload Sacred Geometry / Balance collection banner.
- [ ] Create or upload Psychedelic / Cosmic collection banner.
- [ ] Create or upload Sun of Life collection banner.
- [ ] Create or upload Mythic / Zeus archive banner if those products remain public.
- [ ] Curate Shopify homepage around the selected symbolic-art campaign.
- [ ] Confirm the default `Home page` collection is not undermining the corrected storefront direction.
- [ ] Confirm any draft or placeholder products priced at `0.00` are not customer-visible as sellable products.
- [ ] Verify product quality through samples or careful self-check before heavy promotion.
- [ ] Verify print quality for promoted products.
- [ ] Verify product quality, size, and material expectations.
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
- [ ] Prepare 7-day organic content around the corrected sacred-geometry / psychedelic campaign.
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

Goal: keep the custom-design request flow available and connected to the corrected symbolic-art product direction.

- [ ] Confirm custom-design inquiry flow works on desktop and phone.
- [x] Confirm custom-design request boundaries are visible publicly.
- ~~Add clear price anchors to custom design page.~~ Removed — public pricing tiers were intentionally deleted. Do not re-add.
- [ ] Confirm pricing/revision expectations are not misleading.
- [ ] Confirm file-transfer/reference-image workflow.
- [ ] Confirm delivery/export workflow.
- [ ] Confirm rights/usage expectations for custom work.
- [ ] Confirm copyrighted-character/logo policy.
- [ ] Confirm custom requests can include sacred geometry, psychedelic art, symbolic themes, color/energy direction, personal phrases, yin-yang/balance, zodiac/animal themes, or gift concepts.
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
