// The Omicrux founders, shown on the About page and the home page.
// Roles and bios are placeholders: update them with each founder's real details.
// Add a `photo` path (e.g. "/images/oluwatosin.webp") to show an image instead of initials.
const team = [
  {
    name: "Oluwatosin Joseph",
    role: "Co-Founder",
    bio: "Drives the creative and technical side of Omicrux, turning bold ideas into brand identities and digital experiences that connect.",
  },
  {
    name: "Adedeji Aderounmu",
    role: "Co-Founder",
    bio: "Leads strategy and client partnerships, making sure every campaign is rooted in clear positioning and delivers real results.",
  },
];

export const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default team;
