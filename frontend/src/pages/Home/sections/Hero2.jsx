import React, { useEffect, useState } from "react";
import HeroBg from "../../../assets/hero-bg.svg";
const Hero2 = ({ data }) => {
  const [showTextBox, setShowTextBox] = useState(false);

  useEffect(() => {
    setShowTextBox(true);
  }, []);
  return (
    <section className="hero2Section">
      <img src={HeroBg} alt="hero-image" loading="lazy" />
      <div className="heroTextBox">
        <div className={`textBox ${showTextBox ? "show" : ""}`}>
          <h1>{data.title}</h1>

          <p
            style={{
              fontWeight: "lighter",
              fontFamily: "Montserrat",
              lineHeight: "30px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {data.subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
