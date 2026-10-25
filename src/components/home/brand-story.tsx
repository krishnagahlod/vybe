import Link from "next/link";

export function BrandStory() {
  return (
    <section id="brand-story" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block font-mono">
              Our Positioning
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] leading-tight">
              Activewear that honors your pace, not someone else&apos;s metrics.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-light">
              <p>
                Too much activewear has been built around intense athletic performance, punishment, and artificial urgency. VYBE was conceived from a different premise: that movement should feel restorative, joyful, and completely personal.
              </p>
              <p>
                Whether you&apos;re greeting the sunrise on a yoga mat in Pune, taking an evening run along Marine Drive in Mumbai, or walking to your favorite café in Bangalore or Delhi — our designs pair calming natural tones with soft, unrestrictive cuts.
              </p>
            </div>

            {/* Brand Values Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                <span className="block font-semibold text-xs text-[var(--color-text)] mb-1">
                  Gentle Earth Tones
                </span>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  Soothing sage, peach, and muted mauve instead of hyper-saturated neon.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                <span className="block font-semibold text-xs text-[var(--color-text)] mb-1">
                  Flattering Freedom
                </span>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  Silhouettes that move with your body rather than binding or pinching.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                <span className="block font-semibold text-xs text-[var(--color-text)] mb-1">
                  Studio to Daily Rhythm
                </span>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  Thoughtful aesthetics that seamlessly transition beyond workout spaces.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors underline underline-offset-8"
              >
                <span>Read the Complete Brand Vision</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Editorial Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--vybe-peach)]/40 via-[var(--vybe-sage)]/30 to-[var(--vybe-pink)]/20 border border-[var(--color-border)] shadow-md space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                <span className="font-serif text-lg font-bold text-[var(--color-text)]">
                  V
                </span>
              </div>
              <blockquote className="space-y-4">
                <p className="font-serif text-xl sm:text-2xl text-[var(--color-text)] italic leading-snug">
                  &ldquo;Movement isn&apos;t just about burning calories or hitting personal bests. It&apos;s about returning to yourself.&rdquo;
                </p>
                <footer className="text-xs font-semibold uppercase tracking-wider text-[var(--vybe-mauve)]">
                  — The VYBE Studio Philosophy
                </footer>
              </blockquote>

              <div className="pt-6 border-t border-[var(--color-border)]/80 text-xs text-[var(--color-muted)] leading-relaxed">
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  Academic Project Transparency
                </p>
                <p>
                  Created for ENT 625 Digital Marketing. This prototype showcases a complete brand journey and simulated shopping funnel without taking real customer funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
