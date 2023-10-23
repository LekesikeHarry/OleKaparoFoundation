import React, { useEffect, useState } from "react";
import HeroBg from "../../../assets/hero-bg.svg";
import "../homeStyles/hero.css";
const Hero = () => {
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
          <button className="secondaryButton">Know About Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
