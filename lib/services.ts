export type Service = {
  slug: string;
  title: string;
  icon:
    | "Sparkles"
    | "CloudRain"
    | "Droplets"
    | "Home"
    | "Wand2"
    | "Building2"
    | "Feather"
    | "Fence"
    | "Sun"
    | "CloudSun";
  image: string;
  shortDescription: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    icon: "Sparkles",
    image: "/images/window washing.png",
    shortDescription:
      "Streak-free interior and exterior window cleaning that lets the light back in.",
    description:
      "We clean your windows inside and out, including screens, tracks, and sills. We use pole systems for upper floors and squeegees for ground-level glass to remove streaks, dirt, and hard water spots. Clean windows brighten your home and boost curb appeal, and we always work carefully around your landscaping and furniture.",
  },
  {
    slug: "eavestrough-cleaning",
    title: "Eavestrough Cleaning",
    icon: "CloudRain",
    image: "/images/eaves cleaning.png",
    shortDescription:
      "Full debris removal and downspout flow checks to protect your home from water damage.",
    description:
      "We clear leaves and debris from your gutters by hand and check that downspouts drain properly. All debris is bagged and hauled away, so there's no cleanup left for you. Clean gutters prevent overflow, water damage, and ice buildup in winter. We recommend this service at least twice a year.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    icon: "Droplets",
    image: "/images/powerwashing.png",
    shortDescription:
      "High-powered cleaning for driveways, walkways, and patios that restores surfaces like new.",
    description:
      "We remove built-up dirt, oil stains, and algae from driveways, walkways, and patios. Water pressure is adjusted to match each surface, so nothing gets damaged in the process. The result is a fresh, safer surface with real curb appeal. Many customers pair this with house washing for a complete refresh.",
  },
  {
    slug: "house-washing",
    title: "House Washing",
    icon: "Home",
    image: "/images/facade cleaning.png",
    shortDescription:
      "Gentle soft-wash cleaning for siding, brick, and stucco that protects your home's exterior.",
    description:
      "We wash your home's full exterior using a gentle soft-wash method that's safe for siding, brick, and stucco. Our eco-friendly solutions remove mold, mildew, and grime without harming paint or trim. Regular washing protects your siding and keeps your home looking freshly maintained year-round.",
  },
  {
    slug: "gutter-brightening",
    title: "Gutter Brightening",
    icon: "Wand2",
    image: "/images/gutter clenaing.jpg",
    shortDescription:
      "Specialized whitening treatment that removes oxidation and black streaks from gutters.",
    description:
      "Gutters often develop black streaks and chalky buildup over time. Our brightening treatment lifts these stains and restores a like-new white finish, no replacement needed. It pairs perfectly with house washing or roof cleaning for a full exterior refresh, and it's one of the most affordable ways to boost curb appeal.",
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    icon: "CloudSun",
    image: "/images/roof cleaning.jpg",
    shortDescription:
      "Safe, low-pressure soft washing that removes black streaks, moss, and algae from shingles.",
    description:
      "Dark streaks on your roof are usually algae, not dirt. We use a gentle, low-pressure soft wash to remove algae, moss, and lichen without damaging your shingles or voiding your warranty. This protects your roof, extends its lifespan, and restores your home's curb appeal.",
  },
  {
    slug: "soft-washing",
    title: "Soft Washing",
    icon: "Feather",
    image: "/images/softwashing.jpg",
    shortDescription:
      "Low-pressure, chemical-based cleaning that's safe for delicate surfaces and long-lasting.",
    description:
      "Soft washing uses low pressure and gentle cleaning solutions instead of brute force, making it safe for siding, stucco, and roofing. It kills mold and algae at the root, so results last longer than pressure washing alone. It's the safer choice for delicate surfaces.",
  },
  {
    slug: "commercial-exterior-cleaning",
    title: "Commercial Exterior Cleaning",
    icon: "Building2",
    image: "/images/storefront cleaning.jpg",
    shortDescription:
      "Scheduled exterior maintenance for storefronts, offices, and plazas that protects your image.",
    description:
      "We keep storefronts, offices, and plazas looking sharp with window cleaning, walkway washing, and full exterior cleanups. Scheduling is flexible, including early mornings and after hours, so we never disrupt your business. Clean exteriors protect your image and reduce slip hazards for customers and staff.",
  },
  {
    slug: "deck-fence-cleaning",
    title: "Deck & Fence Cleaning",
    icon: "Fence",
    image: "/images/fence cleaning.jpg",
    shortDescription:
      "Restorative cleaning for wood, composite, and vinyl decks and fences.",
    description:
      "Sun and rain leave decks and fences gray and worn. We remove dirt, mildew, and weathering from wood, composite, and vinyl using the right method for each material. Your outdoor space looks restored and ready for staining, sealing, or everyday use.",
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    icon: "Sun",
    image: "/images/solar panel cleaning.jpg",
    shortDescription:
      "Gentle, deionized water cleaning that restores panel efficiency and protects your investment.",
    description:
      "Dust, pollen, and bird droppings can quietly reduce your solar panels' output. We clean panels with soft-bristle tools and deionized water that won't scratch the glass or leave spots. Cleaner panels absorb more sunlight, helping your system perform the way it should.",
  },
];

export const coreServices = services.slice(0, 9);
export const featuredService = services[9];
