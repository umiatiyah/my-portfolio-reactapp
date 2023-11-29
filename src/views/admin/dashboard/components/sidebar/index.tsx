import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar p-4 h-screen w-64 transition-all duration-1000 fixed z-10 ${
        isOpen ? '' : '-translate-x-full'
      }`}>
      <h2>Dashboard Page</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/socialmedia">Social Media</Link>
        </li>
        <li>
          <Link to="/hobby">Hobby</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
