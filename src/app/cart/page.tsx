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
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pb-6 border-b border-[var(--color-border)]">
          <h1 className="font-headline text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)]">Your bag</h1>
          {isLoaded && resolvedItems.length > 0 && (
            <p className="text-sm text-[var(--color-muted)]">
              {totalCount} {totalCount === 1 ? "piece" : "pieces"}
            </p>
          )}
        </div>

        {/* Main Cart Body */}
        {resolvedItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Item List */}
            <div className="lg:col-span-8 border-t border-[var(--color-border)]">
              {resolvedItems.map(({ item, product }) => (
                <CartItemRow
                  key={`${item.productId}-${item.size}`}
                  item={item}
                  product={product}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}

              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/shop"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors underline underline-offset-4 flex items-center gap-1.5"
                >
                  <span>&larr;</span>
                  <span>Keep shopping</span>
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--vybe-rose-ink)] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Empty bag
                </button>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 sticky top-28">
              <CartSummary
                subtotal={subtotal}
                totalItems={totalCount}
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
