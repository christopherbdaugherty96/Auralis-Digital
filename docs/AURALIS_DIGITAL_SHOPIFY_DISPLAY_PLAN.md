# Auralis Digital Shopify Display Plan

## Goal

Auralis Digital should display Auralis Design products visually on the website while Shopify handles product pages, checkout, payments, order management, and Printify fulfillment.

## Site Structure

Primary navigation:

Home | Shop | Website Services | About | Contact

## Page Roles

### Home

The homepage should introduce the Auralis brand and include a featured product showcase section.

### Shop

The Shop page should display product cards in a scrollable layout. Each product card links out to the matching Shopify product page.

### Website Services

Website-building services should live on a separate page so they do not confuse the product shop experience.

### Contact

The Contact page should support service inquiries, customer questions, and general messages.

## Product Showcase Behavior

The Auralis Digital website should not process product checkout directly.

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

Later, this can be upgraded to:

- Shopify Buy Button embed
- Shopify Storefront API product feed
- Full Shopify-powered storefront

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

## Final Decision

Auralis Digital remains the brand/display website.

Shopify remains the selling and checkout system.

Printify remains the fulfillment system.
