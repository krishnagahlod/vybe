# VYBE Storefront — Project Documentation

**Brand:** VYBE  
**Tagline:** Made for your kind of movement  
**Project:** ENT 625 — Phase 2 Digital Marketing Experiment  
**Deployment Target:** Vercel  
**Status:** Completed Production-Ready Prototype  

---

## 1. What Was Built

A responsive women's athleisure storefront prototype featuring a complete front-end shopping journey:
- **Homepage (`/`)**: Editorial lifestyle hero, campaign city highlights (Mumbai, Pune, Delhi, Bangalore), movement collection grid, curated featured pieces, and brand philosophy block.
- **Catalogue (`/shop`)**: Complete 12-piece concept collection with active category filtering (`Leggings`, `Sports Bras`, `Tops & Tanks`, `Shorts`, `Matching Sets`, `Layers & Joggers`).
- **Product Detail (`/product/[slug]`)**: Dynamic routes for all 12 products with static pre-rendering, image gallery frame, size selection validation, quantity picker, and interactive add-to-bag feedback.
- **Shopping Bag (`/cart`)**: LocalStorage-persisted cart state, dynamic subtotal calculation, item quantity controls, item removal, and empty bag state.
- **Demo Checkout (`/checkout`)**: Fully simulated checkout flow with minimal non-sensitive contact fields, zero credit-card fields, in-line validation, and order confirmation summary.
- **Supporting Pages**: Brand Story (`/about`), Simulated Inquiries (`/contact`), Academic Privacy Notice (`/privacy`), and Policy Guidelines (`/shipping-returns`).
- **Analytics & Tracking**: 5-event taxonomy (`page_view`, `view_item`, `add_to_cart`, `begin_checkout`, `demo_checkout_complete`) via `window.dataLayer`, URL campaign UTM parameter capture, and zero commercial purchase event compliance.

---

## 2. Technology Decisions

- **Framework:** Next.js App Router (v16.4) with React 19 & TypeScript 5
- **Styling:** Tailwind CSS v4 with custom VYBE design tokens and zero ad-hoc styles
- **Motion:** Framer Motion for purposeful, performance-conscious transitions adhering to `prefers-reduced-motion`
- **Data Layer:** Central typed catalogue in `src/data/products.ts`
- **State Management:** `localStorage` synchronization using React 19's `useSyncExternalStore` for hydration safety
- **Deployment:** Vercel with automated static optimization and security headers (`vercel.json`)

---

## 3. Design Tokens & Visual System

```css
--vybe-sage:    #d8e2dc; /* Soft backgrounds and calm sections */
--vybe-peach:   #ffe5d9; /* Warm background accents & banner */
--vybe-pink:    #ffcad4; /* Subtle highlights and small cards */
--vybe-rose:    #f4acb7; /* Active accents and curated badges */
--vybe-mauve:   #9d8189; /* Primary brand accent */
--color-bg:     #fffdfb; /* Main background */
--color-surface:#ffffff; /* Panels and cards */
--color-text:   #292526; /* Accessible dark charcoal text */
--color-muted:  #6e6668; /* Accessible secondary copy */
--color-border: #e9e2e1; /* Subtle dividers */
```

### Typography
- **Editorial Headings:** `Playfair_Display` (Google Font via `next/font/google`)
- **Body & UI:** `Plus_Jakarta_Sans` (Google Font via `next/font/google`)

---

## 4. Local Development

### Prerequisites
- Node.js LTS (v20+ or v22+)
- npm (v10+ or v11+)

### Installation
```bash
git clone <repo-url>
cd vybe-storefront
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Validation & Quality Commands
```bash
# Production bundle build test
npm run build

# Code style and linter check
npm run lint
```

---

## 5. Analytics & UTM Configuration

Copy `.env.example` to `.env.local` to configure live measurement IDs when provided:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

### Campaign UTM Convention
```text
# Meta Paid Social:
/?utm_source=meta&utm_medium=paid_social&utm_campaign=vybe_phase2&utm_content=creative_a

# Google Search:
/?utm_source=google&utm_medium=cpc&utm_campaign=vybe_phase2&utm_content=search_ad_a
```

---

## 6. Vercel Deployment Instructions

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `vybe-storefront` repository.
4. Framework preset will automatically detect **Next.js**.
5. Add any optional `NEXT_PUBLIC_*` environment variables in Vercel project settings.
6. Click **Deploy**. Production URLs are automatically provisioned with SSL.

---

## 7. Strict Academic Disclosures

1. **Demo Only:** No payment gateway, credit card collection, or banking forms exist.
2. **Simulated Inventory:** All 12 activewear products and INR prices are conceptual drafts.
3. **No Commercial Purchase:** Finishing checkout fires `demo_checkout_complete` and never reports commercial revenue or real purchase conversions.
