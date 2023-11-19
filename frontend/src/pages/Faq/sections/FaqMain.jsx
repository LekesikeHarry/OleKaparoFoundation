import React from "react";
import Accordion from "../../../components/Accordion/Accordion";
import "../faq.css";
const FaqMain = () => {
  return (
    <section className="faqSection">
      <div className="faqWrapper">
        <div className="topHeaderContainer">
          <h6>
            Have any Question?{" "}
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
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faqInnerContainer">
          <div className="faqImgContainer">
            <img
              src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="faq-img"
              loading="lazy"
            />
          </div>
          <div className="faqRightContainer">
            <Accordion
              title="Section 1?"
              details="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio aspernatur rerum harum repudiandae ex non eligendi, consequuntur numquam sequi error totam magni expedita sed, nam repellendus mollitia placeat labore!
"
            />
            <Accordion
              title="Section 1?"
              details="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio aspernatur rerum harum repudiandae ex non eligendi, consequuntur numquam sequi error totam magni expedita sed, nam repellendus mollitia placeat labore!
"
            />
            <Accordion
              title="Section 1?"
              details="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio aspernatur rerum harum repudiandae ex non eligendi, consequuntur numquam sequi error totam magni expedita sed, nam repellendus mollitia placeat labore!
"
            />
            <Accordion
              title="Section 1?"
              details="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio aspernatur rerum harum repudiandae ex non eligendi, consequuntur numquam sequi error totam magni expedita sed, nam repellendus mollitia placeat labore!
"
            />
            <Accordion
              title="Section 1?"
              details="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio aspernatur rerum harum repudiandae ex non eligendi, consequuntur numquam sequi error totam magni expedita sed, nam repellendus mollitia placeat labore!
"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
