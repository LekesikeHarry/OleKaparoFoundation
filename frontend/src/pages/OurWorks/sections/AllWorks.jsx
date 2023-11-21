import React from "react";
import "../../../components/Carousel/carousel.css";
import "../workPageStyles/worksPage.css";
import { Link } from "react-router-dom";
const AllWorks = ({ data, blogTitle }) => {
  return (
    <section className="worksPageSection">
      <div className="worksTop">
        <h6>
          Latest {blogTitle.title}{" "}
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
        <h2>{blogTitle.subTitle}</h2>
      </div>
      <div className="worksCardContainer">
        {!data ||
          data.map((item) => {
            return (
              <>
                <div className="worksCard" key={item._id}>

                  <img src={`http://localhost:4000/${item.image}`} alt="our-works-image" loading="lazy" />

                  <div className="cardDesc">
                    <p
                      style={{
                        color: "#219D80",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {item.category}
                    </p>

                    <h5
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <span
                      style={{
                        fontSize: "13px",
                        textOverflow: "ellipsis",
                        lineHeight: "20px",
                        overflow: "hidden",
                        maxHeight: "8em",
                      }}
                    >
                      {" "}
                      {item.summary}
                    </span>
                    <Link
                      to={`/our-work/${item._id}`}
                      className="primaryButton"
                      style={{ textDecoration: "none" }}
                    >
                      Read More..
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
};

export default AllWorks;
