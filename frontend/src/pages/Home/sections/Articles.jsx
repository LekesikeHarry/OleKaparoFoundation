import React from "react";
import { articlesData } from "../../../data";
import "../homeStyles/works.css";
import "../homeStyles/articles.css";
import Carousel from "../../../components/Carousel/Carousel";

const Articles = () => {
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
        <Carousel data={articlesData} buttonTxt="Read More" />{" "}
      </div>
    </section>
  );
};

export default Articles;
