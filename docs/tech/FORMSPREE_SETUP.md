# Formspree Setup Guide

Last updated: 2026-05-17

## Purpose

Replace the temporary mailto fallback with a real Formspree submission path without building a custom backend yet.

## Why This Is The Right Next Move

- Captures leads reliably.
- Works even if a visitor has no mail app configured.
- Faster path to first customers than building custom infrastructure.
- Matches the current roadmap and active execution checklist.

## Current Source Truth

The React/Vite contact form is implemented in `src/components/AuralisHomepage.tsx`.

It reads production configuration from:

- `VITE_CONTACT_EMAIL`
- `VITE_FORMSPREE_ENDPOINT`

If `VITE_FORMSPREE_ENDPOINT` is present, the form posts JSON to Formspree.

If `VITE_FORMSPREE_ENDPOINT` is missing, the form falls back to a prepared `mailto:` flow using `VITE_CONTACT_EMAIL` or the current fallback Gmail address.

Do not hardcode the Formspree endpoint in the React source.

## Setup Steps

1. Create or log into the Auralis Digital Formspree account.
2. Create a new form.
3. Copy the full Formspree endpoint URL.
4. Add `VITE_FORMSPREE_ENDPOINT` as a GitHub Actions secret.
5. Add `VITE_CONTACT_EMAIL` as a GitHub Actions variable.
6. Trigger the GitHub Pages deploy workflow.
7. Test the live site from desktop.
8. Test the live site from phone.
9. Confirm no email app opens after production env is configured.
10. Confirm submissions arrive in the intended inbox.
11. Confirm the success state appears after submission.
12. Confirm no visible console or network errors occur during submission.

## GitHub Configuration

Current temporary contact inbox:

```text
auralisdigitaleco@gmail.com
```

Use the temporary Gmail value until a domain email is configured and verified.
After `hello@auralisdigital.net` or another domain email sends/receives
correctly, update `VITE_CONTACT_EMAIL` and redeploy.

Use these commands from the repo with the current temporary inbox:

```powershell
gh variable set VITE_CONTACT_EMAIL --body "auralisdigitaleco@gmail.com"
gh secret set VITE_FORMSPREE_ENDPOINT --body "https://formspree.io/f/xxxxabcd"
gh workflow run "Deploy to GitHub Pages"
```

## Recommended Fields

The current React form already collects:

- Name
- Business name
- Email
- Budget range
- Timeline
- Project details

Future fields can be added later, but do not expand the form before the basic live flow is verified.

## Safety Rule

Do not remove the mailto fallback until the Formspree flow has been tested end to end on the live site.

## Success Criteria

- Public site uses the intended contact email value.
- Form submits without opening an email app.
- Submission arrives in the correct inbox.
- User sees the success state.
- Contact flow feels immediate and reliable.

## After Setup

After live verification, update `active/NEXT_STEPS_TODO.md` and `docs/ROADMAP.md` only if the task is actually complete.
