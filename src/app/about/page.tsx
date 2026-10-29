import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "VYBE is fashion-led athleisure for Indian women: built-in support, no lines, cut for Indian bodies, every piece under ₹3,000.",
};

const BUILT_IN = [
  "Support built in, so you can move freely",
  "Seamless underwear built in, so you stop checking the mirror",
  "Breathable fabric, made for our heat",
  "Cut for Indian bodies, not adjusted for them",
  "Prints and colours with real personality",
  "Every piece under ₹3,000",
];

const HERO_IMAGES = [
  { src: "/images/products/new/built-in-bra-tank-2.jpg", alt: "A woman in the cream Built-In Bra Tank and maroon track pants" },
  { src: "/images/products/new/strappy-back-sports-bra-1.jpg", alt: "A woman in the blush Strappy-Back Sports Bra and navy track pants, wearing a cap" },
  { src: "/images/products/new/pinstripe-half-zip-1.jpg", alt: "A woman in the navy Pinstripe Half-Zip with a pink headband" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]";
const wrap = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const h2 = "font-headline text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] leading-[1.02] text-[var(--color-text)]";
const body = "text-base sm:text-lg text-[var(--color-muted)] leading-relaxed";

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Hero */}
      <section className={`${wrap} pt-14 sm:pt-20 space-y-10`}>
        <div className="max-w-4xl space-y-5 animate-fade-up">
          <p className={eyebrow}>Our story</p>
          <h1 className="font-headline text-4xl sm:text-7xl font-extrabold tracking-[-0.02em] text-[var(--color-text)] leading-[1.02]">
            The best hour of your day deserves the best thing in your wardrobe.
          </h1>
          <p className="font-headline font-bold text-lg sm:text-xl text-[var(--vybe-cherry-ink)]">VYBE. Made for your kind of movement.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {HERO_IMAGES.map((img, i) => (
            <div key={img.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--vybe-petal)]">
              <Image src={img.src} alt={img.alt} fill priority={i === 0} sizes="(max-width: 1280px) 33vw, 400px" className="object-cover object-top" />
            </div>
          ))}
        </div>
      </section>

      {/* The truth */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="max-w-3xl space-y-6">
          <h2 className={h2}>We grew up saving the good things.</h2>
          <p className={body}>
            <span className="block">The good crockery, for guests.</span>
            <span className="block">The good saree, for a wedding.</span>
            <span className="block">The good perfume, for a day that really matters.</span>
          </p>
          <p className={body}>Somewhere along the way, we started saving ourselves for later too.</p>
        </div>
      </section>

      {/* The turn */}
      <section className="mt-20 sm:mt-28 bg-[var(--vybe-pastel-pink)]">
        <div className={`${wrap} py-16 sm:py-24`}>
          <div className="max-w-3xl space-y-6">
            <h2 className={h2}>But one hour is yours.</h2>
            <p className="text-base sm:text-lg text-[var(--vybe-ink-soft)] leading-relaxed">
              The 6 a.m. class. The Sunday badminton game. The dance practice you&apos;d never miss.
            </p>
            <p className="text-base sm:text-lg text-[var(--vybe-ink-soft)] leading-relaxed">
              It&apos;s the one hour that asks nothing of you except to show up as yourself.
            </p>
            <p className="font-headline font-bold text-2xl sm:text-3xl text-[var(--color-text)]">That hour matters. Dress like it does.</p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className={`${wrap} pt-20 sm:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--vybe-petal)]">
          <Image
            src="/images/products/new/side-stripe-track-pants-1.jpg"
            alt="A woman sitting on the floor in navy side-stripe track pants and a blush sports bra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className={eyebrow}>Our story</p>
          <h2 className={h2}>Why we started VYBE.</h2>
          <p className={body}>
            We&apos;re women who dance, play and train, and for years we dressed for it in whatever was left over.
          </p>
          <p className={body}>
            Comfortable, but dull. Beautiful, but unaffordable. Supportive, but too thick for an Indian summer. Every brand
            gave us half of what we wanted.
          </p>
          <p className="font-headline font-bold text-xl sm:text-2xl text-[var(--color-text)]">So we stopped settling and built the whole thing.</p>
        </div>
      </section>

      {/* Built with you */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="max-w-3xl space-y-5">
          <p className={eyebrow}>Built with you</p>
          {/* shortcut: the brief's "[1,000+]" is unconfirmed, so no number is shown; add it once the survey count is final */}
          <h2 className={h2}>Shaped by women across India.</h2>
          <p className={body}>
            We asked how activewear made them feel. The answers weren&apos;t about fabric. They were about pulling a top
            down, standing at the back of class, and never once feeling dressed for themselves.
          </p>
          <p className={body}>Every VYBE piece is our reply:</p>
        </div>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {BUILT_IN.map((line) => (
            <li
              key={line}
              className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] font-headline font-bold text-lg text-[var(--color-text)]"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* The pride */}
      <section className={`${wrap} pt-20 sm:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
        <div className="space-y-5">
          <h2 className={h2}>Wear it. Sweat in it. Be seen in it.</h2>
          <p className={body}>Sweat isn&apos;t something to hide. It&apos;s proof you showed up for yourself, again.</p>
          <p className={body}>VYBE is made to look its best right then: mid-set, mid-song, mid-rally.</p>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--vybe-petal)]">
          <Image
            src="/images/products/new/sunshine-tank-set-1.jpg"
            alt="A woman in the yellow Sunshine Tank Set against an orange wall"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Close */}
      <section className={`${wrap} pt-20 sm:pt-28`}>
        <div className="rounded-3xl bg-[var(--vybe-ink)] text-white px-6 py-16 sm:py-24 text-center space-y-5">
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
