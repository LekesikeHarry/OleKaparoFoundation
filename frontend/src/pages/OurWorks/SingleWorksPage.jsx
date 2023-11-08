import { useLocation, useParams } from "react-router-dom";
import Hero2 from "../Home/sections/Hero2";
import Content from "./sections/Content";

const SingleWorksPage = ({ data }) => {
  const { worksId } = useParams();
  const workId = parseInt(worksId); // Convert worksId to a number

  // Find the post with the matching postId in the data array
  const work = data.find((item) => item.id === workId);
  if (!work) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Hero2
          data={{
            title: work.header,
            subTitle: work.tag,
          }}
      />
      <Content data={...work} />
    </>
  );
};

export default SingleWorksPage;
