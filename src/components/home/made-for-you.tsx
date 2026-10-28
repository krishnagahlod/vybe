"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FABRICS, FABRIC_IDS, shopHref } from "@/lib/catalog";
import { LengthGuide } from "@/components/product/length-guide";

type Step = {
  title: string;
  text: string;
  image: string;
  alt: string;
  extra?: React.ReactNode;
};

const STEPS: Step[] = [
  {
    title: "A higher back rise",
    text: "Cut from Indian body measurements, with a back waist that stays up when you bend, squat or sit cross-legged on the floor.",
    image: "/images/products/flow-high-rise-leggings-2.jpg",
    alt: "Back view of sage high-rise leggings showing the raised back waistband",
  },
  {
    title: "Three leg lengths",
    text: "Petite, Regular and Tall, so leggings and flares end at your ankle instead of bunching or riding up.",
    image: "/images/products/flow-flare-leggings-1.jpg",
    alt: "Aubergine flared leggings ending just over white sneakers",
    extra: (
      <div className="mt-8 max-w-sm">
        <LengthGuide />
      </div>
    ),
  },
  {
    title: "Pockets that hold a phone",
    text: "Deep side pockets on our leggings, flares, shorts and joggers. Your phone stays put through a walk or a set of lunges.",
    image: "/images/products/flow-flare-leggings-2.jpg",
    alt: "Back view of aubergine flared leggings with a phone in the deep side pocket",
  },
  {
    title: "Fabrics for humid cities",
    text: "Light, never thick. Every VYBE fabric dries fast and stretches further than you'll need.",
    image: "/images/products/studio-sculpt-leggings-2.jpg",
    alt: "Woman in mauve leggings in a deep lunge stretch",
    extra: (
      <ul className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] max-w-md">
        {FABRIC_IDS.map((id) => (
          <li key={id}>
            <Link href={shopHref({ fabric: id })} className="group flex items-baseline justify-between gap-6 py-4">
              <span className="font-serif text-2xl text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors">
                {FABRICS[id].name}
              </span>
              <span className="text-sm text-[var(--color-muted)] text-right">{FABRICS[id].properties.join(", ")}</span>
            </Link>
          </li>
        ))}
      </ul>
    ),
  },
];

/** Scroll story: on large screens the photo stays pinned while each point scrolls past and swaps it. */
export function MadeForYou() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="made-for-you" className="py-20 sm:py-28 bg-[var(--color-surface)] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-4xl sm:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.04] max-w-3xl">
          Designed for Indian bodies. Made for Indian weather.
        </h2>

        <div className="mt-12 lg:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Pinned photo (large screens) */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="sticky top-[calc(var(--header-h,114px)+2rem)] h-[calc(100vh-var(--header-h,114px)-4rem)] max-h-[760px] rounded-md overflow-hidden bg-[var(--vybe-sage)]">
              {STEPS.map((step, i) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-[opacity,transform] duration-[900ms] ease-out ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
                  }`}
                />
              ))}
              <div className="absolute left-6 bottom-6 flex gap-1.5" aria-hidden="true">
                {STEPS.map((step, i) => (
                  <span
                    key={step.title}
                    className={`h-0.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-white" : "w-4 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Points */}
          <div className="lg:col-span-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-index={i}
                className="py-10 lg:py-0 lg:min-h-[78vh] flex flex-col justify-center border-t border-[var(--color-border)] lg:border-0 first:border-0"
              >
                <div className="lg:hidden relative aspect-[4/5] rounded-md overflow-hidden mb-8 bg-[var(--vybe-sage)]">
                  <Image src={step.image} alt={step.alt} fill sizes="100vw" className="object-cover" />
                </div>
                <h3
                  className={`font-headline text-3xl sm:text-5xl font-normal text-[var(--color-text)] transition-opacity duration-500 ${
                    i === active ? "lg:opacity-100" : "lg:opacity-35"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-5 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-md">{step.text}</p>
                {step.extra}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
