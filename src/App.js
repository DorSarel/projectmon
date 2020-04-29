import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './common.scss';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import NewProject from './components/Projects/NewProject';

function App() {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main-grid'>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/new-project' component={NewProject} />
          <Redirect to='/dashboard' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
