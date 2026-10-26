import Image from "next/image";
import Link from "next/link";

export function BrandStory() {
  return (
    <section id="brand-story" className="py-24 sm:py-32 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve)] block">
              Brand Philosophy // Mindful Rhythm
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.08]">
              Activewear that honors your pace, not someone else&apos;s metrics.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed font-light">
              <p>
                Too much activewear has been built around aggressive performance, punishment, and artificial urgency. VYBE was conceived from a different premise: that movement should feel restorative, joyful, and completely personal.
              </p>
              <p>
                Whether you&apos;re greeting the sunrise on a yoga mat in Pune, taking an evening run along Marine Drive in Mumbai, or walking to your favorite café in Bangalore or Delhi — our designs pair calming organic tones with soft, unrestrictive cuts.
              </p>
            </div>

            {/* Brand Values Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-1.5">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--vybe-mauve)]">
                  01 // PALETTE
                </span>
                <h3 className="font-serif text-base font-semibold text-[var(--color-text)]">
                  Gentle Earth Tones
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed font-light">
                  Soothing sage, peach, and muted mauve instead of hyper-saturated neon.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-1.5">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--vybe-mauve)]">
                  02 // SILHOUETTE
                </span>
                <h3 className="font-serif text-base font-semibold text-[var(--color-text)]">
                  Flattering Freedom
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed font-light">
                  Silhouettes that move with your body rather than binding or pinching.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-1.5">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--vybe-mauve)]">
                  03 // TRANSIT
                </span>
                <h3 className="font-serif text-base font-semibold text-[var(--color-text)]">
                  Studio to Daily Rhythm
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed font-light">
                  Elevated cuts that seamlessly transition beyond studio doors.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors inline-flex items-center gap-2 pb-1 border-b border-[var(--color-text)] hover:border-[var(--vybe-mauve)]"
              >
                <span>Read the Complete Brand Vision</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Fashion Lookbook Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/80 bg-[var(--vybe-peach)]/30 group">
              <Image
                src="/images/products/harmony-monochrome-set-1.jpg"
                alt="VYBE editorial movement portrait — harmony monochrome set"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Fashion Monogram */}
              <div className="absolute top-5 left-5 z-10">
                <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50">
                  <span className="font-serif text-lg font-bold text-[var(--color-text)] tracking-wider">
                    V
                  </span>
                </div>
              </div>

              {/* Overlaid Editorial Quote Frame */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-3">
                <blockquote className="space-y-2">
                  <p className="font-serif text-lg sm:text-xl text-white italic leading-snug font-light">
                    &ldquo;Movement isn&apos;t just about burning calories or hitting personal bests. It&apos;s about returning to yourself.&rdquo;
                  </p>
                  <footer className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--vybe-rose)] font-semibold">
                    — The VYBE Movement Manifesto
                  </footer>
                </blockquote>

                <div className="pt-3 border-t border-white/20 text-[11px] text-white/80 flex items-center justify-between">
                  <span>Volume 01 &bull; Indian Metro Drop</span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--vybe-peach)]">SS26</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
