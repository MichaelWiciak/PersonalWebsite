import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Teams from "./components/Teams/teams";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const particles = window.innerWidth > 768 ? 100 : 50;
    // different shades of white for snowflakes
    const colors = ["#ffffff", "#f2f2f2", "#d9d9d9", "#bfbfbf", "#a6a6a6"];
    // different shapes for snowflakes
    const shapes = ["50%", "0% 0%", "0% 50%", "50% 0%"];

    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius =
        shapes[Math.floor(Math.random() * shapes.length)];
      document.body.appendChild(particle);
    }

    return () => {
      document
        .querySelectorAll(".particle")
        .forEach((particle) => particle.remove());
    };
  }, []);
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
