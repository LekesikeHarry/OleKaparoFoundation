import React from "react";
import Hero from "../Home/sections/Hero";
import AboutUs from "../Home/sections/AboutUs";
import Charity from "../Home/sections/Charity";
import Testimonials from "../Home/sections/Testimonials";
import Teams from "../Home/sections/Teams";
import Hero2 from "../Home/sections/Hero2";

const About = ({ data }) => {
  return (
    <>
      <Hero2 data={data} />
      <AboutUs />
      <Charity />
      <Testimonials />
      <Teams />
    </>
  );
};

export default About;
