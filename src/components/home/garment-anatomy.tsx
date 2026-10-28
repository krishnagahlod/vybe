"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Hotspot = {
  id: string;
  number: string;
  label: string;
  title: string;
  x: string; // percentage of image width (image is 3:4, same as its frame, so no crop offset)
  y: string; // percentage of image height
  description: string;
  detail: string;
  detailLabel: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "waistband",
    number: "01",
    label: "Waistband",
    title: "A high-rise band that stays put",
    x: "50%",
    y: "12%",
    description:
      "A wide, double-layer waistband designed to sit flat through forward folds and squats, so you're not hitching it up between sets.",
    detail: "Double-layer",
    detailLabel: "Wide, no-dig construction",
  },
  {
    id: "fabric",
    number: "02",
    label: "Fabric",
    title: "Soft, matte stretch knit",
    x: "38%",
    y: "38%",
    description:
      "A smooth, brushed-feel knit with four-way stretch, chosen to move with you and stay comfortable through warm city days.",
    detail: "4-way stretch",
    detailLabel: "Moves in every direction",
  },
  {
    id: "seams",
    number: "03",
    label: "Seams",
    title: "Flat seams, cleaner line",
    x: "60%",
    y: "55%",
    description:
      "Flatlock seams along the inner leg reduce bulk where fabric meets skin, for a smoother silhouette and less rubbing.",
    detail: "Flatlock",
    detailLabel: "Low-profile seam finish",
  },
];

const SPECS = [
  { label: "Composition", value: "78% recycled polyamide, 22% elastane" },
  { label: "Rise", value: "High rise, full length" },
  { label: "Care", value: "Cold machine wash, dry in shade" },
];

export function GarmentAnatomy() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="garment-anatomy" className="py-20 sm:py-28 bg-[var(--color-bg)] scroll-mt-24">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
            Fit &amp; Fabric
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)] leading-tight">
            A closer look at the Flow Legging
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            Select a point on the image to see how it&apos;s made.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Product image with hotspots */}
          <div className="lg:col-span-6">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-sage)]">
              <Image
                src="/images/products/flow-high-rise-leggings-sage-1.jpg"
                alt="Flow High-Rise Leggings in sage, worn standing, with three numbered construction points"
                fill
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover object-center"
              />

              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setActiveHotspot(hotspot)}
                    onMouseEnter={() => setActiveHotspot(hotspot)}
                    style={{ left: hotspot.x, top: hotspot.y }}
                    aria-label={`Show ${hotspot.label} details`}
                    aria-pressed={isActive}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {isActive && (
                      <span className="absolute -inset-3 rounded-full pointer-events-none bg-white/50 animate-pulse-ring" />
                    )}
                    <span
                      className={`relative flex items-center justify-center w-9 h-9 rounded-full shadow-md transition-all duration-300 text-[11px] font-semibold ${
                        isActive
                          ? "bg-[var(--color-text)] text-white scale-110"
                          : "bg-white text-[var(--color-text)] group-hover:scale-105"
                      }`}
                    >
                      {hotspot.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2" role="group" aria-label="Construction details">
              {HOTSPOTS.map((hotspot) => (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspot(hotspot)}
                  aria-pressed={activeHotspot.id === hotspot.id}
                  className={`text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-sm transition-colors cursor-pointer ${
                    activeHotspot.id === hotspot.id
                      ? "bg-[var(--color-text)] text-white"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60"
                  }`}
                >
                  {hotspot.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-5 min-h-[13rem]"
              >
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-text)]">
                  {activeHotspot.title}
                </h3>
                <p className="text-base text-[var(--color-muted)] leading-relaxed max-w-lg">
                  {activeHotspot.description}
                </p>
                <div className="inline-flex items-baseline gap-3 px-5 py-3 rounded-md bg-[var(--vybe-sage)]/60">
                  <span className="font-serif text-2xl text-[var(--color-text)]">{activeHotspot.detail}</span>
                  <span className="text-sm text-[var(--vybe-sage-ink)]">{activeHotspot.detailLabel}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <dl className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] text-sm">
              {SPECS.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-6 py-3">
                  <dt className="text-[var(--color-muted)]">{spec.label}</dt>
                  <dd className="text-[var(--color-text)] text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/product/flow-high-rise-leggings"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
            >
              <span>Shop the Flow Legging</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
