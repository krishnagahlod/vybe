"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

const FREE_SHIPPING_THRESHOLD = 1500;

export function CartDrawer() {
  const {
    items,
    totalCount,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeItem,
  } = useCart();

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isCartDrawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCartDrawer();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartDrawerOpen, closeCartDrawer]);

  // Compute enriched items and subtotal
  const enrichedItems = items.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    return {
      ...cartItem,
      product,
      itemTotal: (product?.price ?? 0) * cartItem.quantity,
    };
  });

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.itemTotal, 0);
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCartDrawer}
            className="fixed inset-0 bg-[var(--color-text)]/30 transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-[var(--color-bg)] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="px-6 h-[4.5rem] border-b border-[var(--color-border)] flex items-center justify-between">
                <h2 id="slide-over-title" className="font-serif text-2xl text-[var(--color-text)]">
                  Your bag <span className="text-base text-[var(--color-muted)]">({totalCount})</span>
                </h2>
                <button
                  type="button"
                  onClick={closeCartDrawer}
                  aria-label="Close bag"
                  className="w-10 h-10 -mr-2 inline-flex items-center justify-center rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Free delivery progress */}
              {enrichedItems.length > 0 && (
                <div className="px-6 py-4 bg-[var(--vybe-peach)]/40 space-y-2.5">
                  <p className="text-sm text-[var(--color-text)]">
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? (
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
              )}

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 divide-y divide-[var(--color-border)]">
                {enrichedItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <p className="font-serif text-3xl text-[var(--color-text)]">
                      Your bag is <span className="italic">empty.</span>
                    </p>
                    <p className="text-sm text-[var(--color-muted)] max-w-xs">
                      Start with our studio essentials and build from there.
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCartDrawer}
                      className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
                    >
                      Shop the collection
                    </Link>
                  </div>
                ) : (
                  enrichedItems.map((item) => {
                    const product = item.product;
                    const imageSrc =
                      product?.images && product.images.length > 0
                        ? product.images[0].src
                        : "/images/products/concept-silhouette.svg";

                    return (
                      <div key={`${item.productId}-${item.size}`} className="py-5 flex gap-4 items-stretch">
                        <div className="relative w-20 aspect-[3/4] rounded-sm bg-[var(--vybe-peach)]/40 overflow-hidden shrink-0">
                          <Image src={imageSrc} alt={product?.name ?? "VYBE product"} fill className="object-cover" sizes="80px" />
                        </div>

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
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer */}
              {enrichedItems.length > 0 && (
                <div className="px-6 py-5 border-t border-[var(--color-border)] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text)]">Subtotal</span>
                    <span className="text-lg text-[var(--color-text)]">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)]">Taxes and delivery calculated at checkout.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/cart"
                      onClick={closeCartDrawer}
                      className="flex items-center justify-center h-12 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
                    >
                      View bag
                    </Link>
                    <Link
                      href="/checkout"
                      onClick={closeCartDrawer}
                      className="flex items-center justify-center h-12 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
