import React from "react";
import { Link } from "react-router-dom";
import "../../css/examCss/examResult.css";
import ExamNavBar from "./ExamNavBar";

function ExamResult() {
  return (
    <>
      <div className="exam-result">
        <ExamNavBar pageName="result" />
        <div className="exam-result-body">
          <div className="result-box">
            <h3>Exam Submitted Successfully!</h3>
            <p>You can now close the tab or return back to the Dashboard</p>
            <Link to="/dashboard">Exit</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamResult;
