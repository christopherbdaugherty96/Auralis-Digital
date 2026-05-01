# Soft Roadmap — First Client Sprint

Last updated: 2026-05-01

This is not a planning document. It is a doing document.

One goal: **close the first paying client.**

---

## Before You Touch Anything Else

Do these two things first. They take less than 1 hour combined.

### Step 1: Fix the Form (30 min)

The contact form currently opens a mailto: link. On many phones this does nothing.
This is losing you leads every day it stays broken.

1. Go to formspree.io — create a free account
2. Create a new form — copy the endpoint (looks like `/f/abcd1234`)
3. In `index.html` find the `<form id="leadForm">` tag
4. Add `action="https://formspree.io/f/YOUR_ENDPOINT"` and `method="POST"`
5. Remove the JavaScript submit handler (or leave it — Formspree handles submission)
6. Submit a test message — confirm it hits your email

See: `tech/FORMSPREE_SETUP.md` for full steps.

### Step 2: Phone QA (20 min)

Open auralisdigital.net on your actual phone. Do this once before outreach.

- [ ] Site loads without errors
- [ ] Tap “Call 734-444-8558” — does it dial?
- [ ] Tap “Start a Website Project” — does it scroll to contact?
- [ ] Fill out and submit the form — do you get a confirmation?
- [ ] Tap a demo link — does the demo load?
- [ ] Check on desktop too — nav, spacing, images all correct?

If anything is broken, fix it before outreach. If everything works, move on.

---

## Daily Outreach (Repeat Every Day)

Documents to use: `sales/OUTREACH_SCRIPTS.md`, `sales/LEADS_ACTIVE_OUTREACH.csv`

**Minimum daily standard:**
- 5 prospects researched and added to the leads CSV
- 3 outreach messages sent (personalized, not copy-paste)
- Follow up on any prior contacts that haven’t responded

**Best channels in order:**
1. Facebook Messenger (highest response rate for local businesses)
2. Phone call
3. Email
4. In-person if they’re nearby

**Core message (adapt to the niche):**
> “Hey [Name], I came across [Business] and noticed you might benefit from a cleaner website. I build sites for local [niche] businesses in [City] — I’d love to show you a quick example. No cost to look.”

Send the relevant demo link. Keep it short.

---

## When Someone Replies

Use: `sales/RESPONSE_SCRIPTS_WHEN_LEADS_REPLY_2026-04-24.md`

Do not overthink it. The goal of the reply is to get them on a quick call or move them to intake.

---

## When Someone Is Interested

1. Send intake questions: `client-ops/CLIENT_INTAKE_QUESTIONNAIRE.md`
2. Scope the project: `sales/QUOTE_AND_SCOPE_TEMPLATE.md`
3. Send proposal: `sales/PROPOSAL_TEMPLATE.md`
4. Handle objections: `sales/OBJECTION_HANDLING.md`
5. Close — ask for the deposit to start

Pricing reminder:
- $250 Website Refresh
- $500+ Basic Website
- $1,000+ Standard Website
- $250/mo Monthly Care Plan (offer at every close)

---

## When a Client Says Yes

1. Collect deposit
2. Start build: `tech/WEBSITE_BUILD_WORKFLOW.md`
3. Manage revisions: `client-ops/REVISION_POLICY.md`
4. Deliver: `client-ops/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
5. Hand off: `client-ops/CLIENT_HANDOFF_CHECKLIST.md`
6. Offer retainer: `client-ops/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`
7. Capture proof: `client-ops/CLIENT_PROOF_WORKFLOW.md`
8. Ask for a testimonial and a referral

---

## Weekly Targets

| Activity | Minimum |
|---|---|
| Prospects researched | 25 |
| Outreach messages sent | 10 |
| Follow-ups sent | 5 |
| Real conversations | 2 |
| Proposals sent | 1 |

---

## Anti-Stall Rules

- Do not wait until the site is perfect before outreaching
- Do not spend time redesigning when you should be messaging people
- Do not confuse planning with progress
- Do not let a day pass without at least 3 outreach messages sent
- Revenue comes from conversations, not features

---

## The Only Metric That Matters Right Now

Conversations started this week: **____**

Fill that in. If it’s zero, that is the problem. Nothing else is.
