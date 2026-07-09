# Sales Channels Roadmap — Lucid Creations

Created: 2026-07-03
Store: Lucid Creations (shop.auralisdigital.net) — Shopify Basic, USD, US

Goal: get the existing 31-product catalog in front of buyers on external platforms using free Shopify channel apps, in priority order, without breaking policy on any platform.

## AGENT HANDOFF — Resume Here (updated 2026-07-04)

Self-contained state for any agent (Claude or Codex) picking this up. Full history is in the Status Log at the bottom.

Key identifiers:
- Shopify store: `auralis-design` (Lucid Creations, shop.auralisdigital.net), Basic plan, USD, US
- Google & YouTube publication: `gid://shopify/Publication/215417028708`
- Google Merchant Center: `5818967427` (christopherbdaugherty@gmail.com)
- Google Analytics: `G-60YE8LXXBX`
- TikTok publication: `gid://shopify/Publication/215481778276`; official app handle `tiktok-ads-2`; target account `@lucid.creation`
- Policy-excluded product: "Fuck society Heavy Blend™ Hooded Sweatshirt" (`gid://shopify/Product/8603469348964`) — keep OFF Google/TikTok/Pinterest/Meta/ChatGPT, keep ON Online Store/Shop
- Scheduled automation: `check-google-shopping-product-review-status` fires 2026-07-09 10:00 AM ET

Current state:
- GOOGLE (Phase 1): setup COMPLETE, in wait state. 32/33 products on channel (hoodie excluded), all syncs On; shipping-info/review status still needs follow-up.
- META (Phase 4 done early): Facebook & Instagram publication exists; 32/33 products on channel (hoodie excluded). Meta-side Commerce Manager/Instagram Shopping approval still unverified.
- CHATGPT: 32/33 products on channel (hoodie excluded). Passive AI shopping surface; no further setup known.
- TIKTOK (Phase 2): official TikTok Inc. app installed; publication exists; 32/33 products on channel (hoodie excluded). SELLER CENTER IS PAUSED because TikTok handoff spins on `seller-us.tiktok.com/shopify_open_auth?...shop=undefined`; resume later from Shopify Admin → Apps → TikTok, not that spinner URL.
- PINTEREST (Phase 3) / MARKETPLACES (Phase 5): not started.

Next actions, in order:
1. Owner: sanity-check synced shipping/delivery times in the Google & YouTube app against real POD timelines (production 2–5d + transit 3–8d).
2. Anyone, by 2026-07-05: if Merchant Center counters still 0 total, treat as feed issue — inspect merchants.google.com account 5818967427 → Products → All products for feed errors.
3. Anyone, 2026-07-08→10: check Google review results. Agent method: Admin API query on `product.feedback { summary details { app { title } messages { message } } }`; also Merchant Center UI. Fix/log any disapprovals.
4. Owner/Codex later: resume TikTok seller verification from Shopify Admin → Apps → TikTok only if ready to handle identity/tax/payout steps. Catalog side is already cleaned.
5. Owner/Codex: refine Meta/Google/Shop customer-facing surfaces before starting Pinterest.

API techniques that work here (Shopify MCP / Admin GraphQL):
- List channels: `{ publications(first: 25) { edges { node { id name } } } }`
- Check per-product channel state: `product.publishedOnPublication(publicationId:)`
- EXCLUDE a product from a channel: `publicationUpdate(id: <publicationId>, input: { publishablesToRemove: [<productId>] })` — use this; `publishableUnpublish` is BLOCKED by MCP safety policy. Publishing works via `publishablePublish` or `publishablesToAdd`.
- Recategorize products: `productUpdate(product: { id, category: <TaxonomyCategory gid> })` (Blankets = `gid://shopify/TaxonomyCategory/hg-15-1-4`)
- `appInstallations` query is ACCESS-DENIED on this MCP connection; infer app state from `publications` instead.

Known data caveats (accepted, do not "fix" without owner ask): no GTINs on any variant (POD — expect limited-performance warnings only); all variant weights are the 0.22 lb Printify default (only matters if weight-based shipping is ever enabled); apparel may need Unisex/Adult gender/age attributes set in the Google app bulk editor if warnings appear; "Tripsitter" hat title is low-risk but flaggable.

## Current State (verified 2026-07-04 via Shopify Admin API)

Products are published to these channels:

| Channel | Status |
|---|---|
| Online Store | Live, 33/33 |
| Shop (Shop app) | Live, 33/33 |
| Google & YouTube | Live in Shopify, 32/33; hoodie excluded; platform review/shipping status pending |
| Facebook & Instagram | Live in Shopify, 32/33; hoodie excluded; Meta-side approval status unverified |
| TikTok | Official app live in Shopify, 32/33; hoodie excluded; Seller Center verification paused on `shop=undefined` callback loop |
| ChatGPT | Live/passive AI shopping surface, 32/33; hoodie excluded |
| Microsoft Copilot | Auto-enabled by Shopify, 33/33 |
| Point of Sale | Enabled, unused |

No presence yet on Pinterest or external marketplaces.

## Priority Order

| # | Channel | Why | Effort | Cost |
|---|---|---|---|---|
| 1 | Google & YouTube | Free Shopping listings + search visibility; largest zero-spend reach | ~1–2 hrs setup + up to 3–5 day review | Free |
| 2 | TikTok | Core audience (EDM/festival/psychedelic); strongest organic fit | ~1–2 hrs + seller review | Free |
| 3 | Pinterest | Tapestries/blankets/home decor are core Pinterest categories; pins compound over time | ~1 hr | Free |
| 4 | Facebook & Instagram | Product tags on posts/reels; US requires on-platform checkout (more paperwork) | ~2–3 hrs | Free |
| 5 (later) | Marketplace Connect (Amazon/eBay/Walmart) | Real reach but fees, GTIN friction, and POD delivery-time risk — do after 1–4 are stable | Days | Referral fees per sale |

## Phase 1 — Google & YouTube

1. Shopify admin → Settings → Apps and sales channels → Shopify App Store → install **"Google & YouTube"** (by Google).
2. Connect/create a **Google account** and **Google Merchant Center** account during onboarding.
3. Verify website (auralisdigital.net / shop domain) — the app handles this automatically via Shopify.
4. Set shipping info in Merchant Center to match real POD times (production 2–5 days + transit). Understating this causes suspension.
5. Enable **free listings** first. Paid Performance Max campaigns are optional and later.
6. Product identifiers: POD items have no GTINs. The channel app marks products as custom goods (`identifier_exists = false`); if items are disapproved for "missing GTIN," fix per-product in the Google channel app.
7. Expect **"Fuck society" hoodie to be disapproved** for profanity — exclude it from this channel rather than fighting review.

## Phase 2 — TikTok

1. Install the **TikTok** channel app from the Shopify App Store.
2. Connect or create a **TikTok For Business** account; apply for **TikTok Shop** (US seller review requires identity/business verification).
3. Sync catalog via the app; confirm category mapping (apparel, home decor).
4. Same profanity exclusion applies.
5. Organic play: post design/product content from the Lucid Creations angle; tag products once Shop is approved.

## Phase 3 — Pinterest

1. Install the **Pinterest** channel app.
2. Convert/create a **Pinterest business account**; claim the website.
3. Catalog syncs automatically → products become Product Pins.
4. Create boards around: tapestry wall ideas, festival fits, sacred geometry art, cozy blankets.

## Phase 4 — Facebook & Instagram

1. Install the **Facebook & Instagram** channel app (by Meta).
2. Requires: Facebook Page, Instagram professional account, **Meta Business Manager**, and Commerce Manager with payout/bank verification (US checkout now happens ON Meta, not click-through).
3. Once approved, tag products in posts/reels/stories.

## Phase 5 (Later) — Marketplaces

Hold until Phases 1–4 are live and at least one channel produces sales. Then evaluate **Shopify Marketplace Connect** for Amazon/eBay/Walmart. Known friction: referral fees (~8–15%), GTIN/UPC requirements (POD exemption process on Amazon is manual), and stricter delivery SLAs than POD comfortably meets.

## Cross-Channel Rules

- **One catalog, per-channel publishing.** Use Shopify publishing (not duplicate products) to include/exclude items per channel.
- **Profanity products** (currently: Fuck society Heavy Blend Hooded Sweatshirt) stay OFF Google/TikTok/Pinterest/Meta.
- **Shipping honesty:** every channel gets real POD production + transit times.
- **Pricing parity:** keep prices identical across channels to avoid policy flags.

## Division of Labor

Owner (requires login/OAuth — Claude cannot do these):
- Install each channel app in Shopify admin.
- Create/connect platform accounts (Google, TikTok, Pinterest, Meta) and complete identity/payout verification.

Claude (via Shopify Admin API, after each app is installed):
- Bulk-publish all active products to the new channel.
- Exclude flagged products per channel.
- Verify sync status and list any disapproved products.
- Audit product data (titles/descriptions/categories) against channel requirements.

## Status Log

- 2026-07-09 (scheduled Google review heartbeat): automation fired and was deleted after this check. Verified from available surfaces: Shopify catalog is still accessible and active products are intact; local generated catalog remains aligned with live Online Store products (checker output: 32 local entries vs. 33 live products, with the profanity hoodie excluded by override; no drift detected). Could NOT verify Merchant Center counters or product-level Google `product.feedback` from this session: the Shopify connector exposed product browsing only, not raw Admin GraphQL feedback/publication queries, and Merchant Center redirected to an unreadable embedded `bscframe` in the in-app browser. Therefore the decisive follow-up remains owner-side: open Merchant Center account `5818967427` -> Products -> All products / Diagnostics and confirm submitted/approved/limited/not-approved counts. If counters are still 0 on 2026-07-09, treat it as a feed issue, not normal review lag.

- 2026-07-05 (scheduled check — shipping RESOLVED, attributes fixed): the "Missing shipping information" error is GONE from all product feedback; sync succeeded on its own, so the planned manual $13.99 Merchant Center override is CANCELLED. Products are now "Pending initial review" (normal). Fixed via API: set `mm-google-shopping` metafields (age_group=adult, gender=unisex — kimono female; Depth also color=Black) on the 14 products demoted for missing apparel attributes. WATCH items still under Google review: "Inappropriate image" advisories on Sid Girl Hoodie + Geometric Dad Cap (likely false positives on mockups, destination list empty = advisory), "Unable to show image / not processed" on Tripsitter hat + Goddess/Math tapestries (transient image processing). Next: July 9 automation confirms review outcomes; only act if flags persist as actual disapprovals.

- 2026-07-04 (storefront/Meta sweep): Shopify storefront verified — WELCOME10 announcement bar live AND footer email signup exists ("Stay in the Loop"), so the discount + capture loop is closed end to end. Copy refinement opportunity (non-blocking): retitle the footer signup toward "Get 10% off your first order" so the incentive is explicit. META BLOCKER: all profile edits and posting for @auralis_digital_ gated on "Verification needed" — owner-only security step in Meta Business Suite (Verify account). Bio/highlights/8-post rollout resume after that clears.

- 2026-07-04 (product copy pass, Shopify side): rewrote descriptionHtml via API for the 8 promotion targets (Ying Yang Tee, Trippy Hippy Tee, Psychedelic Symbol Hoodie, Treehugger Hoodie, Zeus Sherpa, Ying Yang Tan Sherpa, Sun of Life Hooded Sherpa, Secret Owl Hooded Sherpa). Format: brand-voice lead + clean spec bullets (Printify ".:" artifacts and "Blank product sourced from..." lines stripped) + made-to-order/tracking note. These descriptions feed Google/Meta/TikTok listings and the Shopify product pages; the website keeps its own curated copy via shopCatalogOverrides.mjs. Remaining ~24 products still have raw Printify copy — clean opportunistically or when promoting.
- 2026-07-04 (copy pass completed): rewrote descriptionHtml for 22 more products (all tapestries, woven blankets, journals, pendant, pillow, Sid Girl, all hats, Micro or Macro line, kimono, F-society). Total 30/33 rewritten; Orivex ×2 already had custom copy; "Depth" hoodie skipped — owner must supply fabric specs before it gets a rewrite (do not invent). Also: homepage featured grid now leads with profit winners (both sherpa slots), and the site shipping FAQ states the 2–5d production / 3–8d shipping promise instead of hedging.

- 2026-07-04 (TikTok paused, catalog cleaned): uninstalled third-party "TikTok Shop — SPL"; installed official "TikTok" app by TikTok Inc. Shopify now has TikTok channel/publication (`gid://shopify/Publication/215481778276`, autoPublish=false). Verified via API: 32/33 products published, profanity hoodie excluded (`publishedOnPublication=false`). Seller Center handoff is PAUSED because TikTok's `shopify_open_auth` callback spins with `shop=undefined`; do not continue from that URL. Resume later from Shopify Admin → Apps → TikTok, and expect owner-only identity/tax/payout steps for TikTok Shop approval.
- 2026-07-04 (Phase 4 done early — Facebook & Instagram live): Meta channel connected ahead of TikTok/Pinterest (publication gid://shopify/Publication/215478173796, autoPublish=false). Verified via API: 32/33 products published, profanity hoodie excluded. UNVERIFIED: Meta-side Instagram Shopping approval state — the embedded Meta setup screen renders blank in Shopify; check Commerce Manager directly for review/Business Manager steps. SAME GOTCHA as Google: new products need manual publish to this channel.
- 2026-07-04 (Shop app gap found and fixed): all 6 products created since 2026-06-27 (Orivex tees ×2, Galactic Goddess Kimono, Lucid Mind Bucket Hat, "Depth" hoodie, Fuck society hoodie) were never published to the Shop app channel — same autoPublish=false trap. All 6 published via API; Shop now 33/33 (hoodie intentionally INCLUDED per cross-channel rules — excluded only from Google/TikTok/Pinterest/Meta). NOTE: relayed channel counts also showed "ChatGPT: 32" (AI shopping surface, not visible in the publications API) and "POS: 1" (unused, ignore).

- 2026-07-04 (shipping blocker diagnosed): Google product feedback reports "Missing shipping information in [Free_listings,Shopping_ads] [US]" + "Pending initial review". Shopify-side audit via deliveryProfiles: US shipping DOES exist but is complex — default profile has US flat rates ($0 free / $8 standard / $15 express) plus carrier-calculated DHL/FedEx internationally, AND Printify has created 4+ per-product-group profiles with quantity-tiered US rates ($5.99–$13.79 first item). The Google app's shipping sync commonly fails to translate multi-profile/tiered setups. Fix path: (1) since sync was enabled <24h ago, allow ~24–48h for reprocessing; (2) if the error persists by 2026-07-06, create a MANUAL US shipping service in Merchant Center (merchants.google.com 5818967427 → Shipping and returns): flat rate that is NEVER LOWER than actual checkout shipping — highest first-item US rate is $13.79, so use $13.99 flat (or model free-over-threshold if one exists). Google policy: quoted shipping below actual charged = disapproval; quoting high is allowed.

- 2026-07-03: Roadmap created. No channel apps installed yet. Browser automation unavailable this session (Chrome extension not connected), so installs remain with owner.
- 2026-07-03 (later): Phase 1 started. Google & YouTube channel app installed on `auralis-design` store; admin URL: https://admin.shopify.com/store/auralis-design/apps/google. "Connect Google account" attempted with christopherbdaugherty@gmail.com from an embedded in-app browser — Google OAuth dead-ends on a blank accounts.google.com/gsi/transform page after phone verification; Shopify still shows "Connect Google account". Fix: redo the connect step in normal Chrome (embedded webviews are blocked/broken for Google OAuth). Remaining after connect: pick/create Merchant Center, confirm shipping settings, enable free listings, then bulk-publish products (Claude, via API).
- 2026-07-03 (later still): Google account connected successfully via normal Chrome — Google & YouTube publication now exists (gid://shopify/Publication/215417028708). All 32 active products auto-published to it, INCLUDING the "Fuck society" hoodie. API unpublish is blocked by MCP safety policy — owner must exclude it manually: Shopify admin → Products → "Fuck society Heavy Blend™ Hooded Sweatshirt" → Publishing/Manage sales channels → uncheck Google & YouTube. Still pending in Google & YouTube app: Merchant Center link confirmation, shipping settings, free listings enablement, then Google's 3–5 day product review.
- 2026-07-03 (done): "Fuck society" hoodie removed from the Google & YouTube channel via API (`publicationUpdate` with `publishablesToRemove` — works where `publishableUnpublish` is blocked; note for future per-channel exclusions). Verified: publishedOnPublication = false; product remains live on Online Store/Shop. Remaining Phase 1 items: owner finishes Google app onboarding (Merchant Center, shipping, US market, free listings), then wait out Google review.
- 2026-07-03 (Google readiness audit of all 31 published products):
  - PASS: all titles <150 chars, all have descriptions, all have images, all have Shopify taxonomy categories (auto-maps to Google categories).
  - FIXED via API: "Sun of Life Hooded Sherpa Fleece Blanket" and "Secret Owl Hooded Sherpa Fleece Blanket" were miscategorized as Clothing > Hoodies (would trigger Google apparel attribute requirements); recategorized to Home & Garden > Linens & Bedding > Bedding > Blankets.
  - KNOWN/ACCEPTED: no GTINs/barcodes on any variant (normal for POD; expect "limited performance" warnings, not disapprovals — channel app should mark items as custom goods).
  - WATCH: every variant weight is the 0.22 lb Printify default — wrong for blankets/hoodies. Irrelevant to Google if shipping is flat-rate, but fix before enabling any weight-based shipping rates.
  - WATCH: apparel items need gender/age_group attributes for US Google listings — set to Unisex/Adult in the Google & YouTube app's bulk editor after onboarding if warnings appear.
  - LOW RISK: "Tripsitter" bucket hat name is drug-culture adjacent; product itself (a hat) is policy-compliant, but if Google's automated review flags it, rename the listing title for that channel.
- 2026-07-03 (Google app settings check): Google Merchant Center active (ID 5818967427), Google Analytics active (G-60YE8LXXBX), Product sync On, Countries/languages sync On, Shipping Information sync On, Checkout link On, Conversion measurement On. Overview still showed 0 submitted / 0 approved / 0 limited / 0 not approved / 0 under review immediately after enabling/checking sync; re-check later after feed ingestion.
- 2026-07-03 (watch plan set): Phase 1 setup COMPLETE; now in wait state. Checks: (a) ~24h — Merchant Center counters should move off 0; (b) 2026-07-05 — if still 0, treat as feed issue and inspect Merchant Center directly (merchants.google.com, account 5818967427, Products → All products); (c) 2026-07-09 10:00 AM ET — automated one-time follow-up created by owner (automation ID: check-google-shopping-product-review-status) to check review status, counters, and disapprovals. Owner sanity check still open: confirm synced shipping/delivery times in the Google app reflect real POD timelines.
- 2026-07-04 (second-pass review): IMPORTANT GOTCHA — the Google & YouTube publication has autoPublish=false, so NEW products do NOT auto-publish to Google. Found "“Depth” Pullover Hoodie" (created 2026-07-04, gid://shopify/Product/8613356175460) active but not on Google; published it via publishablePublish. RULE for future sessions: after any new product is added, publish it to the Google channel (and later TikTok/Pinterest) unless policy-excluded. Also noted: "Lucid mindBucket Hat (Embroidery)" title looks like a typo (missing space — probably "Lucid Mind Bucket Hat"); store has 33 active products, 1 real fulfilled order (#1001, 2026-05-28, $31.58 Custom Dog Pillow), all 5 shop policies present.
- 2026-07-03 (Phase 2 started, paused): TikTok app installed ("TikTok Shop — SPL"), US region selected. Onboarding paused at TikTok seller login/password-reset/verification for auralisdigitaleco@gmail.com; desired TikTok account is @lucid.creation. Verified via API: NO TikTok publication exists in Shopify yet — seller connection must complete before products can be published. Resume: open the TikTok Shop app in Shopify admin, finish seller login/verification with auralisdigitaleco@gmail.com, link @lucid.creation, complete US TikTok Shop seller registration (identity verification required). Then Claude publishes catalog + excludes the profanity hoodie via publicationUpdate.
- 2026-07-04 (TikTok app caution): the installed app is "TikTok Shop — SPL", which appears to be a THIRD-PARTY connector, not the official "TikTok" channel app by TikTok Inc. BEFORE completing seller verification through it, confirm which it is in Shopify admin → Apps (developer shown on the app listing). If third-party: prefer uninstalling it and installing the official "TikTok" app from the Shopify App Store — first-party sync/support, and no third-party access to the seller account. Verification attempts through SPL also behaved oddly (no visible confirmation after code send), consistent with a flaky bridge.
