import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section Placeholder for Milestone 1 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--vybe-peach)]/30 via-[var(--vybe-sage)]/20 to-[var(--color-bg)] py-20 sm:py-28 lg:py-36 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white border border-[var(--color-border)] text-[var(--vybe-mauve)] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--vybe-rose)]" />
              Contemporary Athleisure Concept
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--color-text)] leading-[1.1] mb-6">
              Made for your kind of movement.
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed mb-8 max-w-2xl">
              From mindful morning flows to studio energy and everyday ease. Designed with a balanced palette, flattering contours, and effortless wearability.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Palette / Design Token Showcase for Milestone 1 verification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 bg-[var(--color-surface)] shadow-xs">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-[var(--color-muted)] mb-4">
            VYBE Design Tokens & Visual Identity System
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[var(--vybe-sage)] border border-black/5 text-center">
              <span className="block font-semibold text-xs text-[var(--color-text)]">Sage</span>
              <span className="block text-[11px] text-[var(--color-muted)] font-mono">#d8e2dc</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vybe-peach)] border border-black/5 text-center">
              <span className="block font-semibold text-xs text-[var(--color-text)]">Pale Peach</span>
              <span className="block text-[11px] text-[var(--color-muted)] font-mono">#ffe5d9</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vybe-pink)] border border-black/5 text-center">
              <span className="block font-semibold text-xs text-[var(--color-text)]">Soft Pink</span>
              <span className="block text-[11px] text-[var(--color-muted)] font-mono">#ffcad4</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vybe-rose)] border border-black/5 text-center">
              <span className="block font-semibold text-xs text-[var(--color-text)]">Rose</span>
              <span className="block text-[11px] text-[var(--color-muted)] font-mono">#f4acb7</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vybe-mauve)] border border-black/5 text-center text-white col-span-2 sm:col-span-1">
              <span className="block font-semibold text-xs">Muted Mauve</span>
              <span className="block text-[11px] text-white/80 font-mono">#9d8189</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
