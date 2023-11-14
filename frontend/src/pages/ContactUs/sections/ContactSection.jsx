import React from "react";
import "../contact.css";
import ContactForm from "../../../components/forms/ContactForm";
import ContactInfo from "../../../components/Cards/ContactInfo";

const ContactSection = () => {
  return (
    <section className="contactSection">
      <ContactForm />
      <ContactInfo />
    </section>
  );
};

export default ContactSection;
