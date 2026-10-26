import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Returns Information | VYBE",
  description:
    "Review concept shipping details and trial policies for VYBE activewear across Mumbai, Pune, Delhi, and Bangalore for the ENT 625 academic project.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)]">
            <ol className="flex items-center justify-center sm:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                Shipping &amp; Returns
              </li>
            </ol>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] block font-mono">
            Concept Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
            Delivery &amp; Trial Notice
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-light max-w-2xl">
            Information regarding simulated delivery timelines and concept trial return guidelines for the VYBE activewear prototype.
          </p>
        </div>

        {/* Academic Prototype Notice */}
        <div className="p-6 rounded-2xl bg-[var(--vybe-peach)]/35 border border-[var(--color-border)] text-xs text-[var(--color-text)] leading-relaxed space-y-2">
          <p className="font-semibold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--vybe-mauve-ink)]" />
            Academic Evaluation Disclaimer
          </p>
          <p>
            The timelines and policies described below represent the <strong>conceptual customer experience</strong> envisioned for the VYBE activewear brand under ENT 625. As this storefront is an academic simulation, <strong>no physical items are shipped and no actual returns can be initiated</strong>.
          </p>
        </div>

        {/* Policies Content */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-8 text-sm text-[var(--color-muted)] leading-relaxed">
          {/* Section 1: Campaign Delivery Focus */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              1. Simulated Delivery Destinations
            </h2>
            <p>
              Our initial digital marketing rollout focuses on activewear enthusiasts across four primary metropolitan centers in India:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--vybe-sage)]/25 border border-[var(--vybe-sage)]/50">
                <h3 className="font-semibold text-xs text-[var(--color-text)] uppercase mb-1">
                  Mumbai &amp; Pune
                </h3>
                <p className="text-xs">
                  Simulated 2-3 business day standard delivery. Complimentary test shipping on all bag sizes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--vybe-peach)]/25 border border-[var(--vybe-peach)]/50">
                <h3 className="font-semibold text-xs text-[var(--color-text)] uppercase mb-1">
                  Delhi &amp; Bangalore
                </h3>
                <p className="text-xs">
                  Simulated 3-4 business day standard delivery. Complimentary test shipping on all bag sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Conceptual Trial Policy */}
          <section className="space-y-3 pt-6 border-t border-[var(--color-border)]">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              2. Simulated 30-Day Movement Trial
            </h2>
            <p>
              In our brand model, activewear should be tested in real movement. Our concept policy proposes a 30-day trial period where customers may wear their leggings, bras, or tops during workouts, washes, and daily wear to ensure the fit and fabric suit their personal rhythm.
            </p>
            <p className="text-xs text-[var(--color-muted)] italic">
              Note: Because this storefront is an educational prototype, simulated demo orders cannot be returned or refunded.
            </p>
          </section>

          {/* Section 3: Safe Packaging Concept */}
          <section className="space-y-3 pt-6 border-t border-[var(--color-border)]">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              3. Packaging &amp; Environmental Responsibility
            </h2>
            <p>
              The envisioned VYBE logistics model specifies minimal, plastic-free paper packaging and recyclable shipping mailers to reduce waste across transit hubs.
            </p>
          </section>
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors underline underline-offset-4"
          >
            &larr; Return to Shopping Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
