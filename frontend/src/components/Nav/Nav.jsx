import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logov1.svg";
// import NavDropDown from "../dropdown/NavDropDown";

const Nav = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="leftContainer">
          <Link to="/">
            <img src={Logo} alt="logo" loading="lazy" className="logo" />
          </Link>
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
          {/* <NavDropDown /> */}
          <NavLink to="/blogs" activeClassName="activeLink">
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
