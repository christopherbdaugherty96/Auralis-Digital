import { useEffect, useMemo, useRef, useCallback, useState, type ReactNode, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Instagram,
  Leaf,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  Paintbrush,
  SearchCheck,
  Scissors,
  Sparkles,
  Star,
  Store,
  UtensilsCrossed,
  Wine,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  shopFaqs,
  shopProducts,
  type ShopProduct,
} from "@/data/shopCatalog";
import { cn } from "@/lib/utils";

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "auralisdigitaleco@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Auralis Inquiry")}`;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const HOMEPAGE_FEATURED_SLUGS = [
  "psychedelic-ying-yang-heavy-cotton-tee",
  "psychedelic-midweight-softstyle-fleece-hoodie",
  "sun-of-life-wall-tapestry",
  "goddess-tapestry",
  "treehugger-hoodie",
  "trippy-hippy-tee",
  "oval-necklace",
];

const CUSTOM_DESIGN_PREVIEW = {
  imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
  altText: "Custom Dog pillow — example of a personalized design",
};
const CUSTOM_DESIGN_OFFERING_PREVIEW = {
  imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
  altText: "Pixel Oven woven blanket — commissioned custom design",
};

const customRequestTypes = [
  { category: "Wire Wraps", icon: "sparkles", items: [
    "Hand-wrapped pieces using stones, crystals, and natural textures",
    "Symbolic and sacred geometry designs",
    "One-of-one styles — no two wraps are the same",
    "Pendants, necklaces, and wearable art",
  ]},
  { category: "3D Print Requests", icon: "hammer", items: [
    "Functional prints and one-off items",
    "Prototypes and product concepts",
    "Business signage and display pieces",
    "Branded goods and promotional items",
  ]},
  { category: "Gift Bundles", icon: "star", items: [
    "Curated art and accessory bundles",
    "Personalized gift sets for any occasion",
    "Festival care packages",
  ]},
];

const customProcess = [
  "Send the idea",
  "Auralis reviews scope",
  "You get a quote or next step",
  "Design direction is confirmed",
  "Final design or product preview is prepared",
];

const services = [
  { title: "Shopify store setup", copy: "Full store build — theme, settings, checkout, payment, shipping zones, and domain connection.", icon: Store },
  { title: "Product catalog structure", copy: "Product listings, variant setup, pricing, photos, descriptions, and SEO-friendly handles.", icon: Paintbrush },
  { title: "Collections and navigation", copy: "Organized collections, homepage sections, menus, and filtered browsing that makes sense for your catalog.", icon: SearchCheck },
  { title: "Printify / POD integration", copy: "Connect print-on-demand fulfillment so products go from order to production automatically.", icon: Sparkles },
  { title: "Mobile-first storefront", copy: "Layouts optimized for phone shoppers — fast-loading pages, clear product photos, and easy checkout.", icon: MonitorSmartphone },
  { title: "Launch support", copy: "Domain setup, test orders, social links, contact paths, and go-live checklist to make sure everything works.", icon: MessageSquareText },
];

const process = ["Discover", "Structure", "Design", "Review", "Launch"];

const businessLaunchIncludes = [
  "Shopify store setup and configuration",
  "Product catalog and variant setup",
  "Collection and navigation structure",
  "Homepage and product page layout",
  "Printify / POD integration",
  "Domain connection guidance",
  "Checkout, payment, and shipping setup",
  "Mobile-optimized storefront",
  "Social media link integration",
  "Contact and email setup",
  "Go-live checklist and test orders",
];

const businessLaunchClientPaid = [
  "Domain purchase",
  "Shopify plan",
  "Printify product costs",
  "Paid apps or subscriptions",
  "Premium themes",
  "Paid advertising budget",
];


const concepts = [
  { name: "Barbershop", note: "Booking, services, location, and social proof.", icon: Scissors },
  { name: "Restaurant", note: "Menu, hours, directions, and mobile ordering.", icon: UtensilsCrossed },
  { name: "Lawn care", note: "Quote requests, packages, and service areas.", icon: Leaf },
  { name: "Mobile bartending", note: "Event inquiries, packages, and availability.", icon: Wine },
  { name: "Contractor", note: "Service areas, quote forms, and trust signals.", icon: Hammer },
];

const collectionCards = [
  {
    title: "Apparel",
    copy: "Wearable art — tees, hoodies, sweatshirts, and creator merch concepts.",
    href: "/products?category=T-Shirts,Hoodies,Sweatshirts",
    icon: Store,
  },
  {
    title: "Blankets",
    copy: "Soft statement pieces featuring original and custom artwork.",
    href: "/products?category=Blankets",
    icon: Sparkles,
  },
  {
    title: "Wall Art",
    copy: "Tapestries and visual pieces for rooms, studios, and creative spaces.",
    href: "/products?category=Wall Decor",
    icon: Paintbrush,
  },
  {
    title: "Accessories",
    copy: "Hats, journals, necklaces, and smaller products for everyday use.",
    href: "/products?category=Hats,Accessories,Journals %26 Notebooks",
    icon: Store,
  },
  {
    title: "3D Prints",
    copy: "Custom printed items, prototypes, signage, and practical product ideas.",
    href: "/creator-shops",
    icon: Hammer,
  },
];

const creatorShops = [
  {
    title: "Lucid Creations",
    copy: "The Shopify shop by Auralis Digital — psychedelic art, handmade pieces, festival-inspired designs, and select 3D printed goods.",
    href: "/products",
    icon: Sparkles,
  },
  {
    title: "RJ Print",
    copy: "3D printed products, custom manufacturing, prototypes, business signage, and promotional items.",
    href: "/creator-shops",
    icon: Hammer,
  },
  {
    title: "LastStopShop",
    copy: "A future shop lane for curated products, drops, and creative resale ideas.",
    href: "/creator-shops",
    icon: Store,
  },
  {
    title: "Pour Social",
    copy: "Mobile BYOB bar service from the broader creator shop ecosystem.",
    href: "/pour-social",
    icon: Wine,
  },
  {
    title: "Partnered Creators",
    copy: "Creator storefronts and product drops supported by Auralis Digital.",
    href: "/creator-shops",
    icon: Star,
  },
];

const websiteDemos = [
  {
    title: "RJ Print",
    category: "Product Showcase",
    description: "3D-printing shop preview with a browsable product catalog, custom-order concepts, policy pages, and a mobile-first storefront flow.",
    imageUrl: "/assets/demo-thumbnails/rj-print.svg",
    href: "/projects/rj-print/",
  },
  {
    title: "Restaurant",
    category: "Food",
    description: "Diner, coney, takeout, or cafe structure focused on menu visibility, hours, location, and mobile customer action.",
    imageUrl: "/assets/demo-thumbnails/restaurant.svg",
  },
  {
    title: "Patterson's Lawn Care & Snow Removal",
    category: "Client Preview",
    description: "Polished local-service website demo built from confirmed business-card materials, service information, and phone-first customer action.",
    imageUrl: "/assets/demo-thumbnails/lawn-care.svg",
  },
  {
    title: "Lawn Care",
    category: "Outdoor Service",
    description: "Quote-request website for mowing, landscaping, cleanup, service areas, packages, and recurring customer inquiries.",
    imageUrl: "/assets/demo-thumbnails/lawn-care.svg",
  },
  {
    title: "Maintenance",
    category: "Home Repair",
    description: "Handyman and property-maintenance layout built around repairs, service clarity, trust, and job-detail requests.",
    imageUrl: "/assets/demo-thumbnails/handyman.svg",
  },
  {
    title: "Barbershop",
    category: "Personal Care",
    description: "Booking-forward local shop demo for services, location, appointment flow, and phone-first mobile visitors.",
    imageUrl: "/assets/demo-thumbnails/barbershop.svg",
  },
  {
    title: "Salon",
    category: "Personal Care",
    description: "Polished beauty-service demo for service menus, style photos, booking prompts, policies, and client trust.",
    imageUrl: "/assets/demo-thumbnails/salon.svg",
  },
  {
    title: "Painter",
    category: "Trades",
    description: "Residential and commercial quote-driven demo for project photos, before-and-after proof, and estimate requests.",
    imageUrl: "/assets/demo-thumbnails/painter.svg",
  },
  {
    title: "Roofing / Contractor",
    category: "Trades",
    description: "Estimate-focused contractor layout for repairs, exterior services, homeowner trust, and project-detail capture.",
    imageUrl: "/assets/demo-thumbnails/roofing.svg",
  },
  {
    title: "Cleaning Service",
    category: "Home Service",
    description: "Lead-capture demo for residential, commercial, deep-clean, recurring-cleaning, and one-time service requests.",
    imageUrl: "/assets/demo-thumbnails/cleaning.svg",
  },
  {
    title: "Mobile Detailing",
    category: "Auto Service",
    description: "Convenience-focused auto detailing demo for packages, booking, service area, and mobile-first quote flow.",
    imageUrl: "/assets/demo-thumbnails/detailing.svg",
  },
  {
    title: "Photographer",
    category: "Creative",
    description: "Portfolio-focused demo for session inquiries, package clarity, image-forward trust, and visual storytelling.",
    imageUrl: "/assets/demo-thumbnails/photographer.svg",
  },
];

const pricing = [
  {
    label: "For existing stores",
    title: "Store Refresh",
    price: "$250",
    note: "Focused cleanup for Shopify stores originally set up by Auralis Digital.",
    items: ["Catalog cleanup", "Collection reorganization", "Mobile polish"],
    featured: false,
    retainer: false,
  },
  {
    label: "Best start",
    title: "Shopify Store Setup",
    price: "$500+",
    note: "Launch-ready Shopify store with products listed and checkout configured.",
    items: ["Store setup and configuration", "Product catalog structure", "Checkout and fulfillment"],
    featured: true,
    retainer: false,
  },
  {
    label: "Best for scale",
    title: "Full E-commerce Launch",
    price: "$1,000+",
    note: "Complete storefront with collections, Printify integration, SEO, and launch support.",
    items: ["Collections and navigation", "Printify / POD integration", "SEO and go-live checklist"],
    featured: false,
    retainer: false,
  },
  {
    label: "Keep it current",
    title: "Store Care Plan",
    price: "$250/mo",
    note: "Ongoing Shopify store management — product updates, collection adjustments, and priority support.",
    items: ["Product and catalog updates", "Collection maintenance", "Small store changes", "Priority support"],
    featured: false,
    retainer: true,
  },
];

const serviceAreas = [
  { label: "Belleville" },
  { label: "Ypsilanti" },
  { label: "Ann Arbor" },
  { label: "Detroit Metro" },
  { label: "Southeast Michigan" },
];

const faqs = [
  { q: "How fast can a store be set up?", a: "Simple stores move quickly when your products, photos, and brand details are ready." },
  { q: "Do I need product photos?", a: "Photos help, but the first version can launch with supplier images or placeholder visuals." },
  { q: "Can you update an existing Shopify store?", a: "Yes — store refreshes, catalog restructuring, and collection reorganization are available." },
  { q: "What does the care plan include?", a: "Ongoing store maintenance, product updates, collection adjustments, and priority support." },
  { q: "Do I need my own Shopify plan?", a: "Yes — you own and pay for the Shopify subscription. Auralis handles the setup and configuration." },
  { q: "What areas do you serve?", a: "Shopify setup is available remotely. Local support in Southeast Michigan — Belleville, Ypsilanti, Ann Arbor, Detroit Metro." },
];

const proofPoints = [
  { stat: "Mobile-first", detail: "Storefront optimized for phone shoppers — where most customers browse and buy." },
  { stat: "No surprise scope", detail: "Scope and pricing confirmed before work starts." },
  { stat: "You own everything", detail: "Your Shopify store, domain, and data stay yours. No lock-in." },
  { stat: "Built to convert", detail: "Every store is structured to help visitors find products, add to cart, and check out." },
];

const trustItems = [
  "Handmade pieces crafted by the artist",
  "Secure checkout through Shopify",
  "Custom design available",
  "Print-on-demand items made to order",
  "3D printed items fulfilled by RJ Print",
  "Shipping and returns linked in the footer",
];


function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const id = useMemo(() => `reveal-${Math.random().toString(36).slice(2)}`, []);

  useEffect(() => {
    const target = document.querySelector(`[data-reveal-id="${id}"]`);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div data-reveal-id={id} className={cn("reveal-up", visible && "is-visible", className)}>
      {children}
    </div>
  );
}

const pageMeta: Record<AuralisPage, { title: string; description: string; canonicalPath: string }> = {
  home: {
    title: "Auralis Digital — Lucid Creations, Custom Design & Shopify Setup",
    description:
      "Auralis Digital is the creative hub behind the Lucid Creations Shopify shop, RJ Print (3D printed goods), custom design, and Shopify e-commerce setup. Based in Southeast Michigan.",
    canonicalPath: "/",
  },
  shop: {
    title: "Products — Handmade Art, Psychedelic Designs & Festival Accessories | Auralis Digital",
    description:
      "Shop psychedelic apparel, sacred geometry tapestries, woven blankets, hats, hoodies, and festival accessories from Lucid Creations. Checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  "custom-design": {
    title: "Custom Work — Handmade Art, 3D Printing & Gift Bundles | Auralis Digital",
    description:
      "Request custom wire wraps, crystal pendants, resin art, 3D printed products, pet portraits, gift bundles, and personalized designs from Lucid Creations and RJ Print.",
    canonicalPath: "/custom-design",
  },
  collections: {
    title: "Collections | Auralis Digital",
    description:
      "Shop the Lucid Creations Shopify store — wearable art, wall art, accessories, and 3D printed goods by Auralis Digital. Handmade jewelry and resin pieces coming soon.",
    canonicalPath: "/collections",
  },
  "creator-shops": {
    title: "Creator Shops | Auralis Digital",
    description:
      "Explore the Lucid Creations Shopify shop, RJ Print, and partnered creator storefronts under Auralis Digital.",
    canonicalPath: "/creator-shops",
  },
  "web-design": {
    title: "Custom Shopify Store Setup & E-commerce Launch | Auralis Digital",
    description:
      "Custom Shopify store setup, product catalog structure, Printify integration, collection organization, and e-commerce launch support for creators and small brands.",
    canonicalPath: "/web-design",
  },
  websites: {
    title: "Shopify Store & Website Examples | Auralis Digital",
    description: "Browse example store setups and website builds from Auralis Digital. Sample layouts for e-commerce, restaurants, lawn care, barbershops, contractors, and more.",
    canonicalPath: "/websites",
  },
  "pour-social": {
    title: "Pour Social — Mobile BYOB Bar Service | Auralis Digital",
    description:
      "Mobile BYOB bar service for events in Southeast Michigan. Pour Social is coming soon.",
    canonicalPath: "/pour-social",
  },
  "refund-policy": {
    title: "Refund Policy | Auralis Digital",
    description:
      "Refund and support guidance for Auralis Digital product purchases, custom design requests, and Shopify setup services.",
    canonicalPath: "/refund-policy",
  },
  "shipping-policy": {
    title: "Shipping Policy | Auralis Digital",
    description:
      "Shipping and fulfillment guidance for Lucid Creations products purchased through Shopify.",
    canonicalPath: "/shipping-policy",
  },
  "privacy-policy": {
    title: "Privacy Policy | Auralis Digital",
    description:
      "Privacy guidance for Auralis Digital inquiries, product browsing, Shopify checkout, and website contact forms.",
    canonicalPath: "/privacy-policy",
  },
  "terms-of-service": {
    title: "Terms of Service | Auralis Digital",
    description:
      "Terms for Auralis Digital product browsing, Shopify checkout, custom design requests, and Shopify setup inquiries.",
    canonicalPath: "/terms-of-service",
  },
};

const policyPages = {
  "refund-policy": {
    eyebrow: "Refund Policy",
    title: "Refunds and issue support.",
    intro:
      "Auralis Digital displays products and accepts inquiries. Product purchases are completed through Shopify, and many products are produced and fulfilled after purchase.",
    sections: [
      {
        title: "Product orders",
        copy:
          "If something is wrong with a product order, contact Auralis with the product name, order details, photos if relevant, and a short description of the issue. Auralis will review the request and help route the next step through the proper Shopify or fulfillment path.",
      },
      {
        title: "Custom design and website work",
        copy:
          "Custom design and website projects are reviewed before acceptance. Scope, pricing, timeline, revision limits, and payment terms should be confirmed before paid work begins.",
      },
      {
        title: "Handmade items",
        copy:
          "Handmade pieces are one-of-a-kind. If something arrives damaged or not as described, contact Auralis with photos and details so the issue can be reviewed.",
      },
    ],
  },
  "shipping-policy": {
    eyebrow: "Shipping Policy",
    title: "Shipping and fulfillment expectations.",
    intro:
      "Lucid Creations is the Shopify shop by Auralis Digital. Products open through Shopify when a visitor is ready to buy. Production and fulfillment are handled after purchase for made-to-order items.",
    sections: [
      {
        title: "Produced after purchase",
        copy:
          "Many products are made after an order is placed. That means timing can vary by product, destination, production queue, and carrier conditions.",
      },
      {
        title: "Shipping details",
        copy:
          "Final shipping options, shipping price, tax handling, and delivery estimates should be confirmed inside Shopify checkout before payment.",
      },
      {
        title: "Support",
        copy:
          "For shipping questions, include the product name, Shopify order details, and the email used at checkout so the request can be reviewed.",
      },
    ],
  },
  "privacy-policy": {
    eyebrow: "Privacy Policy",
    title: "How Auralis handles visitor information.",
    intro:
      "Auralis Digital keeps browsing and inquiries separate from checkout. Product checkout, payment, and order records are handled through Shopify.",
    sections: [
      {
        title: "Inquiry information",
        copy:
          "If you send a contact or project request, Auralis receives the information you choose to provide, such as name, email, business or project name, inquiry type, budget range, timeline, and details.",
      },
      {
        title: "Product checkout",
        copy:
          "Auralis Digital does not collect card details or run checkout on this website. Clearly labeled buy buttons open Shopify in a new tab.",
      },
      {
        title: "Third-party services",
        copy:
          "Shopify, production partners, form providers, analytics tools, hosting providers, and email providers may process information according to their own policies when those tools are used.",
      },
    ],
  },
  "terms-of-service": {
    eyebrow: "Terms of Service",
    title: "Using Auralis Digital.",
    intro:
      "Auralis Digital is a creative brand website for products, custom design requests, and Shopify setup inquiries. It is not a custom checkout, cart, tax, or shipping calculator.",
    sections: [
      {
        title: "Product browsing",
        copy:
          "Product pages on Auralis Digital are for display and product information. Purchases happen through Shopify when a visitor uses a clearly labeled Shopify button.",
      },
      {
        title: "Custom requests",
        copy:
          "Custom design and website requests are reviewed before acceptance. Auralis may decline requests involving unclear rights, copyrighted characters or logos, offensive content, unrealistic timelines, or work that cannot be produced cleanly.",
      },
      {
        title: "No unsupported claims",
        copy:
          "Auralis should not use fake reviews, fake urgency, fake discounts, or unsupported claims. Product details should stay aligned with published product and checkout information.",
      },
    ],
  },
};

function setMetaTag(selector: string, attr: string, value: string) {
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute(attr, value);
}

function scrollToCurrentHash() {
  const id = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ block: "start", behavior: "auto" });
  return true;
}

function ProductPhotoScroll({ product }: { product: ShopProduct }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const pausedRef = useRef(false);
  const photoCount = product.photos.length;

  const advance = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pausedRef.current) return;
    const w = el.clientWidth;
    const maxScroll = el.scrollWidth - w;
    const next = el.scrollLeft + w;
    el.scrollTo({ left: next >= maxScroll ? 0 : next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (photoCount <= 1) return;
    // Stagger start so cards don't all scroll at the same time
    const delay = 3000 + Math.random() * 2000;
    const startTimer = setTimeout(() => {
      timerRef.current = setInterval(advance, 4000);
    }, delay);
    return () => {
      clearTimeout(startTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [photoCount, advance]);

  const handleInteraction = useCallback(() => {
    pausedRef.current = true;
    // Resume auto-scroll after 8 seconds of no interaction
    if (timerRef.current) clearInterval(timerRef.current);
    const resumeTimer = setTimeout(() => {
      pausedRef.current = false;
      timerRef.current = setInterval(advance, 4000);
    }, 8000);
    return () => clearTimeout(resumeTimer);
  }, [advance]);

  return (
    <>
      <div
        ref={scrollRef}
        className="product-card-photos"
        aria-label={`${product.title} product photos`}
        onPointerDown={handleInteraction}
        onWheel={handleInteraction}
      >
        {product.photos.map((photo) => (
          <img
            key={`${product.slug}-${photo.imageUrl}`}
            src={photo.imageUrl}
            alt={photo.altText}
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
            sizes="(min-width: 1280px) 29vw, (min-width: 768px) 45vw, 92vw"
          />
        ))}
      </div>
      {photoCount > 1 && <p className="product-card-swipe">Swipe photos</p>}
    </>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <article className="product-card">
      <ProductPhotoScroll product={product} />
      <div className="product-card-body">
        <div className="product-card-kicker">
          <span className="product-meta">{product.category}</span>
          <span className="product-variant">{product.variantSummary}</span>
        </div>
        <h3>{product.title}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.shortDescription}</p>
      </div>
      <a
        href={product.shopifyTrackingUrl}
        className="product-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${product.title} on Shopify`}
      >
        View on Shopify <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  );
}

const preferredProductCategoryOrder = [
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Apparel",
  "Blankets",
  "Wall Decor",
  "Hats",
  "Home Decor",
  "Accessories",
  "Journals & Notebooks",
];

const productCategories = [
  "All",
  ...Array.from(new Set(shopProducts.map((p) => p.category))).sort((a, b) => {
    const first = preferredProductCategoryOrder.indexOf(a);
    const second = preferredProductCategoryOrder.indexOf(b);
    const firstRank = first === -1 ? Number.MAX_SAFE_INTEGER : first;
    const secondRank = second === -1 ? Number.MAX_SAFE_INTEGER : second;

    return firstRank - secondRank || a.localeCompare(b);
  }),
];

function ProductCatalogGrid() {
  const [activeCategory, setActiveCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("category");
    if (!param) return "All";
    if (productCategories.includes(param)) return param;
    const multi = param.split(",").map((s) => s.trim());
    if (multi.length > 1 && multi.every((c) => productCategories.includes(c))) return param;
    return "All";
  });
  const filtered = activeCategory === "All"
    ? shopProducts
    : activeCategory.includes(",")
      ? shopProducts.filter((p) => activeCategory.split(",").includes(p.category))
      : shopProducts.filter((p) => p.category === activeCategory);

  return (
    <div id="products-grid" className="product-catalog-section">
      <div className="section-heading compact">
        <span className="section-label"><Store aria-hidden="true" /> Lucid Creations</span>
        <h2 id="shop-preview-title">Shop Lucid Creations.</h2>
        <p>The Shopify shop by Auralis Digital. Browse products, prices, and details — checkout opens securely on Shopify.</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Made to order · Production usually 2–5 business days · Shipping usually 3–8 business days after production · Tracking sent by email
        </p>
        <p className="mt-2 !text-sm font-semibold !text-accent">
          10% off your first order — use code WELCOME10 at checkout.
        </p>
      </div>
      <div className="cta-row mb-8">
        <Button variant="conversion" size="lg" asChild>
          <a href="/custom-design">Request Custom Design <ArrowRight aria-hidden="true" /></a>
        </Button>
      </div>
      <div className="product-category-tabs" aria-label="Filter by category">
        {productCategories.map((cat) => {
          const count = cat === "All" ? shopProducts.length : shopProducts.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              className={cn("product-category-tab", activeCategory === cat && "is-active")}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>
      <div className="product-catalog-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}



function PolicyPageContent({ page }: { page: PolicyPage }) {
  const policy = policyPages[page];

  return (
    <section className="content-section policy-page">
      <div className="site-shell">
        <Reveal className="section-heading">
          <span className="section-label">{policy.eyebrow}</span>
          <h1>{policy.title}</h1>
          <p className="mt-4">{policy.intro}</p>
        </Reveal>
        <div className="policy-grid">
          {policy.sections.map((section) => (
            <Reveal key={section.title} className="service-card">
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="policy-support-card">
          <h2>Need help with an order or request?</h2>
          <p>
            Email Auralis with the product name, Shopify order details if available, and a short description of what happened.
          </p>
          <Button variant="conversion" size="lg" asChild>
            <a href={MAILTO}>Contact Auralis</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [form, setForm] = useState({
    name: "", business: "", email: "", interest: "Custom handmade art request",
    budget: "Not sure yet", timeline: "Not sure yet", details: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT) {
      setStatus("submitting");
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const subject = `Auralis Inquiry - ${form.interest}`;
      const body = [
        "Hi Auralis Digital,",
        "",
        `I am interested in: ${form.interest}`,
        "",
        `Name: ${form.name}`,
        `Business / project name: ${form.business}`,
        `Email: ${form.email}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
        `Details: ${form.details}`,
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const inputCls = "form-input";
  const labelCls = "form-label";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-bold">Message received.</h3>
        <p className="text-muted-foreground">Auralis Digital will review your request and follow up shortly.</p>
        <Button variant="conversionOutline" size="sm" onClick={() => setStatus("idle")}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-1">
      <label className={labelCls}>Your name
        <input id="contact-name" name="name" className={inputCls} value={form.name} onChange={set("name")} required autoComplete="name" />
      </label>
      <label className={labelCls}>Business / project name
        <input id="contact-business" name="business" className={inputCls} value={form.business} onChange={set("business")} autoComplete="organization" />
      </label>
      <label className={labelCls}>Email
        <input id="contact-email" name="email" className={inputCls} type="email" value={form.email} onChange={set("email")} required autoComplete="email" />
      </label>
      <label className={labelCls}>What are you interested in?
        <select id="contact-interest" name="interest" className={inputCls} value={form.interest} onChange={set("interest")}>
          <option>Custom handmade art request</option>
          <option>Custom 3D print request</option>
          <option>Gift bundle request</option>
          <option>Product question</option>
          <option>Shopify / e-commerce setup</option>
          <option>General inquiry</option>
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>Budget range
          <select id="contact-budget" name="budget" className={inputCls} value={form.budget} onChange={set("budget")}>
            <option>Not sure yet</option>
            <option>Under $50</option>
            <option>$50–$100</option>
            <option>$100–$250</option>
            <option>$250–$500</option>
            <option>$500–$1,000</option>
            <option>$1,000+</option>
          </select>
        </label>
        <label className={labelCls}>Timeline
          <select id="contact-timeline" name="timeline" className={inputCls} value={form.timeline} onChange={set("timeline")}>
            <option>Not sure yet</option>
            <option>As soon as possible</option>
            <option>This month</option>
            <option>1–3 months</option>
          </select>
        </label>
      </div>
      <label className={labelCls}>Details
        <textarea id="contact-details" name="details" className={inputCls} rows={4} value={form.details} onChange={set("details")} placeholder="What do you need?" />
      </label>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email directly.</p>
      )}
      <Button type="submit" variant="conversion" size="xl" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : FORMSPREE_ENDPOINT ? <>Send Request <ArrowRight aria-hidden="true" /></> : <>Prepare Message <ArrowRight aria-hidden="true" /></>}
      </Button>
      <p className="pt-2 text-xs text-muted-foreground">
        {FORMSPREE_ENDPOINT
          ? "Your information goes directly to Auralis Digital."
          : "Opens a prepared email you can review before sending."}
      </p>
    </form>
  );
}

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Creator Shops", href: "/creator-shops" },
  { label: "Custom Work", href: "/custom-design" },
  { label: "Shopify Setup", href: "/web-design" },
];

const SECONDARY_NAV_LINKS = [
  { label: "Contact", href: "/custom-design#contact" },
  { label: "About", href: "/#about" },
];

const POLICY_LINKS = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

type AuralisPage =
  | "home"
  | "shop"
  | "collections"
  | "creator-shops"
  | "custom-design"
  | "web-design"
  | "websites"
  | "pour-social"
  | "refund-policy"
  | "shipping-policy"
  | "privacy-policy"
  | "terms-of-service";

type PolicyPage = keyof typeof policyPages;

export default function AuralisHomepage({ page = "home" }: { page?: AuralisPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = page === "home";
  const isShop = page === "shop";
  const isCollections = page === "collections";
  const isCreatorShops = page === "creator-shops";
  const isCustomDesign = page === "custom-design";
  const isWebDesign = page === "web-design";
  const isWebsites = page === "websites";
  const isPourSocial = page === "pour-social";
  const isPolicyPage = page in policyPages;
  const customDesignPreview = CUSTOM_DESIGN_PREVIEW;

  useEffect(() => {
    const meta = pageMeta[page];
    const canonical = `https://www.auralisdigital.net${meta.canonicalPath}`;

    document.title = meta.title;
    setMetaTag('meta[name="description"]', "content", meta.description);
    setMetaTag('meta[property="og:title"]', "content", meta.title);
    setMetaTag('meta[property="og:description"]', "content", meta.description);
    setMetaTag('meta[property="og:url"]', "content", canonical);
    setMetaTag('meta[name="twitter:title"]', "content", meta.title);
    setMetaTag('meta[name="twitter:description"]', "content", meta.description);
    setMetaTag('link[rel="canonical"]', "href", canonical);

    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [page]);

  useEffect(() => {
    if (!window.location.hash) return;

    let frame = 0;
    let timeout = 0;
    const scroll = () => {
      frame = window.requestAnimationFrame(() => {
        if (!scrollToCurrentHash()) {
          timeout = window.setTimeout(scrollToCurrentHash, 120);
        }
      });
    };

    scroll();
    window.addEventListener("hashchange", scroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("hashchange", scroll);
    };
  }, [page]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      {/* ── Nav ───────────────────────────────────────────── */}
      <header className="site-nav">
        <div className="site-shell nav-bar">
          <a href="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
            <img
              src="/assets/brand/auralis-logo.jpg"
              alt=""
              className="nav-logo"
              width={32}
              height={32}
              decoding="async"
            />
            <span>AURALIS DIGITAL</span>
          </a>
          <div className="nav-right">
            <nav className="nav-desktop" aria-label="Main navigation">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              className="nav-hamburger"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="nav-mobile-menu">
            <nav className="site-shell nav-mobile-inner" aria-label="Menu">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-mobile-link"
                  onClick={() => setMobileOpen(false)}
                  {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </a>
              ))}
              <div className="nav-mobile-divider" />
              {SECONDARY_NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-mobile-link nav-mobile-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="auralis-page overflow-hidden" data-page={page}>
        {/* Animated background orbs */}
        <div className="bg-orbs" aria-hidden="true">
          <div className="bg-orb bg-orb-1" />
          <div className="bg-orb bg-orb-2" />
          <div className="bg-orb bg-orb-3" />
          <div className="bg-orb bg-orb-4" />
          <div className="bg-orb bg-orb-5" />
        </div>

        {isHome && (
          <>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="hero-section hero-has-bg">
          <div className="hero-bg-wrap" aria-hidden="true">
            <img
              src="/assets/brand/auralis-home-hero-bg.jpeg"
              alt=""
              className="hero-bg-img"
              decoding="async"
              loading="eager"
            />
            <div className="hero-bg-overlay" />
          </div>
          <div className="site-shell hero-centered">
            <img
              src="/assets/brand/auralis-logo.jpg"
              alt="Auralis Digital logo"
              className="hero-logo hero-logo-desktop"
              width={240}
              height={240}
              decoding="async"
            />
            <h1>The creative hub behind Lucid Creations, custom design, and more.</h1>
            <p className="hero-subhead">
              Handmade art, psychedelic apparel, festival products, custom design, and Shopify e-commerce setup — all from one hub.
            </p>
            <div className="cta-row centered">
              <Button variant="conversion" size="xl" asChild>
                <a href="/products">Shop Products <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button variant="conversionOutline" size="xl" asChild>
                <a href="/custom-design">Custom Design</a>
              </Button>
              <Button variant="conversionOutline" size="xl" asChild>
                <a href="/web-design">Shopify Setup</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Featured products ───────────────────────────── */}
        <section className="section-band home-featured-section">
          <div className="site-shell">
            <Reveal className="section-heading compact">
              <span className="section-label"><Store aria-hidden="true" /> Lucid Creations</span>
              <h2>Featured from the collection.</h2>
              <p className="mt-4">Psychedelic apparel, woven blankets, tapestries, and accessories — made to order and checkout securely through Shopify.</p>
              <p className="mt-2 !text-sm font-semibold !text-accent">10% off your first order — use code WELCOME10 at checkout.</p>
            </Reveal>
            <div className="home-featured-grid">
              {HOMEPAGE_FEATURED_SLUGS.map((slug) => {
                const p = shopProducts.find((x) => x.slug === slug);
                if (!p) return null;
                return (
                  <Reveal key={slug}>
                    <a
                      href={p.shopifyTrackingUrl}
                      className="home-featured-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} on Shopify`}
                    >
                      <img src={p.imageUrl} alt={p.altText} loading="lazy" decoding="async" width={400} height={400} />
                      <div className="home-featured-card-body">
                        <h3>{p.title}</h3>
                        <p>{p.price}</p>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
            <Reveal>
              <div className="cta-row centered" style={{ marginTop: "2rem" }}>
                <Button variant="conversion" size="lg" asChild>
                  <a href="/products">Shop All {shopProducts.length} Products <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Custom design showcase ─────────────────────── */}
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="home-split">
              <div className="home-split-media">
                <img
                  src={CUSTOM_DESIGN_PREVIEW.imageUrl}
                  alt={CUSTOM_DESIGN_PREVIEW.altText}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                />
              </div>
              <div className="home-split-content">
                <span className="section-label"><Sparkles className="size-4" aria-hidden="true" /> Custom Work</span>
                <h2>Turn your idea into something real.</h2>
                <p>Handmade art, 3D printed products, gift bundles, or personalized designs — send the idea and Auralis reviews scope before work begins.</p>
                <div>
                  <Button variant="conversion" size="lg" asChild>
                    <a href="/custom-design">Start a Request <ArrowRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Website design ─────────────────────────────── */}
        <section className="section-band">
          <div className="site-shell">
            <Reveal className="home-split">
              <div className="home-split-content">
                <span className="section-label"><Store className="size-4" aria-hidden="true" /> Shopify / E-commerce Setup</span>
                <h2>Custom Shopify stores built to sell.</h2>
                <p>Shopify store setup, product catalog structure, collection organization, Printify integration, mobile-first layout, and launch support — built for creators and small brands ready to sell online.</p>
                <div className="cta-row">
                  <Button variant="conversion" size="lg" asChild>
                    <a href="/web-design">Start a Shopify Setup <ArrowRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </div>
              <div className="service-card">
                <div className="icon-tile"><Store aria-hidden="true" /></div>
                <h3>E-commerce launch support</h3>
                <p>Shopify store, product listings, collections, checkout configuration, Printify fulfillment, domain setup, and go-live checklist — everything to launch a real online shop.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Creator shops ─────────────────────────────── */}
        <section id="creator-shops" className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading compact">
              <span className="section-label">Branches</span>
              <h2>Product branches under Auralis Digital.</h2>
              <p className="mt-4">Each branch has its own identity, products, and audience.</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {creatorShops.slice(0, 2).map((shop) => {
                const Icon = shop.icon;
                return (
                  <Reveal key={shop.title}>
                    <a href={shop.href} className="service-card block h-full text-foreground no-underline">
                      <div className="icon-tile"><Icon aria-hidden="true" /></div>
                      <h3>{shop.title}</h3>
                      <p>{shop.copy}</p>
                      <span className="home-tile-link">View shop <ArrowRight className="size-4" aria-hidden="true" /></span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
            <Reveal>
              <div className="cta-row centered" style={{ marginTop: "1.5rem" }}>
                <Button variant="conversionOutline" size="lg" asChild>
                  <a href="/creator-shops">See All Creator Shops <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Trust / About / Contact ───────────────────── */}
        <section id="about" className="content-section trust-section">
          <div className="site-shell trust-layout">
            <Reveal className="section-heading compact">
              <span className="section-label">About</span>
              <h2>Built and managed by a real person.</h2>
              <p className="mt-4">
                Auralis Digital is built by Christopher Daugherty in Southeast Michigan. Lucid Creations, RJ Print,
                custom design, and Shopify e-commerce setup all live under one roof — with more branches on the way.
              </p>
              <p className="mt-3 text-muted-foreground/80">
                Product checkout is handled securely through Shopify. For questions, requests, or Shopify setup inquiries — {EMAIL}.
              </p>
              <div className="cta-row">
                <Button variant="conversionOutline" size="lg" asChild>
                  <a href={MAILTO}>Contact Auralis</a>
                </Button>
                <Button variant="conversionOutline" size="lg" asChild>
                  <a href="/shipping-policy">Shipping Info</a>
                </Button>
                <Button variant="conversionOutline" size="lg" asChild>
                  <a href="/refund-policy">Returns</a>
                </Button>
              </div>
            </Reveal>
            <div className="trust-grid">
              {trustItems.map((item) => (
                <Reveal key={item} className="trust-pill">
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────── */}
        <section className="final-cta-section">
          <div className="site-shell">
            <Reveal className="final-cta">
              <h2>Ready to start?</h2>
              <p>Shop the Lucid Creations catalog, request a custom design, or get help launching your Shopify store.</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href="/products">Shop Products <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href="/custom-design">Custom Design</a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href="/web-design">Shopify Setup</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
          </>
        )}

        {/* ── Shop ────────────────────────────────────────── */}
        {isPolicyPage && <PolicyPageContent page={page as PolicyPage} />}

        {isShop && (
        <>
        <section className="products-hero" aria-label="Auralis Digital Products">
          <div className="products-hero-bg" role="img" aria-label="Sacred geometry Metatron's Cube artwork" />
          <div className="products-hero-overlay" />
          <div className="site-shell products-hero-content">
            <Reveal>
              <span className="eyebrow">Lucid Creations Collection</span>
            </Reveal>
          </div>
        </section>

        <section id="shop" className="content-section shop-preview" aria-labelledby="shop-preview-title">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Lucid Creations Products</h1>
              <p className="mt-4">Handmade art, psychedelic designs, and festival-inspired products — crafted by hand or printed on demand.</p>
            </Reveal>
            <ProductCatalogGrid />
            <Reveal className="shop-faq-panel">
              <div className="section-heading compact">
                <h2>Questions before checkout.</h2>
              </div>
              <div className="shop-faq-grid">
                {shopFaqs.map((faq) => (
                  <div key={faq.q} className="shop-faq-item">
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        </>
        )}

        {isCollections && (
        <section id="collections" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Collections</span>
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Shop by collection.</h1>
              <p className="mt-4">Browse Lucid Creations product lanes: wearable art, wall art, accessories, and 3D printed goods. Handmade jewelry and resin pieces coming soon.</p>
            </Reveal>
            <div className="service-grid">
              {collectionCards.map((collection) => {
                const Icon = collection.icon;
                return (
                  <Reveal key={collection.title}>
                    <a href={collection.href} className="service-card block h-full text-foreground no-underline">
                      <div className="icon-tile"><Icon aria-hidden="true" /></div>
                      <h3>{collection.title}</h3>
                      <p>{collection.copy}</p>
                      <span className="home-tile-link">Explore <ArrowRight className="size-4" aria-hidden="true" /></span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {isCreatorShops && (
        <section id="creator-shops" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Creator Shops</span>
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Creator shops inside the Auralis ecosystem.</h1>
              <p className="mt-4">Explore Lucid Creations, RJ Print, and partnered creator storefronts.</p>
            </Reveal>
            <div className="service-grid">
              {creatorShops.map((shop) => {
                const Icon = shop.icon;
                return (
                  <Reveal key={shop.title}>
                    <a href={shop.href} className="service-card block h-full text-foreground no-underline">
                      <div className="icon-tile"><Icon aria-hidden="true" /></div>
                      <h3>{shop.title}</h3>
                      <p>{shop.copy}</p>
                      <span className="home-tile-link">View shop <ArrowRight className="size-4" aria-hidden="true" /></span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="shop-faq-panel mt-8">
              <div className="section-heading compact">
                <h2>How this works.</h2>
              </div>
              <div className="shop-faq-grid">
                <div className="shop-faq-item">
                  <h3>Products are the front door</h3>
                  <p>Visitors can browse products first, then move into custom design or creator shop requests.</p>
                </div>
                <div className="shop-faq-item">
                  <h3>RJ Print handles 3D print fulfillment</h3>
                  <p>3D printed items, prototypes, signage, and promotional product ideas are fulfilled through RJ Print.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Pour Social (simple redirect page) ─────────── */}
        {isPourSocial && (
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label coming-soon-badge">Coming Soon</span>
              <div className="icon-tile large"><Wine aria-hidden="true" /></div>
              <h2>Pour Social</h2>
              <p className="mt-4">Mobile BYOB bar service for Southeast Michigan.</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href="https://pour-social.vercel.app" target="_blank" rel="noopener noreferrer">
                    Visit Pour Social <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
        )}

        {isCustomDesign && (
        <>
        <section id="custom-design" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label"><Sparkles aria-hidden="true" /> Custom Work</span>
              <h2 className="mx-auto max-w-[22rem] sm:max-w-none">
                Handmade art and one-of-one pieces.
              </h2>
              <p className="mx-auto mt-4 max-w-[24rem] sm:max-w-xl">
                Wire wraps, stone and crystal designs, 3D printed products, and curated gift bundles — made by hand or built to order.
              </p>
            </Reveal>

            {/* ── Preview + intro ──────────────────────────── */}
            <div className="mx-auto grid w-full max-w-[calc(100vw-2.5rem)] gap-5 lg:max-w-none lg:grid-cols-2">
              <Reveal className="service-card min-w-0">
                {customDesignPreview && (
                  <img
                    className="mb-5 aspect-square w-full max-w-full rounded-xl bg-background object-cover object-center"
                    src={customDesignPreview.imageUrl}
                    alt={customDesignPreview.altText}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                  />
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Personalized pet portraits, symbolic artwork, and one-of-one designs turned into real products you can wear, display, or gift.
                </p>
              </Reveal>
              <Reveal className="service-card min-w-0">
                {CUSTOM_DESIGN_OFFERING_PREVIEW && (
                  <img
                    className="mb-5 aspect-square w-full max-w-full rounded-xl bg-background object-cover object-center"
                    src={CUSTOM_DESIGN_OFFERING_PREVIEW.imageUrl}
                    alt={CUSTOM_DESIGN_OFFERING_PREVIEW.altText}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                  />
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Great for festivals, gifts, memorial pieces, symbolic art, or something completely one-of-a-kind.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── What you can request ─────────────────────── */}
        <section className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading compact">
              <h2>What's available.</h2>
              <p className="mt-4">Each piece is reviewed before pricing or production begins. More categories are coming as the collection grows.</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {customRequestTypes.map((group) => (
                <Reveal key={group.category} className="service-card">
                  <div className="icon-tile">
                    {group.icon === "sparkles" ? <Sparkles aria-hidden="true" /> : group.icon === "hammer" ? <Hammer aria-hidden="true" /> : <Star aria-hidden="true" />}
                  </div>
                  <h3>{group.category}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────── */}
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading compact">
              <h2>How it works.</h2>
            </Reveal>
            <div className="mx-auto grid w-full max-w-[calc(100vw-2.5rem)] gap-5 lg:max-w-none lg:grid-cols-2">
              <Reveal className="service-card min-w-0">
                <div className="icon-tile"><ClipboardList aria-hidden="true" /></div>
                <h3>The process</h3>
                <ul className="mt-5 space-y-3">
                  {customProcess.map((step, index) => (
                    <li key={step} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <span className="step-number !h-7 !w-7 !text-[0.65rem] shrink-0">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="service-card min-w-0">
                <div className="icon-tile"><Store aria-hidden="true" /></div>
                <h3>Where it's made</h3>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span><strong className="text-foreground">Lucid Creations</strong> — the Shopify shop featuring handmade wire wraps, pendants, resin art, and psychedelic apparel</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Hammer className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span><strong className="text-foreground">RJ Print</strong> — custom 3D printed products, prototypes, signage, and promotional items</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Star className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span><strong className="text-foreground">Gift bundles</strong> — curated combinations of art, accessories, and custom pieces for any occasion</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
        </>
        )}

        {isWebDesign && (
        <section id="services" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Shopify / E-commerce Setup</span>
              <h2>Custom Shopify stores built to sell.</h2>
              <p className="mt-4">
                Full e-commerce setup for creators, small brands, and entrepreneurs — Shopify store, product catalog, collections, Printify fulfillment, and launch support.
              </p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href="#contact">Start a Shopify Setup <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href="/websites">Browse Demos</a>
                </Button>
                <a href="#pricing" className="text-sm font-medium text-primary hover:underline">
                  View Pricing
                </a>
              </div>
            </Reveal>
            <Reveal className="web-design-banner">
              <img
                src="/assets/brand/web-design-banner.jpg"
                alt="Auralis Digital Shopify setup — custom stores, mobile responsive, SEO optimized, built to convert"
                className="web-design-banner-img"
                loading="lazy"
                decoding="async"
                width={1080}
                height={1080}
              />
            </Reveal>
            <Reveal className="service-card mb-8 border-primary/20 bg-primary/5">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="section-label">E-commerce Launch Package</span>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">A complete Shopify store setup.</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Built for creators, small brands, and entrepreneurs who want a working online store without figuring out every platform alone.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    This is more than a homepage. It is a full Shopify storefront — products listed, collections organized, checkout configured, fulfillment connected, and ready for real customers.
                  </p>
                  <p className="text-sm font-semibold leading-relaxed text-foreground">
                    Outcome: you walk away with a live Shopify store that can showcase products, accept orders, connect to fulfillment, and give customers a clear place to buy.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Includes</h4>
                    <ul className="space-y-2">
                      {businessLaunchIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Client-paid items</h4>
                    <ul className="space-y-2">
                      {businessLaunchClientPaid.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} className="service-card">
                    <div className="icon-tile"><Icon aria-hidden="true" /></div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {isWebsites && (
        <section id="work" className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Example website builds.</h2>
              <p className="mt-4">
                Layout concepts, mobile flow, and contact paths built for real industries.
              </p>
            </Reveal>
            <div className="website-demo-grid">
              {websiteDemos.map((demo) => {
                const Wrapper = "href" in demo && demo.href
                  ? (props: { children: ReactNode; className?: string }) => <a href={demo.href as string} className={props.className} target="_blank" rel="noopener noreferrer">{props.children}</a>
                  : (props: { children: ReactNode; className?: string }) => <div className={props.className}>{props.children}</div>;
                return (
                <Reveal key={demo.title}>
                  <Wrapper className="website-demo-card">
                    <img
                      src={demo.imageUrl}
                      alt={`${demo.title} website demo thumbnail`}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={750}
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
                    />
                    <div className="website-demo-body">
                      <span>{demo.category}</span>
                      <h3>{demo.title}</h3>
                      <p>{demo.description}</p>
                    </div>
                  </Wrapper>
                </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {/* ── Why it works ──────────────────────────────── */}
        {isWebDesign && (
        <section className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Why it works.</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((p) => (
                <Reveal key={p.stat} className="service-card flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-base font-semibold text-foreground">{p.stat}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Process ─────────────────────────────────────── */}
        {isWebDesign && (
        <section id="process" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>How it works.</h2>
            </Reveal>
            <div className="process-line">
              {process.map((step, index) => (
                <Reveal key={step} className="process-step">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step}</h3>
                  <p>{index === 0 ? "Understand your products, brand, and goals." : index === 1 ? "Map store structure, collections, and product catalog." : index === 2 ? "Build and configure the Shopify storefront." : index === 3 ? "Test orders, review, and refine." : "Go live and launch."}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Pricing ─────────────────────────────────────── */}
        {isWebDesign && (
        <section id="pricing" className="content-section">
          <div className="site-shell">
            <details className="pricing-details">
              <summary className="pricing-summary">
                <h2>Pricing</h2>
                <span className="pricing-toggle-hint">Tap to view pricing details</span>
              </summary>
              <div className="pricing-content">
                <p className="mb-6 text-center text-sm text-muted-foreground">
                  Final scope confirmed before work starts. No surprise costs.
                </p>
                <div className="grid gap-5 md:grid-cols-3">
                  {pricing.filter((t) => !t.retainer).map((tier) => (
                    <div key={tier.title} className={cn(
                      "service-card flex flex-col gap-4 h-full",
                      tier.featured && "border-primary/30 ring-1 ring-primary/20"
                    )}>
                      <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {tier.label}
                      </span>
                      <h3 className="mb-0">{tier.title}</h3>
                      <p className="text-3xl font-bold text-foreground">{tier.price}</p>
                      <p className="text-sm text-muted-foreground">{tier.note}</p>
                      <ul className="mt-auto space-y-2">
                        {tier.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button variant={tier.featured ? "conversion" : "conversionOutline"} size="lg" className="mt-2 w-full" asChild>
                        <a href="#contact">Get started</a>
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Final pricing depends on scope, content, and features.
                </p>

                {/* Care plan */}
                {pricing.filter((t) => t.retainer).map((tier) => (
                  <div key={tier.title} className="mt-8">
                    <div className="service-card flex flex-col gap-4 border-primary/20 bg-primary/5 md:flex-row md:items-center md:gap-10">
                      <div className="shrink-0">
                        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tier.label}
                        </span>
                        <h3 className="mb-0 mt-3">{tier.title}</h3>
                        <p className="text-3xl font-bold text-foreground">{tier.price}</p>
                      </div>
                      <div className="flex flex-1 flex-col gap-4">
                        <p className="text-muted-foreground">{tier.note}</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {tier.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="shrink-0">
                        <Button variant="conversionOutline" size="lg" className="w-full md:w-auto" asChild>
                          <a href="#contact">Ask about care plan</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>
        )}

        {/* ── Who this is for ─────────────────────────────── */}
        {isWebDesign && (
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Built for these kinds of businesses.</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {concepts.map((c) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.name} className="service-card">
                    <div className="icon-tile"><Icon aria-hidden="true" /></div>
                    <h3>{c.name}</h3>
                    <p>{c.note}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        )}

        {/* ── Trust ───────────────────────────────────────── */}
        {isWebDesign && (
        <section className="section-band trust-section">
          <div className="site-shell trust-layout">
            <Reveal className="section-heading compact">
              <h2>Simple process, professional result.</h2>
            </Reveal>
            <div className="trust-grid">
              {[
                "Full Shopify store setup",
                "Product catalog and variant configuration",
                "Printify / POD fulfillment integration",
                "Mobile-optimized storefront",
                "No surprise scope — pricing confirmed before work starts",
                "You own your store, domain, and data",
              ].map((item) => (
                <Reveal key={item} className="trust-pill">
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Service areas ───────────────────────────────── */}
        {isWebsites && (
        <section id="areas" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Service areas.</h2>
              <p className="mt-4">
                Southeast Michigan and surrounding communities.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area.label}
                  className="rounded-full border border-border/40 bg-card/40 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {area.label}
                </span>
              ))}
            </Reveal>
          </div>
        </section>
        )}

        {/* ── FAQ ─────────────────────────────────────────── */}
        {isWebDesign && (
        <section id="faq" className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Common questions.</h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {faqs.map((faq) => (
                <Reveal key={faq.q} className="service-card">
                  <h3 className="text-base">{faq.q}</h3>
                  <p className="text-sm">{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Contact ─────────────────────────────────────── */}
        {(isCustomDesign || isWebDesign) && (
        <section id="contact" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>{isCustomDesign ? "Start your piece." : "Start your Shopify store setup."}</h2>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="service-card">
                <h3>{isCustomDesign ? "Send your idea" : "Send a store setup request"}</h3>
                <p className="mb-6 text-muted-foreground">
                  {isCustomDesign
                    ? "Share the idea, which branch it fits (handmade, 3D print, gift bundle), and any timeline or constraints."
                    : "Share your products, brand, and what you need. Auralis reviews scope before starting."}
                </p>
                <ContactForm />
              </Reveal>
              <div className="flex flex-col gap-5">
                <Reveal className="service-card">
                  <h3>Prefer to reach out directly?</h3>
                  <div className="mt-4 space-y-3">
                    <a href={MAILTO} className="flex items-center gap-3 break-all font-semibold text-foreground hover:text-primary">
                      <MessageSquareText className="size-5 shrink-0 text-primary" aria-hidden="true" /> {EMAIL}
                    </a>
                    <p className="text-sm text-muted-foreground">Service area: Michigan local businesses</p>
                  </div>
                </Reveal>
                <Reveal className="service-card border-primary/20 bg-primary/5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">What to include</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {isCustomDesign
                      ? "Include the idea, intended use, timeline, and any constraints."
                      : "Include your brand name, what you sell, how many products, and whether you need Printify or other fulfillment integration."}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ── Final CTA ───────────────────────────────────── */}
        {(isCustomDesign || isWebDesign) && (
        <section className="final-cta-section">
          <div className="site-shell">
            <Reveal className="final-cta">
              <div className="icon-tile large">{isWebDesign ? <CalendarCheck aria-hidden="true" /> : <Sparkles aria-hidden="true" />}</div>
              <h2>{isWebDesign ? "Ready to launch your store?" : "Ready to start?"}</h2>
              <p>{isWebDesign ? "Start a Shopify setup request or get a free store review." : "Browse products or send us your idea."}</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href={isWebDesign ? "/web-design#contact" : "/custom-design"}>
                    {isWebDesign ? "Start a Shopify Setup" : "Start a Request"} <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href={isWebDesign ? MAILTO : "/products"}>
                    {isWebDesign ? "Get E-commerce Help" : "Explore Products"}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="site-footer">
          <div className="site-shell">
            <div className="footer-grid">
              <div className="footer-brand-col">
                <a href="/" className="footer-brand">
                  <img
                    src="/assets/brand/auralis-logo.jpg"
                    alt=""
                    className="footer-logo"
                    width={36}
                    height={36}
                    decoding="async"
                  />
                  <span>AURALIS DIGITAL</span>
                </a>
                <p className="footer-tagline">
                  Creative products, custom design, and Shopify e-commerce setup.
                </p>
              </div>
              <div>
                <p className="footer-label">Explore</p>
                <div className="footer-links">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="footer-link"
                      {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="footer-label">Support</p>
                <div className="footer-links">
                  <a href={MAILTO} className="footer-link break-all">{EMAIL}</a>
                  {POLICY_LINKS.map((link) => (
                    <a key={link.label} href={link.href} className="footer-link">{link.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="footer-label">Connect</p>
                <div className="footer-links">
                  <a
                    href="https://www.instagram.com/auralis_digital_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <Instagram className="size-4" aria-hidden="true" /> Instagram
                  </a>
                  <p className="text-sm text-muted-foreground">Southeast Michigan</p>
                </div>
                <a
                  href="https://www.instagram.com/auralis_digital_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-qr-link"
                  aria-label="Follow Auralis Digital on Instagram"
                >
                  <img
                    src="/assets/brand/instagram-qr.png"
                    alt="Auralis Digital Instagram QR code"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="footer-qr"
                  />
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Auralis Digital. All rights reserved.</p>
              <p className="footer-checkout-note">Product checkout handled through Shopify.</p>
            </div>
          </div>
        </footer>
      </main>

      {!isHome && !isShop && !isPolicyPage && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/90 p-3 backdrop-blur-xl md:hidden">
          <Button variant="conversion" size="lg" className="w-full" asChild>
            <a
              href={isPourSocial ? "https://pour-social.vercel.app" : "/custom-design"}
              target={isPourSocial ? "_blank" : undefined}
              rel={isPourSocial ? "noopener noreferrer" : undefined}
            >
              {isPourSocial ? "View Pour Social" : "Start a Request"}
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
