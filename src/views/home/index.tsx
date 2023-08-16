import React from "react";
import Header from "~/layouts/header";
import Contact from "./components/contact";
import Footer from "~/layouts/footer";
import Navbar from "~/layouts/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";

const Home = () => {
  return (
    <>
      <main className="bg-gray-900 text-white font-sans">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
