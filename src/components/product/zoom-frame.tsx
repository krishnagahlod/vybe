"use client";

import React, { useRef, useState } from "react";

/** Zooms its photo towards the pointer: on hover with a mouse, on tap with a finger. */
export function ZoomFrame({ children }: { children: React.ReactNode }) {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const pointerType = useRef("mouse");

  const aim = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      className={`absolute inset-0 ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
      onPointerEnter={(e) => {
        pointerType.current = e.pointerType;
        if (e.pointerType === "mouse") {
          aim(e);
          setZoomed(true);
        }
      }}
      onPointerMove={(e) => e.pointerType === "mouse" && aim(e)}
      onPointerLeave={() => setZoomed(false)}
      onPointerDown={(e) => {
        pointerType.current = e.pointerType;
        aim(e);
      }}
      // Touch: a tap toggles zoom at the tapped point (swiping the gallery still works)
      onClick={() => pointerType.current !== "mouse" && setZoomed((z) => !z)}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: zoomed ? "scale(1.8)" : "scale(1)", transformOrigin: origin }}
      >
        {children}
      </div>
    </div>
  );
}
