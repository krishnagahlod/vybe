"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";
import { formatPrice } from "@/lib/format";

type CartItemRowProps = {
  item: CartItem;
  product: Product;
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemove: (productId: string, size: string) => void;
};

export function CartItemRow({ item, product, onUpdateQuantity, onRemove }: CartItemRowProps) {
  const lineTotal = product.price * item.quantity;
  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/concept-silhouette.svg";

  return (
    <article className="py-6 flex gap-5 sm:gap-6 border-b border-[var(--color-border)]">
      <Link
        href={`/product/${product.slug}`}
        className="relative w-24 sm:w-32 aspect-[3/4] rounded-sm overflow-hidden bg-[var(--vybe-peach)]/40 shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
      >
        <Image src={imageSrc} alt={product.name} fill sizes="128px" className="object-cover object-center" />
      </Link>

      <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] leading-snug">
              <Link
                href={`/product/${product.slug}`}
                className="hover:text-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-hidden"
              >
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              Size {item.size}
              {product.colorName && <> &middot; {product.colorName}</>}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-[var(--color-muted)]">{formatPrice(product.price)} each</p>
            )}
          </div>
          <span className="text-base text-[var(--color-text)] shrink-0">{formatPrice(lineTotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center h-10 border border-[var(--color-border)] rounded-sm">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity - 1)}
              aria-label={`Decrease quantity for ${product.name}`}
              className="w-10 h-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors cursor-pointer"
            >
              &minus;
            </button>
            <span aria-live="polite" className="w-8 text-center text-sm text-[var(--color-text)]">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity + 1)}
              disabled={item.quantity >= 10}
              aria-label={`Increase quantity for ${product.name}`}
              className="w-10 h-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.productId, item.size)}
            aria-label={`Remove ${product.name} (size ${item.size}) from bag`}
            className="text-xs text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--vybe-rose-ink)] transition-colors cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
