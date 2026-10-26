"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

const FREE_DELIVERY_THRESHOLD = 1500;

type CartSummaryProps = {
  subtotal: number;
  totalItems: number;
};

export function CartSummary({ subtotal, totalItems }: CartSummaryProps) {
  const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

  return (
    <div className="p-6 sm:p-8 rounded-md bg-[var(--vybe-peach)]/40 space-y-6">
      <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-text)]">Summary</h2>

      <dl className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-[var(--color-muted)]">
            Subtotal ({totalItems} {totalItems === 1 ? "piece" : "pieces"})
          </dt>
          <dd className="text-[var(--color-text)]">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-[var(--color-muted)]">Delivery</dt>
          <dd className="text-[var(--color-text)]">{freeDelivery ? "Complimentary" : "Calculated at checkout"}</dd>
        </div>
        {!freeDelivery && (
          <p className="text-xs text-[var(--vybe-mauve-ink)]">
            Add {formatPrice(FREE_DELIVERY_THRESHOLD - subtotal)} more for complimentary delivery.
          </p>
        )}
      </dl>

      <div className="flex items-baseline justify-between pt-5 border-t border-[var(--color-text)]/10">
        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text)]">Total</span>
        <span className="text-2xl text-[var(--color-text)]">{formatPrice(subtotal)}</span>
      </div>
      <p className="-mt-3 text-xs text-[var(--color-muted)]">Prices include GST.</p>

      <div className="space-y-3">
        <Link
          href="/checkout"
          className="flex items-center justify-center w-full h-12 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Checkout
        </Link>
        <Link
          href="/shop"
          className="flex items-center justify-center w-full h-12 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Keep shopping
        </Link>
      </div>
    </div>
  );
}
