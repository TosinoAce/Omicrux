// Monthly packages, priced in Naira. Placeholder prices: converted from the
// original USD prices ($150 / $250 / $350) at ₦1,500 to $1. Update as needed.
const packages = [
  {
    name: "Basic",
    price: 225000,
    tagline: "Standard plan for all Clients",
    features: [
      "Logo & Brand Colour Palette",
      "2 Social Media Platforms",
      "12 Branded Posts per Month",
      "Monthly Performance Report",
      "Standard Support",
    ],
  },
  {
    name: "Professional",
    price: 375000,
    tagline: "Ideal for Medium Scale Businesses",
    features: [
      "Full Brand Identity Kit",
      "4 Social Media Platforms",
      "Content Calendar & Copywriting",
      "Press Release Distribution",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: 525000,
    tagline: "Ideal for Large Companies and Firms",
    features: [
      "Brand Strategy & Positioning",
      "Website Design & Maintenance",
      "PR Campaigns & Media Relations",
      "Event & Activation Planning",
      "Dedicated Account Manager",
    ],
  },
];

export const formatNaira = (amount) => `₦${amount.toLocaleString("en-NG")}`;

export default packages;
