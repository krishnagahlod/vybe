import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about VYBE activewear sizing, fabric architecture, Indian climate performance, shipping timelines, and our ENT 625 academic prototype.",
};

const FAQ_SECTIONS = [
  {
    category: "Sizing & Fit",
    items: [
      {
        q: "How do VYBE activewear pieces fit?",
        a: "Our silhouettes are tailored true-to-size based on standard Indian activewear grading (XS through XL). Bottoms feature an ergonomic contoured high-rise waistband that stays secure without pinching or rolling down during movement.",
      },
      {
        q: "What if I am between two sizes?",
        a: "If you prefer athletic, high-support compression for high-tempo workouts or running, we recommend sizing down. If you prefer relaxed, all-day comfort or gentle yoga flow, choose the larger size. You can also use our interactive 'Fit Finder' tool on every product page.",
      },
      {
        q: "How does the Fit Finder tool work?",
        a: "The Fit Finder on our product detail pages lets you enter your bust, natural waist, and fullest hip measurements in either inches or centimeters. You can select your preferred fit feeling (Snug, True to Size, or Relaxed) and get an instant recommendation tailored to that style.",
      },
    ],
  },
  {
    category: "Fabrics & Climate",
    items: [
      {
        q: "Are the Flow and Studio Sculpt leggings see-through?",
        a: "They are designed not to be. VYBE leggings and shorts use a dense, double-knit fabric (78% recycled polyamide, 22% elastane) chosen for coverage through bends and squats. As this is a concept collection, these are design intentions rather than lab-tested results.",
      },
      {
        q: "How does VYBE fabric perform in tropical Indian climates?",
        a: "We've chosen lightweight, breathable knits with the warm, humid summers of Mumbai, Delhi, Pune and Bangalore in mind. Lighter tops and shorts are a good pick for the hottest months.",
      },
      {
        q: "How should I wash and care for my VYBE garments?",
        a: "Machine wash cold at 30°C on a gentle cycle with like colors. Line dry in the shade. Avoid fabric softeners, bleach, and high-heat tumble drying, as extreme heat can degrade bonded elastic trims over time.",
      },
    ],
  },
  {
    category: "Shipping & Campaign Cities",
    items: [
      {
        q: "Which cities are included in the delivery network?",
        a: "Our initial campaign prototype is focused on four major Indian metropolitan hubs: Mumbai, Pune, Delhi NCR, and Bangalore.",
      },
      {
        q: "What are the estimated delivery times?",
        a: "Express transit averages 24–48 hours for deliveries within Mumbai and Pune, and 2–3 business days for Delhi NCR and Bangalore.",
      },
      {
        q: "How much is shipping?",
        a: "We offer complimentary express shipping on all orders over ₹1,500. For orders below ₹1,500, a flat standard delivery fee of ₹99 applies across all campaign cities.",
      },
    ],
  },
  {
    category: "Exchanges & Orders",
    items: [
      {
        q: "Can I exchange an item if the size doesn't fit?",
        a: "Yes. We offer a simulated 14-day doorstep size exchange policy. In a live production setting, a courier pickup is scheduled to swap your piece for the correct size at no additional cost.",
      },
      {
        q: "How can I track my order status?",
        a: "You can visit our dedicated Track Order page and enter your demo reference number (e.g., VYBE-DEMO-XXXXXX) to view simulated fulfillment milestones.",
      },
    ],
  },
  {
    category: "Academic Project Transparency",
    items: [
      {
        q: "Is VYBE a real commercial brand?",
        a: "VYBE is a prototype created exclusively for academic research in digital marketing (ENT 625 — Phase 2). It demonstrates an end-to-end modern D2C customer journey, mobile performance, and paid-traffic measurement.",
      },
      {
        q: "Will my card or payment account be charged?",
        a: "No. Absolutely no financial transactions, payment gateways, or credit card forms exist on this website. All checkout flows are strictly simulated demonstrations for academic evaluation.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)] mb-3">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                Help &amp; FAQ
              </li>
            </ol>
          </nav>

          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve-ink)] block mb-2 font-mono">
            Support Center
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our activewear silhouettes, fabric care, campaign cities, and our academic research prototype.
          </p>
        </div>

        {/* Quick Links Card */}
        <div className="mb-12 p-5 rounded-md bg-[var(--vybe-peach)]/30 border border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
              Looking for Exact Measurements?
            </h2>
            <p className="text-xs text-[var(--color-muted)] mt-0.5">
              Explore our comprehensive size chart and international conversion guide.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/size-guide"
              className="px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors shadow-xs"
            >
              View Size Guide &rarr;
            </Link>
            <Link
              href="/track-order"
              className="px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 transition-colors"
            >
              Track Order
            </Link>
          </div>
        </div>

        {/* FAQ Categories & Accordions */}
        <div className="space-y-10">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category} className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--vybe-rose)]" />
                {section.category}
              </h2>

              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-[var(--color-border)] rounded-md p-4 sm:p-5 bg-[var(--color-surface)] transition-colors hover:border-[var(--vybe-mauve-ink)]"
                  >
                    <summary className="font-semibold text-xs sm:text-sm text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="transition-transform group-open:rotate-180 text-[var(--color-muted)] shrink-0 text-base">
                        &darr;
                      </span>
                    </summary>
                    <div className="pt-3 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]/60 mt-3">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 p-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-3">
          <h3 className="font-serif text-xl font-medium text-[var(--color-text)]">
            Still have questions?
          </h3>
          <p className="text-xs text-[var(--color-muted)] max-w-md mx-auto">
            Our team is here to help with sizing questions, styling recommendations, or details on our academic project.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors shadow-xs"
            >
              Get in Touch with VYBE &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
