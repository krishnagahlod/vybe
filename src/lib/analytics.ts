"use client";

/**
 * VYBE Analytics Integration Layer
 * Adheres strictly to ANALYTICS_TRACKING.md and TECHNICAL_ARCHITECTURE.md.
 * 
 * Rules:
 * - Never send names, email addresses, phone numbers, or shipping addresses in event parameters.
 * - Never fire GA4 'purchase' or Meta 'Purchase' for the simulated checkout.
 * - Support GTM dataLayer and optional direct GA4/Meta Pixel tags.
 * - Safely logs and buffers events if tracking IDs are absent (placeholder mode).
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const isTrackingConfigured = Boolean(GTM_ID || GA4_ID || META_PIXEL_ID);

/**
 * Push an event to GTM dataLayer safely.
 */
function pushToDataLayer(eventData: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  // In development or demo mode, log to console for instant QA visibility
  if (process.env.NODE_ENV !== "production" || !isTrackingConfigured) {
    console.info(`[VYBE Analytics] ${eventData.event}:`, eventData);
  }
}

/**
 * 1. Page View Event
 * GA4: page_view
 * Meta: PageView
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  const payload = {
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== "undefined" ? document.title : ""),
    timestamp: new Date().toISOString(),
  };

  pushToDataLayer(payload);

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: payload.page_title,
    });
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("track", "PageView");
  }
}

/**
 * 2. Product Detail Viewed Event
 * GA4: view_item
 * Meta: ViewContent
 */
export function trackViewItem(product: {
  id: string;
  name: string;
  category: string;
  price: number;
}) {
  const payload = {
    event: "view_item",
    ecommerce: {
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: 1,
        },
      ],
    },
    timestamp: new Date().toISOString(),
  };

  pushToDataLayer(payload);

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "view_item", payload.ecommerce);
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("track", "ViewContent", {
      content_ids: [product.id],
      content_name: product.name,
      content_category: product.category,
      value: product.price,
      currency: "INR",
    });
  }
}

/**
 * 3. Add to Cart Event
 * GA4: add_to_cart
 * Meta: AddToCart
 */
export function trackAddToCart(
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
  },
  quantity: number,
  size: string
) {
  const payload = {
    event: "add_to_cart",
    ecommerce: {
      currency: "INR",
      value: product.price * quantity,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          item_variant: size,
          price: product.price,
          quantity,
        },
      ],
    },
    timestamp: new Date().toISOString(),
  };

  pushToDataLayer(payload);

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "add_to_cart", payload.ecommerce);
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("track", "AddToCart", {
      content_ids: [product.id],
      content_name: product.name,
      content_category: product.category,
      value: product.price * quantity,
      currency: "INR",
    });
  }
}

/**
 * 4. Begin Checkout Event
 * GA4: begin_checkout
 * Meta: InitiateCheckout
 */
export function trackBeginCheckout(itemCount: number, subtotal: number) {
  const payload = {
    event: "begin_checkout",
    ecommerce: {
      currency: "INR",
      value: subtotal,
      item_count: itemCount,
    },
    timestamp: new Date().toISOString(),
  };

  pushToDataLayer(payload);

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "begin_checkout", payload.ecommerce);
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("track", "InitiateCheckout", {
      num_items: itemCount,
      value: subtotal,
      currency: "INR",
    });
  }
}

/** Style quiz finished: every answer plus the result name, for the learnings page. */
export function trackQuizComplete(answers: Record<string, string>, result: string) {
  pushToDataLayer({ event: "quiz_complete", ...answers, result });

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "quiz_complete", { ...answers, result });
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("trackCustom", "QuizComplete", { activity: answers.activity, pain: answers.pain, result });
  }
}

/**
 * 5. Demo Checkout Complete Event
 * GA4: demo_checkout_complete (NOT purchase)
 * Meta: Custom DemoCheckoutComplete (NOT Purchase)
 * 
 * Strict Constraint: Under NO circumstances should real 'purchase' or 'Purchase'
 * be emitted, and NO personal contact info is passed.
 */
export function trackDemoCheckoutComplete(
  orderId: string,
  itemCount: number,
  subtotal: number
) {
  const payload = {
    event: "demo_checkout_complete",
    demo: true,
    order_reference: orderId,
    item_count: itemCount,
    simulated_value: subtotal,
    currency: "INR",
    timestamp: new Date().toISOString(),
  };

  pushToDataLayer(payload);

  if (typeof window !== "undefined" && window.gtag && GA4_ID) {
    window.gtag("event", "demo_checkout_complete", {
      demo: true,
      order_reference: orderId,
      item_count: itemCount,
      simulated_value: subtotal,
    });
  }

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    window.fbq("trackCustom", "DemoCheckoutComplete", {
      demo: true,
      order_reference: orderId,
      item_count: itemCount,
      simulated_value: subtotal,
    });
  }
}
