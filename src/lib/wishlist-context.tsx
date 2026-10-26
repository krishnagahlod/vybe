"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
  useSyncExternalStore,
} from "react";
import {
  subscribeToWishlist,
  getWishlistSnapshot,
  getServerWishlistSnapshot,
  toggleWishlistStorage,
} from "./wishlist-storage";

type WishlistContextType = {
  wishlistIds: string[];
  wishlistCount: number;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  isWishlistModalOpen: boolean;
  openWishlistModal: () => void;
  closeWishlistModal: () => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

  const rawWishlist = useSyncExternalStore(
    subscribeToWishlist,
    getWishlistSnapshot,
    getServerWishlistSnapshot
  );

  const wishlistIds = useMemo(() => {
    try {
      const parsed = JSON.parse(rawWishlist);
      return Array.isArray(parsed) ? (parsed as string[]) : [];
    } catch {
      return [];
    }
  }, [rawWishlist]);

  const isInWishlist = useCallback(
    (productId: string) => wishlistIds.includes(productId),
    [wishlistIds]
  );

  const toggleWishlist = useCallback((productId: string) => {
    toggleWishlistStorage(productId);
  }, []);

  const openWishlistModal = useCallback(() => setIsWishlistModalOpen(true), []);
  const closeWishlistModal = useCallback(() => setIsWishlistModalOpen(false), []);

  const value = useMemo(
    () => ({
      wishlistIds,
      wishlistCount: wishlistIds.length,
      isInWishlist,
      toggleWishlist,
      isWishlistModalOpen,
      openWishlistModal,
      closeWishlistModal,
    }),
    [
      wishlistIds,
      isInWishlist,
      toggleWishlist,
      isWishlistModalOpen,
      openWishlistModal,
      closeWishlistModal,
    ]
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
