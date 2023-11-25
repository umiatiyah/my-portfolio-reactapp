import React from "react";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { Navbar, Header, Footer } from "~/components";
import { GetUserProfile } from "~/services/user/userService";
// import Login from "../auth/login";

const Home = () => {
  // const token = localStorage.getItem('accessToken');
  // if(!token) {
  //   return <Login />
  // }

  const data = GetUserProfile();
  return (
    <div className="text-white font-sans">
      <Navbar />
      <Header user_profile={data.user.user_profile} />
      <About user_profile={data.user.user_profile} />
      <Portfolio experience={data.user.experience}/>
      <Contact user_profile={data.user.user_profile} />
      <Footer />
    </div>
  );
};

export default Home;
