# Auralis Digital Document Index

Last updated: 2026-05-13

This is the navigation layer for the repo. Use it to find the current source of truth before creating or editing another document.

Auralis Digital currently contains two related public surfaces:

1. Auralis Digital website services
2. An Auralis Design product/shop surface with Shopify checkout routing

Current execution priority remains website services first:

```text
business setup -> trust setup -> lead capture -> outreach -> first client -> proof
```

The product/shop surface exists publicly, but commerce readiness is still separately tracked and should not be overstated.

## Start Here

| File | Purpose |
|---|---|
| `docs/AURALIS_CURRENT_STATUS.md` | Canonical truth doc: what is real, what is missing, and what to do next. |
| `active/NEXT_STEPS_TODO.md` | Active execution checklist: business setup to first proof and commerce readiness tracking. |
| `docs/STATUS.md` | Short operational status snapshot. |
| `docs/ROADMAP.md` | Execution roadmap and priority order. |
| `docs/SPRINT_EXECUTION_48HR.md` | Active sprint checklist for lead capture and outreach. |
| `docs/INDEX.md` | This map. |

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

Update:

1. `docs/AURALIS_CURRENT_STATUS.md`
2. `active/NEXT_STEPS_TODO.md`
3. `docs/STATUS.md`
4. `docs/ROADMAP.md`

before creating new tracking layers.
