# Auralis Digital Current Status

Last updated: 2026-08-20

This is the canonical operational truth layer for Auralis Digital. Strategic direction is governed by [`AURALIS_DIRECTION_LOCK_2026-08-20.md`](../AURALIS_DIRECTION_LOCK_2026-08-20.md). If an older document conflicts with that lock, treat the older positioning as legacy until it is updated or archived.

## Direction Lock — 2026-08-20

Auralis Digital is now the umbrella creative ecosystem for original visual art, independent music discovery, artist collaboration, creative products, and commerce.

Website creation, Shopify setup, website refresh packages, generic client website builds, third-party website audit/rebuild offers, and managed website-care plans are **retired as core public service offers** unless explicitly reopened by a later strategic decision.

Shopify remains allowed as commerce infrastructure for checkout, product management, merch, creative-product sales, and artist collaboration products.

Current public-direction model:

1. **Lucid Creations**
   - psychedelic / sacred-geometry / visionary visual art
   - visualizers and artist artwork
   - prints, tapestries, apparel, and related creative products
   - visual identity for the music experience

2. **Live Music Platform**
   - independent artist discovery
   - explicit non-exclusive permission model
   - coherent DJ-style programming
   - original music-reactive visuals
   - artist attribution and direct links
   - future listener interaction

3. **Shop / Commerce**
   - Lucid Creations products
   - RJ Print products where still supported
   - artist collaboration products
   - merch and other approved creative products
   - Shopify remains the commerce backend where useful

4. **Custom Creative Work**
   - commissioned artwork
   - artist visualizers
   - visual assets
   - related creative commissions

Recommended public navigation:

```text
Home
Music
Lucid Creations
Shop
Custom Work
About
```

`Live Music Platform` remains a distinct Auralis product/subsite rather than a Shopify collection or separate company at this stage.

## Verified Commerce Truth — 2026-07-04

These facts remain valid unless later evidence supersedes them:

- **First real product sale is COMPLETE.** Order #1001, 2026-05-28, $31.58, Custom Dog Polyester Square Pillow, paid and fulfilled, real customer.
- **Shopify-hosted policies are published.** Contact information, privacy, refund, shipping, and terms of service exist in Shopify.
- **Store catalog:** 33 active products, 0 drafts, 0 archived at the time of verification.
- **Google & YouTube channel** was connected with product sync on and awaiting first review.
- **TikTok Shop** app was installed but seller verification was incomplete.
- `src/data/shopCatalog.ts` had known drift risk against Shopify; use `npm run check:catalog` and `docs/tech/CATALOG_DRIFT_CHECK.md` before relying on catalog parity.
- New products did not automatically publish to the Google channel and required manual channel publication.

These commerce facts do not restore the retired website-service business model.

## Current Brand / Product Structure

```text
Auralis Digital
├── Lucid Creations
├── Live Music Platform
├── Shop / Commerce
├── Custom Creative Work
└── RJ Print (commerce/product branch where still active)
```

Lucid Creations should remain the visual-art / creative-studio identity. The final consumer-facing name of the music platform remains unresolved.

The preferred music relationship is:

```text
Music platform / discovery brand
          ↓
Visuals by Lucid Creations
```

## Current Site / Repo Reality

The live website and repository still contain legacy website-service routes, copy, pricing, outreach material, and operating documents. Those artifacts are implementation debt and must not be interpreted as current strategic intent.

Known legacy surfaces include, but are not limited to:

- `/web-design`
- `/websites`
- website-build pricing
- website refresh / audit-rebuild offers
- managed hosting and care-plan positioning
- website-service lead scripts
- website-client onboarding templates
- website-service roadmap tasks

When implementation resumes, these should be removed, archived, or clearly marked legacy according to the direction lock.

Do not delete reusable technical documentation merely because it was created during the website-service phase. Deployment, forms, metadata, React/Vite, GitHub Pages, Shopify, and other technical docs may remain useful if they describe infrastructure rather than a retired service offer.

## Current Commerce Surface

The product/shop surface remains valid.

Current model:

```text
Shop
|-- Lucid Creations
`-- RJ Print
```

Use one Shopify store for now unless later evidence justifies separation.

Shopify remains the checkout, payment, order, and product-management source of truth where it is still in use. The Auralis public site may present product information and route customers into Shopify checkout.

Commerce readiness should still be verified before treating the shop as fully mature, including:

- checkout and product links
- policy links
- payment / tax / shipping settings
- fulfillment QA
- margin review
- support workflow
- artwork and product-rights provenance

## Custom Creative Work

Custom creative work remains aligned with the new direction when it supports the creative ecosystem.

Examples:

- commissioned artwork
- sacred geometry / psychedelic / symbolic designs
- artist artwork
- music visualizers
- visual assets
- custom 3D print requests where RJ Print remains active

Generic website creation is not part of this lane.

## Live Music Platform

The music platform is now part of the Auralis ecosystem strategy.

Current locked concept:

> Independent artist discovery + explicit non-exclusive permission + coherent DJ-style programming + original music-reactive visuals + continuous live distribution + artist attribution/direct links + future listener interaction.

The livestream is the first distribution surface, not the whole product.

The detailed product strategy remains in the separate `live-music-platform` repository. Auralis should integrate it as a product/subsite without duplicating that repository's implementation doctrine here.

## Legal / Business Formation Gaps

The following items are still not confirmed in this repo and should not be assumed complete:

- Michigan LLC filing
- EIN
- business bank account
- domain email
- public business address / service-area policy

Website-client contracts and website-service payment workflows are no longer current priorities because that service line is retired.

## Trust / Operations Gaps

- Production contact form was confirmed live through Formspree.
- Temporary contact email remains `auralisdigitaleco@gmail.com` until a domain email is active.
- Google Business Profile is not confirmed.
- Real testimonials/reviews remain limited.
- Product and custom-work proof should only be published with real evidence/permission.

## Priority Order

Current strategic execution order:

1. Preserve business/contact trust basics.
2. Update the live Auralis site to match the locked creative-ecosystem direction.
3. Remove or retire website-service positioning, pricing, navigation, and calls to action.
4. Elevate Lucid Creations as the visual-art identity.
5. Add the Music surface / route for the Live Music Platform.
6. Keep Shopify functioning as commerce infrastructure where useful.
7. Keep Shop and aligned custom creative-work paths operational.
8. Audit legacy website-service docs, leads, pricing, and onboarding files before reusing them.
9. Resume product / creative execution only after the public surface matches current strategy.

## Do Not Do Right Now

- Do not reintroduce Shopify setup or website creation as core services.
- Do not keep public website-service pricing active by inertia.
- Do not run website-design outreach from legacy lead files.
- Do not treat legacy routes/docs as current strategic truth.
- Do not fake testimonials, reviews, client logos, sales, urgency, discounts, or case studies.
- Do not relabel sample work as delivered client work.
- Do not treat the Shopify/product surface as fully mature until operational readiness is verified.
- Do not create a second Shopify store for RJ Print without demand-based justification.
- Do not force a final music-platform brand name before execution provides evidence.

## Current Repo / Deployment Truth

- `main` is the source of truth for code and documentation.
- `gh-pages` is generated deployment output and should not be edited manually.
- GitHub Actions builds from `main` and publishes deployment output to `gh-pages`.
- The repository contains React/Vite routes plus static deployment inputs.
- Review `docs/tech/DEPLOYMENT_TRUTH.md` before changing hosting or deployment behavior.

## Next Concrete Action

Use `active/NEXT_STEPS_TODO.md` only after confirming it is aligned with the 2026-08-20 direction lock.

The immediate correct sequence is:

```text
strategy lock
    ↓
truth-sync canonical docs
    ↓
retire legacy website-service public positioning
    ↓
update navigation/copy
    ↓
add Music surface
    ↓
resume creative + commerce execution
```
