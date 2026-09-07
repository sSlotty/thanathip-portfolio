/**
 * Inlines the built stylesheet into index.html.
 *
 * CRA emits the CSS as a <link>, which is render-blocking: the browser has to
 * open a second request and wait for it before painting anything. The bundle
 * is small enough (~12KB) that inlining it removes that round trip outright.
 *
 * Trade-off: the CSS is no longer cached separately, so repeat visitors carry
 * it inside the HTML each time. Worth it here because the stylesheet is small
 * and first paint matters more for a portfolio.
 */
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const htmlPath = path.join(buildDir, "index.html");

if (!fs.existsSync(htmlPath)) {
  console.error("inline-css: build/index.html not found — skipping.");
  process.exit(0);
}

let html = fs.readFileSync(htmlPath, "utf8");

// Match the emitted stylesheet link, capturing its href.
const linkPattern = /<link[^>]+href="([^"]*\/static\/css\/[^"]+\.css)"[^>]*rel="stylesheet"[^>]*>|<link[^>]+rel="stylesheet"[^>]*href="([^"]*\/static\/css\/[^"]+\.css)"[^>]*>/;
const match = html.match(linkPattern);

if (!match) {
  console.log("inline-css: no stylesheet link found — nothing to do.");
  process.exit(0);
}

const href = match[1] || match[2];
const cssPath = path.join(buildDir, href.replace(/^\//, ""));

if (!fs.existsSync(cssPath)) {
  console.error(`inline-css: ${cssPath} missing — leaving the link in place.`);
  process.exit(0);
}

const css = fs.readFileSync(cssPath, "utf8").replace(/\/\*# sourceMappingURL=.*?\*\//g, "");

// </style> inside the CSS would close the tag early; there is none in practice,
// but escape defensively rather than emit broken HTML.
const safe = css.replace(/<\/style>/gi, "<\\/style>");

html = html.replace(match[0], `<style>${safe}</style>`);
fs.writeFileSync(htmlPath, html);

console.log(
  `inline-css: inlined ${(Buffer.byteLength(css) / 1024).toFixed(1)}KB from ${href}`,
);
