"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/lib/toast-context";

type ProductCardProps = {
  product: Product;
};

// Map colorway names to CSS colors for swatch preview
const COLOR_SWATCH_MAP: Record<string, string> = {
  "Sage": "#8a9a86",
  "Muted Mauve": "#9d8189",
  "Pale Peach": "#e8ded1",
  "Rose": "#f4acb7",
  "Soft Pink": "#ffcad4",
  "Sage / Rose": "linear-gradient(135deg, #8a9a86 50%, #f4acb7 50%)",
};

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const isSaved = isInWishlist(product.id);

  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/flow-high-rise-leggings-1.jpg";

  const imageAlt =
    product.images && product.images.length > 0
      ? product.images[0].alt
      : `${product.name} luxury activewear preview`;

  const swatchColor = product.colorName ? COLOR_SWATCH_MAP[product.colorName] || "#9d8189" : "#9d8189";

  return (
    <article className="group flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative">
      {/* Product Image Frame */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-[var(--vybe-peach)]/15 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Dark Vignette on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category & Curated Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-mono font-semibold uppercase tracking-[0.2em] bg-white/90 backdrop-blur-md text-[var(--color-text)] border border-black/5 shadow-2xs">
            {product.category.replace("-", " ")}
          </span>
          {product.featured && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[var(--vybe-rose)] text-[var(--color-text)] shadow-xs">
              Studio Drop
            </span>
          )}
        </div>

        {/* Wishlist Heart Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
            if (!isSaved) {
              showToast(`Saved "${product.name}" to Wishlist`, "success");
            } else {
              showToast(`Removed "${product.name}" from Wishlist`, "info");
            }
          }}
          aria-label={isSaved ? `Remove ${product.name} from saved items` : `Save ${product.name} to wishlist`}
          className={`absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer ${
            isSaved
              ? "bg-[var(--vybe-rose)] text-white scale-105"
              : "bg-white/90 backdrop-blur-md text-[var(--color-muted)] hover:text-[var(--vybe-mauve)] hover:bg-white"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Hover Quick View Trigger Pill */}
        <div className="absolute bottom-3.5 right-3.5 left-3.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="py-2.5 px-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 text-center shadow-lg text-[11px] font-semibold tracking-wider uppercase text-[var(--color-text)] flex items-center justify-center gap-1.5">
            <span>Explore Details</span>
            <span>&rarr;</span>
          </div>
        </div>
      </Link>

      {/* Product Details Section */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
        {/* Colorway & Swatch Row */}
        {product.colorName && (
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full border border-black/10 shrink-0 shadow-2xs"
              style={{
                background: swatchColor.includes("linear-gradient")
                  ? swatchColor
                  : swatchColor,
              }}
              title={product.colorName}
            />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted)]">
              {product.colorName}
            </span>
          </div>
        )}

        {/* Title */}
        <div className="flex-1">
          <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] transition-colors leading-snug">
            <Link href={`/product/${product.slug}`} className="focus-visible:outline-hidden">
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed font-light mt-1.5">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Sizes Row */}
        <div className="pt-3 border-t border-[var(--color-border)]/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-semibold text-[var(--color-text)] font-sans">
              {formatPrice(product.price)}
            </span>
            <span className="block text-[9px] font-mono uppercase tracking-widest text-[var(--color-muted)]">
              Conceptual Price
            </span>
          </div>

          {/* Quick Available Sizes */}
          <div className="flex items-center gap-1 text-[10px] text-[var(--color-muted)] font-mono">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="w-5 h-5 rounded-md flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-border)] text-[9px] font-semibold text-[var(--color-text)]"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
