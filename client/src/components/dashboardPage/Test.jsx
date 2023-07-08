import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/dashboardCss/testTeacher.css";

function Test() {
  // if (props.state === "Student") {
  //     return something;
  // } else {
  //     return something;
  // }
  useEffect(() => {
    const details = document.querySelector(".test-teacher-content-details");
    const activateBtn = document.querySelector(".test-teacher-content-top");

    activateBtn.addEventListener("click", () => {
      details.forEach((element) => {
        element.classList.toggle("active");
      });
      console.log("Toggled!");
    });
  });

  return (
    <>
      <div className="test-teacher">
        <div className="test-teacher-content">
          <div className="test-teacher-title">
            <h1>Test</h1>
          </div>
          <div className="test-teacher-tests">
            <div className="test-teacher-content-header">
              <div className="test-teacher-content-left">
                <h3 className="left-col">Subject</h3>
                <h3 className="right-col">Name</h3>
              </div>
              <div className="test-teacher-content-right">
                <Link to="/dashboard/test/add_question">+ Add question</Link>
              </div>
            </div>
            <div className="test-teacher-content-details active">
              <div className="test-teacher-content-top">
                <div className="test-teacher-content-left">
                  <p className="left-col">Biology</p>
                  <p className="right-col">DNA & Molecules</p>
                </div>
                <div className="test-teacher-content-right">
                  <i className="bx bx-edit-alt"></i>
                  <i className="bx bx-trash"></i>
                </div>
              </div>
              <div className="test-teacher-content-bottom">
                <div className="test-teacher-content-description">
                  <div className="test-teacher-content-description-left">
                    <p>Project:</p>
                    <p>ASPECt Project</p>
                  </div>
                  <div className="test-teacher-content-description-mid">
                    <p>Topic:</p>
                    <p>Evolution & Natural Selection</p>
                  </div>
                  <div className="test-teacher-content-description-right">
                    <p>Key Ideas:</p>
                    <p>CE 5C/M1 Link</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-teacher-content-details active">
              <div className="test-teacher-content-top">
                <div className="test-teacher-content-left">
                  <p className="left-col">Physics</p>
                  <p className="right-col">Quantum Mechanics</p>
                </div>
                <div className="test-teacher-content-right">
                  <i className="bx bx-edit-alt"></i>
                  <i className="bx bx-trash"></i>
                </div>
              </div>
              <div className="test-teacher-content-bottom">
                <div className="test-teacher-content-description">
                  <div className="test-teacher-content-description-left">
                    <p>Project:</p>
                    <p>ASPECt Project</p>
                  </div>
                  <div className="test-teacher-content-description-mid">
                    <p>Topic:</p>
                    <p>Evolution & Natural Selection</p>
                  </div>
                  <div className="test-teacher-content-description-right">
                    <p>Key Ideas:</p>
                    <p>CE 5C/M1 Link</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-teacher-content-details active">
              <div className="test-teacher-content-top">
                <div className="test-teacher-content-left">
                  <p className="left-col">Chem</p>
                  <p className="right-col">Entropy</p>
                </div>
                <div className="test-teacher-content-right">
                  <i className="bx bx-edit-alt"></i>
                  <i className="bx bx-trash"></i>
                </div>
              </div>
              <div className="test-teacher-content-bottom">
                <div className="test-teacher-content-description">
                  <div className="test-teacher-content-description-left">
                    <p>Project:</p>
                    <p>ASPECt Project</p>
                  </div>
                  <div className="test-teacher-content-description-mid">
                    <p>Topic:</p>
                    <p>Evolution & Natural Selection</p>
                  </div>
                  <div className="test-teacher-content-description-right">
                    <p>Key Ideas:</p>
                    <p>CE 5C/M1 Link</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-teacher-content-details active">
              <div className="test-teacher-content-top">
                <div className="test-teacher-content-left">
                  <p className="left-col">Maths</p>
                  <p className="right-col">Diffrentiation & Integration</p>
                </div>
                <div className="test-teacher-content-right">
                  <i className="bx bx-edit-alt"></i>
                  <i className="bx bx-trash"></i>
                </div>
              </div>
              <div className="test-teacher-content-bottom">
                <div className="test-teacher-content-description">
                  <div className="test-teacher-content-description-left">
                    <p>Project:</p>
                    <p>ASPECt Project</p>
                  </div>
                  <div className="test-teacher-content-description-mid">
                    <p>Topic:</p>
                    <p>Evolution & Natural Selection</p>
                  </div>
                  <div className="test-teacher-content-description-right">
                    <p>Key Ideas:</p>
                    <p>CE 5C/M1 Link</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
