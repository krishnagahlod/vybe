"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/pricing";
import { SideDrawer } from "@/components/ui/side-drawer";
import { ProductCard } from "@/components/product/product-card";

const primaryButton =
  "flex items-center justify-center h-12 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]";

export function CartDrawer() {
  const { items, totalCount, isCartDrawerOpen, closeCartDrawer, updateQuantity, removeItem } = useCart();

  const enrichedItems = items.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    return { ...cartItem, product, itemTotal: (product?.price ?? 0) * cartItem.quantity };
  });

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.itemTotal, 0);
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
  const amountRemaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const isEmpty = enrichedItems.length === 0;

  const inBag = new Set(items.map((i) => i.productId));
  const suggestions = products.filter((p) => p.featured && !inBag.has(p.id)).slice(0, 4);

  const deliveryNote = !isEmpty && (
    <div className="px-5 sm:px-6 py-4 bg-[var(--vybe-peach)]/40 space-y-2.5">
      <p className="text-sm text-[var(--color-text)]">
        {subtotal >= FREE_DELIVERY_THRESHOLD ? (
          <>You&apos;ve unlocked complimentary delivery.</>
        ) : (
          <>
            You&apos;re <strong className="font-semibold">{formatPrice(amountRemaining)}</strong> away from
            complimentary delivery.
          </>
        )}
      </p>
      <div className="w-full h-1 bg-[var(--color-text)]/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4 }}
          className="h-full bg-[var(--vybe-mauve-ink)] rounded-full"
        />
      </div>
    </div>
  );

  const summary = (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text)]">Subtotal</span>
        <span className="text-lg text-[var(--color-text)]">{formatPrice(subtotal)}</span>
      </div>
      <p className="text-xs text-[var(--color-muted)]">Prices include GST. Delivery is calculated at checkout.</p>
      <Link href="/checkout" onClick={closeCartDrawer} className={`${primaryButton} w-full`}>
        Checkout &middot; {formatPrice(subtotal)}
      </Link>
      <Link
        href="/cart"
        onClick={closeCartDrawer}
        className="block text-center text-xs text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-text)] transition-colors"
      >
        View full bag
      </Link>
    </div>
  );

  const itemList = (
    <ul className="divide-y divide-[var(--color-border)]">
      {enrichedItems.map((item) => {
        const product = item.product;
        const imageSrc = product?.images[0]?.src ?? "/images/products/concept-silhouette.svg";
        return (
          <li key={`${item.productId}-${item.size}`} className="py-5 flex gap-4 items-stretch">
            <Link
              href={product ? `/product/${product.slug}` : "/shop"}
              onClick={closeCartDrawer}
              className="relative w-20 sm:w-24 aspect-[3/4] rounded-sm bg-[var(--vybe-peach)]/40 overflow-hidden shrink-0"
            >
              <Image src={imageSrc} alt={product?.name ?? "VYBE product"} fill className="object-cover" sizes="96px" />
            </Link>

            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug text-[var(--color-text)] truncate">
                    {product?.name ?? "VYBE piece"}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    Size {item.size}
                    {product?.colorName && <> &middot; {product.colorName}</>}
                  </p>
                </div>
                <span className="text-sm text-[var(--color-text)] shrink-0">{formatPrice(item.itemTotal)}</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center h-8 border border-[var(--color-border)] rounded-sm">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                    aria-label="Decrease quantity"
                    className="w-8 h-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors cursor-pointer"
                  >
                    &minus;
                  </button>
                  <span className="w-7 text-center text-xs font-semibold text-[var(--color-text)]" aria-live="polite">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                    aria-label="Increase quantity"
                    className="w-8 h-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.productId, item.size)}
                  aria-label={`Remove ${product?.name ?? "item"} from bag`}
                  className="text-xs text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--vybe-rose-ink)] transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const emptyState = (
    <div className="h-full flex flex-col items-center justify-center text-center px-6 py-16 space-y-4">
      <p className="font-headline text-3xl text-[var(--color-text)] font-semibold">
        Your bag is empty.
      </p>
      <p className="text-sm text-[var(--color-muted)] max-w-xs">Start with our founder&apos;s favourites and build from there.</p>
      <Link href="/shop?category=favourites" onClick={closeCartDrawer} className={`${primaryButton} px-8 mt-2`}>
        Shop founder&apos;s favourites
      </Link>
    </div>
  );

  return (
    <SideDrawer
      isOpen={isCartDrawerOpen}
      onClose={closeCartDrawer}
      titleId="cart-drawer-title"
      allowMaximise
      title={
        <>
          Your bag <span className="text-base text-[var(--color-muted)]">({totalCount})</span>
        </>
      }
      footer={({ maximised }) =>
        !isEmpty && !maximised ? (
          <div className="px-5 sm:px-6 py-5 border-t border-[var(--color-border)]">{summary}</div>
        ) : null
      }
    >
      {({ maximised }) =>
        isEmpty ? (
          emptyState
        ) : maximised ? (
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
              <div className="border-t border-[var(--color-border)]">{itemList}</div>
              <div className="lg:sticky lg:top-6 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                {deliveryNote}
                <div className="p-6">{summary}</div>
              </div>
            </div>
            {suggestions.length > 0 && (
              <section className="space-y-6">
                <h3 className="font-headline text-3xl text-[var(--color-text)] font-semibold">You might also like</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
                  {suggestions.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <>
            {deliveryNote}
            <div className="px-5 sm:px-6">{itemList}</div>
          </>
        )
      }
    </SideDrawer>
  );
}
