import React from "react";
import Slider from "react-slick";
import "../homeStyles/works.css";

const OurWork = () => {
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
        <Slider {...settings}>
          <div className="worksCard">
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
            />

            <div className="cardDesc">
              <p
                style={{
                  color: "#219D80",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Medical
              </p>
              <h5>
                Donate for poor peoples <br />
                treatment and medicine.
              </h5>
              <span>
                Lorem ipsum dolor sit amet, consete <br />
                sadipscing elitr, sed diam nonumy....
              </span>
              <button className="primaryButton">Donate Now</button>
            </div>
          </div>
          <div className="worksCard">
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
            />

            <div className="cardDesc">
              <p
                style={{
                  color: "#219D80",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Medical
              </p>
              <h5>
                Donate for poor peoples <br />
                treatment and medicine.
              </h5>
              <span>
                Lorem ipsum dolor sit amet, consete <br />
                sadipscing elitr, sed diam nonumy....
              </span>
              <button className="primaryButton">Donate Now</button>
            </div>
          </div>
          <div className="worksCard">
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
            />

            <div className="cardDesc">
              <p
                style={{
                  color: "#219D80",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Medical
              </p>
              <h5>
                Donate for poor peoples <br />
                treatment and medicine.
              </h5>
              <span>
                Lorem ipsum dolor sit amet, consete <br />
                sadipscing elitr, sed diam nonumy....
              </span>
              <button className="primaryButton">Donate Now</button>
            </div>
          </div>
          <div className="worksCard">
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
            />

            <div className="cardDesc">
              <p
                style={{
                  color: "#219D80",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Medical
              </p>
              <h5>
                Donate for poor peoples <br />
                treatment and medicine.
              </h5>
              <span>
                Lorem ipsum dolor sit amet, consete <br />
                sadipscing elitr, sed diam nonumy....
              </span>
              <button className="primaryButton">Donate Now</button>
            </div>
          </div>
          <div className="worksCard">
            <img
              src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="our-works-image"
            />

            <div className="cardDesc">
              <p
                style={{
                  color: "#219D80",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Medical
              </p>
              <h5>
                Donate for poor peoples <br />
                treatment and medicine.
              </h5>
              <span>
                Lorem ipsum dolor sit amet, consete <br />
                sadipscing elitr, sed diam nonumy....
              </span>
              <button className="primaryButton">Donate Now</button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurWork;
