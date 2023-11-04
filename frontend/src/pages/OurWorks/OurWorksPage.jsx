import React from "react";
import Hero2 from "../Home/sections/Hero2";
import AllWorks from "./sections/AllWorks";

const OurWorksPage = () => {
  return (
    <>
      <Hero2 data={{ title: "Our Works", subTitle: "Home/ Our-Works" }} />
      <AllWorks />
    </>
  );
};

export default OurWorksPage;
