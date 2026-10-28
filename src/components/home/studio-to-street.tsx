import Image from "next/image";
import Link from "next/link";

const MOMENTS = [
  { time: "7 am", title: "Reformer class", detail: "Set on, layer off" },
  { time: "1 pm", title: "Desk to lunch", detail: "Zip up, keep going" },
  { time: "7 pm", title: "The long walk home", detail: "Same outfit, still comfortable" },
];

export function StudioToStreet() {
  return (
    <section id="studio-to-street" className="py-20 sm:py-28 bg-[var(--vybe-sage)]">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-md overflow-hidden bg-[var(--vybe-peach)]">
              <Image
                src="/images/lifestyle/lifestyle-studio-to-street.jpg"
                alt="Woman stepping out of a limestone studio onto a leafy street in a sage set and mauve zip jacket, coffee in hand"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_center]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-sage-ink)]">
                Studio to Street
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.06]">
                From the morning flow to the <span className="italic">evening plan.</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text)]/75 leading-relaxed max-w-xl">
                Every VYBE piece is cut in the same soft palette, so sets, layers and separates work together.
                One outfit covers the whole day.
              </p>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-md overflow-hidden bg-[var(--color-text)]/10">
              {MOMENTS.map((moment) => (
                <li key={moment.time} className="bg-[var(--vybe-sage)] p-5 space-y-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-sage-ink)]">
                    {moment.time}
                  </span>
                  <span className="block font-serif text-xl text-[var(--color-text)]">{moment.title}</span>
                  <span className="block text-sm text-[var(--color-text)]/70">{moment.detail}</span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/shop?category=layers"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
              >
                Shop layers
              </Link>
              <Link
                href="/shop?category=sets"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
              >
                Shop matching sets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
