import { useEffect, useMemo, useState, type ReactNode, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Leaf,
  MapPin,
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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  featuredProduct,
  productReasons,
  productTrustSteps,
  productUseCases,
  shopFaqs,
  shopProducts,
  type ShopProduct,
} from "@/data/shopCatalog";
import { cn } from "@/lib/utils";

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "auralisdigitaleco@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Auralis Inquiry")}`;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const homeOfferings = [
  {
    title: "Products",
    copy: "Browse original Auralis Design pieces and collections. Checkout opens securely through Shopify.",
    href: "/products",
    cta: "Explore Products",
    icon: Store,
  },
  {
    title: "Custom Design",
    copy: "Request a personalized design based on an idea, image, phrase, theme, symbol, or product concept.",
    href: "/custom-design",
    cta: "Request Custom Design",
    icon: Sparkles,
  },
  {
    title: "Website Design",
    copy: "Clean websites for small businesses, creators, and local brands that need a stronger online presence.",
    href: "/web-design",
    cta: "Website Design",
    icon: MonitorSmartphone,
  },
];

const customRequestTypes = [
  "Personal artwork",
  "Image or theme-based design",
  "Gift design",
  "Product photo concept",
  "Apparel concept",
  "Poster or wall art concept",
  "Blanket, mug, journal, canvas, or shirt design",
  "Creator or small-brand visual",
];

const customProcess = [
  "Send the idea",
  "Auralis reviews scope",
  "You get a quote or next step",
  "Design direction is confirmed",
  "Final design or product preview is prepared",
];

const services = [
  { title: "Website design", copy: "Clean, credible websites shaped around what local customers need to see first.", icon: Paintbrush },
  { title: "Landing pages", copy: "Focused pages for offers, events, ads, seasonal services, and quote requests.", icon: Store },
  { title: "Mobile optimization", copy: "Responsive layouts that make calling, booking, and reading effortless on phones.", icon: MonitorSmartphone },
  { title: "Local SEO setup", copy: "Page structure, location signals, and search basics that help nearby customers find you.", icon: SearchCheck },
  { title: "Contact and booking forms", copy: "Simple flows that route visitors toward calls, quotes, bookings, or messages.", icon: MessageSquareText },
  { title: "Content and brand cleanup", copy: "Sharper wording, better hierarchy, and a more consistent professional presence.", icon: Sparkles },
];

const process = ["Discover", "Structure", "Design", "Review", "Launch"];

const DEMO_LIBRARY_HREF = "projects/demo-index.html";

const concepts = [
  { name: "Barbershop", note: "Booking-forward pages with services, location, and social proof sections.", icon: Scissors },
  { name: "Restaurant", note: "Menu, hours, directions, reservations, and fast mobile browsing.", icon: UtensilsCrossed },
  { name: "Lawn care", note: "Quote-first service pages for neighborhoods, packages, and seasonal work.", icon: Leaf },
  { name: "Mobile bartending", note: "Event inquiry flows with packages, galleries, and availability prompts.", icon: Wine },
  { name: "Contractor", note: "Trust-focused project pages with service areas, quote forms, and clear calls.", icon: Hammer },
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
  {
    q: "How fast can a basic site be built?",
    a: "Simple sites can usually move quickly when the business name, services, photos, contact info, and preferred style are ready.",
  },
  {
    q: "Do I need photos?",
    a: "Photos help, but the first version can start with strong layout, clean copy, and placeholder visuals while real photos are gathered.",
  },
  {
    q: "Can you refresh an existing site?",
    a: "Website Refresh is for sites originally built by Auralis Digital. Third-party sites usually need an audit, rebuild, migration, or custom quote before improvement work begins.",
  },
  {
    q: "What does the $250 managed hosting and care plan include?",
    a: "Stress-free website management, hosting/deployment coordination, routine upkeep, small content updates, and priority support. It is not unlimited redesign or development work.",
  },
  {
    q: "Do I need to handle my own hosting?",
    a: "By default, clients own and pay for their domain and hosting. Auralis Digital can help configure, connect, and maintain the site as part of a care plan.",
  },
  {
    q: "What areas do you serve?",
    a: "Southeast Michigan — Belleville, Ypsilanti, Ann Arbor, Detroit Metro, Downriver, and surrounding communities.",
  },
];

const proofPoints = [
  {
    stat: "Mobile-first",
    detail: "Every site is built around phone visitors first — because that's where local customers check before they call.",
  },
  {
    stat: "No surprise scope",
    detail: "Final price and page count are confirmed before work starts. Revisions are documented and capped.",
  },
  {
    stat: "You own everything",
    detail: "Domain, hosting, and files stay yours. No lock-in, no proprietary platform that disappears.",
  },
  {
    stat: "Built for action",
    detail: "Every site is designed around one goal: make it easy for visitors to call, book, or request a quote.",
  },
];

const trustItems = [
  "Built for local businesses",
  "Clear communication",
  "Simple process",
  "Mobile-first",
  "No confusing tech talk",
  "Designed around calls, quotes, bookings, and messages",
];

const benefits = [
  { label: "Mobile-first", icon: MonitorSmartphone, className: "hero-card-one" },
  { label: "Local SEO ready", icon: MapPin, className: "hero-card-two" },
  { label: "Fast launch", icon: Zap, className: "hero-card-three" },
  { label: "Clear contact flow", icon: MessageSquareText, className: "hero-card-four" },
];

function useReducedMotionAwareScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollY;
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const id = useMemo(() => `reveal-${Math.random().toString(36).slice(2)}`, []);

  useEffect(() => {
    const target = document.querySelector(`[data-reveal-id="${id}"]`);
    if (!target) return;
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
    title: "Auralis Digital | Creative Design, Products, and Websites",
    description:
      "Auralis Digital creates original products, custom visual designs, personalized design requests, and clean websites for people, creators, and small businesses.",
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

function ProductImageGallery({ product }: { product: ShopProduct }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPhoto = product.photos[selectedIndex] ?? product.photos[0];

  return (
    <div className="product-gallery-card" aria-label={`${product.title} product images`}>
      <div className="product-gallery-main">
        <img src={selectedPhoto.imageUrl} alt={selectedPhoto.altText} />
      </div>
      <div className="product-gallery-thumbs" aria-label={`${product.title} photo gallery`}>
        {product.photos.map((photo, index) => (
          <button
            key={`${photo.imageUrl}-${photo.label}`}
            type="button"
            className={cn("product-gallery-thumb", selectedIndex === index && "is-active")}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Show ${photo.label}`}
            aria-pressed={selectedIndex === index}
          >
            <img src={photo.imageUrl} alt="" loading={index === 0 ? "eager" : "lazy"} />
            <span>{photo.label}</span>
          </button>
        ))}
      </div>
      <p className="product-gallery-note">
        Browse the product photos here. Shopify opens in a new tab only when you are ready to buy.
      </p>
    </div>
  );
}

function ProductPhotoScroll({ product }: { product: ShopProduct }) {
  return (
    <>
      <div className="product-card-photos" aria-label={`${product.title} product photos`}>
        {product.photos.map((photo, index) => (
          <img
            key={`${product.slug}-${photo.imageUrl}`}
            src={photo.imageUrl}
            alt={photo.altText}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <p className="product-card-swipe">Swipe photos</p>
    </>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <article className="product-card">
      <ProductPhotoScroll product={product} />
      <div className="product-card-body">
        <span className="product-meta">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.shortDescription}</p>
      </div>
      <a
        href={product.shopifyTrackingUrl}
        className="product-button"
        target="_blank"
        rel="noopener"
        aria-label={`View ${product.title} on Shopify`}
      >
        View on Shopify <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  );
}

function ProductCatalogGrid() {
  const catalogProducts = shopProducts.filter((product) => product.slug !== featuredProduct.slug);

  return (
    <Reveal className="product-catalog-section">
      <div className="section-heading compact">
        <span className="section-label">All products</span>
        <h2>Browse every current Auralis Design product.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every card includes photos, price, size notes, and a clear Shopify button when you are ready to buy.
        </p>
      </div>
      <div className="product-catalog-grid">
        {catalogProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Reveal>
  );
}

function HeroPreviewGraphic() {
  return (
    <div className="hero-preview-wrap" aria-label="Website preview for a local business homepage">
      <div className="hero-preview">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-hero">
          <div>
            <p className="preview-kicker">Local service website</p>
            <h2>Look trusted before they call.</h2>
          </div>
          <div className="preview-phone">
            <div className="phone-speaker" />
            <div className="phone-card" />
            <div className="phone-line" />
            <div className="phone-line short" />
            <div className="phone-button" />
          </div>
        </div>
        <div className="preview-grid">
          <div className="preview-panel strong" />
          <div className="preview-panel" />
          <div className="preview-panel" />
        </div>
        <div className="preview-cta-row">
          <span />
          <span />
        </div>
      </div>
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div key={benefit.label} className={cn("floating-benefit", benefit.className)}>
            <Icon aria-hidden="true" />
            <span>{benefit.label}</span>
          </div>
        );
      })}
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
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{policy.intro}</p>
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

  const inputCls = "mt-1 mb-4 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";
  const labelCls = "block text-sm font-bold text-foreground";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-black">Message received.</h3>
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
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Custom Design", href: "/custom-design" },
  { label: "Website Design", href: "/web-design" },
  { label: "Contact", href: "/#contact" },
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
  | "refund-policy"
  | "shipping-policy"
  | "privacy-policy"
  | "terms-of-service";

type PolicyPage = keyof typeof policyPages;

export default function AuralisHomepage({ page = "home" }: { page?: AuralisPage }) {
  const scrollY = useReducedMotionAwareScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = page === "home";
  const isShop = page === "shop";
  const isCustomDesign = page === "custom-design";
  const isWebDesign = page === "web-design";
  const isWebsites = page === "websites";
  const isPolicyPage = page in policyPages;

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
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="site-shell flex items-center justify-between py-3">
          <a href="/" className="text-lg font-black tracking-tight text-foreground" onClick={() => setMobileOpen(false)}>
            AURALIS DIGITAL
          </a>
          <nav className="hidden items-center gap-4 lg:gap-6 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-xs font-bold text-muted-foreground hover:text-foreground lg:text-sm">{l.label}</a>
            ))}
            <Button variant="conversion" size="sm" asChild>
              <a href="/custom-design">Start a Request</a>
            </Button>
          </nav>
          {/* Mobile: hamburger */}
          <button
            className="md:hidden rounded-md p-2 text-foreground hover:bg-accent"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
            <nav className="site-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-base font-bold text-muted-foreground hover:bg-accent hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button variant="conversion" size="lg" className="w-full" asChild>
                  <a href="/custom-design" onClick={() => setMobileOpen(false)}>Start a Request</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="auralis-page overflow-hidden">
        <div className="ambient-layer" aria-hidden="true">
          <div className="ambient-grid" />
          <div className="parallax-shape shape-one" style={{ transform: `translate3d(0, ${scrollY * 0.035}px, 0)` }} />
          <div className="parallax-shape shape-two" style={{ transform: `translate3d(0, ${scrollY * -0.025}px, 0)` }} />
        </div>

        {isHome && (
          <>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles aria-hidden="true" /> Auralis Digital</div>
              <h1>Creative design for products, personal ideas, and digital presence.</h1>
              <p className="hero-subhead">
                Auralis Digital brings together original product designs, custom visual requests, and practical website design for people, creators, and small businesses.
              </p>
              <div className="cta-row">
                <Button variant="conversion" size="xl" asChild>
                  <a href="/products">Explore Products <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" className="hidden sm:inline-flex" asChild>
                  <a href="/custom-design">Request Custom Design</a>
                </Button>
              </div>
            </div>
            <HeroPreviewGraphic />
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────── */}
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">What Auralis does</span>
              <h2>Choose the path that matches what you need.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Auralis is built around creative output: ready-to-buy products, custom visual requests, and clean website design.
              </p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {homeOfferings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Reveal key={offering.title} className="service-card flex flex-col gap-4">
                    <div className="icon-tile"><Icon aria-hidden="true" /></div>
                    <h3>{offering.title}</h3>
                    <p>{offering.copy}</p>
                    <a href={offering.href} className="mt-auto inline-flex items-center gap-2 text-sm font-black text-primary">
                      {offering.cta} <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-band">
          <div className="site-shell problem-layout">
            <Reveal className="section-heading compact">
              <span className="section-label">Brand structure</span>
              <h2>Products, custom design, and websites live under one creative brand.</h2>
            </Reveal>
            <Reveal className="problem-card">
              <p>
                Auralis Design is the product line. Custom Design is the request path for personal ideas, gift concepts, and visual concepts. Website Design remains available for small businesses, creators, and local brands that need a stronger online presence.
              </p>
            </Reveal>
          </div>
        </section>
          </>
        )}

        {/* ── Shop ────────────────────────────────────────── */}
        {isPolicyPage && <PolicyPageContent page={page as PolicyPage} />}

        {isShop && (
        <section id="shop" className="content-section shop-preview" aria-labelledby="shop-preview-title">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label"><Store aria-hidden="true" /> Auralis Design Shop</span>
              <h2 id="shop-preview-title">Shop Auralis Design products.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse Auralis Design products here with photos, product details, categories, and home decor notes. When you are ready to buy, secure checkout opens on Shopify.
              </p>
            </Reveal>
            <Reveal className="shop-product-layout">
              <ProductImageGallery product={featuredProduct} />
              <div className="shop-product-info-card">
                <div>
                  <span className="product-meta">Featured product</span>
                  <h3>{featuredProduct.title}</h3>
                  <p className="product-price">{featuredProduct.price}</p>
                  <p className="product-description">{featuredProduct.detailDescription}</p>
                </div>
                <div className="product-highlight-grid" aria-label={`${featuredProduct.title} highlights`}>
                  {featuredProduct.highlights.map((highlight) => (
                    <span key={highlight}><CheckCircle2 aria-hidden="true" /> {highlight}</span>
                  ))}
                </div>
                <dl className="product-spec-list">
                  {featuredProduct.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="product-buy-panel">
                  <p>
                    Auralis Digital displays the product. Shopify handles checkout, payment, orders, and fulfillment routing.
                  </p>
                  <Button variant="conversion" size="xl" asChild>
                    <a href={featuredProduct.shopifyTrackingUrl} target="_blank" rel="noopener">
                      Buy on Shopify <ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
            <ProductCatalogGrid />
            <Reveal className="product-marketing-grid">
              <div className="product-story-panel">
                <span className="product-meta">Why you'll like it</span>
                <h3>A growing product collection with expressive artwork and practical everyday formats.</h3>
                <ul>
                  {productReasons.map((reason) => (
                    <li key={reason}><CheckCircle2 aria-hidden="true" /> {reason}</li>
                  ))}
                </ul>
              </div>
              <div className="product-good-for-panel">
                <span className="product-meta">Good for</span>
                <div className="product-use-list">
                  {productUseCases.map((useCase) => (
                    <span key={useCase}>{useCase}</span>
                  ))}
                </div>
                <p>
                  The Auralis Design catalog includes cozy blankets, paper goods, drinkware, and wall art for home decor, creative spaces, and simple gift ideas.
                </p>
              </div>
            </Reveal>
            <Reveal className="product-flow-strip" aria-label="Customer shopping flow">
              {productTrustSteps.map((step) => (
                <div key={step.title}>
                  <BadgeCheck aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="product-flow-strip" aria-label="Product order process">
              {[
                "Browse products on Auralis Digital",
                "Open the product on Shopify",
                "Checkout securely",
                "Production and fulfillment happen after purchase",
              ].map((step, index) => (
                <div key={step}>
                  <BadgeCheck aria-hidden="true" />
                  <h3>{index + 1}. {step}</h3>
                  <p>{index === 0 ? "Stay on the brand site while comparing photos, categories, and product notes." : "Checkout happens through Shopify, and production begins after purchase for made-to-order items."}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="review-disclosure-panel">
              <span className="product-meta">Material reviews</span>
              <h3>Reviews can be labeled by what they actually tested.</h3>
              <p>
                Feedback about softness, warmth, or the sherpa blanket base should be labeled as product-base feedback unless the customer reviewed this exact Auralis Design artwork.
              </p>
              <p className="review-note">{featuredProduct.reviewScope}</p>
            </Reveal>
            <Reveal className="shop-faq-panel">
              <div className="section-heading compact">
                <span className="section-label">Product FAQ</span>
                <h2>Questions before checkout.</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Auralis Digital keeps browsing clear, while Shopify remains the secure checkout and order source of truth.
                </p>
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
        )}

        {/* ── Services ────────────────────────────────────── */}
        {isCustomDesign && (
        <section id="custom-design" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label"><Sparkles aria-hidden="true" /> Custom Design</span>
              <h2>Custom design requests for personal ideas, gifts, products, and creative visuals.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have an idea, image, phrase, symbol, theme, or product concept you want turned into a design? Auralis reviews custom requests and confirms scope before work begins.
              </p>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="service-card">
                <div className="icon-tile"><Sparkles aria-hidden="true" /></div>
                <h3>What you can request</h3>
                <div className="product-use-list mt-5">
                  {customRequestTypes.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="service-card">
                <div className="icon-tile"><ClipboardList aria-hidden="true" /></div>
                <h3>How it works</h3>
                <ul className="mt-5 space-y-3">
                  {customProcess.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm font-bold text-muted-foreground">
                      <span className="step-number !h-8 !w-8 !text-xs">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="mt-8 service-card border-primary/20 bg-primary/5">
              <span className="product-meta">Request boundaries</span>
              <h3>Every custom request is reviewed before acceptance.</h3>
              <p className="mt-3 text-muted-foreground">
                Pricing depends on complexity, intended use, product type, turnaround, and revision needs. Auralis may decline requests involving copyrighted characters, logos, unclear usage rights, offensive content, or designs that cannot be produced cleanly.
              </p>
            </Reveal>
          </div>
        </section>
        )}

        {isWebDesign && (
        <section id="services" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Website Design</span>
              <h2>Clean websites for businesses, creators, and local brands.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Website design is one Auralis service path, separate from products and custom visual requests.
              </p>
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

        {/* ── Example work ────────────────────────────────── */}
        {isWebDesign && (
        <section className="section-band">
          <div className="site-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-14">
            <Reveal className="section-heading compact">
              <span className="section-label">Website preview</span>
              <h2>Look trusted before customers call.</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Auralis website design focuses on the first few seconds: a polished mobile view, clear service message, local trust signals, and an obvious contact path.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.label} className="web-preview-benefit">
                      <Icon aria-hidden="true" />
                      <span>{benefit.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal>
              <HeroPreviewGraphic />
            </Reveal>
          </div>
        </section>
        )}

        {isWebsites && (
        <section id="work" className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Example work</span>
              <h2>Website demos shaped around real local business needs.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These are sample website directions, not client claims. Click through the examples to see how layout, mobile calls, trust sections, and quote paths can work for different businesses.
              </p>
            </Reveal>
            <div className="website-demo-grid">
              {websiteDemos.map((demo) => (
                <Reveal key={demo.title}>
                  <a
                    href={demo.href}
                    className="website-demo-card"
                    target={demo.external ? "_blank" : undefined}
                    rel={demo.external ? "noopener" : undefined}
                  >
                    <img src={demo.imageUrl} alt={`${demo.title} website demo thumbnail`} loading="lazy" />
                    <div className="website-demo-body">
                      <span>{demo.category}</span>
                      <h3>{demo.title}</h3>
                      <p>{demo.description}</p>
                      <strong>
                        View sample build <ArrowRight className="size-4" aria-hidden="true" />
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
                    Open the original static demo hub with the same examples in a compact library format.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-primary">
                  Open demo library <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Proof / Results ─────────────────────────────── */}
        {isWebDesign && (
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Why it works</span>
              <h2>What separates a site that gets calls from one that gets ignored.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Testimonials are added as clients launch. In the meantime, here is the honest reasoning behind every decision.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {proofPoints.map((p) => (
                <Reveal key={p.stat} className="service-card flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Star className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-base font-black text-foreground">{p.stat}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <div className="service-card border-primary/20 bg-primary/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-primary">Client results</p>
                  <p className="mt-1 text-base font-bold text-foreground">Real testimonials posted as projects complete.</p>
                  <p className="mt-1 text-sm text-muted-foreground">No invented reviews. Proof is earned, not faked.</p>
                </div>
                <Button variant="conversion" size="lg" className="shrink-0" asChild>
                  <a href="#contact">Get a Free Website Review <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Process ─────────────────────────────────────── */}
        {isWebDesign && (
        <section id="process" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Process</span>
              <h2>A simple path from scattered ideas to a launched website.</h2>
            </Reveal>
            <div className="process-line">
              {process.map((step, index) => (
                <Reveal key={step} className="process-step">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step}</h3>
                  <p>{index === 0 ? "Understand the business and goals." : index === 1 ? "Map pages, content, and contact flows." : index === 2 ? "Create a polished mobile-first experience." : index === 3 ? "Refine details with clear communication." : "Publish with the essentials in place."}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Website demos link */}
        {isWebDesign && (
        <section id="website-demos" className="section-band">
          <div className="site-shell">
            <Reveal>
              <a href="/websites" className="service-card flex flex-col gap-5 no-underline sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="section-label">Website demos</span>
                  <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Want to see example designs first?</h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                    Browse sample website designs for restaurants, lawn care, barbershops, salons, contractors, cleaning services, mobile detailing, photographers, and more.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground shadow-conversion">
                  View website demos <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Pricing ─────────────────────────────────────── */}
        {isWebDesign && (
        <section id="pricing" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Pricing</span>
              <h2>Clear starting points with room to grow.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simple entry points. Final scope is confirmed before work starts, so there are no surprise expectations.
              </p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {pricing.filter((t) => !t.retainer).map((tier) => (
                <Reveal key={tier.title}>
                  <div className={cn(
                    "service-card flex flex-col gap-4 h-full",
                    tier.featured && "ring-2 ring-primary/40 shadow-conversion"
                  )}>
                    <span className="inline-block rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-bold text-primary">
                      {tier.label}
                    </span>
                    <h3 className="mb-0">{tier.title}</h3>
                    <p className="text-4xl font-black text-foreground">{tier.price}</p>
                    <p className="text-muted-foreground">{tier.note}</p>
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
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Final pricing depends on page count, content needs, photos, features, and launch support.
            </p>

            {/* Care plan */}
            {pricing.filter((t) => t.retainer).map((tier) => (
              <Reveal key={tier.title} className="mt-8">
                <div className="service-card flex flex-col gap-4 border-primary/30 bg-primary/5 md:flex-row md:items-center md:gap-10">
                  <div className="shrink-0">
                    <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {tier.label}
                    </span>
                    <h3 className="mb-0 mt-3">{tier.title}</h3>
                    <p className="text-4xl font-black text-foreground">{tier.price}</p>
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
              </Reveal>
            ))}
          </div>
        </section>
        )}

        {/* ── Who this is for ─────────────────────────────── */}
        {isWebDesign && (
        <section className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Who this is for</span>
              <h2>Built for the kind of businesses that need to look real online.</h2>
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
              <span className="section-label">Trust</span>
              <h2>Professional without making the process complicated.</h2>
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

        {/* ── About ───────────────────────────────────────── */}
        {isHome && (
        <section id="about" className="content-section">
          <div className="site-shell problem-layout">
            <Reveal className="section-heading compact">
              <span className="section-label">About</span>
              <h2>Auralis Digital is the creative home for products, custom design, and websites.</h2>
            </Reveal>
            <Reveal className="problem-card">
              <p>
                Auralis Design products live alongside custom visual requests and website design. Product purchases open through Shopify, while custom design and website work start with a reviewed inquiry.
              </p>
            </Reveal>
          </div>
        </section>
        )}

        {/* ── Service areas ───────────────────────────────── */}
        {isWebsites && (
        <section id="areas" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Service area</span>
              <h2>Built for Michigan small businesses.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Auralis Digital supports local business websites across southeast Michigan and nearby communities.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <a
                  key={area.label}
                  href={area.href}
                  className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-bold text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
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
              <span className="section-label">FAQ</span>
              <h2>Questions local owners usually ask first.</h2>
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
        {(isHome || isCustomDesign || isWebDesign) && (
        <section id="contact" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Contact</span>
              <h2>{isHome ? "Contact Auralis Digital." : isCustomDesign ? "Start a custom design request." : "Start your website project."}</h2>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="service-card">
                <h3>{isHome ? "Send a message" : isCustomDesign ? "Send a design request" : "Send a project request"}</h3>
                <p className="mb-6 text-muted-foreground">
                  {isHome
                    ? "Use this form for product questions, custom design requests, website design, or general inquiries."
                    : isCustomDesign
                      ? "Share the idea, use, timeline, and any important constraints. Auralis will review fit before accepting the request."
                      : "Fill in the basics and Auralis Digital will review what your business needs first."}
                </p>
                <ContactForm />
              </Reveal>
              <div className="flex flex-col gap-5">
                <Reveal className="service-card">
                  <h3>Prefer to reach out directly?</h3>
                  <div className="mt-4 space-y-3">
                    <a href={MAILTO} className="flex items-center gap-3 break-all font-bold text-foreground hover:text-primary">
                      <MessageSquareText className="size-5 shrink-0 text-primary" aria-hidden="true" /> {EMAIL}
                    </a>
                    <p className="text-sm text-muted-foreground">Service area: Michigan local businesses</p>
                  </div>
                </Reveal>
                <Reveal className="service-card border-primary/20 bg-primary/5">
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary">What to include</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For products, include the item name. For custom design, include the idea, intended use, timeline, and constraints. For websites, include the business name, current site or social page, and the main action you want customers to take.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ── Final CTA ───────────────────────────────────── */}
        {(isHome || isCustomDesign || isWebDesign) && (
        <section className="final-cta-section">
          <div className="site-shell">
            <Reveal className="final-cta">
              <div className="icon-tile large">{isWebDesign ? <CalendarCheck aria-hidden="true" /> : <Sparkles aria-hidden="true" />}</div>
              <h2>{isWebDesign ? "Ready to make your business look professional online?" : "Ready to start with Auralis?"}</h2>
              <p>{isWebDesign ? "Start with a free website review or request a quote today." : "Choose products, custom design, or website design and send the right request path."}</p>
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
        <footer className="border-t border-border bg-card/60 py-10 backdrop-blur-sm">
          <div className="site-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-base font-black tracking-tight text-foreground">AURALIS DIGITAL</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Auralis is a creative brand for products, custom visual requests, and clean website design.
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">Contact</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <a href={MAILTO} className="block break-all hover:text-primary">{EMAIL}</a>
                <p>Michigan</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">Explore</p>
              <div className="flex flex-wrap gap-2">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                ))}
              </div>
              <a href="sitemap.xml" className="mt-3 block text-sm text-muted-foreground hover:text-primary">Sitemap</a>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">Shop policies</p>
              <div className="flex flex-wrap gap-2">
                {POLICY_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>

      {!isShop && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden">
          <Button variant="conversion" size="lg" className="w-full" asChild>
            <a href="/custom-design">Start a Request</a>
          </Button>
        </div>
      )}
    </>
  );
}
