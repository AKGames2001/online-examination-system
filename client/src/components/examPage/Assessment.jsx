import React from "react";
import { Link } from "react-router-dom";
import "../../css/examCss/assessment.css";
import ExamNavBar from "./ExamNavBar";

function Assessment() {
  return (
    <div className="assessment">
      <ExamNavBar pageName="assessment" />
      <div class="exam-area">
        <div class="exam-question-area">
          <div class="question-area-heading">
            <h3>Subject : </h3>
            <p>Sub Name</p>
          </div>
          <div class="exam-question">
            <div class="question">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corporis, repudiandae placeat in dolorum veniam,
                ducimus vitae, ipsum nobis quas debitis. Assumenda tempore nulla
                eligendi sit iure, debitis nesciunt quas!
              </p>
            </div>
            <div class="options">
              <ul>
                <li>
                  <input type="radio" name="opt" id="" />
                  Option 1
                </li>
                <li>
                  <input type="radio" name="opt" id="" />
                  Option 2
                </li>
                <li>
                  <input type="radio" name="opt" id="" />
                  Option 3
                </li>
                <li>
                  <input type="radio" name="opt" id="" />
                  Option 4
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exam-questions">
          <div class="question-container-heading">
            <h4>Questions</h4>
          </div>
          <div class="question-container">
            <Link to="">1</Link>
            <Link to="">2</Link>
            <Link to="">3</Link>
            <Link to="">4</Link>
          </div>
          <div class="question-submit">
            <Link to="/exam/result">Submit</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
