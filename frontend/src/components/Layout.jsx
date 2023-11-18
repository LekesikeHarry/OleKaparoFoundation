import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Partners from "./Partners/Partners";

function Layout() {
  const location = useLocation();
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav color={"white"} filter={"brightness(1)"} />
      <main>
        <Outlet />
      </main>
      {/* add partners section use this  filter: grayscale(100%); for the logo to go black and white */}
      {location.pathname !== "/" ? <Partners /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
