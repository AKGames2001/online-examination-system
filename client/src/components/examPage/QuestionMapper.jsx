import React from "react";
import questions from "../../ExamData";

function QuestionMapper(props) {
  let questionData = questions[props.number - 1];
  return (
    <>
      <div className="question">
        <p>{questionData.title}</p>
      </div>
      <div className="options">
        <ul>
          <li>
            <input type="radio" name="opt" id="" />
            {questionData.opt1}
          </li>
          <li>
            <input type="radio" name="opt" id="" />
            {questionData.opt2}
          </li>
          <li>
            <input type="radio" name="opt" id="" />
            {questionData.opt3}
          </li>
          <li>
            <input type="radio" name="opt" id="" />
            {questionData.opt4}
          </li>
        </ul>
      </div>
    </>
  );
}

export default QuestionMapper;
