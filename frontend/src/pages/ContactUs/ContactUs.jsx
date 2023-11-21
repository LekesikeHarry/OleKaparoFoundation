import React from "react";
import "./contact.css";
import Hero2 from "../Home/sections/Hero2";
import ContactSection from "./sections/ContactSection";
const ContactUs = () => {
  return (
    <>
      <Hero2 data={{ title: "Contact Us", subTitle: "Home/ Contact-Us" }} />
      <ContactSection />
    </>
  );
};

export default ContactUs;
