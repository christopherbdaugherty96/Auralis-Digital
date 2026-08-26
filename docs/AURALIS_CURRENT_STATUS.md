# Auralis Digital Current Status

Last updated: 2026-08-26

This is the canonical operational truth layer for Auralis Digital.

Strategic direction is governed by [`AURALIS_DIRECTION_LOCK_2026-08-26.md`](../AURALIS_DIRECTION_LOCK_2026-08-26.md). That lock supersedes the 2026-08-20 direction where the two conflict.

## Current Mode

Auralis is operating in a **revenue-first validation phase**.

Near-term targets:

- collect at least **$1,000 in external business revenue** during the first validated 30-day sales sprint;
- build toward approximately **$4,000/month in repeatable business revenue by 2026-12-31**.

These are targets, not guarantees.

The primary missing capability is a repeatable customer-acquisition loop, not additional product or repository creation.

## Active Operating Structure

```text
Auralis Digital
├── Primary cash engine
│   └── focused small-business digital-presence service
├── Owned commerce
│   └── Lucid Creations
├── Scalable digital products
│   ├── Shopify + Printify workbook / course
│   └── Lucid Visuals
├── Supplemental revenue
│   └── aligned custom creative work
└── Protected / long-horizon
    ├── NovaLIS / OpenClaw
    ├── Live Music Platform
    └── media / YouTube / news concepts
```

## Primary Cash Engine — Auralis Small-Business Service

The 2026-08-20 decision that retired website services is explicitly superseded in a narrow way.

Auralis is **not** returning to a generic web-design or Shopify agency model.

Approved public positioning:

> **Auralis Digital is an independent digital studio helping small businesses build practical, mobile-first websites and customer-contact flows focused on calls, bookings, quote requests, and trust.**

Approved primary offer direction:

### Business Digital Front Door

Working starting price: approximately **$995**.

Typical scope:

- mobile-first business website;
- clear services and service-area information;
- click-to-call and quote / contact flow;
- review, gallery, and trust sections;
- basic metadata / local-search fundamentals;
- analytics where appropriate;
- launch QA.

Optional recurring layers:

- **Website Care:** starting around **$129/month**;
- **Managed Digital Presence:** starting around **$349/month**.

Pricing remains a market-test hypothesis and should change only from real sales and delivery evidence.

### Initial acquisition focus

Initial outbound acquisition should be narrower than the full theoretical market.

Current first test:

- **local market:** Battle Creek / Southwest Michigan first, with remote delivery still available;
- **initial business cluster:** contractors and home / local service businesses where one additional job can economically justify the project;
- examples include landscaping, painting, cleaning, roofing, handyman / maintenance, mobile detailing, and similar service businesses;
- prioritize real operating companies with legitimate demand and weak / outdated customer-contact websites;
- do not spend the first sprint trying to rescue businesses that do not appear to have an underlying customer base.

This niche is an acquisition test, not a permanent restriction on Auralis.

## Website / Public Surface Truth

The current deployed website still reflects older positioning and has not yet been refactored to the 2026-08-26 lock.

Known stale public themes include:

- Shopify-setup-first positioning;
- multiple competing homepage identities;
- old creator-shop / branch clutter;
- references to ventures excluded from the active portfolio;
- stale geography;
- old metadata / structured data / sitemap entries;
- old navigation that prioritizes products / creator shops over Business Services and Work.

The required action is a **bounded commercial refactor**, not a rebuild.

Recommended primary navigation:

```text
Business Services
Work
Lucid Creations
About
Contact
```

Recommended homepage hierarchy:

1. small-business value proposition;
2. request a short website / digital-presence review;
3. see selected work;
4. one clear service offer;
5. process / ownership / trust;
6. founder accountability;
7. Lucid Creations as a secondary owned commerce brand;
8. contact / review request.

Update visible copy and supporting metadata together.

### Portfolio truth

The current code already contains a useful website-demo / work surface, including local-business concepts such as contractor / roofing, painter, cleaning, detailing, lawn care, restaurant, barbershop, salon, maintenance, and photography.

Patterson's Lawn Care & Snow Removal is the strongest business-specific client-preview style asset in the current public portfolio. It should remain honestly labeled according to its real delivery state. Demo / concept work must not be represented as a completed client launch.

For the B2B sales surface, curate a small number of strong examples first rather than presenting every demo as equal proof.

## Transaction Readiness

Before serious paid outreach, Auralis should have:

- clear service page;
- professional domain email when available;
- business phone / professional voicemail if used;
- honest selected portfolio examples;
- short 3-point review template;
- proposal template;
- service agreement;
- invoice / payment workflow;
- deposit / payment policy;
- onboarding questionnaire;
- revision / launch rules;
- founder/operator identity.

Do not fake a team or agency scale.

### Business / administrative truth still to verify

The repository does **not** currently prove completion of the following, so they must not be assumed complete or represented publicly as complete without confirmation:

- Michigan LLC / entity filing status;
- EIN status;
- dedicated business bank account;
- production domain email;
- public business address / service-area policy;
- Google Business Profile status;
- business insurance decision where appropriate;
- bookkeeping / accounting workflow for client and product revenue;
- real approved testimonials / reviews beyond evidence actually earned.

These are verification / business-operations items, not reasons to rebuild the website. Resolve the items required before relying on them for contracting, payment, tax, legal, or public trust claims.

The current website code still has `auralisdigitaleco@gmail.com` as a fallback contact address. A professional domain email should replace that fallback in production when operationally available.

## Sales Execution

Initial sales loop:

```text
qualified prospect
    ↓
personalized contact
    ↓
short specific review
    ↓
conversation
    ↓
written proposal
    ↓
agreement + payment/deposit
    ↓
delivery
    ↓
launch / handoff
    ↓
real testimonial/review if earned
    ↓
referral
```

Initial market test:

- first **100 qualified prospects**;
- approximately **15–20 qualified outreach attempts per weekday** during the sprint;
- use targeted phone, email, contact forms, referrals, and selective in-person outreach;
- follow up rather than judging the offer from a single attempt;
- diagnose after roughly **75–100 qualified contacts**.

Interpretation:

- low response -> targeting/message problem;
- responses but few conversations -> value proposition problem;
- conversations but no closes -> trust/pricing/proposal problem;
- sales -> repeat and optimize.

Do not make a custom mockup for every cold prospect. Increase creative / audit effort only when prospect interest justifies it.

## Verified Commerce Evidence — Historical Checkpoint

The previous canonical status recorded these facts as verified on **2026-07-04**. They remain useful evidence but must be treated as a dated checkpoint, not automatically as today's live state:

- first real retained product sale: Order #1001 on 2026-05-28, Custom Dog Polyester Square Pillow, paid and fulfilled;
- Shopify-hosted policies were published;
- catalog checkpoint at that time: 33 active products, 0 drafts, 0 archived;
- Google & YouTube channel was connected with product sync on and awaiting first review;
- TikTok Shop app was installed but seller verification was incomplete;
- `src/data/shopCatalog.ts` had known drift risk against Shopify and required parity checks before being treated as current catalog truth.

Later store state may differ. Use live Shopify data for current product / order / catalog claims.

## Lucid Creations

Lucid remains active as the owned commerce asset.

Current operating rule:

- keep the existing store and catalog functioning;
- stop broad undifferentiated catalog expansion;
- focus distribution on existing stronger products / families and personalization opportunities;
- treat customer acquisition / distribution as the current commerce constraint;
- let real demand decide which products receive additional creative work.

Printify remains fulfillment infrastructure, not the strategy engine.

Current commerce proof is not sufficient to justify large catalog expansion or broad paid traffic. Distribution and conversion evidence come first.

## Lucid Visuals

Lucid Visuals is an active digital-product experiment.

Immediate requirement:

- finish digital-delivery setup;
- complete checkout / delivery QA;
- publish Vol. 1 only after delivery is verified;
- seek external purchases before creating a large pack catalog.

Validation ladder:

```text
3 external purchases
→ 10 external purchases
→ identify repeatable acquisition source
→ $250/month
→ $500/month
→ $1,000/month
```

### Current product-truth drift to resolve before publication

The Shopify draft for Vol. 1 still reflects the earlier product specification, while the later customer-asset plan documents an upgraded 1080p / 30fps package. Before publication:

1. verify the actual final customer ZIP and included files;
2. synchronize the Shopify description and any product-specific documentation to the exact delivered asset;
3. keep the current Shopify SKU / handle unless there is an explicit reason to change them;
4. attach the final customer file to the selected digital-delivery method;
5. run a controlled end-to-end delivery test;
6. publish only after the listing, attached file, license, and delivery behavior agree.

Do not infer that an upgraded file is attached merely because an upgrade plan exists.

## Shopify + Printify Workbook / Course

The existing workbook / course material is a real monetizable asset.

### Current source truth

Current `main` already contains:

- a drafted six-phase **Quick-Start Launch Path**;
- Chapters 1–12;
- all 12 worksheets;
- an optional AI-assistant appendix;
- an Internal Reviewer Note;
- full-book finalization explicitly marked **IN PROGRESS / NOT publication-ready**.

Therefore **do not create the Quick-Start again**. Review, compress, verify, and finalize the Quick-Start that already exists.

### Known course coherence issues before sale

The course source still contains older commercialization assumptions that conflict with the 2026-08-26 lock:

- the manuscript currently displays an old **$10** price while the current market-test strategy is approximately **$19** for a founding / beta workbook;
- the front matter says Auralis can finish the Shopify setup for the reader;
- the end conversion page still markets **Shopify / E-commerce Setup** as an Auralis service;
- RJ Print appears repeatedly as an educational fulfillment example even though RJ Print is excluded from the current active Auralis portfolio;
- publication date / copyright-year placeholders and finalization markers remain;
- time-sensitive Shopify / Printify instructions still require pre-publication verification;
- screenshot reduction / production, final Word/PDF visual QA, link testing, metadata, internal-note removal, and final approval remain required.

Before publication:

- remove or replace the legacy Shopify-service upsell so the workbook does not silently reopen a retired generic service lane;
- either replace RJ Print brand-specific examples with generic 3D-print / separate-fulfillment examples, or explicitly label them as historical educational examples rather than active Auralis offerings;
- synchronize the manuscript price with the actual approved storefront / launch price or remove a hard-coded price from the manuscript if pricing will be controlled externally;
- preserve the existing six-phase Quick-Start and 12-chapter / 12-worksheet architecture unless editorial evidence justifies a change;
- complete current-platform verification and final customer-artifact QA before sale.

Working launch pricing remains:

- beta / founding workbook: around **$19**;
- mature workbook after feedback / polish: approximately **$29–$39**.

Do not use unsupported income claims. Do not build a large recorded course before the workbook gets external demand evidence.

## Custom Creative Work

Aligned custom creative work remains available as supplemental revenue when properly scoped and profitable.

It is not the main acquisition engine.

## NovaLIS / OpenClaw

Nova remains a protected long-horizon technical asset.

Do not force commercial pricing, hosted-service promises, support obligations, installer burden, or other premature productization solely to satisfy the current Auralis revenue target.

## Live Music Platform + Media

Preserve the work, but freeze major expansion during the revenue sprint unless new external evidence justifies activation.

## Explicitly Outside the Active Portfolio

Do not treat these as active priorities in the current operating plan:

- RJ Print;
- Pour Social;
- ShortCut Lawn Care;
- Buyer Advocate;
- ATH Service;
- wholesale / affiliate sourcing as an active lane;
- LastStopShop as a newly activated commerce business;
- new unrelated ventures created during the sprint.

Historical repositories and educational references may remain preserved. Preservation or historical reference does not equal execution priority.

## Time Allocation

Until the first $1,000 of validated external business revenue:

- approximately **70%** -> acquisition / sales / follow-up;
- approximately **20%** -> directly monetizable finishing / fulfillment;
- approximately **10%** -> maintenance of owned or long-horizon assets.

The website refactor, workbook finalization, and Lucid Visuals delivery work belong in the 20% lane only to the extent they directly enable a sale. Do not let them consume the 70% acquisition lane indefinitely.

## Weekly Scorecard

Track:

- qualified prospects contacted;
- responses;
- conversations / meetings;
- reviews / audits delivered;
- proposals;
- deals closed;
- cash collected;
- recurring revenue;
- fulfillment hours;
- workbook units sold;
- Lucid / Lucid Visuals units sold;
- Shopify traffic and conversion behavior;
- acquisition source.

The minimum viable sales tracker may be a simple spreadsheet / CRM table. Do not delay outreach to build a custom CRM.

## Do Not Do Right Now

- Do not start a new company.
- Do not create a major new repo without direct paid-delivery need.
- Do not rebuild the Auralis site from scratch.
- Do not add a large new POD batch.
- Do not recreate the already-drafted Quick-Start.
- Do not spend weeks filming a course before workbook validation.
- Do not prematurely commercialize Nova.
- Do not make the music/media build the current priority.
- Do not make a large wholesale inventory bet.
- Do not use paid ads to compensate for an unvalidated offer.
- Do not fabricate proof, testimonials, team size, urgency, or results.
- Do not rewrite strategy without new evidence.

## Current Repo / Deployment Truth

- `main` is the source of truth for code and documentation.
- `gh-pages` is generated deployment output and should not be edited manually.
- GitHub Actions builds from `main` and publishes deployment output to `gh-pages`.
- The repository contains React/Vite routes plus static deployment inputs.
- Review `docs/tech/DEPLOYMENT_TRUTH.md` before changing hosting or deployment behavior.

## Source-of-Truth Hierarchy

When documents disagree, use this order:

1. `AURALIS_DIRECTION_LOCK_2026-08-26.md` for strategic / commercial direction;
2. this file for current operational truth;
3. `active/NEXT_STEPS_TODO.md` for the executable checklist;
4. current live platform state (Shopify, deployed site, payment / form systems) for facts that change outside Git;
5. product-specific docs for implementation details, provided they do not conflict with higher-level locks;
6. older dated strategy / audit documents as historical evidence only.

A current live platform fact can supersede an old snapshot, but it does not silently change strategic authority. A new strategic decision must be explicit and dated.

## Next Concrete Action

Use [`active/NEXT_STEPS_TODO.md`](../active/NEXT_STEPS_TODO.md) as the execution checklist only when it is aligned with the 2026-08-26 lock and this canonical status.

Immediate sequence:

```text
bounded commercial website refactor
    ↓
transaction-readiness + administrative verification
    ↓
finalize one core service offer
    ↓
first 100 qualified prospects
    ↓
outreach + follow-up
    ↓
customer #1
    ↓
customer #2
    ↓
customer #3
    ↓
optimize from evidence
```

Parallel but subordinate:

```text
finalize / test-sell the existing Shopify workbook
+ synchronize / QA / launch Lucid Visuals
+ maintain Lucid Creations
```
