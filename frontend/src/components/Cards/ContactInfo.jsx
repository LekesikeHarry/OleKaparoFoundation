import React from "react";
import "./cards.css";
const addressInfo = [
  {
    id: 0,
    title: "Address",
    info: "    Quam elementum pulvinar etiam non quam lacus suspendisse.A scelerisqu purus semper eget duis at Lobortisscelerisque fermentum dui faucibus inornare....",
    location: "Laikipia, Kenya",
    phoneNumber: "0712343456",
    email: "olekaparofoundation@gmail.com",
  },
];

const ContactInfo = () => {
  return (
    <>
      {addressInfo.map((item) => {
        return (
          <>
            <div key={item.id} className="contactInfoCard">
              <h3>
                {item.title}{" "}
                <span
                  style={{
                    fontWeight: "lighter",
                    color: "#219D80",
                    fontSize: "15px",
                  }}
                >
                  &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;
                </span>{" "}
              </h3>

              <div className="innerContactCard">
                <span style={{ fontFamily: "Montserrat" }}>{item.info}</span>
                <div className="addressDetails">
                  <p>
                    Location: <span>{item.location}</span>
                  </p>
                  <p>
                    Phone: <span>{item.phoneNumber}</span>
                  </p>
                  <p>
                    Email: <span>{item.email}</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ContactInfo;
