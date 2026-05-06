# To do: choose and install a GitHub-based hosting platform

Status: pending

Current deployment boundary: see `docs/tech/DEPLOYMENT_TRUTH.md`.

Auralis Digital should choose one simple GitHub-connected hosting platform for deploying the upgraded website and future client sites.

## Best options

### Option 1: Vercel

Good for React/Vite/Next.js websites. Easy GitHub import, automatic deployments, preview links, and custom domain setup.

### Option 2: Netlify

Good for static websites and React/Vite builds. Easy GitHub import, automatic deployments, form features, preview deploys, and custom domain setup.

## Why this matters

Using exported code from Lovable means the website does not need to stay hosted on Lovable or depend on Lovable domain publishing. The code can live in GitHub, be deployed independently, and run on the real business domain through Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Recommended workflow

1. Keep website code in GitHub.
2. Connect GitHub repo to Vercel or Netlify.
3. Use automatic deploys from the main branch.
4. Use preview deploys for branches before going live.
5. Connect the real domain after preview testing.

## Default deploy settings for Lovable/Vite builds

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Current recommendation

Do not change hosting strategy until deployment is actively broken or first-client execution requires it.

Later, use Vercel or Netlify instead of relying on a Lovable published app URL. This keeps ownership of the code, allows individual changes through GitHub, and supports a cleaner client-work workflow.

Until reviewed:

- `main` is the source of truth for code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output.
- Do not edit `gh-pages` manually or merge it into `main`.
- Static HTML under copied folders is active deployment input.
