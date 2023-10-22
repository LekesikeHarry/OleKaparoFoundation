import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="leftContainer">
          <img src="" alt="logo" />
        </div>
        <div className="centerContainer">
          <NavLink exact to="/" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink to="/our-work" activeClassName="activeLink">
            Our Work
          </NavLink>
          <NavLink to="/about" activeClassName="activeLink">
            About
          </NavLink>
          <NavLink to="/pages" activeClassName="activeLink">
            Pages
          </NavLink>
          <NavLink to="/blogs" activeClassName="activeLink">
            Blogs
          </NavLink>
        </div>
        <div className="rightContainer">
          <button className="primaryButton"> Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
