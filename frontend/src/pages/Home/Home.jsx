import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Charity from "./sections/Charity";
import OurWork from "./sections/OurWork";
import Testimonials from "./sections/Testimonials";
import Articles from "./sections/Articles";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Charity />
      <OurWork />
      <Testimonials />
      <p>add teams section</p>
      <Articles />
    </>
  );
}
