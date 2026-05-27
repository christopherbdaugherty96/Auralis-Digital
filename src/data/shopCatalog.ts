export type ShopProduct = {
  title: string;
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
  photos: Array<{ label: string; imageUrl: string; altText: string }>;
  reviewScope: string;
};

type ShopifyCatalogItem = {
  title: string;
  price: string;
  productType: string;
  variantSummary: string;
  category: string;
  slug: string;
  imageUrl: string;
  shopifyProductUrl: string;
  highlights: string[];
  photos?: string[];
};

const withShopifyTracking = (url: string) =>
  `${url}?utm_source=auralisdigital&utm_medium=site&utm_campaign=shop_catalog`;

const itemToProduct = (item: ShopifyCatalogItem): ShopProduct => ({
  title: item.title,
  price: item.price,
  vendor: "Auralis Design",
  productType: item.productType,
  variantSummary: item.variantSummary,
  category: item.category,
  slug: item.slug,
  shortDescription: `${item.title} from the current Auralis Design Shopify catalog.`,
  detailDescription:
    `${item.title} is part of the current Auralis Design catalog, built around Christopher's sacred-geometry, psychedelic, symbolic, cosmic, and personal artwork direction. Checkout opens through Shopify, and production/fulfillment details are handled on the Shopify product page.`,
  imageUrl: item.imageUrl,
  shopifyProductUrl: item.shopifyProductUrl,
  shopifyTrackingUrl: withShopifyTracking(item.shopifyProductUrl),
  altText: item.title,
  highlights: item.highlights,
  specs: [
    { label: "Product", value: item.productType },
    { label: "Brand", value: "Auralis Design" },
    { label: "Variant summary", value: item.variantSummary },
    { label: "Checkout", value: "Opens through Shopify" },
    { label: "Production", value: "Made after purchase by production partners" },
  ],
  photos: (item.photos?.length ? item.photos : [item.imageUrl]).map((imageUrl, index) => ({
    label: `Photo ${index + 1}`,
    imageUrl,
    altText: `${item.title} product photo ${index + 1}`,
  })),
  reviewScope: `Reviews should refer to this exact ${item.title} product only after real customer feedback exists.`,
});

const liveShopifyCatalog: ShopifyCatalogItem[] = [
  {
    title: "Psychedelic Midweight Softstyle Fleece Hoodie",
    price: "$49.99",
    productType: "Hoodie",
    variantSummary: "S-5XL / White or Black",
    category: "Apparel",
    slug: "psychedelic-midweight-softstyle-fleece-hoodie",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/661702561689835442_2048.jpg?v=1779838951",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-midweight-softstyle-fleece-hoodie",
    highlights: ["S-5XL sizing", "White and Black options", "Midweight fleece", "Psychedelic balance artwork"],
    photos: [
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/661702561689835442_2048.jpg?v=1779838951",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13284312461389880452_2048.jpg?v=1779838957",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5802785510145578650_2048.jpg?v=1779838963",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10662457253968137966_2048.jpg?v=1779838968",
    ],
  },
  {
    title: "Psychedelic Ying yang Heavy Cotton Tee",
    price: "$24.99",
    productType: "T-Shirt",
    variantSummary: "White or Black / S-5XL",
    category: "Apparel",
    slug: "psychedelic-ying-yang-heavy-cotton-tee",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6689296063766890639_2048.jpg?v=1779839544",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-heavy-cotton-tee",
    highlights: ["S-5XL sizing", "White and Black options", "Heavy cotton tee", "Psychedelic yin-yang artwork"],
    photos: [
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6689296063766890639_2048.jpg?v=1779839544",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13683375375613357417_2048.jpg?v=1779839546",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/17328706771025920603_2048.jpg?v=1779839547",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7900726310634010515_2048.jpg?v=1779839548",
    ],
  },
  {
    title: "Psychedelic Ying Yang Tan Sherpa Blanket",
    price: "$60.99",
    productType: "Home Decor",
    variantSummary: "60\" x 50\"",
    category: "Blankets",
    slug: "psychedelic-ying-yang-tan-sherpa-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6135024105187545972_2048.jpg?v=1779838995",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-tan-sherpa-blanket",
    highlights: ["60\" x 50\" size", "Tan sherpa backing", "One-sided print", "Psychedelic balance artwork"],
    photos: [
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6135024105187545972_2048.jpg?v=1779838995",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15412259991077438106_2048.jpg?v=1779838997",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14617968385392367380_2048.jpg?v=1779839000",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9589426059931243785_2048.jpg?v=1779839003",
    ],
  },
  {
    title: "Psychedelic Ying yang Woven Blanket",
    price: "$48.99",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' x 37''",
    category: "Blankets",
    slug: "psychedelic-ying-yang-woven-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13253513801766639745_2048.jpg?v=1779839265",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-woven-blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Woven psychedelic artwork"],
    photos: [
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13253513801766639745_2048.jpg?v=1779839265",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12559563694927311043_2048.jpg?v=1779839314",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14685688208648080050_2048.jpg?v=1779839369",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11532357835120184043_2048.jpg?v=1779839426",
    ],
  },
  {
    title: "Sun of Life Woven Blanket",
    price: "$48.99",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' x 37''",
    category: "Blankets",
    slug: "flower-of-the-sun-woven-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778782127",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Sun of Life artwork"],
  },
  {
    title: "Zeus Sherpa Blanket",
    price: "$60.99",
    productType: "Home Decor",
    variantSummary: "60\" x 50\"",
    category: "Blankets",
    slug: "zeus-sherpa-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-sherpa-blanket",
    highlights: ["60\" x 50\" size", "Tan sherpa backing", "One-sided print", "Zeus artwork"],
  },
  {
    title: "Zeus Woven Blanket",
    price: "$47.10",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' x 37''",
    category: "Blankets",
    slug: "zeus-woven-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-woven-blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Zeus artwork"],
  },
  {
    title: "The pixel oven (commissioned design) Woven Blanket",
    price: "$48.99",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' x 37''",
    category: "Blankets",
    slug: "woven-blanket",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/woven-blanket",
    highlights: ["Commissioned design", "52'' x 37'' size", "100% cotton", "Colorful fringed edges"],
    photos: [
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6961932024382464180_2048.jpg?v=1779839430",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3198947950187575422_2048.jpg?v=1779839432",
      "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5348081534972767681_2048.jpg?v=1779839432",
    ],
  },
  {
    title: "Sun of life Wall Tapestry",
    price: "$28.99",
    productType: "Home Decor",
    variantSummary: "26\" x 36\"",
    category: "Wall Decor",
    slug: "sun-of-life-wall-tapestry",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry",
    highlights: ["26\" x 36\" size", "100% polyester", "Hemmed edges", "Lightweight wall decor"],
  },
  {
    title: "Zeus Journal Matte",
    price: "$18.99",
    productType: "Paper products",
    variantSummary: "Journal",
    category: "Journals & Notebooks",
    slug: "zeus-journal-matte",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-journal-matte",
    highlights: ["Matte hardcover", "150 lined pages", "Full wraparound print", "Zeus artwork"],
  },
  {
    title: "Sun of Life Notebook - Ruled Line",
    price: "$18.99",
    productType: "Paper products",
    variantSummary: "One Size",
    category: "Journals & Notebooks",
    slug: "spiral-notebook-ruled-line",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/660450691508830456_2048.jpg?v=1778703264",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/spiral-notebook-ruled-line",
    highlights: ["Ruled pages", "Spiral binding", "Durable printed cover", "Sun of Life artwork"],
  },
  {
    title: "Sacred geometry Snapback Trucker Cap with Patch (Embroidery)",
    price: "$33.28",
    productType: "Hats",
    variantSummary: "Circle / One size / Black / White patch",
    category: "Hats",
    slug: "snapback-trucker-cap-with-patch-embroidery",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18158916977108050720_2048.jpg?v=1779835982",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery",
    highlights: ["One size", "Black cap", "White patch", "Embroidered patch design"],
  },
  {
    title: "Auralis Digital Trucker Caps",
    price: "$21.37",
    productType: "Hats",
    variantSummary: "Black / One size",
    category: "Hats",
    slug: "auralis-digital-trucker-caps",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps",
    highlights: ["Black / One size", "Adjustable snap closure", "Foam front", "Mesh back"],
  },
  {
    title: "Sun of life Necklace",
    price: "$23.99",
    productType: "Accessories",
    variantSummary: "One Size / Silver",
    category: "Accessories",
    slug: "oval-necklace",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1779835889",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/oval-necklace",
    highlights: ["Silver necklace", "One size", "Oval pendant", "Sun of Life design"],
  },
];

export const shopProducts: ShopProduct[] = liveShopifyCatalog.map(itemToProduct);

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
