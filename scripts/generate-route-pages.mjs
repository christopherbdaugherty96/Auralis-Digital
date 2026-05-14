import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const baseUrl = "https://www.auralisdigital.net";

const routes = [
  {
    path: "/products",
    title: "Products | Auralis Digital",
    description: "Browse Auralis Design products and collections. Product checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  {
    path: "/shop",
    title: "Products | Auralis Digital",
    description: "Browse Auralis Design products and collections. Product checkout opens securely through Shopify.",
    canonicalPath: "/products",
  },
  {
    path: "/custom-design",
    title: "Custom Design Requests | Auralis Digital",
    description:
      "Request a personalized design, product concept, image-based idea, gift design, apparel concept, wall art concept, or custom visual from Auralis Digital.",
    canonicalPath: "/custom-design",
  },
  {
    path: "/web-design",
    title: "Website Design | Auralis Digital",
    description: "Clean website design for small businesses, creators, and local brands that need a stronger online presence.",
    canonicalPath: "/web-design",
  },
  {
    path: "/websites",
    title: "Website Examples | Auralis Digital",
    description: "Browse example website builds and demo directions from Auralis Digital.",
    canonicalPath: "/websites",
  },
  {
    path: "/refund-policy",
    title: "Refund Policy | Auralis Digital",
    description:
      "Review Auralis Digital refund and support guidance for product purchases, custom design requests, and website design work.",
    canonicalPath: "/refund-policy",
  },
  {
    path: "/shipping-policy",
    title: "Shipping Policy | Auralis Digital",
    description: "Review shipping and fulfillment guidance for Auralis Design products fulfilled through Shopify and Printify.",
    canonicalPath: "/shipping-policy",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Auralis Digital",
    description:
      "Review privacy guidance for Auralis Digital inquiries, product browsing, Shopify checkout links, and website contact forms.",
    canonicalPath: "/privacy-policy",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Auralis Digital",
    description:
      "Review Auralis Digital terms for product browsing, Shopify checkout links, custom design requests, and website design inquiries.",
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
