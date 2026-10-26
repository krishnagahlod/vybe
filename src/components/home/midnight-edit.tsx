"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function MidnightEdit() {
  return (
    <section
      id="midnight-edit"
      className="py-24 sm:py-32 bg-[#121110] text-[#f5ebe1] border-y border-white/10 relative overflow-hidden"
    >
      {/* Ambient background soft radial glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[var(--vybe-rose)]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[var(--vybe-bronze)]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: High-Fashion Obsidian Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl border border-white/15 bg-black/40 group">
              <Image
                src="/images/lifestyle/dark-studio-sculpt.jpg"
                alt="VYBE Midnight Studio Edit — athletic model in high-tension compression set under sculptural low-key studio lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top Capsule Tag */}
              <div className="absolute top-5 left-5 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md border border-white/20 text-[#f5ebe1] shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--vybe-bronze)] animate-pulse" />
                  <span>Limited Studio Capsule // 001</span>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="absolute bottom-5 left-5 right-5 z-10 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/50 block">Tensile Gauge</span>
                  <span className="text-white font-medium">320 GSM High-Recovery</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest text-white/50 block">Reflective Trim</span>
                  <span className="text-[var(--vybe-bronze)] font-medium">150m Night Visibility</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Obsidian Narrative & Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 order-1 lg:order-2 text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--vybe-bronze)]">
                <span>The Midnight Edit</span>
                <span>✦</span>
                <span>SS26 Nocturne</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.06]">
                Architectural compression in{" "}
                <span className="italic font-light text-[var(--vybe-peach)]">
                  pure obsidian.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
              Engineered for dawn intervals along Marine Drive, evening reformer flows, and high-tension training. We dialed up fabric density to 320 GSM, pairing an ink-black matte weave with subtle micro-reflective stitch detailing that stays invisible by day and glints under headlights.
            </p>

            {/* 3 Technical Pill Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1">
                <span className="text-2xl font-serif text-white block">320 GSM</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  Squat-Proof Density
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1">
                <span className="text-2xl font-serif text-white block">UPF 50+</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  Sun & Heat Shield
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1">
                <span className="text-2xl font-serif text-white block">0.8s</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  Moisture Release
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/product/studio-sculpt-leggings"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-white text-[#141211] hover:bg-[var(--vybe-peach)] transition-all shadow-lg hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Explore Studio Sculpt Leggings</span>
                <span className="ml-2">&rarr;</span>
              </Link>
              <Link
                href="/shop?category=sets"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                Browse Midnight Sets
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
