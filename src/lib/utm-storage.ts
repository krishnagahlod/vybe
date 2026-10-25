"use client";

const UTM_SESSION_KEY = "vybe_campaign_attribution_v1";

export type UtmParameters = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  first_landed_at?: string;
};

/**
 * Capture UTM parameters from URL search query on client.
 * If found, stores them in sessionStorage to preserve session attribution.
 */
export function captureUtmParameters(): UtmParameters | null {
  if (typeof window === "undefined") return null;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");
    const content = urlParams.get("utm_content");
    const term = urlParams.get("utm_term");

    if (source || medium || campaign || content || term) {
      const utms: UtmParameters = {
        ...(source && { utm_source: source }),
        ...(medium && { utm_medium: medium }),
        ...(campaign && { utm_campaign: campaign }),
        ...(content && { utm_content: content }),
        ...(term && { utm_term: term }),
        first_landed_at: new Date().toISOString(),
      };

      window.sessionStorage.setItem(UTM_SESSION_KEY, JSON.stringify(utms));
      return utms;
    }

    // If not in current query, check if already in session
    return getStoredUtmParameters();
  } catch (err) {
    console.error("Failed to capture UTM parameters:", err);
    return null;
  }
}

/**
 * Safely retrieve stored UTM parameters from sessionStorage.
 */
export function getStoredUtmParameters(): UtmParameters | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.sessionStorage.getItem(UTM_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
