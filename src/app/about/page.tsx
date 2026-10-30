import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why we started VYBE: designer athleisure for real Indian bodies, with support, no lines and breathable fabric built into every piece.",
};

// What she told us, answered by what we built into the piece and how that feels
const BUILT_IN = [
  "A bra built into the tank, so you stop pulling your top down.",
  "Seamless underwear built into the leggings, so you stop checking the mirror.",
  "Breathable fabric made for our heat, so you stay for the last song.",
  "Liner shorts built into every skort, so you lunge for the shot.",
  "A waistband that stays put, so there's no hitching between sets.",
  "Cut for Indian bodies, in three leg lengths, so you take the front row.",
];

const wrap = "max-w-2xl mx-auto px-5 sm:px-6";
const h2 = "text-xl sm:text-2xl font-semibold text-[var(--color-text)]";
const body = "text-base sm:text-lg text-[var(--color-muted)] leading-relaxed";

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Hero: the only big title on the page */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pt-16 sm:pt-28 pb-14 sm:pb-20">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">Our story</p>
        <h1
          className="animate-fade-up mt-5 font-headline text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] text-[var(--color-text)] leading-[1.05]"
          style={{ animationDelay: "100ms" }}
        >
          The best hour of your day deserves the best thing in your wardrobe.
        </h1>
        <p className="animate-fade-up mt-6 text-lg text-[var(--vybe-cherry-ink)] font-semibold" style={{ animationDelay: "200ms" }}>
          VYBE. Made for your kind of movement.
        </p>
      </section>

      {/* Why VYBE exists, in one picture and one line */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center reveal">
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[var(--vybe-petal)]">
          <Image
            src="/images/products/new/side-stripe-track-pants-1.jpg"
            alt="A woman sitting on the floor in VYBE navy side-stripe track pants and a blush sports bra"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
        </div>
        <p className="text-2xl sm:text-3xl font-semibold text-[var(--color-text)] leading-snug">
          We wanted to bring designer athleisure to real Indian bodies. So we built VYBE.
        </p>
      </section>

      <div className="mt-20 sm:mt-28 space-y-16 sm:space-y-20">
        <section className={`${wrap} space-y-4 reveal`}>
          <h2 className={h2}>We grew up saving the good things.</h2>
          <p className={body}>
            The good crockery, for guests. The good saree, for a wedding. The good perfume, for a day that really matters.
          </p>
          <p className={body}>Somewhere along the way, we started saving ourselves for later too.</p>
        </section>

        <section className={`${wrap} space-y-4 reveal`}>
          <h2 className={h2}>But one hour is yours.</h2>
          <p className={body}>
            The 6 a.m. class. The Sunday badminton game. The dance practice you&apos;d never miss. It&apos;s the one hour that
            asks nothing of you except to show up as yourself.
          </p>
          <p className={body}>That hour matters. Dress like it does.</p>
        </section>

        <section className={`${wrap} space-y-4 reveal`}>
          <h2 className={h2}>Why we started VYBE.</h2>
          <p className={body}>
            We&apos;re women who dance, play and train, and for years we dressed for it in whatever was left over.
            Comfortable, but dull. Beautiful, but impossible to move in. Supportive, but too thick for an Indian summer.
            Every brand gave us half of what we wanted.
          </p>
          <p className={body}>So we stopped settling and built the whole thing.</p>
        </section>

        <section className={`${wrap} space-y-4 reveal`}>
          <h2 className={h2}>How we built it.</h2>
          {/* shortcut: the brief's "[1,000+]" is unconfirmed, so no number is shown; add it once the survey count is final */}
          <p className={body}>
            We asked women across India how activewear made them feel. The answers weren&apos;t about fabric. They were
            about pulling a top down, standing at the back of class, and never once feeling dressed for themselves.
          </p>
          <p className={body}>So we built the answer into every piece:</p>
          <ul className="pt-2 space-y-3">
            {BUILT_IN.map((line) => (
              <li key={line} className="flex gap-3 text-base sm:text-lg text-[var(--color-text)] leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--vybe-cherry)] shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section className={`${wrap} space-y-4 reveal`}>
          <h2 className={h2}>What it feels like.</h2>
          <p className={body}>
            Six quick questions find your outfit and your leg length. If the size isn&apos;t right, you exchange it free within
            14 days. And when you put it on, there&apos;s nothing left to fix: no tugging, no checking, no second layer.
          </p>
          <p className={body}>
            Sweat isn&apos;t something to hide. It&apos;s proof you showed up for yourself, again. VYBE is made to look its best
            right then: mid-set, mid-song, mid-rally.
          </p>
        </section>

        <section className={`${wrap} space-y-5 reveal`}>
          <h2 className={h2}>Stop saving yourself for later.</h2>
          <p className={body}>VYBE. Made for your kind of movement.</p>
          <Link
            href="/#style-quiz"
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
          >
            Find your VYBE &rarr;
          </Link>
        </section>

        {/* Academic project context */}
        <section id="project" className={`${wrap} scroll-mt-24 pt-12 border-t border-[var(--color-border)] space-y-4`}>
          <h2 className={h2}>About the project</h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            VYBE is a concept brand and storefront created for a Phase 2 digital marketing experiment for ENT 625. The site is
            the destination for a small paid-traffic test across Mumbai, Pune, Delhi and Bangalore.
          </p>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            Products, prices and imagery are concepts. No payments are taken, no card details are collected, and no orders are
            fulfilled. Product photos belong to their respective brands and are used for educational purposes only.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
            >
              Shop the collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
