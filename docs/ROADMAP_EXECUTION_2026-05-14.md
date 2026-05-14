# Auralis Digital Execution Roadmap

Last updated: 2026-05-14

## Current Truth

Auralis Digital is a three-pillar creative business:

1. Products
2. Custom / personalized design requests
3. Website design services

The site source now supports that direction, but the business is not fully operationally proven yet. The next work should be execution and verification, not broad redesign.

## Operating Rule

Do not treat polish as progress unless it directly supports trust, inquiry flow, checkout readiness, customer conversion, delivery, proof, or retention.

Do not edit `gh-pages` manually. `main` remains the source of truth. GitHub Actions publishes generated output to `gh-pages`.

## Phase 0 - Source Truth Already Implemented

Status: mostly implemented.

Completed or currently represented in source/docs:

- React/Vite site.
- Three-pillar navigation and public positioning.
- `/products` route.
- `/shop` alias.
- `/custom-design` route.
- `/web-design` route.
- `/websites` route.
- Local policy/support routes:
  - `/refund-policy`
  - `/shipping-policy`
  - `/privacy-policy`
  - `/terms-of-service`
- Route-specific metadata generation through `scripts/generate-route-pages.mjs`.
- Product catalog data centralized in `src/data/shopCatalog.ts`.
- Shopify remains checkout/order source of truth.

## Phase 1 - Immediate Public Trust Fixes

Goal: remove avoidable trust friction before sending serious traffic.

### 1. Public Printify Visibility Cleanup

Current state: completed in PR #18.

Acceptance:

- No `Printify` text appears in customer-facing source:
  - `src/components/AuralisHomepage.tsx`
  - `src/data/shopCatalog.ts`
  - `scripts/generate-route-pages.mjs`
- Internal docs may still mention Printify for fulfillment tracking.
- Live `/products`, `/refund-policy`, `/shipping-policy`, `/privacy-policy`, and `/terms-of-service` should be rechecked after each deploy.

### 2. Social Preview Refresh

Current state: source assets and docs updated in PR #19.

Required:

- Confirm deploy has published the refreshed preview assets.
- Use Facebook Sharing Debugger and click `Scrape Again` for `https://www.auralisdigital.net/`.
- Re-test Facebook/Instagram post preview.

Acceptance:

- Social preview image no longer says `Professional Websites for Local Businesses`.
- Preview title remains three-pillar:
  - `Auralis Digital | Creative Design, Products, and Websites`
- Preview description supports products, custom design, and website design.

## Phase 2 - Contact And Inquiry Verification

Goal: make sure interested visitors can reach Auralis reliably.

Required:

- Configure `VITE_CONTACT_EMAIL`.
- Configure `VITE_FORMSPREE_ENDPOINT`.
- Deploy after env configuration.
- Submit live test from desktop.
- Submit live test from phone.
- Confirm success state appears.
- Confirm message arrives in inbox/Formspree.
- Confirm no unexpected mailto fallback after production env is configured.
- Confirm no visible console/network errors.

Acceptance:

- A real visitor can submit an inquiry from phone and desktop.
- Auralis receives the inquiry.
- The website clearly confirms submission.

## Phase 3 - Shopify Commerce Readiness

Goal: do not treat the product surface as mature until checkout, policies, and fulfillment assumptions are verified.

Required:

- Verify every Shopify product link from the live site.
- Verify Shopify-hosted refund policy.
- Verify Shopify-hosted shipping policy.
- Verify Shopify-hosted privacy policy.
- Verify Shopify-hosted terms of service.
- Confirm Shopify payment settings.
- Confirm tax settings.
- Confirm shipping settings.
- Run an incognito checkout test up to final payment confirmation.
- Run a real Shopify test order if appropriate.
- Confirm production/fulfillment timing expectations.
- Confirm customer support path.
- Confirm product margin/profit assumptions.
- Confirm artwork/product-rights workflow.

Acceptance:

- Products open correctly.
- Checkout works through Shopify.
- Policies are visible during checkout.
- Customer support path is clear.
- Public copy does not overstate maturity.

## Phase 4 - Custom Design Readiness

Goal: make custom requests real enough to sell without confusion.

Required:

- Confirm inquiry flow works for custom-design visitors.
- Define pricing range or quote-based workflow.
- Define revision limits.
- Define file/reference-image transfer workflow.
- Define final delivery/export workflow.
- Define usage-rights expectations.
- Define policy for copyrighted characters, logos, unclear rights, offensive content, and non-producible requests.
- Complete one real custom-design request.

Acceptance:

- A customer can understand what to request.
- Auralis can quote, accept, decline, deliver, and support the request without improvising everything.

## Phase 5 - Website Design Sales Readiness

Goal: preserve the website design pillar without letting it conflict with the product/custom design direction.

Required:

- Confirm website-design page routes prospects to intake clearly.
- Confirm service packages and pricing are not misleading.
- Confirm Website Refresh is limited to Auralis-built sites.
- Confirm third-party websites start with audit/rebuild/migration/custom quote path.
- Resolve or update issue #9 after checking all listed docs.
- Close or rewrite stale issues #2 and #3 if still historical.

Acceptance:

- A website prospect can understand the offer.
- Third-party website work is not underpriced or overpromised.
- Old static-site issues do not misdirect future work.

## Phase 6 - Business Foundation

Goal: make the business capable of accepting money cleanly.

Required:

- Confirm Michigan LLC filing.
- Obtain EIN.
- Open business bank account.
- Decide public address/service-area policy.
- Set up payment processing or invoicing.
- Confirm standard agreement/terms for service work.
- Confirm deposit/payment workflow.
- Confirm storage for signed agreements and invoices.

Acceptance:

- Auralis can accept payment and deliver work with basic records and boundaries.

## Phase 7 - First Sale / First Client

Goal: move from setup to proof.

Execution rule:

Pick one lane first. Do not try to push all three equally at once.

Possible first lanes:

1. Product sale.
2. Custom design request.
3. Website design client.

Required:

- Choose one lane.
- Send outreach or traffic to that lane.
- Track prospects or visitors.
- Respond to inquiries.
- Complete intake.
- Quote or guide purchase.
- Deliver or fulfill.
- Ask for permission to use proof.

Acceptance:

- One real transaction, request, or client engagement is completed end to end.

## Phase 8 - Proof And Retention

Goal: turn completed work into trust.

Required:

- Ask for testimonial only after real customer/client interaction.
- Ask for portfolio permission.
- Capture screenshots/product proof.
- Publish case study only where allowed.
- Offer care plan or follow-up service where relevant.
- Keep sample/demo work clearly labeled.

Acceptance:

- Public proof is real, permissioned, and not inflated.

## Current Highest-ROI Order

1. Verify contact/Formspree flow.
2. Verify Shopify policies and checkout.
3. Confirm live social preview cache after deploy with Facebook Sharing Debugger.
4. Run live phone QA on `/products`, `/custom-design`, `/web-design`, and contact flow.
5. Pick one execution lane.
6. Get one real sale/client/request.
7. Capture real proof.

## Do Not Do Yet

- Do not redesign the site broadly.
- Do not edit `gh-pages` manually.
- Do not add custom checkout/cart/payment logic.
- Do not add Shopify Admin API or Printify API logic.
- Do not create fake testimonials, fake reviews, fake urgency, fake discounts, or fake case studies.
- Do not treat social media preview cleanup as more important than contact/checkout verification after it is fixed.
