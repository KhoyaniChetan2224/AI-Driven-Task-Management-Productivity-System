import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../pages/Header";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Overview from "../pages/Overview";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/software/jira/features" element={<Overview />} />
      
    </Routes>
  );
};

export default AppRoutes;