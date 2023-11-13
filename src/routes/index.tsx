import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views";
import { Footer, Header, Navbar } from "~/components";
import { UseHome } from "~/views/home/hooks";

const Navigations = () => {
  const data = UseHome();  
  return (
    <BrowserRouter>
      <main className="bg-gray-900 text-white font-sans">
        <Navbar />
        <Header user_profile={data.user.user_profile} />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default Navigations;
