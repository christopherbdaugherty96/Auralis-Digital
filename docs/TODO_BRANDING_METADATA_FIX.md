# TODO: Branding Metadata Cleanup

Status: pending cleanup task

After migrating the Lovable/Vite website into production, some default project naming may still appear in the browser tab, metadata, or social previews.

The live site should consistently present Auralis Digital branding.

---

## Goal

Remove any leftover names such as:

- Lovable
- local-look-pro
- Vite App
- placeholder project names

Replace them with Auralis Digital branding.

---

## Required Checks

Inspect and update:

- `index.html`
- `public/*`
- favicon references
- manifest files (if present)
- SEO/head metadata files (if present)
- any page-level title logic in React components

---

## Production Branding

### Title

`Auralis Digital | Professional Websites for Local Businesses`

### Description

`Professional websites for Michigan local businesses built to earn trust, drive calls, bookings, and quote requests.`

---

## Social Metadata

Update if present:

- og:title
- og:description
- twitter:title
- twitter:description

---

## Verification

After changes:

- browser tab shows Auralis Digital
- no Lovable/local-look-pro text remains
- social preview text matches branding
- site still builds successfully
- deploy completes successfully

---

## Internal Note

This is a trust/detail issue. Small branding leftovers can make a business site feel unfinished even when the design is strong.
