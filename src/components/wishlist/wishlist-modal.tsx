"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/lib/wishlist-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function WishlistModal() {
  const { wishlistIds, isWishlistModalOpen, closeWishlistModal, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (!isWishlistModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWishlistModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWishlistModalOpen, closeWishlistModal]);

  const savedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wishlist-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlistModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-[var(--color-bg)] rounded-3xl shadow-2xl border border-[var(--color-border)] overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--color-border)] bg-[var(--color-surface)]/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--vybe-pink)]/40 flex items-center justify-center text-[var(--vybe-mauve)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h2 id="wishlist-modal-title" className="font-serif text-xl font-semibold text-[var(--color-text)]">
                    Saved Movement Styles
                  </h2>
                  <p className="text-xs text-[var(--color-muted)]">
                    {savedProducts.length} {savedProducts.length === 1 ? "style" : "styles"} saved in this session
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeWishlistModal}
                aria-label="Close saved items modal"
                className="p-2 -mr-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1 divide-y divide-[var(--color-border)]">
              {savedProducts.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[var(--vybe-peach)]/50 mx-auto flex items-center justify-center text-[var(--vybe-mauve)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[var(--color-text)]">No saved styles yet</h3>
                  <p className="text-xs text-[var(--color-muted)] max-w-sm mx-auto">
                    Tap the heart icon on any piece to save your favorite concepts while exploring the collection.
                  </p>
                  <button
                    type="button"
                    onClick={closeWishlistModal}
                    className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors shadow-xs"
                  >
                    <Link href="/shop" onClick={closeWishlistModal}>
                      Explore Collection
                    </Link>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {savedProducts.map((p) => {
                    const imageSrc =
                      p.images && p.images.length > 0
                        ? p.images[0].src
                        : "/images/products/concept-silhouette.svg";

                    return (
                      <div
                        key={p.id}
                        className="p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex gap-3.5 items-center justify-between"
                      >
                        <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] shrink-0">
                          <Image src={imageSrc} alt={p.name} fill className="object-cover" sizes="64px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-medium text-[var(--color-text)] truncate">{p.name}</h4>
                          <p className="text-xs font-bold text-[var(--color-text)] mt-0.5">{formatPrice(p.price)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Link
                              href={`/product/${p.slug}`}
                              onClick={closeWishlistModal}
                              className="text-[11px] font-semibold text-[var(--vybe-mauve)] hover:underline"
                            >
                              View Style &rarr;
                            </Link>
                            <span className="text-[var(--color-border)]">•</span>
                            <button
                              type="button"
                              onClick={() => toggleWishlist(p.id)}
                              className="text-[11px] text-[var(--color-muted)] hover:text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {savedProducts.length > 0 && (
              <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]/70 flex items-center justify-between text-xs">
                <span className="text-[var(--color-muted)]">Saved locally in your browser session</span>
                <Link
                  href="/shop"
                  onClick={closeWishlistModal}
                  className="font-semibold text-[var(--color-text)] hover:text-[var(--vybe-mauve)]"
                >
                  Continue Shopping &rarr;
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
