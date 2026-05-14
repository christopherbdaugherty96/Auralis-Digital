# Auralis Digital Active Execution

Last updated: 2026-05-14

## Current Mode

Repo cleanup is complete. Do not restart cleanup unless something is actively broken.

Auralis Digital currently contains three related public surfaces:

1. Auralis Design products
2. custom / personalized design requests
3. website design services

Current execution priority is:

```text
business setup -> trust setup -> inquiry flow -> products/custom design/web design clarity -> first real sale or client -> proof
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

- [ ] Set up domain email such as `hello@auralisdigital.net`.
- [ ] Replace public Gmail references where appropriate.
- [ ] Create Formspree form and copy endpoint.
- [ ] Add GitHub repo variable: `VITE_CONTACT_EMAIL`.
- [ ] Add GitHub repo secret: `VITE_FORMSPREE_ENDPOINT`.
- [ ] Trigger GitHub Pages deploy after contact env is configured.
- [ ] Submit test inquiry from desktop on the live site.
- [ ] Submit test inquiry from phone on the live site.
- [ ] Confirm no mailto window opens after production env is configured.
- [ ] Confirm submission arrives in Formspree/inbox.
- [ ] Confirm success state appears after inquiry submission.
- [ ] Confirm no visible console/network errors during form submission.
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
- [ ] Confirm website-design prospects can find contact/intake without confusion.
- [ ] Confirm custom-design visitors understand request boundaries.
- [ ] Confirm product buyers understand checkout opens through Shopify.
- [ ] Confirm public copy does not imply Auralis Digital processes card payments directly.
- [ ] Confirm public copy does not imply the product/shop surface is fully mature until commerce readiness is verified.

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

- [ ] Pick one first execution lane:
  - products
  - custom design
  - website design
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

- [ ] Verify Shopify product links from the live site.
- [ ] Verify Shopify checkout flow.
- [ ] Verify local Auralis policy/support pages.
- [ ] Publish or verify Shopify refund policy link.
- [ ] Publish or verify Shopify shipping policy link.
- [ ] Verify Shopify privacy policy link.
- [ ] Publish or verify Shopify terms-of-service link.
- [ ] Confirm Shopify payment settings.
- [ ] Confirm tax settings.
- [ ] Confirm shipping settings.
- [ ] Run a real Shopify test order.
- [ ] Verify Printify fulfillment flow for Printify products.
- [ ] Remove Printify from customer-facing website copy before public product traffic.
  - [ ] Confirm no `Printify` text appears in `src/components/AuralisHomepage.tsx`.
  - [ ] Confirm no `Printify` text appears in `src/data/shopCatalog.ts`.
  - [ ] Confirm no `Printify` text appears in `scripts/generate-route-pages.mjs` route metadata.
  - [ ] Confirm live `/products`, `/refund-policy`, `/shipping-policy`, `/privacy-policy`, and `/terms-of-service` pages do not visibly mention Printify.
  - [ ] Keep Printify references allowed in internal docs/checklists where fulfillment setup is being tracked.
- [ ] Confirm production/fulfillment timing expectations.
- [ ] Confirm customer support email/path.
- [ ] Confirm product margin/profit assumptions.
- [ ] Confirm artwork/product-rights ownership workflow.
- [ ] Confirm product photos/mockups are accurate enough for public sale.
- [ ] Confirm no fake product reviews/testimonials are implied.
- [ ] Create a dedicated commerce-readiness doc if this checklist grows beyond active TODO size.

---

## Phase 8 - Custom Design Readiness

Goal: verify the custom-design request flow before treating it as a mature service.

- [ ] Confirm custom-design inquiry flow works on desktop and phone.
- [ ] Confirm custom-design request boundaries are visible publicly.
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

## Anti-Stall Rule

Do not confuse planning with progress. Revenue and proof come from real visitors, real conversations, real transactions, and real delivery.

If a task does not support business setup, trust setup, inquiry flow, outreach, first-client delivery, first sale, proof, retention, or verified commerce readiness, defer it.
