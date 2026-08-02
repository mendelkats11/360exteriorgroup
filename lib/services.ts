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
      "Our window cleaning service covers interior and exterior glass, screens, tracks, and sills, leaving every pane streak-free and spotless. We use purified water-fed pole systems for hard-to-reach upper-story windows and traditional squeegee techniques for ground-level glass, along with safe treatments for hard water stains and mineral deposits. Every visit includes a quick inspection of seals and frames so small issues get flagged before they become expensive problems. Clean windows do more than look good; they let more natural light into your home, improve curb appeal, and protect your glass from long-term buildup damage. Whether it's a single-story bungalow or a multi-story home, our team works efficiently and carefully around your landscaping and furniture, so you get a brighter, clearer view with zero hassle.",
  },
  {
    slug: "eavestrough-cleaning",
    title: "Eavestrough Cleaning",
    icon: "CloudRain",
    image: "/images/eaves cleaning.png",
    shortDescription:
      "Full debris removal and downspout flow checks to protect your home from water damage.",
    description:
      "Clogged gutters are one of the leading causes of preventable home damage, and our eavestrough cleaning service is designed to stop that before it starts. We hand-clear leaves, sediment, and debris from every section of your gutters, flush downspouts to confirm proper water flow, and check for early signs of sagging, rust, or separation from the fascia. All debris is bagged and removed from your property, so there's no cleanup left for you. Regular eavestrough cleaning prevents overflow that can damage siding, foundations, and landscaping, and it reduces the risk of ice damming in the winter months. It also removes a favourite nesting spot for pests. We recommend this service at least twice a year, and we're happy to set up a recurring schedule so you never have to think about it again.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    icon: "Droplets",
    image: "/images/powerwashing.png",
    shortDescription:
      "High-powered cleaning for driveways, walkways, and patios that restores surfaces like new.",
    description:
      "Our pressure washing service uses professional-grade equipment to blast away years of built-up dirt, oil stains, moss, algae, and grime from your driveway, walkway, patio, and other hard surfaces. We calibrate water pressure specifically to each surface material, so concrete, interlock, and stone are cleaned thoroughly without damage. Stubborn oil and rust stains get a pre-treatment application before rinsing to lift marks that pressure alone can't remove. The result is a dramatic transformation that restores surfaces to a like-new appearance while also improving safety by removing slippery algae and mildew buildup. Pressure washing is one of the fastest, most affordable ways to boost your home's curb appeal, and it's a service many customers pair with house washing for a complete exterior refresh in a single visit.",
  },
  {
    slug: "house-washing",
    title: "House Washing",
    icon: "Home",
    image: "/images/facade cleaning.png",
    shortDescription:
      "Gentle soft-wash cleaning for siding, brick, and stucco that protects your home's exterior.",
    description:
      "House washing restores your home's full exterior using a soft-wash method that's tough on dirt but gentle on your siding, brick, or stucco. We apply eco-friendly, biodegradable detergents that break down mold, mildew, algae, and pollution stains, then rinse everything at a controlled low pressure to protect paint, caulking, and trim from damage. Our technicians hand-detail around light fixtures, house numbers, and landscaping to make sure nothing gets missed or overlooked. Beyond the immediate visual improvement, regular house washing protects your investment by preventing the organic growth that can eat away at siding and shorten its lifespan. It's one of the most effective ways to make an older home look freshly renovated, and it's often the single service that has the biggest impact on curb appeal before a sale, event, or simply for your own enjoyment.",
  },
  {
    slug: "gutter-brightening",
    title: "Gutter Brightening",
    icon: "Wand2",
    image: "/images/gutter clenaing.jpg",
    shortDescription:
      "Specialized whitening treatment that removes oxidation and black streaks from gutters.",
    description:
      "Over time, gutters and fascia boards develop stubborn black streaks and chalky oxidation that regular washing can't remove. Our gutter brightening service uses a specialized brightening solution designed specifically to lift these stains from the exterior face of your gutters, restoring them to a like-new white finish without the cost of replacement. We apply the treatment by hand, let it work on the oxidized layer, then rinse thoroughly to reveal bright, streak-free gutters that make your entire roofline look freshly installed. This service pairs perfectly with house washing or roof cleaning for a complete top-to-bottom exterior transformation. Gutter brightening is one of the most cost-effective upgrades available for curb appeal, since it targets a highly visible feature of your home's exterior that's often overlooked until it becomes an eyesore.",
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    icon: "CloudSun",
    image: "/images/roof cleaning.jpg",
    shortDescription:
      "Safe, low-pressure soft washing that removes black streaks, moss, and algae from shingles.",
    description:
      "Those dark streaks on your roof aren't just dirt, they're colonies of algae and lichen slowly breaking down your shingles. Our roof cleaning service uses a low-pressure soft-wash method with roof-safe cleaning solutions to eliminate algae, moss, and lichen at the root without damaging shingles or voiding manufacturer warranties. We apply the treatment evenly across the roofline, allow it to work, then gently rinse away the residue along with the debris it lifts. Unlike high-pressure washing, which can strip granules and shorten shingle life, our approach is designed to protect your roof while restoring its appearance. Regular roof cleaning extends the lifespan of your shingles, prevents moisture retention that leads to rot, keeps your home compliant with HOA appearance standards, and adds years of curb appeal back to your property.",
  },
  {
    slug: "soft-washing",
    title: "Soft Washing",
    icon: "Feather",
    image: "/images/softwashing.jpg",
    shortDescription:
      "Low-pressure, chemical-based cleaning that's safe for delicate surfaces and long-lasting.",
    description:
      "Soft washing is a specialized low-pressure cleaning method that relies on biodegradable cleaning solutions rather than brute force to clean delicate exterior surfaces. It's the preferred method for siding, stucco, painted wood, and roofing, where high-pressure water could cause cracking, stripping, or water intrusion behind the surface. Our solutions are formulated to kill mold, mildew, and algae at the root rather than just knocking visible growth off the surface, which means the results last significantly longer than pressure washing alone. The gentle rinse that follows protects landscaping, window seals, and trim from damage. If your home has vinyl siding, older stucco, or a roof that needs attention, soft washing is almost always the safer and more effective choice, and our technicians will always recommend the right method for your specific surfaces.",
  },
  {
    slug: "commercial-exterior-cleaning",
    title: "Commercial Exterior Cleaning",
    icon: "Building2",
    image: "/images/storefront cleaning.jpg",
    shortDescription:
      "Scheduled exterior maintenance for storefronts, offices, and plazas that protects your image.",
    description:
      "First impressions matter just as much for businesses as they do for homes, and our commercial exterior cleaning service keeps storefronts, office buildings, and plazas looking sharp for customers and staff alike. We offer window cleaning, walkway and entrance washing, signage cleaning, and full exterior washdowns, all scheduled around your business hours, including early morning and after-hours appointments to avoid disrupting operations. Our team works with fully insured, safety-compliant equipment and can scale service plans for single storefronts or multi-unit properties. Clean, well-maintained exteriors reduce liability from slip hazards, protect your property value, and send a clear message to customers that your business pays attention to detail. We're happy to set up recurring maintenance contracts so your property always looks its best without you having to manage the scheduling.",
  },
  {
    slug: "deck-fence-cleaning",
    title: "Deck & Fence Cleaning",
    icon: "Fence",
    image: "/images/fence cleaning.jpg",
    shortDescription:
      "Restorative cleaning for wood, composite, and vinyl decks and fences.",
    description:
      "Wood decks and fences take a beating from sun, rain, and everyday use, often turning gray and losing their original tone. Our deck and fence cleaning service removes dirt, mildew, and weathered graying from wood, composite, and vinyl surfaces using the correct pressure and cleaning solution for each material. For wood surfaces preparing for staining or sealing, we offer a surface prep clean that opens the grain and removes old finish residue so new coatings adhere properly. The result is a deck and fence that looks restored rather than merely rinsed off, with natural wood tones brought back to life and composite or vinyl surfaces looking bright again. Regular cleaning extends the life of your outdoor structures, protects your investment, and makes your backyard a more enjoyable space to actually use.",
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    icon: "Sun",
    image: "/images/solar panel cleaning.jpg",
    shortDescription:
      "Gentle, deionized water cleaning that restores panel efficiency and protects your investment.",
    description:
      "Dust, pollen, bird droppings, and hard water spots can reduce your solar panels' energy output significantly over time, quietly costing you money every month. Our solar panel cleaning service uses soft-bristle tools and purified, deionized water that rinses clean without leaving mineral spots behind, so your panels are cleaned without any risk of scratching the glass surface. We use safe access equipment appropriate for your roof pitch and panel layout, and our technicians are trained to work carefully around wiring and mounting hardware. Clean panels absorb more sunlight and convert it more efficiently, which means a cleaning service often pays for itself through improved energy production. It's a simple, affordable way to protect a major home investment and keep your solar system performing the way it was designed to.",
  },
];

export const coreServices = services.slice(0, 9);
export const featuredService = services[9];
