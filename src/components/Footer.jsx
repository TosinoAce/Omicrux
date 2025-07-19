import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-head">
        <div>
          <img src="/omicrux-logo-white.png" alt="omicrux logo" id="f-logo" />
        </div>
        <div className="Socials">
          <Link>
            <img src="/facebook.svg" alt="facebook" />
          </Link>
          <Link>
            <img src="/icons8-x.svg" alt="x" />
          </Link>
          <Link>
            <img src="/linkedin.svg" alt="linkedin" />
          </Link>
          <Link>
            <img src="/instagram.svg" alt="instagram" />
          </Link>
        </div>
      </div>
      <div id="footer-links">
        <ul>
          <li className="bold">SOLUTIONS</li>
          <li>Brand Identity Development</li>
          <li>Brand Messaging & Storytelling</li>
          <li>Social Media Branding</li>
          <li>Rebranding Services</li>
          <li>Brand Strategy & Positioning</li>
          <li>Digital Branding Solutions</li>
          <li>Creative Design & Visual Content</li>
          <li>Packaging Design</li>
        </ul>
        <ul>
          <li className="bold">WEB DEVELOPMENT</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>SEO Optimization</li>
        </ul>
        <ul>
          <li className="bold">DESIGN</li>
          <li>Web Design</li>
          <li>Branding</li>
          <li>Illustration Design</li>
          <li>Graphic Design</li>
          <li>Motion Design</li>
        </ul>
        <ul>
          <li className="bold">TECHNOLOGIES</li>
          <li>Frontify</li>
          <li>Canva</li>
          <li>Lumen5</li>
          <li>Google Analytics</li>
          <li>Figma</li>
          <li>Slack</li>
          <li>Wordpress</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div id="Big-text">
        <h2 id="footer-big">OMICRUX</h2>
      </div>
      <div id="copyright">
        <p>© 2024 Omicrux</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
