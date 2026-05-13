# Auralis Digital Execution Index

Last updated: 2026-05-13

## Purpose

This document defines the practical execution order for the repo.

Use this before creating new roadmap docs, status docs, cleanup passes, or feature work.

The goal is to keep the repo operationally coherent while moving toward:

```text
business setup -> trust setup -> lead capture -> outreach -> first client -> proof -> retention
```

Auralis currently contains two public surfaces:

1. Auralis Digital website services
2. Auralis Design shop/product surface

Website services remain the primary execution priority.

The product/shop surface exists publicly but is not considered fully commerce-mature until commerce readiness is verified.

---

# Canonical Order Of Operations

## 1. Current Truth

Read first:

1. `docs/AURALIS_CURRENT_STATUS.md`
2. `active/NEXT_STEPS_TODO.md`
3. `docs/STATUS.md`
4. `docs/ROADMAP.md`

These files define:

- what is real
- what is missing
- what is blocked
- what is unverified
- what should happen next

Do not create duplicate current-state docs.

---

## 2. Deployment Truth

Before touching deployment, hosting, static folders, or GitHub Pages:

Read:

- `docs/tech/DEPLOYMENT_TRUTH.md`

Rules:

- `main` is source truth.
- `gh-pages` is generated deployment output.
- Do not edit `gh-pages` manually.
- Do not merge `gh-pages` into `main`.
- Do not delete static folders unless deployment workflow confirms they are unused.

---

## 3. Contact / Lead Capture

Before outreach:

Read:

- `docs/tech/FORMSPREE_SETUP.md`
- `docs/tech/NEXT_STEP_FORM_BACKEND.md`

Verify:

- `VITE_CONTACT_EMAIL`
- `VITE_FORMSPREE_ENDPOINT`
- Formspree flow
- mailto fallback
- desktop test
- phone test

Trust and contact reliability matter more than additional polish.

---

## 4. Outreach Execution

Once contact flow works:

Use:

- `leads/LEADS_ACTIVE_OUTREACH.csv`
- `leads/OUTREACH_SCRIPTS.md`
- `leads/OUTREACH_PACKET.md`
- `leads/FOLLOW_UP_SYSTEM.md`

Priority:

```text
conversation -> quote -> close -> deliver
```

Do not spend weeks polishing before real outreach begins.

---

## 5. Client Intake And Delivery

After a real lead responds:

Use:

- `onboarding/CLIENT_INTAKE_QUESTIONNAIRE.md`
- `leads/QUOTE_AND_SCOPE_TEMPLATE.md`
- `leads/PROPOSAL_TEMPLATE.md`
- `onboarding/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
- `onboarding/CLIENT_HANDOFF_CHECKLIST.md`

Goal:

Deliver one complete real engagement cleanly.

---

## 6. Proof And Retention

After successful delivery:

Use:

- `onboarding/CLIENT_PROOF_WORKFLOW.md`
- `onboarding/CASE_STUDY_TEMPLATE.md`
- `onboarding/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`

Rules:

- No fake testimonials.
- No fake reviews.
- No fake client logos.
- No fake case studies.
- Demo/sample work must remain clearly labeled.

---

## 7. Product / Commerce Verification

The shop/product surface is secondary until verified.

Before treating commerce as production-ready:

Verify:

- Shopify checkout
- policy links
- tax/shipping settings
- Printify fulfillment
- support email
- product margins
- artwork/product-rights workflow
- real test order

Primary tracking:

- `active/NEXT_STEPS_TODO.md`

---

## 8. Repo Cleanup And Drift Control

Before deleting branches, folders, docs, or workflows:

Confirm:

- branch is truly merged
- branch is not only ahead because of squash history
- folder is not deployment input
- doc is not canonical

Avoid endless cleanup loops.

---

# Operational Priority

If unsure what to do next:

1. Fix trust/contact issues.
2. Start outreach.
3. Deliver work.
4. Capture proof.
5. Improve systems afterward.

Do not mistake documentation activity for business progress.
