"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/lib/toast-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const isSaved = isInWishlist(product.id);

  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/concept-silhouette.svg";

  const imageAlt =
    product.images && product.images.length > 0
      ? product.images[0].alt
      : `${product.name} concept athleisure preview`;

  return (
    <article className="group flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
      {/* Product Image Frame */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-[var(--vybe-peach)]/20 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[var(--color-text)] border border-[var(--color-border)] shadow-xs">
            {product.category.replace("-", " ")}
          </span>
          {product.featured && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[var(--vybe-rose)] text-[var(--color-text)] shadow-xs">
              Curated
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
          className={`absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer ${
            isSaved
              ? "bg-[var(--vybe-rose)] text-white scale-105"
              : "bg-white/85 backdrop-blur-xs text-[var(--color-muted)] hover:text-[var(--vybe-mauve)] hover:bg-white"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Color Badge if available */}
        {product.colorName && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-xs text-white">
              {product.colorName}
            </span>
          </div>
        )}
      </Link>

      {/* Product Info Section */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] transition-colors mb-1.5">
            <Link href={`/product/${product.slug}`} className="focus-visible:outline-hidden">
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Size Row */}
        <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-semibold text-[var(--color-text)] font-sans">
              {formatPrice(product.price)}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
              Conceptual Price
            </span>
          </div>

          {/* Quick Sizes Preview */}
          <div className="flex items-center gap-1 text-[10px] text-[var(--color-muted)] font-mono">
            {product.sizes.slice(0, 3).map((size) => (
              <span
                key={size}
                className="w-5 h-5 rounded flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-border)]"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[10px] text-[var(--color-muted)]">
                +{product.sizes.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
