import { useEffect, useMemo, useState, type ReactNode, type FormEvent } from "react";
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
  "sun-of-life-wall-tapestry",
  "psychedelic-ying-yang-woven-blanket",
  "micro-or-macro-t-shirt",
  "snapback-trucker-cap-with-patch-embroidery",
  "oval-necklace",
  "zeus-journal-matte",
];

const HOMEPAGE_TILE_SLUGS = [
  "sun-of-life-wall-tapestry",
  "psychedelic-ying-yang-woven-blanket",
  "micro-or-macro-t-shirt",
  "geometric-dad-cap",
];

const CUSTOM_DESIGN_PREVIEW = {
  imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/252296532838227647_2048.jpg?v=1779946779",
  altText: "Custom dog pillow — example of a personalized design",
};
const CUSTOM_DESIGN_OFFERING_PREVIEW = {
  imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/2799150508494482362_2048.jpg?v=1779839428",
  altText: "Pixel Oven woven blanket — commissioned custom design",
};

const customRequestTypes = [
  "Pet portraits and fur baby designs",
  "Birthday, holiday, or memorial gifts",
  "Photo-to-product concepts",
  "Inside jokes and personal artwork",
  "Event and party designs",
  "Apparel, wall art, blankets, and accessories",
  "Creator or small-brand visuals",
];

const customProcess = [
  "Send the idea",
  "Auralis reviews scope",
  "You get a quote or next step",
  "Design direction is confirmed",
  "Final design or product preview is prepared",
];

const services = [
  { title: "Website design", copy: "Professional sites built around your services, trust, and contact flow.", icon: Paintbrush },
  { title: "Landing pages", copy: "Focused pages for offers, events, ads, and quote requests.", icon: Store },
  { title: "Mobile optimization", copy: "Layouts that make calling, booking, and reading easy on phones.", icon: MonitorSmartphone },
  { title: "Local SEO setup", copy: "Page structure and location signals that help nearby customers find you.", icon: SearchCheck },
  { title: "Contact forms", copy: "Simple flows that route visitors toward calls, quotes, or messages.", icon: MessageSquareText },
  { title: "Brand cleanup", copy: "Sharper wording, better hierarchy, and cleaner presentation.", icon: Sparkles },
];

const process = ["Discover", "Structure", "Design", "Review", "Launch"];

const DEMO_LIBRARY_HREF = "projects/demo-index.html";

const concepts = [
  { name: "Barbershop", note: "Booking, services, location, and social proof.", icon: Scissors },
  { name: "Restaurant", note: "Menu, hours, directions, and mobile ordering.", icon: UtensilsCrossed },
  { name: "Lawn care", note: "Quote requests, packages, and service areas.", icon: Leaf },
  { name: "Mobile bartending", note: "Event inquiries, packages, and availability.", icon: Wine },
  { name: "Contractor", note: "Service areas, quote forms, and trust signals.", icon: Hammer },
];

const websiteDemos = [
  {
    title: "Restaurant",
    category: "Food",
    description: "Diner, coney, takeout, or cafe structure focused on menu visibility, hours, location, and mobile customer action.",
    imageUrl: "/assets/demo-thumbnails/restaurant.svg",
    href: "/projects/bryans-neighborhood-coney-final-demo/index.html",
  },
  {
    title: "Patterson's Lawn Care & Snow Removal",
    category: "Client Preview",
    description: "Polished local-service website demo built from confirmed business-card materials, service information, and phone-first customer action.",
    imageUrl: "/projects/pattersons-lawn-care-demo/preview-desktop.png",
    href: "/projects/pattersons-lawn-care-demo/site/index.html",
  },
  {
    title: "Lawn Care",
    category: "Outdoor Service",
    description: "Quote-request website for mowing, landscaping, cleanup, service areas, packages, and recurring customer inquiries.",
    imageUrl: "/assets/demo-thumbnails/lawn-care.svg",
    href: "/projects/robs-lawn-care-demo/site/index.html",
  },
  {
    title: "Maintenance",
    category: "Home Repair",
    description: "Handyman and property-maintenance layout built around repairs, service clarity, trust, and job-detail requests.",
    imageUrl: "/assets/demo-thumbnails/handyman.svg",
    href: "/projects/maintenance-man-demo/index.html",
  },
  {
    title: "Barbershop",
    category: "Personal Care",
    description: "Booking-forward local shop demo for services, location, appointment flow, and phone-first mobile visitors.",
    imageUrl: "/assets/demo-thumbnails/barbershop.svg",
    href: "/projects/barbershop-demo/index.html",
  },
  {
    title: "Salon",
    category: "Personal Care",
    description: "Polished beauty-service demo for service menus, style photos, booking prompts, policies, and client trust.",
    imageUrl: "/assets/demo-thumbnails/salon.svg",
    href: "/projects/salon-demo/index.html",
  },
  {
    title: "Painter",
    category: "Trades",
    description: "Residential and commercial quote-driven demo for project photos, before-and-after proof, and estimate requests.",
    imageUrl: "/assets/demo-thumbnails/painter.svg",
    href: "/projects/painter-demo/index.html",
  },
  {
    title: "Roofing / Contractor",
    category: "Trades",
    description: "Estimate-focused contractor layout for repairs, exterior services, homeowner trust, and project-detail capture.",
    imageUrl: "/assets/demo-thumbnails/roofing.svg",
    href: "/projects/roofing-contractor-demo/index.html",
  },
  {
    title: "Cleaning Service",
    category: "Home Service",
    description: "Lead-capture demo for residential, commercial, deep-clean, recurring-cleaning, and one-time service requests.",
    imageUrl: "/assets/demo-thumbnails/cleaning.svg",
    href: "/projects/cleaning-service-demo/index.html",
  },
  {
    title: "Mobile Detailing",
    category: "Auto Service",
    description: "Convenience-focused auto detailing demo for packages, booking, service area, and mobile-first quote flow.",
    imageUrl: "/assets/demo-thumbnails/detailing.svg",
    href: "/projects/mobile-detailing-demo/index.html",
  },
  {
    title: "Photographer",
    category: "Creative",
    description: "Portfolio-focused demo for session inquiries, package clarity, image-forward trust, and visual storytelling.",
    imageUrl: "/assets/demo-thumbnails/photographer.svg",
    href: "/projects/photographer-demo/index.html",
  },
];

const pricing = [
  {
    label: "For Auralis-built sites",
    title: "Website Refresh",
    price: "$250",
    note: "Focused cleanup for websites originally built by Auralis Digital.",
    items: ["Improve clarity", "Tighten calls to action", "Mobile polish"],
    featured: false,
    retainer: false,
  },
  {
    label: "Best start",
    title: "Basic Website",
    price: "$500+",
    note: "Professional starter site for a real business presence.",
    items: ["Launch-ready structure", "Mobile-friendly layout", "Contact path"],
    featured: true,
    retainer: false,
  },
  {
    label: "Best for polish",
    title: "Standard Website",
    price: "$1,000+",
    note: "More sections, stronger layout, trust signals, and conversion flow.",
    items: ["More trust sections", "Stronger customer flow", "Local SEO setup"],
    featured: false,
    retainer: false,
  },
  {
    label: "Keep it current",
    title: "Managed Hosting and Care",
    price: "$250/mo",
    note: "Stress-free website management, hosting/deployment coordination, small updates, and priority support.",
    items: ["Routine upkeep", "Hosting coordination", "Small content updates", "Priority support"],
    featured: false,
    retainer: true,
  },
];

const serviceAreas = [
  { label: "All service areas", href: "service-areas/" },
  { label: "Belleville", href: "service-areas/belleville-websites.html" },
  { label: "Ypsilanti", href: "service-areas/ypsilanti-websites.html" },
  { label: "Ann Arbor", href: "service-areas/ann-arbor-websites.html" },
  { label: "Detroit Metro", href: "service-areas/detroit-metro-websites.html" },
];

const faqs = [
  { q: "How fast can a site be built?", a: "Simple sites move quickly when your business info, services, and photos are ready." },
  { q: "Do I need photos?", a: "Photos help, but the first version can start with strong layout and placeholder visuals." },
  { q: "Can you refresh an existing site?", a: "Website Refresh is for Auralis-built sites. Third-party sites usually need a custom quote." },
  { q: "What does the care plan include?", a: "Hosting coordination, routine upkeep, small content updates, and priority support." },
  { q: "Do I handle my own hosting?", a: "By default, yes. Auralis can help configure and maintain it as part of a care plan." },
  { q: "What areas do you serve?", a: "Southeast Michigan — Belleville, Ypsilanti, Ann Arbor, Detroit Metro, and surrounding areas." },
];

const proofPoints = [
  { stat: "Mobile-first", detail: "Built around phone visitors first — where local customers check before they call." },
  { stat: "No surprise scope", detail: "Price and page count confirmed before work starts." },
  { stat: "You own everything", detail: "Domain, hosting, and files stay yours. No lock-in." },
  { stat: "Built for action", detail: "Every site makes it easy to call, book, or request a quote." },
];

const trustItems = [
  "Built for local businesses",
  "Clear communication",
  "Simple process",
  "Mobile-first",
  "No confusing tech talk",
  "Designed around calls, quotes, bookings, and messages",
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
    title: "Auralis Digital",
    description:
      "Products, website creation, custom designs, and services by Auralis Digital.",
    canonicalPath: "/",
  },
  shop: {
    title: "Products | Auralis Digital",
    description:
      "Browse Auralis Design products and collections. Product checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  "custom-design": {
    title: "Custom Design Requests | Auralis Digital",
    description:
      "Request a personalized design, product concept, image-based idea, gift design, apparel concept, wall art concept, or custom visual from Auralis Digital.",
    canonicalPath: "/custom-design",
  },
  "web-design": {
    title: "Website Design | Auralis Digital",
    description:
      "Clean website design for small businesses, creators, and local brands that need a stronger online presence.",
    canonicalPath: "/web-design",
  },
  websites: {
    title: "Website Examples | Auralis Digital",
    description: "Browse example website builds and demo directions from Auralis Digital.",
    canonicalPath: "/websites",
  },
  "pour-social": {
    title: "Pour Social | Auralis Digital",
    description:
      "Mobile bartending and event bar planning for Southeast Michigan.",
    canonicalPath: "/pour-social",
  },
  "refund-policy": {
    title: "Refund Policy | Auralis Digital",
    description:
      "Review Auralis Digital refund and support guidance for product purchases, custom design requests, and website design work.",
    canonicalPath: "/refund-policy",
  },
  "shipping-policy": {
    title: "Shipping Policy | Auralis Digital",
    description:
      "Review shipping and fulfillment guidance for Auralis Design products purchased through Shopify.",
    canonicalPath: "/shipping-policy",
  },
  "privacy-policy": {
    title: "Privacy Policy | Auralis Digital",
    description:
      "Review privacy guidance for Auralis Digital inquiries, product browsing, Shopify checkout links, and website contact forms.",
    canonicalPath: "/privacy-policy",
  },
  "terms-of-service": {
    title: "Terms of Service | Auralis Digital",
    description:
      "Review Auralis Digital terms for product browsing, Shopify checkout links, custom design requests, and website design inquiries.",
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
        title: "Before public traffic",
        copy:
          "Shopify-hosted refund settings should still be published and verified before serious product traffic is sent to Shopify checkout.",
      },
    ],
  },
  "shipping-policy": {
    eyebrow: "Shipping Policy",
    title: "Shipping and fulfillment expectations.",
    intro:
      "Auralis Design products shown on this site open through Shopify when a visitor is ready to buy. Production and fulfillment are handled after purchase for made-to-order products.",
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
      "Auralis Digital is a creative brand website for products, custom design requests, and website design inquiries. It is not a custom checkout, cart, tax, or shipping calculator.",
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
  return (
    <>
      <div className="product-card-photos" aria-label={`${product.title} product photos`}>
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
      {product.photos.length > 1 && <p className="product-card-swipe">Swipe photos</p>}
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
  "Apparel",
  "Blankets",
  "Wall Decor",
  "Hats",
  "Home Decor",
  "Jewelry & Accessories",
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
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? shopProducts : shopProducts.filter((p) => p.category === activeCategory);

  return (
    <Reveal id="products-grid" className="product-catalog-section">
      <div className="section-heading compact">
        <span className="section-label"><Store aria-hidden="true" /> All Products</span>
        <h2 id="shop-preview-title">Shop Auralis Design products.</h2>
        <p>Browse with photos, prices, and details. Checkout opens on Shopify.</p>
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
    </Reveal>
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
    name: "", business: "", email: "", interest: "Custom design request",
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
        <input className={inputCls} value={form.name} onChange={set("name")} required autoComplete="name" />
      </label>
      <label className={labelCls}>Business / project name
        <input className={inputCls} value={form.business} onChange={set("business")} autoComplete="organization" />
      </label>
      <label className={labelCls}>Email
        <input className={inputCls} type="email" value={form.email} onChange={set("email")} required autoComplete="email" />
      </label>
      <label className={labelCls}>What are you interested in?
        <select className={inputCls} value={form.interest} onChange={set("interest")}>
          <option>Custom design request</option>
          <option>Product question</option>
          <option>Website design</option>
          <option>General inquiry</option>
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>Budget range
          <select className={inputCls} value={form.budget} onChange={set("budget")}>
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
          <select className={inputCls} value={form.timeline} onChange={set("timeline")}>
            <option>Not sure yet</option>
            <option>As soon as possible</option>
            <option>This month</option>
            <option>1–3 months</option>
          </select>
        </label>
      </div>
      <label className={labelCls}>Details
        <textarea className={inputCls} rows={4} value={form.details} onChange={set("details")} placeholder="What do you need?" />
      </label>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email directly.</p>
      )}
      <Button type="submit" variant="conversion" size="xl" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : FORMSPREE_ENDPOINT ? <>Send Request <ArrowRight aria-hidden="true" /></> : <>Prepare Project Email <ArrowRight aria-hidden="true" /></>}
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
  { label: "Website Design", href: "/web-design" },
  { label: "Custom Design", href: "/custom-design" },
  { label: "Pour Social", href: "https://pour-social.vercel.app", external: true },
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

      <main id="top" className="auralis-page overflow-hidden">

        {isHome && (
          <>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="hero-section hero-has-bg">
          <div className="hero-bg-wrap" aria-hidden="true">
            <picture>
              <source media="(max-width: 639px)" srcSet="/assets/brand/home-hero-mobile.png" />
              <img
                src="/assets/brand/auralis-home-hero-bg.jpeg"
                alt=""
                className="hero-bg-img"
                decoding="async"
                loading="eager"
              />
            </picture>
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
            <h1>Auralis Digital</h1>
            <p className="hero-subhead">
              Creative products, custom design, and website services in one place.
            </p>
            <div className="cta-row centered">
              <Button variant="conversion" size="xl" asChild>
                <a href="/products">Shop Products <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button variant="conversionOutline" size="xl" asChild>
                <a href="/custom-design">Request Design</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Offering tiles ─────────────────────────────── */}
        <section className="content-section">
          <div className="site-shell">
            <div className="home-tiles">
              <Reveal className="home-tile home-tile-wide">
                <a href="/products" className="home-tile-inner">
                  <div className="home-tile-img-row">
                    {HOMEPAGE_TILE_SLUGS.map((slug) => {
                      const p = shopProducts.find((x) => x.slug === slug);
                      return p ? (
                        <img key={slug} src={p.imageUrl} alt={p.altText} loading="lazy" decoding="async" width={400} height={400} />
                      ) : null;
                    })}
                  </div>
                  <div className="home-tile-body">
                    <Store className="size-5 text-primary" aria-hidden="true" />
                    <h3>Products</h3>
                    <p>Sacred geometry, psychedelic art, and custom designs on apparel, blankets, wall art, and more.</p>
                    <span className="home-tile-link">Shop Products <ArrowRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </a>
              </Reveal>
              <Reveal className="home-tile">
                <a href="/web-design" className="home-tile-inner">
                  <img
                    src="/assets/brand/web-design-banner.jpg"
                    alt="Auralis Digital website design services"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={375}
                  />
                  <div className="home-tile-body">
                    <MonitorSmartphone className="size-5 text-primary" aria-hidden="true" />
                    <h3>Website Design</h3>
                    <p>Mobile-first websites for small businesses and local brands.</p>
                    <span className="home-tile-link">Website Design <ArrowRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </a>
              </Reveal>
              <Reveal className="home-tile">
                <a href="/custom-design" className="home-tile-inner">
                  <img
                    src={CUSTOM_DESIGN_OFFERING_PREVIEW.imageUrl}
                    alt={CUSTOM_DESIGN_OFFERING_PREVIEW.altText}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={375}
                  />
                  <div className="home-tile-body">
                    <Sparkles className="size-5 text-primary" aria-hidden="true" />
                    <h3>Custom Design</h3>
                    <p>Turn any idea, image, or theme into a personalized design.</p>
                    <span className="home-tile-link">Request Design <ArrowRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Featured products ───────────────────────────── */}
        <section className="section-band home-featured-section">
          <div className="site-shell">
            <Reveal className="section-heading compact">
              <span className="section-label">Featured</span>
              <h2>Popular products.</h2>
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
                <span className="section-label"><Sparkles className="size-4" aria-hidden="true" /> Custom Design</span>
                <h2>Turn your idea into a real design.</h2>
                <p>Send an image, phrase, symbol, or theme. Auralis reviews scope and confirms pricing before work begins.</p>
                <div>
                  <Button variant="conversion" size="lg" asChild>
                    <a href="/custom-design">Start a Request <ArrowRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Pour Social ────────────────────────────────── */}
        <section className="section-band">
          <div className="site-shell">
            <Reveal>
              <div className="service-card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="icon-tile mb-0"><Wine aria-hidden="true" /></div>
                  <div>
                    <h3 className="mb-0">Pour Social</h3>
                    <p>Mobile BYOB bar service coming soon.</p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-3">
                  <Button variant="conversion" size="sm" asChild>
                    <a href="https://pour-social.vercel.app" target="_blank" rel="noopener noreferrer">Visit Pour Social</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────── */}
        <section id="about" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <h2>Auralis Digital</h2>
              <p className="mt-4">
                Products, custom designs, and website services — built and managed by Christopher Daugherty in Southeast Michigan.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────── */}
        <section className="final-cta-section">
          <div className="site-shell">
            <Reveal className="final-cta">
              <h2>Ready to start?</h2>
              <p>Browse products, request a custom design, or start a website project.</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href="/products">Shop Products <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href="/custom-design">Request Design</a>
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
              <h1>Auralis Digital Products</h1>
              <p>Sacred geometry, psychedelic art, festival-inspired designs, and custom creations.</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="lg" asChild>
                  <a href="#products-grid">Shop All 27 Products <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="lg" asChild>
                  <a href="/custom-design">Request Custom Design</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="shop" className="content-section shop-preview" aria-labelledby="shop-preview-title">
          <div className="site-shell">
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
              <span className="section-label"><Sparkles aria-hidden="true" /> Custom Design</span>
              <h2 className="mx-auto max-w-[22rem] sm:max-w-none">
                Custom designs made personal.
              </h2>
              <p className="mx-auto mt-4 max-w-[24rem] sm:max-w-xl">
                Turn a pet photo, favorite phrase, inside joke, or personal artwork concept into something made to wear, use, gift, or display.
              </p>
            </Reveal>

            {/* ── Preview + "Great for" ──────────────────── */}
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
                  Show off your fur baby with a custom pillow, blanket, shirt, or printable design.
                </p>
              </Reveal>
              <Reveal className="service-card min-w-0">
                <div className="icon-tile"><Sparkles aria-hidden="true" /></div>
                <h3>Great for</h3>
                <div className="product-use-list mt-5">
                  {customRequestTypes.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────── */}
        <section className="section-band">
          <div className="site-shell">
            <div className="mx-auto grid w-full max-w-[calc(100vw-2.5rem)] gap-5 lg:max-w-none lg:grid-cols-2">
              <Reveal className="service-card min-w-0">
                <div className="icon-tile"><ClipboardList aria-hidden="true" /></div>
                <h3>How it works</h3>
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
                  Perfect for gifts, pets, inside jokes, memorial pieces, events, or personal artwork.
                </p>
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
              <span className="section-label">Website Design</span>
              <h2>Websites that help small businesses look credible and get contacted.</h2>
              <p className="mt-4">
                Mobile-first. Clear offers. Simple contact flow.
              </p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href="/websites">Browse Demos <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href="#contact">Start a Request</a>
                </Button>
                <a href="#pricing" className="text-sm font-medium text-primary hover:underline">
                  View Pricing
                </a>
              </div>
            </Reveal>
            <Reveal className="web-design-banner">
              <img
                src="/assets/brand/web-design-banner.jpg"
                alt="Auralis Digital website design — custom websites, mobile responsive, SEO optimized, built to convert"
                className="web-design-banner-img"
                loading="lazy"
                decoding="async"
                width={1080}
                height={1080}
              />
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
                Click through to see layout, mobile flow, and contact paths.
              </p>
            </Reveal>
            <div className="website-demo-grid">
              {websiteDemos.map((demo) => (
                <Reveal key={demo.title}>
                  <a
                    href={demo.href}
                    className="website-demo-card"
                  >
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
                      <strong>
                        {demo.category === "Client Preview" ? "View website demo" : "View sample build"} <ArrowRight className="size-4" aria-hidden="true" />
                      </strong>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <a
                href={DEMO_LIBRARY_HREF}
                className="service-card mt-8 flex flex-col gap-4 no-underline sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="mb-0">Industry Demo Library</h3>
                  <p className="text-muted-foreground">
                    Same examples in a compact static format.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary">
                  Open demo library <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
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
                  <p>{index === 0 ? "Understand the business and goals." : index === 1 ? "Map pages, content, and contact flows." : index === 2 ? "Build a polished mobile-first experience." : index === 3 ? "Refine with clear communication." : "Publish and launch."}</p>
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
              {trustItems.map((item) => (
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
                <a
                  key={area.label}
                  href={area.href}
                  className="rounded-full border border-border/40 bg-card/40 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                >
                  {area.label}
                </a>
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
              <h2>{isCustomDesign ? "Start a custom design request." : "Start your website project."}</h2>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="service-card">
                <h3>{isCustomDesign ? "Send a design request" : "Send a project request"}</h3>
                <p className="mb-6 text-muted-foreground">
                  {isCustomDesign
                    ? "Share the idea, timeline, and any constraints."
                    : "Fill in the basics. Auralis reviews scope before starting."}
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
                      : "Include your business name, current site or social page, and what action you want customers to take."}
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
              <h2>{isWebDesign ? "Ready to get started?" : "Ready to start?"}</h2>
              <p>{isWebDesign ? "Request a quote or get a free website review." : "Browse products or start a custom design request."}</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href={isWebDesign ? "/web-design#contact" : "/custom-design"}>
                    {isWebDesign ? "Get a Free Website Review" : "Start a Request"} <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href={isWebDesign ? MAILTO : "/products"}>
                    {isWebDesign ? "Request a Quote" : "Explore Products"}
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
                  Creative products, custom design, and website services.
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

      {!isHome && !isShop && (
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
