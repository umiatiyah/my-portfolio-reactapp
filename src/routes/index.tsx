import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views";
import Navbar from "~/layouts/navbar";
import Header from "~/layouts/header";
import Footer from "~/layouts/footer";

const Navigations = () => {
  return (
    <BrowserRouter>
      <main className="bg-gray-900 text-white font-sans">
        <Navbar />
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default Navigations;
