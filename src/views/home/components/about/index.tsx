import React from "react";

const About = ({user_profile}:IUserProfile) => {
  return (
    <section id="about" className="py-16 bg-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          {user_profile.description}
        </p>
      </div>
    </section>
  );
};

export default About;
