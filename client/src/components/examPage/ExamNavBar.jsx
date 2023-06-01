import React from "react";
import logoImage from "../../resources/S.png";

function ExamNavBar(props) {
  var timeSlot = true;
  if (props.pageName === "result") {
    timeSlot = false;
  } else if (props.pageName === "assessment") {
    timeSlot = true;
  }
  return (
    <>
      <nav class="navbar">
        <div class="nav-img">
          <img src={logoImage} alt="" />
          <h4>Shoyo</h4>
        </div>
        {timeSlot ? (
          <div class="nav-timer">
            <h3>Time : </h3>
            <p>99:99</p>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}

export default ExamNavBar;
