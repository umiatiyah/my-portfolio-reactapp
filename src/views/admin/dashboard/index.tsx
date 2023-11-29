import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';
import Navbar from './components/navbar';

const AdminDashboardPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-1000 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
      }`}>
        <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <MainContent />
          </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
