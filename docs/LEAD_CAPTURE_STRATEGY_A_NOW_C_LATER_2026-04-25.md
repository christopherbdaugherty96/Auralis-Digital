# Lead Capture Strategy — A Now, C Later (2026-04-25)

## Decision
Use a phased lead capture model:

- **Now:** Option A — Formspree
- **Later:** Option C — Custom Backend

This allows immediate real lead capture without delaying launch, while preserving a clean upgrade path to a fully owned system later.

---

## Phase 1 — Immediate Implementation (Formspree)

### Goals
- Replace the current mailto form with real submissions.
- Send inquiries directly to business email.
- Keep the existing website design and fields.
- Keep phone/email fallback visible.
- Minimal maintenance.

### Why This Is Smart
- Fastest path to real leads.
- No backend engineering required.
- Lower risk than custom infrastructure during early sales stage.
- Lets the business focus on getting first customers.

### Required Frontend Principle
Keep the form structure stable so future migration is easy:
- same fields
- same layout
- same button placement
- endpoint can be swapped later

---

## Phase 2 — Future Upgrade (Custom Backend)

### Trigger Points
Move beyond Formspree when one or more of these become true:
- regular lead volume
- need for CRM pipeline
n- automated follow-up needed
- booking calendar integration needed
- analytics attribution needed
- multi-user sales workflow needed
- desire for full ownership / lower recurring SaaS dependency

### Future Capabilities
- custom database
- CRM dashboard
- lead status tracking
- auto reminders
- quote pipeline
- calendar booking flows
- analytics + conversion tracking
- API integrations
- admin portal

---

## Safety Rule
Do not remove the working lead form until the replacement system is tested live.

---

## Recommended Immediate Next Action
Install Formspree on the current website and verify submissions end-to-end.
