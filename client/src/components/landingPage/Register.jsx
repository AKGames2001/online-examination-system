import React, { useState } from "react";
import "../../css/constants.css";
import "../../css/landingCss/login.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate;
  const [authVal, setAuthVal] = useState(false);
  // Transfer data to localhost:3001/api/auth/register with query
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    contact: "",
    country: "",
    password: "",
    confPassword: "",
  });

  function handleChange(event) {
    var eventName = event.target.name;
    if (eventName === "name") {
      setUserData({
        name: event.target.value,
        username: userData.username,
        email: userData.email,
        contact: userData.contact,
        country: userData.country,
        password: userData.password,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "username") {
      setUserData({
        name: userData.name,
        username: event.target.value,
        email: userData.email,
        contact: userData.contact,
        country: userData.country,
        password: userData.password,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "email") {
      setUserData({
        name: userData.name,
        username: userData.username,
        email: event.target.value,
        contact: userData.contact,
        country: userData.country,
        password: userData.password,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "phoneNumber") {
      setUserData({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        contact: event.target.value,
        country: userData.country,
        password: userData.password,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "country") {
      setUserData({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        contact: userData.contact,
        country: event.target.value,
        password: userData.password,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "password") {
      setUserData({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        contact: userData.contact,
        country: userData.country,
        password: event.target.value,
        confPassword: userData.confPassword,
      });
    } else if (eventName === "confPassword") {
      setUserData({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        contact: userData.contact,
        country: userData.country,
        password: userData.password,
        confPassword: event.target.value,
      });
    }
    console.log(userData);
  }

  function loginRedirectHandler() {
    navigate("/login");
  }

  function submitHandler(event) {
    console.log("button clicked!");

    fetch("http://localhost:3001/api/auth/register", {
      method: "GET",
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        setAuthVal(data);
      });

    console.log("Data Fetched!");
    console.log(authVal);
    if (authVal) {
      navigate("/dashboard");
    } else {
      alert("Wrong Username & Password!");
    }

    event.preventDefault();
  }

  return (
    <>
      <div className="login-box">
        <div className="login-title">
          <h3>Register</h3>
        </div>
        <div className="login-form">
          <div className="form-element">
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={userData.name}
            />
          </div>
          <div className="form-element">
            <p>Username</p>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={userData.username}
            />
          </div>
          <div className="form-element">
            <p>Email</p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </div>
          <div className="form-element">
            <p>Phone Number</p>
            <input
              type="tel"
              name="phoneNumber"
              onChange={handleChange}
              value={userData.contact}
            />
          </div>
          <div className="form-element">
            <p>Country</p>
            <input
              type="text"
              name="country"
              onChange={handleChange}
              value={userData.country}
            />
          </div>
          <div className="form-element">
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
            />
          </div>
          <div className="form-element">
            <p>Confirm Password</p>
            <input
              type="password"
              name="confPassword"
              onChange={handleChange}
              value={userData.confPassword}
            />
          </div>
          <span>
            Already User?{" "}
            <Link onClick={loginRedirectHandler} className="forgot-link">
              Login
            </Link>
          </span>
          <Link onClick={submitHandler} className="login-btn">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
