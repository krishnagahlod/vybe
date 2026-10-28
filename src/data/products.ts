import { Product } from "@/types/product";

/**
 * 12 Conceptual Products for the VYBE Storefront Prototype.
 * As defined in PRODUCT_CATALOG.md:
 * All names, descriptions, and INR prices are conceptual draft content
 * for an academic digital marketing experiment (ENT 625).
 */
export const products: Product[] = [
  {
    id: "vybe-001",
    slug: "flow-high-rise-leggings",
    name: "Flow High-Rise Leggings",
    category: "leggings",
    price: 1799,
    shortDescription: "A versatile high-rise concept tailored for studio sessions and daily movement.",
    description: "Designed with a wide contoured waistband and gentle ankle compression, the Flow High-Rise Leggings offer an unrestrictive silhouette that adapts naturally across yoga, pilates, and urban strolls.",
    images: [
      {
        src: "/images/products/flow-high-rise-leggings-1.jpg",
        alt: "Flow High-Rise Leggings in Sage Green on model in architectural studio",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    colorName: "Sage",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-002",
    slug: "studio-sculpt-leggings",
    name: "Studio Sculpt Leggings",
    category: "leggings",
    price: 1999,
    shortDescription: "Structured full-length leggings with minimal seams and flattering contouring.",
    description: "The Studio Sculpt Leggings bring a clean, modern aesthetic with targeted panelling and a secure stay-put waistband for higher tempo workouts and everyday active rhythm.",
    images: [
      {
        src: "/images/products/studio-sculpt-leggings-mauve-1.jpg",
        alt: "Studio Sculpt Leggings in Muted Mauve, front view on a model in a sunlit limestone courtyard",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Muted Mauve",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-003",
    slug: "everyday-move-shorts",
    name: "Everyday Move Shorts",
    category: "shorts",
    price: 999,
    shortDescription: "Biker-length movement shorts with a supportive high rise and soft edge seams.",
    description: "A warm-weather essential designed to stay put without pinching. Perfect for outdoor runs, cycling, or casual layering under an oversized jacket.",
    images: [
      {
        src: "/images/products/everyday-move-shorts-1.jpg",
        alt: "Everyday Move Shorts in Pale Peach worn with a chalk sports bra in a sunlit courtyard",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Pale Peach",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-004",
    slug: "soft-form-sports-bra",
    name: "Soft Form Sports Bra",
    category: "sports-bras",
    price: 1199,
    shortDescription: "Light-to-medium support bra with an open scoop neckline and wide straps.",
    description: "An understated studio piece crafted for comfortable daily wear and low-impact movement. Features clean bonded trims and removable cup inserts.",
    images: [
      {
        src: "/images/products/soft-form-sports-bra-1.jpg",
        alt: "Soft Form Sports Bra in Pale Peach on model with cross-back straps",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    colorName: "Rose",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-005",
    slug: "studio-support-bra",
    name: "Studio Support Bra",
    category: "sports-bras",
    price: 1399,
    shortDescription: "Medium-support sports bra with cross-back detailing and supportive underband.",
    description: "Engineered for training flow, the Studio Support Bra provides enhanced stability and aesthetic strap geometry that layers gracefully under open-back tops.",
    images: [
      {
        src: "/images/products/studio-support-bra-1.jpg",
        alt: "Back view of the Studio Support Bra in Sage showing the cross-back straps",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Sage",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-006",
    slug: "ease-crop-top",
    name: "Ease Crop Top",
    category: "tops",
    price: 899,
    shortDescription: "Relaxed short-sleeve crop top designed for post-movement layering.",
    description: "Cut with a relaxed drape and dropped shoulders, the Ease Crop Top offers breezy comfort whether cooling down after practice or pairing with high-waisted bottoms.",
    images: [
      {
        src: "/images/products/cloud-knit-crop-tank-1.jpg",
        alt: "Ease Crop Top in soft ribbed knit",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    colorName: "Soft Pink",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-007",
    slug: "motion-racerback-tank",
    name: "Motion Racerback Tank",
    category: "tops",
    price: 999,
    shortDescription: "Fitted racerback tank with an elongated curved hem for coverage.",
    description: "Designed for free shoulder rotation, the Motion Racerback Tank sits flush against the body with breathable armholes and subtle flatlock stitching.",
    images: [
      {
        src: "/images/products/motion-racerback-tank-1.jpg",
        alt: "Motion Racerback Tank in Muted Mauve with a curved hem, worn over chalk leggings",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Muted Mauve",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-008",
    slug: "cloudline-training-tee",
    name: "Cloudline Training Tee",
    category: "tops",
    price: 1099,
    shortDescription: "Classic crewneck training tee with a modern feminine drape.",
    description: "An effortless core tee with an easy regular fit, side vent details, and a soft matte surface texture suited for both training and street casual styling.",
    images: [
      {
        src: "/images/products/cloudline-training-tee-1.jpg",
        alt: "Cloudline Training Tee in Pale Peach worn with sage leggings",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Pale Peach",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-009",
    slug: "flow-matching-set",
    name: "Flow Matching Set",
    category: "sets",
    price: 2699,
    shortDescription: "Two-piece coordinated studio set: Soft Form Bra paired with Flow Leggings.",
    description: "The signature VYBE coordinated set in harmonious earth tones. Designed to take the guesswork out of workout dressing with complementary fits.",
    images: [
      {
        src: "/images/products/flow-matching-set-1.jpg",
        alt: "Flow Matching Set in Sage with rose piping, model in a low lunge stretch",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    colorName: "Sage / Rose",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-010",
    slug: "studio-matching-set",
    name: "Studio Matching Set",
    category: "sets",
    price: 2999,
    shortDescription: "Sculpting coordinated two-piece set for studio workouts and lifestyle wear.",
    description: "Pairs the Studio Support Bra with Studio Sculpt Leggings for a cohesive silhouette with balanced compression and sophisticated tone-on-tone styling.",
    images: [
      {
        src: "/images/products/studio-matching-set-1.jpg",
        alt: "Studio Matching Set in Muted Mauve, model seated on a limestone step",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Muted Mauve",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-011",
    slug: "everyday-joggers",
    name: "Everyday Joggers",
    category: "layers",
    price: 1899,
    shortDescription: "Tapered relaxed joggers with deep side pockets and drawcord waist.",
    description: "Tailored with a neat cuff and generous pocketing, the Everyday Joggers combine cozy lounge comfort with elevated street aesthetics for city transit.",
    images: [
      {
        src: "/images/products/everyday-joggers-1.jpg",
        alt: "Everyday Joggers in Sage with a drawcord waist, worn with a chalk tee",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Sage",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-012",
    slug: "light-layer-zip-jacket",
    name: "Light Layer Zip Jacket",
    category: "layers",
    price: 2499,
    shortDescription: "Slim-fit zip jacket with thumbholes and high stand collar.",
    description: "A sleek transitional layer for breezy morning commutes or post-workout transitions, featuring a two-way zip, secure seam pockets, and streamlined cuffs.",
    images: [
      {
        src: "/images/products/studio-zip-jacket-1.jpg",
        alt: "Light Layer Zip Jacket in Mauve and Soft Rose on model",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Rose",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-013",
    slug: "rally-pleated-skirt",
    name: "Rally Pleated Skirt",
    category: "court",
    price: 1699,
    shortDescription: "A crisp pleated tennis skirt with built-in shorts and a contrast piped waistband.",
    description: "Knife pleats that swing as you move, a smooth high-rise waistband with contrast piping, and lined shorts with a ball pocket underneath. Made for the court, easy to wear off it.",
    images: [
      {
        src: "/images/products/rally-pleated-skirt-1.jpg",
        alt: "Rally Pleated Skirt in Warm Chalk with aubergine piping, model walking on a tennis court",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Chalk",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-014",
    slug: "baseline-skort",
    name: "Baseline Skort",
    category: "court",
    price: 1499,
    shortDescription: "A wrap-front skort with inner shorts, side split and aubergine piping.",
    description: "A clean A-line skort with an overlapping front panel, comfortable inner shorts and a flat waistband that stays put through serves, sprints and everything after.",
    images: [
      {
        src: "/images/products/baseline-skort-1.jpg",
        alt: "Baseline Skort in Deep Aubergine with a chalk crop top, model holding a racket on court",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Aubergine",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-015",
    slug: "match-point-tennis-dress",
    name: "Match Point Tennis Dress",
    category: "court",
    price: 2499,
    shortDescription: "A racerback tennis dress with a built-in bra, flared skirt and inner shorts.",
    description: "One piece, ready to play: a supportive built-in shelf bra, an open racerback for movement, and a softly flared skirt over lined shorts. Finished with tonal piping.",
    images: [
      {
        src: "/images/products/match-point-tennis-dress-1.jpg",
        alt: "Match Point Tennis Dress in Motion Sage, model with a racket on her shoulder on court",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    colorName: "Sage",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}
