"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  id: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone: "light" | "dark";
  render: (priority: boolean) => React.ReactNode;
};

const SLIDES: Slide[] = [
  {
    id: "studio",
    title: "Made for your kind of movement",
    text: "Activewear cut for Indian bodies, in soft, considered colour.",
    cta: { label: "Shop now", href: "/shop" },
    secondary: { label: "New in", href: "/shop?category=new" },
    tone: "light",
    render: (priority) => (
      <>
        <Image
          src="/images/lifestyle/hero-courtyard-wide.jpg"
          alt="Woman in a sage VYBE sports bra and leggings in a sunlit limestone courtyard"
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--color-bg)]/85 via-[var(--color-bg)]/25 to-transparent" />
      </>
    ),
  },
  {
    id: "flare",
    title: "The Flare Edit",
    text: "Fitted to the knee, free below it. In three leg lengths.",
    cta: { label: "Shop flares", href: "/shop?category=flared" },
    tone: "dark",
    render: () => (
      <div className="absolute inset-0 bg-[var(--vybe-aubergine)]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] grid grid-cols-1 lg:grid-cols-3">
          {["flow-flare-leggings-1", "movement-flare-jumpsuit-1", "studio-flare-pants-1"].map((name, i) => (
            <div key={name} className={`relative ${i > 0 ? "hidden lg:block" : ""}`}>
              <Image src={`/images/products/${name}.jpg`} alt="" fill sizes="(max-width: 1024px) 100vw, 21vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a23]/85 via-[#2a1a23]/20 to-transparent lg:hidden" />
      </div>
    ),
  },
  {
    id: "court",
    title: "Court season",
    text: "Pleats, skorts and dresses for court days and everything after.",
    cta: { label: "Shop court", href: "/shop?category=court" },
    tone: "dark",
    render: () => (
      <>
        <Image
          src="/images/lifestyle/lifestyle-court-wide.jpg"
          alt="Two friends laughing as they walk off a tennis court in VYBE chalk and sage"
          fill
          sizes="100vw"
          className="object-cover object-[55%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#2a1a23]/75 via-[#2a1a23]/20 to-transparent" />
      </>
    ),
  },
];

const INTERVAL_MS = 6500;

/** Full-width campaign banner that rotates between the season's three stories. */
export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((i: number) => setIndex((i + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="This season at VYBE"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[min(80vh,760px)] overflow-hidden bg-[var(--vybe-sage)]"
    >
      {SLIDES.map((slide, i) => {
        const active = i === index;
        const light = slide.tone === "light";
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}: ${slide.title}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {slide.render(i === 0)}
            <div className="absolute inset-0 flex items-end lg:items-center">
              <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 pb-16 lg:pb-0">
                <div className={`max-w-xl ${light ? "text-[var(--color-text)]" : "text-white"}`}>
                  {/* Only the first slide is the page's h1 */}
                  {React.createElement(
                    i === 0 ? "h1" : "h2",
                    { className: "font-headline font-bold uppercase text-[2.4rem] sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.02em]" },
                    slide.title
                  )}
                  <p className={`mt-4 sm:mt-5 text-base sm:text-lg max-w-md ${light ? "text-[var(--color-text)]/80" : "text-white/85"}`}>
                    {slide.text}
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                    <Link
                      href={slide.cta.href}
                      tabIndex={active ? 0 : -1}
                      className={`inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold transition-colors ${
                        light ? "bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)]" : "bg-white text-[var(--color-text)] hover:bg-[var(--vybe-pink)]"
                      }`}
                    >
                      {slide.cta.label}
                    </Link>
                    {slide.secondary && (
                      <Link
                        href={slide.secondary.href}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-[var(--color-text)]/30 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
                      >
                        {slide.secondary.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-5 right-5 sm:right-8 flex items-center gap-3">
        <div className="flex gap-1.5">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${slide.title}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${i === index ? "w-8 bg-white" : "w-3 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="hidden sm:flex w-9 h-9 rounded-full bg-white/85 text-[var(--color-text)] items-center justify-center hover:bg-white cursor-pointer"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="hidden sm:flex w-9 h-9 rounded-full bg-white/85 text-[var(--color-text)] items-center justify-center hover:bg-white cursor-pointer"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
