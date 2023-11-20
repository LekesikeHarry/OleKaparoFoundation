import React from "react";
import "./feature.css";
import { features } from "../../data";

const Features = () => {
  return (
    <section className="featureContainer">
      <h6>
        About{" "}
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
      <h2>Our Features</h2>
      <div className="bottom">
        {features.map((item) => {
          return (
            <>
              <div className="featureCard" key={item.id}>
                <div className="featInnerContainer">
                  <img src={item.icon} alt="feature-icon" loading="lazy" />
                  <h5
                    style={{
                      fontFamily: "Playfair Display",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </h5>
                  <span style={{ fontFamily: "Montserrat" }}>{item.desc}</span>
                  <ul>
                    {item.listItems.map((i) => {
                      return (
                        <>
                          <li key={i.id}>{i.text}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
