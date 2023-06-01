import React from "react";
import { Route, Routes } from "react-router-dom";
import Assessment from "./Assessment";
import ExamStartPage from "./ExamStartPage";
import ExamResult from "./ExamResult";

function ExamPageRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<ExamStartPage />} />
        {/* <Route path="/test/:id" element={<Assessment />} /> */}
        <Route path="/:id" element={<Assessment />} />
        <Route path="/result" element={<ExamResult />} />
      </Routes>
    </>
  );
}

export default ExamPageRoutes;
