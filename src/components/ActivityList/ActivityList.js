import React from 'react';
import './style.scss';

const ActivityList = ({ activities }) => {
  return (
    <ul className='card activity-list'>
      {activities.map((activity) => (
        <li className='activity-list__item' key={activity.id}>
          <p className='activity-list__name'>{activity.project_name}</p>
          <p className='activity-list__action'>{activity.action}</p>
          <p className='activity-list__date'>April 27, 2020</p>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
