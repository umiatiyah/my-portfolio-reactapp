import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "~/views";
import AdminDashboardPage from "~/views/admin/dashboard";
import Login from "~/views/auth/login";
import Home from "~/views/home";

const Navigations = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/userprofile" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Navigations;
