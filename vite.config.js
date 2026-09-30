import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  define: {
    // Absolute site URL for canonical links, social tags and the sitemap.
    // Netlify sets URL to the site's primary domain at build time.
    'import.meta.env.VITE_SITE_URL': JSON.stringify(
      process.env.VITE_SITE_URL || process.env.URL || ''
    ),
  },
  build: isSsrBuild
    ? {}
    : {
        // Lets scripts/prerender.mjs find the CSS/JS chunks for each page.
        manifest: true,
        rollupOptions: {
          output: {
            // Keep React and the router in their own chunk: it rarely changes,
            // so browsers keep it cached across site updates.
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
            },
          },
        },
      },
}))
