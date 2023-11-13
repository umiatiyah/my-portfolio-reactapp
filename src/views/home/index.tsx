import React from "react";
import { About, Contact, Portfolio } from "./components";
import { UseHome } from "./hooks";

const Home = () => {
  const data = UseHome();
  return (
    <>
      <About user_profile={data.user.user_profile} />
      <Portfolio experience={data.user.experience}/>
      <Contact contact={data.user.contact} />
    </>
  );
};

export default Home;
