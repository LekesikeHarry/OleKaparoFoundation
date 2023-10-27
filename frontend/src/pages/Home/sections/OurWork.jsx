import React from "react";
import "../homeStyles/works.css";
import Carousel from "../../../components/Carousel/Carousel";
import { worksData } from "../../../data";

const OurWork = () => {
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
        <Carousel data={worksData} buttonTxt="Donate Now!" />{" "}
      </div>
    </section>
  );
};

export default OurWork;
