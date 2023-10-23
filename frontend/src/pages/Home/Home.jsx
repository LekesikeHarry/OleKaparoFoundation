import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Charity from "./sections/Charity";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Charity />
      <section>our work</section>
      <section>testimonials</section>
      <section>latest blogs</section>
    </>
  );
}
