"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error for debugging
    console.error("Storefront Client Error:", error);
  }, [error]);

  return (
    <div className="py-20 sm:py-32 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[var(--vybe-peach)]/60 text-[var(--vybe-mauve-ink)] mx-auto flex items-center justify-center text-2xl font-bold shadow-xs">
          ⚠️
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] font-mono">
            System Notice
          </span>
          <h1 className="font-serif text-3xl font-medium text-[var(--color-text)]">
            Something Paused Our Rhythm
          </h1>
          <p className="text-xs text-[var(--color-muted)] max-w-sm mx-auto leading-relaxed">
            An unexpected error occurred while rendering this page. You can retry loading or return to the activewear collection.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors shadow-xs cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/30 transition-colors"
          >
            Go to Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
