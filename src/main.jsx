import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes, { pageImports } from './routes.jsx'
import './index.css'
import finishIntro from './intro.js'

const router = createBrowserRouter(routes)
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

// Pages are pre-rendered to HTML at build time (scripts/prerender.mjs):
// attach to that markup instead of re-rendering it. The dev server has none.
const container = document.getElementById('root')
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)

finishIntro()

// Once the first page has loaded and the browser is idle, fetch the other
// (small) page chunks so navigating between pages is instant.
const prefetchPages = () => Object.values(pageImports).forEach((load) => load())
window.addEventListener('load', () => {
  if ('requestIdleCallback' in window) requestIdleCallback(prefetchPages, { timeout: 3000 })
  else setTimeout(prefetchPages, 2000)
})
