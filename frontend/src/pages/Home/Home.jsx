import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Charity from "./sections/Charity";
import OurWork from "./sections/OurWork";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Charity />
      <OurWork />
      <section>testimonials</section>
      <section>latest blogs</section>
    </>
  );
}
