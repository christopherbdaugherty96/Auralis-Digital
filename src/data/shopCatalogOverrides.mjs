/**
 * Manual curation layer for the generated shop catalog.
 *
 * `src/data/shopCatalog.ts` is AUTO-GENERATED from live Shopify data by
 * `npm run generate:catalog`. Everything Shopify can't provide — curated
 * descriptions, category corrections, website exclusions, FAQs — lives here
 * and is merged in by the generator. Edit this file, then regenerate.
 *
 * Keys in `productOverrides` are Shopify product handles. Any ShopProduct
 * field can be overridden; `extraSpecs` rows are appended to the derived
 * spec table instead of replacing it.
 */

// Products that are live on Shopify but should NOT appear on the website.
// Owner decision pending: "Fuck society Heavy Blend™ Hooded Sweatshirt" is
// excluded by default until the owner confirms it belongs on the site.
export const excludedHandles = [
  "fuck-society-heavy-blend™-hooded-sweatshirt",
];

// Brand shown on the website; Shopify's raw vendor (e.g. "Printify") is kept
// separately in shopifyVendor.
export const displayVendor = "Lucid Creations";

export const productOverrides = {
  "custom-dog-polyester-square-pillow": {
    shortDescription: "An indoor square pillow with double-sided print, a concealed zipper, and a plush insert.",
    detailDescription:
      "Room accents shouldn't be underrated. These indoor pillows serve as statement pieces, creating a personalized environment.\n\n.: 100% Polyester cover\n.: 100% Polyester insert\n.: Double sided print\n.: Concealed zipper\n.: Inserts are 2–3 inches longer than the covers for extra volume when assembled",
  },
  "geometric-dad-cap": {
    shortDescription: "A classic unstructured dad cap with a low-profile fit and adjustable buckle closure.",
    detailDescription:
      "A timeless accessory crafted for both style and comfort.\n\n.: 100% cotton (Green Camo is 65% polyester, 35% cotton)\n.: Closure: self-fabric hideaway strap with antique brass buckle and grommet\n.: Sewn-in label\n.: Brand sticker on the visor",
  },
  "trippy-hippy-vintage-corduroy-cap-embroidery": {
    shortDescription: "A vintage-inspired corduroy cap with embroidered eyelets and an adjustable strap buckle.",
    detailDescription:
      "The Vintage Corduroy Cap combines retro charm with modern comfort.\n\n.: 100% cotton corduroy\n.: Unstructured, 6-panel, low-profile crown\n.: Cotton twill sweatband and taping\n.: Adjustable strap with a gold-colored metal buckle",
  },
  "tripsitter-bucket-hat-embroidery": {
    shortDescription: "A cotton twill bucket hat with sewn eyelets for breathability and three color options.",
    detailDescription:
      "The embroidered bucket hat blends practicality, comfort, and style.\n\n.: 100% cotton twill\n.: 3 3/4\" (9.52 cm) crown\n.: 2 1/4\" (5.71 cm) brim\n.: Sewn eyelets for breathability\n.: One size fits most",
  },
  "zeus-journal-matte": {
    shortDescription: "A matte hardcover journal with a full wraparound print and 150 lined pages.",
    detailDescription:
      "A sturdy matte hardcover journal designed for everyday writing.\n\n.: Full wraparound print\n.: 150 lined pages (75 sheets)\n.: Matte finish\n.: Casewrap binding\n.: Note: a 0.5\" x 0.5\" production barcode is visible on the back cover",
  },
  "zeus-sherpa-blanket": {
    shortDescription: "A super-soft sherpa blanket with a printed mink front and warm tan sherpa backing.",
    detailDescription:
      "The Zeus Sherpa Blanket pairs mythic sacred-geometry artwork with a soft printed mink front and tan sherpa backing. It is a warm statement throw for couches, beds, reading corners, and rooms that need a bolder symbolic accent.\n\n.: 100% polyester printed mink with ultra-soft tan sherpa backing\n.: One-sided print",
  },
  "zeus-woven-blanket": {
    shortDescription: "A 100% cotton woven blanket with colorful fringed edges and Zeus artwork.",
    detailDescription:
      "A cozy throw-sized woven blanket woven out of 100% cotton yarn with a colorful fringe edge.\n\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Note: mockups do not fully showcase the final product",
  },
  "goddess-tapestry": {
    shortDescription: "A bold wall tapestry with goddess-inspired psychedelic artwork and hemmed edges.",
    detailDescription:
      "A goddess-inspired wall tapestry built around bold psychedelic movement, saturated color, and a strong central figure. It works as a statement backdrop for bedrooms, studios, meditation corners, or creative spaces that need more visual energy.\n\n.: 100% Polyester\n.: Hemmed edges for durability\n.: Lightweight and versatile\n.: Multiple sizes available",
  },
  "inner-presence-tapestry": {
    shortDescription: "An introspective wall tapestry with psychedelic visual flow and hemmed edges.",
    detailDescription:
      "Inner Presence is a more reflective tapestry design, made for rooms where the artwork should feel meditative without disappearing into the background. The piece brings flowing psychedelic texture to walls, altars, studios, and quiet creative spaces.\n\n.: 100% Polyester\n.: Hemmed edges for durability\n.: Lightweight and versatile\n.: Multiple sizes available",
  },
  "math-equations-tapestry": {
    shortDescription: "A wall tapestry featuring math equation artwork with hemmed edges.",
    detailDescription:
      "A wall tapestry for people who like their decor a little cerebral. Math equation artwork gives the piece a study-room, studio, or science-minded backdrop feel while keeping the lightweight tapestry format easy to hang and move.\n\n.: 100% Polyester\n.: Hemmed edges for durability\n.: Lightweight and versatile\n.: Multiple sizes available",
  },
  "micro-or-macro-nublend®-crewneck-sweatshirt": {
    shortDescription: "A pre-shrunk NuBlend fleece crewneck with pill-resistant fabric and a relaxed fit.",
    detailDescription:
      "The original Micro or Macro crewneck keeps the question front and center on a dependable NuBlend fleece base. It is a clean layer for cooler festival nights, casual wear, and anyone who likes subtle psychedelic humor in the rotation.\n\n.: NuBlend® fleece — pre-shrunk, pill-resistant\n.: 50% Cotton, 50% Polyester\n.: Double-needle stitching\n.: Rib cuffs and waistband",
  },
  "micro-or-macro-t-shirt": {
    shortDescription: "A performance polyester tee with moisture-wicking fabric and a relaxed unisex cut.",
    detailDescription:
      "A 100% polyester interlock performance tee perfect for all outdoor activities.\n\n.: Advanced moisture-wicking fabric\n.: Set-in sleeves, hemmed collar\n.: Unisex sizing",
  },
  "micro-or-macro-v2-nublend®-crewneck-sweatshirt": {
    shortDescription: "A second colorway of the NuBlend fleece crewneck with pill-resistant fabric.",
    detailDescription:
      "Micro or Macro V2 keeps the same cozy NuBlend crewneck base while shifting the artwork into a second visual lane. It is made for easy layering, colder outdoor sets, and everyday fits that still want a little festival energy.\n\n.: NuBlend® fleece — pre-shrunk, pill-resistant\n.: 50% Cotton, 50% Polyester\n.: Double-needle stitching\n.: Rib cuffs and waistband",
  },
  "psychedelic-ying-yang-tan-sherpa-blanket": {
    shortDescription: "A super-soft sherpa blanket with psychedelic Ying Yang artwork and tan sherpa backing.",
    detailDescription:
      "A soft sherpa blanket with psychedelic Ying Yang artwork on the printed mink front and a warm tan sherpa backing. The contrast-heavy design makes it a strong couch, bed, or lounge-piece accent while staying practical for everyday comfort.\n\n.: 100% polyester printed mink with ultra-soft tan sherpa backing\n.: One-sided print",
  },
  "psychedelic-ying-yang-heavy-cotton-tee": {
    shortDescription: "A premium heavy cotton tee with immersive Ying Yang artwork inspired by sacred geometry.",
    detailDescription:
      "Immersive symbolic artwork inspired by sacred geometry, psychedelic visuals, and cosmic design.\n\n.: 100% cotton (Ash: 99/1 cotton/poly, Sport Grey: 90/10 cotton/poly)\n.: Preshrunk jersey knit\n.: Seamless double-needle collar\n.: Taped neck and shoulders",
  },
  "psychedelic-ying-yang-woven-blanket": {
    shortDescription: "A woven statement blanket featuring psychedelic Ying Yang artwork and symbolic contrast.",
    detailDescription:
      "A woven blanket with detailed artwork and colorful fringed edges.\n\n.: 100% Cotton woven threads\n.: Colorful fringed edges\n.: Soft decorative heavyweight feel",
  },
  "secret-owl-hooded-sherpa-fleece-blanket": {
    shortDescription: "A hooded sherpa fleece blanket with all-over owl artwork and supremely soft polyester.",
    detailDescription:
      "Secret Owl turns the hooded sherpa blanket into a wearable layer of owl artwork, soft fleece, and cream sherpa backing. It is built for couch nights, cold mornings, camp comfort, and anyone who wants blanket-level warmth without staying pinned in place.\n\n.: 100% supremely soft polyester\n.: Hooded design for extra warmth\n.: All-over print\n.: Cream sherpa backing",
  },
  "sid-girl-midweight-softstyle-fleece-hoodie": {
    shortDescription: "A durable midweight hoodie with an 80/20 cotton-poly blend and lined hood.",
    detailDescription:
      "The Gildan SF500 is all about durability with a soft touch.\n\n.: 80/20 cotton-poly blend\n.: 100% cotton surface for printing\n.: Lined hood\n.: Double-needle stitching at shoulder, armhole, neck, and waistband",
  },
  "sun-of-life-hooded-sherpa-fleece-blanket": {
    shortDescription: "A hooded sherpa fleece blanket with Sun of Life artwork and supremely soft polyester.",
    detailDescription:
      "Sun of Life brings sacred-geometry artwork to a hooded sherpa fleece blanket made for full-body warmth. The oversized wearable format works for lounging, travel days, outdoor hangs, and cold-weather festival comfort.\n\n.: 100% supremely soft polyester\n.: Hooded design for extra warmth\n.: All-over print\n.: Cream sherpa backing",
  },
  "spiral-notebook-ruled-line": {
    shortDescription: "A spiral-bound notebook with ruled line paper and a durable printed cover.",
    detailDescription:
      "A 118-page spiral notebook with ruled line paper for everyday writing.\n\n.: 118 ruled lined pages (59 sheets)\n.: Durable printed cover\n.: Spiral binding\n.: Made in USA\n.: Size: 5.5\" × 8.5\"",
  },
  "oval-necklace": {
    shortDescription: "A symbolic pendant necklace inspired by sacred geometry and cosmic visual themes.",
    detailDescription:
      "A lightweight wearable pendant with glossy symbolic artwork.\n\n.: Glossy printed pendant\n.: Silver-tone chain\n.: Lightweight design\n.: Minimalist wearable art",
  },
  "sun-of-life-wall-tapestry": {
    shortDescription: "A bold symbolic tapestry inspired by sacred geometry, cosmic alignment, and immersive visual design.",
    detailDescription:
      "A lightweight polyester wall tapestry with high-resolution edge-to-edge printing.\n\n.: 100% Polyester\n.: Hemmed edges for durability\n.: Lightweight and versatile\n.: Easy to hang, move, or fold",
  },
  "flower-of-the-sun-woven-blanket": {
    shortDescription: "A 100% cotton woven blanket with Sun of Life artwork and colorful fringed edges.",
    detailDescription:
      "A cozy throw-sized woven blanket with colorful fringed edges.\n\n.: 100% Cotton\n.: Woven threads\n.: Colorful fringed edges\n.: Soft heavyweight feel",
  },
  "treehugger-hoodie": {
    shortDescription: "An oversized unisex hoodie with Treehugger artwork and side seams for shape retention.",
    detailDescription:
      "A classic wardrobe staple with your own art.\n\n.: Unisex design with side seams for shape retention\n.: 70% Cotton, 30% Polyester (Light Oxford: 75/21/4 cotton/poly/viscose)\n.: 330 GSM heavyweight fabric\n.: Oversized fit",
  },
  "trippy-hippy-tee": {
    shortDescription: "A heavy cotton tee with Trippy Hippy artwork and a dependable everyday fit.",
    detailDescription:
      "The Gildan 5000 heavy cotton tee is a dependable classic for everyday wear.\n\n.: 100% cotton, tightly knit 5.3 oz/yd² fabric\n.: Preshrunk jersey knit\n.: Seamless double-needle collar\n.: Taped neck and shoulders",
  },
  "orivex-oversized-acid-wash-tee": {
    shortDescription: "A premium oversized acid wash tee with bold commissioned Orivex artwork and a heavyweight streetwear feel.",
    detailDescription:
      "The Orivex Oversized Acid Wash Tee blends a premium heavyweight feel with a bold commissioned design. The washed black finish gives the shirt a modern streetwear edge, while the Orivex artwork keeps the look clean, sharp, and luxury-inspired.\n\nThis piece is designed to feel more elevated than a standard graphic tee. The oversized fit, acid wash texture, and high-contrast artwork create a statement product with a premium custom appearance.\n\n.: Exclusive commissioned Orivex artwork\n.: Oversized streetwear fit\n.: Acid wash finish for a premium worn-in look\n.: Heavyweight cotton feel\n.: Available in XS through 5XL",
    extraSpecs: [{ label: "Commission", value: "Custom design for Orivex brand" }],
  },
};

// Site FAQ copy shown alongside the catalog; preserved verbatim in the
// generated file's `shopFaqs` export.
export const shopFaqs = [
  {
    q: "How does checkout work?",
    a: "Checkout opens securely through Shopify when you use a clearly labeled buy or view button.",
  },
  {
    q: "Who fulfills the products?",
    a: "Handmade pieces are crafted and shipped directly by the artist. Print-on-demand products are produced and fulfilled after the Shopify order is placed.",
  },
  {
    q: "Is payment collected on Auralis Digital?",
    a: "No. Auralis Digital displays products and product details. Shopify handles payment, checkout, and order records.",
  },
  {
    q: "How fast will items ship?",
    a: "Most items are made to order: production usually takes 2–5 business days, then shipping takes 3–8 business days. Tracking is emailed as soon as your order ships.",
  },
];
