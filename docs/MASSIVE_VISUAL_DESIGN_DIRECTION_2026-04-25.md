# Massive Visual Design Direction — Auralis Digital

Date: 2026-04-25
Status: Design direction saved for future implementation
Scope: Visual design, page structure, animation strategy, and implementation guardrails

---

## Purpose

This document captures the desired future design direction for Auralis Digital based on the current site state and the latest design conversation.

The goal is to move the site toward a stronger, more memorable, premium visual identity without sacrificing the core business purpose:

- helping Michigan local businesses understand the offer quickly
- making Auralis Digital look credible and professional
- generating calls, quote requests, and website project inquiries
- keeping the site maintainable, fast, and conversion-focused

The desired design should create a clear **"wow" moment**, but the entire website should not become a heavy animated experience. The visual intensity should be used strategically.

---

## Core Visual Concept

The desired visual direction is a cinematic, near-future, sci-fi inspired city environment.

### Target Atmosphere

- nighttime city
- deep urban environment
- fog / haze / atmosphere
- bright lights and glow
- light flares
- moving city energy
- wind movement
- subtle particles
- living-city feel
- premium, futuristic, professional tone

### Suggested Design Label

Use this language internally when describing the style:

**Near-future cinematic cyber-urban environment**

Alternative phrasing:

- premium sci-fi city-night interface
- cinematic animated urban skyline
- near-future digital city atmosphere
- high-end animated technology backdrop

---

## Important Brand Constraint

Auralis Digital is still a business website for local business owners.

The design should feel impressive, but it should not become confusing, gimmicky, slow, or disconnected from the offer.

The brand should remain:

- grounded
- professional
- local-business focused
- conversion-oriented
- no hype
- clear in wording
- easy to act on

The sci-fi visual style should support the brand, not replace the message.

---

## Recommended Design Strategy

Use the cinematic animated style as a controlled brand atmosphere, mainly in high-impact areas.

### Best Placement

1. Homepage hero section
2. Portfolio / showcase page
3. Optional background accent sections
4. Optional page transitions later

### Avoid

- making every page fully animated
- placing heavy animation behind every content section
- sacrificing readability for visuals
- making the site feel like a game instead of a professional service
- slowing down mobile users
- adding effects that distract from the contact CTA

---

## Page Structure Direction

The current single-page homepage is useful, but the site should evolve into separate pages so the homepage does not become too long or heavy.

### Recommended Future Pages

#### 1. Homepage

Purpose: first impression and main conversion path.

Recommended content:

- cinematic animated city hero
- short value proposition
- primary CTA
- phone CTA
- quick services preview
- example work preview
- founder/trust preview
- contact CTA

The homepage should be shorter than the current full scrolling version once subpages exist.

#### 2. Services Page

Purpose: explain what Auralis Digital offers.

Recommended content:

- Website Refresh
- Basic Website
- Standard Website
- Premium / Custom Website
- SEO setup
- lead capture setup
- maintenance / updates
- what is included
- who each option fits

Tone: practical, clear, sales-focused.

#### 3. Portfolio / Example Work Page

Purpose: show example builds and visual capability.

Recommended content:

- restaurant website example
- lawn care website example
- future barber/salon example
- future contractor/service example
- before/after concepts
- explanation of what each demo is designed to improve

This is the best page for heavier visual design and more experimental animation.

#### 4. Pricing Page

Purpose: reduce uncertainty.

Recommended content:

- Website Refresh — $250
- Basic Website — $500+
- Standard Website — $1,000+
- Premium / Custom — quote based
- what affects price
- what is included
- payment/timeline FAQ
- CTA to request a quote

Tone: transparent and practical.

#### 5. About Page

Purpose: build founder trust.

Recommended content:

- founder photo
- founder-led process
- why Auralis Digital exists
- local-business focus
- what clients can expect
- direct communication promise

Tone: human, grounded, professional.

#### 6. Contact / Start Project Page

Purpose: capture leads reliably.

Recommended content:

- real Formspree form now
- direct phone and email fallback
- project details fields
- budget range
- timeline
- business type
- service area
- success message or thank-you page

This should become the main lead capture page.

#### 7. Service Area Pages

Purpose: local SEO and local relevance.

Existing pages:

- Belleville
- Ypsilanti
- Ann Arbor
- Detroit Metro

Possible future pages:

- Downriver
- Canton
- Livonia
- Romulus
- Taylor
- Wayne County
- Washtenaw County

Each page should remain useful, not thin or spammy.

---

## Animation Levels

The design can be implemented in stages.

### Level 1 — Lightweight Premium Illusion

Best for the immediate website.

Uses:

- layered static or SVG background
- animated fog overlays
- soft glow gradients
- drifting particles
- subtle light streaks
- CSS animations
- simple JavaScript parallax

Benefits:

- fast
- maintainable
- works with current static HTML/CSS/JS setup
- good enough for a strong first visual upgrade

Recommended for first implementation.

---

### Level 2 — High-End Cinematic Motion

Best after the site structure and lead capture are stable.

Uses:

- animated skyline layers
- flickering window lights
- stronger fog movement
- light beams
- parallax depth
- mouse-reactive movement
- Canvas animation
- GSAP animation timing

Benefits:

- stronger wow factor
- still possible in a static site
- more custom and memorable

Risks:

- needs careful performance testing
- can become distracting if overused

---

### Level 3 — Full Interactive 3D Scene

Best only for a showcase page or a later advanced version.

Uses:

- Three.js or React Three Fiber
- 3D city scene
- volumetric-looking fog
- dynamic lights
- bloom and post-processing
- moving drones / vehicles / particles
- camera drift
- advanced shaders

Benefits:

- maximum wow factor
- strong portfolio/showcase value

Risks:

- heavier load
- harder to maintain
- more mobile risk
- may require build tooling
- may distract from the business offer

Recommendation: do not start here for the main homepage.

---

## Tool Recommendations

### Current Repo / Near-Term

Use:

- HTML
- CSS
- vanilla JavaScript
- SVG assets
- optional Canvas
- optional GSAP later

This keeps the current static GitHub Pages setup simple and reliable.

### For Advanced Motion Later

Use:

- GSAP for timeline animation
- Canvas for particles/fog/light motion
- Three.js for real 3D only if needed
- Spline for fast 3D experiments
- Blender for custom 3D city assets if the project becomes more advanced

### For Concept Art / Visual Direction

Use:

- image generation for mood concepts
- Figma for layout mockups
- Canva for social assets / ad creatives
- Photoshop or Photopea for asset cleanup

---

## Recommended Implementation Roadmap

### Phase 1 — Business Foundation First

Before heavy visual work:

1. Install real lead capture using Formspree.
2. Keep email and phone fallback visible.
3. Add success/error feedback for form submissions.
4. Add analytics.
5. Fix any portfolio demo placeholder emails.
6. Clean up proof/testimonial wording.

Reason: the current site already looks good enough to start selling. Lead capture and tracking matter first.

---

### Phase 2 — Split the Site Into Pages

Create the core page structure:

- `services.html`
- `portfolio.html`
- `pricing.html`
- `about.html`
- `contact.html`

Then reduce homepage length and link into the deeper pages.

Reason: separate pages make the site easier to navigate, easier to optimize, and safer for animation performance.

---

### Phase 3 — Add Lightweight Cinematic Hero

Add the first version of the sci-fi city atmosphere to the homepage hero only.

Recommended effects:

- dark city skyline illustration or generated background
- animated fog layer
- slow light shimmer
- small drifting particles
- soft neon glow
- subtle parallax movement
- reduced-motion support

Reason: this creates the wow moment without making the whole website heavy.

---

### Phase 4 — Upgrade Portfolio Page Visuals

Use the portfolio page as the more expressive design showcase.

Possible additions:

- animated project cards
- hover depth
- glowing preview frames
- cinematic section transitions
- stronger case-study visuals

Reason: the portfolio page is where stronger visuals help prove design capability.

---

### Phase 5 — Optional Advanced Motion

Only after the site is stable and converting:

- GSAP timeline animation
- Canvas fog/particles
- Three.js scene test
- Spline embed test
- animated page transitions

Reason: advanced motion should be earned after the core business site works.

---

## Performance Guardrails

Any future massive design must follow these rules:

1. The homepage must still load quickly.
2. Mobile users must not get a broken or sluggish experience.
3. Text must remain readable over animated backgrounds.
4. CTA buttons must stay obvious.
5. Effects should pause or simplify on reduced-motion settings.
6. Animations should not block the contact form.
7. The site should remain usable if animation fails.
8. Image/video assets should be compressed.
9. Avoid autoplay video with huge file sizes unless there is a lightweight fallback.
10. Keep the business message stronger than the background effect.

---

## Accessibility Guardrails

The cinematic design should include:

- readable contrast
- visible focus states
- reduced-motion support
- alt text for meaningful images
- no flashing effects
- no rapid flicker
- no animation required to understand content
- keyboard-friendly navigation

---

## Content Guardrails

The copy should remain grounded.

Avoid language like:

- revolutionary
- world-changing
- industry-disrupting
- guaranteed results
- AI-powered everything
- futuristic agency hype

Prefer language like:

- clear websites
- practical design
- better first impression
- more calls and quote requests
- mobile-ready
- founder-led
- built for local businesses

---

## Second-Pass Gap Check

### Gap 1 — Visual concept needs asset direction

The sci-fi city idea is clear, but future implementation needs a defined visual asset approach:

- generated background illustration
- SVG/coded skyline
- Canvas scene
- video loop
- Three.js scene

Recommendation: start with a layered SVG/static background plus CSS fog before going to 3D.

---

### Gap 2 — Animation scope must be bounded

The desired style could easily become too heavy if applied everywhere.

Recommendation: limit the first animated experience to the homepage hero and possibly the portfolio page.

---

### Gap 3 — Page split needs navigation planning

Before splitting pages, define the main navigation clearly:

- Home
- Services
- Portfolio
- Pricing
- About
- Contact

Service areas can remain in footer or under a local SEO section.

---

### Gap 4 — Lead capture should come before design expansion

A more impressive site without reliable lead capture is not the best business move.

Recommendation: complete Formspree first, then animation.

---

### Gap 5 — Analytics are required before serious conversion optimization

The site needs measurement before future design decisions can be validated.

Track:

- hero CTA clicks
- phone clicks
- contact form submissions
- portfolio clicks
- pricing page visits
- service-area page visits

---

### Gap 6 — Proof section needs real testimonials later

Current proof messaging is conceptual, not client proof.

Recommendation: keep it honest until real testimonials or case studies are available.

---

### Gap 7 — Portfolio demos should be cleaned before heavy promotion

The restaurant demo is useful, but any placeholder contact paths should be corrected before outreach.

Recommendation: review all demo links, phone numbers, emails, image paths, and CTAs before sending them to prospects.

---

## Recommended Next Design Brief for Implementation

When ready to implement the visual direction, use this brief:

Build a premium near-future cinematic city hero for Auralis Digital. The scene should feel like a deep nighttime urban environment with fog, subtle wind movement, blue-white neon glow, light flares, drifting particles, and a living-city atmosphere. The effect should create a strong wow moment while keeping the business message readable and the CTA obvious. Use lightweight HTML/CSS/JavaScript first, with animation limited to the hero area. Include reduced-motion support and mobile performance fallbacks. Do not redesign the entire site randomly; preserve the local-business conversion focus.

---

## Final Recommendation

The correct path is:

1. Finish lead capture and analytics.
2. Split the site into focused pages.
3. Add a cinematic animated homepage hero.
4. Use the portfolio page for heavier visual experimentation.
5. Keep service, pricing, about, and contact pages cleaner and faster.

This gives Auralis Digital a memorable visual identity without hurting the business purpose of the website.
