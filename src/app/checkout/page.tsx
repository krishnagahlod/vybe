"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { CheckoutConfirmation, DemoOrderData } from "@/components/checkout/checkout-confirmation";
import { trackBeginCheckout, trackDemoCheckoutComplete } from "@/lib/analytics";

const CAMPAIGN_CITIES = [
  "Mumbai",
  "Pune",
  "Delhi",
  "Bangalore",
  "Other (Academic Evaluation)",
];

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
      errs.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter an email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format (e.g. name@example.com)";
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
      <div className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckoutConfirmation order={confirmedOrder} />
        </div>
      </div>
    );
  }

  // If cart is empty and no confirmed order
  if (resolvedItems.length === 0) {
    return (
      <div className="py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6 p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block font-mono">
            Demo Checkout
          </span>
          <h1 className="font-serif text-3xl font-medium text-[var(--color-text)]">
            Your Bag is Empty
          </h1>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Please add at least one athleisure concept to your shopping bag before proceeding to the simulated checkout.
          </p>
          <div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-xs"
            >
              Browse 12-Piece Collection &rarr;
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              <Link href="/cart" className="hover:text-[var(--color-text)] transition-colors">
                Shopping Bag
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li className="text-[var(--color-text)] font-semibold" aria-current="page">
              Demo Checkout
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-1 font-mono">
            Simulated Purchase Flow
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
            Demo Checkout
          </h1>
        </div>

        {/* Prominent Demo Notice Box */}
        <div className="mb-10 p-5 rounded-2xl bg-[var(--vybe-peach)]/40 border border-[var(--vybe-rose)]/50 text-xs text-[var(--color-text)] leading-relaxed space-y-1.5">
          <p className="font-semibold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--vybe-mauve)]" />
            Demonstration Store Notice (ENT 625 Project)
          </p>
          <p>
            This is a mock checkout flow created for academic evaluation. <strong>No real payment, banking card information, or delivery will take place.</strong> Please do NOT enter sensitive personal or payment-card data.
          </p>
        </div>

        {/* Checkout Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Demo Shipping & Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Section 1: Customer Info */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-5">
                <h2 className="font-serif text-xl font-medium text-[var(--color-text)] pb-3 border-b border-[var(--color-border)]">
                  1. Contact Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                    >
                      Full Name <span className="text-[var(--vybe-mauve)]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)] transition-all ${
                        errors.fullName ? "border-red-400 bg-red-50/20" : "border-[var(--color-border)]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                    >
                      Email Address <span className="text-[var(--vybe-mauve)]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. priya@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)] transition-all ${
                        errors.email ? "border-red-400 bg-red-50/20" : "border-[var(--color-border)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Destination City */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-5">
                <h2 className="font-serif text-xl font-medium text-[var(--color-text)] pb-3 border-b border-[var(--color-border)]">
                  2. Campaign Delivery City
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="citySelect"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                    >
                      Target City (Campaign Focus)
                    </label>
                    <select
                      id="citySelect"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)] transition-all"
                    >
                      {CAMPAIGN_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c} {c !== "Other (Academic Evaluation)" ? "— Free Test Shipping" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="deliveryNote"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                    >
                      Delivery Notes / Evaluation Comment (Optional)
                    </label>
                    <textarea
                      id="deliveryNote"
                      rows={2}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="e.g. Testing student funnel for ENT 625"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Simulated Payment Method */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                  <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
                    3. Payment Simulation
                  </h2>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    No Charge • Demo Mode
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--vybe-sage)]/25 border border-[var(--vybe-sage)]/60 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-text)] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    &#10003;
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[var(--color-text)]">
                      Simulated Order Validation (₹0 Payment)
                    </p>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      In accordance with course guidelines, this storefront does not integrate payment gateways (Stripe, Razorpay, etc.) or collect payment cards. Completing this form validates the funnel cleanly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] disabled:opacity-50 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
                >
                  {isSubmitting
                    ? "Validating Simulated Order..."
                    : `Complete Simulated Order • ${formatPrice(subtotal)}`}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary Preview */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md space-y-6">
              <h2 className="font-serif text-xl font-medium text-[var(--color-text)] pb-4 border-b border-[var(--color-border)]">
                Items in Demo Order ({totalCount})
              </h2>

              <div className="max-h-72 overflow-y-auto divide-y divide-[var(--color-border)] pr-2">
                {resolvedItems.map(({ item, product, lineTotal }) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="py-3 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <h3 className="font-medium text-[var(--color-text)]">{product.name}</h3>
                      <p className="text-[var(--color-muted)]">
                        Size: {item.size} &bull; Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-[var(--color-text)] font-sans">
                      {formatPrice(lineTotal)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="pt-4 border-t border-[var(--color-border)] space-y-2 text-xs text-[var(--color-muted)]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[var(--color-text)]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Simulated Delivery</span>
                  <span className="font-semibold text-emerald-700">₹0 (Free)</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[var(--color-text)] pt-2 border-t border-[var(--color-border)]">
                  <span>Simulated Total</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/cart"
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors underline underline-offset-4"
                >
                  &larr; Return to Shopping Bag to edit items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
