import React, { useContext } from 'react';

import { projectsContext } from '../../contexts/projectContext';
import AddNewProject from './AddNewProject';
import RecentProjects from './RecentProjects';
import RecentActivities from './RecentActivities';

import './style.scss';

const Dashboard = () => {
  const { projects } = useContext(projectsContext);
  return (
    <div className='dashboard'>
      <h2 className='recent-title'>Recent Projects</h2>
      <AddNewProject />
      <RecentProjects projects={projects} />
      <RecentActivities projects={projects} />
    </div>
  );
};

export default Dashboard;
