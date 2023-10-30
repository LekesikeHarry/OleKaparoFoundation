import React from "react";
import "../homeStyles/about.css";
const AboutUs = () => {
  return (
    <section className="aboutSection">
      <div className="aboutInnerContainer">
        <div className="boxes">
          <div className="box1">
            <img
              src="https://images.pexels.com/photos/7315906/pexels-photo-7315906.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="box2">
            <img
              src="https://images.pexels.com/photos/6180490/pexels-photo-6180490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="aboutTextBox">
          <h6>
            About Us{" "}
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
            Your Support is Really <br />
            Powerful.​
          </h2>
          <p>
            The secret to happiness lies in helping others. Never <br />
            underestimate the difference YOU can make in the <br />
            lives of the poor, the abused and the helpless.
          </p>
          <button className="primaryButton">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
