export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "North York, ON",
    rating: 5,
    quote:
      "The team showed up exactly on time and my windows have never looked better. They were careful, fast, and cleaned up after themselves. I'll definitely be booking again next season.",
    service: "Window Cleaning",
  },
  {
    name: "James T.",
    location: "Etobicoke, ON",
    rating: 5,
    quote:
      "Our driveway had years of oil stains and grime built up. 360 Exterior Group made it look brand new again. Fair pricing and genuinely friendly guys who explained everything upfront.",
    service: "Pressure Washing",
  },
  {
    name: "Priya K.",
    location: "Mississauga, ON",
    rating: 5,
    quote:
      "I didn't realize how clogged our eavestroughs were until they showed me the before and after photos. Professional, thorough, and they even flagged a small repair we needed. Highly recommend.",
    service: "Eavestrough Cleaning",
  },
  {
    name: "Mark D.",
    location: "Scarborough, ON",
    rating: 5,
    quote:
      "Booked a full house wash before putting our home on the market and it made a massive difference in curb appeal. Quick to quote, easy to schedule, and the results speak for themselves.",
    service: "House Washing",
  },
  {
    name: "Linda R.",
    location: "Vaughan, ON",
    rating: 5,
    quote:
      "From the first phone call to the final walkthrough, everything about this company feels professional. Licensed, insured, and it shows in how carefully they treat your property.",
    service: "General Exterior Cleaning",
  },
];
