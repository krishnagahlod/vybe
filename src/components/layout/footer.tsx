import Link from "next/link";
import { COLLECTIONS, INSTAGRAM_HANDLE, INSTAGRAM_URL, shopHref } from "@/lib/catalog";
import { InstagramIcon } from "@/components/ui/icons";
import { NewsletterForm } from "./newsletter-form";

const COLUMNS = [
  {
    title: "Shop",
    links: [{ label: "All pieces", href: "/shop" }, ...COLLECTIONS.map((c) => ({ label: c.label, href: shopHref({ category: c.id }) }))],
  },
  {
    title: "Help",
    links: [
      { label: "Size & length guide", href: "/size-guide" },
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
      { label: "About the project", href: "/about#project" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const heading = "text-[11px] font-semibold uppercase tracking-[0.25em] mb-5";

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--vybe-alabaster)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        {/* Sign up and contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[var(--color-text)]/15">
          <div className="lg:col-span-6 space-y-5">
            <h2 className={heading}>Sign up and save</h2>
            <p className="font-headline text-3xl sm:text-4xl leading-[1.12] max-w-md font-semibold">
              Get first access to new prints.
            </p>
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-5">
            <h2 className={heading}>Reach us at</h2>
            <a
              href={INSTAGRAM_URL}
              className="group inline-flex items-center gap-3 font-headline text-2xl sm:text-3xl hover:text-[var(--vybe-mauve-ink)] transition-colors font-semibold"
            >
              <InstagramIcon className="w-6 h-6" />
              <span>@{INSTAGRAM_HANDLE}</span>
            </a>
            <p className="text-sm text-[var(--color-text)]/75 leading-relaxed max-w-sm">
              Questions about fit, fabric or the project? Send us a DM on Instagram or use the{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-[var(--color-text)]">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className={heading}>{col.title}</h3>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--color-text)]/75 hover:text-[var(--color-text)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h3 className={heading}>Made for you</h3>
            <p className="text-sm text-[var(--color-text)]/75 leading-relaxed">
              Built-in support, no lines, cut for Indian bodies in XS to 5XL. Every piece under ₹3,000.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--color-text)]/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <p className="lg:col-span-4 font-headline text-5xl sm:text-6xl font-bold tracking-[0.16em] leading-none">VYBE</p>
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
