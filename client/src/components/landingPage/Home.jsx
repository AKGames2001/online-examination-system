import React from "react";
import "../../css/landingCss/home.css";
import heading from "../../resources/heading.png";

function Home() {
  return (
    <>
      <div className="heading">
        <div className="heading-title">
          <h3>Online Assessment</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor iste
            velit exercitationem illum dolorum molestias eum consequuntur fugit
            reiciendis vitae atque quidem, reprehenderit ab tenetur fugiat
            earum. Aut, eveniet. Corporis.
          </p>
          <div className="buttons"></div>
          <a href="/register">Sign Up</a>
        </div>
        <div className="heading-img">
          <img src={heading} alt="online_exam_image" />
        </div>
      </div>
    </>
  );
}

export default Home;
