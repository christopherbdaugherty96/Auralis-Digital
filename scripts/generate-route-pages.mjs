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
    title: "Custom Work — Handmade Art, 3D Printing & Gift Bundles | Auralis Digital",
    description:
      "Request custom wire wraps, crystal pendants, resin art, 3D printed products, pet portraits, gift bundles, and personalized designs from Lucid Creations and RJ Print.",
    canonicalPath: "/custom-design",
  },
  {
    path: "/collections",
    title: "Collections | Auralis Digital",
    description:
      "Shop Lucid Creations product lanes by category: T-shirts, hoodies and sweatshirts, blankets, tapestries, hats, pillows, journals, and accessories.",
    canonicalPath: "/collections",
  },
  {
    path: "/creator-shops",
    title: "Creator Shops | Auralis Digital",
    description:
      "Explore the Lucid Creations Shopify shop, RJ Print, and partnered creator storefronts under Auralis Digital.",
    canonicalPath: "/creator-shops",
  },
  {
    path: "/web-design",
    title: "Custom Shopify Store Setup & E-commerce Launch | Auralis Digital",
    description: "Custom Shopify store setup, product catalog structure, Printify integration, collection organization, and e-commerce launch support for creators and small brands.",
    canonicalPath: "/web-design",
  },
  {
    path: "/websites",
    title: "Shopify Store & Website Examples | Auralis Digital",
    description: "Browse example store setups and website builds from Auralis Digital. Sample layouts for e-commerce, restaurants, lawn care, barbershops, contractors, and more.",
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
    description: "Shipping and fulfillment guidance for Lucid Creations products purchased through Shopify.",
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
