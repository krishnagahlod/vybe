"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";
import {
  ACTIVITIES,
  COLLECTIONS,
  FABRICS,
  FABRIC_IDS,
  SIZES,
  ShopFilterState,
  filterProducts,
  getCollection,
} from "@/lib/catalog";

type ShopFiltersProps = {
  initialProducts: Product[];
  initial: Partial<ShopFilterState>;
};

const COLORS = [
  { name: "Sage", hex: "#c8d5c8" },
  { name: "Chalk", hex: "#f6f1ea" },
  { name: "Pale Peach", hex: "#ffe5d9" },
  { name: "Soft Pink", hex: "#ffcad4" },
  { name: "Rose", hex: "#f4acb7" },
  { name: "Muted Mauve", hex: "#9d8189" },
  { name: "Aubergine", hex: "#452b3a" },
  { name: "Cream", hex: "#f3ead8" },
  { name: "Mint", hex: "#cfeee0" },
  { name: "Cobalt", hex: "#3d5afe" },
  { name: "Navy", hex: "#1f2a4d" },
  { name: "Maroon", hex: "#6b1e24" },
  { name: "Black", hex: "#1a1a1a" },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

const DEFAULTS: ShopFilterState = { collection: "all", activity: "all", fabric: "all", size: "all", color: "all", query: "" };

const selectClass =
  "h-10 pl-3 pr-8 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)] hover:border-[var(--color-text)] focus:outline-none focus:border-[var(--color-text)] cursor-pointer transition-colors";

export function ShopFilters({ initialProducts, initial }: ShopFiltersProps) {
  const [filters, setFilters] = useState<ShopFilterState>({ ...DEFAULTS, ...initial });
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const set = (patch: Partial<ShopFilterState>) => setFilters((f) => ({ ...f, ...patch }));

  const filteredProducts = useMemo(() => {
    const result = filterProducts(initialProducts, filters);
    switch (sortBy) {
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);
      case "price-desc":
        return result.sort((a, b) => b.price - a.price);
      case "name-asc":
        return result.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return result;
    }
  }, [initialProducts, filters, sortBy]);

  // The heading reflects whichever filter brought the visitor here
  const collection = getCollection(filters.collection);
  const activity = ACTIVITIES.find((a) => a.id === filters.activity);
  const fabric = filters.fabric !== "all" ? FABRICS[filters.fabric as keyof typeof FABRICS] : undefined;
  const heading = filters.query.trim()
    ? { eyebrow: "Search", title: `“${filters.query.trim()}”`, text: "Pieces that match your search." }
    : collection
      ? { eyebrow: "Collection", title: collection.label, text: "Built-in support, no lines, cut for Indian bodies." }
      : activity
        ? { eyebrow: "Shop by movement", title: activity.label, text: activity.blurb }
        : fabric
          ? { eyebrow: "Core fabric", title: fabric.name, text: `${fabric.tagline}: ${fabric.properties.join(" · ").toLowerCase()}.` }
          : filters.size !== "all"
            ? { eyebrow: "Shop by size", title: `Size ${filters.size}`, text: "Every piece available in your size." }
            : {
                eyebrow: "All pieces",
                title: "Shop the collection",
                text: `${initialProducts.length} pieces, cut for Indian bodies and made for Indian heat.`,
              };

  const activeChips = [
    filters.activity !== "all" && { label: activity?.label ?? filters.activity, clear: { activity: "all" } },
    filters.fabric !== "all" && { label: fabric?.name ?? filters.fabric, clear: { fabric: "all" } },
    filters.size !== "all" && { label: `Size ${filters.size}`, clear: { size: "all" } },
    filters.color !== "all" && { label: filters.color, clear: { color: "all" } },
    filters.query.trim() && { label: `“${filters.query.trim()}”`, clear: { query: "" } },
  ].filter(Boolean) as { label: string; clear: Partial<ShopFilterState> }[];

  const hasActiveFilters = filters.collection !== "all" || activeChips.length > 0;
  const reset = () => {
    setFilters(DEFAULTS);
    setSortBy("featured");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-3 animate-fade-up">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">{heading.eyebrow}</p>
        <h1 className="font-headline text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)]">{heading.title}</h1>
        <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl">{heading.text}</p>
      </div>

      <div className="space-y-6">
        {/* Collection tabs */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none]">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max border-b border-[var(--color-border)]" role="tablist" aria-label="Collections">
            {[{ id: "all", label: "All" }, ...COLLECTIONS].map((c) => {
              const isActive = filters.collection === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => set({ collection: c.id })}
                  className={`relative -mb-px pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer border-b ${
                    isActive
                      ? "text-[var(--color-text)] border-[var(--color-text)]"
                      : "text-[var(--color-muted)] border-transparent hover:text-[var(--color-text)]"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Refine */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <select aria-label="Activity" value={filters.activity} onChange={(e) => set({ activity: e.target.value })} className={selectClass}>
              <option value="all">Movement</option>
              {ACTIVITIES.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
            <select aria-label="Fabric" value={filters.fabric} onChange={(e) => set({ fabric: e.target.value })} className={selectClass}>
              <option value="all">Fabric</option>
              {FABRIC_IDS.map((id) => (
                <option key={id} value={id}>
                  {FABRICS[id].name}
                </option>
              ))}
            </select>
            <select aria-label="Size" value={filters.size} onChange={(e) => set({ size: e.target.value })} className={selectClass}>
              <option value="all">Size</option>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-1.5 sm:ml-2" role="group" aria-label="Filter by colour">
              {COLORS.map((col) => {
                const isSelected = filters.color === col.name;
                return (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => set({ color: isSelected ? "all" : col.name })}
                    aria-pressed={isSelected}
                    aria-label={col.name}
                    title={col.name}
                    className={`w-7 h-7 rounded-full border transition-shadow cursor-pointer ${
                      isSelected ? "border-white ring-2 ring-[var(--color-text)]" : "border-black/10 hover:ring-2 hover:ring-[var(--color-border)]"
                    }`}
                    style={{ backgroundColor: col.hex }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative flex-1 sm:w-56 sm:flex-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                aria-label="Search the collection"
                placeholder="Search"
                value={filters.query}
                onChange={(e) => set({ query: e.target.value })}
                className="w-full pl-7 pr-2 py-2 bg-transparent border-b border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <label htmlFor="shop-sort" className="text-xs text-[var(--color-muted)] whitespace-nowrap">
                Sort
              </label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="py-2 pr-1 bg-transparent text-sm text-[var(--color-text)] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="name-asc">Name A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted)]">
          <span className="mr-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
          </span>
          {activeChips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => set(chip.clear)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)] cursor-pointer"
              aria-label={`Remove filter ${chip.label}`}
            >
              {chip.label} <span aria-hidden="true">&times;</span>
            </button>
          ))}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={reset}
              className="ml-1 text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve-ink)] cursor-pointer"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border-y border-[var(--color-border)]">
          <h2 className="font-headline text-3xl text-[var(--color-text)] mb-2 font-semibold">Nothing matches just yet</h2>
          <p className="text-sm text-[var(--color-muted)] max-w-sm mx-auto mb-6">Try a different search, colour or filter.</p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
          >
            Show everything
          </button>
        </div>
      )}
    </div>
  );
}
