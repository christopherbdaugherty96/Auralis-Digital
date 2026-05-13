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
Tan Sherpa Blanket
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

## Manual Product Card HTML Example

```html
<section class="shop-preview">
  <div class="shop-header">
    <p class="eyebrow">Auralis Design Shop</p>
    <h2>Shop Featured Pieces</h2>
    <p>Browse selected products from Auralis Design. Checkout is securely handled through Shopify.</p>
  </div>

  <div class="product-scroll">
    <a class="product-card" href="https://auralis-design.myshopify.com/products/tan-sherpa-blanket" target="_blank" rel="noopener">
      <img src="https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778647384" alt="Tan Sherpa Blanket">
      <h3>Tan Sherpa Blanket</h3>
      <p class="price">$48.85</p>
      <p class="description">Soft sherpa blanket for cozy home decor.</p>
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

## Maintenance Rule

Because this first version uses manual product cards, Shopify changes do not automatically update the Auralis Digital website.

When a Shopify product changes:

- Update the price on the website
- Update the product title if changed
- Update the product image if changed
- Remove website cards for archived products
- Add new cards for new active products

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
