import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/dashboardCss/sidebar.css";
import logoImage from "../../resources/S.png";

function Sidebar() {
  const [search, setSearch] = useState("");

  function changeHandler(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const body = document.querySelector("body"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerHTML = "Light Mode";
      } else {
        modeText.innerHTML = "Dark Mode";
      }
    });
  });
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  });

  return (
    <>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <div className="image">
              <img src={logoImage} alt="" />
            </div>

            <div className="text header-text">
              <span className="name">Shoyo</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={changeHandler}
              />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/dashboard">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/dashboard/test">
                  <i className="bx bx-window-alt icon"></i>
                  <span className="text nav-text">Test</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/dashboard/exam">
                  <i className="bx bx-bookmark icon"></i>
                  <span className="text nav-text">Exam</span>
                </Link>
              </li>
              {/* <!-- <li class="nav-link">
                        <Link to="">
                            <i class='bx bx-edit icon' ></i>
                            <span class="text nav-text">
                                Result
                            </span>
                        </Link>
                    </li> --> */}
              <li className="nav-link">
                <Link to="/dashboard/settings">
                  <i className="bx bx-cog icon"></i>
                  <span className="text nav-text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <Link to="/">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </Link>
            </li>
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark Mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
