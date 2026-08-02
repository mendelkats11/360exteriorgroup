export const siteConfig = {
  name: "360 Exterior Group",
  shortName: "360 Exterior",
  tagline: "Toronto's Trusted Exterior Cleaning Professionals",
  description:
    "Professional window cleaning, eavestrough cleaning, and exterior washing services across Toronto and surrounding areas. Licensed, insured, and locally owned.",
  url: "https://www.360exterior.ca",
  phone: {
    display: "(416) 555-0142",
    href: "tel:+14165550142",
  },
  email: "info@360exterior.ca",
  address: {
    line1: "1245 Danforth Avenue",
    line2: "Toronto, ON M4J 1M8",
    full: "1245 Danforth Avenue, Toronto, ON M4J 1M8",
  },
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { days: "Saturday", time: "9:00 AM - 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  serviceAreas: [
    "Toronto",
    "North York",
    "Scarborough",
    "Etobicoke",
    "Mississauga",
    "Vaughan",
    "Richmond Hill",
    "Markham",
    "Brampton",
    "Oakville",
  ],
  founded: 2023,
  yearsInBusiness: 3,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
