import React, { useEffect, useState } from "react";
import HeroBg from "../../../assets/hero-bg.svg";
import "../homeStyles/hero.css";
import { Link } from "react-router-dom";
const Hero = ({ data }) => {
  const [showTextBox, setShowTextBox] = useState(false);

  useEffect(() => {
    setShowTextBox(true);
  }, []);

  return (
    <section className="heroSection">
      <img src={HeroBg} alt="hero-image" loading="lazy" />
      <div className="heroTextBox">
        <div className={`textBox ${showTextBox ? "show" : ""}`}>
          <h6 style={{ fontWeight: "lighter", fontFamily: "Montserrat" }}>
            Give Hope For Homeless
          </h6>
          <h1>
            Helping each other <br /> can make world better
          </h1>
          <p
            style={{
              fontWeight: "lighter",
              fontFamily: "Montserrat",
              lineHeight: "30px",
            }}
          >
            We Seek out world changers and difference makers around the <br />
            globe, and equip them to fulfill their unique purpose.
          </p>
        </div>
        <div className="btns">
          <button className="primaryButton">Donate Now!</button>
          <Link
            className="secondaryButton"
            to="/about"
            style={{ textDecoration: "none" }}
          >
            Know About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
