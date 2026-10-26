"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf8f5] via-[var(--vybe-peach)]/25 to-[var(--color-bg)] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[var(--color-border)]">
      {/* Ambient background soft glow */}
      <div
        className="absolute top-10 right-1/4 -mt-20 w-[30rem] h-[30rem] rounded-full bg-[var(--vybe-pink)]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[var(--vybe-sage)]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Editorial Narrative (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Editorial Capsule Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase bg-white/90 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--vybe-rose)] animate-pulse" />
              <span>Studio Sculpt Edit // SS26 Collection</span>
            </div>

            {/* High-Fashion Magazine Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal tracking-tight text-[var(--color-text)] leading-[1.04]">
              Made for your{" "}
              <span className="italic font-normal text-[var(--vybe-mauve)] block sm:inline">
                kind
              </span>{" "}
              of movement.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl font-light">
              Contemporary women&apos;s activewear crafted with 4-way cloud stretch and breathable air-weave fabric. Formulated for mindful studio practice, reformer flows, and the daily rhythm of Indian metro life.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <span>Explore The Collection</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#style-quiz"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-white/90 backdrop-blur-xs border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                Find Your Movement Vibe &darr;
              </Link>
            </div>

            {/* Metro Launch Spotlight Banner */}
            <div className="pt-6 border-t border-[var(--color-border)]/80 flex flex-wrap items-center gap-2.5 text-xs text-[var(--color-muted)]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text)]">
                Metro Hubs:
              </span>
              {["Mumbai", "Pune", "Delhi", "Bangalore"].map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full bg-white/80 border border-[var(--color-border)] text-[11px] font-medium text-[var(--color-text)] shadow-2xs"
                >
                  {city}
                </span>
              ))}
              <span className="text-[11px] text-[var(--vybe-mauve)] font-medium ml-1">
                &bull; Complimentary Express Delivery
              </span>
            </div>
          </motion.div>

          {/* Full-Bleed Editorial Campaign Visual (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl border border-white/80 bg-[var(--vybe-sage)]/30 group">
              <Image
                src="/images/lifestyle/hero-editorial-movement.jpg"
                alt="VYBE mindful movement campaign — model in matching sage activewear in sunlit limestone studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim for subtle contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="px-3.5 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--vybe-peach)]">
                    Fabric Innovation
                  </span>
                  <span className="text-xs font-semibold tracking-wide">
                    4-Way Cloud Stretch &bull; 100% Opaque
                  </span>
                </div>
              </div>

              {/* Floating Bottom Quick-Shop Card */}
              <div className="absolute bottom-5 right-5 left-5 z-10">
                <Link
                  href="/product/flow-high-rise-leggings"
                  className="block p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl transition-all duration-300 hover:bg-white hover:scale-[1.02] text-[var(--color-text)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[var(--vybe-sage)]/40 overflow-hidden relative shrink-0">
                        <Image
                          src="/images/products/flow-high-rise-leggings-1.jpg"
                          alt="Flow High-Rise Leggings preview"
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-[var(--vybe-mauve)]">
                          Featured Studio Piece
                        </span>
                        <h2 className="font-serif text-sm font-semibold leading-tight text-[var(--color-text)]">
                          Flow High-Rise Leggings
                        </h2>
                        <span className="text-xs font-medium text-[var(--color-muted)]">
                          ₹1,799 &bull; Sage Green
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-text)] text-white shrink-0">
                      View &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Luxury Marquee Strip */}
      <div className="mt-14 sm:mt-20 pt-4 pb-4 bg-white/70 backdrop-blur-xs border-y border-[var(--color-border)] overflow-hidden">
        <div className="flex whitespace-nowrap gap-8 text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--color-muted)]">
          {[1, 2].map((iter) => (
            <div key={iter} className="flex shrink-0 items-center gap-8 animate-marquee">
              <span>Mindful Compression</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
              <span>Formulated For Indian Metro Climates</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
              <span>100% Squat-Proof Opacity</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
              <span>Zero-Slip Waistband Architecture</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
              <span>Complimentary Carbon-Neutral Shipping</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
              <span>Made For Your Kind Of Movement</span>
              <span className="text-[var(--vybe-rose)] font-bold">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
