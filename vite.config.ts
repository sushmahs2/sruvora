import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from /<repo-name>/.
// Override with VITE_BASE=/ for a custom domain or a root (username.github.io) deployment.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/sruvora/',
})
