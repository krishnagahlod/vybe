import Link from "next/link";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All pieces", href: "/shop" },
      { label: "Leggings", href: "/shop?category=leggings" },
      { label: "Sports Bras", href: "/shop?category=sports-bras" },
      { label: "Tops", href: "/shop?category=tops" },
      { label: "Shorts", href: "/shop?category=shorts" },
      { label: "Matching Sets", href: "/shop?category=sets" },
      { label: "Layers", href: "/shop?category=layers" },
      { label: "Court", href: "/shop?category=court" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Size & fit guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Track an order", href: "/track-order" },
      { label: "Delivery & exchanges", href: "/shipping-returns" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "VYBE",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Brand identity", href: "/about#brand-identity" },
      { label: "About the project", href: "/about#project" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--vybe-sage)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[var(--color-text)]/15">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-serif text-4xl sm:text-5xl leading-[1.08]">
              Made for your <span className="italic">kind</span> of movement.
            </p>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] pb-1 border-b border-current hover:text-[var(--vybe-mauve-ink)] transition-colors"
            >
              <span>Shop the collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">{col.title}</h3>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[var(--color-text)]/75 hover:text-[var(--color-text)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <p className="lg:col-span-4 font-serif text-5xl sm:text-6xl font-medium tracking-[0.35em] leading-none">
            VYBE
          </p>
          <p className="lg:col-span-8 text-xs text-[var(--color-text)]/70 leading-relaxed lg:text-right">
            VYBE is a concept brand and storefront created for ENT 625 Digital Marketing. Products, prices and imagery
            are concepts; no payments are taken, no card details are collected, and no orders are fulfilled.
            <br />
            &copy; 2026 VYBE
          </p>
        </div>
      </div>
    </footer>
  );
}
