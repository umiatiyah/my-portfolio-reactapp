import React from 'react';
import './navbar.css'

const username = localStorage.getItem('username');

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <>
        <nav className="admin-navbar py-4">
          <div className="container flex items-center">
            <div className="logo">
              <button
                className="text-white hover:text-gray-300 focus:outline-none text-2xl font-semibold"
                onClick={toggleSidebar}
              >
                mee
              </button>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
