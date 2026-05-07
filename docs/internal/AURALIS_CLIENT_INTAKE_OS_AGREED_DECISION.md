# Auralis Client Intake OS — Agreed Decision

Last updated: 2026-05-06

Status: agreed operating decision.

Primary docs:

- `docs/internal/AURALIS_CLIENT_INTAKE_OS.md`
- `docs/internal/AURALIS_CLIENT_INTAKE_OS_SECOND_PASS.md`

---

## Agreement

Auralis Digital should add a client intake system, but it should not start as a generic live-chat box or public AI chatbot.

The agreed first version is:

```text
Start Your Website Project CTA
→ structured intake form
→ reliable backend submission
→ manual lead review
→ existing follow-up and proposal workflow
```

The long-term direction is:

```text
Auralis public website
→ guided intake layer
→ structured lead record
→ lead/backlog system
→ manual review
→ quote / proposal / project workflow
→ future Nova-assisted internal review
```

---

## What Is Agreed

1. The widget idea is valid.
2. The correct public label is closer to `Start Your Website Project` than `Chat with us`.
3. The intake must collect structured business data, not only freeform messages.
4. The first implementation should be form-first.
5. Live chat, AI chatbot, and Nova-powered public interaction should wait.
6. The lead should enter a durable backlog or tracker.
7. Auralis should manually review before sending quotes, proposals, or commitments.
8. Existing-client support requests should not mix with new sales leads.
9. Third-party website refresh requests should not automatically receive the $250 Auralis-built-site refresh offer.
10. Nova can later help internally with summaries, missing-info checks, recommendations, and draft follow-ups.

---

## What Is Not Agreed For Now

Do not build these as the first implementation:

```text
Public AI chatbot
24/7 live support widget
Nova-powered public website assistant
Automatic quotes
Automatic proposals
Automatic email sending
Automatic CRM writes
Automatic project creation
Automatic scheduling
Payment automation
Large paid chatbot stack
```

These are later possibilities only after the basic intake and first-client workflow prove useful.

---

## Immediate Implementation Direction

The next practical build path is:

```text
1. Confirm or configure the form backend.
2. Add or strengthen a “Start Your Website Project” CTA.
3. Route the CTA to a structured intake form.
4. Capture the minimum lead fields.
5. Confirm the submission arrives reliably.
6. Manually copy or route the lead into the tracker/backlog.
7. Use existing follow-up/proposal docs to continue the sale.
```

Relevant current technical path:

```text
docs/tech/NEXT_STEP_FORM_BACKEND.md
docs/tech/FORMSPREE_SETUP.md
```

---

## Minimum Fields For First Version

The first intake form should collect:

```text
Name
Business name
Email
Phone
Preferred contact method
Business type
Project type
Current website URL, if any
Main website goal
Timeline
Budget range
Message / notes
```

Optional later fields:

```text
Has domain
Has hosting
Has logo / branding
Has Google Business Profile
Has social pages
Needed features: booking, payments, forms, ecommerce, gallery, blog, client portal
```

---

## Public Copy To Use

CTA copy:

```text
Start Your Website Project

Tell us what you need, what type of business you run, and the best way to follow up. Auralis will review your request and confirm scope, timeline, and pricing before any work begins.
```

Submission confirmation:

```text
Thanks — your website request has been received.

Auralis will review the details and follow up to confirm scope, timeline, and pricing. No project is started until the scope and payment terms are confirmed.
```

---

## Guardrail

This decision does not replace the current Auralis priority: legal/trust setup, domain email, payment flow, form backend verification, outreach, first client close, first delivery, and first testimonial remain the actual execution bottlenecks.

The intake OS should support that path, not distract from it.

---

## Final Locked Position

```text
Auralis should build a structured lead intake layer now.
Nova should support it later as an internal governed review assistant.
The first move is a reliable form-first workflow, not a public AI/chat automation system.
```