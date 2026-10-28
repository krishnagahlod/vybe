import Link from "next/link";
import { FABRICS, FABRIC_IDS, shopHref } from "@/lib/catalog";
import { LengthGuide } from "@/components/product/length-guide";

const FIT_POINTS = [
  { title: "A higher back rise", text: "No gaping at the back waist when you bend, squat or sit cross-legged." },
  { title: "Three leg lengths", text: "Petite, Regular and Tall, so leggings and flares end where they should." },
  { title: "Deep pockets", text: "Side pockets on our bottoms that actually hold a phone." },
];

export function MadeForYou() {
  return (
    <section id="made-for-you" className="py-20 sm:py-28 bg-[var(--color-surface)] scroll-mt-32">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">Made for you</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)] leading-[1.06]">
                Designed for Indian bodies. Made for Indian <span className="italic">weather.</span>
              </h2>
              <p className="text-base text-[var(--color-muted)] leading-relaxed">
                Most activewear is cut for someone else. Ours starts from Indian body measurements and the way you really move
                through a humid day.
              </p>
            </div>
            <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {FIT_POINTS.map((point, i) => (
                <li key={point.title} className="py-4 flex gap-5">
                  <span className="font-serif italic text-[var(--vybe-mauve-ink)]">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-xl text-[var(--color-text)]">{point.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 p-6 sm:p-10 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)] mb-8">
              Petite, Regular or Tall?
            </p>
            <LengthGuide />
            <div className="mt-8 text-center">
              <Link
                href={shopHref({ category: "leggings" })}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-current pb-1 hover:text-[var(--vybe-mauve-ink)]"
              >
                Find your length <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-[var(--color-text)]">
              Our core <span className="italic">fabrics</span>
            </h3>
            <p className="text-sm text-[var(--color-muted)] max-w-md">
              Light, never thick. Each one dries fast and stretches further than you&apos;ll need.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {FABRIC_IDS.map((id, i) => {
              const fabric = FABRICS[id];
              const tones = ["bg-[var(--vybe-sage)]", "bg-[var(--vybe-peach)]", "bg-[var(--vybe-pink)]/70"];
              return (
                <li key={id}>
                  <Link href={shopHref({ fabric: id })} className={`group flex flex-col h-full p-7 sm:p-8 rounded-md ${tones[i]} transition-transform duration-500 hover:-translate-y-1`}>
                    <p className="font-serif text-3xl text-[var(--color-text)]">{fabric.name}</p>
                    <p className="mt-1 text-sm italic font-serif text-[var(--color-text)]/80">{fabric.tagline}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {fabric.properties.map((prop) => (
                        <li key={prop} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                          <span className="w-4 h-px bg-[var(--color-text)]/50" aria-hidden="true" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
                      Shop {fabric.name} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
