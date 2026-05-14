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
  photos: Array<{ label: string; imageUrl: string; altText: string }>;
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
    title: "Zeus Sherpa Blanket",
    featured: true,
    price: "$60.99",
    vendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: '60" x 50"',
    category: "Blankets",
    slug: "zeus-sherpa-blanket",
    shortDescription: "A plush sherpa throw with Zeus artwork on the front and a warm tan sherpa back.",
    detailDescription:
      "The Zeus Sherpa Blanket is the softest home-decor piece in the collection: a 60\" x 50\" cozy sherpa throw with vivid Zeus artwork on the printed polyester mink front and an ultra-soft tan sherpa backing. It is made for couch lounging, bed layering, reading chairs, studio corners, gift setups, picnics, and quick power naps. Rounded corners and decorative stitching keep the blanket looking finished while Shopify handles checkout.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-sherpa-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-sherpa-blanket"),
    altText: "Zeus Sherpa Blanket",
    highlights: ["60\" x 50\" size", "Tan sherpa backing", "One-sided print", "Rounded corners"],
    specs: [
      { label: "Product", value: "Sherpa blanket" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Home Decor" },
      { label: "Size", value: '60" x 50"' },
      { label: "Material", value: "100% polyester printed mink front, ultra-soft tan sherpa back" },
      { label: "Print", value: "One-sided high-definition print" },
      { label: "Finish", value: "Rounded corners and decorative stitching" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
        altText: "Zeus Sherpa Blanket product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13756698073366963350_2048.jpg?v=1778696078",
        altText: "Zeus Sherpa Blanket product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9060425350173305158_2048.jpg?v=1778696080",
        altText: "Zeus Sherpa Blanket product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4139067084560893128_2048.jpg?v=1778696083",
        altText: "Zeus Sherpa Blanket product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the sherpa blanket product base unless they mention this exact Zeus Sherpa Blanket artwork.",
  },
  {
    title: "Zeus Woven Blanket",
    featured: false,
    price: "$47.10",
    vendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork or Photo / 52'' x 37''",
    category: "Blankets",
    slug: "zeus-woven-blanket",
    shortDescription: "A woven cotton throw with Zeus artwork, textured threads, and colorful fringed edges.",
    detailDescription:
      "The Zeus Woven Blanket turns the artwork into a 52'' x 37'' cotton throw with visible woven threads and colorful edge fringe. It is a lighter, art-forward option for couch styling, wall-style display over furniture, reading corners, dorm rooms, studios, or gift-ready home decor. The published Shopify options include Artwork and Photo variants at the same size and price.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-woven-blanket"),
    altText: "Zeus Woven Blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Woven threads"],
    specs: [
      { label: "Product", value: "Woven blanket" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Home Decor" },
      { label: "Size", value: "52'' x 37''" },
      { label: "Variants", value: "Artwork or Photo" },
      { label: "Material", value: "100% cotton" },
      { label: "Finish", value: "Colorful edge fringe and woven threads" },
      { label: "Note", value: "Product photos may not fully show the final woven texture" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
        altText: "Zeus Woven Blanket product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3350635306670397556_2048.jpg?v=1778654656",
        altText: "Zeus Woven Blanket product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6465571721629919199_2048.jpg?v=1778654688",
        altText: "Zeus Woven Blanket product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6355129833010096723_2048.jpg?v=1778654722",
        altText: "Zeus Woven Blanket product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the woven blanket product base unless they mention this exact Zeus Woven Blanket artwork.",
  },
  {
    title: "Flower of the Sun Woven Blanket",
    featured: false,
    price: "$48.99",
    vendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork or Photo / 52'' x 37''",
    category: "Blankets",
    slug: "flower-of-the-sun-woven-blanket",
    shortDescription: "A woven cotton throw with Flower of the Sun artwork and colorful fringed edges.",
    detailDescription:
      "The Flower of the Sun Woven Blanket turns bright artwork into a 52'' x 37'' cotton throw with visible woven threads and colorful edge fringe. It is a warm visual piece for couches, reading corners, studios, dorms, wall-style display, and thoughtful home-decor gifts. The published Shopify options include Artwork and Photo variants at the same size and price, so visitors can compare the full photo set before buying through Shopify.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778697245",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket"),
    altText: "Flower of the Sun Woven Blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Multiple product photos"],
    specs: [
      { label: "Product", value: "Woven blanket" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Home Decor" },
      { label: "Size", value: "52'' x 37''" },
      { label: "Variants", value: "Artwork or Photo" },
      { label: "Material", value: "100% cotton" },
      { label: "Finish", value: "Colorful edge fringe and woven threads" },
      { label: "Note", value: "Product photos may not fully show the final woven texture" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778697245",
        altText: "Flower of the Sun Woven Blanket product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4396691404307989589_2048.jpg?v=1778697255",
        altText: "Flower of the Sun Woven Blanket product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2702450247328070278_2048.jpg?v=1778697269",
        altText: "Flower of the Sun Woven Blanket product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14867096990000065301_2048.jpg?v=1778697279",
        altText: "Flower of the Sun Woven Blanket product photo 4",
      },
    ],
    reviewScope:
      "Reviews should refer to the woven blanket product base unless they mention this exact Flower of the Sun artwork.",
  },
  {
    title: "Zeus Journal Matte",
    featured: false,
    price: "$18.99",
    vendor: "Auralis Design",
    productType: "Paper products",
    variantSummary: "Journal",
    category: "Journals",
    slug: "zeus-journal-matte",
    shortDescription: "A matte hardcover journal for notes, planning, reflection, and daily creative work.",
    detailDescription:
      "The Zeus Journal Matte is built for everyday writing: planning, reflection, sketch notes, project ideas, and private thoughts. The 5.75\" x 8\" matte hardcover gives the Zeus artwork a clean full-wrap presentation on the front and back covers, while 150 lined pages keep it practical for desks, bags, school, work, or creative routines.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-journal-matte",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-journal-matte"),
    altText: "Zeus Journal Matte",
    highlights: ["5.75\" x 8\" size", "Matte hardcover", "150 lined pages", "Full wraparound print"],
    specs: [
      { label: "Product", value: "Hardcover journal" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Paper products" },
      { label: "Size", value: '5.75" x 8"' },
      { label: "Pages", value: "150 lined pages / 75 sheets" },
      { label: "Binding", value: "Casewrap binding" },
      { label: "Finish", value: "Matte laminate cover with full wraparound print" },
      { label: "Note", value: '0.5" x 0.5" production barcode visible on back cover' },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
        altText: "Zeus Journal Matte product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/276846659853719506_2048.jpg?v=1778654387",
        altText: "Zeus Journal Matte product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11425389356575498434_2048.jpg?v=1778654389",
        altText: "Zeus Journal Matte product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7977574976202349062_2048.jpg?v=1778654391",
        altText: "Zeus Journal Matte product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the matte hardcover journal product base unless they mention this exact Zeus Journal artwork.",
  },
  {
    title: "Sun of Life Notebook - Ruled Line",
    featured: false,
    price: "$18.99",
    vendor: "Auralis Design",
    productType: "Paper products",
    variantSummary: "One Size",
    category: "Journals",
    slug: "spiral-notebook-ruled-line",
    shortDescription: "A ruled spiral notebook for lists, notes, planning, sketches, and everyday writing.",
    detailDescription:
      "The Sun of Life Notebook - Ruled Line is a practical 6\" x 8\" spiral notebook for school notes, shopping lists, poems, sketches, project plans, and private thoughts. The durable printed front cover carries the artwork clearly, the dark grey back cover keeps it grounded, and 118 ruled pages make it useful for daily routines.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/660450691508830456_2048.jpg?v=1778703264",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/spiral-notebook-ruled-line",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/spiral-notebook-ruled-line"),
    altText: "Sun of Life Notebook - Ruled Line",
    highlights: ["6\" x 8\" size", "118 ruled pages", "Durable printed cover", "Metal spiral binding"],
    specs: [
      { label: "Product", value: "Spiral notebook" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Paper products" },
      { label: "Variant", value: "One Size" },
      { label: "Size", value: '6" x 8" / 15.2 x 20.3 cm' },
      { label: "Pages", value: "118 ruled pages / 59 sheets" },
      { label: "Paper", value: "350 gsm covers, 90 gsm inside pages" },
      { label: "Back cover", value: "Dark grey" },
      { label: "Binding", value: "Metal spiral binding" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/660450691508830456_2048.jpg?v=1778703264",
        altText: "Sun of Life Notebook - Ruled Line product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6340474145974871508_2048.jpg?v=1778703265",
        altText: "Sun of Life Notebook - Ruled Line product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1672287110976738539_2048.jpg?v=1778703265",
        altText: "Sun of Life Notebook - Ruled Line product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6475067351204432166_2048.jpg?v=1778703266",
        altText: "Sun of Life Notebook - Ruled Line product photo 4",
      },
    ],
    reviewScope:
      "Reviews should refer to the spiral notebook product base unless they mention this exact Sun of Life artwork.",
  },
  {
    title: "Zeus Mug 11oz",
    featured: false,
    price: "$17.99",
    vendor: "Auralis Design",
    productType: "Mug",
    variantSummary: "11oz",
    category: "Coffee Mugs",
    slug: "zeus-mug-11oz",
    shortDescription: "An 11oz ceramic mug for coffee, tea, desk setups, kitchens, and easy gifting.",
    detailDescription:
      "The Zeus Mug 11oz brings the artwork into a daily-use format for coffee, tea, hot chocolate, office desks, kitchen shelves, and small gift moments. The white ceramic 11oz / 0.33 l base keeps the piece simple and functional, with rounded corners, a C-handle, and lead- and BPA-free construction.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8121189513190038541_2048.jpg?v=1778654724",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-mug-11oz",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-mug-11oz"),
    altText: "Zeus Mug 11oz",
    highlights: ["11oz / 0.33 l", "White ceramic", "C-handle", "Lead and BPA-free"],
    specs: [
      { label: "Product", value: "Ceramic mug" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Mug" },
      { label: "Size", value: "11oz / 0.33 l" },
      { label: "Material", value: "White ceramic" },
      { label: "Shape", value: "Rounded corners with C-handle" },
      { label: "Safety", value: "Lead and BPA-free" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8121189513190038541_2048.jpg?v=1778654724",
        altText: "Zeus Mug 11oz product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6412037726450784535_2048.jpg?v=1778654726",
        altText: "Zeus Mug 11oz product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12295707888379519899_2048.jpg?v=1778654728",
        altText: "Zeus Mug 11oz product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/17640987671903681999_2048.jpg?v=1778654730",
        altText: "Zeus Mug 11oz product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the 11oz ceramic mug product base unless they mention this exact Zeus Mug artwork.",
  },
  {
    title: "Zeus Matte Vertical Posters",
    featured: false,
    price: "$22.99",
    vendor: "Auralis Design",
    productType: "Poster",
    variantSummary: '8" x 10" / Matte',
    category: "Posters",
    slug: "zeus-matte-vertical-posters",
    shortDescription: "A matte vertical poster for bedrooms, studios, offices, dorms, and creative walls.",
    detailDescription:
      "The Zeus Matte Vertical Poster is the clean wall-art version of the collection, published in an 8\" x 10\" matte size for bedrooms, studios, offices, dorms, gallery walls, and creative spaces that need a focused visual piece. Museum-grade archival paper and pigmented archival inks help the artwork feel crisp indoors, while the matte finish keeps glare low.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2049462911992851992_2048.jpg?v=1778654485",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-matte-vertical-posters",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-matte-vertical-posters"),
    altText: "Zeus Matte Vertical Posters",
    highlights: ["8\" x 10\" size", "Museum-grade paper", "Matte finish", "Indoor wall art"],
    specs: [
      { label: "Product", value: "Matte vertical poster" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Poster" },
      { label: "Size", value: '8" x 10"' },
      { label: "Finish", value: "Matte" },
      { label: "Paper", value: "Museum-grade archival paper" },
      { label: "Paper weight", value: "175-189 g/m2 depending on print provider" },
      { label: "Use", value: "Indoor wall art" },
      { label: "Tolerance", value: 'Slight size deviation possible, about +/- 1/16"' },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2049462911992851992_2048.jpg?v=1778654485",
        altText: "Zeus Matte Vertical Posters product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4702263243593761246_2048.jpg?v=1778654490",
        altText: "Zeus Matte Vertical Posters product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10011389094125847811_2048.jpg?v=1778654493",
        altText: "Zeus Matte Vertical Posters product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10633343667107313983_2048.jpg?v=1778654496",
        altText: "Zeus Matte Vertical Posters product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the matte poster product base unless they mention this exact Zeus poster artwork.",
  },
];

export const featuredProduct = shopProducts.find((product) => product.featured) ?? shopProducts[0];

export const productReasons = [
  "A growing Auralis Design catalog across blankets, paper goods, mugs, and wall art.",
  "Product photos stay visible on Auralis Digital before checkout opens on Shopify.",
  "Categories are ready for more blankets, hats, shirts, mugs, canvas, and posters.",
  "Simple Shopify checkout when you are ready to buy.",
];

export const productUseCases = ["Cozy home decor", "Gift ideas", "Desk and journal setup", "Wall art and creative spaces"];

export const productTrustSteps = [
  { title: "Browse here", copy: "View product photos, product notes, categories, and details on Auralis Digital." },
  { title: "Buy through Shopify", copy: "When you are ready, the buy button opens the Shopify product page in a new tab." },
  { title: "Produced after purchase", copy: "Shopify keeps the order source of truth, and production begins after purchase for made-to-order items." },
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
