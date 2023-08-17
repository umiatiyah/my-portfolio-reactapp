import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Project Card 1 --> */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
            <p className="text-gray-400 mb-4">
              Assigned at AXA Mandiri Financial Services Involved Projects 1.
              Payment Surrounding - Maintenance system application using .NET
              Framework 2. Authorization and Payment System - Build a system
              application for Finance using ASP.NET Core - Build a web
              application using ASP.NET Core MVC Operation System: Windows Tech:
              Git, SVN, SQLServer, .NET Framework, ASP.NET Core{" "}
            </p>
            <a className="text-blue-500 hover:underline" href="#">
              Learn More
            </a>
          </div>
          {/* <!-- Repeat for other projects --> */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-400 mb-4">
              Involved Projects 1. MMKSI Middleware Service - Build a RESTful
              API with Go using Gin Framework - Deployment to AWS using Lambda
              and API Gateway 2. Lion Pasti - Build a RESTful API with Node
              using Express Framework 3. Fuso Dealer Mobile Application (FDMA) -
              Build a RESTful API with ASP.NET Core using Entity Framework and
              Dapper - Enhancement Web Application using VueJs - Deployment to
              IIS Server 4. ULTIMA (EMI - IOT) - Build a APIs in Go using gRPC
              and GraphQL - Create unit test Operation System: Linux, Windows
              Tech: Linux, Git, Azure DevOps, SQLServer, PostgreSQL, Golang,
              ASP.NET Core, JavaScript, TypeScript, REST, gRPC, GraphQL{" "}
            </p>
            <a className="text-blue-500 hover:underline" href="#">
              Learn More
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="text-gray-400 mb-4">
              - Develop a website-based application system to monitor shipment
              tracking - Develop a website-based application for company profile
              - Develop a website-based application system to manage attendance,
              payroll and leave Operation System: Linux Tech: PHP - Laravel
              Framework{" "}
            </p>
            <a className="text-blue-500 hover:underline" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
