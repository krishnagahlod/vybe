"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type Rhythm = "yoga" | "strength" | "running" | "casual";
type Feel = "sculpt" | "soft" | "relaxed";
type Palette = "sage" | "peach" | "mauve";

export function StyleQuiz() {
  const [step, setStep] = useState<number>(1);
  const [rhythm, setRhythm] = useState<Rhythm>("yoga");
  const [feel, setFeel] = useState<Feel>("soft");
  const [palette, setPalette] = useState<Palette>("sage");

  // Determine top 2 recommended styles based on quiz state
  const getRecommendations = () => {
    let targetCategory = "leggings";
    if (rhythm === "running") targetCategory = "shorts";
    else if (rhythm === "strength") targetCategory = "sports-bras";
    else if (rhythm === "casual") targetCategory = "layers";

    const matchedByCategory = products.filter((p) => p.category === targetCategory);
    const fallbacks = products.filter((p) => p.category !== targetCategory);

    return [...matchedByCategory, ...fallbacks].slice(0, 2);
  };

  const recommendations = getRecommendations();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--color-bg)] via-[var(--vybe-peach)]/20 to-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
            Interactive Wardrobe Finder
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--color-text)]">
            Find Your Movement Vibe
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-md mx-auto mt-2">
            Answer 3 quick questions to discover your personalized studio ensemble.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg relative overflow-hidden">
          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === i
                    ? "w-8 bg-[var(--vybe-mauve)]"
                    : step > i
                    ? "w-3 bg-emerald-600"
                    : "w-3 bg-[var(--color-border)]"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Rhythm */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--vybe-mauve)] font-mono">
                    Step 1 of 3
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
                    What is your primary movement rhythm?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  {[
                    { id: "yoga", title: "Yoga & Pilates", desc: "Mindful stretches, low-impact studio flow", icon: "🧘‍♀️" },
                    { id: "strength", title: "Gym & Strength", desc: "High-tempo training, conditioning, weights", icon: "🏋️‍♀️" },
                    { id: "running", title: "Running & Agility", desc: "Outdoor morning runs, cycling, intervals", icon: "🏃‍♀️" },
                    { id: "casual", title: "Everyday Active", desc: "Coffee runs, airport travel, relaxed flow", icon: "✨" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setRhythm(opt.id as Rhythm);
                        setStep(2);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        rhythm === opt.id
                          ? "border-[var(--vybe-mauve)] bg-[var(--vybe-peach)]/40 shadow-xs"
                          : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-gray-400"
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text)]">{opt.title}</h4>
                        <p className="text-[11px] text-[var(--color-muted)] mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Feel */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--vybe-mauve)] font-mono">
                    Step 2 of 3
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
                    What silhouette feeling do you crave?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { id: "sculpt", title: "Sculpt & Hold", desc: "High compression that hugs your curves", badge: "Firm" },
                    { id: "soft", title: "Barely-There Soft", desc: "Second-skin cloud touch with gentle hold", badge: "Balanced" },
                    { id: "relaxed", title: "Relaxed Freedom", desc: "Breathable ease with zero waistband pinch", badge: "Easy" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setFeel(opt.id as Feel);
                        setStep(3);
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        feel === opt.id
                          ? "border-[var(--vybe-mauve)] bg-[var(--vybe-peach)]/40 shadow-xs"
                          : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-gray-400"
                      }`}
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--vybe-mauve)] mb-2">
                          {opt.badge}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text)]">{opt.title}</h4>
                        <p className="text-[11px] text-[var(--color-muted)] mt-1">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-start">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] flex items-center gap-1 cursor-pointer"
                  >
                    &larr; Back to Step 1
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Palette */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--vybe-mauve)] font-mono">
                    Step 3 of 3
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
                    Choose your color mood
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { id: "sage", title: "Botanical Sage", desc: "Grounded earthy tones", hex: "#d8e2dc" },
                    { id: "peach", title: "Warm Sunset Peach", desc: "Energizing warm radiance", hex: "#ffe5d9" },
                    { id: "mauve", title: "Studio Mauve & Rose", desc: "Sophisticated editorial chic", hex: "#9d8189" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setPalette(opt.id as Palette);
                        setStep(4);
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                        palette === opt.id
                          ? "border-[var(--vybe-mauve)] bg-[var(--vybe-peach)]/40 shadow-xs"
                          : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-gray-400"
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full border border-black/10 shrink-0 shadow-xs"
                        style={{ backgroundColor: opt.hex }}
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text)]">{opt.title}</h4>
                        <p className="text-[11px] text-[var(--color-muted)] mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-start">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] flex items-center gap-1 cursor-pointer"
                  >
                    &larr; Back to Step 2
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Results */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block font-mono">
                    ✓ Quiz Complete
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
                    Your Curated Studio Pairing
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] max-w-sm mx-auto">
                    Tailored for your {rhythm} rhythm with {feel} support.
                  </p>
                </div>

                {/* Recommended Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {recommendations.map((p) => {
                    const imageSrc =
                      p.images && p.images.length > 0
                        ? p.images[0].src
                        : "/images/products/concept-silhouette.svg";

                    return (
                      <div
                        key={p.id}
                        className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex gap-4 items-center justify-between shadow-xs"
                      >
                        <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                          <Image src={imageSrc} alt={p.name} fill className="object-cover" sizes="80px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] uppercase font-bold text-[var(--vybe-mauve)] block">
                            {p.category.replace("-", " ")}
                          </span>
                          <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text)] truncate mt-0.5">
                            {p.name}
                          </h4>
                          <p className="text-xs font-bold text-[var(--color-text)] mt-1">
                            {formatPrice(p.price)}
                          </p>
                          <Link
                            href={`/product/${p.slug}`}
                            className="inline-block mt-3 text-xs font-semibold text-[var(--color-text)] hover:text-[var(--vybe-mauve)] underline underline-offset-4"
                          >
                            Explore Style &rarr;
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)] underline cursor-pointer"
                  >
                    Retake Style Quiz
                  </button>
                  <span className="text-[var(--color-border)]">•</span>
                  <Link
                    href="/shop"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors shadow-xs"
                  >
                    Browse Entire Collection
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
