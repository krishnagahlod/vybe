"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";

type ShopFiltersProps = {
  initialProducts: Product[];
  initialCategory?: string;
};

const CATEGORIES = [
  { id: "all", label: "All Movement" },
  { id: "leggings", label: "Leggings & Tights" },
  { id: "sports-bras", label: "Sports Bras" },
  { id: "tops", label: "Tops & Tanks" },
  { id: "shorts", label: "Shorts" },
  { id: "sets", label: "Matching Sets" },
  { id: "layers", label: "Layers & Joggers" },
];

const COLORS = [
  { name: "All Colors", value: "all", hex: null },
  { name: "Sage", value: "Sage", hex: "#d8e2dc" },
  { name: "Pale Peach", value: "Pale Peach", hex: "#ffe5d9" },
  { name: "Soft Pink", value: "Soft Pink", hex: "#ffcad4" },
  { name: "Rose", value: "Rose", hex: "#f4acb7" },
  { name: "Muted Mauve", value: "Muted Mauve", hex: "#9d8189" },
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
      result = result.filter(
        (p) => p.colorName && p.colorName.toLowerCase() === selectedColor.toLowerCase()
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
    <div className="space-y-8">
      {/* Search & Sort Controls Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by silhouette, style, or color..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--vybe-mauve)] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-text)] text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-3 shrink-0">
          <label htmlFor="shop-sort" className="text-xs font-medium text-[var(--color-muted)] whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="shop-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="py-2.5 px-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text)] focus:outline-none focus:border-[var(--vybe-mauve)] cursor-pointer"
          >
            <option value="featured">Curated &amp; Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Product Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-text)] text-white shadow-xs"
                    : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--vybe-mauve)] hover:bg-[var(--vybe-peach)]/25"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Swatch Filter Pills */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium text-[var(--color-muted)] mr-1">Color Palette:</span>
        {COLORS.map((col) => {
          const isSelected = selectedColor === col.value;
          return (
            <button
              key={col.value}
              type="button"
              onClick={() => setSelectedColor(col.value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[var(--color-text)] text-white border-[var(--color-text)] shadow-xs"
                  : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-gray-400"
              }`}
            >
              {col.hex && (
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: col.hex }}
                />
              )}
              <span>{col.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Filter Badges & Results Counter */}
      <div className="flex items-center justify-between text-xs pt-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-[var(--color-text)]">
            Showing {filteredProducts.length} of {initialProducts.length} styles
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[11px] font-semibold text-[var(--vybe-mauve)] hover:underline ml-2"
            >
              Reset all filters ✕
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-[var(--color-border)] rounded-3xl bg-[var(--color-surface)] p-8">
          <div className="w-14 h-14 rounded-full bg-[var(--vybe-peach)]/50 mx-auto flex items-center justify-center text-[var(--vybe-mauve)] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-text)] mb-2">
            No matching concept styles found
          </h2>
          <p className="text-xs text-[var(--color-muted)] max-w-sm mx-auto mb-6">
            Try adjusting your search query, selecting another color palette, or resetting category filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors shadow-xs"
          >
            Show All 12 Concepts
          </button>
        </div>
      )}
    </div>
  );
}
