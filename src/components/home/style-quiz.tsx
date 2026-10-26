"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import type { Product, ProductCategory } from "@/types/product";

type Rhythm = "yoga" | "strength" | "running" | "casual";
type Feel = "sculpt" | "soft" | "relaxed";
type Palette = "sage" | "peach" | "mauve";

const RHYTHM_OPTIONS: { id: Rhythm; title: string; desc: string }[] = [
  { id: "yoga", title: "Yoga & Pilates", desc: "Mat, reformer, and slow studio flows" },
  { id: "strength", title: "Gym & Strength", desc: "Weights, conditioning, and HIIT" },
  { id: "running", title: "Running & Cardio", desc: "Morning runs, cycling, and intervals" },
  { id: "casual", title: "Everyday Active", desc: "Errands, travel, and coffee runs" },
];

const FEEL_OPTIONS: { id: Feel; title: string; desc: string }[] = [
  { id: "sculpt", title: "Sculpted & secure", desc: "A close fit that holds you in place" },
  { id: "soft", title: "Soft & balanced", desc: "Second-skin feel with gentle hold" },
  { id: "relaxed", title: "Relaxed & easy", desc: "Room to breathe, nothing tight" },
];

const PALETTE_OPTIONS: { id: Palette; title: string; desc: string; hex: string }[] = [
  { id: "sage", title: "Sage", desc: "Calm and grounded", hex: "#d8e2dc" },
  { id: "peach", title: "Peach & Pink", desc: "Warm and bright", hex: "#ffe5d9" },
  { id: "mauve", title: "Mauve & Rose", desc: "Deep and polished", hex: "#9d8189" },
];

// Each answer adds weight; the highest-scoring products become the recommendation.
const RHYTHM_WEIGHTS: Record<Rhythm, Partial<Record<ProductCategory, number>>> = {
  yoga: { leggings: 3, sets: 3, "sports-bras": 2, tops: 1 },
  strength: { "sports-bras": 3, leggings: 3, shorts: 2, tops: 1 },
  running: { shorts: 3, "sports-bras": 2, tops: 2 },
  casual: { layers: 3, sets: 2, tops: 2, leggings: 1 },
};

const FEEL_WEIGHTS: Record<Feel, Partial<Record<ProductCategory, number>>> = {
  sculpt: { leggings: 2, "sports-bras": 2, sets: 1 },
  soft: { tops: 2, sets: 2, "sports-bras": 1 },
  relaxed: { layers: 2, tops: 2, shorts: 1 },
};

const PALETTE_COLORS: Record<Palette, string[]> = {
  sage: ["Sage", "Sage / Rose"],
  peach: ["Pale Peach", "Soft Pink"],
  mauve: ["Muted Mauve", "Rose", "Sage / Rose"],
};

function getRecommendations(rhythm: Rhythm, feel: Feel, palette: Palette): Product[] {
  const scored = products
    .map((p, index) => {
      let score = (RHYTHM_WEIGHTS[rhythm][p.category] ?? 0) + (FEEL_WEIGHTS[feel][p.category] ?? 0);
      if (p.colorName && PALETTE_COLORS[palette].includes(p.colorName)) score += 3;
      if (p.featured) score += 0.5;
      return { p, score, index };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const first = scored[0].p;
  // Second pick comes from a different category so the result reads as an outfit.
  const second = scored.find((s) => s.p.category !== first.category)?.p ?? scored[1].p;
  return [first, second];
}

const optionClass = (selected: boolean) =>
  `p-5 rounded-xl border text-left transition-colors cursor-pointer ${
    selected
      ? "border-[var(--color-text)] bg-[var(--vybe-peach)]/50"
      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-text)]/40"
  }`;

const stepMotion = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.2 },
};

function StepHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="text-center space-y-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-mauve-ink)]">
        Question {n} of 3
      </span>
      <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-text)]">{children}</h3>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] cursor-pointer"
    >
      &larr; Back
    </button>
  );
}

export function StyleQuiz() {
  const [step, setStep] = useState<number>(1);
  const [rhythm, setRhythm] = useState<Rhythm | null>(null);
  const [feel, setFeel] = useState<Feel | null>(null);
  const [palette, setPalette] = useState<Palette | null>(null);

  const recommendations = rhythm && feel && palette ? getRecommendations(rhythm, feel, palette) : [];
  const rhythmLabel = RHYTHM_OPTIONS.find((o) => o.id === rhythm)?.title;
  const feelLabel = FEEL_OPTIONS.find((o) => o.id === feel)?.title;
  const paletteLabel = PALETTE_OPTIONS.find((o) => o.id === palette)?.title;

  return (
    <section id="style-quiz" className="py-20 sm:py-28 bg-[var(--color-bg)] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
            Find your fit
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
            Three questions, one outfit
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-md mx-auto">
            Tell us how you move and we&apos;ll put together a pairing for you.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8" aria-hidden="true">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  step === i ? "w-10 bg-[var(--color-text)]" : step > i ? "w-5 bg-[var(--vybe-mauve)]" : "w-5 bg-[var(--color-border)]"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {step === 1 && (
              <motion.div key="step1" {...stepMotion} className="space-y-6">
                <StepHeading n={1}>How do you usually move?</StepHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RHYTHM_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={rhythm === opt.id}
                      onClick={() => {
                        setRhythm(opt.id);
                        setStep(2);
                      }}
                      className={optionClass(rhythm === opt.id)}
                    >
                      <span className="block text-sm font-semibold text-[var(--color-text)]">{opt.title}</span>
                      <span className="block text-sm text-[var(--color-muted)] mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...stepMotion} className="space-y-6">
                <StepHeading n={2}>How do you like it to feel?</StepHeading>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {FEEL_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={feel === opt.id}
                      onClick={() => {
                        setFeel(opt.id);
                        setStep(3);
                      }}
                      className={optionClass(feel === opt.id)}
                    >
                      <span className="block text-sm font-semibold text-[var(--color-text)]">{opt.title}</span>
                      <span className="block text-sm text-[var(--color-muted)] mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>
                <BackButton onClick={() => setStep(1)} />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" {...stepMotion} className="space-y-6">
                <StepHeading n={3}>Which colours draw you in?</StepHeading>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PALETTE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={palette === opt.id}
                      onClick={() => {
                        setPalette(opt.id);
                        setStep(4);
                      }}
                      className={`${optionClass(palette === opt.id)} flex items-center gap-4`}
                    >
                      <span
                        className="w-9 h-9 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: opt.hex }}
                      />
                      <span>
                        <span className="block text-sm font-semibold text-[var(--color-text)]">{opt.title}</span>
                        <span className="block text-sm text-[var(--color-muted)] mt-0.5">{opt.desc}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <BackButton onClick={() => setStep(2)} />
              </motion.div>
            )}

            {step === 4 && recommendations.length > 0 && (
              <motion.div key="step4" {...stepMotion} className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-mauve-ink)]">
                    Your pairing
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-text)]">Here&apos;s what we&apos;d pick</h3>
                  <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto">
                    For {rhythmLabel?.toLowerCase()}, a {feelLabel?.toLowerCase()} fit, in {paletteLabel?.toLowerCase()} tones.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.slug}`}
                      className="group flex gap-4 items-center p-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-text)]/40 transition-colors"
                    >
                      <span className="relative w-20 h-24 rounded-lg overflow-hidden bg-[var(--vybe-peach)]/40 shrink-0">
                        <Image
                          src={p.images[0]?.src ?? "/images/products/concept-silhouette.svg"}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                          {p.colorName}
                        </span>
                        <span className="block font-serif text-lg text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors">
                          {p.name}
                        </span>
                        <span className="block text-sm text-[var(--color-text)] mt-1">{formatPrice(p.price)}</span>
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-6">
                  <button
                    type="button"
                    onClick={() => {
                      setRhythm(null);
                      setFeel(null);
                      setPalette(null);
                      setStep(1);
                    }}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] underline underline-offset-4 cursor-pointer"
                  >
                    Start again
                  </button>
                  <Link
                    href="/shop"
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
                  >
                    Shop everything
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
