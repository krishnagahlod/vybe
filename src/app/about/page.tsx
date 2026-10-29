import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why we started VYBE: what women who dance, play and train told us about their activewear, and how we built the fix into every piece.",
};

// What we kept hearing, and the fix built into the garment (functional) plus how it feels (emotional)
const PROBLEMS = [
  {
    heard: "Pulling a top down between every move.",
    fix: "A bra built into the tank, with removable cups.",
    feel: "Arms up. Nothing to fix.",
  },
  {
    heard: "Lines showing through. Leggings going sheer when you bend.",
    fix: "Seamless underwear built into the leggings, in a fabric you can't see through.",
    feel: "You stop checking the mirror.",
  },
  {
    heard: "Too thick, too hot for an Indian summer.",
    fix: "Breathable fabric made for a 35° Mumbai afternoon.",
    feel: "You stay for the last song.",
  },
  {
    heard: "Shorts riding up mid-rally.",
    fix: "Liner shorts built into every skort, with a pocket for your phone.",
    feel: "You lunge for the shot.",
  },
  {
    heard: "Waistbands rolling down on every squat.",
    fix: "A wide, flat high-rise band that stays where you put it.",
    feel: "No hitching between sets.",
  },
  {
    heard: "Clothes cut for someone else's body.",
    fix: "Cut for Indian bodies, with a higher back rise and three leg lengths.",
    feel: "Front row, not the back of class.",
  },
];

const JOURNEY = [
  {
    step: "Choosing",
    functional: "Six quick questions pick your outfit and your leg length. The Fit Finder picks your size.",
    emotional: "It feels like a friend who knows how you move, not a wall of products.",
  },
  {
    step: "Arriving",
    functional: "Free size exchange within 14 days. We collect the old one and send the new one.",
    emotional: "No guessing, no risk in trying the size you really are.",
  },
  {
    step: "Wearing",
    functional: "Support, liner and breathable fabric are already inside the piece. One layer, nothing to add.",
    emotional: "You stop adjusting and start moving. That hour is finally yours.",
  },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]";
const wrap = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const h2 = "font-headline text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] leading-[1.02] text-[var(--color-text)]";
const body = "text-base sm:text-lg text-[var(--color-muted)] leading-relaxed";

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Hero */}
      <section className={`${wrap} pt-16 sm:pt-28 pb-16 sm:pb-24`}>
        <p className={`${eyebrow} animate-fade-up`}>Our story</p>
        <h1
          className="animate-fade-up mt-5 max-w-5xl font-headline text-4xl sm:text-7xl font-extrabold tracking-[-0.02em] text-[var(--color-text)] leading-[1.02]"
          style={{ animationDelay: "100ms" }}
        >
          The best hour of your day deserves the best thing in your wardrobe.
        </h1>
        <p className="animate-fade-up mt-6 font-headline font-bold text-lg sm:text-xl text-[var(--vybe-cherry-ink)]" style={{ animationDelay: "200ms" }}>
          VYBE. Made for your kind of movement.
        </p>
      </section>

      {/* The truth */}
      <section className="bg-[var(--vybe-petal)]">
        <div className={`${wrap} py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16`}>
          <h2 className={`${h2} reveal`}>We grew up saving the good things.</h2>
          <div className="space-y-6 reveal">
            <p className="font-headline font-bold text-xl sm:text-2xl text-[var(--color-text)] leading-snug">
              <span className="block">The good crockery, for guests.</span>
              <span className="block">The good saree, for a wedding.</span>
              <span className="block">The good perfume, for a day that really matters.</span>
            </p>
            <p className={body}>Somewhere along the way, we started saving ourselves for later too.</p>
          </div>
        </div>
      </section>

      {/* The turn */}
      <section className={`${wrap} py-16 sm:py-24`}>
        <div className="max-w-3xl space-y-6 reveal">
          <h2 className={h2}>But one hour is yours.</h2>
          <p className={body}>The 6 a.m. class. The Sunday badminton game. The dance practice you&apos;d never miss.</p>
          <p className={body}>It&apos;s the one hour that asks nothing of you except to show up as yourself.</p>
          <p className="font-headline font-bold text-2xl sm:text-3xl text-[var(--vybe-cherry-ink)]">That hour matters. Dress like it does.</p>
        </div>
      </section>

      {/* Why we started */}
      <section className="bg-[var(--vybe-ink)] text-white">
        <div className={`${wrap} py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16`}>
          <div className="space-y-4 reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-pastel-pink)]">Why we started</p>
            <h2 className="font-headline text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] leading-[1.02]">
              Every brand gave us half of what we wanted.
            </h2>
          </div>
          <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed reveal">
            <p>We&apos;re women who dance, play and train, and for years we dressed for it in whatever was left over.</p>
            <p className="font-headline font-bold text-xl sm:text-2xl text-white leading-snug">
              Comfortable, but dull. Beautiful, but impossible to move in. Supportive, but too thick for an Indian summer.
            </p>
            <p>So we stopped settling and built the whole thing.</p>
          </div>
        </div>
      </section>

      {/* Problem discovery → what we built */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="max-w-3xl space-y-5 reveal">
          <p className={eyebrow}>What we heard</p>
          {/* shortcut: the brief's "[1,000+]" is unconfirmed, so no number is shown; add it once the survey count is final */}
          <h2 className={h2}>We asked women across India how activewear made them feel.</h2>
          <p className={body}>
            The answers weren&apos;t about fabric. They were about pulling a top down, standing at the back of class, and never
            once feeling dressed for themselves. So we wrote down every one, and built the fix into the piece itself.
          </p>
        </div>

        <div className="mt-12 hidden md:grid grid-cols-12 gap-6 pb-3 border-b border-[var(--color-text)]/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span className="col-span-5">What she told us</span>
          <span className="col-span-4">What we built in</span>
          <span className="col-span-3">How it feels</span>
        </div>
        <ol className="mt-6 md:mt-0">
          {PROBLEMS.map((p, i) => (
            <li
              key={p.heard}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-7 border-b border-[var(--color-text)]/10 items-baseline"
            >
              <p className="md:col-span-5 flex gap-4 font-headline font-bold text-xl sm:text-2xl text-[var(--color-text)] leading-snug">
                <span className="text-[var(--vybe-cherry-ink)] tabular-nums">0{i + 1}</span>
                <span>{p.heard}</span>
              </p>
              <p className="md:col-span-4 pl-10 md:pl-0 text-base text-[var(--color-muted)] leading-relaxed">{p.fix}</p>
              <p className="md:col-span-3 pl-10 md:pl-0 text-base font-semibold text-[var(--vybe-ink-soft)]">{p.feel}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The experience of buying and wearing VYBE */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="max-w-3xl space-y-5 reveal">
          <p className={eyebrow}>When you buy VYBE</p>
          <h2 className={h2}>Made to feel right before it ever reaches you.</h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {JOURNEY.map((j, i) => (
            <li key={j.step} className="reveal p-7 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col gap-6">
              <p className="flex items-baseline justify-between">
                <span className="font-headline font-extrabold text-3xl text-[var(--color-text)]">{j.step}</span>
                <span className="font-headline font-bold text-[var(--vybe-cherry-ink)]">0{i + 1}</span>
              </p>
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">What happens</p>
                <p className="text-base text-[var(--color-text)] leading-relaxed">{j.functional}</p>
              </div>
              <div className="space-y-1.5 mt-auto pt-6 border-t border-[var(--color-border)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">How it feels</p>
                <p className="font-headline font-bold text-lg text-[var(--vybe-ink-soft)] leading-snug">{j.emotional}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The pride */}
      <section className="mt-20 sm:mt-28 bg-[var(--vybe-pastel-pink)]">
        <div className={`${wrap} py-16 sm:py-24 max-w-4xl text-center space-y-6 reveal`}>
          <h2 className={h2}>Wear it. Sweat in it. Be seen in it.</h2>
          <p className="text-base sm:text-lg text-[var(--vybe-ink-soft)] leading-relaxed">
            Sweat isn&apos;t something to hide. It&apos;s proof you showed up for yourself, again.
          </p>
          <p className="text-base sm:text-lg text-[var(--vybe-ink-soft)] leading-relaxed">
            VYBE is made to look its best right then: mid-set, mid-song, mid-rally.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="rounded-3xl bg-[var(--vybe-ink)] text-white px-6 py-16 sm:py-24 text-center space-y-5 reveal">
          <h2 className="font-headline text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] leading-[1.02]">Stop saving yourself for later.</h2>
          <p className="font-headline font-bold text-lg text-[var(--vybe-pastel-pink)]">VYBE. Made for your kind of movement.</p>
          <Link
            href="/#style-quiz"
            className="inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold bg-white text-[var(--vybe-ink)] hover:bg-[var(--vybe-pastel-pink)] transition-colors"
          >
            Find your VYBE &rarr;
          </Link>
        </div>
      </section>

      {/* Academic project context */}
      <section id="project" className={`${wrap} pt-20 sm:pt-28 scroll-mt-24`}>
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
              orders are fulfilled. Product photos belong to their respective brands and are used for educational
              purposes only.
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
