import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Header from "~/components/header";

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
