# Sportlad Site

Static Astro site — six-tab structure (Takes / Tips / Games / Community / Tools / Shop) per the project handoff. Builds to plain HTML/CSS/JS, no server needed, deploys free on Cloudflare Pages.

**Verified**: `npm install && npx astro build` runs clean, all 11 pages generate with no errors (checked in a sandboxed build — do a final `npm run dev` check on your own machine before going live too).

## Structure

- `src/content/config.ts` — content collection schemas. `articles` covers Takes (opinion), evergreen guides (education), and data-story pieces — all tagged by `sport` + `contentType` + `date`, matching the handoff's tagging system. `tips` covers daily picks.
- `src/content/articles/*.md` — the 3 drafted Takes plus one sample evergreen guide (BTTS explainer), ready to read on the site now.
- `src/content/tips/*.md` — one placeholder pick; swap for your first real one using the picks template.
- `src/pages/` — one folder per nav tab, plus `takes/[...slug].astro` for individual article pages (auto-generated from the content collection — add a new `.md` file and a page appears with zero extra wiring).
- `src/layouts/Layout.astro` — shared header/nav/footer, includes a BeGambleAware line in the footer.
- `src/styles/global.css` — all styling, single file, no framework.

## Notes on how filtering works

The Takes page (`/takes/?sport=football` etc.) filters client-side with a small inline script, not server-side — this is a static site with no server, so filtering has to happen in the browser after the page loads. Bookmarks/shared links with `?sport=` or `?type=` still work correctly.

## Running it locally

```
npm install
npm run dev       # local preview at localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # preview the built dist/ output
```

## Deploying

Per the handoff: push this to a GitHub repo, connect the repo to Cloudflare Pages, set the build command to `npm run build` and output directory to `dist`. Cloudflare handles the rest (free, auto-deploys on every push).

## What's deliberately placeholder / next steps

- **Shop page**: 3 sample products, no real images/pricing/checkout wired up yet. A Shopify connector is available in this workspace if you'd rather run the storefront through Shopify directly instead of a separate POD checkout — otherwise connect Printful/Printify per the handoff.
- **Community page**: Telegram invite links are `#` placeholders — swap in the real invite links once the groups exist.
- **Games page**: describes the roadmap (per the handoff's priority order) rather than a working game — Stage 3 build.
- **Tips page**: shows one placeholder pick so the layout has something to render. Add real picks as new files in `src/content/tips/`.
- Search bar in the header currently submits to `/takes/?q=...` but there's no actual search logic wired up yet — fine for now given content volume, worth adding real search (e.g. Pagefind) once there are enough articles to need it.
# sportlad-site
