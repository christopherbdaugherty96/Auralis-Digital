# COMMERCE LOOP GUARDRAILS

Date: 2026-05-19
Status: Operational guardrails / documentation only

## Purpose

Define the boundaries and failure-mode handling for the Auralis 14-day commerce validation loop.

This document exists to prevent the loop from becoming:
- random product uploading
- uncontrolled automation
- unclear category drift
- analytics-free guessing
- AI-generated content without review

---

# Authority Boundary

The commerce loop may produce:
- product ideas
- mockup prompts
- captions
- campaign plans
- analytics summaries
- category recommendations
- GitHub tracker updates

The commerce loop must NOT autonomously:
- publish Shopify products
- delete Shopify products
- change live prices
- edit live product listings
- submit Printify orders
- publish social posts
- run paid ads
- send customer messages

Required pattern:

## Draft → Review → Approve → Execute

Christopher remains the approval authority.

---

# Required Handoff Format

Every sprint handoff should include:

```markdown
# Sprint Handoff

## Sprint

## Status

## Active Products

## Content Produced

## Mockups Produced

## Analytics Summary

## Strongest Signal

## Weakest Signal

## Product Decisions

## Next Recommended Action

## Shopify Changes Needed

## Printify Changes Needed

## GitHub Tracker Updates Needed

## Risks / Open Questions
```

If a sprint does not have enough data, mark it as `insufficient signal` instead of forcing a conclusion.

---

# Failure Modes

## Failure Mode 1 — Too Many Products

Symptom:
- more than 5 products are added before the current sprint is measured

Response:
- stop new product creation
- finish active sprint
- log extra ideas in a future ideas tracker instead of publishing

## Failure Mode 2 — Category Drift

Symptom:
- new products do not fit operator/builder identity or secondary art/drop logic

Response:
- pause product
- check against category fit rule
- only continue if it supports the brand hierarchy

## Failure Mode 3 — Content Without Tracking

Symptom:
- posts are made but not logged

Response:
- update `trackers/content_calendar.csv`
- do not use the post as evidence until basic platform/result notes are recorded

## Failure Mode 4 — No Analytics Signal

Symptom:
- products have little or no traffic after 14 days

Response:
- do not declare product-market failure automatically
- mark as insufficient signal
- review whether content volume, mockup quality, or traffic source was too weak

## Failure Mode 5 — Likes Mistaken For Demand

Symptom:
- product gets likes but no product clicks, carts, or sales

Response:
- mark as content interest only
- redesign CTA, product page, or mockup before treating as a product winner

## Failure Mode 6 — AI Asset Overproduction

Symptom:
- many mockups/videos are generated but few are used or tested

Response:
- limit generation to campaign requirements
- prioritize usable assets over volume
- log assets in `trackers/mockup_queue.csv`

---

# Analytics Interpretation Rules

Do not treat one metric alone as proof.

## Strong Signal

A product has stronger signal when multiple items are true:
- high product views
- saves/comments
- link clicks
- add-to-cart
- sale
- repeated engagement across content pieces
- clear audience fit

## Weak Signal

A product has weak signal when:
- low views
- no clicks
- no engagement
- unclear audience fit
- confusing mockup/product match

## Insufficient Signal

Use this when:
- content volume was too low
- traffic was too low
- campaign was not executed consistently
- analytics are incomplete

Insufficient signal means the test execution failed or was incomplete.
It does not automatically mean the product idea failed.

---

# Review Cadence

## Daily

- update active content status
- check mockup queue
- log any posted content

## Day 7

- midpoint review
- identify weak execution gaps
- adjust content if needed

## Day 14

- final campaign review
- assign product decisions
- select next sprint direction

## Monthly

- review retained winners
- determine evergreen products
- identify repeat category winners

---

# Category Hierarchy Guardrail

The current active hierarchy is:

1. Operator / builder identity first
2. Lawn, power washing, mechanic, dad/provider, and service-business categories second
3. Artistic / symbolic collections as secondary differentiation
4. Future categories only if they fit the broader brand world

Do not flatten these into equal categories.

---

# Final Rule

The loop exists to create learning, not just inventory.

If the system is not producing decisions, it is not functioning.
