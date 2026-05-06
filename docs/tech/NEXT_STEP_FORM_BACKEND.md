# NEXT STEP: Form Backend

Status: immediate next technical action

## Why This Matters

The site can render a contact form, but lead capture is only production-ready after the deployed environment has a real contact email and form endpoint configured.

Without those values, the form falls back to a prepared email flow. That is acceptable as a temporary backup, but it is not the final lead system.

## Goal

Configure production contact environment variables and verify live form submission.

## Required Values

Set these in the production deployment environment:

- `VITE_CONTACT_EMAIL` as a GitHub Actions variable
- `VITE_FORMSPREE_ENDPOINT` as a GitHub Actions secret

Example values live in `.env.example`.

The deploy workflow maps these values into the Vite build step:

- `${{ vars.VITE_CONTACT_EMAIL }}`
- `${{ secrets.VITE_FORMSPREE_ENDPOINT }}`

## Formspree Setup

1. Go to `https://formspree.io`.
2. Create or log into the Auralis Digital account.
3. Create a new form.
4. Copy the endpoint URL.
5. Add it as `VITE_FORMSPREE_ENDPOINT` in the deployment environment.
6. Add the domain email as `VITE_CONTACT_EMAIL`.

Do not hardcode the endpoint in `src/components/AuralisHomepage.tsx`.

## GitHub Configuration

Use these commands from the repo once the real values exist:

```powershell
gh variable set VITE_CONTACT_EMAIL --body "hello@auralisdigital.net"
gh secret set VITE_FORMSPREE_ENDPOINT --body "https://formspree.io/f/xxxxabcd"
```

Then trigger a deploy:

```powershell
gh workflow run "Deploy to GitHub Pages"
```

## Blocked Until

This cannot be fully verified until these real production values exist:

```text
VITE_CONTACT_EMAIL=...
VITE_FORMSPREE_ENDPOINT=...
```

The repo/deploy plumbing is ready. The remaining work is real-world configuration.

## Deploy

Commit and push any config/documentation changes to `main`.

GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.

## Test

- Open the live Auralis site on desktop.
- Submit the form on the live site from desktop.
- Open the live Auralis site on phone.
- Submit the form on the live site from phone.
- Confirm no `mailto:` window opens.
- Confirm both submissions arrive in the expected inbox.
- Confirm the success state appears after submission.
- Confirm no console or network errors appear.

## Success Criteria

- Public site uses the domain email value.
- Form submits without opening an email app.
- Submission arrives in the correct inbox.
- Contact flow feels immediate and reliable.

## Internal Note

This is the final technical step required to turn the site from a static presentation into a working lead-generation path.
