import React, { useState } from "react";
import LandingRoutes from "./components/landingPage/LandingRoutes";
import DashboardRoutes from "./components/dashboardPage/DashboardRoutes";
import ExamPageRoutes from "./components/examPage/ExamPageRoutes.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        {/* For testing Purposes only */}
        <Route path="*" element={<LandingRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/exam/*" element={<ExamPageRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
