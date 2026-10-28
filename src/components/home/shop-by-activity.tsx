"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACTIVITIES, shopHref } from "@/lib/catalog";

export function ShopByActivity() {
  const trackRef = useRef<HTMLUListElement>(null);
  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    track.scrollBy({ left: direction * ((card?.clientWidth ?? 300) + 16), behavior: "smooth" });
  };

  const arrow =
    "w-11 h-11 rounded-full border border-[var(--color-text)]/20 flex items-center justify-center text-[var(--color-text)] hover:border-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors cursor-pointer";

  return (
    <section id="shop-by-activity" className="py-20 sm:py-28 scroll-mt-32">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">Shop by activity</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              However you <span className="italic">move</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous activities" className={arrow}>
              &larr;
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="More activities" className={arrow}>
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        // Line the first card up with the page container, then let the row run off the right edge
        style={{ paddingInline: "max(1rem, calc((100vw - 80rem) / 2 + 2rem))", scrollPaddingInline: "max(1rem, calc((100vw - 80rem) / 2 + 2rem))" }}
      >
        {ACTIVITIES.map((activity) => (
          <li key={activity.id} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[340px]">
            <Link href={shopHref({ activity: activity.id })} className="group relative block aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-sage)]">
              <Image
                src={activity.image}
                alt=""
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 360px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                style={{ objectPosition: activity.imagePosition ?? "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a23]/75 via-[#2a1a23]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em]">{activity.label}</h3>
                <p className="text-sm text-white/85 leading-snug">{activity.blurb}</p>
                <span className="inline-block mt-2 px-5 py-2 border border-white/70 rounded-sm text-[10px] font-semibold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-[var(--color-text)] transition-colors">
                  Shop now
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
