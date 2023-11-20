import React from "react";
import Hero2 from "../Home/sections/Hero2";
import AllWorks from "../OurWorks/sections/AllWorks";
import usePostsQuery from "../../utils/PostQuery";

const Blogs = () => {
  //query data
  const { isPending, error, data, isFetching } = usePostsQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Hero2 data={{ title: "Blogs", subTitle: "Home/Blogs" }} />
      <AllWorks
        blogTitle={{
          title: "Blogs/Aritcles",
          subTitle: "Read Our Blogs/Articles",
        }}
        data={data}
      />
    </>
  );
};

export default Blogs;
