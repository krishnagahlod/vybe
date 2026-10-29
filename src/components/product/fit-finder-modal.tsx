"use client";

import React, { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCategory } from "@/types/product";

type FitFinderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize: (size: string) => void;
  category: ProductCategory;
  availableSizes: string[];
};

type Unit = "in" | "cm";
type FitPreference = "snug" | "true" | "relaxed";

export function FitFinderModal({
  isOpen,
  onClose,
  onSelectSize,
  category,
  availableSizes,
}: FitFinderModalProps) {
  const [unit, setUnit] = useState<Unit>("in");
  const [fitPref, setFitPref] = useState<FitPreference>("true");

  const isBottoms = category === "leggings" || category === "shorts";
  const isTops = category === "sports-bras" || category === "tops";

  // State in inches internally
  const [waistIn, setWaistIn] = useState<number>(27);
  const [hipsIn, setHipsIn] = useState<number>(37);
  const [bustIn, setBustIn] = useState<number>(34);

  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Size calculation algorithm
  const calculateRecommendedSize = (): { size: string; reason: string } => {
    let rawScore = 0; // 0 = XS, 1 = S, 2 = M, 3 = L, 4 = XL

    if (isBottoms) {
      // Base on waist & hips
      if (waistIn < 26 && hipsIn < 36) rawScore = 0; // XS
      else if (waistIn < 28 && hipsIn < 38) rawScore = 1; // S
      else if (waistIn < 31 && hipsIn < 41) rawScore = 2; // M
      else if (waistIn < 34 && hipsIn < 44) rawScore = 3; // L
      else rawScore = 4; // XL
    } else if (isTops) {
      if (bustIn < 32) rawScore = 0; // XS
      else if (bustIn < 35) rawScore = 1; // S
      else if (bustIn < 38) rawScore = 2; // M
      else if (bustIn < 41) rawScore = 3; // L
      else rawScore = 4; // XL
    } else {
      // General layers
      const avg = (waistIn + bustIn) / 2;
      if (avg < 29) rawScore = 0;
      else if (avg < 32) rawScore = 1;
      else if (avg < 35) rawScore = 2;
      else if (avg < 38) rawScore = 3;
      else rawScore = 4;
    }

    // Apply fit preference modifier
    if (fitPref === "snug" && rawScore > 0) {
      rawScore -= 0.5;
    } else if (fitPref === "relaxed" && rawScore < 4) {
      rawScore += 0.5;
    }

    const sizeOrder = ["XS", "S", "M", "L", "XL"];
    const finalIndex = Math.max(0, Math.min(4, Math.round(rawScore)));
    const recommended = sizeOrder[finalIndex];

    const reason =
      fitPref === "snug"
        ? `We adjusted toward a supportive, athletic compression fit based on your preference.`
        : fitPref === "relaxed"
        ? `We adjusted toward a gentler, relaxed silhouette with zero waistband pinch.`
        : `This size gives you standard studio support with balanced 4-way flexibility.`;

    return { size: recommended, reason };
  };

  const { size: recommendedSize, reason } = calculateRecommendedSize();
  const isAvailable = availableSizes.includes(recommendedSize);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg bg-[var(--color-bg)] rounded-md shadow-2xl border border-[var(--color-border)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--color-border)] bg-[var(--color-surface)]/70 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--vybe-mauve-ink)]">
                  VYBE Sizing Intelligence
                </span>
                <h3 id={titleId} className="font-serif text-xl font-semibold text-[var(--color-text)]">
                  Fit Finder & Recommender
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close fit finder"
                className="p-2 -mr-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Unit Toggle */}
              <div className="flex items-center justify-between">
                <p id={descId} className="text-xs text-[var(--color-muted)]">
                  Adjust measurements to find your optimal movement fit.
                </p>
                <div className="inline-flex rounded-sm bg-[var(--color-surface)] p-1 border border-[var(--color-border)]">
                  <button
                    type="button"
                    onClick={() => setUnit("in")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                      unit === "in"
                        ? "bg-[var(--color-text)] text-white shadow-xs"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    Inches
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit("cm")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                      unit === "cm"
                        ? "bg-[var(--color-text)] text-white shadow-xs"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    CM
                  </button>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Bust (for Tops / Bras / Layers) */}
                {(!isBottoms || !isTops) && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[var(--color-text)]">Bust Measurement</span>
                      <span className="font-mono font-bold text-[var(--vybe-mauve-ink)]">
                        {unit === "in" ? `${bustIn}"` : `${Math.round(bustIn * 2.54)} cm`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={44}
                      step={0.5}
                      value={bustIn}
                      onChange={(e) => setBustIn(parseFloat(e.target.value))}
                      className="w-full accent-[var(--vybe-mauve-ink)] cursor-pointer"
                    />
                  </div>
                )}

                {/* Waist (for Bottoms / Layers) */}
                {(isBottoms || !isTops) && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[var(--color-text)]">Natural Waist</span>
                      <span className="font-mono font-bold text-[var(--vybe-mauve-ink)]">
                        {unit === "in" ? `${waistIn}"` : `${Math.round(waistIn * 2.54)} cm`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={23}
                      max={38}
                      step={0.5}
                      value={waistIn}
                      onChange={(e) => setWaistIn(parseFloat(e.target.value))}
                      className="w-full accent-[var(--vybe-mauve-ink)] cursor-pointer"
                    />
                  </div>
                )}

                {/* Hips (for Bottoms) */}
                {isBottoms && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[var(--color-text)]">Fullest Hip</span>
                      <span className="font-mono font-bold text-[var(--vybe-mauve-ink)]">
                        {unit === "in" ? `${hipsIn}"` : `${Math.round(hipsIn * 2.54)} cm`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={33}
                      max={46}
                      step={0.5}
                      value={hipsIn}
                      onChange={(e) => setHipsIn(parseFloat(e.target.value))}
                      className="w-full accent-[var(--vybe-mauve-ink)] cursor-pointer"
                    />
                  </div>
                )}
              </div>

              {/* Fit Preference */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">
                  Preferred Fit Feeling
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFitPref("snug")}
                    className={`p-2.5 rounded-md border text-center transition-all ${
                      fitPref === "snug"
                        ? "border-[var(--vybe-mauve-ink)] bg-[var(--vybe-peach)]/40 font-semibold text-[var(--color-text)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-gray-400"
                    }`}
                  >
                    <div className="text-xs">Sculpt / Snug</div>
                    <div className="text-[11px] opacity-75 mt-0.5">High Hold</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFitPref("true")}
                    className={`p-2.5 rounded-md border text-center transition-all ${
                      fitPref === "true"
                        ? "border-[var(--vybe-mauve-ink)] bg-[var(--vybe-peach)]/40 font-semibold text-[var(--color-text)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-gray-400"
                    }`}
                  >
                    <div className="text-xs">True to Size</div>
                    <div className="text-[11px] opacity-75 mt-0.5">Studio Standard</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFitPref("relaxed")}
                    className={`p-2.5 rounded-md border text-center transition-all ${
                      fitPref === "relaxed"
                        ? "border-[var(--vybe-mauve-ink)] bg-[var(--vybe-peach)]/40 font-semibold text-[var(--color-text)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-gray-400"
                    }`}
                  >
                    <div className="text-xs">Relaxed</div>
                    <div className="text-[11px] opacity-75 mt-0.5">Zero Pinch</div>
                  </button>
                </div>
              </div>

              {/* Recommendation Result Card */}
              <div className="p-4 rounded-md bg-linear-to-br from-[var(--vybe-sage)]/40 to-[var(--vybe-peach)]/40 border border-[var(--vybe-rose)]/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
                    Recommended Size
                  </span>
                  <span className="font-headline text-2xl font-bold text-[var(--color-text)] px-3 py-0.5 rounded-md bg-white/80 shadow-xs border border-[var(--color-border)]">
                    {recommendedSize}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text)]/85 leading-relaxed">
                  {reason}
                </p>
                {!isAvailable && (
                  <p className="text-xs text-amber-700 font-medium">
                    Note: Size {recommendedSize} is currently unavailable for this specific concept piece.
                  </p>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface)]/70 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/30 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!isAvailable}
                onClick={() => {
                  onSelectSize(recommendedSize);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-all shadow-xs disabled:opacity-40 disabled:hover:bg-[var(--color-text)]"
              >
                Apply Size {recommendedSize} &amp; Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
