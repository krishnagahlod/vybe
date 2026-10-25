"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)]">
            <ol className="flex items-center justify-center sm:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block font-mono">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
            Project Inquiries
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-light max-w-2xl">
            Have questions about the VYBE concept activewear project or our Phase 2 digital marketing test? Send a simulated inquiry below.
          </p>
        </div>

        {/* Academic Disclosure Box */}
        <div className="p-5 rounded-2xl bg-[var(--vybe-peach)]/35 border border-[var(--color-border)] text-xs text-[var(--color-text)] leading-relaxed space-y-1.5">
          <p className="font-semibold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--vybe-mauve)]" />
            Academic Evaluation Notice
          </p>
          <p>
            VYBE is a prototype developed for ENT 625 Digital Marketing. In adherence to project guidelines, <strong>no fictional corporate address, fake customer service hotline, or invented telephone number</strong> is published.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Contact Form */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--vybe-sage)] flex items-center justify-center text-[var(--color-text)] font-bold text-lg">
                  &#10003;
                </div>
                <h2 className="font-serif text-2xl font-medium text-[var(--color-text)]">
                  Simulated Message Received
                </h2>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-[var(--color-text)]">{formData.name || "visitor"}</strong>. This inquiry form is a demonstration component for ENT 625; no email has been dispatched.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ananya@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactSubject"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project feedback / Activewear inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactMessage"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message or feedback..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-hidden focus:ring-2 focus:ring-[var(--vybe-mauve)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
                >
                  Send Simulated Message &rarr;
                </button>
              </form>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-medium text-[var(--color-text)]">
                Campaign Information
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                VYBE activewear is being tested across four primary metropolitan regions in India:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[var(--color-text)]">
                <span className="p-2 rounded bg-[var(--vybe-sage)]/30 text-center border border-[var(--color-border)]">
                  Mumbai
                </span>
                <span className="p-2 rounded bg-[var(--vybe-peach)]/30 text-center border border-[var(--color-border)]">
                  Pune
                </span>
                <span className="p-2 rounded bg-[var(--vybe-pink)]/30 text-center border border-[var(--color-border)]">
                  Delhi
                </span>
                <span className="p-2 rounded bg-[var(--vybe-rose)]/25 text-center border border-[var(--color-border)]">
                  Bangalore
                </span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-2">
              <h3 className="font-serif text-lg font-medium text-[var(--color-text)]">
                Academic Inquiries
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                This project is submitted under <strong>ENT 625 — Phase 2 Digital Marketing</strong>. Evaluators may review the complete shopping funnel from browse to simulated confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
