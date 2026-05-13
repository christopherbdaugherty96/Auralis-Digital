export type ShopProduct = {
  title: string;
  featured: boolean;
  price: string;
  vendor: string;
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
  mockups: Array<{ label: string; imageUrl: string; altText: string }>;
  reviewScope: string;
};

export const shopCategories = [
  {
    name: "Blankets",
    description: "Cozy Auralis Design blankets for bedrooms, couches, studios, and gift-ready home decor.",
  },
  {
    name: "Journals",
    description: "Matte journals and notebooks for reflection, planning, sketching, and daily creative routines.",
  },
  {
    name: "Coffee Mugs",
    description: "Functional drinkware for desks, kitchens, morning routines, and small gift ideas.",
  },
  {
    name: "Posters",
    description: "Accessible art prints for personal spaces, studios, dorms, offices, and creative walls.",
  },
  {
    name: "Hats",
    description: "Wearable Auralis Design pieces for everyday style, drops, and future seasonal collections.",
  },
  {
    name: "Shirts",
    description: "Graphic apparel built around expressive artwork, comfort, and simple Shopify checkout.",
  },
  {
    name: "Canvas",
    description: "Wall art formats for turning Auralis Design visuals into room-focused statement pieces.",
  },
];

const withShopifyTracking = (url: string) =>
  `${url}?utm_source=auralisdigital&utm_medium=site&utm_campaign=shop_catalog`;

export const shopProducts: ShopProduct[] = [
  {
    title: "Zeus Blanket",
    featured: true,
    price: "$60.99",
    vendor: "Printify",
    productType: "Home Decor",
    variantSummary: '60" x 50"',
    category: "Blankets",
    slug: "zeus-blanket",
    shortDescription: "Super-soft sherpa blanket with a tan sherpa backing.",
    detailDescription:
      "Keep it cozy all year round with this super-soft sherpa blanket. The front carries the printed design, the back has tan sherpa lining, and Shopify opens when you are ready to buy.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778650633",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/tan-sherpa-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/tan-sherpa-blanket"),
    altText: "Zeus Blanket",
    highlights: ["Tan sherpa backing", "One-sided print", "Rounded corners", "Shopify secure checkout"],
    specs: [
      { label: "Product", value: "Sherpa blanket" },
      { label: "Vendor", value: "Printify" },
      { label: "Product type", value: "Home Decor" },
      { label: "Variant", value: '60" x 50"' },
      { label: "Material", value: "Polyester mink front, tan sherpa back" },
      { label: "Fulfillment", value: "Printify for Printify products" },
    ],
    mockups: [
      {
        label: "Mockup 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778650633",
        altText: "Zeus Blanket product mockup 1",
      },
      {
        label: "Mockup 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9096547335626832268_2048.jpg?v=1778650635",
        altText: "Zeus Blanket product mockup 2",
      },
      {
        label: "Mockup 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11127671003895969900_2048.jpg?v=1778650635",
        altText: "Zeus Blanket product mockup 3",
      },
      {
        label: "Mockup 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1043740386142639287_2048.jpg?v=1778650637",
        altText: "Zeus Blanket product mockup 4",
      },
    ],
    reviewScope: "Reviews should refer to the sherpa blanket product base unless they mention this exact Zeus Blanket artwork.",
  },
  {
    title: "Zeus Woven Blanket",
    featured: false,
    price: "$47.10",
    vendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork or Photo / 52'' x 37''",
    category: "Blankets",
    slug: "zeus-woven-blanket",
    shortDescription: "A woven cotton throw blanket with colorful fringed edges.",
    detailDescription:
      "A throw-sized woven blanket made from 100% cotton yarn, designed for cozy display, couch use, or art-forward home decor. Shopify opens when you are ready to buy.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-woven-blanket"),
    altText: "Zeus Woven Blanket",
    highlights: ["100% cotton", "Colorful fringed edges", "Woven threads", "Shopify secure checkout"],
    specs: [
      { label: "Product", value: "Woven blanket" },
      { label: "Vendor", value: "Printify" },
      { label: "Product type", value: "Home Decor" },
      { label: "Variant", value: "Artwork or Photo / 52'' x 37''" },
      { label: "Material", value: "100% cotton" },
      { label: "Fulfillment", value: "Printify for Printify products" },
    ],
    mockups: [
      {
        label: "Mockup 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
        altText: "Zeus Woven Blanket product mockup 1",
      },
      {
        label: "Mockup 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3350635306670397556_2048.jpg?v=1778654656",
        altText: "Zeus Woven Blanket product mockup 2",
      },
      {
        label: "Mockup 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6465571721629919199_2048.jpg?v=1778654688",
        altText: "Zeus Woven Blanket product mockup 3",
      },
      {
        label: "Mockup 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6355129833010096723_2048.jpg?v=1778654722",
        altText: "Zeus Woven Blanket product mockup 4",
      },
    ],
    reviewScope: "Reviews should refer to the woven blanket product base unless they mention this exact Zeus Woven Blanket artwork.",
  },
  {
    title: "Zeus Journal Matte",
    featured: false,
    price: "$18.99",
    vendor: "Printify",
    productType: "Paper products",
    variantSummary: "Journal",
    category: "Journals",
    slug: "zeus-journal-matte",
    shortDescription: "A matte hardcover journal with 150 lined pages.",
    detailDescription:
      "A matte hardcover journal for everyday writing, planning, sketching, and private notes. The cover uses a full wraparound print, and Shopify opens when you are ready to buy.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-journal-matte",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-journal-matte"),
    altText: "Zeus Journal Matte",
    highlights: ["Matte hardcover", "150 lined pages", "Full wraparound print", "Shopify secure checkout"],
    specs: [
      { label: "Product", value: "Hardcover journal" },
      { label: "Vendor", value: "Printify" },
      { label: "Product type", value: "Paper products" },
      { label: "Variant", value: "Journal" },
      { label: "Pages", value: "150 lined pages" },
      { label: "Fulfillment", value: "Printify for Printify products" },
    ],
    mockups: [
      {
        label: "Mockup 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
        altText: "Zeus Journal Matte product mockup 1",
      },
      {
        label: "Mockup 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/276846659853719506_2048.jpg?v=1778654387",
        altText: "Zeus Journal Matte product mockup 2",
      },
      {
        label: "Mockup 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11425389356575498434_2048.jpg?v=1778654389",
        altText: "Zeus Journal Matte product mockup 3",
      },
      {
        label: "Mockup 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7977574976202349062_2048.jpg?v=1778654391",
        altText: "Zeus Journal Matte product mockup 4",
      },
    ],
    reviewScope: "Reviews should refer to the matte hardcover journal product base unless they mention this exact Zeus Journal artwork.",
  },
  {
    title: "Zeus Mug 11oz",
    featured: false,
    price: "$17.99",
    vendor: "Printify",
    productType: "Mug",
    variantSummary: "11oz",
    category: "Coffee Mugs",
    slug: "zeus-mug-11oz",
    shortDescription: "A durable 11oz white ceramic mug for hot drinks.",
    detailDescription:
      "A classic 11oz ceramic mug for coffee, tea, hot chocolate, desks, kitchens, and gift-ready drinkware. Shopify opens when you are ready to buy.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8121189513190038541_2048.jpg?v=1778654724",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-mug-11oz",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-mug-11oz"),
    altText: "Zeus Mug 11oz",
    highlights: ["White ceramic", "11oz size", "C-handle", "Lead and BPA-free"],
    specs: [
      { label: "Product", value: "Ceramic mug" },
      { label: "Vendor", value: "Printify" },
      { label: "Product type", value: "Mug" },
      { label: "Variant", value: "11oz" },
      { label: "Material", value: "White ceramic" },
      { label: "Fulfillment", value: "Printify for Printify products" },
    ],
    mockups: [
      {
        label: "Mockup 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8121189513190038541_2048.jpg?v=1778654724",
        altText: "Zeus Mug 11oz product mockup 1",
      },
      {
        label: "Mockup 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6412037726450784535_2048.jpg?v=1778654726",
        altText: "Zeus Mug 11oz product mockup 2",
      },
      {
        label: "Mockup 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12295707888379519899_2048.jpg?v=1778654728",
        altText: "Zeus Mug 11oz product mockup 3",
      },
      {
        label: "Mockup 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/17640987671903681999_2048.jpg?v=1778654730",
        altText: "Zeus Mug 11oz product mockup 4",
      },
    ],
    reviewScope: "Reviews should refer to the 11oz ceramic mug product base unless they mention this exact Zeus Mug artwork.",
  },
  {
    title: "Zeus Matte Vertical Posters",
    featured: false,
    price: "$22.99",
    vendor: "Printify",
    productType: "Poster",
    variantSummary: '8" x 10" / Matte',
    category: "Posters",
    slug: "zeus-matte-vertical-posters",
    shortDescription: "A premium matte vertical poster on museum-grade paper.",
    detailDescription:
      "A matte vertical poster made for indoor wall art, creative rooms, studios, and gift-ready art print moments. Shopify opens when you are ready to buy.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2049462911992851992_2048.jpg?v=1778654485",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-matte-vertical-posters",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-matte-vertical-posters"),
    altText: "Zeus Matte Vertical Posters",
    highlights: ["Museum-grade paper", "Matte finish", "Indoor wall art", "Shopify secure checkout"],
    specs: [
      { label: "Product", value: "Matte vertical poster" },
      { label: "Vendor", value: "Printify" },
      { label: "Product type", value: "Poster" },
      { label: "Variant", value: '8" x 10" / Matte' },
      { label: "Use", value: "Indoor wall art" },
      { label: "Fulfillment", value: "Printify for Printify products" },
    ],
    mockups: [
      {
        label: "Mockup 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2049462911992851992_2048.jpg?v=1778654485",
        altText: "Zeus Matte Vertical Posters product mockup 1",
      },
      {
        label: "Mockup 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4702263243593761246_2048.jpg?v=1778654490",
        altText: "Zeus Matte Vertical Posters product mockup 2",
      },
      {
        label: "Mockup 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10011389094125847811_2048.jpg?v=1778654493",
        altText: "Zeus Matte Vertical Posters product mockup 3",
      },
      {
        label: "Mockup 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10633343667107313983_2048.jpg?v=1778654496",
        altText: "Zeus Matte Vertical Posters product mockup 4",
      },
    ],
    reviewScope: "Reviews should refer to the matte poster product base unless they mention this exact Zeus poster artwork.",
  },
];

export const featuredProduct = shopProducts.find((product) => product.featured) ?? shopProducts[0];

export const productReasons = [
  "A growing Zeus collection across blankets, paper goods, mugs, and wall art.",
  "Product mockups stay visible on Auralis Digital before checkout opens on Shopify.",
  "Categories are ready for more blankets, hats, shirts, mugs, canvas, and posters.",
  "Simple Shopify checkout when you are ready to buy.",
];

export const productUseCases = ["Cozy home decor", "Gift ideas", "Desk and journal setup", "Wall art and creative spaces"];

export const productTrustSteps = [
  { title: "Browse here", copy: "View product mockups, product notes, categories, and details on Auralis Digital." },
  { title: "Buy through Shopify", copy: "When you are ready, the buy button opens the Shopify product page in a new tab." },
  { title: "Fulfilled through Printify", copy: "Shopify keeps the order source of truth and routes Printify products through fulfillment." },
];

export const shopFaqs = [
  {
    q: "How does checkout work?",
    a: "Checkout opens securely through Shopify when you use a clearly labeled buy or view button.",
  },
  {
    q: "Who fulfills the products?",
    a: "Printify handles production and fulfillment for Printify products after the Shopify order is placed.",
  },
  {
    q: "Is payment collected on Auralis Digital?",
    a: "No. Auralis Digital displays products and product details. Shopify handles payment, checkout, and order records.",
  },
  {
    q: "How fast will items ship?",
    a: "Each item is produced and fulfilled after purchase through Printify, so timing can vary by product and destination.",
  },
];
