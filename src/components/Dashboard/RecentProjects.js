import React from 'react';
import Project from '../Projects/Project';

const RecentProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
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
