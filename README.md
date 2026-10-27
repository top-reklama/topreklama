# Top Reklama — React storefront & personalization studio

A Next.js 16 / React 19 application, deployed on Vercel with a Turso (libSQL) database and private Vercel Blob storage. Albanian is the default language; the header includes English. The visual direction follows the supplied Concept 03 proposal, with the original logo, restrained typography, light footer, plain text buttons and a static product hero.

## Included

- Home, searchable/filterable product catalog, portfolio with original/enhanced image comparison, about, quote form, saved designs and order requests.
- Product editor for T-shirts, caps, mugs, pens and business cards. Original Top Reklama artwork is the initial design.
- Customer PNG/JPEG/WebP upload (15 MB), text, drag placement, keyboard placement, scale, rotation, front/back for T-shirts/cards, undo/redo, product color/size/quantity and proof download.
- Browser-local automatic draft recovery plus explicit server-side design saving.
- Order requests store an immutable design snapshot, original artwork IDs, proof PNGs and transparent print PNGs sized for 300 DPI at the declared physical print size.
- Session/user ownership checks, MIME signature validation, bounded request bodies, server-side schema validation, upload quotas, idempotent order creation and atomic order/outbox persistence.
- Turso holds structured records; Vercel Blob stores binary files with private access. Uploads are never public URLs: they are streamed through the API after an ownership check.
- A fail-closed ERP export endpoint, `/api/production`, is ready for the integration adapter. It does not send orders to an unknown ERP.

## Run locally

Requires Node 22.13+ (Node 24 recommended). No accounts are needed: without Turso and Blob credentials the database is the file `.data/local.db` and uploads are stored in `.data/blobs` (both git-ignored).

```sh
npm ci
cp .env.example .env.local   # then fill in ADMIN_EMAIL, ADMIN_PASSWORD and a 32+ character SESSION_SECRET
npm run build                # applies migrations, then builds
npm start                    # http://127.0.0.1:5190
```

`npm run dev` runs the development server instead. Migrations in `drizzle/` are applied once each by `npm run db:migrate` (also part of `dev` and `build`); new schema changes use `npm run db:generate`.

```sh
npx tsc --noEmit
node tests/api-smoke.mjs          # orders, designs, uploads, spam trap, upload-path ownership
node tests/admin-smoke.mjs        # admin sign-in, forged-identity refusal, order workflow, portfolio
node tests/rate-limit-smoke.mjs   # every request ceiling until it answers 429, then removes its rows
```

The tests need the local server running. They create isolated test sessions and contact no ERP or email service.

## Deploying to Vercel

1. **Push the repository to GitHub** and import it in Vercel (Add New → Project). Vercel detects Next.js; keep the default build command (`npm run build`). `vercel.json` places the functions in Frankfurt (`fra1`), close to Kosovo.
2. **Database:** in the project, open Storage → Marketplace → **Turso** (or create a database at turso.tech in the **Frankfurt** region) and connect it. Make sure `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` are set for Production and Preview. Every build applies pending migrations, and a build without `TURSO_DATABASE_URL` stops with an explanation instead of deploying an empty site.
3. **Files:** Storage → Create → **Blob**, choose **Private** access, and connect it to the project. This adds `BLOB_READ_WRITE_TOKEN`.
4. **Admin and site settings** (Settings → Environment Variables): `ADMIN_EMAIL`, `ADMIN_PASSWORD` (a long, unique password), `SESSION_SECRET` (32+ random characters, e.g. `openssl rand -base64 32`), and `SITE_URL` (the Vercel or custom domain). Keep `SITE_INDEXING` unset while clients review; set it to `on` at launch.
5. **Deploy**, then sign in at `/admin` with the admin email and password.

Optional: `RESEND_API_KEY` and `NOTIFY_EMAIL` for request emails, `PRODUCTION_API_TOKEN` for the ERP export. Changing any variable needs a redeploy. Changing `SESSION_SECRET` signs the administrator out everywhere.

**How it is built for Vercel**

- Every public page is pre-rendered at build time and served from Vercel's CDN; only the API runs as functions. Photos and fonts are cached for a week.
- Vercel limits request bodies to 4.5 MB, below the 15 MB that print files need, so browsers upload straight to Blob. The server reserves a path tied to the visitor (`/api/uploads/start`), issues a 10-minute token for exactly that path, images only, no overwriting (`/api/uploads/token`), then reads the file back, checks its real type, size and daily quotas, and only then records it (`/api/uploads/finish`). Files that fail the checks are deleted.
- Visitor identity is an HttpOnly cookie only; identity headers sent by clients are ignored. Rate limits use Vercel's `x-real-ip`. The admin session is an HMAC-signed, HttpOnly, SameSite=Strict cookie, and sign-in attempts are limited to 10 per IP every 15 minutes.

## Production handoff

`POST /api/orders` records requests for review, not paid or automatically approved manufacturing jobs. Prices and material availability were not supplied, so the site does not invent prices, charge customers or promise a delivery date.

A custom order stores its complete versioned design and physical dimensions. Original uploads stay unchanged. Non-empty sides are ordered front, then back; their preview and print IDs use that same sequence. PNG files are RGB previews/print artwork; they are **not** CMYK press-ready proofs. The production team must confirm stock, print method, final color management and a customer proof before manufacturing. The studio's physical print regions are configurable defaults, not yet manufacturer-approved templates.

**ERP integration remains pending:** obtain the vendor/product name, API documentation, authentication method, item/variant mappings, order lifecycle and file-ingestion requirements. Set `PRODUCTION_API_TOKEN` as a runtime secret to enable read-only integration export. It is disabled until configured. The outbox retains pending orders; no external synchronization has been claimed or enabled. A vendor-specific connector should acknowledge jobs, implement retry/backoff and reconcile external IDs before automatic production is switched on.

## Preview mode and launch

The site starts in **preview mode**: every page tells search engines not to index it (`noindex, nofollow`) and robots.txt offers no sitemap, so a shared review link stays out of search results. Visitors see no difference.

To launch, set these runtime variables in the hosting environment and redeploy:

- `SITE_INDEXING=on` — allows indexing and publishes the sitemap. Any other value, or none, keeps preview mode.
- `SITE_URL` — the public origin used for canonical links, social previews and the sitemap (defaults to `https://topreklama.net`).

Saved designs (`/porosite`) and administration stay `noindex` in both modes. Locally, add the same variables to the git-ignored `.dev.vars`.

## Request notifications

Every quote request and studio order is stored for review in `/admin`. To also receive an email for each one, create a [Resend](https://resend.com) account, verify the sending domain, and set these runtime variables:

- `RESEND_API_KEY` — the Resend API key (a secret).
- `NOTIFY_EMAIL` — who receives the alerts; separate several addresses with commas.
- `NOTIFY_FROM` — the sender, on the verified domain (defaults to `Top Reklama <njoftime@topreklama.net>`).

Replying to the email answers the customer directly. Without the first two variables no email is sent, and a failed delivery never loses the request.

## Content to fill in

`lib/site-content.ts` holds the client quotes, per-service starting prices and lead times, project stories and the frequent questions. The quotes, prices, lead times and stories sections stay hidden until entries are added, so nothing unconfirmed is shown. Review the permit and design answers in the questions before launch.

## Access and accounts

Visitors do not need an account: an unguessable HttpOnly cookie keeps their designs and requests on their device for 30 days. The administrator signs in at `/admin` with `ADMIN_EMAIL` and `ADMIN_PASSWORD`; the session lasts seven days and ends with "Dil nga llogaria".

## Content to confirm

- Current phone and WhatsApp/Viber routing; the proposal's +383 49 750 460 is used.
- Actual product SKUs, materials, garment colors/sizes, printable regions, print methods, minimums and pricing.
- Factory addresses (Prishtinë, Pejë) and per-city phone numbers come from the previous site, top-reklama.com, converted to +383; they live in `lib/locations.ts`. Confirm them, and whether the main number +383 49 750 460 and info@topreklama.net are still current (the old site used info@top-reklama.com).
- ERP integration. Operator email alerts are built in (see Request notifications) and need a Resend key.
- Original team/workshop photography and approval to publish third-party customer logos.

## Visual assets

The supplied Top Reklama van is used as a catalog concept. The Kubeti van is an AI-retouched visualization with a retained original-photo comparison, not a newly photographed project. T-shirt front/back, cap, pen and mug bases plus the promotional still-life were generated using the built-in ImageGen tool. Exact logo vectors are overlaid by the React interface in the editor. Files and the final prompts are documented in `ASSET-PROMPTS.md`.

## References

- Supplied Lorocode Concept 03 proposal, including its language and restrained visual direction.
- https://loostra.com/en/home/ — product selection, mockup preview and artwork-to-production workflow.
- https://neondecor.net/ — requested reference; the public page was behind browser verification during research, so its hidden content was not reproduced.
