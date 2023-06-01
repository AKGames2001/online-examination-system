import React from "react";
import "../../css/constants.css";
import "../../css/landingCss/login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="login-box">
        <div className="login-title">
          <h3>Register</h3>
        </div>
        <div className="login-form">
          <div className="form-element">
            <p>Full Name</p>
            <input type="text" name="name" />
          </div>
          <div className="form-element">
            <p>Username</p>
            <input type="text" name="username" />
          </div>
          <div className="form-element">
            <p>Email</p>
            <input type="text" name="email" />
          </div>
          <div className="form-element">
            <p>Phone Number</p>
            <input type="text" name="phoneNumber" />
          </div>
          <div className="form-element">
            <p>Country</p>
            <input type="text" name="phoneNumber" />
          </div>
          <div className="form-element">
            <p>Password</p>
            <input type="password" name="password" />
          </div>
          <div className="form-element">
            <p>Confirm Password</p>
            <input type="password" name="password" />
          </div>
          <span>
            Already User?{" "}
            <Link to="/login" className="forgot-link">
              Login
            </Link>
          </span>
          <Link to="/dashboard" className="login-btn">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
