import * as types from '../actions/actionTypes';

export const initialState = {
  projects: [
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
  ],
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
