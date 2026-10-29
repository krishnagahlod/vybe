"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACTIVITIES, shopHref } from "@/lib/catalog";

export function ShopByActivity() {
  const trackRef = useRef<HTMLUListElement>(null);
  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * 0.75, behavior: "smooth" });
  };
  const arrow =
    "w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors cursor-pointer";

  return (
    <section id="shop-by-activity" className="py-12 sm:py-16 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-6 sm:mb-8">
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl tracking-[-0.01em] text-[var(--color-text)]">Shop by activity</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous activities" className={arrow}>
              &#8249;
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="More activities" className={arrow}>
              &#8250;
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ACTIVITIES.map((activity) => (
            <li key={activity.id} className="snap-start shrink-0 w-[72%] sm:w-[40%] lg:w-[calc(25%-15px)]">
              <Link href={shopHref({ activity: activity.id })} className="group relative block aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-sage)]">
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: activity.imagePosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a23]/75 via-[#2a1a23]/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-center text-white">
                  <h3 className="font-headline font-bold uppercase text-xl tracking-[0.01em]">{activity.label}</h3>
                  <p className="mt-1 text-sm text-white/85 leading-snug">{activity.blurb}</p>
                  <span className="mt-4 inline-block px-5 py-2 rounded-full border border-white/80 text-xs font-semibold group-hover:bg-white group-hover:text-[var(--color-text)] transition-colors">
                    Shop now
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
