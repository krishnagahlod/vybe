"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LengthGuide } from "@/components/product/length-guide";

type Unit = "in" | "cm";

export default function SizeGuidePage() {
  const [unit, setUnit] = useState<Unit>("in");

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)] block mb-3">
            Size guide
          </span>
          <h1 className="font-headline text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--color-text)] mb-4">
            Find your fit
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            Measure once, then use the charts below to find your size across every VYBE piece, with international conversions.
          </p>

          {/* Unit Switcher */}
          <div className="mt-6 inline-flex rounded-md bg-[var(--color-surface)] p-1.5 border border-[var(--color-border)]">
            <button
              type="button"
              onClick={() => setUnit("in")}
              className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                unit === "in"
                  ? "bg-[var(--color-text)] text-white"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              Inches (IN)
            </button>
            <button
              type="button"
              onClick={() => setUnit("cm")}
              className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                unit === "cm"
                  ? "bg-[var(--color-text)] text-white"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              Centimeters (CM)
            </button>
          </div>
        </div>

        {/* Leg lengths */}
        <section id="lengths" className="mb-16 scroll-mt-40 p-6 sm:p-10 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)]">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-headline text-3xl sm:text-4xl text-[var(--color-text)] font-semibold">
              Petite, Regular or Tall?
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-lg mx-auto">
              Every VYBE legging, jogger and flare comes in three leg lengths, so the hem lands at your ankle, not on the floor.
            </p>
          </div>
          <LengthGuide />
        </section>

        {/* How to Measure Cards */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl font-semibold text-[var(--color-text)] mb-6 text-center sm:text-left">
            How to Take Your Measurements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[var(--vybe-peach)] text-[var(--vybe-mauve-ink)] font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)]">
                Bust / Chest
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Measure around the fullest part of your chest, keeping the measuring tape parallel to the floor with relaxed posture.
              </p>
            </div>

            <div className="p-5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[var(--vybe-peach)] text-[var(--vybe-mauve-ink)] font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)]">
                Natural Waist
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Measure around the narrowest part of your torso, typically one to two inches above your belly button.
              </p>
            </div>

            <div className="p-5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[var(--vybe-peach)] text-[var(--vybe-mauve-ink)] font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)]">
                Fullest Hip
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Stand with feet together and measure around the fullest circumference of your hips and glutes.
              </p>
            </div>

            <div className="p-5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[var(--vybe-peach)] text-[var(--vybe-mauve-ink)] font-bold text-xs flex items-center justify-center">
                4
              </span>
              <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)]">
                Leg Inseam
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Measure along the inside of your leg from the crotch seam straight down to your ankle bone.
              </p>
            </div>
          </div>
        </div>

        {/* Measurement Tables */}
        <div className="space-y-12">
          {/* Bottoms Table */}
          <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                  Leggings, Tights &amp; Biker Shorts
                </h3>
                <p className="text-xs text-[var(--color-muted)]">
                  Engineered with an ergonomic high-rise contoured waistband.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-sm bg-[var(--vybe-sage)]/40 text-[var(--color-text)]">
                {unit === "in" ? "Values in Inches" : "Values in Centimeters"}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-[var(--color-text)] uppercase font-semibold tracking-wider">
                    <th className="py-3 px-3">Size</th>
                    <th className="py-3 px-3">Waist</th>
                    <th className="py-3 px-3">Hips</th>
                    <th className="py-3 px-3">Full Inseam</th>
                    <th className="py-3 px-3">Biker Inseam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] font-mono text-[var(--color-muted)]">
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XS</td>
                    <td className="py-3 px-3">{unit === "in" ? "24 - 26\"" : "61 - 66 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "34 - 36\"" : "86 - 91 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "26\"" : "66 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "7\"" : "18 cm"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">S</td>
                    <td className="py-3 px-3">{unit === "in" ? "26 - 28\"" : "66 - 71 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "36 - 38\"" : "91 - 96 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "26.5\"" : "67 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "7.5\"" : "19 cm"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">M</td>
                    <td className="py-3 px-3">{unit === "in" ? "28 - 30\"" : "71 - 76 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "38 - 40\"" : "96 - 101 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "27\"" : "68 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "8\"" : "20 cm"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">L</td>
                    <td className="py-3 px-3">{unit === "in" ? "30 - 33\"" : "76 - 84 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "40 - 43\"" : "101 - 109 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "27.5\"" : "70 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "8.5\"" : "21 cm"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XL</td>
                    <td className="py-3 px-3">{unit === "in" ? "33 - 36\"" : "84 - 91 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "43 - 46\"" : "109 - 117 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "28\"" : "71 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "9\"" : "23 cm"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sports Bras & Tops Table */}
          <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                  Sports Bras, Cropped Tanks &amp; Studio Tops
                </h3>
                <p className="text-xs text-[var(--color-muted)]">
                  Medium-to-high support with removable soft-form padding.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-sm bg-[var(--vybe-peach)]/50 text-[var(--color-text)]">
                {unit === "in" ? "Values in Inches" : "Values in Centimeters"}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-[var(--color-text)] uppercase font-semibold tracking-wider">
                    <th className="py-3 px-3">Size</th>
                    <th className="py-3 px-3">Bust</th>
                    <th className="py-3 px-3">Underbust Band</th>
                    <th className="py-3 px-3">Standard Bra Equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] font-mono text-[var(--color-muted)]">
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XS</td>
                    <td className="py-3 px-3">{unit === "in" ? "30 - 32\"" : "76 - 81 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "26 - 28\"" : "66 - 71 cm"}</td>
                    <td className="py-3 px-3">30A, 30B, 32A</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">S</td>
                    <td className="py-3 px-3">{unit === "in" ? "32 - 34\"" : "81 - 86 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "28 - 30\"" : "71 - 76 cm"}</td>
                    <td className="py-3 px-3">32B, 32C, 34A</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">M</td>
                    <td className="py-3 px-3">{unit === "in" ? "34 - 36\"" : "86 - 91 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "30 - 32\"" : "76 - 81 cm"}</td>
                    <td className="py-3 px-3">34B, 34C, 36A</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">L</td>
                    <td className="py-3 px-3">{unit === "in" ? "36 - 39\"" : "91 - 99 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "32 - 34\"" : "81 - 86 cm"}</td>
                    <td className="py-3 px-3">36B, 36C, 38B</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XL</td>
                    <td className="py-3 px-3">{unit === "in" ? "39 - 42\"" : "99 - 107 cm"}</td>
                    <td className="py-3 px-3">{unit === "in" ? "34 - 37\"" : "86 - 94 cm"}</td>
                    <td className="py-3 px-3">38C, 38D, 40C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* International Size Conversions */}
          <div className="p-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <div className="border-b border-[var(--color-border)] pb-3">
              <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                International Size Conversions
              </h3>
              <p className="text-xs text-[var(--color-muted)]">
                Compare VYBE activewear grading with standard global benchmarks.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-[var(--color-text)] uppercase font-semibold tracking-wider">
                    <th className="py-3 px-3">VYBE (India)</th>
                    <th className="py-3 px-3">UK / AU</th>
                    <th className="py-3 px-3">US / CA</th>
                    <th className="py-3 px-3">Europe (EU)</th>
                    <th className="py-3 px-3">Fit Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] font-mono text-[var(--color-muted)]">
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XS</td>
                    <td className="py-3 px-3">UK 6</td>
                    <td className="py-3 px-3">US 2</td>
                    <td className="py-3 px-3">EU 34</td>
                    <td className="py-3 px-3 font-sans">Petite / Compression</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">S</td>
                    <td className="py-3 px-3">UK 8</td>
                    <td className="py-3 px-3">US 4</td>
                    <td className="py-3 px-3">EU 36</td>
                    <td className="py-3 px-3 font-sans">Sculpt / Standard</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">M</td>
                    <td className="py-3 px-3">UK 10</td>
                    <td className="py-3 px-3">US 6</td>
                    <td className="py-3 px-3">EU 38</td>
                    <td className="py-3 px-3 font-sans">True to Size</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">L</td>
                    <td className="py-3 px-3">UK 12</td>
                    <td className="py-3 px-3">US 8</td>
                    <td className="py-3 px-3">EU 40</td>
                    <td className="py-3 px-3 font-sans">Comfort Support</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[var(--color-text)]">XL</td>
                    <td className="py-3 px-3">UK 14</td>
                    <td className="py-3 px-3">US 10</td>
                    <td className="py-3 px-3">EU 42</td>
                    <td className="py-3 px-3 font-sans">Relaxed Movement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-all"
          >
            Shop the collection
          </Link>
        </div>
      </div>
    </div>
  );
}
