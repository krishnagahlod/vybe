"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

export type DemoOrderData = {
  orderId: string;
  customerName: string;
  email: string;
  city: string;
  items: { item: CartItem; product: Product; lineTotal: number }[];
  subtotal: number;
  date: string;
};

type CheckoutConfirmationProps = {
  order: DemoOrderData;
};

export function CheckoutConfirmation({ order }: CheckoutConfirmationProps) {
  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Success Hero Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--vybe-peach)]/30 via-white to-[var(--vybe-sage)]/25 border border-[var(--color-border)] shadow-lg text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--vybe-sage)] border border-[var(--vybe-sage)] flex items-center justify-center text-[var(--color-text)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--vybe-rose)] text-[var(--color-text)]">
          Demo Flow Complete
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
          Simulated Order Confirmed
        </h1>

        <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
          Thank you, <strong className="text-[var(--color-text)]">{order.customerName}</strong>. Your test order reference is{" "}
          <span className="font-mono font-semibold text-[var(--color-text)] bg-white px-2 py-0.5 rounded border border-[var(--color-border)]">
            {order.orderId}
          </span>.
        </p>
      </div>

      {/* Critical Academic & Demo Disclosure Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[var(--vybe-peach)]/40 border border-[var(--vybe-rose)]/50 text-xs text-[var(--color-text)] leading-relaxed space-y-2">
        <p className="font-semibold uppercase tracking-wider flex items-center gap-2 text-[var(--color-text)]">
          <span className="w-2 h-2 rounded-full bg-[var(--vybe-mauve)]" />
          Important Academic Evaluation Notice (ENT 625)
        </p>
        <p>
          This was an entirely simulated checkout flow. <strong>No real financial charge was made</strong>, no payment-card data was transmitted, and <strong>no physical activewear will be shipped</strong>.
        </p>
        <p className="text-[var(--color-muted)]">
          Simulated destination: <strong>{order.city}</strong> &bull; Notification simulated to: <strong>{order.email}</strong> &bull; Completed: {order.date}
        </p>
      </div>

      {/* Itemized Demo Order Summary */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-6">
        <h2 className="font-serif text-xl font-medium text-[var(--color-text)] pb-4 border-b border-[var(--color-border)]">
          Simulated Order Breakdown
        </h2>

        <div className="divide-y divide-[var(--color-border)]">
          {order.items.map(({ item, product, lineTotal }) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="py-3.5 flex items-center justify-between gap-4 text-sm"
            >
              <div className="space-y-0.5">
                <h3 className="font-medium text-[var(--color-text)]">{product.name}</h3>
                <p className="text-xs text-[var(--color-muted)]">
                  Size: <strong className="text-[var(--color-text)]">{item.size}</strong> &bull; Qty: {item.quantity}
                </p>
              </div>
              <span className="font-semibold text-[var(--color-text)] font-sans">
                {formatPrice(lineTotal)}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[var(--color-border)] space-y-2 text-xs text-[var(--color-muted)]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-[var(--color-text)]">{formatPrice(order.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping ({order.city})</span>
            <span className="font-semibold text-emerald-700">₹0 (Free Test)</span>
          </div>
          <div className="flex justify-between text-base font-semibold text-[var(--color-text)] pt-2 border-t border-[var(--color-border)]">
            <span>Simulated Total</span>
            <span className="font-serif text-xl">{formatPrice(order.subtotal)}</span>
          </div>
        </div>
      </div>

      {/* Return to Exploration CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href={`/track-order?ref=${encodeURIComponent(order.orderId)}`}
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--vybe-sage)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] flex items-center justify-center gap-2"
        >
          Track Simulated Order &rarr;
        </Link>
        <Link
          href="/shop"
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
        >
          Browse Full Catalogue
        </Link>
        <Link
          href="/"
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
