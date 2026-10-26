"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/data/products";
import { CartItemRow } from "@/components/cart/cart-item-row";
import { CartSummary } from "@/components/cart/cart-summary";
import { CartEmptyState } from "@/components/cart/cart-empty-state";

export default function CartPage() {
  const { items, totalCount, updateQuantity, removeItem, clearCart, isLoaded } = useCart();

  // Resolve items against the central product catalog to guarantee trusted price data
  const resolvedItems = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          item,
          product,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((entry): entry is { item: typeof items[0]; product: NonNullable<ReturnType<typeof getProductById>>; lineTotal: number } => entry !== null);
  }, [items]);

  // Dynamically calculate the accurate subtotal
  const subtotal = useMemo(() => {
    return resolvedItems.reduce((acc, curr) => acc + curr.lineTotal, 0);
  }, [resolvedItems]);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[var(--color-muted)]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li>
              <Link href="/shop" className="hover:text-[var(--color-text)] transition-colors">
                Shop Collection
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li className="text-[var(--color-text)] font-semibold" aria-current="page">
              Shopping Bag
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] block mb-1 font-mono">
              Review Selection
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
              Shopping Bag
            </h1>
          </div>
          {isLoaded && resolvedItems.length > 0 && (
            <p className="text-xs sm:text-sm text-[var(--color-muted)]">
              You have <span className="font-semibold text-[var(--color-text)]">{totalCount}</span> {totalCount === 1 ? "piece" : "pieces"} in your bag
            </p>
          )}
        </div>

        {/* Academic Prototype Notice */}
        <div className="mb-8 p-4 rounded-md bg-[var(--vybe-peach)]/30 border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            <strong className="text-[var(--color-text)] uppercase font-semibold mr-1.5">
              Simulated Demo Bag:
            </strong>
            Items in this bag are for testing our academic storefront prototype. No actual payment, card collection, or fulfillment will take place.
          </p>
          <span className="shrink-0 font-mono text-[11px] text-[var(--vybe-mauve-ink)] font-medium">
            Saved to Local Storage
          </span>
        </div>

        {/* Main Cart Body */}
        {resolvedItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Item List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[var(--color-muted)] pb-2 border-b border-[var(--color-border)]">
                <span>Selected Activewear ({resolvedItems.length} styles)</span>
                <span>Subtotal ({totalCount} items)</span>
              </div>

              {resolvedItems.map(({ item, product }) => (
                <CartItemRow
                  key={`${item.productId}-${item.size}`}
                  item={item}
                  product={product}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/shop"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors underline underline-offset-4 flex items-center gap-1.5"
                >
                  <span>&larr;</span>
                  <span>Continue Browsing Collection</span>
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-[var(--color-muted)] hover:text-red-600 transition-colors underline underline-offset-4"
                >
                  Empty Bag
                </button>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 sticky top-28">
              <CartSummary
                subtotal={subtotal}
                totalItems={totalCount}
                onClearCart={clearCart}
              />
            </div>
          </div>
        ) : (
          <CartEmptyState />
        )}
      </div>
    </div>
  );
}
