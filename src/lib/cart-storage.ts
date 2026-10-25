import { CartItem } from "@/types/cart";

const CART_STORAGE_KEY = "vybe_cart_v1";
export const CART_CHANGE_EVENT = "vybe:cart_updated";

/**
 * Safely retrieve cart items from localStorage on the client.
 * Returns empty array if not in browser or if storage is empty/invalid.
 */
export function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Filter and sanitize items to ensure valid schema
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof item.productId === "string" &&
        typeof item.size === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );
  } catch (err) {
    console.error("Failed to read cart from localStorage:", err);
    return [];
  }
}

/**
 * Safely save cart items to localStorage and notify listeners.
 */
export function setStoredCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;

  try {
    const validItems = items.filter(
      (item) => item.quantity > 0 && Boolean(item.productId) && Boolean(item.size)
    );
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(validItems));
    window.dispatchEvent(new CustomEvent(CART_CHANGE_EVENT, { detail: validItems }));
  } catch (err) {
    console.error("Failed to write cart to localStorage:", err);
  }
}

/**
 * Add or increment an item in the cart.
 */
export function addToCartStorage(
  productId: string,
  size: string,
  quantity = 1
): CartItem[] {
  const current = getStoredCart();
  const existingIndex = current.findIndex(
    (item) => item.productId === productId && item.size === size
  );

  let updated: CartItem[];
  if (existingIndex > -1) {
    updated = current.map((item, index) =>
      index === existingIndex
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    updated = [...current, { productId, size, quantity }];
  }

  setStoredCart(updated);
  return updated;
}

/**
 * Update the quantity of a specific item. If quantity <= 0, removes the item.
 */
export function updateCartStorageQuantity(
  productId: string,
  size: string,
  quantity: number
): CartItem[] {
  const current = getStoredCart();

  const updated = current
    .map((item) =>
      item.productId === productId && item.size === size
        ? { ...item, quantity }
        : item
    )
    .filter((item) => item.quantity > 0);

  setStoredCart(updated);
  return updated;
}

/**
 * Remove an item from the cart.
 */
export function removeFromCartStorage(
  productId: string,
  size: string
): CartItem[] {
  const current = getStoredCart();
  const updated = current.filter(
    (item) => !(item.productId === productId && item.size === size)
  );

  setStoredCart(updated);
  return updated;
}

/**
 * Clear the entire cart from storage.
 */
export function clearCartStorage(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(CART_CHANGE_EVENT, { detail: [] }));
  } catch (err) {
    console.error("Failed to clear cart:", err);
  }
}

/**
 * Subscriptions for useSyncExternalStore in React 18/19
 */
export function subscribeToCart(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CART_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CART_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function getCartSnapshot(): string {
  if (typeof window === "undefined") return "[]";
  return window.localStorage.getItem(CART_STORAGE_KEY) || "[]";
}

export function getServerCartSnapshot(): string {
  return "[]";
}
