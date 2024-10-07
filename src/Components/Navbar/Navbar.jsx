import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import nav_logo from "../../Assets/Navbar Icons/Fusion-Feast.png";
import nav_toggle from "../../Assets/Navbar Icons/menu-toggle.png";
import close_icon from "../../Assets/Navbar Icons/close.png";

const Navbar = () => {
 
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar"   >
      <div className="navbar-left">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <img src={nav_toggle} alt="Menu Toggle" />
        </div>
        <div className="navbar-logo">
          <img src={nav_logo} alt="Fusion Feast Logo" />
        </div>
      </div>
      <div className={`navbar-right ${isMenuOpen ? "navbar-right-open" : ""}`}>
        <ul className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          <img
            className="close-icon"
            onClick={toggleMenu}
            src={close_icon}
            alt="Close Menu"
          />
          <div className="nav-links-container">
            <Link
              to="/"
              className={`nav-link-items ${
                activeLink === "home" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("home")}
            >
              {" "}
              <li>Home</li>{" "}
            </Link>
            <Link
              to="/about"
              className={`nav-link-items ${
                activeLink === "about" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("about")}
            >
              {" "}
              <li>About</li>{" "}
            </Link>
            <Link
              to="/menu"
              className={`nav-link-items ${
                activeLink === "menu" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("menu")}
            >
              {" "}
              <li>Menu</li>{" "}
            </Link>
            <Link
              to="/reservation"
              className={`nav-link-items ${
                activeLink === "reservation" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("reservation")}
            >
              {" "}
              <li>Reservation</li>{" "}
            </Link>
            <Link
              to="/contact"
              className={`nav-link-items ${
                activeLink === "contact" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("contact")}
            >
              {" "}
              <li>Contact</li>{" "}
            </Link>
            <Link
              to="/cart"
              className={`nav-link-items ${
                activeLink === "cart" ? "active" : ""
              }`}
              style={{ textDecoration: "none" }}
              onClick={() => handleLinkClick("cart")}
            >
              {" "}
              <li>myCart</li>{" "}
            </Link>
          </div>
        </ul>
        <div className="order-online">
          <Link to={'menu'}><button>ORDER ONLINE</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
