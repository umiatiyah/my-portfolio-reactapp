import React from 'react';
import DashboardCard from '../card';
import Header from '../header';

const MainContent = () => {
  return (
    <div className="flex-1 p-5">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <DashboardCard title="Social Media" content="20" />
        <DashboardCard title="Hobby" content="30" />
        <DashboardCard title="Experience" content="40" />
        <DashboardCard title="Education" content="50" />        
      </div>
    </div>
  );
};

export default MainContent;
