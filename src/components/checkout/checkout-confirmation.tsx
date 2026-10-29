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
  deliveryFee: number;
  date: string;
};

type CheckoutConfirmationProps = {
  order: DemoOrderData;
};

export function CheckoutConfirmation({ order }: CheckoutConfirmationProps) {
  const firstName = order.customerName.split(" ")[0];
  const total = order.subtotal + order.deliveryFee;

  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-fade-up">
      <div className="text-center space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
          Demo order placed
        </p>
        <h1 className="font-headline text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)] leading-[1.05]">
          Thank you, {firstName}.
        </h1>
        <p className="text-base text-[var(--color-muted)]">
          Order reference <span className="text-[var(--color-text)] font-semibold tracking-wide">{order.orderId}</span>
          <span className="mx-2" aria-hidden="true">&middot;</span>
          {order.date}
        </p>
      </div>

      <div className="p-5 sm:p-6 rounded-full bg-[var(--vybe-petal)]/50 border border-[var(--vybe-blossom)] text-sm leading-relaxed" role="note">
        <p className="font-semibold text-[var(--color-text)]">This was a demonstration. Nothing was charged and nothing will ship.</p>
        <p className="mt-1 text-[var(--color-muted)]">
          VYBE is a concept store for ENT 625. No payment details were collected and no email has been sent to{" "}
          {order.email}.
        </p>
      </div>

      <div className="rounded-2xl bg-[var(--vybe-alabaster)]/50 p-6 sm:p-8 space-y-6">
        <h2 className="font-headline text-2xl text-[var(--color-text)] font-semibold">Order summary</h2>
        <ul className="divide-y divide-[var(--color-text)]/10">
          {order.items.map(({ item, product, lineTotal }) => (
            <li key={`${item.productId}-${item.size}`} className="py-4 flex items-center justify-between gap-4">
              <span>
                <span className="block font-serif text-lg text-[var(--color-text)]">{product.name}</span>
                <span className="block text-xs text-[var(--color-muted)]">
                  Size {item.size} &middot; Qty {item.quantity}
                </span>
              </span>
              <span className="text-sm text-[var(--color-text)]">{formatPrice(lineTotal)}</span>
            </li>
          ))}
        </ul>
        <dl className="pt-5 border-t border-[var(--color-text)]/10 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-[var(--color-muted)]">Subtotal</dt>
            <dd className="text-[var(--color-text)]">{formatPrice(order.subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--color-muted)]">Delivery to {order.city}</dt>
            <dd className="text-[var(--color-text)]">
              {order.deliveryFee === 0 ? "Complimentary" : formatPrice(order.deliveryFee)}
            </dd>
          </div>
          <div className="flex justify-between items-baseline pt-3 mt-1 border-t border-[var(--color-text)]/10">
            <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text)]">Total</dt>
            <dd className="text-2xl text-[var(--color-text)]">{formatPrice(total)}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <Link
          href={`/track-order?ref=${encodeURIComponent(order.orderId)}`}
          className="inline-flex items-center justify-center px-8 h-12 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Track this order
        </Link>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center px-8 h-12 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
        >
          Keep shopping
        </Link>
      </div>
    </div>
  );
}
