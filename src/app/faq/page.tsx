import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on VYBE sizing, fabric and care, delivery, exchanges, and the ENT 625 concept store.",
};

const FAQ_SECTIONS = [
  {
    category: "Sizing & fit",
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
    category: "Fabric & care",
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
    category: "Delivery",
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
    category: "Exchanges & orders",
    items: [
      {
        q: "Can I exchange an item if the size doesn't fit?",
        a: "Yes. Size exchanges are free within 14 days: a courier collects your piece from your door and delivers the right size.",
      },
      {
        q: "How can I track my order status?",
        a: "You can visit our dedicated Track Order page and enter your demo reference number (e.g., VYBE-DEMO-XXXXXX) to view simulated fulfillment milestones.",
      },
    ],
  },
  {
    category: "About VYBE",
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

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FAQPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Intro & section index */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 space-y-8">
            <div className="space-y-5 animate-fade-up">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">Help</p>
              <h1 className="font-headline text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Questions, answered.
              </h1>
              <p className="text-base text-[var(--color-muted)] leading-relaxed">
                Fit, fabric, delivery and exchanges. Can&apos;t find what you need?{" "}
                <Link href="/contact" className="text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve-ink)]">
                  Get in touch
                </Link>
                .
              </p>
            </div>
            <nav aria-label="FAQ sections" className="hidden lg:block">
              <ul className="space-y-2 text-sm">
                {FAQ_SECTIONS.map((section) => (
                  <li key={section.category}>
                    <a
                      href={`#${slug(section.category)}`}
                      className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {section.category}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <Link href="/size-guide" className="text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve-ink)]">
                    Size &amp; fit guide &rarr;
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="lg:col-span-8 space-y-14">
          {FAQ_SECTIONS.map((section) => (
            <section key={section.category} id={slug(section.category)} className="scroll-mt-28">
              <h2 className="font-headline text-3xl text-[var(--color-text)] mb-4 font-semibold">{section.category}</h2>
              <div className="border-t border-[var(--color-border)]">
                {section.items.map((item) => (
                  <details key={item.q} className="group border-b border-[var(--color-border)]">
                    <summary className="py-5 text-base text-[var(--color-text)] cursor-pointer list-none flex items-start justify-between gap-6 hover:text-[var(--vybe-mauve-ink)] transition-colors">
                      <span>{item.q}</span>
                      <span
                        className="text-xl leading-none font-light text-[var(--color-muted)] transition-transform duration-300 group-open:rotate-45 shrink-0"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-6 pr-10 text-sm text-[var(--color-muted)] leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
