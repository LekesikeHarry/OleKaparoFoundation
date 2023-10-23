import React from "react";
import missionIcon from "../../../assets/missionIcon.svg";
import vissionIcon from "../../../assets/vissionIcon.svg";

const Charity = () => {
  return (
    <section className="aboutSection">
      <div className="charityInnerContainer">
        <div className="boxes">
          <div className="box1">
            <img
              src="https://images.pexels.com/photos/7315906/pexels-photo-7315906.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="box2">
            <div className="list">
              <ul>
                <li>Together, we're going to make the future</li>
                <li>children where we are able to fulfill all</li>
                <li>
                  their requirements to keep them safe from withered world
                </li>
                <li>
                  We have already stepped out and start changing the world
                </li>
                <li>Keeping safe them from war, inhumanity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="aboutTextBox">
          <h6>
            Welcome to Charity{" "}
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
            Let Us Come Together <br />
            To Make a Difference​
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy tempor invidunt ut labore et dolore magna aliquyam <br />
            erat, sed diam voluptua. At vero eos et accusam et justo.
          </p>
          <div className="cards">
            <div className="missionCard">
              <div className="cardTitle">
                <img src={missionIcon} alt="" /> <h5>Our Mission</h5>{" "}
              </div>
              <span style={{ fontFamily: "Montserrat" }}>
                Lorem ipsum dolor sit amet, <br />
                consetetur sadipscing elitr, <br /> sed diam
              </span>
            </div>
            <div className="vissionCard">
              {" "}
              <div className="cardTitle">
                <img src={vissionIcon} alt="" /> <h5>Our Vission</h5>{" "}
              </div>
              <span style={{ fontFamily: "Montserrat" }}>
                Lorem ipsum dolor sit amet, <br />
                consetetur sadipscing elitr, <br /> sed diam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charity;
