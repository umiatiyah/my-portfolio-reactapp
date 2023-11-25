import React from 'react';

interface WelcomeProps {
  companyName: string;
}

const WelcomePage: React.FC<WelcomeProps> = ({ companyName }) => (
  <div className="welcome-container bg-gray-100">
    <h1>Welcome to {companyName}</h1>
    <p>Coming Soon!</p>
    <p>I will share my activity about ride, code, and music</p>
  </div>
);

const App: React.FC = () => {
  const companyName = "Dunia Tipu Tipu"; // Change this to your actual company name

  return (
    <>
        <div>
        <nav className="bg-gray-200 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-semibold">
                mee
                </a>
                <ul className="flex space-x-6">
                <li>
                    <a href="/login" className="hover:text-blue-500">
                    Login
                    </a>
                </li>
                </ul>
            </div>
        </nav>
        <section>
            <WelcomePage companyName={companyName} />
        </section>
        </div>
    </>
  );
};

export default App;
