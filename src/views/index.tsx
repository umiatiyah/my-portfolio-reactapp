import React from 'react';

interface WelcomeProps {
  companyName: string;
}

const WelcomePage: React.FC<WelcomeProps> = ({ companyName }) => (
  <div className="bg-gray-100 text-center p-5 h-screen">
    <h1 className="text-blue-600">Welcome to {companyName}</h1>
    <p className="text-zinc-800">Coming Soon!</p>
    <p className="text-zinc-800">I will share my activity about ride, code, and music</p>
  </div>
);

const App: React.FC = () => {
  const companyName = "Dunia Tipu Tipu"; // Change this to your actual company name

  return (
    <>
        <div>
        <nav className="bg-gray-200 p-4 flex justify-between items-center">
          <img src="/au.svg" alt="Logo"
            className="w-8 h-8"></img>
          <ul className="flex space-x-6">
          <li>
              <a href="/login" className="hover:text-blue-500">
              Login
              </a>
          </li>
          </ul>
        </nav>
        <section>
            <WelcomePage companyName={companyName} />
        </section>
        </div>
    </>
  );
};

export default App;
