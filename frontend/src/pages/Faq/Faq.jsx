import React from "react";
import "./faq.css";
import Hero2 from "../Home/sections/Hero2";
import FaqMain from "./sections/FaqMain";
const Faq = () => {
  return (
    <>
      <Hero2 data={{ title: "FAQ", subTitle: "Home/Faq" }} />
      <FaqMain />
    </>
  );
};

export default Faq;
