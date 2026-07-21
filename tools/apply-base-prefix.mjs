import fs from 'node:fs';
import path from 'node:path';

const SRC = 'c:/Users/dwva/OneDrive/Desktop/NQ/viteplus-grid-clone/site';
const DEST = 'c:/Users/dwva/OneDrive/Desktop/bluecolorsite';
const WEBROOT = path.join(DEST, 'site');
const PREFIX = '/bluecolorsite';

// Rewrite ONLY root-absolute refs that are immediately preceded by a quote / backtick / paren.
// - excludes  >dist/assets/...        (on-page terminal text, preceded by 't')
// - excludes  "...unpkg.com/" + "/rive.wasm"  (CDN suffix concat — not a local path)
const RE = /(["'`(])\/(assets\/|vp-icons\.css|favicon\.svg|icon\.svg)/g;
const REWRITABLE = new Set(['.html', '.css', '.js', '.mjs']);

fs.rmSync(WEBROOT, { recursive: true, force: true });
fs.cpSync(SRC, WEBROOT, { recursive: true });

// VitePress emitted index.raw.html; nginx wants a real index.html
const raw = path.join(WEBROOT, 'index.raw.html');
if (fs.existsSync(raw)) fs.renameSync(raw, path.join(WEBROOT, 'index.html'));

// drop empty leftover dirs from the mirror
for (const d of ['reference']) {
  const p = path.join(WEBROOT, d);
  if (fs.existsSync(p) && fs.readdirSync(p).length === 0) fs.rmdirSync(p);
}

// ---- VitePress SPA base -------------------------------------------
// The client router derives its route from location.pathname minus `base`,
// and does history.replaceState(base + relativePath) after each load. Left
// at "/" it resolves "/bluecolorsite/" -> "bluecolorsite_index.md" (miss ->
// 404 page) and rewrites the address bar back to "/".
{
  const idx = path.join(WEBROOT, 'index.html');
  const html = fs.readFileSync(idx, 'utf8');
  const NEEDLE = '\\"base\\":\\"/\\"';
  const REPL = '\\"base\\":\\"' + PREFIX + '/\\"';
  const n = html.split(NEEDLE).length - 1;
  if (n !== 1) throw new Error(`expected exactly 1 base key, found ${n}`);
  fs.writeFileSync(idx, html.replace(NEEDLE, REPL));
  console.log(`patched VitePress base -> ${PREFIX}/`);
}

// ---- make the SPA router base-aware -------------------------------
// This VitePress build's pathToFile() (minified `vf`) maps a route to its
// page chunk via  pathname.slice(1).replace(/\//g,'_') + '.md'  and looks
// that up in __VP_HASH_MAP__. It never strips `base`, so under a mount
// prefix "/bluecolorsite/" resolves to "bluecolorsite_index.md" -> miss
// -> the 404 component replaces the real page. Strip the prefix first, so
// the lookup sees "/" -> "index.md" exactly as it does at the root.
{
  const fp = path.join(WEBROOT, 'assets/chunks/framework.DrK6JUm_.js');
  const js = fs.readFileSync(fp, 'utf8');
  const NEEDLE = 'function vf(e){let t=e.replace(/\\.html$/,"");';
  // (?=\/|$) so it strips both "/bluecolorsite/..." and a bare
  // "/bluecolorsite" — the latter happens when a StripPrefix middleware
  // removed the prefix server-side, so nginx never issues the
  // trailing-slash redirect and the address bar keeps the bare form.
  const REPL = 'function vf(e){let t=e.replace(/^' + PREFIX.replace('/', '\\/') + '(?=\\/|$)/,"").replace(/\\.html$/,"");';
  const n = js.split(NEEDLE).length - 1;
  if (n !== 1) throw new Error(`expected exactly 1 pathToFile definition, found ${n}`);
  fs.writeFileSync(fp, js.replace(NEEDLE, REPL));
  console.log('patched pathToFile() to strip the mount prefix');
}

// The router fetches the full page chunk for the active route, but the
// mirror only captured the .lean.js variant -> 404 -> 404 page. Provide the
// full name as well (content is identical for this single-page build).
for (const f of fs.readdirSync(path.join(WEBROOT, 'assets'))) {
  const m = f.match(/^(.*)\.lean\.js$/);
  if (!m) continue;
  const full = path.join(WEBROOT, 'assets', m[1] + '.js');
  if (!fs.existsSync(full)) {
    fs.copyFileSync(path.join(WEBROOT, 'assets', f), full);
    console.log(`filled missing page chunk  ${m[1]}.js  (from ${f})`);
  }
}

let totalFiles = 0, totalRefs = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) { walk(fp); continue; }
    if (!REWRITABLE.has(path.extname(e.name).toLowerCase())) continue;
    const src = fs.readFileSync(fp, 'utf8');
    const hits = (src.match(RE) || []).length;
    if (!hits) continue;
    fs.writeFileSync(fp, src.replace(RE, `$1${PREFIX}/$2`));
    totalFiles++; totalRefs += hits;
    console.log(`  rewrote ${String(hits).padStart(3)} refs  ${path.relative(WEBROOT, fp)}`);
  }
};
console.log('rewriting root-absolute refs ->', PREFIX);
walk(WEBROOT);
console.log(`\n${totalRefs} refs across ${totalFiles} files`);

// ---- verification -------------------------------------------------
const bad = [];
const check = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) { check(fp); continue; }
    if (!REWRITABLE.has(path.extname(e.name).toLowerCase())) continue;
    const s = fs.readFileSync(fp, 'utf8');
    const rel = path.relative(WEBROOT, fp);
    // any un-prefixed local ref left behind?
    for (const m of s.matchAll(/(["'`(])\/(assets\/|vp-icons\.css|favicon\.svg|icon\.svg)/g))
      bad.push(`LEFTOVER ${rel}: ${m[0]}`);
    // did we corrupt the CDN fallback?
    for (const m of s.matchAll(/(unpkg|jsdelivr)[^"'`]*bluecolorsite/g))
      bad.push(`CORRUPTED-CDN ${rel}: ${m[0]}`);
    // did we touch the on-page terminal text?
    for (const m of s.matchAll(/dist\/bluecolorsite/g))
      bad.push(`CORRUPTED-TEXT ${rel}: ${m[0]}`);
    // double prefix?
    for (const m of s.matchAll(/bluecolorsite\/bluecolorsite/g))
      bad.push(`DOUBLE-PREFIX ${rel}: ${m[0]}`);
  }
};
check(WEBROOT);

// every prefixed local ref must resolve to a real file on disk
const missing = new Set(), present = new Set();
const resolve = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) { resolve(fp); continue; }
    if (!REWRITABLE.has(path.extname(e.name).toLowerCase())) continue;
    const s = fs.readFileSync(fp, 'utf8');
    for (const m of s.matchAll(/\/bluecolorsite\/([A-Za-z0-9_@.\/-]+\.[A-Za-z0-9]{2,5})/g)) {
      if (m[1].includes('${')) continue; // dynamic chunk template
      (fs.existsSync(path.join(WEBROOT, m[1])) ? present : missing).add(m[1]);
    }
  }
};
resolve(WEBROOT);

console.log('\n--- verification ---');
console.log(bad.length ? bad.join('\n') : 'OK: no leftovers, no corrupted CDN/text, no double prefixes');
console.log(`refs resolving to real files : ${present.size}`);
console.log(`refs with NO file on disk    : ${missing.size}`);
for (const m of [...missing].sort()) console.log('   missing:', m);

// sanity: CDN fallback still intact
const theme = fs.readFileSync(path.join(WEBROOT, 'assets/chunks/theme.DUdUjBn9.js'), 'utf8');
console.log('\nCDN fallback intact:', /unpkg\.com\/"\)\.concat/.test(theme) && theme.includes('"/rive.wasm"'));
const fw = fs.readFileSync(path.join(WEBROOT, 'assets/chunks/framework.DrK6JUm_.js'), 'utf8');
console.log('wasm URL now        :', (fw.match(/"[^"]*rive\.BagEuNN0\.wasm"/) || [])[0]);
console.log('dynamic chunk tmpl  :', (fw.match(/`[^`]*assets\/\$\{t\}[^`]*`/) || [])[0]);
