import React from "react";
import AboutUs from "../Home/sections/AboutUs";
import Charity from "../Home/sections/Charity";
import Testimonials from "../Home/sections/Testimonials";
import Teams from "../Home/sections/Teams";
import Hero2 from "../Home/sections/Hero2";

const About = () => {
  return (
    <>
      <Hero2 data={{ title: "About Us", subTitle: "Home/ About-Us" }} />
      <AboutUs />
      <Charity />
      <Testimonials />
      <Teams />
    </>
  );
};

export default About;
