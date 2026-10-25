import React from "react";
import Link from "next/link";

export function CartEmptyState() {
  return (
    <div className="text-center py-20 px-4 sm:px-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs max-w-2xl mx-auto my-8">
      {/* Icon Frame */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--vybe-peach)]/50 border border-[var(--vybe-peach)] flex items-center justify-center text-[var(--vybe-mauve)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>

      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
        Your Bag is Empty
      </span>
      <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] mb-3">
        Ready for Movement
      </h2>
      <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto leading-relaxed mb-8">
        You haven&apos;t added any athleisure concepts to your shopping bag yet. Explore our curated 12-piece edit to select your styles and test the simulated checkout.
      </p>

      {/* Primary CTA */}
      <div className="mb-10">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
        >
          Explore 12-Piece Collection &rarr;
        </Link>
      </div>

      {/* Category Shortcuts */}
      <div className="pt-8 border-t border-[var(--color-border)]">
        <span className="text-xs text-[var(--color-muted)] block mb-3">
          Or jump into a specific category:
        </span>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <Link
            href="/shop?category=leggings"
            className="px-3 py-1.5 rounded-full bg-[var(--vybe-sage)]/30 border border-[var(--color-border)] hover:border-[var(--vybe-mauve)] transition-colors"
          >
            Studio Leggings
          </Link>
          <Link
            href="/shop?category=sports-bras"
            className="px-3 py-1.5 rounded-full bg-[var(--vybe-peach)]/30 border border-[var(--color-border)] hover:border-[var(--vybe-mauve)] transition-colors"
          >
            Sports Bras
          </Link>
          <Link
            href="/shop?category=tops"
            className="px-3 py-1.5 rounded-full bg-[var(--vybe-pink)]/30 border border-[var(--color-border)] hover:border-[var(--vybe-mauve)] transition-colors"
          >
            Tops &amp; Tanks
          </Link>
          <Link
            href="/shop?category=sets"
            className="px-3 py-1.5 rounded-full bg-[var(--vybe-rose)]/25 border border-[var(--color-border)] hover:border-[var(--vybe-mauve)] transition-colors"
          >
            Matching Sets
          </Link>
        </div>
      </div>
    </div>
  );
}
