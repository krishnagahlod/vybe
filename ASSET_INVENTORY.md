# VYBE Asset Inventory & Photography Status

**Brand:** VYBE  
**Project:** ENT 625 — Phase 2 Digital Marketing  
**Date:** October 25, 2026  
**Status:** Vector Concept Fallback Mode (Production Ready)

---

## 1. Asset Inventory Summary

As documented in `PROJECT_BRIEF.md` (§8) and `AI_CODING_INSTRUCTIONS.md` (§2), physical product photography is pending supply from the project owner. In strict adherence to project rules:
1. No image filenames have been fabricated or hotlinked from external commercial stores.
2. An elegant, branded vector silhouette placeholder ([`concept-silhouette.svg`](file:///c:/VYBE/vybe-storefront/public/images/products/concept-silhouette.svg)) was created in the agreed color palette (`#d8e2dc`, `#ffe5d9`, `#f4acb7`, `#9d8189`).
3. Watermarks on all images clearly state: *"CONCEPT PROTOTYPE • Photography Pending Owner Supply"*.
4. Layout aspect ratios are strictly constrained (`aspect-[4/5]`) to prevent Cumulative Layout Shift (CLS).

---

## 2. Inventory Register

| Asset Path | Subject | Orientation / Ratio | Quality / Style | Intended Use | Product Mapping | Alt Text |
|---|---|---|---|---|---|---|
| `/images/products/concept-silhouette.svg` | Branded Athleisure Silhouette | 4:5 Vertical (600×750) | High-Res Vector SVG, Studio Arches & Hanger | Product Catalog & Detail Cards | All 12 Conceptual Products (`vybe-001` through `vybe-012`) | "{Product Name} concept product preview" |
| `/images/brand/` | Brand Graphics | Multi | Vector / Typographic | Header & Footer Wordmarks | Global Branding | "VYBE wordmark" |
| `/images/lifestyle/` | Editorial / Lifestyle | 16:9 / 4:5 | Fluid Editorial Gradients | Homepage Hero & Story Blocks | Homepage Discovery Sections | "VYBE movement philosophy" |

---

## 3. Image Rights & Replacement Checklist

- [x] Vector placeholders created locally in repository without remote CDN dependencies.
- [x] Zero external copyright or hotlinking risks.
- [x] Structured folders prepared:
  - `public/images/products/`
  - `public/images/lifestyle/`
  - `public/images/brand/`
- [x] When photographic assets are supplied by the project owner:
  1. Place `.webp` images into `public/images/products/`.
  2. Update the `images` array in [`src/data/products.ts`](file:///c:/VYBE/vybe-storefront/src/data/products.ts).
  3. No component code changes are required; all components dynamically consume the updated array.
