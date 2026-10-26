"use client";

const WISHLIST_STORAGE_KEY = "vybe_wishlist_v1";

type WishlistListener = () => void;
const listeners = new Set<WishlistListener>();

function emitWishlistChange() {
  for (const listener of listeners) {
    listener();
  }
}

export function subscribeToWishlist(listener: WishlistListener): () => void {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === WISHLIST_STORAGE_KEY) {
      listener();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

let cachedWishlistRaw = "[]";

export function getWishlistSnapshot(): string {
  if (typeof window === "undefined") {
    return "[]";
  }
  const current = localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]";
  if (current !== cachedWishlistRaw) {
    cachedWishlistRaw = current;
  }
  return cachedWishlistRaw;
}

export function getServerWishlistSnapshot(): string {
  return "[]";
}

export function toggleWishlistStorage(productId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]";
    const current: string[] = JSON.parse(raw);
    const index = current.indexOf(productId);
    let isAdded = false;

    if (index >= 0) {
      current.splice(index, 1);
      isAdded = false;
    } else {
      current.push(productId);
      isAdded = true;
    }

    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(current));
    emitWishlistChange();
    return isAdded;
  } catch {
    return false;
  }
}
