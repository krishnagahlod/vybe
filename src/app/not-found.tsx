import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[var(--vybe-peach)]/60 text-[var(--vybe-mauve)] mx-auto flex items-center justify-center font-serif text-3xl font-bold shadow-xs">
          404
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] font-mono">
            Page Not Located
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
            A Moment Off Course
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-md mx-auto leading-relaxed">
            The studio page or piece you are searching for might have moved, or the link may be out of date.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-md"
          >
            Explore Activewear Edit &rarr;
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Popular Shortcuts */}
        <div className="pt-8 border-t border-[var(--color-border)] space-y-3">
          <span className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-mono block">
            Popular Studio Categories
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Leggings", href: "/shop?category=leggings" },
              { label: "Sports Bras", href: "/shop?category=sports-bras" },
              { label: "Shorts", href: "/shop?category=shorts" },
              { label: "Size Guide", href: "/size-guide" },
              { label: "Help & FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--vybe-mauve)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
