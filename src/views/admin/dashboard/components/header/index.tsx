import React from 'react';
import './header.css'

const username = localStorage.getItem('username');
const Header = () => {
  return (
    <div className="header">
      <div className="card-header bg-gray-100">
        <h1>Welcome {username}!</h1>
      </div>
    </div>
  );
};

export default Header;
