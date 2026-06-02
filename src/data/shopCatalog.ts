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
    title: "Auralis Digital Trucker Caps",
    price: "$21.37",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "Black / One size",
    category: "Hats",
    slug: "auralis-digital-trucker-caps",
    shortDescription: "A durable foam-front trucker cap with breathable mesh backing and an adjustable snap closure.",
    detailDescription:
      "Trucker caps are a versatile staple for everyday wear. This cap features a 100% polyester foam front with a 100% nylon mesh back for durability and airflow.\n\n.: One size fits most (22.8\" / 58cm)\n.: Adjustable plastic snap closure\n.: Six-row stitching on visor\n.: Note: Creases will straighten out naturally after unpacking and wearing",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps"),
    altText: "Auralis Digital Trucker Caps",
    highlights: ["Black / One size", "Hats", "Hats", "4 product photos"],
    specs: [
      { label: "Product", value: "Hats" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Hats" },
      { label: "Options", value: "Black / One size" },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
        altText: "Auralis Digital Trucker Caps product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8699638975083853557_2048.jpg?v=1778794938",
        altText: "Auralis Digital Trucker Caps product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6778490280354954443_2048.jpg?v=1778794945",
        altText: "Auralis Digital Trucker Caps product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11010848881538086164_2048.jpg?v=1778794952",
        altText: "Auralis Digital Trucker Caps product photo 4",
      },
    ],
    reviewScope:
      "Reviews should refer to the trucker cap product base unless they mention this exact Auralis Digital Trucker Caps design.",
  },
  {
    title: "Business Cards",
    price: "From $10.89",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Paper products",
    variantSummary: '3.5" x 2.0" / 10-200 pcs / multiple finishes',
    category: "Paper Products",
    slug: "business-cards",
    shortDescription: "Personalized business cards with multiple finishes, orientations, and quantity options.",
    detailDescription:
      'A simple way to give your business (or event) a clean, professional touch. Choose between horizontal/vertical layouts, multiple paper finishes, and quantity options.\n\n.: Size: 3.5" x 2.0" (8.9cm x 5.1cm)\n.: One-sided print\n.: Four paper finishes\n.: Quantities: 10, 30, 50, 100, 200 pcs\n.: Blanks sourced from USA',
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12636242102796836311_2048.jpg?v=1780150271",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/business-cards",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/business-cards"),
    altText: "Business Cards",
    highlights: [
      '3.5" x 2.0" / 10-200 pcs / multiple finishes',
      "Paper Products",
      "Paper products",
      "3 product photos",
    ],
    specs: [
      { label: "Product", value: "Paper products" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Paper Products" },
      { label: "Options", value: "Horizontal/Vertical / finishes / quantities" },
      { label: "Variants", value: "20" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12636242102796836311_2048.jpg?v=1780150271",
        altText: "Business Cards product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9153724158854046280_2048.jpg?v=1780150274",
        altText: "Business Cards product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12254768874732610517_2048.jpg?v=1780150276",
        altText: "Business Cards product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the business card product base unless they mention this exact Business Cards listing.",
  },
  {
    title: "Cosmic Owl Tapestry",
    price: "$27.25",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: '26" x 36"',
    category: "Wall Decor",
    slug: "copy-of-indoor-wall-tapestry",
    shortDescription: "A lightweight wall tapestry with crisp printing and hemmed edges for durability.",
    detailDescription:
      "A custom wall tapestry is a simple way to uplift a room’s aesthetics with a personal touch.\n\n.: 100% Polyester\n.: Lightweight and versatile, easy to hang, move, or fold for storage\n.: Multiple sizes\n.: Blanks sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/copy-of-indoor-wall-tapestry"),
    altText: "Cosmic Owl Tapestry",
    highlights: ['26" x 36"', "Wall Decor", "Home Decor", "1 product photo"],
    specs: [
      { label: "Product", value: "Home Decor" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Wall Decor" },
      { label: "Options", value: '26" x 36"' },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18285861230107040115_2048.jpg?v=1780000969",
        altText: "Cosmic Owl Tapestry product photo 1",
      },
    ],
    reviewScope:
      "Reviews should refer to the tapestry product base unless they mention this exact Cosmic Owl Tapestry design.",
  },
  {
    title: "Custom dog Polyester Square Pillow",
    price: "$21.79",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: '14" x 14"',
    category: "Home Decor",
    slug: "custom-dog-polyester-square-pillow",
    shortDescription: "An indoor square pillow with double-sided print, a concealed zipper, and a plush insert.",
    detailDescription:
      "Room accents shouldn't be underrated. These indoor pillows serve as statement pieces, creating a personalized environment.\n\n.: 100% Polyester cover\n.: 100% Polyester insert\n.: Double sided print\n.: Concealed zipper\n.: Inserts are 2–3 inches longer than the covers for extra volume when assembled",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/custom-dog-polyester-square-pillow",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/custom-dog-polyester-square-pillow"),
    altText: "Custom dog Polyester Square Pillow",
    highlights: ['14" x 14"', "Home Decor", "Home Decor", "3 product photos"],
    specs: [
      { label: "Product", value: "Home Decor" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Home Decor" },
      { label: "Options", value: '14" x 14"' },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
        altText: "Custom dog Polyester Square Pillow product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/17382491879275228326_2048.jpg?v=1779946782",
        altText: "Custom dog Polyester Square Pillow product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13339043539619001610_2048.jpg?v=1779946785",
        altText: "Custom dog Polyester Square Pillow product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the pillow product base unless they mention this exact Custom dog Polyester Square Pillow design.",
  },
  {
    title: "Geometric Dad Cap",
    price: "$24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "One size / 11 colors",
    category: "Hats",
    slug: "geometric-dad-cap",
    shortDescription: "A classic unstructured dad cap with a low-profile fit and adjustable buckle closure.",
    detailDescription:
      "A timeless accessory crafted for both style and comfort.\n\n.: 100% cotton (Green Camo is 65% polyester, 35% cotton)\n.: Closure: self-fabric hideaway strap with antique brass buckle and grommet\n.: Sewn-in label\n.: Brand sticker on the visor",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/983589929630331810_2048.jpg?v=1780023959",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/geometric-dad-cap",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/geometric-dad-cap"),
    altText: "Geometric Dad Cap",
    highlights: ["One size / 11 colors", "Hats", "Hats", "3 product photos"],
    specs: [
      { label: "Product", value: "Hats" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Hats" },
      { label: "Options", value: "One size / 11 colors" },
      { label: "Variants", value: "11" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/983589929630331810_2048.jpg?v=1780023959",
        altText: "Geometric Dad Cap product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14353876417203152001_2048.jpg?v=1780023960",
        altText: "Geometric Dad Cap product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14523316421327505325_2048.jpg?v=1780023961",
        altText: "Geometric Dad Cap product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the dad cap product base unless they mention this exact Geometric Dad Cap design.",
  },
  {
    title: "Trippy hippy Vintage Corduroy Cap (Embroidery)",
    price: "$31.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "One size / 2 colors",
    category: "Hats",
    slug: "trippy-hippy-vintage-corduroy-cap-embroidery",
    shortDescription: "A vintage-inspired corduroy cap with embroidered eyelets and an adjustable strap buckle.",
    detailDescription:
      "The Vintage Corduroy Cap combines retro charm with modern comfort.\n\n.: 100% cotton corduroy\n.: Unstructured, 6-panel, low-profile crown\n.: Cotton twill sweatband and taping\n.: Adjustable strap with a gold-colored metal buckle\n.: Blank product sourced from China and Vietnam",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7060472235354799441_2048.jpg?v=1779946500",
    shopifyProductUrl:
      "https://auralis-design.myshopify.com/products/trippy-hippy-vintage-corduroy-cap-embroidery",
    shopifyTrackingUrl: withShopifyTracking(
      "https://auralis-design.myshopify.com/products/trippy-hippy-vintage-corduroy-cap-embroidery"
    ),
    altText: "Trippy hippy Vintage Corduroy Cap (Embroidery)",
    highlights: ["One size / 2 colors", "Hats", "Hats", "3 product photos"],
    specs: [
      { label: "Product", value: "Hats" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Hats" },
      { label: "Options", value: "Dark Brown, Burgundy" },
      { label: "Variants", value: "2" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7060472235354799441_2048.jpg?v=1779946500",
        altText: "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/7605042744874056037_2048.jpg?v=1779946507",
        altText: "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1416337806970109378_2048.jpg?v=1779946514",
        altText: "Trippy hippy Vintage Corduroy Cap (Embroidery) product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the corduroy cap product base unless they mention this exact Trippy hippy Vintage Corduroy Cap design.",
  },
  {
    title: "Tripsitter Bucket Hat (Embroidery)",
    price: "$24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hats",
    variantSummary: "One size / 3 colors",
    category: "Hats",
    slug: "tripsitter-bucket-hat-embroidery",
    shortDescription: "A cotton twill bucket hat with sewn eyelets for breathability and three color options.",
    detailDescription:
      "The embroidered bucket hat blends practicality, comfort, and style.\n\n.: 100% cotton twill\n.: 3 3/4\" (9.52 cm) crown\n.: 2 1/4\" (5.71 cm) brim\n.: Sewn eyelets for breathability\n.: One size fits most\n.: Blank product sourced from China and Vietnam",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5229951655020121090_2048.jpg?v=1779947350",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/tripsitter-bucket-hat-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/tripsitter-bucket-hat-embroidery"),
    altText: "Tripsitter Bucket Hat (Embroidery)",
    highlights: ["One size / 3 colors", "Hats", "Hats", "3 product photos"],
    specs: [
      { label: "Product", value: "Hats" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Hats" },
      { label: "Options", value: "Black, Navy, White" },
      { label: "Variants", value: "3" },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5229951655020121090_2048.jpg?v=1779947350",
        altText: "Tripsitter Bucket Hat (Embroidery) product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8587929125839520482_2048.jpg?v=1779947359",
        altText: "Tripsitter Bucket Hat (Embroidery) product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9923792479574363106_2048.jpg?v=1779947367",
        altText: "Tripsitter Bucket Hat (Embroidery) product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the bucket hat product base unless they mention this exact Tripsitter Bucket Hat design.",
  },
  {
    title: "Zeus Journal Matte",
    price: "$18.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Paper products",
    variantSummary: "Journal / 150 lined pages",
    category: "Journals & Notebooks",
    slug: "zeus-journal-matte",
    shortDescription: "A matte hardcover journal with a full wraparound print and 150 lined pages.",
    detailDescription:
      "A sturdy matte hardcover journal designed for everyday writing.\n\n.: Full wraparound print\n.: 150 lined pages (75 sheets)\n.: Matte finish\n.: Casewrap binding\n.: Note: a 0.5\" x 0.5\" production barcode is visible on the back cover",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4544457893467856767_2048.jpg?v=1778654384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-journal-matte",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-journal-matte"),
    altText: "Zeus Journal Matte",
    highlights: ["Journal / 150 lined pages", "Journals & Notebooks", "Paper products", "4 product photos"],
    specs: [
      { label: "Product", value: "Paper products" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Journals & Notebooks" },
      { label: "Options", value: 'Matte hardcover / 5.75" x 8"' },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
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
    reviewScope:
      "Reviews should refer to the journal product base unless they mention this exact Zeus Journal Matte design.",
  },
  {
    title: "Zeus Sherpa Blanket",
    price: "$60.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: '60" x 50"',
    category: "Blankets",
    slug: "zeus-sherpa-blanket",
    shortDescription: "A super-soft sherpa blanket with a printed mink front and warm tan sherpa backing.",
    detailDescription:
      "Keep it cozy all year round with this super-soft sherpa blanket.\n\n.: 100% polyester printed mink with ultra-soft tan sherpa backing\n.: One-sided print\n.: Blank product sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/946217445547567931_2048.jpg?v=1778696075",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-sherpa-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-sherpa-blanket"),
    altText: "Zeus Sherpa Blanket",
    highlights: ['60" x 50"', "Blankets", "Home Decor", "4 product photos"],
    specs: [
      { label: "Product", value: "Home Decor" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Blankets" },
      { label: "Options", value: '60" x 50"' },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
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
    reviewScope:
      "Reviews should refer to the sherpa blanket product base unless they mention this exact Zeus Sherpa Blanket design.",
  },
  {
    title: "Zeus Woven Blanket",
    price: "$47.10",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' x 37''",
    category: "Blankets",
    slug: "zeus-woven-blanket",
    shortDescription: "A 100% cotton woven blanket with colorful fringed edges and Zeus artwork.",
    detailDescription:
      "A cozy throw-sized woven blanket woven out of 100% cotton yarn with a colorful fringe edge.\n\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Note: mockups do not fully showcase the final product",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15994653165623932254_2048.jpg?v=1778654627",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/zeus-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/zeus-woven-blanket"),
    altText: "Zeus Woven Blanket",
    highlights: ["Artwork / 52'' x 37''", "Blankets", "Home Decor", "4 product photos"],
    specs: [
      { label: "Product", value: "Home Decor" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Category", value: "Blankets" },
      { label: "Options", value: "Artwork / 52'' x 37''" },
      { label: "Variants", value: "1" },
      { label: "Checkout", value: "Opens through Shopify" },
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
    reviewScope:
      "Reviews should refer to the woven blanket product base unless they mention this exact Zeus Woven Blanket design.",
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
