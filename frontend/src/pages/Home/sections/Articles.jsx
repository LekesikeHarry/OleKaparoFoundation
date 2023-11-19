import React from "react";
import "../homeStyles/works.css";
import "../homeStyles/articles.css";
import Carousel from "../../../components/Carousel/Carousel";
import usePostsQuery from "../../../utils/PostQuery";

const Articles = () => {
  //query data
  const { isPending, error, data, isFetching } = usePostsQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="articlesSection">
      <div className="worksTop">
        <h6>
          Latest News{" "}
          <span
            style={{
              fontWeight: "lighter",
              color: "lightgray",
              fontSize: "20px",
            }}
          >
            &#9473;&#9473;&#9473;&#9473;
          </span>{" "}
        </h6>
        <h2>Articles You May Read</h2>
      </div>
      <div className="worksInnerContainer">
        <Carousel data={data} buttonTxt="Read More" />{" "}
      </div>
    </section>
  );
};

export default Articles;
