# Business Health Scorecard

Updated: 2026-07-04 · One screen, verified facts only. Update marks when state changes; keep this under a page. Narrative lives in `AURALIS_CURRENT_STATUS.md`; channel detail in `SALES_CHANNELS_ROADMAP.md`.

```text
REVENUE
✓ First sale (#1001, 2026-05-28, $31.58, fulfilled — custom/family order:
  checkout+fulfillment proof, not a margin or demand benchmark)
□ First non-family sale from public traffic  ← THE commercial milestone
□ 10 sales
□ 100 sales

LEGAL / FORMATION
✓ Shopify policies (all 5 published)
□ LLC filing confirmed
□ EIN
□ Business bank account
□ Domain email (still auralisdigitaleco@gmail.com)

COMMERCE CHANNELS
✓ Online Store (auralisdigital.net + shop.auralisdigital.net; WELCOME10 live)
✓ Shop app (33/33 — 6 missing new products backfilled 2026-07-04)
✓ Google & YouTube (32/33; awaiting first review ~2026-07-08→10; shipping-info flag to clear)
✓ Facebook & Instagram (32/33, hoodie excluded; Meta-side review status unverified)
✓ TikTok (official TikTok Inc. app installed; 32/33 published, hoodie excluded; Seller Center handoff paused on `shop=undefined` callback loop)
□ Pinterest
□ Marketplaces (Amazon/eBay/Walmart — deliberately deferred)

PRODUCTS (33 active; 32 on website — profanity hoodie excluded via overrides)
✓ Catalog drift: 0 — site catalog now GENERATED from Shopify (npm run generate:catalog)
✓ Dead product links on website: 0
✓ Products missing from website: 0 (1 deliberate exclusion)
✓ Vendor field consistent (fixed 2026-07-04)
△ Products with <3 images: 2 (Sun of Life Tapestry, bucket hat)
△ Printify boilerplate: curated overrides cover most products; new products get derived copy until curated
✓ Channel policy exclusions enforced (profanity hoodie off Google/Meta/TikTok/ChatGPT)

TRUST / PROOF
1 customer · 0 reviews · 0 testimonials · 0 published case studies
□ Proof captured from order #1001  ← highest-leverage open item
□ Google Business Profile

OPS DISCIPLINE
✓ Truth docs match verified reality (2026-07-04)
✓ New-product release checklist exists
✓ Drift checker in CI-able form (manual for now)
Rule: commit = checkpoint, push = release (main auto-deploys)
```
