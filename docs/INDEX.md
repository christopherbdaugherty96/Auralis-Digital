# Auralis Digital Document Index

Last updated: 2026-06-05

This is the navigation layer for the repo. Use it to find the current source of truth before creating or editing another document.

Auralis Digital currently contains four related public surfaces:

1. Lucid Creations products
2. RJ Print products
3. custom / personalized design requests
4. website design services

Current execution priority is:

```text
business setup -> trust setup -> inquiry flow -> products/custom design/web design clarity -> first real sale or client -> proof
```

The product/shop surface exists publicly, but commerce readiness is still separately tracked and should not be overstated. Custom design and website design are also active public directions, but neither should be presented as more mature than the current delivery/proof state supports.

## Start Here

| File | Purpose |
|---|---|
| `docs/MASTER_BUSINESS_STRUCTURE.md` | Source of truth for deciding whether a project, store, website, repo, or revenue channel belongs under Auralis Digital. |
| `docs/BUSINESS_HEALTH.md` | One-screen living scorecard: revenue, legal, channels, product health, trust. Read this first. |
| `docs/OPERATING_RHYTHM.md` | Weekly cadence (Mon ops / Tue–Thu creation / Fri marketing), three north-star metrics, and the no-fifth-branch rule. |
| `docs/AURALIS_CURRENT_STATUS.md` | Canonical truth doc: what is real, what is missing, and what to do next. |
| `docs/ROADMAP_EXECUTION_2026-05-14.md` | Current execution roadmap: public trust fixes, contact verification, Shopify readiness, custom design readiness, website design readiness, first sale/client, and proof. |
| `active/NEXT_STEPS_TODO.md` | Active execution checklist: business setup to first proof and commerce readiness tracking. |
| `docs/STATUS.md` | Short operational status snapshot. |
| `docs/ROADMAP.md` | Older/general execution roadmap and priority order. Use the dated execution roadmap above for the current ordered workstream. |
| `docs/SHOPIFY_LAUNCH_CHECKLIST.md` | Product/Shopify launch checklist before sending real traffic to product links. |
| `docs/NEW_PRODUCT_CHECKLIST.md` | Per-product release checklist: data quality, channel publishing (NOT automatic), catalog sync, link test. |
| `docs/SPRINT_EXECUTION_48HR.md` | Active sprint checklist for lead capture and outreach. |
| `docs/INDEX.md` | This map. |

## Business Structure And Revenue Planning

Use these files for parent-business structure, ecommerce strategy, affiliate/dropshipping strategy, and long-term direction.

| File | Purpose |
|---|---|
| `docs/MASTER_BUSINESS_STRUCTURE.md` | Main decision layer for where future projects, websites, Shopify stores, repos, and revenue channels belong. |
| `docs/AURALIS_DIGITAL_UMBRELLA_STRUCTURE.md` | Defines Auralis Digital as the parent business umbrella and maps major branches. |
| `docs/BUSINESS_MAP.md` | Quick map of website services, Lucid Creations, RJ Print, affiliate products, dropshipping, and future ventures. |
| `docs/ECOMMERCE_STACK_PLAN.md` | Shopify-first stack plan covering Lucid Creations, RJ Print, Printify, dropshipping, reviews, email, and social traffic. |
| `docs/SALES_CHANNELS_ROADMAP.md` | Sales channel expansion playbook: Google & YouTube, TikTok, Pinterest, Meta, marketplaces — install order, per-channel setup steps, and status log. |
| `docs/AFFILIATE_DROPSHIPPING_PLAN.md` | Strategy and guardrails for affiliate recommendations and curated dropshipping tests. |
| `docs/3_YEAR_VISION.md` | Lightweight three-year direction: prove the business, build repeatable revenue, then separate only what earns separation. |

## RJ Print Planning

Folder: `projects/rj-print/docs/`

RJ Print-specific planning lives with the RJ Print project because it is specific to that product line.

| File | Purpose |
|---|---|
| `projects/rj-print/docs/RJ_PRINT_BRAND_PLAN.md` | RJ Print role, brand position, and relationship to Auralis Digital. |
| `projects/rj-print/docs/RJ_PRINT_PRODUCT_CATEGORIES.md` | Starter product categories, fit criteria, and early avoid list. |
| `projects/rj-print/docs/RJ_PRINT_PRICING_STRATEGY.md` | Pricing factors, margin guardrails, and custom quote rules. |
| `projects/rj-print/docs/RJ_PRINT_FULFILLMENT_WORKFLOW.md` | Order, production, quality check, packaging, and customer communication workflow. |

## Current Public Direction

Auralis Digital currently contains four related public surfaces:

1. Lucid Creations products
2. RJ Print products
3. Custom / personalized design requests
4. Website design services

The homepage should act as a brand gateway. Product browsing should split into Lucid Creations and RJ Print paths while checkout remains in one Shopify store. Custom requests belong on `/custom-design`, and website services belong on `/web-design`.

## Current Highest-ROI Workstream

Use `docs/ROADMAP_EXECUTION_2026-05-14.md` for the current ordered workstream:

1. Verify contact/Formspree flow.
2. Verify Shopify policies and checkout.
3. Confirm live social preview cache after deploy with Facebook Sharing Debugger.
4. Run live phone QA on `/products`, `/custom-design`, `/web-design`, and contact flow.
5. Pick one execution lane.
6. Get one real sale/client/request.
7. Capture real proof.

## Sales and Lead Generation

Folder: `leads/`

Use these files to find, qualify, contact, follow up with, and close prospects.

## Client Operations and Delivery

Folder: `onboarding/`

Use these files after a lead is interested, once a project is quoted, and during delivery, handoff, and retention.

## Website and Technical Work

Folder: `docs/tech/`

Use these files for website edits, launch readiness, form/backend setup, deployment notes, and technical tracking.

Key deployment truth:

- `main` is the source of truth.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output.
- Static folders such as `website/`, `projects/`, and `service-areas/` may still be active deployment input.
- Do not edit `gh-pages` manually or merge it into `main`.

## Internal Build System

Folder: `docs/internal/`

These files describe the current internal operating workflow, intake direction, and site-production process.

## Active Work Areas

| Folder | Purpose |
|---|---|
| `active/` | Current active business/project work. |
| `clients/` | Client-specific materials. |
| `projects/` | Project work and examples. |
| `website/` | Website-related source or static materials outside the Vite app. |
| `src/` | Vite/React website source. |
| `public/` | Public static assets. |
| `scripts/` | Build/deploy helper scripts. |

## Archive

Folder: `docs/archive/`

Historical documents live here. They may explain past decisions, but they do not override the current canonical truth docs.

## Rule

Do not create overlapping roadmap, status, or current-state documents.

Update existing canonical docs before creating new tracking layers:

1. `docs/AURALIS_CURRENT_STATUS.md`
2. `docs/ROADMAP_EXECUTION_2026-05-14.md`
3. `active/NEXT_STEPS_TODO.md`
4. `docs/STATUS.md`
5. `docs/ROADMAP.md`
