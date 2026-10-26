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

export function CartItemRow({
  item,
  product,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const lineTotal = product.price * item.quantity;
  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/concept-silhouette.svg";

  return (
    <article className="p-4 sm:p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors">
      {/* Product Image & Title */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Link
          href={`/product/${product.slug}`}
          className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-md overflow-hidden bg-[var(--vybe-peach)]/25 border border-[var(--color-border)] shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="96px"
            className="object-cover object-center"
          />
        </Link>

        <div className="flex-1 min-w-0 space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--vybe-mauve-ink)] block">
            {product.category.replace("-", " ")}
          </span>
          <h3 className="font-serif text-base sm:text-lg font-medium text-[var(--color-text)] truncate">
            <Link
              href={`/product/${product.slug}`}
              className="hover:text-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-hidden"
            >
              {product.name}
            </Link>
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="px-2 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)] font-semibold text-[var(--color-text)]">
              Size: {item.size}
            </span>
            {product.colorName && (
              <span>Color: {product.colorName}</span>
            )}
          </div>
          <p className="text-xs text-[var(--color-muted)] font-mono sm:hidden pt-1">
            {formatPrice(product.price)} each
          </p>
        </div>
      </div>

      {/* Controls & Price Block */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[var(--color-border)]/60">
        {/* Quantity Controls */}
        <div className="flex items-center border border-[var(--color-border)] rounded-sm bg-[var(--color-bg)] p-1">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity - 1)}
            aria-label={`Decrease quantity for ${product.name}`}
            className="w-7 h-7 rounded-sm flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors"
          >
            &minus;
          </button>
          <span
            aria-live="polite"
            className="w-8 text-center font-mono text-xs font-semibold text-[var(--color-text)]"
          >
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity + 1)}
            disabled={item.quantity >= 10}
            aria-label={`Increase quantity for ${product.name}`}
            className="w-7 h-7 rounded-sm flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            &#43;
          </button>
        </div>

        {/* Line Total */}
        <div className="text-right min-w-[5rem]">
          <span className="block font-semibold text-base text-[var(--color-text)] font-sans">
            {formatPrice(lineTotal)}
          </span>
          <span className="hidden sm:block text-[11px] text-[var(--color-muted)] font-mono">
            {formatPrice(product.price)} &times; {item.quantity}
          </span>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => onRemove(item.productId, item.size)}
          aria-label={`Remove ${product.name} (size ${item.size}) from bag`}
          className="p-2 text-[var(--color-muted)] hover:text-red-600 transition-colors rounded-sm hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-500"
          title="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
