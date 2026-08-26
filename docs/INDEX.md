# Auralis Digital Document Index

Last updated: 2026-08-26

This is the repository navigation layer. It does **not** set strategy by itself.

## Start Here — Current Authority

Read these first, in order:

| Priority | File | Role |
|---:|---|---|
| 1 | `AURALIS_DIRECTION_LOCK_2026-08-26.md` | Strategic + commercial authority. |
| 2 | `docs/AURALIS_CURRENT_STATUS.md` | Canonical operational truth. |
| 3 | `active/NEXT_STEPS_TODO.md` | Current executable checklist. |
| 4 | `README.md` | Short repo orientation. |
| 5 | `docs/STATUS.md` | Short current snapshot. |

When a live platform fact changes outside Git, current Shopify / deployed-site / payment / form state may supersede an old factual snapshot. It does not silently change strategic authority.

## Current Operating Model

```text
Auralis Digital
├── Primary cash engine
│   └── focused small-business digital-presence service
├── Owned commerce
│   └── Lucid Creations
├── Scalable digital products
│   ├── Shopify + Printify workbook / course
│   └── Lucid Visuals
├── Supplemental
│   └── aligned custom creative work
└── Protected / long-horizon
    ├── NovaLIS / OpenClaw
    ├── Live Music Platform
    └── media / YouTube / news concepts
```

Outside the current active sprint: RJ Print, Pour Social, ShortCut Lawn Care, Buyer Advocate, ATH Service, active wholesale / affiliate sourcing, LastStopShop activation, and unrelated new ventures.

## Current Execution

Use:

- `active/NEXT_STEPS_TODO.md` — active sequence and checkboxes;
- `docs/EXECUTION_INDEX.md` — supporting workflow / folder map;
- `docs/AURALIS_CURRENT_STATUS.md` — current facts, boundaries, and known drift.

Current sequence:

```text
commercial website refactor
→ transaction + administrative readiness
→ one core offer
→ first 100 qualified prospects
→ outreach + follow-up
→ customer #1 → #2 → #3
→ optimize from evidence
```

## Website / Technical Reference

Folder: `docs/tech/`

Useful current infrastructure reference includes:

- `docs/tech/DEPLOYMENT_TRUTH.md`
- `docs/tech/FORMSPREE_SETUP.md`
- `docs/tech/CATALOG_DRIFT_CHECK.md`
- `docs/tech/CATALOG_GENERATOR.md`
- `docs/tech/WEBSITE_BUILD_WORKFLOW.md`
- `docs/tech/KNOWN_SITE_TODOS.md`

Technical docs may remain valid even when their old marketing / service context has changed. Read them for infrastructure, not strategic authority.

Deployment rules remain:

- `main` is source truth;
- GitHub Actions builds from `main`;
- `gh-pages` is generated deployment output;
- do not edit `gh-pages` manually;
- static folders can still be deployment input and must not be deleted casually.

## Sales / Lead Generation

Folder: `leads/`

The folder contains useful historical and reusable material for prospecting, pricing, objections, proposals, quotes, and follow-up.

**Review before use.** Older leads, geography, prices, niche offers, scripts, and service descriptions may predate the 2026-08-26 lock.

Current acquisition authority comes from:

- `active/NEXT_STEPS_TODO.md`;
- current Battle Creek / Southwest Michigan prospect list when created;
- current approved Business Digital Front Door scope / pricing.

Do not blindly execute old Belleville / Southeast Michigan lead files as the current market plan.

## Client Operations / Delivery

Folder: `onboarding/`

This folder contains reusable intake, proposal, revision, delivery, proof, handoff, hosting/domain, and care-plan material.

These are **implementation assets**, not automatic current offers. Review pricing, scope, care-plan promises, timelines, ownership terms, and legal language against the current lock before sending anything to a client.

## Shopify + Printify Workbook

Primary source:

- `docs/guides/shopify/Build-Your-First-Shopify-Store-DRAFT.md`

Generated artifact:

- `docs/guides/shopify/Build-Your-First-Shopify-Store-DRAFT.docx`

Current source already contains the six-phase Quick-Start, Chapters 1–12, 12 worksheets, and optional appendix. It is still explicitly **not publication-ready**.

Use `docs/AURALIS_CURRENT_STATUS.md` and `active/NEXT_STEPS_TODO.md` for current finalization requirements.

## Lucid Visuals

Use:

- `docs/LUCID_VISUALS_REVENUE_ENGINE_2026-08-26.md`
- live Shopify product state for current listing facts.

The product-specific plan is subordinate to the current Auralis lock and the actual verified customer files.

## Lucid Creations / Commerce

Useful reference:

- `docs/NEW_PRODUCT_CHECKLIST.md`
- `docs/SHOPIFY_LAUNCH_CHECKLIST.md`
- `docs/SALES_CHANNELS_ROADMAP.md`
- `docs/marketing/`
- `src/data/shopCatalog.ts`
- catalog generation / drift scripts.

Older catalog counts and channel statuses are dated snapshots. Use live Shopify state for current claims.

Current doctrine is **distribution / conversion evidence before broad catalog expansion**.

## Portfolio / Website Examples

Folder: `projects/`

Useful B2B examples include Patterson, roofing / contractor, painter, cleaning, detailing, restaurant, salon, barbershop, maintenance, photography, and other demos.

Rules:

- demo / concept / preview must remain honestly labeled;
- do not present a sample as delivered client work;
- curate a small number of strong examples on the public Work surface;
- historical project folders do not imply that the underlying venture is currently active.

## Internal Systems

Folder: `docs/internal/`

These are internal build / intake / workflow references. Review before reactivating old assumptions.

## Historical / Superseded Strategy

The following are historical or subordinate when they conflict with the current lock:

- `AURALIS_DIRECTION_LOCK_2026-08-20.md` — explicitly marked historical;
- `active/current_14_day_drop.md` — old product sprint, not current master execution;
- `docs/ROADMAP_EXECUTION_2026-05-14.md` — dated roadmap;
- `docs/MASTER_BUSINESS_STRUCTURE.md` — older structure reference unless updated;
- `docs/BUSINESS_MAP.md` — older structure reference unless updated;
- `docs/AURALIS_DIGITAL_UMBRELLA_STRUCTURE.md` — historical umbrella framing where conflicting;
- `docs/AFFILIATE_DROPSHIPPING_PLAN.md` — preserved reference, inactive lane;
- older lead lists / regional SEO service-area files;
- all material in `docs/archive/`.

Historical material may explain why something was built. It does not outrank current authority.

## Folder Map

| Folder | Current use |
|---|---|
| `active/` | Current execution files; only explicitly current files should drive work. |
| `clients/` | Client-specific or historical client materials. |
| `projects/` | Demos, projects, preserved implementation assets. |
| `leads/` | Reusable sales material; review for current scope/geography/pricing before use. |
| `onboarding/` | Reusable client operations; review before sending externally. |
| `docs/tech/` | Technical infrastructure / deployment reference. |
| `docs/internal/` | Internal workflow reference. |
| `docs/marketing/` | Commerce/content references, subject to current product doctrine. |
| `docs/archive/` | Historical only. |
| `src/` | React/Vite source. |
| `public/` | Public static assets. |
| `scripts/` | Build / generation / checking tools. |

## Rule

Do not create another competing “current state,” “master strategy,” or “next steps” file without an explicit need.

Update the existing authority chain instead:

```text
Direction Lock
→ Canonical Current Status
→ Active Next Steps
→ product / implementation docs
→ historical reference
```
