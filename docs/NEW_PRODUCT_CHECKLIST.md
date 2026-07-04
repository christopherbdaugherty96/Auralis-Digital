# New Product Release Checklist

Created: 2026-07-04

Run this every time a product is added (or significantly changed) in Shopify/Printify. Exists because sales channels do NOT auto-publish new products (discovered 2026-07-04: "Depth" Pullover Hoodie was live on the site but missing from Google Shopping), and the website catalog is a separate copy that must be updated.

## Checklist

- [ ] **Images:** 3+ photos preferred (single-image listings underperform on Google/TikTok)
- [ ] **Title:** no typos, no profanity for channel-bound products, `®`/`™` symbols consistent
- [ ] **Description:** Printify boilerplate stripped (no ".: " artifacts, no "Blank product sourced from..." lines)
- [ ] **Category:** correct Shopify taxonomy category (wearable blankets = Bedding > Blankets, NOT Hoodies)
- [ ] **Vendor:** "Lucid Creations" (not "Printify")
- [ ] **Price/margin reviewed**
- [ ] **Shopify status:** Active
- [ ] **Collections:** added to the right collections so site category cards pick it up
- [ ] **Google & YouTube channel:** published (does NOT happen automatically) — admin Publishing card, or API `publishablePublish` with publication `gid://shopify/Publication/215417028708`
- [ ] **TikTok channel:** published, once the channel is live (Phase 2)
- [ ] **Policy screen:** if the product has profanity or restricted content, EXCLUDE it from Google/TikTok/Pinterest/Meta (API: `publicationUpdate` + `publishablesToRemove`) and note it in `docs/SALES_CHANNELS_ROADMAP.md`
- [ ] **Website catalog:** update `src/data/shopCatalog.ts` (until it is auto-generated), then run `npm run check:catalog` — must exit 0
- [ ] **Test the live product link** on auralisdigital.net and the Shopify product page

## Product retirement (mirror image)

- [ ] Unpublish/archive in Shopify
- [ ] Remove from `src/data/shopCatalog.ts` (drift checker will flag it as NOT LIVE if missed)
- [ ] Confirm it drops out of channel feeds
