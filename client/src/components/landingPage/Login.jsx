import React, { useState } from "react";
import "../../css/constants.css";
import "../../css/landingCss/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate;
  const [authVal, setAuthVal] = useState(true);
  // transfer data to localhost:3001/api/auth/login with query
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  async function submitHandler(event) {
    console.log("button clicked!");

    // await fetch("http://localhost:3001/api/auth/login", {
    //   method: "GET",
    //   body: JSON.stringify(userData),
    // })
    //   .then((response) => {
    //     console.log(response.json());
    //   })
    //   .then((data) => {
    //     setAuthVal(data);
    //   });

    await fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => {
        setAuthVal(data);
        console.log(data);
      });

    // let x = await fetch("http://localhost:5000/members");
    // setAuthVal = await x.text();

    console.log("Data Fetched!");
    console.log(authVal);
    if (authVal) {
      navigate("/dashboard");
    } else {
      alert("Wrong Username & Password!");
    }

    event.preventDefault();
  }

  function handleChange(event) {
    var eventName = event.target.name;
    if (eventName === "username") {
      setUserData({
        username: event.target.value,
        password: userData.lName,
      });
    } else {
      setUserData({
        username: userData.fName,
        password: event.target.value,
      });
    }
  }

  return (
    <>
      <div className="login-box">
        <div className="login-title">
          <h3>Login</h3>
        </div>
        <div className="login-form">
          <div className="form-element">
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <p>password</p>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <span>
            Can't Sign in?{" "}
            <Link to="#" className="forgot-link">
              Forgot Password
            </Link>
          </span>
          <Link to="/dashboard" className="login-btn" onClick={submitHandler}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
