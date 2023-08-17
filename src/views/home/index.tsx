import React from "react";
import Contact from "./contact/contact";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";

const Home = () => {
  return (
    <>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
