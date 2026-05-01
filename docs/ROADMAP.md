# Auralis Digital — Roadmap

Last updated: 2026-05-01

---

## In-Game Goal

**Close the first paying client.**

Phases 1–3 are done or nearly done. The bottleneck is now execution: Formspree, outreach, conversations, close.

---

## Current State (Truth)

**You have:**
- Live website (auralisdigital.net, static HTML, GitHub Pages)
- 10 industry demos + 4 service area pages
- Clear service offering and pricing ($250 → $500+ → $1,000+ → $250/mo retainer)
- Full client lifecycle docs (intake → onboarding → delivery → handoff → care plan)
- Full sales docs (outreach, objections, proposal, quote/scope, follow-up)
- Active leads list ready to contact
- Organized documentation system

**You still need to do:**
- Connect Formspree form backend (the only real site blocker)
- Start and run outreach consistently
- Convert a lead to a paying client

---

## Phase 1 — Stabilize the Live Site

Target: immediately  |  Status: **Mostly Complete**

- [x] Branding metadata (browser tab title, OG tags, structured data)
- [x] Working links: phone (tel:), email (mailto:), demo links
- [x] Homepage sections: services, pricing, work/demos, process, FAQ, contact
- [x] Mobile layout, sticky nav, mobile CTA button
- [x] Service area pages (all 4 updated with founder-led trust copy)
- [x] Demo pages cleaned of internal language
- [ ] Real form backend (Formspree) — **still pending your action**
- [ ] Browser/mobile QA pass — open on phone, tap every button

Success criteria: site feels complete and functional to a prospect

---

## Phase 2 — Real Lead Capture

Target: this week  |  Status: **Pending one action**

- [ ] Create Formspree account — free tier is enough
- [ ] Paste endpoint into contact form action attribute
- [ ] Test a live submission end-to-end
- [ ] Confirm submission reaches email
- [ ] Add Google Analytics 4 (see `tech/ANALYTICS_SETUP.md`)
- [ ] Add Google Search Console

See: `tech/FORMSPREE_SETUP.md`, `tech/NEXT_STEP_FORM_BACKEND.md`, `tech/FORM_BACKEND_OPTIONS.md`

Success criteria: a submitted form reaches your inbox reliably

---

## Phase 3 — First Client Acquisition

Target: next 30 days  |  Status: **Ready to start**

- [ ] Open `sales/LEADS_ACTIVE_OUTREACH.csv` and pick the first 5 targets
- [ ] Send personalized outreach using `sales/OUTREACH_SCRIPTS.md`
- [ ] Follow up with `sales/FOLLOW_UP_SYSTEM.md`
- [ ] Use `sales/RESPONSE_SCRIPTS_WHEN_LEADS_REPLY_2026-04-24.md` when anyone replies
- [ ] Run intake when a lead is interested (`client-ops/CLIENT_INTAKE_QUESTIONNAIRE.md`)
- [ ] Scope and quote using `sales/QUOTE_AND_SCOPE_TEMPLATE.md`
- [ ] Send proposal using `sales/PROPOSAL_TEMPLATE.md`
- [ ] Close the deal

Weekly targets: 25 researched / 10 contacted / 5 follow-ups / 2 real conversations / 1 proposal sent

Success criteria: first paid client confirmed

---

## Phase 4 — First Delivery

Target: immediately after Phase 3  |  Status: Docs ready, waiting for client

- [ ] Follow `tech/WEBSITE_BUILD_WORKFLOW.md` start to finish
- [ ] Enforce revisions per `client-ops/REVISION_POLICY.md`
- [ ] Complete `client-ops/FIRST_CLIENT_DELIVERY_CHECKLIST.md`
- [ ] Hand off with `client-ops/CLIENT_HANDOFF_CHECKLIST.md`
- [ ] Offer $250/mo retainer at handoff using `client-ops/WEBSITE_CARE_PLAN_CLIENT_OPTIONS.md`
- [ ] Capture proof immediately after (`client-ops/CLIENT_PROOF_WORKFLOW.md`)
- [ ] Request testimonial
- [ ] Write case study (`client-ops/CASE_STUDY_TEMPLATE.md`)

Success criteria: site delivered, client happy, testimonial captured, retainer offered

---

## Phase 5 — Trust and Proof Layer

Target: after first delivery  |  Status: Not Started

- [ ] Add real testimonial to homepage (replace placeholder proof section)
- [ ] Publish first case study
- [ ] Add before/after screenshots
- [ ] Create or optimize Google Business Profile
- [ ] Request Google review from first client

Success criteria: a stranger visiting the site sees real proof, not just demos

---

## Phase 6 — Deployment Upgrade

Target: after first revenue  |  Status: Not Started

Current setup (GitHub Pages) is working. Do not switch until you have revenue.

- [ ] Decide: Vercel (recommended) or Netlify
- [ ] Connect repo, deploy preview, test build
- [ ] Migrate domain after full test

Success criteria: cleaner deploys, better reliability

---

## Phase 7 — Retainer System

Target: at every handoff  |  Status: Docs ready

- [ ] Offer retainer at every project handoff
- [ ] Define monthly check-in behavior
- [ ] Track retainer clients separately from one-time projects

Success criteria: predictable monthly income from existing clients

---

## Phase 8 — Expansion (Only After Everything Above Works)

Do not build these until you have real clients and real workflow problems:
- Nova-powered lead summaries and auto-replies
- Custom CRM dashboard
- Custom lead backend
- Client portal
- Booking/calendar flow

Rule: advanced automation comes after proven manual process.

---

## Status Tracker

| Area | Status | Next Action |
|---|---|---|
| Live website | Complete | Monitor for regressions |
| Homepage structure + sections | Complete | No changes needed |
| Branding metadata (title, OG, schema) | Complete | — |
| Working links / CTAs | Complete | — |
| Mobile layout + mobile CTA | Complete | — |
| Service area pages (all 4) | Complete | — |
| Demo pages (10 cleaned) | Complete | Manual review before sending |
| Pricing structure | Complete | — |
| Sales docs | Complete | Start using |
| Client ops docs | Complete | Use at first close |
| Tech docs | Complete | Use at each build |
| Documentation organized | Complete | Maintain INDEX.md |
| Lead capture backend (Formspree) | **Pending your action** | Create account, paste endpoint |
| Browser/mobile QA | **Pending your action** | 20-minute manual pass on phone |
| Analytics / Search Console | Not Started | Set up after Formspree |
| First outreach wave | Not Started | Use LEADS_ACTIVE_OUTREACH.csv |
| First real conversation | Not Started | Result of outreach |
| First paid client | Not Started | The in-game goal |
| First testimonial / case study | Not Started | Capture after first delivery |
| Google Business Profile | Not Started | After first client |
| Domain email | Not Started | After first revenue |
| Hosting upgrade (Vercel/Netlify) | Not Started | After first revenue |
| Retainer client | Not Started | Offer at every handoff |

---

## Document Authority Order

1. `docs/STATUS.md` — current truth snapshot
2. `docs/ROADMAP.md` — phase plan and priority order (this file)
3. `docs/SPRINT_EXECUTION_48HR.md` — what to do right now, today
4. `docs/KNOWN_SITE_TODOS.md` — active site issues
5. `docs/INDEX.md` — full document map
6. `docs/sales/` — use for outreach and closing
7. `docs/client-ops/` — use at close and delivery
8. `docs/tech/` — use during builds and maintenance
9. `docs/archive/` — read-only historical reference

---

## What Not To Do Right Now

- Do not redesign the homepage
- Do not add new features or sections
- Do not create more planning docs
- Do not upgrade hosting before first revenue
- Do not build Nova/automation before real workflow problems exist
- Do not let older docs override current execution order

---

## Operating Rule

Every task must support one of these:
1. Lead capture
2. Outreach
3. Closing
4. Delivery
5. Proof
6. Retention

If a task does not fit one of those, skip it.

---

## Honest Assessment

The foundation is solid. The docs are organized. The site is live and credible.

**What separates you from making money right now:** one Formspree setup, and consistent outreach.

That is the entire gap.
