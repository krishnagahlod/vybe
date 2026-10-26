# VYBE Storefront — Project Documentation

**Brand:** VYBE  
**Tagline:** Made for your kind of movement  
**Project:** ENT 625 — Phase 2 Digital Marketing Experiment  
**Deployment Target:** Vercel  
**Status:** Completed Production-Ready Prototype  

---

## 1. What Was Built

A responsive, high-aesthetic women's athleisure storefront prototype featuring a complete front-end shopping journey:
- **Homepage (`/`)**: Editorial lifestyle hero, campaign city highlights (Mumbai, Pune, Delhi, Bangalore), movement collection grid, curated featured pieces, brand philosophy block, technical fabric innovation ribbon, and interactive 3-step "Find Your Movement Vibe" style quiz.
- **Catalogue (`/shop`)**: Complete 12-piece concept collection with live debounced search, sort dropdown (*Featured, Price: Low to High, Price: High to Low, Name A-Z*), colorway swatch filters (*Sage, Pale Peach, Soft Pink, Rose, Muted Mauve*), active filter count, and reset controls.
- **Product Detail (`/product/[slug]`)**: Dynamic routes for all 12 products with static pre-rendering, image gallery frame, interactive "Fit Finder" sizing recommender modal, size selection validation, quantity picker, sticky mobile Add-to-Bag bar, curated "Complete the Look" pairing intelligence, and expandable accordions.
- **Slide-Over Mini-Cart Drawer**: Smooth flyout drawer with complimentary delivery progress meter (₹1,500 threshold), live item quantity steppers, item removal, subtotal calculation, and direct checkout CTA.
- **Wishlist & Saved Items**: Full client-side wishlist system persisted in `localStorage`, heart toggles on cards, header badge counter, and dedicated slide-over modal.
- **Dedicated FAQ (`/faq`)**: Categorized accordions covering Sizing & Fit, Fabrics & Climate Care, Shipping & Campaign Cities, Exchanges, and Academic Transparency.
- **Dedicated Size Guide (`/size-guide`)**: Anatomical measurement illustration, interactive Inches vs. Centimeters unit toggle, product-specific dimension tables, and international conversion table (IN / UK / US / EU).
- **Simulated Order Tracker (`/track-order`)**: Order reference search (`VYBE-DEMO-XXXXXX`), simulated carrier details (Blue Dart Express), and 4-step milestone fulfillment timeline.
- **Shopping Bag (`/cart`)**: LocalStorage-persisted cart state, dynamic subtotal calculation, item quantity controls, item removal, and empty bag state.
- **Demo Checkout (`/checkout`)**: Fully simulated checkout flow with minimal non-sensitive contact fields, zero credit-card fields, in-line validation, and order confirmation summary linking directly to order tracking.
- **Supporting Pages**: Brand Story (`/about`), Simulated Inquiries (`/contact`), Academic Privacy Notice (`/privacy`), Policy Guidelines (`/shipping-returns`), branded 404 (`/not-found`), and branded Error Boundary (`/error`).
- **SEO & Technical Infrastructure**: Schema.org JSON-LD (`Organization`, `Product`), dynamic sitemap (`sitemap.xml`), robots directives (`robots.txt`), OpenGraph and Twitter card previews, and PWA Web App Manifest (`manifest.webmanifest`).
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

Defined in `src/app/globals.css`. The five brand colours are the exact values from `DESIGN_SYSTEM.md`; the "ink" shades are deeper versions used for text and buttons so they meet WCAG AA contrast.

```css
--vybe-sage:      #d8e2dc; /* Calm backgrounds and sections */
--vybe-peach:     #ffe5d9; /* Warm accents and highlights */
--vybe-pink:      #ffcad4; /* Small accents and cards */
--vybe-rose:      #f4acb7; /* Selected and active states */
--vybe-mauve:     #9d8189; /* Primary brand accent */
--vybe-mauve-ink: #73585f; /* Accent text, button hover */
--vybe-sage-ink:  #56695c; /* Positive states */
--vybe-rose-ink:  #9a4b5a; /* Alerts and saves */
--color-bg:       #fffdfb;
--color-text:     #292526;
--color-muted:    #6e6668;
--color-border:   #e9e2e1;
```

### Typography
- **Display (headlines, product names, wordmark):** Cormorant Garamond
- **Text (body, labels, buttons, navigation):** Plus Jakarta Sans

### Shape & layout
- Buttons and chips: 4px corners; images and cards: 6px; circles only for icons and swatches
- Classic full-width header with centred wordmark; sage footer
- The brand identity is also presented on the site at `/about#brand-identity`

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
