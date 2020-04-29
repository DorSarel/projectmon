import React from 'react';
import ActivityList from '../ActivityList/ActivityList';

const ratio = [4, 3, 2];

const RecentActivities = ({ projects }) => {
  const recentActivitiesToRender = projects
    .map((project, i) => {
      return project.activities
        .slice(0, ratio[i])
        .map((activity) => ({ project_name: project.title, ...activity }));
    })
    .reduce((flatArray, arrayToFlat) => flatArray.concat(arrayToFlat), []);

  return (
    <>
      <h2 className='recent-title' style={{ marginTop: '2.5rem' }}>
        recent activities
      </h2>
      <ActivityList activities={recentActivitiesToRender} />
    </>
  );
};

export default RecentActivities;
