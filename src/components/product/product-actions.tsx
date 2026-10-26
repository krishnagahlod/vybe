"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { trackAddToCart } from "@/lib/analytics";

import { FitFinderModal } from "./fit-finder-modal";

type ProductActionsProps = {
  product: Product;
};

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeError, setSizeError] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isFitFinderOpen, setIsFitFinderOpen] = useState<boolean>(false);
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Monitor scroll to show mobile sticky bar when scrolled past primary button
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();
      // If the bottom of the form has scrolled above the viewport bottom - 80px
      setShowStickyBar(rect.bottom < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
    if (sizeError) setSizeError(false);
  };

  const handleAddToCart = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Size selection validation required
    if (!selectedSize) {
      setSizeError(true);
      return;
    }

    addItem(product.id, selectedSize, quantity);
    trackAddToCart(product, quantity, selectedSize);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 6000);
  };

  return (
    <div className="space-y-6">
      <form ref={formRef} onSubmit={handleAddToCart} className="space-y-6">
        {/* Size Selection */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] flex items-center gap-1.5">
                <span>Select Size</span>
                <span className="text-[var(--vybe-mauve)]">*</span>
              </label>
              {selectedSize && (
                <span className="text-xs font-medium text-[var(--vybe-mauve)]">
                  Selected: <strong className="text-[var(--color-text)]">{selectedSize}</strong>
                </span>
              )}
            </div>

            {/* Fit Finder Trigger */}
            <button
              type="button"
              onClick={() => setIsFitFinderOpen(true)}
              className="text-xs font-semibold text-[var(--vybe-mauve)] hover:text-[var(--color-text)] flex items-center gap-1.5 underline underline-offset-4 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[var(--vybe-rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Fit Finder</span>
            </button>
          </div>

          <div
            role="radiogroup"
            aria-label="Available sizes"
            className="flex flex-wrap gap-2.5"
          >
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelectSize(size)}
                  className={`w-12 h-11 rounded-xl text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] ${
                    isSelected
                      ? "bg-[var(--color-text)] text-white shadow-sm ring-2 ring-[var(--color-text)]"
                      : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--vybe-mauve)] hover:bg-[var(--vybe-peach)]/30"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {/* Inline Validation Error */}
          {sizeError && (
            <div
              role="alert"
              className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2 animate-fade-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-600 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Please select a size before adding to your bag.</span>
            </div>
          )}
        </div>

        {/* Quantity & Add to Cart Row */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[var(--color-border)] rounded-full bg-[var(--color-surface)] p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                &minus;
              </button>
              <span
                aria-live="polite"
                className="w-10 text-center font-mono text-sm font-semibold text-[var(--color-text)]"
              >
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                disabled={quantity >= 10}
                aria-label="Increase quantity"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                &#43;
              </button>
            </div>

            {/* Primary Add to Cart Button */}
            <button
              type="submit"
              className="flex-1 py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span>Add to Shopping Bag &bull; {formatPrice(product.price * quantity)}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Added to Bag Feedback Notification Card */}
      {isAdded && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 rounded-2xl bg-[var(--vybe-sage)]/35 border border-[var(--vybe-sage)] text-[var(--color-text)] space-y-3 animate-fade-in shadow-xs"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--vybe-mauve)] text-white flex items-center justify-center text-xs font-bold">
                &#10003;
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase">
                Added to your bag!
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--color-muted)]">
              Size {selectedSize} &times; {quantity}
            </span>
          </div>

          <p className="text-xs text-[var(--color-muted)]">
            {product.name} ({formatPrice(product.price * quantity)}) is ready in your shopping bag.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <Link
              href="/cart"
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors"
            >
              View Shopping Bag &rarr;
            </Link>
            <Link
              href="/shop"
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      )}

      {/* Sticky Mobile Add to Bag Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-md border-t border-[var(--color-border)] p-3 md:hidden shadow-xl animate-fade-in flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-[var(--color-text)] truncate">{product.name}</p>
            <p className="font-serif text-sm font-bold text-[var(--color-text)]">{formatPrice(product.price)}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={selectedSize}
              onChange={(e) => handleSelectSize(e.target.value)}
              aria-label="Select size"
              className="h-10 px-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-semibold text-[var(--color-text)]"
            >
              <option value="">Size</option>
              {product.sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleAddToCart()}
              className="h-10 px-4 rounded-xl bg-[var(--color-text)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--vybe-mauve)] transition-colors shadow-xs"
            >
              Add to Bag
            </button>
          </div>
        </div>
      )}

      {/* Sizing Recommender Modal */}
      <FitFinderModal
        isOpen={isFitFinderOpen}
        onClose={() => setIsFitFinderOpen(false)}
        onSelectSize={handleSelectSize}
        category={product.category}
        availableSizes={product.sizes}
      />
    </div>
  );
}
