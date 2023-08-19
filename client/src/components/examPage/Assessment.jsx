import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/examCss/assessment.css";
import ExamNavBar from "./ExamNavBar";

function Assessment() {
  return (
    <div className="assessment">
      <ExamNavBar pageName="assessment" />
      <div className="exam-area">
        <div className="exam-question-area">
          <div className="question-area-heading">
            <h3>Subject : </h3>
            <p>Sub Name</p>
          </div>
          <div className="exam-question">
            <div className="question">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corporis, repudiandae placeat in dolorum veniam,
                ducimus vitae, ipsum nobis quas debitis. Assumenda tempore nulla
                eligendi sit iure, debitis nesciunt quas!
              </p>
            </div>
            <div className="options">
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
        <div className="exam-questions">
          <div className="question-container-heading">
            <h4>Questions</h4>
          </div>
          <div className="question-container">
            <Link to="" name="num1">
              1
            </Link>
            <Link to="" name="num2">
              2
            </Link>
            <Link to="" name="num3">
              3
            </Link>
            <Link to="" name="num4">
              4
            </Link>
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

// function Assessment() {
//   let [queNumber, setQueNumber] = useState(1);

//   function clickHandler(event) {
//     setQueNumber = Number(event.target.name);
//   }

//   return (
//     <div className="assessment">
//       <ExamNavBar pageName="assessment" />
//       <div className="exam-area">
//         <div className="exam-question-area">
//           <div className="question-area-heading">
//             <h3>Subject : </h3>
//             <p>Sub Name</p>
//           </div>
//           <div className="exam-question">
//             <QuestionMapper number={queNumber} />
//           </div>
//         </div>
//         <div className="exam-questions">
//           <div className="question-container-heading">
//             <h4>Questions</h4>
//           </div>
//           <div className="question-container">
//             <Link to="" onClick={clickHandler} name=")1">
//               1
//             </Link>
//             <Link to="" onClick={clickHandler} name=")2">
//               2
//             </Link>
//             <Link to="" onClick={clickHandler} name=")3">
//               3
//             </Link>
//             <Link to="" onClick={clickHandler} name=")4">
//               4
//             </Link>
//           </div>
//           <div className="question-submit">
//             <Link to="/exam/result">Submit</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
