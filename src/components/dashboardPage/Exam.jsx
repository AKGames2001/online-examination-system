import React from "react";
import { Link } from "react-router-dom";
import "../../css/dashboardCss/examStudent.css";
import logoImage from "../../resources/S.png";
import Data from "../../Data";

function examElement(data) {
  const examGiven = data.given;
  let examPercentage = Math.round((data.score / data.maxScore) * 100);
  return (
    <div className="student-exam-element">
      <div className="student-exam-element-top">
        <div className="exam-element-logo">
          <img src={logoImage} alt="" />
        </div>
        <div className="exam-element-title">
          <h3>{data.name}</h3>
          <p>{data.subject}</p>
        </div>
      </div>
      <div className="student-exam-element-mid">
        <div className="exam-element-details">
          <p>Score</p>
          <h2>{data.score + "/" + data.maxScore}</h2>
          <p>Per: {examPercentage}%</p>
        </div>
      </div>
      <div className="student-exam-element-bottom">
        {examGiven ? (
          <Link to="/exam/result">View Result</Link>
        ) : (
          <Link to="/exam">Give Exam</Link>
        )}
      </div>
    </div>
  );
}

function Exam() {
  const userData = Data[0].tests;

  return (
    <>
      <div className="student-exam">
        <div className="student-exam-content">
          <div className="student-exam-content-title">
            <h1>Exam</h1>
          </div>
          <h5>Currently Assigned</h5>
          <div className="student-exam-content-current">
            {userData.map(examElement)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;
