import React, { Component }  from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />

    </div>
  );  
}

export default App;
