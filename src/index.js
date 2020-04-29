import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ProjectsProvider } from './contexts/projectContext';

import './base.scss';

const app = (
  <ProjectsProvider>
    <Router>
      <App />
    </Router>
  </ProjectsProvider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);
