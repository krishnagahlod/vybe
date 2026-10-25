"use client";

import { useEffect } from "react";
import { Product } from "@/types/product";
import { trackViewItem } from "@/lib/analytics";

export function ProductViewTracker({ product }: { product: Product }) {
  useEffect(() => {
    trackViewItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
    });
  }, [product]);

  return null;
}
