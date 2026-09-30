import { Link } from "react-router-dom";
import socials from "../data/socials";
import "./Footer.css";

const columns = [
  {
    title: "SOLUTIONS",
    to: "/services",
    items: [
      "Brand Identity Development",
      "Brand Messaging & Storytelling",
      "Social Media Branding",
      "Rebranding Services",
      "Brand Strategy & Positioning",
      "Digital Branding Solutions",
      "Creative Design & Visual Content",
      "Packaging Design",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    to: "/services/web-solutions",
    items: ["Frontend Development", "Backend Development", "SEO Optimization"],
  },
  {
    title: "DESIGN",
    to: "/services/brand-identity-development",
    items: [
      "Web Design",
      "Branding",
      "Illustration Design",
      "Graphic Design",
      "Motion Design",
    ],
  },
  {
    title: "TECHNOLOGIES",
    items: [
      "Frontify",
      "Canva",
      "Lumen5",
      "Google Analytics",
      "Figma",
      "Slack",
      "Wordpress",
      "Next.js",
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div id="footer-head" data-reveal>
        <div>
          <img
            src="/images/logo-white-600.webp"
            alt="omicrux logo"
            id="f-logo"
            width="300"
            height="61"
            loading="lazy"
          />
        </div>
        <div className="Socials">
          {socials.map(({ name, icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <img src={icon} alt="" width="45" height="45" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
      <div id="footer-links" data-reveal style={{ "--reveal-delay": "100ms" }}>
        {columns.map(({ title, to, items }) => (
          <ul key={title}>
            <li className="bold">{title}</li>
            {items.map((item) => (
              <li key={item}>{to ? <Link to={to}>{item}</Link> : item}</li>
            ))}
          </ul>
        ))}
      </div>
      <div id="Big-text" data-reveal>
        <p id="footer-big" aria-hidden="true">OMICRUX</p>
      </div>
      <div id="copyright">
        <p>© {new Date().getFullYear()} Omicrux</p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
