# Auralis Digital Roadmap

Last updated: 2026-05-17

## Current Truth

The docs and website foundation are strong enough to sell from.

Auralis Digital currently contains two related public surfaces:

1. website services for local businesses
2. an Auralis Design product/shop surface with Shopify checkout routing

Current execution priority remains:

```text
website services
trust setup
lead capture
outreach
first client delivery
real proof
```

The product/shop surface exists publicly, but it should not replace the active execution priority unless the business focus intentionally changes.

Reference:

- `docs/AURALIS_CURRENT_STATUS.md`
- `docs/STATUS.md`
- `docs/tech/NEXT_STEP_FORM_BACKEND.md`

## Priority Order

1. Confirm Michigan LLC filing.
2. Obtain EIN.
3. Open a business bank account.
4. Set up domain email, preferably `hello@auralisdigital.net`.
5. Configure and verify the production contact-form backend.
6. Set up payment processing or invoicing.
7. Create or complete Google Business Profile.
8. Start focused local outreach.
9. Close and deliver one real client.
10. Capture testimonial, live URL, and case study.
11. Offer the $250/month managed hosting and care plan at handoff.
12. Separately verify Shopify/Printify commerce readiness if the product surface remains public-facing.

## Phase 1 - Business Foundation

Goal: remove the biggest legitimacy and operational blockers.

Tasks:

- [ ] Confirm LLC filing with Michigan.
- [ ] Obtain EIN.
- [ ] Open business bank account.
- [ ] Decide public business address/service-area policy.
- [ ] Set up domain email.
- [ ] Configure and verify live contact-form backend.
- [ ] Set up invoicing/payment processing.
- [ ] Confirm contract template and payment terms before first paid engagement.

Success criteria:

```text
Auralis can accept money cleanly under the business identity.
Lead capture works reliably on the public site.
```

## Phase 2 - Public Trust Setup

Goal: make the public presence feel legitimate without pretending to have proof that does not exist yet.

Tasks:

- [ ] Replace public Gmail references with domain email where appropriate.
- [x] Use `auralisdigitaleco@gmail.com` as the temporary contact email until domain email is active.
- [ ] Create Google Business Profile.
- [ ] Verify live website contact paths.
- [ ] Keep sample builds clearly labeled as examples or demos.
- [ ] Add real testimonials only after real delivery.
- [ ] Confirm HTTPS and deployment source.
- [ ] Clarify the relationship between Auralis Digital and Auralis Design in public copy.

Success criteria:

```text
A cautious local business owner can understand who Auralis is,
how to contact it, and why it is safe to start a conversation.
```

## Phase 3 - Lead Capture and Outreach

Goal: generate real conversations.

Use:

- `leads/LEADS_ACTIVE_OUTREACH.csv`
- `leads/OUTREACH_PACKET.md`
- `leads/OUTREACH_SCRIPTS.md`
- `leads/FOLLOW_UP_SYSTEM.md`
- `leads/RESPONSE_SCRIPTS_WHEN_LEADS_REPLY_2026-04-24.md`

Tasks:

- [ ] Pick one local niche for the first push.
- [ ] Add qualified prospects to the tracker.
- [ ] Send initial outreach.
- [ ] Follow up consistently.
- [ ] Move interested leads into intake.
- [ ] Send quote/scope or proposal when qualified.

Success criteria:

```text
At least two real prospect conversations and one proposal sent.
```

## Phase 4 - First Client Delivery

Goal: complete one real engagement end to end.

Use:

- `onboarding/CLIENT_INTAKE_QUESTIONNAIRE.md`
- `leads/QUOTE_AND_SCOPE_TEMPLATE.md`
- `leads/PROPOSAL_TEMPLATE.md`
- `onboarding/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
- `onboarding/CLIENT_HANDOFF_CHECKLIST.md`
- `onboarding/REVISION_POLICY.md`

Tasks:

- [ ] Complete intake.
- [ ] Confirm scope, price, timeline, payment terms, and revision limits.
- [ ] Get agreement and payment/deposit.
- [ ] Build the site.
- [ ] Review with client.
- [ ] Launch or hand off.
- [ ] Capture proof.

Success criteria:

```text
One real client has a delivered website and a documented outcome.
```

## Phase 5 - Proof and Retention

Goal: turn first delivery into trust and recurring revenue.

Use:

- `onboarding/CLIENT_PROOF_WORKFLOW.md`
- `onboarding/CASE_STUDY_TEMPLATE.md`
- `onboarding/WEBSITE_CARE_PLANS.md`
- `onboarding/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`

Tasks:

- [ ] Request testimonial.
- [ ] Publish case study.
- [ ] Add live client URL where allowed.
- [ ] Offer care plan at handoff.
- [ ] Keep Website Refresh limited to Auralis-built sites; quote third-party sites as audits, rebuilds, migrations, or custom work.
- [ ] Record lessons from the first delivery.

Success criteria:

```text
The website has real proof, and the sales process becomes easier for the next client.
```

## Phase 6 - Commerce Readiness (Only If Shop Surface Remains Active)

Goal: verify the Shopify/Printify product surface before treating it as a mature public commerce operation.

Tasks:

- [ ] Verify Shopify checkout flow.
- [ ] Verify policy-page links.
- [ ] Run a real test order.
- [ ] Verify Printify fulfillment flow.
- [ ] Verify payment/tax/shipping settings.
- [ ] Review product margins.
- [ ] Confirm support-email workflow.
- [ ] Confirm artwork/product-rights ownership.
- [ ] Keep product and website-service branding relationship clear.

Success criteria:

```text
The product/shop surface has verified checkout, fulfillment, support,
and policy readiness.
```

## Phase 7 - Deployment Maturity

Goal: improve technical operations only after the business flow has proof.

Use:

- `docs/tech/TODO_HOSTING_PLATFORM.md`
- `docs/tech/LEGACY_STATIC_SITE_NOTE.md`
- `docs/tech/PUBLIC_LAUNCH_CHECKLIST.md`
- `docs/tech/REGRESSION_CHECKLIST_2026-04-25.md`

Tasks:

- [ ] Confirm whether `main`, `gh-pages`, or another platform controls production.
- [ ] Decide whether to stay on GitHub Pages or move to Vercel/Netlify.
- [ ] Add preview deployment if useful.
- [ ] Keep deployment changes small and verified.

Success criteria:

```text
Website updates are predictable and easy to validate.
```

## Document Authority

Use current docs in this order:

1. `docs/AURALIS_CURRENT_STATUS.md`
2. `docs/STATUS.md`
3. `docs/ROADMAP.md`
4. `docs/INDEX.md`
5. Active folder docs in `leads/`, `onboarding/`, `docs/tech/`, and `docs/internal/`
6. Historical context in `docs/archive/`

## Operating Rule

Every task should support at least one of these outcomes:

- legal/business readiness
- trust
- lead capture
- outreach
- closing
- delivery
- proof
- retention

## Execution Filter

Every active task must support one of:

1. lead capture
2. outreach
3. closing
4. delivery
5. proof
6. retention

If it does not support one of those, defer it.

Manual process comes before automation. Do not build advanced automation until the manual workflow has produced real clients, real delivery, and real proof.
