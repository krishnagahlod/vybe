"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type TrailImage = { id: number; src: string; x: number; y: number; tilt: number };

type ImageTrailProps = {
  images: string[];
  className?: string;
  children: React.ReactNode;
};

const SPAWN_DISTANCE = 110; // px of mouse travel between photos
const LIFETIME = 950; // ms each photo stays before it has faded

/**
 * Leaves a short trail of photos behind the mouse. Mouse only (touch scrolling is left alone)
 * and switched off when the visitor prefers reduced motion.
 */
export function ImageTrail({ images, className = "", children }: ImageTrailProps) {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const last = useRef<{ x: number; y: number } | null>(null);
  const counter = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = window.matchMedia("(prefers-reduced-motion: no-preference) and (pointer: fine)").matches;
  }, []);

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!enabled.current || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (last.current && Math.hypot(x - last.current.x, y - last.current.y) < SPAWN_DISTANCE) return;
    last.current = { x, y };

    const id = counter.current++;
    const item = { id, src: images[id % images.length], x, y, tilt: (id % 2 ? 1 : -1) * (2 + (id % 3)) };
    setTrail((t) => [...t.slice(-6), item]);
    window.setTimeout(() => setTrail((t) => t.filter((p) => p.id !== id)), LIFETIME);
  };

  return (
    <section className={`relative ${className}`} onPointerMove={handleMove} onPointerLeave={() => (last.current = null)}>
      {children}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {trail.map((p) => (
          <div
            key={p.id}
            className="image-trail-item absolute w-32 sm:w-40 aspect-[3/4] rounded-md overflow-hidden shadow-2xl"
            style={{ left: p.x, top: p.y, ["--tilt" as string]: `${p.tilt}deg` }}
          >
            <Image src={p.src} alt="" fill sizes="160px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
