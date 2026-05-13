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
import { cn } from "@/lib/utils";

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "auralisdigitaleco@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Website Project Request")}`;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

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

const shopProducts = [
  {
    title: "Tan Sherpa Blanket",
    price: "$48.85",
    shortDescription: "Soft sherpa blanket for cozy home decor.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0783/5769/2516/files/1365855276876874161_2048.jpg?v=1778647384",
    shopifyProductUrl: "https://auralis-design.myshopify.com/products/tan-sherpa-blanket",
    altText: "Tan Sherpa Blanket",
  },
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

function HeroMockup() {
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

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [form, setForm] = useState({
    name: "", business: "", email: "",
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
      const subject = "Website Project Inquiry";
      const body = [
        "Hi Auralis Digital,",
        "",
        "I am interested in a website project.",
        "",
        `Name: ${form.name}`,
        `Business: ${form.business}`,
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
      <label className={labelCls}>Business name
        <input className={inputCls} value={form.business} onChange={set("business")} autoComplete="organization" />
      </label>
      <label className={labelCls}>Email
        <input className={inputCls} type="email" value={form.email} onChange={set("email")} required autoComplete="email" />
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
      <label className={labelCls}>Project details
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
  { label: "Shop", href: "/shop" },
  { label: "Website Services", href: "/web-design" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

type AuralisPage = "home" | "shop" | "web-design" | "websites";

export default function AuralisHomepage({ page = "home" }: { page?: AuralisPage }) {
  const scrollY = useReducedMotionAwareScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = page === "home";
  const isShop = page === "shop";
  const isWebDesign = page === "web-design";
  const isWebsites = page === "websites";

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    return () => document.removeEventListener("keydown", close);
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
              <a href={shopProducts[0].shopifyProductUrl} target="_blank" rel="noopener">View Product</a>
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
                  <a href="/shop" onClick={() => setMobileOpen(false)}>Shop Auralis Design</a>
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
              <div className="eyebrow"><Store aria-hidden="true" /> Auralis Design Shop</div>
              <h1>Shop Auralis Design pieces through a clean brand site.</h1>
              <p className="hero-subhead">
                Auralis Digital is the showcase home for Auralis Design products. Browse featured pieces here, then open Shopify when you are ready to view details or buy.
              </p>
              <div className="cta-row">
                <Button variant="conversion" size="xl" asChild>
                  <a href="/shop">Shop Auralis Design <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button variant="conversionOutline" size="xl" className="hidden sm:inline-flex" asChild>
                  <a href={shopProducts[0].shopifyProductUrl} target="_blank" rel="noopener">View Product</a>
                </Button>
              </div>
            </div>
            <a
              href={shopProducts[0].shopifyProductUrl}
              className="product-hero-card"
              target="_blank"
              rel="noopener"
              aria-label={`View ${shopProducts[0].title} on Shopify`}
            >
              <img src={shopProducts[0].imageUrl} alt={shopProducts[0].altText} />
              <span>{shopProducts[0].title}</span>
              <strong>{shopProducts[0].price}</strong>
            </a>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────── */}
        <section id="featured" className="content-section shop-preview" aria-labelledby="featured-shop-title">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Shop Auralis Design</span>
              <h2 id="featured-shop-title">Featured products stay visible on Auralis Digital.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Auralis Digital displays the product. Shopify handles checkout, payments, orders, and the Printify fulfillment path.
              </p>
            </Reveal>
            <div className="product-scroll" aria-label="Featured Auralis Design products">
              {shopProducts.map((product) => (
                <Reveal key={product.shopifyProductUrl} className="product-reveal">
                  <a
                    href={product.shopifyProductUrl}
                    className="product-card"
                    target="_blank"
                    rel="noopener"
                    aria-label={`View ${product.title} on Shopify`}
                  >
                    <img src={product.imageUrl} alt={product.altText} loading="lazy" />
                    <span className="product-meta">Shopify checkout</span>
                    <h3>{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.shortDescription}</p>
                    <span className="product-button">
                      View on Shopify <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band">
          <div className="site-shell problem-layout">
            <Reveal className="section-heading compact">
              <span className="section-label">Why this setup</span>
              <h2>Brand site for browsing. Shopify for buying.</h2>
            </Reveal>
            <Reveal className="problem-card">
              <p>
                This keeps Auralis Digital lightweight and visual while Shopify remains the source of truth for product pages, checkout, payment security, order management, and Printify fulfillment.
              </p>
            </Reveal>
          </div>
        </section>
          </>
        )}

        {/* ── Shop ────────────────────────────────────────── */}
        {isShop && (
        <section id="shop" className="content-section shop-preview" aria-labelledby="shop-preview-title">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label"><Store aria-hidden="true" /> Auralis Design Shop</span>
              <h2 id="shop-preview-title">Shop featured pieces from Auralis Design.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse selected Auralis Design products here. Product details and secure checkout open on Shopify, with Printify handling fulfillment for Printify products.
              </p>
            </Reveal>
            <Reveal className="shop-product-layout">
              <a
                href={shopProducts[0].shopifyProductUrl}
                className="shop-product-media"
                target="_blank"
                rel="noopener"
                aria-label={`View ${shopProducts[0].title} on Shopify`}
              >
                <img src={shopProducts[0].imageUrl} alt={shopProducts[0].altText} />
              </a>
              <div className="shop-product-details">
                <span className="product-meta">Featured product</span>
                <h3>{shopProducts[0].title}</h3>
                <p className="product-price">{shopProducts[0].price}</p>
                <p className="product-description">{shopProducts[0].shortDescription}</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  Auralis Digital shows the product presentation. Shopify opens in a new tab for product details, checkout, payment, order handling, and Printify fulfillment.
                </p>
                <Button variant="conversion" size="xl" asChild>
                  <a href={shopProducts[0].shopifyProductUrl} target="_blank" rel="noopener">
                    View on Shopify <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
            <div className="product-scroll" aria-label="Featured Auralis Design products">
              {shopProducts.map((product) => (
                <Reveal key={product.shopifyProductUrl} className="product-reveal">
                  <a
                    href={product.shopifyProductUrl}
                    className="product-card"
                    target="_blank"
                    rel="noopener"
                    aria-label={`View ${product.title} on Shopify`}
                  >
                    <img src={product.imageUrl} alt={product.altText} loading="lazy" />
                    <span className="product-meta">Shopify checkout</span>
                    <h3>{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.shortDescription}</p>
                    <span className="product-button">
                      View on Shopify <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Services ────────────────────────────────────── */}
        {isWebDesign && (
        <section id="services" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Website Services</span>
              <h2>Everything your local digital presence needs to feel credible.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                This service inquiry path is separate from the Auralis Design product shop.
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
        {isWebsites && (
        <section id="work" className="section-band">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Example work</span>
              <h2>Sample builds shaped around real local business needs.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These are example builds, not inflated claims. They show the kind of practical structure local businesses can use to get more calls and inquiries.
              </p>
            </Reveal>
            <Reveal>
              <a
                href={DEMO_LIBRARY_HREF}
                className="service-card flex flex-col gap-4 no-underline sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="mb-0">Industry Demo Library</h3>
                  <p className="text-muted-foreground">
                    Browse niche examples for restaurants, barbershops, painters, roofers, cleaners, salons, and more.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-primary">
                  Browse all examples <ArrowRight className="size-4" aria-hidden="true" />
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
              <h2>Auralis Digital is the brand site. Shopify is the product checkout.</h2>
            </Reveal>
            <Reveal className="problem-card">
              <p>
                Auralis Digital brings the brand, website services, and product showcase into one clear public site. Auralis Design products link to Shopify for product details, payment, order handling, and the Printify fulfillment path.
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
        {(isHome || isWebDesign) && (
        <section id="contact" className="content-section">
          <div className="site-shell">
            <Reveal className="section-heading">
              <span className="section-label">Contact</span>
              <h2>{isHome ? "Contact Auralis Digital." : "Start your project."}</h2>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="service-card">
                <h3>{isHome ? "Send a message" : "Send a project request"}</h3>
                <p className="mb-6 text-muted-foreground">
                  {isHome
                    ? "Use this form for questions about Auralis Design products or website service inquiries."
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
                    Business name, current website or social page, services offered, city or service area, and the main action you want customers to take.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ── Final CTA ───────────────────────────────────── */}
        {(isHome || isWebDesign) && (
        <section className="final-cta-section">
          <div className="site-shell">
            <Reveal className="final-cta">
              <div className="icon-tile large">{isHome ? <Store aria-hidden="true" /> : <CalendarCheck aria-hidden="true" />}</div>
              <h2>{isHome ? "Ready to shop Auralis Design?" : "Ready to make your business look professional online?"}</h2>
              <p>{isHome ? "Browse the featured product on Auralis Digital, then use Shopify for secure checkout." : "Start with a free website review or request a quote today."}</p>
              <div className="cta-row centered">
                <Button variant="conversion" size="xl" asChild>
                  <a href={isHome ? "/shop" : "/web-design#contact"}>
                    {isHome ? "Open the Shop" : "Get a Free Website Review"} <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="conversionOutline" size="xl" asChild>
                  <a href={isHome ? shopProducts[0].shopifyProductUrl : MAILTO} target={isHome ? "_blank" : undefined} rel={isHome ? "noopener" : undefined}>
                    {isHome ? "View on Shopify" : "Request a Quote"}
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
              <p className="mt-2 text-sm text-muted-foreground">A brand/display site for Auralis Design products, with Shopify handling product checkout.</p>
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
          </div>
        </footer>
      </main>

      {/* ── Sticky contact bar (desktop) ─────────────────── */}
      <div className="fixed bottom-4 right-4 z-50 hidden items-center gap-2 md:flex">
        <Button variant="conversion" size="sm" asChild>
          <a href="/shop">Shop Auralis Design</a>
        </Button>
      </div>

      {/* ── Mobile bottom CTA ────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <Button variant="conversion" size="lg" className="w-full" asChild>
          <a href="/shop">Shop Auralis Design</a>
        </Button>
      </div>
    </>
  );
}
