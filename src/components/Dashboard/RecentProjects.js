import React from 'react';
import ProjectCard from '../Projects/ProjectCard';

const RecentProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          layoutClass='dashboard__grid-item'
        />
      ))}
    </>
  );
};

export default RecentProjects;
