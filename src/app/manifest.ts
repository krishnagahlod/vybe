import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VYBE Athleisure — Made for your kind of movement",
    short_name: "VYBE",
    description:
      "Contemporary women's athleisure designed for mindful movement, studio sessions, and daily rhythm in Indian metro climates.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#d8e2dc",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
