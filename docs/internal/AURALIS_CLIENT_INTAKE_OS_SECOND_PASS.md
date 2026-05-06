# Auralis Client Intake OS — Second Pass Review

Last updated: 2026-05-06

Status: second-pass review and implementation tightening note.

Primary document: `docs/internal/AURALIS_CLIENT_INTAKE_OS.md`

This note does not replace the primary intake OS document. It tightens the implementation path, connects the idea to the current Auralis repo, and prevents the concept from drifting into an overbuilt chatbot before the basic lead system is proven.

---

## Second-Pass Verdict

The idea is valid and should stay in the repo.

The strongest version is still:

```text
Auralis public website
→ Start Your Website Project intake
→ structured lead record
→ manual review
→ quote / proposal / project workflow
→ future Nova-assisted internal review
```

The main correction from the second pass is this:

```text
Build the intake system as a structured form-first workflow before building a live chat or AI chatbot.
```

A chat-style interface can come later, but the first useful system is a reliable intake form that captures clean fields and creates a durable lead record.

---

## Why Form-First Wins Right Now

Auralis is currently in first-client execution mode, not automation-expansion mode.

The repo already says the strongest immediate bottleneck is not more documentation. It is trust setup, form/backend readiness, outreach, and closing/delivering the first real client.

Because of that, the public intake layer should not become a large custom chatbot project yet.

The best immediate version is:

```text
Button: Start Your Website Project
→ guided form / widget
→ lead arrives in one inbox or backlog
→ manual review
→ follow-up using existing scripts and proposal docs
```

This gives Auralis business value quickly without creating new operational risk.

---

## Correct Repo Fit

The primary document belongs in:

```text
docs/internal/AURALIS_CLIENT_INTAKE_OS.md
```

That is the right location because it is an internal operating design, not a public sales page, roadmap, current status file, or technical deployment note.

The second-pass implementation touchpoints are:

```text
docs/AURALIS_CURRENT_STATUS.md
active/NEXT_STEPS_TODO.md
docs/SPRINT_EXECUTION_48HR.md
docs/tech/NEXT_STEP_FORM_BACKEND.md
docs/tech/FORMSPREE_SETUP.md
leads/FOLLOW_UP_SYSTEM.md
leads/QUOTE_AND_SCOPE_TEMPLATE.md
leads/PROPOSAL_TEMPLATE.md
onboarding/CLIENT_INTAKE_QUESTIONNAIRE.md
onboarding/CLIENT_WEBSITE_DELIVERY_MASTER_CHECKLIST.md
onboarding/WEBSITE_CARE_PLANS.md
```

The intake OS should connect these files into a flow. It should not duplicate or override them.

---

## Current Implementation Slice

The next practical slice is not “build full chat assistant.”

The next practical slice is:

```text
1. Add or strengthen a “Start Your Website Project” CTA.
2. Route that CTA to a guided intake form.
3. Capture the minimum lead fields.
4. Send the submission to the configured form backend.
5. Store or copy the lead into the active lead/backlog system.
6. Manually review and follow up.
```

This aligns directly with the existing form backend work.

---

## Minimum Public Intake Fields

The first version should capture only what is necessary to qualify a lead.

Required fields:

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

Optional but useful fields:

```text
Has domain
Has hosting
Has logo / branding
Has Google Business Profile
Has social pages
Needed features: booking, payments, forms, ecommerce, gallery, blog, client portal
```

Do not make the first form so long that it kills submissions.

Use a short form first, then ask deeper questions during discovery.

---

## Suggested Public Copy

Use this for the CTA area or widget entry:

```text
Start Your Website Project

Tell us what you need, what type of business you run, and the best way to follow up. Auralis will review your request and confirm scope, timeline, and pricing before any work begins.
```

Use this as the submission confirmation:

```text
Thanks — your website request has been received.

Auralis will review the details and follow up to confirm scope, timeline, and pricing. No project is started until the scope and payment terms are confirmed.
```

This avoids overpromising.

---

## Suggested Internal Lead Status Defaults

Every new website intake should start as:

```text
status = New Lead
lead_score = Unreviewed
next_action = Manual Review
source = Website Intake
```

After review, move it to one of:

```text
Qualified Lead
Discovery Needed
Quote Needed
Not a Fit
Deferred
```

Do not jump directly from intake to Proposal Sent unless the lead has enough information and the quote has been manually reviewed.

---

## Routing Rules To Keep

### New Website / Basic Website Route

Use when:

```text
project_type = new website
budget_range = $500+
main_goal = professional presence, services/pricing, or lead capture
```

Likely next action:

```text
manual follow-up + basic discovery questions
```

---

### Redesign / Standard Website Route

Use when:

```text
project_type = redesign
has_current_website = true
budget_range = $1,000+
```

Likely next action:

```text
review existing website + discovery + quote
```

---

### Third-Party Fix Route

Use when:

```text
project_type = fix/improve current site
built_by_auralis = false or unknown
```

Likely next action:

```text
paid audit / rebuild consultation / custom quote
```

Hard rule:

```text
Do not automatically offer the $250 refresh for third-party websites.
```

---

### Maintenance Route

Use when:

```text
existing_client = true
request = small update, bug fix, content update, or care plan support
```

Likely next action:

```text
maintenance ticket or care-plan workflow
```

Hard rule:

```text
Do not mix current-client support requests with new sales leads.
```

---

## Technical MVP Recommendation

Use the existing form backend path first.

Recommended MVP stack:

```text
Auralis website CTA
→ existing or new React intake form
→ Formspree endpoint
→ email notification
→ manual copy into lead tracker / CRM
```

Only after the form is proven should Auralis consider:

```text
Airtable automation
Notion database automation
HubSpot CRM integration
custom chat widget
Nova-assisted lead summary
```

This keeps the system simple and testable.

---

## What Not To Build Yet

Do not build these yet:

```text
AI public chatbot
24/7 live support widget
Nova-powered client-facing assistant
CRM write automation
automatic quotes
automatic proposals
automatic email sending
automatic project creation
large paid chatbot stack
```

These are not first-client bottlenecks.

---

## First Build Checklist

Use this as the immediate implementation checklist:

```text
[ ] Confirm domain email is ready or choose temporary intake destination.
[ ] Configure `VITE_CONTACT_EMAIL`.
[ ] Configure `VITE_FORMSPREE_ENDPOINT`.
[ ] Add “Start Your Website Project” CTA to the public site.
[ ] Add or adapt an intake form with the minimum fields.
[ ] Confirm form submits on desktop.
[ ] Confirm form submits on mobile.
[ ] Confirm submission arrives in the expected inbox.
[ ] Confirm no mail app opens when Formspree is configured.
[ ] Manually add one test lead to the active tracker/backlog.
[ ] Run one manual follow-up using existing lead scripts.
```

---

## Acceptance Gate

Do not call the intake OS live until this is true:

```text
[ ] A real user can submit a website request.
[ ] Auralis receives the request reliably.
[ ] The request contains enough information for manual review.
[ ] The lead can be placed into a visible backlog or tracker.
[ ] The follow-up path is clear.
[ ] The confirmation message does not promise price, timeline, or acceptance.
```

---

## Final Second-Pass Position

Keep the primary intake OS document.

Use it as the long-term operating design.

For the next actual implementation step, reduce the idea to:

```text
Start Your Website Project CTA
→ structured intake form
→ reliable backend submission
→ manual lead review
→ existing Auralis follow-up and proposal workflow
```

That is the right first move for Auralis Digital.