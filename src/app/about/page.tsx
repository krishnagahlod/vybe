import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "VYBE is a contemporary women's athleisure brand concept built around mindful movement, a gentle palette, and everyday rhythm.",
};

const PRINCIPLES = [
  {
    title: "A restorative palette",
    text: "Chalk, sage and aubergine, with soft peach and rose: colours that feel calm on the body and easy to combine.",
  },
  {
    title: "Freedom to move",
    text: "Close-fitting without pinching. Waistbands that stay put, seams that stay out of the way.",
  },
  {
    title: "Studio to street",
    text: "Pieces that look as considered at the café or on the commute as they do on the mat.",
  },
];

const PALETTE = [
  { name: "Warm Chalk", hex: "#F6F1EA", role: "Main background" },
  { name: "Motion Sage", hex: "#C8D5C8", role: "Signature green" },
  { name: "Deep Aubergine", hex: "#452B3A", role: "Logo, headings and text" },
];

const ACCENTS = [
  { name: "Pale Peach", hex: "#FFE5D9" },
  { name: "Soft Pink", hex: "#FFCAD4" },
  { name: "Rose", hex: "#F4ACB7" },
  { name: "Muted Mauve", hex: "#9D8189" },
];

const INKS = [
  { name: "Sage Ink", hex: "#3F5242", role: "Green text on light backgrounds" },
  { name: "Plum", hex: "#7A5866", role: "Accent text and hover" },
  { name: "Muted", hex: "#5F4F57", role: "Secondary text" },
  { name: "Rose Ink", hex: "#9A4B5A", role: "Alerts and saves" },
];

const VOICE = [
  { trait: "Warm, not saccharine", example: "“Cut for studio flows, gym sessions, and the walk home afterwards.”" },
  { trait: "Confident, not aggressive", example: "“Activewear that honours your pace, not someone else’s metrics.”" },
  { trait: "Practical, not technical", example: "“A wide, double-layer waistband that sits flat through forward folds.”" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]";

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 space-y-12">
        <div className="max-w-3xl space-y-5 animate-fade-up">
          <p className={eyebrow}>Our story</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal tracking-tight text-[var(--color-text)] leading-[1.02]">
            Made for your <span className="italic text-[var(--vybe-mauve-ink)]">kind</span> of movement.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl">
            VYBE is women&apos;s activewear for movement that feels restorative rather than punishing, and for days
            that don&apos;t stop when the class does.
          </p>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-md overflow-hidden bg-[var(--vybe-sage)]">
          <Image
            src="/images/lifestyle/hero-editorial-movement.jpg"
            alt="Woman holding a standing balance pose in sage VYBE activewear in a sunlit limestone studio"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover object-[45%_center]"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <p className={eyebrow}>Why VYBE</p>
          <p className="mt-4 font-serif text-4xl sm:text-5xl text-[var(--color-text)] leading-[1.1]">
            Movement belongs to <span className="italic">you.</span>
          </p>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
          <p>
            For years, activewear has been sold on intensity: punishment, transformation, and neon. We think movement
            can be gentler than that, and more personal.
          </p>
          <p>
            It might be a reformer class, an unhurried morning walk through Cubbon Park, a run along Marine Drive, or
            a quiet yoga sequence before work in Pune. VYBE is designed for all of it.
          </p>
          <p>
            So we make pieces that feel soft on the skin, sit close without pinching, and look just as right on the
            way home as they did in the studio.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="border-t border-[var(--color-text)]/15 pt-6 space-y-3">
              <span className="font-serif text-lg italic text-[var(--vybe-mauve-ink)]">0{i + 1}</span>
              <h2 className="font-serif text-2xl text-[var(--color-text)]">{p.title}</h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Brand identity */}
      <section id="brand-identity" className="mt-24 sm:mt-32 py-20 sm:py-28 bg-[var(--vybe-peach)]/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="max-w-2xl space-y-4">
            <p className={eyebrow}>Brand identity</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              The system behind VYBE
            </h2>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              One soft palette, two typefaces, and a voice that speaks to women as people who move, not projects to
              be fixed.
            </p>
          </div>

          {/* Palette */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]">Palette</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PALETTE.map((c) => (
                <li key={c.hex} className="space-y-3">
                  <div className="aspect-[4/3] sm:aspect-[3/4] rounded-md border border-black/10" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="font-serif text-2xl text-[var(--color-text)]">{c.name}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">{c.hex}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{c.role}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <p className="text-sm text-[var(--color-muted)]">Soft accents, used sparingly for highlights and colourways</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {ACCENTS.map((c) => (
                  <li key={c.hex} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                    <span className="w-6 h-6 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
                    {c.name} <span className="text-[var(--color-muted)]">{c.hex}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {INKS.map((c) => (
                <li key={c.hex} className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full shrink-0" style={{ backgroundColor: c.hex }} />
                  <span className="text-sm">
                    <span className="block text-[var(--color-text)]">
                      {c.name} <span className="text-[var(--color-muted)]">{c.hex}</span>
                    </span>
                    <span className="block text-[var(--color-muted)]">{c.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typography & wordmark */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 rounded-md bg-[var(--color-bg)] p-8 flex flex-col justify-between gap-10 min-h-64">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]">Wordmark</h3>
              <div className="space-y-3 text-center">
                <p className="font-serif text-6xl font-medium tracking-[0.35em] pl-[0.35em] text-[var(--color-text)]">VYBE</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
                  Made for your kind of movement
                </p>
              </div>
            </div>
            <div className="rounded-md bg-[var(--color-bg)] p-8 space-y-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]">Display</h3>
              <p className="font-serif text-8xl leading-none text-[var(--color-text)]">
                Aa<span className="italic text-[var(--vybe-mauve-ink)]">a</span>
              </p>
              <div>
                <p className="font-serif text-2xl text-[var(--color-text)]">Cormorant Garamond</p>
                <p className="text-sm text-[var(--color-muted)]">Headlines, product names and the wordmark</p>
              </div>
            </div>
            <div className="rounded-md bg-[var(--color-bg)] p-8 space-y-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]">Text</h3>
              <p className="text-8xl leading-none font-light text-[var(--color-text)]">Aa</p>
              <div>
                <p className="text-xl text-[var(--color-text)]">Plus Jakarta Sans</p>
                <p className="text-sm text-[var(--color-muted)]">Body copy, labels, buttons and navigation</p>
              </div>
            </div>
          </div>

          {/* Voice */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]">Tone of voice</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VOICE.map((v) => (
                <li key={v.trait} className="border-t border-[var(--color-text)]/15 pt-5 space-y-3">
                  <p className="font-serif text-2xl text-[var(--color-text)]">{v.trait}</p>
                  <p className="text-sm italic text-[var(--color-muted)] leading-relaxed">{v.example}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic project context */}
      <section id="project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-[var(--color-border)] pt-12">
          <div className="lg:col-span-5 space-y-3">
            <p className={eyebrow}>About the project</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--color-text)]">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
              >
                Shop the collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
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
