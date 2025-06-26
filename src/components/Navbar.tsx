import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          🍽️ SEA Catering
        </Link>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              onClick={closeMenu}
              className={isActive("/menu") ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/subscription"
              onClick={closeMenu}
              className={isActive("/subscription") ? "active" : ""}
            >
              Subscription
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              onClick={closeMenu}
              className={isActive("/testimonials") ? "active" : ""}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
