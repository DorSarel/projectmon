import React from 'react';

import AddNewProject from './AddNewProject';
import RecentProjects from './RecentProjects';
import RecentActivities from './RecentActivities';

import './style.scss';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'bla bla',
    activities: [
      { id: 'a', action: 'add phase' },
      { id: 'b', action: 'edit phase' },
      { id: 'c', action: 'add task' },
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'bla bla',
    activities: [
      { id: 'd', action: 'add phase' },
      { id: 'e', action: 'edit phase' },
      { id: 'f', action: 'add task' },
    ],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'bla bla',
    activities: [
      { id: 'g', action: 'add phase' },
      { id: 'h', action: 'edit phase' },
      { id: 'i', action: 'add task' },
    ],
  },
];

const Dashboard = () => {
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
