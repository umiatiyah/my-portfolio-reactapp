import React from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const username = localStorage.getItem('username');

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <>
        <nav className="admin-navbar p-4 flex justify-between items-center">
              <button
                className="text-white hover:text-gray-300 focus:outline-none text-2xl font-semibold"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className="text-white">{username}</div>
        </nav>
    </>
  );
};

export default Navbar;
