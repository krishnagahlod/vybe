"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";

type ShopFiltersProps = {
  initialProducts: Product[];
  initialCategory?: string;
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "leggings", label: "Leggings" },
  { id: "sports-bras", label: "Sports Bras" },
  { id: "tops", label: "Tops" },
  { id: "shorts", label: "Shorts" },
  { id: "sets", label: "Sets" },
  { id: "layers", label: "Layers" },
  { id: "court", label: "Court" },
];

const COLORS = [
  { name: "Sage", value: "Sage", hex: "#c8d5c8" },
  { name: "Chalk", value: "Chalk", hex: "#f6f1ea" },
  { name: "Pale Peach", value: "Pale Peach", hex: "#ffe5d9" },
  { name: "Soft Pink", value: "Soft Pink", hex: "#ffcad4" },
  { name: "Rose", value: "Rose", hex: "#f4acb7" },
  { name: "Muted Mauve", value: "Muted Mauve", hex: "#9d8189" },
  { name: "Aubergine", value: "Aubergine", hex: "#452b3a" },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export function ShopFilters({ initialProducts, initialCategory = "all" }: ShopFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Color filter
    if (selectedColor && selectedColor !== "all") {
      // Multi-colour pieces ("Sage / Rose") match each of their colours
      result = result.filter((p) =>
        p.colorName?.split(" / ").some((c) => c.toLowerCase() === selectedColor.toLowerCase())
      );
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.colorName && p.colorName.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, selectedCategory, selectedColor, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedCategory !== "all" || selectedColor !== "all" || searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedColor("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        {/* Category tabs */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max border-b border-[var(--color-border)]" role="tablist" aria-label="Product categories">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative -mb-px pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer border-b ${
                    isActive
                      ? "text-[var(--color-text)] border-[var(--color-text)]"
                      : "text-[var(--color-muted)] border-transparent hover:text-[var(--color-text)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Colour, search, sort */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 justify-between">
          <div className="flex items-center gap-3" role="group" aria-label="Filter by colour">
            <span className="text-xs text-[var(--color-muted)]">Colour</span>
            <div className="flex items-center gap-2">
              {COLORS.map((col) => {
                const isSelected = selectedColor === col.value;
                return (
                  <button
                    key={col.value}
                    type="button"
                    onClick={() => setSelectedColor(isSelected ? "all" : col.value)}
                    aria-pressed={isSelected}
                    aria-label={col.name}
                    title={col.name}
                    className={`w-7 h-7 rounded-full border transition-shadow cursor-pointer ${
                      isSelected
                        ? "border-white ring-2 ring-[var(--color-text)]"
                        : "border-black/10 hover:ring-2 hover:ring-[var(--color-border)]"
                    }`}
                    style={{ backgroundColor: col.hex }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:flex-1 lg:justify-end">
            <div className="relative sm:w-64">
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-7 pr-2 py-2 bg-transparent border-b border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
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

        <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
          <span>
            {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve-ink)] cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border-y border-[var(--color-border)]">
          <h2 className="font-serif text-3xl text-[var(--color-text)] mb-2">Nothing matches just yet</h2>
          <p className="text-sm text-[var(--color-muted)] max-w-sm mx-auto mb-6">
            Try a different search, colour or category.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors cursor-pointer"
          >
            Show everything
          </button>
        </div>
      )}
    </div>
  );
}
