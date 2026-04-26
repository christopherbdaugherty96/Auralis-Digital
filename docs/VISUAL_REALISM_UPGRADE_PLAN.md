# Auralis Digital Visual Realism Upgrade Plan

Date: 2026-04-26

## Purpose

This document records the next visual upgrade direction for Auralis Digital after the first cinematic homepage pass.

The current homepage is stronger than the original version, but the hero still reads too much like CSS shape art. The moon looks like a flat circle, the skyline can feel like spreadsheet blocks, the desert does not yet feel like a real place, and many lower-page sections/demos still feel like repeated dark cards.

The next goal is not simply to make the site cleaner. The goal is to make it visually memorable enough to show prospects and say: this is the level of polish Auralis can bring to a business website.

---

## Current honest status

### What is working

- The brand direction is clearer.
- The desert road / distant city metaphor is strong.
- The homepage is more memorable than the earlier generic layout.
- The demo library is visible from the homepage.
- Services, pricing, founder, and contact sections are more polished than before.
- The current CSS hero proves the concept and gives a live baseline.

### What is not working yet

- The hero does not look realistic enough.
- The moon and skyline still feel geometric.
- The desert does not yet feel like a real place.
- The road does not yet feel like a real road.
- The moving traffic effect is still a light-streak abstraction, not an actual vehicle.
- Below the hero, sections can still feel like repeated card blocks.
- Demo pages need stronger individual character by business type.

### Main diagnosis

The current implementation is a good prototype, but it should not be treated as the final visual identity.

Pure CSS can create mood, glow, layout, and motion. It cannot easily create believable cinematic realism for desert texture, road surface, moonlight, city depth, and natural vehicle motion.

---

## Core visual goal

Auralis should feel cinematic, premium, and memorable.

The site should not feel like a generic web agency template.

The intended emotional image:

> A quiet desert at night. A real road cuts through the dark toward a glowing near-future city. Moonlight, neon, haze, and motion create a sense of visibility, direction, and momentum.

This supports the business message:

> A clearer path from first impression to first call.

The metaphor should be readable but not over-explained:

- Desert = a business being unseen or under-presented online.
- Road = a practical path forward.
- City lights = visibility, trust, opportunity, and customer action.
- Motion = momentum and progress.

---

## Main homepage hero direction

### Environment

- Realistic desert at night.
- Open space, dust, haze, dunes, road texture.
- Cinematic atmosphere.
- Dark but readable.
- Premium, not cartoonish.
- Desert should feel like a place, not a flat brown shape.

### Moon

- Round moon.
- Real moonlight glare.
- Atmospheric glow.
- Soft light spill across the sky and desert.
- Subtle cloud/haze interaction if possible.
- Not a flat circle.

### City

- Distant near-future desert city.
- Cyberpunk-inspired lighting.
- Blue, cyan, magenta, and warm gold glare.
- Not literally Las Vegas.
- Should feel aspirational and far away.
- Must have depth, haze, bloom, and varied building silhouettes rather than simple block towers.

### Road

- Realistic road surface.
- Strong perspective toward the city.
- Subtle lane reflection or light catch.
- Road should pull the eye toward the CTA and support the headline.
- Road should not overpower the text.

### Movement

Preferred motion order:

1. Subtle car/bike/bus headlight motion along the road.
2. Moonlight glow breathing slowly.
3. City light shimmer.
4. Desert haze drifting.
5. Tiny star twinkle.

Motion should feel cinematic and expensive, not arcade-like.

---

## Recommended implementation approach

### Do not rely on pure CSS for realism

CSS is useful for:

- glow overlays;
- haze;
- light streaks;
- shimmer;
- responsive positioning;
- subtle animation.

CSS is not ideal for:

- realistic desert texture;
- realistic moonlight;
- real road perspective;
- convincing city depth;
- natural vehicle motion.

### Better approach

Use a layered visual system:

1. **Realistic hero background image**
   - Generated or custom-designed cinematic scene.
   - Desert road at night, moon, distant future city.
   - Saved as an optimized asset.

2. **Overlay gradient**
   - Keeps text readable.
   - Creates brand consistency.
   - Prevents the image from fighting the CTA.

3. **Motion overlays**
   - Animated headlights / light streaks.
   - Subtle haze.
   - City glow shimmer.
   - Moonlight pulse.

4. **Text and CTAs**
   - Clean and readable, likely left-aligned.
   - Should remain the focus.

5. **Fallback**
   - Keep the current CSS art as a fallback only if the image fails or is unavailable.

---

## Asset structure recommendation

Use clear asset names:

```text
assets/
  hero-desert-city.jpg
  hero-desert-city-mobile.jpg
  hero-haze-overlay.png
  demo-thumbnails/
    restaurant.jpg
    lawn-care.jpg
    barbershop.jpg
    painter.jpg
    cleaning.jpg
    roofing.jpg
    salon.jpg
    detailing.jpg
    photographer.jpg
    handyman.jpg
```

Recommended image handling:

- Compress hero image before deploy.
- Use a dark overlay for readability.
- Consider separate mobile crop if desktop crop loses the moon/city/road on phones.
- Add descriptive alt text only if image is content; if decorative, keep it CSS/background-only and preserve text accessibility.

---

## Hero asset prompt

Use this prompt for creating the main realistic hero image:

> A cinematic realistic night desert highway scene, low angle from the road shoulder, asphalt road leading into the distance toward a glowing near-future city skyline on the horizon, not Las Vegas but inspired by neon desert city lights, large realistic full moon with soft moonlight glare, atmospheric haze, subtle dust in the air, cyberpunk blue and magenta glow in the distance, premium dark cinematic mood, realistic photography style, wide website hero composition, empty space on the left for text, ultra detailed, realistic lighting, no logos, no text.

Suggested aspect ratios:

- 16:9 for desktop hero.
- 21:9 for wide desktop crop.
- 4:5 or 9:16 variation for mobile crop if needed.

### Negative prompt / avoid list

Avoid:

- text in the image;
- logos;
- obvious Las Vegas landmarks;
- cartoon/anime style;
- flat vector art;
- toy-like cars;
- overly busy foreground;
- unreadable bright lights behind the text area;
- skyscrapers that look like identical rectangles.

---

## Motion specification

### Vehicle motion

Start with a lightweight version:

- animated headlight/tail-light streak following the road perspective;
- 1 to 3 vehicles per loop;
- staggered delays;
- subtle scale change to simulate distance;
- slow enough to feel cinematic.

Later upgrade option:

- small transparent WebM/PNG sequence of a car silhouette with headlights.

### City shimmer

- very subtle opacity and blur changes;
- no flashing;
- no intense flicker;
- should feel like distant neon and heat haze.

### Moonlight pulse

- slow breathing glow;
- 8 to 14 second loop;
- low opacity change.

### Haze

- soft drifting overlay near horizon/desert floor;
- slow 18 to 30 second movement.

### Accessibility

Keep `prefers-reduced-motion` support. If reduced motion is enabled, animations should stop but the scene should still look good.

---

## Homepage section character plan

The rest of the homepage should not feel like repeated cards.

### Services section

Add service-specific visual moments:

- Website Refresh: before/after cleanup feel.
- Starter Website: launch path / first light.
- Growth Website: expanding city lights / signal lines.

Implementation ideas:

- small thumbnail strip above each service;
- subtle icon system;
- varied card layout;
- one featured service panel with more depth.

### Example Work section

Turn into a showroom:

- Add real or generated thumbnails for each demo.
- Make the cards feel like previews, not text blocks.
- Demo Library should feel like a gallery wall.
- Use industry-specific visual treatments.

### Pricing section

Make pricing feel like premium package cards:

- Stronger package hierarchy.
- Larger prices.
- Clear “best for” labels.
- Included features.
- Calm buyer-confidence copy.

### Founder section

Make the section more editorial:

- Stronger photo treatment.
- Founder note / quote.
- “Why I built Auralis” language.
- Trust badges.
- More warmth and local credibility.

### Contact section

Make it feel like a final destination:

- Glowing panel.
- Simpler form rhythm.
- Clear “ready to move forward?” message.
- Strong direct-contact fallback.

---

## Demo page character plan

Each demo should feel different.

### Restaurant

- Warm local atmosphere.
- Menu-first.
- Food imagery.
- Hours/location/call flow.
- Cozy, trustworthy, neighborhood feel.

### Lawn Care

- Green outdoor neighborhood feel.
- Before/after yard imagery.
- Quote-first flow.
- Clean, fresh, reliable tone.

### Barbershop

- Sharp black/cream style.
- Appointment focus.
- Confident typography.
- Strong hero image or chair/shop visual.

### Painter

- Color swatches.
- Clean home interior feel.
- Portfolio-style work examples.
- Before/after project gallery.

### Cleaning

- Bright, airy, fresh.
- White/blue visual tone.
- Trust and recurring-service focus.
- Strong checklist layout.

### Roofing / Contractor

- Strong, rugged, practical.
- Warranty/trust focus.
- Quote-first layout.
- Project proof and service-area emphasis.

### Salon

- Soft, elegant, beauty-focused.
- Appointment-first layout.
- Gentle colors and polished imagery.

### Mobile Detailing

- Glossy black/chrome/car reflection feel.
- Before/after visuals.
- Mobile booking and package cards.

### Photographer

- Gallery-first.
- Portfolio-heavy.
- Minimal text.
- Visual proof above everything else.

### Maintenance / Handyman

- Reliable, practical, tool/workshop feel.
- Checklist/service-area layout.
- Trust, speed, and fix-it clarity.

---

## Near-term execution plan

### Phase 1 — Documentation and issue tracking

- Document this realism plan.
- Create or update a GitHub issue to track visual realism upgrades.

### Phase 2 — Hero asset placeholder implementation

- Add a hero-image layer and fallback CSS.
- Keep current CSS art as fallback, but make room for a real background image.
- Add a clear asset path such as `assets/hero-desert-city.jpg`.
- Add mobile crop support.

### Phase 3 — Create/select visual assets

- Generate or source realistic hero background.
- Create demo thumbnails.
- Add visual previews to demo cards.

### Phase 4 — Section character pass

- Reduce repeated-card feeling.
- Add varied section layouts.
- Improve visual storytelling down the page.

### Phase 5 — Demo identity pass

- Upgrade each demo one at a time.
- Give every demo a distinct mood, palette, typography, and CTA flow.

---

## Immediate next implementation checklist

1. Create or select `assets/hero-desert-city.jpg`.
2. Add CSS support for `.hero-realism-bg` or equivalent background layer.
3. Keep the current CSS moon/skyline as fallback only.
4. Add realistic motion overlays after the image is in place.
5. Add demo thumbnails to the homepage Work section.
6. Convert repeated card sections into more varied visual sections.
7. Start demo identity upgrades with the most useful sales demos first: restaurant, lawn care, barbershop, painter, cleaning.

---

## Non-goals

- Do not make the homepage chaotic.
- Do not add heavy video before performance is checked.
- Do not overdo cyberpunk effects so the business message gets lost.
- Do not pretend generated visuals are client work.
- Do not make every demo share the same generic dark-card design.
- Do not sacrifice readability for visual effects.

---

## Quality bar

The goal is not just “clean.”

The goal is:

> A small business owner should see the homepage and think: this looks professional, memorable, and more impressive than what I could make myself.

Auralis should feel worth showing off.

Final visual standard:

- memorable hero;
- realistic atmosphere;
- readable business message;
- distinct page sections;
- demos with individual identity;
- fast enough for mobile;
- polished enough to support outreach.
