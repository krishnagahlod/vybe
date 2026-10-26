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
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-[var(--color-bg)] shadow-2xl flex flex-col border-l border-[var(--color-border)]"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]/60">
                <div className="flex items-center gap-2">
                  <h2 id="slide-over-title" className="font-serif text-lg md:text-xl font-semibold text-[var(--color-text)]">
                    Your Shopping Bag
                  </h2>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--vybe-peach)] text-[var(--vybe-mauve-ink)]">
                    {totalCount} {totalCount === 1 ? "item" : "items"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeCartDrawer}
                  aria-label="Close bag drawer"
                  className="p-2 -mr-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-5 py-3.5 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-[var(--color-text)]">
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="text-[var(--vybe-sage-ink)] font-semibold flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Unlocked: Complimentary Express Delivery
                      </span>
                    ) : (
                      <span>
                        Add <strong className="text-[var(--vybe-mauve-ink)]">{formatPrice(amountRemaining)}</strong> for Complimentary Delivery
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)]">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-linear-to-r from-[var(--vybe-rose)] to-[var(--vybe-mauve-ink)] rounded-full"
                  />
                </div>
              </div>

              {/* Items List / Scrollable Container */}
              <div className="flex-1 overflow-y-auto p-5 divide-y divide-[var(--color-border)]">
                {enrichedItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[var(--vybe-peach)]/50 flex items-center justify-center text-[var(--vybe-mauve-ink)] mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="font-serif text-lg font-medium text-[var(--color-text)] mb-1">Your bag is empty</p>
                    <p className="text-xs text-[var(--color-muted)] max-w-xs mb-6">
                      Explore our 12 conceptual studio pieces tailored for mindful movement.
                    </p>
                    <button
                      type="button"
                      onClick={closeCartDrawer}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors shadow-xs"
                    >
                      <Link href="/shop" onClick={closeCartDrawer}>
                        Browse Collection
                      </Link>
                    </button>
                  </div>
                ) : (
                  enrichedItems.map((item) => {
                    const product = item.product;
                    const imageSrc =
                      product?.images && product.images.length > 0
                        ? product.images[0].src
                        : "/images/products/concept-silhouette.svg";

                    return (
                      <div key={`${item.productId}-${item.size}`} className="py-4 flex gap-4 items-start">
                        {/* Thumbnail */}
                        <div className="relative w-18 h-22 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden shrink-0">
                          <Image
                            src={imageSrc}
                            alt={product?.name ?? "VYBE product"}
                            fill
                            className="object-cover p-1"
                            sizes="72px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-xs md:text-sm font-medium text-[var(--color-text)] truncate">
                                {product?.name ?? "Concept Item"}
                              </h3>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)]">
                                  Size: {item.size}
                                </span>
                                {product?.colorName && (
                                  <span className="text-[11px] text-[var(--color-muted)]">
                                    {product.colorName}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[var(--color-text)] shrink-0">
                              {formatPrice(item.itemTotal)}
                            </span>
                          </div>

                          {/* Stepper & Remove */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] overflow-hidden">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                                aria-label="Decrease quantity"
                                className="w-7 h-7 flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors"
                              >
                                −
                              </button>
                              <span className="w-8 text-center text-xs font-semibold text-[var(--color-text)]">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                                aria-label="Increase quantity"
                                className="w-7 h-7 flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors"
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.productId, item.size)}
                              aria-label={`Remove ${product?.name ?? "item"} from bag`}
                              className="text-[11px] text-[var(--color-muted)] hover:text-red-600 transition-colors flex items-center gap-1"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
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
                <div className="p-5 border-t border-[var(--color-border)] bg-[var(--color-surface)]/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted)]">
                      Subtotal
                    </span>
                    <span className="font-serif text-lg font-bold text-[var(--color-text)]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <p className="text-[11px] text-[var(--color-muted)] text-center">
                    Taxes calculated at checkout • ENT 625 Demo Simulation
                  </p>

                  <div className="space-y-2 pt-1">
                    <Link
                      href="/checkout"
                      onClick={closeCartDrawer}
                      className="w-full flex items-center justify-center py-3.5 px-6 rounded-full text-xs font-bold tracking-wider uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
                    >
                      Proceed to Demo Checkout
                    </Link>

                    <Link
                      href="/cart"
                      onClick={closeCartDrawer}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-full text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/30 transition-colors"
                    >
                      View Full Bag Details →
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
