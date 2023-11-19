import React from "react";
import "../contactFormStyles.css";
const RegForm = () => {
  return (
    <form action="" method="post">
      <div className="innerInputs">
        <div className="topInputs">
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your email.."
            />{" "}
          </div>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password.."
            />{" "}
          </div>
        </div>
      </div>
      <button className="primaryButton"> login</button>
    </form>
  );
};

export default RegForm;
