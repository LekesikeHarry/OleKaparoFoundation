import React from "react";
import GPFLogo from "../../assets/GPF_Logo 1.svg";
import "./partners.css";
const Partners = () => {
  return (
    <section className="partnersSection">
      <div className="logos">
        <img
          src={GPFLogo}
          alt="global-peace-foundation-organisation-logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Partners;
