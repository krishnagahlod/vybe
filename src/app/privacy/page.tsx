import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Prototype Policy | VYBE",
  description:
    "Information regarding the academic prototype nature of VYBE, client-side localStorage usage, and analytics privacy compliance for ENT 625.",
};

export default function PrivacyPage() {
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
                Privacy &amp; Prototype Policy
              </li>
            </ol>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] block font-mono">
            Privacy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
            How we handle your data
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-light max-w-2xl">
            This notice outlines how the VYBE academic prototype operates, handles client-side data, and adheres to privacy standards during marketing evaluation.
          </p>
        </div>

        {/* Academic Project Status Disclaimer */}
        <div className="p-6 rounded-md bg-[var(--vybe-peach)]/35 border border-[var(--color-border)] text-xs text-[var(--color-text)] leading-relaxed space-y-2">
          <p className="font-semibold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--vybe-mauve-ink)]" />
            Notice on Prototype Language
          </p>
          <p>
            VYBE is a prototype created exclusively for academic research in digital marketing (ENT 625). This document communicates our prototype data handling in plain language and does not represent formal legal counsel.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="p-8 sm:p-10 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-8 text-sm text-[var(--color-muted)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              1. Non-Collection of Financial Information
            </h2>
            <p>
              VYBE has no connection to banking gateways, merchant accounts, or payment processing services. <strong>We will never ask you for credit card numbers, debit card details, CVVs, expiration dates, UPI PINs, or net banking passwords.</strong> The demo checkout is purely a front-end simulation.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[var(--color-border)]">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              2. Local Storage Usage (Your Shopping Bag)
            </h2>
            <p>
              Our storefront utilizes your browser&apos;s native <code>localStorage</code> feature strictly to remember which concept products you have added to your bag. This data remains on your personal device and is not saved to any external database or cloud storage. You can clear this anytime by emptying your bag or clearing your browser cache.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[var(--color-border)]">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              3. Analytics &amp; Campaign Attribution
            </h2>
            <p>
              As part of our digital marketing experiment across Mumbai, Pune, Delhi, and Bangalore, the website may include Google Analytics 4, Google Tag Manager, or Meta Pixel measurement scripts.
            </p>
            <p>
              These scripts track anonymous interaction milestones such as page visits, product views, and simulated cart additions. <strong>No personally identifiable information (such as your full name, email address, or contact messages) is ever passed to advertising or analytics platforms.</strong>
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[var(--color-border)]">
            <h2 className="font-serif text-xl font-medium text-[var(--color-text)]">
              4. Simulated Orders &amp; Fulfillment
            </h2>
            <p>
              Completing the mock checkout produces a simulated order reference purely to verify that the front-end user experience works seamlessly. No merchandise will be packed or shipped, and no contract of sale is created.
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
