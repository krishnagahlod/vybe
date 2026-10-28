"use client";

import React, { useState } from "react";

/** Demo sign-up: nothing is sent or stored, the visitor just sees a confirmation. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="text-sm text-[var(--color-text)] leading-relaxed">
        <span className="font-serif text-2xl block mb-1">
          You&apos;re on the <span className="italic">list.</span>
        </span>
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
      className="flex items-center border-b border-[var(--color-text)]/40 focus-within:border-[var(--color-text)] transition-colors"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        autoComplete="email"
        className="flex-1 min-w-0 py-3 bg-transparent text-sm text-[var(--color-text)] placeholder:text-[var(--color-text)]/55 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 py-3 pl-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
      >
        Sign up &rarr;
      </button>
    </form>
  );
}
