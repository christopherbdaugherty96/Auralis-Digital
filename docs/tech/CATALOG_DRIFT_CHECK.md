# Catalog Drift Check

Created: 2026-07-03

Product truth is split across three surfaces: Shopify (source of truth), the website catalog at `src/data/shopCatalog.ts` (now generated — see [CATALOG_GENERATOR.md](CATALOG_GENERATOR.md)), and external sales channels (Google Shopping, later TikTok/Pinterest). This check catches drift between the first two before it reaches visitors or shopping feeds.

## Run it

```
npm run check:catalog
```

(or `node scripts/check-catalog-drift.mjs`)

- Exit 0: no drift. Exit 1: drift found (issues listed). Exit 2: script/network error.
- Read-only. It never modifies the catalog, the store, or anything else. Shopify wins; fix drift by running `npm run generate:catalog` (plus overrides edits if copy needs curating).
- Products listed in `excludedHandles` in `src/data/shopCatalogOverrides.mjs` are deliberately absent from the site: the checker skips them instead of reporting "MISSING LOCALLY", and reports "EXCLUDED BUT PRESENT" if one appears in the catalog anyway.

## What it compares

Live data comes from the store's public `https://auralis-design.myshopify.com/products.json` (products published to the Online Store channel; no credentials required).

| Check | Meaning of a hit |
|---|---|
| NOT LIVE | Local entry's product is unpublished/archived/deleted in Shopify — remove or update the local entry |
| MISSING LOCALLY | Product is live in Shopify but absent from `shopCatalog.ts` — add it if the site should show it |
| Title drift | Titles differ (watch for `®`/`™` symbol differences) |
| Product type drift | Local `productType` ≠ Shopify product type |
| Price drift | Local price ≠ Shopify minimum variant price |
| URL/slug mismatch | Local `slug` disagrees with the handle inside `shopifyProductUrl` |

Not covered: taxonomy category, descriptions, and images (not exposed by `products.json`); per-variant prices beyond the minimum; products in other stores.

## When to run

- After adding/retiring/renaming products in Shopify or Printify.
- Before deploying site changes that touch `/products` pages.
- Periodically while external channels (Google Shopping) are syndicating the catalog, since stale local data misrepresents what the store sells.

First run (2026-07-03) found 12 issues: 4 local entries no longer live, 4 live products missing locally, 2 cosmetic `®` title diffs, 2 product-type diffs. All resolved on 2026-07-04 by switching the catalog to generation (`npm run generate:catalog`); see [CATALOG_GENERATOR.md](CATALOG_GENERATOR.md).
