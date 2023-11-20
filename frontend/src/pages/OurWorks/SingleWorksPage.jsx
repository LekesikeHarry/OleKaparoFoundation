import { useParams } from "react-router-dom";
import Hero2 from "../Home/sections/Hero2";
import Content from "./sections/Content";
import usePostsQuery from "../../utils/PostQuery";

const SingleWorksPage = () => {
  //query data
  const { isPending, error, data, isFetching } = usePostsQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { worksId } = useParams();
  // const workId = parseInt(worksId); // Convert worksId to a number

  // Find the post with the matching postId in the data array
  const work = data.find((item) => item._id === worksId);
  if (!work) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Hero2
        data={{
          title: work.title,
          subTitle: work.category,
        }}
      />
      <Content data={work} />
    </>
  );
};

export default SingleWorksPage;
