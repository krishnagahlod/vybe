import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-12 mt-auto text-[var(--color-text)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--color-border)]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-[0.25em] text-[var(--color-text)]">
                VYBE
              </span>
            </Link>
            <p className="text-sm font-medium tracking-wide uppercase text-[var(--vybe-mauve)]">
              Made for your kind of movement
            </p>
            <p className="text-sm text-[var(--color-muted)] max-w-md leading-relaxed">
              Thoughtfully designed athleisure concepts for studio sessions, mindful movement, and everyday rhythm. Celebrating personal expression without compromise.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                Campaign Focus Cities:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--color-text)]">
                <span className="px-2.5 py-1 rounded bg-[var(--vybe-peach)]/60 border border-[var(--color-border)]">
                  Mumbai
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--vybe-peach)]/60 border border-[var(--color-border)]">
                  Pune
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--vybe-peach)]/60 border border-[var(--color-border)]">
                  Delhi
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--vybe-peach)]/60 border border-[var(--color-border)]">
                  Bangalore
                </span>
              </div>
            </div>
          </div>

          {/* Explore / Shop Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">
              Explore Collection
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=leggings"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Leggings & Tights
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=sports-bras"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Sports Bras
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=tops"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Tops & Tanks
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=sets"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Matching Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Project & Support Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">
              Project Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Brand Story & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-returns"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Shipping & Returns Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Privacy Policy & Demo Scope
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic / Concept Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-xl bg-[var(--vybe-sage)]/30 border border-[var(--color-border)] text-xs text-[var(--color-muted)] leading-relaxed">
          <p className="font-semibold text-[var(--color-text)] mb-1 uppercase tracking-wide">
            Academic Concept Disclosure (ENT 625 — Digital Marketing)
          </p>
          <p>
            VYBE is a prototype brand and experimental storefront created solely for educational purposes. All product names, descriptions, prices, size options, and photographic imagery are simulated concepts. This platform does not process payments, collect banking or payment-card information, or fulfill physical merchandise orders.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© 2026 VYBE. Academic Project Storefront Prototype.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/shipping-returns" className="hover:underline">
              Policies
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
