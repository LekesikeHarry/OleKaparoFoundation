import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="icon">{isOpen ? "-" : "+"}</div>
        <h4>{title}</h4>
      </div>
      {isOpen && <p className="accordion-details">{details}</p>}
    </div>
  );
};

export default Accordion;
