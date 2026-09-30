import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close if the window grows to the desktop layout.
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    const desktop = window.matchMedia("(min-width: 982px)");
    const onKey = (e) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src="/images/logo-white-600.webp"
          alt="Omicrux Logo"
          width="200"
          height="41"
        />
      </Link>

      <nav id="nav-menu" className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          {links.map(({ to, label }, i) => (
            <li key={to} style={{ "--i": i }}>
              <NavLink to={to} end onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn nav-cta" style={{ "--i": links.length }} onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>

      <div
        className={`nav-backdrop ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleMenu()}
        role="button"
        tabIndex={0}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="nav-menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
