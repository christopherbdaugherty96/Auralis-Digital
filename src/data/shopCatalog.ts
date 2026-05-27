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


const withShopifyTracking = (url: string) =>
  `${url}?utm_source=auralisdigital&utm_medium=site&utm_campaign=shop_catalog`;

export const shopProducts: ShopProduct[] = [
  {
    title: "Zeus Sherpa Blanket",

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
    title: "Sun of Life Woven Blanket",

    price: "$48.99",
    vendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork or Photo / 52'' x 37''",
    category: "Blankets",
    slug: "flower-of-the-sun-woven-blanket",
    shortDescription: "A woven cotton throw with Sun of Life artwork and colorful fringed edges.",
    detailDescription:
      "The Sun of Life Woven Blanket turns bright artwork into a 52'' x 37'' cotton throw with visible woven threads and colorful edge fringe. It is a warm visual piece for couches, reading corners, studios, dorms, wall-style display, and thoughtful home-decor gifts. The published Shopify options include Artwork and Photo variants at the same size and price, so visitors can compare the full photo set before buying through Shopify.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778782127",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/flower-of-the-sun-woven-blanket"),
    altText: "Sun of Life Woven Blanket",
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
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/965410947997061203_2048.jpg?v=1778782127",
        altText: "Sun of Life Woven Blanket product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/4396691404307989589_2048.jpg?v=1778697255",
        altText: "Sun of Life Woven Blanket product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2702450247328070278_2048.jpg?v=1778697269",
        altText: "Sun of Life Woven Blanket product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14867096990000065301_2048.jpg?v=1778697279",
        altText: "Sun of Life Woven Blanket product photo 4",
      },
    ],
    reviewScope:
      "Reviews should refer to the woven blanket product base unless they mention this exact Sun of Life artwork.",
  },
  {
    title: "Woven Blanket",

    price: "$47.10",
    vendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork or Photo / 52'' x 37''",
    category: "Blankets",
    slug: "woven-blanket",
    shortDescription: "A woven cotton throw with colorful fringed edges and a soft heirloom-style texture.",
    detailDescription:
      "The Woven Blanket is a 52'' x 37'' cotton throw with visible woven threads and colorful edge fringe. It is made for cozy couch styling, wall-style display, room decor, personal gifts, and warm everyday use. The published Shopify options include Artwork and Photo variants at the same size and price.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779819318",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/woven-blanket"),
    altText: "Woven Blanket",
    highlights: ["52'' x 37'' size", "100% cotton", "Colorful fringed edges", "Artwork or Photo variants"],
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
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779819318",
        altText: "Woven Blanket product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/6961932024382464180_2048.jpg?v=1779819328",
        altText: "Woven Blanket product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3198947950187575422_2048.jpg?v=1779819344",
        altText: "Woven Blanket product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5348081534972767681_2048.jpg?v=1779819355",
        altText: "Woven Blanket product photo 4",
      },
    ],
    reviewScope: "Reviews should refer to the woven blanket product base unless they mention this exact Auralis Design artwork.",
  },
  {
    title: "Zeus Journal Matte",

    price: "$18.99",
    vendor: "Auralis Design",
    productType: "Journals & Notebooks",
    variantSummary: "Journal",
    category: "Journals & Notebooks",
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
      { label: "Product type", value: "Journals & Notebooks" },
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

    price: "$18.99",
    vendor: "Auralis Design",
    productType: "Journals & Notebooks",
    variantSummary: "One Size",
    category: "Journals & Notebooks",
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
      { label: "Product type", value: "Journals & Notebooks" },
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
    title: "Sun of Life Wall Tapestry",

    price: "$28.99",
    vendor: "Auralis Design",
    productType: "Wall Decor",
    variantSummary: '26" x 36"',
    category: "Wall Decor",
    slug: "sun-of-life-wall-tapestry",
    shortDescription: "A lightweight Sun of Life wall tapestry for rooms, studios, dorms, and creative backdrops.",
    detailDescription:
      "The Sun of Life Wall Tapestry turns the artwork into a lightweight 26\" x 36\" wall piece for bedrooms, studios, dorm rooms, creative corners, and photo backdrops. The 100% polyester fabric keeps it easy to hang, move, fold, and store, while hemmed edges help the tapestry feel finished for everyday room styling.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry"),
    altText: "Sun of Life Wall Tapestry",
    highlights: ['26" x 36" size', "100% polyester", "Hemmed edges", "Lightweight wall decor"],
    specs: [
      { label: "Product", value: "Wall tapestry" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Wall Decor" },
      { label: "Size", value: '26" x 36"' },
      { label: "Material", value: "100% polyester" },
      { label: "Finish", value: "Hemmed edges" },
      { label: "Use", value: "Indoor wall decor, creative backdrop, or room accent" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
        altText: "Sun of Life Wall Tapestry product photo 1",
      },
    ],
    reviewScope:
      "Reviews should refer to the wall tapestry product base unless they mention this exact Sun of Life artwork.",
  },
  {
    title: "Auralis Digital Trucker Caps",

    price: "$21.37",
    vendor: "Auralis Design",
    productType: "Hats",
    variantSummary: "Black / One size",
    category: "Hats",
    slug: "auralis-digital-trucker-caps",
    shortDescription: "A black one-size trucker cap with Auralis Digital styling and a breathable mesh back.",
    detailDescription:
      "The Auralis Digital Trucker Cap is a lightweight one-size hat with a 100% polyester foam front, 100% nylon mesh back, and adjustable plastic snap closure. It is built for everyday casual wear, local brand support, product drops, warm-weather outfits, and simple gift ideas. The published Shopify variant is Black / One size.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10582133132536755704_2048.jpg?v=1778794928",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/auralis-digital-trucker-caps"),
    altText: "Auralis Digital Trucker Caps",
    highlights: ["Black / One size", "Adjustable snap closure", "Foam front", "Mesh back"],
    specs: [
      { label: "Product", value: "Trucker cap" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Hats" },
      { label: "Variant", value: "Black / One size" },
      { label: "Fit", value: 'One size fits most, about 22.8" / 58 cm' },
      { label: "Front", value: "100% polyester foam front" },
      { label: "Back", value: "100% nylon mesh weave back" },
      { label: "Closure", value: "Adjustable plastic snap closure" },
      { label: "Note", value: "Creases may straighten naturally after unpackaging and wear" },
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
      "Reviews should refer to the trucker cap product base unless they mention this exact Auralis Digital cap design.",
  },
  {
    title: "Snapback Trucker Cap with Patch (Embroidery)",

    price: "$33.28",
    vendor: "Auralis Design",
    productType: "Hats",
    variantSummary: "Circle / One size / Black / White patch",
    category: "Hats",
    slug: "snapback-trucker-cap-with-patch-embroidery",
    shortDescription: "A structured snapback trucker cap with an embroidered patch and classic mesh-back fit.",
    detailDescription:
      "The Snapback Trucker Cap with Patch (Embroidery) adds a structured, mid-profile hat option to the Auralis catalog. It uses a cotton/poly front and visor, polyester mesh back, cotton sweatband, pre-curved visor, and adjustable plastic snap closure. The active Shopify variant is Circle / One size / Black / White patch.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12429268837997228989_2048.jpg?v=1778799387",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery"),
    altText: "Snapback Trucker Cap with Patch Embroidery",
    highlights: ["One size", "Embroidered patch", "Adjustable snap closure", "Mesh back"],
    specs: [
      { label: "Product", value: "Snapback trucker cap" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Hats" },
      { label: "Variant", value: "Circle / One size / Black / White patch" },
      { label: "Front and visor", value: "60% cotton, 40% polyester" },
      { label: "Back", value: "100% polyester mesh" },
      { label: "Sweatband", value: "100% cotton" },
      { label: "Closure", value: "Adjustable plastic snap closure" },
      { label: "Patch", value: "White patch with black outline" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12429268837997228989_2048.jpg?v=1778799387",
        altText: "Snapback Trucker Cap with Patch Embroidery product photo 1",
      },
    ],
    reviewScope:
      "Reviews should refer to the snapback trucker cap product base unless they mention this exact embroidered patch design.",
  },
  {
    title: "Oval Necklace",

    price: "$22.07",
    vendor: "Auralis Design",
    productType: "Jewelry",
    variantSummary: "One Size / Silver",
    category: "Jewelry & Accessories",
    slug: "oval-necklace",
    shortDescription: "A silver oval pendant necklace with a printed aluminum surface for wearable Auralis styling.",
    detailDescription:
      "The Oval Necklace is a small wearable accessory with a silver zinc alloy pendant and necklace chain. The ellipse-shaped pendant uses a white aluminum print surface, making it a simple giftable piece for everyday outfits, personal styling, and small Auralis Design accessories. The active Shopify variant is One Size / Silver.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1778799083",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/oval-necklace",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/oval-necklace"),
    altText: "Oval Necklace",
    highlights: ["One Size / Silver", "Ellipse pendant", "Zinc alloy chain", "White aluminum print surface"],
    specs: [
      { label: "Product", value: "Oval necklace" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Jewelry" },
      { label: "Variant", value: "One Size / Silver" },
      { label: "Pendant", value: "Ellipse-shaped pendant" },
      { label: "Material", value: "Zinc alloy pendant and necklace chain" },
      { label: "Print surface", value: "White aluminum print surface" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1778799083",
        altText: "Oval Necklace product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/12080478687373963269_2048.jpg?v=1778799085",
        altText: "Oval Necklace product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10581411034302332643_2048.jpg?v=1778799087",
        altText: "Oval Necklace product photo 3",
      },
      {
        label: "Photo 4",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9119972945663593159_2048.jpg?v=1778799089",
        altText: "Oval Necklace product photo 4",
      },
    ],
    reviewScope:
      "Reviews should refer to the oval necklace product base unless they mention this exact Auralis Design necklace artwork.",
  },
  {
    title: "Built Before Sunrise Quarter-Zip",

    price: "$71.57",
    vendor: "Auralis Design",
    productType: "Apparel",
    variantSummary: "XS-4XL / White",
    category: "Apparel",
    slug: "built-before-sunrise-mens-sport-wick-stretch-quarter-zip-pullover-embroidery",
    shortDescription: "A white embroidered quarter-zip for early mornings, cool starts, and work-ready casual layering.",
    detailDescription:
      "The Built Before Sunrise Quarter-Zip is a premium white embroidered pullover built for early mornings, cool starts, and operators who are already working before sunrise. It is available in XS through 4XL, with larger sizes priced higher in Shopify.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2822150292153943244_2048.jpg?v=1779226283",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/built-before-sunrise-mens-sport-wick%C2%AE-stretch-quarter-zip-pullover-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/built-before-sunrise-mens-sport-wick%C2%AE-stretch-quarter-zip-pullover-embroidery"),
    altText: "Built Before Sunrise Quarter-Zip",
    highlights: ["XS-4XL sizing", "White colorway", "Embroidery", "Quarter-zip pullover"],
    specs: [
      { label: "Product", value: "Quarter-zip pullover" },
      { label: "Brand", value: "Auralis Design" },
      { label: "Product type", value: "Apparel" },
      { label: "Sizes", value: "XS, S, M, L, XL, 2XL, 3XL, 4XL" },
      { label: "Color", value: "White" },
      { label: "Decoration", value: "Embroidery" },
      { label: "Price note", value: "XS-XL start at $71.57; larger sizes cost more in Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
    ],
    photos: [
      {
        label: "Photo 1",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2822150292153943244_2048.jpg?v=1779226283",
        altText: "Built Before Sunrise Quarter-Zip product photo 1",
      },
      {
        label: "Photo 2",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10816511292133222572_2048.jpg?v=1779226291",
        altText: "Built Before Sunrise Quarter-Zip product photo 2",
      },
      {
        label: "Photo 3",
        imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/15701714723653121171_2048.jpg?v=1779226292",
        altText: "Built Before Sunrise Quarter-Zip product photo 3",
      },
    ],
    reviewScope:
      "Reviews should refer to the quarter-zip pullover product base unless they mention this exact Built Before Sunrise embroidery.",
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
