"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { getDeliveryFee } from "@/lib/pricing";
import { CheckoutConfirmation, DemoOrderData } from "@/components/checkout/checkout-confirmation";
import { trackBeginCheckout, trackDemoCheckoutComplete } from "@/lib/analytics";

const DELIVERY_CITIES = ["Mumbai", "Pune", "Delhi", "Bangalore"];

export default function CheckoutPage() {
  const { items, totalCount, clearCart } = useCart();
  const [confirmedOrder, setConfirmedOrder] = useState<DemoOrderData | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "Mumbai",
    address: "",
    note: "",
    agreeDemo: true,
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resolve cart items against central catalog
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

  const subtotal = useMemo(() => {
    return resolvedItems.reduce((acc, curr) => acc + curr.lineTotal, 0);
  }, [resolvedItems]);

  const deliveryFee = getDeliveryFee(subtotal);
  const total = subtotal + deliveryFee;

  const hasTrackedCheckoutRef = useRef(false);
  useEffect(() => {
    if (resolvedItems.length > 0 && !hasTrackedCheckoutRef.current) {
      hasTrackedCheckoutRef.current = true;
      trackBeginCheckout(totalCount, subtotal);
    }
  }, [resolvedItems.length, totalCount, subtotal]);

  const validate = () => {
    const errs: { fullName?: string; email?: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "That email doesn't look quite right";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Snapshot order details before clearing the cart
    const orderPayload: DemoOrderData = {
      orderId: `VYBE-DEMO-${Date.now().toString().slice(-6)}`,
      customerName: formData.fullName.trim(),
      email: formData.email.trim(),
      city: formData.city,
      items: [...resolvedItems],
      subtotal,
      deliveryFee,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    // Simulate short network latency for authentic feel
    setTimeout(() => {
      // Clear cart
      clearCart();

      // Dispatch custom demo completion event for analytics readiness without triggering real purchase
      trackDemoCheckoutComplete(orderPayload.orderId, totalCount, subtotal);

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("vybe:demo_checkout_complete", {
            detail: {
              orderId: orderPayload.orderId,
              itemCount: totalCount,
              demo: true,
            },
          })
        );
      }

      setConfirmedOrder(orderPayload);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  };

  // If order was confirmed, show the confirmation screen
  if (confirmedOrder) {
    return (
      <div className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckoutConfirmation order={confirmedOrder} />
        </div>
      </div>
    );
  }

  // If cart is empty and no confirmed order
  if (resolvedItems.length === 0) {
    return (
      <div className="py-24 sm:py-32">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <h1 className="font-headline text-4xl sm:text-5xl text-[var(--color-text)] font-semibold">
            Nothing to check out yet.
          </h1>
          <p className="text-base text-[var(--color-muted)] leading-relaxed">
            Add a piece or two to your bag first.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
          >
            Shop the collection
          </Link>
        </div>
      </div>
    );
  }

  const inputClass = (hasError?: boolean) =>
    `w-full h-12 px-4 rounded-full border bg-[var(--color-surface)] text-base text-[var(--color-text)] placeholder-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-text)] transition-colors ${
      hasError ? "border-[var(--vybe-cherry-ink)]" : "border-[var(--color-border)]"
    }`;
  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] mb-2";
  const stepHeading = "font-serif text-2xl sm:text-3xl text-[var(--color-text)] flex items-baseline gap-3";
  const stepNumber = "font-semibold text-lg text-[var(--vybe-mauve-ink)]";

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pb-6 border-b border-[var(--color-border)]">
          <h1 className="font-headline text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)]">Checkout</h1>
          <Link
            href="/cart"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] underline underline-offset-4 transition-colors"
          >
            &larr; Back to bag
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-12" noValidate>
            <section className="space-y-6">
              <h2 className={stepHeading}>
                <span className={stepNumber}>01</span> Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={inputClass(!!errors.fullName)}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-2 text-xs text-[var(--vybe-cherry-ink)]">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-[var(--vybe-cherry-ink)]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className={stepHeading}>
                <span className={stepNumber}>02</span> Delivery
              </h2>
              <fieldset>
                <legend className={labelClass}>City</legend>
                <div className="flex flex-wrap gap-2">
                  {DELIVERY_CITIES.map((c) => (
                    <label
                      key={c}
                      className={`px-5 h-11 inline-flex items-center rounded-full text-sm border cursor-pointer transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--vybe-mauve-ink)] ${
                        formData.city === c
                          ? "bg-[var(--color-text)] text-white border-[var(--color-text)]"
                          : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="city"
                        value={c}
                        checked={formData.city === c}
                        onChange={() => setFormData({ ...formData, city: c })}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="deliveryNote" className={labelClass}>
                  Delivery note <span className="normal-case tracking-normal font-normal text-[var(--color-muted)]">(optional)</span>
                </label>
                <textarea
                  id="deliveryNote"
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Anything we should know?"
                  className={`${inputClass()} h-auto py-3 resize-none`}
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className={stepHeading}>
                <span className={stepNumber}>03</span> Payment
              </h2>
              <div className="p-5 sm:p-6 rounded-full bg-[var(--vybe-petal)]/50 border border-[var(--vybe-blossom)] space-y-2" role="note">
                <p className="text-sm font-semibold text-[var(--color-text)]">This is a demo checkout. Nothing will be charged.</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  VYBE is a concept store for ENT 625. There is no payment step, no card details are collected, and no
                  order will be delivered. Please don&apos;t enter real payment information anywhere on this site.
                </p>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] disabled:opacity-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
            >
              {isSubmitting ? "Placing demo order…" : `Place demo order · ${formatPrice(total)}`}
            </button>
          </form>

          {/* Order summary */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 rounded-2xl bg-[var(--vybe-alabaster)]/50 p-6 sm:p-8 space-y-6">
            <h2 className="font-headline text-2xl text-[var(--color-text)] font-semibold">
              Your order <span className="text-base text-[var(--color-muted)]">({totalCount})</span>
            </h2>

            <ul className="max-h-80 overflow-y-auto divide-y divide-[var(--color-text)]/10">
              {resolvedItems.map(({ item, product, lineTotal }) => (
                <li key={`${item.productId}-${item.size}`} className="py-4 flex items-center gap-4">
                  <span className="relative w-14 aspect-[3/4] rounded-full overflow-hidden bg-[var(--vybe-petal)] shrink-0">
                    <Image
                      src={product.images[0]?.src ?? "/images/products/concept-silhouette.svg"}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-serif text-lg text-[var(--color-text)] truncate">{product.name}</span>
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
                <dd className="text-[var(--color-text)]">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-muted)]">Delivery to {formData.city}</dt>
                <dd className="text-[var(--color-text)]">{deliveryFee === 0 ? "Complimentary" : formatPrice(deliveryFee)}</dd>
              </div>
              <div className="flex justify-between items-baseline pt-3 mt-1 border-t border-[var(--color-text)]/10">
                <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text)]">Total</dt>
                <dd className="text-2xl text-[var(--color-text)]">{formatPrice(total)}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
}
