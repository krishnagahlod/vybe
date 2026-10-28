"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const MESSAGES = [
  { text: "Concept storefront for ENT 625 · No real orders or payments are taken", href: "/about#project", cta: "About the project" },
  { text: "Complimentary delivery on orders over ₹1,500", href: "/shipping-returns", cta: "Details" },
  { text: "Leggings in three leg lengths: Petite, Regular and Tall", href: "/shop?category=leggings", cta: "Find yours" },
  { text: "Designed for Indian bodies, in fabrics made for Indian weather", href: "/#made-for-you", cta: "See how" },
];

const INTERVAL_MS = 4500;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <aside
      aria-label="Store announcements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative bg-[var(--color-text)] text-white/85 text-[11px] sm:text-xs h-9 overflow-hidden"
    >
      <ul className="max-w-7xl mx-auto h-full px-10 relative">
        {MESSAGES.map((message, i) => (
          <li
            key={message.text}
            aria-hidden={i !== index}
            className={`absolute inset-x-10 inset-y-0 flex items-center justify-center gap-3 text-center transition-all duration-500 ${
              i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <span className="truncate">{message.text}</span>
            <Link
              href={message.href}
              tabIndex={i === index ? 0 : -1}
              className="hidden sm:inline shrink-0 underline underline-offset-4 text-white hover:text-[var(--vybe-peach)] transition-colors"
            >
              {message.cta}
            </Link>
          </li>
        ))}
      </ul>

      {/* Manual controls for people who want to read at their own pace */}
      <button
        type="button"
        onClick={() => setIndex((i) => (i - 1 + MESSAGES.length) % MESSAGES.length)}
        aria-label="Previous announcement"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
      >
        &#8249;
      </button>
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % MESSAGES.length)}
        aria-label="Next announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
      >
        &#8250;
      </button>
    </aside>
  );
}
