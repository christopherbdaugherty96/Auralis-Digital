# Master Business Structure

Last updated: 2026-06-03

This is the source-of-truth document for deciding where Auralis Digital business ideas, product lines, revenue channels, websites, Shopify stores, and repos belong.

If another document disagrees with this one, update that document or archive the older direction.

## Core Rule

Auralis Digital is the parent business umbrella.

New work should stay inside `Auralis-Digital` unless it becomes a standalone software product, standalone brand, separate legal/business operation, or separately deployed system with its own lifecycle.

Do not create a new repo for affiliate marketing, dropshipping, Printify planning, or RJ Print planning at the current stage.

## Current Structure

```text
Auralis Digital
|-- Business Operations
|   |-- Ecommerce Stack
|   |-- Affiliate Strategy
|   |-- Marketing
|   `-- Revenue Planning
|
|-- Website Services
|
|-- Ecommerce
|   |-- Printify
|   |-- RJ Print
|   |-- Affiliate Products
|   `-- Future Brands
|
|-- NovaLIS
|
`-- Future Ventures
```

## Placement Rules

Business-level strategy belongs in `docs/`.

Examples:

- `ECOMMERCE_STACK_PLAN.md`
- `AFFILIATE_DROPSHIPPING_PLAN.md`
- `AURALIS_DIGITAL_UMBRELLA_STRUCTURE.md`
- `BUSINESS_MAP.md`
- `3_YEAR_VISION.md`

RJ Print-specific planning belongs under `projects/rj-print/docs/`.

Examples:

- `RJ_PRINT_BRAND_PLAN.md`
- `RJ_PRINT_PRODUCT_CATEGORIES.md`
- `RJ_PRINT_PRICING_STRATEGY.md`
- `RJ_PRINT_FULFILLMENT_WORKFLOW.md`

## Decision Questions

Before creating a new repo, website, Shopify store, or brand surface, answer these questions:

1. Is this part of the Auralis Digital parent business?
2. Is this a revenue channel, product line, service offer, or standalone business?
3. Does it need its own checkout, customer base, domain, repo, or deployment lifecycle?
4. Would separating it make operations clearer, or would it create unnecessary overhead?
5. Can it be documented and tested inside the current Auralis ecosystem first?

## Current Decisions

- Auralis Digital remains the parent business.
- Shopify remains the commerce system for product checkout, payments, orders, and platform operations.
- Printify remains the print-on-demand production layer for non-in-house products.
- RJ Print remains a documented product line inside the Auralis ecosystem.
- Affiliate products remain a revenue channel under Auralis Digital.
- Dropshipping remains a test layer, not the business foundation.
- Faire remains a later wholesale option after demand is proven.
- No new repo is needed for affiliate marketing, dropshipping, Printify planning, or RJ Print planning right now.

## When To Create A New Repo

Create a separate repo only when the work becomes one of these:

- a standalone Shopify app
- a standalone automation system
- a full independent brand/store with its own lifecycle
- a software product with separate build, deploy, issue, and release needs
- a client project that should not live inside Auralis Digital
- a venture that needs independent ownership, roadmap, or infrastructure

Until then, keep the work inside `Auralis-Digital`.
