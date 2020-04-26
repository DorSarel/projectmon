import React from 'react';
import Project from '../Projects/Project';

const recentProjects = [
  { id: 1, title: 'Project 1', description: 'bla bla' },
  { id: 2, title: 'Project 2', description: 'bla bla' },
  { id: 3, title: 'Project 3', description: 'bla bla' },
];

const RecentProjects = () => {
  return (
    <>
      {recentProjects.map((project) => (
        <Project
          key={project.id}
          project={project}
          layoutClass='dashboard__grid-item'
        />
      ))}
    </>
  );
};

export default RecentProjects;
