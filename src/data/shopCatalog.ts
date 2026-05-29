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
    title: "Micro or macro T-shirt",
    price: "$25.00",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "T-Shirt",
    variantSummary: "XS-2XL / Black, Sport Dark Navy, Sport Graphite, Sport Red, White",
    category: "Apparel",
    slug: "micro-or-macro-t-shirt",
    shortDescription: "A moisture-wicking performance tee with Micro or macro artwork, UV 40+ protection, and an athletic fit across five colorways.",
    detailDescription: "Made with 100% polyester interlock fabric, these unisex Zone Performance tees are perfect for all outdoor activities. Thanks to the advanced fabric, these tees come with moisture-wicking tech to keep you dry when things get heated, and a UV 40+ protection to keep your skin safe under direct sunlight. Meanwhile, the cationic dyes ensure superior color brightness and excellent color fastness.\n\n.: 100% moisture-wicking polyester\n.: Extra light fabric (3.8 oz/yd² (129 g/m²))\n.: Athletic fit\n.: Transitioning from heat-seal label to tear-away label. Inventory may be mixed",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4962545160684936676_2048.jpg?v=1780013682",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/micro-or-macro-t-shirt",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/micro-or-macro-t-shirt"),
    altText: "Micro or macro T-shirt",
    highlights: [
      "XS-2XL / 5 colors",
      "Apparel",
      "T-Shirt",
      "3 product photos",
    ],
    specs: [
      { label: "Product", value: "T-Shirt" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Shopify vendor", value: "Printify" },
      { label: "Category", value: "Apparel" },
      { label: "Options", value: "XS-2XL / Black, Sport Dark Navy, Sport Graphite, Sport Red, White" },
      { label: "Variants", value: "30" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4962545160684936676_2048.jpg?v=1780013682",
        altText: "Micro or macro T-shirt product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9208495966166830802_2048.jpg?v=1780013683",
        altText: "Micro or macro T-shirt product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5946157508760764974_2048.jpg?v=1780013683",
        altText: "Micro or macro T-shirt product photo 3",
      },
    ],
    reviewScope: "Reviews should refer to the t-shirt product base unless they mention this exact Micro or macro T-shirt design.",
  },
  {
    title: "Micro or macro V2 NuBlend® Crewneck Sweatshirt",
    price: "$39.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Sweatshirt",
    variantSummary: "S-3XL / Black, Forest Green, Khaki, Sandstone",
    category: "Apparel",
    slug: "micro-or-macro-v2-nublend-crewneck-sweatshirt",
    shortDescription: "A pre-shrunk NuBlend® fleece crewneck with Micro or macro V2 artwork in four earth-tone and neutral colorways.",
    detailDescription: "For chilly summer evenings and warm winter layers, sweatshirts are a staple item all year round. The NuBlend® fleece is pre-shrunk, pull-resistant, and quarter-turned so it won't crease in the middle. Made from 50% polyester and 50% sustainably sourced USA cotton, they're very soft to the touch.\n\n.: 50% cotton, 50% polyester NuBlend® pre-shrunk fleece\n.: Medium-heavy fabric (8.0 oz/yd² (271 g/m²))\n.: Regular fit\n.: Tear-away label",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5452141156651711343_2048.jpg?v=1780013217",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/micro-or-macro-v2-nublend%C2%AE-crewneck-sweatshirt",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/micro-or-macro-v2-nublend%C2%AE-crewneck-sweatshirt"),
    altText: "Micro or macro V2 NuBlend® Crewneck Sweatshirt",
    highlights: [
      "S-3XL / 4 colors",
      "Apparel",
      "Sweatshirt",
      "3 product photos",
    ],
    specs: [
      { label: "Product", value: "Sweatshirt" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Shopify vendor", value: "Printify" },
      { label: "Category", value: "Apparel" },
      { label: "Options", value: "S-3XL / Black, Forest Green, Khaki, Sandstone" },
      { label: "Variants", value: "24" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5452141156651711343_2048.jpg?v=1780013217",
        altText: "Micro or macro V2 NuBlend® Crewneck Sweatshirt product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5600508305479243782_2048.jpg?v=1780013223",
        altText: "Micro or macro V2 NuBlend® Crewneck Sweatshirt product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4889541585760531390_2048.jpg?v=1780013229",
        altText: "Micro or macro V2 NuBlend® Crewneck Sweatshirt product photo 3",
      },
    ],
    reviewScope: "Reviews should refer to the sweatshirt product base unless they mention this exact Micro or macro V2 NuBlend® Crewneck Sweatshirt design.",
  },
  {
    title: "Micro or macro NuBlend® Crewneck Sweatshirt",
    price: "$39.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Sweatshirt",
    variantSummary: "S-3XL / Black, Maroon",
    category: "Apparel",
    slug: "micro-or-macro-nublend-crewneck-sweatshirt",
    shortDescription: "A pre-shrunk NuBlend® fleece crewneck with the original Micro or macro artwork in black and maroon.",
    detailDescription: "For chilly summer evenings and warm winter layers, sweatshirts are a staple item all year round. The NuBlend® fleece is pre-shrunk, pull-resistant, and quarter-turned so it won't crease in the middle. Made from 50% polyester and 50% sustainably sourced USA cotton, they're very soft to the touch.\n\n.: 50% cotton, 50% polyester NuBlend® pre-shrunk fleece\n.: Medium-heavy fabric (8.0 oz/yd² (271 g/m²))\n.: Regular fit\n.: Tear-away label",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12470438641484904461_2048.jpg?v=1780012899",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/micro-or-macro-nublend%C2%AE-crewneck-sweatshirt",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/micro-or-macro-nublend%C2%AE-crewneck-sweatshirt"),
    altText: "Micro or macro NuBlend® Crewneck Sweatshirt",
    highlights: [
      "S-3XL / 2 colors",
      "Apparel",
      "Sweatshirt",
      "3 product photos",
    ],
    specs: [
      { label: "Product", value: "Sweatshirt" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Shopify vendor", value: "Printify" },
      { label: "Category", value: "Apparel" },
      { label: "Options", value: "S-3XL / Black, Maroon" },
      { label: "Variants", value: "12" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12470438641484904461_2048.jpg?v=1780012899",
        altText: "Micro or macro NuBlend® Crewneck Sweatshirt product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6791366632845884534_2048.jpg?v=1780012905",
        altText: "Micro or macro NuBlend® Crewneck Sweatshirt product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15824366714868177193_2048.jpg?v=1780012911",
        altText: "Micro or macro NuBlend® Crewneck Sweatshirt product photo 3",
      },
    ],
    reviewScope: "Reviews should refer to the sweatshirt product base unless they mention this exact Micro or macro NuBlend® Crewneck Sweatshirt design.",
  },
  {
    title: "Copy of Indoor Wall Tapestry",
    price: "$27.25",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "26\" × 36\"",
    category: "Wall Decor",
    slug: "copy-of-indoor-wall-tapestry",
    shortDescription: "A lightweight polyester wall tapestry with hemmed edges and vivid printed artwork for any room.",
    detailDescription: "A custom wall tapestry is a surefire way to uplift any room's aesthetics with a personal touch. This 100% Polyester wall tapestry comes with hemmed edges for extra durability to ensure years' worth of decorating bliss. The advanced tapestry printing techniques guarantee crisp detail even for the craziest of designs, in any of our multiple size choices.\n\n.: 100% Polyester\n.: Lightweight and versatile, easy to hang, move, or fold for storage\n.: Multiple sizes\n.: Blanks sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry"),
    altText: "Copy of Indoor Wall Tapestry",
    highlights: [
      "26\" × 36\"",
      "Wall Decor",
      "Home Decor",
      "Product photo",
    ],
    specs: [
      { label: "Product", value: "Home Decor" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Shopify vendor", value: "Printify" },
      { label: "Category", value: "Wall Decor" },
      { label: "Options", value: "26\" × 36\"" },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
        altText: "Copy of Indoor Wall Tapestry product photo 1",
      },
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Copy of Indoor Wall Tapestry design.",
  },
  {
    title: "TreeHugger Softstyle T-Shirt",
    price: "$24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "T-Shirt",
    variantSummary: "S-3XL / 11 colors",
    category: "Apparel",
    slug: "treehugger-softstyle-t-shirt",
    shortDescription: "A Gildan Softstyle® tee with TreeHugger artwork, ring-spun cotton comfort, and a wide range of colorways.",
    detailDescription: "The Gildan Softstyle® 64000 redefines casual comfort with a modern unisex cut and ultra-soft materials. Solid colors are 100% cotton, while heathers and sport grey use polyester blends for added durability. Shoulders are reinforced with twill tape, there are no side seams for a smoother fit, and the ribbed-knit collar helps prevent curling.\n\nDisclaimer:\n- Due to the fabric properties, the White color variant may appear off-white rather than bright white.\n- Sleeve prints and neck labels are produced using DTF (Direct-to-Film) printing technology.\n\n.: Made with 100% ring-spun cotton (4.5 oz/yd² (153 g/m²))\n.: Classic fit with crew neckline\n.: Pearlized, tear-away label\n.: Made using ethically grown and harvested US cotton\n.: Certified by OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie)\n.: Fabric blends: Heather colors - 35% ring-spun cotton, 65% polyester; Sport Grey and Antique colors - 90% cotton, 10% polyester; Graphite Heather - 50% ring-spun cotton, 50% polyester",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14578738876872491628_2048.jpg?v=1780000907",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/treehugger-softstyle-t-shirt",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/treehugger-softstyle-t-shirt"),
    altText: "TreeHugger Softstyle T-Shirt",
    highlights: [
      "S-3XL / 11 colors",
      "Apparel",
      "T-Shirt",
      "3 product photos",
    ],
    specs: [
      { label: "Product", value: "T-Shirt" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Shopify vendor", value: "Printify" },
      { label: "Category", value: "Apparel" },
      { label: "Options", value: "S-3XL / Dark Chocolate, Light Blue, Navy, Red, Royal, Sport Grey, White, Black, Military Green, Dark Heather, Natural" },
      { label: "Variants", value: "55" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14578738876872491628_2048.jpg?v=1780000907",
        altText: "TreeHugger Softstyle T-Shirt product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2212812279947528840_2048.jpg?v=1780000909",
        altText: "TreeHugger Softstyle T-Shirt product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4599687907991187213_2048.jpg?v=1780000911",
        altText: "TreeHugger Softstyle T-Shirt product photo 3",
      },
    ],
    reviewScope: "Reviews should refer to the t-shirt product base unless they mention this exact TreeHugger Softstyle T-Shirt design.",
  },
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
