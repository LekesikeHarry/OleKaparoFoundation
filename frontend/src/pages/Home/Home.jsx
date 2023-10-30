import React from "react";
import Hero from "./sections/Hero";
import Charity from "./sections/Charity";
import OurWork from "./sections/OurWork";
import Testimonials from "./sections/Testimonials";
import Articles from "./sections/Articles";
import Teams from "./sections/Teams";
import AboutUs from "./sections/AboutUs";

export default function Home({ data }) {
  return (
    <>
      <Hero data={data} />
      <AboutUs />
      <Charity />
      <OurWork />
      <Testimonials />
      <Teams />
      <Articles />
    </>
  );
}
