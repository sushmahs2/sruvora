import type { SyntheticEvent } from 'react'

/**
 * Build a URL for a file in /public that respects Vite's `base` setting.
 * On GitHub Pages the site lives at /sruvora/, so "/assets/x.jpg" (root-relative)
 * points at sushmahs2.github.io/assets/x.jpg and 404s. This helper returns
 * "/sruvora/assets/x.jpg" in production and "/assets/x.jpg" on a root deployment.
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

// Branded fallback shown if an image ever fails to load (inline SVG, so it can't 404).
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#1B4332"/><g fill="none" stroke="#C5A059" stroke-width="6" stroke-linecap="round"><path d="M400 380V260"/><path d="M400 300c-40-10-70-40-76-84 44 4 74 34 76 84z"/><path d="M400 300c40-10 70-40 76-84-44 4-74 34-76 84z"/></g></svg>`
  )

export const imgFallback = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget
  img.onerror = null // prevent an infinite error loop
  img.src = FALLBACK
}
