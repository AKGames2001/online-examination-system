import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../resources/S.png";
import "../../css/examCss/examResult.css";

function ExamResult() {
  return (
    <>
      <div className="exam-result">
        <div className="exam-nav">
          <div className="exam-nav-logo">
            <img src={logoImage} alt="" />
            <h4>Shoyo</h4>
          </div>
        </div>
        <div className="exam-result-body">
          <div className="result-box"></div>
        </div>
      </div>
      <Link to="/dashboard">Exit</Link>
    </>
  );
}

export default ExamResult;
