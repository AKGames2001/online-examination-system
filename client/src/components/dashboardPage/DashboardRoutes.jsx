import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Test from "./Test";
import Exam from "./Exam";
import Settings from "./Settings";
import AddQuestion from "./TestAddQuestion";

function DashboardRoutes() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/add_question" element={<AddQuestion />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default DashboardRoutes;
