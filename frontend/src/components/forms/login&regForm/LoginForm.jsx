import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../contactFormStyles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [token, setToken] = useState("");
  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        const token = userInfo.token;
        setToken(token);

        localStorage.setItem("token", token);
        // console.log(token); // Log the newToken within the .then block

        history("/");
      });
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className="inputWrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
      </div>
      <div className="inputWrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
      </div>

      <button className="primaryButton">Login</button>
    </form>
  );
}

export default Login;
