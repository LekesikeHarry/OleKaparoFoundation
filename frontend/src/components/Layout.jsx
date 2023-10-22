import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
