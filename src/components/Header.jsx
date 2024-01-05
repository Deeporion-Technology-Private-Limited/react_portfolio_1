import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/LOGO.png";
import "./style.css";
import GoToTop from "./GoToTop";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="header_container">
        <div>
          <img src={logo} alt="" />
        </div>
        {/* Hamburger menu button */}
        <div className="hamburger_menu" onClick={toggleMenu}>
          <HiMenuAlt3 />
        </div>
        <div className={`header_links ${isMenuOpen ? "show" : ""}`}>
          <ul className="header_links_ul">
            <li>
              <NavLink to="/" className="header_links_li">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="header_links_li">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="header_links_li">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="header_links_li">
                Our Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="header_links_li">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="header_btn">Join Now</button>
        </div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Header;
