# Shopify Launch Checklist

Status: internal pre-launch checklist for Auralis Design products shown on Auralis Digital.

Use this before sending real traffic from Auralis Digital to Shopify.

## Storefront Access

- [x] Before public launch, remove Shopify storefront password protection from `Online Store -> Preferences -> Store access`.
- [x] Shopify storefront password is removed, or public CTA expectations are adjusted.
- [ ] Primary product URL opens from an incognito browser without admin login:
  - `https://auralis-design.myshopify.com/products/zeus-sherpa-blanket`
- [ ] Each published product link from Auralis Digital opens the intended Shopify product page.
- [ ] UTM-tagged product links still resolve to the correct Shopify product page.
- [x] Product pages do not show the Shopify password page, opening-soon page, or storefront gate to public visitors.
- [ ] Product page browser title and visible content identify the intended product, not only the store password shell.
- [ ] Each product is `Active` and available on the `Online Store` sales channel.

## Checkout

- [ ] Shopify payment provider is active.
- [ ] Test checkout opens from the product page.
- [ ] Run one full incognito checkout test from a product page through add-to-cart and checkout up to the final payment confirmation step.
- [ ] Shipping rates are active for expected customer locations.
- [ ] Taxes are handled by Shopify settings, not Auralis Digital website code.
- [ ] Auralis Digital does not collect payment, card details, or checkout data.

## Product Truth

- [ ] Product title matches Shopify.
- [ ] Product price matches Shopify.
- [ ] Product handle/link matches Shopify.
- [ ] Product category matches the website catalog.
- [ ] Product images/mockups match the published Shopify product.
- [ ] Product alt text is meaningful.
- [ ] Product specs and variant text match Shopify/Printify.
- [ ] Material or product-base review copy is labeled honestly.

## Policies And Contact

- [ ] Auralis Digital Refund Policy link is visible.
- [ ] Auralis Digital Shipping Policy link is visible.
- [ ] Auralis Digital Privacy Policy link is visible.
- [ ] Auralis Digital Terms of Service link is visible.
- [ ] Auralis Digital policy pages open publicly from incognito without `404`.
- [ ] Shopify-hosted Refund Policy is published or checkout clearly links to the correct policy.
- [ ] Shopify-hosted Shipping Policy is published or checkout clearly links to the correct policy.
- [x] Shopify-hosted Privacy Policy opens publicly from incognito without the Shopify password gate.
- [ ] Shopify-hosted Terms of Service is published or checkout clearly links to the correct policy.
- [ ] Contact email is visible.

## Mobile And Customer Flow

- [ ] Homepage primary CTA leads to `/shop`.
- [ ] Live `/shop` route opens directly without HTTP `404`.
- [ ] Live `/web-design` route opens directly without HTTP `404`.
- [ ] GitHub Pages fallback restores `/?p=/shop` to the actual Shop page.
- [ ] Product gallery selectors stay on Auralis Digital.
- [ ] Clearly labeled buy/view buttons open Shopify in a new tab.
- [ ] Mobile product cards scroll naturally.
- [ ] Mobile hero and product card do not clip awkwardly at a 390px-wide viewport.
- [ ] Fixed mobile bottom CTA does not block contact, footer, or product content.
- [ ] Keyboard focus is visible on product cards and CTA links.
- [ ] Customer flow is clear: browse on Auralis Digital, checkout through Shopify, fulfilled through Printify.

## Boundaries

- [ ] No custom cart is added to Auralis Digital.
- [ ] No custom checkout is added to Auralis Digital.
- [ ] No payment forms are added to Auralis Digital.
- [ ] No tax or shipping calculation is added to Auralis Digital.
- [ ] No Shopify Admin API is used on the public website.
- [ ] No Printify API is used on the public website.
- [ ] No fake reviews, fake urgency, or fake discounts are used.
