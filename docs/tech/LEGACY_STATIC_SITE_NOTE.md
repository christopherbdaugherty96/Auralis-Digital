# Legacy Static Site Note

Status: reference

This project may include legacy static HTML sites or older deployment patterns.

Current deployment boundary: see `docs/tech/DEPLOYMENT_TRUTH.md`.

For Auralis Digital itself:

- `main` is the source of truth for code and documentation.
- GitHub Actions builds `main` and publishes `dist/` to `gh-pages`.
- `gh-pages` is generated deployment output.
- Do not edit `gh-pages` manually or merge it into `main`.
- Static HTML under copied folders such as `website/`, `projects/`, and `service-areas/` is active deployment input.
- Do not treat copied static HTML as stale until the deployment workflow says it is no longer shipped.

If a client already has a static site:

- Determine how it is hosted
- Determine who owns the domain and hosting
- Confirm whether it should be replaced or refreshed

If replacing:

- Preserve any important content
- Confirm redirects if URLs change

If keeping:

- Document how updates are handled

Always confirm ownership and access before making changes.
