import { useParams } from "react-router-dom";

const SinglePostPage = ({ data }) => {
  const { worksId } = useParams();

  // Find the post with the matching postId in the data array
  const work = data.find((work) => work.id === worksId);
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

export default SinglePostPage;
