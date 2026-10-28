import { Product } from "@/types/product";

/**
 * Flared Bottoms, ready to publish. They move into `products` once their photos exist
 * (prompts in IMAGE_PROMPTS_ROUND3.md); the "Flared Bottoms" menu item appears automatically then.
 */
export const upcomingProducts: Product[] = [
  {
    id: "vybe-016",
    slug: "flow-flare-leggings",
    name: "Flow Flare Leggings",
    category: "flared",
    price: 2199,
    shortDescription: "Flared leggings with a crossover waistband, fitted to the knee and easy below it.",
    description:
      "A crossover V waistband that sits flat and flatters, a close fit through the hip and thigh, and a gentle flare from the knee that skims the top of your sneakers. Deep side pockets hold a phone.",
    images: [
      { src: "/images/products/flow-flare-leggings-1.jpg", alt: "Flow Flare Leggings in Deep Aubergine with a crossover waistband, front view" },
      { src: "/images/products/flow-flare-leggings-2.jpg", alt: "Back view of the Flow Flare Leggings in Deep Aubergine showing the deep side pocket" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    isNew: true,
    colorName: "Aubergine",
    fabric: "cloudflex",
    activities: ["yoga-pilates", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Crossover V waistband", "Deep side pockets that hold a phone", "Available in three leg lengths"],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-017",
    slug: "studio-flare-pants",
    name: "Studio Flare Pants",
    category: "flared",
    price: 2299,
    shortDescription: "Wide flared yoga pants in a flowy weave, with a soft fold-over waistband.",
    description:
      "A soft fold-over waistband, a fitted hip and a wide, flowing flare from the knee. Light enough for a humid commute, stretchy enough for the mat.",
    images: [
      { src: "/images/products/studio-flare-pants-1.jpg", alt: "Studio Flare Pants in Sage with a chalk crop top, walking through limestone arches" },
      { src: "/images/products/studio-flare-pants-2.jpg", alt: "Studio Flare Pants in Sage, seated on a limestone step with the flare draped over it" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    isNew: true,
    colorName: "Sage",
    fabric: "flowweave",
    activities: ["yoga-pilates", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Soft fold-over waistband", "Deep side pockets", "Available in three leg lengths"],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-018",
    slug: "movement-flare-jumpsuit",
    name: "Movement Flare Jumpsuit",
    category: "flared",
    price: 3299,
    shortDescription: "A one-piece flared jumpsuit with a scoop neck and open crossover back.",
    description:
      "One piece, fully dressed: a scoop neckline, thin straps that cross over an open back, and a fitted body that flares from the knee. Studio in the morning, dinner by evening.",
    images: [
      { src: "/images/products/movement-flare-jumpsuit-1.jpg", alt: "Movement Flare Jumpsuit in Muted Mauve, full length front view" },
      { src: "/images/products/movement-flare-jumpsuit-2.jpg", alt: "Back view of the Movement Flare Jumpsuit in Muted Mauve showing the crossover straps" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    isNew: true,
    colorName: "Muted Mauve",
    fabric: "cloudflex",
    activities: ["yoga-pilates", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Built-in shelf bra", "Open crossover back", "Available in three leg lengths"],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
];
