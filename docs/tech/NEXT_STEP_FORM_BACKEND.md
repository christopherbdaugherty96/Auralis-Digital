# NEXT STEP: Form Backend

Status: immediate next technical action

## Why This Matters

The site can render a contact form, but lead capture is only production-ready after the deployed environment has a real contact email and form endpoint configured.

Without those values, the form falls back to a prepared email flow. That is acceptable as a temporary backup, but it is not the final lead system.

## Goal

Configure production contact environment variables and verify live form submission.

## Required Values

Set these in the production deployment environment:

- `VITE_CONTACT_EMAIL`
- `VITE_FORMSPREE_ENDPOINT`

Example values live in `.env.example`.

## Formspree Setup

1. Go to `https://formspree.io`.
2. Create or log into the Auralis Digital account.
3. Create a new form.
4. Copy the endpoint URL.
5. Add it as `VITE_FORMSPREE_ENDPOINT` in the deployment environment.
6. Add the domain email as `VITE_CONTACT_EMAIL`.

Do not hardcode the endpoint in `src/components/AuralisHomepage.tsx`.

## Deploy

Commit and push any config/documentation changes to `main`.

GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.

## Test

- Submit the form on the live site from desktop.
- Submit the form on the live site from phone.
- Confirm both submissions arrive in the expected inbox.
- Confirm the success state appears after submission.
- Confirm no mail app opens when the Formspree endpoint is configured.

## Success Criteria

- Public site uses the domain email value.
- Form submits without opening an email app.
- Submission arrives in the correct inbox.
- Contact flow feels immediate and reliable.

## Internal Note

This is the final technical step required to turn the site from a static presentation into a working lead-generation path.
