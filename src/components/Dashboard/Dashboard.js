import React from 'react';

import AddNewProject from './AddNewProject';
import RecentProjects from './RecentProjects';

import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2 className='recent-title'>Recent Projects</h2>
      <AddNewProject />
      <RecentProjects />
    </div>
  );
};

export default Dashboard;
