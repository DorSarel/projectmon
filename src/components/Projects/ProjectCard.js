import React from 'react';
import './style.scss';

const ProjectCard = ({ project, layoutClass = '' }) => {
  return (
    <div className={`card project ${layoutClass}`}>
      <h3 className='project__title'>{project.title}</h3>
      <span className='project__date'>April 26, 2020</span>
      <p className='project__text'>{project.description}</p>
      <button className='btn project__btn'>details</button>
    </div>
  );
};

export default ProjectCard;
