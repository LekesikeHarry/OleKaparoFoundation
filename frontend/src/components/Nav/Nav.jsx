import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logov1.svg";
// import NavDropDown from "../dropdown/NavDropDown";

const Nav = ({ color, filter }) => {
  return (
    <nav>
      <div className="navContainer">
        <div className="leftContainer">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              className="logo"
              style={{ filter: filter }}
            />
          </Link>
        </div>
        <div className="centerContainer">
          <NavLink
            exact
            to="/"
            activeClassName="activeLink"
            style={{ color: color }}
          >
            Home
          </NavLink>
          <NavLink
            to="/our-work"
            activeClassName="activeLink"
            style={{ color: color }}
          >
            Our Work
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="activeLink"
            style={{ color: color }}
          >
            About
          </NavLink>
          {/* <NavDropDown /> */}
          <NavLink
            to="/blogs"
            activeClassName="activeLink"
            style={{ color: color }}
          >
            Blogs
          </NavLink>
        </div>
        <div className="rightContainer">
          <NavLink to="contact-us" className="primaryButton">
            {" "}
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
