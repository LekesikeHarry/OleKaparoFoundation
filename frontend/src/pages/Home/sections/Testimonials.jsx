import React from "react";
import "../homeStyles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonialSection">
      <div className="testimonial">
        <h6>
          {" "}
          <span
            style={{
              fontWeight: "lighter",
              color: "lightgray",
              fontSize: "18px",
            }}
          >
            &#9473;&#9473;&#9473;&#9473;
          </span>{" "}
          Our Testimonials{" "}
          <span
            style={{
              fontWeight: "lighter",
              color: "lightgray",
              fontSize: "18px",
            }}
          >
            &#9473;&#9473;&#9473;&#9473;
          </span>{" "}
        </h6>
        <h2>What People Say</h2>
        <img
          src="https://globalpeace.org/wp-content/uploads/2022/12/Hon.-Francis-Xavier-Ole-Kaparo.jpg"
          alt="profile-image"
        />
        <h5>Hon. Francis Xavier Ole Kaparo</h5>
        <span>Founder</span>
        <p>
          Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
          Minnow snoek icefish velvet-belly shark, California halibut round
          stingray northern sea robin. Southern grayling trout-perchSharksucker
          sea toad candiru rocket danio tilefish stingray deepwater stingray
          Sacramento splittail, Canthigaster rostrata.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
