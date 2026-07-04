#!/usr/bin/env node
/**
 * Shop catalog generator: fetches live published products from Shopify and
 * writes src/data/shopCatalog.ts. Shopify is the source of truth; curated
 * copy, exclusions, and FAQs come from src/data/shopCatalogOverrides.mjs.
 *
 * Live source: the store's public /products.json endpoint (products published
 * to the Online Store channel; no credentials needed). Fields it doesn't
 * expose (short/detail descriptions, site category, review scope) are derived
 * from title/type/body_html and can be corrected per handle in the overrides
 * file — derived values are only a fallback for uncurated products.
 *
 * Output is deterministic for a given store state: products sorted by title
 * (handle as tiebreak), stable field order, stable string escaping.
 *
 * Usage: node scripts/generate-shop-catalog.mjs
 * Exit codes: 0 = catalog written, 2 = script/network error (nothing written).
 */

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  displayVendor,
  excludedHandles,
  productOverrides,
  shopFaqs,
} from "../src/data/shopCatalogOverrides.mjs";

const STORE_BASE = "https://auralis-design.myshopify.com";
const CATALOG_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
  "shopCatalog.ts",
);
const MAX_PHOTOS = 4;

// Categories the site currently knows how to order (AuralisHomepage.tsx
// preferredProductCategoryOrder); anything outside this list still renders,
// but gets logged so the owner can decide where it belongs.
const KNOWN_CATEGORIES = [
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Blankets",
  "Wall Decor",
  "Hats",
  "Home Decor",
  "Accessories",
  "Journals & Notebooks",
  "Apparel",
];

async function fetchLiveProducts() {
  const products = [];
  for (let page = 1; ; page++) {
    const url = `${STORE_BASE}/products.json?limit=250&page=${page}`;
    const res = await fetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) {
      throw new Error(`Fetch failed: ${url} -> HTTP ${res.status}`);
    }
    const body = await res.json();
    if (!Array.isArray(body.products) || body.products.length === 0) break;
    products.push(...body.products);
    if (body.products.length < 250) break;
  }
  return products;
}

const GARMENT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

const isGarmentSizeList = (values) =>
  values.length > 1 && values.every((v) => GARMENT_SIZES.includes(v));

// Compact per-option summary used in variantSummary, e.g. "S–5XL", "6 colors".
function summarizeOption(option) {
  const { name, values } = option;
  if (values.length === 1) return values[0];
  if (isGarmentSizeList(values)) return `${values[0]}–${values[values.length - 1]}`;
  if (/color/i.test(name)) return `${values.length} colors`;
  return `${values[0]} and larger sizes`;
}

// Fuller per-option summary used in the "Options" spec row, e.g. full color list.
function expandOption(option) {
  const { values } = option;
  if (isGarmentSizeList(values)) return `${values[0]}–${values[values.length - 1]}`;
  return values.join(", ");
}

function deriveVariantSummary(product) {
  return product.options.map(summarizeOption).join(" / ");
}

function deriveOptionsSpec(product) {
  return product.options.map(expandOption).join(" / ");
}

function deriveCategory(product) {
  const title = product.title.toLowerCase();
  const type = product.product_type;
  if (type === "Hats") return "Hats";
  if (type === "T-Shirt") return "T-Shirts";
  if (type === "Hoodie") return "Hoodies";
  if (type === "Sweatshirt") return "Sweatshirts";
  if (type === "Paper products") return "Journals & Notebooks";
  if (type === "Accessories") return "Accessories";
  if (title.includes("tapestry")) return "Wall Decor";
  if (title.includes("blanket")) return "Blankets";
  if (title.includes("hoodie")) return "Hoodies";
  if (title.includes("tee") || title.includes("t-shirt")) return "T-Shirts";
  if (title.includes("hat") || title.includes("cap")) return "Hats";
  if (title.includes("robe") || title.includes("kimono")) return "Apparel";
  return "Home Decor";
}

// Product-base noun for the review scope sentence, most specific match first.
const REVIEW_BASES = [
  ["trucker cap", "trucker cap"],
  ["corduroy cap", "corduroy cap"],
  ["dad cap", "dad cap"],
  ["bucket hat", "bucket hat"],
  ["tapestry", "tapestry"],
  ["hooded sherpa", "hooded sherpa blanket"],
  ["sherpa blanket", "sherpa blanket"],
  ["woven blanket", "woven blanket"],
  ["blanket", "blanket"],
  ["pillow", "pillow"],
  ["journal", "journal"],
  ["notebook", "spiral notebook"],
  ["necklace", "pendant necklace"],
  ["acid wash tee", "acid wash tee"],
  ["crewneck sweatshirt", "crewneck sweatshirt"],
  ["sweatshirt", "sweatshirt"],
  ["hoodie", "hoodie"],
  ["heavy cotton tee", "heavy cotton tee"],
  ["tee", "tee"],
  ["t-shirt", "tee"],
  ["robe", "kimono robe"],
];

function deriveReviewScope(product, displayTitle) {
  const title = product.title.toLowerCase();
  const match = REVIEW_BASES.find(([needle]) => title.includes(needle));
  const base = match ? match[1] : product.product_type.toLowerCase();
  return `Reviews should refer to the ${base} product base unless they mention this exact ${displayTitle} design.`;
}

const HTML_ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

// Fallback plain-text rendering of Shopify body_html, keeping the ".:" bullet
// convention used across the store's Printify descriptions.
function htmlToText(html) {
  let text = (html ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|ul|ol)>/gi, "\n\n")
    .replace(/<li[^>]*>/gi, ".: ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "");
  text = text.replace(/&[a-z#0-9]+;/gi, (entity) => HTML_ENTITIES[entity] ?? entity);
  return text
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function deriveShortDescription(bodyText) {
  const firstLine = bodyText.split("\n", 1)[0] ?? "";
  const sentenceEnd = firstLine.indexOf(". ");
  const sentence = sentenceEnd === -1 ? firstLine : firstLine.slice(0, sentenceEnd + 1);
  return sentence.length > 200 ? `${sentence.slice(0, 197)}...` : sentence;
}

function buildProduct(product) {
  const handle = product.handle;
  const override = productOverrides[handle] ?? {};
  const title = override.title ?? product.title;
  const prices = (product.variants ?? [])
    .map((v) => Number.parseFloat(v.price))
    .filter(Number.isFinite);
  if (prices.length === 0) throw new Error(`No variant prices for "${handle}"`);
  const images = (product.images ?? []).map((img) => img.src).filter(Boolean);
  if (images.length === 0) throw new Error(`No images for "${handle}"`);
  const bodyText = htmlToText(product.body_html);
  const photos = images.slice(0, MAX_PHOTOS).map((src, i) => ({
    label: `Photo ${i + 1}`,
    imageUrl: src,
    altText: `${title} product photo ${i + 1}`,
  }));
  const category = override.category ?? deriveCategory(product);
  const variantSummary = override.variantSummary ?? deriveVariantSummary(product);
  const productUrl = `${STORE_BASE}/products/${handle}`;

  const derived = {
    title,
    price: `$${Math.min(...prices).toFixed(2)}`,
    vendor: displayVendor,
    shopifyVendor: product.vendor,
    productType: product.product_type,
    variantSummary,
    category,
    slug: handle,
    shortDescription: deriveShortDescription(bodyText),
    detailDescription: bodyText,
    imageUrl: images[0],
    shopifyProductUrl: productUrl,
    shopifyTrackingUrl: `${STORE_BASE}/products/${encodeURIComponent(handle)}`,
    altText: title,
    highlights: [
      variantSummary,
      category,
      product.product_type,
      `${photos.length} product photo${photos.length === 1 ? "" : "s"}`,
    ],
    specs: [
      { label: "Product", value: product.product_type },
      { label: "Brand", value: displayVendor },
      { label: "Category", value: category },
      { label: "Options", value: deriveOptionsSpec(product) },
      { label: "Variants", value: String((product.variants ?? []).length) },
      { label: "Checkout", value: "Opens through Shopify" },
      { label: "Production", value: "Made after purchase by production partners" },
      ...(override.extraSpecs ?? []),
    ],
    photos,
    reviewScope: deriveReviewScope(product, title),
  };

  const { extraSpecs, ...fieldOverrides } = override;
  void extraSpecs;
  return { ...derived, ...fieldOverrides };
}

// --- serialization ------------------------------------------------------

const str = (value) => JSON.stringify(value);

function serializeProduct(p) {
  const lines = [];
  lines.push("  {");
  lines.push(`    title: ${str(p.title)},`);
  lines.push(`    price: ${str(p.price)},`);
  lines.push(`    vendor: ${str(p.vendor)},`);
  lines.push(`    shopifyVendor: ${str(p.shopifyVendor)},`);
  lines.push(`    productType: ${str(p.productType)},`);
  lines.push(`    variantSummary: ${str(p.variantSummary)},`);
  lines.push(`    category: ${str(p.category)},`);
  lines.push(`    slug: ${str(p.slug)},`);
  lines.push(`    shortDescription: ${str(p.shortDescription)},`);
  lines.push(`    detailDescription: ${str(p.detailDescription)},`);
  lines.push(`    imageUrl: ${str(p.imageUrl)},`);
  lines.push(`    shopifyProductUrl: ${str(p.shopifyProductUrl)},`);
  lines.push(`    shopifyTrackingUrl: withShopifyTracking(${str(p.shopifyTrackingUrl)}),`);
  lines.push(`    altText: ${str(p.altText)},`);
  lines.push(`    highlights: [${p.highlights.map(str).join(", ")}],`);
  lines.push("    specs: [");
  for (const spec of p.specs) {
    lines.push(`      { label: ${str(spec.label)}, value: ${str(spec.value)} },`);
  }
  lines.push("    ],");
  lines.push("    photos: [");
  for (const photo of p.photos) {
    lines.push("      {");
    lines.push(`        label: ${str(photo.label)},`);
    lines.push(`        imageUrl: ${str(photo.imageUrl)},`);
    lines.push(`        altText: ${str(photo.altText)},`);
    lines.push("      },");
  }
  lines.push("    ],");
  lines.push(`    reviewScope: ${str(p.reviewScope)},`);
  lines.push("  },");
  return lines.join("\n");
}

function serializeFaqs(faqs) {
  const lines = ["export const shopFaqs = ["];
  for (const faq of faqs) {
    lines.push("  {");
    lines.push(`    q: ${str(faq.q)},`);
    lines.push(`    a: ${str(faq.a)},`);
    lines.push("  },");
  }
  lines.push("];");
  return lines.join("\n");
}

function renderCatalog(products) {
  return `// AUTO-GENERATED by scripts/generate-shop-catalog.mjs — do not edit by hand.
// Regenerate with: npm run generate:catalog
// Source of truth: Shopify (${STORE_BASE}/products.json).
// Curated copy, exclusions, and FAQs: src/data/shopCatalogOverrides.mjs.

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
  \`\${url}?utm_source=auralisdigital&utm_medium=site&utm_campaign=shop_catalog\`;

export const shopProducts: ShopProduct[] = [
${products.map(serializeProduct).join("\n")}
];
${serializeFaqs(shopFaqs)}
`;
}

// --- main ----------------------------------------------------------------

const sortKey = (p) => p.title.toLowerCase().replace(/^[^a-z0-9]+/, "");

try {
  const live = await fetchLiveProducts();
  if (live.length === 0) {
    throw new Error("Shopify returned 0 published products; refusing to write an empty catalog.");
  }
  console.log(`Live published products: ${live.length}`);

  const excluded = new Set(excludedHandles);
  const included = live.filter((p) => !excluded.has(p.handle));
  for (const p of live) {
    if (excluded.has(p.handle)) console.log(`Excluded (overrides): "${p.title}" (${p.handle})`);
  }

  const staleOverrides = Object.keys(productOverrides).filter(
    (handle) => !live.some((p) => p.handle === handle),
  );
  for (const handle of staleOverrides) {
    console.warn(`Warning: override for "${handle}" matches no live product (stale entry?)`);
  }

  const products = included
    .map(buildProduct)
    .sort((a, b) => {
      const ka = sortKey(a);
      const kb = sortKey(b);
      return ka < kb ? -1 : ka > kb ? 1 : a.slug < b.slug ? -1 : 1;
    });

  const slugs = new Set(products.map((p) => p.slug));
  if (slugs.size !== products.length) {
    throw new Error("Duplicate slugs in generated catalog");
  }
  for (const p of products) {
    if (!KNOWN_CATEGORIES.includes(p.category)) {
      console.warn(
        `Warning: "${p.title}" landed in new category "${p.category}" — add it to preferredProductCategoryOrder in AuralisHomepage.tsx or override it.`,
      );
    }
  }

  await writeFile(CATALOG_PATH, renderCatalog(products), "utf8");
  console.log(`\nWrote ${products.length} products to ${path.relative(process.cwd(), CATALOG_PATH)}`);
  console.log("Verify with: npm run check:catalog && npm run build");
} catch (error) {
  console.error(`Catalog generation failed: ${error.message}`);
  process.exit(2);
}
