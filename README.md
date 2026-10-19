# Top Reklama — React storefront & personalization studio

A real React 19 application using Vinext/Vite, Cloudflare Workers, D1 and R2. Albanian is the default language; the header includes English. The visual direction follows the supplied Concept 03 proposal, with the original logo, restrained typography, light footer, plain text buttons and a static product hero.

## Included

- Home, searchable/filterable product catalog, portfolio with original/enhanced image comparison, about, quote form, saved designs and order requests.
- Product editor for T-shirts, caps, mugs, pens and business cards. Original Top Reklama artwork is the initial design.
- Customer PNG/JPEG/WebP upload (15 MB), text, drag placement, keyboard placement, scale, rotation, front/back for T-shirts/cards, undo/redo, product color/size/quantity and proof download.
- Browser-local automatic draft recovery plus explicit server-side design saving.
- Order requests store an immutable design snapshot, original artwork IDs, proof PNGs and transparent print PNGs sized for 300 DPI at the declared physical print size.
- Session/user ownership checks, MIME signature validation, bounded request bodies, server-side schema validation, upload quotas, idempotent order creation and atomic order/outbox persistence.
- D1 holds structured records; R2 stores binary files. Uploads are not public object URLs.
- A fail-closed ERP export endpoint, `/api/production`, is ready for the integration adapter. It does not send orders to an unknown ERP.

## Run locally

Requires Node 22.13+ (Node 24 recommended).

```sh
npm ci
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_closed_kree.sql
npm run dev -- --port 5190 --hostname 127.0.0.1
```

Apply the first migration only once to a new local database. Later schema changes use `npm run db:generate` and append migrations. The local database and files are under ignored `.wrangler/state` and are separate from hosted data.

```sh
npx tsc --noEmit
node tests/api-smoke.mjs
```

The API tests require the local server. They create isolated local test sessions and do not contact an ERP or email service.

## Production handoff

`POST /api/orders` records requests for review, not paid or automatically approved manufacturing jobs. Prices and material availability were not supplied, so the site does not invent prices, charge customers or promise a delivery date.

A custom order stores its complete versioned design and physical dimensions. Original uploads stay unchanged. Non-empty sides are ordered front, then back; their preview and print IDs use that same sequence. PNG files are RGB previews/print artwork; they are **not** CMYK press-ready proofs. The production team must confirm stock, print method, final color management and a customer proof before manufacturing. The studio's physical print regions are configurable defaults, not yet manufacturer-approved templates.

**ERP integration remains pending:** obtain the vendor/product name, API documentation, authentication method, item/variant mappings, order lifecycle and file-ingestion requirements. Set `PRODUCTION_API_TOKEN` as a runtime secret to enable read-only integration export. It is disabled until configured. The outbox retains pending orders; no external synchronization has been claimed or enabled. A vendor-specific connector should acknowledge jobs, implement retry/backoff and reconcile external IDs before automatic production is switched on.

## Access and accounts

The hosted review starts owner-private. Local/public-compatible guests receive an unguessable HttpOnly session cookie. Signed-in Sites visitors use their platform identity. New signed-in records are available across sessions under that identity; anonymous records remain tied to the device cookie. Existing guest designs are not automatically migrated on sign-in. Production staff access and notification delivery must be configured with the actual operating environment before a public store launch.

## Content to confirm

- Current phone and WhatsApp/Viber routing; the proposal's +383 49 750 460 is used.
- Actual product SKUs, materials, garment colors/sizes, printable regions, print methods, minimums and pricing.
- Six non-HQ street addresses and hours.
- ERP integration and operator notifications.
- Original team/workshop photography and approval to publish third-party customer logos.

## Visual assets

The supplied Top Reklama van is used as a catalog concept. The Kubeti van is an AI-retouched visualization with a retained original-photo comparison, not a newly photographed project. T-shirt front/back, cap, pen and mug bases plus the promotional still-life were generated using the built-in ImageGen tool. Exact logo vectors are overlaid by the React interface in the editor. Files and the final prompts are documented in `ASSET-PROMPTS.md`.

## References

- Supplied Lorocode Concept 03 proposal, including its language and restrained visual direction.
- https://loostra.com/en/home/ — product selection, mockup preview and artwork-to-production workflow.
- https://neondecor.net/ — requested reference; the public page was behind browser verification during research, so its hidden content was not reproduced.
