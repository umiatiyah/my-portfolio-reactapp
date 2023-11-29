import React from 'react';
import './mainContent.css'
import DashboardCard from '../card';
import Header from '../header';

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <div className="grid-container">
        <DashboardCard title="Social Media" content="20" />
        <DashboardCard title="Hobby" content="30" />
        <DashboardCard title="Experience" content="40" />
        <DashboardCard title="Education" content="50" />        
      </div>
    </div>
  );
};

export default MainContent;
