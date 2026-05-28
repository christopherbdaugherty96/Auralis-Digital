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
    title: "Psychedelic Ying yang Heavy Cotton Tee",
    price: "From $24.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "T-Shirt",
    variantSummary: "White, Black / S-5XL",
    category: "Apparel",
    slug: "psychedelic-ying-yang-heavy-cotton-tee",
    shortDescription: "A psychedelic yin-yang tee for everyday wear, pairing bold symbolic artwork with an easy unisex cotton fit.",
    detailDescription: "The Gildan 5000 heavy cotton tee is a dependable classic made for everyday wear and custom printing. Its 100% cotton fabric is tightly knit to give designs sharper detail and long-lasting color. The seamless body eliminates side seams for a smoother fit, while reinforced shoulders keep the shirt in shape through repeated washes. Durable, comfortable, and print-friendly, the Gildan 5000 is a trusted staple for personalized apparel.\nDisclaimer:\n- Due to the fabric properties, the White color variant may appear off-white rather than bright white.\n- Sleeve prints and neck labels are produced using DTF (Direct-to-Film) printing technology. This applies only to products fulfilled by the print providers OPT OnDemand and Shirt Monkey among the providers offering this item.\n.: The Gildan 5000 is made with medium fabric (5.3 oz/yd² / 180 g/m²) consisting of 100% cotton, offering year-round comfort with lasting durability.\n.: The classic fit of this shirt ensures a comfy, relaxed wear while the crew neckline adds that neat, timeless look that can blend into any occasion, casual or semi-formal.\n.: The tear-away label means a scratch-free experience with no irritation or discomfort whatsoever.\n.: Made using 100% US cotton that is ethically grown and harvested. Gildan is also a proud member of the US Cotton Trust Protocol ensuring ethical and sustainable means of production.\n.: This blank tee is certified by OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie).",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5464731681615404100_2048.jpg?v=1779839551",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-heavy-cotton-tee",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-ying-yang-heavy-cotton-tee"),
    altText: "Psychedelic Ying yang Heavy Cotton Tee",
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
        "altText": "Psychedelic Ying yang Heavy Cotton Tee product photo 1"
      },
      {
        "label": "Photo 2",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11867246045127936010_2048.jpg?v=1779839550",
        "altText": "Psychedelic Ying yang Heavy Cotton Tee product photo 2"
      },
      {
        "label": "Photo 3",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11819048640334279979_2048.jpg?v=1779839554",
        "altText": "Psychedelic Ying yang Heavy Cotton Tee product photo 3"
      }
    ],
    reviewScope: "Reviews should refer to the t-shirt product base unless they mention this exact Psychedelic Ying yang Heavy Cotton Tee design.",
  },
  {
    title: "Psychedelic Ying yang Woven Blanket",
    price: "$48.99",
    vendor: "Auralis Design",
    shopifyVendor: "Auralis Design",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "psychedelic-ying-yang-woven-blanket",
    shortDescription: "A woven cotton throw that turns the psychedelic yin-yang artwork into a textured home piece with fringed edges.",
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13253513801766639745_2048.jpg?v=1779839265",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-ying-yang-woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-ying-yang-woven-blanket"),
    altText: "Psychedelic Ying yang Woven Blanket",
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
        "altText": "Psychedelic Ying yang Woven Blanket product photo 1"
      },
      {
        "label": "Photo 2",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14685688208648080050_2048.jpg?v=1779839369",
        "altText": "Psychedelic Ying yang Woven Blanket product photo 2"
      },
      {
        "label": "Photo 3",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/11532357835120184043_2048.jpg?v=1779839426",
        "altText": "Psychedelic Ying yang Woven Blanket product photo 3"
      }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Psychedelic Ying yang Woven Blanket design.",
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
    title: "Psychedelic Midweight Softstyle Fleece Hoodie",
    price: "$49.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Hoodie",
    variantSummary: "S-5XL / White, Black",
    category: "Apparel",
    slug: "psychedelic-midweight-softstyle-fleece-hoodie",
    shortDescription: "A midweight fleece hoodie carrying the psychedelic balance artwork in a clean white or black everyday layer.",
    detailDescription: "The Gildan SF500 is all about durability with a soft touch. It’s made with an 80/20 cotton-poly blend and lined hood, plus a 100% cotton surface for sharp prints. The dropped shoulder adds a modern fit. This hoodie is WRAP-certified and OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie) approved – because comfort shouldn't require compromise.\nDisclaimer:\n- Due to the fabric properties, the White color variant may appear off-white rather than bright white.\n.: Material: 80% ring-spun cotton, 20% polyester with 100% cotton face (fiber content varies for different colors)\n.: Medium-heavy fabric (8.4 oz /yd² (284.8 g/m²))\n.: Classic fit\n.: Tear-away label\n.: Sustainable manufacturing: This product meets the OEKO-TEX® STANDARD 100 (Certificate No. 168252, OETI - Institut fuer Oekologie)\n.: Socially conscious manufacturing: This product was made by a mill partnered with Fair Labor Association and was made in a facility that is WRAP certified",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/8886076135680667713_2048.jpg?v=1779838980",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/psychedelic-midweight-softstyle-fleece-hoodie",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/psychedelic-midweight-softstyle-fleece-hoodie"),
    altText: "Psychedelic Midweight Softstyle Fleece Hoodie",
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
        "altText": "Psychedelic Midweight Softstyle Fleece Hoodie product photo 1"
      },
      {
        "label": "Photo 2",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5802785510145578650_2048.jpg?v=1779838963",
        "altText": "Psychedelic Midweight Softstyle Fleece Hoodie product photo 2"
      },
      {
        "label": "Photo 3",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/13018936863533231854_2048.jpg?v=1779838992",
        "altText": "Psychedelic Midweight Softstyle Fleece Hoodie product photo 3"
      }
    ],
    reviewScope: "Reviews should refer to the hoodie product base unless they mention this exact Psychedelic Midweight Softstyle Fleece Hoodie design.",
  },
  {
    title: "The pixel oven (commissioned design) Woven Blanket",
    price: "$48.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "Artwork / 52'' × 37''",
    category: "Blankets",
    slug: "woven-blanket",
    shortDescription: "A commissioned Pixel Oven woven blanket that brings custom artwork into a tactile cotton throw format.",
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/woven-blanket",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/woven-blanket"),
    altText: "The pixel oven (commissioned design) Woven Blanket",
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
        "altText": "The pixel oven (commissioned design) Woven Blanket product photo 1"
      },
      {
        "label": "Photo 2",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/3198947950187575422_2048.jpg?v=1779839432",
        "altText": "The pixel oven (commissioned design) Woven Blanket product photo 2"
      },
      {
        "label": "Photo 3",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/5348081534972767681_2048.jpg?v=1779839432",
        "altText": "The pixel oven (commissioned design) Woven Blanket product photo 3"
      }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact The pixel oven (commissioned design) Woven Blanket design.",
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
    detailDescription: "The Snapback Trucker Cap is a staple in custom headwear, designed with a six-panel, mid-profile build that combines structure with an easy fit. Its pre-curved visor with a matching undervisor keeps its shape while maintaining the classic trucker style.\n.: Front and visor: 60% cotton, 40% polyester\n.: Back: 100% polyester mesh\n.: Sweatband: 100% cotton\n.: One size\n.: Adjustable plastic snap closure\n.: Choose between 2 patch colors; Patch outline color is black\n.: Brand sticker on the visor",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/18158916977108050720_2048.jpg?v=1779835982",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/snapback-trucker-cap-with-patch-embroidery"),
    altText: "Sacred geometry Snapback Trucker Cap with Patch (Embroidery)",
    highlights: [
      "Circle / One size / Black / White patch",
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
    title: "Sun of life Necklace",
    price: "$23.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Accessories",
    variantSummary: "One Size / Silver",
    category: "Jewelry & Accessories",
    slug: "oval-necklace",
    shortDescription: "A Sun of Life pendant necklace with a bright printed ellipse charm on a simple silver-tone chain.",
    detailDescription: "Add a custom touch to what you're wearing or sell unique pieces to DIY enthusiasts with this personalized necklace. The personalized pendant and its chain are made with a robust zinc alloy for dazzling looks that are long-lasting. The print panel is made with aluminum while the pendant itself comes in a unique shape of an ellipse.\n.: Zinc alloy pendant and necklace chain\n.: Ellipse-shaped pendant\n.: White aluminum print surface",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10249708691631938172_2048.jpg?v=1779835889",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/oval-necklace",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/oval-necklace"),
    altText: "Sun of life Necklace",
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
        "altText": "Sun of life Necklace product photo 1"
      },
      {
        "label": "Photo 2",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/10581411034302332643_2048.jpg?v=1779835894",
        "altText": "Sun of life Necklace product photo 2"
      },
      {
        "label": "Photo 3",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/9119972945663593159_2048.jpg?v=1779835895",
        "altText": "Sun of life Necklace product photo 3"
      }
    ],
    reviewScope: "Reviews should refer to the accessories product base unless they mention this exact Sun of life Necklace design.",
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
    title: "Sun of life Wall Tapestry",
    price: "$28.99",
    vendor: "Auralis Design",
    shopifyVendor: "Printify",
    productType: "Home Decor",
    variantSummary: "26\" × 36\"",
    category: "Wall Decor",
    slug: "sun-of-life-wall-tapestry",
    shortDescription: "A lightweight Sun of Life wall tapestry for adding symbolic artwork to a room, studio, or creative corner.",
    detailDescription: "A custom wall tapestry is a surefire way to uplift any room’s aesthetics with a personal touch. This 100% Polyester wall tapestry comes with hemmed edges for extra durability to ensure years' worth of decorating bliss. The advanced tapestry printing techniques guarantee crisp detail even for the craziest of designs, in any of our multiple size choices.\n.: 100% Polyester\n.: Lightweight and versatile, easy to hang, move, or fold for storage\n.: Multiple sizes\n.: Blanks sourced from China",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/14376604022080907068_2048.jpg?v=1778785066",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry",
    shopifyTrackingUrl: withShopifyTracking("https://auralis-design.myshopify.com/products/sun-of-life-wall-tapestry"),
    altText: "Sun of life Wall Tapestry",
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
        "altText": "Sun of life Wall Tapestry product photo 1"
      }
    ],
    reviewScope: "Reviews should refer to the home decor product base unless they mention this exact Sun of life Wall Tapestry design.",
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
      "Paper Products",
      "3 product photos"
    ],
    specs: [
      {
        "label": "Product",
        "value": "Paper Products"
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
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
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
    detailDescription: "Whether you choose to feature a photo or a piece of graphic art, these cozy blankets elevate images into lasting, quality heirlooms. Put them up on the wall for a cozy display or use it to cuddle up on your couch. These cozy throw-sized woven blankets are woven out of 100% cotton yarn with a colorful edge fringe that extends the image.\nPlease note: This product has some limitations and specifics you should know. Before creating this product, please visit the link here.\n.: Material: 100% Cotton\n.: Colorful fringed edges\n.: Woven threads\n.: Available in 3 sizes\n.: Choose between Artwork and Photo variants to best suit your design specifics\n.: Please note: Be aware that mockups do not fully showcase the final product",
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
      "Paper Products",
      "3 product photos"
    ],
    specs: [
      {
        "label": "Product",
        "value": "Paper Products"
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
