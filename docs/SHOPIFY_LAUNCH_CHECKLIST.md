# Shopify Launch Checklist

Status: internal pre-launch checklist for Auralis Design products shown on Auralis Digital.

Use this before sending real traffic from Auralis Digital to Shopify.

## Storefront Access

- [x] Before public launch, remove Shopify storefront password protection from `Online Store -> Preferences -> Store access`.
- [x] Shopify storefront password is removed, or public CTA expectations are adjusted.
- [x] Primary product URL opens from a public browser check without admin login:
  - `https://auralis-design.myshopify.com/products/zeus-sherpa-blanket`
- [x] Each published product link from Auralis Digital opens a public Shopify product page.
- [x] UTM-tagged product links still resolve to the correct Shopify product page.
- [x] Product pages do not show the Shopify password page, opening-soon page, or storefront gate to public visitors.
- [x] Product pages show public buy/add-to-cart signals instead of only the store password shell.
- [ ] Each product is `Active` and available on the `Online Store` sales channel.

## Checkout

- [ ] Shopify payment provider is active.
- [ ] Test checkout opens from the product page.
- [ ] Run one full incognito checkout test from a product page through add-to-cart and checkout up to the final payment confirmation step.
- [ ] Shipping rates are active for expected customer locations.
- [ ] Taxes are handled by Shopify settings, not Auralis Digital website code.
- [ ] Auralis Digital does not collect payment, card details, or checkout data.

## Product Truth

- [x] Product title matches the currently published catalog source.
- [x] Product price matches the currently published catalog source.
- [x] Product handle/link matches the currently published catalog source.
- [x] Product category matches the website catalog.
- [x] Product photos are present for every currently published website product.
- [x] Product alt text is meaningful.
- [ ] Product specs and variant text match Shopify production data after a final admin-side review.
- [ ] Material or product-base review copy is labeled honestly.

## Policies And Contact

- [x] Auralis Digital Refund Policy route opens publicly without HTTP `404`.
- [x] Auralis Digital Shipping Policy route opens publicly without HTTP `404`.
- [x] Auralis Digital Privacy Policy route opens publicly without HTTP `404`.
- [x] Auralis Digital Terms of Service route opens publicly without HTTP `404`.
- [x] Auralis Digital policy pages open publicly without HTTP `404`.
- [ ] Shopify-hosted Refund Policy is published or checkout clearly links to the correct policy.
- [ ] Shopify-hosted Shipping Policy is published or checkout clearly links to the correct policy.
- [x] Shopify-hosted Privacy Policy opens publicly from incognito without the Shopify password gate.
- [ ] Shopify-hosted Terms of Service is published or checkout clearly links to the correct policy.
- [x] Contact email path is visible through live mailto fallback.

## Mobile And Customer Flow

- [ ] Homepage primary product CTA leads to `/products`.
- [x] Live `/products` route opens directly without HTTP `404`.
- [x] Live `/shop` route opens directly without HTTP `404`.
- [x] Live `/custom-design` route opens directly without HTTP `404`.
- [x] Live `/web-design` route opens directly without HTTP `404`.
- [ ] GitHub Pages fallback restores `/?p=/shop` to the actual Shop page in a live browser check.
  - Source implementation exists in `src/App.tsx`; browser-level fallback restore still needs a direct live browser pass.
- [x] Product gallery selectors stay on Auralis Digital.
- [x] Clearly labeled buy/view buttons open Shopify in a new tab.
- [x] Mobile product cards render with all products visible in a 390px browser check.
- [x] Mobile product page does not horizontally overflow at a 390px-wide viewport.
- [x] Fixed mobile bottom CTA does not block product content on `/products`.
- [ ] Keyboard focus is visible on product cards and CTA links.
- [x] Customer flow is clear: browse on Auralis Digital, checkout through Shopify, production begins after purchase for made-to-order items.

## Boundaries

- [x] No custom cart is added to Auralis Digital.
- [x] No custom checkout is added to Auralis Digital.
- [x] No payment forms are added to Auralis Digital.
- [x] No tax or shipping calculation is added to Auralis Digital.
- [x] No Shopify Admin API is used on the public website.
- [x] No production-partner API is used on the public website.
- [x] No fake reviews, fake urgency, or fake discounts are used.
