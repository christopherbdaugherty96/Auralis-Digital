# Deployment Truth

Status: current deployment boundary
Last updated: 2026-05-06

## Current Decision

- `main` is the source of truth for code and documentation.
- `gh-pages` is preserved as the deployment branch until proven otherwise.
- `gh-pages` must not be merged into `main`.
- Static HTML changes must not be applied to `main` unless the active deployment path proves those files are live.

## What Is Not Decided Yet

- Whether the public site is served from `gh-pages`.
- Whether `main` deploys anywhere automatically.
- Whether Vercel or Netlify should replace the current setup.

## Current Rule

Do not change hosting strategy until deployment is actively broken or first-client execution requires it.

## Later Review

After first-client/business execution, review:

- GitHub Pages
- Vercel
- Netlify
- domain routing
- form handling
- analytics
