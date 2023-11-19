import React from "react";
import "../faq.css";
import FaqCard from "../../../components/Cards/faq/FaqCard";
import CallIcon from "../../../assets/call-icon.svg";
import AddressIcon from "../../../assets/address-icon.svg";
const data = [
  {
    icon: CallIcon,
    title: "Call Support",
    subTitle:
      "We analyse your website’s structure, internal architecture & other key",
  },
  {
    icon: AddressIcon,
    title: "Address",
    subTitle: "Nairobi, Kenya",
  },
];

const FaqFooter = () => {
  return (
    <section className="faqFooter">
      <h2>Still need help</h2>
      <p>
        We enjoy adapting our strategies to offer <br />
        every client the best solutions that are <br />
        at the forefront of the industry.
      </p>

      <div className="faqCardContainer">
        <FaqCard data={data} />
      </div>
    </section>
  );
};

export default FaqFooter;
