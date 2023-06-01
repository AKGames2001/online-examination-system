import React from "react";
import "../../css/examCss/exam.css";
import { Link } from "react-router-dom";

function ExamStartPage() {
  // if (props.state === "Student") {
  //     return something;
  // } else {
  //     return something;
  // }

  // Take the id of exam from props to start the exam.
  var exam_id = "/exam/1";

  return (
    <>
      <div className="exam">
        <div className="exam-title">
          <h4>Title</h4>
        </div>
        <div className="exam-instructions">
          <div className="instructions">
            <ul>
              <li>Instruct 1</li>
              <li>Instruct 2</li>
              <li>Instruct 3</li>
              <li>Instruct 4</li>
            </ul>
          </div>
          <div className="exam-buttons">
            <Link to={exam_id} className="start">
              Start
            </Link>
            <Link to="/dashboard/exam" className="back">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamStartPage;
