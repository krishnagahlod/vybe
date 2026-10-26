import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Story & Vision | VYBE",
  description:
    "Learn about VYBE: a contemporary women's athleisure brand concept built around mindful movement, gentle earth-tone palettes, and everyday rhythm.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)]">
            <ol className="flex items-center justify-center sm:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                About VYBE
              </li>
            </ol>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] block font-mono">
            Our Story &amp; Movement Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] leading-tight">
            Made for your kind of movement.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed font-light max-w-2xl">
            Redefining activewear away from aggressive athletic pressure toward calm, restorative movement that integrates seamlessly into daily life.
          </p>
        </div>

        {/* Brand Mission Statement */}
        <section className="p-8 sm:p-12 rounded-md bg-gradient-to-br from-[var(--vybe-peach)]/35 via-white to-[var(--vybe-sage)]/25 border border-[var(--color-border)] shadow-xs space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--color-text)]">
            Movement on Your Own Terms
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-light">
            <p>
              For decades, mainstream fitness brands celebrated intensity, punishment, and extreme transformation. Activewear was treated as high-compression armor decorated with garish neon colors.
            </p>
            <p>
              At VYBE, we believe that movement belongs to you. It might be an energized pilates session, an unhurried morning stroll through Cubbon Park in Bangalore, an oceanfront power walk in Mumbai, or a quiet yoga sequence in Pune or Delhi.
            </p>
            <p>
              We design concepts that feel soft against the skin, contour the body without pinching, and bridge the gap between workout spaces and daily urban transit.
            </p>
          </div>
        </section>

        {/* 3 Pillars of VYBE Design */}
        <section className="space-y-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--color-text)]">
            Our Core Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--vybe-sage)] flex items-center justify-center font-serif text-sm font-bold text-[var(--color-text)]">
                01
              </div>
              <h3 className="text-base font-semibold text-[var(--color-text)]">
                Restorative Earth Palette
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                We draw from soothing natural tones—Sage, Pale Peach, Soft Rose, and Muted Mauve—creating activewear that feels gentle on the eyes and wardrobe.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--vybe-peach)] flex items-center justify-center font-serif text-sm font-bold text-[var(--color-text)]">
                02
              </div>
              <h3 className="text-base font-semibold text-[var(--color-text)]">
                Flattering Freedom
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Silhouettes engineered with minimal chafing seams and soft edge waistbands that stay in place during floor work or running.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--vybe-pink)] flex items-center justify-center font-serif text-sm font-bold text-[var(--color-text)]">
                03
              </div>
              <h3 className="text-base font-semibold text-[var(--color-text)]">
                Studio-to-Street Ease
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Pieces that transition gracefully from the mat into café meetings, casual errands, and comfortable travel.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Project Context */}
        <section className="p-8 rounded-md bg-[var(--vybe-sage)]/25 border border-[var(--color-border)] space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--vybe-mauve-ink)] block font-mono">
            Academic Project Transparency
          </span>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-text)]">
            ENT 625 — Phase 2 Digital Marketing Project
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            <p>
              VYBE is a conceptual storefront developed as part of an academic marketing experiment. The storefront serves as the destination for a controlled paid traffic test evaluating consumer reception across Mumbai, Pune, Delhi, and Bangalore.
            </p>
            <p>
              All product lines, conceptual prices, and imagery are simulated prototypes. No commercial transactions are accepted, and no real customer funds are collected.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors shadow-xs"
            >
              Explore Collection &rarr;
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/30 transition-colors"
            >
              Contact Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
