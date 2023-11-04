import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav />
      <main>
        <Outlet />
      </main>
      {/* add partners section use this  filter: grayscale(100%); for the logo to go black and white */}
      <Footer />
    </div>
  );
}

export default Layout;
