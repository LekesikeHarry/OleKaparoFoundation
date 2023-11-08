import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Nav/nav.css";

const NavDropDown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <div
        className="dropDown"
        onMouseEnter={handleHover}
        // onMouseLeave={handleHover}
      >
        <NavLink to="/pages" activeClassName="activeLink">
          Pages
        </NavLink>
        {isHovered && (
          <div className="dropDownContent">
            <ul>
              <li>
                <NavLink to="/page1">Page 1</NavLink>
              </li>
              <li>
                <NavLink to="/page2">Page 2</NavLink>
              </li>
              <li>
                <NavLink to="/page3">Page 3</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavDropDown;
