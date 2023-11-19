import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import AuthorIcon from "../../assets/author-icon.svg";
import DateIcon from "../../assets/calendar-icon.svg";
import { Link } from "react-router-dom";

const Carousel = ({ data, buttonTxt }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <div className="worksCard" key={item._id}>
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
              loading="lazy"
            />

            <div className="cardDesc">
              {item.author ? (
                <div className="cardHeader">
                  <div className="authorCont">
                    <img src={AuthorIcon} alt="author-icon" loading="lazy" />
                    <p
                      style={{
                        color: "#999",
                        fontWeight: "500",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {item.author.username}
                    </p>
                  </div>

                  <div className="dateCont">
                    <img src={DateIcon} alt="date-icon" loading="lazy" />
                    <p
                      style={{
                        color: "#999",
                        fontWeight: "500",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ) : (
                <p
                  style={{
                    color: "#219D80",
                    fontWeight: "600",

                    fontFamily: "Montserrat",
                  }}
                >
                  {item.title}
                </p>
              )}
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
                Read More...
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
