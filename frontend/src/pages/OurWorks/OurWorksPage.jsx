import React from "react";
import Hero2 from "../Home/sections/Hero2";
import AllWorks from "./sections/AllWorks";
import usePostsQuery from "../../utils/PostQuery";

const OurWorksPage = () => {
  //query data
  const { isPending, error, data, isFetching } = usePostsQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Hero2 data={{ title: "Our Works", subTitle: "Home/ Our-Works" }} />
      <AllWorks
        blogTitle={{
          title: "Causes",
          subTitle: "Find the popular cause and donate them",
        }}
        data={data}
      />
    </>
  );
};

export default OurWorksPage;
