import React from "react";
import Link from "next/link";

const CATEGORIES = [
  { label: "Leggings", href: "/shop?category=leggings" },
  { label: "Sports Bras", href: "/shop?category=sports-bras" },
  { label: "Tops", href: "/shop?category=tops" },
  { label: "Matching Sets", href: "/shop?category=sets" },
];

export function CartEmptyState() {
  return (
    <div className="text-center py-16 sm:py-24 max-w-xl mx-auto space-y-8 animate-fade-up">
      <div className="space-y-4">
        <h2 className="font-headline text-4xl sm:text-5xl text-[var(--color-text)] font-semibold">
          Your bag is empty.
        </h2>
        <p className="text-base text-[var(--color-muted)] leading-relaxed">
          Nothing here yet. Start with our studio essentials, or pick a category below.
        </p>
      </div>

      <Link
        href="/shop"
        className="inline-flex items-center justify-center px-10 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
      >
        Shop the collection
      </Link>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4">
        {CATEGORIES.map((cat) => (
          <li key={cat.href}>
            <Link
              href={cat.href}
              className="font-serif text-xl text-[var(--color-text)] border-b border-transparent hover:border-current transition-colors"
            >
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
