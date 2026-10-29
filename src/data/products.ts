import { Product } from "@/types/product";

/**
 * 22 Conceptual Products for the VYBE Storefront Prototype.
 * As defined in PRODUCT_CATALOG.md:
 * All names, descriptions, and INR prices are conceptual draft content
 * for an academic digital marketing experiment (ENT 625).
 */
export const products: Product[] = [
  {
    id: "vybe-001",
    slug: "flow-high-rise-leggings",
    name: "No-Lines Legging",
    category: "leggings",
    price: 1799,
    shortDescription: "High-rise leggings with seamless underwear built in. No lines, ever.",
    description: "A seamless underwear liner is built into the waistband, so there's nothing underneath to show through or dig in. High rise, a wide flat waistband and deep side pockets for your phone. Made for the 6 a.m. class and everything after.",
    images: [
      {
        src: "/images/products/flow-high-rise-leggings-sage-1.jpg",
        alt: "No-Lines Legging in Sage, front view on a model",
      },
      {
        src: "/images/products/flow-high-rise-leggings-2.jpg",
        alt: "Back view of the No-Lines Legging in Sage showing the smooth waistband",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: true,
    colorName: "Sage",
    fabric: "cloudflex",
    print: "pastel",
    storyLine: "Nothing to hide.",
    badge: "No lines",
    activities: ["yoga-pilates", "strength", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: [
      "Seamless underwear liner built in: no lines, no VPL",
      "Deep side pockets that hold a phone",
      "Available in three leg lengths",
    ],
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
        alt: "Studio Sculpt Leggings in Muted Mauve, front view on a model",
      },
      {
        src: "/images/products/studio-sculpt-leggings-2.jpg",
        alt: "Studio Sculpt Leggings in Muted Mauve in a low lunge, side view",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Muted Mauve",
    fabric: "cloudflex",
    print: "pastel",
    activities: ["strength", "yoga-pilates"],
    lengths: ["Petite", "Regular", "Tall"],
    features: [
      "Deep side pockets that hold a phone",
      "Contouring panel seams",
      "Available in three leg lengths",
    ],
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
      {
        src: "/images/products/everyday-move-shorts-2.jpg",
        alt: "Back view of the Everyday Move Shorts in Pale Peach",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Pale Peach",
    fabric: "airdry",
    print: "pastel",
    activities: ["dance", "strength", "walk-run"],
    features: [
      "Deep side pockets that hold a phone",
      "Biker length that stays put",
      "Rapid-dry, never heavy",
    ],
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
        src: "/images/products/soft-form-sports-bra-rose-1.jpg",
        alt: "Soft Form Sports Bra in Rose with an open scoop neckline, worn with matching rose leggings",
      },
      {
        src: "/images/products/soft-form-sports-bra-2.jpg",
        alt: "Back view of the Soft Form Sports Bra in Rose showing the wide straps",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: true,
    colorName: "Rose",
    fabric: "cloudflex",
    print: "pastel",
    activities: ["yoga-pilates"],
    features: [
      "Light-to-medium support",
      "Removable cups",
      "Wide, soft straps",
    ],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-005",
    slug: "studio-support-bra",
    name: "Hold-Me Sports Bra",
    category: "sports-bras",
    price: 1399,
    shortDescription: "Medium-support sports bra with cross-back detailing and supportive underband.",
    description: "Engineered for training flow, the Hold-Me Sports Bra provides enhanced stability and aesthetic strap geometry that layers gracefully under open-back tops.",
    images: [
      {
        src: "/images/products/studio-support-bra-1.jpg",
        alt: "Back view of the Hold-Me Sports Bra in Sage showing the cross-back straps",
      },
      {
        src: "/images/products/studio-support-bra-2.jpg",
        alt: "Front view of the Hold-Me Sports Bra in Sage",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Sage",
    fabric: "cloudflex",
    print: "pastel",
    storyLine: "Held, never squeezed.",
    badge: "Real support",
    activities: ["strength", "walk-run"],
    features: [
      "Medium support",
      "Cross-back straps",
      "Removable cups",
    ],
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
        src: "/images/products/ease-crop-top-1.jpg",
        alt: "Ease Crop Top in Soft Pink worn with chalk high-rise leggings in a sunlit courtyard",
      },
      {
        src: "/images/products/ease-crop-top-2.jpg",
        alt: "Side view of the Ease Crop Top in Soft Pink, arms raised",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Soft Pink",
    isNew: true,
    fabric: "airdry",
    print: "pastel",
    activities: ["dance", "everyday", "yoga-pilates"],
    features: [
      "Relaxed cropped fit",
      "Rapid-dry jersey",
      "Sits just above a high-rise waistband",
    ],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-007",
    slug: "motion-racerback-tank",
    name: "Built-In Bra Tank",
    category: "tops",
    price: 999,
    shortDescription: "A racerback tank with a supportive bra built in.",
    description: "A shelf bra with removable cups is built into this racerback tank, so you get support and coverage in one layer. Longer curved hem, shoulders free for every arm move.",
    images: [
      {
        src: "/images/products/motion-racerback-tank-1.jpg",
        alt: "Built-In Bra Tank in Muted Mauve with a curved hem, worn over chalk leggings",
      },
      {
        src: "/images/products/motion-racerback-tank-2.jpg",
        alt: "Back view of the Built-In Bra Tank in Muted Mauve showing the racerback and curved hem",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Muted Mauve",
    isNew: true,
    fabric: "airdry",
    print: "pastel",
    storyLine: "One layer. All the support.",
    badge: "Built-in bra",
    activities: ["dance", "strength", "walk-run"],
    features: [
      "Built-in shelf bra with removable cups",
      "Racerback keeps shoulders free",
      "Longer curved hem",
    ],
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
      {
        src: "/images/products/cloudline-training-tee-2.jpg",
        alt: "Cloudline Training Tee in Pale Peach, model walking towards the camera",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Pale Peach",
    fabric: "airdry",
    print: "pastel",
    activities: ["walk-run", "strength"],
    features: [
      "Raglan sleeves for easy reach",
      "Rapid-dry knit",
      "Relaxed, easy fit",
    ],
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
      {
        src: "/images/products/flow-matching-set-2.jpg",
        alt: "Flow Matching Set in Sage with rose piping, full-length front view",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: true,
    colorName: "Sage / Rose",
    fabric: "cloudflex",
    print: "pastel",
    activities: ["yoga-pilates"],
    lengths: ["Petite", "Regular", "Tall"],
    features: [
      "Deep side pockets on the leggings",
      "Contrast rose piping",
      "Bra and leggings together",
    ],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-010",
    slug: "studio-matching-set",
    name: "Studio Matching Set",
    category: "sets",
    price: 2999,
    shortDescription: "Sculpting coordinated two-piece set for studio workouts and lifestyle wear.",
    description: "Pairs the Hold-Me Sports Bra with Studio Sculpt Leggings for a cohesive silhouette with balanced compression and sophisticated tone-on-tone styling.",
    images: [
      {
        src: "/images/products/studio-matching-set-1.jpg",
        alt: "Studio Matching Set in Muted Mauve, model seated on a step",
      },
      {
        src: "/images/products/studio-matching-set-2.jpg",
        alt: "Back view of the Studio Matching Set in Muted Mauve",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Muted Mauve",
    fabric: "cloudflex",
    print: "pastel",
    activities: ["yoga-pilates", "strength"],
    lengths: ["Petite", "Regular", "Tall"],
    features: [
      "Deep side pockets on the leggings",
      "Sculpted bra with removable cups",
      "Bra and leggings together",
    ],
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
      {
        src: "/images/products/everyday-joggers-2.jpg",
        alt: "Everyday Joggers in Sage, model seated on a step",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Sage",
    fabric: "flowweave",
    print: "pastel",
    activities: ["everyday", "walk-run"],
    lengths: ["Petite", "Regular", "Tall"],
    features: [
      "Deep side pockets and a zip back pocket",
      "Drawcord waist",
      "Tapered, cuffed ankle",
    ],
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
        src: "/images/products/light-layer-zip-jacket-1.jpg",
        alt: "Light Layer Zip Jacket in Rose, half-zipped over a muted mauve sports bra and leggings",
      },
      {
        src: "/images/products/light-layer-zip-jacket-2.jpg",
        alt: "Close-up of the Light Layer Zip Jacket in Rose showing the stand collar and thumbholes",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: true,
    colorName: "Rose",
    fabric: "airdry",
    print: "pastel",
    activities: ["everyday", "walk-run"],
    features: [
      "Thumbholes keep sleeves in place",
      "High stand collar",
      "Zip pockets",
    ],
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
      {
        src: "/images/products/rally-pleated-skirt-2.jpg",
        alt: "Back view of the Rally Pleated Skirt in Warm Chalk, pleats swinging mid-stride",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Chalk",
    isNew: true,
    fabric: "airdry",
    print: "pastel",
    activities: ["court"],
    features: [
      "Built-in shorts with a ball pocket",
      "Knife pleats that move with you",
      "Contrast piped waistband",
    ],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-014",
    slug: "baseline-skort",
    name: "Built-In Liner Skort",
    category: "court",
    price: 1499,
    shortDescription: "A wrap-front skort with inner shorts, side split and aubergine piping.",
    description: "A clean A-line skort with an overlapping front panel, comfortable inner shorts and a flat waistband that stays put through serves, sprints and everything after.",
    images: [
      {
        src: "/images/products/baseline-skort-1.jpg",
        alt: "Built-In Liner Skort in Deep Aubergine with a chalk crop top, model holding a racket on court",
      },
      {
        src: "/images/products/baseline-skort-2.jpg",
        alt: "Built-In Liner Skort in Deep Aubergine in a ready stance, showing the side split",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Aubergine",
    isNew: true,
    fabric: "airdry",
    print: "pastel",
    storyLine: "Serve, sprint, sit. Covered.",
    badge: "Built-in liner",
    activities: ["court"],
    features: [
      "Built-in liner shorts with a ball pocket",
      "Wrap front with side split",
      "Flat, stay-put waistband",
    ],
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
      {
        src: "/images/products/match-point-tennis-dress-2.jpg",
        alt: "Back view of the Match Point Tennis Dress in Motion Sage showing the open racerback",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    colorName: "Sage",
    isNew: true,
    fabric: "airdry",
    print: "pastel",
    activities: ["court"],
    features: [
      "Built-in shelf bra",
      "Open racerback",
      "Lined shorts with a ball pocket",
    ],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project."
  },
  {
    id: "vybe-016",
    slug: "flow-flare-leggings",
    name: "Second-Skin Flare",
    category: "flared",
    price: 2199,
    shortDescription: "Flared leggings with a crossover waistband, fitted to the knee and easy below it.",
    description:
      "A crossover V waistband that sits flat, a seamless liner built in, a close fit through the hip and thigh, and a flare from the knee that skims your sneakers. Deep side pockets hold your phone.",
    images: [
      { src: "/images/products/flow-flare-leggings-1.jpg", alt: "Second-Skin Flare in Deep Aubergine with a crossover waistband, front view" },
      { src: "/images/products/flow-flare-leggings-2.jpg", alt: "Back view of the Second-Skin Flare in Deep Aubergine showing the deep side pocket" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    colorName: "Aubergine",
    fabric: "cloudflex",
    print: "pastel",
    storyLine: "Cool when it gets hot.",
    badge: "No lines",
    activities: ["dance", "yoga-pilates", "everyday"],
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
      { src: "/images/products/studio-flare-pants-1.jpg", alt: "Studio Flare Pants in Sage with a chalk crop top, walking" },
      { src: "/images/products/studio-flare-pants-2.jpg", alt: "Studio Flare Pants in Sage, seated on a step with the flare draped over it" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    colorName: "Sage",
    fabric: "flowweave",
    print: "pastel",
    activities: ["dance", "yoga-pilates", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Soft fold-over waistband", "Deep side pockets", "Available in three leg lengths"],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-018",
    slug: "movement-flare-jumpsuit",
    name: "Movement Flare Jumpsuit",
    category: "flared",
    price: 2999,
    shortDescription: "A one-piece flared jumpsuit with a scoop neck and open crossover back.",
    description:
      "One piece, fully dressed: a scoop neckline, thin straps that cross over an open back, and a fitted body that flares from the knee. Studio in the morning, dinner by evening.",
    images: [
      { src: "/images/products/movement-flare-jumpsuit-1.jpg", alt: "Movement Flare Jumpsuit in Muted Mauve, full length front view" },
      { src: "/images/products/movement-flare-jumpsuit-2.jpg", alt: "Back view of the Movement Flare Jumpsuit in Muted Mauve showing the crossover straps" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    colorName: "Muted Mauve",
    fabric: "cloudflex",
    print: "pastel",
    activities: ["dance", "yoga-pilates", "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Built-in shelf bra", "Open crossover back", "Available in three leg lengths"],
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-019",
    slug: "print-club-no-lines-legging",
    name: "Print Club No-Lines Legging",
    category: "leggings",
    price: 2299,
    shortDescription: "Our No-Lines Legging in prints you'll want to be seen in.",
    description: "Everything you love about the No-Lines Legging: a seamless liner built in, a flat high-rise waistband and deep phone pockets, now in bold prints.",
    images: [
      { src: "/images/products/placeholder/print-club-no-lines-legging-cherry-tiger.png", alt: "Illustration of the Print Club No-Lines Legging in Cherry Tiger; product photo coming soon" },
      { src: "/images/products/placeholder/print-club-no-lines-legging-cobalt-swirl.png", alt: "Illustration of the Print Club No-Lines Legging in Cobalt Swirl; product photo coming soon" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    fabric: "cloudflex",
    activities: ["dance",  "strength",  "everyday"],
    lengths: ["Petite", "Regular", "Tall"],
    features: ["Seamless underwear liner built in", "Deep side pockets that hold a phone", "Available in three leg lengths"],
    print: "bold",
    variants: [
      { name: "Cherry Tiger", swatch: "/images/prints/cherry-tiger-swatch.png", image: 0 },
      { name: "Cobalt Swirl", swatch: "/images/prints/cobalt-swirl-swatch.png", image: 1 },
    ],
    badge: "New print",
    storyLine: "Cherry Tiger: for days you want to be seen.",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-020",
    slug: "print-club-built-in-bra-tank",
    name: "Print Club Built-In Bra Tank",
    category: "tops",
    price: 1799,
    shortDescription: "The Built-In Bra Tank in soft prints.",
    description: "A shelf bra with removable cups built into a racerback tank, in prints that are pretty, not precious.",
    images: [
      { src: "/images/products/placeholder/print-club-built-in-bra-tank-blossom-polka.png", alt: "Illustration of the Print Club Built-In Bra Tank in Blossom Polka; product photo coming soon" },
      { src: "/images/products/placeholder/print-club-built-in-bra-tank-watercolour-petal.png", alt: "Illustration of the Print Club Built-In Bra Tank in Watercolour Petal; product photo coming soon" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    fabric: "airdry",
    activities: ["dance",  "yoga-pilates",  "everyday"],
    features: ["Built-in shelf bra with removable cups", "Racerback keeps shoulders free", "Breathes in humid heat"],
    print: "soft",
    variants: [
      { name: "Blossom Polka", swatch: "/images/prints/blossom-polka-swatch.png", image: 0 },
      { name: "Watercolour Petal", swatch: "/images/prints/watercolour-petal-swatch.png", image: 1 },
    ],
    badge: "New print",
    storyLine: "Blossom Polka: pretty, with the support built in.",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-021",
    slug: "colour-pop-hold-me-bra",
    name: "Colour Pop Hold-Me Sports Bra",
    category: "sports-bras",
    price: 1399,
    shortDescription: "Real support in loud solids.",
    description: "The Hold-Me Sports Bra in cherry, tangerine and cobalt. Medium support, cross-back straps, removable cups.",
    images: [
      { src: "/images/products/placeholder/colour-pop-hold-me-bra-cherry.png", alt: "Illustration of the Colour Pop Hold-Me Sports Bra in Cherry; product photo coming soon" },
      { src: "/images/products/placeholder/colour-pop-hold-me-bra-tangerine.png", alt: "Illustration of the Colour Pop Hold-Me Sports Bra in Tangerine; product photo coming soon" },
      { src: "/images/products/placeholder/colour-pop-hold-me-bra-cobalt.png", alt: "Illustration of the Colour Pop Hold-Me Sports Bra in Cobalt; product photo coming soon" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    fabric: "cloudflex",
    activities: ["dance",  "strength",  "court"],
    features: ["Medium support", "Cross-back straps", "Removable cups"],
    print: "pop",
    variants: [
      { name: "Cherry", swatch: "#e2365b", image: 0 },
      { name: "Tangerine", swatch: "#ff7a3d", image: 1 },
      { name: "Cobalt", swatch: "#3d5afe", image: 2 },
    ],
    badge: "Colour pop",
    storyLine: "Held, never squeezed. Now loud.",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
  },
  {
    id: "vybe-022",
    slug: "colour-pop-liner-skort",
    name: "Colour Pop Liner Skort",
    category: "shorts",
    price: 1599,
    shortDescription: "A skort with liner shorts built in, in loud solids.",
    description: "Built-in liner shorts with a ball pocket, a flat waistband and a flippy A-line skirt. Made for Sunday badminton.",
    images: [
      { src: "/images/products/placeholder/colour-pop-liner-skort-tangerine.png", alt: "Illustration of the Colour Pop Liner Skort in Tangerine; product photo coming soon" },
      { src: "/images/products/placeholder/colour-pop-liner-skort-cobalt.png", alt: "Illustration of the Colour Pop Liner Skort in Cobalt; product photo coming soon" },
      { src: "/images/products/placeholder/colour-pop-liner-skort-cherry.png", alt: "Illustration of the Colour Pop Liner Skort in Cherry; product photo coming soon" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    featured: false,
    isNew: true,
    fabric: "airdry",
    activities: ["court",  "dance"],
    features: ["Built-in liner shorts with a ball pocket", "Flat, stay-put waistband", "Rapid-dry, never heavy"],
    print: "pop",
    variants: [
      { name: "Tangerine", swatch: "#ff7a3d", image: 0 },
      { name: "Cobalt", swatch: "#3d5afe", image: 1 },
      { name: "Cherry", swatch: "#e2365b", image: 2 },
    ],
    badge: "Colour pop",
    storyLine: "Tangerine for Sunday badminton. Obviously.",
    conceptNote: "Conceptual draft product for ENT 625 digital marketing project.",
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
