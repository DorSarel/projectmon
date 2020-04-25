import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main-grid'>hello, world</main>
    </div>
  );
}

export default App;
