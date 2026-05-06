# Deployment Truth

Status: current deployment boundary
Last updated: 2026-05-06

## Current Decision

- `main` is the source of truth for code and documentation.
- GitHub Actions builds `main`.
- The deploy workflow publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output, not a source branch.
- `gh-pages` must not be edited manually or merged into `main`.
- Static HTML under configured copied folders is active deployment input.

## What Is Not Decided Yet

- Whether Vercel or Netlify should replace the current setup.

## Active Deployment Inputs

The GitHub Pages workflow currently:

- runs on pushes to `main`
- maps production contact config into the Vite build from GitHub Actions variables/secrets
- builds the Vite app into `dist/`
- copies selected static pages from `website/`, `projects/`, and `service-areas/` into `dist/`
- publishes `dist/` to `gh-pages`
- sets the custom domain to `www.auralisdigital.net`

Therefore, static HTML in copied folders is not automatically legacy. Review the workflow before changing or deleting those files.

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
