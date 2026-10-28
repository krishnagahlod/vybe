"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACTIVITIES, shopHref } from "@/lib/catalog";

const EDGE = "max(1rem, calc((100vw - 80rem) / 2 + 2rem))";

export function ShopByActivity() {
  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, lastX: 0, lastT: 0, velocity: 0, moved: 0 });
  const momentum = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    track.scrollBy({ left: direction * ((card?.clientWidth ?? 300) + 16), behavior: "smooth" });
  };

  // Mouse drag with a little momentum on release; touch keeps the native swipe
  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !trackRef.current) return;
    if (momentum.current) cancelAnimationFrame(momentum.current);
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, lastX: e.clientX, lastT: performance.now(), velocity: 0, moved: 0 };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType === "mouse") setCursor({ x: e.clientX, y: e.clientY });
    const d = drag.current;
    if (!d.active || !trackRef.current) return;
    const now = performance.now();
    d.velocity = (e.clientX - d.lastX) / Math.max(1, now - d.lastT);
    d.lastX = e.clientX;
    d.lastT = now;
    d.moved = Math.max(d.moved, Math.abs(e.clientX - d.startX));
    trackRef.current.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };

  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    setDragging(false);
    let v = d.velocity * 16; // px per frame
    const step = () => {
      const track = trackRef.current;
      if (!track || Math.abs(v) < 0.5) return;
      track.scrollLeft -= v;
      v *= 0.94;
      momentum.current = requestAnimationFrame(step);
    };
    momentum.current = requestAnimationFrame(step);
  };

  const arrow =
    "w-11 h-11 rounded-full border border-[var(--color-text)]/20 flex items-center justify-center text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors cursor-pointer";

  return (
    <section id="shop-by-activity" className="py-20 sm:py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="font-headline text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">However you move</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous activities" className={arrow}>
              &larr;
            </button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="More activities" className={arrow}>
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => {
          endDrag();
          setCursor(null);
        }}
        // A drag shouldn't also count as a click on the card underneath
        onClickCapture={(e) => {
          if (drag.current.moved > 6) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = 0;
          }
        }}
        onDragStart={(e) => e.preventDefault()}
        className={`flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none md:cursor-none ${
          dragging ? "" : "snap-x snap-mandatory"
        }`}
        style={{ paddingInline: EDGE, scrollPaddingInline: EDGE }}
      >
        {ACTIVITIES.map((activity) => (
          <li key={activity.id} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[340px]">
            <Link
              href={shopHref({ activity: activity.id })}
              draggable={false}
              className="relative block aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-sage)] md:cursor-none"
            >
              <Image
                src={activity.image}
                alt=""
                fill
                draggable={false}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 360px"
                className="object-cover"
                style={{ objectPosition: activity.imagePosition ?? "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a23]/75 via-[#2a1a23]/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-headline text-3xl leading-tight">{activity.label}</h3>
                <p className="mt-2 text-sm text-white/85 leading-snug max-w-[16rem]">{activity.blurb}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Custom cursor over the row (mouse only) */}
      {cursor && (
        <div
          className="pointer-events-none fixed z-30 hidden md:flex items-center justify-center w-20 h-20 -ml-10 -mt-10 rounded-full bg-[var(--color-bg)]/90 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)] transition-transform duration-200"
          style={{ left: cursor.x, top: cursor.y, transform: dragging ? "scale(0.82)" : "scale(1)" }}
          aria-hidden="true"
        >
          {dragging ? "" : "Drag"}
        </div>
      )}
    </section>
  );
}
