import React from "react";
import "./spinner.css";
import KaparoLogo from "../../assets/Logov1.svg";

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={KaparoLogo} alt="ole-kaparo-foundation-logo" loading="lazy" />
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
