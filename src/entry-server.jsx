// Build-time renderer used by scripts/prerender.mjs (never shipped to browsers).
import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";
import routes from "./routes.jsx";
import { headTags, metaForPath, indexablePaths, lastModified, SITE_URL } from "./seo/meta";

export { indexablePaths, lastModified, SITE_URL };

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const renderHead = (pathname) =>
  headTags(metaForPath(pathname))
    .map(({ tag, attrs = {}, text }) => {
      const attributes = Object.entries(attrs)
        .map(([key, value]) => ` ${key}="${escapeHtml(value)}"`)
        .join("");
      if (tag === "meta" || tag === "link") return `<${tag}${attributes} data-seo>`;
      const body = tag === "script" ? text : escapeHtml(text);
      return `<${tag}${attributes} data-seo>${body}</${tag}>`;
    })
    .join("\n    ");

const { query, dataRoutes } = createStaticHandler(routes);

// Renders a route to HTML, waiting for lazy-loaded pages to resolve.
export async function render(pathname) {
  const context = await query(new Request(`http://localhost${pathname}`));
  const router = createStaticRouter(dataRoutes, context);
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </StrictMode>
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return html;
}
