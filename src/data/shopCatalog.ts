export type ShopProduct = {
  title: string;
  price: string;
  vendor: string;
  shopifyVendor: string;
  productType: string;
  variantSummary: string;
  category: string;
  slug: string;
  shortDescription: string;
  detailDescription: string;
  imageUrl: string;
  shopifyProductUrl: string;
  shopifyTrackingUrl: string;
  altText: string;
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
  photos: Array<{ label: string; imageUrl: string; altText: string }>;
  reviewScope: string;
};

const withShopifyTracking = (url: string) =>
  `${url}?utm_source=auralisdigital&utm_medium=site&utm_campaign=shop_catalog`;

export const shopProducts: ShopProduct[] = [
  {
    title: "Sacred Owl Indoor Wall Tapestry",
    price: "$27.25",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "26\" x 36\"",
    category: "Wall Decor",
    slug: "copy-of-indoor-wall-tapestry",
    shortDescription: "A vivid owl wall tapestry with cosmic feather detail and sacred-geometry eye artwork.",
    detailDescription: "A lightweight indoor wall tapestry designed to make a room feel more immersive without needing a framed print. The polyester fabric keeps the artwork crisp, while hemmed edges help the piece hold up as wall decor, backdrop styling, or a foldable festival-room accent.\n\n.: 100% polyester\n.: Lightweight and easy to hang, move, or fold for storage\n.: Hemmed edges for added durability\n.: 26\" x 36\" size",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry"),
    altText: "Sacred owl indoor wall tapestry with cosmic feather and sacred geometry artwork",
    highlights: [
          "26\" x 36\"",
          "Wall Decor",
          "Home Decor",
          "1 product photo"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Wall Decor"
          },
          {
                "label": "Options",
                "value": "26\" x 36\""
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
                "altText": "Sacred owl indoor wall tapestry product photo 1"
          }
    ],
    reviewScope: "Reviews should refer to the wall decor product base unless they mention this exact Sacred Owl Indoor Wall Tapestry design.",
  },
  {
    title: "TreeHugger Softstyle T-Shirt",
    price: "$24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "T-Shirt",
    variantSummary: "S-3XL / Dark Chocolate, Light Blue, Navy, Red, Royal, Sport Grey, White, Black, Military Green, Dark Heather, Natural",
    category: "Apparel",
    slug: "treehugger-softstyle-t-shirt",
    shortDescription: "A retro Tree Hugger graphic tee with warm festival color, vintage lettering, and nature-loving energy.",
    detailDescription: "A unisex Gildan Softstyle tee with a lightweight feel and a retro Tree Hugger graphic built for everyday wear, markets, festivals, and casual nature-loving fits. Solid colors are ring-spun cotton, while heather and sport grey variants use cotton-poly blends for durability.\n\nDisclaimer:\n- Due to fabric properties, the White color variant may appear off-white rather than bright white.\n\n.: Lightweight fabric (4.5 oz/yd2)\n.: Classic fit with crew neckline\n.: Tear-away label\n.: Ethically grown and harvested US cotton\n.: OEKO-TEX STANDARD 100 certified blank",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2212812279947528840_2048.jpg?v=1780000909",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/treehugger-softstyle-t-shirt",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/treehugger-softstyle-t-shirt"),
    altText: "TreeHugger Softstyle T-Shirt with retro nature artwork",
    highlights: [
          "S-3XL / 11 colors",
          "Apparel",
          "T-Shirt",
          "3 curated product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "T-Shirt"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Apparel"
          },
          {
                "label": "Options",
                "value": "S-3XL / Dark Chocolate, Light Blue, Navy, Red, Royal, Sport Grey, White, Black, Military Green, Dark Heather, Natural"
          },
          {
                "label": "Variants",
                "value": "66"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2212812279947528840_2048.jpg?v=1780000909",
                "altText": "TreeHugger Softstyle T-Shirt product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14578738876872491628_2048.jpg?v=1780000907",
                "altText": "TreeHugger Softstyle T-Shirt product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4599687907991187213_2048.jpg?v=1780000911",
                "altText": "TreeHugger Softstyle T-Shirt product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the t-shirt product base unless they mention this exact TreeHugger Softstyle T-Shirt design.",
  },
  {
    title: "Geometric Dad Cap",
    price: "$25.00",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "One size / Black, Dark Grey, Green Camo, Khaki, Light Blue, Navy, Pink, Spruce, Stone, White, Cranberry",
    category: "Hats",
    slug: "geometric-dad-cap",
    shortDescription: "A low-profile dad cap with embroidered sacred-geometry patch artwork across everyday colorways.",
    detailDescription: "A classic unstructured dad cap with a low-profile fit, antique brass buckle closure, and embroidered geometric patch artwork. The cotton build keeps it breathable for daily wear, while the camo variant uses a cotton-poly blend.\n\n.: 100% cotton; Green Camo is 65% polyester and 35% cotton\n.: Unstructured six-panel, low-profile fit\n.: Permacurv visor\n.: Self-fabric hideaway strap with antique brass buckle and grommet\n.: Sewn-in label",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14952659522585989047_2048.jpg?v=1779998808",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/geometric-dad-cap",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/geometric-dad-cap"),
    altText: "Geometric Dad Cap with embroidered sacred geometry patch",
    highlights: [
          "One size / 11 colors",
          "Hats",
          "Hats",
          "3 curated product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hats"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Hats"
          },
          {
                "label": "Options",
                "value": "One size / Black, Dark Grey, Green Camo, Khaki, Light Blue, Navy, Pink, Spruce, Stone, White, Cranberry"
          },
          {
                "label": "Variants",
                "value": "11"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14952659522585989047_2048.jpg?v=1779998808",
                "altText": "Geometric Dad Cap product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14523316421327505325_2048.jpg?v=1779998784",
                "altText": "Geometric Dad Cap product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2560937500450959037_2048.jpg?v=1779998792",
                "altText": "Geometric Dad Cap product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the hats product base unless they mention this exact Geometric Dad Cap design.",
  },
  {
    title: "Sid Girl Midweight Softstyle Fleece Hoodie",
    price: "$49.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hoodie",
    variantSummary: "S-5XL / Red, White, Sport Grey, Black",
    category: "Apparel",
    slug: "sid-girl-midweight-softstyle-fleece-hoodie",
    shortDescription: "A midweight fleece hoodie featuring bold Sid Girl artwork across everyday red, white, sport grey, and black colorways.",
    detailDescription: "The Gildan SF500 is all about durability with a soft touch. It’s made with an 80/20 cotton-poly blend and lined hood, plus a 100% cotton surface for sharp prints. The dropped shoulder adds a modern fit. This hoodie is WRAP-certified and OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie) approved – because comfort shouldn't require compromise.\n\nDisclaimer:\n- Due to the fabric properties, the White color variant may appear off-white rather than bright white.\n\n.: Material: 80% ring-spun cotton, 20% polyester with 100% cotton face (fiber content varies for different colors)\n.: Medium-heavy fabric (8.4 oz /yd² (284.8 g/m²))\n.: Classic fit\n.: Tear-away label\n.: Sustainable manufacturing: This product meets the OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie)\n.: Socially conscious manufacturing: This product was made by a mill partnered with Fair Labor Association and was made in a facility that is WRAP certified",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4348252030622112159_2048.jpg?v=1779976167",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/sid-girl-midweight-softstyle-fleece-hoodie",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/sid-girl-midweight-softstyle-fleece-hoodie"),
    altText: "Sid Girl Midweight Softstyle Fleece Hoodie",
    highlights: [
          "S-5XL / Red, White, Sport Grey, Black",
          "Apparel",
          "Hoodie",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hoodie"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Apparel"
          },
          {
                "label": "Options",
                "value": "S-5XL / Red, White, Sport Grey, Black"
          },
          {
                "label": "Variants",
                "value": "32"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4348252030622112159_2048.jpg?v=1779976167",
                "altText": "Sid Girl Midweight Softstyle Fleece Hoodie product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8854293543464376144_2048.jpg?v=1779976151",
                "altText": "Sid Girl Midweight Softstyle Fleece Hoodie product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2162316845006537195_2048.jpg?v=1779976177",
                "altText": "Sid Girl Midweight Softstyle Fleece Hoodie product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the hoodie product base unless they mention this exact Sid Girl Midweight Softstyle Fleece Hoodie design.",
  },
  {
    title: "Tripsitter Bucket Hat (Embroidery)",
    price: "$24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "One size / Black, Navy, White",
    category: "Hats",
    slug: "tripsitter-bucket-hat-embroidery",
    shortDescription: "An embroidered Tripsitter bucket hat with a psychedelic patch look across black, navy, and white variants.",
    detailDescription: "The embroidered bucket hat is the perfect blend of practicality, comfort, and style. Made from 100% cotton twill, this hat offers durability and breathability, keeping you cool during any activity. With a 3 ¾″ (9.52 cm) crown crown and a 2 ¼″ (5.71 cm) brim, it provides just the right amount of coverage without compromising on visibility. \n\nThe sewn eyelets ensure extra breathability, making it an ideal accessory for both casual outings and intense game matches. One size fits most, making it a versatile piece for any wardrobe. Blank product sourced from China and Vietnam.\n\n.: 100% cotton twill\n.: 3 ¾″ (9.52 cm) crown\n.: 2 ¼″ (5.71 cm) brim\n.: Sewn eyelets for breathability\n.: One size fits most\n.: Blank product sourced from China and Vietnam",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8587929125839520482_2048.jpg?v=1779947359",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/tripsitter-bucket-hat-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/tripsitter-bucket-hat-embroidery"),
    altText: "Tripsitter Bucket Hat (Embroidery)",
    highlights: [
          "One size / Black, Navy, White",
          "Hats",
          "Hats",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hats"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Hats"
          },
          {
                "label": "Options",
                "value": "One size / Black, Navy, White"
          },
          {
                "label": "Variants",
                "value": "3"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8587929125839520482_2048.jpg?v=1779947359",
                "altText": "Tripsitter Bucket Hat (Embroidery) product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9923792479574363106_2048.jpg?v=1779947367",
                "altText": "Tripsitter Bucket Hat (Embroidery) product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5229951655020121090_2048.jpg?v=1779947350",
                "altText": "Tripsitter Bucket Hat (Embroidery) product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the hats product base unless they mention this exact Tripsitter Bucket Hat (Embroidery) design.",
  },
  {
    title: "Custom dog Polyester Square Pillow",
    price: "$21.79",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "14\" × 14\"",
    category: "Home Decor",
    slug: "custom-dog-polyester-square-pillow",
    shortDescription: "A square polyester pillow that turns a custom dog image into a soft home accent or personal gift piece.",
    detailDescription: "Room accents shouldn't be underrated. These beautiful indoor pillows in various sizes serve as statement pieces, creating a personalized environment.\n\n.: 100% Polyester cover\n.: 100% Polyester insert\n.: Double sided print\n.: Concealed zipper\n.: Please note: Inserts will be 2-3 inches longer than the covers, providing the pillow with extra volume when assembled",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/custom-dog-polyester-square-pillow",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/custom-dog-polyester-square-pillow"),
    altText: "Custom dog Polyester Square Pillow",
    highlights: [
          "14\" × 14\"",
          "Home Decor",
          "Home Decor",
          "2 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Home Decor"
          },
          {
                "label": "Options",
                "value": "14\" × 14\""
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
                "altText": "Custom dog Polyester Square Pillow product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13339043539619001610_2048.jpg?v=1779946785",
                "altText": "Custom dog Polyester Square Pillow product photo 2"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Custom dog Polyester Square Pillow design.",
  },
  {
    title: "Trippy hippy Vintage Corduroy Cap (Embroidery)",
    price: "$31.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "Dark Brown, Burgundy / One size",
    category: "Hats",
    slug: "trippy-hippy-vintage-corduroy-cap-embroidery",
    shortDescription: "A vintage corduroy cap with Trippy Hippy embroidery, warm color options, and a relaxed old-school shape.",
    detailDescription: "The Vintage Corduroy Cap combines retro charm with modern comfort, making it a must-have accessory for any wardrobe. Made from 100% cotton corduroy, this unstructured 6-panel cap features a low-profile crown for a relaxed fit. \n\nThe soft, textured fabric feels great to the touch, while the cotton twill sweatband keeps you comfortable all day. With 6 embroidered eyelets for breathability and an adjustable strap with a gold-colored metal buckle, this cap ensures a perfect fit. \n\n.: 100% cotton corduroy\n.: Unstructured, 6-panel, low-profile crown\n.: Cotton twill sweatband and taping\n.: 6 embroidered eyelets\n.: Adjustable strap with a gold-colored metal buckle\n.: Blank product sourced from China and Vietnam",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7060472235354799441_2048.jpg?v=1779946500",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/trippy-hippy-vintage-corduroy-cap-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/trippy-hippy-vintage-corduroy-cap-embroidery"),
    altText: "Trippy hippy Vintage Corduroy Cap (Embroidery)",
    highlights: [
          "Dark Brown, Burgundy / One size",
          "Hats",
          "Hats",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hats"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Hats"
          },
          {
                "label": "Options",
                "value": "Dark Brown, Burgundy / One size"
          },
          {
                "label": "Variants",
                "value": "2"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7060472235354799441_2048.jpg?v=1779946500",
                "altText": "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7605042744874056037_2048.jpg?v=1779946507",
                "altText": "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11859109253045484393_2048.jpg?v=1779946519",
                "altText": "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the hats product base unless they mention this exact Trippy hippy Vintage Corduroy Cap (Embroidery) design.",
  },
  {
    title: "Psychedelic Ying Yang Tee",
    price: "From $24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "T-Shirt",
    variantSummary: "White, Black / S-5XL",
    category: "Apparel",
    slug: "psychedelic-ying-yang-heavy-cotton-tee",
    shortDescription: "A psychedelic yin-yang tee for everyday wear, pairing bold symbolic artwork with an easy unisex cotton fit.",
    detailDescription: "Immersive symbolic artwork inspired by sacred geometry, psychedelic visuals, and cosmic design.\n\nPremium everyday cotton fit\nHigh-resolution printed artwork\nUnisex styling\nDesigned for bold visual expression\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5464731681615404100_2048.jpg?v=1779839551",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-heavy-cotton-tee",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-ying-yang-heavy-cotton-tee"),
    altText: "Psychedelic Ying Yang Tee",
    highlights: [
          "White, Black / S-5XL",
          "Apparel",
          "T-Shirt",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "T-Shirt"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Apparel"
          },
          {
                "label": "Options",
                "value": "White, Black / S-5XL"
          },
          {
                "label": "Variants",
                "value": "16"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5464731681615404100_2048.jpg?v=1779839551",
                "altText": "Psychedelic Ying Yang Tee product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11867246045127936010_2048.jpg?v=1779839550",
                "altText": "Psychedelic Ying Yang Tee product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11819048640334279979_2048.jpg?v=1779839554",
                "altText": "Psychedelic Ying Yang Tee product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the t-shirt product base unless they mention this exact Psychedelic Ying Yang Tee design.",
  },
  {
    title: "Psychedelic Ying Yang Woven Blanket",
    price: "$48.99",
    vendor: "Auralis Design",
    shopifyVendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "psychedelic-ying-yang-woven-blanket",
    shortDescription: "A woven cotton throw that turns the psychedelic yin-yang artwork into a textured home piece with fringed edges.",
    detailDescription: "A woven statement blanket featuring psychedelic Ying Yang artwork, symbolic contrast, and immersive visual flow.\n\nDetailed woven artwork\nSoft decorative blanket construction\nDesigned for beds, couches, studios, and creative spaces\nAtmospheric symbolic design\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13253513801766639745_2048.jpg?v=1779839265",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-ying-yang-woven-blanket"),
    altText: "Psychedelic Ying Yang Woven Blanket",
    highlights: [
          "Artwork / 52'' × 37''",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Auralis Design"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "Artwork / 52'' × 37''"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13253513801766639745_2048.jpg?v=1779839265",
                "altText": "Psychedelic Ying Yang Woven Blanket product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14685688208648080050_2048.jpg?v=1779839369",
                "altText": "Psychedelic Ying Yang Woven Blanket product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11532357835120184043_2048.jpg?v=1779839426",
                "altText": "Psychedelic Ying Yang Woven Blanket product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Psychedelic Ying Yang Woven Blanket design.",
  },
  {
    title: "Psychedelic Ying Yang Tan Sherpa Blanket",
    price: "$60.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "60\" × 50\"",
    category: "Blankets",
    slug: "psychedelic-ying-yang-tan-sherpa-blanket",
    shortDescription: "A soft sherpa-backed blanket featuring the psychedelic yin-yang design for couch, bed, or studio lounging.",
    detailDescription: "Keep it cozy all year round with this super-soft sherpa blanket. Great for snuggles by the fireplace, picnics, and a quick power nap. Print high-definition designs on the 100% poly front to keep it personal. The back has a tan sherpa lining. Rounded corners and decorative stitching keep everything sleek and smooth.\n.: 100% polyester printed mink with ultra-soft tan sherpa backing\n.: Available in two sizes\n.: One-sided print\n.: Blank product sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6135024105187545972_2048.jpg?v=1779838995",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-tan-sherpa-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-ying-yang-tan-sherpa-blanket"),
    altText: "Psychedelic Ying Yang Tan Sherpa Blanket",
    highlights: [
          "60\" × 50\"",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "60\" × 50\""
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6135024105187545972_2048.jpg?v=1779838995",
                "altText": "Psychedelic Ying Yang Tan Sherpa Blanket product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14617968385392367380_2048.jpg?v=1779839000",
                "altText": "Psychedelic Ying Yang Tan Sherpa Blanket product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9589426059931243785_2048.jpg?v=1779839003",
                "altText": "Psychedelic Ying Yang Tan Sherpa Blanket product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Psychedelic Ying Yang Tan Sherpa Blanket design.",
  },
  {
    title: "Psychedelic Symbol Hoodie",
    price: "$49.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hoodie",
    variantSummary: "S-5XL / White, Black",
    category: "Apparel",
    slug: "psychedelic-midweight-softstyle-fleece-hoodie",
    shortDescription: "A midweight fleece hoodie carrying the psychedelic balance artwork in a clean white or black everyday layer.",
    detailDescription: "A soft midweight hoodie featuring immersive psychedelic artwork with symbolic, cosmic-inspired energy.\n\nComfortable fleece construction\nUnisex everyday fit\nHigh-resolution printed design\nBuilt for expressive streetwear and visual identity\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8886076135680667713_2048.jpg?v=1779838980",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-midweight-softstyle-fleece-hoodie",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-midweight-softstyle-fleece-hoodie"),
    altText: "Psychedelic Symbol Hoodie",
    highlights: [
          "S-5XL / White, Black",
          "Apparel",
          "Hoodie",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hoodie"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Apparel"
          },
          {
                "label": "Options",
                "value": "S-5XL / White, Black"
          },
          {
                "label": "Variants",
                "value": "16"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8886076135680667713_2048.jpg?v=1779838980",
                "altText": "Psychedelic Symbol Hoodie product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5802785510145578650_2048.jpg?v=1779838963",
                "altText": "Psychedelic Symbol Hoodie product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13018936863533231854_2048.jpg?v=1779838992",
                "altText": "Psychedelic Symbol Hoodie product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the hoodie product base unless they mention this exact Psychedelic Symbol Hoodie design.",
  },
  {
    title: "Pixel Oven Blanket — Commissioned Series",
    price: "$48.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "woven-blanket",
    shortDescription: "A commissioned Pixel Oven woven blanket that brings custom artwork into a tactile cotton throw format.",
    detailDescription: "A commissioned woven blanket blending symbolic digital artwork with immersive visual texture and atmosphere.\n\nHigh-resolution woven artwork\nSoft heavyweight blanket construction\nDesigned for creative and atmospheric spaces\nPart of the Auralis commissioned artwork series\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/woven-blanket"),
    altText: "Pixel Oven Blanket — Commissioned Series",
    highlights: [
          "Artwork / 52'' × 37''",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "Artwork / 52'' × 37''"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
                "altText": "Pixel Oven Blanket — Commissioned Series product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3198947950187575422_2048.jpg?v=1779839432",
                "altText": "Pixel Oven Blanket — Commissioned Series product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5348081534972767681_2048.jpg?v=1779839432",
                "altText": "Pixel Oven Blanket — Commissioned Series product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Pixel Oven Blanket — Commissioned Series design.",
  },
  {
    title: "Sacred geometry Snapback Trucker Cap with Patch (Embroidery)",
    price: "$33.28",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "Circle / One size / Black / White patch",
    category: "Hats",
    slug: "snapback-trucker-cap-with-patch-embroidery",
    shortDescription: "A structured snapback trucker cap with a sacred-geometry patch, mesh back, and adjustable fit.",
    detailDescription: "The Snapback Trucker Cap is a staple in custom headwear, designed with a six-panel, mid-profile build that combines structure with an easy fit. Its pre-curved visor with a matching undervisor keeps its shape while maintaining the classic trucker style.\n\n.: Front and visor: 60% cotton, 40% polyester\n.: Back: 100% polyester mesh\n.: Sweatband: 100% cotton\n.: One size\n.: Adjustable plastic snap closure\n.: Choose between 2 patch colors; Patch outline color is black\n.: Brand sticker on the visor",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18158916977108050720_2048.jpg?v=1779835982",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery"),
    altText: "Sacred geometry Snapback Trucker Cap with Patch (Embroidery)",
    highlights: [
          "Circle / One size / Black / White patch",
          "Hats",
          "Hats",
          "Product photo"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hats"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Hats"
          },
          {
                "label": "Options",
                "value": "Circle / One size / Black / White patch"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18158916977108050720_2048.jpg?v=1779835982",
                "altText": "Sacred geometry Snapback Trucker Cap with Patch (Embroidery) product photo 1"
          }
    ],
    reviewScope: "Reviews should refer to the hats product base unless they mention this exact Sacred geometry Snapback Trucker Cap with Patch (Embroidery) design.",
  },
  {
    title: "Sun of Life Pendant Necklace",
    price: "$23.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Accessories",
    variantSummary: "One Size / Silver",
    category: "Jewelry & Accessories",
    slug: "oval-necklace",
    shortDescription: "A Sun of Life pendant necklace with a bright printed ellipse charm on a simple silver-tone chain.",
    detailDescription: "A symbolic pendant necklace inspired by sacred geometry and cosmic visual themes.\n\nGlossy symbolic pendant artwork\nLightweight wearable design\nMinimalist silver-tone finish\nDesigned for expressive everyday wear\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1779835889",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/oval-necklace",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/oval-necklace"),
    altText: "Sun of Life Pendant Necklace",
    highlights: [
          "One Size / Silver",
          "Jewelry & Accessories",
          "Accessories",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Accessories"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Jewelry & Accessories"
          },
          {
                "label": "Options",
                "value": "One Size / Silver"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1779835889",
                "altText": "Sun of Life Pendant Necklace product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10581411034302332643_2048.jpg?v=1779835894",
                "altText": "Sun of Life Pendant Necklace product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9119972945663593159_2048.jpg?v=1779835895",
                "altText": "Sun of Life Pendant Necklace product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the accessories product base unless they mention this exact Sun of Life Pendant Necklace design.",
  },
  {
    title: "Auralis Digital Trucker Caps",
    price: "$21.37",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "Black / One size",
    category: "Hats",
    slug: "auralis-digital-trucker-caps",
    shortDescription: "A classic Auralis Digital trucker cap with a foam front, breathable mesh back, and adjustable snap closure.",
    detailDescription: "Trucker caps are perfect for merchandising—they're versatile and fit almost any occasion. A 100% polyester front and 100% nylon mesh weave back make these hats super durable through regular wear and tear. They come in one size with an adjustable plastic snap closure: 22.8\" (58cm). The cap's front has six rows of visor stitching. Pick any (or all) of the color variations and start customizing them with your original designs.\n.: Material: 100% polyester foam front with 100% nylon mesh weave back\n.: One size fits most (22.8\"/58cm)\n.: Seven color combinations to pick from\n.: Adjustable plastic snap closure\n.: Six row stitching on visor\n.: Please note: Creases on the hat will straighten out naturally once unpackaged and worn",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps"),
    altText: "Auralis Digital Trucker Caps",
    highlights: [
          "Black / One size",
          "Hats",
          "Hats",
          "4 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Hats"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Hats"
          },
          {
                "label": "Options",
                "value": "Black / One size"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
                "altText": "Auralis Digital Trucker Caps product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8699638975083853557_2048.jpg?v=1778794938",
                "altText": "Auralis Digital Trucker Caps product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6778490280354954443_2048.jpg?v=1778794945",
                "altText": "Auralis Digital Trucker Caps product photo 3"
          },
          {
                "label": "Photo 4",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11010848881538086164_2048.jpg?v=1778794952",
                "altText": "Auralis Digital Trucker Caps product photo 4"
          }
    ],
    reviewScope: "Reviews should refer to the hats product base unless they mention this exact Auralis Digital Trucker Caps design.",
  },
  {
    title: "Sun of Life Tapestry",
    price: "$28.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "26\" × 36\"",
    category: "Wall Decor",
    slug: "sun-of-life-wall-tapestry",
    shortDescription: "A lightweight Sun of Life wall tapestry for adding symbolic artwork to a room, studio, or creative corner.",
    detailDescription: "A bold symbolic tapestry inspired by sacred geometry, cosmic alignment, and immersive visual design.\n\nLightweight polyester fabric\nHigh-resolution edge-to-edge artwork\nDesigned for wall display and creative spaces\nAtmospheric and visually immersive styling\nDesigned by Auralis Design.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry"),
    altText: "Sun of Life Tapestry",
    highlights: [
          "26\" × 36\"",
          "Wall Decor",
          "Home Decor",
          "Product photo"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Wall Decor"
          },
          {
                "label": "Options",
                "value": "26\" × 36\""
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
                "altText": "Sun of Life Tapestry product photo 1"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Sun of Life Tapestry design.",
  },
  {
    title: "Sun of Life Notebook - Ruled Line",
    price: "$18.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Paper products",
    variantSummary: "One Size",
    category: "Journals & Notebooks",
    slug: "spiral-notebook-ruled-line",
    shortDescription: "A ruled Sun of Life spiral notebook for sketches, notes, lists, and daily creative fragments.",
    detailDescription: "Shopping lists, school notes or poems - 118 page spiral notebook with ruled line paper is a perfect companion in everyday life. The durable printed cover makes the owner proud to carry it everywhere.\n.: Material: 100% paper\n.: Paper weights: 350 gsm (covers), 90 gsm (inside pages)\n.: One size: 6\" x 8\" (15.2 x 20.3 cm)\n.: 118 ruled line pages (59 sheets)\n.: Front cover print\n.: Dark grey back cover\n.: Metal spiral binding",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/660450691508830456_2048.jpg?v=1778703264",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/spiral-notebook-ruled-line",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/spiral-notebook-ruled-line"),
    altText: "Sun of Life Notebook - Ruled Line",
    highlights: [
          "One Size",
          "Journals & Notebooks",
          "Paper products",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Paper products"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Journals & Notebooks"
          },
          {
                "label": "Options",
                "value": "One Size"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/660450691508830456_2048.jpg?v=1778703264",
                "altText": "Sun of Life Notebook - Ruled Line product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1672287110976738539_2048.jpg?v=1778703265",
                "altText": "Sun of Life Notebook - Ruled Line product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6475067351204432166_2048.jpg?v=1778703266",
                "altText": "Sun of Life Notebook - Ruled Line product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the paper products product base unless they mention this exact Sun of Life Notebook - Ruled Line design.",
  },
  {
    title: "Sun of Life Woven Blanket",
    price: "$48.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "flower-of-the-sun-woven-blanket",
    shortDescription: "A woven Sun of Life blanket that gives the symbolic artwork a warm cotton texture and fringed finish.",
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\n\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n\n.: Material: 100% Cotton\n.:  Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778782127",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket"),
    altText: "Sun of Life Woven Blanket",
    highlights: [
          "Artwork / 52'' × 37''",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "Artwork / 52'' × 37''"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778782127",
                "altText": "Sun of Life Woven Blanket product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2702450247328070278_2048.jpg?v=1778782133",
                "altText": "Sun of Life Woven Blanket product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14867096990000065301_2048.jpg?v=1778782136",
                "altText": "Sun of Life Woven Blanket product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Sun of Life Woven Blanket design.",
  },
  {
    title: "Zeus Sherpa Blanket",
    price: "$60.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "60\" × 50\"",
    category: "Blankets",
    slug: "zeus-sherpa-blanket",
    shortDescription: "A sherpa-backed Zeus blanket with vivid front artwork and a soft tan reverse for everyday lounging.",
    detailDescription: "Keep it cozy all year round with this super-soft sherpa blanket. Great for snuggles by the fireplace, picnics, and a quick power nap. Print high-definition designs on the 100% poly front to keep it personal. The back has a tan sherpa lining. Rounded corners and decorative stitching keep everything sleek and smooth.\n.: 100% polyester printed mink with ultra-soft tan sherpa backing\n.: Available in two sizes\n.: One-sided print\n.: Blank product sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-sherpa-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-sherpa-blanket"),
    altText: "Zeus Sherpa Blanket",
    highlights: [
          "60\" × 50\"",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "60\" × 50\""
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
                "altText": "Zeus Sherpa Blanket product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9060425350173305158_2048.jpg?v=1778696080",
                "altText": "Zeus Sherpa Blanket product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4139067084560893128_2048.jpg?v=1778696083",
                "altText": "Zeus Sherpa Blanket product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Zeus Sherpa Blanket design.",
  },
  {
    title: "Zeus Woven Blanket",
    price: "$47.10",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "zeus-woven-blanket",
    shortDescription: "A woven Zeus blanket that translates the artwork into a cotton throw with texture, weight, and fringe.",
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\n\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n\n.: Material: 100% Cotton\n.:  Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-woven-blanket"),
    altText: "Zeus Woven Blanket",
    highlights: [
          "Artwork / 52'' × 37''",
          "Blankets",
          "Home Decor",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Home Decor"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Blankets"
          },
          {
                "label": "Options",
                "value": "Artwork / 52'' × 37''"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
                "altText": "Zeus Woven Blanket product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6465571721629919199_2048.jpg?v=1778654688",
                "altText": "Zeus Woven Blanket product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6355129833010096723_2048.jpg?v=1778654722",
                "altText": "Zeus Woven Blanket product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Zeus Woven Blanket design.",
  },
  {
    title: "Zeus Journal Matte",
    price: "$18.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Paper products",
    variantSummary: "Journal",
    category: "Journals & Notebooks",
    slug: "zeus-journal-matte",
    shortDescription: "A matte hardcover Zeus journal with lined pages for private notes, planning, and personal study.",
    detailDescription: "Make your everyday journaling more personal, private, and stylish with this matte hardcover journal. Available in 5.75\"x8\", with 150 lined pages, these sturdy hardcover journals are fully customizable on the front and on the back covers. The matte laminate coating on the cover will make them stay true to your personal style.\n.: Full wraparound print\n.: 150 lined pages (75 sheets)\n.: Matte finish\n.: Casewrap binding\n.: Note: 0.5\"x0.5\" production barcode visible on the back cover",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-journal-matte",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-journal-matte"),
    altText: "Zeus Journal Matte",
    highlights: [
          "Journal",
          "Journals & Notebooks",
          "Paper products",
          "3 product photos"
    ],
    specs: [
          {
                "label": "Product",
                "value": "Paper products"
          },
          {
                "label": "Brand",
                "value": "Auralis Design"
          },
          {
                "label": "Shopify vendor",
                "value": "Printify"
          },
          {
                "label": "Category",
                "value": "Journals & Notebooks"
          },
          {
                "label": "Options",
                "value": "Journal"
          },
          {
                "label": "Variants",
                "value": "1"
          },
          {
                "label": "Checkout",
                "value": "Opens through Shopify"
          },
          {
                "label": "Production",
                "value": "Made after purchase by production partners"
          }
    ],
    photos: [
          {
                "label": "Photo 1",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
                "altText": "Zeus Journal Matte product photo 1"
          },
          {
                "label": "Photo 2",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11425389356575498434_2048.jpg?v=1778654389",
                "altText": "Zeus Journal Matte product photo 2"
          },
          {
                "label": "Photo 3",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7977574976202349062_2048.jpg?v=1778654391",
                "altText": "Zeus Journal Matte product photo 3"
          }
    ],
    reviewScope: "Reviews should refer to the paper products product base unless they mention this exact Zeus Journal Matte design.",
  }
];

export const shopFaqs = [
  {
    q: "How does checkout work?",
    a: "Checkout opens securely through Shopify when you use a clearly labeled buy or view button.",
  },
  {
    q: "Who fulfills the products?",
    a: "Production and fulfillment are handled after the Shopify order is placed for made-to-order products.",
  },
  {
    q: "Is payment collected on Auralis Digital?",
    a: "No. Auralis Digital displays products and product details. Shopify handles payment, checkout, and order records.",
  },
  {
    q: "How fast will items ship?",
    a: "Many items are produced and fulfilled after purchase, so timing can vary by product and destination.",
  },
];
