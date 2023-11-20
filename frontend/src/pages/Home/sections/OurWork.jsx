import React from "react";
import "../homeStyles/works.css";
import Carousel from "../../../components/Carousel/Carousel";
import usePostsQuery from "../../../utils/PostQuery";

const OurWork = () => {
  const { isPending, error, data, isFetching } = usePostsQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="ourWorkSection">
      <div className="worksTop">
        <h6>
          Latest Causes{" "}
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
        <h2>
          Find the popular cause <br />
          and donate them​
        </h2>
      </div>

      <div className="worksInnerContainer">
        <Carousel data={data} buttonTxt="Donate Now!" />{" "}
      </div>
    </section>
  );
};

export default OurWork;
