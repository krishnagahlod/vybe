"use client";

import { useEffect } from "react";

/** Lazy photos fade in once loaded. The `img-fade` class is only added here, so without JS nothing is hidden. */
export function ImageFadeIn() {
  useEffect(() => {
    const mark = (img: HTMLImageElement) => img.setAttribute("data-loaded", "");
    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => img.complete && mark(img));
    // load doesn't bubble, but it does pass through the capture phase
    const onLoad = (e: Event) => e.target instanceof HTMLImageElement && mark(e.target);
    document.addEventListener("load", onLoad, true);
    document.addEventListener("error", onLoad, true);
    document.documentElement.classList.add("img-fade");
    return () => {
      document.removeEventListener("load", onLoad, true);
      document.removeEventListener("error", onLoad, true);
    };
  }, []);
  return null;
}
