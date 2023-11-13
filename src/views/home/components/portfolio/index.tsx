import React from "react";

const Portfolio = ({experience}:IExperience) => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Project Card 1 --> */}
          {experience.map((item, index) =>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md" key={index}>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4" style={{whiteSpace: "pre-line"}}>
                {item.description}
              </p>
              {/* <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
