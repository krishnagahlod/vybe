"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/lib/toast-context";
import { trackAddToCart } from "@/lib/analytics";

type ProductCardProps = {
  product: Product;
};

// Map colorway names to CSS colors for swatch preview
const COLOR_SWATCH_MAP: Record<string, string> = {
  "Sage": "#d8e2dc",
  "Muted Mauve": "#9d8189",
  "Pale Peach": "#ffe5d9",
  "Rose": "#f4acb7",
  "Soft Pink": "#ffcad4",
  "Sage / Rose": "linear-gradient(135deg, #d8e2dc 50%, #f4acb7 50%)",
};

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const isSaved = isInWishlist(product.id);
  const [justAddedSize, setJustAddedSize] = useState<string | null>(null);

  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/flow-high-rise-leggings-1.jpg";

  const imageAlt =
    product.images && product.images.length > 0
      ? product.images[0].alt
      : `${product.name} luxury activewear preview`;

  const swatchColor = product.colorName ? COLOR_SWATCH_MAP[product.colorName] || "#9d8189" : "#9d8189";

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem(product.id, size, 1);
    setJustAddedSize(size);
    setTimeout(() => setJustAddedSize(null), 1500);

    // Track analytics using canonical trackAddToCart
    trackAddToCart(product, 1, size);

    showToast(`Added ${product.name} (${size}) to Bag`, "success");
  };

  return (
    <article className="group flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgba(20,18,17,0.08)] hover:-translate-y-1 relative">
      {/* Product Image Frame */}
      <div className="relative block aspect-[3/4] w-full overflow-hidden bg-[var(--vybe-peach)]/40">
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 z-0 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>

        {product.featured && (
          <span className="absolute top-3.5 left-3.5 z-10 pointer-events-none px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[var(--vybe-peach)] text-[var(--color-text)]">
            Studio Edit
          </span>
        )}

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
          className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer ${
            isSaved
              ? "bg-[var(--vybe-rose)] text-[var(--color-text)] scale-105"
              : "bg-white/90 backdrop-blur-md text-[var(--color-muted)] hover:text-[var(--vybe-mauve-ink)] hover:bg-white"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Quick-add sizes: revealed on hover (pointer devices) or keyboard focus. Hidden bars ignore taps,
            so touch users can't add an item by accident when tapping the image. */}
        <div className="absolute bottom-3 right-3 left-3 z-20 opacity-0 translate-y-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
          <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex flex-col gap-1.5">
            <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Quick add
            </span>
            <div className="flex items-center gap-1 justify-between">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={(e) => handleQuickAdd(size, e)}
                  aria-label={`Quick add size ${size} to bag`}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                    justAddedSize === size
                      ? "bg-[var(--vybe-sage-ink)] text-white scale-105"
                      : "bg-[var(--color-bg)] hover:bg-[var(--color-text)] hover:text-white text-[var(--color-text)] border border-[var(--color-border)]"
                  }`}
                >
                  {justAddedSize === size ? "✓" : size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="font-serif text-lg font-normal tracking-tight text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors leading-snug">
          <Link href={`/product/${product.slug}`} className="focus-visible:outline-hidden">
            {product.name}
          </Link>
        </h3>
        <p className="flex-1 text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
        <div className="pt-3 flex items-center justify-between gap-2">
          <span className="text-base font-medium text-[var(--color-text)]">{formatPrice(product.price)}</span>
          {product.colorName && (
            <span className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <span
                className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                style={{ background: swatchColor }}
              />
              {product.colorName}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
