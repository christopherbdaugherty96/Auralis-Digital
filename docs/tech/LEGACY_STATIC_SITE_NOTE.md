# Legacy Static Site Note

Status: reference

This project may include legacy static HTML sites or older deployment patterns.

Current deployment boundary: see `docs/tech/DEPLOYMENT_TRUTH.md`.

For Auralis Digital itself:

- `main` is the source of truth for code and documentation.
- `gh-pages` is preserved as the deployment branch until proven otherwise.
- Do not merge `gh-pages` into `main`.
- Do not apply static HTML changes to `main` unless deployment truth confirms those files are active.

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
