"use client";

import React, { useState } from "react";
import Link from "next/link";

const TOPICS = ["Fit & sizing", "An order", "Styling advice", "Something else"];

const QUICK_ANSWERS = [
  { label: "Size & fit guide", href: "/size-guide" },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "Track an order", href: "/track-order" },
  { label: "Delivery & exchanges", href: "/shipping-returns" },
];

const fieldClass =
  "w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-base text-[var(--color-text)] placeholder-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-text)] transition-colors";
const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: TOPICS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Intro & quick answers */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-5 animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">Contact</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.05]">
              We&apos;d love to <span className="italic">hear from you.</span>
            </h1>
            <p className="text-base text-[var(--color-muted)] leading-relaxed max-w-md">
              Questions about fit, an order, or what to wear to your next class? Send us a note.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={labelClass}>Quick answers</h2>
            <ul className="border-t border-[var(--color-border)]">
              {QUICK_ANSWERS.map((item) => (
                <li key={item.href} className="border-b border-[var(--color-border)]">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-4 font-serif text-xl text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="rounded-md bg-[var(--vybe-peach)]/40 p-6 sm:p-12">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-up" role="status">
                <p className="font-serif text-4xl text-[var(--color-text)]">
                  Thank you{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}.
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm mx-auto">
                  VYBE is a concept store, so your message hasn&apos;t been sent anywhere, but this is where we&apos;d
                  confirm we&apos;d received it.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: TOPICS[0], message: "" });
                  }}
                  className="mt-4 inline-flex px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] border border-[var(--color-text)]/25 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contactName" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>What&apos;s it about?</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {TOPICS.map((topic) => (
                      <label
                        key={topic}
                        className={`px-4 py-2 rounded-sm text-sm border cursor-pointer transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--vybe-mauve-ink)] ${
                          formData.subject === topic
                            ? "bg-[var(--color-text)] text-white border-[var(--color-text)]"
                            : "border-[var(--color-text)]/20 text-[var(--color-text)] hover:border-[var(--color-text)]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={topic}
                          checked={formData.subject === topic}
                          onChange={() => setFormData({ ...formData, subject: topic })}
                          className="sr-only"
                        />
                        {topic}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="contactMessage" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
