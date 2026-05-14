# Auralis Digital Active Execution

Last updated: 2026-05-13

## Current Mode

Repo cleanup is complete. Do not restart cleanup unless something is actively broken.

Auralis Digital currently contains two related public surfaces:

1. website services for local businesses
2. an Auralis Design product/shop surface with Shopify checkout routing

Current execution priority remains website services first:

```text
business setup -> trust setup -> lead capture -> outreach -> first client -> proof
```

The product/shop surface exists, but should not be treated as a mature commerce operation until commerce readiness is verified.

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

Goal: reduce new-business trust friction before outreach.

- [ ] Set up domain email such as `hello@auralisdigital.net`.
- [ ] Replace public Gmail references where appropriate.
- [ ] Create Formspree form and copy endpoint.
- [ ] Add GitHub repo variable: `VITE_CONTACT_EMAIL`.
- [ ] Add GitHub repo secret: `VITE_FORMSPREE_ENDPOINT`.
- [ ] Trigger GitHub Pages deploy after contact env is configured.
- [ ] Submit test form from desktop on the live site.
- [ ] Submit test form from phone on the live site.
- [ ] Confirm no mailto window opens after production env is configured.
- [ ] Confirm submission arrives in Formspree/inbox.
- [ ] Confirm success state appears after form submission.
- [ ] Confirm no visible console/network errors during form submission.
- [ ] Create or complete Google Business Profile.
- [ ] Confirm public phone/contact path.
- [ ] Decide service-area/address policy for public listings.
- [ ] Keep sample builds labeled as sample/demo work.
- [ ] Do not add testimonials until a real client approves one.
- [ ] Confirm no fake client logos, reviews, or case studies appear on public surfaces.

---

## Phase 3 - Brand / Public-Positioning Clarity

Goal: prevent confusion between the website-services business and the Auralis Design product/shop surface.

- [ ] Confirm long-term relationship between `Auralis Digital` and `Auralis Design`.
- [ ] Patch homepage hero/meta positioning so website services remain primary while the shop stays secondary.
- [ ] Confirm homepage CTA order matches website-services-first execution priority.
- [ ] Confirm navigation clearly separates Shop and Website Services.
- [ ] Confirm website-services prospects can find contact/intake without being confused by product-shop content.
- [ ] Confirm product buyers understand checkout opens through Shopify.
- [ ] Confirm public copy does not imply Auralis Digital collects product payments directly.
- [ ] Confirm public copy does not imply the product/shop surface is fully mature until commerce readiness is verified.

---

## Phase 4 - Outreach

Goal: generate real conversations.

Use:

- `leads/LEADS_ACTIVE_OUTREACH.csv`
- `leads/OUTREACH_SCRIPTS.md`
- `leads/OUTREACH_PACKET.md`
- `leads/FOLLOW_UP_SYSTEM.md`

Weekly targets:

- [ ] 25 prospects researched.
- [ ] 10 outreach messages sent.
- [ ] 5 follow-ups sent.
- [ ] 2 real conversations started.
- [ ] 1 proposal sent.

Execution tasks:

- [ ] Pick one local niche for the first outreach push.
- [ ] Add qualified prospects to `leads/LEADS_ACTIVE_OUTREACH.csv`.
- [ ] Record each outreach attempt.
- [ ] Record each follow-up.
- [ ] Move interested leads into intake.
- [ ] Use third-party website audit/rebuild consultation path when the prospect already has a non-Auralis site.

---

## Phase 5 - First Client

Goal: deliver one real engagement end to end.

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
- [ ] Build and review.
- [ ] Launch or hand off.
- [ ] Confirm final client ownership/access expectations.
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
- [ ] Capture screenshots.
- [ ] Publish live URL where allowed.
- [ ] Write case study.
- [ ] Offer the care plan.
- [ ] Add real testimonial only after explicit approval.
- [ ] Keep demo/sample work clearly labeled until tied to real client permission.

---

## Phase 7 - Product / Commerce Readiness

Goal: verify the Auralis Design shop/product surface before treating it as a mature commerce operation.

- [ ] Verify Shopify product links from the live site.
- [ ] Verify Shopify checkout flow.
- [ ] Verify Auralis Digital local policy links.
- [ ] Publish or verify Shopify refund policy link.
- [ ] Publish or verify Shopify shipping policy link.
- [ ] Verify Shopify privacy policy link.
- [ ] Publish or verify Shopify terms-of-service link.
- [ ] Confirm Shopify payment settings.
- [ ] Confirm tax settings.
- [ ] Confirm shipping settings.
- [ ] Run a real Shopify test order.
- [ ] Verify Printify fulfillment flow for Printify products.
- [ ] Confirm production/fulfillment timing expectations.
- [ ] Confirm customer support email/path.
- [ ] Confirm product margin/profit assumptions.
- [ ] Confirm artwork/product-rights ownership workflow.
- [ ] Confirm product photos/mockups are accurate enough for public sale.
- [ ] Confirm no fake product reviews/testimonials are implied.
- [ ] Create a dedicated commerce-readiness doc if this checklist grows beyond active TODO size.

---

## Phase 8 - Issue Cleanup

Goal: make open GitHub issues match current repo truth.

- [ ] Review issue #9 and confirm whether the third-party audit offer is fully implemented across all listed docs.
- [ ] Patch any remaining issue #9 docs if needed.
- [ ] Close issue #9 only after listed acceptance items are checked.
- [ ] Review issue #3 because React/Vite appears already present.
- [ ] Close or rewrite issue #3 as deployment verification if still relevant.
- [ ] Review issue #2 before editing because it references `index.html` while current source also includes React/Vite.
- [ ] Verify whether duplicate demo cards still appear in the active live homepage source.
- [ ] Keep issue #1 low priority until trust setup, contact backend, outreach, and first-client proof are handled.

---

## Phase 9 - Deployment / Technical Guardrails

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

Do not confuse planning with progress. Revenue comes from conversations, delivery, and proof.

If a task does not support business setup, trust setup, lead capture, outreach, first-client delivery, proof, retention, or verified commerce readiness, defer it.
