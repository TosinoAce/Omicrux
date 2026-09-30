// Pre-renders every page to static HTML so search engines and social previews
// get real content, titles and meta tags without running JavaScript.
// Also writes 404.html, sitemap.xml and robots.txt. Runs as part of `npm run build`.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SSR_DIST = "dist-ssr";

const { render, renderHead, indexablePaths, lastModified, SITE_URL } = await import(
  pathToFileURL(`${SSR_DIST}/entry-server.js`).href
);

const template = (await readFile(`${DIST}/index.html`, "utf8")).replace(
  /\s*<title data-seo>.*?<\/title>/,
  ""
);

// Each page's CSS ships in its lazy chunk. Link it (and preload the JS) in the
// pre-rendered HTML so the page is styled on first paint, not after hydration.
const manifest = JSON.parse(await readFile(`${DIST}/.vite/manifest.json`, "utf8"));
const pageModule = (pathname) => {
  if (pathname.startsWith("/blog/")) return "src/pages/BlogPostPage.jsx";
  if (pathname.startsWith("/services/")) return "src/pages/ServiceDetailPage.jsx";
  const name = { "/about": "About", "/services": "Services", "/contact": "Contact", "/blog": "Blog", "/privacy": "Privacy" }[pathname];
  return name && `src/pages/${name}Page.jsx`;
};
const chunkAssets = (key, seen = new Set()) => {
  const chunk = manifest[key];
  if (!chunk || seen.has(key)) return { css: [], js: [] };
  seen.add(key);
  const nested = (chunk.imports ?? [])
    .filter((dep) => !manifest[dep]?.isEntry)
    .map((dep) => chunkAssets(dep, seen));
  return {
    css: [...(chunk.css ?? []), ...nested.flatMap((n) => n.css)],
    js: [chunk.file, ...nested.flatMap((n) => n.js)],
  };
};
const pageAssets = (pathname) => {
  const key = pageModule(pathname);
  if (!key) return "";
  const { css, js } = chunkAssets(key);
  const fresh = (file) => !template.includes(file);
  return [
    ...[...new Set(css)].filter(fresh).map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`),
    ...[...new Set(js)].filter(fresh).map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`),
  ].join("\n    ");
};

const page = async (pathname) =>
  template
    .replace("<!--seo-tags-->", renderHead(pathname))
    // after the global stylesheet, matching the order they load in the browser
    .replace("</head>", `  ${pageAssets(pathname)}\n  </head>`)
    .replace("<!--app-html-->", await render(pathname));

// "/about" -> dist/about.html, served by Netlify at /about (no trailing slash).
const fileFor = (pathname) => (pathname === "/" ? `${DIST}/index.html` : `${DIST}${pathname}.html`);

for (const pathname of indexablePaths) {
  const file = fileFor(pathname);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, await page(pathname));
  console.log(`prerendered ${pathname} -> ${file}`);
}

await writeFile(`${DIST}/404.html`, await page("/404"));
console.log("prerendered 404 -> dist/404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePaths
  .map(
    (pathname) => `  <url>
    <loc>${SITE_URL}${pathname === "/" ? "/" : pathname}</loc>
    <lastmod>${lastModified(pathname) ?? today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(`${DIST}/sitemap.xml`, sitemap);

await writeFile(
  `${DIST}/robots.txt`,
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);
console.log(`wrote sitemap.xml (${indexablePaths.length} URLs) and robots.txt for ${SITE_URL}`);

// One canonical URL per page: redirect trailing-slash variants (/about/ -> /about).
await writeFile(
  `${DIST}/_redirects`,
  indexablePaths
    .filter((pathname) => pathname !== "/")
    .map((pathname) => `${pathname}/  ${pathname}  301`)
    .join("\n") + "\n"
);
console.log("wrote _redirects (trailing-slash -> canonical)");

await rm(SSR_DIST, { recursive: true, force: true });
await rm(`${DIST}/.vite`, { recursive: true, force: true }); // build manifest isn't needed at runtime
