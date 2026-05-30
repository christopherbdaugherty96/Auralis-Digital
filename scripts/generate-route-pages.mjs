import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const baseUrl = "https://www.auralisdigital.net";

const routes = [
  {
    path: "/products",
    title: "Products — Sacred Geometry, Psychedelic Art & Original Designs | Auralis Digital",
    description: "Shop apparel, blankets, wall art, hats, journals, and home decor featuring sacred geometry, psychedelic art, and original designs. Checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  {
    path: "/shop",
    title: "Products — Sacred Geometry, Psychedelic Art & Original Designs | Auralis Digital",
    description: "Shop apparel, blankets, wall art, hats, journals, and home decor featuring sacred geometry, psychedelic art, and original designs. Checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  {
    path: "/custom-design",
    title: "Custom Design Requests | Auralis Digital",
    description:
      "Request a personalized design — pet portraits, photo-to-product concepts, gift ideas, symbolic artwork, and custom visuals for apparel, wall art, blankets, and accessories.",
    canonicalPath: "/custom-design",
  },
  {
    path: "/web-design",
    title: "Website Design for Small Businesses | Auralis Digital",
    description: "Mobile-first website design for small businesses, local brands, and creators in Southeast Michigan. Contact forms, SEO setup, and ongoing support included.",
    canonicalPath: "/web-design",
  },
  {
    path: "/websites",
    title: "Website Design Examples | Auralis Digital",
    description: "Browse example website builds and demo directions from Auralis Digital. See sample layouts for restaurants, lawn care, barbershops, contractors, and more.",
    canonicalPath: "/web-design",
  },
  {
    path: "/pour-social",
    title: "Pour Social — Mobile BYOB Bar Service | Auralis Digital",
    description: "Mobile BYOB bar service for events in Southeast Michigan. Pour Social is coming soon.",
    canonicalPath: "/pour-social",
  },
  {
    path: "/refund-policy",
    title: "Refund Policy | Auralis Digital",
    description:
      "Refund and support guidance for Auralis Digital product purchases, custom design requests, and website design work.",
    canonicalPath: "/refund-policy",
  },
  {
    path: "/shipping-policy",
    title: "Shipping Policy | Auralis Digital",
    description: "Shipping and fulfillment guidance for Auralis Design products purchased through Shopify.",
    canonicalPath: "/shipping-policy",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Auralis Digital",
    description:
      "Privacy guidance for Auralis Digital inquiries, product browsing, Shopify checkout, and website contact forms.",
    canonicalPath: "/privacy-policy",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Auralis Digital",
    description:
      "Terms for Auralis Digital product browsing, Shopify checkout, custom design requests, and website design inquiries.",
    canonicalPath: "/terms-of-service",
  },
];

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Could not find tag for ${replacement}`);
  return html.replace(pattern, replacement);
}

function routeHtml(template, route) {
  const canonical = `${baseUrl}${route.canonicalPath}`;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);

  let html = template.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = replaceTag(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`);
  html = replaceTag(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = replaceTag(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  return html;
}

const template = await readFile(path.join(distDir, "index.html"), "utf8");

for (const route of routes) {
  const routeDir = path.join(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), routeHtml(template, route));
}
