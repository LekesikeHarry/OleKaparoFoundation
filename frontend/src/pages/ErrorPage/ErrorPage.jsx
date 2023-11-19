import React from "react";
import errorBg from "../../assets/404.svg";
import "./error.css";
import Nav from "../../components/Nav/Nav";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
const ErrorPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav color={"black"} filter={"brightness(0.5)"} />
      <div className="errorBody">
        <div className="errorImgContainer">
          <img src={errorBg} alt="404-img" loading="lazy" />
        </div>
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
