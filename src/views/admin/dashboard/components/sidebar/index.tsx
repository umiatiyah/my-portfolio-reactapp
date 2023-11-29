import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`bg-zinc-700 text-white p-4 h-screen w-64 transition-all duration-1000 fixed z-10 ${
        isOpen ? '' : '-translate-x-full'
      }`}>
      <div className=''>
        <img src="/au.svg" alt="Logo"
          className="max-w-40%"></img>
      </div>
      <ul>
        <li className='mb-2.5'>
          <a className="hover:text-sky-400" href="/dashboard">Dashboard</a>
        </li>
        <li className='mb-2.5'>
          <a className="hover:text-sky-400" href="/socialmedia">Social Media</a>
        </li>
        <li className='mb-2.5'>
          <a className="hover:text-sky-400" href="/hobby">Hobby</a>
        </li>
        <li className='mb-2.5'>
          <a className="hover:text-sky-400" href="/experience">Experience</a>
        </li>
        <li className='mb-2.5'>
          <a className="hover:text-sky-400" href="/education">Education</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
