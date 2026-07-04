# Shop Catalog Generator

Created: 2026-07-04

`src/data/shopCatalog.ts` is no longer maintained by hand. It is generated from live Shopify data, with a small manual overrides file for everything Shopify can't provide. Shopify is the source of truth; the generator supersedes hand-fixing drift issues found by the [drift checker](CATALOG_DRIFT_CHECK.md).

## Run it

```
npm run generate:catalog   # regenerate src/data/shopCatalog.ts from Shopify
npm run check:catalog      # verify (should exit 0 right after generating)
npm run build              # confirm the site still builds
```

Exit codes: 0 = catalog written, 2 = script/network error (nothing written; it also refuses to write if Shopify returns 0 products).

## How it works

1. Fetches all published products from the store's public `https://auralis-design.myshopify.com/products.json` (Online Store channel, no credentials, paginated).
2. Drops any handle listed in `excludedHandles` in `src/data/shopCatalogOverrides.mjs`.
3. Derives every `ShopProduct` field it can from live data:
   - `title`, `productType`, `slug` (= handle), `shopifyVendor`, `price` (min variant price), `imageUrl`/`photos` (first 4 images), variant/option summaries, spec table, highlights, tracking URL.
   - `category` from product type + title keywords (Tapestry → Wall Decor, Blanket → Blankets, etc.).
   - `shortDescription`/`detailDescription` fall back to plain-text renderings of Shopify's `body_html`.
   - `reviewScope` from a product-base noun table (trucker cap, woven blanket, ...).
4. Merges per-handle overrides from `productOverrides` (any field can be overridden; `extraSpecs` rows are appended to the spec table).
5. Writes `shopCatalog.ts` deterministically: products sorted by title (handle tiebreak), stable field order, `withShopifyTracking` helper and `shopFaqs` export preserved. Running it twice with unchanged store data produces byte-identical output.

## The overrides file (`src/data/shopCatalogOverrides.mjs`)

This is where all manual curation now lives — **edit it, then regenerate**. Never edit `shopCatalog.ts` directly; the next generation overwrites it.

- `excludedHandles` — live products the website should not show. Currently: `fuck-society-heavy-blend™-hooded-sweatshirt` (owner decision pending; remove the entry and regenerate to publish it on the site).
- `productOverrides` — per-handle curated copy. Seeded with the previously hand-written `shortDescription`/`detailDescription` for every product so no site copy regressed; new products fall back to derived text until curated here.
- `shopFaqs` — FAQ copy emitted verbatim into the generated file.
- `displayVendor` — brand shown on the site (`vendor` field); Shopify's raw vendor (e.g. "Printify") is kept in `shopifyVendor`.

The drift checker imports `excludedHandles` too, so excluded products are skipped instead of reported as "missing locally" (and flagged if they sneak into the generated file).

## Workflow after changing products in Shopify/Printify

1. `npm run generate:catalog`
2. Read the script output: it lists exclusions and warns about stale overrides (handle no longer live) and products landing in a category the site's tab ordering doesn't know (`preferredProductCategoryOrder` in `src/components/AuralisHomepage.tsx`).
3. For new products, optionally add curated copy to `productOverrides` and regenerate.
4. `npm run check:catalog` (expect exit 0) and `npm run build`, then commit the regenerated `shopCatalog.ts` together with any overrides changes.

## Limitations

- `products.json` does not expose Shopify taxonomy categories, metafields, or unpublished products — category is heuristic, exclusions are manual.
- Photos are capped at 4 per product (matches what the site displays).
- Prices use the minimum variant price, same as the drift checker.
