import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Register from "./Register";

function LandingRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default LandingRoutes;
