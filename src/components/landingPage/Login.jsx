import React from "react";
import "../../css/constants.css";
import "../../css/landingCss/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-box">
        <div className="login-title">
          <h3>Login</h3>
        </div>
        <div className="login-form">
          <div className="form-element">
            <p>Username</p>
            <input type="text" name="username" />
          </div>
          <div className="form-element">
            <p>password</p>
            <input type="password" name="password" />
          </div>
          <span>
            Can't Sign in?{" "}
            <Link to="#" className="forgot-link">
              Forgot Password
            </Link>
          </span>
          <Link to="/dashboard" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
