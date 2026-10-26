/**
 * Delivery pricing shared by the bag, checkout, and confirmation (matches the FAQ).
 */
export const FREE_DELIVERY_THRESHOLD = 1500;
export const DELIVERY_FEE = 99;

export function getDeliveryFee(subtotal: number): number {
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}
