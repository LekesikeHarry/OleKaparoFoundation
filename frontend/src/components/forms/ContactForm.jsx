import React from "react";
import "./contactFormStyles.css";
const ContactForm = () => {
  return (
    <>
      <form action="">
        <h6>
          Get in Touch{" "}
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
        <h2>Send me a message</h2>

        <div className="inputs">
          <div className="innerInputs">
            <div className="topInputs">
              <div className="names">
                <div className="inputWrapper">
                  <label htmlFor="Fname"> First Name</label>
                  <input
                    type="text"
                    name="Fname"
                    id="Fname"
                    placeholder="First Name"
                  />{" "}
                </div>
                <div className="inputWrapper">
                  <label htmlFor="Lname"> Last Name</label>
                  <input
                    type="text"
                    name="Lname"
                    id="Lname"
                    placeholder="Last Name"
                  />{" "}
                </div>
              </div>
              <div className="others">
                <div className="inputWrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email.."
                  />{" "}
                </div>
                <div className="inputWrapper">
                  <label htmlFor="Pnumber">Phone Number</label>
                  <input
                    type="number"
                    name="Pnumber"
                    id="Pnumber"
                    placeholder="Phone Number"
                  />{" "}
                </div>
              </div>
            </div>
            <label htmlFor="textArea">Message</label>
            <textarea
              name="textArea"
              id="textArea"
              cols="30"
              rows="10"
              placeholder="Type your message here....."
            />
          </div>
          <button className="primaryButton"> Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
