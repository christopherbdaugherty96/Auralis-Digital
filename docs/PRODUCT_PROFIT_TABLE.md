# Product Profit Table

Snapshot: 2026-07-04, generated from Shopify Admin API (variant price + Printify-synced `unitCost`, first variant per product).

Formula: Profit = price − Printify base cost − payment fee (2.9% + $0.30). **Assumes shipping is pass-through** (customer-paid rate ≈ Printify's shipping charge, which the Printify-generated profiles are built to do). CAVEAT: the default shipping profile includes a $0 free-shipping option — any product using it absorbs ~$4–8 Printify shipping, reducing profit below these numbers. Verify which products get free shipping before promoting.

Sorted by margin %. Promote = worth paid/organic push based on margin AND absolute $ profit.

| Product | Price | Cost | Profit | Margin | Promote? |
|---|---|---|---|---|---|
| Psychedelic Ying Yang Tee | 25.99 | 9.48 | 15.46 | 59% | YES |
| Trippy Hippy Tee | 24.99 | 9.50 | 14.47 | 58% | YES |
| Sun of Life Notebook | 18.99 | 8.29 | 9.85 | 52% | yes |
| Fuck society Hoodie | 47.99 | 21.53 | 24.77 | 52% | site only (channel-excluded) |
| Psychedelic Symbol Hoodie | 49.99 | 23.53 | 24.71 | 49% | YES |
| Sid Girl Hoodie | 49.99 | 23.53 | 24.71 | 49% | YES |
| Zeus Sherpa Blanket | 60.99 | 29.31 | 29.61 | 49% | YES |
| Psy. Ying Yang Sherpa Blanket | 60.99 | 29.31 | 29.61 | 49% | YES |
| Trippy Hippy Corduroy Cap | 31.99 | 15.99 | 14.77 | 46% | yes |
| Zeus Journal Matte | 18.99 | 9.63 | 8.51 | 45% | yes |
| Sun of Life Hooded Sherpa | 111.99 | 58.97 | 49.47 | 44% | YES ($ winner) |
| Secret Owl Hooded Sherpa | 111.99 | 58.97 | 49.47 | 44% | YES ($ winner) |
| Micro or Macro Crewneck (both) | 39.99 | 21.83 | 16.70 | 42% | yes |
| Sun of Life Pendant Necklace | 23.99 | 13.24 | 9.75 | 41% | yes |
| Sun of Life Tapestry | 28.99 | 16.35 | 11.50 | 40% | yes |
| Sun of Life Woven Blanket | 48.99 | 28.26 | 19.01 | 39% | yes |
| Psy. Ying Yang Woven Blanket | 48.99 | 28.26 | 19.01 | 39% | yes |
| Pixel Oven Blanket | 48.99 | 28.26 | 19.01 | 39% | yes |
| Galactic Goddess Kimono Robe | 59.69 | 34.62 | 23.04 | 39% | yes |
| Zeus Woven Blanket | 47.99 | 28.26 | 18.04 | 38% | yes |
| Lucid mindBucket Hat | 30.99 | 18.50 | 11.29 | 36% | ok |
| Orivex Oversized Acid Wash Tee | 49.99 | 30.18 | 18.06 | 36% | ok |
| Orivex Luxury Tee | 25.99 | 15.58 | 9.36 | 36% | ok |
| Treehugger Hoodie | 49.99 | 31.56 | 16.68 | 33% | ok |
| Micro or Macro T-Shirt | 25.00 | 15.75 | 8.23 | 33% | ok |
| Tripsitter Bucket Hat | 24.99 | 16.29 | 7.68 | 31% | ok |
| "Depth" Pullover Hoodie | 89.57 | 61.80 | 24.87 | 28% | reprice or ok |
| Goddess Tapestry | 21.99 | 16.35 | 4.70 | 21% | NO — reprice first |
| Math Equations Tapestry | 21.99 | 16.35 | 4.70 | 21% | NO — reprice first |
| Inner Presence Tapestry | 21.99 | 16.35 | 4.70 | 21% | NO — reprice first |
| Custom Dog Pillow | 21.99 | 16.34 | 4.71 | 21% | NO — reprice first |
| Geometric Dad Cap | 24.99 | 19.47 | 4.50 | 18% | NO — worst margin |

## Action notes

- **Traffic winners:** Ying Yang / Trippy Hippy tees (best %), hooded sherpa blankets (best $), regular sherpa blankets and hoodies (both strong). Point Google/TikTok content at these.
- **Reprice before promoting:** the three $21.99 tapestries and the dog pillow clear under $5. Market tapestries commonly sell $28–40; a $27.99–29.99 reprice moves margin to ~35–40%. Note the tapestries carry "Bestsellers" tags but are the worst earners.
- **Order #1001 context:** the Custom Dog Pillow sale was a custom/family order. Treat it as checkout/fulfillment proof (and a review opportunity), NOT as a representative margin benchmark for the public catalog. Track custom/family orders separately from storefront sales.
- **Geometric Dad Cap** ($4.50 on a $24.99 cap): reprice toward $29.99 or drop from promotion entirely.
- **"Depth" hoodie** at 28% on an $89.57 price is thin for a premium item — check whether the commissioned pricing was intentional.
- Refresh this table after any reprice or new product: costs come from Shopify (`unitCost`), so the query is repeatable.
