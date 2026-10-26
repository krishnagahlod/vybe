"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Hotspot = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  x: string; // percentage string for left position
  y: string; // percentage string for top position
  description: string;
  metric: string;
  metricLabel: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "waistband",
    number: "01",
    title: "Sculpt-Lock™ Contoured Core",
    subtitle: "High-Rise Anchored Waistband",
    x: "48%",
    y: "32%",
    description:
      "A 4.2-inch double-bonded core panel that contours gently without rolling down during forward folds, deep squats, or brisk transit walks.",
    metric: "0 mm",
    metricLabel: "Roll-Down Slippage Tested",
  },
  {
    id: "fabric",
    number: "02",
    title: "Air-Weave™ Thermal Channel",
    subtitle: "Micro-Porous Humidity Defense",
    x: "42%",
    y: "56%",
    description:
      "Engineered specifically for Mumbai and Pune humidity. Microscopic capillaries vent moisture outward while maintaining 100% blackout opacity.",
    metric: "3.4x",
    metricLabel: "Faster Vapor Dissipation",
  },
  {
    id: "seams",
    number: "03",
    title: "Ultrasonic Laser-Bonded Seams",
    subtitle: "Zero-Abrasion Construction",
    x: "46%",
    y: "82%",
    description:
      "Flatlock acoustic welding completely removes raised stitching, eliminating inner-thigh and ankle friction over 15K+ urban step counts.",
    metric: "100%",
    metricLabel: "Chafe-Free Guarantee",
  },
];

export function GarmentAnatomy() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section
      id="garment-anatomy"
      className="py-24 sm:py-32 bg-[var(--color-bg)] border-y border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve)] block">
            Garment Engineering // Volume 01
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)] leading-tight">
            Anatomy of Mindful Performance
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] font-light leading-relaxed">
            Every seam, fiber density, and waistband curvature is calculated for zero distraction. Hover or select any node to inspect the craftsmanship.
          </p>
        </div>

        {/* Spatial Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Model with Interactive Hotspot Pulse Nodes */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-stone-100">
              <Image
                src="/images/products/flow-high-rise-leggings-1.jpg"
                alt="VYBE Flow High-Rise Leggings garment anatomy and technical construction"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Pulsing Hotspot Nodes */}
              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setActiveHotspot(hotspot)}
                    onMouseEnter={() => setActiveHotspot(hotspot)}
                    style={{ left: hotspot.x, top: hotspot.y }}
                    aria-label={`Inspect ${hotspot.title}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {/* Outer animated ripple */}
                    <span
                      className={`absolute -inset-3 rounded-full pointer-events-none ${
                        isActive
                          ? "bg-[var(--vybe-rose)]/40 animate-pulse-ring"
                          : "bg-white/30 group-hover:bg-white/50"
                      }`}
                    />

                    {/* Core node dot */}
                    <span
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border shadow-lg transition-all duration-300 font-mono text-[10px] font-bold ${
                        isActive
                          ? "bg-[var(--color-text)] text-white border-white scale-110 shadow-xl"
                          : "bg-white/95 text-[var(--color-text)] border-black/10 group-hover:scale-105"
                      }`}
                    >
                      {hotspot.number}
                    </span>
                  </button>
                );
              })}

              {/* Bottom Model Note */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white/90 text-[10px] font-mono tracking-widest uppercase bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span>Subject: Flow Studio Leggings</span>
                <span>Active Spec: {activeHotspot.number} / 03</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Spec Card with Animated Content */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Switcher Tabs */}
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
              {HOTSPOTS.map((hotspot) => (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspot(hotspot)}
                  className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeHotspot.id === hotspot.id
                      ? "bg-[var(--color-text)] text-white font-semibold"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-black/5"
                  }`}
                >
                  {hotspot.number} {hotspot.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Spec Card with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-6"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--vybe-rose)] font-semibold block">
                    {activeHotspot.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--color-text)]">
                    {activeHotspot.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
                  {activeHotspot.description}
                </p>

                {/* Metric Callout */}
                <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-3xl font-medium text-[var(--color-text)] block">
                      {activeHotspot.metric}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-muted)]">
                      {activeHotspot.metricLabel}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--vybe-peach)]/60 flex items-center justify-center text-[var(--vybe-mauve)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Material Breakdown */}
                <div className="space-y-2 pt-2 border-t border-[var(--color-border)]/70 text-xs">
                  <div className="flex justify-between text-[11px] font-mono text-[var(--color-muted)]">
                    <span>Composition:</span>
                    <span className="text-[var(--color-text)] font-semibold">78% Recycled Polyamide / 22% Micro-Elastane</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[var(--color-muted)]">
                    <span>Fabric Weight:</span>
                    <span className="text-[var(--color-text)] font-semibold">280 GSM Interlock (Studio Gauge)</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[var(--color-muted)]">
                    <span>Care Guidance:</span>
                    <span className="text-[var(--color-text)] font-semibold">Cold Machine Wash • Line Dry in Shade</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/product/flow-high-rise-leggings"
                    className="inline-flex items-center justify-center w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
                  >
                    <span>Inspect Flow Studio Leggings</span>
                    <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
