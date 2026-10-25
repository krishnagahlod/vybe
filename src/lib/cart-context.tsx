"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useSyncExternalStore,
} from "react";
import { CartItem } from "@/types/cart";
import {
  addToCartStorage,
  updateCartStorageQuantity,
  removeFromCartStorage,
  clearCartStorage,
  subscribeToCart,
  getCartSnapshot,
  getServerCartSnapshot,
} from "./cart-storage";

type CartContextType = {
  items: CartItem[];
  totalCount: number;
  isLoaded: boolean;
  addItem: (productId: string, size: string, quantity?: number) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Subscribe to external localStorage store with React's official useSyncExternalStore
  const rawCart = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot
  );

  const items = useMemo(() => {
    try {
      const parsed = JSON.parse(rawCart);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (item): item is CartItem =>
          typeof item === "object" &&
          item !== null &&
          typeof item.productId === "string" &&
          typeof item.size === "string" &&
          typeof item.quantity === "number" &&
          item.quantity > 0
      );
    } catch {
      return [];
    }
  }, [rawCart]);

  const addItem = useCallback((productId: string, size: string, quantity = 1) => {
    addToCartStorage(productId, size, quantity);
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    updateCartStorageQuantity(productId, size, quantity);
  }, []);

  const removeItem = useCallback((productId: string, size: string) => {
    removeFromCartStorage(productId, size);
  }, []);

  const clearCart = useCallback(() => {
    clearCartStorage();
  }, []);

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totalCount,
      isLoaded: true,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [items, totalCount, addItem, updateQuantity, removeItem, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
