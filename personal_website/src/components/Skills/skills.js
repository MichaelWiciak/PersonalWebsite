import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">About Me</span>
      <span className="skillDesc">
        I am a Graduate Software Engineer at Lloyds Banking Group with a
        First-Class MEng BSc in Computer Science from the University of Leeds.
        <br />
        <br />I have co-founded the platforms{" "}
        <a
          href="https://uni.TimetableX.com"
          target="_blank"
          rel="noopener noreferrer"
          className="introName"
        >
          uni.TimetableX.com
        </a>{" "}
        and
        <a
          href="https://SportsBooker.timetablex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="introName"
        >
          SportsBooker.timetablex.com
        </a>
        .
        <br />
        <br />
        From systems programming in Rust and C++ to full-stack TypeScript and
        Python, I build high-impact software that automates processes and
        improves daily workflows for hundreds of users.
        <br />
      </span>
    </section>
  );
};

export default Skills;
