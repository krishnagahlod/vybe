"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const queryRef = searchParams.get("ref");
  const initialRef = queryRef ? queryRef.toUpperCase() : "VYBE-DEMO-482915";

  const [orderRef, setOrderRef] = useState<string>(initialRef);
  const [searchedRef, setSearchedRef] = useState<string | null>(initialRef);
  const [error, setError] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = orderRef.trim().toUpperCase();
    if (!trimmed) {
      setError("Please enter a valid order reference (e.g., VYBE-DEMO-XXXXXX).");
      return;
    }
    setError("");
    setSearchedRef(trimmed);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)] mb-3">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                Track Order
              </li>
            </ol>
          </nav>

          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
            Fulfillment Intelligence
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] mb-4">
            Track Your Movement Delivery
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
            Enter your demo confirmation code to check simulated logistics, transit hubs, and expected doorstep timelines.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs mb-10">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label htmlFor="order-ref" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Order Reference Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="order-ref"
                  type="text"
                  value={orderRef}
                  onChange={(e) => {
                    setOrderRef(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="e.g. VYBE-DEMO-482915"
                  className="flex-1 py-3 px-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm font-mono text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--vybe-mauve)] transition-colors uppercase"
                />
                <button
                  type="submit"
                  className="py-3 px-8 rounded-xl bg-[var(--color-text)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--vybe-mauve)] transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  Lookup Status
                </button>
              </div>
              {error && <p className="text-xs text-red-600 mt-2 font-medium">{error}</p>}
            </div>

            <p className="text-[11px] text-[var(--color-muted)]">
              Tip: A sample order reference (<code className="font-mono text-[var(--vybe-mauve)]">VYBE-DEMO-482915</code>) is loaded above for immediate demonstration.
            </p>
          </form>
        </div>

        {/* Tracking Timeline Output */}
        <AnimatePresence mode="wait">
          {searchedRef && (
            <motion.div
              key={searchedRef}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Order Status Summary Banner */}
              <div className="p-6 rounded-3xl bg-linear-to-br from-[var(--vybe-sage)]/35 via-[var(--vybe-peach)]/35 to-transparent border border-[var(--vybe-rose)]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--vybe-mauve)] block">
                    Simulated Tracking ID: {searchedRef}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-text)] mt-1">
                    In Transit &bull; On Schedule
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    Carrier: Blue Dart Air Express (Simulated) &bull; AWB: 749201842
                  </p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-white/80 border border-[var(--color-border)] text-center shrink-0 shadow-xs">
                  <span className="block text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                    Estimated Doorstep
                  </span>
                  <span className="font-semibold text-xs text-emerald-800">
                    Next 24&ndash;48 Hours
                  </span>
                </div>
              </div>

              {/* Progress Milestones */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
                <h4 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-6">
                  Fulfillment Milestones
                </h4>

                <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--vybe-mauve)]/30">
                  {/* Step 1 */}
                  <div className="relative">
                    <span className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      ✓
                    </span>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                          Demo Order Confirmed
                        </h5>
                        <span className="text-[10px] font-mono text-[var(--color-muted)]">
                          Today, 10:14 AM
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Order verified and logged for academic digital marketing simulation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <span className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      ✓
                    </span>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                          Quality Inspected &amp; Packed
                        </h5>
                        <span className="text-[10px] font-mono text-[var(--color-muted)]">
                          Today, 11:30 AM
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Pieces packaged in 100% recyclable, plastic-free mailers at Mumbai Central Hub.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <span className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[var(--vybe-mauve)] text-white flex items-center justify-center text-xs font-bold shadow-xs ring-4 ring-[var(--vybe-peach)]">
                      ✈
                    </span>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                          Dispatched via Express Air Delivery
                        </h5>
                        <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                          Active &bull; In Transit
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        En route to regional sorting distribution terminal for final local handover.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative opacity-60">
                    <span className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[var(--color-border)] text-[var(--color-muted)] flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                          Out for Doorstep Delivery
                        </h5>
                        <span className="text-[10px] font-mono text-[var(--color-muted)]">
                          Pending Dispatch
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Local courier rider will contact for zero-contact delivery handover.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Simulation Notice Card */}
              <div className="p-4 rounded-2xl bg-[var(--vybe-peach)]/40 border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex items-center gap-3">
                <span className="text-base">ℹ️</span>
                <p>
                  <strong className="text-[var(--color-text)]">Demonstration Notice:</strong> This tracking readout is an interactive simulation demonstrating customer post-purchase journey tracking for the ENT 625 Digital Marketing project.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-xs text-[var(--color-muted)] font-mono">
          Loading fulfillment intelligence...
        </div>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}

