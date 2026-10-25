/**
 * Formats a numeric price into INR currency display.
 * As specified in PRODUCT_CATALOG.md:
 * Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
 */
const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(price: number): string {
  return inrFormatter.format(price);
}
