# Client Website Delivery Master Checklist

Status: operating checklist

Use this for every client website before launch and handoff.

This checklist turns the lessons from the Auralis Digital site build, cleanup, deployment, favicon, mobile polish, form setup, and launch-readiness pass into a repeatable client delivery standard.

---

## 1. Intake and Scope

- [ ] Client intake completed
- [ ] Business name confirmed
- [ ] Legal/business name confirmed if different from public brand
- [ ] Main contact confirmed
- [ ] Decision-maker confirmed
- [ ] Phone confirmed
- [ ] Email confirmed
- [ ] Domain ownership confirmed
- [ ] Hosting ownership confirmed
- [ ] Registrar login/access path confirmed
- [ ] DNS responsibility confirmed
- [ ] Main website goal confirmed
- [ ] Primary customer type confirmed
- [ ] Services/products confirmed
- [ ] Service area confirmed
- [ ] Business hours confirmed
- [ ] Photos/logo/assets collected
- [ ] Client asset rights/permission confirmed
- [ ] Competitor/reference sites reviewed
- [ ] Quote and scope approved
- [ ] Timeline and launch target approved
- [ ] Payment/deposit handled
- [ ] Revision limits explained
- [ ] Out-of-scope/change-request rule explained

## 2. Brand and Trust

- [ ] Business name appears consistently
- [ ] Logo added or placeholder approved
- [ ] Brand colors applied
- [ ] Fonts/typography are consistent
- [ ] Browser tab title updated
- [ ] Meta description updated
- [ ] No old template/default platform branding remains
- [ ] No fake testimonials
- [ ] No fake reviews
- [ ] No fake client logos
- [ ] Sample/demo work is labeled honestly
- [ ] About/founder/business trust section reviewed
- [ ] Licenses, certifications, awards, or guarantees verified before publishing
- [ ] Contact details are consistent everywhere
- [ ] Address/service-area language matches client preference and privacy needs

## 3. Favicon and Mobile Icons

- [ ] `favicon.ico` added
- [ ] `favicon.svg` added where applicable
- [ ] `favicon-32x32.png` added
- [ ] `apple-touch-icon.png` added
- [ ] `apple-touch-icon-precomposed` link added if needed
- [ ] `site.webmanifest` added if needed
- [ ] Manifest name, short name, colors, and icons match the client brand
- [ ] Favicon links include cache-busting version if replacing a previous icon
- [ ] `/favicon.ico` tested directly
- [ ] `/favicon.svg` tested directly
- [ ] `/favicon-32x32.png` tested directly
- [ ] `/apple-touch-icon.png` tested directly
- [ ] `/site.webmanifest` tested directly if used
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
- [ ] Privacy/terms links added if needed
- [ ] Service area pages reviewed if included
- [ ] 404 or not-found behavior is acceptable if applicable

## 5. Content and Copy QA

- [ ] Spelling and grammar reviewed
- [ ] Phone, email, address, and hours checked against intake
- [ ] Service names match what the business actually offers
- [ ] Claims are realistic and supportable
- [ ] No placeholder text remains
- [ ] No stock/demo images are presented as real client work
- [ ] All images have appropriate alt text where practical
- [ ] Copy has one clear primary action for visitors
- [ ] Client-approved wording is used for sensitive topics such as pricing, guarantees, service areas, or credentials

## 6. Contact and Lead Capture

- [ ] Public contact email confirmed
- [ ] Domain email configured if available
- [ ] Form backend chosen
- [ ] Formspree or equivalent endpoint configured
- [ ] Environment variables set if using a build pipeline
- [ ] No production secret hardcoded in source
- [ ] Form field labels are clear
- [ ] Required fields are reasonable
- [ ] Spam protection or abuse mitigation considered if needed
- [ ] Form submits without opening the email app
- [ ] Fallback email flow tested if kept
- [ ] Desktop form test completed
- [ ] Mobile form test completed
- [ ] Submission received in inbox/dashboard
- [ ] Reply-to email is usable
- [ ] Success message appears
- [ ] Error state works or is acceptable
- [ ] No console/network errors during submit

## 7. Mobile and Responsive QA

- [ ] Homepage checked on phone
- [ ] Homepage checked on desktop
- [ ] At least one tablet/intermediate width checked if possible
- [ ] Sticky CTA does not overlap important buttons
- [ ] Header/nav works on mobile
- [ ] Tap targets are usable
- [ ] Text is readable
- [ ] Images scale correctly
- [ ] Forms are usable on phone
- [ ] Buttons do what they say
- [ ] No horizontal scrolling
- [ ] Important sections are not hidden or cut off
- [ ] Landscape phone view is acceptable if relevant

## 8. Links and Routing

- [ ] Navigation links work
- [ ] CTA links work
- [ ] Phone links work
- [ ] Email links work
- [ ] Demo/project links work
- [ ] Service area links work
- [ ] Social links work if included
- [ ] External links open correctly
- [ ] No dead links
- [ ] No old staging/editor/platform links visible
- [ ] Redirects documented if old URLs changed

## 9. SEO and Social Metadata

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
- [ ] Sitemap URL is correct in robots file
- [ ] Search Console setup planned or completed
- [ ] Analytics setup planned or completed
- [ ] Local business schema added if appropriate and accurate
- [ ] Service area/location metadata does not misrepresent the business

## 10. Accessibility and Usability

- [ ] Page has logical heading order
- [ ] Images/icons that need labels have labels or alt text
- [ ] Decorative icons are hidden from screen readers where appropriate
- [ ] Form fields have visible labels
- [ ] Buttons and links have understandable text
- [ ] Color contrast is acceptable
- [ ] Keyboard navigation works for menus, links, and forms
- [ ] Focus states are visible
- [ ] Motion/animation is not excessive
- [ ] Reduced-motion behavior considered where applicable

## 11. Performance and Asset QA

- [ ] Images are compressed appropriately
- [ ] Oversized images replaced or optimized
- [ ] Critical pages load quickly on mobile connection where practical
- [ ] Fonts are not excessive
- [ ] Unused large assets removed
- [ ] Video embeds or heavy scripts avoided unless necessary
- [ ] Third-party scripts kept minimal
- [ ] No broken image assets

## 12. Deployment

- [ ] Source branch confirmed
- [ ] Deployment branch/output confirmed
- [ ] Build command works
- [ ] Deployment workflow works
- [ ] Static copied folders reviewed if used
- [ ] Custom domain configured
- [ ] DNS records confirmed
- [ ] HTTPS works
- [ ] Canonical domain choice confirmed (`www` vs root)
- [ ] Live URL tested
- [ ] Direct asset URLs tested
- [ ] Cache-sensitive assets tested with query string if needed
- [ ] Deployment docs updated if anything changed
- [ ] Rollback path known or previous version preserved

## 13. Technical Checks

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
- [ ] Production environment variables documented without exposing secret values
- [ ] Repo/workspace is clean before handoff

## 14. Browser and Device QA

- [ ] Chrome checked
- [ ] Safari checked if possible
- [ ] Edge/Firefox checked if practical
- [ ] iPhone Safari checked if possible
- [ ] Android Chrome checked if possible
- [ ] Private/incognito check completed for cache-sensitive fixes
- [ ] Live deployed site checked, not only local preview

## 15. Compliance, Privacy, and Ownership

- [ ] Client owns or has rights to all provided content/assets
- [ ] Privacy policy added if collecting personal information and required by scope/client needs
- [ ] Cookie/analytics notice considered if analytics or tracking is used
- [ ] Accessibility expectations explained honestly
- [ ] Domain, hosting, analytics, form, and email account ownership documented
- [ ] Admin access and recovery email ownership confirmed
- [ ] No client passwords are stored insecurely in the repo or docs

## 16. Client Review

- [ ] Client reviewed desktop version
- [ ] Client reviewed mobile version
- [ ] Client reviewed contact form behavior
- [ ] Client reviewed public email/phone/address
- [ ] Client reviewed pricing/service language if shown
- [ ] Revisions completed
- [ ] Final approval received in writing
- [ ] Launch timing confirmed
- [ ] Ownership/access explained
- [ ] Care plan option explained

## 17. Launch and Handoff

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
- [ ] Backup/export or repo handoff completed if included in scope
- [ ] Client receives summary of what was delivered

## 18. Proof After Launch

- [ ] Ask for testimonial
- [ ] Ask for review if appropriate
- [ ] Capture screenshots
- [ ] Write case study
- [ ] Add real project to portfolio only after delivery
- [ ] Do not label demos as client work
- [ ] Ask for referral after successful delivery if appropriate
- [ ] Record before/after notes if available

## Rule

Do not treat a site as complete because it looks good locally.

A client website is complete only after the live site, contact path, mobile view, metadata, favicon/icon surfaces, deployment output, accessibility basics, performance basics, ownership boundaries, and handoff expectations have all been checked.
