# Sruvora Infratech Private Limited — Corporate Website

A premium, international-standard corporate website engineered for **Sruvora Infratech Private Limited** (`Construction · Infrastructure · Landscaping`), headquartered in Bangalore, Karnataka.

Crafted with an award-winning digital agency standard, this web application merges an architectural luxury aesthetic with high-performance responsive frontend architecture.

---

## 🏛️ Brand System & Creative Direction

- **Core Ethos**: *Built with Trust. Driven by Quality. Designed for the Future.*
- **Tagline**: *Engineering Quality. Enhancing Landscapes.*
- **Palette Architecture**:
  - **Light Beige** (`#FAF6F0` page, `#F3ECDD` alternate bands): warm, readable primary background.
  - **Deep Forest Green** (`#1B4332`, hover `#163829`): buttons, borders, dividers, header, footer and hero panels.
  - **Ink Black** (`#1A1A1A`): headings and body text on beige. **White** (`#FFFFFF`): text on green.
  - **Metallic Gold** (`#C5A059` / `#D4AF37`): company name, logo accents and highlights on green panels.
  - Colors are CSS variables (`--bg`, `--ink`, `--accent`, `--btn-*`) in `src/index.css`; wrapping any block in `.on-dark` flips it to the green/gold variant.
- **Typography**: *Bricolage Grotesque* (headings) and *Instrument Sans* (body), set in `tailwind.config.js`.

## 🚀 Deployment (GitHub Pages)

- Single workflow: `.github/workflows/vite-pages.yml` builds with Vite and publishes `dist/`. In **Settings → Pages**, set **Source = GitHub Actions**.
- Vite `base` is `/sruvora/` (override with `VITE_BASE=/` for a custom domain). Images must go through `asset('assets/...')` from `src/lib/asset.ts` so they respect the base path.
- The workflow copies `dist/index.html` to `dist/404.html` so deep links like `/sruvora/about` work on refresh.

---

## 🌟 Key Features & Architectural Enhancements

### 1. Homepage Cinematic Hero Slideshow
- **Full-Width Hero** (92vh) featuring smooth crossfade transitions between 5 high-resolution architectural photographs:
  1. *Luxury Residential Villa with Custom Stone Cladding*
  2. *Architectural Interior & Floating Marble Staircase*
  3. *Contemporary Residence Entrance with Hardscape Paving*
  4. *Integrated Villa Pathway, Granite Steps & Garden Flora*
  5. *Sunset Estate Landscape Architecture with Circular Lawn*
- **Subtle Ken Burns Effect**: Slow scale zoom (`scale: [1.08, 1]`) with reduced-motion preference detection (`prefers-reduced-motion`).
- **Foreground Editorial Layer**: Authoritative typography (*TURNING BLUEPRINTS INTO REALITY*), value narrative, dual conversion buttons (*Start a Project* / *Explore Our Services*).
- **Interactive Controls**: Auto-advances every 5.5s; includes pause on hover, manual play/pause, previous/next buttons, progress indicators, and keyboard arrow navigation.

### 2. Comprehensive 12-Service Catalog
Each discipline features technical specifications, scope checklists, and high-resolution architectural imagery:
1. *Residential & Civil Construction*
2. *Infrastructure & Site Development*
3. *Hardscape Works*
4. *Softscape & Landscaping*
5. *Paver & Kerb Installation*
6. *Landscape Design & Development*
7. *Irrigation & Drainage Solutions*
8. *Rainwater Harvesting*
9. *Water Features & Fountains*
10. *Wooden Decking & Pergolas*
11. *Tree Transplantation*
12. *Project Planning & Quantity Surveying*

### 3. Transparent Executive Leadership Section
- **Ms. Srushti T K** — Managing Director, B.E. (Civil) *(Verified Executive Portrait)*
- **Smt. Hemavathi** — Managing Director *(Verified Executive Portrait)*
- **Mr. Abhishek** — Head, Business & Project Operations, B.E. (Civil) *(Badged Illustrative Placeholder)*

### 4. Statutory Compliance & Privacy
- Displays official Government of Karnataka Labour Department registration and MSME certification graphics.
- **Zero Confidential Leakage**: Confidential statutory identifiers (PAN, GSTIN, ESIC numbers) are omitted from public HTML for corporate security, focusing on verified credentials.

### 5. Validated Project Enquiry Channel
- Complete client-side validation for Name, Email, Phone, and Project Scope.
- Direct-action transparency: Form submissions format technical specifications directly into the client's email application addressed to `sruvorainfratech@gmail.com` with fallbacks for direct calling (`+91 81520 45061`).

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build System**: Vite 6 (with `base: './'` for deployment anywhere)
- **Styling**: Tailwind CSS 3.4 with custom extensions
- **Motion & Micro-interactions**: Framer Motion 11
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6) with single-page app (SPA) 404 redirect restoration

---

## 💻 Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended; verified on Node 24)
- npm (v9 or higher)

### 2. Setup
```bash
# Navigate to project root
cd SRUVORA

# Install dependencies
npm install

# Start development server
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📦 Production Build & Local Preview

```bash
# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```
The output is generated into the `dist/` directory, optimized with minified chunks and hashed assets.

---

## 🚀 GitHub Pages Deployment Guide

The project is pre-configured for GitHub Pages deployment using two methods:

### Method A: Automated Deployment via GitHub Actions (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Sruvora Infratech corporate website enhancement"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Repository Settings**:
   - Navigate to your repository on GitHub.
   - Go to **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - The pre-configured `.github/workflows/deploy.yml` workflow will automatically trigger, build the website, and publish it live!

### Method B: Manual Build Deployment

1. Run the production build:
   ```bash
   npm run build
   ```
2. The `dist/` directory contains all static files along with `dist/404.html` for SPA client-side routing.
3. Deploy the contents of `dist/` to your `gh-pages` branch or any static hosting service (Netlify, Vercel, AWS S3, Cloudflare Pages).

---

## 🔒 Confidentiality & Security Notice

- No private API keys or passwords are baked into source code.
- No confidential statutory registration numbers (PAN, GSTIN, ESIC) are exposed in public client bundles.
- All executive likenesses are accurately labeled (verified portraits vs. illustrative placeholders).
