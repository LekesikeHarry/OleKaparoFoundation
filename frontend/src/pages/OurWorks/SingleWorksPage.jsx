import { useParams } from "react-router-dom";

const SingleWorksPage = ({ data }) => {
  const { worksId } = useParams();
  const workId = parseInt(worksId); // Convert worksId to a number

  // Find the post with the matching postId in the data array
  const work = data.find((item) => item.id === workId);
  if (!work) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      {/* Render other details of the post */}
    </div>
  );
};

export default SingleWorksPage;
