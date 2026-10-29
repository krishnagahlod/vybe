import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "VYBE is fashion-led athleisure for Indian women: built-in support, no lines, cut for Indian bodies, every piece under ₹3,000.",
};

// shortcut: placeholder story in the new tone, replace with the team's About Us copy when it arrives
const PRINCIPLES = [
  {
    title: "Fit, built in",
    text: "Tanks with bras inside, leggings with a seamless liner, skorts with shorts underneath. Fewer layers, nothing to adjust.",
  },
  {
    title: "Cut for Indian bodies",
    text: "A higher back rise, three leg lengths and sizes XS to 5XL. No more hitching, rolling or hemming.",
  },
  {
    title: "Designer looks under ₹3,000",
    text: "Bold prints and colour pops alongside the pastels, priced so your reward to yourself doesn't need a budget meeting.",
  },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]";

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 space-y-12">
        <div className="max-w-3xl space-y-5 animate-fade-up">
          <p className={eyebrow}>Our story</p>
          <h1 className="font-headline text-5xl sm:text-7xl font-semibold tracking-tight text-[var(--color-text)] leading-[1.02]">
            Made for your kind of movement.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl">
            VYBE is activewear for the best hour of your day: built-in support, no lines, cut for Indian bodies, in prints
            you actually want to be seen in.
          </p>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[var(--vybe-alabaster)]">
          <Image
            src="/images/lifestyle/lifestyle-court-wide.jpg"
            alt="Two friends laughing as they walk off a tennis court together, rackets in hand"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <p className={eyebrow}>Why VYBE</p>
          <p className="mt-4 font-headline text-4xl sm:text-5xl text-[var(--color-text)] leading-[1.1] font-semibold">
            Stop saving yourself for later.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
          <p>
            Your workout is the one hour that&apos;s just yours. The 6 a.m. dance class, Sunday badminton, the gym with
            the girls, coffee straight after.
          </p>
          <p>
            Most activewear makes you choose: plain black basics that fit, or fun pieces that ride up, show lines and
            need a second layer. We built VYBE so you don&apos;t have to choose.
          </p>
          <p>
            Support is built into the piece, the fit is cut for Indian bodies, the fabric breathes in Indian heat, and
            every piece costs under ₹3,000.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="border-t border-[var(--color-text)]/15 pt-6 space-y-3">
              <span className="font-semibold text-lg text-[var(--vybe-mauve-ink)]">0{i + 1}</span>
              <h2 className="font-headline text-2xl text-[var(--color-text)] font-semibold">{p.title}</h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Academic project context */}
      <section id="project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-[var(--color-border)] pt-12">
          <div className="lg:col-span-5 space-y-3">
            <p className={eyebrow}>About the project</p>
            <h2 className="font-headline text-3xl sm:text-4xl text-[var(--color-text)] font-semibold">
              A concept brand for ENT 625
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            <p>
              VYBE is a concept brand and storefront created for a Phase 2 digital marketing experiment. The site is
              the destination for a small paid-traffic test across Mumbai, Pune, Delhi and Bangalore.
            </p>
            <p>
              Products, prices and imagery are concepts. No payments are taken, no card details are collected, and no
              orders are fulfilled.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
              >
                Shop the collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
