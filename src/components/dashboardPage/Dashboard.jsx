import React from "react";
import "../../css/constants.css";
import "../../css/dashboardCss/dashboard.css";
import logoImage from "../../resources/S.png";
import Data from "../../Data";

function Dashboard() {
  const userData = Data[0];
  let userName = userData.fName + " " + userData.lName;
  let userEmail = userData.email;
  let userPhone = userData.contact;
  let userRole = userData.role;

  const userActivity = userData.activity[0];
  let activityPresence = userActivity.presence;
  let activityTest = userActivity.test;
  let activityExam = userActivity.exam;
  let activityThisWeek = userActivity.thisWeek;

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content">
          <div className="dashboard-title">
            <h1>Dashboard</h1>
          </div>
          <div className="dashboard-profile">
            <div className="profile-img">
              <img src={logoImage} alt="" />
            </div>
            <div className="profile-desc">
              <div className="profile-name">
                <p>{userName}</p>
              </div>
              <div className="profile-details">
                <p>Email : {userEmail}</p>
                <p>Ph No. : {userPhone}</p>
                <p>Role : {userRole}</p>
              </div>
            </div>
          </div>
          <h5>Activity</h5>
          <div className="dashboard-activity">
            <div className="activity-details">
              <div className="activity-item">
                <div className="activity-item-icon">
                  <i className="bx bx-calendar-check activity-icon icon"></i>
                </div>
                <div className="activity-item-details">
                  <p className="item-title">Presence</p>
                  <p>{activityPresence}</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-item-icon">
                  <i className="bx bx-window-alt icon"></i>
                </div>
                <div className="activity-item-details">
                  <p className="item-title">Test</p>
                  <p>{activityTest}</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-item-icon">
                  <i className="bx bx-bookmark icon"></i>
                </div>
                <div className="activity-item-details">
                  <p className="item-title">Exam</p>
                  <p>{activityExam}</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-item-icon">
                  <i className="bx bx-pie-chart-alt icon"></i>
                </div>
                <div className="activity-item-details">
                  <p className="item-title">This Week</p>
                  <p>{activityThisWeek}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script src="js/sidebar.js"></script>
      <script src="js/testTeacher.js"></script> */}
    </>
  );
}

export default Dashboard;
