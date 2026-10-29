"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { trackQuizComplete } from "@/lib/analytics";
import { type Answers, recommend } from "@/lib/quiz";

type Question = { key: keyof Answers; title: string; options: { id: string; label: string; hint?: string }[] };

const QUESTIONS: Question[] = [
  {
    key: "activity",
    title: "Where do you feel most like yourself?",
    options: [
      { id: "dance", label: "Dance class" },
      { id: "court", label: "On the court", hint: "Badminton, tennis, pickleball" },
      { id: "gym", label: "Lifting at the gym" },
      { id: "yoga", label: "On the mat", hint: "Yoga, Pilates" },
      { id: "walk", label: "Walks and runs" },
    ],
  },
  {
    key: "pain",
    title: "What ruins a good session for you?",
    options: [
      { id: "lines", label: "Underwear lines or see-through fabric" },
      { id: "rideup", label: "Top riding up or a bra that doesn't hold" },
      { id: "heat", label: "Feeling hot and sweaty" },
      { id: "shorts", label: "Shorts riding up" },
      { id: "waistband", label: "Waistband rolling down" },
    ],
  },
  {
    key: "style",
    title: "Pick the look you'd wear on your best day.",
    options: [
      { id: "prints", label: "Bold prints" },
      { id: "brights", label: "Bright colour pops" },
      { id: "pastels", label: "Soft pastels" },
      { id: "set", label: "Head-to-toe matching set" },
    ],
  },
  {
    key: "fit",
    title: "How do you like your fit?",
    options: [
      { id: "sleek", label: "Sleek and fitted" },
      { id: "relaxed", label: "Relaxed and flowy" },
      { id: "coverage", label: "More coverage" },
      { id: "showoff", label: "Show it off" },
    ],
  },
  {
    key: "height",
    title: "How tall are you?",
    options: [
      { id: "petite", label: "Under 5'4\"" },
      { id: "regular", label: "5'4\" to 5'7\"" },
      { id: "tall", label: "Over 5'7\"" },
    ],
  },
  {
    key: "after",
    title: "Where do you head after?",
    options: [
      { id: "home", label: "Straight home" },
      { id: "coffee", label: "Coffee with the girls" },
      { id: "work", label: "Office or college" },
    ],
  },
];

const HEIGHT_WHY: Record<Answers["height"], string> = {
  petite: "You're under 5'4\", so your leggings and flares come in Petite and end at your ankle, not the floor.",
  regular: "You're 5'4\" to 5'7\", so Regular length lands right at your ankle.",
  tall: "You're over 5'7\", so we picked Tall: no hems stopping short.",
};

const AFTER_WHY = "You're heading out after, so we added a jacket you can throw on over it.";

const stepMotion = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.2 },
};

const optionClass = (selected: boolean) =>
  `w-full p-4 sm:p-5 rounded-2xl border text-left transition-colors cursor-pointer ${
    selected
      ? "border-[var(--color-text)] bg-[var(--vybe-petal)]/60"
      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-text)]/40"
  }`;

/** Demo only, like the footer sign-up: nothing is sent or stored. */
function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <p role="status" className="text-sm text-center text-[var(--color-text)]">
        <span className="font-headline font-bold text-lg block">You&apos;re on the list.</span>
        VYBE is a concept store, so we haven&apos;t saved your email and won&apos;t send anything.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
    >
      <label htmlFor="quiz-email" className="sr-only">
        Email address
      </label>
      <input
        id="quiz-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoComplete="email"
        className="w-full sm:flex-1 min-w-0 h-12 px-5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)]"
      />
      <button
        type="submit"
        className="h-12 px-6 rounded-full text-sm font-semibold bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
      >
        Get early access to your outfit
      </button>
    </form>
  );
}

export function StyleQuiz() {
  // step 0 = intro, 1–6 = questions, 7 = result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});

  const done = step > QUESTIONS.length;
  const result = done ? recommend(answers as Answers) : null;
  const outfit = result ? result.products.map(getProductBySlug).filter((p) => p !== undefined) : [];
  const total = outfit.reduce((sum, p) => sum + p.price, 0);
  const lengthMatters = outfit.some((p) => p.lengths);

  const choose = (key: keyof Answers, id: string) => {
    const next = { ...answers, [key]: id };
    setAnswers(next);
    if (step === QUESTIONS.length) {
      const r = recommend(next as Answers);
      trackQuizComplete(next as Record<string, string>, r.name);
    }
    setStep(step + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(1);
  };

  const q = QUESTIONS[step - 1];

  return (
    <section id="style-quiz" className="py-16 sm:py-24 bg-[var(--vybe-petal)]/50 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {step === 0 && (
              <motion.div key="intro" {...stepMotion} className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px]">
                  <Image
                    src="/images/products/new/built-in-bra-tank-1.jpg"
                    alt="A woman in the Built-In Bra Tank and side-stripe track pants, holding a ball"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[center_25%]"
                  />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-cherry-ink)]">Find your VYBE</p>
                  <h2 className="mt-3 font-headline text-3xl lg:text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">
                    What&apos;s your kind of movement?
                  </h2>
                  <p className="mt-4 text-base text-[var(--color-muted)]">6 quick questions. One outfit made for how you move.</p>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-8 self-start px-8 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
                  >
                    Let&apos;s go
                  </button>
                </div>
              </motion.div>
            )}

            {q && (
              <motion.div key={q.key} {...stepMotion} className="p-6 sm:p-12 space-y-8">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {QUESTIONS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${i < step ? "bg-[var(--color-text)]" : "bg-[var(--color-border)]"}`}
                    />
                  ))}
                </div>
                <div className="text-center space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-mauve-ink)]">
                    Question {step} of {QUESTIONS.length}
                  </p>
                  <h3 className="font-headline text-2xl sm:text-4xl font-bold tracking-[-0.01em] text-[var(--color-text)]">{q.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {q.options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={answers[q.key] === opt.id}
                      onClick={() => choose(q.key, opt.id)}
                      className={optionClass(answers[q.key] === opt.id)}
                    >
                      <span className="block text-sm sm:text-base font-semibold text-[var(--color-text)]">{opt.label}</span>
                      {opt.hint && <span className="block text-sm text-[var(--color-muted)] mt-0.5">{opt.hint}</span>}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] cursor-pointer"
                >
                  &larr; Back
                </button>
              </motion.div>
            )}

            {result && (
              <motion.div key="result" {...stepMotion} className="p-6 sm:p-12 space-y-8">
                <div className="text-center space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-mauve-ink)]">Your kind of movement is</p>
                  <h3 className="font-headline text-5xl sm:text-7xl font-extrabold tracking-[-0.03em] text-[var(--color-text)]">{result.name}</h3>
                  <p className="text-base sm:text-lg text-[var(--color-muted)]">{result.line}</p>
                </div>

                <ul className={`grid gap-4 ${outfit.length === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 max-w-xl mx-auto"}`}>
                  {outfit.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}${p.lengths ? `?length=${result.length}` : ""}`}
                        className="group block"
                      >
                        <span className="relative block aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--vybe-petal)]/40">
                          <Image src={p.images[0].src} alt={p.images[0].alt} fill sizes="(max-width: 640px) 50vw, 300px" className="object-cover" />
                          {p.slug === result.tagged && (
                            <span className="absolute top-3 left-3 -rotate-3 px-3 py-1 rounded-full bg-[var(--vybe-pastel-pink)] text-[var(--vybe-ink)] text-[10px] font-bold uppercase tracking-[0.08em]">
                              Breathable pick
                            </span>
                          )}
                        </span>
                        <span className="block mt-3 text-sm sm:text-[15px] font-medium text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)]">
                          {p.name}
                          {p.lengths && <span className="text-[var(--color-muted)]"> ({result.length})</span>}
                        </span>
                        <span className="block text-sm text-[var(--color-text)]">{formatPrice(p.price)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <p className="font-headline font-bold text-lg text-[var(--color-text)]">
                    Your outfit: {formatPrice(total)} · every piece under ₹3,000
                  </p>
                  <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                    <span className="font-semibold text-[var(--color-text)]">Why these: </span>
                    {result.why}
                    {lengthMatters && ` ${HEIGHT_WHY[answers.height as Answers["height"]]}`}
                    {answers.after !== "home" && ` ${AFTER_WHY}`}
                  </p>
                </div>

                <EarlyAccessForm />

                <div className="flex items-center justify-center gap-6">
                  <button
                    type="button"
                    onClick={restart}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] underline underline-offset-4 cursor-pointer"
                  >
                    Start again
                  </button>
                  <Link href="/shop" className="text-sm font-semibold text-[var(--color-text)] underline underline-offset-4">
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
