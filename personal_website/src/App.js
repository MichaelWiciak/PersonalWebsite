import React, { Component }  from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />

    </div>
  );  
}

export default App;
