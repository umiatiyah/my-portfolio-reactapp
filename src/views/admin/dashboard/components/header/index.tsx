import React from 'react';

const username = localStorage.getItem('username');
const Header = () => {
  return (
    <div className="mb-2.5">
      <div className="bg-gray-100 p-5 rounded-md font-medium">
        <h1>Welcome {username}!</h1>
      </div>
    </div>
  );
};

export default Header;
