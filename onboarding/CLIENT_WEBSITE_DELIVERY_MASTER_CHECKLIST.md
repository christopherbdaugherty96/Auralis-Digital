# Client Website Delivery Master Checklist

Status: operating checklist

Use this for every client website before launch and handoff.

This checklist turns the lessons from the Auralis Digital site build, cleanup, deployment, favicon, mobile polish, form setup, and launch-readiness pass into a repeatable client delivery standard.

---

## 1. Intake and Scope

- [ ] Client intake completed
- [ ] Business name confirmed
- [ ] Main contact confirmed
- [ ] Phone confirmed
- [ ] Email confirmed
- [ ] Domain ownership confirmed
- [ ] Hosting ownership confirmed
- [ ] Main website goal confirmed
- [ ] Services/products confirmed
- [ ] Service area confirmed
- [ ] Photos/logo/assets collected
- [ ] Competitor/reference sites reviewed
- [ ] Quote and scope approved
- [ ] Payment/deposit handled
- [ ] Revision limits explained

## 2. Brand and Trust

- [ ] Business name appears consistently
- [ ] Logo added or placeholder approved
- [ ] Brand colors applied
- [ ] Browser tab title updated
- [ ] Meta description updated
- [ ] No old template/default platform branding remains
- [ ] No fake testimonials
- [ ] No fake reviews
- [ ] No fake client logos
- [ ] Sample/demo work is labeled honestly
- [ ] About/founder/business trust section reviewed
- [ ] Contact details are consistent everywhere

## 3. Favicon and Mobile Icons

- [ ] `favicon.ico` added
- [ ] `favicon.svg` added where applicable
- [ ] `favicon-32x32.png` added
- [ ] `apple-touch-icon.png` added
- [ ] `apple-touch-icon-precomposed` link added if needed
- [ ] `site.webmanifest` added if needed
- [ ] Favicon links include cache-busting version if replacing a previous icon
- [ ] `/favicon.ico` tested directly
- [ ] `/favicon.svg` tested directly
- [ ] `/favicon-32x32.png` tested directly
- [ ] `/apple-touch-icon.png` tested directly
- [ ] Incognito/private tab checked
- [ ] Mobile browser checked
- [ ] Home-screen shortcut deleted and re-added if iOS cached the old icon

## 4. Page Structure

- [ ] Hero section is clear in five seconds
- [ ] Primary CTA is visible
- [ ] Secondary CTA does not compete on mobile
- [ ] Services section is clear
- [ ] Trust/proof section is honest
- [ ] Work/demo/gallery section reviewed
- [ ] Pricing or quote language is clear
- [ ] FAQ added if useful
- [ ] Contact section is easy to find
- [ ] Footer is complete
- [ ] Service area pages reviewed if included

## 5. Contact and Lead Capture

- [ ] Public contact email confirmed
- [ ] Domain email configured if available
- [ ] Form backend chosen
- [ ] Formspree or equivalent endpoint configured
- [ ] Environment variables set if using a build pipeline
- [ ] No production secret hardcoded in source
- [ ] Form submits without opening the email app
- [ ] Fallback email flow tested if kept
- [ ] Desktop form test completed
- [ ] Mobile form test completed
- [ ] Submission received in inbox/dashboard
- [ ] Success message appears
- [ ] Error state works or is acceptable
- [ ] No console/network errors during submit

## 6. Mobile and Responsive QA

- [ ] Homepage checked on phone
- [ ] Homepage checked on desktop
- [ ] Sticky CTA does not overlap important buttons
- [ ] Header/nav works on mobile
- [ ] Tap targets are usable
- [ ] Text is readable
- [ ] Images scale correctly
- [ ] Forms are usable on phone
- [ ] Buttons do what they say
- [ ] No horizontal scrolling
- [ ] Important sections are not hidden or cut off

## 7. Links and Routing

- [ ] Navigation links work
- [ ] CTA links work
- [ ] Phone links work
- [ ] Email links work
- [ ] Demo/project links work
- [ ] Service area links work
- [ ] External links open correctly
- [ ] No dead links
- [ ] No old staging/editor/platform links visible

## 8. SEO and Social Metadata

- [ ] Page title updated
- [ ] Meta description updated
- [ ] Canonical URL updated
- [ ] Open Graph title updated
- [ ] Open Graph description updated
- [ ] Open Graph image generated and live
- [ ] Twitter card metadata updated
- [ ] `og-image.png` tested directly
- [ ] Sitemap exists
- [ ] Robots file exists
- [ ] Search Console setup planned or completed
- [ ] Analytics setup planned or completed

## 9. Deployment

- [ ] Source branch confirmed
- [ ] Deployment branch/output confirmed
- [ ] Build command works
- [ ] Deployment workflow works
- [ ] Static copied folders reviewed if used
- [ ] Custom domain configured
- [ ] HTTPS works
- [ ] Live URL tested
- [ ] Direct asset URLs tested
- [ ] Cache-sensitive assets tested with query string if needed
- [ ] Deployment docs updated if anything changed

## 10. Technical Checks

- [ ] `npm install` or `npm ci` works, if applicable
- [ ] Build passes
- [ ] Tests pass if present
- [ ] Lint passes or warnings are documented
- [ ] Production dependency audit checked if applicable
- [ ] Dev-only audit issues documented if deferred
- [ ] No temporary screenshots/logs committed
- [ ] `.gitignore` covers local tooling noise
- [ ] No private credentials committed
- [ ] Environment example file updated

## 11. Client Review

- [ ] Client reviewed desktop version
- [ ] Client reviewed mobile version
- [ ] Revisions completed
- [ ] Final approval received
- [ ] Launch timing confirmed
- [ ] Ownership/access explained
- [ ] Care plan option explained

## 12. Launch and Handoff

- [ ] Site launched
- [ ] Final live QA completed
- [ ] Contact form tested after launch
- [ ] Domain/hosting ownership documented
- [ ] Login/access notes delivered if applicable
- [ ] Client knows how to request updates
- [ ] Final invoice/payment status handled
- [ ] Handoff checklist completed
- [ ] Care plan accepted or declined
- [ ] Follow-up date set

## 13. Proof After Launch

- [ ] Ask for testimonial
- [ ] Ask for review if appropriate
- [ ] Capture screenshots
- [ ] Write case study
- [ ] Add real project to portfolio only after delivery
- [ ] Do not label demos as client work

## Rule

Do not treat a site as complete because it looks good locally.

A client website is complete only after the live site, contact path, mobile view, metadata, favicon/icon surfaces, deployment output, and handoff expectations have all been checked.
