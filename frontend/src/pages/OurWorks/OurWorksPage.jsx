import React from "react";
import Hero2 from "../Home/sections/Hero2";
import AllWorks from "./sections/AllWorks";
  

// api
const OurWorksPage = ({ worksData }) => {
  return (
    <>
      <Hero2 data={{ title: "Our Works", subTitle: "Home/ Our-Works" }} />
      <AllWorks
        blogTitle={{
          title: "Causes",
          subTitle: "Find the popular cause and donate them",
        }}
        data={worksData}
      />
    </>
  );
};

export default OurWorksPage;
