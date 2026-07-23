# bluecolorsite

Static landing page (Vite+ style, with real [Rive](https://rive.app) animations),
deployed on **Dokploy** and served at:

```
https://clients.welocalhost.com/bluecolorsite
```

## Layout

```
bluecolorsite/
  Dockerfile        # nginx:1.27-alpine, single stage, no build step
  nginx.conf        # path normalisation + wasm MIME + caching
  .dockerignore
  site/             # the web root
    index.html
    favicon.svg  icon.svg  vp-icons.css
    assets/         # hashed js/css/fonts/images + .riv + rive.wasm
      chunks/
```

## Dokploy setup

Create an **Application** → build type **Dockerfile**, then add a domain:

| Field | Value |
|---|---|
| Host | `clients.welocalhost.com` |
| Path | `/bluecolorsite` |
| Internal Path | `/` |
| Container Port | `80` (recommended) — see note |
| Strip Path | either (see below) |
| HTTPS | on (Let's Encrypt) |

### ⚠️ Container Port — the #1 cause of a 404 here

Dokploy defaults **Container Port** to `3000` (it assumes a Node app). This nginx
image listens on `80`. If Traefik forwards to a port nothing is listening on, the
request never reaches nginx and you get a proxy error / 404-style failure — the
site "deploys" fine but every request fails.

Two ways to fix it, either is enough:

1. **Set Container Port to `80`** in the domain dialog (recommended), **or**
2. leave it at `3000` — this image now **also listens on `3000`**, so it works
   either way. (`nginx.conf` has `listen 80; listen 3000;` and the Dockerfile
   `EXPOSE 80 3000`.)

**Strip Path does not matter here.** Traefik may or may not strip the
`/bluecolorsite` prefix before forwarding depending on the middleware attached.
`nginx.conf` normalises both forms, so the container serves correctly either way:

```nginx
rewrite ^/bluecolorsite$      /bluecolorsite/  permanent;
rewrite ^/bluecolorsite/(.*)$ /$1              last;
```

## What had to change to run under a sub-path

This is a VitePress SPA that was built for the **root** of a domain. Three
separate things break under a path prefix. All of them are applied by
[`tools/apply-base-prefix.mjs`](tools/apply-base-prefix.mjs), which regenerates
`site/` from the original mirror — re-run it if you ever change the mount path.

### 1. Asset URLs (83 refs)

Asset URLs were root-absolute (`/assets/app.js`, `/favicon.svg`, …). Under path
routing the browser would request `clients.welocalhost.com/assets/app.js`, which
Traefik does not route — every asset 404s. They are rewritten to
`/bluecolorsite/...`:

| file | refs |
|---|---|
| `site/index.html` | 29 |
| `site/assets/style.BQmZbv3D.css` | 31 |
| `site/assets/chunks/framework.DrK6JUm_.js` | 23 |

Deliberately **not** rewritten:

- `"https://unpkg.com/" + … + "/rive.wasm"` and the jsdelivr
  `/rive_fallback.wasm` in `theme.DUdUjBn9.js` — CDN URL *suffixes*, not local
  paths. That file stays byte-identical to the original.
- `dist/assets/…` in the page copy — on-page terminal *text*, not a URL.

### 2. VitePress `base`

`__VP_SITE_DATA__.base` was `"/"`. After each page load the router runs
`history.replaceState(base + relativePath)`, which would rewrite the address bar
from `/bluecolorsite/` back to `/`. It is patched to `"/bluecolorsite/"`.

### 3. The SPA router's `pathToFile()`

This build's `pathToFile()` (minified `vf`) maps a route to its page chunk with
`pathname.slice(1).replace(/\//g,'_') + '.md'` and looks it up in
`__VP_HASH_MAP__`. **It never strips `base`** — so `/bluecolorsite/` resolved to
`bluecolorsite_index.md`, missed the hash map, and the 404 component replaced
the real page (the page looked broken even though every asset loaded fine).

One surgical edit makes it base-aware:

```js
function vf(e){let t=e.replace(/^\/bluecolorsite(?=\/|$)/,"").replace(/\.html$/,"");…
```

The `(?=\/|$)` matters: it strips both `/bluecolorsite/…` **and** a bare
`/bluecolorsite`, which is what the address bar shows when a StripPrefix
middleware removed the prefix server-side and nginx never issued the
trailing-slash redirect.

> Changing the mount path means updating all three of the above (edit `PREFIX`
> in `tools/apply-base-prefix.mjs` and re-run it) **and** the two `rewrite`
> lines in `nginx.conf`.

## Local test

```bash
docker build -t bluecolorsite .
docker run --rm -p 8080:80 bluecolorsite
# -> http://localhost:8080/bluecolorsite
# -> http://localhost:8080/healthz   (returns "ok")
```

## Verified

The `nginx.conf` rules were exercised against the real bundle in a browser at
1440×900, in **both** Traefik behaviours (prefix forwarded, and prefix stripped
by a StripPrefix middleware). In both:

- title is `Vite+ | The Unified Toolchain for the Web` (not the 404 component)
- **0 console errors / warnings, 0 failed requests**
- `rive.wasm` + all three `.riv` binaries return `200`
- the isometric grid canvas (1429×647) is genuinely animating — canvas pixels
  sampled 900 ms apart differ, so the Rive state machine is running rather than
  showing a frozen first frame
- the address bar normalises to `/bluecolorsite/`

Not yet run as a real container: the Docker daemon was not available on the
machine where this was prepared, so `docker build` should be confirmed on the
first Dokploy deploy. The nginx rules themselves were verified by emulation.

## Notes

- `rive.wasm` is served as `application/wasm` so the runtime can stream-instantiate
  it; without that MIME the animation silently falls back to the CDN.
- `/assets/*` is immutable-cached for 1 year (filenames are content-hashed);
  `index.html` is `no-store` so redeploys show up immediately.
- Some `unicode-range` font subsets (cyrillic / greek / vietnamese) and a few
  responsive `primary-button-background` variants are referenced by the CSS but
  were not part of the original mirror. They are never requested by this page —
  the browser only fetches the subsets it needs — so they produce no console errors.
