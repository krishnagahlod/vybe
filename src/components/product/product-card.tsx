"use client";

import React, { useState, ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/lib/toast-context";
import { trackAddToCart } from "@/lib/analytics";
import { sizeWithLength } from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const isSaved = isInWishlist(product.id);
  const [justAddedSize, setJustAddedSize] = useState<string | null>(null);
  const [variant, setVariant] = useState(0);

  const image = product.images[product.variants?.[variant]?.image ?? 0];
  const imageSrc = image?.src ?? "/images/products/flow-high-rise-leggings-sage-1.jpg";
  const imageAlt = image?.alt ?? `${product.name} activewear preview`;
  const badge = product.badge ?? (product.isNew ? "New" : product.featured ? "Bestseller" : undefined);

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Pieces with leg lengths are quick-added in Regular; other lengths are chosen on the product page
    const line = sizeWithLength(size, product.lengths ? "Regular" : undefined);
    addItem(product.id, line, 1);
    setJustAddedSize(size);
    setTimeout(() => setJustAddedSize(null), 1500);

    // Track analytics using canonical trackAddToCart
    trackAddToCart(product, 1, line);

    showToast(`Added ${product.name} (${line}) to Bag`, "success");
  };

  return (
    <article className="group relative flex flex-col h-full">
      {/* Product Image Frame */}
      <div className="relative block aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[var(--vybe-petal)]/40">
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 z-0 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
          aria-label={`View details for ${product.name}`}
        >
          {/* Shares a name with the product page's first photo, so it morphs into place on navigation */}
          <ViewTransition name={`product-${product.slug}`} share="morph" default="none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </ViewTransition>
          {/* Second angle fades in on hover (pointer devices only) */}
          {!product.variants && product.images?.[1] && (
            <Image
              src={product.images[1].src}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </Link>

        {badge && (
          <span className="absolute top-3 left-3 z-10 pointer-events-none -rotate-3 px-3 py-1 rounded-full bg-[var(--vybe-pastel-pink)] text-[var(--vybe-ink)] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] shadow-sm">
            {badge}
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
          className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
            isSaved
              ? "bg-[var(--color-bg)] text-[var(--vybe-cherry-ink)]"
              : "bg-[var(--color-bg)]/80 backdrop-blur-md text-[var(--color-muted)] hover:text-[var(--vybe-cherry-ink)]"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Quick-add sizes: revealed on hover (pointer devices) or keyboard focus. Hidden bars ignore taps,
            so touch users can't add an item by accident when tapping the image. */}
        <div className="absolute bottom-3 right-3 left-3 z-20 opacity-0 translate-y-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
          <div className="p-2 rounded-2xl bg-[var(--color-bg)]/95 backdrop-blur-md flex flex-col gap-1.5">
            <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Quick add{product.lengths && ", regular length"}
            </span>
            <div className="grid grid-cols-5 gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={(e) => handleQuickAdd(size, e)}
                  aria-label={`Quick add size ${size} to bag`}
                  className={`py-1.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                    justAddedSize === size
                      ? "bg-[var(--vybe-ink-soft)] text-white"
                      : "hover:bg-[var(--color-text)] hover:text-white text-[var(--color-text)] border border-[var(--color-border)]"
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
      <div className="flex flex-col flex-1 pt-3 gap-1">
        <h3 className="text-sm sm:text-[15px] font-medium text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors leading-snug">
          <Link href={`/product/${product.slug}`} className="focus-visible:outline-hidden">
            {product.name}
          </Link>
        </h3>
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <span className="text-sm text-[var(--color-text)]">{formatPrice(product.price)}</span>
        </div>
        {product.variants && (
          <div className="flex items-center gap-2 pt-1" role="group" aria-label={`${product.name} colours and prints`}>
            {product.variants.map((v, i) => (
              <button
                key={v.name}
                type="button"
                onClick={() => setVariant(i)}
                aria-label={v.name}
                aria-pressed={i === variant}
                title={v.name}
                className={`w-5 h-5 rounded-full border border-black/10 bg-cover bg-center cursor-pointer ${i === variant ? "ring-2 ring-offset-2 ring-[var(--vybe-ink)]" : ""}`}
                style={{ background: v.swatch.startsWith("/") ? `url(${v.swatch}) center / cover` : v.swatch }}
              />
            ))}
          </div>
        )}
        {product.lengths && <p className="text-xs text-[var(--vybe-ink-soft)]">Available in {product.lengths.length} leg lengths</p>}
      </div>
    </article>
  );
}
