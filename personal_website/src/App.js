import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Teams from "./components/Teams/teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      {/* <Teams /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
