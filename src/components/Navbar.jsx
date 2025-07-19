import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="logo">
        <img src="/omicrux-logo-white.png" alt="Omicrux Logo" />
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
