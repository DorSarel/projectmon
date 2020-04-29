import React, { createContext, useReducer } from 'react';
import projectsReducer, {
  initialState as projectsInitState,
} from './reducers/projectsReducer';

export const projectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectsReducer, projectsInitState);

  return (
    <projectsContext.Provider
      value={{
        projects: state.projects,
      }}
    >
      {children}
    </projectsContext.Provider>
  );
};
