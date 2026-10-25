"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--vybe-peach)]/30 via-[var(--vybe-sage)]/20 to-[var(--color-bg)] pt-16 pb-20 sm:pt-24 sm:pb-32 border-b border-[var(--color-border)]">
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-0 right-1/4 -mt-20 w-96 h-96 rounded-full bg-[var(--vybe-pink)]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[var(--vybe-sage)]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left / Top) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-xs border border-[var(--color-border)] text-[var(--color-text)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--vybe-rose)] animate-pulse" />
              <span>Contemporary Women&apos;s Activewear</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--color-text)] leading-[1.1]">
              Made for your kind of movement.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[var(--color-muted)] leading-relaxed max-w-2xl font-light">
              Elevated athleisure concepts created for daily flow, studio practice, and unhurried life. Curated in gentle earth tones with silhouettes designed to embrace every rhythm.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                Explore Collection &rarr;
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                Brand Story & Philosophy
              </Link>
            </div>

            {/* Campaign Cities Indicator */}
            <div className="pt-6 border-t border-[var(--color-border)]/80 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
              <span className="font-semibold uppercase tracking-wider text-[var(--color-text)]">
                Launch Focus:
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[var(--color-border)] font-medium text-[var(--color-text)]">
                Mumbai
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[var(--color-border)] font-medium text-[var(--color-text)]">
                Pune
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[var(--color-border)] font-medium text-[var(--color-text)]">
                Delhi
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[var(--color-border)] font-medium text-[var(--color-text)]">
                Bangalore
              </span>
            </div>
          </motion.div>

          {/* Hero Editorial Card / Visual Display (Right / Bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-[var(--color-border)] shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--vybe-rose)]/20 rounded-bl-full pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-widest text-[var(--vybe-mauve)] uppercase">
                    Curated Edit 2026
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-[var(--color-text)] mt-1">
                    The Mindful Flow Wardrobe
                  </h2>
                </div>

                {/* 3 Core Design Pillars */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[var(--vybe-sage)]/25 border border-[var(--vybe-sage)]/50">
                    <div className="w-8 h-8 rounded-full bg-[var(--vybe-sage)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-text)]">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        Soft Palette Harmony
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] leading-relaxed mt-0.5">
                        Calming sage, warm peach, soft rose, and muted mauve instead of aggressive neon graphics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[var(--vybe-peach)]/25 border border-[var(--vybe-peach)]/50">
                    <div className="w-8 h-8 rounded-full bg-[var(--vybe-peach)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-text)]">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        Inclusive Studio Silhouette
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] leading-relaxed mt-0.5">
                        Flattering contours designed for intuitive movement, breathability, and day-to-night comfort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[var(--vybe-pink)]/25 border border-[var(--vybe-pink)]/50">
                    <div className="w-8 h-8 rounded-full bg-[var(--vybe-pink)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-text)]">
                      03
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        Academic Concept Prototype
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] leading-relaxed mt-0.5">
                        All items and prices are conceptual. Test our complete simulated checkout flow safely.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                <Link
                  href="/shop?category=leggings"
                  className="block w-full text-center py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[var(--vybe-peach)] text-[var(--color-text)] hover:bg-[var(--vybe-rose)]/50 transition-colors"
                >
                  Explore Studio Leggings &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
