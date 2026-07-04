#!/usr/bin/env node
/**
 * Catalog drift checker: compares src/data/shopCatalog.ts against live
 * Shopify data and reports mismatches only. Read-only — never writes.
 *
 * Live source: the store's public /products.json endpoint, which lists
 * products published to the Online Store channel. No credentials needed.
 * A local entry missing there means the product was unpublished, archived,
 * or deleted in Shopify. Taxonomy category is not exposed by products.json,
 * so comparison covers: title, handle, product type, price, published status.
 *
 * Usage: node scripts/check-catalog-drift.mjs
 * Exit codes: 0 = no drift, 1 = drift found, 2 = script/network error.
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const STORE_BASE = "https://auralis-design.myshopify.com";
const CATALOG_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
  "shopCatalog.ts",
);

async function loadLocalCatalog() {
  const source = await readFile(CATALOG_PATH, "utf8");
  const marker = "export const shopProducts: ShopProduct[] = ";
  const start = source.indexOf(marker);
  if (start === -1) {
    throw new Error(`Could not find shopProducts array in ${CATALOG_PATH}`);
  }
  const arrayStart = start + marker.length;
  // The array closes with a top-level "];" at column 0; other exports may
  // follow it in the file, so take the first one after the array start.
  const arrayEnd = source.indexOf("\n];", arrayStart);
  if (arrayEnd === -1) {
    throw new Error("Could not find end of shopProducts array");
  }
  const arrayLiteral = source.slice(arrayStart, arrayEnd + 2);
  // The array is plain object literals; the only external reference is the
  // withShopifyTracking helper, redefined here so the literal evaluates.
  const factory = new Function(
    `const withShopifyTracking = (url) => url; return ${arrayLiteral};`,
  );
  return factory();
}

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

const normalize = (value) => (value ?? "").toString().trim().toLowerCase();

const parsePrice = (value) => {
  const n = Number.parseFloat((value ?? "").toString().replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : null;
};

function handleFromUrl(url) {
  const match = /\/products\/([^/?#]+)/.exec(url ?? "");
  return match ? decodeURIComponent(match[1]) : null;
}

function compare(local, live) {
  const issues = [];
  const liveByHandle = new Map(live.map((p) => [normalize(p.handle), p]));
  const localHandles = new Set();

  for (const entry of local) {
    const urlHandle = handleFromUrl(entry.shopifyProductUrl);
    const handle = normalize(entry.slug || urlHandle);
    localHandles.add(handle);

    if (entry.slug && urlHandle && normalize(entry.slug) !== normalize(urlHandle)) {
      issues.push(
        `URL/slug mismatch (local): "${entry.title}" — slug "${entry.slug}" vs shopifyProductUrl handle "${urlHandle}"`,
      );
    }

    const liveProduct = liveByHandle.get(handle);
    if (!liveProduct) {
      issues.push(
        `NOT LIVE: "${entry.title}" (handle "${handle}") is in shopCatalog.ts but not published on the Online Store (unpublished, archived, or deleted in Shopify)`,
      );
      continue;
    }

    if (normalize(entry.title) !== normalize(liveProduct.title)) {
      issues.push(
        `Title drift: handle "${handle}" — local "${entry.title}" vs Shopify "${liveProduct.title}"`,
      );
    }

    if (normalize(entry.productType) !== normalize(liveProduct.product_type)) {
      issues.push(
        `Product type drift: "${entry.title}" — local "${entry.productType}" vs Shopify "${liveProduct.product_type}"`,
      );
    }

    const localPrice = parsePrice(entry.price);
    const livePrices = (liveProduct.variants ?? [])
      .map((v) => parsePrice(v.price))
      .filter((p) => p !== null);
    if (localPrice !== null && livePrices.length > 0) {
      const minLive = Math.min(...livePrices);
      if (Math.abs(localPrice - minLive) > 0.001) {
        issues.push(
          `Price drift: "${entry.title}" — local ${localPrice.toFixed(2)} vs Shopify min variant ${minLive.toFixed(2)}`,
        );
      }
    }
  }

  for (const product of live) {
    if (!localHandles.has(normalize(product.handle))) {
      issues.push(
        `MISSING LOCALLY: "${product.title}" (handle "${product.handle}") is live on Shopify but absent from shopCatalog.ts`,
      );
    }
  }

  return issues;
}

try {
  const [local, live] = await Promise.all([loadLocalCatalog(), fetchLiveProducts()]);
  console.log(`Local catalog entries: ${local.length}`);
  console.log(`Live published products: ${live.length}`);

  const issues = compare(local, live);
  if (issues.length === 0) {
    console.log("\nNo drift detected.");
    process.exit(0);
  }

  console.log(`\nDrift found (${issues.length} issue${issues.length === 1 ? "" : "s"}):\n`);
  for (const issue of issues) console.log(`  - ${issue}`);
  console.log(
    "\nShopify is the source of truth. Fix shopCatalog.ts by hand (or regenerate it); this script never writes.",
  );
  process.exit(1);
} catch (error) {
  console.error(`Drift check failed: ${error.message}`);
  process.exit(2);
}
