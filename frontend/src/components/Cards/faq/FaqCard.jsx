import React from "react";
import "./faqCard.css";
const FaqCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="faqCard" key={index}>
            <img src={item.icon} alt="faq-card-icon" loading="lazy" />
            <h4>{item.title}</h4>
            <p>{item.subTitle}</p>
          </div>
        );
      })}
    </>
  );
};

export default FaqCard;
