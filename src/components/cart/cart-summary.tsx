"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

type CartSummaryProps = {
  subtotal: number;
  totalItems: number;
  onClearCart?: () => void;
};

export function CartSummary({
  subtotal,
  totalItems,
  onClearCart,
}: CartSummaryProps) {
  return (
    <div className="p-6 sm:p-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md space-y-6">
      <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-text)]">
        Order Summary
      </h2>

      {/* Totals Breakdown */}
      <div className="space-y-3.5 text-sm border-b border-[var(--color-border)] pb-6">
        <div className="flex items-center justify-between text-[var(--color-muted)]">
          <span>Items Subtotal ({totalItems} {totalItems === 1 ? "unit" : "units"})</span>
          <span className="font-semibold text-[var(--color-text)] font-sans">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-[var(--color-muted)]">
          <div>
            <span>Estimated Shipping</span>
            <span className="block text-[11px] text-[var(--vybe-mauve-ink)]">
              Mumbai, Pune, Delhi, Bangalore
            </span>
          </div>
          <span className="font-semibold text-[var(--vybe-sage-ink)] bg-[var(--vybe-sage)]/60 px-2 py-0.5 rounded text-xs">
            Free (Test)
          </span>
        </div>

        <div className="flex items-center justify-between text-[var(--color-muted)]">
          <span>Estimated Taxes</span>
          <span className="text-xs font-mono">₹0 (Conceptual)</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-base font-semibold text-[var(--color-text)] block">
            Estimated Total
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-mono">
            Conceptual INR Amount
          </span>
        </div>
        <span className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
          {formatPrice(subtotal)}
        </span>
      </div>

      {/* Demo Notice Callout */}
      <div className="p-3.5 rounded-md bg-[var(--vybe-peach)]/35 border border-[var(--color-border)] text-xs text-[var(--color-muted)] leading-relaxed">
        <p className="font-semibold text-[var(--color-text)] mb-0.5">
          Academic Prototype Notice
        </p>
        <p>
          No payment gateway or card fields exist. Proceeding to checkout will simulate order verification safely.
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <Link
          href="/checkout"
          className="block w-full text-center py-4 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Proceed to Demo Checkout &rarr;
        </Link>
        <Link
          href="/shop"
          className="block w-full text-center py-3.5 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Clear Bag Option */}
      {onClearCart && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onClearCart}
            className="text-xs text-[var(--color-muted)] hover:text-red-600 underline underline-offset-4 transition-colors"
          >
            Clear Entire Shopping Bag
          </button>
        </div>
      )}
    </div>
  );
}
