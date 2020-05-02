import React from 'react';
import './style.scss';

const ProjectCard = ({ project, layoutClass = '' }) => {
  return (
    <div className={`card project-card ${layoutClass}`}>
      <h3 className='project-card__title'>{project.title}</h3>
      <span className='project-card__date'>April 26, 2020</span>
      <p className='project-card__text'>{project.description}</p>
      <button className='btn project-card__btn'>details</button>
    </div>
  );
};

export default ProjectCard;
