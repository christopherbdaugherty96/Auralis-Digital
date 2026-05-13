# Auralis Digital Shopify Display Plan

## Goal

Auralis Digital should act as the brand/display website for Auralis while showing Auralis Design products in a clean visual shop section.

Shopify remains responsible for product pages, checkout, payments, taxes, order management, and the path that sends Printify orders into fulfillment.

The website should let visitors scroll through products on Auralis Digital, then send them to Shopify when they are ready to view, price-check, or buy.

## Current Store Context

Connected Shopify store:

```text
Auralis Design
https://auralis-design.myshopify.com
```

Current active product example:

```text
Zeus Blanket
https://auralis-design.myshopify.com/products/tan-sherpa-blanket
```

Current product source:

```text
Vendor: Printify
Product type: Home Decor
```

## Printify Connection Rule

The Shopify store can be connected to Printify through the Shopify app system and the Printify dashboard.

Connection should be verified in both places:

1. Shopify Admin -> Apps
2. Confirm `Printify: Print on Demand` appears as an installed app
3. Printify -> My Stores
4. Confirm the Shopify store appears as a connected store

A practical working check is:

1. Publish a product from Printify
2. Confirm the product appears in Shopify Admin -> Products
3. Confirm the product has Printify as the vendor or fulfillment source

Order approval should start manually until test orders have been reviewed. Automatic approval can be enabled later after the first successful order flow is confirmed.

## Recommended Site Structure

Primary navigation:

```text
Home | Shop | Website Services | About | Contact
```

## Page Roles

### Home

The homepage should introduce the Auralis brand and include a featured product showcase section.

### Shop

The Shop page should display product cards in a scrollable layout. Each product card links out to the matching Shopify product page.

### Website Services

Website-building services should live on a separate page so they do not confuse the product shop experience.

This page is for the separate option where customers can ask about website creation, website setup, or Auralis Digital service work.

### About

The About page should explain the Auralis brand and the difference between the display website, Shopify shop, and services.

### Contact

The Contact page should support service inquiries, customer questions, and general messages.

## Product Showcase Behavior

The Auralis Digital website should not process product checkout directly in this first version.

Instead, Auralis Digital should work as a product showcase:

1. Customer lands on Auralis Digital
2. Customer scrolls through displayed products
3. Customer sees product image, title, price, and short description
4. Customer clicks the image, title, price, or Buy/View button
5. Customer is taken to the Shopify product page
6. Shopify handles checkout
7. Shopify/Printify handle order flow and fulfillment

Each product card should include:

- Product image
- Product title
- Product price
- Short description
- View Product / Buy on Shopify button

Clickable elements should link to the Shopify product page:

- Image
- Product title
- Price
- Buy button

## Checkout Boundary

Auralis Digital should not add custom payment handling, cart logic, tax calculation, or order fulfillment logic for this first version.

Those responsibilities stay with Shopify and Printify.

This avoids unnecessary payment/security complexity and keeps the Auralis Digital website focused on display, branding, and routing customers to the correct Shopify product page.

## Current Shopify Product Link Format

Shopify product URLs should follow this structure:

```text
https://auralis-design.myshopify.com/products/{product-handle}
```

Current active product example:

```text
https://auralis-design.myshopify.com/products/tan-sherpa-blanket
```

## Implementation Approach

Use manual product cards first.

Manual product cards are preferred at this stage because the product catalog is small and the visual layout can be controlled directly from the website.

This keeps Auralis Digital lightweight while Shopify handles the selling system.

Later, this can be upgraded to:

- Shopify Buy Button embed
- Shopify Storefront API product feed
- Full Shopify-powered storefront

## Main Options Considered

### Option 1: Link to Shopify Store

Add a simple button such as `Shop Auralis Design` that links to:

```text
https://auralis-design.myshopify.com
```

This is the easiest setup.

### Option 2: Scrollable Product Showcase

Display products directly on Auralis Digital using product cards.

Each card links to the product page on Shopify.

This is the recommended current setup.

### Option 3: Shopify Buy Button Embed

Use Shopify's Buy Button app to generate embeddable product or collection code.

This is useful if the website builder supports custom HTML embeds and Shopify-managed buttons are preferred.

### Option 4: Shopify as Main Website

Use Shopify as the main website and make `Website Services` a normal Shopify page.

This is clean long-term if Shopify becomes the primary public site, but the current documented direction keeps Auralis Digital as the brand/display website and Shopify as the selling backend.

## Implementation Build Task

Build the first version as a static/manual display section, not as a Shopify checkout integration.

The implementation should add or update:

- Homepage featured shop/display section
- Optional dedicated Shop page
- Main navigation link for Shop
- Main navigation link for Website Services
- Product card styling
- Mobile horizontal scroll behavior
- Desktop horizontal scroll or card-grid behavior

The first build should use hardcoded product card data from the current Shopify product until a larger catalog requires automation.

Minimum product data fields:

```text
title
price
shortDescription
detailDescription
imageUrl
shopifyProductUrl
altText
highlights
specs
mockups
```

Current active Shopify products:

```text
- Zeus Blanket | $60.99 | Printify | Home Decor | 60" x 50" | /products/tan-sherpa-blanket
- Zeus Woven Blanket | $47.10 | Printify | Home Decor | Artwork or Photo / 52'' x 37'' | /products/zeus-woven-blanket
- Zeus Journal Matte | $18.99 | Printify | Paper products | Journal | /products/zeus-journal-matte
- Zeus Mug 11oz | $17.99 | Printify | Mug | 11oz | /products/zeus-mug-11oz
- Zeus Matte Vertical Posters | $22.99 | Printify | Poster | 8" x 10" / Matte | /products/zeus-matte-vertical-posters
```

Current featured product:

```text
title: Zeus Blanket
price: $60.99
shortDescription: Super-soft sherpa blanket with a tan sherpa backing.
imageUrl: https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778650633
shopifyProductUrl: https://auralis-design.myshopify.com/products/tan-sherpa-blanket
altText: Zeus Blanket
```

## Sales And Marketing Requirements

The shop page should sell the product honestly without pretending Auralis Digital is the checkout system.

Include:

- Product positioning for the Auralis Design Zeus collection
- A "Why you'll like it" section
- A "Good for" section
- A trust/reassurance strip
- A clear customer flow: Browse here. Buy through Shopify. Fulfilled through Printify.
- SEO-friendly visible copy using terms such as Auralis Design blanket, sherpa blanket, home decor, cozy blanket, and gift idea
- Category-ready shop sections for Blankets, Journals, Coffee Mugs, Posters, Hats, Shirts, and Canvas
- Honest review labeling that distinguishes product-base/material feedback from reviews of exact Auralis Design artwork

Do not add fake reviews, fake urgency, fake discounts, or limited-stock language unless Shopify truth supports it.

Review language should stay precise:

```text
Reviews below refer to the product base/material unless a review names this exact Auralis Design artwork.
```

The main product gallery should keep customers browsing on Auralis Digital. Use explicit buttons or product cards for outbound Shopify clicks.

## Implementation Non-Goals

Do not build these in the first version:

- Custom checkout
- Custom cart
- Payment forms
- Tax calculation
- Shipping calculation
- Printify API integration
- Shopify Admin API integration on the public website
- Automatic product syncing
- Customer account handling
- Order status handling

These belong to Shopify, Printify, or a later upgrade.

## Navigation Requirement

The website navigation should make the distinction clear:

```text
Shop = product browsing and Shopify product links
Website Services = separate service inquiry page
```

Brand split:

```text
Auralis is the creative brand.
Auralis Design sells products.
Auralis Digital builds websites and hosts the brand/display shop.
```

The Shop link should not send customers to website service content.

The Website Services link should not interrupt the product shopping flow.

## Accessibility And UX Requirements

Product cards should be usable on mobile and desktop.

Each product image should have meaningful alt text.

Each card should have a visible focus state for keyboard users.

Clickable cards should not rely only on color to show that they are clickable.

Buttons should use direct language such as:

```text
View on Shopify
Buy on Shopify
View Product
```

External Shopify links should use:

```html
target="_blank" rel="noopener"
```

## Manual Product Card HTML Example

```html
<section class="shop-preview" aria-labelledby="shop-preview-title">
  <div class="shop-header">
    <p class="eyebrow">Auralis Design Shop</p>
    <h2 id="shop-preview-title">Shop Featured Pieces</h2>
    <p>Browse selected products from Auralis Design. Checkout is securely handled through Shopify.</p>
  </div>

  <div class="product-scroll" aria-label="Featured Auralis Design products">
    <a class="product-card" href="https://auralis-design.myshopify.com/products/tan-sherpa-blanket" target="_blank" rel="noopener">
      <img src="https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778650633" alt="Zeus Blanket">
      <h3>Zeus Blanket</h3>
      <p class="price">$60.99</p>
      <p class="description">Super-soft sherpa blanket with a tan sherpa backing.</p>
      <span class="button">View on Shopify</span>
    </a>
  </div>
</section>
```

## Manual Product Card CSS Example

```css
.shop-preview {
  padding: 64px 20px;
}

.shop-header {
  max-width: 720px;
  margin-bottom: 24px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  opacity: 0.7;
}

.product-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 18px;
  scroll-snap-type: x mandatory;
}

.product-card {
  min-width: 260px;
  max-width: 260px;
  scroll-snap-align: start;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 18px;
  padding: 16px;
  background: white;
}

.product-card:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 4px;
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 14px;
}

.product-card h3 {
  margin: 14px 0 6px;
}

.price {
  font-weight: 700;
  margin: 0 0 8px;
}

.description {
  font-size: 0.95rem;
  opacity: 0.75;
}

.button {
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
}
```

## Display Shop Acceptance Checklist

The first version is acceptable when:

- A visitor can open Auralis Digital and find the shop/display section
- A visitor can horizontally scroll through product cards on mobile and desktop
- Each card displays image, title, price, short description, and a clear Buy/View button
- Homepage feature cards/media may link to `/shop` so visitors browse on Auralis Digital first
- Main gallery/mockup selectors keep users on Auralis Digital and do not immediately send visitors to Shopify
- Clearly labeled Buy/View on Shopify buttons open the matching Shopify product page
- Shop page product cards may open Shopify when they are clearly labeled as outbound Shopify actions
- The Website Services page is separate from the product shopping flow
- The website does not ask customers to pay outside Shopify
- The product page on Shopify remains the checkout source of truth
- Printify remains the fulfillment source for Printify products
- Keyboard focus is visible on product cards
- Product images include meaningful alt text

## Maintenance Rule

Because this first version uses manual product cards, Shopify changes do not automatically update the Auralis Digital website.

When a Shopify product changes:

- Update the price on the website
- Update the product title if changed
- Update the product image if changed
- Remove website cards for archived products
- Add new cards for new active products

## Product Update Checklist

For each new Shopify product, confirm and record:

- Title
- Price
- Handle
- Category
- Mockups/images
- Alt text
- Specs
- Material/product-base review scope
- CTA link test
- Shopify password/storefront visibility check

## Shopify Launch Note

Use `docs/SHOPIFY_LAUNCH_CHECKLIST.md` as the internal pre-launch checklist.

Before sending real traffic to a Shopify product link:

- Remove the Shopify storefront password or adjust CTA expectations
- Test `/products/tan-sherpa-blanket` from an incognito browser
- Confirm the product page opens without admin login or customer confusion
- Confirm checkout works
- Confirm shipping rates work
- Confirm payment provider is active
- Confirm refund, shipping, privacy, terms, and contact policy links are visible

## Metadata Note

React client-side metadata helps after the app loads.

Static `index.html` metadata may still be what crawlers and social preview bots read first.

Long-term SEO improvements may require prerendering, static route HTML, or a framework with route-level metadata.

## Upgrade Rule

Move away from manual product cards only when one of these becomes true:

- The product catalog grows enough that manual updates become annoying
- Prices change often
- Collections need to update automatically
- A live cart or embedded checkout experience is needed on Auralis Digital

At that point, use Shopify Buy Button first. Use the Shopify Storefront API only if a custom dynamic storefront is needed.

## Final Decision

Auralis Digital remains the brand/display website.

Shopify remains the selling and checkout system.

Printify remains the fulfillment system.

Website-making services remain available, but only as a separate page/option so the shop experience stays clear.
